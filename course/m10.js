// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m10",
  n: 10,
  level: "B1",
  title: "W drodze",
  titleRu: "У дорозі",
  summary: "Навчитеся точно описувати переміщення префіксальними дієсловами від iść і jechać, називати час і дати, а також зв’язно розповідати історії за допомогою часових сполучників (zanim, dopóki, odkąd, jak tylko…).",
  lessons: [
    // ===================== LESSON 1 =====================
    {
      id: "m10l1",
      title: "Wejść, wyjść, przejść",
      titleRu: "Префіксальні дієслова від iść",
      topic: "W budynku i na ulicy",
      review: false,
      minutes: 30,
      goals: [
        "Розрізняти префікси przy-, wy-, w-, do-, od-, prze-, z-, ob- з дієсловом iść",
        "Утворювати майбутній і минулий час (przyjdę, wszedł, zeszła) та видові пари (wejść — wchodzić)",
        "Пояснювати дорогу й орієнтуватися в будинку та на вулиці"
      ],
      vocab: [
        { pl: "wejście", g: "n", ru: "вхід", ex: "Wejście do sklepu jest od podwórka.", exRu: "Вхід до магазину — з подвір’я." },
        { pl: "wyjście", g: "n", ru: "вихід", ex: "Wyjście awaryjne jest na końcu korytarza.", exRu: "Аварійний вихід — у кінці коридору." },
        { pl: "parter", g: "m", ru: "перший поверх", ex: "Mieszkam na parterze, więc nie potrzebuję windy.", exRu: "Я живу на першому поверсі, тож ліфт мені не потрібен.", note: "pierwsze piętro — це вже наш другий поверх!" },
        { pl: "klatka schodowa", g: "f", ru: "під’їзд, сходова клітка", ex: "Rowery stoją na klatce schodowej.", exRu: "Велосипеди стоять у під’їзді." },
        { pl: "schody", g: "pl", ru: "сходи", ex: "Zejdź po schodach, winda nie działa.", exRu: "Зійди сходами, ліфт не працює.", note: "лише множина, як і укр. «сходи»: po schodach, na schodach" },
        { pl: "winda", g: "f", ru: "ліфт", ex: "Winda znowu nie działa!", exRu: "Ліфт знову не працює!" },
        { pl: "korytarz", g: "m", ru: "коридор", ex: "Łazienka jest na końcu korytarza.", exRu: "Ванна кімната — в кінці коридору." },
        { pl: "podwórko", g: "n", ru: "подвір’я, двір", ex: "Dzieci grają w piłkę na podwórku.", exRu: "Діти грають у м’яча на подвір’ї.", note: "na podwórku — з «na», як укр. «на подвір’ї»" },
        { pl: "chodnik", g: "m", ru: "тротуар", ex: "Nie parkuj na chodniku!", exRu: "Не паркуйся на тротуарі!", note: "також «килимова доріжка»" },
        { pl: "przejście dla pieszych", g: "n", ru: "пішохідний перехід", ex: "Przejdź przez ulicę na przejściu dla pieszych.", exRu: "Перейди вулицю пішохідним переходом." },
        { pl: "skrzyżowanie", g: "n", ru: "перехрестя", ex: "Na skrzyżowaniu skręć w prawo.", exRu: "На перехресті поверни праворуч." },
        { pl: "światła", g: "pl", ru: "світлофор", ex: "Zatrzymaj się na światłach.", exRu: "Зупинись на світлофорі.", note: "розм., дослівно «світла»" },
        { pl: "przechodzień", g: "m", ru: "перехожий", ex: "Zapytałem przechodnia o drogę.", exRu: "Я запитав перехожого про дорогу.", note: "род. в. przechodnia, мн. przechodnie" }
      ],
      grammar: {
        title: "Префіксальні дієслова від iść: przyjść, wyjść, wejść…",
        html: `<p>Дієслово <span class="pl">iść</span> (іти) з префіксами утворює цілу родину дієслів, дуже схожу на українську: прийти, вийти, увійти, дійти, перейти, обійти… Усі вони <b>доконаного виду</b>, тому їхній «теперішній» час за змістом — майбутній: <span class="pl">przyjdę</span> = прийду.</p>
<h4>Форми: усе як в iść</h4>
<p>Змінюється лише корінь: <span class="pl">idę</span> → <span class="pl">przyjdę, wejdę, wyjdę</span> (як укр. «іду → прийду, вийду»); <span class="pl">szedł</span> → <span class="pl">przyszedł, wyszedł</span>. У минулому часі чоловічий і жіночий рід мають різну основу: <span class="pl">przyszedł</span>, але <span class="pl">przyszła</span>; мн. <span class="pl">przyszli / przyszły</span>.</p>
<table class="g"><tr><th>префікс</th><th>значення</th><th>майбутній (ja)</th><th>мин. (on / ona)</th><th>недок. вид</th></tr>
<tr><td class="pl">przy-</td><td>прибуття</td><td class="pl">przyjdę</td><td class="pl">przyszedł / przyszła</td><td class="pl">przychodzić</td></tr>
<tr><td class="pl">wy-</td><td>зсередини назовні</td><td class="pl">wyjdę</td><td class="pl">wyszedł / wyszła</td><td class="pl">wychodzić</td></tr>
<tr><td class="pl">w- (we-)</td><td>усередину, нагору</td><td class="pl">wejdę</td><td class="pl">wszedł / weszła</td><td class="pl">wchodzić</td></tr>
<tr><td class="pl">do-</td><td>до мети</td><td class="pl">dojdę</td><td class="pl">doszedł / doszła</td><td class="pl">dochodzić</td></tr>
<tr><td class="pl">od- (ode-)</td><td>геть, від</td><td class="pl">odejdę</td><td class="pl">odszedł / odeszła</td><td class="pl">odchodzić</td></tr>
<tr><td class="pl">prze-</td><td>через, повз</td><td class="pl">przejdę</td><td class="pl">przeszedł / przeszła</td><td class="pl">przechodzić</td></tr>
<tr><td class="pl">z- (ze-)</td><td>згори вниз</td><td class="pl">zejdę</td><td class="pl">zszedł / zeszła</td><td class="pl">schodzić</td></tr>
<tr><td class="pl">ob- (obe-)</td><td>навколо</td><td class="pl">obejdę</td><td class="pl">obszedł / obeszła</td><td class="pl">obchodzić</td></tr></table>
<h4>Недоконаний вид: -chodzić</h4>
<p>Пару недоконаного виду утворюють від <span class="pl">chodzić</span>: <span class="pl">przychodzę, wychodzisz, wchodzi</span> (пор. укр. «приходжу, виходиш, входить»). Вона потрібна для повторюваних дій і процесу:</p>
<div class="ex"><span class="pl">Zwykle wychodzę z pracy o piątej, ale dziś wyjdę wcześniej.</span> — Зазвичай я виходжу з роботи о п’ятій, але сьогодні вийду раніше.</div>
<h4>Прийменники</h4>
<ul>
<li><span class="pl">wejść do sklepu</span> (у приміщення — <b>do</b> + род. в., як укр. «до магазину»), <span class="pl">wejść na trzecie piętro</span> (нагору — <b>na</b> + знах. в.)</li>
<li><span class="pl">wyjść z domu, wyjść na spacer, wyjść do sklepu</span></li>
<li><span class="pl">przejść przez ulicę</span> (<b>przez</b> + знах. в.), <span class="pl">przejść obok kościoła</span> (<b>obok</b> + род. в.)</li>
<li><span class="pl">zejść ze schodów, zejść na parter</span></li>
<li><span class="pl">odejść od okna, odejść z pracy</span></li>
<li><span class="pl">dojść do dworca</span>; <span class="pl">obejść dom</span> (без прийменника, знах. в.)</li>
</ul>
<div class="ex"><span class="pl">Przepraszam, jak dojść do dworca?</span> — Перепрошую, як дійти до вокзалу?</div>
<div class="ex"><span class="pl">Szefa nie ma, wyszedł na obiad.</span> — Начальника немає, він вийшов на обід.</div>
<div class="tip">Пастки для україномовних:<br>1) <span class="pl">wszedł</span>, а не «wejszedł»; <span class="pl">zszedł</span>, але <span class="pl">zeszła, zeszli</span>.<br>2) Недоконаний вид від zejść — <span class="pl">schodzić</span> (не «zchodzić»), звідси й <span class="pl">schody</span> — сходи (пор. укр. «сходи», «сходити»).<br>3) Префікси збігаються не завжди. Укр. «увійти / зайти (до кімнати)» — це <span class="pl">wejść</span>, а не «zajść»: польське <span class="pl">zajść</span> — радше «заглянути дорогою, навідатися». Укр. «зійти (зі сходів, з гори)» — <span class="pl">zejść</span>. Укр. «піти» — це <span class="pl">wyjść</span> (з приміщення) або <span class="pl">odejść</span> (від когось, з роботи): <span class="pl">odszedł od żony</span> — пішов від дружини.<br>4) Сталі вирази: <span class="pl">wyjść za mąż</span> — вийти заміж; <span class="pl">przejść na emeryturę</span> — вийти на пенсію; <span class="pl">obchodzić urodziny</span> — святкувати день народження; <span class="pl">Co cię to obchodzi?</span> — Яке тобі діло?</div>`
      },
      exercises: [
        { type: "choice", q: "Puk, puk! — Proszę ___! Drzwi są otwarte.", options: ["wejść", "wyjść", "zejść"], answer: 0, explain: "На стук відповідають «Proszę wejść!» — «Заходьте!», «Увійдіть!». wyjść — вийти, zejść — зійти, спуститися." },
        { type: "choice", q: "Winda nie działa, więc musimy ___ na parter po schodach.", options: ["zejść", "wejść", "obejść"], answer: 0, explain: "На parter (перший поверх) ідемо згори вниз — це префікс z-: zejść (пор. укр. «зійти»)." },
        { type: "gap", q: "Wczoraj Marek ___ z biura dopiero o dziewiętnastej. (wyjść, мин. час)", answers: ["wyszedł"], explain: "wyjść → wyszedł (він), wyszła (вона): основа як в iść — szedł/szła." },
        { type: "gap", q: "Dziadek powoli ___ po schodach do piwnicy. (zejść, мин. час)", answers: ["zszedł"], explain: "zejść → zszedł (z + szedł), але вона — zeszła, вони — zeszli." },
        { type: "match", q: "З’єднайте дієслово з перекладом", pairs: [["przyjść", "прийти"], ["wyjść", "вийти"], ["wejść", "увійти, зайти"], ["zejść", "зійти, спуститися"], ["obejść", "обійти"], ["odejść", "відійти, піти"]], explain: "Префікс задає напрямок — майже як в українській: przy- — прибуття, wy- — назовні, w- — усередину, z- — униз, ob- — навколо, od- — геть." },
        { type: "choice", q: "Odejdź ___ okna, bo się przeziębisz!", options: ["od", "z", "przez"], answer: 0, explain: "odejść od + род. в. — відійти від чогось. odejść z — піти звідкись (odejść z pracy)." },
        { type: "gap", q: "Napisz SMS-a, kiedy ___ do domu. (dojść, ty)", answers: ["dojdziesz"], explain: "Про майбутнє — просте майбутнє доконаного виду: dojdę, dojdziesz, dojdzie. Як в українській: «коли дійдеш»." },
        { type: "choice", q: "Codziennie ___ obok tej piekarni i kupuję bułki.", options: ["przechodzę", "przejdę", "przeszedłem"], answer: 0, explain: "Codziennie — повторювана дія, потрібен недоконаний вид przechodzić: przechodzę." },
        { type: "order", ru: "Він вийшов з дому о восьмій.", words: ["Wyszedł", "z", "domu", "o", "ósmej."], alt: ["O ósmej wyszedł z domu."], explain: "wyjść z + род. в. (z domu); час — o ósmej, як укр. «о восьмій»." },
        { type: "translate", ru: "Ми вийшли з кіно о десятій.", answers: ["Wyszliśmy z kina o dziesiątej.", "O dziesiątej wyszliśmy z kina.", "Wyszłyśmy z kina o dziesiątej.", "O dziesiątej wyszłyśmy z kina."], explain: "wyjść z + род. в.: z kina. Ми (з чоловіками) — wyszliśmy, лише жінки — wyszłyśmy." }
      ],
      pronunciation: {
        focus: "wejść, przyjść, wyjść — групи приголосних",
        tip: `<p>У формах <span class="pl">wejść, przyjść, wyjść</span> після голосного йде ціле «гроно» приголосних: <b>j + ś + ć</b>. Вимовляйте його злито, не вставляючи голосних: язик швидко ковзає від [й] до м’якого [ш’] (це <b>ś</b> — звук між «сь» і «ш») і до м’якого [ч’] (це <b>ć</b> — звук між «ць» і «ч»).</p>
<p><b>rz</b> після <b>p</b> оглушується: <span class="pl">przyjść</span> звучить як [пшийш’ч’]. У минулому часі <span class="pl">wszedł</span> початкове <b>w</b> перед <b>sz</b> звучить як [ф] (а не як українське [ў] у «вже»), кінцеве <b>d</b> — як [т], а <b>ł</b> майже зникає: [фшет]. Увага: українська не оглушує дзвінких приголосних у кінці слова (дуб, сад), а польська оглушує завжди. У <span class="pl">zszedł</span> <b>z</b> і <b>sz</b> зливаються в довге [шш].</p>`,
        items: [
          { type: "listen", text: "wejść", ru: "увійти, зайти" },
          { type: "listen", text: "przyjść", ru: "прийти", note: "rz після p звучить як [ш]" },
          { type: "listen", text: "wszedł", ru: "увійшов", note: "[фшет]: w перед sz звучить як [ф]" },
          { type: "minimal", options: ["wejść", "wyjść"], ru: ["увійти", "вийти"] },
          { type: "minimal", options: ["przyjdę", "przejdę"], ru: ["прийду", "перейду"] },
          { type: "stress", word: "przechodzimy", syllables: ["prze", "cho", "dzi", "my"], answer: 2 },
          { type: "dictation", text: "Wyszedł z domu i przeszedł przez ulicę." }
        ]
      },
      reading: {
        title: "Kurier na Pradze",
        text: "Pan Tomek jest kurierem w Warszawie. W poniedziałek rano dostał paczkę dla pani Haliny Nowak: ulica Ząbkowska 12, mieszkanie 18. Ząbkowska to stara Praga – kamienice, bramy, podwórka i klatki schodowe, w których łatwo się zgubić.\n\nTomek doszedł do skrzyżowania, przeszedł przez ulicę na przejściu dla pieszych i stanął przed bramą. Domofon nie działał. Na szczęście jakiś przechodzień akurat wychodził z bramy, więc Tomek szybko wszedł na podwórko. Zobaczył tam trzy klatki schodowe: A, B i C. Nigdzie nie było listy lokatorów.\n\nNajpierw wszedł do klatki A. Winda oczywiście nie działała, więc wszedł po schodach na czwarte piętro. Mieszkania numer 18 tam nie było. Zszedł na parter, wyszedł na podwórko i obszedł cały budynek dookoła. Klatka B była zamknięta, a w klatce C na korytarzu siedział tylko kot i patrzył na kuriera z pogardą.\n\nPo dwudziestu minutach Tomek był zmęczony i zły. Usiadł na ławce przy wyjściu z podwórka. Wtedy podeszła do niego starsza pani z małym psem.\n— Pan do kogo? — zapytała.\n— Do pani Nowak, spod osiemnastki.\n— To ja! Ale wejście do mojego mieszkania jest od ulicy, przez kwiaciarnię. Mówiłam to już trzem kurierom!\n\nTomek oddał paczkę i odszedł z uśmiechem. Następnym razem najpierw zadzwoni.",
        glossary: [
          { pl: "kamienice", ru: "кам’яниці, старі багатоквартирні будинки" },
          { pl: "zgubić", ru: "заблукати (zgubić się)" },
          { pl: "akurat", ru: "якраз" },
          { pl: "listy lokatorów", ru: "списку мешканців" },
          { pl: "dookoła", ru: "довкола, навколо" },
          { pl: "z pogardą", ru: "з погордою, зі зневагою" },
          { pl: "na ławce", ru: "на лавці" },
          { pl: "spod osiemnastki", ru: "з 18-ї квартири" },
          { pl: "kwiaciarnię", ru: "квіткарню, квіткову крамницю" }
        ],
        questions: [
          { type: "tf", q: "Domofon w bramie działał.", answer: false, explain: "«Domofon nie działał» — Tomek зайшов, бо перехожий якраз виходив із брами." },
          { type: "tf", q: "Tomek wjechał windą na czwarte piętro.", answer: false, explain: "Ліфт не працював: «wszedł po schodach na czwarte piętro»." },
          { type: "choice", q: "Co zrobił Tomek po wyjściu z klatki A?", options: ["Obszedł cały budynek.", "Zadzwonił do pani Nowak.", "Wjechał windą na górę."], answer: 0, explain: "«Zszedł na parter, wyszedł na podwórko i obszedł cały budynek dookoła»." },
          { type: "choice", q: "Jak można wejść do mieszkania pani Nowak?", options: ["Przez klatkę C.", "Od ulicy, przez kwiaciarnię.", "Przez podwórko i bramę."], answer: 1, explain: "«Wejście do mojego mieszkania jest od ulicy, przez kwiaciarnię»." },
          { type: "tf", q: "Tomek nie był pierwszym kurierem z tym problemem.", answer: true, explain: "«Mówiłam to już trzem kurierom!»" }
        ]
      },
      writing: {
        prompt: "Подруга Оля в суботу вперше прийде до вас у гості. Напишіть їй повідомлення (80–120 слів): 1) на якій зупинці вийти і як дійти до будинку (перехрестя, перехід); 2) як увійти (брама — brama, домофон, код, під’їзд); 3) на якому ви поверсі (пам’ятайте про parter!) і чи працює ліфт; 4) що робити, якщо вона заблукає. Використайте наказовий спосіб і майбутній час префіксальних дієслів (przejdź, wejdź, wejdziesz…).",
        minWords: 80,
        maxWords: 120,
        useWords: ["skrzyżowanie", "przejście", "brama", "winda", "parter"],
        checklist: [
          { label: "Мінімум 4 форми префіксальних дієслів від iść (wejdź, przejdziesz, wyjdę…)", pattern: "\\p{L}+(jd|chodz|szed|szł|szl)\\p{L}*", min: 4 },
          { label: "Поверх: parter або piętro", pattern: "(parter|piętr)", min: 1 }
        ],
        model: "Cześć Ola! Bardzo się cieszę, że w sobotę przyjdziesz do mnie. Wysiądź z tramwaju na przystanku Plac Narutowicza i idź prosto do dużego skrzyżowania. Tam przejdź przez ulicę na przejściu dla pieszych i skręć w lewo. Mój dom to szara kamienica z zieloną bramą. Brama jest zawsze zamknięta, więc wpisz na domofonie kod 1945. Kiedy wejdziesz na podwórko, zobaczysz dwie klatki schodowe – wejdź do tej po prawej. Mieszkam na trzecim piętrze, ale pamiętaj, że w Polsce parter to nie pierwsze piętro! Winda często nie działa, więc pewnie wejdziesz po schodach. Jeśli się zgubisz, zadzwoń – wyjdę po ciebie. Do zobaczenia! Marta"
      }
    },

    // ===================== LESSON 2 =====================
    {
      id: "m10l2",
      title: "Przyjechać, wyjechać, dojechać",
      titleRu: "Префіксальні дієслова від jechać",
      topic: "Podróż pociągiem",
      review: false,
      minutes: 30,
      goals: [
        "Уживати префіксальні дієслова від jechać з правильними прийменниками (z, do, od, przez, za)",
        "Відмінювати недоконаний вид на -jeżdżać (dojeżdżam, przyjeżdżasz)",
        "Розуміти вокзальні оголошення й розповідати про поїздку потягом"
      ],
      vocab: [
        { pl: "peron", g: "m", ru: "платформа, перон", ex: "Pociąg do Krakowa odjeżdża z peronu trzeciego.", exRu: "Потяг до Кракова відправляється з третьої платформи." },
        { pl: "tor", g: "m", ru: "колія (залізнична)", ex: "Pociąg wjedzie na tor drugi przy peronie pierwszym.", exRu: "Потяг прибуде на другу колію біля першої платформи.", note: "peron і tor — різні номери!" },
        { pl: "przedział", g: "m", ru: "купе", ex: "Przedział jest pusty, możemy usiąść.", exRu: "Купе порожнє, можемо сісти." },
        { pl: "miejscówka", g: "f", ru: "бронювання місця (у потязі)", ex: "W pociągach Intercity miejscówka jest obowiązkowa.", exRu: "У потягах Intercity бронювання місця обов’язкове." },
        { pl: "bilet powrotny", g: "m", ru: "квиток туди й назад", ex: "Kupiłam bilet powrotny do Torunia.", exRu: "Я купила квиток туди й назад до Торуня.", note: "в один бік — bilet w jedną stronę" },
        { pl: "rozkład jazdy", g: "m", ru: "розклад (руху транспорту)", ex: "Sprawdź rozkład jazdy w aplikacji.", exRu: "Перевір розклад у застосунку." },
        { pl: "odjazd", g: "m", ru: "відправлення", ex: "Do odjazdu pociągu zostało pięć minut.", exRu: "До відправлення потяга залишилося п’ять хвилин." },
        { pl: "przyjazd", g: "m", ru: "прибуття", ex: "Czekam na przyjazd pociągu z Lublina.", exRu: "Я чекаю на прибуття потяга з Любліна." },
        { pl: "opóźnienie", g: "n", ru: "затримка, запізнення", ex: "Pociąg ma pół godziny opóźnienia.", exRu: "Потяг запізнюється на пів години.", note: "mieć opóźnienie — запізнюватися (про транспорт)" },
        { pl: "przesiadka", g: "f", ru: "пересадка", ex: "Do Zakopanego jadę z przesiadką w Krakowie.", exRu: "До Закопаного я їду з пересадкою в Кракові." },
        { pl: "konduktor", g: "m", ru: "провідник, контролер (у потязі)", ex: "Konduktor sprawdza bilety.", exRu: "Провідник перевіряє квитки." },
        { pl: "wysiadać / wysiąść", ru: "виходити / вийти (з транспорту)", ex: "Wysiadam na następnej stacji.", exRu: "Я виходжу на наступній станції.", note: "wysiąść z pociągu; сісти в транспорт — wsiąść do" },
        { pl: "spóźniać się / spóźnić się", ru: "запізнюватися / запізнитися", ex: "Spóźniłem się na pociąg o minutę.", exRu: "Я запізнився на потяг на хвилину.", note: "spóźnić się NA + знах. в.: na pociąg, na lekcję — як укр. «запізнитися на потяг»" }
      ],
      grammar: {
        title: "Префіксальні дієслова від jechać",
        html: `<p>З дієсловом <span class="pl">jechać</span> (їхати транспортом) працюють ті самі префікси, що й з <span class="pl">iść</span>, — і майже ті самі, що в українській: приїхати, виїхати, в’їхати, доїхати. Доконаний вид відмінюється як саме <span class="pl">jechać</span>: <span class="pl">jadę</span> → <span class="pl">przyjadę, wyjedziesz, dojedzie, przyjadą</span>; минулий час — <span class="pl">przyjechał, wyjechała, dojechali</span>.</p>
<table class="g"><tr><th>док. вид</th><th>недок. вид</th><th>значення</th><th>приклад</th></tr>
<tr><td class="pl">przyjechać</td><td class="pl">przyjeżdżać</td><td>приїхати</td><td class="pl">Przyjadę do Gdańska w piątek.</td></tr>
<tr><td class="pl">wyjechać</td><td class="pl">wyjeżdżać</td><td>поїхати, виїхати</td><td class="pl">Wyjechali z Polski za granicę.</td></tr>
<tr><td class="pl">wjechać</td><td class="pl">wjeżdżać</td><td>в’їхати</td><td class="pl">Pociąg wjeżdża na stację.</td></tr>
<tr><td class="pl">dojechać</td><td class="pl">dojeżdżać</td><td>доїхати</td><td class="pl">Jak dojechać do centrum?</td></tr>
<tr><td class="pl">przejechać</td><td class="pl">przejeżdżać</td><td>проїхати, переїхати</td><td class="pl">Przejechaliśmy przez most.</td></tr>
<tr><td class="pl">odjechać</td><td class="pl">odjeżdżać</td><td>від’їхати, відправитися</td><td class="pl">Autobus odjechał z przystanku.</td></tr>
<tr><td class="pl">zjechać</td><td class="pl">zjeżdżać</td><td>з’їхати, спуститися</td><td class="pl">Zjechaliśmy z autostrady.</td></tr></table>
<h4>Недоконаний вид: -jeżdżać — відмінювання на -am!</h4>
<p>Пара утворюється від <span class="pl">jeździć</span>, але відмінюється як <span class="pl">czytać</span>: <span class="pl">przyjeżdżam, przyjeżdżasz, przyjeżdża, przyjeżdżamy, przyjeżdżacie, przyjeżdżają</span>. Порівняйте: <span class="pl">jeżdżę</span> (я їжджу), але <span class="pl">dojeżdżam</span> (я доїжджаю, їжджу на роботу).</p>
<h4>Прийменники</h4>
<ul>
<li><b>z</b> + род. в. — звідки: <span class="pl">przyjechać z Krakowa, wyjechać z garażu, zjechać z góry</span></li>
<li><b>do</b> + род. в. — куди (місто, країна, будівля), як укр. «до Познані»: <span class="pl">dojechać do Poznania</span>; <b>na</b> + знах. в. — на вокзал, на захід, у регіон: <span class="pl">przyjechać na dworzec, na Mazury</span></li>
<li><b>od</b> + род. в. — від: <span class="pl">odjechać od peronu</span></li>
<li><b>przez</b> + знах. в. — через: <span class="pl">przejechać przez Warszawę</span></li>
<li><b>za</b> + знах. в. — за (напрямок): <span class="pl">wyjechać za granicę, za miasto</span>; але місце — <b>za</b> + оруд. в. (як укр. «за кордон — за кордоном»): <span class="pl">mieszkać za granicą</span></li>
</ul>
<div class="ex"><span class="pl">Pociąg do Gdyni odjeżdża z peronu drugiego.</span> — Потяг до Гдині відправляється з другої платформи.</div>
<div class="ex"><span class="pl">Codziennie dojeżdżam do pracy z Pruszkowa.</span> — Я щодня їжджу на роботу з Прушкова.</div>
<div class="tip">Пастки для україномовних:<br>1) <span class="pl">przejechać przystanek</span> — проїхати свою зупинку (без прийменника!), а <span class="pl">przejechać kogoś</span> — збити, переїхати людину.<br>2) З транспорту ми <span class="pl">wysiadamy</span>, а не «wyjeżdżamy», хоча українською кажемо «виходжу»: <span class="pl">Wysiadam na następnym przystanku.</span><br>3) <span class="pl">dojeżdżać do pracy</span> — регулярно їздити на роботу (часто здалеку), як укр. «доїжджати на роботу».<br>4) У вокзальних оголошеннях <span class="pl">tor</span> — колія, <span class="pl">peron</span> — платформа: <span class="pl">wjedzie na tor drugi przy peronie czwartym</span>.</div>`
      },
      exercises: [
        { type: "choice", q: "Pociąg do Gdyni ___ z peronu trzeciego o 14:25.", options: ["odjeżdża", "przejeżdża", "zjeżdża"], answer: 0, explain: "odjeżdżać — відправлятися (про транспорт). Звідси odjazd — відправлення." },
        { type: "choice", q: "Zasnąłem w pociągu i ___ swoją stację!", options: ["przejechałem", "dojechałem", "wjechałem"], answer: 0, explain: "przejechać stację / przystanek — проїхати (пропустити) свою зупинку. Без прийменника!" },
        { type: "gap", q: "Jutro ___ do Krakowa wcześnie rano. (przyjechać, ja)", answers: ["przyjadę"], explain: "przyjechać відмінюється як jechać: jadę → przyjadę. Доконаний вид → майбутній час." },
        { type: "gap", q: "Ile czasu ___ do pracy? (dojeżdżać, ty)", answers: ["dojeżdżasz"], explain: "Недоконаний вид на -jeżdżać відмінюється на -am/-asz: dojeżdżam, dojeżdżasz. Не «dojeżdżysz»!" },
        { type: "gap", q: "Rodzice ___ wczoraj na wakacje do Chorwacji. (wyjechać, мин. час)", answers: ["wyjechali"], explain: "Rodzice — чоловічо-особова група, тому -li: wyjechali." },
        { type: "choice", q: "Przepraszam, czy pani ___ na następnym przystanku?", options: ["wysiada", "wyjeżdża", "zjeżdża"], answer: 0, explain: "З транспорту виходять — wysiadać/wysiąść. wyjeżdżać — виїжджати (з міста, країни)." },
        { type: "choice", q: "Uwaga! Pociąg ze stacji Warszawa Centralna ___ na tor drugi przy peronie trzecim.", options: ["wjedzie", "wyjedzie", "zjedzie"], answer: 0, explain: "Типове вокзальне оголошення: pociąg wjedzie na tor… — потяг прибуде (в’їде) на колію…" },
        { type: "match", q: "З’єднайте дієслово з перекладом", pairs: [["przyjechać", "приїхати"], ["wyjechać", "поїхати, виїхати"], ["wjechać", "в’їхати"], ["dojechać", "доїхати"], ["przejechać", "проїхати, переїхати"], ["zjechać", "з’їхати"]], explain: "Префікси ті самі, що в iść: przy- — прибуття, wy- — назовні, w- — усередину, do- — до мети, prze- — через, z- — униз/убік." },
        { type: "order", ru: "Ми запізнилися на потяг до Познані.", words: ["Spóźniliśmy", "się", "na", "pociąg", "do", "Poznania."], alt: [], explain: "spóźnić się na + знах. в. (na pociąg); напрямок потяга — do + род. в. (do Poznania), як укр. «до Познані»." },
        { type: "translate", ru: "Потяг запізнюється на двадцять хвилин.", answers: ["Pociąg ma dwadzieścia minut opóźnienia.", "Pociąg ma 20 minut opóźnienia.", "Pociąg jest opóźniony o dwadzieścia minut.", "Pociąg spóźnia się o dwadzieścia minut."], explain: "Про транспорт частіше кажуть «mieć opóźnienie»: Pociąg ma dwadzieścia minut opóźnienia." }
      ],
      pronunciation: {
        focus: "przyjeżdżać, wyjeżdżać — ż / dż",
        tip: `<p><b>ż</b> — твердий звук, як українське [ж] у слові «жук». <b>dż</b> — один злитий звук, тверде [дж], як у «джерело», «бджола». У формах <span class="pl">przyjeżdżać, wyjeżdżam, dojeżdża</span> вони йдуть поспіль: [ж] + [дж] — точнісінько як в українських «приїжджати, виїжджаю, доїжджає»! Вимовляйте так само, як рідне [ждж], і не спрощуйте до [жж].</p>
<p>Порівняйте з м’якою парою в <span class="pl">jeździć</span>: <b>ź</b> + <b>dź</b> — м’які [ж’] + [дж’]. Отже: <span class="pl">jeździsz</span> — м’яко, а <span class="pl">jeżdżę</span> і <span class="pl">przyjeżdżam</span> — твердо. Чергування те саме, що в українській: «їздиш — їжджу».</p>`,
        items: [
          { type: "listen", text: "przyjeżdżać", ru: "приїжджати", note: "rz після p = [ш], далі тверді ż + dż" },
          { type: "listen", text: "wyjeżdżamy", ru: "ми виїжджаємо" },
          { type: "listen", text: "jeździsz", ru: "ти їздиш", note: "м’яке źdź — порівняйте з твердим żdż" },
          { type: "minimal", options: ["wjazd", "wyjazd"], ru: ["в’їзд", "виїзд"] },
          { type: "minimal", options: ["przyjazd", "przejazd"], ru: ["прибуття", "проїзд"] },
          { type: "stress", word: "przyjeżdżamy", syllables: ["przy", "jeż", "dża", "my"], answer: 2 },
          { type: "dictation", text: "Codziennie dojeżdżam do pracy pociągiem." }
        ]
      },
      reading: {
        title: "Pierogi pani Zofii",
        text: "Kasia mieszka w Krakowie, ale w sobotę jej najlepsza przyjaciółka bierze ślub w Gdyni. Kasia kupiła w aplikacji bilet na pociąg Intercity z miejscówką w przedziale – oczywiście przy oknie.\n\nW piątek przyjechała tramwajem na dworzec Kraków Główny pół godziny przed odjazdem. Na tablicy zobaczyła jednak czerwony napis: „opóźnienie 40 min”. Westchnęła i poszła na kawę. W końcu usłyszała komunikat: „Pociąg Intercity do stacji Gdynia Główna wjedzie na tor drugi przy peronie czwartym. Prosimy zachować ostrożność!”\n\nW przedziale siedziała starsza pani z ogromną torbą. Zanim pociąg wyjechał z Krakowa, Kasia znała już historię całej jej rodziny. Pani Zofia jechała do wnuka do Sopotu i wiozła mu sto pierogów z mięsem.\n\nPociąg przejechał przez Warszawę i Iławę. Kasia zasnęła. Obudził ją dopiero konduktor:\n— Proszę pani, dojeżdżamy do Gdyni! Pani tu wysiada?\n\nKasia otworzyła oczy. Pani Zofii już nie było – wysiadła w Sopocie. Na siedzeniu leżało jednak pudełko z pierogami i karteczka: „Dla pani na wesele. Wnuk i tak wszystkiego nie zje!”\n\nKasia wysiadła z pociągu w ostatniej chwili – prawie przejechała swoją stację. Ale o pierogach nie zapomniała. Na weselu pierogi pani Zofii były największym hitem, nawet większym niż tort.",
        glossary: [
          { pl: "bierze ślub", ru: "бере шлюб, виходить заміж" },
          { pl: "Westchnęła", ru: "зітхнула" },
          { pl: "komunikat", ru: "оголошення" },
          { pl: "zachować ostrożność", ru: "дотримуватися обережності" },
          { pl: "wiozła", ru: "везла" },
          { pl: "Obudził", ru: "розбудив" },
          { pl: "karteczka", ru: "записочка" },
          { pl: "wesele", ru: "весілля (свято)" },
          { pl: "w ostatniej chwili", ru: "в останню мить" }
        ],
        questions: [
          { type: "tf", q: "Pociąg z Krakowa odjechał punktualnie.", answer: false, explain: "На табло було «opóźnienie 40 min» — затримка 40 хвилин." },
          { type: "choice", q: "Przy którym peronie zatrzymał się pociąg do Gdyni?", options: ["przy drugim", "przy czwartym", "przy pierwszym"], answer: 1, explain: "«wjedzie na tor drugi przy peronie czwartym»: колія друга, а платформа — четверта." },
          { type: "tf", q: "Pani Zofia jechała do Gdyni.", answer: false, explain: "Вона їхала до онука в Сопот і там вийшла." },
          { type: "choice", q: "Kto obudził Kasię?", options: ["pani Zofia", "konduktor", "przyjaciółka"], answer: 1, explain: "«Obudził ją dopiero konduktor»." },
          { type: "tf", q: "Kasia prawie przejechała swoją stację.", answer: true, explain: "Вона вийшла «w ostatniej chwili – prawie przejechała swoją stację»." }
        ]
      },
      writing: {
        prompt: "Ви їдете потягом у гості до друга Бартека в інше місто. Напишіть йому повідомлення (80–130 слів): 1) звідки, коли і з якої платформи ви виїжджаєте; 2) чи є пересадка і де; 3) коли й на який вокзал приїжджаєте, що буде, якщо потяг запізниться; 4) попросіть зустріти вас (wyjechać po kogoś na dworzec) або запитайте, як до нього доїхати.",
        minWords: 80,
        maxWords: 130,
        useWords: ["peron", "przesiadka", "opóźnienie", "miejscówka"],
        checklist: [
          { label: "Мінімум 3 префіксальні дієслова від jechać (wyjeżdżam, przyjadę, dojechać…)", pattern: "\\p{L}+(jech|jad|jedzi|jeżdż)\\p{L}*", min: 3 },
          { label: "Час відправлення або прибуття (o 8:15, o ósmej)", pattern: "\\bo (\\d{1,2}[:.]\\d{2}|\\p{L}+ej\\b)", min: 1 }
        ],
        model: "Cześć Bartek! Mam już bilet na sobotę. Wyjeżdżam z Wrocławia o 8:15 z peronu trzeciego. Niestety nie ma bezpośredniego pociągu, więc mam przesiadkę w Poznaniu – tylko dwanaście minut, mam nadzieję, że zdążę! Kupiłam miejscówkę przy oknie, więc będę mogła trochę popracować. Do Szczecina przyjeżdżam o 13:05, na dworzec Szczecin Główny. Jeśli pociąg będzie miał opóźnienie, napiszę ci SMS-a. Czy mógłbyś wyjechać po mnie na dworzec? Mam ciężką walizkę, a nie wiem jeszcze, jak dojechać do ciebie tramwajem. Jeśli nie dasz rady, nie ma problemu – wezmę taksówkę. Do zobaczenia w sobotę! Ania"
      }
    },

    // ===================== LESSON 3 =====================
    {
      id: "m10l3",
      title: "O której? Którego?",
      titleRu: "Час і дати",
      topic: "Kalendarz",
      review: false,
      minutes: 30,
      goals: [
        "Казати, котра година і о котрій — офіційно й розмовно (wpół do, za kwadrans, kwadrans po)",
        "Називати дати: piątego maja 2025 roku",
        "Уживати прийменники часу przed, po, za, temu, od…do",
        "Домовлятися про зустріч, переносити й скасовувати її"
      ],
      vocab: [
        { pl: "kwadrans", g: "m", ru: "чверть години", ex: "Pociąg odjeżdża za kwadrans.", exRu: "Потяг відправляється через чверть години." },
        { pl: "termin", g: "m", ru: "термін, строк; запис (на прийом)", ex: "Mam termin u dentysty na wtorek.", exRu: "У мене запис до стоматолога на вівторок.", note: "не лише «термін»: ще й «запис, вільна година прийому»" },
        { pl: "umawiać się / umówić się", ru: "домовлятися / домовитися (про зустріч)", ex: "Umówiłam się z Kasią na kawę.", exRu: "Я домовилася з Касею на каву.", note: "z + оруд. в. (з ким), na + знах. в. (на що) — як в українській" },
        { pl: "przekładać / przełożyć", ru: "переносити / перенести (зустріч)", ex: "Możemy przełożyć spotkanie na czwartek?", exRu: "Можемо перенести зустріч на четвер?", note: "також «перекладати» (книжку) — як в українській" },
        { pl: "odwoływać / odwołać", ru: "скасовувати / скасувати", ex: "Szef odwołał zebranie.", exRu: "Начальник скасував нараду." },
        { pl: "dzień wolny", g: "m", ru: "вихідний (день)", ex: "W piątek mam dzień wolny.", exRu: "У п’ятницю в мене вихідний.", note: "розм.: mam wolne" },
        { pl: "urlop", g: "m", ru: "відпустка", ex: "Biorę urlop w sierpniu.", exRu: "Я беру відпустку в серпні.", note: "wakacje — канікули, літній відпочинок; urlop — відпустка на роботі" },
        { pl: "święto", g: "n", ru: "свято", ex: "Jedenastego listopada obchodzimy Święto Niepodległości.", exRu: "Одинадцятого листопада ми святкуємо День незалежності Польщі." },
        { pl: "zeszły", ru: "минулий", ex: "W zeszłym tygodniu byłem w Toruniu.", exRu: "Минулого тижня я був у Торуні." },
        { pl: "przyszły", ru: "наступний, майбутній", ex: "W przyszłym miesiącu jadę do Gdańska.", exRu: "Наступного місяця я їду до Гданська." },
        { pl: "pojutrze", ru: "післязавтра", ex: "Pojutrze mam egzamin.", exRu: "Післязавтра в мене іспит." },
        { pl: "przedwczoraj", ru: "позавчора", ex: "Przedwczoraj padał śnieg.", exRu: "Позавчора падав сніг." },
        { pl: "doba", g: "f", ru: "доба", ex: "Sklep jest czynny całą dobę.", exRu: "Магазин працює цілодобово.", note: "całą dobę — цілодобово (укр. «доба» — те саме слово)" }
      ],
      grammar: {
        title: "Час і дати: o której? którego?",
        html: `<h4>Котра година? О котрій?</h4>
<p>Години в польській — це <b>порядкові числівники жіночого роду</b> (мають на увазі слово <span class="pl">godzina</span>), точнісінько як в українській: «восьма», «дванадцята». «Котра година?» — <span class="pl">Która (jest) godzina?</span> — <span class="pl">Jest ósma.</span> «О котрій?» — <span class="pl">O której?</span> — <b>o + місцевий відмінок</b>: <span class="pl">o ósmej, o dwunastej, o dwudziestej pierwszej</span> — як укр. «о восьмій, о дванадцятій». Зверніть увагу: у складених числах польська робить порядковими обидва слова (дослівно «о двадцятій першій»).</p>
<table class="g"><tr><th></th><th>офіційно</th><th>розмовно</th></tr>
<tr><td>8:05</td><td class="pl">ósma pięć</td><td class="pl">pięć po ósmej</td></tr>
<tr><td>8:15</td><td class="pl">ósma piętnaście</td><td class="pl">kwadrans po ósmej</td></tr>
<tr><td>8:30</td><td class="pl">ósma trzydzieści</td><td class="pl">wpół do dziewiątej</td></tr>
<tr><td>8:45</td><td class="pl">ósma czterdzieści pięć</td><td class="pl">za kwadrans dziewiąta</td></tr>
<tr><td>8:50</td><td class="pl">ósma pięćdziesiąt</td><td class="pl">za dziesięć dziewiąta</td></tr>
<tr><td>17:40</td><td class="pl">siedemnasta czterdzieści</td><td class="pl">za dwadzieścia szósta</td></tr></table>
<p>Відмінки в розмовних формах: <b>po</b> + місц. (<span class="pl">po ósmej</span>), <b>wpół do</b> + род. (<span class="pl">wpół do dziewiątej</span>), <b>za</b> + наз. (<span class="pl">za kwadrans dziewiąta</span>). «О котрій?»: <span class="pl">o wpół do dziewiątej</span> (укр. «о пів на дев’яту»), але просто <span class="pl">kwadrans po ósmej</span> і <span class="pl">za kwadrans dziewiąta</span> — без o.</p>
<div class="tip">Тут українська майже збігається з польською: <span class="pl">wpół do dziewiątej</span> — це 8:30, як укр. «пів на дев’яту» (наступна година!); «за чверть дев’ята» — <span class="pl">za kwadrans dziewiąta</span>; «о восьмій» — тільки <span class="pl">o ósmej</span>, ніколи не «w osiem». Відмінність одна: укр. «чверть на дев’яту» (8:15) — польською <span class="pl">kwadrans po ósmej</span>, дослівно «чверть по восьмій»: тут відлік іде від попередньої години. Так само «п’ять хвилин на дев’яту» — <span class="pl">pięć po ósmej</span>.</div>
<h4>Дати</h4>
<p>«Яке сьогодні число?» — <span class="pl">Który dzisiaj jest?</span> — <span class="pl">Piąty maja.</span> (або <span class="pl">Którego dzisiaj mamy? — Piątego.</span>) «Коли?» — число й місяць у <b>родовому відмінку</b> без прийменника, як в українській: <span class="pl">piątego maja</span> — «п’ятого травня». Рік окремо — <span class="pl">w 2025 roku</span> (<span class="pl">w dwa tysiące dwudziestym piątym roku</span>), а в повній даті — теж родовий: <span class="pl">piątego maja 2025 r.</span> (<span class="pl">dwa tysiące dwudziestego piątego roku</span>). Порівняйте: в укр. «дві тисячі двадцять п’ятого року» змінюється лише останнє слово, а польською порядковими стають і десятки, і одиниці. Місяць без числа: <span class="pl">w maju, w październiku</span> — у травні, у жовтні.</p>
<div class="tip">Добра новина: польські назви місяців — слов’янські, і більшість збігається з українськими: <span class="pl">lipiec</span> — липень, <span class="pl">listopad</span> — листопад, <span class="pl">kwiecień</span> — квітень, <span class="pl">sierpień</span> — серпень, <span class="pl">luty</span> — лютий, а також <span class="pl">czerwiec, wrzesień, grudzień</span> — червень, вересень, грудень. Інакше звучать лише <span class="pl">styczeń, marzec, maj, październik</span> — січень, березень, травень, жовтень. Родовий: <span class="pl">lutego, kwietnia, lipca, sierpnia, listopada</span>.</div>
<h4>Прийменники часу</h4>
<table class="g"><tr><th>прийменник</th><th>відмінок</th><th>приклад</th><th>переклад</th></tr>
<tr><td class="pl">przed</td><td>оруд. в.</td><td class="pl">przed obiadem, przed piątą</td><td>перед обідом, до п’ятої</td></tr>
<tr><td class="pl">po</td><td>місц. в.</td><td class="pl">po pracy, po piątej</td><td>після роботи, після п’ятої</td></tr>
<tr><td class="pl">za</td><td>знах. в.</td><td class="pl">za tydzień, za godzinę</td><td>через тиждень, за годину</td></tr>
<tr><td class="pl">… temu</td><td>знах. в.</td><td class="pl">tydzień temu, dwa lata temu</td><td>тиждень тому, два роки тому</td></tr>
<tr><td class="pl">od … do</td><td>род. в.</td><td class="pl">od poniedziałku do piątku</td><td>з понеділка до п’ятниці</td></tr></table>
<div class="tip">Пастка: укр. «за тиждень» має два значення, а <span class="pl">za tydzień</span> — лише одне! <span class="pl">Za tydzień</span> = «через тиждень» (у майбутньому). «Я зробив це за тиждень» — <span class="pl">Zrobiłem to w tydzień</span>, а «протягом тижня» — <span class="pl">przez tydzień</span>. Зате <span class="pl">temu</span> — точно як укр. «тому»: завжди стоїть <b>після</b> відрізку часу.</div>`
      },
      exercises: [
        { type: "choice", q: "8:30 — jest ___.", options: ["wpół do dziewiątej", "wpół do ósmej", "pół po ósmej"], answer: 0, explain: "Як укр. «пів на дев’яту»: wpół do + наступна година в род. в." },
        { type: "choice", q: "Pociąg odjeżdża o 7:45, czyli ___.", options: ["za kwadrans ósma", "kwadrans po ósmej", "za kwadrans siódma"], answer: 0, explain: "7:45 — за чверть восьма: za kwadrans ósma (za + наз. в.), як в українській. kwadrans po ósmej — це 8:15." },
        { type: "gap", q: "Lekcja zaczyna się o ___. (10:00)", answers: ["dziesiątej"], explain: "o + місцевий відмінок порядкового числівника ж. р.: o dziesiątej — як укр. «о десятій»." },
        { type: "gap", q: "Urodziłem się ___ marca. (5, порядковий)", answers: ["piątego"], explain: "«Коли?» — дата в род. в. без прийменника: piątego marca — як укр. «п’ятого березня»." },
        { type: "gap", q: "Byłem w Gdańsku dwa lata ___. (тому)", answers: ["temu"], explain: "temu, як і укр. «тому», стоїть ПІСЛЯ відрізку часу: dwa lata temu." },
        { type: "choice", q: "Wracam z urlopu ___ tydzień.", options: ["za", "przez", "po"], answer: 0, explain: "za + знах. в. — «через, за» (у майбутньому). przez tydzień — протягом тижня." },
        { type: "gap", q: "Sklep jest otwarty od poniedziałku do ___. (sobota)", answers: ["soboty"], explain: "od … do + род. в.: sobota → soboty." },
        { type: "match", q: "З’єднайте місяць із перекладом", pairs: [["luty", "лютий"], ["kwiecień", "квітень"], ["lipiec", "липень"], ["sierpień", "серпень"], ["październik", "жовтень"], ["listopad", "листопад"]], explain: "Польські назви місяців — слов’янські, як і українські: luty — лютий, lipiec — липень (цвіте липа), listopad — листопад (опадає листя). Із цих шести інакше звучить лише październik — жовтень." },
        { type: "order", ru: "Ми перенесли зустріч на наступну п’ятницю.", words: ["Przełożyliśmy", "spotkanie", "na", "przyszły", "piątek."], alt: ["Spotkanie przełożyliśmy na przyszły piątek."], explain: "przełożyć coś na + знах. в.: na przyszły piątek." },
        { type: "translate", ru: "Ми зустрінемося через годину.", answers: ["Spotkamy się za godzinę.", "Za godzinę się spotkamy.", "Zobaczymy się za godzinę.", "Za godzinę się zobaczymy."], explain: "«через» (укр. також «за») про майбутнє — za + знах. в.: za godzinę." }
      ],
      pronunciation: {
        focus: "Порядкові числівники (dwudziestego trzeciego)",
        tip: `<p>Порядкові числівники — довгі слова, а в датах вони йдуть парами: <span class="pl">dwudziestego trzeciego</span> (укр. «двадцять третього», де змінюється лише друге слово). Кожне слово зберігає свій наголос на передостанньому складі: dwu-dzie-<b>STE</b>-go trze-<b>CIE</b>-go.</p>
<p>Головне: закінчення <b>-ego</b> звучить чітко — [еґо], з <b>вибуховим [ґ]</b>, як у «ґанок», а не з українським [г]! І не підміняйте його звичним «-ого»: польською — <b>-ego</b>. <b>trz</b> = [т] + [ш], <b>ci</b> — м’яке [ч’] (між «ць» і «ч»). Закінчення <b>-ej</b> у годинах (<span class="pl">o ósmej</span>) — [ей].</p>`,
        items: [
          { type: "listen", text: "dwudziestego trzeciego października", ru: "двадцять третього жовтня" },
          { type: "listen", text: "dwa tysiące dwudziestego piątego roku", ru: "2025 року" },
          { type: "listen", text: "o siedemnastej czterdzieści", ru: "о 17:40" },
          { type: "minimal", options: ["drugiego", "drugiej"], ru: ["другого (числа)", "о другій (o drugiej)"] },
          { type: "stress", word: "października", syllables: ["paź", "dzier", "ni", "ka"], answer: 2 },
          { type: "stress", word: "dwudziestego", syllables: ["dwu", "dzie", "ste", "go"], answer: 2 },
          { type: "dictation", text: "Spotkanie jest we wtorek o wpół do dziewiątej." }
        ]
      },
      reading: {
        title: "Kalendarz pana Wiesława",
        text: "Pan Wiesław od dwóch lat jest na emeryturze, ale ma więcej spotkań niż jego syn, który pracuje w korporacji. Jego papierowy kalendarz jest zawsze pełny.\n\nW poniedziałki o wpół do dziewiątej pan Wiesław chodzi na basen, a kwadrans po dziesiątej pije kawę z kolegami z dawnej pracy. We wtorki od dziesiątej do dwunastej pomaga w bibliotece. W środy jeździ na działkę, a w czwartki o siedemnastej trzydzieści gra w brydża.\n\nPrzedwczoraj zadzwonił do niego syn.\n— Tato, wpadnę do ciebie w przyszłym tygodniu. Pasuje ci środa?\n— W środę nie mogę, jadę na działkę.\n— A czwartek?\n— Brydż. Może pojutrze, za kwadrans siódma? Ale tylko na pół godziny, bo o wpół do ósmej zaczyna się mój serial.\n\nNajtrudniej było jednak z kardiologiem. W styczniu pan Wiesław zadzwonił do przychodni, żeby umówić się na wizytę. Pani w rejestracji powiedziała:\n— Najbliższy wolny termin na NFZ to dwudziesty trzeci października dwa tysiące dwudziestego ósmego roku, o ósmej piętnaście.\n— A jaki to dzień tygodnia? — zapytał spokojnie pan Wiesław.\n— Poniedziałek.\n— O nie, w poniedziałki mam basen! Nie ma nic we wtorek po dwunastej?\n\nPani w rejestracji długo milczała. W końcu przełożyła wizytę na wtorek, dwudziestego czwartego października, kwadrans po dwunastej. Pan Wiesław zapisał ten termin w kalendarzu – na ostatniej stronie, bo kalendarza na 2028 rok jeszcze nie ma.",
        glossary: [
          { pl: "na emeryturze", ru: "на пенсії" },
          { pl: "na działkę", ru: "на дачну ділянку" },
          { pl: "brydża", ru: "бридж (карткова гра)" },
          { pl: "wpadnę", ru: "заскочу, загляну" },
          { pl: "Pasuje ci", ru: "тобі підходить, тобі зручно" },
          { pl: "przychodni", ru: "поліклініка" },
          { pl: "w rejestracji", ru: "у реєстратурі" },
          { pl: "milczała", ru: "мовчала" }
        ],
        questions: [
          { type: "tf", q: "Pan Wiesław pracuje w korporacji.", answer: false, explain: "У корпорації працює його син, а пан Веслав — на пенсії." },
          { type: "choice", q: "O której pan Wiesław chodzi na basen?", options: ["o 8:30", "o 9:30", "o 10:15"], answer: 0, explain: "«o wpół do dziewiątej» = 8:30 (пів на дев’яту)." },
          { type: "choice", q: "Kiedy pan Wiesław proponuje synowi spotkanie?", options: ["w środę", "w czwartek", "pojutrze"], answer: 2, explain: "«Może pojutrze, za kwadrans siódma?» — у середу в нього дача, у четвер бридж." },
          { type: "tf", q: "Na wizytę u kardiologa pan Wiesław czeka tylko kilka dni.", answer: false, explain: "Найближчий вільний запис — лише на жовтень 2028 року." },
          { type: "tf", q: "Pan Wiesław nie chciał wizyty w poniedziałek, bo w poniedziałki chodzi na basen.", answer: true, explain: "«O nie, w poniedziałki mam basen!»" }
        ]
      },
      writing: {
        prompt: "Ви домовилися з колегою Павлом про зустріч, але не можете прийти. Напишіть йому повідомлення (80–130 слів): 1) перепросіть і скажіть, що треба перенести зустріч (коли її було призначено — день, дата, час); 2) поясніть причину; 3) запропонуйте два нові варіанти (день, дата й час словами: o wpół do…, kwadrans po…); 4) попросіть відповісти, який варіант підходить.",
        minWords: 80,
        maxWords: 130,
        useWords: ["przełożyć", "termin", "pojutrze", "kwadrans", "przyszły"],
        checklist: [
          { label: "Час: o + порядковий числівник (o ósmej, o wpół do dziesiątej) — мінімум 2 рази", pattern: "\\bo (wpół do )?\\p{L}+ej\\b", min: 2 },
          { label: "Дата: число + місяць у род. в. (dwunastego czerwca)", pattern: "(\\d{1,2}|\\p{L}+ego) (stycznia|lutego|marca|kwietnia|maja|czerwca|lipca|sierpnia|września|października|listopada|grudnia)", min: 1 }
        ],
        model: "Cześć Paweł! Bardzo cię przepraszam, ale muszę przełożyć nasze spotkanie w sprawie projektu. Mieliśmy się zobaczyć w czwartek, dwunastego czerwca, o wpół do dziesiątej, ale właśnie dostałam termin u dentysty – akurat na ten dzień i tę godzinę. Czekałam na niego trzy miesiące, więc nie chcę go odwoływać. Mam dwie propozycje. Możemy spotkać się pojutrze, czyli w piątek, kwadrans po ósmej. Albo w przyszłym tygodniu, we wtorek, siedemnastego czerwca, o czternastej. Od dziewiątej do dwunastej mam wtedy szkolenie, ale po obiedzie jestem wolna. Daj znać, który termin ci pasuje. Pozdrawiam, Ola"
      }
    },

    // ===================== LESSON 4 =====================
    {
      id: "m10l4",
      title: "Zanim, dopóki, odkąd",
      titleRu: "Часові сполучники",
      topic: "Opowiadanie historii",
      review: false,
      minutes: 30,
      goals: [
        "Пов’язувати події сполучниками kiedy, zanim, dopóki (nie), jak tylko, odkąd, podczas gdy",
        "Обирати вид дієслова в складному реченні (тло й подія)",
        "Розповідати історію з «драматургією»: nagle, tymczasem, w końcu"
      ],
      vocab: [
        { pl: "nagle", ru: "раптом", ex: "Nagle zgasło światło.", exRu: "Раптом згасло світло." },
        { pl: "wtedy", ru: "тоді", ex: "Miałem wtedy dziesięć lat.", exRu: "Мені тоді було десять років." },
        { pl: "na początku", ru: "на початку, спочатку", ex: "Na początku nic nie rozumiałem.", exRu: "Спочатку я нічого не розумів." },
        { pl: "w końcu", ru: "нарешті, врешті-решт", ex: "W końcu przyjechał autobus.", exRu: "Нарешті приїхав автобус." },
        { pl: "tymczasem", ru: "тим часом", ex: "Tymczasem zaczęło padać.", exRu: "Тим часом почався дощ." },
        { pl: "od razu", ru: "одразу", ex: "Od razu zadzwoniłem na policję.", exRu: "Я одразу зателефонував до поліції." },
        { pl: "po chwili", ru: "за мить, за хвильку", ex: "Po chwili wszystko było jasne.", exRu: "За мить усе стало ясно." },
        { pl: "okazywać się / okazać się", ru: "виявлятися / виявитися", ex: "Okazało się, że sklep jest zamknięty.", exRu: "Виявилося, що магазин зачинений." },
        { pl: "przydarzyć się", ru: "трапитися (з кимось)", ex: "Przydarzyła mi się dziwna historia.", exRu: "Зі мною трапилася дивна історія.", note: "komu: przydarzyło mi się…" },
        { pl: "przypominać sobie / przypomnieć sobie", ru: "згадувати / згадати", ex: "Nagle przypomniałam sobie o spotkaniu.", exRu: "Раптом я згадала про зустріч.", note: "przypomnieć KOMUŚ — нагадати; przypomnieć SOBIE — згадати" },
        { pl: "zorientować się", ru: "збагнути, спохопитися, зрозуміти", ex: "Dopiero w domu zorientowałem się, że nie mam portfela.", exRu: "Лише вдома я спохопився, що в мене немає гаманця.", note: "хибний друг: зазвичай не «орієнтуватися»" },
        { pl: "dziwić się / zdziwić się", ru: "дивуватися / здивуватися", ex: "Bardzo się zdziwiłem, kiedy go zobaczyłem.", exRu: "Я дуже здивувався, коли його побачив.", note: "czemu? — zdziwić się czemuś (дав. в.), як укр. «здивуватися чомусь»" }
      ],
      grammar: {
        title: "Часові сполучники: kiedy, zanim, dopóki, odkąd…",
        html: `<p>Щоб розповідати історії, треба пов’язувати події в часі. Польські сполучники дуже схожі на українські (<span class="pl">dopóki</span> — допоки, <span class="pl">odkąd</span> — відколи), але є важливі відмінності — у формі дієслова та в запереченні.</p>
<table class="g"><tr><th>сполучник</th><th>значення</th><th>приклад</th></tr>
<tr><td class="pl">kiedy / gdy</td><td>коли</td><td class="pl">Kiedy wróciłem, wszyscy spali.</td></tr>
<tr><td class="pl">zanim</td><td>перш ніж, до того як</td><td class="pl">Zanim wyjdziesz, zamknij okno.</td></tr>
<tr><td class="pl">dopóki</td><td>доки, поки (весь час, поки)</td><td class="pl">Dopóki pada, siedzimy w domu.</td></tr>
<tr><td class="pl">dopóki nie / aż</td><td>доки не, поки не (до моменту)</td><td class="pl">Poczekam, dopóki nie wrócisz. = Poczekam, aż wrócisz.</td></tr>
<tr><td class="pl">jak tylko / gdy tylko</td><td>як тільки, щойно</td><td class="pl">Jak tylko dojadę, zadzwonię.</td></tr>
<tr><td class="pl">odkąd</td><td>відколи, відтоді як</td><td class="pl">Odkąd mieszkam w Gdyni, pływam w morzu.</td></tr>
<tr><td class="pl">podczas gdy</td><td>тоді як, у той час як</td><td class="pl">Podczas gdy ja gotowałem, on spał.</td></tr></table>
<h4>Вид дієслова після kiedy</h4>
<p>Тло (процес) — недоконаний вид, подія на цьому тлі — доконаний:</p>
<div class="ex"><span class="pl">Kiedy jadłam obiad, zadzwonił telefon.</span> — Коли я обідала, задзвонив телефон.</div>
<p>Послідовність подій — обидва дієслова доконаного виду:</p>
<div class="ex"><span class="pl">Kiedy zjadłam obiad, poszłam na spacer.</span> — Коли я пообідала, пішла на прогулянку.</div>
<h4>Майбутнє — як в українській</h4>
<p>Про майбутнє після <span class="pl">kiedy, jak tylko, zanim</span> говоримо в майбутньому часі: <span class="pl">Kiedy przyjedziesz, pójdziemy na pierogi.</span> — Коли приїдеш, підемо на вареники. Після <span class="pl">odkąd</span> про те, що триває досі, — теперішній час: <span class="pl">Odkąd tu pracuję, jestem szczęśliwy.</span> — Відколи я тут працюю, я щасливий.</p>
<div class="tip">Пастки для україномовних:<br>1) Після <span class="pl">zanim</span> — лише особова форма дієслова, інфінітив неможливий. «Перш ніж вийти, він вимкнув світло» — <span class="pl">Zanim wyszedł, wyłączył światło.</span> (або <span class="pl">Przed wyjściem wyłączył światło.</span>)<br>2) <span class="pl">aż</span> — БЕЗ <span class="pl">nie</span>, а <span class="pl">dopóki</span> у значенні «доки не» — З <span class="pl">nie</span>, як і в українській: <span class="pl">Czekam, aż przyjdzie</span> = <span class="pl">Czekam, dopóki nie przyjdzie</span> — «Чекаю, доки не прийде».<br>3) <span class="pl">podczas</span> без <span class="pl">gdy</span> — це прийменник з род. в.: <span class="pl">podczas podróży</span> — під час подорожі (пор. укр. «під час»).<br>4) У розмові замість <span class="pl">kiedy</span> часто кажуть <span class="pl">jak</span> — як і в розмовній українській («як був малим…»): <span class="pl">Jak byłem mały, mieszkałem w Łodzi.</span></div>
<div class="tip">Кома: у польській, як і в українській, перед підрядним сполучником (kiedy, zanim, jak tylko…) кома ставиться завжди: <span class="pl">Zadzwoń, jak tylko dojedziesz.</span> В усному мовленні на її місці — коротка пауза.</div>`
      },
      exercises: [
        { type: "choice", q: "___ wyjdziesz z domu, wyłącz żelazko!", options: ["Zanim", "Odkąd", "Podczas gdy"], answer: 0, explain: "zanim — перш ніж: спочатку вимкни праску, потім виходь." },
        { type: "choice", q: "___ mieszkam w Gdańsku, codziennie chodzę nad morze.", options: ["Odkąd", "Zanim", "Jak tylko"], answer: 0, explain: "odkąd — відколи; ситуація триває досі, тому теперішній час." },
        { type: "choice", q: "Poczekam, ___ przyjdziesz.", options: ["aż", "dopóki", "odkąd"], answer: 0, explain: "«Доки не прийдеш» = aż przyjdziesz (без nie) або dopóki NIE przyjdziesz. «dopóki przyjdziesz» без nie — помилка." },
        { type: "gap", q: "Zadzwoń do mnie, jak tylko ___ do hotelu. (dojechać, ty)", answers: ["dojedziesz"], explain: "jak tylko + майбутній час доконаного виду: dojadę, dojedziesz, dojedzie." },
        { type: "gap", q: "Kiedy ___ obiad, zadzwonił telefon. (jeść, ja — жінка)", answers: ["jadłam"], explain: "Фонова дія (процес) — недоконаний вид: jadłam; подія на її тлі — доконаний: zadzwonił." },
        { type: "choice", q: "___ ja gotowałam, mąż oglądał mecz w telewizji.", options: ["Podczas gdy", "Jak tylko", "Dopóki nie"], answer: 0, explain: "podczas gdy — тоді як, у той час як: дві дії відбуваються одночасно." },
        { type: "match", q: "З’єднайте сполучник із перекладом", pairs: [["kiedy", "коли"], ["zanim", "перш ніж"], ["odkąd", "відколи"], ["dopóki", "доки, поки"], ["jak tylko", "як тільки, щойно"], ["podczas gdy", "у той час як"]], explain: "Запам’ятайте: zanim — лише з особовою формою дієслова; odkąd — «відколи»; dopóki — «доки, поки», а dopóki nie / aż — «доки не»." },
        { type: "gap", q: "Nagle ___ sobie, że zostawiłem klucze w biurze. (przypomnieć, ja — чоловік)", answers: ["przypomniałem"], explain: "przypomnieć sobie — згадати: przypomniałem sobie (я — чоловік), przypomniałam sobie (я — жінка)." },
        { type: "order", ru: "Я подзвоню, як тільки доїду.", words: ["Zadzwonię,", "jak", "tylko", "dojadę."], alt: ["Jak tylko dojadę, zadzwonię."], explain: "jak tylko + майбутній час док. виду; перед сполучником — кома." },
        { type: "translate", ru: "Зачекай, доки я не повернуся.", answers: ["Poczekaj, aż wrócę.", "Poczekaj, dopóki nie wrócę.", "Zaczekaj, aż wrócę.", "Zaczekaj, dopóki nie wrócę."], explain: "«Доки не» = aż (без nie) або dopóki nie." }
      ],
      pronunciation: {
        focus: "Інтонація складного речення (пауза перед сполучником)",
        tip: `<p>Інтонація «малює» структуру складного речення. Якщо підрядне стоїть <b>першим</b>, голос у його кінці <b>підвищується</b> і йде коротка пауза — слухач чекає на продовження:</p>
<p><span class="pl">Kiedy wróciłem do domu,</span> ↗ (пауза) <span class="pl">okazało się, że nie mam kluczy.</span> ↘</p>
<p>Якщо підрядне йде <b>другим</b>, пауза робиться <b>перед сполучником</b>, а пониження тону — в самому кінці: <span class="pl">Zadzwonię,</span> ↗ (пауза) <span class="pl">jak tylko dojadę.</span> ↘ На письмі це місце позначене комою. Сам сполучник наголосом не виділяйте.</p>`,
        items: [
          { type: "listen", text: "Kiedy wróciłem do domu, okazało się, że nie mam kluczy.", ru: "Коли я повернувся додому, виявилося, що в мене немає ключів.", note: "підвищення голосу на «domu», пауза, пониження в кінці" },
          { type: "listen", text: "Zadzwonię, jak tylko dojadę.", ru: "Я подзвоню, як тільки доїду.", note: "пауза перед «jak tylko»" },
          { type: "listen", text: "Podczas gdy ja gotowałam, on oglądał mecz.", ru: "Поки я готувала, він дивився матч." },
          { type: "listen", text: "Zanim wyjdziesz, zamknij okno.", ru: "Перш ніж вийти, зачини вікно." },
          { type: "stress", word: "przypomniałem", syllables: ["przy", "po", "mnia", "łem"], answer: 2 },
          { type: "stress", word: "tymczasem", syllables: ["tym", "cza", "sem"], answer: 1 },
          { type: "dictation", text: "Odkąd mieszkam w Krakowie, jeżdżę wszędzie rowerem." }
        ]
      },
      reading: {
        title: "Kawa w tramwaju",
        text: "Odkąd mieszkam we Wrocławiu, jeżdżę do pracy tramwajem. Zwykle czytam wtedy książkę albo słucham podcastów. Ale tego dnia przydarzyła mi się historia, którą opowiadam teraz wszystkim znajomym.\n\nByło piątkowe przedpołudnie. Zanim wyszłam z domu, zrobiłam sobie kawę do kubka termicznego i schowałam do torby kanapkę. Wsiadłam do tramwaju i usiadłam przy oknie. Podczas gdy tramwaj jechał przez most Grunwaldzki, czytałam kryminał. Był tak ciekawy, że zapomniałam o całym świecie.\n\nNagle starszy pan obok mnie powiedział:\n— Przepraszam, pani chyba przejechała swój przystanek.\nNa początku nie zrozumiałam. Po chwili zorientowałam się, że jesteśmy już na pętli, na drugim końcu miasta!\n\nWysiadłam i od razu zadzwoniłam do szefowej. Okazało się, że ona też jeszcze nie dojechała do biura – utknęła w korku. Tymczasem zaczął padać deszcz. Postanowiłam, że poczekam na przystanku, dopóki nie przyjedzie następny tramwaj. Czekałam dwadzieścia minut.\n\nKiedy w końcu dojechałam do pracy, była dziesiąta. Szefowa przyszła pięć minut po mnie. Zdziwiłam się, bo była w świetnym humorze.\n— Jak dobrze, że pani już jest! Jak tylko zrobię sobie kawę, porozmawiamy o pani awansie.\n\nDopiero wtedy przypomniałam sobie, że moja kawa wciąż jeździ tramwajem po Wrocławiu. Razem z kanapką. I z kryminałem, którego zakończenia już nigdy nie poznam.",
        glossary: [
          { pl: "przedpołudnie", ru: "перша половина дня (до полудня)" },
          { pl: "kubka termicznego", ru: "термокухоль, термочашка" },
          { pl: "schowałam", ru: "сховала, поклала" },
          { pl: "kryminał", ru: "детектив (книжка)" },
          { pl: "na pętli", ru: "на кінцевій (зупинці)" },
          { pl: "utknęła w korku", ru: "застрягла в заторі" },
          { pl: "w świetnym humorze", ru: "у чудовому настрої (гуморі)" },
          { pl: "awansie", ru: "підвищення (на посаді)" },
          { pl: "zakończenia", ru: "закінчення, кінцівка" }
        ],
        questions: [
          { type: "tf", q: "Narratorka jeździ do pracy autobusem.", answer: false, explain: "«Odkąd mieszkam we Wrocławiu, jeżdżę do pracy tramwajem»." },
          { type: "choice", q: "Co robiła narratorka, podczas gdy tramwaj jechał przez most?", options: ["Piła kawę.", "Czytała kryminał.", "Rozmawiała przez telefon."], answer: 1, explain: "«Podczas gdy tramwaj jechał przez most Grunwaldzki, czytałam kryminał»." },
          { type: "choice", q: "Dlaczego szefowa spóźniła się do biura?", options: ["Bo utknęła w korku.", "Bo przejechała przystanek.", "Bo czekała na tramwaj."], answer: 0, explain: "«utknęła w korku» — застрягла в заторі." },
          { type: "tf", q: "Narratorka czekała na następny tramwaj dwadzieścia minut.", answer: true, explain: "«Czekałam dwadzieścia minut»." },
          { type: "tf", q: "Narratorka zabrała kawę z tramwaju.", answer: false, explain: "Кава, канапка і книжка залишилися в трамваї." }
        ]
      },
      writing: {
        prompt: "Розкажіть у минулому часі кумедну або невдалу історію, яка трапилася з вами в дорозі (100–150 слів): 1) куди, коли і з ким ви їхали; 2) що пішло не так; 3) як ви розв’язували проблему; 4) чим усе закінчилося. Використайте щонайменше 3 часові сполучники (kiedy, zanim, dopóki, jak tylko, odkąd, podczas gdy) і слова-зв’язки (nagle, tymczasem, w końcu…).",
        minWords: 100,
        maxWords: 150,
        useWords: ["nagle", "w końcu", "tymczasem", "zorientować się"],
        checklist: [
          { label: "Мінімум 3 часові сполучники (kiedy, zanim, dopóki, jak tylko, odkąd, podczas gdy)", pattern: "\\b(podczas gdy|jak tylko|kiedy|gdy|zanim|dopóki|odkąd)\\b", min: 3 },
          { label: "Мінімум 5 дієслів у минулому часі", pattern: "\\p{L}+(łem|łam|łeś|łaś|liśmy|łyśmy|ł|ła|ło|li|ły)(?!\\p{L})", min: 5 }
        ],
        model: "W zeszłe wakacje przydarzyła mi się zabawna historia. Jechałem z kolegą samochodem nad morze, do Łeby. Zanim wyjechaliśmy z Poznania, sprawdziłem prognozę pogody – miało być słonecznie. Na początku wszystko szło świetnie: podczas gdy Tomek prowadził, ja wybierałem muzykę. Nagle usłyszeliśmy głośny huk. Zjechaliśmy na pobocze i wtedy zorientowałem się, że złapaliśmy gumę. Okazało się też, że nie mamy koła zapasowego! Tymczasem zaczęło padać. Siedzieliśmy w samochodzie, dopóki nie przyjechała pomoc drogowa – prawie dwie godziny. W końcu dojechaliśmy do Łeby o północy. Jak tylko weszliśmy do pokoju, od razu zasnęliśmy. Rano okazało się, że przez cały tydzień będzie padać. Odkąd pamiętam, mam pecha do pogody!"
      }
    },

    // ===================== LESSON 5 (REVIEW) =====================
    {
      id: "m10l5",
      title: "Powtórka 10",
      titleRu: "Повторення модуля 10",
      topic: "W drodze",
      review: true,
      minutes: 30,
      goals: [
        "Вільно обирати префікс і вид дієслів iść і jechać",
        "Називати час, дати й проміжки часу (za, temu, przez, od…do)",
        "Розповідати про поїздку з часовими сполучниками"
      ],
      vocab: [
        { pl: "korek", g: "m", ru: "затор (на дорозі)", ex: "Staliśmy w korku dwie godziny.", exRu: "Ми стояли в заторі дві години.", note: "stać / utknąć w korku" },
        { pl: "objazd", g: "m", ru: "об’їзд", ex: "Na drodze jest objazd, trzeba skręcić w lewo.", exRu: "На дорозі об’їзд, треба повернути ліворуч." },
        { pl: "remont", g: "m", ru: "ремонт", ex: "Most jest zamknięty z powodu remontu.", exRu: "Міст закритий через ремонт." },
        { pl: "komunikacja zastępcza", g: "f", ru: "транспорт на заміну (автобуси замість потяга/трамвая)", ex: "Z powodu remontu torów kursuje komunikacja zastępcza.", exRu: "Через ремонт колій замість потягів курсують автобуси." },
        { pl: "nocleg", g: "m", ru: "нічліг, житло (на ніч)", ex: "Szukamy noclegu w Zakopanem.", exRu: "Ми шукаємо, де переночувати в Закопаному." },
        { pl: "bagaż podręczny", g: "m", ru: "ручна поклажа", ex: "Mam tylko bagaż podręczny.", exRu: "У мене лише ручна поклажа." },
        { pl: "zdążyć", ru: "встигнути", ex: "Zdążyliśmy na ostatni autobus.", exRu: "Ми встигли на останній автобус.", note: "zdążyć na + знах. в." },
        { pl: "wypożyczyć", ru: "взяти напрокат", ex: "Wypożyczyliśmy rowery na cały dzień.", exRu: "Ми взяли велосипеди напрокат на весь день.", note: "wypożyczalnia — пункт прокату" },
        { pl: "stacja benzynowa", g: "f", ru: "заправка, АЗС", ex: "Zatrzymajmy się na stacji benzynowej.", exRu: "Зупинімося на заправці." },
        { pl: "postój", g: "m", ru: "стоянка; зупинка (у дорозі)", ex: "Postój taksówek jest przed dworcem.", exRu: "Стоянка таксі — перед вокзалом." }
      ],
      grammar: {
        title: "Підсумок модуля: рух, час, сполучники",
        html: `<h4>1. Префікси + iść / jechać</h4>
<table class="g"><tr><th>префікс</th><th>iść: док. / недок.</th><th>jechać: док. / недок.</th><th>прийменники</th></tr>
<tr><td>przy- (прибуття)</td><td class="pl">przyjść / przychodzić</td><td class="pl">przyjechać / przyjeżdżać</td><td class="pl">do, na, z</td></tr>
<tr><td>wy- (назовні)</td><td class="pl">wyjść / wychodzić</td><td class="pl">wyjechać / wyjeżdżać</td><td class="pl">z, do, na, za</td></tr>
<tr><td>w- (усередину)</td><td class="pl">wejść / wchodzić</td><td class="pl">wjechać / wjeżdżać</td><td class="pl">do, na</td></tr>
<tr><td>do- (до мети)</td><td class="pl">dojść / dochodzić</td><td class="pl">dojechać / dojeżdżać</td><td class="pl">do</td></tr>
<tr><td>od- (геть)</td><td class="pl">odejść / odchodzić</td><td class="pl">odjechać / odjeżdżać</td><td class="pl">od, z</td></tr>
<tr><td>prze- (через, повз)</td><td class="pl">przejść / przechodzić</td><td class="pl">przejechać / przejeżdżać</td><td class="pl">przez, obok</td></tr>
<tr><td>z- (униз)</td><td class="pl">zejść / schodzić</td><td class="pl">zjechać / zjeżdżać</td><td class="pl">z, na</td></tr>
<tr><td>ob- (навколо)</td><td class="pl">obejść / obchodzić</td><td class="pl">objechać / objeżdżać</td><td>+ знах. в.</td></tr></table>
<p>Форми: <span class="pl">przyjdę, przyszedł / przyszła; wszedł / weszła; zszedł / zeszła</span>; <span class="pl">przyjadę, przyjechał</span>. Недоконаний вид на -jeżdżać відмінюється на -am: <span class="pl">przyjeżdżam, dojeżdżasz</span>. З транспорту — <span class="pl">wysiąść</span>, у транспорт — <span class="pl">wsiąść</span>.</p>
<h4>2. Час і дати</h4>
<table class="g"><tr><th>питання</th><th>відповідь</th><th>відмінок</th></tr>
<tr><td class="pl">Która godzina?</td><td class="pl">Jest ósma.</td><td>наз.</td></tr>
<tr><td class="pl">O której?</td><td class="pl">o ósmej, o wpół do dziewiątej</td><td>місц.</td></tr>
<tr><td>8:15 / 8:45</td><td class="pl">kwadrans po ósmej / za kwadrans dziewiąta</td><td>місц. / наз.</td></tr>
<tr><td class="pl">Kiedy?</td><td class="pl">piątego maja 2025 roku</td><td>род.</td></tr>
<tr><td class="pl">W którym roku? W którym miesiącu?</td><td class="pl">w 2025 roku, w maju</td><td>місц.</td></tr></table>
<p><span class="pl">przed obiadem</span> (оруд. в.) · <span class="pl">po obiedzie</span> (місц. в.) · <span class="pl">za tydzień</span> — через тиждень · <span class="pl">tydzień temu</span> — тиждень тому · <span class="pl">przez tydzień</span> — протягом тижня · <span class="pl">od poniedziałku do piątku</span> (род. в.)</p>
<h4>3. Часові сполучники</h4>
<ul>
<li><span class="pl">kiedy / gdy</span> — коли; тло — недок. вид, подія — док.: <span class="pl">Kiedy jadłam, zadzwonił telefon.</span></li>
<li><span class="pl">zanim</span> — перш ніж (лише з особовою формою!): <span class="pl">Zanim wyjdziesz, zamknij okno.</span></li>
<li><span class="pl">dopóki</span> — доки, поки; <span class="pl">dopóki nie</span> = <span class="pl">aż</span> — доки не: <span class="pl">Poczekam, aż wrócisz.</span></li>
<li><span class="pl">jak tylko</span> — як тільки, щойно; <span class="pl">odkąd</span> — відколи; <span class="pl">podczas gdy</span> — у той час як.</li>
</ul>
<div class="tip">П’ять головних пасток модуля: <span class="pl">wszedł</span> (не «wejszedł»); <span class="pl">schodzić</span> (не «zchodzić»); <span class="pl">przyjeżdżam</span> (на -am); <span class="pl">za tydzień</span> = через тиждень, а не «протягом тижня»; <span class="pl">aż</span> — без <span class="pl">nie</span>.</div>`
      },
      exercises: [
        { type: "choice", q: "Przepraszam, jak ___ do Rynku?", options: ["dojść", "wejść", "obejść"], answer: 0, explain: "«Як пройти (дійти) до…?» — Jak dojść do + род. в.? wejść — увійти (всередину), obejść — обійти." },
        { type: "gap", q: "Wczoraj ___ z pracy bardzo późno. (wyjść, ja — жінка)", answers: ["wyszłam"], explain: "wyjść → wyszedłem (чоловік), wyszłam (жінка)." },
        { type: "gap", q: "Kiedy ___ do Warszawy? (przyjechać, wy — майбутній час)", answers: ["przyjedziecie"], explain: "przyjechać відмінюється як jechać: jedziecie → przyjedziecie (майбутній час)." },
        { type: "choice", q: "Od pięciu lat codziennie ___ do pracy z Pruszkowa.", options: ["dojeżdżam", "dojadę", "dojechałem"], answer: 0, explain: "Регулярна дія — недоконаний вид dojeżdżać (на -am): dojeżdżam." },
        { type: "choice", q: "Na autostradzie był wypadek, więc musieliśmy z niej ___ na drogę lokalną.", options: ["zjechać", "wjechać", "przyjechać"], answer: 0, explain: "zjechać z autostrady — з’їхати з автомагістралі." },
        { type: "choice", q: "W sierpniu wyjeżdżamy ___ granicę, do Chorwacji.", options: ["za", "przez", "na"], answer: 0, explain: "wyjechać za granicę (знах. в.) — поїхати за кордон; mieszkać za granicą (оруд. в.) — жити за кордоном. Як в українській: за кордон — за кордоном." },
        { type: "gap", q: "Zebranie zaczyna się o ___ do jedenastej. (10:30)", answers: ["wpół"], explain: "10:30 = o wpół do jedenastej (о пів на одинадцяту)." },
        { type: "choice", q: "Jest 14:45. Jest ___.", options: ["za kwadrans trzecia", "kwadrans po drugiej", "za kwadrans druga"], answer: 0, explain: "14:45 — за чверть третя: za kwadrans trzecia. kwadrans po drugiej = 14:15." },
        { type: "gap", q: "Urodziłam się ___ grudnia. (24, порядковий — словами)", answers: ["dwudziestego czwartego"], explain: "Дата в род. в.: dwudziestego czwartego grudnia — обидва слова порядкові й у родовому (в укр. «двадцять четвертого» змінюється лише друге)." },
        { type: "choice", q: "Byliśmy w Zakopanem tydzień ___.", options: ["temu", "za", "przed"], answer: 0, explain: "tydzień temu — тиждень тому; temu стоїть після відрізку часу, як укр. «тому»." },
        { type: "match", q: "З’єднайте вираз із перекладом", pairs: [["za tydzień", "через тиждень"], ["tydzień temu", "тиждень тому"], ["przez tydzień", "протягом тижня"], ["od poniedziałku", "з понеділка"], ["przed obiadem", "перед обідом"], ["po obiedzie", "після обіду"]], explain: "za + знах. в. — через; temu — тому; przez + знах. в. — протягом; od + род. в.; przed + оруд. в.; po + місц. в." },
        { type: "choice", q: "___ zaczął padać deszcz, schowaliśmy się w kawiarni.", options: ["Jak tylko", "Odkąd", "Dopóki nie"], answer: 0, explain: "jak tylko — як тільки, щойно: дощ почався, і ми одразу сховалися." },
        { type: "gap", q: "Spóźniłem się do pracy, bo nie ___ na autobus. (zdążyć, ja — чоловік)", answers: ["zdążyłem"], explain: "zdążyć na + знах. в. — встигнути на щось: nie zdążyłem na autobus." },
        { type: "order", ru: "Перш ніж вийти, він вимкнув світло.", words: ["Zanim", "wyszedł,", "wyłączył", "światło."], alt: ["Wyłączył światło, zanim wyszedł."], explain: "Після zanim — особова форма дієслова (wyszedł), а не інфінітив." },
        { type: "translate", ru: "Потяг відправляється через десять хвилин.", answers: ["Pociąg odjeżdża za dziesięć minut.", "Pociąg odjeżdża za 10 minut.", "Pociąg odjedzie za dziesięć minut.", "Pociąg odjedzie za 10 minut."], explain: "odjeżdżać — відправлятися; «через» — za + знах. в.: za dziesięć minut." }
      ],
      pronunciation: {
        focus: "Повторення: групи приголосних, ż/dż, числівники, інтонація",
        tip: `<p>Повторюємо всю вимову модуля: «грона» приголосних у <span class="pl">wejść, wszedł</span>; тверді <b>ż + dż</b> у <span class="pl">przyjeżdżać</span> (як укр. «приїжджати»); чітке <b>-ego</b> з вибуховим [ґ] у датах (<span class="pl">dwudziestego trzeciego</span>); підвищення голосу й пауза між частинами складного речення.</p>
<p>Наголос у формах на <b>-liśmy</b> за нормою падає на третій склад від кінця: przy-je-<b>CHA</b>-li-śmy.</p>`,
        items: [
          { type: "listen", text: "Wyszedłem, zanim przyjechała taksówka.", ru: "Я вийшов до того, як приїхало таксі.", note: "пауза перед «zanim»" },
          { type: "minimal", options: ["wejdź", "wyjdź"], ru: ["увійди", "вийди"] },
          { type: "minimal", options: ["odjazd", "objazd"], ru: ["відправлення", "об’їзд"] },
          { type: "stress", word: "przyjechaliśmy", syllables: ["przy", "je", "cha", "li", "śmy"], answer: 2 },
          { type: "stress", word: "trzydziestego", syllables: ["trzy", "dzie", "ste", "go"], answer: 2 },
          { type: "dictation", text: "Pociąg przyjedzie dwudziestego trzeciego maja o wpół do ósmej." }
        ]
      },
      reading: {
        title: "Majówka w Kazimierzu",
        text: "Majówka, czyli długi weekend od pierwszego do trzeciego maja, to w Polsce prawdziwe święto wyjazdów. W tym roku Michał i Ola postanowili pojechać do Kazimierza Dolnego. Nocleg zarezerwowali już w lutym, bo wiedzieli, że później nic nie znajdą.\n\nWyjechali z Warszawy w czwartek, trzydziestego kwietnia, o wpół do szóstej rano. Zanim wyjechali z miasta, zatrzymali się jeszcze na stacji benzynowej na kawę i hot doga. Na początku jechało się świetnie. Kiedy jednak dojechali do Garwolina, utknęli w ogromnym korku. Okazało się, że na drodze jest remont i trzeba jechać objazdem.\n\nTymczasem w Kazimierzu czekała na nich właścicielka pensjonatu, pani Basia. Michał zadzwonił do niej:\n— Przepraszamy, będziemy później. Przyjedziemy chyba za dwie godziny.\n— Nic nie szkodzi — odpowiedziała pani Basia. — Ja muszę wyjść, ale klucz zostawię u sąsiadki. Jak tylko przyjedziecie, wejdźcie przez bramę na podwórko i zapukajcie do drzwi pod numerem trzy.\n\nDojechali dopiero kwadrans po jedenastej. Weszli na podwórko, ale drzwi pod numerem trzy nikt nie otwierał. Michał obszedł cały dom, a Ola zaczęła się denerwować. W końcu z okna na piętrze wyjrzała starsza pani.\n— Państwo do Basi? Proszę wejść, jest otwarte! Czekam na was od dziewiątej!\n\nPo południu, podczas gdy Michał rozpakowywał samochód, Ola poszła na rynek. Weszła na Górę Trzech Krzyży, z której widać Wisłę i cały Kazimierz. Zeszła na dół dopiero wtedy, gdy zaczęło się ściemniać.\n\nNastępnego dnia wypożyczyli rowery i pojechali do Janowca. Przez Wisłę przepłynęli promem, a potem wjechali na wzgórze pod sam zamek. Kiedy wrócili do Kazimierza, na rynku było tyle ludzi, że ledwo przeszli między straganami. Zdążyli jeszcze kupić słynnego koguta z ciasta drożdżowego – symbol miasta.\n\nWieczorem przy kolacji zdecydowali: przyjadą tu też w przyszłym roku. Tylko tym razem wyjadą z Warszawy dzień wcześniej.",
        glossary: [
          { pl: "Majówka", ru: "травневі свята (1–3 травня)" },
          { pl: "pensjonatu", ru: "пансіонат, гостьовий будинок" },
          { pl: "właścicielka", ru: "власниця, господиня" },
          { pl: "Nic nie szkodzi", ru: "нічого страшного" },
          { pl: "zapukajcie", ru: "постукайте" },
          { pl: "wyjrzała", ru: "виглянула" },
          { pl: "rozpakowywał", ru: "розпаковував" },
          { pl: "ściemniać", ru: "смеркатися, темніти (ściemniać się)" },
          { pl: "promem", ru: "поромом" },
          { pl: "straganami", ru: "ятками, торговими лотками" }
        ],
        questions: [
          { type: "tf", q: "Michał i Ola wyjechali z Warszawy pierwszego maja.", answer: false, explain: "Вони виїхали в четвер, trzydziestego kwietnia — 30 квітня." },
          { type: "choice", q: "Dlaczego dojechali do Kazimierza później, niż planowali?", options: ["Bo zapomnieli kluczy.", "Bo na drodze był remont i korek.", "Bo wyjechali dopiero po południu."], answer: 1, explain: "«utknęli w ogromnym korku… na drodze jest remont i trzeba jechać objazdem»." },
          { type: "choice", q: "O której dojechali na miejsce?", options: ["o 11:15", "o 10:45", "o 9:00"], answer: 0, explain: "«kwadrans po jedenastej» = 11:15." },
          { type: "tf", q: "Sąsiadka pani Basi czekała na nich od dziewiątej.", answer: true, explain: "«Czekam na was od dziewiątej!»" },
          { type: "tf", q: "Ola weszła na Górę Trzech Krzyży rano.", answer: false, explain: "Це було пополудні, а спустилася вона, коли почало смеркатися." }
        ]
      },
      writing: {
        prompt: "Підсумковий твір модуля. Опишіть поїздку — справжню чи вигадану (100–150 слів): 1) коли (дата словами) і куди ви поїхали, о котрій виїхали й приїхали; 2) як добиралися і що трапилося в дорозі (затор, об’їзд, запізнення, пересадка…); 3) де ви зупинилися і що робили на місці; 4) висновок: чи поїдете туди знову і як. Використайте префіксальні дієслова руху (wyjechać, dojechać, wejść, zejść…) і часові сполучники.",
        minWords: 100,
        maxWords: 150,
        useWords: ["zdążyć", "korek", "nocleg", "objazd"],
        checklist: [
          { label: "Мінімум 4 префіксальні дієслова руху (wyjechałam, dojechaliśmy, weszłyśmy…)", pattern: "\\p{L}+(jech|jad|jedzi|jeżdż|jd|chodz|szed|szł|szl)\\p{L}*", min: 4 },
          { label: "Мінімум 2 часові сполучники", pattern: "\\b(podczas gdy|jak tylko|kiedy|gdy|zanim|dopóki|odkąd)\\b", min: 2 },
          { label: "Мінімум 2 вказівки часу або дати (o szóstej, dwudziestego czerwca)", pattern: "(\\bo (wpół do )?\\p{L}+ej\\b|(\\d{1,2}|\\p{L}+ego) (stycznia|lutego|marca|kwietnia|maja|czerwca|lipca|sierpnia|września|października|listopada|grudnia))", min: 2 }
        ],
        model: "W zeszłym roku, dwudziestego czwartego czerwca, pojechałam z przyjaciółką Kasią nad morze, na Hel. Wyjechałyśmy z Łodzi o szóstej rano, bo chciałyśmy uniknąć korków. Niestety nie udało się. Kiedy dojechałyśmy do Gdańska, utknęłyśmy w ogromnym korku, a potem musiałyśmy jechać objazdem, bo na drodze był remont. Podczas gdy ja prowadziłam, Kasia szukała w telefonie noclegu, bo nasz pensjonat odwołał rezerwację. Zanim dojechałyśmy do Władysławowa, miałyśmy już nowy pokój – dwieście metrów od plaży! Na miejsce dotarłyśmy dopiero o wpół do szóstej wieczorem, ale zdążyłyśmy jeszcze na zachód słońca. Jak tylko weszłyśmy do pokoju, przebrałyśmy się i poszłyśmy na plażę. Odkąd byłam tam pierwszy raz, minęło dziesięć lat, ale Hel jest wciąż tak samo piękny. Następnym razem pojadę tam pociągiem – przynajmniej nie będę stała w korku!"
      }
    }
  ]
});
