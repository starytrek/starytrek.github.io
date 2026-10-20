const QUESTIONS=[
  {
    "id": 1,
    "topic": "Dziedziczność",
    "q": "Mama ma bliznę po operacji i naturalnie brązowe oczy. Który wniosek jest uzasadniony?",
    "options": [
      "Dziecko może odziedziczyć predyspozycje do koloru oczu, ale nie samą bliznę.",
      "Dziecko może odziedziczyć bliznę, ale nie kolor oczu.",
      "Obie cechy są dziedziczone w taki sam sposób.",
      "Żadna z tych cech nie ma związku z dziedziczeniem."
    ],
    "answer": "Dziecko może odziedziczyć predyspozycje do koloru oczu, ale nie samą bliznę.",
    "why": "Blizna jest cechą nabytą. Na naturalny kolor oczu wpływają odziedziczone geny; nie oznacza to, że każde dziecko będzie miało oczy tego samego koloru co mama.",
    "level": "hard"
  },
  {
    "id": 2,
    "topic": "Zmienność",
    "q": "Bliźnięta jednojajowe mają niemal identyczne DNA. Jedno częściej przebywa na słońcu i jest bardziej opalone. Co wyjaśnia różnicę?",
    "options": [
      "Wpływ środowiska na cechę organizmu.",
      "Przynależność bliźniąt do różnych gatunków.",
      "Dziedziczenie opalenizny po różnych rodzicach.",
      "Zmiana liczby chromosomów wskutek opalania."
    ],
    "answer": "Wpływ środowiska na cechę organizmu.",
    "why": "Zmienność może wynikać także z wpływu środowiska. Opalenizna powstaje pod wpływem promieniowania słonecznego i nie jest dziedziczona jako nabyta opalenizna rodzica.",
    "level": "hard"
  },
  {
    "id": 3,
    "topic": "Zmienność",
    "q": "Która obserwacja pokazuje zmienność wewnątrz jednego gatunku?",
    "options": [
      "Uczniowie tej samej klasy mają różny naturalny kolor oczu.",
      "Pies ma inne kończyny niż człowiek.",
      "Żyto i pszenica mają różne kłosy.",
      "Komórka roślinna różni się od komórki zwierzęcej."
    ],
    "answer": "Uczniowie tej samej klasy mają różny naturalny kolor oczu.",
    "why": "Zmienność to różnice między osobnikami tego samego gatunku. Pozostałe przykłady porównują różne gatunki lub typy komórek.",
    "level": "hard"
  },
  {
    "id": 4,
    "topic": "Cechy gatunkowe",
    "q": "Która para najtrafniej zestawia cechę gatunkową człowieka z cechą indywidualną?",
    "options": [
      "Dwunożność — naturalny kolor tęczówek.",
      "Naturalny kolor tęczówek — dwunożność.",
      "Blizna na dłoni — wyprostowana postawa.",
      "Umiejętność czytania — przynależność do Homo sapiens."
    ],
    "answer": "Dwunożność — naturalny kolor tęczówek.",
    "why": "Dwunożność jest typową cechą gatunkową człowieka. Kolor tęczówek różnicuje osobniki; czytania uczymy się podczas życia.",
    "level": "hard"
  },
  {
    "id": 5,
    "topic": "Badanie zmienności",
    "q": "W klasie 24-osobowej 15 osób ma badaną cechę, a 9 jej nie ma. Który wniosek wynika wyłącznie z tych danych?",
    "options": [
      "Badana cecha występuje u większości uczniów tej klasy.",
      "Badana cecha występuje u większości wszystkich ludzi.",
      "Badana cecha musi być niedziedziczna.",
      "Każde dziecko osoby z tą cechą też będzie ją miało."
    ],
    "answer": "Badana cecha występuje u większości uczniów tej klasy.",
    "why": "15 jest większe niż połowa z 24. Wynik jednej klasy nie wystarcza do wnioskowania o całej ludzkości ani o sposobie dziedziczenia cechy.",
    "level": "hard"
  },
  {
    "id": 6,
    "topic": "Zastosowania genetyki",
    "q": "Hodowca przez wiele pokoleń dopuszcza do rozrodu krowy dające dużo mleka. Na czym opiera tę metodę?",
    "options": [
      "Na przekazywaniu potomstwu dziedzicznych predyspozycji rodziców.",
      "Na dziedziczeniu przez cielęta mleka wypitego przez matkę.",
      "Na zamianie cech nabytych w DNA przez samo dojenie.",
      "Na usunięciu wszystkich różnic między osobnikami."
    ],
    "answer": "Na przekazywaniu potomstwu dziedzicznych predyspozycji rodziców.",
    "why": "Dobór osobników do rozrodu wykorzystuje dziedziczenie predyspozycji. Na ilość mleka wpływają też warunki utrzymania i żywienia.",
    "level": "hard"
  },
  {
    "id": 7,
    "topic": "Zastosowania genetyki",
    "q": "Na miejscu przestępstwa znaleziono ślad śliny. Dlaczego może posłużyć do analizy DNA?",
    "options": [
      "Może zawierać komórki, z których uzyskuje się DNA.",
      "Każda cząsteczka wody zawiera pełny kariotyp.",
      "Ślina jest zbudowana wyłącznie z chromosomów.",
      "DNA można uzyskać tylko z linii papilarnych."
    ],
    "answer": "Może zawierać komórki, z których uzyskuje się DNA.",
    "why": "Ślina może zawierać komórki nabłonka. Analiza ich DNA pomaga ustalić pochodzenie śladu; sam ślad nie dowodzi jeszcze popełnienia przestępstwa.",
    "level": "hard"
  },
  {
    "id": 8,
    "topic": "Zastosowania genetyki",
    "q": "Badanie DNA wykazało zwiększoną podatność na pewną chorobę. Która interpretacja jest prawidłowa?",
    "options": [
      "Wynik wskazuje na ryzyko, ale nie daje pewności zachorowania.",
      "Wynik oznacza, że choroba na pewno już się rozwinęła.",
      "Wynik dowodzi, że środowisko nie wpływa na zdrowie.",
      "Wynik pozwala przewidzieć dokładny dzień zachorowania."
    ],
    "answer": "Wynik wskazuje na ryzyko, ale nie daje pewności zachorowania.",
    "why": "Predyspozycja oznacza zwiększone ryzyko. Warunki życia mogą wpływać na ujawnienie się wielu chorób; badanie predyspozycji nie jest tym samym co rozpoznanie choroby.",
    "level": "hard"
  },
  {
    "id": 9,
    "topic": "Geny",
    "q": "Który opis genu jest najdokładniejszy?",
    "options": [
      "Odcinek DNA zawierający informację o budowie białka lub RNA.",
      "Cała cząsteczka białka budująca chromosom.",
      "Pojedynczy cukier tworzący nukleotyd DNA.",
      "Zestaw wszystkich chromosomów danego gatunku."
    ],
    "answer": "Odcinek DNA zawierający informację o budowie białka lub RNA.",
    "why": "Gen jest odcinkiem DNA. Może zawierać informację o białku lub funkcjonalnym RNA. Zestaw chromosomów to kariotyp.",
    "level": "hard"
  },
  {
    "id": 10,
    "topic": "Gen → cecha",
    "q": "Gen zawiera informację o enzymie potrzebnym do wytwarzania melaniny. Który ciąg pokazuje właściwą zależność?",
    "options": [
      "Informacja w DNA → enzym → wytwarzanie barwnika → kolor skóry.",
      "Kolor skóry → wytwarzanie barwnika → zmiana genu na białko.",
      "Enzym → powstanie całego kariotypu → informacja w DNA.",
      "Barwnik → zamiana RNA w cukier → powstanie genu."
    ],
    "answer": "Informacja w DNA → enzym → wytwarzanie barwnika → kolor skóry.",
    "why": "Enzymy są białkami. Informacja w genie pozwala wytworzyć enzym, który uczestniczy w powstawaniu barwnika wpływającego na cechę.",
    "level": "hard"
  },
  {
    "id": 11,
    "topic": "Geny",
    "q": "Uczeń mówi: „Każdy odcinek DNA poza genami jest niepotrzebny”. Jak ocenisz ten wniosek?",
    "options": [
      "Jest błędny: część tych odcinków reguluje odczytywanie genów.",
      "Jest trafny: tylko geny mogą pełnić jakąkolwiek funkcję.",
      "Jest trafny: odcinki poza genami zawsze są usuwane przed podziałem.",
      "Jest błędny: wszystkie odcinki poza genami kodują identyczne białko."
    ],
    "answer": "Jest błędny: część tych odcinków reguluje odczytywanie genów.",
    "why": "Nie każdy odcinek DNA koduje białko lub RNA. Część niekodujących odcinków ma funkcje regulacyjne; brak kodowania nie oznacza braku funkcji.",
    "level": "hard"
  },
  {
    "id": 12,
    "topic": "Budowa DNA",
    "q": "Który zestaw składników tworzy pojedynczy nukleotyd DNA?",
    "options": [
      "Deoksyryboza, reszta kwasu fosforowego, jedna zasada azotowa.",
      "Ryboza, reszta kwasu fosforowego, tymina i uracyl.",
      "Deoksyryboza, białko, dwie zasady azotowe.",
      "Ryboza, aminokwas, jedna zasada azotowa."
    ],
    "answer": "Deoksyryboza, reszta kwasu fosforowego, jedna zasada azotowa.",
    "why": "Nukleotyd DNA ma cukier deoksyrybozę, resztę kwasu fosforowego i jedną z zasad A, T, C lub G. Ryboza jest cukrem RNA.",
    "level": "hard"
  },
  {
    "id": 13,
    "topic": "Budowa DNA",
    "q": "Dwie cząsteczki DNA mają tyle samo nukleotydów, ale niosą inną informację. Co może je różnić?",
    "options": [
      "Kolejność nukleotydów w niciach.",
      "Obecność rybozy zamiast deoksyrybozy w jednej z nich.",
      "Obecność uracylu zamiast tyminy w każdej z nich.",
      "Brak zasad azotowych w jednej z nich."
    ],
    "answer": "Kolejność nukleotydów w niciach.",
    "why": "Informacja zależy od sekwencji, czyli kolejności nukleotydów. Taka sama długość nie oznacza takiej samej informacji.",
    "level": "hard"
  },
  {
    "id": 14,
    "topic": "Komplementarność",
    "q": "Nić DNA ma sekwencję ACGTTA. Wpisz sekwencję nici leżącej dokładnie naprzeciwko, od lewej do prawej (bez oznaczeń końców).",
    "answer": "TGCAAT",
    "why": "Dobieramy partnerów w tej samej kolejności: A–T, C–G, G–C, T–A, T–A, A–T. Otrzymujemy TGCAAT.",
    "type": "write",
    "level": "hard"
  },
  {
    "id": 15,
    "topic": "Komplementarność",
    "q": "Nić DNA ma sekwencję GGATCACA. Wpisz sekwencję dokładnie naprzeciwko, od lewej do prawej.",
    "answer": "CCTAGTGT",
    "why": "G łączy się z C, a A z T. Uzupełnienie każdej pozycji daje CCTAGTGT. W tym zadaniu nie odwracamy kolejności zapisu.",
    "type": "write",
    "level": "hard"
  },
  {
    "id": 16,
    "topic": "Obliczenia DNA",
    "q": "Dwuniciowy fragment DNA ma łącznie 120 nukleotydów, w tym 35 z adeniną. Ile nukleotydów z guaniną zawiera cały fragment? Wpisz liczbę.",
    "answer": "25",
    "why": "A = T, więc tyminy też jest 35. Pozostaje 120 − 35 − 35 = 50 nukleotydów C i G. Ponieważ C = G, guaniny jest 25.",
    "type": "write",
    "level": "hard"
  },
  {
    "id": 17,
    "topic": "Obliczenia DNA",
    "q": "Adenina stanowi 20% wszystkich nukleotydów dwuniciowego DNA. Jaki procent stanowi cytozyna? Wpisz samą liczbę.",
    "answer": "30",
    "why": "Tyminy również jest 20%. A i T dają 40%, więc na C i G pozostaje 60%. Każda z tych zasad stanowi 30%.",
    "type": "write",
    "level": "hard"
  },
  {
    "id": 18,
    "topic": "Komplementarność",
    "q": "W jednej nici DNA jest 12 adenin i 7 guanin. Co na pewno wiadomo o nici naprzeciwko?",
    "options": [
      "Zawiera 12 tymin i 7 cytozyn.",
      "Zawiera 12 adenin i 7 guanin.",
      "Zawiera 12 uracyli i 7 cytozyn.",
      "Zawiera 7 tymin i 12 cytozyn."
    ],
    "answer": "Zawiera 12 tymin i 7 cytozyn.",
    "why": "Każda A wyznacza T naprzeciwko, a każda G wyznacza C. Równości A = T i G = C dotyczą całej dwuniciowej cząsteczki, nie muszą dotyczyć pojedynczej nici.",
    "level": "hard"
  },
  {
    "id": 19,
    "topic": "Chromatyna",
    "q": "Dlaczego DNA wiąże się z białkami i ulega upakowaniu?",
    "options": [
      "Dzięki temu długa nić mieści się w jądrze i może być sprawnie rozdzielana.",
      "Dzięki temu wszystkie geny zamieniają się w cukry.",
      "Dzięki temu znika potrzeba kopiowania DNA.",
      "Dzięki temu dwie nici DNA tracą swoje zasady."
    ],
    "answer": "Dzięki temu długa nić mieści się w jądrze i może być sprawnie rozdzielana.",
    "why": "DNA z białkami tworzy chromatynę. Jej upakowanie pozwala zmieścić materiał w jądrze, a silna kondensacja ułatwia rozdzielenie podczas podziału.",
    "level": "hard"
  },
  {
    "id": 20,
    "topic": "Chromosomy",
    "q": "Które uporządkowanie prawidłowo pokazuje zależność między pojęciami?",
    "options": [
      "Gen jest odcinkiem DNA; DNA z białkami tworzy chromatynę.",
      "DNA jest odcinkiem genu; gen z cukrami tworzy chromatydę.",
      "Nukleotyd zawiera cały chromosom, a chromosom pojedynczy gen.",
      "Centromer jest zasadą azotową łączącą adeninę z tyminą."
    ],
    "answer": "Gen jest odcinkiem DNA; DNA z białkami tworzy chromatynę.",
    "why": "Gen jest fragmentem DNA, a DNA z białkami to chromatyna. Chromosom jest strukturą z chromatyny; centromer łączy chromatydy siostrzane po replikacji.",
    "level": "hard"
  },
  {
    "id": 21,
    "topic": "Kariotyp",
    "q": "Człowiek ma typowo 46 chromosomów w komórce ciała, a pies 78. Jaki wniosek jest uzasadniony?",
    "options": [
      "Liczba chromosomów jest cechą charakterystyczną gatunku.",
      "Pies musi mieć więcej genów dokładnie w stosunku 78 do 46.",
      "Pies musi być bardziej złożony, bo ma więcej chromosomów.",
      "Człowiek ma mniej informacji, ponieważ każdy chromosom ma tę samą długość."
    ],
    "answer": "Liczba chromosomów jest cechą charakterystyczną gatunku.",
    "why": "Liczba chromosomów jest charakterystyczna dla gatunku. Sama liczba nie wyznacza złożoności organizmu ani dokładnej liczby genów; chromosomy różnią się rozmiarami.",
    "level": "hard"
  },
  {
    "id": 22,
    "topic": "Replikacja",
    "q": "Po co komórka kopiuje DNA przed podziałem?",
    "options": [
      "Aby komórki potomne mogły otrzymać pełną informację genetyczną.",
      "Aby każda kolejna generacja traciła połowę genów.",
      "Aby każda zasada azotowa została zamieniona w inną.",
      "Aby usunąć białka z wszystkich przyszłych chromosomów."
    ],
    "answer": "Aby komórki potomne mogły otrzymać pełną informację genetyczną.",
    "why": "Replikacja tworzy kopie DNA przed rozdzieleniem materiału. Dzięki temu komórki potomne mogą otrzymać pełny zestaw informacji.",
    "level": "hard"
  },
  {
    "id": 23,
    "topic": "Replikacja",
    "q": "Jaka jest prawidłowa kolejność najważniejszych etapów replikacji?",
    "options": [
      "Rozdzielenie nici → dołączanie komplementarnych nukleotydów → dwie cząsteczki DNA.",
      "Dołączanie nukleotydów → usunięcie starych nici → jedna cząsteczka DNA.",
      "Rozdzielenie chromosomów → zamiana białek w DNA → dwie nowe nici.",
      "Powstanie dwóch cząsteczek → usunięcie zasad → połączenie wszystkich nici."
    ],
    "answer": "Rozdzielenie nici → dołączanie komplementarnych nukleotydów → dwie cząsteczki DNA.",
    "why": "Najpierw rozdzielają się nici. Każda jest wzorcem dla nici nowej. Komplementarność umożliwia odtworzenie informacji w dwóch cząsteczkach.",
    "level": "hard"
  },
  {
    "id": 24,
    "topic": "Replikacja",
    "q": "Jak zbudowana jest każda cząsteczka DNA bezpośrednio po jednej prawidłowej replikacji?",
    "options": [
      "Z jednej nici wyjściowej i jednej nowo wytworzonej.",
      "Wyłącznie z dwóch nowych nici.",
      "Wyłącznie z dwóch nici wyjściowych.",
      "Z jednej nici DNA i jednej nici białkowej."
    ],
    "answer": "Z jednej nici wyjściowej i jednej nowo wytworzonej.",
    "why": "Każda nić wyjściowej cząsteczki służy jako wzorzec. Dlatego każda z dwóch cząsteczek potomnych ma jedną starą i jedną nową nić.",
    "level": "hard"
  },
  {
    "id": 25,
    "topic": "Chromatydy",
    "q": "Chromosom został skopiowany, ale chromatydy jeszcze się nie rozdzieliły. Co zawiera?",
    "options": [
      "Dwie chromatydy, po jednej dwuniciowej cząsteczce DNA w każdej.",
      "Dwie chromatydy, po jednej pojedynczej nici DNA w każdej.",
      "Jedną chromatydę zawierającą cztery chromosomy.",
      "Dwa oddzielne chromosomy połączone zasadą azotową."
    ],
    "answer": "Dwie chromatydy, po jednej dwuniciowej cząsteczce DNA w każdej.",
    "why": "Chromatydy siostrzane zawierają po jednej cząsteczce DNA, czyli po dwie nici. Pozostając połączone centromerem, tworzą jeden chromosom.",
    "level": "hard"
  },
  {
    "id": 26,
    "topic": "Chromosomy — obliczenia",
    "q": "W komórce człowieka po replikacji jest 46 chromosomów, a chromatydy jeszcze się nie rozdzieliły. Ile jest łącznie chromatyd? Wpisz liczbę.",
    "answer": "92",
    "why": "Każdy z 46 chromosomów ma dwie chromatydy: 46 × 2 = 92. Replikacja podwaja liczbę cząsteczek DNA, lecz przed rozdzieleniem chromatyd nie podwaja liczby chromosomów.",
    "type": "write",
    "level": "hard"
  },
  {
    "id": 27,
    "topic": "Chromosomy — obliczenia",
    "q": "Przed replikacją badana komórka ma 8 chromosomów, każdy z jedną cząsteczką DNA. Ile cząsteczek DNA ma po replikacji, przed podziałem? Wpisz liczbę.",
    "answer": "16",
    "why": "Osiem cząsteczek zostaje skopiowanych: 8 × 2 = 16. Powstaje osiem chromosomów dwuchromatydowych, zawierających łącznie 16 cząsteczek DNA.",
    "type": "write",
    "level": "hard"
  },
  {
    "id": 28,
    "topic": "RNA",
    "q": "Próbka kwasu nukleinowego zawiera rybozę i uracyl. Który opis do niej pasuje?",
    "options": [
      "To RNA, które jest przeważnie jednoniciowe.",
      "To DNA, które zawsze zawiera rybozę.",
      "To chromosom zbudowany wyłącznie z białka.",
      "To nukleotyd DNA zawierający dwie zasady."
    ],
    "answer": "To RNA, które jest przeważnie jednoniciowe.",
    "why": "Ryboza i uracyl to składniki RNA. DNA zawiera deoksyrybozę i tyminę. RNA jest przeważnie jednoniciowe.",
    "level": "hard"
  },
  {
    "id": 29,
    "topic": "Rodzaje RNA",
    "q": "Które przyporządkowanie funkcji jest prawidłowe?",
    "options": [
      "mRNA — przenosi informację; tRNA — dostarcza aminokwasy; rRNA — współtworzy rybosomy.",
      "mRNA — dostarcza aminokwasy; tRNA — współtworzy rybosomy; rRNA — przenosi informację.",
      "mRNA — współtworzy rybosomy; tRNA — przenosi informację; rRNA — dostarcza aminokwasy.",
      "mRNA — kopiuje chromosomy; tRNA — wytwarza rybozę; rRNA — usuwa wszystkie geny."
    ],
    "answer": "mRNA — przenosi informację; tRNA — dostarcza aminokwasy; rRNA — współtworzy rybosomy.",
    "why": "mRNA przenosi informację o budowie białka, tRNA dostarcza aminokwasy do miejsca syntezy, a rRNA jest składnikiem rybosomów.",
    "level": "hard"
  },
  {
    "id": 30,
    "topic": "DNA i RNA",
    "q": "Uczeń twierdzi: „Skoro część genów opisuje budowę RNA, gen nie zawsze opisuje białko”. Jak ocenisz to zdanie?",
    "options": [
      "Jest prawidłowe: gen może zawierać informację o białku lub RNA.",
      "Jest błędne: geny są odcinkami RNA, nigdy DNA.",
      "Jest błędne: wszystkie RNA są zbudowane z aminokwasów.",
      "Jest prawidłowe: RNA nie ma żadnego związku z syntezą białek."
    ],
    "answer": "Jest prawidłowe: gen może zawierać informację o białku lub RNA.",
    "why": "Definicja genu obejmuje informację o białku lub RNA. RNA jest kwasem nukleinowym z nukleotydów i uczestniczy w wytwarzaniu białek.",
    "level": "hard"
  },
  {
    "id": 101,
    "level": "easy",
    "topic": "Genetyka",
    "q": "Czym zajmuje się genetyka?",
    "options": [
      "Dziedziczeniem cech i zmiennością organizmów.",
      "Budową skał i minerałów.",
      "Wyłącznie odżywianiem roślin.",
      "Wyłącznie ruchem zwierząt."
    ],
    "answer": "Dziedziczeniem cech i zmiennością organizmów.",
    "why": "Genetyka bada, jak cechy są przekazywane potomstwu i dlaczego osobniki się różnią."
  },
  {
    "id": 102,
    "level": "easy",
    "topic": "Cechy dziedziczne",
    "q": "Która cecha jest związana z dziedziczeniem po rodzicach?",
    "options": [
      "Naturalny kolor oczu.",
      "Blizna po skaleczeniu.",
      "Umiejętność jazdy na rowerze.",
      "Znajomość języka angielskiego."
    ],
    "answer": "Naturalny kolor oczu.",
    "why": "Na naturalny kolor oczu wpływają geny odziedziczone po rodzicach. Umiejętności i blizny nabywamy podczas życia."
  },
  {
    "id": 103,
    "level": "easy",
    "topic": "Cechy nabyte",
    "q": "Która cecha jest nabyta w ciągu życia?",
    "options": [
      "Blizna po skaleczeniu.",
      "Naturalny kolor tęczówek.",
      "Odziedziczona grupa krwi.",
      "Naturalny kolor włosów."
    ],
    "answer": "Blizna po skaleczeniu.",
    "why": "Blizna powstaje po uszkodzeniu skóry. Nie dziedziczymy samej blizny po rodzicu."
  },
  {
    "id": 104,
    "level": "easy",
    "topic": "Zmienność",
    "q": "Co nazywamy zmiennością?",
    "options": [
      "Różnice między osobnikami tego samego gatunku.",
      "Wyłącznie wzrost jednego organizmu.",
      "Wyłącznie podział komórki.",
      "Jednakowy wygląd wszystkich osobników."
    ],
    "answer": "Różnice między osobnikami tego samego gatunku.",
    "why": "Zmienność sprawia, że osobniki jednego gatunku, np. ludzie, różnią się od siebie."
  },
  {
    "id": 105,
    "level": "easy",
    "topic": "DNA",
    "q": "Co jest nośnikiem informacji genetycznej?",
    "options": [
      "DNA.",
      "Woda.",
      "Tłuszcz zapasowy.",
      "Skrobia."
    ],
    "answer": "DNA.",
    "why": "Informacja genetyczna jest zapisana w DNA — kwasie deoksyrybonukleinowym."
  },
  {
    "id": 106,
    "level": "easy",
    "topic": "Gen",
    "q": "Czym jest gen?",
    "options": [
      "Odcinkiem DNA zawierającym informację o białku lub RNA.",
      "Całą komórką organizmu.",
      "Jedną cząsteczką wody.",
      "Nabytą umiejętnością."
    ],
    "answer": "Odcinkiem DNA zawierającym informację o białku lub RNA.",
    "why": "Gen jest fragmentem DNA. Zawiera informację potrzebną do powstania określonego białka lub RNA."
  },
  {
    "id": 107,
    "level": "easy",
    "topic": "Budowa DNA",
    "q": "Jaki kształt ma typowa cząsteczka DNA?",
    "options": [
      "Dwóch nici skręconych w podwójną helisę.",
      "Jednej prostej nici białkowej.",
      "Koła zbudowanego wyłącznie z cukrów.",
      "Czterech osobnych chromosomów."
    ],
    "answer": "Dwóch nici skręconych w podwójną helisę.",
    "why": "Podwójna helisa przypomina skręconą drabinę zbudowaną z dwóch nici DNA."
  },
  {
    "id": 108,
    "level": "easy",
    "topic": "Nukleotyd",
    "q": "Z jakich jednostek zbudowane są nici DNA?",
    "options": [
      "Z nukleotydów.",
      "Z komórek.",
      "Z narządów.",
      "Z aminokwasów."
    ],
    "answer": "Z nukleotydów.",
    "why": "Jednostkami budującymi DNA są nukleotydy. Aminokwasy budują białka."
  },
  {
    "id": 109,
    "level": "easy",
    "topic": "Pary zasad",
    "q": "Z którą zasadą łączy się adenina (A) w DNA?",
    "options": [
      "Z tyminą (T).",
      "Z guaniną (G).",
      "Z cytozyną (C).",
      "Z uracylem (U)."
    ],
    "answer": "Z tyminą (T).",
    "why": "W DNA pary zasad to A–T oraz C–G. Uracyl jest składnikiem RNA."
  },
  {
    "id": 110,
    "level": "easy",
    "topic": "Pary zasad",
    "q": "Z którą zasadą łączy się cytozyna (C) w DNA?",
    "options": [
      "Z guaniną (G).",
      "Z adeniną (A).",
      "Z tyminą (T).",
      "Z uracylem (U)."
    ],
    "answer": "Z guaniną (G).",
    "why": "Cytozyna tworzy parę z guaniną: C–G."
  },
  {
    "id": 111,
    "level": "easy",
    "topic": "Chromosomy",
    "q": "Ile chromosomów ma typowa komórka ciała człowieka zawierająca jądro?",
    "options": [
      "46.",
      "23.",
      "8.",
      "78."
    ],
    "answer": "46.",
    "why": "Typowa komórka ciała człowieka z jądrem ma 46 chromosomów. Pytanie nie dotyczy komórek rozrodczych."
  },
  {
    "id": 112,
    "level": "easy",
    "topic": "Replikacja",
    "q": "Co oznacza replikacja DNA?",
    "options": [
      "Tworzenie kopii DNA.",
      "Trawienie białek.",
      "Powstawanie blizny.",
      "Usuwanie wszystkich genów."
    ],
    "answer": "Tworzenie kopii DNA.",
    "why": "Replikacja to kopiowanie DNA przed podziałem komórki."
  },
  {
    "id": 113,
    "level": "easy",
    "topic": "RNA",
    "q": "Jaki cukier występuje w RNA?",
    "options": [
      "Ryboza.",
      "Deoksyryboza.",
      "Glukoza.",
      "Sacharoza."
    ],
    "answer": "Ryboza.",
    "why": "RNA zawiera rybozę, a DNA — deoksyrybozę."
  },
  {
    "id": 114,
    "level": "easy",
    "topic": "RNA",
    "q": "Która zasada występuje w RNA zamiast tyminy?",
    "options": [
      "Uracyl.",
      "Cytozyna.",
      "Guanina.",
      "Adenina."
    ],
    "answer": "Uracyl.",
    "why": "W RNA zamiast tyminy występuje uracyl. Pozostałe trzy wymienione zasady występują zarówno w DNA, jak i RNA."
  },
  {
    "id": 115,
    "level": "easy",
    "topic": "Zastosowania",
    "q": "Do czego można wykorzystać analizę DNA?",
    "options": [
      "Do ustalenia, od kogo pochodzi ślad biologiczny.",
      "Do ustalenia godziny na zegarku.",
      "Do pomiaru temperatury powietrza.",
      "Do wyznaczenia długości drogi linijką."
    ],
    "answer": "Do ustalenia, od kogo pochodzi ślad biologiczny.",
    "why": "W kryminalistyce porównuje się DNA ze śladów biologicznych z DNA badanych osób."
  },
  {
    "id": 201,
    "level": "medium",
    "topic": "Dziedziczność",
    "q": "Tata ma naturalnie ciemne włosy i tatuaż. Która z tych cech wiąże się z informacją przekazywaną dziecku w DNA?",
    "options": [
      "Naturalny kolor włosów.",
      "Tatuaż.",
      "Obie cechy w ten sam sposób.",
      "Żadna z tych cech."
    ],
    "answer": "Naturalny kolor włosów.",
    "why": "Naturalny kolor włosów zależy od odziedziczonych genów. Tatuaż jest cechą nabytą i nie jest przekazywany dziecku."
  },
  {
    "id": 202,
    "level": "medium",
    "topic": "Zmienność",
    "q": "Dwie rośliny tego samego gatunku rosły przy różnej ilości światła i mają różną wysokość. Co mogło wpłynąć na tę różnicę?",
    "options": [
      "Warunki środowiska.",
      "Zawsze zmiana jednej rośliny w inny gatunek.",
      "Zawsze utrata wszystkich genów.",
      "Wyłącznie liczba doniczek."
    ],
    "answer": "Warunki środowiska.",
    "why": "Światło jest czynnikiem środowiska i może wpływać na wzrost roślin. Różnica wyglądu nie musi oznaczać zmiany DNA."
  },
  {
    "id": 203,
    "level": "medium",
    "topic": "Obserwacja",
    "q": "W klasie jest 20 uczniów. 12 ma badaną cechę. Co można stwierdzić?",
    "options": [
      "Ta cecha przeważa w badanej klasie.",
      "Ta cecha występuje u wszystkich ludzi.",
      "Ta cecha na pewno jest nabyta.",
      "Ta cecha nie występuje u rodziców uczniów."
    ],
    "answer": "Ta cecha przeważa w badanej klasie.",
    "why": "12 z 20 to więcej niż połowa. Obserwacja dotyczy badanej klasy; nie pozwala wnioskować o wszystkich ludziach."
  },
  {
    "id": 204,
    "level": "medium",
    "topic": "Geny i cechy",
    "q": "Który ciąg najlepiej pokazuje wpływ genu na cechę?",
    "options": [
      "Gen → białko → cecha.",
      "Cecha → cukier → gen.",
      "Białko → woda → chromosom.",
      "Chromosom → blizna → gen."
    ],
    "answer": "Gen → białko → cecha.",
    "why": "Wiele genów zawiera informację o białkach. Białka wpływają na cechy organizmu, np. jako enzymy uczestniczą w powstawaniu barwników."
  },
  {
    "id": 205,
    "level": "medium",
    "topic": "Nukleotyd",
    "q": "Wskaż pełny zestaw składników nukleotydu DNA.",
    "options": [
      "Deoksyryboza, reszta kwasu fosforowego i zasada azotowa.",
      "Ryboza, reszta kwasu fosforowego i uracyl.",
      "Deoksyryboza i aminokwas, bez zasady azotowej.",
      "Białko, tłuszcz i woda."
    ],
    "answer": "Deoksyryboza, reszta kwasu fosforowego i zasada azotowa.",
    "why": "Nukleotyd DNA zawiera deoksyrybozę, resztę kwasu fosforowego i jedną zasadę: A, T, C albo G."
  },
  {
    "id": 206,
    "level": "medium",
    "topic": "Sekwencja DNA",
    "q": "Co oznacza sekwencja DNA?",
    "options": [
      "Kolejność nukleotydów w nici.",
      "Liczbę komórek w narządzie.",
      "Kształt całego organizmu.",
      "Miejsce połączenia chromatyd."
    ],
    "answer": "Kolejność nukleotydów w nici.",
    "why": "Sekwencja to kolejność nukleotydów. To w niej zapisana jest informacja genetyczna."
  },
  {
    "id": 207,
    "level": "medium",
    "topic": "Komplementarność",
    "q": "Jedna nić DNA ma zapis ATGC. Jaki zapis jest dokładnie naprzeciwko, od lewej do prawej?",
    "options": [
      "TACG.",
      "ATGC.",
      "UACG.",
      "TAGC."
    ],
    "answer": "TACG.",
    "why": "Dobieramy zasadę do każdej pozycji: A–T, T–A, G–C, C–G. Wynik: TACG."
  },
  {
    "id": 208,
    "level": "medium",
    "topic": "Komplementarność",
    "q": "Jedna nić DNA ma zapis CCTA. Jaki zapis jest dokładnie naprzeciwko, od lewej do prawej?",
    "options": [
      "GGAT.",
      "CCTA.",
      "GGTA.",
      "CCAT."
    ],
    "answer": "GGAT.",
    "why": "C łączy się z G, T z A, a A z T. Naprzeciwko CCTA znajduje się GGAT."
  },
  {
    "id": 209,
    "level": "medium",
    "topic": "Proste obliczenia",
    "q": "W całej dwuniciowej cząsteczce DNA jest 10 nukleotydów z adeniną. Ile ma nukleotydów z tyminą?",
    "options": [
      "10.",
      "5.",
      "20.",
      "Nie ma żadnego."
    ],
    "answer": "10.",
    "why": "Każdej adeninie odpowiada tymina w drugiej nici. W całym dwuniciowym DNA liczba A i T jest taka sama."
  },
  {
    "id": 210,
    "level": "medium",
    "topic": "Proste obliczenia",
    "q": "Fragment DNA składa się z 6 par nukleotydów. Ile nukleotydów ma łącznie w obu niciach?",
    "options": [
      "12.",
      "6.",
      "3.",
      "24."
    ],
    "answer": "12.",
    "why": "Każda para składa się z dwóch nukleotydów. 6 × 2 = 12."
  },
  {
    "id": 211,
    "level": "medium",
    "topic": "Chromatyna",
    "q": "Czym jest chromatyna?",
    "options": [
      "DNA połączonym z białkami.",
      "Wyłącznie cukrem w RNA.",
      "Jedną zasadą azotową.",
      "Wyłącznie płynem w cytoplazmie."
    ],
    "answer": "DNA połączonym z białkami.",
    "why": "DNA w połączeniu z białkami tworzy chromatynę. Dzięki białkom może być odpowiednio upakowane."
  },
  {
    "id": 212,
    "level": "medium",
    "topic": "Upakowanie DNA",
    "q": "Dlaczego długa nić DNA jest zwijana i upakowywana?",
    "options": [
      "Żeby zmieściła się w niewielkim jądrze komórkowym.",
      "Żeby wszystkie geny zamieniły się w tłuszcz.",
      "Żeby usunąć z niej nukleotydy.",
      "Żeby przestała przenosić informację."
    ],
    "answer": "Żeby zmieściła się w niewielkim jądrze komórkowym.",
    "why": "DNA jest bardzo długie w porównaniu z rozmiarem jądra. Upakowanie umożliwia jego przechowywanie w komórce."
  },
  {
    "id": 213,
    "level": "medium",
    "topic": "Kariotyp",
    "q": "Co nazywamy kariotypem?",
    "options": [
      "Kompletny zestaw chromosomów charakterystyczny dla gatunku.",
      "Kolejność czterech zasad w jednym genie.",
      "Pojedynczą cząsteczkę białka.",
      "Proces kopiowania DNA."
    ],
    "answer": "Kompletny zestaw chromosomów charakterystyczny dla gatunku.",
    "why": "Kariotyp to charakterystyczny dla gatunku zestaw chromosomów. Replikacja jest procesem kopiowania DNA."
  },
  {
    "id": 214,
    "level": "medium",
    "topic": "Replikacja",
    "q": "Co dzieje się najpierw podczas replikacji DNA?",
    "options": [
      "Nici podwójnej helisy rozdzielają się.",
      "Wszystkie zasady zamieniają się w uracyl.",
      "DNA zostaje całkowicie usunięte.",
      "Powstają od razu dwa nowe jądra."
    ],
    "answer": "Nici podwójnej helisy rozdzielają się.",
    "why": "Na początku nici rozdzielają się. Potem do każdej dobudowywana jest nić zgodnie z komplementarnością zasad."
  },
  {
    "id": 215,
    "level": "medium",
    "topic": "Replikacja",
    "q": "Po jednej replikacji z jednej cząsteczki DNA powstają dwie. Co zawiera każda z nich?",
    "options": [
      "Jedną starą i jedną nową nić.",
      "Tylko dwie nowe nici.",
      "Jedną nić białka i jedną DNA.",
      "Tylko jedną starą nić, bez nowej."
    ],
    "answer": "Jedną starą i jedną nową nić.",
    "why": "Każda stara nić jest wzorcem dla nowej. Dlatego każda potomna cząsteczka zawiera jedną starą i jedną nową nić."
  },
  {
    "id": 216,
    "level": "medium",
    "topic": "Chromatydy",
    "q": "Ile chromatyd ma chromosom po replikacji, zanim chromatydy się rozdzielą?",
    "options": [
      "Dwie.",
      "Jedną.",
      "Cztery.",
      "46."
    ],
    "answer": "Dwie.",
    "why": "Po replikacji chromosom ma dwie chromatydy siostrzane, zawierające kopie DNA."
  },
  {
    "id": 217,
    "level": "medium",
    "topic": "Centromer",
    "q": "Jak nazywa się miejsce połączenia chromatyd siostrzanych?",
    "options": [
      "Centromer.",
      "Nukleotyd.",
      "Ryboza.",
      "Uracyl."
    ],
    "answer": "Centromer.",
    "why": "Chromatydy siostrzane są połączone w okolicy centromeru."
  },
  {
    "id": 218,
    "level": "medium",
    "topic": "DNA i RNA",
    "q": "Która para poprawnie opisuje różnicę między DNA a RNA?",
    "options": [
      "DNA — deoksyryboza; RNA — ryboza.",
      "DNA — ryboza; RNA — deoksyryboza.",
      "DNA — uracyl; RNA — tymina.",
      "DNA — aminokwasy; RNA — tłuszcze."
    ],
    "answer": "DNA — deoksyryboza; RNA — ryboza.",
    "why": "Cukrem DNA jest deoksyryboza, a cukrem RNA jest ryboza. Oba kwasy składają się z nukleotydów."
  },
  {
    "id": 219,
    "level": "medium",
    "topic": "mRNA",
    "q": "Który rodzaj RNA przenosi informację o budowie białka z jądra do cytoplazmy?",
    "options": [
      "mRNA.",
      "tRNA.",
      "rRNA.",
      "Żaden rodzaj RNA."
    ],
    "answer": "mRNA.",
    "why": "mRNA przenosi informację o budowie białka. tRNA dostarcza aminokwasy, a rRNA współtworzy rybosomy."
  },
  {
    "id": 220,
    "level": "medium",
    "topic": "tRNA i rRNA",
    "q": "Które przyporządkowanie jest poprawne?",
    "options": [
      "tRNA dostarcza aminokwasy, a rRNA współtworzy rybosomy.",
      "tRNA współtworzy rybosomy, a rRNA dostarcza aminokwasy.",
      "tRNA jest cukrem, a rRNA zasadą azotową.",
      "tRNA i rRNA są nazwami chromatyd."
    ],
    "answer": "tRNA dostarcza aminokwasy, a rRNA współtworzy rybosomy.",
    "why": "tRNA transportuje aminokwasy do miejsca syntezy białek. rRNA jest składnikiem rybosomów."
  }
];
