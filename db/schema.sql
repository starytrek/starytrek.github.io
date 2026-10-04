-- Shared family results. Names are labels, not authenticated identities.
-- All study data is intentionally readable without signing in.
create table public.study_tests (
 id text primary key, title text not null, subject text not null,
 grade text not null, level text not null default '', path text not null,
 questions jsonb not null check (jsonb_typeof(questions)='array' and jsonb_array_length(questions) between 1 and 100)
);
create table public.study_attempts (
 id uuid primary key, learner text not null check (learner in ('Gaba','Iga','Krzysiek','Aga')),
 test_id text not null references public.study_tests(id), started_at timestamptz not null default now()
);
create index study_attempts_learner_date_idx on public.study_attempts(learner,started_at desc);
create index study_attempts_test_idx on public.study_attempts(test_id);
create table public.study_answers (
 attempt_id uuid not null references public.study_attempts(id) on delete cascade,
 question_no integer not null check(question_no between 1 and 100),
 selected integer not null check(selected between -1 and 3),
 is_correct boolean not null default false, answered_at timestamptz not null default now(),
 primary key(attempt_id,question_no)
);
create table public.study_completions (
 attempt_id uuid primary key references public.study_attempts(id) on delete cascade,
 finished_at timestamptz not null default now()
);
alter table public.study_tests enable row level security;
alter table public.study_attempts enable row level security;
alter table public.study_answers enable row level security;
alter table public.study_completions enable row level security;
create policy study_tests_read on public.study_tests for select to anon,authenticated using(true);
create policy study_attempts_read on public.study_attempts for select to anon,authenticated using(true);
create policy study_attempts_insert on public.study_attempts for insert to anon,authenticated with check(true);
create policy study_answers_read on public.study_answers for select to anon,authenticated using(true);
create policy study_answers_insert on public.study_answers for insert to anon,authenticated with check(true);
create policy study_completions_read on public.study_completions for select to anon,authenticated using(true);
create policy study_completions_insert on public.study_completions for insert to anon,authenticated with check(true);
revoke all on public.study_tests,public.study_attempts,public.study_answers,public.study_completions from anon,authenticated;
grant select on public.study_tests,public.study_attempts,public.study_answers,public.study_completions to anon,authenticated;
grant insert(id,learner,test_id) on public.study_attempts to anon,authenticated;
grant insert(attempt_id,question_no,selected) on public.study_answers to anon,authenticated;
grant insert(attempt_id) on public.study_completions to anon,authenticated;

create function public.study_stamp_attempt() returns trigger language plpgsql security invoker set search_path='' as $$
begin
 new.started_at:=now();
 -- A bound on public submissions, independent of the browser UI.
 if (select count(*) from public.study_attempts where learner=new.learner and started_at>now()-interval '1 hour')>=100 then
  raise exception 'Zbyt wiele prób. Spróbuj później.';
 end if;
 return new;
end $$;
create trigger study_attempt_stamp before insert on public.study_attempts for each row execute function public.study_stamp_attempt();
create function public.study_validate_answer() returns trigger language plpgsql security invoker set search_path='' as $$
declare question jsonb;
begin
 if exists(select 1 from public.study_completions where attempt_id=new.attempt_id) then
  -- A duplicate retry after completion is harmless; a new answer is forbidden.
  if exists(select 1 from public.study_answers where attempt_id=new.attempt_id and question_no=new.question_no) then return new; end if;
  raise exception 'Ta próba jest już zakończona.';
 end if;
 select t.questions->(new.question_no-1) into question from public.study_attempts a join public.study_tests t on t.id=a.test_id where a.id=new.attempt_id;
 if question is null then raise exception 'Nieprawidłowe zadanie lub próba.'; end if;
 new.is_correct:=new.selected=(question->>'correct')::integer;
 new.answered_at:=now();
 return new;
end $$;
create trigger study_answer_validate before insert on public.study_answers for each row execute function public.study_validate_answer();
create function public.study_validate_completion() returns trigger language plpgsql security invoker set search_path='' as $$
declare expected integer; actual integer;
begin
 select jsonb_array_length(t.questions) into expected from public.study_attempts a join public.study_tests t on t.id=a.test_id where a.id=new.attempt_id;
 select count(*) into actual from public.study_answers where attempt_id=new.attempt_id;
 if expected is null or actual<>expected then raise exception 'Najpierw zapisz wszystkie odpowiedzi.'; end if;
 new.finished_at:=now();return new;
end $$;
create trigger study_completion_validate before insert on public.study_completions for each row execute function public.study_validate_completion();
revoke execute on function public.study_stamp_attempt(),public.study_validate_answer(),public.study_validate_completion() from public,anon,authenticated;

create view public.study_results with(security_invoker=true) as
select a.id,a.learner,a.test_id,t.title,t.subject,t.grade,t.level,t.path,a.started_at,c.finished_at,
 jsonb_array_length(t.questions) as total,
 count(s.question_no) filter(where s.selected>=0)::integer as answered,
 count(s.question_no) filter(where s.is_correct)::integer as correct,
 count(s.question_no) filter(where not s.is_correct and s.selected>=0)::integer as wrong,
 count(s.question_no) filter(where s.selected=-1)::integer as skipped,
 round(100.0*count(s.question_no) filter(where s.is_correct)/jsonb_array_length(t.questions))::integer as percent,
 coalesce(jsonb_agg(jsonb_build_object('no',s.question_no,'selected',s.selected,'correct',s.is_correct,
  'question',t.questions->(s.question_no-1)->>'question','topic',t.questions->(s.question_no-1)->>'topic',
  'options',t.questions->(s.question_no-1)->'options','expected',t.questions->(s.question_no-1)->'correct',
  'explanation',t.questions->(s.question_no-1)->>'explanation') order by s.question_no) filter(where s.question_no is not null),'[]'::jsonb) as answers
from public.study_attempts a join public.study_tests t on t.id=a.test_id
left join public.study_answers s on s.attempt_id=a.id left join public.study_completions c on c.attempt_id=a.id
group by a.id,t.id,c.finished_at;

create view public.study_achievements with(security_invoker=true) as
with completed as (select * from public.study_results where finished_at is not null),
 ranked as (select learner,test_id,finished_at,row_number() over(partition by learner,test_id order by finished_at,id) as n from completed),
 correct_ranked as (select a.learner,s.answered_at,row_number() over(partition by a.learner order by s.answered_at,a.id,s.question_no) as n from public.study_answers s join public.study_attempts a on a.id=s.attempt_id where s.is_correct)
select learner,'first_test'::text as code,'Pierwszy ukończony test'::text as title,min(finished_at) as earned_at from completed group by learner
union all select learner,'score80','Co najmniej 80%',min(finished_at) from completed where percent>=80 group by learner
union all select learner,'perfect','Test bez błędu',min(finished_at) from completed where percent=100 group by learner
union all select learner,'three_attempts','Trzy próby tego samego testu',min(finished_at) from ranked where n=3 group by learner
union all select learner,'hundred_correct','100 poprawnych odpowiedzi',min(answered_at) from correct_ranked where n=100 group by learner;
grant select on public.study_results,public.study_achievements to anon,authenticated;
notify pgrst,'reload schema';
