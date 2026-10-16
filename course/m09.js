// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m09",
  n: 9,
  level: "B1",
  title: "Porównania",
  titleRu: "Порівняння",
  summary: "Ви вмієте порівнювати товари, міста й спосіб життя (tańszy, najlepszy, coraz lepiej, im więcej, tym lepiej) і розповідати загадкові історії із займенниками ktoś, coś, nikt, nic, ktokolwiek.",
  lessons: [
    // ───────────────────────── Урок 1 ─────────────────────────
    {
      id: "m09l1",
      title: "Tańszy, lepszy, większy",
      titleRu: "Вищий ступінь прикметників",
      topic: "Zakupy porównawcze",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати вищий ступінь прикметників: -szy, -iejszy/-ejszy та неправильні форми (lepszy, gorszy, większy, mniejszy)",
        "Порівнювати предмети за допомогою niż та od + родовий відмінок",
        "Казати, наскільки щось дорожче чи дешевше: o 100 złotych tańszy, o wiele lepszy",
        "Обговорювати покупку: ціну, якість, гарантію та повернення"
      ],
      vocab: [
        { pl: "porównywać / porównać", ru: "порівнювати / порівняти", ex: "Zawsze porównuję ceny w kilku sklepach.", exRu: "Я завжди порівнюю ціни в кількох магазинах.", note: "co z czym: porównać telefon z laptopem" },
        { pl: "porównywarka cen", g: "f", ru: "сайт порівняння цін", ex: "Sprawdziłem tę lodówkę na porównywarce cen.", exRu: "Я перевірив цей холодильник на сайті порівняння цін.", note: "найвідоміший у Польщі — Ceneo" },
        { pl: "jakość", g: "f", ru: "якість", ex: "Ta kurtka jest droższa, ale jakość jest o wiele lepsza.", exRu: "Ця куртка дорожча, але якість набагато краща." },
        { pl: "różnica", g: "f", ru: "різниця", ex: "Jaka jest różnica między tymi modelami?", exRu: "Яка різниця між цими моделями?", note: "różnica w cenie — різниця в ціні" },
        { pl: "okazja", g: "f", ru: "вигідна покупка; нагода", ex: "Sto złotych za te buty? To prawdziwa okazja!", exRu: "Сто злотих за ці черевики? Це справжня знахідка!", note: "z okazji urodzin — з нагоди дня народження" },
        { pl: "przecena", g: "f", ru: "уцінка, знижка", ex: "Po świętach w sklepach są duże przeceny.", exRu: "Після свят у магазинах великі знижки.", note: "na przecenie — зі знижкою" },
        { pl: "opłacalny", ru: "вигідний", ex: "Czy to naprawdę opłacalny zakup?", exRu: "Це справді вигідна покупка?" },
        { pl: "trwały", ru: "міцний, довговічний", ex: "Skórzane buty są trwalsze niż materiałowe.", exRu: "Шкіряні черевики міцніші, ніж тканинні.", note: "вищ. ст.: trwalszy" },
        { pl: "lekki", ru: "легкий (за вагою)", ex: "Ten plecak jest lżejszy od mojego.", exRu: "Цей рюкзак легший за мій.", note: "вищ. ст.: lżejszy (!)" },
        { pl: "pojemny", ru: "місткий", ex: "Ta walizka jest mała, ale bardzo pojemna.", exRu: "Ця валіза маленька, але дуже містка.", note: "вищ. ст.: pojemniejszy" },
        { pl: "wygodny", ru: "зручний (не «вигідний»!)", ex: "Te buty są wygodniejsze niż tamte.", exRu: "Ці черевики зручніші, ніж ті." },
        { pl: "gwarancja", g: "f", ru: "гарантія", ex: "Laptop ma dwa lata gwarancji.", exRu: "Ноутбук має два роки гарантії.", note: "na gwarancji — на гарантії" },
        { pl: "zwrot", g: "m", ru: "повернення (товару, грошей)", ex: "Masz czternaście dni na zwrot towaru.", exRu: "У тебе є чотирнадцять днів на повернення товару.", note: "в інтернет-магазинах у Польщі — 14 днів" },
        { pl: "rozsądny", ru: "розсудливий, розумний", ex: "To rozsądna cena za taką jakość.", exRu: "Це розумна ціна за таку якість." }
      ],
      grammar: {
        title: "Вищий ступінь прикметників: tańszy, lepszy, większy",
        html: `<p>Щоб сказати «дешевший», «кращий», «більший» про предмет, поляки використовують <b>повний прикметник</b> із суфіксом <b>-szy</b> або <b>-iejszy / -ejszy</b>. Він відмінюється як звичайний прикметник: <span class="pl">tańszy telefon, tańsza kurtka, tańsze buty</span>. Добра новина для українців: це майже дзеркало нашого вищого ступеня на -ший / -іший (дешевший, новіший, мудріший). І так само, як в українській, польська форма <b>завжди узгоджується</b> з іменником у роді, числі й відмінку: дешевший телефон, дешевша куртка, дешевші черевики.</p>
<h4>1. Одна приголосна перед закінченням → -szy</h4>
<table class="g">
<tr><th>було</th><th>стало</th><th>що змінюється</th></tr>
<tr><td class="pl">nowy, młody, stary</td><td class="pl">nowszy, młodszy, starszy</td><td>просто -szy</td></tr>
<tr><td class="pl">tani</td><td class="pl">tańszy</td><td>n → ń</td></tr>
<tr><td class="pl">drogi, długi</td><td class="pl">droższy, dłuższy</td><td>g → ż (пор. дорогий → дорожчий)</td></tr>
<tr><td class="pl">krótki, brzydki</td><td class="pl">krótszy, brzydszy</td><td>суфікс -k- випадає (пор. короткий → коротший)</td></tr>
<tr><td class="pl">wysoki, niski, bliski</td><td class="pl">wyższy, niższy, bliższy</td><td>-k- / -ok- випадає, s → ż (пор. високий → вищий)</td></tr>
<tr><td class="pl">miły, trwały</td><td class="pl">milszy, trwalszy</td><td>ł → l</td></tr>
</table>
<h4>2. Дві приголосні й більше → -iejszy / -ejszy (≈ укр. -іший)</h4>
<table class="g">
<tr><th>було</th><th>стало</th></tr>
<tr><td class="pl">ładny, wygodny, pojemny</td><td class="pl">ładniejszy, wygodniejszy, pojemniejszy</td></tr>
<tr><td class="pl">łatwy, trudny</td><td class="pl">łatwiejszy, trudniejszy</td></tr>
<tr><td class="pl">ciepły</td><td class="pl">cieplejszy (ł → l)</td></tr>
<tr><td class="pl">mądry</td><td class="pl">mądrzejszy (r → rz)</td></tr>
</table>
<h4>3. Неправильні форми (пор. укр. ліпший, гірший, менший) — вивчити напам’ять</h4>
<table class="g">
<tr><td class="pl">dobry → lepszy</td><td class="pl">zły → gorszy</td></tr>
<tr><td class="pl">duży → większy</td><td class="pl">mały → mniejszy</td></tr>
<tr><td class="pl">lekki → lżejszy</td><td class="pl">ciężki → cięższy</td></tr>
</table>
<h4>4. З чим порівнюємо: niż або od</h4>
<div class="ex"><span class="pl">Ten laptop jest tańszy niż tamten.</span> — <b>niż</b> + зазвичай називний відмінок</div>
<div class="ex"><span class="pl">Ten laptop jest tańszy od tamtego.</span> — <b>od</b> + родовий відмінок</div>
<div class="ex"><span class="pl">Jestem starszy od siostry. = Jestem starszy niż siostra.</span> — Я старший від сестри. = Я старший, ніж сестра.</div>
<div class="tip">Тут українцям пощастило: наше «ніж» — це польське <b>niż</b>. Лише не плутайте його з <span class="pl">czym</span> (<span class="pl">czym</span> — це «чим?» у значенні «за допомогою чого»: <span class="pl">Czym jedziesz?</span>). А українське «від» + родовий («старший від сестри») — це польське <b>od</b>: <span class="pl">starszy od siostry</span>. Пастка — конструкція «за» + знахідний («старший за сестру»): у польській вона неможлива. І стежте за відмінком: <span class="pl">niż ja</span>, але <span class="pl">od mnie</span>; «niż mnie» — помилка.</div>
<h4>5. Наскільки? — o + знахідний</h4>
<div class="ex"><span class="pl">o wiele lepszy, dużo lepszy, znacznie lepszy</span> — набагато кращий</div>
<div class="ex"><span class="pl">trochę droższy</span> — трохи дорожчий</div>
<div class="ex"><span class="pl">o trzysta złotych tańszy, o dwa lata młodszy</span> — на триста злотих дешевший, на два роки молодший</div>
<div class="tip">Українське «<b>на</b> 300 злотих дешевший» польською — <b>o</b> + знахідний: <span class="pl">o 300 złotych tańszy</span>. Прийменник «na» тут неможливий!</div>
<h4>6. Чоловічоособовий рід у множині</h4>
<p>Як ви пам’ятаєте з модуля 7, коли йдеться про групи людей, де є чоловіки, закінчення змінюється: <b>-szy → -si</b>.</p>
<div class="ex"><span class="pl">lepszy → lepsi, starszy → starsi, młodszy → młodsi, ładniejszy → ładniejsi</span></div>
<div class="ex"><span class="pl">Nowi sprzedawcy są milsi niż poprzedni.</span> — Нові продавці привітніші за попередніх.</div>`
      },
      exercises: [
        { type: "choice", q: "Ten rower jest ___ niż tamten. (dobry)", options: ["lepszy", "dobrzejszy", "lepiej"], answer: 0, explain: "dobry → lepszy — неправильна форма (пор. укр. ліпший). Lepiej — прислівник (як?), а тут потрібен прикметник (який?)." },
        { type: "gap", q: "Twoja torba jest ___ od mojej. (duży)", answers: ["większa"], explain: "duży → większy (неправильна форма); torba — ж. р., тому większa. Od mojej — od + родовий (пор. «більша від моєї»)." },
        { type: "gap", q: "Bilet na pociąg jest ___ niż bilet na autobus. (drogi)", answers: ["droższy"], explain: "drogi → droższy: g чергується з ż — як в українському дорогий → дорожчий. Bilet — ч. р." },
        { type: "gap", q: "Ta kurtka jest ___ niż tamta. (ciepły)", answers: ["cieplejsza"], explain: "У ciepły перед закінченням дві приголосні (pł) → -ejszy, а ł → l: cieplejszy. Kurtka — ж. р. → cieplejsza." },
        { type: "choice", q: "Mój brat jest o dwa lata starszy ___ mnie.", options: ["od", "niż", "z"], answer: 0, explain: "od + родовий: od mnie (як укр. «від мене»). З niż потрібен називний: niż ja, а «niż mnie» — помилка. «На два роки старший» = o dwa lata starszy." },
        { type: "match", q: "З’єднайте прикметник із його вищим ступенем", pairs: [["tani", "tańszy"], ["lekki", "lżejszy"], ["zły", "gorszy"], ["mały", "mniejszy"], ["łatwy", "łatwiejszy"], ["krótki", "krótszy"]], explain: "tani → tańszy (n → ń); lekki → lżejszy, zły → gorszy, mały → mniejszy — неправильні; łatwy → łatwiejszy (дві приголосні); krótki → krótszy (-k- випадає)." },
        { type: "order", ru: "Цей телефон на сто злотих дешевший.", words: ["Ten", "telefon", "jest", "o", "sto", "złotych", "tańszy."], alt: ["Ten telefon jest tańszy o sto złotych."], explain: "Українське «на сто злотих» → o + знахідний: o sto złotych. Зазвичай різниця стоїть перед прикметником." },
        { type: "choice", q: "Te buty są ___ niż tamte. (wygodny)", options: ["wygodniejsze", "wygodniejsi", "wygodniejszy"], answer: 0, explain: "Buty — не чоловічо-особова множина → закінчення -e: wygodniejsze. Форма на -si (wygodniejsi) — лише про групи людей, де є чоловіки. І пам’ятайте: wygodny — це «зручний», а не «вигідний»." },
        { type: "gap", q: "Nowi sąsiedzi są o wiele ___ niż poprzedni. (miły)", answers: ["milsi"], explain: "miły → milszy; sąsiedzi — чоловічо-особова множина, тому -szy → -si: milsi (як lepsi, starsi)." },
        { type: "translate", ru: "Цей рюкзак набагато легший.", answers: ["Ten plecak jest o wiele lżejszy.", "Ten plecak jest dużo lżejszy.", "Ten plecak jest znacznie lżejszy."], explain: "lekki → lżejszy (неправильна форма). «Набагато» = o wiele / dużo / znacznie." }
      ],
      pronunciation: {
        focus: "-ejszy (ładniejszy, łatwiejszy)",
        tip: `<p>Суфікс <b>-iejszy / -ejszy</b> звучить приблизно як українське «-ейши». Головне — правильно поєднати його з основою.</p>
<ul>
<li><b>ni</b> перед голосною — це один м’який звук [н’]: <span class="pl">ład-niej-szy</span>. Окремого [і] тут немає — не кажіть «ладні-ейши».</li>
<li><b>j</b> перед <b>sz</b> — коротке «й», його не можна ковтати: <span class="pl">mniejszy</span>, а не «мнеши».</li>
<li><b>sz</b> — твердий, як українське «ш», а склад sz + <b>y</b> звучить майже як українське «ши» у слові «шия» — тут вам дуже легко.</li>
<li>У <span class="pl">łatwiejszy</span> звук <b>w</b> після глухого <b>t</b> оглушується і звучить як [ф].</li>
<li>Наголос — на передостанній склад, тобто завжди на <b>-iej- / -ej-</b>: <span class="pl">ład-NIEJ-szy, wy-god-NIEJ-szy, cie-PLEJ-szy</span>.</li>
</ul>`,
        items: [
          { type: "listen", text: "ładniejszy", ru: "гарніший", note: "ład-NIEJ-szy" },
          { type: "listen", text: "łatwiejszy", ru: "легший, простіший", note: "w після t звучить як [ф]" },
          { type: "stress", word: "wygodniejszy", syllables: ["wy", "god", "niej", "szy"], answer: 2 },
          { type: "stress", word: "cieplejszy", syllables: ["cie", "plej", "szy"], answer: 1 },
          { type: "minimal", options: ["tańszy", "tańsze"], ru: ["дешевший (ч. р.)", "дешевше / дешевші (с. р., мн.)"] },
          { type: "listen", text: "Ta kurtka jest ładniejsza i cieplejsza niż tamta.", ru: "Ця куртка гарніша й тепліша за ту." },
          { type: "dictation", text: "Ten plecak jest lżejszy i wygodniejszy niż tamten." }
        ]
      },
      reading: {
        title: "Dziadek kupuje laptop",
        text: "Dziadek Zbyszek ma siedemdziesiąt dwa lata i postanowił kupić swój pierwszy laptop. Jego wnuk Kuba od razu otworzył porównywarkę cen.\n\n– Zobacz, dziadku. Ten srebrny jest o trzysta złotych tańszy od czarnego, ale czarny jest lżejszy i ma lepszą baterię.\n– A który jest trwalszy? – zapytał dziadek. – Mój telewizor działa od 1998 roku. Chcę coś równie dobrego.\nKuba westchnął. Dzisiejsze laptopy nie są trwalsze niż stare telewizory, ale za to są o wiele szybsze i mniejsze.\n\nW sobotę pojechali do sklepu z elektroniką. Sprzedawca pokazał im trzeci model: większy i cięższy od tamtych, ale z dłuższą gwarancją i w dodatku na przecenie. – To prawdziwa okazja! Jakość jest lepsza, a różnica w cenie niewielka – zachwalał. Dziadek długo porównywał wszystkie trzy laptopy. Pytał o zwrot, o gwarancję, a nawet o to, czy laptop jest wygodniejszy w łóżku niż na biurku.\n\nWreszcie wybrał… czwarty laptop, który znalazł w gazetce Biedronki. – Jest brzydszy niż tamte, ale tańszy od wszystkich i ma klawiaturę z większymi literami – wyjaśnił z dumą. – Rozsądna cena, rozsądny wybór!\n\nKuba tylko się uśmiechnął. Tydzień później dziadek zadzwonił do niego o siódmej rano: – Kuba, a gdzie się w tym laptopie włącza internet?",
        glossary: [
          { pl: "postanowił", ru: "вирішив" },
          { pl: "wnuk", ru: "онук" },
          { pl: "westchnął", ru: "зітхнув" },
          { pl: "za to", ru: "зате, натомість" },
          { pl: "w dodatku", ru: "до того ж" },
          { pl: "zachwalał", ru: "розхвалював" },
          { pl: "w gazetce", ru: "у рекламній газетці (магазину)" },
          { pl: "brzydszy", ru: "негарніший" },
          { pl: "z dumą", ru: "з гордістю (duma ≠ «дума»!)" }
        ],
        questions: [
          { type: "tf", q: "Srebrny laptop jest droższy od czarnego.", answer: false, explain: "Навпаки: srebrny jest o trzysta złotych tańszy od czarnego." },
          { type: "tf", q: "Według Kuby dzisiejsze laptopy są trwalsze niż stare telewizory.", answer: false, explain: "Kuba вважає, що вони nie są trwalsze, зате szybsze i mniejsze." },
          { type: "choice", q: "Jaki był laptop, który pokazał sprzedawca?", options: ["Mniejszy i lżejszy od pozostałych", "Większy i cięższy, ale z dłuższą gwarancją", "Tańszy od laptopa z gazetki"], answer: 1, explain: "«większy i cięższy od tamtych, ale z dłuższą gwarancją i w dodatku na przecenie»." },
          { type: "choice", q: "Dlaczego dziadek wybrał laptop z gazetki?", options: ["Bo był ładniejszy od innych", "Bo był lżejszy od innych", "Bo był tańszy i miał większe litery na klawiaturze"], answer: 2, explain: "«tańszy od wszystkich i ma klawiaturę z większymi literami»." },
          { type: "tf", q: "Dziadek uważa, że laptop z gazetki jest ładniejszy niż tamte.", answer: false, explain: "Dziadek mówi: «Jest brzydszy niż tamte» — негарніший, зате дешевший." }
        ]
      },
      writing: {
        prompt: "Ваш друг Kuba вибирає між двома велосипедами (або телефонами, ноутбуками — на ваш вибір) і просить поради. Напишіть йому повідомлення: 1) порівняйте ціну й скажіть, на скільки один дорожчий чи дешевший (o … złotych); 2) порівняйте якість, вагу та зручність; 3) згадайте гарантію; 4) порадьте, що купити, і поясніть чому. Використайте niż та od.",
        minWords: 80,
        maxWords: 130,
        useWords: ["jakość", "różnica", "opłacalny", "gwarancja"],
        checklist: [
          { label: "Щонайменше 4 форми вищого ступеня (tańszy, lepszy, wygodniejszy…)", pattern: "(?<!\\p{L})\\p{L}*(?:lepsz|gorsz|większ|mniejsz|ejsz|ższ|ńsz|krótsz|nowsz|starsz|młodsz|trwalsz|brzydsz)\\p{L}*", min: 4 },
          { label: "Порівняння через niż або od (щонайменше 2 рази)", pattern: "(?<!\\p{L})(?:niż|od)(?!\\p{L})", min: 2 },
          { label: "Різниця в ціні: o … złotych", pattern: "(?<!\\p{L})o\\s+\\p{L}+\\s+złotych", min: 1 }
        ],
        model: "Cześć Kuba!\nPorównałem oba rowery na porównywarce cen. Czerwony kosztuje 2400 złotych, a niebieski jest o czterysta złotych tańszy. Różnica jest spora, ale jakość też jest inna. Czerwony rower jest lżejszy od niebieskiego i ma lepsze hamulce. Niebieski jest cięższy, ale wygodniejszy i ma większy bagażnik, więc jest lepszy na zakupy. Czerwony ma też dłuższą gwarancję – trzy lata zamiast dwóch. Moim zdaniem czerwony jest bardziej opłacalny, bo jest trwalszy niż niebieski i nie zepsuje się tak szybko. Ale jeśli jeździsz tylko po mieście, niebieski też będzie rozsądnym wyborem. Czerwony jest teraz na przecenie, więc to dobra okazja!\nDaj znać, co wybrałeś.\nMarek"
      }
    },

    // ───────────────────────── Урок 2 ─────────────────────────
    {
      id: "m09l2",
      title: "Najlepszy z najlepszych",
      titleRu: "Найвищий ступінь",
      topic: "Rekordy i rankingi",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати найвищий ступінь із naj-: najtańszy, najlepszy, największy (як укр. най-: найдешевший, найкращий)",
        "Використовувати bardziej / najbardziej та mniej / najmniej з довгими прикметниками й дієприкметниками",
        "Казати «най… з …», «один із найкращих», «якнайдешевший»: z + родовий, jeden z…, jak naj-",
        "Розповідати про польські рекорди й складати рейтинги"
      ],
      vocab: [
        { pl: "rekord", g: "m", ru: "рекорд", ex: "Robert Lewandowski pobił kolejny rekord.", exRu: "Роберт Левандовський побив черговий рекорд.", note: "pobić rekord — побити рекорд" },
        { pl: "ranking", g: "m", ru: "рейтинг", ex: "Kraków jest wysoko w rankingu najpiękniejszych miast Europy.", exRu: "Краків посідає високе місце в рейтингу найгарніших міст Європи." },
        { pl: "zwycięzca", g: "m", ru: "переможець", ex: "Zwycięzca konkursu dostanie rower.", exRu: "Переможець конкурсу отримає велосипед.", note: "ж. р.: zwyciężczyni" },
        { pl: "wynik", g: "m", ru: "результат, рахунок", ex: "To najlepszy wynik w historii klubu.", exRu: "Це найкращий результат в історії клубу." },
        { pl: "zdobywać / zdobyć", ru: "здобувати / здобути, вигравати", ex: "Polscy siatkarze zdobyli złoty medal mistrzostw świata.", exRu: "Польські волейболісти здобули золоту медаль чемпіонату світу.", note: "zdobyć szczyt, nagrodę, punkty" },
        { pl: "nagroda", g: "f", ru: "нагорода, приз, премія", ex: "Wisława Szymborska dostała Nagrodę Nobla w 1996 roku.", exRu: "Віслава Шимборська отримала Нобелівську премію 1996 року." },
        { pl: "szczyt", g: "m", ru: "вершина, пік", ex: "Rysy to najwyższy szczyt w Polsce.", exRu: "Риси — найвища вершина в Польщі.", note: "godziny szczytu — година пік" },
        { pl: "głęboki", ru: "глибокий", ex: "Hańcza to najgłębsze jezioro w Polsce.", exRu: "Ганьча — найглибше озеро в Польщі.", note: "вищ. ст.: głębszy (як укр. глибший)" },
        { pl: "ludność", g: "f", ru: "населення", ex: "Ludność Warszawy to prawie dwa miliony osób.", exRu: "Населення Варшави — майже два мільйони осіб." },
        { pl: "powierzchnia", g: "f", ru: "площа (розмір)", ex: "Warszawa ma największą powierzchnię ze wszystkich polskich miast.", exRu: "Варшава має найбільшу площу з усіх польських міст.", note: "площа в місті (майдан) — plac!" },
        { pl: "zaludniony", ru: "населений, заселений", ex: "To najbardziej zaludniona dzielnica miasta.", exRu: "Це найбільш населений район міста." },
        { pl: "słynny", ru: "відомий, славетний", ex: "Toruń jest słynny z pierników.", exRu: "Торунь славиться пряниками.", note: "słynny z czegoś — відомий чимось" },
        { pl: "wyjątkowy", ru: "винятковий, особливий", ex: "To był wyjątkowy dzień.", exRu: "Це був особливий день." }
      ],
      grammar: {
        title: "Найвищий ступінь: naj-, najbardziej, z + родовий",
        html: `<p>Найвищий ступінь утворюється дуже просто: <b>naj- + вищий ступінь</b>. Пишеться разом — точнісінько як українське най-: найдешевший, найкращий, найменший.</p>
<table class="g">
<tr><th>вихідна форма</th><th>вищий</th><th>найвищий</th></tr>
<tr><td class="pl">tani</td><td class="pl">tańszy</td><td class="pl">najtańszy</td></tr>
<tr><td class="pl">głęboki</td><td class="pl">głębszy</td><td class="pl">najgłębszy</td></tr>
<tr><td class="pl">ładny</td><td class="pl">ładniejszy</td><td class="pl">najładniejszy</td></tr>
<tr><td class="pl">dobry</td><td class="pl">lepszy</td><td class="pl">najlepszy</td></tr>
<tr><td class="pl">zły</td><td class="pl">gorszy</td><td class="pl">najgorszy</td></tr>
<tr><td class="pl">duży</td><td class="pl">większy</td><td class="pl">największy</td></tr>
<tr><td class="pl">mały</td><td class="pl">mniejszy</td><td class="pl">najmniejszy</td></tr>
</table>
<p>Відмінюється як звичайний прикметник: <span class="pl">najlepszy, najlepsza, najlepsze</span>; про групи, де є чоловіки, — <span class="pl">najlepsi, najmłodsi, najszczęśliwsi</span>.</p>
<div class="tip">Суржикове «<b>самий</b> дешевий» — не норма української мови, а перекладати «самий» словом <span class="pl">sam</span> не можна! «Найдешевший» — <span class="pl">najtańszy</span>, «найдовша річка» — <span class="pl">najdłuższa rzeka</span>: польське naj- = українське най-. А польське <span class="pl">sam</span> означає «сам, один».</div>
<h4>bardziej / najbardziej, mniej / najmniej</h4>
<p>Описова (складена) форма — як українське «більш / найбільш» — потрібна, коли форма на -szy не утворюється або звучить неприродно:</p>
<ul>
<li>дієприкметники та слова на <b>-ony, -ty, -ący</b>: <span class="pl">zmęczony → bardziej zmęczony</span>, <span class="pl">zaludniony → najbardziej zaludniony</span>, <span class="pl">interesujący → najbardziej interesujący</span>;</li>
<li>багато прикметників на <b>-owy</b> і довгі запозичені слова: <span class="pl">kolorowy → bardziej kolorowy</span>, <span class="pl">optymistyczny → najbardziej optymistyczny</span>;</li>
<li>«менш / найменш» — завжди описово: <span class="pl">mniej ciekawy, najmniej popularny</span>.</li>
</ul>
<p>Деякі слова допускають обидва варіанти: <span class="pl">najpopularniejszy = najbardziej popularny</span>.</p>
<div class="tip">Не змішуйте два способи: «najbardziej najlepszy», «bardziej większy» — помилка, як і українське «більш кращий» чи «самий найкращий». І зверніть увагу: українському «більш» тут відповідає bardziej, а не więcej («więcej ciekawy» — помилка).</div>
<h4>З кого? Де?</h4>
<div class="ex"><span class="pl">najmłodszy z nas, najlepszy ze wszystkich</span> — <b>z / ze + родовий</b> (як укр. «наймолодший з нас, найкращий з усіх»)</div>
<div class="ex"><span class="pl">najwyższy szczyt w Polsce, najdłuższa rzeka na świecie</span> — <b>w / na + місцевий</b></div>
<div class="ex"><span class="pl">jeden z najlepszych filmów, jedna z najpiękniejszych plaż</span> — один / одна з… + родовий мн.</div>
<div class="ex"><span class="pl">Która z was jest najstarsza?</span> — Котра з вас (дівчат) найстарша?</div>
<div class="tip">«Найбільший у світі» — <span class="pl">na świecie</span>, а не «w świecie», хоч українське «у світі» й підштовхує до цієї помилки: <span class="pl">największy zamek na świecie</span>. А «в Польщі, в Європі» — <span class="pl">w Polsce, w Europie</span>.</div>
<div class="tip"><span class="pl">jeden</span> узгоджується в роді з іменником — так само, як українське «один / одна / одне з…»: <span class="pl">jeden z najstarszych zamków</span> (ч. р.), <span class="pl">jedna z najstarszych kamienic</span> (ж. р.), <span class="pl">jedno z najstarszych miast</span> (с. р.). Орієнтуйтеся на рід польського слова, а не українського: muzeum — середнього роду (jedno z muzeów), хоча «музей» — чоловічого.</div>
<h4>jak + naj- = укр. «якнай-» (але польською — окремо!)</h4>
<div class="ex"><span class="pl">Szukam jak najtańszego biletu.</span> — Шукаю якнайдешевшого квитка.</div>
<div class="ex"><span class="pl">Chcę wrócić jak najszybciej.</span> — Хочу повернутися якнайшвидше.</div>`
      },
      exercises: [
        { type: "choice", q: "Rysy to ___ szczyt w Polsce.", options: ["najwyższy", "najwyżej", "wyższy"], answer: 0, explain: "«Найвища вершина» → найвищий ступінь прикметника: najwyższy (szczyt — ч. р.). Najwyżej — прислівник." },
        { type: "gap", q: "To jest ___ restauracja w mieście. (dobry)", answers: ["najlepsza"], explain: "dobry → lepszy → najlepszy; restauracja — ж. р.: najlepsza." },
        { type: "gap", q: "Kasia jest najmłodsza ze ___ (wszyscy).", answers: ["wszystkich"], explain: "«З усіх» = ze wszystkich: z(e) + родовий. Перед групою приголосних wsz- прийменник z перетворюється на ze (пор. укр. «зі всіх»)." },
        { type: "choice", q: "To było ___ pytanie w całym quizie. (interesujący)", options: ["najbardziej interesujące", "najinteresujące", "najbardziej interesujący"], answer: 0, explain: "Від слів на -ący найвищий ступінь утворюється через najbardziej. Pytanie — с. р. → interesujące." },
        { type: "gap", q: "Warszawa to ___ zaludnione miasto w Polsce. (bardziej / najbardziej)", answers: ["najbardziej"], explain: "Zaludniony — дієприкметник на -ony, тому ступінь описовий. «Найбільш населене» → najbardziej zaludnione." },
        { type: "order", ru: "Це один із найвідоміших замків у світі.", words: ["To", "jeden", "z", "najsłynniejszych", "zamków", "na", "świecie."], alt: ["To jeden z najsłynniejszych na świecie zamków."], explain: "jeden z + родовий мн.: jeden z najsłynniejszych zamków. «У світі» — na świecie." },
        { type: "match", q: "З’єднайте польські форми з перекладом", pairs: [["najlepszy", "найкращий"], ["najgorszy", "найгірший"], ["największy", "найбільший"], ["najmniejszy", "найменший"], ["najmniej ciekawy", "найменш цікавий"], ["jak najtańszy", "якнайдешевший"]], explain: "naj- + вищий ступінь (як укр. най-); najmniej + прикметник = «найменш»; jak naj- = «якнай-»." },
        { type: "choice", q: "Szukam ___ biletu do Gdańska.", options: ["jak najtańszego", "najtańszy", "jak najtańszy"], answer: 0, explain: "jak + naj- = «якнай-». Szukać вимагає родового: szukam biletu → jak najtańszego biletu (пор. «шукаю якнайдешевшого квитка»)." },
        { type: "gap", q: "To jeden z ___ filmów tego roku. (dobry)", answers: ["najlepszych"], explain: "jeden z + родовий мн.: najlepszych filmów." },
        { type: "translate", ru: "Він найвищий у класі.", answers: ["On jest najwyższy w klasie.", "Jest najwyższy w klasie."], explain: "wysoki → wyższy → najwyższy — як укр. високий → вищий → найвищий. Жодного «sam»!" }
      ],
      pronunciation: {
        focus: "Групи приголосних у naj- (najszczęśliwszy, najzdrowszy)",
        tip: `<p>Префікс <b>naj-</b> часто «врізається» в довгу групу приголосних. Головне — <b>не вставляти зайвих голосних</b> і не робити пауз.</p>
<ul>
<li><b>j</b> у naj- — коротке «й», одразу переходьте до наступної приголосної: <span class="pl">naj-zdrow-szy</span>, а не «наї-здрофши».</li>
<li><b>szcz</b> — це «ш» + «ч», обидва тверді. Тобто це точнісінько українське «щ» (щастя, щука) — вимовляйте сміливо!</li>
<li><b>w</b> перед <b>sz</b> оглушується в [ф]: <span class="pl">zdrowszy</span> ≈ «здрофши», <span class="pl">szczęśliwszy</span> ≈ «…сьліфши».</li>
<li>Префікс naj- <b>не перетягує на себе наголосу</b>: він лишається на передостанньому складі — <span class="pl">naj-ZDROW-szy, naj-LEP-szy, naj-szczę-ŚLIW-szy</span>. Типова помилка: «НАЙлепши».</li>
</ul>`,
        items: [
          { type: "listen", text: "najszczęśliwszy", ru: "найщасливіший", note: "naj-szczę-ŚLIW-szy, w звучить як [ф]" },
          { type: "listen", text: "najzdrowszy", ru: "найздоровіший", note: "naj-ZDROW-szy" },
          { type: "stress", word: "najszczęśliwszy", syllables: ["naj", "szczę", "śliw", "szy"], answer: 2 },
          { type: "stress", word: "najprzyjemniejszy", syllables: ["naj", "przy", "jem", "niej", "szy"], answer: 3 },
          { type: "minimal", options: ["najmłodszy", "najmłodsi"], ru: ["наймолодший", "наймолодші (про людей)"] },
          { type: "listen", text: "Najzdrowsze jedzenie nie zawsze jest najsmaczniejsze.", ru: "Найкорисніша їжа не завжди найсмачніша." },
          { type: "dictation", text: "Według rankingu najszczęśliwsi ludzie mieszkają w Finlandii." }
        ]
      },
      reading: {
        title: "Quiz w pubie",
        text: "Co czwartek w małym pubie na krakowskim Kazimierzu odbywa się quiz. Drużyna „Najmądrzejsi” – Ania, Tomek i Michał – ma najbardziej optymistyczną nazwę, ale niestety nie najlepsze wyniki. W rankingu sezonu zajmuje dopiero dziewiąte miejsce z dwunastu.\n\nTego wieczoru tematem były polskie rekordy. Pierwsze pytanie: „Jaki jest najwyższy szczyt w Polsce?”. – Rysy! – krzyknął Tomek. Drugie: „Która rzeka jest najdłuższa?”. Wisła, oczywiście. Potem były pytania o słynny zamek w Malborku – największy ceglany zamek na świecie – i o najbardziej zaludnione miasto w kraju. Na razie wszystko szło świetnie.\n\nAle potem zrobiło się trudniej. „Które jezioro jest najgłębsze: Śniardwy czy Hańcza?”. Michał był pewny, że Śniardwy, bo to największe jezioro w Polsce. Ania przypomniała mu jednak, że największe nie znaczy najgłębsze. Hańcza ma ponad sto metrów głębokości!\n\nNajtrudniejsze okazało się ostatnie pytanie: „Jaki jest najwyższy budynek w Polsce?”. Prawie wszystkie drużyny napisały: Pałac Kultury i Nauki. Tylko Ania pamiętała, że od 2022 roku najwyższy jest Varso Tower – ma 310 metrów i jest najwyższym budynkiem w całej Unii Europejskiej.\n\nNa końcu prowadzący ogłosił wyniki. „Najmądrzejsi” zdobyli pierwsze miejsce i pierwszy raz zostali zwycięzcami! Nagroda? Największa pizza w menu.\n– To najszczęśliwszy wieczór w moim życiu! – powiedział Tomek.\n– Jeden z najszczęśliwszych – poprawiła go Ania. – Najszczęśliwszy będzie wtedy, kiedy wygramy cały sezon.",
        glossary: [
          { pl: "Kazimierzu", ru: "Казімеж — історичний район Кракова" },
          { pl: "Drużyna", ru: "команда (не «дружина»!)" },
          { pl: "ceglany", ru: "цегляний" },
          { pl: "głębokości", ru: "глибини" },
          { pl: "okazało się", ru: "виявилося" },
          { pl: "prowadzący", ru: "ведучий" },
          { pl: "ogłosił", ru: "оголосив" },
          { pl: "poprawiła", ru: "виправила, поправила" }
        ],
        questions: [
          { type: "tf", q: "Przed tym wieczorem „Najmądrzejsi” mieli bardzo dobre wyniki w rankingu.", answer: false, explain: "Ні: вони були лише на дев’ятому місці з дванадцяти (dopiero dziewiąte miejsce)." },
          { type: "choice", q: "Które jezioro jest najgłębsze w Polsce?", options: ["Śniardwy", "Hańcza", "Morskie Oko"], answer: 1, explain: "Śniardwy — największe (найбільше), а najgłębsze — Hańcza, ponad sto metrów." },
          { type: "tf", q: "Według tekstu Pałac Kultury i Nauki jest dziś najwyższym budynkiem w Polsce.", answer: false, explain: "З 2022 року найвища будівля — Varso Tower (310 м)." },
          { type: "choice", q: "Co drużyna dostała jako nagrodę?", options: ["Bilety do Malborka", "Największą pizzę w menu", "Darmowe piwo na cały sezon"], answer: 1, explain: "«Nagroda? Największa pizza w menu»." },
          { type: "choice", q: "Dlaczego Ania poprawiła Tomka?", options: ["Bo jej zdaniem to był jeden z najszczęśliwszych wieczorów, a nie najszczęśliwszy", "Bo Tomek pomylił Wisłę z Odrą", "Bo drużyna zajęła drugie miejsce"], answer: 0, explain: "Ania: «Jeden z najszczęśliwszych» — найщасливішим буде вечір, коли вони виграють увесь сезон." }
        ]
      },
      writing: {
        prompt: "Міський портал проводить акцію «Mój ranking». Напишіть допис «TOP 3 miejsca w moim mieście»: 1) назвіть три місця (кав’ярню, парк, музей, вулицю…) і розставте їх за місцями; 2) поясніть, чим кожне краще за інші (naj-, bardziej / najbardziej); 3) хоча б раз використайте «jeden z / jedna z…» та z + родовий; 4) наприкінці поставте запитання читачам.",
        minWords: 80,
        maxWords: 130,
        useWords: ["słynny", "wyjątkowy", "ranking", "zwycięzca"],
        checklist: [
          { label: "Щонайменше 4 форми найвищого ступеня (naj-)", pattern: "(?<!\\p{L})naj\\p{L}+", min: 4 },
          { label: "Конструкція jeden z / jedna z / jedno z…", pattern: "(?<!\\p{L})(?:jeden|jedna|jedno|jednym|jedną)\\s+ze?(?!\\p{L})", min: 1 },
          { label: "Описова форма: bardziej / najbardziej / najmniej", pattern: "(?<!\\p{L})(?:bardziej|najbardziej|mniej|najmniej)(?!\\p{L})", min: 1 }
        ],
        model: "Mój ranking: TOP 3 w Poznaniu\nNa trzecim miejscu jest Stary Rynek. To jeden z najpiękniejszych rynków w Polsce, a koziołki na ratuszu są chyba najsłynniejszymi kozami w kraju. Niestety w weekendy to także najbardziej zatłoczone miejsce w mieście.\nDrugie miejsce zajmuje Jezioro Maltańskie. Dla mnie to najlepsze miejsce na spacer i najzdrowszy sposób na stres. Rano jest tam najciszej i najspokojniej.\nZwycięzca mojego rankingu to mała kawiarnia na Jeżycach. Nie jest najtańsza, ale ma najsmaczniejsze ciasto ze wszystkich kawiarni, jakie znam. To wyjątkowe miejsce – najbardziej przytulne w całym Poznaniu.\nA jakie są wasze ulubione miejsca? Napiszcie w komentarzach!"
      }
    },

    // ───────────────────────── Урок 3 ─────────────────────────
    {
      id: "m09l3",
      title: "Szybciej, lepiej, zdrowiej",
      titleRu: "Прислівники та їхні ступені порівняння",
      topic: "Styl życia",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати прислівники від прикметників та їхні ступені: szybko → szybciej → najszybciej",
        "Розрізняти lepszy / lepiej і większy / więcej (як укр. кращий / краще, більший / більше)",
        "Використовувати coraz + вищий ступінь, im…, tym… та jak najszybciej",
        "Розповідати про свій спосіб життя та звички"
      ],
      vocab: [
        { pl: "zdrowo", ru: "здорово, корисно для здоров’я", ex: "Staram się jeść zdrowo.", exRu: "Я намагаюся правильно харчуватися.", note: "вищ. ст.: zdrowiej" },
        { pl: "regularnie", ru: "регулярно", ex: "Regularnie chodzę na basen.", exRu: "Я регулярно ходжу до басейну." },
        { pl: "ruszać się", ru: "рухатися", ex: "Powinieneś się więcej ruszać.", exRu: "Тобі варто більше рухатися." },
        { pl: "wysypiać się / wyspać się", ru: "висипатися / виспатися", ex: "W weekend wreszcie się wyspałam.", exRu: "На вихідних я нарешті виспалася." },
        { pl: "odżywiać się", ru: "харчуватися", ex: "Odżywiam się teraz zdrowiej niż kiedyś.", exRu: "Тепер я харчуюся здоровіше, ніж колись." },
        { pl: "nawyk", g: "m", ru: "звичка", ex: "Picie wody to dobry nawyk.", exRu: "Пити воду — добра звичка.", note: "синонім: przyzwyczajenie" },
        { pl: "wysiłek", g: "m", ru: "зусилля, навантаження", ex: "Po wysiłku trzeba odpocząć.", exRu: "Після навантаження треба відпочити.", note: "wysiłek fizyczny — фізичне навантаження" },
        { pl: "siedzący tryb życia", g: "m", ru: "сидячий спосіб життя", ex: "Siedzący tryb życia szkodzi zdrowiu.", exRu: "Сидячий спосіб життя шкодить здоров’ю." },
        { pl: "rzucać / rzucić", ru: "кидати / кинути", ex: "Mój tata rzucił palenie dwa lata temu.", exRu: "Мій тато кинув курити два роки тому.", note: "rzucić palenie, pracę — кинути курити, роботу" },
        { pl: "ograniczać / ograniczyć", ru: "обмежувати / обмежити", ex: "Ograniczyłem słodycze i kawę.", exRu: "Я обмежив солодощі й каву." },
        { pl: "krok", g: "m", ru: "крок", ex: "Codziennie robię dziesięć tysięcy kroków.", exRu: "Щодня я роблю десять тисяч кроків." },
        { pl: "równowaga", g: "f", ru: "рівновага, баланс", ex: "Najważniejsza jest równowaga między pracą a odpoczynkiem.", exRu: "Найважливіше — баланс між роботою та відпочинком." },
        { pl: "coraz", ru: "дедалі, щораз (більше…)", ex: "Jest coraz cieplej.", exRu: "Стає дедалі тепліше.", note: "coraz + вищий ступінь; пор. укр. «щораз»" }
      ],
      grammar: {
        title: "Прислівники та їхні ступені: szybciej, lepiej, najwięcej",
        html: `<p>Прислівник відповідає на питання <b>як?</b> Він утворюється від прикметника із закінченням <b>-o</b> або <b>-ie / -e</b>:</p>
<table class="g">
<tr><th>-o</th><th>-ie / -e</th></tr>
<tr><td class="pl">szybki → szybko</td><td class="pl">ładny → ładnie</td></tr>
<tr><td class="pl">zdrowy → zdrowo</td><td class="pl">regularny → regularnie</td></tr>
<tr><td class="pl">częsty → często</td><td class="pl">wczesny → wcześnie</td></tr>
<tr><td class="pl">długi → długo</td><td class="pl">dobry → dobrze (!)</td></tr>
<tr><td class="pl">tani → tanio</td><td class="pl">zły → źle (!)</td></tr>
</table>
<h4>Ступені порівняння: -iej / -ej та naj-</h4>
<table class="g">
<tr><th>прислівник</th><th>вищий</th><th>найвищий</th></tr>
<tr><td class="pl">szybko</td><td class="pl">szybciej</td><td class="pl">najszybciej</td></tr>
<tr><td class="pl">zdrowo</td><td class="pl">zdrowiej</td><td class="pl">najzdrowiej</td></tr>
<tr><td class="pl">często</td><td class="pl">częściej</td><td class="pl">najczęściej</td></tr>
<tr><td class="pl">rzadko</td><td class="pl">rzadziej</td><td class="pl">najrzadziej</td></tr>
<tr><td class="pl">długo</td><td class="pl">dłużej</td><td class="pl">najdłużej</td></tr>
<tr><td class="pl">wcześnie</td><td class="pl">wcześniej</td><td class="pl">najwcześniej</td></tr>
<tr><td class="pl">cicho</td><td class="pl">ciszej</td><td class="pl">najciszej</td></tr>
</table>
<p>Під час утворення форм на <b>-iej / -ej</b> відбуваються чергування приголосних: k → c (<span class="pl">szybko → szybciej</span>), st → ść (<span class="pl">często → częściej</span>), g → ż (<span class="pl">długo → dłużej</span>), ch → sz (<span class="pl">cicho → ciszej</span>). Зверніть увагу: там, де українська має суфікс -ше / -іше (швидше, частіше, тихіше), польська має -iej / -ej.</p>
<h4>Неправильні форми</h4>
<table class="g">
<tr><td class="pl">dobrze</td><td class="pl">lepiej</td><td class="pl">najlepiej</td></tr>
<tr><td class="pl">źle</td><td class="pl">gorzej</td><td class="pl">najgorzej</td></tr>
<tr><td class="pl">dużo</td><td class="pl">więcej</td><td class="pl">najwięcej</td></tr>
<tr><td class="pl">mało</td><td class="pl">mniej</td><td class="pl">najmniej</td></tr>
<tr><td class="pl">bardzo</td><td class="pl">bardziej</td><td class="pl">najbardziej</td></tr>
</table>
<div class="tip">Українська тут допомагає: ми розрізняємо «<b>кращий</b>» (який?) і «<b>краще</b>» (як?) — і поляки так само: <span class="pl">Ten rower jest lepszy.</span> (який? — прикметник) ↔ <span class="pl">Jeżdżę lepiej.</span> (як? — прислівник). <span class="pl">większy dom</span> (розмір, «більший») ↔ <span class="pl">więcej czasu</span> (кількість, «більше»). Пастка в іншому: український прислівник «краще» збігається з прикметником середнього роду (краще місто), а польський — ні: lepsze miasto, але robię to lepiej. «Мені краще» — <span class="pl">Jest mi lepiej / Czuję się lepiej</span>, «виглядаєш краще» — <span class="pl">wyglądasz lepiej</span>.</div>
<p><b>więcej / mniej / najwięcej</b> вимагають родового відмінка, як і українські «більше / менше»: <span class="pl">więcej snu, mniej cukru, najwięcej kroków</span>.</p>
<p>Порівняння будується так само, як із прикметниками: <span class="pl">Biegam szybciej niż ty.</span> = <span class="pl">Biegam szybciej od ciebie.</span> Підсилення — <span class="pl">o wiele lepiej, dużo częściej, trochę wolniej</span>.</p>
<h4>Корисні конструкції</h4>
<div class="ex"><span class="pl">coraz lepiej, coraz częściej, coraz zdrowsze jedzenie</span> — дедалі краще, дедалі частіше, дедалі здоровіша їжа (<b>coraz</b> + вищий ступінь; пор. укр. «щораз»)</div>
<div class="ex"><span class="pl">Im więcej się ruszasz, tym lepiej śpisz.</span> — Чим більше рухаєшся, тим краще спиш.</div>
<div class="ex"><span class="pl">Odpisz jak najszybciej!</span> — Відпиши якнайшвидше!</div>
<div class="tip">Не перекладайте дослівно: «дедалі краще» / «усе краще» — <span class="pl">coraz lepiej</span>, а не «wszystko lepiej»; «чим…, тим…» — <span class="pl">im…, tym…</span>, а не «czym…, tym…».</div>`
      },
      exercises: [
        { type: "choice", q: "Mówisz po polsku coraz ___! (dobrze)", options: ["lepiej", "lepszy", "dobrzej"], answer: 0, explain: "Як говориш? — потрібен прислівник: dobrze → lepiej. Lepszy — прикметник (який?)." },
        { type: "gap", q: "Mój brat biega ___ ode mnie. (szybko)", answers: ["szybciej"], explain: "szybko → szybciej (k → c + -iej). Ode mnie — od + родовий; перед mnie прийменник od перетворюється на ode." },
        { type: "gap", q: "Zimą śpię ___ niż latem. (długo)", answers: ["dłużej"], explain: "długo → dłużej: g → ż, як у dłuższy." },
        { type: "choice", q: "Muszę jeść ___ cukru. (mało)", options: ["mniej", "mniejszy", "mniejszego"], answer: 0, explain: "Кількість → прислівник mniej + родовий (cukru), як укр. «менше цукру». Mniejszy — про розмір." },
        { type: "gap", q: "Kto w twojej rodzinie gotuje ___? (dobrze, найвищий ступінь)", answers: ["najlepiej"], explain: "dobrze → lepiej → najlepiej (як укр. добре → краще → найкраще)." },
        { type: "match", q: "З’єднайте прислівник із його вищим ступенем", pairs: [["często", "częściej"], ["rzadko", "rzadziej"], ["źle", "gorzej"], ["dużo", "więcej"], ["wcześnie", "wcześniej"], ["cicho", "ciszej"]], explain: "Чергування: st → ść (częściej), dk → dz (rzadziej), ch → sz (ciszej); źle → gorzej і dużo → więcej — неправильні." },
        { type: "order", ru: "Чим більше ти спиш, тим краще себе почуваєш.", words: ["Im", "więcej", "śpisz,", "tym", "lepiej", "się", "czujesz."], alt: ["Im więcej śpisz, tym się lepiej czujesz."], explain: "«Чим…, тим…» = im…, tym… (не czym!). Частка się зазвичай стоїть ближче до початку своєї частини речення." },
        { type: "choice", q: "Odpisz mi jak ___, proszę.", options: ["najszybciej", "najszybszy", "szybciej"], answer: 0, explain: "jak + naj- + прислівник = укр. «якнай-»: jak najszybciej — якнайшвидше." },
        { type: "choice", q: "Ten sernik jest ___ niż tamten, ale tamten wygląda ___.", options: ["lepszy … ładniej", "lepiej … ładniejszy", "lepszy … ładniejszy"], answer: 0, explain: "Sernik jest (який?) lepszy — прикметник. Wygląda (як?) ładniej — після wyglądać у польській ставиться прислівник." },
        { type: "translate", ru: "Мені вже краще.", answers: ["Już mi lepiej.", "Czuję się już lepiej.", "Jest mi już lepiej.", "Już czuję się lepiej."], explain: "Про самопочуття — прислівник lepiej. «Jestem lepszy» означало б «я кращий (за когось)»." }
      ],
      pronunciation: {
        focus: "Довгі слова та ритм (najprawdopodobniej)",
        tip: `<p>У польській наголос майже завжди падає на <b>передостанній</b> склад — навіть у дуже довгих словах: <span class="pl">naj-praw-do-po-DOB-niej</span>. У довгих словах з’являється ще легкий побічний наголос на першому складі: <b>NAJ</b>-praw-do-po-<b>DOB</b>-niej.</p>
<ul>
<li>Ненаголошені голосні вимовляйте чітко — українцям це звично: польське <b>o</b> завжди звучить як [о]: <span class="pl">prawdopodobnie</span> — усі три «о» виразні. Стежте лише за e: в українській ненаголошене «е» часто звучить невиразно, а польське e завжди чисте й відкрите.</li>
<li>Вимовляйте слово рівно, склад за складом — польський ритм рівніший, без сильного розтягування наголошеного складу.</li>
<li>Тренуйтеся «нарощуванням»: <span class="pl">podobnie → prawdopodobnie → najprawdopodobniej</span>.</li>
<li>У формах на <b>-iej</b> наголос теж на передостанньому складі: <span class="pl">naj-CZĘ-ściej, re-gu-LAR-niej</span>.</li>
</ul>`,
        items: [
          { type: "listen", text: "najprawdopodobniej", ru: "найімовірніше", note: "NAJ-praw-do-po-DOB-niej" },
          { type: "stress", word: "najprawdopodobniej", syllables: ["naj", "praw", "do", "po", "dob", "niej"], answer: 4 },
          { type: "stress", word: "regularnie", syllables: ["re", "gu", "lar", "nie"], answer: 2 },
          { type: "stress", word: "najczęściej", syllables: ["naj", "czę", "ściej"], answer: 1 },
          { type: "stress", word: "prawdopodobnie", syllables: ["praw", "do", "po", "dob", "nie"], answer: 3 },
          { type: "listen", text: "Im więcej się ruszasz, tym lepiej śpisz.", ru: "Чим більше рухаєшся, тим краще спиш." },
          { type: "dictation", text: "Teraz śpię dłużej i czuję się o wiele lepiej." }
        ]
      },
      reading: {
        title: "Trzydzieści dni bez wymówek",
        text: "Nazywam się Paweł, mam trzydzieści cztery lata i jestem programistą we Wrocławiu. Jeszcze miesiąc temu prowadziłem typowy siedzący tryb życia: osiem godzin przed komputerem, wieczorem serial i pizza. Spałem coraz krócej, a męczyłem się coraz szybciej. Kiedy okazało się, że po schodach na trzecie piętro wchodzę wolniej niż moja osiemdziesięcioletnia sąsiadka, postanowiłem coś zmienić. Od razu i bez wymówek.\n\nPrzez trzydzieści dni chciałem żyć zdrowiej. Zasady były proste: robić co najmniej dziesięć tysięcy kroków dziennie, ograniczyć cukier i kłaść się spać wcześniej. Pierwszy tydzień był najgorszy. Brakowało mi słodyczy, a nogi bolały mnie bardziej niż po maratonie, którego nigdy nie przebiegłem.\n\nPotem jednak było coraz łatwiej. Do pracy zacząłem jeździć rowerem, a w przerwie, zamiast przeglądać internet, ruszałem się na świeżym powietrzu. Odżywiałem się regularniej i jadłem mniej, ale lepiej. Najbardziej zaskoczyło mnie to, że wreszcie się wysypiałem: rano wstawałem łatwiej niż kiedyś i miałem więcej energii.\n\nDzisiaj mija trzydziesty dzień. Czy jestem nowym człowiekiem? Nie do końca. Ale po schodach wchodzę już szybciej niż sąsiadka, a to dla mnie najlepszy wynik. I jeszcze jedno: im dłużej trzymam się nowych nawyków, tym rzadziej mam ochotę na pizzę. No, prawie. W piątek pizza jest dozwolona. Równowaga przede wszystkim!",
        glossary: [
          { pl: "wymówek", ru: "відмовок, виправдань" },
          { pl: "męczyłem się", ru: "втомлювався (не «мучився»)" },
          { pl: "słodyczy", ru: "солодощів" },
          { pl: "przebiegłem", ru: "пробіг" },
          { pl: "przeglądać", ru: "переглядати, гортати" },
          { pl: "zaskoczyło", ru: "здивувало, заскочило" },
          { pl: "mija", ru: "минає" },
          { pl: "dozwolona", ru: "дозволена" },
          { pl: "przede wszystkim", ru: "передусім, насамперед" }
        ],
        questions: [
          { type: "tf", q: "Przed wyzwaniem Paweł wchodził po schodach szybciej niż jego sąsiadka.", answer: false, explain: "Навпаки: він підіймався повільніше (wolniej), ніж 80-річна сусідка." },
          { type: "choice", q: "Który tydzień był dla Pawła najtrudniejszy?", options: ["Pierwszy", "Drugi", "Ostatni"], answer: 0, explain: "«Pierwszy tydzień był najgorszy»." },
          { type: "choice", q: "Co Paweł robił w przerwie w pracy?", options: ["Przeglądał internet", "Ruszał się na świeżym powietrzu", "Jadł pizzę"], answer: 1, explain: "«zamiast przeglądać internet, ruszałem się na świeżym powietrzu»." },
          { type: "tf", q: "Im dłużej Paweł trzyma się nowych nawyków, tym częściej ma ochotę na pizzę.", answer: false, explain: "Навпаки: «tym rzadziej mam ochotę na pizzę»." },
          { type: "tf", q: "Paweł może jeść pizzę w piątki.", answer: true, explain: "«W piątek pizza jest dozwolona»." }
        ]
      },
      writing: {
        prompt: "На форумі «Zdrowy styl życia» обговорюють тему «Co zmieniliście w ostatnim roku?». Напишіть свій допис: 1) яким був ваш спосіб життя раніше; 2) що ви тепер робите частіше / рідше, більше / менше, краще (вищий ступінь прислівників); 3) що було найважче; 4) використайте coraz + вищий ступінь і конструкцію im…, tym….",
        minWords: 80,
        maxWords: 130,
        useWords: ["regularnie", "nawyk", "coraz", "ograniczyć"],
        checklist: [
          { label: "Щонайменше 4 прислівники у вищому / найвищому ступені (lepiej, częściej, więcej…)", pattern: "(?<!\\p{L})(?:naj)?(?:lepiej|gorzej|więcej|mniej|dłużej|drożej|krócej|wyżej|niżej|bliżej|dalej|ciszej|rzadziej|\\p{L}+iej)(?!\\p{L})", min: 4 },
          { label: "coraz + вищий ступінь", pattern: "(?<!\\p{L})coraz(?!\\p{L})", min: 1 },
          { label: "Конструкція im…, tym…", pattern: "(?<!\\p{L})im(?!\\p{L})[^.!?]*(?<!\\p{L})tym(?!\\p{L})", min: 1 }
        ],
        model: "Cześć wszystkim!\nRok temu prowadziłam bardzo niezdrowy tryb życia: pracowałam do późna, jadłam byle co i spałam najwyżej sześć godzin. Teraz żyję zdrowiej. Do pracy chodzę pieszo, więc ruszam się więcej niż kiedyś i robię prawie dziesięć tysięcy kroków dziennie. Ograniczyłam słodycze i piję mniej kawy. Kładę się spać wcześniej, dlatego regularnie się wysypiam i rano wstaję łatwiej. Zmiana nawyków nie była łatwa, ale z każdym tygodniem było coraz lepiej. Najtrudniej było mi rzucić wieczorne podjadanie. Im dłużej żyję w ten sposób, tym lepiej się czuję. Najważniejsza jest dla mnie równowaga – w niedzielę zawsze jem kawałek sernika!\nPozdrawiam, Ola"
      }
    },

    // ───────────────────────── Урок 4 ─────────────────────────
    {
      id: "m09l4",
      title: "Ktoś, coś, nikt, nic",
      titleRu: "Неозначені та заперечні займенники",
      topic: "Tajemnice",
      review: false,
      minutes: 30,
      goals: [
        "Відмінювати kto і co (а також ktoś, coś, nikt, nic) в усіх відмінках",
        "Розрізняти ряди ktoś / ktokolwiek / nikt, coś / cokolwiek / nic, gdzieś / nigdzie, kiedyś / nigdy (≈ хтось / будь-хто / ніхто)",
        "Правильно будувати заперечення: Nikt nic nie wie; Nie widzę nikogo (родовий)",
        "Розповідати загадкову історію"
      ],
      vocab: [
        { pl: "tajemnica", g: "f", ru: "таємниця, секрет", ex: "Umiesz dochować tajemnicy?", exRu: "Ти вмієш берегти таємниці?", note: "dochować tajemnicy (родовий) — зберегти таємницю" },
        { pl: "zagadka", g: "f", ru: "загадка", ex: "Policja wciąż nie rozwiązała tej zagadki.", exRu: "Поліція досі не розгадала цієї загадки.", note: "rozwiązać zagadkę — розгадати загадку" },
        { pl: "tajemniczy", ru: "таємничий", ex: "Ktoś wysłał mi tajemniczy list.", exRu: "Хтось надіслав мені таємничого листа." },
        { pl: "podejrzewać", ru: "підозрювати", ex: "Podejrzewam, że ktoś czytał mój pamiętnik.", exRu: "Я підозрюю, що хтось читав мій щоденник.", note: "podejrzewać kogo o co" },
        { pl: "ślad", g: "m", ru: "слід", ex: "Złodziej nie zostawił żadnych śladów.", exRu: "Злодій не залишив жодних слідів." },
        { pl: "świadek", g: "m", ru: "свідок", ex: "Czy był jakiś świadek?", exRu: "Чи був якийсь свідок?", note: "мн.: świadkowie" },
        { pl: "znikać / zniknąć", ru: "зникати / зникнути", ex: "Mój rower zniknął spod bloku.", exRu: "Мій велосипед зник з-під будинку.", note: "мин. ч.: zniknął, zniknęła" },
        { pl: "ukrywać / ukryć", ru: "ховати, приховувати / сховати, приховати", ex: "Wiem, że coś przede mną ukrywasz.", exRu: "Я знаю, що ти щось від мене приховуєш.", note: "ukrywać coś przed kimś — від когось" },
        { pl: "zauważać / zauważyć", ru: "помічати / помітити", ex: "Nikt nie zauważył, że wyszłam.", exRu: "Ніхто не помітив, що я пішла." },
        { pl: "plotka", g: "f", ru: "плітка, чутка", ex: "Nie wierz w plotki!", exRu: "Не вір пліткам!", note: "plotkować — пліткувати" },
        { pl: "odkrywać / odkryć", ru: "виявляти, розкривати / виявити, розкрити", ex: "W końcu odkryliśmy prawdę.", exRu: "Зрештою ми дізналися правду." },
        { pl: "strych", g: "m", ru: "горище (зах.-укр. «стрих»)", ex: "Na strychu babci jest pełno starych rzeczy.", exRu: "На бабусиному горищі повно старих речей.", note: "na strychu — на горищі" },
        { pl: "przypadek", g: "m", ru: "випадок, збіг", ex: "Spotkaliśmy się przez przypadek.", exRu: "Ми зустрілися випадково.", note: "przez przypadek = przypadkiem — випадково" }
      ],
      grammar: {
        title: "Відмінювання kto / co та займенники ktoś, nikt, ktokolwiek",
        html: `<h4>1. Відмінювання kto, co та їхніх «родичів»</h4>
<table class="g">
<tr><th>відмінок</th><th>kto</th><th>co</th><th>ktoś</th><th>nikt</th></tr>
<tr><td>M. (наз.)</td><td class="pl">kto</td><td class="pl">co</td><td class="pl">ktoś</td><td class="pl">nikt</td></tr>
<tr><td>D. (род.)</td><td class="pl">kogo</td><td class="pl">czego</td><td class="pl">kogoś</td><td class="pl">nikogo</td></tr>
<tr><td>C. (дав.)</td><td class="pl">komu</td><td class="pl">czemu</td><td class="pl">komuś</td><td class="pl">nikomu</td></tr>
<tr><td>B. (знах.)</td><td class="pl">kogo</td><td class="pl">co</td><td class="pl">kogoś</td><td class="pl">nikogo</td></tr>
<tr><td>N. (оруд.)</td><td class="pl">kim</td><td class="pl">czym</td><td class="pl">kimś</td><td class="pl">nikim</td></tr>
<tr><td>Ms. (місц.)</td><td class="pl">o kim</td><td class="pl">o czym</td><td class="pl">o kimś</td><td class="pl">o nikim</td></tr>
</table>
<p><span class="pl">coś</span> і <span class="pl">nic</span> відмінюються як <span class="pl">co</span>: <span class="pl">czegoś, czemuś, czymś</span>; <span class="pl">niczego, niczemu, niczym, o niczym</span>. Зовсім як українські «хтось — когось — комусь», «щось — чогось — чомусь».</p>
<h4>2. Три ряди займенників</h4>
<table class="g">
<tr><th>питання</th><th>-ś (укр. «-сь»)</th><th>-kolwiek (укр. «будь-»)</th><th>ni- (укр. «ні-»)</th></tr>
<tr><td class="pl">kto</td><td class="pl">ktoś</td><td class="pl">ktokolwiek</td><td class="pl">nikt</td></tr>
<tr><td class="pl">co</td><td class="pl">coś</td><td class="pl">cokolwiek</td><td class="pl">nic</td></tr>
<tr><td class="pl">gdzie</td><td class="pl">gdzieś</td><td class="pl">gdziekolwiek</td><td class="pl">nigdzie</td></tr>
<tr><td class="pl">kiedy</td><td class="pl">kiedyś</td><td class="pl">kiedykolwiek</td><td class="pl">nigdy</td></tr>
<tr><td class="pl">jaki</td><td class="pl">jakiś</td><td class="pl">jakikolwiek</td><td class="pl">żaden</td></tr>
<tr><td class="pl">skąd</td><td class="pl">skądś</td><td class="pl">skądkolwiek</td><td class="pl">znikąd</td></tr>
</table>
<h4>3. Подвійне заперечення</h4>
<p>Як і в українській (хтось — ніхто, щось — ніщо, десь — ніде, колись — ніколи, а «жоден» — це żaden), при ni-словах перед дієсловом обов’язково стоїть <b>nie</b>, а прямий додаток після заперечення стоїть у <b>родовому</b> відмінку (в українській тут можливий і знахідний, у польській — лише родовий):</p>
<div class="ex"><span class="pl">Nikt nic nie widział.</span> — Ніхто нічого не бачив.</div>
<div class="ex"><span class="pl">Nigdy nigdzie nie wyjeżdżam.</span> — Я ніколи нікуди не виїжджаю.</div>
<div class="ex"><span class="pl">Nie znam tu nikogo.</span> — Я нікого тут не знаю.</div>
<h4>4. Пастки й підказки</h4>
<ul>
<li><b>coś / nic + прикметник у родовому</b>: <span class="pl">coś ciekawego, nic nowego, coś słodkiego</span>. «Нічого нового» збігається з польським, а от українське «щось цікаве» стоїть у називному, звідси типова помилка «coś ciekawe».</li>
<li>У питаннях українському «<b>хтось / хто-небудь</b>» зазвичай відповідає <b>-ś</b>, а не -kolwiek: <span class="pl">Czy ktoś dzwonił?</span> — Хтось дзвонив? <span class="pl">Byłeś kiedyś w Gdańsku?</span> — Ти колись був у Гданську?</li>
<li><span class="pl">kiedyś</span> — як і українське «колись»: і в минулому, і в майбутньому: <span class="pl">Kiedyś tu mieszkałem. Kiedyś tam pojadę.</span></li>
<li><b>-kolwiek</b> = «будь-», «хоч би хто / хоч би що»: <span class="pl">Zapytaj kogokolwiek.</span> — Спитай будь-кого. <span class="pl">Cokolwiek zrobisz, będę z tobą.</span> — Хоч би що ти зробив, я буду з тобою. Пишеться разом, без дефіса.</li>
<li>Після <span class="pl">ktoś / nikt</span> дієслово в минулому часі — у ч. р., після <span class="pl">coś / nic</span> — у с. р., як і в українській: <span class="pl">Nikt nie przyszedł. Coś się stało. Nic się nie stało.</span></li>
</ul>`
      },
      exercises: [
        { type: "choice", q: "Czy ___ dzwonił do mnie, kiedy mnie nie było?", options: ["ktoś", "nikt", "coś"], answer: 0, explain: "У питанні «хтось / хто-небудь» → ktoś. Nikt вимагає nie, а coś — «щось», не про людину." },
        { type: "gap", q: "Nie widziałem na ulicy ___ (nikt).", answers: ["nikogo"], explain: "Після заперечення — родовий: nikt → nikogo." },
        { type: "gap", q: "Mam dla ciebie coś ___ (ciekawy).", answers: ["ciekawego"], explain: "Після coś / nic прикметник стоїть у родовому: coś ciekawego, nic nowego. Українське «щось цікаве» — у називному, звідси помилка." },
        { type: "choice", q: "O ___ rozmawiacie?", options: ["kim", "kogo", "komu"], answer: 0, explain: "o + місцевий відмінок: o kim, o czym. Увага: українське «про кого? про що?» вимагає знахідного, а польське o — місцевого." },
        { type: "gap", q: "Z ___ idziesz do kina? (kto)", answers: ["kim"], explain: "z + орудний («з ким?»): z kim." },
        { type: "choice", q: "___ zrobisz, mama i tak będzie się martwić.", options: ["Cokolwiek", "Coś", "Nic"], answer: 0, explain: "-kolwiek = «хоч би що»: Cokolwiek zrobisz — хоч би що ти зробив." },
        { type: "match", q: "З’єднайте займенник із перекладом", pairs: [["ktoś", "хтось"], ["nikt", "ніхто"], ["gdzieś", "десь"], ["nigdzie", "ніде"], ["kiedykolwiek", "будь-коли"], ["cokolwiek", "будь-що"]], explain: "-ś = «-сь», ni- = «ні-», -kolwiek = «будь-» — майже як в українській." },
        { type: "gap", q: "Nie boję się ___ (nic).", answers: ["niczego"], explain: "Bać się вимагає родового: niczego (пор. «нічого не боюся»)." },
        { type: "order", ru: "Ти колись був у Закопаному?", words: ["Czy", "byłeś", "kiedyś", "w", "Zakopanem?"], alt: ["Czy kiedyś byłeś w Zakopanem?"], explain: "Українське «колись» у питанні → kiedyś. Zakopane відмінюється як прикметник: w Zakopanem (пор. «у Закопаному»)." },
        { type: "translate", ru: "Ніхто нічого не знає.", answers: ["Nikt nic nie wie.", "Nikt niczego nie wie."], explain: "Як в українській: кілька заперечень в одному реченні, nie обов’язкове." }
      ],
      pronunciation: {
        focus: "-kolwiek і наголос",
        tip: `<p>Частка <b>-kolwiek</b> пишеться разом (а не через дефіс, як українське «будь-хто») і стає частиною слова, тому наголос переходить на передостанній склад усього слова: <span class="pl">kto-KOL-wiek, kie-dy-KOL-wiek</span>. Під час відмінювання слово подовжується, але наголос лишається на <b>kol</b>: <span class="pl">ko-go-KOL-wiek, ja-kie-go-KOL-wiek</span>.</p>
<ul>
<li><b>-wiek</b> наприкінці звучить як [в’єк] — із чітким «е», не «вік» (хоча слово wiek і справді споріднене з українським «вік»).</li>
<li>Форми на <b>-ś</b> (<span class="pl">ktoś, coś, gdzieś</span>) закінчуються м’яким [ш’] — схоже на кінцеве «сь» в українських «хтось, щось, десь», але шиплячіше; не плутайте з твердим [ш]: <span class="pl">coś</span> — не «кош».</li>
<li>Пастка наголосу: в українських «нікого́, ніде́» наголос на кінці, а в польській — на передостанньому складі: <span class="pl">ni-KO-go, ni-CZE-go, NIG-dzie, NIG-dy</span>.</li>
</ul>`,
        items: [
          { type: "listen", text: "ktokolwiek", ru: "будь-хто", note: "kto-KOL-wiek" },
          { type: "stress", word: "kiedykolwiek", syllables: ["kie", "dy", "kol", "wiek"], answer: 2 },
          { type: "stress", word: "jakiegokolwiek", syllables: ["ja", "kie", "go", "kol", "wiek"], answer: 3 },
          { type: "stress", word: "nikogo", syllables: ["ni", "ko", "go"], answer: 1 },
          { type: "minimal", options: ["kiedyś", "kiedy"], ru: ["колись", "коли"] },
          { type: "listen", text: "Nikt nic nie widział i nikogo nie słyszał.", ru: "Ніхто нічого не бачив і нікого не чув." },
          { type: "dictation", text: "Czy ktoś kiedyś widział tu coś dziwnego?" }
        ]
      },
      reading: {
        title: "Tajemnica strychu",
        text: "W starej kamienicy przy ulicy Piotrkowskiej w Łodzi od tygodnia nikt nie spał spokojnie. Co noc ktoś chodził po strychu. Pani Halina z drugiego piętra słyszała tajemnicze kroki, a pan Edek z parteru – jakieś dziwne piski. Najgorsze było to, że z balkonów zaczęły znikać różne rzeczy: rękawiczki, skarpetki, a nawet kapeć pana Edka.\n\nSzybko pojawiły się plotki. Ktoś powiedział, że to duch dawnego właściciela kamienicy. Ktoś inny podejrzewał studenta z czwartego piętra, który zawsze wracał skądś o trzeciej w nocy. – On na pewno coś ukrywa – szeptała pani Halina. Ale student przysięgał, że nic nie wie i nigdy nie był na strychu. Jedynym świadkiem był kot pani Haliny, ale on, jak zwykle, nic nie powiedział.\n\nW sobotę sąsiedzi postanowili rozwiązać zagadkę i weszli na strych z latarkami. Na początku nikogo nie zauważyli i niczego nie znaleźli. – Tu nic nie ma – westchnął pan Edek. Wtedy przez przypadek oświetlił kąt i zobaczył jakieś ślady, a obok nich stertę rzeczy: rękawiczki, skarpetki… i kapeć!\n\nNagle coś się poruszyło. Z kartonu wyjrzała para błyszczących oczu. To była kuna – mała, puszysta i bardzo z siebie zadowolona.\n– Czy ktokolwiek wiedział, że kuny kradną skarpetki? – zapytał student.\nNikt nie wiedział. Ale wszyscy byli zadowoleni, że wreszcie odkryli prawdę. Od tamtej pory sąsiedzi suszą pranie w mieszkaniach, a kapeć pana Edka jest najsłynniejszym kapciem w całej Łodzi.",
        glossary: [
          { pl: "kamienicy", ru: "кам’яниці (старому багатоквартирному будинку)" },
          { pl: "piski", ru: "писк, пищання" },
          { pl: "rękawiczki", ru: "рукавички" },
          { pl: "kapeć", ru: "капець (кімнатне взуття)" },
          { pl: "duch", ru: "привид, дух" },
          { pl: "przysięgał", ru: "присягався, клявся" },
          { pl: "latarkami", ru: "ліхтариками" },
          { pl: "stertę", ru: "купу" },
          { pl: "kuna", ru: "куниця" },
          { pl: "pranie", ru: "випрану білизну" }
        ],
        questions: [
          { type: "tf", q: "Pani Halina słyszała w nocy kroki na strychu.", answer: true, explain: "Так: «Pani Halina z drugiego piętra słyszała tajemnicze kroki»." },
          { type: "choice", q: "Kogo podejrzewali niektórzy sąsiedzi?", options: ["Pana Edka", "Studenta z czwartego piętra", "Kota pani Haliny"], answer: 1, explain: "«Ktoś inny podejrzewał studenta z czwartego piętra»." },
          { type: "tf", q: "Na strychu sąsiedzi od razu znaleźli zaginione rzeczy.", answer: false, explain: "Спершу вони нікого не помітили й нічого не знайшли (nikogo nie zauważyli i niczego nie znaleźli)." },
          { type: "choice", q: "Kto naprawdę zabierał rzeczy z balkonów?", options: ["Duch dawnego właściciela", "Student", "Kuna"], answer: 2, explain: "«To była kuna» — куниця." },
          { type: "tf", q: "Teraz sąsiedzi suszą pranie na balkonach.", answer: false, explain: "Тепер вони сушать білизну в квартирах (w mieszkaniach)." }
        ]
      },
      writing: {
        prompt: "Розкажіть загадкову історію, що сталася з вами або з кимось зі знайомих (можна вигадати): 1) де й коли це було; 2) що дивного відбувалося (хтось, щось, десь…); 3) кого підозрювали і чого ніхто не знав або не бачив; 4) чим усе закінчилося. Використайте займенники на -ś та заперечні (nikt, nic, nigdy, nigdzie, żaden).",
        minWords: 80,
        maxWords: 140,
        useWords: ["tajemniczy", "zauważyć", "ślad", "zniknąć"],
        checklist: [
          { label: "Щонайменше 3 займенники на -ś (ktoś, coś, kiedyś, jakiś…)", pattern: "(?<!\\p{L})(?:kto|kogo|komu|kim|co|czego|czemu|czym|gdzie|kiedy|jaki|jaka|jakie|jakiego|jakiej|jakim|jakimi|jakich|skąd|dokąd|jako)ś(?!\\p{L})", min: 3 },
          { label: "Щонайменше 2 заперечні займенники (nikt, nic, nigdy, żaden…)", pattern: "(?<!\\p{L})(?:nikt|nikogo|nikomu|nikim|nic|niczego|niczemu|niczym|nigdzie|nigdy|żaden|żadna|żadne|żadnego|żadnej|żadnych|żadnym)(?!\\p{L})", min: 2 }
        ],
        model: "Kiedyś, kiedy mieszkałam w akademiku w Krakowie, zdarzyła się dziwna historia. Co rano ktoś zostawiał pod moimi drzwiami jabłko. Pytałam wszystkich na piętrze, ale nikt niczego nie zauważył. Raz wstałam o piątej, żeby złapać tajemniczego gościa, ale nikogo nie zobaczyłam, a jabłko i tak leżało pod drzwiami! Nie było żadnych śladów. Moja współlokatorka podejrzewała chłopaka z pokoju obok, ale on twierdził, że nigdy nie kupuje jabłek. Po miesiącu jabłka nagle zniknęły, a zamiast nich pojawiła się kartka: „Smacznego! Pani Basia z portierni”. Okazało się, że pani Basia ma sad pod Sandomierzem i po prostu chciała się kimś zaopiekować. Do dziś czasem przysyła mi jabłka."
      }
    },

    // ───────────────────────── Урок 5 (повторення) ─────────────────────────
    {
      id: "m09l5",
      title: "Gdzie żyje się najlepiej?",
      titleRu: "Повторення модуля 9",
      topic: "Porównujemy miasta",
      review: true,
      minutes: 30,
      goals: [
        "Повторити ступені порівняння прикметників і прислівників",
        "Упевнено використовувати niż / od, z + родовий, coraz, im…, tym…, jak naj-",
        "Повторити неозначені й заперечні займенники та відмінювання kto / co",
        "Порівняти два міста в підсумковому творі"
      ],
      vocab: [
        { pl: "przeprowadzać się / przeprowadzić się", ru: "переїжджати / переїхати", ex: "W zeszłym roku przeprowadziliśmy się do Gdańska.", exRu: "Торік ми переїхали до Гданська.", note: "przeprowadzka — переїзд" },
        { pl: "czynsz", g: "m", ru: "квартплата; орендна плата", ex: "Czynsz w Warszawie jest wyższy niż w Lublinie.", exRu: "Орендна плата у Варшаві вища, ніж у Любліні." },
        { pl: "koszty utrzymania", g: "pl", ru: "вартість життя", ex: "W stolicy koszty utrzymania są najwyższe.", exRu: "У столиці найвища вартість життя." },
        { pl: "zarobki", g: "pl", ru: "заробітки, зарплати", ex: "Zarobki w dużych miastach są wyższe.", exRu: "Заробітки у великих містах вищі." },
        { pl: "komunikacja miejska", g: "f", ru: "міський громадський транспорт", ex: "Komunikacja miejska działa tu coraz lepiej.", exRu: "Громадський транспорт працює тут дедалі краще.", note: "хибний друг: не «комунікації»!" },
        { pl: "korek", g: "m", ru: "затор (на дорозі)", ex: "Stałem w korku przez godzinę.", exRu: "Я простояв у заторі годину." },
        { pl: "dojazd", g: "m", ru: "дорога (кудись), час у дорозі", ex: "Dojazd do pracy zajmuje mi dwadzieścia minut.", exRu: "Дорога на роботу забирає в мене двадцять хвилин." },
        { pl: "smog", g: "m", ru: "смог", ex: "Zimą w wielu polskich miastach jest smog.", exRu: "Узимку в багатьох польських містах смог." },
        { pl: "zieleń", g: "f", ru: "зелень, зелені зони", ex: "W tej dzielnicy jest dużo zieleni.", exRu: "У цьому районі багато зелені.", note: "ж. р., як і «зелень»; родовий: zieleni" },
        { pl: "zatłoczony", ru: "переповнений, людний", ex: "Rano tramwaje są najbardziej zatłoczone.", exRu: "Уранці трамваї переповнені найбільше." }
      ],
      grammar: {
        title: "Підсумок модуля 9: порівняння та займенники",
        html: `<h4>1. Ступені порівняння прикметників</h4>
<table class="g">
<tr><th>спосіб</th><th>вищий</th><th>найвищий</th></tr>
<tr><td>-szy (одна приголосна)</td><td class="pl">tańszy, droższy, krótszy</td><td class="pl">najtańszy, najdroższy</td></tr>
<tr><td>-iejszy / -ejszy (2+ приголосних)</td><td class="pl">ładniejszy, cieplejszy</td><td class="pl">najładniejszy, najcieplejszy</td></tr>
<tr><td>неправильні</td><td class="pl">lepszy, gorszy, większy, mniejszy, lżejszy</td><td class="pl">najlepszy, największy</td></tr>
<tr><td>описово</td><td class="pl">bardziej zatłoczony, mniej ciekawy</td><td class="pl">najbardziej zatłoczony, najmniej ciekawy</td></tr>
</table>
<p>Форма узгоджується з іменником (<span class="pl">tańszy bilet, tańsza kurtka, tańsze mieszkanie</span>), а про групи, де є чоловіки: <b>-szy → -si</b> (<span class="pl">lepsi, starsi, najmłodsi</span>).</p>
<h4>2. Прислівники</h4>
<table class="g">
<tr><td class="pl">szybko → szybciej → najszybciej</td></tr>
<tr><td class="pl">często → częściej → najczęściej</td></tr>
<tr><td class="pl">dobrze → lepiej → najlepiej</td></tr>
<tr><td class="pl">źle → gorzej → najgorzej</td></tr>
<tr><td class="pl">dużo → więcej → najwięcej</td></tr>
<tr><td class="pl">mało → mniej → najmniej</td></tr>
</table>
<div class="tip"><b>Який?</b> → прикметник: <span class="pl">lepszy, większy</span>. <b>Як? Скільки?</b> → прислівник: <span class="pl">lepiej, więcej</span>. В українській ми теж розрізняємо «кращий / більший» і «краще / більше», але прислівник «краще» збігається з прикметником середнього роду — тому найчастіша помилка модуля — «lepsze» замість lepiej.</div>
<h4>3. Конструкції порівняння</h4>
<table class="g">
<tr><td class="pl">tańszy niż tamten / od tamtego</td><td>дешевший, ніж той / дешевший від того</td></tr>
<tr><td class="pl">o 100 złotych droższy</td><td>на 100 злотих дорожчий</td></tr>
<tr><td class="pl">o wiele lepszy</td><td>набагато кращий</td></tr>
<tr><td class="pl">najlepszy ze wszystkich</td><td>найкращий з усіх</td></tr>
<tr><td class="pl">jeden z najlepszych</td><td>один із найкращих</td></tr>
<tr><td class="pl">jak najszybciej, jak najtańszy</td><td>якнайшвидше, якнайдешевший</td></tr>
<tr><td class="pl">coraz lepiej</td><td>дедалі краще</td></tr>
<tr><td class="pl">im więcej, tym lepiej</td><td>чим більше, тим краще</td></tr>
</table>
<div class="tip">Після <span class="pl">niż</span> — той самий відмінок, що й у порівнюваного (зазвичай називний), як після українського «ніж»: <span class="pl">starszy niż ja</span>. Після <span class="pl">od</span> — родовий, як після «від»: <span class="pl">starszy ode mnie</span>. Українське «на» в значенні різниці — польське <span class="pl">o</span>: <span class="pl">o dwa lata starszy</span>. А конструкції «за» + знахідний («старший за мене») у польській немає.</div>
<h4>4. Займенники</h4>
<table class="g">
<tr><th>-ś</th><th>-kolwiek</th><th>ni-</th></tr>
<tr><td class="pl">ktoś, coś</td><td class="pl">ktokolwiek, cokolwiek</td><td class="pl">nikt, nic</td></tr>
<tr><td class="pl">gdzieś, kiedyś</td><td class="pl">gdziekolwiek, kiedykolwiek</td><td class="pl">nigdzie, nigdy</td></tr>
<tr><td class="pl">jakiś</td><td class="pl">jakikolwiek</td><td class="pl">żaden</td></tr>
</table>
<p>Відмінювання: <span class="pl">kto – kogo – komu – kogo – kim – o kim</span>; <span class="pl">co – czego – czemu – co – czym – o czym</span>. Так само відмінюються <span class="pl">ktoś, nikt, coś, nic</span>.</p>
<div class="tip">Три правила, про які найчастіше забувають: <span class="pl">nie</span> при ni-словах (<span class="pl">Nikt nie wie</span>); родовий після заперечення (<span class="pl">Nie znam nikogo</span>); <span class="pl">coś / nic</span> + прикметник у родовому (<span class="pl">coś nowego, nic ciekawego</span>).</div>`
      },
      exercises: [
        { type: "choice", q: "Wrocław jest ___ niż Opole. (duży)", options: ["większy", "bardziej duży", "więcej"], answer: 0, explain: "duży → większy — неправильна форма; «bardziej duży» неможливе, а więcej — прислівник кількості." },
        { type: "gap", q: "Czynsz w Warszawie jest ___ niż w Łodzi. (wysoki)", answers: ["wyższy"], explain: "wysoki → wyższy: суфікс -ok- випадає, s → ż (пор. високий → вищий). Czynsz — ч. р." },
        { type: "gap", q: "To ___ ulica w mieście. (zatłoczony, найвищий ступінь)", answers: ["najbardziej zatłoczona"], explain: "Zatłoczony — дієприкметник на -ony, тому ступінь описовий: najbardziej zatłoczona (ulica — ж. р.)." },
        { type: "choice", q: "Mieszkanie w centrum jest o 500 złotych ___.", options: ["droższe", "drożej", "droższy"], answer: 0, explain: "Mieszkanie — с. р. → droższe. Drożej — прислівник. «На 500 злотих» = o 500 złotych." },
        { type: "gap", q: "Chcę mieszkać jak ___ pracy. (blisko, найвищий ступінь)", answers: ["najbliżej"], explain: "jak + naj- = «якнай-»: blisko → bliżej → najbliżej; jak najbliżej pracy — якнайближче до роботи." },
        { type: "choice", q: "W Gdańsku żyje mi się ___ niż w Warszawie.", options: ["lepiej", "lepsze", "lepszy"], answer: 0, explain: "Żyje mi się (як?) → прислівник: lepiej. Не «lepsze», хоч українське «краще» й підказує саме цю форму." },
        { type: "gap", q: "Im dłużej tu mieszkam, ___ bardziej lubię to miasto.", answers: ["tym"], explain: "«Чим…, тим…» = im…, tym…" },
        { type: "match", q: "Прикметник чи прислівник? З’єднайте з правильною формою вищого ступеня", pairs: [["dobry", "lepszy"], ["dobrze", "lepiej"], ["zły", "gorszy"], ["źle", "gorzej"], ["duży", "większy"], ["dużo", "więcej"]], explain: "Прикметники (який?) → lepszy, gorszy, większy; прислівники (як? скільки?) → lepiej, gorzej, więcej." },
        { type: "gap", q: "Nie znam tu jeszcze ___ (nikt).", answers: ["nikogo"], explain: "Після заперечення — родовий: nikogo." },
        { type: "choice", q: "Ten pokój jest za drogi. Szukam ___ tańszego.", options: ["czegoś", "coś", "niczego"], answer: 0, explain: "Szukać вимагає родового: coś → czegoś; прикметник теж у родовому: czegoś tańszego (пор. «шукаю чогось дешевшого»)." },
        { type: "choice", q: "Możesz przyjść ___ – zawsze ktoś jest w domu.", options: ["kiedykolwiek", "nigdy", "nigdzie"], answer: 0, explain: "-kolwiek = «будь-»: kiedykolwiek — будь-коли. Nigdy і nigdzie вимагають nie і не підходять за змістом." },
        { type: "order", ru: "Життя у Варшаві дедалі дорожче.", words: ["Życie", "w", "Warszawie", "jest", "coraz", "droższe."], alt: ["W Warszawie życie jest coraz droższe."], explain: "coraz + вищий ступінь = «дедалі, щораз»: coraz droższe (życie — с. р.)." },
        { type: "order", ru: "Я ніде не бачив таких цін.", words: ["Nigdzie", "nie", "widziałem", "takich", "cen."], alt: ["Nie widziałem nigdzie takich cen.", "Takich cen nigdzie nie widziałem.", "Nigdzie takich cen nie widziałem.", "Takich cen nie widziałem nigdzie."], explain: "Подвійне заперечення nigdzie + nie; після заперечення — родовий: takich cen." },
        { type: "gap", q: "O ___ myślisz? (co)", answers: ["czym"], explain: "myśleć o + місцевий: o czym (про кого — o kim)." },
        { type: "translate", ru: "Це найкраще місто з усіх.", answers: ["To najlepsze miasto ze wszystkich.", "To jest najlepsze miasto ze wszystkich."], explain: "dobry → najlepszy; miasto — с. р. → najlepsze. «З усіх» = ze wszystkich." }
      ],
      pronunciation: {
        focus: "Повторення: -ejszy, naj-, довгі слова, -kolwiek",
        tip: `<p>Повторімо головне з модуля:</p>
<ul>
<li><b>-iejszy / -ejszy</b> — наголос на <b>-iej- / -ej-</b>: <span class="pl">łat-WIEJ-szy, naj-bez-piecz-NIEJ-szy</span>.</li>
<li><b>naj-</b> не перетягує наголосу: <span class="pl">naj-LEP-szy</span>, а не «НАЙлепши». Групи приголосних після naj- вимовляйте злитно, без зайвих голосних.</li>
<li>Довгі слова — рівний ритм і чіткі ненаголошені голосні: <span class="pl">naj-praw-do-po-DOB-niej</span>.</li>
<li><b>-kolwiek</b> — наголос на <b>kol</b>: <span class="pl">gdzie-KOL-wiek</span>; і пам’ятайте: <span class="pl">ni-KO-go, NIG-dzie</span> — не так, як українські «нікого́, ніде́».</li>
</ul>`,
        items: [
          { type: "stress", word: "łatwiejszy", syllables: ["łat", "wiej", "szy"], answer: 1 },
          { type: "stress", word: "najbezpieczniejszy", syllables: ["naj", "bez", "piecz", "niej", "szy"], answer: 3 },
          { type: "stress", word: "gdziekolwiek", syllables: ["gdzie", "kol", "wiek"], answer: 1 },
          { type: "minimal", options: ["ładniejszy", "ładniejsi"], ru: ["гарніший (ч. р.)", "гарніші (про чоловіків, мн.)"] },
          { type: "listen", text: "Najprawdopodobniej przeprowadzę się do Gdańska.", ru: "Найімовірніше, я переїду до Гданська." },
          { type: "listen", text: "Cokolwiek wybierzesz, będzie dobrze.", ru: "Хоч би що ти вибрав, усе буде добре." },
          { type: "dictation", text: "Im dłużej tu mieszkam, tym bardziej mi się podoba." }
        ]
      },
      reading: {
        title: "Gdzie żyje się najlepiej?",
        text: "Marta ma dwadzieścia osiem lat, mieszka w Lublinie i od kilku miesięcy myśli o przeprowadzce. Dostała trzy oferty pracy: w Warszawie, we Wrocławiu i w Gdańsku. Która jest najlepsza? Postanowiła porównać wszystko jak najdokładniej i zrobiła tabelkę.\n\nWarszawa wygrywa pod względem zarobków – tam Marta zarabiałaby najwięcej, prawie o dwa tysiące złotych więcej niż w Lublinie. Ale czynsz za kawalerkę jest tam najwyższy, a dojazd do biura zajmowałby jej ponad godzinę, bo korki w stolicy są coraz większe. Komunikacja miejska działa świetnie, ale metro w godzinach szczytu to najbardziej zatłoczone miejsce, jakie Marta kiedykolwiek widziała. Poza tym w Warszawie nie zna nikogo oprócz kuzyna, który i tak ciągle gdzieś wyjeżdża.\n\nWrocław jest mniejszy i spokojniejszy niż Warszawa, a koszty utrzymania są trochę niższe. Ma ponad sto mostów i setki krasnali na ulicach, więc spacery są tam o wiele ciekawsze. Niestety ktoś na forum napisał, że zimą smog jest tam gorszy niż gdzie indziej. Czy to prawda? Nikt nie umiał jej tego dokładnie wyjaśnić.\n\nGdańsk ma morze, dużo zieleni i – podobno – najczystsze powietrze z tych trzech miast. Nad morzem Marta zawsze spaceruje wolniej i oddycha głębiej. Zarobki są tam niższe niż w stolicy, ale życie jest, jak twierdzi jej przyjaciółka, o wiele przyjemniejsze.\n\nA Lublin? Tu czynsz jest najniższy, do biura Marta chodzi piechotą dziesięć minut, a przyjaciele mieszkają za rogiem. Ale zarobki są najniższe, a Marta czuje, że chce w życiu czegoś nowego.\n\nIm dłużej Marta patrzyła na tabelkę, tym mniej rozumiała. W końcu zadzwoniła do babci.\n– Babciu, gdzie twoim zdaniem żyje się najlepiej?\n– Tam, gdzie ktoś na ciebie czeka – odpowiedziała babcia. – A poza tym nigdzie nie ma lepszych cebularzy niż w Lublinie.\n\nMarta się roześmiała. Decyzji jeszcze nie podjęła, ale jedno wie na pewno: cokolwiek wybierze, co weekend będzie przyjeżdżać do domu na cebularze.",
        glossary: [
          { pl: "przeprowadzce", ru: "переїзді" },
          { pl: "jak najdokładniej", ru: "якнайточніше" },
          { pl: "pod względem", ru: "з погляду, щодо" },
          { pl: "kawalerkę", ru: "однокімнатну квартиру" },
          { pl: "gdzie indziej", ru: "деінде, в іншому місці" },
          { pl: "oddycha", ru: "дихає" },
          { pl: "twierdzi", ru: "стверджує" },
          { pl: "cebularzy", ru: "цебуляжів (люблінських коржиків із цибулею)" },
          { pl: "nie podjęła", ru: "не ухвалила (рішення)" }
        ],
        questions: [
          { type: "tf", q: "Marta zarabiałaby najwięcej w Warszawie.", answer: true, explain: "Так: «tam Marta zarabiałaby najwięcej»." },
          { type: "choice", q: "Co jest największym minusem Warszawy?", options: ["Niskie zarobki", "Wysoki czynsz i długi dojazd", "Słaba komunikacja miejska"], answer: 1, explain: "Czynsz jest najwyższy, а дорога до офісу забирала б понад годину; транспорт, навпаки, działa świetnie." },
          { type: "tf", q: "Ktoś na forum napisał, że we Wrocławiu w ogóle nie ma smogu.", answer: false, explain: "Навпаки: на форумі написали, що взимку смог там гірший, ніж деінде (gorszy niż gdzie indziej)." },
          { type: "choice", q: "Czym według tekstu wyróżnia się Gdańsk?", options: ["Najwyższymi zarobkami", "Morzem, zielenią i czystym powietrzem", "Najkrótszym dojazdem do biura"], answer: 1, explain: "«Gdańsk ma morze, dużo zieleni i – podobno – najczystsze powietrze»." },
          { type: "choice", q: "Co Marta wie na pewno?", options: ["Że zostanie w Lublinie", "Że co weekend będzie przyjeżdżać do domu na cebularze", "Że przeprowadzi się do Gdańska"], answer: 1, explain: "Рішення вона ще не ухвалила, але знає: cokolwiek wybierze, щовихідних приїжджатиме додому на цебуляжі." }
        ]
      },
      writing: {
        prompt: "Підсумковий твір модуля. Порівняйте два міста (або місто й село), де ви жили чи хотіли б жити: 1) ціни, оренда та вартість життя; 2) транспорт, дорога на роботу, затори; 3) природа, повітря, атмосфера; 4) де, на вашу думку, жити краще і чому. Використайте вищий і найвищий ступені прикметників і прислівників, niż / od та хоча б один неозначений або заперечний займенник.",
        minWords: 100,
        maxWords: 150,
        useWords: ["czynsz", "koszty utrzymania", "komunikacja miejska", "przeprowadzić się"],
        checklist: [
          { label: "Щонайменше 5 форм вищого / найвищого ступеня", pattern: "(?<!\\p{L})(?:naj\\p{L}+|\\p{L}*(?:lepsz|gorsz|większ|mniejsz|ejsz|ższ|ńsz|krótsz|starsz|młodsz)\\p{L}*|lepiej|gorzej|więcej|mniej|bliżej|dalej|\\p{L}+iej)(?!\\p{L})", min: 5 },
          { label: "Порівняння через niż або od", pattern: "(?<!\\p{L})(?:niż|od)(?!\\p{L})", min: 1 },
          { label: "Хоча б 2 займенники на -ś / -kolwiek / ni- (ktoś, kiedyś, nikt, nic, nigdzie…)", pattern: "(?<!\\p{L})(?:ktoś|kogoś|coś|czegoś|gdzieś|kiedyś|jakiś|jakaś|jakieś|ktokolwiek|cokolwiek|kiedykolwiek|gdziekolwiek|nikt|nikogo|nic|niczego|nigdzie|nigdy|żaden|żadna|żadne)(?!\\p{L})", min: 2 }
        ],
        model: "Przez pięć lat mieszkałem w Warszawie, a dwa lata temu przeprowadziłem się do Torunia. Które miasto jest lepsze? To zależy.\nWarszawa jest oczywiście większa i bardziej dynamiczna. Zarobki są tam najwyższe w Polsce, a komunikacja miejska działa najlepiej. Ale koszty utrzymania są też dużo wyższe: mój czynsz był prawie o połowę wyższy niż teraz. Poza tym w stolicy codziennie stałem w korkach i dojazd do pracy zajmował mi ponad godzinę.\nW Toruniu żyje mi się spokojniej i wolniej. Wszędzie jest bliżej, więc do pracy jeżdżę rowerem. Miasto jest mniej zatłoczone, ma więcej zieleni i chyba najpiękniejszą starówkę w Polsce. Czasem brakuje mi warszawskich teatrów, ale nigdzie nie odpoczywam tak dobrze jak tutaj.\nKiedyś może wrócę do stolicy, ale na razie nie zamieniłbym Torunia na nic innego."
      }
    }
  ]
});
