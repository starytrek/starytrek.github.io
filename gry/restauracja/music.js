// Full instrumental recordings by Kevin MacLeod, CC BY 4.0.
const CLUB_TRACKS=[
 {name:'Jazz Brunch',mood:'Jazz · nocny stolik'},
 {name:'Intractable',mood:'Soul & light funk'},
 {name:'Cold Funk',mood:'Funk · mocny groove'},
 {name:'Chillin Hard',mood:'Chill hip-hop'},
 {name:'Griphop',mood:'Hip-hop · ciężki beat'}
];
const musicButton=document.getElementById('music'),trackPicker=document.getElementById('music-track'),clubPlayer=document.getElementById('club-player'),musicStatus=document.getElementById('music-status');
let clubMusicOn=false,clubPlayRequest=0;
clubPlayer.volume=.32;
CLUB_TRACKS.forEach((t,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${t.mood} — ${t.name}`;trackPicker.append(o);});
try{const chosen=Number(localStorage.getItem('naukogramy.restaurant.track'));if(Number.isInteger(chosen)&&chosen>=0&&chosen<5)trackPicker.value=String(chosen);}catch{}
function clubTrack(){return CLUB_TRACKS[Number(trackPicker.value)||0];}
function clubSource(){const t=clubTrack();clubPlayer.src='https://incompetech.com/music/royalty-free/mp3-royaltyfree/'+encodeURIComponent(t.name)+'.mp3';}
function clubState(on){clubMusicOn=on;document.body.classList.toggle('music-on',on);musicButton.textContent=on?'Ⅱ Pauza':'♫ Graj';musicButton.setAttribute('aria-pressed',String(on));}
function stopClubMusic(){++clubPlayRequest;clubPlayer.pause();clubState(false);musicStatus.textContent='';}
async function playClubMusic(){const request=++clubPlayRequest;musicStatus.textContent='Ładowanie…';try{await clubPlayer.play();if(request!==clubPlayRequest)return;clubState(true);musicStatus.textContent='';}catch{if(request!==clubPlayRequest)return;clubState(false);musicStatus.textContent='Nie udało się odtworzyć. Wybierz inny utwór lub spróbuj ponownie.';}}
clubSource();
musicButton.onclick=()=>clubMusicOn?stopClubMusic():playClubMusic();
trackPicker.onchange=()=>{const resume=clubMusicOn;stopClubMusic();clubSource();try{localStorage.setItem('naukogramy.restaurant.track',trackPicker.value);}catch{}if(resume)playClubMusic();};
clubPlayer.addEventListener('error',()=>{if(clubMusicOn){stopClubMusic();musicStatus.textContent='Nagranie jest niedostępne. Wybierz inny utwór.';}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&clubMusicOn)stopClubMusic();});
