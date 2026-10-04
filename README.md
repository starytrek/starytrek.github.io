# Starytrek · Nauka

Portal z testami interaktywnymi: biologia, chemia i geografia.

Adres: https://starytrek.github.io/

Nowy materiał: dodaj HTML lub PDF do `testy/<przedmiot>/` i kartę w `index.html`. Filtry i wyszukiwanie obejmują dodane karty automatycznie.

Publikacja: Settings → Pages → Deploy from a branch → main → / (root).

## Wyniki i osiągnięcia

`wyniki.html` pokazuje wspólną historię dla czterech imion, bez logowania. Imię jest podpisem wyniku, nie zweryfikowaną tożsamością. Dane są publiczne. Odpowiedzi zapisują się po sprawdzeniu, ukończone testy po podsumowaniu. Liczenie poprawności odbywa się w bazie według wersjonowanego katalogu pytań. Klient nie może nadpisywać ani usuwać odpowiedzi.

Supabase: istniejący projekt geosea-leaderboard, osobne tabele `study_*`. `db/schema.sql`, `db/catalog.sql` i `db/organizmy5.sql` dokumentują zastosowane migracje; nie uruchamiaj ich ponownie na istniejącej bazie. Klucz w `assets/study.js` jest publicznym kluczem publishable; żadnego klucza administracyjnego nie ma w stronie.

Osiągnięcia są widokiem wyliczanym z zapisanych odpowiedzi: pierwszy test, 80%, 100%, trzy próby tego samego testu i 100 poprawnych odpowiedzi. Analiza słabszych tematów używa ostatnich trzech ukończonych prób dla danego testu. Strona nie generuje nowych zadań i nie wywołuje modeli AI.

Przy braku połączenia odpowiedzi czekają lokalnie na ponowny zapis; reset archiwizuje niewysłaną próbę w kolejce. Osoba jest blokowana po pierwszej odpowiedzi i można ją zmienić po resecie.

### Nowy test

Dodaj nowy identyfikator wersji w katalogu `study_tests`, nie zmieniaj pytań istniejącej wersji po zapisaniu wyników. Zintegruj `Study.attach` z przyciskami odpowiedzi, podsumowania i resetu. Dodaj kartę w `index.html`.

## Matematyka — klasa 8
Jeden temat „Liczby i działania” zawiera trzy stałe zestawy po 20 pytań: łatwy, średni i trudny. Poziom jest wybierany przez parametr `poziom`; każdy zestaw ma osobny identyfikator wyników. Katalog bazy: `db/math-numbers.sql`. Zadania są autorskie. Trudność materiałów jest niezależna od zakresu podstawowego/rozszerzonego w liceum.

## Planety mnożenia
`gry/planety-mnozenie.html`: gra dla 5 klasy, 10 losowanych działań 2–10, samolot w centrum, obrót i strzał do planety z poprawnym wynikiem. Dotknięcie lub przeciąganie po planszy ustawia kierunek statku; krótkie tapnięcie oddaje strzał. Mysz działa tak samo, a strzałki/A/D i spacja są dostępne dodatkowo. Trzy osłony, pauza i podsumowanie działań do powtórki. Najlepszy wynik zapisuje się lokalnie dla wybranego imienia; gra nie zapisuje prób w bazie testów.

### Poziomy i analiza gry
Gra ma poziomy 1–3 i domyślny tryb Auto. Poziom 1: czynniki 2,3,4,5,10, trzy planety i wolniejszy ruch; 2: cała tabliczka 2–10 i cztery planety; 3: czynniki 6–10 i pięć szybszych planet. Cztery kolejne bezbłędne działania na tym samym poziomie ze średnim aktywnym czasem do 6 s podnoszą sugerowany poziom; błędy w dwóch z trzech ostatnich działań go obniżają. Ręczny wybór nie zmienia trudności w trakcie rundy. Historia ostatnich 300 działań, czas gry, błędne trafienia i sugerowany poziom zapisują się lokalnie pod kluczem `starytrek.planets.progress.v1.<imię>`. Powtórki częściej wybierają słabsze działania pasujące do poziomu. Każde ukończone lub nieudane działanie zapisuje się raz. Czas nie obejmuje pauzy; obejmuje celowanie. Nie ma odtwarzania statystyk z wcześniejszych najlepszych wyników ani synchronizacji między urządzeniami.
