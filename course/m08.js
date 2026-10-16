COURSE.module({
  id: "m08",
  n: 8,
  level: "B1",
  title: "Gdyby…",
  titleRu: "Якби…",
  summary: "Ви вмієте ввічливо просити (Czy mógłbyś…?), міркувати про нереальне (Gdybym miał czas…), висловлювати мету й бажання через żeby та давати поради: powinieneś, warto, na twoim miejscu…",
  lessons: [

    // ───────────────────────── Урок 1 ─────────────────────────
    {
      id: "m08l1",
      title: "Czy mógłbyś…?",
      titleRu: "Умовний спосіб: форми та ввічливі прохання",
      topic: "Uprzejme prośby",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати умовний спосіб: zrobiłbym, zrobiłabyś, zrobilibyśmy",
        "Ввічливо просити й пропонувати: chciałbym, czy mógłbyś…, czy mogłaby pani…",
        "Не калькувати українське «я б зробив»: у польській частка by з особовим закінченням зливається з дієсловом — zrobiłbym",
        "Ставити наголос у формах на -łbym / -łabym"
      ],

      vocab: [
        { pl: "uprzejmy", ru: "ввічливий, люб’язний", ex: "Pani w recepcji była bardzo uprzejma.", exRu: "Пані на рецепції була дуже люб’язна." },
        { pl: "prośba", g: "f", ru: "прохання", ex: "Mam do ciebie małą prośbę.", exRu: "У мене до тебе невелике прохання.", note: "mieć prośbę do kogoś — мати прохання до когось" },
        { pl: "przysługa", g: "f", ru: "послуга, ласка", ex: "Czy mogłabyś zrobić mi przysługę?", exRu: "Чи не могла б ти зробити мені послугу?" },
        { pl: "pożyczyć", ru: "позичити", ex: "Mógłbyś pożyczyć mi sto złotych do piątku?", exRu: "Чи не міг би ти позичити мені сто злотих до п’ятниці?", note: "як і укр. «позичити», має два значення: pożyczyć komuś — дати в борг; pożyczyć od kogoś — узяти в борг" },
        { pl: "podać", ru: "подати, передати", ex: "Czy mógłby mi pan podać sól?", exRu: "Чи не могли б ви передати мені сіль?" },
        { pl: "przeszkadzać", ru: "заважати; турбувати", ex: "Przepraszam, że przeszkadzam.", exRu: "Перепрошую, що турбую.", note: "przeszkadzać komuś — давальний відмінок, як укр. «заважати комусь»" },
        { pl: "ściszyć", ru: "притишити, зробити тихіше", ex: "Czy moglibyście ściszyć muzykę?", exRu: "Чи не могли б ви зробити музику тихіше?" },
        { pl: "ładowarka", g: "f", ru: "зарядний пристрій, зарядка", ex: "Masz może ładowarkę do telefonu?", exRu: "У тебе часом немає зарядки для телефону?" },
        { pl: "woleć", ru: "воліти, віддавати перевагу", ex: "Wolałabym herbatę zamiast kawy.", exRu: "Я б воліла чай замість кави.", note: "пор. укр. «воліти»; wolę, wolisz, wolą; мин.: wolał" },
        { pl: "zostawić", ru: "залишити", ex: "Czy mógłbym zostawić tu walizkę?", exRu: "Чи можна мені залишити тут валізу?" },
        { pl: "przesunąć", ru: "пересунути; перенести (термін)", ex: "Czy moglibyśmy przesunąć spotkanie na czwartek?", exRu: "Чи не могли б ми перенести зустріч на четвер?", note: "przesunąć na + знах. в." },
        { pl: "kłopot", g: "m", ru: "клопіт, проблема", ex: "To żaden kłopot!", exRu: "Жодного клопоту!" },
        { pl: "właściwie", ru: "власне, насправді", ex: "Właściwie chciałem zapytać o coś innego.", exRu: "Власне, я хотів запитати про інше." }
      ],

      grammar: {
        title: "Tryb przypuszczający: форми та ввічливі прохання",
        html: `<p>Умовний спосіб (<b>tryb przypuszczający</b>) — це польське «б / би». Будова та сама, що в українській: форма минулого часу 3-ї особи (<span class="pl">zrobił, zrobiła, zrobili</span>) + частка <b>by</b>. Ключова різниця: польська додає до by ще й особове закінчення <b>-m, -ś, -śmy, -ście</b>. Усе пишеться разом, одним словом.</p>
<table class="g"><tr><th></th><th>чоловічий / чол.-особовий</th><th>жіночий / нечол.-особовий</th></tr>
<tr><td>ja</td><td class="pl">zrobiłbym</td><td class="pl">zrobiłabym</td></tr>
<tr><td>ty</td><td class="pl">zrobiłbyś</td><td class="pl">zrobiłabyś</td></tr>
<tr><td>on / ona / ono</td><td class="pl">zrobiłby</td><td class="pl">zrobiłaby / zrobiłoby</td></tr>
<tr><td>my</td><td class="pl">zrobilibyśmy</td><td class="pl">zrobiłybyśmy</td></tr>
<tr><td>wy</td><td class="pl">zrobilibyście</td><td class="pl">zrobiłybyście</td></tr>
<tr><td>oni / one</td><td class="pl">zrobiliby</td><td class="pl">zrobiłyby</td></tr></table>
<p>У множині діє правило з M7: <b>-li-</b>, якщо в групі є хоча б один чоловік; <b>-ły-</b> — лише жінки, діти, тварини, предмети.</p>
<h4>Неправильні основи — ті самі, що в минулому часі</h4>
<table class="g"><tr><th>інфінітив</th><th>ja (m)</th><th>ja (f)</th><th>my (чол.-особ.)</th></tr>
<tr><td class="pl">móc</td><td class="pl">mógłbym</td><td class="pl">mogłabym</td><td class="pl">moglibyśmy</td></tr>
<tr><td class="pl">chcieć</td><td class="pl">chciałbym</td><td class="pl">chciałabym</td><td class="pl">chcielibyśmy</td></tr>
<tr><td class="pl">mieć</td><td class="pl">miałbym</td><td class="pl">miałabym</td><td class="pl">mielibyśmy</td></tr>
<tr><td class="pl">pójść</td><td class="pl">poszedłbym</td><td class="pl">poszłabym</td><td class="pl">poszlibyśmy</td></tr>
<tr><td class="pl">być</td><td class="pl">byłbym</td><td class="pl">byłabym</td><td class="pl">bylibyśmy</td></tr></table>
<div class="tip">Стежте за чергуваннями: <span class="pl">mógł → mogła</span> (ó → o), <span class="pl">chciał → chcieli</span>, <span class="pl">miał → mieli</span> (a → e в чоловічо-особовій формі).</div>
<h4>Ввічливі прохання</h4>
<p>Умовний спосіб — головний інструмент польської ввічливості. Порівняйте:</p>
<div class="ex"><span class="pl">Chcę kawę.</span> — Хочу каву. (звучить вимогливо)</div>
<div class="ex"><span class="pl">Chciałbym kawę.</span> / <span class="pl">Poproszę kawę.</span> — Я б хотів каву. / Мені каву, будь ласка.</div>
<ul>
<li><span class="pl">Czy mógłbyś / mogłabyś…?</span> — Чи не міг (могла) би ти…?</li>
<li><span class="pl">Czy mógłby pan / mogłaby pani…?</span> — Чи не могли б ви…? (офіційно)</li>
<li><span class="pl">Czy moglibyście / mogliby państwo…?</span> — Чи не могли б ви…? (до групи)</li>
<li><span class="pl">Czy byłbyś tak miły i…?</span> — Чи не був би ти такий люб’язний…?</li>
<li><span class="pl">Wolałbym / wolałabym…</span> — Я б волів / воліла…</li>
</ul>
<div class="ex"><span class="pl">Czy mógłby mi pan pomóc?</span> — Чи не могли б ви мені допомогти?</div>
<div class="ex"><span class="pl">Czy moglibyśmy przesunąć spotkanie?</span> — Чи не можна перенести зустріч?</div>
<div class="tip"><b>Пастка №1.</b> В українській «б / би» — окрема частка, а дієслово однакове для всіх осіб: «я б зробив», «ти б зробив», «він би зробив» — особу показує займенник. У польській особа «сидить» у закінченні, що чіпляється до by: ✗ <i>Ja by zrobił</i> → ✓ <span class="pl">Zrobiłbym</span>. Займенник не потрібен.</div>
<div class="tip"><b>Пастка №2.</b> Частка <b>by</b> рухома — як і українське «б»: у питаннях вона часто «перескакує» до питального слова — <span class="pl">Co byś zrobił?</span> (Що б ти зробив?), а в розмові — до займенника: <span class="pl">Ja bym wolał herbatę.</span> З дієсловом <b>by</b> пишеться разом, з іншими словами — окремо.</div>
<div class="tip"><b>Наголос</b> залишається там само, де в минулому часі: <span class="pl">ZRObił → ZRObiłbym</span>, <span class="pl">zroBIła → zroBIłabym</span>. Тобто в однині — на 3-му складі з кінця, а не на передостанньому. Не переносьте український наголос (зроби́в би, зроби́ла б): рахуйте від польської форми минулого часу.</div>`
      },

      exercises: [
        { type: "choice", q: "Przepraszam, ___ o coś zapytać? (ja, mężczyzna)", options: ["czy mógłbym", "czy mogłabym", "czy mógłbyś"], answer: 0, explain: "Я (чоловік) → mógł + by + m = mógłbym. Mogłabym — жіноча форма, mógłbyś — «ти»." },
        { type: "gap", q: "___ zarezerwować stolik na sobotę. (chcieć, ja, kobieta; умовний спосіб)", answers: ["Chciałabym"], explain: "chciała + by + m. Chciałabym — ввічлива заміна різкого «chcę»." },
        { type: "gap", q: "Czy ___ mi podać sól? (móc, ty, mężczyzna; умовний спосіб)", answers: ["mógłbyś"], explain: "mógł + by + ś. У чоловічому роді зберігається ó (mógłbyś), у жіночому — o (mogłabyś)." },
        { type: "choice", q: "Kasia i Ola, czy ___ trochę ściszyć muzykę?", options: ["mogłybyście", "moglibyście", "mogłabyś"], answer: 0, explain: "Звертаємося до двох жінок → нечоловічо-особова форма на -łybyście. Moglibyście — якщо в групі є чоловік." },
        { type: "match", q: "З’єднайте ввічливу фразу з перекладом", pairs: [
          ["Czy mógłby pan…?", "Чи не могли б ви… (до чоловіка)?"],
          ["Wolałabym…", "Я б воліла…"],
          ["Byłbyś tak miły i…", "Будь такий добрий…"],
          ["Nie ma sprawy.", "Без проблем."],
          ["Przepraszam, że przeszkadzam.", "Перепрошую, що турбую."],
          ["To żaden kłopot.", "Жодного клопоту."]
        ], explain: "Ці формули варто вивчити цілком — їх чути в Польщі на кожному кроці: у магазині, в офісі, у сусідів." },
        { type: "order", ru: "Ми хотіли б перенести зустріч на п’ятницю.", words: ["Chcielibyśmy", "przesunąć", "spotkanie", "na", "piątek."], alt: [], explain: "chcieli + by + śmy: у чоловічо-особовій формі a → e (chciał → chcieli). Przesunąć na + знах. в.: na piątek." },
        { type: "gap", q: "Państwo Nowakowie ___ przyjść dopiero w niedzielę. (móc, умовний спосіб)", answers: ["mogliby"], explain: "Państwo (чоловік і дружина) — змішана група → чоловічо-особова форма mogli + by. Mogłyby — лише для жінок або предметів." },
        { type: "choice", q: "Як ввічливо сказати «Я б волів чаю» (говорить чоловік)?", options: ["Wolałbym herbatę.", "Ja by wolał herbatę.", "Wolałem by herbatę."], answer: 0, explain: "by та особове закінчення -m приєднуються до дієслова: wolał + by + m. «Ja by wolał» — калька з українського «я б волів»." },
        { type: "translate", ru: "Чи не могли б ви (звертаючись до жінки: pani) зачинити вікно?", answers: ["Czy mogłaby pani zamknąć okno?", "Mogłaby pani zamknąć okno?", "Czy pani mogłaby zamknąć okno?"], explain: "pani + форма 3-ї особи жіночого роду: mogłaby. Czy на початку робить питання ще ввічливішим." },
        { type: "gap", q: "Przepraszam, czy ___ zostawić tu rower? (móc, ja, kobieta; умовний спосіб)", answers: ["mogłabym"], explain: "mogła + by + m. Пам’ятайте: у жіночому роді ó змінюється на o — mogłabym." }
      ],

      pronunciation: {
        focus: "Наголос у формах -łbym / -łabym",
        tip: `<p>Зазвичай польський наголос падає на <b>передостанній</b> склад. Але в умовному способі <b>by</b> та закінчення наголосу «не притягують»: він залишається там, де був у минулому часі.</p>
<ul>
<li><span class="pl">ZRObił → ZRObiłbym</span> — 3-й склад з кінця</li>
<li><span class="pl">zroBIła → zroBIłabym</span></li>
<li><span class="pl">CHCIAła → CHCIAłabym</span></li>
<li><span class="pl">naPIsał → naPIsałbyś</span></li>
</ul>
<p>В українській наголос вільний (зроби́в би, хоті́ла б), тож звідти його не переносьте. У швидкому розмовному мовленні поляки нерідко ставлять наголос і на передостанній склад, але в ретельному мовленні (і на іспиті) — за нормою. У групі <b>-głb-</b> звук ł часто майже зникає: <span class="pl">mógłbym</span> звучить близько до [муґбим].</p>`,
        items: [
          { type: "stress", word: "zrobiłbym", syllables: ["zro", "bił", "bym"], answer: 0 },
          { type: "stress", word: "chciałabym", syllables: ["chcia", "ła", "bym"], answer: 0 },
          { type: "stress", word: "pomogłabyś", syllables: ["po", "mo", "gła", "byś"], answer: 1 },
          { type: "stress", word: "napisałbyś", syllables: ["na", "pi", "sał", "byś"], answer: 1 },
          { type: "minimal", options: ["zrobiłbym", "zrobiłabym"], ru: ["я б зробив", "я б зробила"] },
          { type: "listen", text: "Czy mógłby mi pan pomóc?", ru: "Чи не могли б ви мені допомогти?", note: "mógłby — наголос на першому складі: MÓGŁby" },
          { type: "listen", text: "Chciałabym zarezerwować stolik na dwie osoby.", ru: "Я б хотіла забронювати столик на дві особи." },
          { type: "dictation", text: "Czy mogłabyś ściszyć muzykę?" }
        ]
      },

      reading: {
        title: "Bardzo uprzejmy Igor",
        text: `Igor od trzech miesięcy mieszka w Krakowie i chodzi na kurs polskiego. W zeszłym tygodniu lektorka powiedziała grupie: „Polacy cenią uprzejmość. Zamiast «Daj mi to» mówcie «Czy mógłbyś mi to podać?»”. Igor wziął to sobie do serca i postanowił, że przez cały dzień będzie mówił tylko w trybie przypuszczającym.

Rano w Żabce zapytał kasjerkę: „Przepraszam, że przeszkadzam. Czy mogłaby mi pani podać hot doga? Właściwie wolałbym dwa”. Kasjerka się uśmiechnęła: „Nie ma sprawy!”.

W pracy napisał do szefa: „Czy moglibyśmy przesunąć jutrzejsze spotkanie na czwartek? Chciałbym się do niego dobrze przygotować”. Szef odpisał po minucie: „Oczywiście, to żaden kłopot”. Potem koleżanka z biura poprosiła go o małą przysługę: „Igor, mógłbyś zostawić mi na biurku notatki z wczorajszego spotkania?”. „Z przyjemnością!” – odpowiedział Igor.

Wieczorem sąsiad z góry znowu puścił bardzo głośno disco polo. Igor zapukał do jego drzwi: „Dobry wieczór. Czy byłby pan tak uprzejmy i ściszył trochę muzykę? Jutro rano mam egzamin”. Sąsiad był w szoku – nikt jeszcze nie prosił go o to tak grzecznie. Od razu ściszył muzykę, a kiedy usłyszał, że Igorowi padł telefon, pożyczył mu nawet swoją ładowarkę.

Następnego dnia Igor opowiedział o wszystkim na kursie. „Widzicie? – zaśmiała się lektorka. – Tryb przypuszczający otwiera wszystkie drzwi. Nawet drzwi sąsiada!”`,
        glossary: [
          { pl: "lektorka", ru: "викладачка (іноземної мови)" },
          { pl: "cenią", ru: "цінують" },
          { pl: "wziął to sobie do serca", ru: "сприйняв це всерйоз" },
          { pl: "kasjerkę", ru: "касирку" },
          { pl: "odpisał", ru: "відповів (письмово)" },
          { pl: "puścił", ru: "увімкнув (музику)" },
          { pl: "zapukał", ru: "постукав" },
          { pl: "grzecznie", ru: "ввічливо, ґречно" },
          { pl: "padł telefon", ru: "сів (розрядився) телефон" }
        ],
        questions: [
          { type: "tf", q: "Igor mieszka w Krakowie od roku.", answer: false, explain: "Він живе в Кракові od trzech miesięcy — три місяці." },
          { type: "choice", q: "O co Igor poprosił kasjerkę w Żabce?", options: ["O hot dogi.", "O ładowarkę.", "O kawę."], answer: 0, explain: "«Czy mogłaby mi pani podać hot doga? Właściwie wolałbym dwa»." },
          { type: "choice", q: "O co Igor poprosił szefa?", options: ["O przesunięcie spotkania na czwartek.", "O wolny dzień.", "O nowy telefon."], answer: 0, explain: "«Czy moglibyśmy przesunąć jutrzejsze spotkanie na czwartek?»" },
          { type: "tf", q: "Sąsiad był zaskoczony, że Igor prosił tak grzecznie.", answer: true, explain: "«Sąsiad był w szoku – nikt jeszcze nie prosił go o to tak grzecznie»." },
          { type: "choice", q: "Dlaczego sąsiad pożyczył Igorowi ładowarkę?", options: ["Bo Igorowi padł telefon.", "Bo Igor miał rano egzamin.", "Bo lektorka go o to poprosiła."], answer: 0, explain: "Сусід почув, że Igorowi padł telefon — в Ігоря сів телефон." }
        ]
      },

      writing: {
        prompt: "Ви їдете у відпустку на тиждень. Напишіть повідомлення сусідові (на «ти»): 1) ввічливо попросіть про допомогу; 2) поясніть, що треба зробити (квіти, пошта, ключі…); 3) запропонуйте щось натомість; 4) подякуйте. Використайте умовний спосіб: mógłbyś, chciałbym, byłbym wdzięczny…",
        minWords: 80,
        maxWords: 120,
        useWords: ["prośba", "przysługa", "zostawić", "kłopot"],
        checklist: [
          { label: "Щонайменше 3 форми умовного способу (mógłbyś, chciałabym…)", pattern: "\\p{L}+(łby|łaby|liby|łyby)\\p{L}*", min: 3 },
          { label: "Ввічливі слова: przepraszam / proszę / dziękuję", pattern: "przepraszam|proszę|dziękuj|dzięki", min: 1 }
        ],
        model: `Cześć Tomek!

Mam do ciebie małą prośbę. W sobotę wyjeżdżam na tydzień do Zakopanego i nie będzie mnie w domu. Czy mógłbyś zrobić mi przysługę? Chciałbym zostawić ci klucze do mieszkania. Czy mógłbyś co dwa dni podlać moje kwiaty i wyjąć listy ze skrzynki? Byłbym ci bardzo wdzięczny. Wiem, że to dla ciebie kłopot, więc chętnie się odwdzięczę. Może po moim powrocie poszlibyśmy razem na pizzę? Ja stawiam! Jeśli nie masz czasu, nie ma sprawy – zapytam kogoś innego. Daj mi znać do piątku.

Z góry dziękuję i pozdrawiam,
Paweł`
      }
    },

    // ───────────────────────── Урок 2 ─────────────────────────
    {
      id: "m08l2",
      title: "Gdybym miał czas…",
      titleRu: "Gdyby + умовний спосіб: нереальні умови",
      topic: "Marzenia",
      review: false,
      minutes: 30,
      goals: [
        "Будувати нереальні умови: Gdybym miał czas, pojechałbym…",
        "Розрізняти jeśli (реальна умова, укр. «якщо») і gdyby (нереальна, укр. «якби»)",
        "Розповідати про мрії: Co byś zrobił, gdybyś…?",
        "Ставити наголос у формах на -libyśmy / -libyście"
      ],

      vocab: [
        { pl: "marzyć", ru: "мріяти", ex: "Od dziecka marzę o podróży do Japonii.", exRu: "З дитинства мрію про подорож до Японії.", note: "marzyć o + місц. в. (укр. «мріяти про» + знах. в.)" },
        { pl: "marzenie", g: "n", ru: "мрія", ex: "Moim wielkim marzeniem jest dom nad morzem.", exRu: "Моя велика мрія — будинок біля моря." },
        { pl: "wygrać", ru: "виграти", ex: "Gdybym wygrał w totka, kupiłbym jacht.", exRu: "Якби я виграв у лотерею, я купив би яхту.", note: "wygrać w totka (розм.) / na loterii" },
        { pl: "rzucić", ru: "кинути", ex: "Gdybym mogła, rzuciłabym pracę i wyjechała w Bieszczady.", exRu: "Якби могла, я б кинула роботу й поїхала в Бещади.", note: "rzucić pracę / palenie / studia" },
        { pl: "spełnić się", ru: "збутися, здійснитися", ex: "Moje marzenie wreszcie się spełniło!", exRu: "Моя мрія нарешті здійснилася!" },
        { pl: "odważny", ru: "сміливий, відважний", ex: "Gdybym była odważna, skoczyłabym ze spadochronem.", exRu: "Якби я була сміливою, я б стрибнула з парашутом." },
        { pl: "spadochron", g: "m", ru: "парашут", ex: "Skok ze spadochronem to świetny prezent na urodziny.", exRu: "Стрибок із парашутом — чудовий подарунок на день народження." },
        { pl: "oszczędzać", ru: "заощаджувати; економити", ex: "Oszczędzamy na nowe mieszkanie.", exRu: "Ми заощаджуємо на нову квартиру.", note: "oszczędzać na + знах. в." },
        { pl: "zamieszkać", ru: "оселитися", ex: "Gdybym mógł, zamieszkałbym w Gdańsku.", exRu: "Якби міг, я б оселився в Гданську." },
        { pl: "wyobrazić sobie", ru: "уявити собі", ex: "Wyobraź sobie, że masz milion złotych.", exRu: "Уяви собі, що в тебе мільйон злотих." },
        { pl: "żałować", ru: "шкодувати", ex: "Niczego nie żałuję.", exRu: "Я ні про що не шкодую.", note: "żałować + род. в. — без прийменника (укр. «шкодувати про що»)!" },
        { pl: "dookoła", ru: "навколо, довкола", ex: "Gdybyśmy mieli rok wolnego, pojechalibyśmy dookoła świata.", exRu: "Якби в нас був вільний рік, ми б поїхали навколо світу.", note: "dookoła + род. в., як укр. «довкола чого»" },
        { pl: "emerytura", g: "f", ru: "пенсія", ex: "Na emeryturze zamieszkałabym nad jeziorem.", exRu: "На пенсії я б оселилася біля озера." }
      ],

      grammar: {
        title: "Gdyby + умовний спосіб",
        html: `<p>«Якби» польською — <b>gdyby</b>. Логіка та сама, що в українському «якби я мав»: «би» вже сидить у сполучнику, тож дієслово стоїть у формі минулого часу <b>без</b> by. Різниця одна: особове закінчення (<b>-m, -ś, -śmy, -ście</b>) приєднується до самого <b>gdyby</b>.</p>
<table class="g"><tr><th></th><th>умова (gdyby…)</th><th>результат (…by)</th></tr>
<tr><td>ja</td><td class="pl">gdybym miał / miała</td><td class="pl">pojechałbym / pojechałabym</td></tr>
<tr><td>ty</td><td class="pl">gdybyś miał / miała</td><td class="pl">pojechałbyś / pojechałabyś</td></tr>
<tr><td>on / ona</td><td class="pl">gdyby miał / miała</td><td class="pl">pojechałby / pojechałaby</td></tr>
<tr><td>my</td><td class="pl">gdybyśmy mieli / miały</td><td class="pl">pojechalibyśmy / pojechałybyśmy</td></tr>
<tr><td>wy</td><td class="pl">gdybyście mieli / miały</td><td class="pl">pojechalibyście / pojechałybyście</td></tr>
<tr><td>oni / one</td><td class="pl">gdyby mieli / miały</td><td class="pl">pojechaliby / pojechałyby</td></tr></table>
<div class="ex"><span class="pl">Gdybym miał czas, pojechałbym w Bieszczady.</span> — Якби в мене був час, я б поїхав у Бещади.</div>
<div class="ex"><span class="pl">Gdybyśmy wygrali w totka, kupilibyśmy dom nad morzem.</span> — Якби ми виграли в лотерею, ми б купили будинок біля моря.</div>
<div class="tip"><b>Пастка №1 — подвійне by.</b> У частині з gdyby частка вже є: ✗ <i>Gdybym miałbym czas</i> → ✓ <span class="pl">Gdybym miał czas</span>. Українською ж теж одне «би»: «якби я мав», а не «якби я мав би».</div>
<h4>Jeśli чи gdyby?</h4>
<ul>
<li><b>jeśli / jeżeli</b> + теперішній або майбутній час — реальна умова: <span class="pl">Jeśli będę miał czas, pojadę.</span> — Якщо в мене буде час, я поїду.</li>
<li><b>gdyby</b> + форма на -ł — нереальна або гіпотетична: <span class="pl">Gdybym miał czas, pojechałbym.</span> — Якби в мене був час, я б поїхав.</li>
</ul>
<div class="tip"><b>Пастка №2.</b> ✗ <i>Jeśli bym miał…</i> — так не кажуть (хоч в українській розмові трапляється «якщо б»): «якби» = <b>gdyby</b>, «якщо» = jeśli. І не плутайте з <span class="pl">kiedy</span> — «коли».</div>
<h4>Теперішнє чи минуле?</h4>
<p>Як і в українській, та сама форма описує і теперішнє, і минуле — вирішує контекст:</p>
<div class="ex"><span class="pl">Gdybym wiedział, przyszedłbym.</span> — Якби я знав, я б прийшов (учора або зараз).</div>
<h4>Корисні моделі</h4>
<ul>
<li><span class="pl">Co byś zrobił, gdybyś wygrał milion?</span> — Що б ти зробив, якби виграв мільйон? (by «перескакує» до питального слова, як і українське «б»)</li>
<li><span class="pl">Gdybym miał czas, to bym pojechał.</span> — розмовний варіант: by переходить до <b>to</b> (пор. «то я б поїхав»).</li>
<li><span class="pl">Gdyby nie ty, …</span> — Якби не ти… (після <b>gdyby nie</b> — називний відмінок, як і в українській)</li>
<li><span class="pl">Gdyby tylko…!</span> — Якби ж то…!</li>
</ul>
<div class="ex"><span class="pl">Gdyby nie korki, bylibyśmy już w domu.</span> — Якби не затори, ми вже були б удома.</div>
<div class="tip"><b>Наголос:</b> у формах на -byśmy / -byście — на 4-му складі з кінця, там само, де в <span class="pl">zroBIli</span>: <span class="pl">zroBIlibyśmy, pojeCHAlibyście</span>.</div>`
      },

      exercises: [
        { type: "choice", q: "___ więcej czasu, nauczyłbym się grać na gitarze.", options: ["Gdybym miał", "Jeśli mam", "Gdybym miałbym"], answer: 0, explain: "Нереальна умова → gdyby + форма на -ł. «Jeśli mam» не поєднується з nauczyłbym, а «Gdybym miałbym» — подвійне by." },
        { type: "gap", q: "Gdybyś ___, co się stało, byłabyś w szoku. (wiedzieć, ty, kobieta)", answers: ["wiedziała"], explain: "Закінчення -ś вже приєднане до gdyby, тому дієслово — просто форма минулого часу: wiedziała." },
        { type: "gap", q: "Gdybym wygrał milion, ___ dom nad morzem. (kupić, ja, mężczyzna)", answers: ["kupiłbym"], explain: "У частині-результаті — повний умовний спосіб: kupił + by + m." },
        { type: "choice", q: "___ jutro będzie ładna pogoda, pójdziemy w góry.", options: ["Jeśli", "Gdyby", "Gdybyśmy"], answer: 0, explain: "Реальна умова в майбутньому (będzie, pójdziemy) → jeśli, як укр. «якщо». Gdyby вимагає форми на -ł та умовного способу." },
        { type: "order", ru: "Якби ми були багаті, ми б подорожували навколо світу.", words: ["Gdybyśmy", "byli", "bogaci,", "podróżowalibyśmy", "dookoła", "świata."], alt: ["Podróżowalibyśmy dookoła świata, gdybyśmy byli bogaci."], explain: "gdyby + śmy + byli; у результаті — podróżowali + by + śmy. Dookoła + род. в.: dookoła świata." },
        { type: "match", q: "З’єднайте початок і кінець (підказка — особа й рід дієслова)", pairs: [
          ["Gdybym była odważna,", "skoczyłabym ze spadochronem."],
          ["Gdybyś tyle nie pracował,", "nie byłbyś ciągle zmęczony."],
          ["Gdybyśmy oszczędzali,", "mielibyśmy pieniądze na wakacje."],
          ["Gdyby Ania mieszkała w Gdańsku,", "chodziłaby codziennie nad morze."],
          ["Gdybyście się pospieszyli,", "zdążylibyście na pociąg."]
        ], explain: "Особа й рід в обох частинах збігаються: gdybym była → skoczyłabym, gdybyście → zdążylibyście." },
        { type: "gap", q: "Co ___ zrobił, gdybyś wygrał w totka? (by + ty)", answers: ["byś"], explain: "У питанні by із закінченням «перескакує» до питального слова: Co byś zrobił? — Що б ти зробив?" },
        { type: "choice", q: "Marta, gdybyś mogła zamieszkać w dowolnym mieście, gdzie ___?", options: ["zamieszkałabyś", "zamieszkałbyś", "zamieszkałaś"], answer: 0, explain: "Звертаємося до Марти → жіночий рід, умовний спосіб: zamieszkała + by + ś. Ще природніше: Gdzie byś zamieszkała?" },
        { type: "translate", ru: "Якби я знав, я б прийшов.", answers: ["Gdybym wiedział, przyszedłbym.", "Gdybym wiedział, to bym przyszedł.", "Przyszedłbym, gdybym wiedział."], explain: "Gdybym + форма на -ł (wiedział), далі умовний спосіб przyszedłbym. Варіант із to bym — розмовний." },
        { type: "gap", q: "Gdyby moje marzenie się ___, zrobiłabym wielką imprezę. (spełnić)", answers: ["spełniło"], explain: "Підмет — marzenie (середній рід), 3-тя особа: gdyby + spełniło (без додаткового by)." }
      ],

      pronunciation: {
        focus: "Наголос у формах -libyśmy / -libyście",
        tip: `<p>У формах множини на <b>-byśmy / -byście</b> наголос падає на <b>4-й склад з кінця</b> — він залишається там само, де в минулому часі:</p>
<ul>
<li><span class="pl">zroBIli → zroBIlibyśmy</span></li>
<li><span class="pl">pojeCHAli → pojeCHAlibyście</span></li>
<li><span class="pl">kuPIli → kuPIlibyście</span></li>
</ul>
<p>Прийом: спершу вимовте форму минулого часу (<span class="pl">kupili</span>), а потім «приклейте» ненаголошений хвіст <b>-byśmy</b>. Українському вуху це незвично: у нас наголос вільний (купи́ли б), а тут він стоїть далеко від кінця слова. У розмовному мовленні часто чути наголос на передостанньому складі (<i>zrobiliBYśmy</i>), але норма — 4-й склад з кінця.</p>
<p>Слухайте й різницю <b>-li-</b> / <b>-ły-</b>: <span class="pl">zrobilibyśmy</span> (у групі є чоловік) — <span class="pl">zrobiłybyśmy</span> (лише жінки).</p>`,
        items: [
          { type: "stress", word: "zrobilibyśmy", syllables: ["zro", "bi", "li", "by", "śmy"], answer: 1 },
          { type: "stress", word: "pojechalibyśmy", syllables: ["po", "je", "cha", "li", "by", "śmy"], answer: 2 },
          { type: "stress", word: "kupilibyście", syllables: ["ku", "pi", "li", "by", "ście"], answer: 1 },
          { type: "stress", word: "mieszkałybyśmy", syllables: ["miesz", "ka", "ły", "by", "śmy"], answer: 1 },
          { type: "minimal", options: ["zrobilibyśmy", "zrobiłybyśmy"], ru: ["ми б зробили (чол.-особ.)", "ми б зробили (жінки)"] },
          { type: "listen", text: "Gdybyśmy wygrali w totka, pojechalibyśmy dookoła świata.", ru: "Якби ми виграли в лотерею, ми б поїхали навколо світу." },
          { type: "dictation", text: "Gdybym miała więcej czasu, nauczyłabym się grać na gitarze." }
        ]
      },

      reading: {
        title: "Co byś zrobił z milionem?",
        text: `Poniedziałek, godzina ósma. Tomek, reporter lokalnego radia, stoi z mikrofonem na Starym Rynku w Poznaniu. W sobotę ktoś wygrał w Lotto trzydzieści milionów złotych, więc dzisiejsze pytanie brzmi: co byś zrobił, gdybyś wygrał milion?

Pierwsza zatrzymuje się pani Halina, emerytka. – Gdybym wygrała milion, kupiłabym działkę pod Poznaniem i posadziłabym tam pomidory. Wnuki przyjeżdżałyby do mnie w każdy weekend. No i w końcu spełniłoby się moje marzenie: zobaczyłabym Rzym!

Student Kuba śmieje się do mikrofonu: – Rzuciłbym studia! Nie, żartuję. Gdybym był milionerem, pojechałbym z kumplami dookoła świata. Ale najpierw musiałbym zdać sesję.

Ola, programistka, odpowiada bez zastanowienia: – Rzuciłabym wszystko i wyjechała w Bieszczady. Otworzyłabym tam agroturystykę, miałabym kozy i zero maili. Proszę sobie wyobrazić: cisza, góry i żadnych spotkań online!

Pan Zbigniew, motorniczy, długo się zastanawia. – Wie pan, ja bym chyba nic nie zmienił. Gdybym miał milion, i tak jeździłbym tramwajem, bo lubię swoją pracę. No, może kupiłbym sobie nowe wędki. A resztę odłożyłbym na emeryturę.

Na koniec Tomek mówi do słuchaczy: – A ja? Na razie oszczędzam na nowy rower. Gdybym wygrał, nie musiałbym stać na rynku w deszczu. Ale wtedy nie poznałbym tylu ciekawych ludzi. Więc niczego nie żałuję!`,
        glossary: [
          { pl: "działkę", ru: "дачну ділянку" },
          { pl: "posadziłabym", ru: "я б посадила" },
          { pl: "kumplami", ru: "приятелями (розм.)" },
          { pl: "sesję", ru: "сесію (іспити)" },
          { pl: "bez zastanowienia", ru: "не замислюючись" },
          { pl: "agroturystykę", ru: "агросадибу (гостьовий будинок у селі)" },
          { pl: "motorniczy", ru: "водій трамвая" },
          { pl: "wędki", ru: "вудки" },
          { pl: "odłożyłbym", ru: "я б відклав (гроші)" },
          { pl: "słuchaczy", ru: "слухачів" }
        ],
        questions: [
          { type: "tf", q: "Pani Halina kupiłaby mieszkanie w centrum Poznania.", answer: false, explain: "Вона купила б działkę pod Poznaniem — дачну ділянку під Познанню." },
          { type: "choice", q: "Co zrobiłaby Ola?", options: ["Wyjechałaby w Bieszczady i otworzyłaby agroturystykę.", "Pojechałaby z kumplami dookoła świata.", "Kupiłaby nowe wędki."], answer: 0, explain: "«Rzuciłabym wszystko i wyjechała w Bieszczady. Otworzyłabym tam agroturystykę»." },
          { type: "tf", q: "Kuba tylko żartował, że rzuciłby studia.", answer: true, explain: "«Rzuciłbym studia! Nie, żartuję»." },
          { type: "tf", q: "Pan Zbigniew rzuciłby pracę.", answer: false, explain: "Він нічого не змінив би: i tak jeździłbym tramwajem, bo lubię swoją pracę." },
          { type: "choice", q: "Dlaczego Tomek chciałby wygrać?", options: ["Bo nie musiałby stać na rynku w deszczu.", "Bo marzy o działce.", "Bo chce zobaczyć Rzym."], answer: 0, explain: "«Gdybym wygrał, nie musiałbym stać na rynku w deszczu»." }
        ]
      },

      writing: {
        prompt: "На польському форумі тема: «Co byś zrobił(a), gdybyś wygrał(a) milion złotych?». Напишіть свій допис: 1) що б ви купили; 2) куди б поїхали або де б оселилися; 3) кому б допомогли; 4) чого б ви НЕ змінювали у своєму житті. Використайте щонайменше 2 конструкції з gdyby.",
        minWords: 80,
        maxWords: 130,
        useWords: ["marzenie", "wygrać", "zamieszkać", "rzucić"],
        checklist: [
          { label: "Щонайменше 2 конструкції з gdyby", pattern: "gdyby", min: 2 },
          { label: "Щонайменше 5 форм умовного способу (kupiłabym, pojechałbym…)", pattern: "\\p{L}+(łby|łaby|liby|łyby)\\p{L}*", min: 5 }
        ],
        model: `Gdybym wygrała milion złotych, najpierw spłaciłabym kredyt za mieszkanie. Potem spełniłabym swoje wielkie marzenie i pojechałabym na pół roku do Ameryki Południowej. Nauczyłabym się hiszpańskiego i tańczyłabym tango w Buenos Aires. Część pieniędzy dałabym rodzicom – gdyby nie oni, nie skończyłabym studiów. Po powrocie zamieszkałabym w małym domu pod Gdańskiem, blisko morza, i miałabym dużego psa. Czy rzuciłabym pracę? Raczej nie, bo naprawdę ją lubię. Pracowałabym tylko cztery dni w tygodniu. Gdyby coś jeszcze zostało, kupiłabym bilety na koncert mojego ulubionego zespołu. Na razie jednak muszę oszczędzać i grać w totka. Może w tym tygodniu w końcu wygram?`
      }
    },

    // ───────────────────────── Урок 3 ─────────────────────────
    {
      id: "m08l3",
      title: "Chcę, żebyś…",
      titleRu: "Żeby / aby: мета і бажання",
      topic: "Cele i prośby",
      review: false,
      minutes: 30,
      goals: [
        "Висловлювати мету: Idę do sklepu, żeby kupić chleb",
        "Висловлювати бажання або прохання щодо іншої людини: Chcę, żebyś przyszedł",
        "Розрізняти żeby + інфінітив і żeby + форма на -ł, а також że і żeby",
        "Вимовляти ż / rz / ź у зв’язному мовленні"
      ],

      vocab: [
        { pl: "cel", g: "m", ru: "мета, ціль", ex: "Moim celem jest zdać egzamin B1.", exRu: "Моя мета — скласти іспит B1." },
        { pl: "osiągnąć", ru: "досягти", ex: "Żeby osiągnąć cel, ćwiczę codziennie.", exRu: "Щоб досягти мети, я займаюся щодня.", note: "osiągnąć cel — знах. в., без прийменника (укр. «досягти мети» — род. в.)" },
        { pl: "zdawać / zdać", ru: "складати / скласти (іспит)", ex: "Zdawałem prawo jazdy dwa razy i zdałem dopiero za drugim razem.", exRu: "Я складав іспит на права двічі й склав лише з другого разу.", note: "zdawać — процес (складати), zdać — успішний результат (скласти)" },
        { pl: "postanowienie", g: "n", ru: "рішення; обітниця", ex: "Moje postanowienie noworoczne: mniej telefonu, więcej książek.", exRu: "Моя новорічна обітниця: менше телефону, більше книжок." },
        { pl: "zależeć", ru: "залежати; бути важливим", ex: "Zależy mi na tym, żebyś był szczęśliwy.", exRu: "Для мене важливо, щоб ти був щасливий.", note: "zależy mi na + місц. в. — мені важливо…" },
        { pl: "pozwolić", ru: "дозволити", ex: "Rodzice nie pozwolili mi pojechać na festiwal.", exRu: "Батьки не дозволили мені поїхати на фестиваль.", note: "pozwolić komuś + інф. / żeby…" },
        { pl: "zmoknąć", ru: "змокнути, промокнути", ex: "Weź parasol, żeby nie zmoknąć.", exRu: "Візьми парасольку, щоб не змокнути." },
        { pl: "schudnąć", ru: "схуднути", ex: "Chcę schudnąć pięć kilo przed latem.", exRu: "Я хочу схуднути на п’ять кіло до літа.", note: "schudnąć pięć kilo — без прийменника «na» (укр. «схуднути на п’ять кіло»)!" },
        { pl: "odżywiać się", ru: "харчуватися", ex: "Staram się zdrowo odżywiać.", exRu: "Я намагаюся здорово харчуватися." },
        { pl: "przypomnieć", ru: "нагадати", ex: "Przypomnij mi, żebym zadzwonił do babci.", exRu: "Нагадай мені, щоб я подзвонив бабусі.", note: "przypomnieć komuś o czymś" },
        { pl: "nalegać", ru: "наполягати", ex: "Lekarz nalega, żebym się więcej ruszał.", exRu: "Лікар наполягає, щоб я більше рухався.", note: "nalegać na + знах. в. (укр. «наполягати на» + місц. в.) / nalegać, żeby…" },
        { pl: "zapisać się", ru: "записатися", ex: "Zapisałam się na kurs tańca.", exRu: "Я записалася на курси танців.", note: "zapisać się na + знах. в. / do + род. в." },
        { pl: "siłownia", g: "f", ru: "тренажерна зала, спортзал", ex: "Chodzę na siłownię trzy razy w tygodniu.", exRu: "Я ходжу в спортзал тричі на тиждень.", note: "na siłownię / na siłowni — з прийменником na, а не «w»!" }
      ],

      grammar: {
        title: "Żeby / aby: мета і бажання",
        html: `<p>Сполучник <b>żeby</b> (книжний варіант — <b>aby</b>, пор. укр. «аби») — це українське «щоб». Добра новина: логіка майже така сама, як в українській. Важливо лише одне — <b>хто</b> виконує дію в другій частині речення.</p>
<h4>1. Та сама особа → żeby + інфінітив</h4>
<div class="ex"><span class="pl">Uczę się polskiego, żeby studiować w Krakowie.</span> — Я вчу польську, щоб навчатися в Кракові.</div>
<div class="ex"><span class="pl">Wyszłam wcześniej, żeby się nie spóźnić.</span> — Я вийшла раніше, щоб не запізнитися.</div>
<h4>2. Інша особа → żeby + закінчення + форма на -ł</h4>
<p>Як в українському «щоб ти прийшов», дієслово стоїть у формі минулого часу. Але особове закінчення приєднується до <b>żeby</b>, а не до дієслова:</p>
<table class="g"><tr><th></th><th>żeby + …</th><th>приклад</th></tr>
<tr><td>ja</td><td class="pl">żebym</td><td class="pl">Mama chce, żebym wrócił przed dziesiątą.</td></tr>
<tr><td>ty</td><td class="pl">żebyś</td><td class="pl">Chcę, żebyś przyszła na moje urodziny.</td></tr>
<tr><td>on / ona</td><td class="pl">żeby</td><td class="pl">Poproś go, żeby zadzwonił.</td></tr>
<tr><td>my</td><td class="pl">żebyśmy</td><td class="pl">Szef nalega, żebyśmy zostali po godzinach.</td></tr>
<tr><td>wy</td><td class="pl">żebyście</td><td class="pl">Proszę, żebyście byli cicho.</td></tr>
<tr><td>oni / one</td><td class="pl">żeby</td><td class="pl">Zależy mi na tym, żeby dzieci były zdrowe.</td></tr></table>
<div class="tip"><b>Пастка №1.</b> ✗ <i>Chcę, żeby ty przyszedł.</i> → ✓ <span class="pl">Chcę, żebyś przyszedł.</span> В українській без займенника не обійтися («щоб ти прийшов»), а в польській він не потрібен — особу видно із закінчення <b>-ś</b>. І не ставте друге by: ✗ <i>żebyś przyszedłbyś</i>.</div>
<h4>3. Після яких слів іде żeby</h4>
<ul>
<li><span class="pl">chcieć, woleć, prosić, poprosić</span> — хотіти, воліти, просити</li>
<li><span class="pl">nalegać, przypomnieć, powiedzieć</span> (= веліти) — наполягати, нагадати, сказати</li>
<li><span class="pl">Zależy mi na tym, żeby…</span> — Для мене важливо, щоб…</li>
<li><span class="pl">po to, żeby…</span> — для того, щоб…</li>
<li><span class="pl">Żeby tylko nie padało!</span> — Аби тільки не було дощу! (побажання)</li>
</ul>
<div class="tip"><b>Пастка №2 — że чи żeby?</b> Розподіл той самий, що в українській (що / щоб): <span class="pl">że</span> передає факт, <span class="pl">żeby</span> — прохання або наказ. <span class="pl">Powiedział, że przyjdzie.</span> — Він сказав, що прийде. <span class="pl">Powiedział, żebym przyszedł.</span> — Він сказав, щоб я прийшов.</div>
<div class="tip"><b>Пастка №3.</b> Українське «для того, щоб» — це не <i>dla</i>. ✗ <i>Przyjechałem dla nauki.</i> → ✓ <span class="pl">Przyjechałem, żeby się uczyć.</span> / <span class="pl">Przyjechałem po to, żeby się uczyć.</span></div>
<p><b>aby</b> — синонім żeby в офіційних текстах: <span class="pl">Aby otrzymać fakturę, należy podać NIP.</span> Після <b>żeby nie</b> пряме доповнення, як при будь-якому запереченні, стоїть у родовому відмінку (пор. укр. «щоб не гаяти часу»): <span class="pl">Pojechałam taksówką, żeby nie tracić czasu.</span></p>`
      },

      exercises: [
        { type: "choice", q: "Idę do apteki, ___ kupić coś na ból głowy.", options: ["żeby", "że", "żebym"], answer: 0, explain: "Іду я й куплю я — та сама особа → żeby + інфінітив. Żebym вимагає форми на -ł (żebym kupił), że — це «що»." },
        { type: "choice", q: "Mama prosi, ___ wrócił przed północą.", options: ["żebym", "żeby ja", "że"], answer: 0, explain: "Інша особа (я) → żeby + m + форма на -ł: żebym wrócił. Займенник ja не потрібен." },
        { type: "gap", q: "Szef chce, ___ przyszli jutro wcześniej. (żeby + my)", answers: ["żebyśmy", "abyśmy"], explain: "Шеф хоче, а прийти маємо ми → żeby + śmy + przyszli." },
        { type: "gap", q: "Chcę, żebyś mi ___ o spotkaniu. (przypomnieć, ty, kobieta)", answers: ["przypomniała"], explain: "Закінчення -ś вже стоїть у żebyś, тому дієслово — просто форма минулого часу: przypomniała." },
        { type: "gap", q: "Wzięłam parasol, żeby nie ___. (zmoknąć)", answers: ["zmoknąć"], explain: "Узяла парасольку я й не змокну я — та сама особа → żeby + інфінітив." },
        { type: "match", q: "З’єднайте польську фразу з перекладом", pairs: [
          ["Zależy mi na tym, żeby…", "Для мене важливо, щоб…"],
          ["Żeby tylko nie padało!", "Аби тільки не було дощу!"],
          ["po to, żeby…", "для того, щоб…"],
          ["Powiedział, żebym przyszedł.", "Він сказав, щоб я прийшов."],
          ["Powiedział, że przyjdę.", "Він сказав, що я прийду."],
          ["Nalegam, żebyś został.", "Я наполягаю, щоб ти залишився."]
        ], explain: "Зверніть увагу на пару że / żeby (як укр. що / щоб): факт чи прохання — зміст змінюється повністю." },
        { type: "order", ru: "Я записалася в спортзал, щоб схуднути.", words: ["Zapisałam", "się", "na", "siłownię,", "żeby", "schudnąć."], alt: ["Żeby schudnąć, zapisałam się na siłownię."], explain: "zapisać się na siłownię (знах. в.); записалася й схудну я → żeby + інфінітив." },
        { type: "choice", q: "Rodzice nalegają, żebyśmy ___ na święta do Rzeszowa.", options: ["przyjechali", "przyjechać", "przyjedziemy"], answer: 0, explain: "Після żebyśmy — лише форма на -ł (чоловічо-особова: przyjechali). Інфінітив (żeby przyjechać) можливий, лише якщо дію виконує та сама особа, що й у головній частині." },
        { type: "translate", ru: "Я хочу, щоб ти залишився.", answers: ["Chcę, żebyś został.", "Chcę, abyś został."], explain: "Хочу я, а залишитися маєш ти → żeby + ś + został." },
        { type: "gap", q: "Zależy mi na tym, ___ zdać ten egzamin za pierwszym razem. (щоб)", answers: ["żeby", "aby"], explain: "Важливо мені, і складатиму іспит я — та сама особа → żeby + інфінітив." }
      ],

      pronunciation: {
        focus: "ż / rz / ź у зв’язному мовленні",
        tip: `<p><b>ż</b> і <b>rz</b> звучать однаково — твердо, як українське «ж»: <span class="pl">żeby, rzeka, może, morze</span>. А <b>ź</b> (і <b>zi</b> перед голосним) — м’який звук, якого в українській немає: кінчик язика внизу, за нижніми зубами, спинка язика піднята до піднебіння — виходить щось середнє між «зь» і м’яким «ж’»: <span class="pl">źle, zima, buzia</span>.</p>
<ul>
<li>Після глухих приголосних <b>rz</b> оглушується в [ш]: <span class="pl">przy, trzeba, przypomnieć</span>.</li>
<li>У кінці слова <b>ż / rz</b> звучать як [ш], а <b>ź</b> — як м’яке [ш’] (тобто як польське ś): <span class="pl">też, już, weź</span>.</li>
<li>У зв’язному мовленні <b>żeby</b> й закінчення вимовляються одним словом: <span class="pl">żebyś, żebyśmy</span> — без паузи.</li>
</ul>
<p>Головна трудність для україномовних — почути різницю між <b>z</b>, <b>ż</b> і <b>ź</b>: <span class="pl">zebra</span> (зебра) — <span class="pl">żebra</span> (ребра), <span class="pl">buzia</span> (личко) — <span class="pl">burza</span> (гроза).</p>`,
        items: [
          { type: "minimal", options: ["zebra", "żebra"], ru: ["зебра", "ребра"] },
          { type: "minimal", options: ["buzia", "burza"], ru: ["личко, ротик", "гроза"] },
          { type: "listen", text: "Zależy mi na tym, żebyś przyjechał.", ru: "Для мене важливо, щоб ти приїхав." },
          { type: "listen", text: "Weź parasol, żeby nie zmoknąć.", ru: "Візьми парасольку, щоб не змокнути.", note: "weź у кінці звучить як [веш’]" },
          { type: "listen", text: "Przypomnij mi, żebym zadzwonił do babci.", ru: "Нагадай мені, щоб я подзвонив бабусі.", note: "przy — rz після p оглушується: [пши]" },
          { type: "dictation", text: "Mąż nalega, żebyśmy pojechali nad morze." }
        ]
      },

      reading: {
        title: "Postanowienia noworoczne",
        text: `Jest trzydziesty pierwszy grudnia. Rodzina Wiśniewskich z Łodzi siedzi przy stole i, jak co roku, pisze na karteczkach postanowienia noworoczne.

Tata Wojtek pisze pierwszy: „Zapiszę się na siłownię, żeby schudnąć dziesięć kilo”. Mama czyta to i wzdycha: – Żeby tylko nie było jak w zeszłym roku. Kupiłeś karnet za tysiąc dwieście złotych i byłeś na siłowni dwa razy!

Szesnastoletnia Zosia ma zupełnie inny cel. – Chcę, żebyście pozwolili mi pojechać z koleżankami na Open'era do Gdyni – mówi. – Obiecuję, że będę się dobrze uczyć, żeby zdać wszystkie sprawdziany.

Rodzice patrzą na siebie. – Zobaczymy – odpowiada tata. Ale Zosia nalega, żeby dali jej odpowiedź jeszcze przed feriami.

Mama ma postanowienie dla całej rodziny: – Zależy mi na tym, żebyśmy zdrowo się odżywiali. Koniec z chipsami i colą!

Wszyscy kiwają głowami, ale nikt nie przypomina mamie, że w Tłusty Czwartek zawsze kupuje dwanaście pączków.

Bardzo ambitny cel ma babcia Krysia. – W tym roku nauczę się obsługiwać smartfon, żeby rozmawiać przez wideo z wnukiem w Dublinie. Poproszę Zosię, żeby mi wszystko pokazała.

Mijają dwa miesiące. Tata był na siłowni trzy razy – to jego nowy rekord. Mama chowa w szafce pączki z Tłustego Czwartku, a Zosia wciąż czeka na decyzję rodziców. Tylko babcia osiągnęła swój cel: codziennie dzwoni do wnuka i wysyła mu zdjęcia swojego kota.`,
        glossary: [
          { pl: "karteczkach", ru: "папірцях, аркушиках" },
          { pl: "wzdycha", ru: "зітхає" },
          { pl: "karnet", ru: "абонемент" },
          { pl: "Szesnastoletnia", ru: "шістнадцятирічна" },
          { pl: "sprawdziany", ru: "контрольні роботи" },
          { pl: "feriami", ru: "зимовими канікулами" },
          { pl: "kiwają głowami", ru: "кивають головами" },
          { pl: "Tłusty Czwartek", ru: "Жирний четвер (день пончиків перед Великим постом)" },
          { pl: "obsługiwać", ru: "користуватися (пристроєм), а не «обслуговувати»" },
          { pl: "chowa", ru: "ховає" }
        ],
        questions: [
          { type: "tf", q: "Tata chce zapisać się na siłownię, żeby schudnąć.", answer: true, explain: "«Zapiszę się na siłownię, żeby schudnąć dziesięć kilo»." },
          { type: "tf", q: "W zeszłym roku tata regularnie chodził na siłownię.", answer: false, explain: "Він купив абонемент і був у залі лише dwa razy." },
          { type: "choice", q: "Na co Zosia chce pojechać?", options: ["Na festiwal Open'er do Gdyni.", "Na obóz narciarski.", "Do kuzyna w Dublinie."], answer: 0, explain: "«Chcę, żebyście pozwolili mi pojechać z koleżankami na Open'era do Gdyni»." },
          { type: "choice", q: "Po co babcia chce nauczyć się obsługiwać smartfon?", options: ["Żeby rozmawiać przez wideo z wnukiem.", "Żeby robić zakupy w internecie.", "Żeby grać w gry z Zosią."], answer: 0, explain: "«…żeby rozmawiać przez wideo z wnukiem w Dublinie»." },
          { type: "tf", q: "Mama zawsze odżywia się zdrowo.", answer: false, explain: "У Жирний четвер вона купує дванадцять пончиків, а потім ховає їх у шафці." }
        ]
      },

      writing: {
        prompt: "Напишіть лист польській подрузі про ваші цілі на новий рік: 1) 2–3 цілі та навіщо вони вам (żeby + інфінітив); 2) про що ви хочете попросити подругу (chcę, żebyś…); 3) запропонуйте щось робити разом. Використайте żeby / aby щонайменше 3 рази.",
        minWords: 80,
        maxWords: 130,
        useWords: ["cel", "postanowienie", "osiągnąć", "zależeć"],
        checklist: [
          { label: "żeby / aby — щонайменше 3 рази", pattern: "(?<!\\p{L})(żeby|aby)\\p{L}*", min: 3 },
          { label: "żeby із закінченням щодо іншої особи (żebyś, żebyście…)", pattern: "żeby(ś|śmy|ście)(?!\\p{L})", min: 1 }
        ],
        model: `Cześć Kasiu!

Jak minął ci Sylwester? Ja w tym roku mam aż trzy postanowienia noworoczne. Po pierwsze, zapisałam się na kurs hiszpańskiego, żeby w końcu porozmawiać z rodziną mojego chłopaka. Po drugie, chcę biegać trzy razy w tygodniu, żeby przygotować się do półmaratonu w Warszawie. Po trzecie, zależy mi na tym, żeby czytać jedną polską książkę miesięcznie.

Mam też do ciebie prośbę: chcę, żebyś mi o tym przypominała, kiedy będę leniwa! Może mogłybyśmy razem chodzić w soboty na basen? Wtedy na pewno osiągnę swój cel. Napisz, jakie są twoje plany na ten rok.

Buziaki,
Ola`
      }
    },

    // ───────────────────────── Урок 4 ─────────────────────────
    {
      id: "m08l4",
      title: "Na twoim miejscu…",
      titleRu: "Поради: powinien, trzeba, warto, należy",
      topic: "Porady",
      review: false,
      minutes: 30,
      goals: [
        "Давати поради: powinieneś, powinnaś, warto, trzeba, należy",
        "Розрізняти musieć і powinien, nie musisz і nie powinieneś",
        "Пом’якшувати пораду: Na twoim miejscu poszedłbym…, Radziłbym ci…",
        "Вимовляти прийменник разом із наступним словом: w domu, z nim, bez niego"
      ],

      vocab: [
        { pl: "rada", g: "f", ru: "порада", ex: "Dzięki za radę!", exRu: "Дякую за пораду!", note: "пор. укр. «дати собі раду»: dać sobie radę — упоратися; «радий» = zadowolony" },
        { pl: "radzić / poradzić", ru: "радити / порадити", ex: "Radzę ci odpocząć.", exRu: "Раджу тобі відпочити.", note: "radzić komuś + інф.; poradzić sobie z czymś — упоратися з чимось" },
        { pl: "warto", ru: "варто, має сенс", ex: "Warto odwiedzić Wieliczkę.", exRu: "Варто відвідати Величку." },
        { pl: "należy", ru: "слід, належить (офіційно)", ex: "Należy okazać bilet przy wejściu.", exRu: "На вході слід пред’явити квиток." },
        { pl: "powinien", ru: "повинен, слід", ex: "Powinnaś więcej odpoczywać.", exRu: "Тобі слід більше відпочивати.", note: "powinienem / powinnam, powinieneś / powinnaś… (пор. укр. «повинен»)" },
        { pl: "unikać", ru: "уникати", ex: "Powinieneś unikać tłustego jedzenia.", exRu: "Тобі слід уникати жирної їжі.", note: "unikać + род. в., як в українській" },
        { pl: "zrezygnować", ru: "відмовитися", ex: "Zrezygnowałem z tej oferty.", exRu: "Я відмовився від цієї пропозиції.", note: "zrezygnować z + род. в." },
        { pl: "pogodzić się", ru: "помиритися; змиритися", ex: "Pogodziłam się z siostrą po tygodniu.", exRu: "Я помирилася із сестрою через тиждень.", note: "pogodzić się z + оруд. в.; хибний друг: «погодитися» — це zgodzić się!" },
        { pl: "przeprosić", ru: "перепросити, вибачитися", ex: "Musisz ją przeprosić.", exRu: "Ти мусиш її перепросити.", note: "przeprosić kogoś (знах. в.) za coś — як укр. «перепросити когось», без «перед»!" },
        { pl: "kłótnia", g: "f", ru: "сварка", ex: "Po kłótni nie rozmawiali ze sobą przez tydzień.", exRu: "Після сварки вони не розмовляли тиждень." },
        { pl: "wynajmować / wynająć", ru: "винаймати / винайняти (житло); здавати / здати", ex: "Wynajmuję kawalerkę na Pradze.", exRu: "Я винаймаю однокімнатну квартиру на Празі (район Варшави)." },
        { pl: "umowa", g: "f", ru: "договір, угода (не «умова»!)", ex: "Przed podpisaniem umowy przeczytaj ją dokładnie.", exRu: "Перед підписанням договору уважно його прочитай." },
        { pl: "kaucja", g: "f", ru: "застава (грошова)", ex: "Właściciel chce kaucję w wysokości jednego czynszu.", exRu: "Власник хоче заставу в розмірі місячної плати." },
        { pl: "szczerze", ru: "щиро, відверто", ex: "Szczerze mówiąc, to zły pomysł.", exRu: "Щиро кажучи, це погана ідея." }
      ],

      grammar: {
        title: "Поради й обов’язок",
        html: `<p>Тут українцям пощастило: польські вирази мають майже дослівні відповідники — мусити, повинен, треба, варто, належить. Але в кожного своє забарвлення:</p>
<table class="g"><tr><th>вираз</th><th>значення</th><th>приклад</th></tr>
<tr><td class="pl">musieć</td><td>мусити, бути змушеним (жорстко)</td><td class="pl">Muszę jutro wcześnie wstać.</td></tr>
<tr><td class="pl">powinien</td><td>повинен, слід (порада, норма)</td><td class="pl">Powinieneś więcej spać.</td></tr>
<tr><td class="pl">trzeba</td><td>треба (безособово)</td><td class="pl">Trzeba kupić chleb.</td></tr>
<tr><td class="pl">warto</td><td>варто, має сенс</td><td class="pl">Warto zobaczyć Wieliczkę.</td></tr>
<tr><td class="pl">należy</td><td>слід, належить (інструкції, правила)</td><td class="pl">Należy okazać dowód osobisty.</td></tr></table>
<h4>Powinien — «неповне» дієслово</h4>
<p>Він не має інфінітива, а форми схожі на минулий час — як і українське «повинен, повинна, повинні». Після нього — інфінітив.</p>
<table class="g"><tr><th></th><th>чоловічий / чол.-особовий</th><th>жіночий / нечол.-особовий</th></tr>
<tr><td>ja</td><td class="pl">powinienem</td><td class="pl">powinnam</td></tr>
<tr><td>ty</td><td class="pl">powinieneś</td><td class="pl">powinnaś</td></tr>
<tr><td>on / ona / ono</td><td class="pl">powinien</td><td class="pl">powinna / powinno</td></tr>
<tr><td>my</td><td class="pl">powinniśmy</td><td class="pl">powinnyśmy</td></tr>
<tr><td>wy</td><td class="pl">powinniście</td><td class="pl">powinnyście</td></tr>
<tr><td>oni / one</td><td class="pl">powinni</td><td class="pl">powinny</td></tr></table>
<p>Докір щодо минулого — з <b>był / była</b>, як в українському «ти повинен був»: <span class="pl">Powinieneś był mi powiedzieć!</span> — Ти повинен був мені сказати! (а ти не сказав). Безособові форми: <span class="pl">trzeba było, warto było</span> (мин.), <span class="pl">trzeba będzie</span> (майб.) — дослівно «треба було», «варто було», «треба буде».</p>
<h4>М’яка порада — умовний спосіб</h4>
<ul>
<li><span class="pl">Na twoim miejscu poszedłbym do lekarza.</span> — На твоєму місці я б пішов до лікаря.</li>
<li><span class="pl">Na pana miejscu nie podpisałabym tej umowy.</span> — На вашому місці я б не підписувала цього договору.</li>
<li><span class="pl">Radziłbym ci odpocząć.</span> — Я б порадив тобі відпочити.</li>
<li><span class="pl">Może byś do niej zadzwonił?</span> — Може, ти б їй подзвонив?</li>
</ul>
<div class="tip"><b>Пастка №1 — nie musisz ≠ nie powinieneś.</b> <span class="pl">Nie musisz przychodzić.</span> — Ти не мусиш приходити (але можеш). <span class="pl">Nie powinieneś tyle pracować.</span> — Тобі не слід стільки працювати.</div>
<div class="tip"><b>Пастка №2 — «стоїть».</b> Літературне українське «варто подивитися» прямо відповідає польському warto, а от суржикове «стоїть подивитися» в польську не переносьте: <span class="pl">warto</span> (варто подивитися), <span class="pl">kosztuje</span> (коштує 10 злотих), <span class="pl">stoi</span> (стоїть на столі). ✗ <i>To stoi zobaczyć</i> → ✓ <span class="pl">Warto to zobaczyć</span>.</div>
<div class="tip"><b>Пастка №3 — керування.</b> <span class="pl">unikać czegoś</span> (род. в.), <span class="pl">przeprosić kogoś</span> (знах. в., як «перепросити когось»: ✗ <i>przeprosić przed nią</i> — калька з «вибачитися перед нею» → ✓ <span class="pl">przeprosić ją</span>), <span class="pl">zrezygnować z czegoś</span>, <span class="pl">pogodzić się z kimś</span> (= помиритися, а не «погодитися»).</div>`
      },

      exercises: [
        { type: "gap", q: "Jesteś przeziębiony. ___ zostać w domu. (powinien, ty)", answers: ["Powinieneś"], explain: "Ти (чоловік: przeziębiony) → powinieneś. Для жінки було б powinnaś." },
        { type: "gap", q: "Kasia ___ przeprosić koleżankę. (powinien, ona)", answers: ["powinna"], explain: "Вона → powinna. Przeprosić + знах. в.: przeprosić koleżankę — як «перепросити колегу», без «перед»." },
        { type: "choice", q: "Muzeum Powstania Warszawskiego? Koniecznie! ___ je zobaczyć.", options: ["Warto", "Stoi", "Kosztuje"], answer: 0, explain: "«Варто побачити» = warto zobaczyć. Stoi — стоїть фізично, kosztuje — про ціну." },
        { type: "choice", q: "Regulamin basenu: «Przed wejściem do wody ___ wziąć prysznic. To obowiązkowe.»", options: ["należy", "warto", "stoi"], answer: 0, explain: "У правилах та інструкціях обов’язок виражають через należy (≈ укр. «слід», «належить»). Warto — лише порада, а тут це обов’язково." },
        { type: "gap", q: "Na twoim miejscu ___ z tej pracy. (zrezygnować, ja, mężczyzna)", answers: ["zrezygnowałbym", "bym zrezygnował"], explain: "Na twoim miejscu + умовний спосіб: zrezygnowałbym. У розмові by може стояти окремо: bym zrezygnował." },
        { type: "choice", q: "Nie ___ mi pomagać, ale byłoby bardzo miło.", options: ["musisz", "powinieneś", "należy"], answer: 0, explain: "Nie musisz — «не мусиш» (але можеш). Nie powinieneś — «не слід», що суперечить другій частині." },
        { type: "match", q: "З’єднайте польську фразу з перекладом", pairs: [
          ["Powinieneś był mi powiedzieć.", "Ти повинен був мені сказати."],
          ["Trzeba było wziąć parasol.", "Треба було взяти парасольку."],
          ["Nie warto.", "Не варто."],
          ["Na twoim miejscu…", "На твоєму місці…"],
          ["Radziłabym ci odpocząć.", "Я б порадила тобі відпочити."],
          ["Dasz sobie radę!", "Ти даси собі раду!"]
        ], explain: "Powinieneś był / trzeba było — докір щодо минулого; умовний спосіб (radziłabym) пом’якшує пораду. Dasz sobie radę — дослівно «даси собі раду», тобто впораєшся." },
        { type: "order", ru: "На твоєму місці я б її перепросив.", words: ["Na", "twoim", "miejscu", "przeprosiłbym", "ją."], alt: ["Przeprosiłbym ją na twoim miejscu."], explain: "Na twoim miejscu + умовний спосіб. Przeprosić kogoś — знах. в.: ją, без прийменника (як «перепросити її»)." },
        { type: "translate", ru: "Тобі слід уникати солодкого.", answers: ["Powinieneś unikać słodyczy.", "Powinnaś unikać słodyczy.", "Powinieneś unikać słodkiego.", "Powinnaś unikać słodkiego."], explain: "Unikać + род. в.: słodycze → słodyczy. Форма powinien залежить від роду співрозмовника." },
        { type: "gap", q: "Trzeba ___ wcześniej kupić bilety, teraz już ich nie ma. (być, мин. час)", answers: ["było"], explain: "Trzeba było — «треба було» (а ми не зробили). Безособова форма минулого часу — середній рід: było." }
      ],

      pronunciation: {
        focus: "Зв’язне мовлення: прийменник + слово (w domu, z nim, bez niego)",
        tip: `<p>Односкладові прийменники (<b>w, z, do, od, bez, na</b>) не вимовляються окремо — вони зливаються з наступним словом в одне фонетичне слово:</p>
<ul>
<li><span class="pl">w domu</span> → [вдому], <span class="pl">z nim</span> → [ж’нім] — м’якість «перетікає» на z.</li>
<li>Перед глухим приголосним прийменник оглушується: <span class="pl">w Krakowie</span> → [фкраков’є], <span class="pl">z kim</span> → [скім], <span class="pl">w pracy</span> → [фпраци]. Увага: українське «в» перед глухим не оглушується (звучить як [ў]), а польське w — оглушується в [ф].</li>
<li>Наголос рахується для всієї групи: <span class="pl">bez niego</span> → [беж’НЄґо].</li>
<li>Прийменник + односкладовий займенник — наголос на прийменнику: <span class="pl">DO mnie, ZE mną, DLA nas</span>.</li>
<li>Перед важкою групою приголосних у прийменника з’являється <b>e</b> (пор. укр. «зі мною»): <span class="pl">we wtorek, ze mną, we Wrocławiu</span>.</li>
</ul>
<p>Тому на слух <span class="pl">w domu</span> і <span class="pl">do domu</span> легко сплутати — тренуйтеся!</p>`,
        items: [
          { type: "minimal", options: ["w domu", "do domu"], ru: ["вдома", "додому"] },
          { type: "minimal", options: ["w nim", "z nim"], ru: ["у ньому", "з ним"] },
          { type: "minimal", options: ["w Krakowie", "o Krakowie"], ru: ["у Кракові", "про Краків"] },
          { type: "listen", text: "Na twoim miejscu porozmawiałbym z nim szczerze.", ru: "На твоєму місці я б поговорив із ним відверто.", note: "z nim — одним словом: [ж’нім]" },
          { type: "listen", text: "Weź klucze, nie wychodź bez nich.", ru: "Візьми ключі, не виходь без них.", note: "bez nich — [беж’ніх], одним словом" },
          { type: "listen", text: "We wtorek powinnaś zostać w domu.", ru: "У вівторок тобі слід залишитися вдома.", note: "we wtorek — e перед групою приголосних; w domu — [вдому]" },
          { type: "dictation", text: "Powinnaś pogodzić się z nim jeszcze dziś." }
        ]
      },

      reading: {
        title: "Ewa radzi",
        text: `Co tydzień w internetowym magazynie „Miasto i Ty” psycholożka Ewa Malinowska odpowiada na listy czytelników. Oto dwa z nich.

„Mam 24 lata i właśnie dostałem pracę w Warszawie. Znalazłem ładne mieszkanie na Mokotowie, ale właściciel chce, żebym zapłacił kaucję gotówką, i mówi, że umowa nie jest potrzebna. Cena jest bardzo dobra, ale coś mi tu nie pasuje. Co powinienem zrobić? Marcin z Poznania”

Drogi Marcinie, szczerze mówiąc, na twoim miejscu nie wynajęłabym tego mieszkania. Mieszkanie należy wynajmować tylko na podstawie umowy – bez niej nie masz żadnych praw. Kaucję warto płacić przelewem, a nie gotówką, bo wtedy masz dowód. Moja rada: zrezygnuj z tej oferty i unikaj właścicieli, którzy nie chcą podpisać umowy. Na pewno znajdziesz coś uczciwego.

„Od dziesięciu lat przyjaźnię się z Martą. Tydzień temu pokłóciłyśmy się o wakacje: ja chciałam jechać nad morze, a ona w góry. Powiedziałam kilka niemiłych rzeczy i teraz Marta nie odpisuje na moje wiadomości. Czy powinnam ją przeprosić jako pierwsza? Ania z Lublina”

Droga Aniu, nie warto tracić dziesięciu lat przyjaźni przez jedną kłótnię. Tak, powinnaś przeprosić Martę – i to nie esemesem, tylko osobiście. Zaproponuj spotkanie przy kawie i powiedz szczerze: „Przepraszam, przesadziłam”. Radzę ci też posłuchać, co ona ma do powiedzenia. Zobaczysz, że szybko się pogodzicie. A wakacje? Może w tym roku Mazury – ani morze, ani góry!`,
        glossary: [
          { pl: "psycholożka", ru: "психологиня" },
          { pl: "czytelników", ru: "читачів" },
          { pl: "coś mi tu nie pasuje", ru: "щось тут не так" },
          { pl: "na podstawie", ru: "на підставі" },
          { pl: "przelewem", ru: "банківським переказом" },
          { pl: "dowód", ru: "доказ" },
          { pl: "uczciwego", ru: "чесного" },
          { pl: "esemesem", ru: "есемескою" },
          { pl: "przesadziłam", ru: "я перегнула палицю" }
        ],
        questions: [
          { type: "tf", q: "Właściciel mieszkania chce podpisać z Marcinem umowę.", answer: false, explain: "Навпаки: власник каже, że umowa nie jest potrzebna." },
          { type: "choice", q: "Co radzi Ewa Marcinowi?", options: ["Żeby zrezygnował z tej oferty.", "Żeby zapłacił kaucję gotówką.", "Żeby wynajął mieszkanie bez umowy."], answer: 0, explain: "«Moja rada: zrezygnuj z tej oferty»." },
          { type: "choice", q: "O co pokłóciły się Ania i Marta?", options: ["O wakacje.", "O pieniądze.", "O chłopaka."], answer: 0, explain: "«Pokłóciłyśmy się o wakacje: ja chciałam jechać nad morze, a ona w góry»." },
          { type: "tf", q: "Ewa radzi Ani, żeby przeprosiła Martę esemesem.", answer: false, explain: "«…i to nie esemesem, tylko osobiście» — особисто, а не есемескою." },
          { type: "tf", q: "Według Ewy nie warto tracić przyjaźni przez jedną kłótnię.", answer: true, explain: "«Nie warto tracić dziesięciu lat przyjaźni przez jedną kłótnię»." }
        ]
      },

      writing: {
        prompt: "Ваш польський друг Bartek пише: йому запропонували роботу у Вроцлаві (хороша зарплата, цікавий проєкт), але його дівчина Magda працює в Гданську. Він не знає, що робити. Дайте йому відповідь: 1) привітайте; 2) дайте 2–3 поради (powinieneś, warto, trzeba); 3) напишіть, що б ви зробили на його місці; 4) побажайте успіху.",
        minWords: 80,
        maxWords: 130,
        useWords: ["rada", "warto", "zrezygnować", "szczerze"],
        checklist: [
          { label: "Форма powinien (powinieneś, powinnaś…)", pattern: "powin\\p{L}*", min: 1 },
          { label: "«Na twoim miejscu» + умовний спосіб", pattern: "na twoim miejscu", min: 1 },
          { label: "warto / trzeba / należy — щонайменше 2 рази", pattern: "warto|trzeba|należy", min: 2 }
        ],
        model: `Cześć Bartek!

Gratuluję oferty! Pytasz mnie o radę, więc napiszę szczerze, co myślę. Moim zdaniem warto przyjąć tę pracę. Wrocław to piękne miasto, a nowa firma daje ci dobrą pensję i szansę na rozwój. Ale najpierw powinieneś spokojnie porozmawiać z Magdą. Trzeba to razem przemyśleć, bo ta decyzja zmieni wasze życie. Może Magda też mogłaby znaleźć pracę we Wrocławiu? Na twoim miejscu nie zrezygnowałbym tak szybko z tej szansy. Poprosiłbym firmę o tydzień na decyzję. I pamiętaj: z Gdańska do Wrocławia jeździ bezpośredni pociąg, więc na początku moglibyście widywać się w weekendy.

Trzymam kciuki!
Kuba`
      }
    },

    // ───────────────────────── Урок 5 (повторення) ─────────────────────────
    {
      id: "m08l5",
      title: "Powtórka 8",
      titleRu: "Повторення: умовний спосіб, gdyby, żeby, поради",
      topic: "Wielkie decyzje",
      review: true,
      minutes: 30,
      goals: [
        "Вільно утворювати умовний спосіб і знати, куди «перескакує» by",
        "Розрізняти jeśli і gdyby, żeby + інфінітив і żeby + форма на -ł",
        "Давати поради й зважувати «за» і «проти» важливого рішення",
        "Написати підсумковий лист-пораду з конструкціями всього модуля"
      ],

      vocab: [
        { pl: "podjąć decyzję", ru: "ухвалити рішення", ex: "Muszę podjąć decyzję do piątku.", exRu: "Я мушу ухвалити рішення до п’ятниці.", note: "не «przyjąć decyzję» (калька з «прийняти рішення»)!" },
        { pl: "wahać się", ru: "вагатися, сумніватися", ex: "Waham się, czy przyjąć tę ofertę.", exRu: "Я вагаюся, чи приймати цю пропозицію." },
        { pl: "przeprowadzić się", ru: "переїхати (змінити житло)", ex: "W zeszłym roku przeprowadziliśmy się do Gdyni.", exRu: "Торік ми переїхали до Гдині.", note: "przeprowadzka — переїзд" },
        { pl: "ryzyko", g: "n", ru: "ризик", ex: "Każda zmiana to jakieś ryzyko.", exRu: "Будь-яка зміна — це певний ризик." },
        { pl: "tęsknić", ru: "сумувати, тужити", ex: "Bardzo tęsknię za tobą.", exRu: "Я дуже сумую за тобою.", note: "tęsknić za + оруд. в. — як укр. «сумувати за кимось»" },
        { pl: "zaleta", g: "f", ru: "перевага, плюс", ex: "Wielką zaletą tej pracy są elastyczne godziny.", exRu: "Великий плюс цієї роботи — гнучкий графік." },
        { pl: "wada", g: "f", ru: "вада, недолік, мінус", ex: "Każde miasto ma swoje wady.", exRu: "Кожне місто має свої вади." },
        { pl: "przyzwyczaić się", ru: "звикнути", ex: "Szybko przyzwyczaiłem się do polskiego jedzenia.", exRu: "Я швидко звик до польської їжі.", note: "przyzwyczaić się do + род. в. — як укр. «звикнути до чогось»" },
        { pl: "odwaga", g: "f", ru: "відвага, сміливість", ex: "Trzeba mieć dużo odwagi, żeby zacząć od nowa.", exRu: "Треба мати багато сміливості, щоб почати все спочатку." },
        { pl: "ojczyzna", g: "f", ru: "батьківщина, вітчизна", ex: "Polska to moja druga ojczyzna.", exRu: "Польща — моя друга батьківщина." }
      ],

      grammar: {
        title: "Підсумок модуля 8: tryb przypuszczający, gdyby, żeby, поради",
        html: `<h4>1. Умовний спосіб = форма на -ł + by + закінчення</h4>
<table class="g"><tr><th></th><th>чоловічий / чол.-особовий</th><th>жіночий / нечол.-особовий</th></tr>
<tr><td>ja</td><td class="pl">pojechałbym</td><td class="pl">pojechałabym</td></tr>
<tr><td>ty</td><td class="pl">pojechałbyś</td><td class="pl">pojechałabyś</td></tr>
<tr><td>on / ona</td><td class="pl">pojechałby</td><td class="pl">pojechałaby</td></tr>
<tr><td>my</td><td class="pl">pojechalibyśmy</td><td class="pl">pojechałybyśmy</td></tr>
<tr><td>wy</td><td class="pl">pojechalibyście</td><td class="pl">pojechałybyście</td></tr>
<tr><td>oni / one</td><td class="pl">pojechaliby</td><td class="pl">pojechałyby</td></tr></table>
<p>Неправильні основи — як у минулому часі: <span class="pl">mógłbym / mogłabym, poszedłbym / poszłabym, chcielibyśmy, mielibyśmy</span>. Ввічливі прохання: <span class="pl">Chciałbym…, Czy mógłbyś…?, Czy mogłaby pani…?</span></p>
<h4>2. Куди «перескакує» by</h4>
<table class="g"><tr><th>до чого</th><th>приклад</th></tr>
<tr><td>до дієслова</td><td class="pl">Zrobiłbym to.</td></tr>
<tr><td>до gdyby</td><td class="pl">Gdybym miał czas…</td></tr>
<tr><td>до żeby</td><td class="pl">Chcę, żebyś przyszedł.</td></tr>
<tr><td>до питального слова</td><td class="pl">Co byś zrobił?</td></tr>
<tr><td>до «to» (розм.)</td><td class="pl">…to bym pojechał.</td></tr></table>
<div class="tip"><b>Правило одного by:</b> в одній частині речення by трапляється лише один раз — як і українське «б» («якби я мав», а не «якби я мав би»). ✗ <i>Gdybym miałbym</i>, ✗ <i>żebyś przyszedłbyś</i>.</div>
<h4>3. Jeśli чи gdyby</h4>
<table class="g"><tr><th>реальна умова</th><th>нереальна умова</th></tr>
<tr><td class="pl">Jeśli będę miał czas, pojadę.</td><td class="pl">Gdybym miał czas, pojechałbym.</td></tr>
<tr><td>Якщо буде час — поїду.</td><td>Якби був час — поїхав би.</td></tr></table>
<h4>4. Żeby / aby</h4>
<table class="g"><tr><th>та сама особа → інфінітив</th><th>інша особа → żeby + закінчення + -ł</th></tr>
<tr><td class="pl">Przyszedłem, żeby pomóc.</td><td class="pl">Przyszedłem, żebyś nie był sam.</td></tr>
<tr><td class="pl">Uczę się, żeby zdać egzamin.</td><td class="pl">Mama chce, żebym zdał egzamin.</td></tr></table>
<div class="tip"><span class="pl">Powiedział, że przyjdę.</span> (факт: що я прийду) ≠ <span class="pl">Powiedział, żebym przyszedł.</span> (прохання: щоб я прийшов).</div>
<h4>5. Поради: від жорсткого до м’якого</h4>
<table class="g"><tr><th>відтінок</th><th>вирази</th></tr>
<tr><td>необхідність, правило</td><td class="pl">muszę, trzeba, należy</td></tr>
<tr><td>порада, норма</td><td class="pl">powinienem / powinnam, warto</td></tr>
<tr><td>м’яка порада</td><td class="pl">Na twoim miejscu…, Radziłbym ci…, Może byś…?</td></tr>
<tr><td>докір щодо минулого</td><td class="pl">Powinieneś był…, Trzeba było…</td></tr></table>
<div class="tip"><b>Топ-5 типових помилок україномовних:</b> ✗ <i>Ja by chciał</i> (калька з «я б хотів») → <span class="pl">Chciałbym</span>; ✗ <i>Jeśli bym miał</i> (з розмовного «якщо б») → <span class="pl">Gdybym miał</span>; ✗ <i>Chcę, żeby ty przyszedł</i> → <span class="pl">Chcę, żebyś przyszedł</span>; ✗ <i>To stoi zobaczyć</i> → <span class="pl">Warto to zobaczyć</span>; ✗ <i>przeprosić przed nią</i> → <span class="pl">przeprosić ją</span>.</div>
<div class="tip"><b>Керування нових слів</b> — тут українська підказує правильно: <span class="pl">tęsknić za kimś</span> (оруд. в., як «сумувати за кимось»), <span class="pl">przyzwyczaić się do czegoś</span> (род. в., як «звикнути до чогось»), <span class="pl">podjąć decyzję</span> (не «przyjąć»).</div>`
      },

      exercises: [
        { type: "choice", q: "Przepraszam, czy ___ pan otworzyć okno?", options: ["mógłby", "mógłbyś", "mógł"], answer: 0, explain: "З pan — 3-тя особа: mógłby pan. Mógłbyś — для «ти», mógł — минулий час (не прохання)." },
        { type: "gap", q: "Gdybym ___ jego adres, wysłałabym mu kartkę. (znać, ja, kobieta)", answers: ["znała"], explain: "Після gdybym — лише форма на -ł без другого by: znała." },
        { type: "gap", q: "Gdybyśmy mieli więcej pieniędzy, ___ się do Gdyni. (przeprowadzić, my — mężczyźni)", answers: ["przeprowadzilibyśmy"], explain: "przeprowadzili + by + śmy; чоловічо-особова форма на -li-." },
        { type: "choice", q: "___ będziesz w Lublinie, zadzwoń do mnie!", options: ["Jeśli", "Gdybyś", "Gdyby"], answer: 0, explain: "Реальна умова з майбутнім часом (będziesz) → jeśli. Після gdyby потрібна форма на -ł: Gdybyś był w Lublinie…" },
        { type: "gap", q: "Mama prosi, ___ nie wracała późno. (żeby + ja)", answers: ["żebym", "abym"], explain: "Просить мама, а повертатимусь я → żeby + m + форма на -ł: żebym nie wracała." },
        { type: "choice", q: "Uczę się polskiego, ___ studiować w Krakowie.", options: ["żeby", "żebym", "że"], answer: 0, explain: "Учуся я, і навчатимусь я → żeby + інфінітив. Żebym вимагає форми на -ł." },
        { type: "gap", q: "Na twoim miejscu ___ do lekarza. (pójść, ja, kobieta)", answers: ["poszłabym", "bym poszła"], explain: "Na twoim miejscu + умовний спосіб: poszła + by + m. Розмовний варіант — bym poszła." },
        { type: "choice", q: "Michał, ___ więcej spać, wyglądasz na zmęczonego.", options: ["powinieneś", "powinnaś", "powinien"], answer: 0, explain: "Звертаємося до чоловіка на «ти» → powinieneś. Powinnaś — до жінки, powinien — «він»." },
        { type: "match", q: "З’єднайте фразу з її функцією", pairs: [
          ["Gdybym miał czas…", "нереальна умова"],
          ["Jeśli będę miał czas…", "реальна умова"],
          ["Chcę, żebyś przyszedł.", "бажання щодо іншої особи"],
          ["Przyszedłem, żeby pomóc.", "мета (та сама особа)"],
          ["Czy mógłbyś…?", "ввічливе прохання"],
          ["Na twoim miejscu…", "м’яка порада"]
        ], explain: "Це головні конструкції модуля — перевірте, чи вмієте побудувати кожну." },
        { type: "order", ru: "Якби я не боявся, я б переїхав за кордон.", words: ["Gdybym", "się", "nie", "bał,", "przeprowadziłbym", "się", "za", "granicę."], alt: ["Przeprowadziłbym się za granicę, gdybym się nie bał."], explain: "Się зазвичай стоїть одразу після gdybym: Gdybym się nie bał. Przeprowadzić się za granicę — переїхати за кордон." },
        { type: "gap", q: "___ wziąć parasol! Zmokłem do suchej nitki. (треба було)", answers: ["Trzeba było"], explain: "Trzeba było + інфінітив — «треба було» (докір щодо минулого)." },
        { type: "choice", q: "Szef nalega, żebyśmy ___ raport do piątku.", options: ["skończyli", "skończyć", "skończymy"], answer: 0, explain: "Наполягає шеф, закінчити маємо ми → żebyśmy + форма на -ł: skończyli." },
        { type: "gap", q: "Szybko przyzwyczaiłem się ___ polskiego jedzenia.", answers: ["do"], explain: "Przyzwyczaić się do + род. в. — так само, як укр. «звикнути до чогось»." },
        { type: "translate", ru: "Я б хотіла замовити столик.", answers: ["Chciałabym zarezerwować stolik.", "Chciałabym zamówić stolik."], explain: "chciała + by + m. «Замовити столик» — zarezerwować stolik (розм. також zamówić)." },
        { type: "translate", ru: "Якби я знала, я б тобі сказала.", answers: ["Gdybym wiedziała, powiedziałabym ci.", "Gdybym wiedziała, to bym ci powiedziała.", "Powiedziałabym ci, gdybym wiedziała."], explain: "Gdybym + wiedziała (без by), далі powiedziałabym. Ненаголошений займенник ci ставиться після дієслова." }
      ],

      pronunciation: {
        focus: "Повторення: наголос в умовному способі та зв’язне мовлення",
        tip: `<p>Два правила наголосу в умовному способі:</p>
<ul>
<li>Однина (-bym, -byś, -by): <b>3-й склад з кінця</b> — <span class="pl">poWIEdziałbyś, CHCIAłabym, przeprowaDZIłabym</span>.</li>
<li>Множина (-byśmy, -byście): <b>4-й склад з кінця</b> — <span class="pl">CHCIElibyśmy, zroBIlibyście</span>.</li>
</ul>
<p>Найпростіше запам’ятати так: наголос стоїть там само, де в минулому часі (<span class="pl">CHCIEli → CHCIElibyśmy</span>), а «хвіст» із by — ненаголошений. На український наголос (хоті́ли б) не орієнтуйтеся.</p>
<p>І зв’язне мовлення: прийменник + слово вимовляються разом (<span class="pl">we wtorek, do mnie, w Gdyni</span>), а <b>żeby</b> зливається із закінченням: <span class="pl">żebyś, żebyśmy</span>.</p>`,
        items: [
          { type: "stress", word: "chcielibyśmy", syllables: ["chcie", "li", "by", "śmy"], answer: 0 },
          { type: "stress", word: "przeprowadziłabym", syllables: ["prze", "pro", "wa", "dzi", "ła", "bym"], answer: 3 },
          { type: "stress", word: "powiedziałbyś", syllables: ["po", "wie", "dział", "byś"], answer: 1 },
          { type: "minimal", options: ["mógłbym", "mógłbyś"], ru: ["я б міг", "ти б міг"] },
          { type: "listen", text: "Gdybym nie tęskniła za domem, zostałabym w Dublinie na zawsze.", ru: "Якби я не сумувала за домом, я б залишилася в Дубліні назавжди." },
          { type: "listen", text: "Na twoim miejscu przeprowadziłbym się do Gdyni.", ru: "На твоєму місці я б переїхав до Гдині." },
          { type: "dictation", text: "Chciałbym, żebyś przyjechała do mnie we wtorek." }
        ]
      },

      reading: {
        title: "Wracać czy zostać?",
        text: `Cześć Basiu!

Piszę, bo muszę z kimś porozmawiać, a ty zawsze dajesz mi dobre rady. Mieszkam w Dublinie już siedem lat i ostatnio ciągle myślę o powrocie do Polski. Strasznie tęsknię za wami, za mamą i za naszym Toruniem. Tęsknię nawet za pierogami z budki przy Rynku! Gdybym mieszkała w Polsce, widywałabym was w każdy weekend, a nie dwa razy w roku.

Z drugiej strony mam tu dobrą pracę i wspaniałych przyjaciół. Jest też Sean, mój chłopak. Mówi, że gdybym wyjechała, pojechałby ze mną, ale przecież nie zna ani słowa po polsku! Przyzwyczaiłam się do irlandzkiej pogody, a nawet do jazdy po lewej stronie. W Toruniu nie zarabiałabym tyle, co tutaj. Zrobiłam listę zalet i wad, ale to nic nie dało – wciąż się waham. Boję się, że gdybym wróciła, żałowałabym tej decyzji. A jeśli zostanę, może będę żałować, że nie spróbowałam. Irlandia to już trochę mój dom, ale ojczyzna jest tylko jedna…

Co ty byś zrobiła na moim miejscu? Tylko szczerze!

Magda

Kochana Madziu!

Po pierwsze: nie musisz podejmować decyzji dzisiaj. Na twoim miejscu wzięłabym miesiąc urlopu i spędziła go w Toruniu. Wtedy zobaczysz, czy naprawdę chciałabyś tu żyć na co dzień, czy tylko tęsknisz za wakacjami w domu. Zależy mi na tym, żebyś była szczęśliwa – i mama mówi to samo, chociaż oczywiście chciałaby, żebyś wróciła jutro.

Każda przeprowadzka to ryzyko, ale ty masz odwagę. Przecież siedem lat temu wyjechałaś sama do obcego kraju, prawie bez angielskiego! Gdybyś się tu przeprowadziła, na pewno szybko znalazłabyś pracę. A Sean? Jeśli naprawdę cię kocha, nauczy się polskiego – ty też kiedyś zaczynałaś od zera. Pamiętaj tylko, że decyzję musisz podjąć sama. Ja będę cię wspierać, niezależnie od tego, co wybierzesz.

Ściskam mocno,
Basia

PS Gdybyś wróciła, pierogi z budki są na mnie!`,
        glossary: [
          { pl: "budki", ru: "ятки, кіоску" },
          { pl: "widywałabym", ru: "я б бачилася (регулярно)" },
          { pl: "jazdy po lewej stronie", ru: "їзди лівим боком" },
          { pl: "to nic nie dało", ru: "це нічого не дало" },
          { pl: "spróbowałam", ru: "я спробувала" },
          { pl: "na co dzień", ru: "у повсякденному житті" },
          { pl: "obcego", ru: "чужого" },
          { pl: "wspierać", ru: "підтримувати" },
          { pl: "są na mnie", ru: "за мій рахунок (розм.)" }
        ],
        questions: [
          { type: "tf", q: "Magda mieszka w Dublinie od pięciu lat.", answer: false, explain: "«Mieszkam w Dublinie już siedem lat» — сім років." },
          { type: "choice", q: "Za czym tęskni Magda?", options: ["Za rodziną, Toruniem i pierogami.", "Za pracą w Toruniu.", "Za irlandzką pogodą."], answer: 0, explain: "«Tęsknię za wami, za mamą i za naszym Toruniem. Tęsknię nawet za pierogami…»" },
          { type: "tf", q: "W Toruniu Magda zarabiałaby tyle samo, co w Dublinie.", answer: false, explain: "«W Toruniu nie zarabiałabym tyle, co tutaj»." },
          { type: "choice", q: "Co radzi Basia?", options: ["Żeby Magda wzięła miesiąc urlopu i spędziła go w Toruniu.", "Żeby Magda od razu rzuciła pracę.", "Żeby Magda nigdy nie wracała do Polski."], answer: 0, explain: "«Na twoim miejscu wzięłabym miesiąc urlopu i spędziła go w Toruniu»." },
          { type: "tf", q: "Mama chciałaby, żeby Magda szybko wróciła.", answer: true, explain: "«…chociaż oczywiście chciałaby, żebyś wróciła jutro»." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля. Ваш друг Dima вагається, чи переїжджати йому до Польщі: йому запропонували роботу у Вроцлаві. Напишіть йому лист: 1) плюси й мінуси переїзду (zalety i wady); 2) що б ви зробили на його місці (na twoim miejscu…, gdybym…); 3) 1–2 поради (powinieneś, warto); 4) чого ви хочете і що для вас важливо (chcę, żebyś…; zależy mi na tym, żebyś…).",
        minWords: 100,
        maxWords: 150,
        useWords: ["zaleta", "wada", "przyzwyczaić się", "tęsknić", "podjąć decyzję"],
        checklist: [
          { label: "Щонайменше 4 форми умовного способу (przyjąłbym, mógłbyś…)", pattern: "\\p{L}+(łby|łaby|liby|łyby)\\p{L}*", min: 4 },
          { label: "Конструкція з gdyby", pattern: "gdyby", min: 1 },
          { label: "żeby / żebyś — щонайменше 2 рази", pattern: "żeby", min: 2 }
        ],
        model: `Cześć Dima!

Dzięki za wiadomość. Rozumiem, że się wahasz – przeprowadzka do innego kraju to duża zmiana. Moim zdaniem ta oferta z Wrocławia ma sporo zalet: dobrą pensję, ciekawy projekt i miasto pełne młodych ludzi. Oczywiście są też wady. Na początku będziesz tęsknić za rodziną, a polski nie jest łatwy. Ale szybko przyzwyczaisz się do nowego życia – ja przyzwyczaiłem się po trzech miesiącach!

Na twoim miejscu przyjąłbym tę pracę i od razu zapisałbym się na kurs polskiego. Gdybym miał taką szansę w twoim wieku, nie wahałbym się ani chwili. Powinieneś jednak najpierw porozmawiać z rodzicami. Gdybyś przyjechał, mógłbyś na początku mieszkać u mnie – miałbyś swój pokój. Chcę, żebyś wiedział, że zawsze możesz na mnie liczyć. Zależy mi tylko na tym, żebyś mógł podjąć decyzję spokojnie, bez stresu.

Daj znać, co postanowisz!
Andrzej`
      }
    }
  ]
});
