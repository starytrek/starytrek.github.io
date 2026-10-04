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
