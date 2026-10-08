# Akademia Zarodników — planszowa przygoda

Publiczny adres pozostaje `/gry/akademia-zarodnikow/`. Statyczna gra 2D bez kont, bibliotek zewnętrznych i płatnego zaplecza. Ilustracja `assets/krainy.webp` z poprzedniej wersji została zachowana; obiekty, pionek i schematy są własnymi SVG.

## Zapis i przywracanie

Punkt przywracania przed przebudową: commit repozytorium `ebd90cb6c11c0c57487c2c4ca001548494e95652`.

Klucz `naukogramy.myko.v1` pozostaje bez zmian. Pierwsza migracja dodaje wersję 2, pozycje i zawieszone misje; zapisuje niezmienioną kopię wcześniejszych danych jako `naukogramy.myko.v1.backup-before-board`. Nie przelicza ani nie usuwa starych punktów, historii, wykonanych misji i odpowiedzi. Starsza rozpoczęta misja kończy swój dotychczasowy zestaw. Pierwotne 54 identyfikatory i treści są zachowane; 18 dodatkowych pytań ma osobne ID `myko-extra-*`.

Punkty naliczane są jako poprawa najlepszego wyniku pytania: 100 samodzielnie, 60 z tropem, 20 po błędzie. Ponowne sprawdzenie rozwiązanej odpowiedzi i powtórzenie łatwej misji nie mnoży punktów. Zapis obejmuje rozwiązanie przed kliknięciem „Dalej”, wybór odpowiedzi i dwustopniowe tropy. Zmiana misji zawiesza poprzednią sesję. Zmiana krainy zatrzymuje ruch i zamyka panel.

## Mechanika

Sześć krain, 18 przygód, 72 pytania, sześć typów zadań. Trzy miejsca w każdej krainie; ostatnie jest finałem wątku. Pionek porusza się po jednym wspólnym szlaku SVG, mierzonym długością łuku. Kolejne polecenie zastępuje cel z aktualnej pozycji, bez nowej pętli animacji. Przyspieszenie i hamowanie: smoothstep. „Pomiń spacer” skraca pozostałe przejście do 240 ms, zachowując drogę. Ograniczenie animacji wyłącza podskoki i dekoracje, a spacer trwa 240 ms.

Dotyk i mysz używają tego samego mechanizmu pointer. Klawiatura: strzałki/WASD przesuwają pionek wzdłuż szlaku, E idzie do mieszkańca. Zadania przez dotknięcie, także sortowanie i kolejność; nie ma operacji wymagających przeciągania. Dźwięk domyślnie wyłączony, synteza przez Web Audio dopiero po interakcji.

Każde ukończone miejsce ma własny stan graficzny i kartę w Atlasie. Zielona energia: koło młyna, ogród, światło latarni. Pozostałe krainy mają własne palety, mieszkańców, ilustracje i odkrycia.

## Weryfikacja

Uruchom z katalogu repozytorium:

```sh
node tests/myko-engine.cjs
node tests/myko-app.cjs
```

Test silnika sprawdza migrację, zachowanie 54 pytań, sześć typów odpowiedzi, punktację, błędy, tropy i ciągłość ścieżki. Test aplikacji używa lekkiego modelu DOM; sprawdza pełne przejście 18 misji, renderery, wielokrotne kliknięcia, zawieszone sesje i anulowanie ruchu. Nie zastępuje wizualnej kontroli w przeglądarce.

`qa/` to przeglądarkowy podgląd rzeczywistej gry w ramkach 320×640, 360×740, 390×844 i 1080×720. Ładuje wyłącznie osobny klucz `.qa`, może przygotować starszy zapis i odblokowane krainy. Nie zapisuje aktywności do kalendarza nauki. Ten podgląd nie emuluje sprzętu ani systemu Android.

Materiały sprawdzone w ZPE: fotosynteza, oddychanie, grzyby i porosty; odnośniki w Atlasie. Oddychanie roślin zachodzi w dzień i w nocy; fotosynteza wymaga światła. Świat jest fantastyczny, schematy biologiczne są osobno oznaczone.
