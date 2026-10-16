// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m14",
  n: 14,
  level: "A2",
  extra: true,
  title: "Czasy w praktyce",
  titleRu: "Часи дієслів на практиці",
  summary: "Ви зведете в одну систему всі часи польського дієслова: за інфінітивом визначатимете тип дієвідміни, без помилок утворюватимете минулий час у всіх особах і родах, свідомо вибиратимете між będę robić і zrobię та добиратимете вид у розповіді про минуле, теперішнє й майбутнє.",
  lessons: [

    // ───────────────────────── УРОК 1 ─────────────────────────
    {
      id: "m14l1",
      title: "Biorę, jadę, śpię",
      titleRu: "Теперішній час: типи дієвідміни і підступні дієслова",
      topic: "Tu i teraz",
      review: false,
      minutes: 30,
      goals: [
        "Бачити всі чотири типи дієвідміни теперішнього часу як одну систему: -am/-asz, -em/-esz, -ę/-esz, -ę/-isz/-ysz",
        "Передбачати тип дієвідміни за інфінітивом (-ać, -ować, -awać, -ić/-yć, -eć)",
        "Упевнено вживати підступні часті дієслова: brać, iść, jechać, chcieć, móc, pić, spać",
        "Пам’ятати, що доконаний вид теперішнього часу не має: wezmę — це «візьму», а не «беру»"
      ],

      vocab: [
        { pl: "właśnie", ru: "саме, якраз (зараз)", ex: "Właśnie jem obiad, zadzwonię później.", exRu: "Я саме обідаю, подзвоню пізніше.", note: "також «щойно»: Właśnie wróciłam. — Я щойно повернулася." },
        { pl: "w tej chwili", ru: "цієї хвилини, зараз", ex: "W tej chwili nie mogę rozmawiać.", exRu: "Цієї хвилини я не можу розмовляти." },
        { pl: "na razie", ru: "поки що", ex: "Na razie mieszkam u siostry.", exRu: "Поки що я живу в сестри.", note: "розм. також «бувай!»: Na razie!" },
        { pl: "ciągle", ru: "постійно, весь час", ex: "Mój brat ciągle sprawdza telefon.", exRu: "Мій брат постійно перевіряє телефон.", note: "синонім: wciąż" },
        { pl: "nadal", ru: "досі, все ще", ex: "Nadal pracuję w tej samej firmie.", exRu: "Я досі працюю в тій самій фірмі." },
        { pl: "odbierać / odebrać", ru: "отримувати, забирати / отримати, забрати; відповідати (на дзвінок)", ex: "Codziennie odbieram syna z przedszkola.", exRu: "Щодня я забираю сина з садочка.", note: "теп. ч.: odbieram, odbierasz (група -am, хоча brać → biorę!); майб.: odbiorę; odebrać telefon — відповісти на дзвінок" },
        { pl: "oddzwaniać / oddzwonić", ru: "передзвонювати / передзвонити", ex: "Oddzwonię za pięć minut.", exRu: "Передзвоню за п’ять хвилин.", note: "oddzwonić do kogoś — як dzwonić do kogoś" },
        { pl: "zajęty", ru: "зайнятий", ex: "Przepraszam, teraz jestem zajęta.", exRu: "Вибачте, зараз я зайнята.", note: "zajęty / zajęta; Zajęte! — Зайнято! (про місце, туалет)" },
        { pl: "drzemać", ru: "дрімати", ex: "Dziadek drzemie przed telewizorem.", exRu: "Дідусь дрімає перед телевізором.", note: "теп. ч.: drzemię, drzemiesz (група -ę/-esz, хоча інфінітив на -ać)" },
        { pl: "ładować / naładować", ru: "заряджати / зарядити", ex: "Ładuję telefon w pociągu.", exRu: "Я заряджаю телефон у потязі.", note: "теп. ч.: ładuję (-ować → -uję); ładowarka — зарядний пристрій" },
        { pl: "nalewać / nalać", ru: "наливати / налити", ex: "Nalewam sobie herbaty.", exRu: "Наливаю собі чаю.", note: "майб.: naleję, nalejesz; nalać + родовий (трохи чогось): nalać wody" },
        { pl: "spieszyć się", ru: "поспішати", ex: "Nie mogę rozmawiać, spieszę się na pociąg.", exRu: "Не можу розмовляти, поспішаю на потяг.", note: "теп. ч.: spieszę się, spieszysz się (група -ę/-ysz); також пишуть śpieszyć się" }
      ],

      grammar: {
        title: "Теперішній час: чотири групи і підступні дієслова",
        html: `<p>Теперішній час ви знаєте ще з модуля 1. Тепер зведемо все в одну систему. Кожне польське дієслово належить до однієї з <b>чотирьох груп</b>, і групу видно з двох форм: <b>ja</b> та <b>ty</b>.</p>
<table class="g">
<tr><th>група</th><th>ja</th><th>ty</th><th>oni</th><th>приклад</th></tr>
<tr><td>1</td><td>-am</td><td>-asz</td><td>-ają</td><td class="pl">czytam, czytasz, czytają</td></tr>
<tr><td>2</td><td>-em</td><td>-esz</td><td>-eją / -edzą</td><td class="pl">umiem, umiesz, umieją</td></tr>
<tr><td>3</td><td>-ę</td><td>-esz</td><td>-ą</td><td class="pl">piszę, piszesz, piszą</td></tr>
<tr><td>4</td><td>-ę</td><td>-isz / -ysz</td><td>-ą</td><td class="pl">mówię, mówisz, mówią</td></tr>
</table>
<h4>Як передбачити групу за інфінітивом</h4>
<table class="g">
<tr><th>інфінітив</th><th>зазвичай</th><th>приклади</th></tr>
<tr><td>-ować, -ywać</td><td>-uję / -ujesz (гр. 3)</td><td class="pl">pracować → pracuję, ładować → ładuję</td></tr>
<tr><td>-awać</td><td>-aję / -ajesz (гр. 3)</td><td class="pl">dawać → daję, wstawać → wstaję</td></tr>
<tr><td>-ić, -yć</td><td>-ę / -isz, -ysz (гр. 4)</td><td class="pl">robić → robię, uczyć → uczę</td></tr>
<tr><td>-eć</td><td>часто -ę / -isz (гр. 4)</td><td class="pl">widzieć → widzę, słyszeć → słyszę</td></tr>
<tr><td>-ać</td><td>найчастіше -am / -asz (гр. 1)</td><td class="pl">czekać → czekam, odbierać → odbieram</td></tr>
</table>
<p>Винятки, які треба знати: <span class="pl">umieć, rozumieć</span> → гр. 2 (<span class="pl">umiem, rozumiem</span>), <span class="pl">mieć → mam</span>. Частина дієслів на <b>-ać</b> переходить у гр. 3 із чергуванням: <span class="pl">pisać → piszę</span>, <span class="pl">płakać → płaczę</span>, <span class="pl">brać → biorę</span>, <span class="pl">drzemać → drzemię</span>. Короткі дієслова на <b>-ść, -c</b> (<span class="pl">iść, jeść, móc</span>) учимо окремо.</p>
<h4>Підступні часті дієслова</h4>
<table class="g">
<tr><th></th><th>ja</th><th>ty</th><th>on / ona</th><th>oni / one</th></tr>
<tr><td class="pl">brać</td><td class="pl">biorę</td><td class="pl">bierzesz</td><td class="pl">bierze</td><td class="pl">biorą</td></tr>
<tr><td class="pl">iść</td><td class="pl">idę</td><td class="pl">idziesz</td><td class="pl">idzie</td><td class="pl">idą</td></tr>
<tr><td class="pl">jechać</td><td class="pl">jadę</td><td class="pl">jedziesz</td><td class="pl">jedzie</td><td class="pl">jadą</td></tr>
<tr><td class="pl">chcieć</td><td class="pl">chcę</td><td class="pl">chcesz</td><td class="pl">chce</td><td class="pl">chcą</td></tr>
<tr><td class="pl">móc</td><td class="pl">mogę</td><td class="pl">możesz</td><td class="pl">może</td><td class="pl">mogą</td></tr>
<tr><td class="pl">pić</td><td class="pl">piję</td><td class="pl">pijesz</td><td class="pl">pije</td><td class="pl">piją</td></tr>
<tr><td class="pl">spać</td><td class="pl">śpię</td><td class="pl">śpisz</td><td class="pl">śpi</td><td class="pl">śpią</td></tr>
</table>
<p>Правило <b>«ja = oni»</b>: форми ja та oni мають однакову основу (<span class="pl">biorę – biorą, jadę – jadą, mogę – mogą</span>), а решта форм — іншу (<span class="pl">bierzesz, bierzemy; jedziesz, jedziemy; możesz, możemy</span>).</p>
<div class="tip">Пастки для українців: <span class="pl">biorę</span> — з <b>o</b>, хоча укр. «беру», а далі <span class="pl">bierzesz</span> (не «biorzesz»); у <span class="pl">jadę – jedziesz</span> у формах ja й oni — <b>a</b>, в інших — <b>e</b>; <span class="pl">spać → śpię, śpisz</span> — група 4 (-isz!), а не «śpiesz»; <span class="pl">chcę</span>, а не «chcem». І ще: <span class="pl">idę</span> — іду пішки, <span class="pl">jadę</span> — їду транспортом.</div>
<h4>Доконаний вид: теперішнього часу немає</h4>
<p>Дієслова ДВ (<span class="pl">wziąć, zjeść, pójść, oddzwonić</span>) мають ті самі закінчення, але означають <b>майбутнє</b> — як і в українській: <span class="pl">wezmę</span> — «візьму», <span class="pl">oddzwonię</span> — «передзвоню».</p>
<div class="ex"><span class="pl">Biorę parasol, bo pada.</span> — Беру парасольку, бо йде дощ. (зараз)</div>
<div class="ex"><span class="pl">Wezmę parasol na wszelki wypadek.</span> — Візьму парасольку про всяк випадок. (потім)</div>
<div class="tip">Окремої «тривалої» форми в польській немає: <span class="pl">czytam</span> — і «читаю зараз», і «читаю щодня». Щоб підкреслити «саме зараз», додайте <span class="pl">właśnie</span> або <span class="pl">w tej chwili</span>: <span class="pl">Właśnie piję kawę.</span></div>`
      },

      exercises: [
        { type: "match", q: "З’єднайте інфінітив із формою «ja»", pairs: [["brać", "biorę"], ["spać", "śpię"], ["pić", "piję"], ["jechać", "jadę"], ["iść", "idę"], ["móc", "mogę"]], explain: "Найчастіші «неправильні» дієслова: biorę, śpię, piję, jadę, idę, mogę. Форма ja підказує й форму oni: biorą, śpią, piją, jadą, idą, mogą." },
        { type: "choice", q: "Ty zawsze ___ za dużo rzeczy na wyjazd!", options: ["bierzesz", "biorzesz", "bieresz"], answer: 0, explain: "brać: biorę, але bierzesz, bierze, bierzemy, bierzecie, biorą. Основа bior- лише в ja й oni." },
        { type: "gap", q: "Dzieci już ___. Mów ciszej! (spać)", answers: ["śpią"], explain: "spać → śpię, śpisz, śpi, śpimy, śpicie, śpią (група -ę/-isz)." },
        { type: "choice", q: "До якої групи належить дієслово «ładować»?", options: ["-uję / -ujesz", "-am / -asz", "-ę / -isz"], answer: 0, explain: "Дієслова на -ować відмінюються на -uję, -ujesz: ładuję, ładujesz (як укр. «працювати → працюю»)." },
        { type: "choice", q: "— Co robisz? — ___ prysznic, oddzwonię za chwilę!", options: ["Biorę", "Wezmę", "Wziąłem"], answer: 0, explain: "Питають, що ти робиш зараз → теперішній час НДВ: biorę. Wezmę — це «візьму» (майбутнє ДВ), wziąłem — «узяв»." },
        { type: "gap", q: "Przepraszam, czy pani ___ mi pomóc z walizką? (móc)", answers: ["może"], explain: "З pani — 3-тя особа однини: może. Чергування g → ż: mogę, але możesz, może." },
        { type: "gap", q: "Nie ___ czekać tak długo! (chcieć, my)", answers: ["chcemy"], explain: "chcieć: chcę, chcesz, chce, chcemy, chcecie, chcą." },
        { type: "gap", q: "— Dokąd ___? — Do Gdańska, na koncert. (jechać, oni)", answers: ["jadą"], explain: "jechać: jadę, jedziesz, jedzie, jedziemy, jedziecie, jadą. У ja й oni — a, в інших формах — e." },
        { type: "order", ru: "Я саме їду автобусом на роботу.", words: ["Właśnie", "jadę", "do", "pracy", "autobusem."], alt: ["Właśnie jadę autobusem do pracy.", "Jadę właśnie do pracy autobusem."], explain: "Транспортом — jadę (не idę). Właśnie підкреслює «саме зараз»; окремої тривалої форми в польській немає." },
        { type: "translate", ru: "Що ти п’єш?", answers: ["Co pijesz?", "Co ty pijesz?"], explain: "pić → piję, pijesz (група -ę/-esz, пор. укр. «п’ю, п’єш»)." }
      ],

      pronunciation: {
        focus: "Кінцеві -ę і -ą: biorę / biorą",
        tip: `<p>Форми <b>ja</b> і <b>oni</b> часто відрізняються лише останнім звуком: <span class="pl">biorę</span> — <span class="pl">biorą</span>, <span class="pl">piszę</span> — <span class="pl">piszą</span>.</p>
<ul>
<li><b>Кінцеве ę</b> у звичайному мовленні майже втрачає носовість і звучить як [e]: <span class="pl">biorę</span> ≈ [biore], <span class="pl">idę</span> ≈ [ide]. «Гундосити» його не треба.</li>
<li><b>Кінцеве ą</b>, навпаки, лишається носовим — приблизно [oŭ] з носовим призвуком: <span class="pl">biorą</span>, <span class="pl">idą</span>. Саме воно на слух показує «вони».</li>
</ul>
<p>На письмі -ę пишемо завжди, навіть якщо його майже не чути: <span class="pl">piszę</span> (я пишу) ≠ <span class="pl">pisze</span> (він пише). І пам’ятайте про наголос на передостанньому складі: <span class="pl">jedziemy</span> — je-<b>dzie</b>-my.</p>`,
        items: [
          { type: "listen", text: "biorę, bierzesz, biorą", ru: "я беру, ти береш, вони беруть", note: "[biore] — кінцеве ę майже як e; biorą — носове ą" },
          { type: "minimal", options: ["piszę", "piszą"], ru: ["я пишу", "вони пишуть"] },
          { type: "minimal", options: ["idę", "idą"], ru: ["я йду", "вони йдуть"] },
          { type: "stress", word: "oddzwonimy", syllables: ["od", "dzwo", "ni", "my"], answer: 2 },
          { type: "stress", word: "naładujecie", syllables: ["na", "ła", "du", "je", "cie"], answer: 3 },
          { type: "listen", text: "Właśnie śpię, nie dzwoń!", ru: "Я саме сплю, не дзвони!", note: "śpię ≈ [śpie]" },
          { type: "dictation", text: "Właśnie jadę do pracy i piję kawę w pociągu." }
        ]
      },

      reading: {
        title: "Ósma piętnaście",
        text: "Jest ósma piętnaście. Siedzę w pociągu z Otwocka do Warszawy i obserwuję ludzi. Codziennie jeżdżę tą samą trasą, więc znam prawie wszystkich.\n\nPan w szarym płaszczu, jak zawsze, drzemie z otwartymi ustami. Dwie studentki obok mnie piją kawę z termosu i ciągle coś sprawdzają w telefonach. Chłopak z hulajnogą stoi przy drzwiach, bo na Wschodniej przesiada się do tramwaju. Starsza pani właśnie wyjmuje z torby kanapki i częstuje konduktora.\n\n— Dokąd pani jedzie? — pyta konduktor.\n\n— Do wnuczki. Na razie mieszka w akademiku i mówi, że nic nie je!\n\nW tej chwili mój telefon ma dwa procent baterii. Chcę go naładować, ale gniazdko oczywiście nie działa. Trudno, nie mogę pracować, więc biorę książkę. Czytam jedną stronę i… zasypiam.\n\nBudzę się na Śródmieściu. Pan w szarym płaszczu już nie śpi. Patrzy na mnie i się uśmiecha. Chyba dzisiaj to ja drzemię z otwartymi ustami.",
        glossary: [
          { pl: "obserwuję", ru: "спостерігаю" },
          { pl: "z otwartymi ustami", ru: "з відкритим ротом" },
          { pl: "termosu", ru: "термоса" },
          { pl: "wyjmuje", ru: "дістає, виймає" },
          { pl: "częstuje", ru: "пригощає" },
          { pl: "akademiku", ru: "студентському гуртожитку" },
          { pl: "gniazdko", ru: "розетка" },
          { pl: "Budzę się", ru: "Прокидаюся" }
        ],
        questions: [
          { type: "tf", q: "Narrator jedzie tym pociągiem pierwszy raz.", answer: false, explain: "«Codziennie jeżdżę tą samą trasą» — оповідач їздить цим потягом щодня." },
          { type: "choice", q: "Gdzie przesiada się chłopak z hulajnogą?", options: ["Na Wschodniej.", "Na Śródmieściu.", "W Otwocku."], answer: 0, explain: "«Na Wschodniej przesiada się do tramwaju»." },
          { type: "tf", q: "Starsza pani jedzie do wnuczki.", answer: true, explain: "«Do wnuczki. Na razie mieszka w akademiku…»" },
          { type: "choice", q: "Dlaczego narrator nie pracuje w pociągu?", options: ["Bo telefon ma mało baterii, a gniazdko nie działa.", "Bo nie ma laptopa.", "Bo rozmawia z konduktorem."], answer: 0, explain: "Телефон має 2% заряду, а розетка не працює — тож він бере книжку." },
          { type: "tf", q: "Na końcu pan w szarym płaszczu śpi.", answer: false, explain: "«Pan w szarym płaszczu już nie śpi» — тепер дрімав сам оповідач." }
        ]
      },

      writing: {
        prompt: "Ви в дорозі або на перерві. Напишіть повідомлення другові/подрузі «Co robię w tej chwili» (40–80 слів): 1) де ви зараз і що саме робите (ja: jadę, piję, biorę…); 2) що роблять люди навколо — 2–3 особи (on/ona, oni: śpią, piją…); 3) що ви зазвичай робите в цей час; 4) запитайте, що робить адресат.",
        minWords: 40,
        maxWords: 80,
        useWords: ["właśnie", "w tej chwili", "ciągle", "na razie"],
        checklist: [
          { label: "Щонайменше 3 слова на -ę (форми ja: jadę, piję, biorę…)", pattern: "(?<!\\p{L})(?!się)\\p{L}+ę(?!\\p{L})", min: 3 },
          { label: "Щонайменше 2 форми oni на -ą (śpią, piją, jedzą…)", pattern: "\\p{L}+ą(?!\\p{L})", min: 2 },
          { label: "Запитання до адресата", pattern: "\\?", min: 1 }
        ],
        model: "Cześć Ola! Właśnie jadę pociągiem z Gdyni do Torunia. W tej chwili siedzę przy oknie i piję herbatę z termosu. Obok mnie dwie dziewczyny ciągle robią selfie, a jakiś pan śpi i głośno chrapie. Dzieci z tyłu jedzą chipsy i oglądają bajki. Zwykle o tej godzinie biorę laptopa i pracuję, ale na razie nie mam internetu. A ty? Co teraz robisz?"
      }
    },

    // ───────────────────────── УРОК 2 ─────────────────────────
    {
      id: "m14l2",
      title: "Niósł, mogła, wzięli",
      titleRu: "Минулий час: повна парадигма і чергування",
      topic: "Wspomnienia z podróży",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати всі форми минулого часу: однина й множина, чоловічо-особові (-li) і нечоловічо-особові (-ły)",
        "Знати чергування: niósł/niosła, mógł/mogła, wziął/wzięła, jadł/jedli, szedł/szli",
        "Розпізнавати рухомі закінчення в розмовному мовленні: Gdzieś był? Gdzieście byli?",
        "Розповідати про подорож у минулому"
      ],

      vocab: [
        { pl: "wylot", g: "m", ru: "виліт", ex: "Wylot mamy o szóstej rano.", exRu: "Виліт у нас о шостій ранку.", note: "przylot — приліт; hala odlotów — зала вильоту" },
        { pl: "odprawa", g: "f", ru: "реєстрація (на рейс); митний контроль", ex: "Odprawa zaczyna się dwie godziny przed wylotem.", exRu: "Реєстрація починається за дві години до вильоту.", note: "odprawa online — онлайн-реєстрація" },
        { pl: "karta pokładowa", g: "f", ru: "посадковий талон", ex: "Kartę pokładową mam w telefonie.", exRu: "Посадковий талон у мене в телефоні." },
        { pl: "plecak", g: "m", ru: "рюкзак", ex: "Zabrałam tylko mały plecak.", exRu: "Я взяла лише маленький рюкзак." },
        { pl: "wybrzeże", g: "n", ru: "узбережжя", ex: "Spędziliśmy tydzień na wybrzeżu.", exRu: "Ми провели тиждень на узбережжі.", note: "na wybrzeżu — на узбережжі" },
        { pl: "nadmorski", ru: "приморський", ex: "Mieszkaliśmy w małym nadmorskim miasteczku.", exRu: "Ми жили в маленькому приморському містечку." },
        { pl: "autostop", g: "m", ru: "автостоп", ex: "W młodości jeździłem autostopem po Europie.", exRu: "У молодості я їздив автостопом Європою.", note: "jechać autostopem — орудний, як укр. «їхати автостопом»" },
        { pl: "nieść", ru: "нести", ex: "Tata niósł ciężką walizkę.", exRu: "Тато ніс важку валізу.", note: "мин.: niósł, niosła, nieśli, niosły; теп.: niosę, niesiesz" },
        { pl: "przywozić / przywieźć", ru: "привозити / привезти", ex: "Z Gruzji przywieźliśmy wino.", exRu: "З Грузії ми привезли вино.", note: "мин.: przywiózł, przywiozła, przywieźli; майб.: przywiozę" },
        { pl: "opalać się / opalić się", ru: "засмагати / засмагнути", ex: "Ewa opaliła się na brąz.", exRu: "Єва засмагла до бронзового кольору." },
        { pl: "wspominać", ru: "згадувати (з приємністю), пригадувати", ex: "Często wspominamy tamte wakacje.", exRu: "Ми часто згадуємо ті канікули.", note: "також «згадувати в розмові»: wspomniał o tym — він згадав про це" },
        { pl: "wrażenie", g: "n", ru: "враження", ex: "Wenecja zrobiła na mnie ogromne wrażenie.", exRu: "Венеція справила на мене величезне враження.", note: "zrobić wrażenie na kimś — справити враження на когось" },
        { pl: "zachód słońca", g: "m", ru: "захід сонця", ex: "Oglądaliśmy zachód słońca na plaży.", exRu: "Ми дивилися на захід сонця на пляжі.", note: "wschód słońca — схід сонця" }
      ],

      grammar: {
        title: "Минулий час: уся парадигма, чергування, рухомі закінчення",
        html: `<p>Минулий час ви вивчали в модулі 2. Тепер — уся парадигма разом і чергування, на яких помиляються найчастіше.</p>
<h4>1. Повна парадигма</h4>
<p>Основа інфінітива без <b>-ć</b> + <b>ł / l</b> + особове закінчення:</p>
<table class="g">
<tr><th></th><th>ч. р.</th><th>ж. р.</th><th>с. р.</th></tr>
<tr><td>ja</td><td class="pl">czytałem</td><td class="pl">czytałam</td><td>—</td></tr>
<tr><td>ty</td><td class="pl">czytałeś</td><td class="pl">czytałaś</td><td>—</td></tr>
<tr><td>on / ona / ono</td><td class="pl">czytał</td><td class="pl">czytała</td><td class="pl">czytało</td></tr>
</table>
<table class="g">
<tr><th></th><th>є чоловік (чоловічо-особова)</th><th>немає чоловіків</th></tr>
<tr><td>my</td><td class="pl">czytaliśmy</td><td class="pl">czytałyśmy</td></tr>
<tr><td>wy</td><td class="pl">czytaliście</td><td class="pl">czytałyście</td></tr>
<tr><td>oni / one</td><td class="pl">czytali</td><td class="pl">czytały</td></tr>
</table>
<p>Перед <b>-i</b> тверде ł стає м’яким <b>l</b>: <span class="pl">czytał → czytali</span>. Ввічливі форми: <span class="pl">pan był</span>, <span class="pl">pani była</span>, <span class="pl">państwo byli</span> (пара чи змішана група — завжди -li).</p>
<div class="tip">Українське «ми читали» не має особового закінчення, тому хочеться сказати «my czytali». Правильно: <span class="pl">czytaliśmy</span> — закінчення <b>-śmy</b> саме означає «ми», займенник зайвий. І пам’ятайте: <span class="pl">dzieci były</span>, але <span class="pl">rodzice byli</span>.</div>
<h4>2. Чергування голосних</h4>
<table class="g">
<tr><th>інфінітив</th><th>on</th><th>ona</th><th>oni</th><th>one</th></tr>
<tr><td class="pl">nieść</td><td class="pl">niósł</td><td class="pl">niosła</td><td class="pl">nieśli</td><td class="pl">niosły</td></tr>
<tr><td class="pl">przywieźć</td><td class="pl">przywiózł</td><td class="pl">przywiozła</td><td class="pl">przywieźli</td><td class="pl">przywiozły</td></tr>
<tr><td class="pl">móc</td><td class="pl">mógł</td><td class="pl">mogła</td><td class="pl">mogli</td><td class="pl">mogły</td></tr>
<tr><td class="pl">wziąć</td><td class="pl">wziął</td><td class="pl">wzięła</td><td class="pl">wzięli</td><td class="pl">wzięły</td></tr>
<tr><td class="pl">jeść</td><td class="pl">jadł</td><td class="pl">jadła</td><td class="pl">jedli</td><td class="pl">jadły</td></tr>
<tr><td class="pl">iść</td><td class="pl">szedł</td><td class="pl">szła</td><td class="pl">szli</td><td class="pl">szły</td></tr>
</table>
<ul>
<li><b>ó ↔ o</b>: ó лише у формі «він»: <span class="pl">niósł, mógł, przywiózł</span> — як укр. «ніс — несла», «міг — могла».</li>
<li><b>ą ↔ ę</b>: ą лише в чоловічих формах однини: <span class="pl">wziął, wziąłem, wziąłeś</span>; в усіх інших — ę: <span class="pl">wzięła, wzięliśmy</span>. Так само <span class="pl">zacząć → zaczął, zaczęła</span>.</li>
<li><b>a ↔ e</b> перед <b>-li</b>: <span class="pl">jadł → jedli</span>, <span class="pl">miał → mieli</span>, <span class="pl">wiedział → wiedzieli</span>.</li>
<li><b>iść</b>: e є лише в <span class="pl">szedł, szedłem, szedłeś</span>; далі — <span class="pl">szła, szli, szłyśmy</span>. Так само <span class="pl">poszedł — poszła</span>, а не «poszedła».</li>
</ul>
<h4>3. Рухомі закінчення (лише розпізнавання)</h4>
<p>У розмовному мовленні особові закінчення <b>-(e)m, -(e)ś, -śmy, -ście</b> можуть «перескочити» на перше слово речення — найчастіше питальне слово або займенник:</p>
<div class="ex"><span class="pl">Gdzieś był? = Gdzie byłeś?</span> — Де ти був?</div>
<div class="ex"><span class="pl">Gdzieście byli? = Gdzie byliście?</span> — Де ви були?</div>
<div class="ex"><span class="pl">Myśmy to widzieli. = My to widzieliśmy.</span> — Ми це бачили (наголос на «ми»).</div>
<div class="tip">Самі пишіть стандартно (<span class="pl">Gdzie byliście?</span>), але впізнавайте ці форми в серіалах і на вулиці. Форми на зразок «żeśmy byli» — просторіччя, їх не наслідуйте.</div>`
      },

      exercises: [
        { type: "gap", q: "Na lotnisku ___ na bagaż prawie godzinę. (czekać; my — я і подруга)", answers: ["czekałyśmy"], explain: "Дві жінки → нечоловічо-особова форма: czekałyśmy. Якби в групі був чоловік — czekaliśmy." },
        { type: "choice", q: "Tata ___ ciężką walizkę na czwarte piętro.", options: ["niósł", "niosł", "nieśł"], answer: 0, explain: "nieść → niósł (ó лише у формі «він»), niosła, nieśli, niosły. Пор. укр. «ніс — несла»." },
        { type: "gap", q: "Moja siostra nie ___ przyjechać na wesele. (móc)", answers: ["mogła"], explain: "móc → mógł (він), але mogła (вона): ó тільки в чоловічій формі однини." },
        { type: "gap", q: "Z Włoch ___ mnóstwo pamiątek. (przywieźć; my — у групі є чоловік)", answers: ["przywieźliśmy"], explain: "przywieźć → przywiózł, przywiozła, але перед -li — e: przywieźli, przywieźliśmy." },
        { type: "match", q: "З’єднайте форму «він» з формою «вони» (є чоловік)", pairs: [["jadł", "jedli"], ["szedł", "szli"], ["wziął", "wzięli"], ["niósł", "nieśli"], ["mógł", "mogli"], ["miał", "mieli"]], explain: "Чергування: a → e (jadł → jedli, miał → mieli), ą → ę (wziął → wzięli), ó → o/e (mógł → mogli, niósł → nieśli), e зникає (szedł → szli)." },
        { type: "choice", q: "Що означає розмовне «Gdzieście byli tak długo?»", options: ["Де ви були так довго?", "Десь ви довго були.", "Де ми були так довго?"], answer: 0, explain: "Рухоме закінчення -ście («ви») приліпилося до gdzie: Gdzieście byli? = Gdzie byliście?" },
        { type: "choice", q: "Dzieci cały dzień ___ na plaży.", options: ["bawiły się", "bawili się", "bawiło się"], answer: 0, explain: "Dzieci — не чоловічо-особовий рід → -ły: bawiły się." },
        { type: "gap", q: "Kto z was ___ moją ładowarkę? (wziąć, wy)", answers: ["wzięliście", "wzięłyście"], explain: "У множині — ę: wzięliście (є чоловік) або wzięłyście (лише жінки). Ą лише в wziął, wziąłem, wziąłeś." },
        { type: "order", ru: "Ми (ч.) провели тиждень на узбережжі.", words: ["Spędziliśmy", "tydzień", "na", "wybrzeżu."], alt: ["Tydzień spędziliśmy na wybrzeżu.", "Na wybrzeżu spędziliśmy tydzień."], explain: "Spędzić (провести час) у формі «ми» з чоловіками: spędziliśmy. Займенник my не потрібен — закінчення -śmy вже означає «ми»." },
        { type: "translate", ru: "Ми (ж.) їли піцу в Неаполі.", answers: ["Jadłyśmy pizzę w Neapolu.", "W Neapolu jadłyśmy pizzę."], explain: "jeść: у нечоловічо-особовій формі лишається a: jadłyśmy (а з чоловіками — jedliśmy)." }
      ],

      pronunciation: {
        focus: "ł у формах минулого часу; ą / ę перед ł",
        tip: `<p><b>Ł</b> у минулому часі звучить як українське нескладове [ў]: <span class="pl">była</span> ≈ [биўа]. Через це на слух різняться <span class="pl">byli</span> (м’яке l) і <span class="pl">były</span> ([биўи]) — тобто «з чоловіками» і «без чоловіків».</p>
<p>У швидкому мовленні кінцеве <b>ł після приголосного</b> часто зникає: <span class="pl">mógł</span> ≈ [muk], <span class="pl">niósł</span> ≈ [ńus], <span class="pl">szedł</span> ≈ [szet]. Розпізнавайте ці форми на слух, але пишіть ł завжди.</p>
<p>Носові <b>ą / ę перед ł і l</b> втрачають носовість: <span class="pl">wziął</span> [wźoł], <span class="pl">wzięła</span> [wźeła], <span class="pl">zaczęli</span> [zaczeli].</p>
<p>Наголос у формах <span class="pl">-liśmy, -łyście</span> за нормою — на третьому складі від кінця: <span class="pl">przywieźliśmy</span> — przy-<b>wieź</b>-li-śmy; у розмові часто чути й передостанній.</p>`,
        items: [
          { type: "minimal", options: ["byli", "były"], ru: ["(вони, є чоловік) були", "(вони, без чоловіків) були"] },
          { type: "minimal", options: ["mieli", "miały"], ru: ["(вони, є чоловік) мали", "(вони, без чоловіків) мали"] },
          { type: "listen", text: "wziął, wzięła, wzięli", ru: "взяв, взяла, взяли", note: "[wźoł], [wźeła], [wźeli] — перед ł і l носовий зникає" },
          { type: "listen", text: "mógł, niósł, szedł", ru: "міг, ніс, ішов", note: "у розмові ≈ [muk], [ńus], [szet]" },
          { type: "stress", word: "przywieźliśmy", syllables: ["przy", "wieź", "li", "śmy"], answer: 1, accept: [2] },
          { type: "stress", word: "niosłyście", syllables: ["nio", "sły", "ście"], answer: 0, accept: [1] },
          { type: "dictation", text: "Wzięliśmy plecaki i poszliśmy na plażę." }
        ]
      },

      reading: {
        title: "Lizbona, czyli wszystko poszło nie tak",
        text: "Rok temu polecieliśmy z mężem i z moją siostrą Kasią do Lizbony. Bilety były tanie, ale mieliśmy przesiadkę w Barcelonie. Oczywiście nasz bagaż nie doleciał. Mąż przez godzinę stał w kolejce i wypełniał formularze, a my z Kasią piłyśmy kawę i jadłyśmy portugalskie babeczki.\n\nPierwszego dnia szliśmy pieszo przez stare miasto. Kasia niosła mapę, a mąż niósł… nic, bo jego plecak był gdzieś w Barcelonie. Nie mogliśmy wejść do klasztoru, bo był zamknięty, ale wieczorem oglądaliśmy zachód słońca nad Tagiem. To było najpiękniejsze wrażenie całego wyjazdu.\n\nBagaż przyjechał ostatniego dnia, dwie godziny przed wylotem. Mąż wziął walizkę, popatrzył na nią i zaczął się śmiać: przez cały urlop chodził w tej samej koszulce.\n\n— Gdzieście byli tyle czasu? — zapytała mama po powrocie.\n\n— W Lizbonie. I w Barcelonie, ale tylko nasz bagaż — odpowiedziała Kasia.\n\nDo dziś wspominamy ten wyjazd z uśmiechem. Przywieźliśmy z Lizbony dużo pamiątek, a mąż — nową koszulkę z napisem „I love Lisboa”.",
        glossary: [
          { pl: "doleciał", ru: "долетів" },
          { pl: "wypełniał formularze", ru: "заповнював формуляри" },
          { pl: "babeczki", ru: "тістечка-кошики" },
          { pl: "klasztoru", ru: "монастиря" },
          { pl: "nad Tagiem", ru: "над річкою Тахо (Тежу)" },
          { pl: "popatrzył", ru: "подивився" },
          { pl: "koszulce", ru: "футболці" },
          { pl: "po powrocie", ru: "після повернення" },
          { pl: "z napisem", ru: "з написом" }
        ],
        questions: [
          { type: "tf", q: "Lot do Lizbony był bezpośredni.", answer: false, explain: "«Mieliśmy przesiadkę w Barcelonie» — була пересадка." },
          { type: "choice", q: "Co robiły siostry, kiedy mąż stał w kolejce?", options: ["Piły kawę i jadły babeczki.", "Zwiedzały klasztor.", "Szukały bagażu."], answer: 0, explain: "«My z Kasią piłyśmy kawę i jadłyśmy portugalskie babeczki» — дві жінки → -łyśmy." },
          { type: "tf", q: "Turyści weszli do klasztoru.", answer: false, explain: "«Nie mogliśmy wejść do klasztoru, bo był zamknięty»." },
          { type: "choice", q: "Kiedy przyjechał bagaż?", options: ["Pierwszego dnia.", "Ostatniego dnia.", "Po powrocie do Polski."], answer: 1, explain: "«Bagaż przyjechał ostatniego dnia, dwie godziny przed wylotem»." },
          { type: "tf", q: "Mama zapytała, gdzie byli tak długo.", answer: true, explain: "«Gdzieście byli tyle czasu?» = Gdzie byliście tyle czasu?" }
        ]
      },

      writing: {
        prompt: "Напишіть допис для польського форуму мандрівників «Moja najdziwniejsza podróż» (50–90 слів): 1) куди, коли й з ким ви їздили; 2) що ви робили разом (форми на -liśmy/-łyśmy); 3) що зробив або зробила хтось із попутників (3-тя особа, неправильні форми: wziął, niosła, mógł…); 4) що ви привезли та чи згадуєте цю поїздку.",
        minWords: 50,
        maxWords: 90,
        useWords: ["wylot", "przywieźć", "wspominać", "wrażenie"],
        checklist: [
          { label: "Щонайменше 3 форми «ми» в минулому (-liśmy / -łyśmy)", pattern: "\\p{L}+(liśmy|łyśmy)(?!\\p{L})", min: 3 },
          { label: "Щонайменше 2 форми з чергуванням (wziął, niósł, mógł / mogli, jadł / jedli, szedł / szli, przywiózł / przywieźli…)", pattern: "(wzią|wzię|mógł|mogł|mogl|niósł|niosł|nieśl|jadł|jedl|szedł|szł|szl|przywióz|przywioz|przywieź)", min: 2 }
        ],
        model: "W zeszłym roku pojechaliśmy z kolegami na tydzień do Gruzji. Wylot mieliśmy z Katowic o piątej rano. W Tbilisi jedliśmy chaczapuri i piliśmy wino, a potem pojechaliśmy w góry. Marek cały czas niósł ciężki plecak, bo wziął namiot. Niestety nie mogliśmy spać w namiocie, bo padał deszcz. Ostatniego dnia Ola zgubiła paszport, ale szybko go znalazła. Przywieźliśmy dużo pamiątek i niezapomniane wrażenia. Często wspominamy tę podróż."
      }
    },

    // ───────────────────────── УРОК 3 ─────────────────────────
    {
      id: "m14l3",
      title: "Zrobię czy będę robić?",
      titleRu: "Майбутній час: простий і складений",
      topic: "Plany i prognozy",
      review: false,
      minutes: 30,
      goals: [
        "Систематизувати обидва майбутні часи: простий (zrobię) і складений (będę robić / będę robił)",
        "Свідомо вибирати форму: процес і повторення чи результат і одна подія",
        "Уникати типових помилок: «będę zrobić», «będę być», «będę muszę»",
        "Говорити про плани й прогноз погоди, не плутаючи burza, na pewno, chyba"
      ],

      vocab: [
        { pl: "prognoza pogody", g: "f", ru: "прогноз погоди", ex: "Sprawdzam prognozę pogody na weekend.", exRu: "Перевіряю прогноз погоди на вихідні.", note: "prognoza — жіночого роду (на відміну від укр. «прогноз»)" },
        { pl: "przewidywać / przewidzieć", ru: "передбачати / передбачити", ex: "Nikt nie przewidzi wyniku tego meczu.", exRu: "Ніхто не передбачить результату цього матчу.", note: "теп. ч.: przewiduję; майб.: przewidzę" },
        { pl: "synoptyk", g: "m", ru: "синоптик", ex: "Synoptycy mówią, że będzie ciepło.", exRu: "Синоптики кажуть, що буде тепло.", note: "мн.: synoptycy (k → c)" },
        { pl: "burza", g: "f", ru: "гроза", ex: "W nocy była burza z piorunami.", exRu: "Уночі була гроза з блискавками.", note: "хибний друг! «Буря» — wichura, на морі — sztorm" },
        { pl: "upał", g: "m", ru: "спека", ex: "W lipcu był straszny upał.", exRu: "У липні була страшна спека.", note: "не плутайте з укр. «упав»! Jest upał / jest gorąco — спекотно" },
        { pl: "ulewa", g: "f", ru: "злива", ex: "Przez ulewę spóźniłam się do pracy.", exRu: "Через зливу я запізнилася на роботу." },
        { pl: "pochmurno", ru: "хмарно", ex: "Jutro będzie pochmurno i chłodno.", exRu: "Завтра буде хмарно й прохолодно." },
        { pl: "słonecznie", ru: "сонячно", ex: "W weekend będzie słonecznie.", exRu: "На вихідних буде сонячно." },
        { pl: "ocieplenie", g: "n", ru: "потепління", ex: "Od środy przyjdzie ocieplenie.", exRu: "Із середи прийде потепління.", note: "ochłodzenie — похолодання" },
        { pl: "chyba", ru: "мабуть, напевно (не впевнений)", ex: "Chyba jutro będzie padać.", exRu: "Мабуть, завтра йтиме дощ.", note: "саме chyba відповідає укр. «напевно» в значенні «мабуть»!" },
        { pl: "na pewno", ru: "точно, безперечно", ex: "Na pewno przyjdę na twoje urodziny.", exRu: "Я точно прийду на твій день народження.", note: "хибний друг: na pewno = «точно», а не «мабуть»" },
        { pl: "prawdopodobnie", ru: "імовірно", ex: "Prawdopodobnie wrócimy w niedzielę.", exRu: "Імовірно, ми повернемося в неділю." },
        { pl: "wkrótce", ru: "незабаром, невдовзі", ex: "Wkrótce zacznę nową pracę.", exRu: "Незабаром я почну нову роботу." }
      ],

      grammar: {
        title: "Два майбутні часи: zrobię і będę robić",
        html: `<p>У польській два майбутні часи, і вибір між ними залежить від <b>виду</b> дієслова.</p>
<table class="g">
<tr><th>вид</th><th>форма</th><th>приклад</th><th>українською</th></tr>
<tr><td>НДВ</td><td>będę + інфінітив</td><td class="pl">będę pisać</td><td>писатиму, буду писати</td></tr>
<tr><td>НДВ</td><td>będę + форма на -ł</td><td class="pl">będę pisał / pisała</td><td>писатиму</td></tr>
<tr><td>ДВ</td><td>закінчення теперішнього часу</td><td class="pl">napiszę</td><td>напишу</td></tr>
</table>
<h4>Усі форми</h4>
<table class="g">
<tr><th></th><th>być</th><th>robić (НДВ)</th><th>zrobić (ДВ)</th></tr>
<tr><td>ja</td><td class="pl">będę</td><td class="pl">będę robić / robił / robiła</td><td class="pl">zrobię</td></tr>
<tr><td>ty</td><td class="pl">będziesz</td><td class="pl">będziesz robić / robił / robiła</td><td class="pl">zrobisz</td></tr>
<tr><td>on / ona</td><td class="pl">będzie</td><td class="pl">będzie robić / robił / robiła</td><td class="pl">zrobi</td></tr>
<tr><td>my</td><td class="pl">będziemy</td><td class="pl">będziemy robić / robili / robiły</td><td class="pl">zrobimy</td></tr>
<tr><td>wy</td><td class="pl">będziecie</td><td class="pl">będziecie robić / robili / robiły</td><td class="pl">zrobicie</td></tr>
<tr><td>oni / one</td><td class="pl">będą</td><td class="pl">będą robić / robili / robiły</td><td class="pl">zrobią</td></tr>
</table>
<h4>Коли яку форму</h4>
<ul>
<li><b>będę + НДВ</b> — процес, тривалість, повторення: <span class="pl">Cały weekend będę się uczyć.</span> <span class="pl">Od poniedziałku będę codziennie biegać.</span></li>
<li><b>ДВ</b> — одна подія, результат, обіцянка: <span class="pl">Jutro napiszę raport.</span> <span class="pl">Zaraz wrócę!</span></li>
</ul>
<div class="ex"><span class="pl">Jutro będzie padać.</span> — Завтра йтиме дощ (весь час, процес).</div>
<div class="ex"><span class="pl">Jutro spadnie śnieg.</span> — Завтра випаде сніг (подія).</div>
<div class="ex"><span class="pl">W sobotę będzie burza.</span> — У суботу буде гроза.</div>
<h4>Типові помилки</h4>
<ul>
<li>«będę zrobić», «będę zrobił» — <b>будь-яка</b> форма з będę можлива лише з НДВ. Правильно: <span class="pl">zrobię</span>.</li>
<li>«będę być» — помилка, просто <span class="pl">będę</span>: <span class="pl">Jutro będę w pracy.</span></li>
<li>З модальними дієсловами — форма на -ł: <span class="pl">będę musiał, będziesz mogła, będą chcieli</span> (а не «będę muszę»).</li>
<li>Форма на -ł — без особового закінчення: <span class="pl">będę robił</span>, а не «będę robiłem».</li>
</ul>
<div class="tip">Хибні друзі прогнозу: <span class="pl">burza</span> — «гроза», а не «буря» (буря — <span class="pl">wichura</span>). <span class="pl">Na pewno</span> — «точно», а українське «напевно» в значенні «мабуть» — це <span class="pl">chyba</span> або <span class="pl">prawdopodobnie</span>. Скажете «Na pewno przyjdę» — і вас чекатимуть!</div>
<h4>Після kiedy і jeśli — теж майбутній</h4>
<p>Як і в українській, у підрядних реченнях про майбутнє вживаємо майбутній час: <span class="pl">Kiedy wrócę, zadzwonię.</span> — Коли повернуся, подзвоню. <span class="pl">Jeśli będzie ładnie, pojedziemy nad jezioro.</span> — Якщо буде гарна погода, поїдемо на озеро. Теперішній час тут («Kiedy wracam…») означав би звичку: «Щоразу, коли повертаюся…».</p>
<div class="tip">Простий тест для українців: «зроблю» чи «робитиму»? «Зроблю» → <span class="pl">zrobię</span>, «робитиму / буду робити» → <span class="pl">będę robić</span>. Синтетичної форми на зразок «робитиму» в польській немає.</div>`
      },

      exercises: [
        { type: "choice", q: "Weź parasol! Jutro cały dzień ___.", options: ["będzie padać", "spadnie", "będzie spaść"], answer: 0, explain: "«Цілий день» — процес → będzie + НДВ: będzie padać. Spadnie — одна подія («випаде»), а «będzie spaść» — помилка: będę не поєднується з ДВ." },
        { type: "choice", q: "Яке речення НЕПРАВИЛЬНЕ?", options: ["Jutro to zrobię.", "Jutro będę to robić.", "Jutro będę to zrobić."], answer: 2, explain: "będę + ДВ — помилка. Правильно: zrobię (результат) або będę robić (процес)." },
        { type: "gap", q: "Nie martw się, wieczorem ___ do ciebie. (zadzwonić, ja)", answers: ["zadzwonię"], explain: "Одна дія-обіцянка → простий майбутній ДВ: zadzwonię («подзвоню»)." },
        { type: "gap", q: "W przyszłym tygodniu rodzice ___ w Gdańsku. (być)", answers: ["będą"], explain: "być у майбутньому: będę, będziesz, będzie, będziemy, będziecie, będą. Жодного «będą być»." },
        { type: "gap", q: "Od września ___ na kurs tańca. (chodzić; my — лише жінки, форма на -ł)", answers: ["będziemy chodziły"], explain: "Регулярна дія → складений майбутній. Лише жінки → форма на -ły: będziemy chodziły." },
        { type: "match", q: "З’єднайте слово з перекладом", pairs: [["burza", "гроза"], ["upał", "спека"], ["ulewa", "злива"], ["na pewno", "точно, безперечно"], ["chyba", "мабуть"], ["wkrótce", "незабаром"]], explain: "Пастки: burza — не «буря», upał — не «упав», na pewno — не «напевно (мабуть)»." },
        { type: "choice", q: "Nie wiem, czy ___ przyjść na imprezę. (ja — жінка)", options: ["będę mogła", "będę mogę", "będę mogłam"], answer: 0, explain: "Модальне дієслово в майбутньому: będę + форма на -ł без особового закінчення: będę mogła." },
        { type: "gap", q: "Synoptycy przewidują, że w weekend ___ ocieplenie. (być)", answers: ["będzie"], explain: "Ocieplenie — однина, середній рід → będzie." },
        { type: "order", ru: "Я напишу тобі, коли приїду.", words: ["Napiszę", "do", "ciebie,", "kiedy", "przyjadę."], alt: ["Kiedy przyjadę, napiszę do ciebie."], explain: "Дві одиничні події → ДВ: napiszę, przyjadę. Napisać DO kogoś — з прийменником do, хоча укр. «напишу тобі»." },
        { type: "translate", ru: "Завтра буде спекотно.", answers: ["Jutro będzie upał.", "Jutro będzie gorąco."], explain: "być у майбутньому: będzie. «Спекотно» — jest upał або jest gorąco." }
      ],

      pronunciation: {
        focus: "będę / będą / będzie: ę, ą і dź",
        tip: `<p>У формах <b>być</b> майбутнього часу носові звучать по-різному залежно від позиції:</p>
<ul>
<li><b>ę перед d</b> → [en]: <span class="pl">będę</span> ≈ [bende], <span class="pl">będzie</span> ≈ [bendźe];</li>
<li><b>кінцеве ę</b> → майже [e]: <span class="pl">będę</span> [bende], <span class="pl">zrobię</span> [zrobje];</li>
<li><b>кінцеве ą</b> — носове: <span class="pl">będą</span> ≈ [bendõ], <span class="pl">zrobią</span>.</li>
</ul>
<p>Отже, <span class="pl">będę</span> («я буду») і <span class="pl">będą</span> («вони будуть») різняться лише останнім звуком — вслухайтеся. <b>Dzi</b> у <span class="pl">będziesz, będziemy</span> — м’яке [dź], близьке до українського «дз’» у «дзьоб». Наголос — на передостанньому складі: bę-<b>dzie</b>-my, bę-<b>dzie</b>-cie.</p>`,
        items: [
          { type: "minimal", options: ["będę", "będą"], ru: ["я буду", "вони будуть"] },
          { type: "minimal", options: ["zrobię", "zrobią"], ru: ["я зроблю", "вони зроблять"] },
          { type: "listen", text: "będę, będziesz, będzie", ru: "я буду, ти будеш, він буде", note: "[bende], [bendźesz], [bendźe]: ę перед d → [en]" },
          { type: "stress", word: "będziecie", syllables: ["bę", "dzie", "cie"], answer: 1 },
          { type: "stress", word: "prawdopodobnie", syllables: ["praw", "do", "po", "dob", "nie"], answer: 3 },
          { type: "listen", text: "Jutro będzie burza, a w weekend upał.", ru: "Завтра буде гроза, а на вихідних спека." },
          { type: "dictation", text: "Chyba jutro będzie padać, więc zostanę w domu." }
        ]
      },

      reading: {
        title: "Majówka według prognozy",
        text: "Jest środa wieczorem. Rodzina Kowalskich z Łodzi planuje majówkę nad morzem. Tata włącza prognozę pogody.\n\n— W piątek na Pomorzu będzie słonecznie — mówi synoptyk. — W sobotę przyjdzie ocieplenie i temperatura wzrośnie do dwudziestu pięciu stopni. W niedzielę po południu prawdopodobnie przejdą burze i ulewy.\n\n— Super! — cieszy się Zuzia. — Będę się opalać cały piątek i całą sobotę!\n\n— A ja w sobotę na pewno pójdę na molo w Sopocie i zjem gofra z bitą śmietaną — mówi mama.\n\n— A ja będę grał w siatkówkę na plaży — dodaje Antek.\n\nTylko tata milczy.\n\n— Ja wam nic nie obiecam. Pamiętacie zeszły rok? Prognoza zapowiadała upał, a my przez trzy dni siedzieliśmy w pensjonacie i graliśmy w chińczyka. Tym razem spakuję parasole, kurtki i kalosze. A jeśli będzie ładnie, to chyba też pójdę na gofra.\n\nW piątek rano nad Łodzią wisiały ciężkie chmury. Kiedy Kowalscy wsiadali do samochodu, zaczęło padać. Tata uśmiechnął się i włożył do bagażnika jeszcze jedną grę.",
        glossary: [
          { pl: "majówkę", ru: "травневі вихідні (1–3 травня)" },
          { pl: "wzrośnie", ru: "зросте" },
          { pl: "molo", ru: "пірс, мол" },
          { pl: "gofra z bitą śmietaną", ru: "вафлю зі збитими вершками" },
          { pl: "milczy", ru: "мовчить" },
          { pl: "obiecam", ru: "пообіцяю" },
          { pl: "chińczyka", ru: "«китайця» (настільна гра з фішками й кубиком)" },
          { pl: "kalosze", ru: "гумові чоботи" },
          { pl: "bagażnika", ru: "багажника" }
        ],
        questions: [
          { type: "tf", q: "W piątek na Pomorzu ma być słonecznie.", answer: true, explain: "«W piątek na Pomorzu będzie słonecznie»." },
          { type: "choice", q: "Co mama na pewno zrobi w sobotę?", options: ["Zje gofra na molo w Sopocie.", "Będzie grała w siatkówkę.", "Zostanie w pensjonacie."], answer: 0, explain: "«Na pewno pójdę na molo w Sopocie i zjem gofra» — одиничні події → ДВ: pójdę, zjem." },
          { type: "tf", q: "W zeszłym roku pogoda na majówce była piękna.", answer: false, explain: "Прогноз обіцяв спеку, а родина три дні сиділа в пансіонаті." },
          { type: "choice", q: "Dlaczego tata pakuje parasole i kalosze?", options: ["Bo nie wierzy prognozom.", "Bo prognoza zapowiada śnieg.", "Bo Zuzia go o to prosi."], answer: 0, explain: "Минулого року прогноз помилився, тож тато «нічого не обіцяє»." },
          { type: "tf", q: "W piątek rano w Łodzi zaczęło padać.", answer: true, explain: "«Kiedy Kowalscy wsiadali do samochodu, zaczęło padać»." }
        ]
      },

      writing: {
        prompt: "Подруга-полька питає про ваші плани на найближчі вихідні. Напишіть відповідь (40–80 слів): 1) який прогноз погоди (będzie…); 2) що ви робитимете довго або регулярно (będę + НДВ); 3) що конкретно зробите (простий майбутній: pójdę, upiekę, kupię…); 4) що зробите, якщо буде гарна погода; наприкінці запитайте про її плани.",
        minWords: 40,
        maxWords: 80,
        useWords: ["prognoza", "chyba", "na pewno", "burza"],
        checklist: [
          { label: "Складений майбутній: щонайменше 2 рази będę / będziesz / będziemy + дієслово", pattern: "(?<!\\p{L})będ(ę|ziesz|zie|ziemy|ziecie|ą)\\s+\\p{L}+", min: 2 },
          { label: "Простий майбутній ДВ: щонайменше 2 форми на -ę (pójdę, upiekę, zrobię…)", pattern: "(?<!\\p{L})(?!się|chcę|muszę|mogę|będę)\\p{L}{3,}ę(?!\\p{L})", min: 2 }
        ],
        model: "Cześć Basiu! Prognoza na weekend nie jest dobra: w sobotę będzie pochmurno, a w niedzielę chyba przyjdzie burza. W sobotę rano będę sprzątać mieszkanie, a potem będę się uczyć do egzaminu. Wieczorem na pewno pójdę z Tomkiem do kina. W niedzielę upiekę ciasto i zaproszę sąsiadów. Jeśli będzie ładnie, pojedziemy rowerami nad Wisłę. A ty? Co będziesz robić?"
      }
    },

    // ───────────────────────── УРОК 4 ─────────────────────────
    {
      id: "m14l4",
      title: "Czytałam, przeczytałam, przeczytam",
      titleRu: "Вид у всіх трьох часах",
      topic: "Historie z życia",
      review: false,
      minutes: 30,
      goals: [
        "Мислити «на часовій осі»: процес і повторення (НДВ) проти результату й одиничної події (ДВ)",
        "Пам’ятати, що теперішня форма ДВ означає майбутнє: kupię = «куплю»",
        "Будувати розповідь: тло (НДВ) + ланцюжок подій (ДВ)",
        "Правильно наголошувати форми -liśmy / -łyście"
      ],

      vocab: [
        { pl: "przez przypadek", ru: "випадково", ex: "Poznaliśmy się przez przypadek.", exRu: "Ми познайомилися випадково.", note: "przypadek — випадок; синонім: przypadkiem" },
        { pl: "zdarzać się / zdarzyć się", ru: "траплятися / трапитися", ex: "Wczoraj zdarzyła mi się dziwna historia.", exRu: "Учора зі мною трапилася дивна історія.", note: "Zdarza się! — Буває!" },
        { pl: "pewnego dnia", ru: "одного дня", ex: "Pewnego dnia zadzwonił do mnie stary kolega.", exRu: "Одного дня мені зателефонував старий друг." },
        { pl: "wreszcie", ru: "нарешті", ex: "Wreszcie znalazłam pracę!", exRu: "Нарешті я знайшла роботу!", note: "синонім: w końcu; зазвичай із ДВ" },
        { pl: "natychmiast", ru: "негайно, миттєво", ex: "Lekarz natychmiast przyjechał.", exRu: "Лікар негайно приїхав." },
        { pl: "poznawać / poznać", ru: "знайомитися / познайомитися (з кимось); пізнавати / пізнати", ex: "Poznałam Marka na studiach.", exRu: "Я познайомилася з Мареком під час навчання.", note: "poznać kogoś — без «z»! Але: poznać się z kimś, poznaliśmy się" },
        { pl: "oświadczać się / oświadczyć się", ru: "освідчуватися / освідчитися (робити пропозицію)", ex: "Tomek oświadczył się Ani w Paryżu.", exRu: "Томек освідчився Ані в Парижі.", note: "oświadczyć się komuś — давальний, як в українській" },
        { pl: "zaręczyny", g: "pl", ru: "заручини", ex: "Zaręczyny były w grudniu, a ślub w lipcu.", exRu: "Заручини були в грудні, а весілля в липні." },
        { pl: "ślub", g: "m", ru: "шлюб, весільна церемонія", ex: "Wzięli ślub w małym kościele w górach.", exRu: "Вони побралися в маленькому костелі в горах.", note: "brać / wziąć ślub — одружуватися / одружитися (про пару)" },
        { pl: "przeżyć", ru: "пережити; прожити", ex: "Przeżyliśmy razem trzydzieści lat.", exRu: "Ми прожили разом тридцять років.", note: "ДВ; przeżyć coś — пережити щось" },
        { pl: "dowiadywać się / dowiedzieć się", ru: "дізнаватися / дізнатися", ex: "O wszystkim dowiedziałam się od sąsiadki.", exRu: "Про все я дізналася від сусідки.", note: "dowiedzieć się o czymś (місц. в.); мин.: dowiedziałem, dowiedzieli" },
        { pl: "zostawiać / zostawić", ru: "залишати / залишити", ex: "Zostawiłem klucze w samochodzie.", exRu: "Я залишив ключі в машині." },
        { pl: "trafiać / trafić", ru: "потрапляти / потрапити; влучати / влучити", ex: "Przez przypadek trafiłam do złego pociągu.", exRu: "Я випадково потрапила не в той потяг." }
      ],

      grammar: {
        title: "Вид у минулому, теперішньому й майбутньому",
        html: `<p>Вид — головний «перемикач» польського дієслова. Уявіть часову вісь: <b>НДВ</b> малює <b>лінію</b> (процес, повторення, тло), <b>ДВ</b> ставить <b>крапку</b> (результат, одна подія).</p>
<table class="g">
<tr><th></th><th>минулий</th><th>теперішній</th><th>майбутній</th></tr>
<tr><td>НДВ — лінія</td><td class="pl">kupowałem</td><td class="pl">kupuję</td><td class="pl">będę kupować</td></tr>
<tr><td>ДВ — крапка</td><td class="pl">kupiłem</td><td>—</td><td class="pl">kupię</td></tr>
</table>
<p>Головне: форма <span class="pl">kupię</span> виглядає як теперішній час, але означає <b>майбутнє</b> — «куплю». Теперішнього часу ДВ не має.</p>
<h4>Слова-підказки</h4>
<table class="g">
<tr><th>НДВ — лінія</th><th>ДВ — крапка</th></tr>
<tr><td class="pl">codziennie, często, zwykle, zawsze</td><td class="pl">nagle, natychmiast, od razu</td></tr>
<tr><td class="pl">długo, cały dzień, przez rok</td><td class="pl">wreszcie, w końcu, już</td></tr>
<tr><td class="pl">kiedy… (тло)</td><td class="pl">najpierw… potem… (ланцюжок)</td></tr>
</table>
<h4>Вид у розповіді</h4>
<ul>
<li><b>Тло + подія:</b> <span class="pl">Szłam ulicą, kiedy nagle zadzwonił telefon.</span> — Я йшла вулицею, коли раптом задзвонив телефон.</li>
<li><b>Ланцюжок подій — ДВ:</b> <span class="pl">Wstałem, wziąłem prysznic i wyszedłem z domu.</span></li>
<li><b>Паралельні процеси — НДВ:</b> <span class="pl">Mama gotowała, a tata czytał gazetę.</span></li>
</ul>
<h4>Вид і заперечення</h4>
<div class="ex"><span class="pl">Nie czytałem tej książki.</span> — Я не читав цієї книжки (узагалі).</div>
<div class="ex"><span class="pl">Nie przeczytałem tej książki.</span> — Я не прочитав її (почав, але не дочитав).</div>
<div class="ex"><span class="pl">Oglądałeś ten film?</span> — Ти дивився цей фільм? (досвід — НДВ)</div>
<h4>Майбутнє: повторення чи одна подія</h4>
<div class="ex"><span class="pl">Będę do ciebie codziennie dzwonić.</span> — Я щодня тобі дзвонитиму.</div>
<div class="ex"><span class="pl">Zadzwonię do ciebie jutro.</span> — Я подзвоню тобі завтра.</div>
<h4>Типова пастка: «зараз зроблю»</h4>
<p>Українське «зараз зроблю», «вже біжу» — це майбутнє, і польська тут теж вживає ДВ: <span class="pl">Zaraz to zrobię.</span> — Зараз (за мить) це зроблю. А <span class="pl">Teraz to robię.</span> — Я роблю це саме зараз (процес). Слова <span class="pl">zaraz</span> і <span class="pl">za chwilę</span> («за хвилинку») зазвичай вимагають ДВ, а <span class="pl">teraz</span> і <span class="pl">właśnie</span> у значенні «саме зараз» — НДВ.</p>
<div class="tip">Українцям вид дається легко: «купував / купив», «купуватиму / куплю» — ті самі пари. Пастки — в керуванні: <span class="pl">poznać kogoś</span> — «познайомитися з кимось» (без <i>z</i>!): <span class="pl">Poznałam Marka na weselu.</span> А <span class="pl">zakochać się w kimś</span> вимагає <b>місцевого</b> відмінка: <span class="pl">zakochała się w nim</span>, хоча українською «закохалася в нього» — знахідний.</div>`
      },

      exercises: [
        { type: "choice", q: "___ do domu, kiedy nagle zaczął padać deszcz.", options: ["Wracałam", "Wróciłam", "Wrócę"], answer: 0, explain: "Тло (що відбувалося) — НДВ wracałam; подія, яка його перервала, — ДВ zaczął." },
        { type: "choice", q: "Jutro ___ ci tę książkę, obiecuję!", options: ["oddam", "oddaję", "oddawałam"], answer: 0, explain: "Обіцянка, одна дія в майбутньому → ДВ oddać: oddam («поверну»). Oddaję — «повертаю» (зараз)." },
        { type: "gap", q: "W 2019 roku Ania ___ Marka na weselu kuzynki. (poznawać / poznać)", answers: ["poznała"], explain: "Одна подія в минулому → ДВ: poznała. І без «z»: poznać kogoś." },
        { type: "choice", q: "Як сказати «Я ніколи не читав цієї книжки»?", options: ["Nigdy nie czytałem tej książki.", "Nigdy nie przeczytam tej książki.", "Nigdy nie czytam tej książki."], answer: 0, explain: "«Ніколи не читав» — досвід узагалі → НДВ у минулому: nie czytałem. Nie przeczytam — «не прочитаю» (майбутнє)." },
        { type: "gap", q: "Codziennie ___ do mamy, ale wczoraj zapomniałem. (dzwonić / zadzwonić, ja)", answers: ["dzwonię"], explain: "«Codziennie» — повторення → НДВ у теперішньому: dzwonię." },
        { type: "match", q: "З’єднайте форму з перекладом", pairs: [["kupuję", "купую"], ["kupię", "куплю"], ["kupowałem", "купував"], ["kupiłem", "купив"], ["będę kupować", "купуватиму"]], explain: "Kupię — форма теперішнього типу, але від ДВ, тому означає майбутнє: «куплю»." },
        { type: "gap", q: "Dopiero wczoraj ___, że firma się przeprowadza. (dowiadywać się / dowiedzieć się; ja — жінка)", answers: ["dowiedziałam się", "się dowiedziałam"], explain: "Одноразова подія, результат («дізналася») → ДВ: dowiedziałam się." },
        { type: "gap", q: "Przez trzy lata Tomek ___ na mieszkanie, a wreszcie je kupił. (oszczędzać / zaoszczędzić)", answers: ["oszczędzał"], explain: "«Przez trzy lata» — тривалість, процес → НДВ: oszczędzał. Результат (kupił) — ДВ." },
        { type: "order", ru: "Тим часом Марек залишив ключі в машині.", words: ["Tymczasem", "Marek", "zostawił", "klucze", "w", "samochodzie."], alt: ["Marek tymczasem zostawił klucze w samochodzie."], explain: "Zostawić (ДВ) — одна подія з результатом: ключі лишилися в машині." },
        { type: "translate", ru: "Вона одразу закохалася в нього.", answers: ["Od razu się w nim zakochała.", "Od razu zakochała się w nim.", "Zakochała się w nim od razu."], explain: "Zakochać się w kimś — з місцевим відмінком: w nim (а не «w niego»). Одна подія → ДВ." }
      ],

      pronunciation: {
        focus: "Наголос у формах -liśmy / -łyście",
        tip: `<p>У формах минулого часу 1-ї та 2-ї особи множини наголос за нормою падає на <b>третій склад від кінця</b>. Найпростіше правило: <b>наголошуйте так, як у формі «oni / one»</b>:</p>
<ul>
<li><span class="pl">poznali</span> (po-<b>zna</b>-li) → <span class="pl">poznaliśmy</span> (po-<b>zna</b>-li-śmy)</li>
<li><span class="pl">zakochały</span> (za-ko-<b>cha</b>-ły) → <span class="pl">zakochałyście</span> (za-ko-<b>cha</b>-ły-ście)</li>
</ul>
<p>У невимушеній розмові багато поляків наголошують передостанній склад (pozna-<b>li</b>-śmy) — це вже допустимо, але на іспиті, у ЗМІ й офіційному мовленні краще тримати норму.</p>
<p>Префікс ДВ подовжує слово — і наголос «переїжджає»: <span class="pl">czytał</span> (<b>czy</b>-tał) → <span class="pl">przeczytał</span> (prze-<b>czy</b>-tał) → <span class="pl">przeczytaliśmy</span> (prze-czy-<b>ta</b>-li-śmy).</p>`,
        items: [
          { type: "stress", word: "poznaliśmy", syllables: ["po", "zna", "li", "śmy"], answer: 1, accept: [2] },
          { type: "stress", word: "zakochałyście", syllables: ["za", "ko", "cha", "ły", "ście"], answer: 2, accept: [3] },
          { type: "stress", word: "dowiedzieliśmy", syllables: ["do", "wie", "dzie", "li", "śmy"], answer: 2, accept: [3] },
          { type: "listen", text: "czytał, przeczytał, przeczytaliśmy", ru: "читав, прочитав, (ми) прочитали", note: "CZY-tał → prze-CZY-tał → prze-czy-TA-li-śmy" },
          { type: "listen", text: "Poznaliśmy się przez przypadek.", ru: "Ми познайомилися випадково.", note: "po-ZNA-li-śmy" },
          { type: "dictation", text: "Wczoraj wreszcie przeczytałam tę książkę." }
        ]
      },

      reading: {
        title: "Historia z tramwaju",
        text: "Moi rodzice często opowiadają, jak się poznali. To było w Krakowie w 1998 roku. Mama studiowała wtedy medycynę i codziennie jeździła na zajęcia tramwajem. Tata pracował w księgarni na Starym Mieście i zawsze jeździł rowerem.\n\nPewnego dnia padał śnieg, więc tata wsiadł do tramwaju. Mama siedziała przy oknie i czytała gruby podręcznik do anatomii. Tata stał obok i udawał, że patrzy przez okno. Nagle tramwaj gwałtownie zahamował. Tata stracił równowagę i usiadł… mamie na kolanach. Podręcznik spadł na podłogę.\n\n— Przepraszam! — powiedział tata i natychmiast podniósł książkę.\n\nMama najpierw była zła, ale potem zaczęła się śmiać. Rozmawiali do końca trasy. Tymczasem tata przegapił swój przystanek i przyjechał do pracy godzinę później. Szef był wściekły, ale tata był szczęśliwy.\n\nOd tamtej pory tata codziennie jeździł tramwajem. Rok później oświadczył się mamie, a po studiach wzięli ślub. Mama twierdzi, że zakochała się w nim dopiero po pół roku. Tata mówi, że on zakochał się od razu — w chwili, kiedy spadł podręcznik.",
        glossary: [
          { pl: "udawał", ru: "вдавав" },
          { pl: "gwałtownie zahamował", ru: "різко загальмував" },
          { pl: "stracił równowagę", ru: "утратив рівновагу" },
          { pl: "na kolanach", ru: "на колінах" },
          { pl: "podniósł", ru: "підняв" },
          { pl: "przegapił", ru: "проґавив, проїхав" },
          { pl: "wściekły", ru: "розлючений" },
          { pl: "Od tamtej pory", ru: "Відтоді" },
          { pl: "twierdzi", ru: "стверджує" }
        ],
        questions: [
          { type: "tf", q: "Mama codziennie jeździła na zajęcia tramwajem.", answer: true, explain: "«Codziennie jeździła na zajęcia tramwajem» — повторення → НДВ." },
          { type: "choice", q: "Co robiła mama, kiedy tata wsiadł do tramwaju?", options: ["Czytała podręcznik.", "Rozmawiała przez telefon.", "Spała przy oknie."], answer: 0, explain: "Тло — НДВ: «siedziała przy oknie i czytała gruby podręcznik»." },
          { type: "choice", q: "Dlaczego tata usiadł mamie na kolanach?", options: ["Bo tramwaj gwałtownie zahamował.", "Bo nie było wolnych miejsc.", "Bo chciał ją poznać."], answer: 0, explain: "«Nagle tramwaj gwałtownie zahamował. Tata stracił równowagę…»" },
          { type: "tf", q: "Tata spóźnił się tego dnia do pracy.", answer: true, explain: "Він проґавив зупинку й приїхав на роботу на годину пізніше." },
          { type: "tf", q: "Mama zakochała się w tacie od razu.", answer: false, explain: "«Mama twierdzi, że zakochała się w nim dopiero po pół roku»." }
        ]
      },

      writing: {
        prompt: "Напишіть коротку історію з життя (50–90 слів) для конкурсу «Historie z życia»: як ви з кимось познайомилися або що несподіване з вами трапилося. Опишіть тло (що відбувалося — НДВ), ланцюжок подій (ДВ) і завершіть реченням про те, що ви робите тепер або зробите в майбутньому.",
        minWords: 50,
        maxWords: 90,
        useWords: ["poznać", "pewnego dnia", "przez przypadek", "wreszcie"],
        checklist: [
          { label: "Слово-підказка тла або повторення: kiedy, codziennie, często, zawsze, długo", pattern: "(?<!\\p{L})(kiedy|gdy|codziennie|często|zawsze|długo)(?!\\p{L})", min: 1 },
          { label: "Щонайменше 2 слова-підказки події: nagle, natychmiast, od razu, wreszcie, w końcu", pattern: "(?<!\\p{L})(nagle|natychmiast|od razu|wreszcie|w końcu)(?!\\p{L})", min: 2 },
          { label: "Щонайменше 5 форм минулого часу", pattern: "\\p{L}+(łem|łam|łeś|łaś|ł|ła|ło|liśmy|łyśmy|li|ły)(?!\\p{L})", min: 5 }
        ],
        model: "Moją najlepszą przyjaciółkę poznałam przez przypadek. Pięć lat temu codziennie jeździłam pociągiem do Warszawy. Pewnego dnia siedziałam w przedziale i czytałam kryminał. Nagle pociąg stanął w polu. Pani obok mnie zaczęła głośno narzekać, ale po chwili zobaczyłam, że czyta tę samą książkę! Rozmawiałyśmy przez trzy godziny. Wreszcie pociąg ruszył, a my wymieniłyśmy się numerami. Dziś często razem podróżujemy, a w maju pojedziemy do Lizbony."
      }
    },

    // ───────────────────────── УРОК 5 (ПОВТОРЕННЯ) ─────────────────────────
    {
      id: "m14l5",
      title: "Powtórka: czas na czasy",
      titleRu: "Повторення: усі часи й обидва види",
      topic: "Życiowe zmiany",
      review: true,
      minutes: 30,
      goals: [
        "Звести в одну систему всі часи й обидва види",
        "Швидко вибирати правильну форму в змішаних завданнях",
        "Зв’язно розповісти про минуле, теперішнє й майбутнє в одному тексті"
      ],

      vocab: [
        { pl: "przeprowadzka", g: "f", ru: "переїзд (на нове місце проживання)", ex: "Przeprowadzka zajęła nam cały weekend.", exRu: "Переїзд забрав у нас усі вихідні." },
        { pl: "pożegnanie", g: "n", ru: "прощання", ex: "Na pożegnanie koledzy dali mi kwiaty.", exRu: "На прощання колеги подарували мені квіти.", note: "przywitanie, powitanie — привітання, зустріч" },
        { pl: "przyzwyczajać się / przyzwyczaić się", ru: "звикати / звикнути", ex: "Szybko przyzwyczaiłam się do nowego miasta.", exRu: "Я швидко звикла до нового міста.", note: "przyzwyczaić się DO czegoś (родовий), як укр. «звикнути до»" },
        { pl: "tęsknota", g: "f", ru: "туга, сум (за кимось)", ex: "Tęsknota za domem mija powoli.", exRu: "Туга за домом минає повільно.", note: "tęsknić za kimś — сумувати за кимось" },
        { pl: "na stałe", ru: "назавжди, на постійне проживання", ex: "Zostajemy w Polsce na stałe.", exRu: "Ми залишаємося в Польщі назавжди." },
        { pl: "dawniej", ru: "раніше, колись", ex: "Dawniej pisaliśmy listy, dziś wysyłamy SMS-y.", exRu: "Раніше ми писали листи, сьогодні надсилаємо SMS." },
        { pl: "obecnie", ru: "нині, зараз (офіц.)", ex: "Obecnie pracuję zdalnie.", exRu: "Нині я працюю дистанційно." },
        { pl: "od nowa", ru: "заново, спочатку", ex: "Musiałam zacząć wszystko od nowa.", exRu: "Мені довелося почати все спочатку." },
        { pl: "poprzedni", ru: "попередній", ex: "W poprzedniej pracy miałem lepszego szefa.", exRu: "На попередній роботі в мене був кращий начальник." },
        { pl: "umowa o pracę", g: "f", ru: "трудовий договір", ex: "Wreszcie dostałam umowę o pracę!", exRu: "Нарешті я отримала трудовий договір!", note: "umowa — договір (а не «умова» — warunek)" }
      ],

      grammar: {
        title: "Підсумок модуля: усі часи й види",
        html: `<h4>1. Вид × час</h4>
<table class="g">
<tr><th>НДВ</th><th>теперішній (ja)</th><th>минулий (on / ona)</th><th>майбутній (ja)</th></tr>
<tr><td class="pl">robić</td><td class="pl">robię</td><td class="pl">robił / robiła</td><td class="pl">będę robić</td></tr>
<tr><td class="pl">brać</td><td class="pl">biorę</td><td class="pl">brał / brała</td><td class="pl">będę brać</td></tr>
<tr><td class="pl">jechać</td><td class="pl">jadę</td><td class="pl">jechał / jechała</td><td class="pl">będę jechać</td></tr>
<tr><td class="pl">jeść</td><td class="pl">jem</td><td class="pl">jadł / jadła</td><td class="pl">będę jeść</td></tr>
</table>
<table class="g">
<tr><th>ДВ</th><th>теперішній</th><th>минулий (on / ona)</th><th>майбутній (ja)</th></tr>
<tr><td class="pl">zrobić</td><td>—</td><td class="pl">zrobił / zrobiła</td><td class="pl">zrobię</td></tr>
<tr><td class="pl">wziąć</td><td>—</td><td class="pl">wziął / wzięła</td><td class="pl">wezmę</td></tr>
<tr><td class="pl">pojechać</td><td>—</td><td class="pl">pojechał / pojechała</td><td class="pl">pojadę</td></tr>
<tr><td class="pl">pójść</td><td>—</td><td class="pl">poszedł / poszła</td><td class="pl">pójdę</td></tr>
</table>
<h4>2. Теперішній: чотири групи</h4>
<p><span class="pl">czytam, czytasz</span> (-am) · <span class="pl">umiem, umiesz</span> (-em) · <span class="pl">piszę, piszesz</span> (-ę/-esz) · <span class="pl">mówię, mówisz</span> (-ę/-isz). Правило «ja = oni»: <span class="pl">biorę – biorą, mogę – mogą</span>, але <span class="pl">bierzesz, możesz</span>.</p>
<h4>3. Минулий: закінчення і чергування</h4>
<table class="g">
<tr><th></th><th>однина (ч. / ж.)</th><th>множина (є чоловік / немає)</th></tr>
<tr><td>1-ша особа</td><td class="pl">-łem / -łam</td><td class="pl">-liśmy / -łyśmy</td></tr>
<tr><td>2-га особа</td><td class="pl">-łeś / -łaś</td><td class="pl">-liście / -łyście</td></tr>
<tr><td>3-тя особа</td><td class="pl">-ł / -ła / -ło</td><td class="pl">-li / -ły</td></tr>
</table>
<p>Чергування: <span class="pl">mógł – mogła</span> (ó/o), <span class="pl">wziął – wzięła</span> (ą/ę), <span class="pl">jadł – jedli</span> (a/e), <span class="pl">szedł – szła</span>.</p>
<h4>4. Майбутній</h4>
<p>НДВ → <span class="pl">będę robić / będę robił</span> (процес, повторення); ДВ → <span class="pl">zrobię</span> (результат, одна подія). Вибір виду: лінія (<span class="pl">codziennie, długo, kiedy…</span>) чи крапка (<span class="pl">nagle, wreszcie, już</span>).</p>
<p>Розповідь будуємо так: тло й звички — НДВ, події — ДВ, а наприкінці — плани: <span class="pl">będę + НДВ</span> для процесу, простий майбутній ДВ для конкретних кроків.</p>
<div class="tip">Сім головних помилок модуля: 1) «będę zrobić» → <span class="pl">zrobię</span>; 2) «wezmę» у значенні «беру» → <span class="pl">biorę</span>; 3) «my byli» → <span class="pl">byliśmy</span>; 4) «dzieci byli» → <span class="pl">dzieci były</span>; 5) «poszedła» → <span class="pl">poszła</span>; 6) «śpiesz», «biorzesz» → <span class="pl">śpisz, bierzesz</span>; 7) <span class="pl">na pewno</span> — «точно», а «мабуть» — <span class="pl">chyba</span>.</div>
<div class="ex"><span class="pl">Dawniej mieszkałam w Odessie. Teraz mieszkam w Gdańsku, a w przyszłym roku przeprowadzę się do Krakowa.</span> — Раніше я жила в Одесі. Тепер живу в Гданську, а наступного року переїду до Кракова.</div>`
      },

      exercises: [
        { type: "gap", q: "Teraz ___ prysznic, oddzwonię za chwilę! (brać, ja)", answers: ["biorę"], explain: "Зараз, процес → теперішній НДВ: biorę (не wezmę — це «візьму»)." },
        { type: "gap", q: "Wczoraj Ola ___ do pracy pieszo. (iść)", answers: ["szła"], explain: "iść → szedł (він), але szła (вона) — без e." },
        { type: "choice", q: "Що означає розмовне «Gdzieście się poznali?»", options: ["Де ви познайомилися?", "Десь ви познайомилися.", "Де ми познайомилися?"], answer: 0, explain: "Gdzieście się poznali? = Gdzie się poznaliście? Закінчення -ście («ви») перескочило на gdzie." },
        { type: "choice", q: "Za tydzień ___ umowę o pracę.", options: ["podpiszę", "podpisałem", "będę podpisać"], answer: 0, explain: "Одна подія в майбутньому → простий майбутній ДВ: podpiszę. «Będę podpisać» — помилка (będę + ДВ)." },
        { type: "gap", q: "Kiedy ___ do Polski, nie znałam ani słowa po polsku. (przyjechać; ja — жінка)", answers: ["przyjechałam"], explain: "Одна подія в минулому → ДВ: przyjechałam. Тло (nie znałam) — НДВ." },
        { type: "match", q: "З’єднайте інфінітив із формою «ja» (теперішній або простий майбутній)", pairs: [["wziąć", "wezmę"], ["brać", "biorę"], ["pójść", "pójdę"], ["iść", "idę"], ["zjeść", "zjem"], ["jeść", "jem"]], explain: "НДВ (brać, iść, jeść) → теперішній: biorę, idę, jem. ДВ (wziąć, pójść, zjeść) → майбутній: wezmę, pójdę, zjem." },
        { type: "choice", q: "Dzieci ___ już śniadanie?", options: ["zjadły", "zjedli", "zjadł"], answer: 0, explain: "Dzieci — нечоловічо-особова форма → -ły, і перед ł лишається a: zjadły." },
        { type: "gap", q: "Od jutra ___ codziennie biegać. (być, ja)", answers: ["będę"], explain: "Регулярна дія в майбутньому → będę + НДВ: będę biegać." },
        { type: "choice", q: "Przez rok ___ się do nowego miasta, ale wreszcie się przyzwyczaiłem.", options: ["przyzwyczajałem", "przyzwyczaiłem", "przyzwyczaję"], answer: 0, explain: "«Przez rok» — тривалий процес → НДВ: przyzwyczajałem się. Результат («wreszcie») — ДВ: przyzwyczaiłem się." },
        { type: "gap", q: "Marek nie ___ przyjść na pożegnanie, bo był chory. (móc)", answers: ["mógł"], explain: "móc → mógł (він): ó лише в цій формі; mogła, mogli." },
        { type: "order", ru: "Раніше я жила в Харкові, а тепер живу у Вроцлаві.", words: ["Dawniej", "mieszkałam", "w", "Charkowie,", "a", "teraz", "mieszkam", "we", "Wrocławiu."], alt: [], explain: "Минулий НДВ (mieszkałam — тривалий стан) і теперішній (mieszkam). «У Вроцлаві» — we Wrocławiu (ze перед групою приголосних)." },
        { type: "gap", q: "Jutro rano ___ do Poznania pierwszym pociągiem. (pojechać, my)", answers: ["pojedziemy"], explain: "pojechać (ДВ) → pojadę, pojedziesz, pojedzie, pojedziemy: одна поїздка в майбутньому." },
        { type: "choice", q: "Яке речення про МАЙБУТНЄ?", options: ["Kupię mieszkanie.", "Kupowałem mieszkanie.", "Kupiłem mieszkanie."], answer: 0, explain: "Kupię — форма теперішнього типу від ДВ kupić, тому означає майбутнє: «куплю»." },
        { type: "translate", ru: "Ти вже звикла до Польщі?", answers: ["Przyzwyczaiłaś się już do Polski?", "Czy przyzwyczaiłaś się już do Polski?", "Już przyzwyczaiłaś się do Polski?", "Czy już przyzwyczaiłaś się do Polski?"], explain: "Результат → ДВ przyzwyczaić się; до жінки на «ти» — -łaś. Przyzwyczaić się DO + родовий." },
        { type: "translate", ru: "Ми сумуватимемо за вами.", answers: ["Będziemy za wami tęsknić.", "Będziemy tęsknić za wami.", "Będziemy tęsknili za wami.", "Będziemy tęskniły za wami."], explain: "Тривалий стан у майбутньому → będziemy + НДВ tęsknić (або tęsknili / tęskniły). Tęsknić za kimś — як укр. «сумувати за кимось»." }
      ],

      pronunciation: {
        focus: "Повторення: -ę / -ą, ł, ą / ę перед ł, наголос -liśmy",
        tip: `<p>Підсумок звуків модуля:</p>
<ul>
<li>Кінцеве <b>ę</b> ≈ [e], кінцеве <b>ą</b> — носове: <span class="pl">wezmę</span> («я візьму») ≠ <span class="pl">wezmą</span> («вони візьмуть»).</li>
<li><b>-li</b> (м’яке l) ≠ <b>-ły</b> ([ўи]): <span class="pl">poszli</span> — є чоловік, <span class="pl">poszły</span> — лише жінки.</li>
<li><b>ą / ę перед ł</b> без носовості: <span class="pl">wziął</span> [wźoł], <span class="pl">zaczęła</span> [zaczeła]; ą в <span class="pl">poszła</span> немає — не додавайте носовості там, де її не пишуть!</li>
<li>Наголос у <span class="pl">-liśmy / -łyście</span> — на третьому складі від кінця (як у формі «oni»); у формах <span class="pl">będziemy, pojedziemy</span> — звичайний, на передостанньому.</li>
</ul>`,
        items: [
          { type: "minimal", options: ["wezmę", "wezmą"], ru: ["я візьму", "вони візьмуть"] },
          { type: "minimal", options: ["poszli", "poszły"], ru: ["вони (є чоловік) пішли", "вони (лише жінки) пішли"] },
          { type: "listen", text: "wziął, poszła, zaczęła", ru: "взяв, пішла, почала", note: "wziął [wźoł], zaczęła [zaczeła] — перед ł жодної носовості; у poszła носового звуку й не пишуть" },
          { type: "stress", word: "pożegnaliśmy", syllables: ["po", "że", "gna", "li", "śmy"], answer: 2, accept: [3] },
          { type: "stress", word: "pojedziemy", syllables: ["po", "je", "dzie", "my"], answer: 2 },
          { type: "listen", text: "Byliśmy, jesteśmy i będziemy razem.", ru: "Ми були, є і будемо разом.", note: "BY-li-śmy, je-STE-śmy, bę-DZIE-my" },
          { type: "dictation", text: "Dawniej pracowałam w biurze, teraz uczę się polskiego, a jutro zacznę nową pracę." }
        ]
      },

      reading: {
        title: "Pięć lat we Wrocławiu",
        text: "Pięć lat temu przyjechałam do Wrocławia z jedną walizką i słownikiem. Nie znałam nikogo, a po polsku umiałam powiedzieć tylko „dzień dobry” i „dziękuję”. Pierwsze miesiące były trudne. Pracowałam w piekarni na nocną zmianę, a w dzień chodziłam na kurs języka. Często płakałam z tęsknoty za rodziną i myślałam, że nigdy się tu nie przyzwyczaję.\n\nPewnego dnia w piekarni zepsuł się piec. Szef był w panice, a ja szybko zadzwoniłam do znajomego mechanika ze Lwowa. Przez telefon wytłumaczył mi, co zrobić, i po dziesięciu minutach piec znowu działał. Od tamtej pory szef zaczął mi bardziej ufać.\n\nDzisiaj moje życie wygląda zupełnie inaczej. Mam umowę o pracę, wynajmuję małe mieszkanie na Nadodrzu i mówię po polsku prawie bez akcentu. Codziennie rano jeżdżę rowerem nad Odrą i piję kawę w ulubionej kawiarni. W weekendy spotykam się z przyjaciółmi z kursu — dawniej wszyscy byliśmy tu obcy, a teraz jesteśmy prawie rodziną. Obecnie kieruję zmianą w tej samej piekarni — tym razem dzienną!\n\nA przyszłość? Na razie nie planuję przeprowadzki. W przyszłym roku będę chodzić na kurs cukierniczy, bo chcę piec własne torty. Za dwa lata może otworzę małą cukiernię. W grudniu rodzice przyjadą do mnie na święta i wtedy pokażę im cały Wrocław. Dawniej myślałam, że życie za granicą to same pożegnania. Dziś wiem, że to także nowe powitania.",
        glossary: [
          { pl: "nocną zmianę", ru: "нічну зміну" },
          { pl: "piec", ru: "піч; пекти" },
          { pl: "wytłumaczył", ru: "пояснив" },
          { pl: "ufać", ru: "довіряти" },
          { pl: "na Nadodrzu", ru: "на Надодже (район Вроцлава)" },
          { pl: "kieruję zmianą", ru: "керую зміною" },
          { pl: "cukierniczy", ru: "кондитерський" },
          { pl: "cukiernię", ru: "кондитерську" },
          { pl: "powitania", ru: "привітання, зустрічі" }
        ],
        questions: [
          { type: "tf", q: "Pięć lat temu narratorka dobrze mówiła po polsku.", answer: false, explain: "Вона вміла сказати лише «dzień dobry» і «dziękuję»." },
          { type: "choice", q: "Jak narratorka pomogła szefowi?", options: ["Zadzwoniła do znajomego mechanika.", "Sama kupiła nowy piec.", "Upiekła chleb w domu."], answer: 0, explain: "«Szybko zadzwoniłam do znajomego mechanika ze Lwowa» — він пояснив телефоном, що робити." },
          { type: "tf", q: "Teraz narratorka pracuje w piekarni na nocną zmianę.", answer: false, explain: "«Obecnie kieruję zmianą… — tym razem dzienną!»" },
          { type: "choice", q: "Co narratorka będzie robić w przyszłym roku?", options: ["Będzie chodzić na kurs cukierniczy.", "Przeprowadzi się do Lwowa.", "Otworzy cukiernię."], answer: 0, explain: "«W przyszłym roku będę chodzić na kurs cukierniczy». Кондитерську вона, можливо, відкриє лише за два роки." },
          { type: "tf", q: "Rodzice przyjadą do niej w grudniu.", answer: true, explain: "«W grudniu rodzice przyjadą do mnie na święta» — przyjadą: простий майбутній ДВ." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля «Kiedyś, dziś i jutro» (60–90 слів): 1) яким було ваше життя кілька років тому (минулий час: НДВ для звичок і тла, ДВ для подій); 2) як ви живете тепер (теперішній час); 3) що ви робитимете регулярно (będę + НДВ) і що конкретно зробите (простий майбутній ДВ).",
        minWords: 60,
        maxWords: 90,
        useWords: ["dawniej", "przyzwyczaić się", "przeprowadzka", "obecnie"],
        checklist: [
          { label: "Минулий час: щонайменше 4 форми", pattern: "\\p{L}+(łem|łam|liśmy|łyśmy|ł|ła|li|ły)(?!\\p{L})", min: 4 },
          { label: "Складений майбутній: będę / będziemy + дієслово", pattern: "(?<!\\p{L})będ(ę|ziemy)\\s+\\p{L}+", min: 1 },
          { label: "Простий майбутній ДВ: щонайменше 2 форми на -ę (pojadę, zdam, otworzę…)", pattern: "(?<!\\p{L})(?!się|chcę|muszę|mogę|będę)\\p{L}{3,}ę(?!\\p{L})", min: 2 }
        ],
        model: "Dawniej mieszkałem w Odessie i pracowałem jako kierowca. Codziennie wstawałem o piątej i jeździłem po całym mieście. Trzy lata temu przeprowadziłem się do Gdańska. Przeprowadzka była trudna, ale szybko przyzwyczaiłem się do nowego życia. Obecnie pracuję w porcie, uczę się polskiego i mieszkam z kolegą. W przyszłym roku będę oszczędzać pieniądze, bo chcę kupić samochód. Latem pojadę z rodziną nad morze, a jesienią zrobię egzamin na prawo jazdy. A kiedyś otworzę własną firmę."
      }
    }
  ]
});
