// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m02",
  n: 2,
  level: "A2",
  title: "Przeszłość",
  titleRu: "Минуле",
  summary: "Ви навчитеся розповідати про вчорашній день, дитинство й подорожі в минулому часі (зокрема з неправильними дієсловами та в множині), а також говорити про професії, транспорт, захоплення й розташування за допомогою орудного відмінка.",
  lessons: [

    // ───────────────────────── Урок 1 ─────────────────────────
    {
      id: "m02l1",
      title: "Co robiłeś wczoraj?",
      titleRu: "Минулий час: однина",
      topic: "Wczoraj",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати минулий час в однині: -łem/-łam, -łeś/-łaś, -ł/-ła/-ło",
        "Розповідати, що ви робили вчора, і розпитувати співрозмовника (зокрема на «ви»: pan / pani)",
        "Розпізнавати рухомі закінчення в розмовному мовленні (Gdzieś był?)",
        "Вимовляти ł як [ў] і відрізняти його від l"
      ],

      vocab: [
        { pl: "przedwczoraj", ru: "позавчора", ex: "Przedwczoraj byłem u lekarza.", exRu: "Позавчора я був у лікаря." },
        { pl: "ostatnio", ru: "останнім часом; нещодавно", ex: "Ostatnio dużo pracowałam.", exRu: "Останнім часом я багато працювала.", note: "Не «востаннє» — це ostatni raz." },
        { pl: "temu", ru: "тому (про час)", ex: "Tydzień temu wróciłem z Gdańska.", exRu: "Тиждень тому я повернувся з Гданська.", note: "Як і українське «тому», стоїть після відрізка часу: dwa dni temu, rok temu." },
        { pl: "zaspać", ru: "проспати", ex: "Znowu zaspałeś?", exRu: "Ти знову проспав?" },
        { pl: "spóźnić się", ru: "спізнитися", ex: "Spóźniłam się na pociąg.", exRu: "Я спізнилася на потяг.", note: "na + знах. в.: na pociąg, na spotkanie (як укр. «на потяг»); але do pracy, do szkoły (укр. «на роботу, до школи»)" },
        { pl: "zdążyć", ru: "встигнути", ex: "Na szczęście zdążyłem na autobus.", exRu: "На щастя, я встиг на автобус.", note: "zdążyć na + знах. в." },
        { pl: "wrócić", ru: "повернутися", ex: "Mama wróciła z pracy o szóstej.", exRu: "Мама повернулася з роботи о шостій.", note: "Без się, хоча українське «повернутися» має -ся! Не *wrócić się." },
        { pl: "skończyć", ru: "закінчити", ex: "Skończyłaś już raport?", exRu: "Ти вже закінчила звіт?" },
        { pl: "zgubić", ru: "загубити", ex: "Zgubiłem klucze w tramwaju.", exRu: "Я загубив ключі в трамваї." },
        { pl: "zepsuć się", ru: "зламатися, зіпсуватися", ex: "Wczoraj zepsuła się pralka.", exRu: "Учора зламалася пральна машина." },
        { pl: "korek", ru: "затор (на дорозі)", g: "m", ex: "Stałam w korku godzinę.", exRu: "Я годину стояла в заторі." },
        { pl: "zmęczony", ru: "втомлений", ex: "Byłam wczoraj strasznie zmęczona.", exRu: "Учора я була страшенно втомлена." },
        { pl: "nagle", ru: "раптом, несподівано", ex: "Nagle zgasło światło.", exRu: "Раптом згасло світло." },
        { pl: "na szczęście", ru: "на щастя", ex: "Na szczęście nikt nie zauważył.", exRu: "На щастя, ніхто не помітив." }
      ],

      grammar: {
        title: "Минулий час: однина",
        html: `<p>Добра новина: польський минулий час дуже схожий на український. Він утворюється від інфінітива через <b>-ł-</b> — це той самий суфікс, що й українське <b>-в / -л-</b> у формах «читав», «читала». Головна відмінність: польське дієслово в минулому часі <b>змінюється за особами</b>. В українській «я був», «ти був», «він був» мають однакову форму, тому без займенника не обійтися. У польській закінчення саме каже «я», «ти» чи «він», тому займенник зазвичай не потрібен.</p>
<h4>Формула</h4>
<p>Інфінітив без <b>-ć</b> + <b>ł</b> + особове закінчення: <span class="pl">czyta-ć → czyta-ł-em</span>, <span class="pl">robi-ć → robi-ł-am</span>.</p>
<table class="g"><tr><th></th><th>ч. р.</th><th>ж. р.</th><th>с. р.</th></tr>
<tr><td>ja</td><td class="pl">byłem</td><td class="pl">byłam</td><td>—</td></tr>
<tr><td>ty</td><td class="pl">byłeś</td><td class="pl">byłaś</td><td>—</td></tr>
<tr><td>on / ona / ono</td><td class="pl">był</td><td class="pl">była</td><td class="pl">było</td></tr>
<tr><td>pan / pani</td><td class="pl">był pan</td><td class="pl">była pani</td><td>—</td></tr>
</table>
<p>Запам’ятайте просту прикмету: <b>e</b> перед закінченням — чоловік (<span class="pl">-łem, -łeś</span>), <b>a</b> — жінка (<span class="pl">-łam, -łaś</span>). Так само змінюються всі дієслова на <b>-ać, -ić, -yć, -ować, -uć</b>: <span class="pl">czytać → czytałaś</span>, <span class="pl">pracować → pracowałem</span>, <span class="pl">pić → piłeś</span>, <span class="pl">wrócić → wróciła</span>, <span class="pl">zepsuć się → zepsuło się</span>. Дієслова на -eć і неправильні — у наступному уроці.</p>
<div class="ex"><span class="pl">Wczoraj zaspałam i spóźniłam się do pracy.</span> — Учора я проспала й спізнилася на роботу.</div>
<div class="ex"><span class="pl">Co pan robił w weekend?</span> — Що ви (до чоловіка) робили на вихідних?</div>
<div class="ex"><span class="pl">Wczoraj było zimno.</span> — Учора було холодно. (безособові речення — у с. р., як і в українській)</div>
<div class="tip">Типова помилка — калька з українського «я був удома»: <span class="pl">*Ja był w domu.</span> Форма <span class="pl">był</span> — це тільки «він був». Правильно: <span class="pl">Byłem w domu.</span> Займенник додають лише для контрасту: <span class="pl">Ja byłem w domu, a ty?</span></div>
<div class="tip">Звертаючись на «ви» (<span class="pl">pan / pani</span>), уживайте 3-тю особу однини: <span class="pl">Gdzie pani była?</span> (дослівно «Де пані була?»), а не <span class="pl">*Gdzie pani byłaś?</span> і не «ви були», як в українській.</div>
<h4>Рухомі закінчення</h4>
<p>Особові закінчення (<b>-em, -eś</b>) у польській «рухомі». У розмовному мовленні вони можуть відірватися від дієслова й приліпитися до першого слова фрази — найчастіше до питального слова чи займенника. Після голосного лишається тільки <b>-ś</b>, після приголосного — <b>-eś</b>. (Схожі форми досі живуть у деяких західноукраїнських говірках: «я був-єм», «ми ходили-сьмо».)</p>
<div class="ex"><span class="pl">Gdzie byłeś? = Gdzieś był?</span> — Де ти був?</div>
<div class="ex"><span class="pl">Co zrobiłeś? = Coś ty zrobił?!</span> — Що ти накоїв?!</div>
<div class="ex"><span class="pl">Jak to zrobiłeś? = Jakeś to zrobił?</span> — Як ти це зробив?</div>
<div class="tip">Самі пишіть стандартно — із закінченням на дієслові. Але розпізнавати такі форми треба: у питанні <span class="pl">Coś zrobił?</span> слово <span class="pl">coś</span> часто означає не «щось», а <span class="pl">co</span> + <span class="pl">-ś</span> («ти»): «Що ти зробив?» (зміст підказують контекст та інтонація). Порівняйте твердження: <span class="pl">Coś zrobił.</span> — «Він щось зробив».</div>
<h4>Наголос</h4>
<p>Наголос, як завжди, на передостанньому складі — і часто не там, де в українській: <span class="pl">pisał</span> — PI-sał (укр. «писАв»), <span class="pl">robiłem</span> — ro-BI-łem, <span class="pl">czytała</span> — czy-TA-ła.</p>`
      },

      exercises: [
        { type: "choice", q: "Wczoraj Anna ___ w domu cały dzień.", options: ["była", "był", "byłam"], answer: 0, explain: "Anna — «вона», 3-тя особа ж. р.: była. Byłam — «я (ж.) була», był — «він був»." },
        { type: "gap", q: "Przedwczoraj ___ do pracy. (zaspać; ja, kobieta)", answers: ["zaspałam"], explain: "zaspa-ć → zaspa-ł-am: жінка говорить про себе → -łam." },
        { type: "gap", q: "Tomek ___ się na autobus. (spóźnić się)", answers: ["spóźnił"], explain: "Він → spóźni-ł. Się лишається окремим словом: Tomek spóźnił się na autobus." },
        { type: "match", q: "З’єднайте форму дієслова zgubić з перекладом", pairs: [["zgubiłam", "я (ж.) загубила"], ["zgubiłem", "я (ч.) загубив"], ["zgubiłaś", "ти (ж.) загубила"], ["zgubiłeś", "ти (ч.) загубив"], ["zgubiła", "вона загубила"], ["zgubił", "він загубив"]], explain: "-łem/-łam — «я», -łeś/-łaś — «ти», -ł/-ła — «він/вона». Голосний перед закінченням показує рід: ł-e-m — чоловік, ł-a-m — жінка." },
        { type: "gap", q: "Michał, dlaczego wczoraj tak późno ___? (wrócić)", answers: ["wróciłeś"], explain: "Звертаємося до Міхала на «ти» → -łeś: wróciłeś. І пам’ятайте: wrócić — без się, хоч українське «повернутися» має -ся!" },
        { type: "choice", q: "Pani Ewo, co pani ___ wczoraj wieczorem?", options: ["robiłaś", "robiła", "robiłam"], answer: 1, explain: "З pan / pani дієслово стоїть у 3-й особі: co pani robiła? Robiłaś — це звертання на «ти»." },
        { type: "gap", q: "Dziecko ___ całą noc. (płakać)", answers: ["płakało"], explain: "Dziecko — середній рід → -ło: płaka-ł-o. Увага: українське «дитина» — жіночого роду, а польське dziecko — середнього, тож не *dziecko płakała!" },
        { type: "order", ru: "Позавчора я (ч.) проспав і спізнився на потяг.", words: ["Przedwczoraj", "zaspałem", "i", "spóźniłem", "się", "na", "pociąg."], alt: ["Przedwczoraj zaspałem i się spóźniłem na pociąg."], explain: "Чоловік про себе: zaspałem, spóźniłem się. Спізнитися на потяг — spóźnić się na pociąg (na + знах. в.), як і в українській." },
        { type: "choice", q: "Що означає розмовна фраза «Gdzieś był wczoraj?»", options: ["Де ти був учора?", "Десь він був учора.", "Де він був учора?"], answer: 0, explain: "Рухоме закінчення -ś (= -eś, «ти») приліпилося до gdzie: Gdzieś był? = Gdzie byłeś? Знак питання показує, що це запитання, а не «десь» (gdzieś = «десь» — у твердженні)." },
        { type: "translate", ru: "Ти (ж.) встигла на автобус?", answers: ["Zdążyłaś na autobus?", "Czy zdążyłaś na autobus?"], explain: "Встигнути — zdążyć (na + знах. в.). Жінці на «ти»: zdąży-ł-aś." }
      ],

      pronunciation: {
        focus: "ł = [ў], світле l",
        tip: `<p><b>Ł</b> вимовляється як українське нескладове <b>[ў]</b> — той самий звук, що в словах «вовк», «був», «співав»: губи округлюються, язик не торкається зубів. <span class="pl">był</span> ≈ [биў], <span class="pl">mało</span> ≈ [маўо]. Різниця лише в тому, що в польській цей звук стоїть і перед голосними — цю позицію треба потренувати. Тверде «л» на місці ł — одна з найпомітніших ознак акценту.</p>
<p><b>L</b> світліше за українське «л» — щось середнє між «л» і «ль», але без повного пом’якшення: <span class="pl">lato</span>, <span class="pl">lampa</span>. Перед <b>i</b> воно звучить м’яко: <span class="pl">list</span>, <span class="pl">lis</span>.</p>
<p>У минулому часі <b>ł</b> є в кожній формі: <span class="pl">byłem, byłam, był, była</span>. Якщо вимовити його як «л», вас зрозуміють, але насилу.</p>`,
        items: [
          { type: "listen", text: "Łódź", ru: "Лодзь (місто)", note: "[ўуч’]: ł = [ў], ó = [у], dź на кінці оглушується" },
          { type: "listen", text: "Wczoraj było miło.", ru: "Учора було приємно.", note: "było ≈ [биўо], miło ≈ [міўо]" },
          { type: "listen", text: "lato, lampa, list", ru: "літо, лампа, лист (поштовий)", note: "Світле l — між українськими «л» і «ль»" },
          { type: "minimal", options: ["lata", "łata"], ru: ["роки", "латка"] },
          { type: "minimal", options: ["bal", "bał"], ru: ["бал", "боявся (bał się)"] },
          { type: "stress", word: "pracowałam", syllables: ["pra", "co", "wa", "łam"], answer: 2 },
          { type: "stress", word: "robiłem", syllables: ["ro", "bi", "łem"], answer: 1 },
          { type: "dictation", text: "Wczoraj Michał długo stał w korku." }
        ]
      },

      reading: {
        title: "Pechowy czwartek",
        text: "Ostatnio mam dużo pracy, ale wczoraj był wyjątkowo pechowy dzień. Najpierw zaspałam, bo w nocy telefon się rozładował i budzik nie zadzwonił. Wstałam dopiero o ósmej! Szybko włączyłam ekspres do kawy, a on nagle się zepsuł. Trudno. Wypiłam szklankę wody i pojechałam do pracy.\n\nNa Marszałkowskiej był ogromny korek. Autobus stał prawie pół godziny, więc oczywiście spóźniłam się na ważne spotkanie. Szef nic nie mówił, ale był wyraźnie zły. Potem pracowałam bez przerwy i skończyłam raport w ostatniej chwili.\n\nPo pracy wstąpiłam do Biedronki po zakupy. Przy kasie zobaczyłam, że nie mam portfela. Zgubiłam go?! Na szczęście telefon był już naładowany i zapłaciłam BLIK-iem. Kasjerka była bardzo miła.\n\nDo domu wróciłam o dziewiątej, zmęczona i głodna. A portfel? Cały dzień był w domu, na stole w przedpokoju. Mąż zapytał: „Jak było w pracy?”. „Nie pytaj!” — to była moja jedyna odpowiedź.",
        glossary: [
          { pl: "pechowy", ru: "невдалий, нещасливий" },
          { pl: "rozładował", ru: "розрядився (про телефон)" },
          { pl: "ekspres do kawy", ru: "кавомашина" },
          { pl: "wyraźnie", ru: "явно, помітно" },
          { pl: "w ostatniej chwili", ru: "в останню мить" },
          { pl: "wstąpiłam", ru: "зайшла (ненадовго)" },
          { pl: "naładowany", ru: "заряджений" },
          { pl: "w przedpokoju", ru: "у передпокої" }
        ],
        questions: [
          { type: "tf", q: "Bohaterka zaspała, bo budzik nie zadzwonił.", answer: true, explain: "Уночі розрядився телефон, тому будильник не задзвонив." },
          { type: "tf", q: "Rano bohaterka wypiła kawę.", answer: false, explain: "Кавомашина зламалася — вона випила тільки склянку води." },
          { type: "choice", q: "Dlaczego spóźniła się na spotkanie?", options: ["Bo autobus stał w korku.", "Bo zgubiła portfel.", "Bo szef ją zatrzymał."], answer: 0, explain: "На Маршалковській був величезний затор, автобус стояв майже пів години." },
          { type: "choice", q: "Jak zapłaciła za zakupy?", options: ["Gotówką.", "BLIK-iem.", "Nie zapłaciła."], answer: 1, explain: "Гаманця не було, але телефон на той час зарядився — вона заплатила через BLIK." },
          { type: "tf", q: "Portfel przez cały dzień leżał w domu.", answer: true, explain: "Гаманець увесь день лежав удома на столі в передпокої." }
        ]
      },

      writing: {
        prompt: "Учора у вас був дуже невдалий день. Напишіть повідомлення другові або подрузі: що пішло не так зранку; що сталося дорогою або на роботі; чим закінчився день. Наприкінці запитайте, як справи в адресата.",
        minWords: 40,
        maxWords: 80,
        useWords: ["zaspać", "zdążyć", "wrócić", "zmęczony"],
        checklist: [
          { label: "Щонайменше 5 дієслів у минулому часі про себе (-łem / -łam)", pattern: "\\p{L}+ł(em|am)\\b", min: 5 },
          { label: "Щонайменше 2 слова-зв’язки (najpierw, potem, nagle, na szczęście)", pattern: "\\b(najpierw|potem|nagle|na szczęście)", min: 2 }
        ],
        model: "Cześć Kasiu! Wczoraj to był straszny dzień. Najpierw zaspałem, bo budzik nie zadzwonił. Potem długo stałem w korku i nie zdążyłem na spotkanie z klientem. Szef był bardzo zły. Po pracy zgubiłem klucze, ale na szczęście żona była w domu. Wróciłem bardzo zmęczony, zamówiłem pizzę i o dziesiątej już spałem jak zabity. A jak tam u ciebie? Marek"
      }
    },

    // ───────────────────────── Урок 2 ─────────────────────────
    {
      id: "m02l2",
      title: "Szedłem, jadłem, mogłem",
      titleRu: "Неправильний минулий час і множина",
      topic: "Wspomnienia",
      review: false,
      minutes: 30,
      goals: [
        "Уживати неправильні форми: szedł/szła, jadł, mógł, miał, wziął/wzięła",
        "Розрізняти чоловічо-особову й нечоловічо-особову множину: byli / były",
        "Розповідати про спогади з дитинства",
        "Правильно вимовляти ą та ę в різних позиціях"
      ],

      vocab: [
        { pl: "dzieciństwo", ru: "дитинство", g: "n", ex: "W dzieciństwie mieszkałam w Lublinie.", exRu: "У дитинстві я жила в Любліні." },
        { pl: "pamiętać", ru: "пам’ятати", ex: "Pamiętasz naszą pierwszą wycieczkę?", exRu: "Пам’ятаєш нашу першу поїздку?" },
        { pl: "przypomnieć sobie", ru: "пригадати, згадати", ex: "Nagle przypomniałam sobie jego imię.", exRu: "Раптом я пригадала його ім’я.", note: "-eć → -ał: przypomniał(a) sobie" },
        { pl: "zapomnieć", ru: "забути", ex: "Zapomniałem o urodzinach mamy.", exRu: "Я забув про мамин день народження.", note: "zapomnieć o + місц. в. (укр. «забути про» + знах. в.); мин.: zapomniał, але zapomnieli" },
        { pl: "dziadkowie", ru: "дідусь і бабуся", g: "pl", ex: "Moi dziadkowie mieszkali na Kaszubach.", exRu: "Мої дідусь і бабуся жили на Кашубах.", note: "Не «дідусі»! dziadek + babcia = dziadkowie" },
        { pl: "wieś", ru: "село; сільська місцевість", g: "f", ex: "Każde lato spędzałem na wsi.", exRu: "Щоліта я проводив на селі.", note: "Як українське «на селі»: na wsi — на селі, na wieś — на село (куди?)" },
        { pl: "podwórko", ru: "подвір’я, двір", g: "n", ex: "Całe dnie siedzieliśmy na podwórku.", exRu: "Цілими днями ми сиділи на подвір’ї.", note: "na podwórku — на подвір’ї (той самий прийменник, що й в українській)" },
        { pl: "trzepak", ru: "турнік у дворі для вибивання килимів", g: "m", ex: "Po szkole wszyscy spotykali się przy trzepaku.", exRu: "Після школи всі зустрічалися біля турніка у дворі.", note: "Символ польського дитинства на подвір’ях багатоповерхівок" },
        { pl: "kolonie", ru: "літній дитячий табір", g: "pl", ex: "W wakacje pojechałam na kolonie nad morze.", exRu: "На канікулах я поїхала в табір на море." },
        { pl: "przeprowadzić się", ru: "переїхати (змінити житло)", ex: "W 2010 roku przeprowadziliśmy się do Wrocławia.", exRu: "2010 року ми переїхали до Вроцлава.", note: "Не przejechać — це «проїхати» або «переїхати (колесами)»!" },
        { pl: "wychować się", ru: "вирости (десь), виховуватися", ex: "Wychowałem się w małym miasteczku.", exRu: "Я виріс у маленькому містечку." },
        { pl: "tęsknić", ru: "сумувати, тужити", ex: "Na koloniach tęskniłam za mamą.", exRu: "У таборі я сумувала за мамою.", note: "za + оруд. в.: tęsknić za kim / za czym — як в українській «сумувати за кимось»" },
        { pl: "podstawówka", ru: "початкова школа (розм.)", g: "f", ex: "Chodziliśmy razem do podstawówki.", exRu: "Ми разом ходили до початкової школи." }
      ],

      grammar: {
        title: "Неправильний минулий час і множина",
        html: `<p>Більшість дієслів утворюють минулий час за формулою з попереднього уроку. Але найчастіші дієслова мають свої особливості — їх треба просто запам’ятати.</p>
<h4>1. Дієслова на -eć: e → a</h4>
<p>В однині <b>e</b> перед <b>ł</b> перетворюється на <b>a</b>:</p>
<table class="g"><tr><th>інфінітив</th><th>він</th><th>вона</th><th>я (ч. / ж.)</th></tr>
<tr><td class="pl">mieć</td><td class="pl">miał</td><td class="pl">miała</td><td class="pl">miałem / miałam</td></tr>
<tr><td class="pl">chcieć</td><td class="pl">chciał</td><td class="pl">chciała</td><td class="pl">chciałem / chciałam</td></tr>
<tr><td class="pl">wiedzieć</td><td class="pl">wiedział</td><td class="pl">wiedziała</td><td class="pl">wiedziałem / wiedziałam</td></tr>
<tr><td class="pl">zapomnieć</td><td class="pl">zapomniał</td><td class="pl">zapomniała</td><td class="pl">zapomniałem / zapomniałam</td></tr>
</table>
<p>Так само: <span class="pl">musieć → musiał</span>, <span class="pl">widzieć → widział</span>, <span class="pl">myśleć → myślał</span>, <span class="pl">rozumieć → rozumiał</span>.</p>
<h4>2. Неправильні дієслова</h4>
<table class="g"><tr><th>інфінітив</th><th>він</th><th>вона</th><th>я (ч. / ж.)</th></tr>
<tr><td class="pl">iść</td><td class="pl">szedł</td><td class="pl">szła</td><td class="pl">szedłem / szłam</td></tr>
<tr><td class="pl">pójść</td><td class="pl">poszedł</td><td class="pl">poszła</td><td class="pl">poszedłem / poszłam</td></tr>
<tr><td class="pl">jeść</td><td class="pl">jadł</td><td class="pl">jadła</td><td class="pl">jadłem / jadłam</td></tr>
<tr><td class="pl">móc</td><td class="pl">mógł</td><td class="pl">mogła</td><td class="pl">mogłem / mogłam</td></tr>
<tr><td class="pl">wziąć</td><td class="pl">wziął</td><td class="pl">wzięła</td><td class="pl">wziąłem / wzięłam</td></tr>
<tr><td class="pl">zacząć</td><td class="pl">zaczął</td><td class="pl">zaczęła</td><td class="pl">zacząłem / zaczęłam</td></tr>
</table>
<div class="tip">Пастки: <span class="pl">mógł</span> пишеться з <b>ó</b> тільки у формі «він», у всіх інших — <b>o</b>: <span class="pl">mogła, mogłem</span> (пор. укр. «міг — могла»). У дієслів на <b>-ąć</b> чоловічі форми однини зберігають <b>ą</b> (<span class="pl">wziął, wziąłem</span>), а всі інші отримують <b>ę</b> (<span class="pl">wzięła, wzięli</span>). І ніяких <span class="pl">*poszedła</span> — тільки <span class="pl">poszła</span> (як укр. «пішов — пішла»).</div>
<h4>3. Множина: byli чи były?</h4>
<p>У польській дві множини. Якщо в групі є <b>хоча б один чоловік</b> — чоловічо-особова форма на <b>-li</b>. В усіх інших випадках (жінки, діти, тварини, предмети) — <b>-ły</b>. В українській такого поділу немає: «вони були» кажемо про всіх.</p>
<table class="g"><tr><th></th><th>є чоловік</th><th>немає чоловіків</th></tr>
<tr><td>my</td><td class="pl">byliśmy</td><td class="pl">byłyśmy</td></tr>
<tr><td>wy</td><td class="pl">byliście</td><td class="pl">byłyście</td></tr>
<tr><td>oni / one</td><td class="pl">byli</td><td class="pl">były</td></tr>
</table>
<div class="ex"><span class="pl">Dziadkowie mieszkali na wsi.</span> — Бабуся з дідусем жили на селі.</div>
<div class="ex"><span class="pl">Dzieci były zmęczone.</span> — Діти були втомлені.</div>
<p>Перед <b>-li</b> у дієслів на -eć повертається <b>e</b>: <span class="pl">mieli, chcieli, wiedzieli</span> (але <span class="pl">miały, chciały</span>). У jeść теж: <span class="pl">jedli</span>, але <span class="pl">jadły</span>. Решта: <span class="pl">szli / szły</span>, <span class="pl">mogli / mogły</span>, <span class="pl">wzięli / wzięły</span>.</p>
<div class="tip">Головна пастка — <span class="pl">dzieci</span>: це НЕ чоловічо-особовий рід, тому <span class="pl">dzieci były</span>, <span class="pl">dzieci jadły</span>. А <span class="pl">rodzice</span> і <span class="pl">dziadkowie</span> — пари з чоловіком, тому <span class="pl">byli</span>.</div>
<p>Наголос у <span class="pl">byliśmy</span>, <span class="pl">jedliście</span> падає на третій склад від кінця: BY-li-śmy (докладніше — у модулі 4).</p>`
      },

      exercises: [
        { type: "choice", q: "Wczoraj Ania ___ do kina z koleżanką.", options: ["poszła", "poszedła", "poszedł"], answer: 0, explain: "Від pójść: poszedł (він), але poszła (вона) — без -e-, як укр. «пішов — пішла». Форми *poszedła не існує." },
        { type: "gap", q: "W dzieciństwie nigdy nie ___ chodzić do dentysty. (chcieć; ja, mężczyzna)", answers: ["chciałem"], explain: "Дієслова на -eć в однині змінюють e → a: chcieć → chciałem." },
        { type: "gap", q: "Tata nie ___ przyjść na moje urodziny. (móc)", answers: ["mógł"], explain: "Móc → mógł (він) — з ó тільки в цій формі; пор. mogła, mogłem. Як в українській: «міг», але «могла»." },
        { type: "choice", q: "Moi dziadkowie ___ na wsi.", options: ["mieszkali", "mieszkały", "mieszkał"], answer: 0, explain: "Dziadkowie = дідусь + бабуся. У групі є чоловік → чоловічо-особова форма -li." },
        { type: "choice", q: "Dzieci ___ bardzo głodne.", options: ["były", "byli", "było"], answer: 0, explain: "Dzieci — не чоловічо-особовий рід, тому były (і прикметник głodne, а не głodni)." },
        { type: "gap", q: "Wczoraj wieczorem ___ do kina. (pójść; ja, mężczyzna)", answers: ["poszedłem"], explain: "pójść → poszedł → poszedłem (чоловік про себе)." },
        { type: "match", q: "З’єднайте інфінітив із формою «він» у минулому часі", pairs: [["iść", "szedł"], ["jeść", "jadł"], ["móc", "mógł"], ["mieć", "miał"], ["wziąć", "wziął"], ["chcieć", "chciał"]], explain: "Ці шість форм треба знати напам’ять: szedł, jadł, mógł, miał, wziął, chciał." },
        { type: "gap", q: "Ewa ___ parasol, bo padało. (wziąć)", answers: ["wzięła"], explain: "У wziąć ą лишається тільки в чоловічих формах однини (wziął, wziąłem); у жінки — ę: wzięła." },
        { type: "order", ru: "У дитинстві ми (ч.) часто гралися на подвір’ї.", words: ["W", "dzieciństwie", "często", "bawiliśmy", "się", "na", "podwórku."], alt: ["W dzieciństwie bawiliśmy się często na podwórku.", "W dzieciństwie często się bawiliśmy na podwórku."], explain: "Як і в українській: діти «граються» — bawić się, а grać — це «грати» (у гру чи на інструменті). Ми (з чоловіками) → bawiliśmy się; на подвір’ї — na podwórku." },
        { type: "gap", q: "Wczoraj chłopcy ___ pizzę na kolację. (jeść)", answers: ["jedli"], explain: "Чоловічо-особова множина від jeść — jedli (з e!). Дівчата — jadły." }
      ],

      pronunciation: {
        focus: "ą / ę",
        tip: `<p><b>Ą</b> і <b>ę</b> — носові голосні, але їхнє звучання залежить від сусідів:</p>
<ul><li>перед <b>s, z, sz, ż, ś, ź, ch, w, f</b> — справжній носовий звук, як у французькій: <span class="pl">wąsy</span>, <span class="pl">gęś</span>, <span class="pl">mężczyzna</span>;</li>
<li>перед <b>t, d, c, cz</b> — [он] / [ен]: <span class="pl">piątek</span> [п’онтек], <span class="pl">ręce</span> [ренце]; перед <b>ć, dź</b> — [он’] / [ен’]: <span class="pl">pięć</span> [п’єн’ч’];</li>
<li>перед <b>k, g</b> — носове [ŋ], як в англійському «-ing»: <span class="pl">ręka</span>, <span class="pl">mąka</span>;</li>
<li>перед <b>ł</b> і <b>l</b> носовий зовсім зникає: <span class="pl">wziął</span> [вж’оў], <span class="pl">wzięła</span> [вж’еўа], <span class="pl">zaczęli</span> [зачелі].</li></ul>
<p>Останнє правило прямо стосується минулого часу: пишемо ę, а вимовляємо чисте [е]. Підказка для впізнавання слів: на місці польських носових в українській зазвичай стоїть <b>у</b> або <b>я</b>: <span class="pl">ręka</span> — рука, <span class="pl">wziął</span> — взяв, <span class="pl">pięć</span> — п’ять.</p>`,
        items: [
          { type: "listen", text: "wąsy", ru: "вуса", note: "Справжній носовий: ą перед s" },
          { type: "listen", text: "piątek, pięć", ru: "п’ятниця, п’ять", note: "[п’онтек], [п’єн’ч’]" },
          { type: "listen", text: "wziął, wzięła, wzięli", ru: "взяв, взяла, взяли", note: "Перед ł і l носовий зникає: [вж’оў], [вж’еўа], [вж’елі]" },
          { type: "minimal", options: ["wąs", "was"], ru: ["вус", "вас"] },
          { type: "minimal", options: ["mąka", "męka"], ru: ["борошно", "мука (страждання)"] },
          { type: "minimal", options: ["piąty", "pięty"], ru: ["п’ятий", "п’яти (ноги)"] },
          { type: "stress", word: "pamiętałem", syllables: ["pa", "mię", "ta", "łem"], answer: 2 },
          { type: "dictation", text: "Wzięłam książkę i poszłam do dziadków." }
        ]
      },

      reading: {
        title: "Trzepak, drożdżówki i kolonie",
        text: "Wychowałem się w Łodzi, na dużym osiedlu z wielkiej płyty. Mieszkaliśmy na czwartym piętrze, a pod blokiem było podwórko i stary trzepak. To był nasz klub, nasze boisko i nasza siłownia. Po lekcjach szedłem prosto na podwórko i wracałem dopiero wtedy, kiedy mama krzyczała z balkonu: „Paweł, kolacja!”.\n\nNa wakacje zawsze jeździłem do dziadków na wieś. Dziadek miał krowy i stary traktor, a babcia piekła najlepsze drożdżówki na świecie. Jadłem je codziennie i nigdy nie miałem dość. Wieczorem babcia i sąsiadki siedziały na ławce i plotkowały. Raz wziąłem traktor bez pytania… Dziadek nie był zachwycony.\n\nKiedy miałem dziesięć lat, rodzice wysłali mnie na kolonie do Łeby. Pierwszy raz byłem tak daleko od domu i strasznie tęskniłem za babcią. Ale potem poznałem Kasię z Poznania i szybko zapomniałem o tęsknocie. Przez dwa tygodnie byliśmy nierozłączni.\n\nDziś trzepaków prawie nie ma, ale ja pamiętam każdy szczegół.",
        glossary: [
          { pl: "z wielkiej płyty", ru: "панельний (про будинок, район)" },
          { pl: "piętrze", ru: "поверсі" },
          { pl: "boisko", ru: "спортивний майданчик" },
          { pl: "siłownia", ru: "тренажерна зала" },
          { pl: "piekła", ru: "пекла" },
          { pl: "drożdżówki", ru: "здобні булочки" },
          { pl: "nie miałem dość", ru: "мені не набридало" },
          { pl: "plotkowały", ru: "пліткували" },
          { pl: "zachwycony", ru: "у захваті" },
          { pl: "nierozłączni", ru: "нерозлучні" }
        ],
        questions: [
          { type: "tf", q: "Paweł wychował się na wsi.", answer: false, explain: "Він виріс у Лодзі, у панельному районі; на село до дідуся й бабусі їздив лише на канікули." },
          { type: "choice", q: "Kiedy Paweł wracał z podwórka do domu?", options: ["Kiedy mama wołała go na kolację.", "Kiedy kończył lekcje.", "Kiedy dziadek przyjeżdżał traktorem."], answer: 0, explain: "Він повертався, лише коли мама кричала з балкона: «Paweł, kolacja!»." },
          { type: "tf", q: "Dziadek był zadowolony, kiedy Paweł wziął traktor.", answer: false, explain: "Dziadek nie był zachwycony — дідусь був зовсім не в захваті." },
          { type: "choice", q: "Za kim Paweł tęsknił na koloniach?", options: ["Za Kasią.", "Za babcią.", "Za rodzicami."], answer: 1, explain: "Strasznie tęskniłem za babcią — він сумував за бабусею (поки не познайомився з Касею)." },
          { type: "tf", q: "Paweł i Kasia spędzili razem dwa tygodnie.", answer: true, explain: "Przez dwa tygodnie byliśmy nierozłączni — два тижні вони були нерозлучні." }
        ]
      },

      writing: {
        prompt: "Польський блог збирає історії про дитинство. Напишіть короткий спогад: де ви виросли; де й з ким проводили літо; що любили їсти й у що гралися; одна смішна або незручна історія. Використайте неправильні форми (szedłem, jadłam, mogłem, wzięłam…) і хоча б одну форму множини.",
        minWords: 50,
        maxWords: 90,
        useWords: ["dzieciństwo", "pamiętać", "dziadkowie", "podwórko"],
        checklist: [
          { label: "Щонайменше 2 неправильні форми (szedł-, szł-, jadł-, mógł / mogł-, miał-, wziął / wzię-)", pattern: "(szedł|szł|jadł|jedli|mogł|mógł|miał|mieli|wzię|wziął)", min: 2 },
          { label: "Хоча б одна форма множини минулого часу (-liśmy / -łyśmy, -li / -ły)", pattern: "\\p{L}+(liśmy|łyśmy|li|ły)(?!\\p{L})", min: 1 }
        ],
        model: "W dzieciństwie każde lato spędzałam u dziadków w małej wsi pod Krakowem. Dziadek miał duży ogród, a babcia robiła pierogi z jagodami. Jadłam je na śniadanie, obiad i kolację! Z kuzynami codziennie bawiliśmy się na podwórku albo chodziliśmy nad rzekę. Pamiętam, że raz poszłam sama do lasu i zgubiłam drogę. Dziadkowie bardzo się bali, ale na szczęście szybko mnie znaleźli. Do dziś tęsknię za tamtymi wakacjami."
      }
    },

    // ───────────────────────── Урок 3 ─────────────────────────
    {
      id: "m02l3",
      title: "Kim jesteś z zawodu?",
      titleRu: "Орудний відмінок: професії, z + kim, транспорт",
      topic: "Zawody",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати орудний відмінок іменників в однині (-em / -iem, -ą)",
        "Говорити про професії: jestem lekarzem, zostać programistą, pracuję jako…",
        "Уживати z + kim і назви транспорту: z kolegą, ze mną, autobusem",
        "Чути різницю між кінцевими -ę та -ą"
      ],

      vocab: [
        { pl: "zawód", ru: "професія, фах", g: "m", ex: "Kim jesteś z zawodu?", exRu: "Хто ти за фахом?", note: "Не плутайте з «завод» (це fabryka, zakład)! ó → o в інших формах: z zawodu" },
        { pl: "kierowca", ru: "водій", g: "m", ex: "Mój wujek jest kierowcą tira.", exRu: "Мій дядько — водій фури.", note: "Чоловічий рід, але відмінюється як жіночий: kierowcą (пор. укр. «староста — старостою»)" },
        { pl: "pielęgniarka", ru: "медсестра", g: "f", ex: "Moja siostra jest pielęgniarką w szpitalu.", exRu: "Моя сестра — медсестра в лікарні.", note: "ч. р. pielęgniarz (медбрат)" },
        { pl: "prawnik", ru: "юрист", g: "m", ex: "Jej mąż jest prawnikiem.", exRu: "Її чоловік — юрист.", note: "Після k — -iem: prawnikiem" },
        { pl: "kucharz", ru: "кухар", g: "m", ex: "Kucharz poleca dziś żurek.", exRu: "Кухар сьогодні радить журек." },
        { pl: "fryzjer", ru: "перукар", g: "m", ex: "Jutro idę do fryzjera.", exRu: "Завтра я йду до перукаря.", note: "ж. р. fryzjerka; iść do fryzjera — «до перукаря», як і в українській" },
        { pl: "sprzedawca", ru: "продавець", g: "m", ex: "Był sprzedawcą w Żabce.", exRu: "Він був продавцем у «Жабці».", note: "Відмінюється як kierowca: sprzedawcą; ж. р. sprzedawczyni" },
        { pl: "programista", ru: "програміст", g: "m", ex: "Brat został programistą.", exRu: "Брат став програмістом.", note: "ч. р. на -a → оруд. в. -ą: programistą" },
        { pl: "hydraulik", ru: "сантехнік", g: "m", ex: "Hydraulik przyszedł dopiero po południu.", exRu: "Сантехнік прийшов лише по обіді." },
        { pl: "dziennikarz", ru: "журналіст", g: "m", ex: "Dziennikarz rozmawiał z ministrem.", exRu: "Журналіст розмовляв із міністром." },
        { pl: "zostać", ru: "стати (кимось); залишитися", ex: "Kim chciałeś zostać w dzieciństwie?", exRu: "Ким ти хотів стати в дитинстві?", note: "+ оруд. в., як укр. «стати лікарем»: zostać lekarzem; zostać w domu — залишитися вдома" },
        { pl: "zarabiać", ru: "заробляти", ex: "Ile zarabia hydraulik w Polsce?", exRu: "Скільки заробляє сантехнік у Польщі?" },
        { pl: "etat", ru: "ставка, штатна посада", g: "m", ex: "Pracuję na pół etatu.", exRu: "Я працюю на пів ставки.", note: "na cały / pełny etat — на повну ставку" }
      ],

      grammar: {
        title: "Орудний відмінок (narzędnik): однина",
        html: `<p>Орудний відмінок відповідає на питання <b>kim? czym?</b> (ким? чим?). Тут українцям пощастило: закінчення дуже схожі. «Лікарем» → <span class="pl">lekarzem</span>, «мамою» → <span class="pl">mamą</span> — польське <b>-ą</b> можна сприймати як «стиснуте» українське «-ою».</p>
<table class="g"><tr><th>рід</th><th>називний</th><th>орудний</th></tr>
<tr><td>ч. р.</td><td class="pl">lekarz, autobus</td><td class="pl">lekarzem, autobusem</td></tr>
<tr><td>ч. р. на -k, -g</td><td class="pl">prawnik, pociąg</td><td class="pl">prawnikiem, pociągiem</td></tr>
<tr><td>с. р.</td><td class="pl">metro, dziecko</td><td class="pl">metrem, dzieckiem</td></tr>
<tr><td>ж. р.</td><td class="pl">lekarka, taksówka</td><td class="pl">lekarką, taksówką</td></tr>
<tr><td>ч. р. на -a</td><td class="pl">kierowca, kolega</td><td class="pl">kierowcą, kolegą</td></tr>
</table>
<p>Чоловічий і середній рід — <b>-em</b> (після k, g — <b>-iem</b>). Жіночий рід і чоловіки на <b>-a</b> (<span class="pl">kierowca, programista, tata</span>) — <b>-ą</b> (пор. укр. «староста — старостою»). Випадний e зникає: <span class="pl">pies → z psem</span> — точно як укр. «пес — з псом».</p>
<h4>1. Być / zostać + професія</h4>
<p>Після <span class="pl">być</span> і <span class="pl">zostać</span> («стати») іменник завжди в орудному — у будь-якому часі:</p>
<div class="ex"><span class="pl">Jestem programistą.</span> — Я програміст.</div>
<div class="ex"><span class="pl">Mama była nauczycielką.</span> — Мама була вчителькою.</div>
<div class="ex"><span class="pl">Chcę zostać pilotem.</span> — Я хочу стати пілотом.</div>
<div class="tip">В українській у теперішньому часі кажемо «я — лікар» (називний), а в минулому — «я був лікарем» (орудний). Польська вживає орудний завжди: <span class="pl">*Jestem lekarz</span> — помилка, треба <span class="pl">Jestem lekarzem</span>. Зате після <span class="pl">to</span> і <span class="pl">jako</span> — називний: <span class="pl">Mój brat to lekarz.</span> <span class="pl">Pracuję jako kierowca.</span> Увага: українське «працюю водієм» дослівно не перекладайте — тут потрібне саме <span class="pl">jako</span>.</div>
<p>Питання про професію: <span class="pl">Kim jesteś z zawodu?</span> / <span class="pl">Kim pan jest z zawodu?</span></p>
<h4>2. Z + kim? czym?</h4>
<div class="ex"><span class="pl">Rozmawiam z szefem.</span> — Я розмовляю з начальником.</div>
<div class="ex"><span class="pl">Kawa z mlekiem, herbata z cytryną.</span> — Кава з молоком, чай з лимоном.</div>
<table class="g"><tr><th>ja</th><th>ty</th><th>on / ono</th><th>ona</th><th>my</th><th>wy</th><th>oni / one</th></tr>
<tr><td class="pl">ze mną</td><td class="pl">z tobą</td><td class="pl">z nim</td><td class="pl">z nią</td><td class="pl">z nami</td><td class="pl">z wami</td><td class="pl">z nimi</td></tr>
</table>
<p>Перед <span class="pl">mną</span> і перед групою «z / s / sz + приголосний» прийменник перетворюється на <b>ze</b> (як укр. «зі мною»): <span class="pl">ze mną, ze Zbyszkiem</span>.</p>
<h4>3. Транспорт: чим?</h4>
<p>Засіб пересування — орудний без прийменника, як і в українській («їхати автобусом, поїздом»): <span class="pl">jechać autobusem, tramwajem, pociągiem, metrem, taksówką</span>, <span class="pl">lecieć samolotem</span>. Пішки — <span class="pl">pieszo</span> або <span class="pl">piechotą</span> (теж орудний!).</p>
<div class="tip">Не кажіть «на автобусі» (і українською краще «автобусом»): <span class="pl">*na autobusie</span> звучить як «на даху автобуса». Виняток — велосипед як заняття: <span class="pl">jeździć na rowerze</span> (кататися на велосипеді), але <span class="pl">Jadę do pracy rowerem.</span></div>`
      },

      exercises: [
        { type: "choice", q: "Mój brat jest ___.", options: ["lekarzem", "lekarz", "lekarza"], answer: 0, explain: "Після być професія стоїть в орудному: jest lekarzem." },
        { type: "choice", q: "Mój brat to ___.", options: ["lekarz", "lekarzem", "lekarza"], answer: 0, explain: "Після to — називний відмінок: Mój brat to lekarz. Порівняйте: Mój brat jest lekarzem." },
        { type: "gap", q: "Moja siostra jest ___. (pielęgniarka)", answers: ["pielęgniarką"], explain: "Жіночий рід: -a → -ą (укр. -ою)." },
        { type: "gap", q: "Codziennie jeżdżę do pracy ___. (tramwaj)", answers: ["tramwajem"], explain: "Транспорт — орудний без прийменника: tramwajem (укр. «трамваєм»). Не *na tramwaju." },
        { type: "gap", q: "Pan Adam jest ___ autobusu. (kierowca)", answers: ["kierowcą"], explain: "Kierowca — чоловік, але слово закінчується на -a, тому в орудному -ą, як у жіночого роду (пор. укр. «староста — старостою»)." },
        { type: "gap", q: "Mój syn chce zostać ___. (programista)", answers: ["programistą"], explain: "Zostać + орудний; programista (ч. р. на -a) → programistą." },
        { type: "match", q: "З’єднайте займенник із формою після прийменника z", pairs: [["ja", "ze mną"], ["ty", "z tobą"], ["on", "z nim"], ["ona", "z nią"], ["my", "z nami"], ["oni", "z nimi"]], explain: "Запам’ятайте ze mną (з e! — як укр. «зі мною») і n- у формах 3-ї особи після прийменника: z nim, z nią, z nimi (як укр. «з ним, з нею, з ними»)." },
        { type: "order", ru: "Мій брат хоче стати пожежником.", words: ["Mój", "brat", "chce", "zostać", "strażakiem."], alt: [], explain: "Zostać + орудний; strażak → strażakiem (після k — -iem)." },
        { type: "choice", q: "Pracuję jako ___ w dużej firmie.", options: ["programista", "programistą", "programistę"], answer: 0, explain: "Після jako — називний відмінок: pracuję jako programista (хоч українською «працюю програмістом»). Але: jestem programistą." },
        { type: "translate", ru: "Я їду з нею на таксі.", answers: ["Jadę z nią taksówką.", "Jadę taksówką z nią."], explain: "z + оруд. в.: z nią; транспорт без прийменника: taksówką." }
      ],

      pronunciation: {
        focus: "ę у кінці слова, ą перед b/p",
        tip: `<p><b>Ę в кінці слова</b> у звичайному мовленні майже втрачає носовість і звучить як [е]: <span class="pl">proszę</span> ≈ [проше], <span class="pl">idę</span>, <span class="pl">się</span>. Старанно «гундосити» не треба — це звучить неприродно.</p>
<p><b>Ą в кінці слова</b>, навпаки, лишається носовим — приблизно [оў] з носовим призвуком. І це важливо для граматики: тільки за ним чути орудний відмінок! <span class="pl">Piję kawę</span> (знах. в.) — <span class="pl">z kawą</span> (оруд. в.), як українське «каву» — «з кавою».</p>
<p><b>Перед b і p</b> носові розпадаються на голосний + [м]: <span class="pl">ząb</span> [зомп], <span class="pl">zęby</span> [земби], <span class="pl">kąpiel</span> [комп’єль], <span class="pl">tępy</span> [темпи].</p>`,
        items: [
          { type: "listen", text: "Proszę kawę z mlekiem.", ru: "Каву з молоком, будь ласка.", note: "proszę, kawę — кінцеве ę майже як [е]" },
          { type: "listen", text: "z mamą i z siostrą", ru: "з мамою і з сестрою", note: "Кінцеве ą — носове" },
          { type: "minimal", options: ["kawę", "kawą"], ru: ["каву (знах. в.)", "кавою (оруд. в.)"] },
          { type: "minimal", options: ["lekarkę", "lekarką"], ru: ["лікарку (знах. в.)", "лікаркою (оруд. в.)"] },
          { type: "listen", text: "ząb, zęby, kąpiel", ru: "зуб, зуби, купання", note: "[зомп], [земби], [комп’єль]" },
          { type: "stress", word: "pielęgniarka", syllables: ["pie", "lęg", "niar", "ka"], answer: 2 },
          { type: "dictation", text: "Jadę do pracy tramwajem z kolegą." }
        ]
      },

      reading: {
        title: "Kto jest kim w naszym bloku?",
        text: "Mieszkam w starym bloku na Mokotowie i znam prawie wszystkich sąsiadów. Pan Zbyszek z parteru był kiedyś kierowcą autobusu. Teraz jest na emeryturze i całymi dniami rozmawia z kotem. Pani Halina z pierwszego piętra jest pielęgniarką. Często ma nocne dyżury w szpitalu, więc rano wraca do domu tramwajem, kiedy wszyscy inni jadą do pracy.\n\nNa drugim piętrze mieszka Kuba. Jest programistą i pracuje zdalnie dla firmy z Berlina. Rzadko wychodzi z domu, ale ma najszybszy internet w bloku, więc wszyscy chętnie się z nim przyjaźnią. Jego dziewczyna, Monika, jest fryzjerką i strzyże pół osiedla — oczywiście w kuchni Kuby.\n\nA ja? Z zawodu jestem dziennikarką. Codziennie jeżdżę do redakcji rowerem, nawet zimą. Mama mówi, że powinnam zostać prawnikiem, bo prawnicy dobrze zarabiają. Może i tak, ale prawnik nie może pisać o sąsiadach!",
        glossary: [
          { pl: "na Mokotowie", ru: "на Мокотові (район Варшави)" },
          { pl: "parteru", ru: "першого (нижнього) поверху" },
          { pl: "pierwszego piętra", ru: "другого поверху (!)" },
          { pl: "na emeryturze", ru: "на пенсії" },
          { pl: "dyżury", ru: "чергування" },
          { pl: "zdalnie", ru: "дистанційно" },
          { pl: "przyjaźnią", ru: "дружать" },
          { pl: "strzyże", ru: "стриже" },
          { pl: "redakcji", ru: "редакції" }
        ],
        questions: [
          { type: "tf", q: "Pan Zbyszek nadal pracuje jako kierowca.", answer: false, explain: "Był kiedyś kierowcą — колись він був водієм, а тепер на пенсії." },
          { type: "choice", q: "Jak pani Halina wraca rano do domu?", options: ["Tramwajem.", "Rowerem.", "Taksówką."], answer: 0, explain: "Rano wraca do domu tramwajem — уранці вона їде додому трамваєм." },
          { type: "choice", q: "Dlaczego sąsiedzi lubią Kubę?", options: ["Bo dobrze strzyże.", "Bo ma bardzo szybki internet.", "Bo dużo zarabia."], answer: 1, explain: "У Куби найшвидший інтернет у будинку — тому з ним усі охоче дружать. А сусідів стриже його дівчина Моніка." },
          { type: "tf", q: "Monika strzyże sąsiadów w mieszkaniu Kuby.", answer: true, explain: "Strzyże pół osiedla — oczywiście w kuchni Kuby." },
          { type: "choice", q: "Kim z zawodu jest narratorka?", options: ["Prawnikiem.", "Dziennikarką.", "Pielęgniarką."], answer: 1, explain: "Z zawodu jestem dziennikarką. Стати юристкою їй радить мама." }
        ]
      },

      writing: {
        prompt: "Новий колега-поляк розпитує про вашу родину. Напишіть йому повідомлення: ким працюють (або працювали) ваші рідні; як вони добираються на роботу; з ким ви живете чи працюєте; ким ви хотіли стати в дитинстві.",
        minWords: 40,
        maxWords: 80,
        useWords: ["zawód", "zostać", "zarabiać", "kierowca"],
        checklist: [
          { label: "Щонайменше 2 рази być / zostać + професія в орудному (jest lekarzem, została nauczycielką)", pattern: "(jest|jestem|jesteś|był|była|byłem|byłam|zostać|został|została|zostałem|zostałam)\\s+(\\p{L}+\\s+)?\\p{L}+(em|ą)(?!\\p{L})", min: 2 },
          { label: "Транспорт в орудному (autobusem, rowerem, taksówką…)", pattern: "(autobusem|tramwajem|pociągiem|samochodem|rowerem|metrem|taksówką|samolotem|hulajnogą|piechotą)", min: 1 },
          { label: "z + орудний (z mamą, z kolegą, z nim…)", pattern: "\\bze?\\s+(\\p{L}*(em|ą)|nim|nimi)(?!\\p{L})", min: 1 }
        ],
        model: "W mojej rodzinie każdy robi coś innego. Mój tata jest kierowcą autobusu w Krakowie i jeździ po mieście cały dzień. Mama z zawodu jest pielęgniarką, ale teraz pracuje w aptece z moją ciocią. Mój starszy brat został programistą i dobrze zarabia. Do pracy jeździ rowerem, nawet zimą. A ja? W dzieciństwie chciałem zostać strażakiem, ale dziś jestem kucharzem i pracuję z kolegą w małej restauracji."
      }
    },

    // ───────────────────────── Урок 4 ─────────────────────────
    {
      id: "m02l4",
      title: "Czym się interesujesz?",
      titleRu: "Орудний прикметників, прийменники місця",
      topic: "Zainteresowania",
      review: false,
      minutes: 30,
      goals: [
        "Ставити прикметники й займенники в орудний відмінок",
        "Розповідати про хобі за допомогою interesować się, zajmować się, uprawiać",
        "Описувати розташування з przed, za, nad, pod, między",
        "Читати ó як [у] і h як глухе [х]"
      ],

      vocab: [
        { pl: "zainteresowania", ru: "інтереси, захоплення", g: "pl", ex: "Jakie masz zainteresowania?", exRu: "Які в тебе інтереси?" },
        { pl: "interesować się", ru: "цікавитися", ex: "Interesuję się astronomią.", exRu: "Я цікавлюся астрономією.", note: "+ оруд. в.: czym? — як укр. «цікавитися чим?»" },
        { pl: "zajmować się", ru: "займатися (справою, роботою); доглядати", ex: "Moja żona zajmuje się marketingiem.", exRu: "Моя дружина займається маркетингом.", note: "+ оруд. в.; але «займатися спортом» — uprawiać sport" },
        { pl: "uprawiać", ru: "займатися (спортом); вирощувати", ex: "Jakie sporty uprawiasz?", exRu: "Якими видами спорту ти займаєшся?", note: "+ знах. в.: uprawiać sport; uprawiać warzywa — вирощувати овочі" },
        { pl: "wędkarstwo", ru: "риболовля (як хобі)", g: "n", ex: "Wędkarstwo to bardzo popularne hobby w Polsce.", exRu: "Риболовля — дуже популярне хобі в Польщі.", note: "Від wędka — вудка; wędkarz — рибалка-аматор; iść na ryby — піти на риболовлю" },
        { pl: "żeglarstwo", ru: "вітрильний спорт", g: "n", ex: "Latem pływamy żaglówką po Mazurach — kochamy żeglarstwo.", exRu: "Улітку ми ходимо під вітрилом Мазурськими озерами — обожнюємо вітрильний спорт." },
        { pl: "wspinaczka", ru: "скелелазіння; сходження", g: "f", ex: "W weekend idę na wspinaczkę z kolegą.", exRu: "На вихідних я йду на скелелазіння з другом." },
        { pl: "planszówki", ru: "настільні ігри", g: "pl", ex: "W piątki gramy w planszówki w kawiarni.", exRu: "По п’ятницях ми граємо в настільні ігри в кав’ярні.", note: "Розм. від gry planszowe; grać w + знах. в. — як укр. «грати в шахи»" },
        { pl: "kolekcjonować", ru: "колекціонувати", ex: "Mój dziadek kolekcjonuje znaczki.", exRu: "Мій дідусь колекціонує марки." },
        { pl: "działka", ru: "дачна ділянка, дача", g: "f", ex: "W sobotę jedziemy na działkę.", exRu: "У суботу ми їдемо на дачу.", note: "na działce — на дачі" },
        { pl: "zapalony", ru: "затятий, завзятий", ex: "Mój szef jest zapalonym kibicem Legii.", exRu: "Мій начальник — затятий уболівальник «Легії».", note: "Дослівно «запалений»" },
        { pl: "kryminał", ru: "детектив (книжка, фільм)", g: "m", ex: "Wieczorem czytam kryminał.", exRu: "Увечері я читаю детектив.", note: "Хибний друг: kryminał — не «кримінал», а детективна історія; detektyw — це сищик (людина)" },
        { pl: "majsterkowanie", ru: "майстрування, робота своїми руками (DIY)", g: "n", ex: "Tata spędza każdą sobotę na majsterkowaniu w garażu.", exRu: "Щосуботи тато щось майструє в гаражі." }
      ],

      grammar: {
        title: "Орудний відмінок прикметників; interesować się, zajmować się; прийменники місця",
        html: `<p>Прикметники й займенники в орудному відмінку теж схожі на українські: «новим» → <span class="pl">nowym</span>, «новою» → <span class="pl">nową</span>.</p>
<table class="g"><tr><th></th><th>ч. р. / с. р.</th><th>ж. р.</th></tr>
<tr><td>прикметники</td><td class="pl">nowym, dobrym</td><td class="pl">nową, dobrą</td></tr>
<tr><td>на -ki, -gi, м’які</td><td class="pl">polskim, drogim, tanim</td><td class="pl">polską, drogą, tanią</td></tr>
<tr><td>мій / твій / наш</td><td class="pl">moim, twoim, naszym</td><td class="pl">moją, twoją, naszą</td></tr>
<tr><td>цей, той</td><td class="pl">tym</td><td class="pl">tą</td></tr>
</table>
<div class="ex"><span class="pl">Jest zapalonym wędkarzem.</span> — Він затятий рибалка.</div>
<div class="ex"><span class="pl">Spaceruję z naszym starym psem.</span> — Я гуляю з нашим старим псом.</div>
<div class="tip">Не плутайте <span class="pl">tę</span> і <span class="pl">tą</span>: <span class="pl">Znam tę piosenkę</span> (знах. в., «цю пісню»), але <span class="pl">z tą piosenką</span> (оруд. в., «з цією піснею»).</div>
<h4>Interesować się, zajmować się + czym?</h4>
<div class="ex"><span class="pl">Interesuję się polską historią.</span> — Я цікавлюся польською історією.</div>
<div class="ex"><span class="pl">Czym się zajmujesz?</span> — Чим ти займаєшся? (зазвичай про роботу)</div>
<div class="ex"><span class="pl">Zajmuję się marketingiem.</span> — Я займаюся маркетингом.</div>
<div class="tip">Тут українцям легко: «цікавитися історією», «займатися маркетингом» — теж орудний. Але є пастка: «займатися спортом» — <span class="pl">uprawiać sport</span>, а не <span class="pl">zajmować się sportem</span> (так скаже про свою роботу спортивний журналіст). <span class="pl">Zajmować się dzieckiem</span> — «доглядати дитину». А «я займаюся польською» — <span class="pl">uczę się polskiego</span>.</div>
<h4>Де? Przed, za, nad, pod, między + орудний</h4>
<table class="g"><tr><th>прийменник</th><th>значення</th><th>приклад</th></tr>
<tr><td class="pl">przed</td><td>перед</td><td class="pl">przed domem, przed pracą</td></tr>
<tr><td class="pl">za</td><td>за</td><td class="pl">za sklepem</td></tr>
<tr><td class="pl">nad</td><td>над; біля (води)</td><td class="pl">nad stołem, nad morzem</td></tr>
<tr><td class="pl">pod</td><td>під; біля, неподалік</td><td class="pl">pod mostem, pod Krakowem</td></tr>
<tr><td class="pl">między</td><td>між</td><td class="pl">między bankiem a pocztą</td></tr>
</table>
<div class="tip">Поляки відпочивають <span class="pl">nad morzem</span> і <span class="pl">nad jeziorem</span> — «над морем», «над озером» (пор. укр. «над Дніпром»), хоча українською зазвичай кажемо «на морі»; польське <span class="pl">na morzu</span> — це «у відкритому морі». <span class="pl">Pod Krakowem</span> — «під Краковом», тобто неподалік від міста, як і в українській. А <span class="pl">Czekam pod domem</span> — «чекаю біля будинку, біля під’їзду».</div>
<p>На питання <b>Gdzie?</b> (де?) — орудний, на питання <b>Dokąd?</b> (куди?) — знахідний: <span class="pl">Jesteśmy nad morzem</span>, але <span class="pl">Jedziemy nad morze</span>. Із займенниками прийменники подовжуються — точнісінько як укр. «переді мною, наді мною, піді мною»: <span class="pl">przede mną, nade mną, pode mną</span>, але <span class="pl">za mną</span>.</p>
<p>Прийменник <span class="pl">przed</span> працює і з часом: <span class="pl">przed obiadem, przed weekendem</span> — перед обідом, перед вихідними.</p>`
      },

      exercises: [
        { type: "choice", q: "Interesuję się ___ muzyką.", options: ["polską", "polska", "polskiej"], answer: 0, explain: "interesować się + орудний; прикметник ж. р. → -ą: polską muzyką." },
        { type: "gap", q: "Mój dziadek jest ___ wędkarzem. (zapalony)", answers: ["zapalonym"], explain: "Прикметник ч. р. в орудному — -ym: zapalonym wędkarzem." },
        { type: "gap", q: "Czym się ___? — Jestem księgową. (zajmować się; ty)", answers: ["zajmujesz"], explain: "zajmować → zajmuję, zajmujesz (дієвідміна -ować → -uję). Питання czym? — орудний." },
        { type: "choice", q: "Як сказати «Я займаюся спортом»?", options: ["Uprawiam sport.", "Zajmuję się sportem.", "Robię sportem."], answer: 0, explain: "Спорт «обробляють»: uprawiać sport. Zajmuję się sportem звучить як «спорт — моя професійна сфера»." },
        { type: "gap", q: "Kot śpi pod ___. (stół)", answers: ["stołem"], explain: "pod + орудний (де?). В інших формах ó → o: stół → stołem — як укр. «стіл — столом»." },
        { type: "gap", q: "W lipcu byliśmy nad ___. (morze)", answers: ["morzem"], explain: "Де? — nad morzem (оруд. в.). Куди? — nad morze (знах. в.)." },
        { type: "choice", q: "Czekam na ciebie przed ___ kinem.", options: ["nowym", "nową", "nowe"], answer: 0, explain: "Kino — середній рід; прикметник ч. і с. р. в орудному — -ym." },
        { type: "match", q: "З’єднайте польський вираз із перекладом", pairs: [["przed pracą", "перед роботою"], ["za domem", "за будинком"], ["nad jeziorem", "на озері (біля озера)"], ["pod mostem", "під мостом"], ["z dobrym kolegą", "з добрим другом"]], explain: "Усі ці прийменники на питання «де? / з ким?» вимагають орудного відмінка." },
        { type: "order", ru: "Моя сестра цікавиться японською кухнею.", words: ["Moja", "siostra", "interesuje", "się", "japońską", "kuchnią."], alt: ["Moja siostra się interesuje japońską kuchnią."], explain: "interesować się + орудний: japońską kuchnią. Się зазвичай стоїть одразу після дієслова." },
        { type: "translate", ru: "Він живе з молодшим братом.", answers: ["Mieszka z młodszym bratem.", "On mieszka z młodszym bratem."], explain: "z + орудний: młodszy brat → z młodszym bratem." }
      ],

      pronunciation: {
        focus: "ó = u, h = ch",
        tip: `<p><b>Ó</b> читається точно як <b>u</b>: <span class="pl">góra</span> [ґура], <span class="pl">mój</span> [муй], <span class="pl">Kraków</span> [кракуф]. Дві літери для одного звуку — спадок історії. Підказка для правопису: ó зазвичай чергується з o в інших формах слова: <span class="pl">stół — stołu</span>, <span class="pl">mój — moja</span>, <span class="pl">mógł — mogła</span>, <span class="pl">zawód — zawodu</span>. Українцям допоможе рідна мова: це те саме чергування, що в «стіл — стола», «мій — моя», «міг — могла». Тож якщо в українському слові є <b>і</b>, яке чергується з <b>о</b>, у польському часто пишеться <b>ó</b>.</p>
<p><b>H</b> і <b>ch</b> у сучасній польській звучать однаково — як глухе українське [х]: <span class="pl">hobby</span>, <span class="pl">historia</span>, <span class="pl">chleb</span>. Головна пастка для українців — не вимовляйте h як українське дзвінке [г]: <span class="pl">herbata</span> — [хербата], а не [гербата]. А польське <b>g</b> — це завжди українське <b>ґ</b>, а не <b>г</b>.</p>`,
        items: [
          { type: "listen", text: "ogród", ru: "сад (а не «город»)", note: "ó = [у], d на кінці оглушується: [оґрут]" },
          { type: "listen", text: "herbata i chleb", ru: "чай і хліб", note: "h і ch звучать однаково — як глухе [х], а не українське [г]" },
          { type: "minimal", options: ["Bóg", "bok"], ru: ["Бог", "бік"] },
          { type: "minimal", options: ["lód", "lot"], ru: ["лід", "політ, рейс"] },
          { type: "stress", word: "zainteresowania", syllables: ["za", "in", "te", "re", "so", "wa", "nia"], answer: 5 },
          { type: "stress", word: "wędkarstwo", syllables: ["węd", "kar", "stwo"], answer: 1 },
          { type: "dictation", text: "Mój brat interesuje się historią i chodzi z córką na ryby." }
        ]
      },

      reading: {
        title: "Grupa „Pasje w Poznaniu”",
        text: "Bartek, 34 lata: Cześć! Z zawodu jestem księgowym, ale po pracy zajmuję się czymś zupełnie innym — jestem zapalonym wędkarzem. W każdą sobotę o piątej rano siedzę nad jeziorem pod starą wierzbą i czekam. Ryby nie zawsze biorą, ale cisza jest bezcenna. Szukam kogoś na wspólne wyjazdy na Mazury. Mam samochód i namiot!\n\nOla, 27 lat: Hej! Interesuję się wspinaczką. Mam ściankę wspinaczkową tuż za domem, więc chodzę tam trzy razy w tygodniu. W zeszłym roku byłam z instruktorem w Tatrach i wspinałam się nad Morskim Okiem. Szukam partnerki albo partnera na treningi.\n\nPan Henryk, 68 lat: Dzień dobry. Jestem emerytowanym nauczycielem historii. Od czterdziestu lat kolekcjonuję stare pocztówki z Poznania i mam ich ponad dwa tysiące. W niedziele siedzę z wnukiem nad albumami i opowiadam mu o dawnym mieście. Chętnie kupię pocztówki z ratuszem i koziołkami. Zapraszam wszystkich, którzy interesują się historią!",
        glossary: [
          { pl: "księgowym", ru: "бухгалтером" },
          { pl: "wierzbą", ru: "вербою" },
          { pl: "biorą", ru: "клюють (про рибу)" },
          { pl: "bezcenna", ru: "безцінна" },
          { pl: "namiot", ru: "намет" },
          { pl: "ściankę wspinaczkową", ru: "скеледром" },
          { pl: "emerytowanym", ru: "який вийшов на пенсію" },
          { pl: "pocztówki", ru: "листівки" },
          { pl: "koziołkami", ru: "козликами (символ Познані на ратуші)" }
        ],
        questions: [
          { type: "tf", q: "Bartek pracuje jako wędkarz.", answer: false, explain: "Z zawodu jest księgowym — він бухгалтер, а риболовля — його хобі." },
          { type: "choice", q: "Gdzie Bartek siedzi w soboty rano?", options: ["Nad jeziorem.", "Za domem.", "Przed ratuszem."], answer: 0, explain: "Siedzę nad jeziorem pod starą wierzbą — біля озера під старою вербою." },
          { type: "tf", q: "Ola ma ściankę wspinaczkową blisko domu.", answer: true, explain: "Mam ściankę wspinaczkową tuż za domem — скеледром одразу за будинком." },
          { type: "choice", q: "Czym interesuje się pan Henryk?", options: ["Wspinaczką.", "Historią Poznania.", "Wędkarstwem."], answer: 1, explain: "Він збирає старі листівки з Познані й розповідає онукові про давнє місто." },
          { type: "choice", q: "Kogo szuka Bartek?", options: ["Kogoś na wspólne wyjazdy na Mazury.", "Instruktora wspinaczki.", "Kupca na pocztówki."], answer: 0, explain: "Szukam kogoś na wspólne wyjazdy na Mazury." }
        ]
      },

      writing: {
        prompt: "Ви вступили до польської групи у Facebook «Pasje w …» (вашому місті). Напишіть допис: хто ви за професією; чим цікавитеся й займаєтеся у вільний час; де ви це робите (використайте nad, pod, przed, za); кого шукаєте в групі.",
        minWords: 50,
        maxWords: 90,
        useWords: ["zapalony", "uprawiać", "działka", "kryminał"],
        checklist: [
          { label: "interesować się / zajmować się + орудний", pattern: "(interesuj|zajmuj)\\p{L}*\\s+(się\\s+)?\\p{L}+(ą|em|ym|im)(?!\\p{L})", min: 1 },
          { label: "Щонайменше 2 прийменники місця + орудний (nad jeziorem, za domem…)", pattern: "\\b(nad|pod|przed|za)\\s+\\p{L}+(em|ą|ym|im)(?!\\p{L})", min: 2 },
          { label: "Прикметник + іменник в орудному (zapalonym wędkarzem, starą wierzbą)", pattern: "\\p{L}+(ym|im|ą)\\s+\\p{L}+(em|ą)(?!\\p{L})", min: 1 }
        ],
        model: "Cześć wszystkim! Mam na imię Tomek, z zawodu jestem informatykiem. Interesuję się historią Polski i czytam dużo kryminałów. Uprawiam też sport — biegam trzy razy w tygodniu. Ale moja największa pasja to wędkarstwo, bo jestem zapalonym wędkarzem! Latem mieszkam na działce nad małym jeziorem. Rano łowię ryby pod starym mostem, a wieczorem siedzę z sąsiadem przed domem i gramy w szachy. Szukam kolegi na wspólne wyjazdy na Mazury."
      }
    },

    // ───────────────────────── Урок 5 (повторення) ─────────────────────────
    {
      id: "m02l5",
      title: "Powtórka: wypad w Tatry",
      titleRu: "Повторення модуля 2",
      topic: "Wypad za miasto",
      review: true,
      minutes: 30,
      goals: [
        "Повторити минулий час: однину й множину, неправильні дієслова",
        "Повторити всі випадки вживання орудного відмінка",
        "Зв’язно розповісти про подорож у минулому"
      ],

      vocab: [
        { pl: "wypad", ru: "вилазка, коротка поїздка (розм.)", g: "m", ex: "W sobotę zrobiliśmy wypad za miasto.", exRu: "У суботу ми вибралися за місто." },
        { pl: "szlak", ru: "(туристичний) маршрут, стежка", g: "m", ex: "Szliśmy czerwonym szlakiem.", exRu: "Ми йшли червоним маршрутом.", note: "Споріднене з укр. «шлях»; iść szlakiem — оруд. в., як укр. «йти стежкою»" },
        { pl: "schronisko", ru: "гірський притулок; притулок для тварин", g: "n", ex: "Nocowaliśmy w schronisku.", exRu: "Ми ночували в гірському притулку." },
        { pl: "nocleg", ru: "нічліг, житло на ніч", g: "m", ex: "Znaleźliśmy tani nocleg w Zakopanem.", exRu: "Ми знайшли дешевий нічліг у Закопаному." },
        { pl: "kolejka linowa", ru: "канатна дорога", g: "f", ex: "Wjechaliśmy kolejką linową na Kasprowy Wierch.", exRu: "Ми піднялися канатною дорогою на Каспровий Верх." },
        { pl: "widok", ru: "вид (краєвид)", g: "m", ex: "Z okna był piękny widok na góry.", exRu: "З вікна був чудовий вид на гори.", note: "widok na + знах. в." },
        { pl: "zabłądzić", ru: "заблукати", ex: "We mgle zabłądziłam.", exRu: "У тумані я заблукала.", note: "Без się — як і українське «заблукати»!" },
        { pl: "zmoknąć", ru: "змокнути, промокнути", ex: "Zmokliśmy do suchej nitki.", exRu: "Ми промокли до нитки.", note: "мин.: zmókł, zmokła, zmokłem (як mógł — mogła; пор. укр. «змок — змокла»)" },
        { pl: "oscypek", ru: "осципек (копчений овечий сир)", g: "m", ex: "Na Krupówkach kupiłem oscypek z żurawiną.", exRu: "На Крупувках я купив осципек із журавлиною." },
        { pl: "przewodnik", ru: "гід, провідник; путівник", g: "m", ex: "Szliśmy z przewodnikiem.", exRu: "Ми йшли з гідом.", note: "оруд. в.: z przewodnikiem" }
      ],

      grammar: {
        title: "Підсумок модуля 2: минулий час і орудний відмінок",
        html: `<h4>Минулий час</h4>
<table class="g"><tr><th></th><th>ч. р. / є чоловік</th><th>ж. р. (с. р.) / немає чоловіків</th></tr>
<tr><td>ja</td><td class="pl">robiłem</td><td class="pl">robiłam</td></tr>
<tr><td>ty</td><td class="pl">robiłeś</td><td class="pl">robiłaś</td></tr>
<tr><td>on / ona / ono</td><td class="pl">robił</td><td class="pl">robiła / robiło</td></tr>
<tr><td>my</td><td class="pl">robiliśmy</td><td class="pl">robiłyśmy</td></tr>
<tr><td>wy</td><td class="pl">robiliście</td><td class="pl">robiłyście</td></tr>
<tr><td>oni / one</td><td class="pl">robili</td><td class="pl">robiły</td></tr>
</table>
<p>Множина: <b>-li</b>, якщо в групі є чоловік; <b>-ły</b> — жінки, діти, тварини, предмети. На «ви» з <span class="pl">pan / pani</span> — 3-тя особа: <span class="pl">Gdzie pani była?</span> У розмовному мовленні закінчення може «переїхати»: <span class="pl">Gdzieś był? = Gdzie byłeś?</span></p>
<p>Дієслова на <b>-eć</b>: в однині e → a (<span class="pl">chciał, wiedział, zapomniała</span>), а в чоловічо-особовій множині e повертається (<span class="pl">chcieli, wiedzieli, zapomnieli</span>).</p>
<table class="g"><tr><th>інфінітив</th><th>він</th><th>вона</th><th>вони (є чоловік)</th></tr>
<tr><td class="pl">mieć</td><td class="pl">miał</td><td class="pl">miała</td><td class="pl">mieli</td></tr>
<tr><td class="pl">iść / pójść</td><td class="pl">szedł / poszedł</td><td class="pl">szła / poszła</td><td class="pl">szli / poszli</td></tr>
<tr><td class="pl">jeść</td><td class="pl">jadł</td><td class="pl">jadła</td><td class="pl">jedli</td></tr>
<tr><td class="pl">móc</td><td class="pl">mógł</td><td class="pl">mogła</td><td class="pl">mogli</td></tr>
<tr><td class="pl">wziąć</td><td class="pl">wziął</td><td class="pl">wzięła</td><td class="pl">wzięli</td></tr>
<tr><td class="pl">zmoknąć</td><td class="pl">zmókł</td><td class="pl">zmokła</td><td class="pl">zmokli</td></tr>
</table>
<h4>Орудний відмінок (kim? czym?)</h4>
<table class="g"><tr><th></th><th>іменники</th><th>прикметники</th></tr>
<tr><td>ч. р. / с. р.</td><td class="pl">autobusem, pociągiem, metrem</td><td class="pl">nowym, polskim</td></tr>
<tr><td>ж. р. і ч. р. на -a</td><td class="pl">kawą, kierowcą</td><td class="pl">nową, polską</td></tr>
<tr><td>займенники</td><td class="pl">ze mną, z tobą, z nim, z nią</td><td class="pl">z nami, z wami, z nimi</td></tr>
</table>
<ul>
<li><b>być / zostać + ким:</b> <span class="pl">Był kierowcą. Została lekarką.</span> Але: <span class="pl">To jest kierowca.</span> <span class="pl">Pracuję jako kierowca.</span></li>
<li><b>z + ким / чим:</b> <span class="pl">z mamą, ze mną, herbata z cytryną</span></li>
<li><b>транспорт і шлях:</b> <span class="pl">pociągiem, samolotem, iść szlakiem</span></li>
<li><b>interesować się / zajmować się + чим:</b> <span class="pl">Interesuję się historią.</span></li>
<li><b>де? przed, za, nad, pod, między:</b> <span class="pl">przed schroniskiem, nad morzem</span> (куди? — знахідний: <span class="pl">nad morze</span>)</li>
</ul>
<div class="tip">П’ять головних пасток модуля: 1) <span class="pl">byłem</span>, а не «ja był» (калька з «я був»); 2) <span class="pl">dzieci były</span> — діти не чоловічо-особовий рід; 3) <span class="pl">jestem lekarzem</span>, але <span class="pl">pracuję jako lekarz</span> (а не дослівно «працюю лікарем»); 4) <span class="pl">jadę autobusem</span>, а не «na autobusie»; 5) відпочиваємо <span class="pl">nad morzem</span>, а <span class="pl">na morzu</span> — це «у відкритому морі».</div>`
      },

      exercises: [
        { type: "gap", q: "Na szczęście ___ na ostatnią kolejkę. (zdążyć; my — у групі є чоловік)", answers: ["zdążyliśmy"], explain: "Ми, і в групі є чоловік → -liśmy: zdążyliśmy." },
        { type: "gap", q: "Michał ___ do pracy pieszo, bo autobus się spóźnił. (pójść)", answers: ["poszedł"], explain: "pójść → poszedł (він), poszła (вона)." },
        { type: "gap", q: "Szliśmy ___ szlakiem. (czerwony)", answers: ["czerwonym"], explain: "Iść szlakiem — орудний («маршрутом», як укр. «йти стежкою»); прикметник ч. р. → -ym: czerwonym." },
        { type: "choice", q: "Moje koleżanki ___ wczoraj w górach.", options: ["były", "byli", "był"], answer: 0, explain: "Тільки жінки → нечоловічо-особова форма: były." },
        { type: "choice", q: "Wczoraj Piotr i Ania ___ oscypki na Krupówkach.", options: ["jedli", "jadły", "jadł"], answer: 0, explain: "Пйотр + Аня — у групі є чоловік → jedli (з e!)." },
        { type: "gap", q: "Pan Józek był kiedyś ___. (nauczyciel)", answers: ["nauczycielem"], explain: "być + професія → орудний, у будь-якому часі: był nauczycielem." },
        { type: "gap", q: "Pojechaliśmy do Zakopanego ___. (pociąg)", answers: ["pociągiem"], explain: "Транспорт — орудний без прийменника; після g — -iem: pociągiem." },
        { type: "choice", q: "Pracuję jako ___ w szpitalu.", options: ["pielęgniarka", "pielęgniarką", "pielęgniarkę"], answer: 0, explain: "Після jako — називний: pracuję jako pielęgniarka. Але: jestem pielęgniarką." },
        { type: "gap", q: "Interesuję się ___ historią. (polski)", answers: ["polską"], explain: "interesować się + орудний; прикметник ж. р. → -ą." },
        { type: "gap", q: "Zrobiliśmy sobie zdjęcie przed ___. (schronisko)", answers: ["schroniskiem"], explain: "przed + орудний (де?); після k — -iem: schroniskiem." },
        { type: "match", q: "З’єднайте форму минулого часу з інфінітивом", pairs: [["szła", "iść"], ["jadł", "jeść"], ["mógł", "móc"], ["wzięła", "wziąć"], ["zmokłem", "zmoknąć"], ["miała", "mieć"]], explain: "Неправильні форми модуля: szła, jadł, mógł, wzięła, zmokłem, miała." },
        { type: "order", ru: "Учора ми (ч.) заблукали в горах і промокли.", words: ["Wczoraj", "zabłądziliśmy", "w", "górach", "i", "zmokliśmy."], alt: ["Wczoraj w górach zabłądziliśmy i zmokliśmy."], explain: "Zabłądzić — без się, як і «заблукати»! Ми (з чоловіками) → -liśmy: zabłądziliśmy, zmokliśmy." },
        { type: "translate", ru: "Я (ч.) був там із дружиною.", answers: ["Byłem tam z żoną.", "Byłem tam ze swoją żoną.", "Byłem tam z moją żoną."], explain: "Чоловік про себе: byłem; z + орудний: z żoną." },
        { type: "translate", ru: "Він займається фотографією.", answers: ["Zajmuje się fotografią.", "On zajmuje się fotografią."], explain: "zajmować się + орудний: fotografią." },
        { type: "choice", q: "Що означає «Gdzieś była tak długo?»", options: ["Де ти була так довго?", "Десь вона довго була.", "Де вона була так довго?"], answer: 0, explain: "Рухоме закінчення: Gdzieś była? = Gdzie byłaś? — «Де ти була?»." }
      ],

      pronunciation: {
        focus: "Повторення: ł, ą / ę, ó, h",
        tip: `<p>Повторюємо звуки модуля:</p>
<ul><li><b>ł</b> = [ў], як українське «в» у «вовк»: <span class="pl">byłem, poszłam</span>; <b>l</b> — світле: <span class="pl">lato</span>.</li>
<li><b>ą / ę</b> перед ł і l втрачають носовість: <span class="pl">wzięła</span> [вж’еўа]; кінцеве <b>ę</b> ≈ [е] (<span class="pl">proszę</span>), кінцеве <b>ą</b> — носове (<span class="pl">z mamą</span>); перед b / p — [ом] / [ем]: <span class="pl">ząb</span>.</li>
<li><b>ó</b> = [у]: <span class="pl">córka</span>; <b>h</b> = <b>ch</b> = глухе [х], а не українське [г]: <span class="pl">hala, chata</span>.</li>
<li>Наголос у формах <span class="pl">-liśmy</span> падає на третій склад від кінця: <span class="pl">BY-li-śmy, JE-dli-śmy</span>.</li></ul>`,
        items: [
          { type: "listen", text: "Wzięłam plecak i poszłam na szlak.", ru: "Я взяла рюкзак і пішла на маршрут.", note: "wzięłam — ę перед ł без носового призвуку" },
          { type: "minimal", options: ["mila", "miła"], ru: ["миля", "мила, приємна"] },
          { type: "minimal", options: ["ręka", "ręką"], ru: ["рука", "рукою"] },
          { type: "listen", text: "Hala Gąsienicowa", ru: "Хала Гонсєніцова (гірська полонина в Татрах)", note: "h = глухе [х]; ą перед ś — справжній носовий" },
          { type: "stress", word: "zabłądziłem", syllables: ["za", "błą", "dzi", "łem"], answer: 2 },
          { type: "stress", word: "schronisko", syllables: ["schro", "ni", "sko"], answer: 1 },
          { type: "dictation", text: "Latem byliśmy z córką nad morzem i jedliśmy lody." }
        ]
      },

      reading: {
        title: "Zakopane, deszcz i oscypki",
        text: "W zeszły piątek zrobiliśmy sobie wypad w Tatry: ja, mój chłopak Kuba i nasza przyjaciółka Ewa. Pojechaliśmy nocnym pociągiem z Gdańska. Podróż trwała prawie dwanaście godzin, ale spaliśmy jak dzieci. Rano na dworcu w Zakopanem przywitał nas zapach oscypków. Zostawiliśmy plecaki w pensjonacie i od razu pojechaliśmy busem do Kuźnic.\n\nStamtąd wjechaliśmy kolejką linową na Kasprowy Wierch. Na górze było zimno i wietrznie, ale widok był niesamowity! Kuba jest zapalonym fotografem, więc zrobił chyba tysiąc zdjęć. Potem poszliśmy szlakiem w stronę Hali Gąsienicowej. Ewa szła pierwsza z mapą w telefonie, ale nagle padła jej bateria… i zabłądziliśmy. Na dodatek zaczął padać deszcz. Zmokliśmy do suchej nitki.\n\nNa szczęście po godzinie spotkaliśmy przewodnika z grupą turystów. Pan Józek był prawdziwym góralem: miał kapelusz, wąsy i mnóstwo historii. Zaprowadził nas do schroniska. Tam piliśmy gorącą herbatę z cytryną, jedliśmy pierogi i słuchaliśmy jego opowieści o niedźwiedziach. Ewa rozmawiała z panem Józkiem przez cały wieczór — okazało się, że interesuje się historią Podhala tak samo jak on.\n\nW niedzielę poszłyśmy z Ewą na Krupówki, a Kuba został w pensjonacie, bo był zmęczony. Kupiłyśmy oscypki dla rodziców i drewnianą ciupagę dla Kuby. Był zachwycony i od razu zrobił sobie z nią selfie. Wieczorem wszyscy wróciliśmy pociągiem do Gdańska. Następnym razem znowu jedziemy w góry — ale z papierową mapą!",
        glossary: [
          { pl: "wjechaliśmy", ru: "піднялися (транспортом)" },
          { pl: "niesamowity", ru: "неймовірний, приголомшливий" },
          { pl: "w stronę", ru: "у бік, у напрямку" },
          { pl: "padła jej bateria", ru: "у неї сіла батарея" },
          { pl: "Na dodatek", ru: "На додачу, до того ж" },
          { pl: "do suchej nitki", ru: "до нитки" },
          { pl: "góralem", ru: "гуралем, горянином (мешканцем польських гір)" },
          { pl: "okazało się", ru: "виявилося" },
          { pl: "pensjonacie", ru: "гостьовому будинку, пансіонаті" },
          { pl: "ciupagę", ru: "ципагу (гуральський топірець-палицю, популярний сувенір; пор. гуцульську бартку)" }
        ],
        questions: [
          { type: "tf", q: "Przyjaciele pojechali w Tatry samochodem.", answer: false, explain: "Pojechaliśmy nocnym pociągiem z Gdańska — вони їхали нічним потягом." },
          { type: "choice", q: "Dlaczego zabłądzili?", options: ["Bo w telefonie Ewy padła bateria.", "Bo przewodnik pomylił drogę.", "Bo zaczął padać śnieg."], answer: 0, explain: "Єва йшла з картою в телефоні, але в неї сіла батарея." },
          { type: "tf", q: "Pan Józek zaprowadził ich do schroniska.", answer: true, explain: "Zaprowadził nas do schroniska — гід відвів їх до гірського притулку." },
          { type: "choice", q: "Czym interesuje się Ewa?", options: ["Fotografią.", "Historią Podhala.", "Wspinaczką."], answer: 1, explain: "Okazało się, że interesuje się historią Podhala. Фотографією захоплюється Куба." },
          { type: "choice", q: "Kto poszedł w niedzielę na Krupówki?", options: ["Kuba i Ewa.", "Narratorka i Ewa.", "Wszyscy troje."], answer: 1, explain: "Poszłyśmy z Ewą — як укр. «ми з Євою пішли», тобто оповідачка і Єва (дві жінки → -łyśmy); Куба залишився в пансіонаті." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля. Опишіть для польського блогу про подорожі незабутню поїздку (вихідні в горах, на морі чи на озерах): коли, чим і з ким ви їхали; що робили; що пішло не так; кого зустріли (ким була ця людина); чим запам’яталося місце. Використайте минулий час (зокрема множину й неправильні форми) та орудний відмінок.",
        minWords: 60,
        maxWords: 90,
        useWords: ["wypad", "szlak", "zabłądzić", "widok"],
        checklist: [
          { label: "Щонайменше 5 дієслів у минулому часі (однина й множина)", pattern: "\\p{L}+(łem|łam|łeś|łaś|ł|ła|ło|liśmy|łyśmy|li|ły)(?!\\p{L})", min: 5 },
          { label: "Щонайменше 2 неправильні форми (poszliśmy, jedliśmy, wziąłem, mógł…)", pattern: "(szedł|szł|szli|jadł|jedli|mogł|mógł|miał|mieli|wzię|wziął|zaczął|zaczęł|zmókł|zmokł)", min: 2 },
          { label: "Щонайменше 3 форми орудного (pociągiem, z kolegą, przed schroniskiem…)", pattern: "\\p{L}{3,}(?<!jest)(em|ą|ym|im)(?!\\p{L})", min: 3 }
        ],
        model: "W maju zrobiliśmy z żoną wypad na Mazury. Pojechaliśmy samochodem, a na miejscu wypożyczyliśmy łódź. Nasz przewodnik, pan Marek, był kiedyś nauczycielem, a teraz jest zapalonym żeglarzem. Pierwszego dnia poszliśmy szlakiem nad jeziorem i oczywiście zabłądziliśmy. Potem zaczął padać deszcz! Na szczęście znaleźliśmy małą tawernę. Jedliśmy tam smażoną rybę i piliśmy gorącą herbatę z cytryną. Widok na jezioro był piękny. Następnym razem weźmiemy lepszą mapę!"
      }
    }
  ]
});
