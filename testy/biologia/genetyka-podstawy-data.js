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
    "why": "Blizna jest cechą nabytą. Na naturalny kolor oczu wpływają odziedziczone geny; nie oznacza to, że każde dziecko będzie miało oczy tego samego koloru co mama."
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
    "why": "Zmienność może wynikać także z wpływu środowiska. Opalenizna powstaje pod wpływem promieniowania słonecznego i nie jest dziedziczona jako nabyta opalenizna rodzica."
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
    "why": "Zmienność to różnice między osobnikami tego samego gatunku. Pozostałe przykłady porównują różne gatunki lub typy komórek."
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
    "why": "Dwunożność jest typową cechą gatunkową człowieka. Kolor tęczówek różnicuje osobniki; czytania uczymy się podczas życia."
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
    "why": "15 jest większe niż połowa z 24. Wynik jednej klasy nie wystarcza do wnioskowania o całej ludzkości ani o sposobie dziedziczenia cechy."
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
    "why": "Dobór osobników do rozrodu wykorzystuje dziedziczenie predyspozycji. Na ilość mleka wpływają też warunki utrzymania i żywienia."
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
    "why": "Ślina może zawierać komórki nabłonka. Analiza ich DNA pomaga ustalić pochodzenie śladu; sam ślad nie dowodzi jeszcze popełnienia przestępstwa."
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
    "why": "Predyspozycja oznacza zwiększone ryzyko. Warunki życia mogą wpływać na ujawnienie się wielu chorób; badanie predyspozycji nie jest tym samym co rozpoznanie choroby."
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
    "why": "Gen jest odcinkiem DNA. Może zawierać informację o białku lub funkcjonalnym RNA. Zestaw chromosomów to kariotyp."
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
    "why": "Enzymy są białkami. Informacja w genie pozwala wytworzyć enzym, który uczestniczy w powstawaniu barwnika wpływającego na cechę."
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
    "why": "Nie każdy odcinek DNA koduje białko lub RNA. Część niekodujących odcinków ma funkcje regulacyjne; brak kodowania nie oznacza braku funkcji."
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
    "why": "Nukleotyd DNA ma cukier deoksyrybozę, resztę kwasu fosforowego i jedną z zasad A, T, C lub G. Ryboza jest cukrem RNA."
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
    "why": "Informacja zależy od sekwencji, czyli kolejności nukleotydów. Taka sama długość nie oznacza takiej samej informacji."
  },
  {
    "id": 14,
    "topic": "Komplementarność",
    "q": "Nić DNA ma sekwencję ACGTTA. Wpisz sekwencję nici leżącej dokładnie naprzeciwko, od lewej do prawej (bez oznaczeń końców).",
    "answer": "TGCAAT",
    "why": "Dobieramy partnerów w tej samej kolejności: A–T, C–G, G–C, T–A, T–A, A–T. Otrzymujemy TGCAAT.",
    "type": "write"
  },
  {
    "id": 15,
    "topic": "Komplementarność",
    "q": "Nić DNA ma sekwencję GGATCACA. Wpisz sekwencję dokładnie naprzeciwko, od lewej do prawej.",
    "answer": "CCTAGTGT",
    "why": "G łączy się z C, a A z T. Uzupełnienie każdej pozycji daje CCTAGTGT. W tym zadaniu nie odwracamy kolejności zapisu.",
    "type": "write"
  },
  {
    "id": 16,
    "topic": "Obliczenia DNA",
    "q": "Dwuniciowy fragment DNA ma łącznie 120 nukleotydów, w tym 35 z adeniną. Ile nukleotydów z guaniną zawiera cały fragment? Wpisz liczbę.",
    "answer": "25",
    "why": "A = T, więc tyminy też jest 35. Pozostaje 120 − 35 − 35 = 50 nukleotydów C i G. Ponieważ C = G, guaniny jest 25.",
    "type": "write"
  },
  {
    "id": 17,
    "topic": "Obliczenia DNA",
    "q": "Adenina stanowi 20% wszystkich nukleotydów dwuniciowego DNA. Jaki procent stanowi cytozyna? Wpisz samą liczbę.",
    "answer": "30",
    "why": "Tyminy również jest 20%. A i T dają 40%, więc na C i G pozostaje 60%. Każda z tych zasad stanowi 30%.",
    "type": "write"
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
    "why": "Każda A wyznacza T naprzeciwko, a każda G wyznacza C. Równości A = T i G = C dotyczą całej dwuniciowej cząsteczki, nie muszą dotyczyć pojedynczej nici."
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
    "why": "DNA z białkami tworzy chromatynę. Jej upakowanie pozwala zmieścić materiał w jądrze, a silna kondensacja ułatwia rozdzielenie podczas podziału."
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
    "why": "Gen jest fragmentem DNA, a DNA z białkami to chromatyna. Chromosom jest strukturą z chromatyny; centromer łączy chromatydy siostrzane po replikacji."
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
    "why": "Liczba chromosomów jest charakterystyczna dla gatunku. Sama liczba nie wyznacza złożoności organizmu ani dokładnej liczby genów; chromosomy różnią się rozmiarami."
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
    "why": "Replikacja tworzy kopie DNA przed rozdzieleniem materiału. Dzięki temu komórki potomne mogą otrzymać pełny zestaw informacji."
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
    "why": "Najpierw rozdzielają się nici. Każda jest wzorcem dla nici nowej. Komplementarność umożliwia odtworzenie informacji w dwóch cząsteczkach."
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
    "why": "Każda nić wyjściowej cząsteczki służy jako wzorzec. Dlatego każda z dwóch cząsteczek potomnych ma jedną starą i jedną nową nić."
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
    "why": "Chromatydy siostrzane zawierają po jednej cząsteczce DNA, czyli po dwie nici. Pozostając połączone centromerem, tworzą jeden chromosom."
  },
  {
    "id": 26,
    "topic": "Chromosomy — obliczenia",
    "q": "W komórce człowieka po replikacji jest 46 chromosomów, a chromatydy jeszcze się nie rozdzieliły. Ile jest łącznie chromatyd? Wpisz liczbę.",
    "answer": "92",
    "why": "Każdy z 46 chromosomów ma dwie chromatydy: 46 × 2 = 92. Replikacja podwaja liczbę cząsteczek DNA, lecz przed rozdzieleniem chromatyd nie podwaja liczby chromosomów.",
    "type": "write"
  },
  {
    "id": 27,
    "topic": "Chromosomy — obliczenia",
    "q": "Przed replikacją badana komórka ma 8 chromosomów, każdy z jedną cząsteczką DNA. Ile cząsteczek DNA ma po replikacji, przed podziałem? Wpisz liczbę.",
    "answer": "16",
    "why": "Osiem cząsteczek zostaje skopiowanych: 8 × 2 = 16. Powstaje osiem chromosomów dwuchromatydowych, zawierających łącznie 16 cząsteczek DNA.",
    "type": "write"
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
    "why": "Ryboza i uracyl to składniki RNA. DNA zawiera deoksyrybozę i tyminę. RNA jest przeważnie jednoniciowe."
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
    "why": "mRNA przenosi informację o budowie białka, tRNA dostarcza aminokwasy do miejsca syntezy, a rRNA jest składnikiem rybosomów."
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
    "why": "Definicja genu obejmuje informację o białku lub RNA. RNA jest kwasem nukleinowym z nukleotydów i uczestniczy w wytwarzaniu białek."
  }
];
