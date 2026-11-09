const QUESTIONS=[
  {
    "id": 1,
    "level": "easy",
    "topic": "Dziedziczność",
    "q": "Której cechy dziecko nie dziedziczy po rodzicu?",
    "options": [
      "Blizny po skaleczeniu.",
      "Naturalnego koloru włosów.",
      "Grupy krwi.",
      "Genetycznych predyspozycji do koloru oczu."
    ],
    "answer": "Blizny po skaleczeniu.",
    "why": "Blizna powstaje podczas życia. Nie jest przekazywana dziecku w DNA."
  },
  {
    "id": 2,
    "level": "easy",
    "topic": "DNA",
    "q": "Gdzie zapisana jest informacja genetyczna organizmu?",
    "options": [
      "W kolejności nukleotydów DNA.",
      "W kolejności narządów ciała.",
      "Wyłącznie w wodzie w komórce.",
      "Wyłącznie w tłuszczu zapasowym."
    ],
    "answer": "W kolejności nukleotydów DNA.",
    "why": "Informacja jest zapisana w sekwencji, czyli kolejności nukleotydów DNA."
  },
  {
    "id": 3,
    "level": "easy",
    "topic": "Budowa DNA",
    "q": "Oceń zdanie: cukrem w nukleotydzie DNA jest deoksyryboza.",
    "options": [
      "Prawda",
      "Fałsz"
    ],
    "answer": "Prawda",
    "why": "DNA zawiera deoksyrybozę. Ryboza jest cukrem występującym w RNA."
  },
  {
    "id": 4,
    "level": "easy",
    "topic": "Komplementarność",
    "q": "Z którą zasadą łączy się adenina (A) w DNA?",
    "options": [
      "Z tyminą (T).",
      "Z cytozyną (C).",
      "Z guaniną (G).",
      "Z uracylem (U)."
    ],
    "answer": "Z tyminą (T).",
    "why": "W DNA pary zasad to A–T i C–G."
  },
  {
    "id": 5,
    "level": "easy",
    "topic": "Replikacja",
    "q": "Jak nazywa się tworzenie kopii DNA?",
    "options": [
      "Replikacja.",
      "Zapłodnienie.",
      "Trawienie.",
      "Oddychanie."
    ],
    "answer": "Replikacja.",
    "why": "Replikacja polega na kopiowaniu DNA przed podziałem komórki."
  },
  {
    "id": 6,
    "level": "easy",
    "topic": "DNA",
    "q": "Zaznacz DWIE prawdziwe informacje o DNA.",
    "options": [
      "Jest nośnikiem informacji genetycznej.",
      "Jest przekazywane potomstwu.",
      "Jego cukrem jest ryboza.",
      "Zawiera uracyl zamiast tyminy."
    ],
    "answer": "Jest nośnikiem informacji genetycznej. | Jest przekazywane potomstwu.",
    "why": "DNA przenosi informację genetyczną i uczestniczy w dziedziczeniu. Zawiera deoksyrybozę i tyminę.",
    "type": "multi"
  },
  {
    "id": 7,
    "level": "easy",
    "topic": "Mitoza",
    "q": "Ile komórek potomnych powstaje z jednej komórki po jednym pełnym podziale mitotycznym?",
    "options": [
      "Dwie.",
      "Cztery.",
      "Jedna.",
      "Osiem."
    ],
    "answer": "Dwie.",
    "why": "Jeden podział mitotyczny wraz z podziałem cytoplazmy daje dwie komórki potomne."
  },
  {
    "id": 8,
    "level": "easy",
    "topic": "Mejoza",
    "q": "U człowieka komórki rozrodcze powstają w procesie obejmującym:",
    "options": [
      "Mejozę.",
      "Wyłącznie mitozę.",
      "Wyłącznie replikację, bez podziału.",
      "Tylko zapłodnienie."
    ],
    "answer": "Mejozę.",
    "why": "Mejoza zmniejsza liczbę chromosomów. Jest częścią procesu powstawania gamet człowieka."
  },
  {
    "id": 9,
    "level": "easy",
    "topic": "Haploidalność",
    "q": "Co oznacza, że komórka jest haploidalna (n)?",
    "options": [
      "Ma jeden zestaw chromosomów.",
      "Ma dwa zestawy chromosomów.",
      "Nie zawiera DNA.",
      "Zawsze ma tylko jeden chromosom."
    ],
    "answer": "Ma jeden zestaw chromosomów.",
    "why": "Haploidalna komórka ma jeden zestaw chromosomów. U człowieka taki zestaw liczy 23 chromosomy."
  },
  {
    "id": 10,
    "level": "easy",
    "topic": "Znaczenie mitozy",
    "q": "Który proces w organizmie człowieka wymaga mitozy?",
    "options": [
      "Wzrost i odnowa tkanek.",
      "Łączenie plemnika z komórką jajową.",
      "Zmniejszenie liczby chromosomów w gametach.",
      "Powstanie zygoty podczas zapłodnienia."
    ],
    "answer": "Wzrost i odnowa tkanek.",
    "why": "Mitoza pozwala zwiększać liczbę komórek i zastępować uszkodzone komórki."
  },
  {
    "id": 11,
    "level": "easy",
    "topic": "Gen i allel",
    "q": "Czym jest allel?",
    "options": [
      "Wersją danego genu.",
      "Całym narządem.",
      "Nabytą umiejętnością.",
      "Rodzajem komórki rozrodczej."
    ],
    "answer": "Wersją danego genu.",
    "why": "Allele to wersje tego samego genu, np. oznaczane A i a."
  },
  {
    "id": 12,
    "level": "easy",
    "topic": "Genotyp i fenotyp",
    "q": "Jak nazywamy zestaw alleli organizmu, np. Aa dla rozpatrywanego genu?",
    "options": [
      "Genotyp.",
      "Fenotyp.",
      "Blizna.",
      "Gameta."
    ],
    "answer": "Genotyp.",
    "why": "Genotyp opisuje informację genetyczną. Fenotyp to cechy organizmu, np. barwa kwiatów."
  },
  {
    "id": 13,
    "level": "easy",
    "topic": "Heterozygota",
    "q": "Który zapis oznacza heterozygotę?",
    "options": [
      "Aa.",
      "AA.",
      "aa.",
      "A."
    ],
    "answer": "Aa.",
    "why": "Heterozygota ma dwa różne allele danego genu. AA i aa są homozygotami."
  },
  {
    "id": 14,
    "level": "easy",
    "topic": "Dominacja",
    "q": "Oceń zdanie: przy dominacji zupełnej allel dominujący ujawnia się w cechach heterozygoty Aa.",
    "options": [
      "Prawda",
      "Fałsz"
    ],
    "answer": "Prawda",
    "why": "Przy dominacji zupełnej heterozygota Aa wykazuje cechę związaną z allelem dominującym A."
  },
  {
    "id": 15,
    "level": "easy",
    "topic": "Homozygoty",
    "q": "Zaznacz DWIE homozygoty.",
    "options": [
      "AA",
      "aa",
      "Aa",
      "aA"
    ],
    "answer": "AA | aa",
    "why": "Homozygota ma dwa jednakowe allele: AA lub aa. Aa i aA oznaczają heterozygotę.",
    "type": "multi"
  },
  {
    "id": 16,
    "level": "medium",
    "topic": "Dziedziczność",
    "q": "Mama nauczyła się pływać i ma określoną grupę krwi. Co dziecko może odziedziczyć w DNA?",
    "options": [
      "Allele wpływające na grupę krwi.",
      "Umiejętność pływania bez nauki.",
      "Obie te cechy w identyczny sposób.",
      "Wspomnienia mamy z nauki pływania."
    ],
    "answer": "Allele wpływające na grupę krwi.",
    "why": "Dziecko dziedziczy allele, a umiejętności takie jak pływanie zdobywa w ciągu życia."
  },
  {
    "id": 17,
    "level": "medium",
    "topic": "Budowa DNA",
    "q": "Oceń zdanie: typowa cząsteczka DNA składa się z czterech nici.",
    "options": [
      "Fałsz",
      "Prawda"
    ],
    "answer": "Fałsz",
    "why": "Typowa cząsteczka DNA jest dwuniciowa. Dwie nici tworzą podwójną helisę."
  },
  {
    "id": 18,
    "level": "medium",
    "topic": "Komplementarność",
    "q": "Jedna nić DNA ma zapis ATCG. Co znajduje się dokładnie naprzeciwko, od lewej do prawej?",
    "options": [
      "TAGC",
      "ATCG",
      "UAGC",
      "TACG"
    ],
    "answer": "TAGC",
    "why": "Do A dobieramy T, do T — A, do C — G, a do G — C. Wynik to TAGC."
  },
  {
    "id": 19,
    "level": "medium",
    "topic": "Replikacja",
    "q": "Co zawiera każda cząsteczka DNA po jednej prawidłowej replikacji?",
    "options": [
      "Jedną starą i jedną nową nić.",
      "Dwie stare nici, bez nowych.",
      "Dwie nowe nici, bez starych.",
      "Jedną nić DNA i jedną nić białka."
    ],
    "answer": "Jedną starą i jedną nową nić.",
    "why": "Każda stara nić służy jako wzorzec do dobudowania nowej, komplementarnej nici."
  },
  {
    "id": 20,
    "level": "medium",
    "topic": "DNA i RNA",
    "q": "Zaznacz DWIE cechy DNA, które odróżniają je od typowego RNA.",
    "options": [
      "Zawiera deoksyrybozę.",
      "Zawiera tyminę.",
      "Zawiera rybozę.",
      "Zawiera uracyl zamiast tyminy."
    ],
    "answer": "Zawiera deoksyrybozę. | Zawiera tyminę.",
    "why": "DNA zawiera deoksyrybozę i tyminę. RNA zawiera rybozę i uracyl.",
    "type": "multi"
  },
  {
    "id": 21,
    "level": "medium",
    "topic": "Mitoza",
    "q": "Komórka diploidalna ma 12 chromosomów. Ile ma każda z dwóch komórek potomnych po prawidłowej mitozie?",
    "options": [
      "12.",
      "6.",
      "24.",
      "3."
    ],
    "answer": "12.",
    "why": "Mitoza zachowuje liczbę chromosomów. Każda komórka potomna otrzymuje 12 chromosomów."
  },
  {
    "id": 22,
    "level": "medium",
    "topic": "Mejoza",
    "q": "Komórka diploidalna ma 12 chromosomów. Ile chromosomów ma każde z czterech jąder po pełnej mejozie?",
    "options": [
      "6.",
      "12.",
      "24.",
      "3."
    ],
    "answer": "6.",
    "why": "Mejoza zmniejsza liczbę chromosomów o połowę: 12 : 2 = 6. Drugi podział nie zmniejsza jej ponownie do 3."
  },
  {
    "id": 23,
    "level": "medium",
    "topic": "Podziały komórkowe",
    "q": "Oceń zdanie: po mitozie komórki diploidalnej powstają komórki haploidalne.",
    "options": [
      "Fałsz",
      "Prawda"
    ],
    "answer": "Fałsz",
    "why": "Mitoza zachowuje ploidalność: z komórki diploidalnej powstają komórki diploidalne. Redukcja zachodzi w mejozie."
  },
  {
    "id": 24,
    "level": "medium",
    "topic": "Mejoza i zapłodnienie",
    "q": "Dlaczego liczba chromosomów człowieka nie podwaja się w każdym kolejnym pokoleniu?",
    "options": [
      "Gamety mają po 23 chromosomy, a zapłodnienie przywraca liczbę 46.",
      "Każda gameta ma 46 chromosomów i połowę z nich odrzuca dziecko.",
      "Plemnik nie zawiera chromosomów.",
      "Zygota zawsze pozostaje haploidalna."
    ],
    "answer": "Gamety mają po 23 chromosomy, a zapłodnienie przywraca liczbę 46.",
    "why": "Mejoza daje haploidalne gamety. Przy zapłodnieniu zestawy 23 + 23 łączą się w diploidalny zestaw 46."
  },
  {
    "id": 25,
    "level": "medium",
    "topic": "Znaczenie podziałów",
    "q": "Zaznacz DWIE prawdziwe informacje.",
    "options": [
      "Mitoza umożliwia odnowę tkanek człowieka.",
      "Mejoza zmniejsza liczbę zestawów chromosomów z dwóch do jednego.",
      "Mitoza zawsze zmniejsza liczbę chromosomów o połowę.",
      "Zapłodnienie zmniejsza liczbę zestawów chromosomów."
    ],
    "answer": "Mejoza zmniejsza liczbę zestawów chromosomów z dwóch do jednego. | Mitoza umożliwia odnowę tkanek człowieka.",
    "why": "Mitoza jest potrzebna do wzrostu i odnowy. Mejoza redukuje 2n do n, a zapłodnienie łączy dwa zestawy n.",
    "type": "multi"
  },
  {
    "id": 26,
    "level": "medium",
    "topic": "Genotyp i fenotyp",
    "q": "Dwie rośliny mają genotypy AA i Aa. Przy dominacji zupełnej A nad a ich cecha może wyglądać tak samo. Co jest prawdą?",
    "options": [
      "Mają różne genotypy, ale taki sam fenotyp tej cechy.",
      "Mają ten sam genotyp i różne fenotypy.",
      "Obie są heterozygotami.",
      "Obie są homozygotami recesywnymi."
    ],
    "answer": "Mają różne genotypy, ale taki sam fenotyp tej cechy.",
    "why": "Genotypy AA i Aa różnią się, ale oba ujawniają cechę dominującą przy dominacji zupełnej."
  },
  {
    "id": 27,
    "level": "medium",
    "topic": "Recesywność",
    "q": "Allel a jest recesywny wobec A. W którym genotypie ujawni się cecha recesywna przy dominacji zupełnej?",
    "options": [
      "aa",
      "Aa",
      "AA",
      "aA"
    ],
    "answer": "aa",
    "why": "Cecha recesywna ujawnia się u homozygoty recesywnej aa. W Aa obecność dominującego A maskuje jej efekt."
  },
  {
    "id": 28,
    "level": "medium",
    "topic": "Dominacja",
    "q": "Co oznacza, że allel jest dominujący?",
    "options": [
      "Jego efekt ujawnia się u heterozygoty przy dominacji zupełnej.",
      "Zawsze występuje u większości populacji.",
      "Zawsze daje większą siłę organizmowi.",
      "Zawsze jest korzystniejszy dla zdrowia."
    ],
    "answer": "Jego efekt ujawnia się u heterozygoty przy dominacji zupełnej.",
    "why": "Dominacja opisuje relację alleli. Nie oznacza większej częstości występowania, siły ani korzyści zdrowotnych."
  },
  {
    "id": 29,
    "level": "medium",
    "topic": "Gamety",
    "q": "Jakie allele rozpatrywanego genu mogą znaleźć się w gametach osobnika Aa?",
    "options": [
      "A albo a.",
      "Zawsze A i a razem.",
      "Wyłącznie A.",
      "Wyłącznie aa."
    ],
    "answer": "A albo a.",
    "why": "Gameta otrzymuje jeden allel rozpatrywanego genu. Osobnik Aa może wytwarzać gamety z A lub z a."
  },
  {
    "id": 30,
    "level": "medium",
    "topic": "Prosta krzyżówka",
    "q": "Krzyżujemy rośliny AA i aa. Jaki genotyp dla badanego genu będzie miało ich potomstwo?",
    "options": [
      "Aa.",
      "Wyłącznie AA.",
      "Wyłącznie aa.",
      "Połowa AA, połowa aa."
    ],
    "answer": "Aa.",
    "why": "Rodzic AA przekazuje A, a rodzic aa przekazuje a. Po połączeniu powstaje Aa."
  }
];
