'use strict';
// Transcribed from the supplied word list, pp. 74–75. Section labels follow the book.
const GROUPS={A:'5A · Dom i rzeczy',B:'5B · Obowiązki domowe',C:'5C · Życie codzienne',D:'5D · Codzienne czynności',E:'5E · Trening',F:'5F · Dieta i styl życia',G:'5G · Zdrowie i wiadomości'};
const RAW={A:`advantage|zaleta, dobra strona
afford|pozwolić sobie na coś (finansowo)
alone|sam, samotnie
bedroom|sypialnia
bin|kosz
bowl|miseczka
carpet|dywan
cup of tea|filiżanka herbaty
curtain|zasłona
decorations|dekoracje
disciplined|zdyscyplinowany
do the dishes|myć naczynia
donate|dać, podarować
drawer|szuflada
finish|skończyć
fixed|umocowany na stałe
flat|mieszkanie
furniture|meble
get rid of|pozbyć się
hanger|wieszak
hold onto|trzymać się czegoś, zatrzymać coś
lend|pożyczać komuś
lie around|walać się, poniewierać się
meal|posiłek
mess|bałagan
messy|nieporządny
minimalism|minimalizm
minimalist|minimalista
mug|kubek
multipurpose|wielofunkcyjny
neat|czysty, schludny, staranny
organised|zorganizowany
radiator|grzejnik, kaloryfer
rubbish|śmieci, szpargały
rug|dywanik
sentimental|sentymentalny
sofa|sofa, kanapa
stairs|schody
suit|pasować (o stylu, kolorze)
surface|powierzchnia
thirsty|spragniony
throw out|wyrzucać
tidy|uporządkowany
tidy up|sprzątać, porządkować
tiny|malutki, niewielki
unnecessary|niepotrzebny
wardrobe|szafa na ubrania
windowsill|parapet`,B:`air the house|przewietrzyć mieszkanie
appliance|urządzenie, przyrząd
clean the floor|myć podłogę
mop the floor|myć podłogę mopem
sweep the floor|zamiatać podłogę
cook|gotować
cooker|kuchenka
do the cleaning|sprzątać
do the cooking|zajmować się gotowaniem
do the dusting|wycierać kurze
do the ironing|prasować (wykonywać tę pracę)
do the washing-up|zmywać naczynia (wykonywać tę pracę)
do the housework|wykonywać prace domowe
do the chores|wykonywać obowiązki domowe
do the windows|myć okna
dry the dishes|suszyć, wycierać naczynia
dust|kurz; ścierać kurze
empty the dishwasher|opróżniać zmywarkę
put on the dishwasher|nastawiać zmywarkę
freeze|zamrażać
freezer|zamrażarka
fridge|lodówka
get dressed|ubierać się
heat up food|podgrzewać jedzenie
household chores|obowiązki, prace domowe
iron|żelazko; prasować
kettle|czajnik
make a meal|przygotowywać posiłek
make a sandwich|robić kanapkę
make a cup of tea|przygotowywać filiżankę herbaty
make your bed|ścielić łóżko
make your breakfast|robić śniadanie
microwave oven|mikrofalówka
oven|piekarnik
password|hasło
pocket money|kieszonkowe
polish|wypastować, wypolerować
set the table|nakryć do stołu
clear the table|sprzątnąć ze stołu
take out the rubbish|wynosić śmieci
vacuum|odkurzać odkurzaczem
vacuum cleaner|odkurzacz
walk the dog|wyprowadzać psa
washing machine|pralka
wash up|zmywać naczynia
wi-fi|wi-fi, sieć bezprzewodowa
wipe the cooker|wycierać kuchenkę
wipe the surfaces|wycierać powierzchnie`,C:`do a lot of homework|mieć dużo pracy domowej
downside|minus, wada
dubstep|dubstep (muzyka)
freedom|wolność
fresher|student pierwszego roku
go to bed early|kłaść się wcześnie spać
guide|przewodnik
hall of residence|akademik
lazy|leniwy
loud|głośny
magically|magicznie
party|imprezować, bawić się
wear make-up|malować się, nosić makijaż
wear school uniform|nosić mundurek szkolny`,D:`change the channel|zmieniać kanał
clean the room|sprzątać pokój
hairdryer|suszarka do włosów
have fun|bawić się
help yourself to|częstować się czymś
leave a mess|zostawić bałagan
make plans|robić plany
noisy|hałaśliwy
put out|wyjąć, wyłożyć
relax|relaksować się
shower|prysznic
sleep a lot|dużo spać
take somebody out|zaprosić, zabrać kogoś gdzieś
tired|zmęczony
toothpaste|pasta do zębów
towel|ręcznik`,E:`abdominal|brzuszny
aerobics|aerobik
available|dostępny
breathe|oddychać
burn off calories|spalać kalorie
caster|rolka na spodzie mebli
dumbbell|hantel
equipment|sprzęt
essential|podstawowy, nieodzowny
get fit|wyrobić sobie kondycję
gym|siłownia
heart|serce
jogging|bieganie, jogging
lung|płuco
personal trainer|trener osobisty
podcast|podcast, audycja
press-up|pompka (ćwiczenie)
pull-up|podciąganie się na drążku
pull-up bar|drążek do podciągania się
quid|funt (potoczna nazwa waluty)
resistance band|taśma elastyczna do ćwiczeń
roll up|zwijać
set up|założyć, uruchomić (np. firmę)
sit-up|brzuszek (ćwiczenie)
spare|zapasowy
stretching|rozciąganie
treadmill|bieżnia stacjonarna
warm up|rozgrzewać się
weight training|ćwiczenia siłowe
work out|trenować
yoga mat|mata do jogi`,F:`community|wspólnota
consume|konsumować, jeść
dairy products|nabiał, produkty mleczne
develop|rozwijać
diet|dieta
explorer|badacz, odkrywca
fast food|żywność typu fast food
fries|frytki
full up|pełen, najedzony
generation|pokolenie
get exercise|ćwiczyć, zażywać ruchu
go on a diet|przechodzić na dietę
grandchild|wnuk, wnuczka
grandparent|dziadek, babcia
habit|zwyczaj, nawyk
inhabitant|mieszkaniec
lifestyle|styl życia
low in sugar|z niską zawartością cukru
neighbour|sąsiad
optimistic|optymistyczny
outdoors|na zewnątrz
popcorn|prażona kukurydza
protein|białko
respect|szacunek; darzyć szacunkiem
respected|szanowany
sleep well|dobrze spać
society|społeczeństwo
soft drink|napój bezalkoholowy
stay fit|utrzymywać dobrą kondycję
switch off|wyłączać
village|wioska
vitamin|witamina
yoghurt|jogurt
zone|strefa`,G:`ambulance|karetka pogotowia
appointment|spotkanie, umówiona wizyta
arrival|przyjazd, przylot, przybycie
asap|tak szybko, jak to możliwe (skrót)
bullet point|punkt wypunktowania
cat food|jedzenie dla kota
choc|czekoladka
cupboard|szafka
darling|kochanie (zwrot)
departure|odjazd, odlot, odejście
dog food|jedzenie dla psa
emoticon|emotikon
feed|karmić
heart attack|atak serca
indigestion|niestrawność
look after|opiekować się
medicine|lekarstwo
message|wiadomość
pain|ból
pick somebody up|przyjechać po kogoś, odebrać kogoś
pill|pigułka
polite|grzeczny, uprzejmy
post-it note|samoprzylepna karteczka na notatki
prescription|recepta
result|wynik, rezultat
stomach|brzuch, żołądek
symptom|objaw
temperature|temperatura
test|badanie
tin opener|otwieracz do konserw
top|górny, wierzchni
water the plants|podlewać rośliny`};
const WORDS=Object.entries(RAW).flatMap(([group,rows])=>rows.split('\n').map((row,i)=>{const [en,pl]=row.split('|');return {id:group+i,group,en,pl}}));
const CONTEXT=[
['E','Before exercising, you should ___ to prepare your muscles.','warm up',['switch off','roll up','put out'],'Warm up oznacza rozgrzewać się.'],
['A','I cannot ___ a new sofa. It is too expensive.','afford',['lend','donate','consume'],'Afford: móc sobie na coś pozwolić finansowo.'],
['B','After getting up, I always ___ my bed.','make',['do','set','take'],'Połączenie make your bed oznacza ścielić łóżko.'],
['B','It is your turn to ___ the washing-up.','do',['make','set','take'],'Z nazwami prac domowych używamy do: do the washing-up.'],
['B','Dinner is ready. Can you ___ the table?','set',['do','make','freeze'],'Set the table: nakryć do stołu.'],
['A','You never use these old things. Get ___ of them.','rid',['out','up','off'],'Get rid of: pozbyć się.'],
['A','Can you ___ me your book until tomorrow?','lend',['afford','donate','suit'],'Lend: pożyczyć coś komuś; borrow: pożyczyć coś od kogoś.'],
['E','She lifts a ___ in each hand during weight training.','dumbbell',['treadmill','yoga mat','pull-up bar'],'Dumbbell to hantel.'],
['E','A ___ is an exercise in which you raise your upper body from a lying position.','sit-up',['press-up','pull-up','podcast'],'Sit-up to brzuszek, nie przysiad.'],
['F','Milk, cheese and yoghurt are ___.','dairy products',['soft drinks','fries','vitamins'],'Dairy products to nabiał.'],
['F','This drink has very little sugar. It is ___.','low in sugar',['full up','outdoors','respected'],'Low in sugar: z niską zawartością cukru.'],
['F','No more food, thanks. I am ___.','full up',['optimistic','low in sugar','outdoors'],'Full up: najedzony.'],
['G','The doctor gave me a ___ for some medicine.','prescription',['departure','bullet point','result'],'Prescription to recepta.'],
['G','Please ___ the plants while I am away.','water',['feed','polish','freeze'],'Water the plants: podlewać rośliny.'],
['G','Can you ___ my cat while I am on holiday?','look after',['pick up','switch off','roll up'],'Look after: opiekować się.'],
['G','The train leaves at 7. The ___ time is on the ticket.','departure',['arrival','appointment','symptom'],'Departure to odjazd; arrival to przyjazd.'],
['C','A first-year university student is called a ___.','fresher',['guide','neighbour','grandchild'],'Fresher to student pierwszego roku.'],
['D','You look exhausted. You must be very ___.','tired',['thirsty','noisy','polite'],'Tired: zmęczony; thirsty: spragniony.'],
['G','I will ___ you up from the station at six.','pick',['take','put','set'],'Pick somebody up: przyjechać po kogoś, odebrać kogoś.'],
['E','They want to ___ up their own business.','set',['roll','warm','pull'],'Set up a business: założyć firmę.'],
['E','To put the yoga mat away, ___ it up.','roll',['warm','set','pick'],'Roll up: zwinąć.'],
['B','Use a ___ to boil water for tea.','kettle',['freezer','cooker hood','washing machine'],'Kettle to czajnik.'],
['F','Regular exercise helps you ___ fit.','stay',['do','make','take'],'Stay fit: utrzymywać dobrą kondycję.'],
['D','Please help yourself ___ some cake.','to',['for','at','on'],'Help yourself to: poczęstuj się.'],
['C','Pupils at this school have to ___ school uniform.','wear',['carry','take','do'],'Wear school uniform: nosić mundurek szkolny.'],
['G','ASAP means ___.','as soon as possible',['as slow as possible','at seven after practice','a short appointment plan'],'ASAP = as soon as possible, czyli tak szybko, jak to możliwe.']
].map(([group,q,answer,wrong,why],i)=>({id:'ctx'+i,group,q,answer,wrong,why}));
