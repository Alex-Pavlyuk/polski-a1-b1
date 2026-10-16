// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m04",
  n: 4,
  level: "A2",
  title: "Plany",
  titleRu: "Плани",
  summary: "Ви розумієте, чим недоконаний вид відрізняється від доконаного, знаєте головні видові пари та впевнено говорите про майбутнє: про хатні справи, відпустку, плани й мрії.",
  lessons: [

    // ───────────────────────── УРОК 1 ─────────────────────────
    {
      id: "m04l1",
      title: "Robić czy zrobić?",
      titleRu: "Вид дієслова: ідея і пари з префіксами",
      topic: "Obowiązki domowe",
      review: false,
      minutes: 30,
      goals: [
        "Зрозуміти різницю між недоконаним (процес) і доконаним (результат) видом",
        "Вивчити пари з префіксами: robić/zrobić, sprzątać/posprzątać, myć/umyć, prać/wyprać…",
        "Розповісти про хатні справи: що роблю регулярно і що вже зробив(-ла)",
        "Ставити наголос на передостанній склад, навіть якщо в схожому українському слові він інший"
      ],

      vocab: [
        { pl: "obowiązek", g: "m", ru: "обов’язок", ex: "Mam w domu dużo obowiązków.", exRu: "У мене вдома багато обов’язків.", note: "мн. obowiązki; obowiązki domowe — хатні справи" },
        { pl: "sprzątać / posprzątać", ru: "прибирати / прибрати", ex: "Muszę posprzątać pokój przed imprezą.", exRu: "Мені треба прибрати кімнату перед вечіркою." },
        { pl: "myć / umyć", ru: "мити / помити, вимити", ex: "Umyłem wszystkie okna w kuchni.", exRu: "Я помив усі вікна на кухні.", note: "ДВ — umyć (а не «pomyć», як підказує укр. «помити»)" },
        { pl: "zmywać / pozmywać", ru: "мити / помити (посуд)", ex: "Kto dziś zmywa naczynia?", exRu: "Хто сьогодні миє посуд?", note: "про посуд зазвичай кажуть zmywać" },
        { pl: "naczynia", g: "pl", ru: "посуд", ex: "W zlewie jest góra brudnych naczyń.", exRu: "У мийці гора брудного посуду.", note: "р. в. мн. naczyń; у польській це множина, а укр. «посуд» — однина" },
        { pl: "prać / wyprać", ru: "прати / випрати", ex: "Wyprałam wszystkie ręczniki.", exRu: "Я випрала всі рушники.", note: "теп. ч.: piorę, pierzesz, piorą" },
        { pl: "prasować / wyprasować", ru: "прасувати / випрасувати", ex: "Nie lubię prasować koszul.", exRu: "Не люблю прасувати сорочки." },
        { pl: "pranie", g: "n", ru: "прання; білизна (для прання)", ex: "Pranie wisi na balkonie.", exRu: "Білизна висить на балконі.", note: "nastawić pranie — запустити прання" },
        { pl: "śmieci", g: "pl", ru: "сміття", ex: "Muszę jeszcze wynieść śmieci.", exRu: "Мені ще треба винести сміття.", note: "wynosić / wynieść śmieci — виносити / винести сміття; у польській — множина" },
        { pl: "odkurzacz", g: "m", ru: "пилосос", ex: "Odkurzacz jest w szafie w przedpokoju.", exRu: "Пилосос у шафі в передпокої.", note: "odkurzać — пилососити" },
        { pl: "zmywarka", g: "f", ru: "посудомийна машина", ex: "Talerze są już w zmywarce.", exRu: "Тарілки вже в посудомийці." },
        { pl: "podłoga", g: "f", ru: "підлога", ex: "Kot śpi na podłodze.", exRu: "Кіт спить на підлозі.", note: "як укр. «підлога»! А pół — це «пів, половина»" },
        { pl: "bałagan", g: "m", ru: "безлад, розгардіяш", ex: "W pokoju syna jest straszny bałagan.", exRu: "У кімнаті сина жахливий безлад." },
        { pl: "gotować / ugotować", ru: "варити, готувати / зварити, приготувати", ex: "Ugotowałem zupę pomidorową.", exRu: "Я зварив томатний суп.", note: "przygotować — підготувати" }
      ],

      grammar: {
        title: "Вид дієслова: недоконаний і доконаний",
        html: `<p>Добра новина: польський вид улаштований майже так само, як український. У більшості дієслів є пара: <b>недоконаний вид</b> (НДВ, <i>czasownik niedokonany</i>) і <b>доконаний вид</b> (ДВ, <i>czasownik dokonany</i>).</p>
<ul>
<li><b>НДВ</b> — процес, тривалість, повторення, звичка: <span class="pl">Codziennie sprzątam kuchnię.</span> — Щодня прибираю кухню.</li>
<li><b>ДВ</b> — результат, одна завершена дія: <span class="pl">Posprzątałam kuchnię.</span> — Я прибрала кухню (тепер чисто).</li>
</ul>
<h4>Пари з префіксами</h4>
<p>Найчастіший спосіб утворити ДВ — додати префікс. Часто він збігається з українським («робити → зробити», «прати → випрати»), але <b>не завжди</b>!</p>
<table class="g">
<tr><th>НДВ</th><th>ДВ</th><th>українською</th></tr>
<tr><td class="pl">robić</td><td class="pl">zrobić</td><td>робити / зробити</td></tr>
<tr><td class="pl">sprzątać</td><td class="pl">posprzątać</td><td>прибирати / прибрати</td></tr>
<tr><td class="pl">myć</td><td class="pl">umyć</td><td>мити / помити</td></tr>
<tr><td class="pl">zmywać</td><td class="pl">pozmywać</td><td>мити / помити (посуд)</td></tr>
<tr><td class="pl">prać</td><td class="pl">wyprać</td><td>прати / випрати</td></tr>
<tr><td class="pl">prasować</td><td class="pl">wyprasować</td><td>прасувати / випрасувати</td></tr>
<tr><td class="pl">gotować</td><td class="pl">ugotować</td><td>варити / зварити</td></tr>
<tr><td class="pl">piec</td><td class="pl">upiec</td><td>пекти / спекти</td></tr>
<tr><td class="pl">czytać</td><td class="pl">przeczytać</td><td>читати / прочитати</td></tr>
<tr><td class="pl">jeść</td><td class="pl">zjeść</td><td>їсти / з’їсти</td></tr>
<tr><td class="pl">pić</td><td class="pl">wypić</td><td>пити / випити</td></tr>
<tr><td class="pl">płacić</td><td class="pl">zapłacić</td><td>платити / заплатити</td></tr>
</table>
<div class="tip">Пастка: «помити» — <span class="pl">umyć</span>, а не «po-». Водночас багато пар збігаються з українськими: «випрати» — <span class="pl">wyprać</span>, «випрасувати» — <span class="pl">wyprasować</span>, «зробити» — <span class="pl">zrobić</span>. Але «прибрати», «зварити», «спекти», «прочитати» мають у польській інші префікси. Український префікс механічно не переносьте — учіть пари цілком, як одне слово.</div>
<h4>Де вид потрібен вже зараз</h4>
<p><b>1. Після muszę, chcę, mogę, mam + інфінітив.</b> Конкретне завдання з результатом — ДВ; «взагалі, регулярно» — НДВ:</p>
<div class="ex"><span class="pl">Muszę dziś wyprasować koszulę.</span> — Мені треба сьогодні випрасувати сорочку.</div>
<div class="ex"><span class="pl">Nie lubię prasować.</span> — Не люблю прасувати. (після <b>lubić</b> — завжди НДВ)</div>
<p><b>2. У минулому часі.</b> Процес — НДВ, результат — ДВ:</p>
<div class="ex"><span class="pl">Wczoraj prasowałem dwie godziny.</span> — Учора я прасував дві години.</div>
<div class="ex"><span class="pl">Wyprasowałem wszystkie koszule.</span> — Я випрасував усі сорочки.</div>
<h4>Слова-підказки</h4>
<table class="g">
<tr><th>зазвичай НДВ</th><th>зазвичай ДВ</th></tr>
<tr><td class="pl">codziennie, często, zawsze, długo</td><td class="pl">już, w końcu, wreszcie, wszystko</td></tr>
<tr><td class="pl">przez godzinę</td><td class="pl">w godzinę</td></tr>
</table>
<div class="tip">Пастка «за годину»: результат за певний час — <span class="pl">w godzinę</span>: <span class="pl">Posprzątałam mieszkanie w godzinę.</span> — Я прибрала квартиру за годину. А <span class="pl">przez godzinę</span> — «протягом години» (НДВ): <span class="pl">Sprzątałam przez godzinę.</span> Польське <i>za godzinę</i> означає лише «через годину» — як в українському «повернуся за годину»!</div>
<p>У ДВ немає теперішнього часу: <span class="pl">zrobię</span> — це «зроблю» (майбутнє), як і в українській. Детально — в уроці 4.</p>`
      },

      exercises: [
        { type: "choice", q: "Codziennie po kolacji ___ naczynia. (ja)", options: ["zmywam", "pozmywam", "pozmywałem"], answer: 0, explain: "«Codziennie» — дія, що повторюється → НДВ у теперішньому часі: zmywam. Pozmywam — це майбутнє («помию»)." },
        { type: "choice", q: "Mama przyjeżdża za godzinę! Muszę szybko ___ kuchnię.", options: ["sprzątać", "posprzątać"], answer: 1, explain: "Конкретне завдання з результатом (кухня має стати чистою) → ДВ: muszę posprzątać." },
        { type: "gap", q: "W końcu ___ wszystkie koszule! (prasować / wyprasować, ja – kobieta)", answers: ["wyprasowałam"], explain: "«W końcu» + результат («усі сорочки») → ДВ у минулому: wyprasowałam." },
        { type: "gap", q: "Przez całą sobotę ___ mieszkanie. (sprzątać / posprzątać, my)", answers: ["sprzątaliśmy", "sprzątałyśmy"], explain: "«Przez całą sobotę» — тривалість, процес → НДВ: sprzątaliśmy (sprzątałyśmy — якщо лише жінки)." },
        { type: "match", q: "З’єднайте дієслово НДВ з його парою ДВ", pairs: [["myć", "umyć"], ["prać", "wyprać"], ["czytać", "przeczytać"], ["gotować", "ugotować"], ["zmywać", "pozmywać"], ["płacić", "zapłacić"]], explain: "Префікси не завжди збігаються з українськими — пари запам’ятовуємо цілком: umyć, wyprać, przeczytać, ugotować, pozmywać, zapłacić." },
        { type: "order", ru: "Мені треба випрати й випрасувати сорочки.", words: ["Muszę", "wyprać", "i", "wyprasować", "koszule."], alt: ["Koszule muszę wyprać i wyprasować."], explain: "Muszę + інфінітив ДВ: конкретне завдання, потрібен результат." },
        { type: "choice", q: "Як сказати «Я прибрала квартиру за годину»?", options: ["Posprzątałam mieszkanie w godzinę.", "Sprzątałam mieszkanie w godzinę.", "Posprzątałam mieszkanie za godzinę."], answer: 0, explain: "«За годину» (результат) = w godzinę + ДВ. «Za godzinę» означає лише «через годину»." },
        { type: "gap", q: "Nie lubię ___. (prasować / wyprasować)", answers: ["prasować"], explain: "Після lubić / nie lubić — НДВ: ідеться про дію взагалі, а не про результат." },
        { type: "choice", q: "Lodówka jest pusta! Kto ___ cały sernik?", options: ["jadł", "zjadł", "je"], answer: 1, explain: "Результат очевидний — сирника більше немає → ДВ: zjadł («з’їв»)." },
        { type: "translate", ru: "Я вже помив посуд.", answers: ["Już pozmywałem naczynia.", "Pozmywałem już naczynia.", "Już umyłem naczynia.", "Umyłem już naczynia."], explain: "«Вже» + результат → ДВ: pozmywałem (або umyłem) naczynia. «Помив» — чоловічий рід: -łem." }
      ],

      pronunciation: {
        focus: "Наголос на передостанньому складі",
        tip: `<p>У польській наголос майже завжди падає на <b>передостанній склад</b>: <span class="pl">podłoga</span> (po-<b>dło</b>-ga), <span class="pl">zmywarka</span> (zmy-<b>war</b>-ka). Український наголос вільний і рухомий, тому ми мимоволі переносимо його зі схожих українських слів: <i>телефОн</i> → правильно <span class="pl">telefon</span> (te-<b>le</b>-fon), <i>помідОр</i> → <span class="pl">pomidor</span> (po-<b>mi</b>-dor), <i>проблЕма</i> → <span class="pl">problem</span> (<b>pro</b>-blem).</p>
<p>Як рахувати склади: за голосними <b>a, ą, e, ę, i, o, ó, u, y</b>. Але <b>i перед голосним</b> — лише знак м’якості, окремого складу не утворює: <span class="pl">obowiązki</span> = o-bo-<b>wiąz</b>-ki. Кожне зі сполучень sz, cz, rz, ch, dz — це один звук.</p>
<p>Коли слово подовжується, наголос «переїжджає»: <span class="pl">pokój</span> (<b>po</b>-kój) → <span class="pl">pokoju</span> (po-<b>ko</b>-ju) → <span class="pl">pokojami</span> (po-ko-<b>ja</b>-mi).</p>`,
        items: [
          { type: "listen", text: "telefon, pomidor, problem", ru: "телефон, помідор, проблема", note: "te-LE-fon, po-MI-dor, PRO-blem — не по-українському!" },
          { type: "stress", word: "podłoga", syllables: ["po", "dło", "ga"], answer: 1 },
          { type: "stress", word: "odkurzacz", syllables: ["od", "ku", "rzacz"], answer: 1 },
          { type: "stress", word: "obowiązki", syllables: ["o", "bo", "wiąz", "ki"], answer: 2 },
          { type: "stress", word: "posprzątamy", syllables: ["po", "sprzą", "ta", "my"], answer: 2 },
          { type: "listen", text: "pokój, pokoju, pokojami", ru: "кімната (у різних відмінках)", note: "PO-kój → po-KO-ju → po-ko-JA-mi: наголос «переїжджає»" },
          { type: "dictation", text: "Muszę wyprać i wyprasować koszule." }
        ]
      },

      reading: {
        title: "Wielkie sprzątanie",
        text: "W sobotę rano pani Ewa Nowak dostała SMS-a od teściowej: „Będę u was o piętnastej. Buziaki!”. Ewa spojrzała na mieszkanie. Wszędzie był straszny bałagan.\n\n— Kochani, mamy cztery godziny! — krzyknęła. — Każdy ma swój obowiązek!\n\nMąż Ewy, Tomek, przez godzinę odkurzał salon, a potem umył podłogę w kuchni. Szesnastoletnia Zosia wyprała firanki i wyprasowała obrus. Mały Kuba miał tylko wynieść śmieci, ale wynosił je czterdzieści minut, bo po drodze rozmawiał z sąsiadem o piłce nożnej.\n\nEwa ugotowała rosół i upiekła szarlotkę. Niestety zmywarka się zepsuła, więc wszystkie naczynia trzeba było pozmywać ręcznie. Zmywali całą rodziną i żartowali, że to nowa dyscyplina olimpijska.\n\nO piętnastej wszystko było gotowe. Mieszkanie błyszczało. Zadzwonił domofon. Do mieszkania weszła teściowa, rozejrzała się i powiedziała:\n\n— Ojej, po co sprzątaliście? Przecież dzisiaj zapraszam was na obiad do restauracji!",
        glossary: [
          { pl: "teściowa", ru: "свекруха / теща" },
          { pl: "spojrzała", ru: "подивилася, глянула" },
          { pl: "firanki", ru: "фіранки (тюль)" },
          { pl: "obrus", ru: "скатертина" },
          { pl: "po drodze", ru: "дорогою, по дорозі" },
          { pl: "szarlotkę", ru: "шарлотку (яблучний пиріг)" },
          { pl: "się zepsuła", ru: "зламалася (zepsuć się)" },
          { pl: "ręcznie", ru: "вручну" },
          { pl: "błyszczało", ru: "блищало, сяяло" },
          { pl: "Przecież", ru: "адже, ж" }
        ],
        questions: [
          { type: "tf", q: "Teściowa miała przyjść wieczorem.", answer: false, explain: "В SMS: «o piętnastej» — о 15:00, удень." },
          { type: "choice", q: "Co zrobiła Zosia?", options: ["Ugotowała rosół.", "Wyprała firanki i wyprasowała obrus.", "Odkurzyła salon."], answer: 1, explain: "«Zosia wyprała firanki i wyprasowała obrus». Rosół ugotowała Ewa, salon odkurzał Tomek." },
          { type: "tf", q: "Kuba szybko wyniósł śmieci.", answer: false, explain: "«Wynosił je czterdzieści minut» — НДВ підкреслює, як довго тривав процес." },
          { type: "choice", q: "Dlaczego rodzina zmywała naczynia ręcznie?", options: ["Bo zmywarka się zepsuła.", "Bo nie mają zmywarki.", "Bo teściowa nie lubi zmywarek."], answer: 0, explain: "«Niestety zmywarka się zepsuła»." },
          { type: "tf", q: "Teściowa zaprasza rodzinę na obiad do restauracji.", answer: true, explain: "«Przecież dzisiaj zapraszam was na obiad do restauracji!» — усе прибирання було марним." }
        ]
      },

      writing: {
        prompt: "Ви винаймаєте квартиру разом із другом/подругою. Завтра вранці ви їдете на вихідні. Напишіть записку співмешканцеві (40–80 слів): 1) що ви вже зробили по господарству (2–3 справи, ДВ у минулому); 2) що ви зазвичай робите по суботах (НДВ); 3) про що просите співмешканця (możesz + інфінітив ДВ: wynieść śmieci, umyć podłogę…); 4) коли повернетеся.",
        minWords: 40,
        maxWords: 80,
        useWords: ["posprzątać", "pozmywać", "śmieci", "pranie"],
        checklist: [
          { label: "Щонайменше 3 дієслова в минулому часі на -łem/-łam", pattern: "\\p{L}+(łem|łam)(?!\\p{L})", min: 3 },
          { label: "Прохання: możesz + інфінітив", pattern: "możesz", min: 1 },
          { label: "Щонайменше 2 слова-підказки виду: już, zwykle, codziennie, zawsze", pattern: "(?<!\\p{L})(już|zwykle|codziennie|zawsze)(?!\\p{L})", min: 2 }
        ],
        model: "Cześć Marku! Jutro rano wyjeżdżam do rodziców do Lublina. Już posprzątałam łazienkę i pozmywałam wszystkie naczynia. Wyprałam też ręczniki – pranie wisi na balkonie. Zwykle w sobotę sprzątam całe mieszkanie, ale tym razem nie mam czasu. Mam prośbę: możesz wieczorem wynieść śmieci i umyć podłogę w kuchni? Wrócę w niedzielę wieczorem. Dzięki! Ania"
      }
    },

    // ───────────────────────── УРОК 2 ─────────────────────────
    {
      id: "m04l2",
      title: "Wziąć, powiedzieć, obejrzeć",
      titleRu: "Видові пари: суфікси та різні корені",
      topic: "Media i rozrywka",
      review: false,
      minutes: 30,
      goals: [
        "Розпізнавати видові пари із суфіксами: -ać/-ić, -ywać/-iwać, -awać",
        "Вивчити пари з різними коренями: brać/wziąć, mówić/powiedzieć, oglądać/obejrzeć",
        "Говорити про серіали, соцмережі та застосунки",
        "Правильно наголошувати matematyka, uniwersytet, Rzeczpospolita"
      ],

      vocab: [
        { pl: "oglądać / obejrzeć", ru: "дивитися / подивитися (фільм, серіал)", ex: "Wczoraj obejrzeliśmy nowy polski film.", exRu: "Учора ми подивилися новий польський фільм.", note: "obejrzę, obejrzysz; мин.: obejrzałem / obejrzałam; пор. укр. «переглянути фільм»" },
        { pl: "włączać / włączyć", ru: "вмикати / увімкнути", ex: "Zawsze włączam radio w samochodzie.", exRu: "Я завжди вмикаю радіо в машині." },
        { pl: "wyłączać / wyłączyć", ru: "вимикати / вимкнути", ex: "Wyłączyłam telefon w kinie.", exRu: "Я вимкнула телефон у кіно." },
        { pl: "ściągać / ściągnąć", ru: "завантажувати / завантажити (розм. стягувати / стягнути)", ex: "Ściągnąłem nową aplikację.", exRu: "Я завантажив новий застосунок.", note: "розм.; офіційно: pobierać / pobrać" },
        { pl: "nagrywać / nagrać", ru: "записувати / записати (відео, звук)", ex: "Nagrałam filmik dla babci.", exRu: "Я записала відео для бабусі.", note: "теп. ч.: nagrywam" },
        { pl: "udostępniać / udostępnić", ru: "поширювати / поширити (допис), ділитися", ex: "Mama udostępnia wszystkie przepisy na Facebooku.", exRu: "Мама поширює всі рецепти у Фейсбуці." },
        { pl: "pokazywać / pokazać", ru: "показувати / показати", ex: "Kolega pokazał mi świetny podcast.", exRu: "Друг показав мені класний подкаст.", note: "теп. ч.: pokazuję, pokazujesz (як укр. «показую, показуєш»)" },
        { pl: "dostawać / dostać", ru: "отримувати / отримати", ex: "Codziennie dostaję dużo spamu.", exRu: "Щодня я отримую багато спаму.", note: "теп. ч.: dostaję (не «dostawam»!); пор. укр. розм. «дістати» — роздобути" },
        { pl: "zapraszać / zaprosić", ru: "запрошувати / запросити", ex: "Zapraszam cię na koncert!", exRu: "Запрошую тебе на концерт!", note: "zapraszać kogoś NA coś: na kawę, na film" },
        { pl: "odcinek", g: "m", ru: "серія, епізод", ex: "Ten serial ma dziesięć odcinków.", exRu: "У цьому серіалі десять серій." },
        { pl: "wiadomość", g: "f", ru: "повідомлення; новина", ex: "Dostałam wiadomość od Kuby.", exRu: "Я отримала повідомлення від Куби.", note: "wiadomości (мн.) — також «новини» на ТБ; не плутайте з укр. «відомість»" },
        { pl: "abonament", g: "m", ru: "передплата, тариф (абонплата)", ex: "Mój abonament telefoniczny kosztuje pięćdziesiąt złotych miesięcznie.", exRu: "Мій мобільний тариф коштує п’ятдесят злотих на місяць.", note: "хибний друг! «абонемент» у басейн — karnet" },
        { pl: "na żywo", ru: "наживо, у прямому ефірі", ex: "Oglądamy mecz na żywo.", exRu: "Ми дивимося матч у прямому ефірі.", note: "transmisja na żywo — пряма трансляція" },
        { pl: "kanał", g: "m", ru: "канал", ex: "Mój brat ma kanał na YouTubie.", exRu: "У мого брата канал на YouTube." }
      ],

      grammar: {
        title: "Видові пари: суфікси та різні корені",
        html: `<p>В уроці 1 ДВ утворювався за допомогою префікса. Але є й інші способи: пара може відрізнятися <b>суфіксом</b> або бути <b>зовсім різними словами</b>. Загальне правило: довша форма — зазвичай НДВ.</p>
<h4>1. НДВ на -ać ↔ ДВ на -ić / -yć</h4>
<table class="g">
<tr><th>НДВ</th><th>ДВ</th><th>українською</th></tr>
<tr><td class="pl">włączać</td><td class="pl">włączyć</td><td>вмикати / увімкнути</td></tr>
<tr><td class="pl">wyłączać</td><td class="pl">wyłączyć</td><td>вимикати / вимкнути</td></tr>
<tr><td class="pl">udostępniać</td><td class="pl">udostępnić</td><td>поширювати / поширити (допис)</td></tr>
<tr><td class="pl">zapraszać</td><td class="pl">zaprosić</td><td>запрошувати / запросити</td></tr>
<tr><td class="pl">wracać</td><td class="pl">wrócić</td><td>повертатися / повернутися</td></tr>
</table>
<p>Стежте за чергуваннями: <span class="pl">zapraszać → zaprosić</span> (sz → s, як в укр. «запрошувати → запросити»), <span class="pl">wracać → wrócić</span> (a → ó). Схожий тип: <span class="pl">ściągać → ściągnąć</span> (-ać → -nąć).</p>
<h4>2. НДВ на -ywać / -iwać / -awać ↔ ДВ без суфікса</h4>
<table class="g">
<tr><th>НДВ</th><th>ДВ</th><th>НДВ: «я» зараз</th></tr>
<tr><td class="pl">pokazywać</td><td class="pl">pokazać</td><td class="pl">pokazuję</td></tr>
<tr><td class="pl">zapisywać</td><td class="pl">zapisać</td><td class="pl">zapisuję</td></tr>
<tr><td class="pl">podsłuchiwać</td><td class="pl">podsłuchać</td><td class="pl">podsłuchuję</td></tr>
<tr><td class="pl">nagrywać</td><td class="pl">nagrać</td><td class="pl">nagrywam</td></tr>
<tr><td class="pl">dostawać</td><td class="pl">dostać</td><td class="pl">dostaję</td></tr>
<tr><td class="pl">sprzedawać</td><td class="pl">sprzedać</td><td class="pl">sprzedaję</td></tr>
</table>
<p>Варіант <b>-iwać</b> пишеться після k, g, ch: <span class="pl">podsłuchiwać</span>. Це той самий тип, що й укр. «показувати → показати», «записувати → записати»: багато дієслів на -ywać/-iwać у теперішньому часі мають форми на <b>-uję</b>: <span class="pl">pokazuję, zapisujesz</span> (пор. «показую, записуєш»). Але чимало й дієслів на <b>-am</b>: <span class="pl">nagrywam, wygrywam, odpoczywam</span> (і добре знайоме вам <span class="pl">nazywam się</span>). Якщо сумніваєтеся — перевірте за словником.</p>
<div class="tip">Пастка: у дієсловах на <b>-awać</b> суфікс у теперішньому часі зникає, як в українському «давати → даю», «вставати → встаю»: <span class="pl">dostawać → dostaję</span>, <span class="pl">sprzedawać → sprzedaję</span>, <span class="pl">wstawać → wstaję</span>. Форма «dostawam» — помилка!</div>
<h4>3. Різні корені — вчимо напам’ять</h4>
<table class="g">
<tr><th>НДВ</th><th>ДВ</th><th>мин. ч. ДВ</th><th>українською</th></tr>
<tr><td class="pl">brać</td><td class="pl">wziąć</td><td class="pl">wziąłem, wzięłam</td><td>брати / взяти</td></tr>
<tr><td class="pl">mówić</td><td class="pl">powiedzieć</td><td class="pl">powiedziałem</td><td>говорити / сказати</td></tr>
<tr><td class="pl">oglądać</td><td class="pl">obejrzeć</td><td class="pl">obejrzałem</td><td>дивитися / подивитися</td></tr>
<tr><td class="pl">widzieć</td><td class="pl">zobaczyć</td><td class="pl">zobaczyłem</td><td>бачити / побачити</td></tr>
<tr><td class="pl">kłaść</td><td class="pl">położyć</td><td class="pl">położyłem</td><td>класти / покласти</td></tr>
</table>
<div class="tip">Хибний друг: <span class="pl">skazać</span> — це «засудити (у суді)», а зовсім не «сказати»! «Сказати» — тільки <span class="pl">powiedzieć</span> (запам’ятати допоможе укр. «повідати», «повідомити»).</div>
<div class="tip">«Дивитися фільм, серіал, матч» — <span class="pl">oglądać</span> (пор. укр. «переглядати фільм»), а не <i>patrzeć</i>. <span class="pl">Patrzeć na</span> — дивитися на щось, кинути погляд: <span class="pl">Patrzę na zegarek.</span></div>
<div class="ex"><span class="pl">Wczoraj oglądałam serial do drugiej w nocy.</span> — Учора я дивилася серіал до другої ночі. (процес)</div>
<div class="ex"><span class="pl">W końcu obejrzałam ostatni odcinek!</span> — Нарешті я подивилася останню серію! (результат)</div>`
      },

      exercises: [
        { type: "match", q: "З’єднайте дієслово НДВ з його парою ДВ", pairs: [["pokazywać", "pokazać"], ["dostawać", "dostać"], ["włączać", "włączyć"], ["brać", "wziąć"], ["mówić", "powiedzieć"], ["oglądać", "obejrzeć"]], explain: "Суфіксальні пари (pokazywać/pokazać, dostawać/dostać, włączać/włączyć) і пари з різними коренями (brać/wziąć, mówić/powiedzieć, oglądać/obejrzeć)." },
        { type: "choice", q: "Wczoraj w końcu ___ ostatni odcinek!", options: ["oglądałem", "obejrzałem", "oglądam"], answer: 1, explain: "«W końcu» + конкретний результат → ДВ: obejrzałem (від obejrzeć)." },
        { type: "gap", q: "Codziennie ___ dużo spamu. (dostawać, ja)", answers: ["dostaję"], explain: "dostawać → dostaję: суфікс -aw- у теперішньому часі зникає (як «давати → даю»). «Dostawam» — помилка." },
        { type: "gap", q: "Kto ___ mój telefon? Nie mogę go znaleźć! (wziąć, мин. ч.)", answers: ["wziął"], explain: "brać / wziąć — пара з різними коренями. Минулий час: wziął, wzięła; wziąłem, wzięłam. Після kto — чоловічий рід." },
        { type: "choice", q: "«Він сказав, що не прийде». — On ___, że nie przyjdzie.", options: ["skazał", "powiedział", "rozmawiał"], answer: 1, explain: "«Сказати» = powiedzieć. Skazać — «засудити в суді», rozmawiać — «розмовляти з кимось»." },
        { type: "gap", q: "Zawsze ___ radio w samochodzie. (włączać / włączyć, ja)", answers: ["włączam"], explain: "«Zawsze» — звичка → НДВ włączać у теперішньому часі: włączam." },
        { type: "order", ru: "Я записала для тебе концерт.", words: ["Nagrałam", "dla", "ciebie", "koncert."], alt: ["Nagrałam koncert dla ciebie."], explain: "Nagrać (ДВ) — результат: запис готовий. Жіночий рід: nagrałam." },
        { type: "choice", q: "Mój brat zawsze ___ wszystkie memy na Facebooku.", options: ["udostępnia", "udostępni", "udostępnił"], answer: 0, explain: "«Zawsze» — звичка → НДВ udostępniać у теперішньому часі: udostępnia. Udostępni — це майбутнє ДВ («поширить»)." },
        { type: "gap", q: "Wczoraj Ola ___ mnie na koncert do Spodka. (zapraszać / zaprosić)", answers: ["zaprosiła"], explain: "Одна завершена дія в минулому → ДВ zaprosić: zaprosiła. Spodek — знаменита концертна зала в Катовицях." },
        { type: "translate", ru: "Учора я подивився цікавий фільм.", answers: ["Wczoraj obejrzałem ciekawy film.", "Obejrzałem wczoraj ciekawy film.", "Wczoraj obejrzałem interesujący film.", "Obejrzałem wczoraj interesujący film."], explain: "«Подивився» (результат) = obejrzałem. «Дивитися фільм» — oglądać / obejrzeć, а не patrzeć." }
      ],

      pronunciation: {
        focus: "Винятки з правила наголосу",
        tip: `<p>Деякі слова порушують правило передостаннього складу — наголос падає на <b>третій склад від кінця</b>:</p>
<ul>
<li>запозичення на <b>-yka / -ika</b>: <span class="pl">matematyka</span> (ma-te-<b>ma</b>-ty-ka), <span class="pl">muzyka</span> (<b>mu</b>-zy-ka), <span class="pl">polityka</span> (po-<b>li</b>-ty-ka), <span class="pl">informatyka</span>, <span class="pl">gramatyka</span>. Наголос лишається на місці й в інших відмінках: <span class="pl">o matematyce</span> (ma-te-<b>ma</b>-ty-ce). Тут український наголос (матемАтика, мУзика, полІтика) збігається з польським — не «виправляйте» його за загальним правилом!</li>
<li><span class="pl">uniwersytet</span> — за нормою u-ni-<b>wer</b>-sy-tet (у живому мовленні часто чути й u-ni-wer-<b>sy</b>-tet). Українське «університЕт» тут не помічник.</li>
<li><span class="pl">Rzeczpospolita</span> — rzecz-po-<b>spo</b>-li-ta (складне слово: rzecz + pospolita; пор. укр. «Річ Посполита»).</li>
<li>деякі числівники: <span class="pl">czterysta</span> (<b>czte</b>-ry-sta), <span class="pl">siedemset</span> (<b>sie</b>-dem-set).</li>
</ul>
<p>Ще одна група — форми минулого часу на -liśmy/-liście (<span class="pl">byliśmy</span> — <b>by</b>-li-śmy). Про них — в уроці 4.</p>`,
        items: [
          { type: "stress", word: "matematyka", syllables: ["ma", "te", "ma", "ty", "ka"], answer: 2, accept: [3] },
          { type: "stress", word: "muzyka", syllables: ["mu", "zy", "ka"], answer: 0 },
          { type: "stress", word: "uniwersytet", syllables: ["u", "ni", "wer", "sy", "tet"], answer: 2, accept: [3] },
          { type: "stress", word: "rzeczpospolita", syllables: ["rzecz", "po", "spo", "li", "ta"], answer: 2, accept: [3] },
          { type: "stress", word: "informatyka", syllables: ["in", "for", "ma", "ty", "ka"], answer: 2, accept: [3] },
          { type: "listen", text: "Lubię muzykę, ale nie lubię polityki.", ru: "Я люблю музику, але не люблю політику.", note: "MU-zy-kę, po-LI-ty-ki — 3-й склад від кінця" },
          { type: "dictation", text: "Mój brat studiuje informatykę na uniwersytecie." }
        ]
      },

      reading: {
        title: "Babcia na TikToku",
        text: "Babcia Halina ma siedemdziesiąt cztery lata i mieszka w Zakopanem. Kiedyś oglądała tylko seriale w telewizji i słuchała radia. Rok temu wnuk Szymek ściągnął jej na telefon TikToka i pokazał, jak nagrywać filmiki.\n\nPierwszy filmik babcia nagrała w kuchni: pokazała, jak lepi pierogi z kapustą i grzybami. Szymek udostępnił go na swoim kanale. Następnego dnia filmik miał sto tysięcy wyświetleń!\n\nTeraz babcia codziennie nagrywa nowy odcinek serii „Gotuj z babcią Haliną”. Dostaje setki wiadomości z całej Polski, a nawet z Chicago. W każdą niedzielę włącza transmisję na żywo i odpowiada na pytania: jak ugotować żurek, jak upiec sernik i jak wytrzymać z dziadkiem pięćdziesiąt lat.\n\nSzymek jest trochę zazdrosny. Jego filmiki o grach komputerowych mają średnio trzydzieści wyświetleń.\n\n— Babciu, ile osób obejrzało twój ostatni odcinek?\n\n— Milion. A co?\n\nW zeszłym tygodniu telewizja zaprosiła babcię do programu śniadaniowego. Babcia powiedziała, że przyjedzie, ale tylko z wnukiem.\n\n— Bez Szymka nie umiem nawet wyłączyć telefonu! — wyjaśniła.",
        glossary: [
          { pl: "wnuk", ru: "онук" },
          { pl: "lepi", ru: "ліпить" },
          { pl: "wyświetleń", ru: "переглядів" },
          { pl: "setki", ru: "сотні" },
          { pl: "wytrzymać", ru: "витримати, витерпіти" },
          { pl: "zazdrosny", ru: "заздрісний, ревнивий" },
          { pl: "średnio", ru: "у середньому" },
          { pl: "programu śniadaniowego", ru: "ранкового телешоу" },
          { pl: "wyjaśniła", ru: "пояснила" }
        ],
        questions: [
          { type: "tf", q: "Babcia sama ściągnęła TikToka na telefon.", answer: false, explain: "«Wnuk Szymek ściągnął jej na telefon TikToka»." },
          { type: "choice", q: "Co babcia pokazała w pierwszym filmiku?", options: ["Jak gotuje żurek.", "Jak lepi pierogi.", "Jak piecze sernik."], answer: 1, explain: "«Pokazała, jak lepi pierogi z kapustą i grzybami»." },
          { type: "tf", q: "Babcia dostaje wiadomości także z zagranicy.", answer: true, explain: "«…z całej Polski, a nawet z Chicago»." },
          { type: "choice", q: "Dlaczego babcia chce przyjechać do telewizji z wnukiem?", options: ["Bo Szymek jest sławny.", "Bo sama nie umie wyłączyć telefonu.", "Bo boi się jechać pociągiem."], answer: 1, explain: "«Bez Szymka nie umiem nawet wyłączyć telefonu!»" },
          { type: "tf", q: "Filmiki Szymka mają więcej wyświetleń niż filmiki babci.", answer: false, explain: "У Шимека в середньому 30 переглядів, у бабусі — мільйон." }
        ]
      },

      writing: {
        prompt: "Напишіть повідомлення другові/подрузі (40–80 слів) про серіал або фільм, який ви нещодавно подивилися: 1) що і коли ви подивилися (obejrzałem/obejrzałam); 2) скільки в ньому серій; 3) хто вам його показав або порадив і чи сподобався він вам; 4) запросіть друга подивитися разом новий сезон.",
        minWords: 40,
        maxWords: 80,
        useWords: ["obejrzeć", "odcinek", "pokazać", "zapraszać"],
        checklist: [
          { label: "Щонайменше 3 дієслова в минулому часі", pattern: "\\p{L}+(łem|łam|ł|ła)(?!\\p{L})", min: 3 },
          { label: "Хоча б одне дієслово ДВ з уроку (obejrzeć, pokazać, powiedzieć, wziąć, nagrać…)", pattern: "(obejrz|pokaza|powiedzia|wzię|wzią|ściągn|nagra|udostępni|włączy|wyłączy|zaprosi)", min: 1 },
          { label: "Запрошення: zapraszam / chcesz…?", pattern: "(zaprasz|chcesz)", min: 1 }
        ],
        model: "Cześć Olu! Wczoraj w końcu obejrzałam nowy polski serial kryminalny. Ma tylko sześć odcinków, więc obejrzałam wszystkie w jeden wieczór! Serial pokazała mi koleżanka z pracy. Bardzo mi się podobał, szczególnie ostatni odcinek. Nie powiem ci, jak się kończy, bo nie lubię spoilerów. W piątek wychodzi drugi sezon. Zapraszam cię do mnie na wieczór z serialem! Chcesz?"
      }
    },

    // ───────────────────────── УРОК 3 ─────────────────────────
    {
      id: "m04l3",
      title: "Będę odpoczywać",
      titleRu: "Складений майбутній час",
      topic: "Wakacje",
      review: false,
      minutes: 25,
      goals: [
        "Утворювати складений майбутній час: będę robić / będę robił(a) — і пам’ятати, що форми на зразок «робитиму» в польській немає",
        "Розповісти про плани на відпустку: де житимете і що робитимете",
        "Відрізняти на слух запитання від ствердження й ставити запитання з czy"
      ],

      vocab: [
        { pl: "urlop", g: "m", ru: "відпустка (на роботі)", ex: "W sierpniu biorę dwa tygodnie urlopu.", exRu: "У серпні я беру два тижні відпустки.", note: "być na urlopie; wakacje — канікули, літній відпочинок; пор. західноукр. розм. «урльоп»" },
        { pl: "namiot", g: "m", ru: "намет", ex: "Śpimy w namiocie nad jeziorem.", exRu: "Ми спимо в наметі біля озера." },
        { pl: "nocleg", g: "m", ru: "нічліг, житло (у поїздці)", ex: "Szukam taniego noclegu w Zakopanem.", exRu: "Шукаю недороге житло в Закопаному." },
        { pl: "rezerwować / zarezerwować", ru: "бронювати / забронювати, резервувати", ex: "Zarezerwowałam pokój w pensjonacie.", exRu: "Я забронювала номер у гостьовому будинку." },
        { pl: "zwiedzać / zwiedzić", ru: "оглядати / оглянути (місто, музей)", ex: "Chcę zwiedzić Wawel.", exRu: "Хочу оглянути Вавель." },
        { pl: "opalać się", ru: "засмагати", ex: "Lubię się opalać na plaży.", exRu: "Я люблю засмагати на пляжі." },
        { pl: "leżak", g: "m", ru: "шезлонг, лежак", ex: "Cały dzień leżę na leżaku.", exRu: "Цілий день лежу на шезлонгу." },
        { pl: "pakować się / spakować się", ru: "пакуватися / спакуватися, збирати / зібрати речі", ex: "Jeszcze się nie spakowałem!", exRu: "Я ще не спакувався!", note: "pakować walizkę — пакувати валізу" },
        { pl: "odpoczywać / odpocząć", ru: "відпочивати / відпочити", ex: "Na urlopie chcę naprawdę odpocząć.", exRu: "У відпустці хочу по-справжньому відпочити.", note: "мин.: odpocząłem / odpoczęłam" },
        { pl: "wynajmować / wynająć", ru: "винаймати / винайняти (житло), орендувати", ex: "Wynajęliśmy domek w górach.", exRu: "Ми винайняли будиночок у горах.", note: "як укр. «винаймати»; розмовне «знімати квартиру» не перекладайте як zdejmować!" },
        { pl: "kajak", g: "m", ru: "байдарка, каяк", ex: "Płyniemy kajakiem po Krutyni.", exRu: "Ми пливемо на байдарці по Крутині.", note: "spływ kajakowy — сплав на байдарках (популярний на Мазурах)" },
        { pl: "szlak", g: "m", ru: "(туристичний) шлях, стежка, маршрут", ex: "Ten szlak prowadzi na Giewont.", exRu: "Ця стежка веде на Ґевонт." },
        { pl: "schronisko", g: "n", ru: "гірський притулок; притулок для тварин", ex: "Nocujemy w schronisku w Dolinie Pięciu Stawów.", exRu: "Ночуємо в притулку в Долині П’яти Ставів." },
        { pl: "ognisko", g: "n", ru: "багаття, вогнище", ex: "Wieczorem robimy ognisko i pieczemy kiełbaski.", exRu: "Увечері розпалюємо багаття й печемо ковбаски." }
      ],

      grammar: {
        title: "Складений майбутній час: będę robić / będę robił",
        html: `<p>Майбутній час дієслів <b>недоконаного виду</b> утворюється як українське «буду робити»: <b>być</b> у майбутньому + дієслово. Зверніть увагу: в українській є ще й синтетична форма «робитиму, робитимеш, робитиме», а в польській такої немає — лише складена форма з będę. Зате саму складену форму польська має у двох рівноправних варіантах.</p>
<table class="g">
<tr><th></th><th>być</th><th>+ інфінітив</th><th>+ форма на -ł</th></tr>
<tr><td>ja</td><td class="pl">będę</td><td class="pl">będę robić</td><td class="pl">będę robił / robiła</td></tr>
<tr><td>ty</td><td class="pl">będziesz</td><td class="pl">będziesz robić</td><td class="pl">będziesz robił / robiła</td></tr>
<tr><td>on, ona, ono</td><td class="pl">będzie</td><td class="pl">będzie robić</td><td class="pl">będzie robił / robiła / robiło</td></tr>
<tr><td>my</td><td class="pl">będziemy</td><td class="pl">będziemy robić</td><td class="pl">będziemy robili / robiły</td></tr>
<tr><td>wy</td><td class="pl">będziecie</td><td class="pl">będziecie robić</td><td class="pl">będziecie robili / robiły</td></tr>
<tr><td>oni, one</td><td class="pl">będą</td><td class="pl">będą robić</td><td class="pl">będą robili / robiły</td></tr>
</table>
<p>Форма на -ł — це форма минулого часу 3-ї особи <b>без особових закінчень</b>: <i>będę robił</i>, а не «będę robiłem»! Вона узгоджується в роді: <span class="pl">Ewa będzie pracowała</span>, <span class="pl">Marek będzie pracował</span>. У множині: <b>-li</b> — якщо в групі є хоч один чоловік, <b>-ły</b> — лише жінки, діти, предмети. Для літературної української «буду робив» звучить дивно, хоча в деяких західноукраїнських говірках таке «буду робила» трапляється.</p>
<div class="tip">Хитрість: варіант з інфінітивом не вимагає думати про рід і число — <span class="pl">będziemy zwiedzać</span> підходить усім.</div>
<div class="ex"><span class="pl">W lipcu będę odpoczywać nad morzem.</span> — У липні я відпочиватиму на морі.</div>
<div class="ex"><span class="pl">Co będziecie robili w wakacje?</span> — Що ви робитимете на канікулах?</div>
<div class="ex"><span class="pl">Nie będę pracować w sierpniu.</span> — Я не буду працювати в серпні. (nie — перед będę)</div>
<h4>Особливі випадки</h4>
<ul>
<li><b>być</b> — просто <span class="pl">będę, będziesz…</span>: <span class="pl">Jutro będę w Gdańsku.</span> <span class="pl">W weekend będzie ciepło.</span> Жодного «będę być», як і в українській немає «буду бути»!</li>
<li><b>mieć</b>: <span class="pl">Będziesz miał czas w sobotę?</span> — Матимеш час у суботу?</li>
<li>З модальними дієсловами (musieć, móc, chcieć) зазвичай вибирають форму на -ł: <span class="pl">Będę musiał wcześnie wstać.</span> — Мені доведеться рано встати. <span class="pl">Będziesz mogła przyjechać?</span></li>
</ul>
<div class="tip">Головна пастка: складений майбутній — <b>лише для НДВ</b>. <span class="pl">Będę zwiedzać</span> — правильно, «będę zwiedzić» — помилка (як і українське «буду оглянути»). Майбутній ДВ утворюється інакше: <span class="pl">zwiedzę</span> — «огляну» (урок 4). А для «оглядатиму» окремої польської форми не шукайте — тільки będę zwiedzać / zwiedzał.</div>
<div class="tip">«Відпустка» на роботі — <span class="pl">urlop</span> (<span class="pl">jestem na urlopie</span>), а <span class="pl">wakacje</span> — канікули, літній відпочинок узагалі. «На канікулах» — <span class="pl">w wakacje</span> або <span class="pl">na wakacjach</span>.</div>`
      },

      exercises: [
        { type: "gap", q: "W sierpniu ___ nad morzem. (być, my, майбутній)", answers: ["będziemy"], explain: "być у майбутньому: będę, będziesz, będzie, będziemy, będziecie, będą." },
        { type: "choice", q: "Jutro cały dzień ___ na leżaku. (ja, kobieta)", options: ["będę leżała", "będę leżał", "będzie leżała"], answer: 0, explain: "ja + жінка → będę leżała (можна й będę leżeć — з інфінітивом)." },
        { type: "choice", q: "Яке речення НЕПРАВИЛЬНЕ?", options: ["Będę zwiedzać Gdańsk.", "Będę zwiedzał Gdańsk.", "Będę zwiedzić Gdańsk."], answer: 2, explain: "Складений майбутній — лише з НДВ. Zwiedzić — ДВ, його майбутній: zwiedzę." },
        { type: "gap", q: "W lipcu nie ___ — mam urlop! (pracować, ja, складений майбутній)", answers: ["będę pracować", "będę pracował", "będę pracowała"], explain: "Nie ставимо перед będę: nie będę pracować / pracował / pracowała. Українське «не працюватиму» польською — тільки так." },
        { type: "gap", q: "Przez tydzień moi rodzice ___ w namiocie. (mieszkać, складений майбутній)", answers: ["będą mieszkać", "będą mieszkali"], explain: "Батьки — мішана група (є чоловік) → będą mieszkali; або універсальне będą mieszkać." },
        { type: "order", ru: "Що ви робитимете у відпустці?", words: ["Co", "będziecie", "robić", "na", "urlopie?"], alt: ["Co na urlopie będziecie robić?", "Co będziecie na urlopie robić?"], explain: "Питальне слово — на початку, далі складений майбутній: będziecie robić (укр. «робитимете» польською передаємо лише так)." },
        { type: "match", q: "З’єднайте слово з перекладом", pairs: [["namiot", "намет"], ["szlak", "стежка, маршрут"], ["schronisko", "гірський притулок"], ["ognisko", "багаття"], ["leżak", "шезлонг"], ["nocleg", "нічліг, житло"]], explain: "Слова для розмови про відпочинок: у горах (szlak, schronisko), на природі (namiot, ognisko), на пляжі (leżak)." },
        { type: "choice", q: "Як сказати «Мені доведеться рано встати»?", options: ["Będę musiał wcześnie wstać.", "Będę muszę wcześnie wstać.", "Będę musiałem wcześnie wstać."], answer: 0, explain: "З модальними дієсловами: będę + форма на -ł без особового закінчення: będę musiał(a)." },
        { type: "gap", q: "Czy ___ czas w sobotę? Robimy ognisko! (mieć, ty, майбутній)", answers: ["będziesz miał", "będziesz miała", "będziesz mieć"], explain: "mieć у майбутньому: będziesz miał / miała або będziesz mieć (укр. «матимеш»)." },
        { type: "translate", ru: "Я відпочиватиму в горах.", answers: ["Będę odpoczywać w górach.", "Będę odpoczywał w górach.", "Będę odpoczywała w górach.", "W górach będę odpoczywać."], explain: "Процес у майбутньому → będę + НДВ odpoczywać (або odpoczywał / odpoczywała). Синтетичної форми на зразок «відпочиватиму» польська не має." }
      ],

      pronunciation: {
        focus: "Інтонація: ствердження і запитання (czy…?)",
        tip: `<p><b>Загальне запитання</b> (відповідь «так / ні») у польській зазвичай починається словом <span class="pl">czy</span> — як українське «чи»: <span class="pl">Czy będziesz w domu?</span> Czy вже повідомляє, що це запитання, тому мелодія може бути досить спокійною, з легким підйомом наприкінці.</p>
<p>У розмовному мовленні czy часто пропускають — і тоді запитання відрізняється від ствердження <b>лише мелодією</b>:</p>
<ul>
<li><span class="pl">Będziesz w domu.</span> — голос наприкінці <b>знижується</b> (ствердження);</li>
<li><span class="pl">Będziesz w domu?</span> — голос <b>підвищується</b> до кінця фрази, на наголошеному складі (<b>do</b>-mu), і лишається високим до кінця.</li>
</ul>
<p>Відмінність від української: в українському запитанні без «чи» тон зазвичай різко підіймається на наголошеному складі головного слова, а після нього спадає («Ти будеш вдОма?» — на «-ма» голос вже внизу). У польській голос після підйому <b>не падає</b>.</p>
<p>Запитання з питальним словом (<span class="pl">co, gdzie, kiedy, jak</span>) звучать зі <b>зниженням</b> наприкінці, як ствердження: <span class="pl">Co będziesz robić w wakacje?</span></p>`,
        items: [
          { type: "minimal", options: ["Będziesz w domu.", "Będziesz w domu?"], ru: ["Ти будеш удома. (ствердження)", "Ти будеш удома? (запитання)"] },
          { type: "minimal", options: ["Jedziemy nad morze.", "Jedziemy nad morze?"], ru: ["Ми їдемо на море. (ствердження)", "Ми їдемо на море? (запитання)"] },
          { type: "listen", text: "Czy będziesz pracować w lipcu?", ru: "Чи будеш ти працювати в липні?", note: "czy на початку + легкий підйом наприкінці" },
          { type: "listen", text: "Co będziecie robić w wakacje?", ru: "Що ви робитимете на канікулах?", note: "запитання з co — голос наприкінці знижується" },
          { type: "listen", text: "Tak, w lipcu będę odpoczywać nad jeziorem.", ru: "Так, у липні відпочиватиму на озері.", note: "ствердження — зниження наприкінці" },
          { type: "dictation", text: "Czy zarezerwowałeś już nocleg?" }
        ]
      },

      reading: {
        title: "Gdzie na wakacje?",
        text: "Rodzina Wiśniewskich planuje wakacje. Problem w tym, że każdy ma inny pomysł.\n\nTata chce jechać na Mazury.\n\n— Będziemy spać w namiocie, pływać kajakiem i co wieczór robić ognisko! Będziemy jeść kiełbaski i słuchać ptaków.\n\nMama kręci głową.\n\n— Cały rok ciężko pracuję. Na urlopie będę leżała na leżaku i opalała się. Wynajmiemy pokój w pensjonacie w Jastarni. Nie będę gotowała ani zmywała!\n\nSzesnastoletni Michał nie słucha, bo ma na uszach słuchawki.\n\n— A ty, synku, co będziesz robił w wakacje?\n\n— Będę grał na komputerze. I będę spał do dwunastej.\n\nNagle głos zabiera babcia.\n\n— Moi drodzy, ja w sierpniu będę zwiedzać Rzym z koleżankami z klubu seniora. Nocleg już zarezerwowałam.\n\nWszyscy patrzą na babcię ze zdziwieniem. Tata wzdycha:\n\n— To może w tym roku pojedziemy w Tatry? Będziemy chodzić po szlakach i nocować w schronisku…\n\n— Tylko jeśli w schronisku będzie Wi-Fi! — mówi Michał.",
        glossary: [
          { pl: "pomysł", ru: "ідея, задум" },
          { pl: "kręci głową", ru: "хитає головою (не погоджується)" },
          { pl: "ciężko", ru: "тяжко, старанно" },
          { pl: "słuchawki", ru: "навушники" },
          { pl: "głos zabiera", ru: "бере слово" },
          { pl: "klubu seniora", ru: "клубу пенсіонерів" },
          { pl: "ze zdziwieniem", ru: "з подивом" },
          { pl: "wzdycha", ru: "зітхає" },
          { pl: "nocować", ru: "ночувати" }
        ],
        questions: [
          { type: "tf", q: "Tata chce spać w namiocie.", answer: true, explain: "«Będziemy spać w namiocie, pływać kajakiem…»" },
          { type: "choice", q: "Co mama chce robić na urlopie?", options: ["Pływać kajakiem.", "Leżeć na leżaku i się opalać.", "Zwiedzać Rzym."], answer: 1, explain: "«Na urlopie będę leżała na leżaku i opalała się»." },
          { type: "choice", q: "Do której Michał chce spać w wakacje?", options: ["Do szóstej.", "Do dwunastej.", "Do wieczora."], answer: 1, explain: "«Będę spał do dwunastej»." },
          { type: "tf", q: "Babcia pojedzie na wakacje z rodziną.", answer: false, explain: "Бабуся їде до Рима з подругами з клубу пенсіонерів." },
          { type: "tf", q: "Babcia już zarezerwowała nocleg.", answer: true, explain: "«Nocleg już zarezerwowałam»." }
        ]
      },

      writing: {
        prompt: "Напишіть e-mail польській подрузі Касі (50–90 слів): 1) коли і куди ви їдете у відпустку / на канікули; 2) де житимете; 3) що ви там робитимете — щонайменше 4 дії у складеному майбутньому (będę / będziemy + дієслово; пам’ятайте, що синтетичних форм на зразок «робитиму» в польській немає); 4) запитайте Касю про її плани.",
        minWords: 50,
        maxWords: 90,
        useWords: ["urlop", "nocleg", "zwiedzać", "odpoczywać"],
        checklist: [
          { label: "Щонайменше 4 форми майбутнього: będę, będziemy, będzie…", pattern: "(?<!\\p{L})będ(ę|ziesz|zie|ziemy|ziecie|ą)(?!\\p{L})", min: 4 },
          { label: "Запитання до подруги (Co będziesz…? / Czy…?)", pattern: "\\?", min: 1 }
        ],
        model: "Cześć Kasiu! W tym roku mam urlop w lipcu. Razem z Michałem jedziemy na dwa tygodnie na Mazury. Nocleg już zarezerwowaliśmy – to mały domek nad jeziorem. Będziemy pływać kajakiem, a wieczorem będziemy robić ognisko. Ja będę dużo czytać i odpoczywać na leżaku, a Michał będzie łowił ryby. W weekend będziemy zwiedzać Mikołajki. A ty? Co będziesz robić w wakacje? Czy będziesz w Warszawie w sierpniu? Buziaki, Ola"
      }
    },

    // ───────────────────────── УРОК 4 ─────────────────────────
    {
      id: "m04l4",
      title: "Zrobię to jutro!",
      titleRu: "Простий майбутній час і вид у минулому",
      topic: "Plany na przyszłość",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати простий майбутній час від дієслів ДВ: zrobię, napiszę, powiem, wezmę",
        "Вибирати вид у минулому: czytałem чи przeczytałem",
        "Розповідати про плани й мрії: za rok, kiedyś, zamierzam…",
        "Правильно наголошувати форми robiliśmy, byliście"
      ],

      vocab: [
        { pl: "przyszłość", g: "f", ru: "майбутнє", ex: "Nikt nie zna przyszłości.", exRu: "Ніхто не знає майбутнього.", note: "w przyszłości — у майбутньому" },
        { pl: "zamierzać", ru: "збиратися, мати намір", ex: "Zamierzam zmienić pracę.", exRu: "Я збираюся змінити роботу.", note: "zamierzam + інфінітив; синонім: mam zamiar (пор. укр. «мати замір»)" },
        { pl: "marzenie", g: "n", ru: "мрія", ex: "Moim marzeniem jest dom nad morzem.", exRu: "Моя мрія — будинок біля моря.", note: "marzyć o + місц. в.: marzę o podróży" },
        { pl: "spełniać / spełnić", ru: "здійснювати / здійснити (мрію, бажання)", ex: "Spełniłam swoje marzenie i skoczyłam ze spadochronem.", exRu: "Я здійснила свою мрію і стрибнула з парашутом." },
        { pl: "przeprowadzać się / przeprowadzić się", ru: "переїжджати / переїхати (на нове місце проживання)", ex: "W maju przeprowadzamy się do Wrocławia.", exRu: "У травні ми переїжджаємо до Вроцлава.", note: "пастка: przejeżdżać — це «проїжджати»!" },
        { pl: "oszczędzać / zaoszczędzić", ru: "заощаджувати / заощадити, економити", ex: "Oszczędzam na nowy samochód.", exRu: "Я відкладаю гроші на нову машину.", note: "oszczędzać na coś — відкладати гроші на щось" },
        { pl: "zmieniać / zmienić", ru: "змінювати / змінити, поміняти", ex: "Kiedy zmieniłeś pracę?", exRu: "Коли ти змінив роботу?" },
        { pl: "awans", g: "m", ru: "підвищення (на посаді)", ex: "Dostałem awans!", exRu: "Я отримав підвищення!" },
        { pl: "za rok", ru: "через рік", ex: "Za rok skończę studia.", exRu: "Через рік я закінчу навчання.", note: "пастка: укр. «за рік» буває двозначним, а польське za rok — лише «через рік»; przez rok — «протягом року»" },
        { pl: "kiedyś", ru: "колись (і в майбутньому, і в минулому)", ex: "Kiedyś pojadę do Japonii.", exRu: "Колись я поїду до Японії." },
        { pl: "postanowienie", g: "n", ru: "рішення, обіцянка собі", ex: "Moje postanowienie noworoczne: więcej sportu!", exRu: "Моя новорічна обіцянка: більше спорту!", note: "postanawiać / postanowić — вирішувати / вирішити (пор. укр. «постановити»)" },
        { pl: "zakładać / założyć", ru: "засновувати / заснувати, створювати / створити", ex: "Kiedyś założę własną firmę.", exRu: "Колись я засную власну фірму.", note: "założyć rodzinę — створити сім’ю; також: zakładać kurtkę — вдягати куртку" },
        { pl: "zdawać / zdać", ru: "складати / скласти (іспит)", ex: "Zdałem egzamin za pierwszym razem!", exRu: "Я склав іспит з першого разу!", note: "zdać = скласти успішно; nie zdać — не скласти, провалити" },
        { pl: "prawo jazdy", g: "n", ru: "посвідчення водія, водійські права", ex: "Robię prawo jazdy.", exRu: "Я вчуся на права.", note: "egzamin na prawo jazdy — іспит на права" }
      ],

      grammar: {
        title: "Простий майбутній час (zrobię) і вид у минулому",
        html: `<h4>1. Простий майбутній = ДВ + закінчення теперішнього часу</h4>
<p>Дієслово ДВ дієвідмінюється так само, як НДВ у теперішньому часі, але означає <b>майбутнє</b>: <span class="pl">robię</span> — роблю, <span class="pl">zrobię</span> — зроблю. Точно як в українській. Жодного będę тут не потрібно!</p>
<table class="g">
<tr><th></th><th>zrobić</th><th>napisać</th><th>powiedzieć</th><th>wziąć</th></tr>
<tr><td>ja</td><td class="pl">zrobię</td><td class="pl">napiszę</td><td class="pl">powiem</td><td class="pl">wezmę</td></tr>
<tr><td>ty</td><td class="pl">zrobisz</td><td class="pl">napiszesz</td><td class="pl">powiesz</td><td class="pl">weźmiesz</td></tr>
<tr><td>on, ona</td><td class="pl">zrobi</td><td class="pl">napisze</td><td class="pl">powie</td><td class="pl">weźmie</td></tr>
<tr><td>my</td><td class="pl">zrobimy</td><td class="pl">napiszemy</td><td class="pl">powiemy</td><td class="pl">weźmiemy</td></tr>
<tr><td>wy</td><td class="pl">zrobicie</td><td class="pl">napiszecie</td><td class="pl">powiecie</td><td class="pl">weźmiecie</td></tr>
<tr><td>oni, one</td><td class="pl">zrobią</td><td class="pl">napiszą</td><td class="pl">powiedzą</td><td class="pl">wezmą</td></tr>
</table>
<p>Інші часті форми: <span class="pl">pójść → pójdę</span>, <span class="pl">pojechać → pojadę</span>, <span class="pl">zjeść → zjem</span>, <span class="pl">obejrzeć → obejrzę</span>, <span class="pl">dać → dam</span>, <span class="pl">znaleźć → znajdę</span>, <span class="pl">zacząć → zacznę</span>.</p>
<h4>2. będę pisać чи napiszę?</h4>
<div class="ex"><span class="pl">Jutro będę pisać wypracowanie.</span> — Завтра писатиму (буду писати) твір. (процес; можливо, і не закінчу)</div>
<div class="ex"><span class="pl">Jutro napiszę wypracowanie.</span> — Завтра напишу твір. (обіцяю результат)</div>
<h4>3. Вид у минулому часі</h4>
<ul>
<li><b>НДВ</b> — процес, тло, повторення, «досвід узагалі»: <span class="pl">Czytałem tę książkę.</span> — Я читав цю книжку (неважливо, чи дочитав).</li>
<li><b>ДВ</b> — результат, ланцюжок подій: <span class="pl">Przeczytałem tę książkę w tydzień.</span> — Я прочитав її за тиждень.</li>
</ul>
<div class="ex"><span class="pl">Skończyłam studia, zmieniłam pracę i przeprowadziłam się do Wrocławia.</span> — ланцюжок результатів → ДВ.</div>
<div class="ex"><span class="pl">Kiedy oglądałem film, zadzwoniła mama.</span> — тло (НДВ) + подія (ДВ).</div>
<div class="tip">Пастка «через / за»: «через рік» (розм. також «за рік») = <span class="pl">za rok</span>, «через тиждень» = <span class="pl">za tydzień</span>. А <span class="pl">przez rok</span> — «протягом року»: <span class="pl">Przez rok oszczędzałem. Za miesiąc kupię samochód.</span> Українське «за рік» двозначне, польські прийменники — ні.</div>
<h4>4. Слова-маркери майбутнього</h4>
<p><span class="pl">jutro, pojutrze, za tydzień, za miesiąc, w przyszłym roku, kiedyś</span>. З ними можливі обидва види — усе вирішує зміст: <span class="pl">W przyszłym roku będę pracować w Krakowie.</span> (процес, увесь рік) — <span class="pl">W przyszłym roku zmienię pracę.</span> (одна подія).</p>
<div class="tip">Форма ДВ без będę ніколи не означає теперішнього часу: <span class="pl">kupię chleb</span> — «куплю хліб», а «купую хліб» — <span class="pl">kupuję chleb</span>. Не впевнені, який це вид? У словнику пари подають так: <i>kupować / kupić</i> — спочатку НДВ, потім ДВ (як укр. «купувати / купити»).</div>
<div class="tip">Не плутайте: <span class="pl">zdawać egzamin</span> — складати (йти на іспит, процес), <span class="pl">zdać egzamin</span> — скласти (успішно!): <span class="pl">Zdawałam trzy razy i w końcu zdałam.</span></div>`
      },

      exercises: [
        { type: "gap", q: "Jutro ___ maila do szefa. (napisać, ja)", answers: ["napiszę"], explain: "ДВ у «теперішній» формі = майбутнє: napiszę — «напишу». Чергування s → sz: pisać → piszę (як укр. «писати → пишу»)." },
        { type: "gap", q: "Za rok moja siostra ___ studia. (skończyć)", answers: ["skończy"], explain: "skończyć (ДВ) → skończy — «закінчить». Za rok = через рік." },
        { type: "choice", q: "Jutro ___ ci wszystko. (powiedzieć, ja)", options: ["powiem", "powiedzę", "mówię"], answer: 0, explain: "powiedzieć: powiem, powiesz, powie, powiemy, powiecie, powiedzą." },
        { type: "choice", q: "Wczoraj ___ cały wieczór, ale nie skończyłem tej książki.", options: ["czytałem", "przeczytałem"], answer: 0, explain: "Книжку не дочитано — процес без результату → НДВ: czytałem." },
        { type: "choice", q: "W końcu ___ prawo jazdy! Za czwartym razem!", options: ["zdawałam", "zdałam", "zdaję"], answer: 1, explain: "Zdać — скласти успішно (результат). Zdawać — складати, ходити на іспит." },
        { type: "order", ru: "Через рік ми переїдемо до Гданська.", words: ["Za", "rok", "przeprowadzimy", "się", "do", "Gdańska."], alt: ["Przeprowadzimy się do Gdańska za rok."], explain: "«Через рік» = za rok; przeprowadzić się (ДВ) → przeprowadzimy się — «переїдемо»." },
        { type: "match", q: "З’єднайте інфінітив ДВ з формою «я» (простий майбутній)", pairs: [["pójść", "pójdę"], ["wziąć", "wezmę"], ["zjeść", "zjem"], ["pojechać", "pojadę"], ["znaleźć", "znajdę"], ["dać", "dam"]], explain: "Неправильні форми простого майбутнього — їх варто вивчити напам’ять." },
        { type: "gap", q: "Przez dwa lata ___ na mieszkanie. (oszczędzać, my, мин. ч.)", answers: ["oszczędzaliśmy", "oszczędzałyśmy"], explain: "«Przez dwa lata» — тривалість → НДВ у минулому. Наголос: o-szczę-DZA-li-śmy." },
        { type: "choice", q: "Które zdanie mówi o rezultacie?", options: ["Pisałem wypracowanie cały wieczór.", "Napisałem wypracowanie i poszedłem spać.", "Często pisałem wypracowania."], answer: 1, explain: "Napisałem — ДВ: твір готовий, і лише потім наступна дія (poszedłem spać)." },
        { type: "translate", ru: "Завтра я подзвоню мамі.", answers: ["Jutro zadzwonię do mamy.", "Zadzwonię jutro do mamy.", "Zadzwonię do mamy jutro."], explain: "«Подзвоню» (ДВ) = zadzwonię. Увага: dzwonić / zadzwonić DO kogoś (+ родовий), а не давальний, як в українському «мамі»." }
      ],

      pronunciation: {
        focus: "Наголос у формах -liśmy / -łyście",
        tip: `<p>Форми минулого часу 1-ї та 2-ї особи множини — виняток: наголос падає на <b>третій склад від кінця</b>:</p>
<ul>
<li><span class="pl">robiliśmy</span> — ro-<b>bi</b>-li-śmy</li>
<li><span class="pl">robiliście</span> — ro-<b>bi</b>-li-ście</li>
<li><span class="pl">zrobiłyście</span> — zro-<b>bi</b>-ły-ście</li>
<li><span class="pl">byliśmy</span> — <b>by</b>-li-śmy</li>
</ul>
<p>Чому? Закінчення <b>-śmy, -ście</b> колись були окремими словечками (у деяких західноукраїнських говірках досі чути схоже «ходили-сьмо») і «не враховуються»: наголос лишається там само, де у формі <span class="pl">robili</span> (ro-<b>bi</b>-li). Зручне правило: <b>наголошуйте як у формі «oni / one»</b>: <span class="pl">mieszkali</span> → <span class="pl">mieszkaliśmy</span> (miesz-<b>ka</b>-li-śmy).</p>
<p>У розмовному мовленні багато хто каже robi-<b>li</b>-śmy, але в ретельному мовленні, на іспиті та в ЗМІ норма — ro-<b>bi</b>-li-śmy.</p>`,
        items: [
          { type: "stress", word: "robiliśmy", syllables: ["ro", "bi", "li", "śmy"], answer: 1 },
          { type: "stress", word: "byliście", syllables: ["by", "li", "ście"], answer: 0 },
          { type: "stress", word: "zrobiłyście", syllables: ["zro", "bi", "ły", "ście"], answer: 1 },
          { type: "stress", word: "oszczędzaliśmy", syllables: ["o", "szczę", "dza", "li", "śmy"], answer: 2 },
          { type: "listen", text: "robili, robiliśmy, robiliście", ru: "(вони) робили, (ми) робили, (ви) робили", note: "в усіх трьох формах наголос на bi" },
          { type: "listen", text: "Gdzie byliście w wakacje? Byliśmy nad morzem.", ru: "Де ви були на канікулах? Ми були на морі.", note: "BY-li-ście, BY-li-śmy" },
          { type: "dictation", text: "W zeszłym roku przeprowadziliśmy się do Wrocławia." }
        ]
      },

      reading: {
        title: "Postanowienia Marka",
        text: "Co roku trzydziestego pierwszego grudnia Marek z Poznania pisze listę postanowień noworocznych. W zeszłym roku napisał: „Schudnę dziesięć kilo. Nauczę się hiszpańskiego. Przeczytam dwadzieścia książek. Zdam prawo jazdy”.\n\nJak mu poszło? Hiszpańskiego uczył się przez dwa tygodnie, a potem zrezygnował. Książki czytał regularnie, ale przeczytał tylko trzy. Prawo jazdy zdawał cztery razy i w końcu zdał! A kilogramy? Lepiej nie pytać. Święta, pierniki, makowiec…\n\nW tym roku Marek zamierza być realistą. Jego nowa lista jest krótka: „Zmienię pracę, bo w tej firmie nigdy nie dostanę awansu. Przeprowadzę się do Gdańska, bo zawsze marzyłem o morzu. Zacznę oszczędzać na mieszkanie. A kiedyś założę własną kawiarnię – to moje wielkie marzenie”.\n\nJego dziewczyna Agata przeczytała listę i uśmiechnęła się.\n\n— A gdzie jest punkt „Oświadczę się Agacie”?\n\nMarek zrobił się czerwony. Pierścionek kupił już w listopadzie. Teraz leży w kieszeni jego marynarki i czeka na północ.",
        glossary: [
          { pl: "postanowień noworocznych", ru: "новорічних обіцянок" },
          { pl: "Schudnę", ru: "схудну" },
          { pl: "zrezygnował", ru: "кинув, відмовився" },
          { pl: "realistą", ru: "реалістом" },
          { pl: "Oświadczę się", ru: "освідчуся (зроблю пропозицію)" },
          { pl: "zrobił się czerwony", ru: "почервонів" },
          { pl: "Pierścionek", ru: "каблучка (пор. укр. «перстень»)" },
          { pl: "marynarki", ru: "піджака" },
          { pl: "północ", ru: "північ (опівночі, 00:00)" }
        ],
        questions: [
          { type: "tf", q: "Marek przeczytał dwadzieścia książek.", answer: false, explain: "«Książki czytał regularnie, ale przeczytał tylko trzy» — читав (НДВ), але прочитав (ДВ) лише три." },
          { type: "choice", q: "Ile razy Marek zdawał egzamin na prawo jazdy?", options: ["Raz.", "Dwa razy.", "Cztery razy."], answer: 2, explain: "«Prawo jazdy zdawał cztery razy i w końcu zdał!»" },
          { type: "tf", q: "Marek nauczył się hiszpańskiego.", answer: false, explain: "Він учив іспанську два тижні й кинув (zrezygnował)." },
          { type: "choice", q: "Dlaczego Marek chce się przeprowadzić do Gdańska?", options: ["Bo tam dostanie awans.", "Bo zawsze marzył o morzu.", "Bo tam mieszka Agata."], answer: 1, explain: "«Przeprowadzę się do Gdańska, bo zawsze marzyłem o morzu»." },
          { type: "tf", q: "Marek już kupił pierścionek.", answer: true, explain: "«Pierścionek kupił już w listopadzie»." }
        ]
      },

      writing: {
        prompt: "Напишіть допис для блогу «Moje plany na przyszły rok» (50–90 слів): 1) що ви робили / зробили цього року — 2 речення, стежте за видом; 2) 3–4 конкретні плани на наступний рік (простий майбутній: zmienię, zacznę, pojadę…); 3) одна велика мрія «на колись» (kiedyś).",
        minWords: 50,
        maxWords: 90,
        useWords: ["kiedyś", "za rok", "zamierzać", "marzenie"],
        checklist: [
          { label: "Щонайменше 3 дієслова ДВ у простому майбутньому (1-ша особа на -ę: zmienię, zacznę, pojadę…)", pattern: "(?<!\\p{L})(?!się|chcę|muszę|mogę|będę)\\p{L}{3,}ę(?!\\p{L})", min: 3 },
          { label: "Щонайменше 2 форми минулого часу на -łem/-łam", pattern: "\\p{L}+(łem|łam)(?!\\p{L})", min: 2 }
        ],
        model: "Moje plany na przyszły rok. W tym roku dużo się uczyłam, ale nie zdałam egzaminu z polskiego. Za to przeczytałam dziesięć książek po polsku! Za rok wszystko będzie inaczej. W styczniu zapiszę się na nowy kurs, a w czerwcu zdam egzamin. Zamierzam też oszczędzać: kupię rower i zacznę nim jeździć do pracy. W lipcu pojadę z przyjaciółmi w Bieszczady. A moje wielkie marzenie? Kiedyś przeprowadzę się do Krakowa i otworzę małą księgarnię."
      }
    },

    // ───────────────────────── УРОК 5 (ПОВТОРЕННЯ) ─────────────────────────
    {
      id: "m04l5",
      title: "Powtórka 4",
      titleRu: "Повторення модуля 4: вид і майбутній час",
      topic: "Terminy i kalendarz",
      review: true,
      minutes: 30,
      goals: [
        "Повторити видові пари і правила вибору виду",
        "Упевнено розрізняти складений майбутній (będę robić) і простий (zrobię)",
        "Навчитися домовлятися про зустріч, переносити й скасовувати її"
      ],

      vocab: [
        { pl: "termin", g: "m", ru: "термін, строк; запис (до лікаря), призначений час", ex: "Mam termin u dentysty w czwartek.", exRu: "У мене запис до стоматолога в четвер." },
        { pl: "umawiać się / umówić się", ru: "домовлятися / домовитися (про зустріч)", ex: "Umówiłam się z Bartkiem na kawę.", exRu: "Я домовилася з Бартеком зустрітися на каву.", note: "umówić się z kimś na coś / na godzinę" },
        { pl: "odwoływać / odwołać", ru: "скасовувати / скасувати (зустріч, рейс)", ex: "Trener odwołał trening.", exRu: "Тренер скасував тренування.", note: "теп. ч.: odwołuję, odwołujesz" },
        { pl: "przekładać / przełożyć", ru: "переносити / перенести (зустріч, строк)", ex: "Możemy przełożyć spotkanie na piątek?", exRu: "Можемо перенести зустріч на п’ятницю?", note: "przełożyć coś NA + знах. в.: na jutro, na piątek; як і укр. «перекласти», означає також переклад тексту" },
        { pl: "zdążyć", ru: "встигнути", ex: "Zdążyliśmy na ostatni autobus.", exRu: "Ми встигли на останній автобус.", note: "ДВ (пара НДВ zdążać вживається рідко); nie zdążę — не встигну; zdążyć na coś / coś zrobić" },
        { pl: "spóźniać się / spóźnić się", ru: "запізнюватися / запізнитися", ex: "Przepraszam, spóźnię się dziesięć minut.", exRu: "Вибачте, я запізнюся на десять хвилин.", note: "запізнитися НА 10 хвилин = spóźnić się (o) 10 minut; але: spóźnić się NA pociąg" },
        { pl: "przypominać / przypomnieć", ru: "нагадувати / нагадати", ex: "Aplikacja przypomina mi o wszystkich terminach.", exRu: "Застосунок нагадує мені про всі терміни.", note: "przypomnieć komuś o czymś" },
        { pl: "w ostatniej chwili", ru: "в останню хвилину, в останній момент", ex: "Zawsze pakuję się w ostatniej chwili.", exRu: "Я завжди пакуюся в останню хвилину." },
        { pl: "na czas", ru: "вчасно", ex: "Pociąg przyjechał na czas – to prawdziwy cud!", exRu: "Потяг прибув вчасно — справжнє диво!", note: "czas — «час», godzina — «година», як в українській; «на годину» — na godzinę" },
        { pl: "grafik", g: "m", ru: "графік (роботи, чергувань)", ex: "Mój grafik w tym tygodniu jest bardzo napięty.", exRu: "Мій графік на цьому тижні дуже щільний.", note: "також grafik — графічний дизайнер (жінка — graficzka)" }
      ],

      grammar: {
        title: "Підсумок модуля: вид і майбутній час",
        html: `<h4>1. Як утворюються видові пари</h4>
<table class="g">
<tr><th>спосіб</th><th>НДВ → ДВ</th></tr>
<tr><td>префікс</td><td class="pl">robić → zrobić, sprzątać → posprzątać, prać → wyprać, myć → umyć</td></tr>
<tr><td>-ać → -ić / -yć</td><td class="pl">włączać → włączyć, zapraszać → zaprosić, umawiać się → umówić się</td></tr>
<tr><td>-ywać / -iwać / -awać → без суфікса</td><td class="pl">pokazywać → pokazać, odwoływać → odwołać, dostawać → dostać</td></tr>
<tr><td>різні корені</td><td class="pl">brać → wziąć, mówić → powiedzieć, oglądać → obejrzeć, przekładać → przełożyć</td></tr>
</table>
<h4>2. Вид × час</h4>
<table class="g">
<tr><th></th><th>НДВ (robić)</th><th>ДВ (zrobić)</th></tr>
<tr><td>минулий</td><td class="pl">robiłem</td><td class="pl">zrobiłem</td></tr>
<tr><td>теперішній</td><td class="pl">robię</td><td>— (немає!)</td></tr>
<tr><td>майбутній</td><td class="pl">będę robić / będę robił</td><td class="pl">zrobię</td></tr>
</table>
<p>Складений майбутній: <span class="pl">będę, będziesz, będzie, będziemy, będziecie, będą</span> + інфінітив НДВ або форма на -ł (<span class="pl">będę pracował / pracowała</span>, <span class="pl">będziemy pracowali / pracowały</span>). Синтетичної форми на зразок українського «працюватиму» в польській немає.</p>
<h4>3. Як вибрати вид</h4>
<table class="g">
<tr><th>НДВ</th><th>ДВ</th></tr>
<tr><td>процес, тривалість: <span class="pl">przez godzinę, cały dzień</span></td><td>результат: <span class="pl">w godzinę, już, w końcu</span></td></tr>
<tr><td>повторення: <span class="pl">codziennie, zawsze, często</span></td><td>одна завершена дія</td></tr>
<tr><td>тло: <span class="pl">Kiedy oglądałem film…</span></td><td>подія: <span class="pl">…zadzwonił telefon.</span></td></tr>
<tr><td>після <span class="pl">lubić, nie lubić</span></td><td>після <span class="pl">muszę, chcę</span> + конкретне завдання</td></tr>
</table>
<h4>4. Час і вид: w, przez, za</h4>
<table class="g">
<tr><th>польською</th><th>українською</th><th>що потрібно</th></tr>
<tr><td class="pl">Zrobiłam to w godzinę.</td><td>за годину</td><td>ДВ (результат)</td></tr>
<tr><td class="pl">Robiłam to przez godzinę.</td><td>протягом години</td><td>НДВ (процес)</td></tr>
<tr><td class="pl">Zrobię to za godzinę.</td><td>через годину</td><td>майбутнє</td></tr>
</table>
<p>Часті форми простого майбутнього: <span class="pl">pójdę, pojadę, wezmę, powiem, zjem, dam, zacznę, znajdę, obejrzę, zdążę</span>.</p>
<div class="tip">Улюблені помилки українців: «będę zrobić» (✗ → <span class="pl">zrobię</span>), «dostawam» (✗ → <span class="pl">dostaję</span>), «skazał» замість <span class="pl">powiedział</span>, плутанина «przez rok» / <span class="pl">za rok</span> («через рік»; укр. «за рік» буває двозначним), «przejeżdżać» замість <span class="pl">przeprowadzać się</span> («переїжджати»), «będę zdążyć» (✗ → <span class="pl">zdążę</span>: zdążyć — ДВ).</div>
<div class="ex"><span class="pl">Przez tydzień pisałam raport, ale nie zdążyłam go skończyć. Jutro go skończę, a w piątek będę odpoczywać.</span> — Тиждень я писала звіт, але не встигла його закінчити. Завтра я його закінчу, а в п’ятницю відпочиватиму.</div>`
      },

      exercises: [
        { type: "choice", q: "Szef zawsze ___ spotkania w ostatniej chwili!", options: ["odwołuje", "odwoła", "odwołał"], answer: 0, explain: "«Zawsze» — звичка → НДВ odwoływać у теперішньому часі: odwołuje (-ywać → -uje)." },
        { type: "gap", q: "Przepraszam, nie ___ na pociąg. (zdążyć, ja – mężczyzna, мин. ч.)", answers: ["zdążyłem"], explain: "zdążyć — ДВ: zdążyłem / zdążyłam. Zdążyć NA coś — встигнути на щось." },
        { type: "gap", q: "Jutro ___ ci o terminie. (przypomnieć, ja)", answers: ["przypomnę"], explain: "przypomnieć (ДВ) → przypomnę — «нагадаю» (простий майбутній)." },
        { type: "match", q: "З’єднайте дієслово НДВ з його парою ДВ", pairs: [["brać", "wziąć"], ["oglądać", "obejrzeć"], ["przekładać", "przełożyć"], ["umawiać się", "umówić się"], ["sprzątać", "posprzątać"], ["dostawać", "dostać"]], explain: "Усі способи утворення пар: різні корені, суфікси, префікси." },
        { type: "choice", q: "Яке з дієслів — доконаного виду?", options: ["pokazywać", "odwoływać", "przełożyć"], answer: 2, explain: "przełożyć — ДВ (пара: przekładać). Pokazywać і odwoływać — НДВ із суфіксом -ywać." },
        { type: "gap", q: "W przyszłym tygodniu ___ z domu. (pracować, ja, складений майбутній)", answers: ["będę pracować", "będę pracował", "będę pracowała"], explain: "Складений майбутній: będę + pracować / pracował / pracowała." },
        { type: "choice", q: "Як сказати «Я не встигну»?", options: ["Nie zdążę.", "Nie będę zdążyć.", "Nie będę zdążył."], answer: 0, explain: "zdążyć — ДВ, тому лише простий майбутній: nie zdążę. З będę ДВ не поєднується." },
        { type: "order", ru: "Ми домовилися з Олею на п’ятницю.", words: ["Umówiliśmy", "się", "z", "Olą", "na", "piątek."], alt: ["Umówiliśmy się na piątek z Olą.", "Z Olą umówiliśmy się na piątek."], explain: "umówić się z kimś (оруд. в.) na coś (знах. в.)." },
        { type: "gap", q: "Czytałam cały wieczór, ale nie ___ całej książki. (przeczytać, ja)", answers: ["przeczytałam"], explain: "Результату немає — «не прочитала». Після заперечення — родовий: całej książki." },
        { type: "choice", q: "Kiedy ___ film, zadzwonił telefon.", options: ["oglądałem", "obejrzałem", "obejrzę"], answer: 0, explain: "Тло (що відбувалося) — НДВ oglądałem; подія, яка його перервала, — ДВ zadzwonił." },
        { type: "gap", q: "Ola zawsze ___ na zajęcia. (spóźniać się / spóźnić się)", answers: ["spóźnia się", "się spóźnia"], explain: "«Zawsze» — регулярно → НДВ: spóźnia się (або: zawsze się spóźnia)." },
        { type: "gap", q: "Co ___ w weekend? — Będziemy sprzątać. (robić, wy, майбутній)", answers: ["będziecie robić", "będziecie robili", "będziecie robiły"], explain: "Складений майбутній, 2-га особа множини: będziecie robić / robili / robiły (укр. «робитимете»)." },
        { type: "choice", q: "Nie lubię ___ spotkań.", options: ["odwoływać", "odwołać"], answer: 0, explain: "Після lubić / nie lubić — НДВ. Spotkań — родовий через заперечення." },
        { type: "translate", ru: "Через тиждень ми поїдемо до Кракова.", answers: ["Za tydzień pojedziemy do Krakowa.", "Pojedziemy do Krakowa za tydzień."], explain: "«Через тиждень» = za tydzień; «поїдемо» — простий майбутній ДВ pojechać: pojedziemy." },
        { type: "translate", ru: "Ти вже купив квитки?", answers: ["Czy już kupiłeś bilety?", "Kupiłeś już bilety?", "Już kupiłeś bilety?", "Czy kupiłeś już bilety?"], explain: "Результат → ДВ kupić: kupiłeś. Запитання можна почати з czy (як укр. «чи»)." }
      ],

      pronunciation: {
        focus: "Повторення: наголос та інтонація",
        tip: `<p>Підсумки модуля:</p>
<ul>
<li>Основне правило — наголос на <b>передостанньому</b> складі, і він «переїжджає», коли слово подовжується: <span class="pl">termin</span> (<b>ter</b>-min, на відміну від укр. «термІн») → <span class="pl">terminy</span> (ter-<b>mi</b>-ny).</li>
<li>Винятки — <b>третій склад від кінця</b>: слова на -yka/-ika (<span class="pl">gramatyka</span> — gra-<b>ma</b>-ty-ka), <span class="pl">uniwersytet</span>, <span class="pl">Rzeczpospolita</span>, форми на -liśmy/-liście (<span class="pl">przypomnieliśmy</span> — przy-po-<b>mnie</b>-li-śmy).</li>
<li>Запитання без czy — голос підвищується до кінця й не падає; запитання з co, gdzie, kiedy і ствердження — зниження наприкінці.</li>
</ul>`,
        items: [
          { type: "stress", word: "przypomnieliśmy", syllables: ["przy", "po", "mnie", "li", "śmy"], answer: 2 },
          { type: "stress", word: "gramatyka", syllables: ["gra", "ma", "ty", "ka"], answer: 1, accept: [2] },
          { type: "stress", word: "terminy", syllables: ["ter", "mi", "ny"], answer: 1 },
          { type: "minimal", options: ["Umówiłeś się z nią.", "Umówiłeś się z nią?"], ru: ["Ти домовився з нею. (ствердження)", "Ти домовився з нею? (запитання)"] },
          { type: "listen", text: "Czy zdążymy na pociąg o siedemnastej?", ru: "Чи встигнемо ми на потяг о 17:00?", note: "czy + підйом наприкінці; zdą-ŻY-my" },
          { type: "dictation", text: "Spóźniliśmy się na pociąg, bo szef przełożył spotkanie." }
        ]
      },

      reading: {
        title: "Plan idealny",
        text: "W niedzielę wieczorem Kasia, graficzka z Wrocławia, zawsze robi grafik na cały tydzień. Lubi wiedzieć, co będzie robić każdego dnia. Ma piękny papierowy kalendarz i aplikację, która przypomina jej o każdym terminie. Tym razem plan był idealny: „W poniedziałek skończę projekt dla klienta. We wtorek pójdę do dentysty – na ten termin czekam od trzech miesięcy. W środę będę cały dzień pracować w kawiarni. W czwartek posprzątam mieszkanie. A w piątek zjem kolację z Bartkiem – umówiliśmy się już tydzień temu”.\n\nW poniedziałek rano zadzwonił klient i powiedział, że zmienia koncepcję. Kasia pracowała do północy, ale nie skończyła projektu. We wtorek dentystka w ostatniej chwili odwołała wizytę i przełożyła ją na następny miesiąc. W środę w kawiarni nie działało Wi-Fi, więc Kasia wypiła cztery kawy i nic nie zrobiła. W czwartek zepsuła się pralka i woda zalała łazienkę. Kasia sprzątała do wieczora. Wieczorem aplikacja przypomniała jej: „Jutro kolacja z Bartkiem!”. „Przynajmniej to mi się uda” — pomyślała Kasia.\n\nW piątek Kasia nie zdążyła na tramwaj i spóźniła się na kolację czterdzieści minut. Bartek czekał z bukietem tulipanów.\n\n— Przepraszam! Pierwszy raz w życiu nic nie zrobiłam na czas — westchnęła Kasia.\n\n— Nic nie szkodzi. Wiesz co? W przyszły weekend nie będziemy nic planować. Po prostu pojedziemy w Karkonosze.\n\nKasia uśmiechnęła się i wyłączyła aplikację z kalendarzem. Na zawsze? Nie. Do niedzieli.",
        glossary: [
          { pl: "graficzka", ru: "графічна дизайнерка" },
          { pl: "papierowy", ru: "паперовий" },
          { pl: "koncepcję", ru: "концепцію" },
          { pl: "dentystka", ru: "стоматологиня" },
          { pl: "wizytę", ru: "візит, прийом (у лікаря)" },
          { pl: "zalała", ru: "залила" },
          { pl: "bukietem", ru: "букетом" },
          { pl: "westchnęła", ru: "зітхнула" },
          { pl: "Nic nie szkodzi", ru: "Нічого страшного" },
          { pl: "Przynajmniej", ru: "принаймні, хоча б" }
        ],
        questions: [
          { type: "tf", q: "Kasia skończyła projekt w poniedziałek.", answer: false, explain: "«Pracowała do północy, ale nie skończyła projektu» — процес був, результату немає." },
          { type: "choice", q: "Co się stało we wtorek?", options: ["Kasia była u dentysty.", "Dentystka przełożyła wizytę.", "Kasia pracowała w kawiarni."], answer: 1, explain: "«Dentystka w ostatniej chwili odwołała wizytę i przełożyła ją na następny miesiąc»." },
          { type: "tf", q: "W środę Kasia dużo zrobiła w kawiarni.", answer: false, explain: "Wi-Fi не працював: «wypiła cztery kawy i nic nie zrobiła»." },
          { type: "choice", q: "Dlaczego Kasia spóźniła się na kolację?", options: ["Bo nie zdążyła na tramwaj.", "Bo sprzątała łazienkę.", "Bo zapomniała o spotkaniu."], answer: 0, explain: "«Nie zdążyła na tramwaj i spóźniła się na kolację czterdzieści minut»." },
          { type: "tf", q: "Bartek proponuje wyjazd w góry.", answer: true, explain: "«Po prostu pojedziemy w Karkonosze» — Karkonosze (Крконоше) — гори неподалік від Вроцлава." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля «Mój tydzień i moje plany» (60–90 слів). 1) Розкажіть, як минув ваш останній тиждень: що ви робили довго (НДВ), що встигли чи не встигли зробити (ДВ), що довелося скасувати або перенести. 2) Розкажіть про плани на наступний місяць: що ви робитимете регулярно (będę + НДВ) і що конкретно зробите (простий майбутній).",
        minWords: 60,
        maxWords: 90,
        useWords: ["zdążyć", "przełożyć", "termin", "na czas"],
        checklist: [
          { label: "Складений майбутній: щонайменше 2 рази będę / będziemy + дієслово", pattern: "(?<!\\p{L})będ(ę|ziesz|zie|ziemy|ziecie|ą)\\s+\\p{L}+", min: 2 },
          { label: "Минулий час: щонайменше 3 форми на -łem/-łam/-liśmy", pattern: "\\p{L}+(łem|łam|liśmy|łyśmy)(?!\\p{L})", min: 3 },
          { label: "Простий майбутній: щонайменше 2 форми на -ę (zrobię, pojadę…)", pattern: "(?<!\\p{L})(?!się|chcę|muszę|mogę|będę)\\p{L}{3,}ę(?!\\p{L})", min: 2 }
        ],
        model: "Ostatni tydzień był bardzo pracowity. W poniedziałek i we wtorek pisałam raport, ale nie zdążyłam go skończyć na czas. Szef musiał przełożyć spotkanie z klientem. W środę w końcu napisałam raport i wysłałam go o północy! W czwartek miałam termin u dentysty, ale odwołałam wizytę, bo byłam zmęczona. W przyszłym miesiącu będę mniej pracować. Zapiszę się na jogę i pojadę do przyjaciółki do Torunia. W weekendy będziemy razem gotować i oglądać seriale. Mam nadzieję, że wszystko zrobię na czas!"
      }
    }
  ]
});
