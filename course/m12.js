// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m12",
  n: 12,
  level: "B1",
  title: "Kultura i społeczeństwo",
  titleRu: "Культура і суспільство",
  summary: "Після модуля ви розумієте й використовуєте віддієслівні іменники, дієприкметники, пасив і безособові форми, розповідаєте про польські звичаї, історію та закони й пишете аргументоване есе. Останній урок — генеральна репетиція перед підсумковим іспитом B1.",
  lessons: [
    // ───────────────────────── УРОК 1 ─────────────────────────
    {
      id: "m12l1",
      title: "Czytanie, palenie, zwiedzanie",
      titleRu: "Віддієслівні іменники та дієприкметники на -ący",
      topic: "Kultura i zwyczaje",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати віддієслівні іменники (czytanie, palenie, picie) та відмінювати їх",
        "Розуміти й уживати активні дієприкметники на -ący (czytający, pracujący)",
        "Розповідати про польські звичаї, свята й забобони"
      ],
      vocab: [
        { pl: "zwyczaj", g: "m", ru: "звичай", note: "мн. zwyczaje; zwyczaj czego? — zwyczaj dzielenia się opłatkiem", ex: "W Polsce jest zwyczaj dzielenia się opłatkiem w Wigilię.", exRu: "У Польщі є звичай ділитися облаткою на Святвечір." },
        { pl: "obchodzić", ru: "відзначати, святкувати", note: "obchodzić co? (urodziny, święta); але «To mnie nie obchodzi» — «Мене це не обходить»", ex: "Polacy obchodzą imieniny prawie tak samo jak urodziny.", exRu: "Поляки відзначають іменини майже так само, як дні народження." },
        { pl: "imieniny", g: "pl", ru: "іменини", note: "лише мн.: mieć imieniny, iść na imieniny", ex: "Jutro Anna ma imieniny, więc kupiłem jej kwiaty.", exRu: "Завтра в Анни іменини, тому я купив їй квіти." },
        { pl: "składać życzenia", ru: "вітати, складати побажання", note: "komu? z okazji czego? — składać życzenia mamie z okazji urodzin", ex: "Składamy ci najlepsze życzenia z okazji imienin!", exRu: "Вітаємо тебе з іменинами, усього найкращого!" },
        { pl: "zachowanie", g: "n", ru: "поведінка", note: "від zachowywać się — поводитися; «збереження» — лише друге значення (zachowanie tradycji)", ex: "Jego zachowanie przy stole zaskoczyło wszystkich gości.", exRu: "Його поведінка за столом здивувала всіх гостей." },
        { pl: "wychowanie", g: "n", ru: "виховання", ex: "Mówienie sąsiadom „dzień dobry” to podstawa dobrego wychowania.", exRu: "Казати сусідам «добрий день» — основа доброго виховання." },
        { pl: "przesąd", g: "m", ru: "забобон; упередження", ex: "Według starego przesądu nie podaje się ręki przez próg.", exRu: "За старим забобоном, руку через поріг не подають." },
        { pl: "gościnność", g: "f", ru: "гостинність", ex: "„Gość w dom, Bóg w dom” — tak mówi się o polskiej gościnności.", exRu: "«Гість у хату — Бог у хату» — так кажуть про польську гостинність." },
        { pl: "obcokrajowiec", g: "m", ru: "іноземець", note: "мн. obcokrajowcy; синонім — cudzoziemiec (пор. укр. «чужоземець»)", ex: "Wielu obcokrajowców dziwi się, że Polacy zdejmują buty w domu.", exRu: "Багато іноземців дивуються, що поляки вдома знімають взуття." },
        { pl: "uczestniczyć", ru: "брати участь", note: "w czym? (+ місцевий відмінок) — uczestniczyć w weselu", ex: "W sobotę uczestniczyliśmy w prawdziwym góralskim weselu.", exRu: "У суботу ми були на справжньому гуральському весіллі." },
        { pl: "wesele", g: "n", ru: "весілля (гостина, бенкет)", note: "ślub — церемонія (у костелі чи РАЦСі; пор. «взяти шлюб» — wziąć ślub), wesele — гостина після неї", ex: "Polskie wesele często trwa do białego rana.", exRu: "Польське весілля часто триває до самого ранку." },
        { pl: "zwiedzanie", g: "n", ru: "огляд (пам’яток), екскурсія", note: "від zwiedzać", ex: "Zwiedzanie kopalni soli w Wieliczce trwa około trzech godzin.", exRu: "Екскурсія соляною шахтою у Величці триває близько трьох годин." },
        { pl: "mieszkaniec", g: "m", ru: "мешканець, житель", note: "мн. mieszkańcy; ж. р. mieszkanka", ex: "Mieszkańcy Poznania uwielbiają rogale świętomarcińskie.", exRu: "Мешканці Познані обожнюють рогалики святого Мартина." }
      ],
      grammar: {
        title: "Віддієслівні іменники та активний дієприкметник",
        html: `<h4>1. Віддієслівні іменники: czytanie, palenie, picie</h4>
<p>Майже від кожного дієслова можна утворити іменник середнього роду, що називає саму дію: «читання», «куріння». Українцям ця модель добре знайома — навіть суфікси схожі: <b>-anie ≈ -ання</b>, <b>-enie ≈ -ення</b>, <b>-cie ≈ -ття</b> (picie — пиття, życie — життя). Іноді вжиток збігається: <span class="pl">Dziękuję za zaproszenie.</span> — Дякую за запрошення. Але поляки вживають такі іменники ще частіше, ніж ми, — навіть там, де українською природніше сказати інфінітивом чи підрядним реченням: <span class="pl">Zakaz palenia.</span> — Курити заборонено (дослівно «заборона куріння»).</p>
<table class="g">
<tr><th>Дієслово</th><th>Суфікс</th><th>Іменник</th></tr>
<tr><td class="pl">czytać, zwiedzać, śpiewać</td><td>-anie</td><td class="pl">czytanie, zwiedzanie, śpiewanie</td></tr>
<tr><td class="pl">palić, robić, mówić</td><td>-enie</td><td class="pl">palenie, robienie, mówienie</td></tr>
<tr><td class="pl">nosić, płacić, chodzić</td><td>-enie + чергування</td><td class="pl">noszenie, płacenie, chodzenie</td></tr>
<tr><td class="pl">pić, myć, żyć</td><td>-cie</td><td class="pl">picie, mycie, życie</td></tr>
<tr><td class="pl">zamknąć, zacząć</td><td>-ęcie</td><td class="pl">zamknięcie, zaczęcie</td></tr>
</table>
<p>Підказка: форма майже завжди повторює пасивний дієприкметник (урок 2): <b>-any → -anie</b>, <b>-ony → -enie</b>, <b>-ty → -cie</b>: <span class="pl">czytany → czytanie</span>, <span class="pl">noszony → noszenie</span>, <span class="pl">zamknięty → zamknięcie</span>.</p>
<p>Відмінюються, як <span class="pl">zdanie</span>:</p>
<table class="g">
<tr><th>Відмінок</th><th>Форма</th><th>Приклад</th></tr>
<tr><td>Називний</td><td class="pl">zwiedzanie</td><td class="pl">Zwiedzanie trwa dwie godziny.</td></tr>
<tr><td>Родовий</td><td class="pl">palenia</td><td class="pl">Tu obowiązuje zakaz palenia.</td></tr>
<tr><td>Знахідний</td><td class="pl">zaproszenie</td><td class="pl">Dziękuję za zaproszenie.</td></tr>
<tr><td>Орудний</td><td class="pl">malowaniem</td><td class="pl">Babcia zajmuje się malowaniem pisanek.</td></tr>
<tr><td>Місцевий</td><td class="pl">zwiedzaniu</td><td class="pl">Po zwiedzaniu poszliśmy na obiad.</td></tr>
</table>
<ul>
<li><b>się</b> зберігається: <span class="pl">uczenie się</span>, <span class="pl">dzielenie się opłatkiem</span> — на відміну від української, де -ся зникає (вчитися → навчання).</li>
<li>Вид теж зберігається: <span class="pl">czytanie</span> — процес, <span class="pl">przeczytanie</span> — результат: <span class="pl">Po przeczytaniu listu zadzwoniłem do mamy.</span></li>
<li>Чимало таких слів живуть власним життям: <span class="pl">mieszkanie</span> — квартира, <span class="pl">jedzenie</span> — їжа, <span class="pl">ubranie</span> — одяг, <span class="pl">zdanie</span> — думка; речення.</li>
</ul>
<h4>2. Активний дієприкметник: czytający, pracujący</h4>
<p>За формою відповідає українським дієприкметникам на <b>-учий / -ачий</b> (читаючий, працюючий). Але є важлива різниця: в українській літературній мові такі форми вважають небажаними, і ми радше скажемо «той, хто читає», «працівник», «чинний закон». У польській форми на <b>-ący</b> цілком нормальні: їх щодня вживають у пресі, оголошеннях і розмові. Утворюються <b>лише від недоконаного виду</b>: беремо 3-тю особу множини теперішнього часу й додаємо <b>-cy</b>:</p>
<div class="ex"><span class="pl">czytają → czytający</span>, <span class="pl">pracują → pracujący</span>, <span class="pl">mówią → mówiący</span>, <span class="pl">idą → idący</span></div>
<p>Відмінюється як прикметник:</p>
<table class="g">
<tr><th>ч. р.</th><th>ж. р.</th><th>с. р.</th><th>мн. чол.-особ.</th><th>мн. нечол.-особ.</th></tr>
<tr><td class="pl">czytający</td><td class="pl">czytająca</td><td class="pl">czytające</td><td class="pl">czytający</td><td class="pl">czytające</td></tr>
</table>
<div class="ex"><span class="pl">Turyści zwiedzający Kraków kupują obwarzanki.</span> — Туристи, які оглядають Краків, купують обважанки.</div>
<div class="ex"><span class="pl">Kobieta sprzedająca oscypki stoi tu od rana.</span> — Жінка, яка продає осципки, стоїть тут від ранку.</div>
<p>Дієприкметниковий зворот = підрядне речення з <span class="pl">który</span>: <span class="pl">turyści zwiedzający Kraków</span> = <span class="pl">turyści, którzy zwiedzają Kraków</span>. Перекладаючи українською, так і робіть: «туристи, які оглядають». Деякі дієприкметники стали іменниками: <span class="pl">palący, niepalący</span> (курці; ті, хто не курить), <span class="pl">odwiedzający</span> (відвідувачі), <span class="pl">wierzący</span> (віряни).</p>
<div class="tip"><b>Пастка!</b> У польській немає активного дієприкметника минулого часу (в українській він буває лише від неперехідних дієслів: посивілий, зів’ялий). Зміст «студент, який прочитав книжку», «гості, які приїхали» передаємо лише через <span class="pl">który</span>: <span class="pl">student, który przeczytał książkę</span>; <span class="pl">goście, którzy przyjechali z Niemiec</span>. Форми <i>*przeczytający</i> не існує.</div>
<div class="tip">Дієслова на <b>-awać</b> втрачають <b>-wa-</b>, як і в теперішньому часі (так само в українській: продавати → продають): <span class="pl">sprzedawać → sprzedają → sprzedający</span>, <span class="pl">wstawać → wstający</span>. Не <i>*sprzedawający</i>!</div>`
      },
      exercises: [
        { type: "match", q: "З’єднайте дієслово з віддієслівним іменником", pairs: [["zwiedzać", "zwiedzanie"], ["palić", "palenie"], ["pić", "picie"], ["nosić", "noszenie"], ["zamknąć", "zamknięcie"], ["chodzić", "chodzenie"]], explain: "-ać → -anie; -ić → -enie (із чергуванням: nosić → noszenie, chodzić → chodzenie); односкладові pić, myć, żyć → -cie (пор. укр. пиття, миття, життя); -nąć → -nięcie." },
        { type: "gap", q: "W polskich domach jest zwyczaj ___ butów. (zdejmować)", answers: ["zdejmowania"], explain: "zwyczaj czego? — родовий відмінок: zdejmowanie → zdejmowania." },
        { type: "gap", q: "Babcia od lat zajmuje się ___ pisanek. (malować)", answers: ["malowaniem"], explain: "zajmować się czym? — орудний відмінок: malowanie → malowaniem." },
        { type: "choice", q: "Turyści ___ Kraków często kupują obwarzanki.", options: ["zwiedzający", "zwiedzające", "zwiedzanie"], answer: 0, explain: "turyści — чоловічо-особова група, тому zwiedzający. Форма -ące — для нечоловічо-особової: turystki zwiedzające Kraków. Zwiedzanie — іменник, а не дієприкметник." },
        { type: "gap", q: "Kobieta ___ oscypki stoi tu od rana. (sprzedawać — дієприкметник)", answers: ["sprzedająca"], explain: "sprzedawać → sprzedają → sprzedający, ж. р. — sprzedająca. Склад -wa- зникає, як у теперішньому часі (і як в укр. продавати → продають)." },
        { type: "choice", q: "Як польською «студент, який прочитав книжку»?", options: ["student przeczytający książkę", "student, który przeczytał książkę", "student przeczytany książkę"], answer: 1, explain: "Активного дієприкметника минулого часу в польській немає, тому — як в українському «студент, який прочитав» — потрібна конструкція który + минулий час." },
        { type: "gap", q: "Przepraszam, czy jest tu strefa dla ___? (palić — дієприкметник, мн.)", answers: ["palących"], explain: "dla + родовий відмінок; palący (той, хто курить) → мн. palących. Пор. wagon dla niepalących." },
        { type: "choice", q: "Co znaczy zdanie: „Jego zachowanie przy stole było dziwne”?", options: ["Його поведінка за столом була дивною.", "Його збереження за столом було дивним.", "Його виховання за столом було дивним."], answer: 0, explain: "zachowanie (від zachowywać się — поводитися) = поведінка. Виховання — wychowanie." },
        { type: "order", ru: "Співання колядок на Святвечір — гарний польський звичай.", words: ["Śpiewanie", "kolęd", "w", "Wigilię", "to", "piękny", "polski", "zwyczaj."], alt: ["W Wigilię śpiewanie kolęd to piękny polski zwyczaj."], explain: "Віддієслівний іменник śpiewanie — підмет; śpiewanie czego? — kolęd (родовий мн. від kolęda)." },
        { type: "translate", ru: "Куріння шкодить здоров’ю.", answers: ["Palenie szkodzi zdrowiu.", "Palenie jest szkodliwe dla zdrowia.", "Palenie papierosów szkodzi zdrowiu.", "Palenie szkodzi na zdrowie."], explain: "Підмет — віддієслівний іменник palenie; szkodzić komu/czemu — давальний відмінок: zdrowiu (як в укр. «шкодить здоров’ю»)." }
      ],
      pronunciation: {
        focus: "-anie / -enie, -ący",
        tip: `<p><b>-anie, -enie.</b> Склад <b>nie</b> тут один і м’який: звучить як «нє» з м’яким [н’], а не як тверде українське «не». Наголос, як завжди, на передостанньому складі: czy-<b>TA</b>-nie, pa-<b>LE</b>-nie, zwie-<b>DZA</b>-nie. У словах на -anie наголос зазвичай збігається з українським («чита́ння» — <span class="pl">czytanie</span>), а от у коротких словах пильнуйте: укр. «життя́», «пиття́», але польською <b>ŻY</b>-cie, <b>PI</b>-cie.</p>
<p><b>-ący.</b> Носове <b>ą</b> перед <b>c</b> звучить як [он]: <span class="pl">czytający</span> ≈ «читайонци». Наголос падає на <b>-ją-</b>: pra-cu-<b>JĄ</b>-cy. Форми <span class="pl">czytająca</span> і <span class="pl">czytające</span> різняться лише останнім голосним — вимовляйте його чітко, не «ковтайте» кінцеве <b>-e</b>.</p>`,
        items: [
          { type: "listen", text: "czytanie, zwiedzanie, palenie, picie", ru: "читання, огляд, куріння, пиття", note: "nie — один м’який склад; наголос на передостанньому" },
          { type: "stress", word: "zwiedzanie", syllables: ["zwie", "dza", "nie"], answer: 1 },
          { type: "stress", word: "pracujący", syllables: ["pra", "cu", "ją", "cy"], answer: 2 },
          { type: "minimal", options: ["czytająca", "czytające"], ru: ["та, що читає", "ті, що читають"] },
          { type: "minimal", options: ["palenie", "palenia"], ru: ["куріння (називний)", "куріння (родовий: zakaz palenia)"] },
          { type: "listen", text: "Zakaz palenia i picia alkoholu.", ru: "Курити й розпивати алкоголь заборонено." },
          { type: "dictation", text: "Turyści zwiedzający Kraków kupują obwarzanki." }
        ]
      },
      reading: {
        title: "Kapcie, imieniny i mokry poniedziałek",
        text: "Tom pochodzi z Irlandii i od roku mieszka we Wrocławiu. Pracuje w firmie zatrudniającej ludzi z całego świata, ale najwięcej o Polsce uczy się po pracy — od polskich znajomych.\n\nPierwsza lekcja odbyła się w mieszkaniu jego koleżanki Magdy. Kiedy Tom stał w drzwiach, chciał podać jej rękę. — Nie przez próg! To przynosi pecha — zawołała Magda. Tom uznał, że to tylko stary przesąd, ale posłusznie wszedł do przedpokoju. Tam czekała go druga niespodzianka: — U nas jest zwyczaj zdejmowania butów. Proszę, tu masz kapcie dla gości. Kapcie dla gości? W Irlandii nikt o czymś takim nie słyszał!\n\nDruga lekcja: imieniny. W listopadzie kolega z biura, Andrzej, przyniósł do pracy wielki tort. — Masz urodziny? — zapytał Tom. — Nie, imieniny! — odpowiedział Andrzej. Okazało się, że Polacy obchodzą imieniny prawie tak samo jak urodziny, a składanie życzeń trwa w biurze cały dzień.\n\nTrzecia lekcja była najbardziej mokra. W Poniedziałek Wielkanocny Tom wyszedł z domu w nowej marynarce. Po pięciu minutach był cały mokry: grupa dzieci biegających z pistoletami na wodę uznała, że obcokrajowiec też powinien uczestniczyć w tradycji. — To śmigus-dyngus! — śmiał się sąsiad mieszkający piętro niżej. — Oblewanie się wodą przynosi szczęście!\n\nDziś Tom ma w szafie kapcie dla gości, a w telefonie zapisane imieniny wszystkich znajomych. W lany poniedziałek wychodzi z domu tylko w kurtce przeciwdeszczowej. Mówi, że polska gościnność jest piękna, ale wymaga dobrego przygotowania.",
        glossary: [
          { pl: "zatrudniającej", ru: "що наймає (zatrudniać — наймати на роботу)" },
          { pl: "próg", ru: "поріг" },
          { pl: "pecha", ru: "невдачу (pech — невдача, лихо)" },
          { pl: "posłusznie", ru: "слухняно" },
          { pl: "przedpokoju", ru: "передпокою" },
          { pl: "kapcie", ru: "капці" },
          { pl: "marynarce", ru: "піджаку" },
          { pl: "Oblewanie", ru: "обливання" },
          { pl: "przeciwdeszczowej", ru: "непромокальній, від дощу" }
        ],
        questions: [
          { type: "tf", q: "Tom pracuje w firmie, w której pracują sami Polacy.", answer: false, explain: "Фірма наймає людей з усього світу: firma zatrudniająca ludzi z całego świata." },
          { type: "choice", q: "Dlaczego Magda nie chciała podać Tomowi ręki w drzwiach?", options: ["Bo była na niego zła.", "Bo nie podaje się ręki przez próg.", "Bo miała brudne ręce."], answer: 1, explain: "«Nie przez próg! To przynosi pecha» — старий забобон (в Україні його теж знають)." },
          { type: "tf", q: "Andrzej przyniósł tort, bo miał urodziny.", answer: false, explain: "В Анджея були іменини, а не день народження." },
          { type: "choice", q: "Kto oblał Toma wodą w Poniedziałek Wielkanocny?", options: ["sąsiad z piętra niżej", "dzieci z pistoletami na wodę", "Magda i Andrzej"], answer: 1, explain: "grupa dzieci biegających z pistoletami na wodę — це śmigus-dyngus (пор. «обливаний понеділок» на заході України). Сусід лише сміявся." },
          { type: "tf", q: "W lany poniedziałek Tom wychodzi z domu w kurtce przeciwdeszczowej.", answer: true, explain: "Том учиться на власному досвіді." }
        ]
      },
      writing: {
        prompt: "Ваш польський друг веде блог «Zwyczaje świata» і просить вас розповісти про одне свято чи звичай вашої країни (наприклад, Святвечір, Івана Купала чи Маланку). Напишіть текст-лист: 1) що це за свято чи звичай і коли його відзначають; 2) що люди роблять — використайте віддієслівні іменники (pieczenie, składanie życzeń…); 3) випадок із вашого життя: як ви брали в ньому участь; 4) чому вам подобається (чи не подобається) цей звичай.",
        minWords: 80,
        maxWords: 130,
        useWords: ["zwyczaj", "obchodzić", "uczestniczyć", "życzenia"],
        checklist: [
          { label: "Щонайменше 3 віддієслівні іменники (-anie, -enie, -cie)", pattern: "\\p{L}{2,}(?:ani|eni|ci)(?:e|a|u|em)(?!\\p{L})", min: 3 },
          { label: "Хоча б один дієприкметник на -ący / -ąca / -ące", pattern: "\\p{L}+ąc(?:y|a|e|ego|ej|ych|ym|ymi)(?!\\p{L})", min: 1 }
        ],
        model: "Cześć, Kasiu!\nJednym z moich ulubionych zwyczajów jest Noc Iwana Kupały. Obchodzimy ją w Ukrainie w najkrótszą noc roku, podobnie jak wy Noc Świętojańską. Najważniejsze jest palenie ognisk i skakanie przez ogień. Skacząc, każdy wypowiada w myślach życzenie — podobno wtedy się spełni. Dziewczyny plotą wianki z polnych kwiatów i puszczają je na wodę. Jest też zwyczaj wróżenia z wianków: jeśli wianek popłynie daleko, dziewczyna szybko wyjdzie za mąż.\nW zeszłym roku uczestniczyłam w takim święcie nad Dnieprem pod Kijowem. Wszędzie było pełno ludzi tańczących i śpiewających, a nad rzeką płonęły dziesiątki ognisk. Najzabawniejsze było szukanie kwiatu paproci, który według legendy kwitnie tylko tej nocy. Nikomu nie udało się go znaleźć!\nLubię ten zwyczaj, bo łączy ludzi, a wspólne śpiewanie przy ognisku poprawia humor na całe lato.\nPozdrawiam serdecznie,\nOla"
      }
    },

    // ───────────────────────── УРОК 2 ─────────────────────────
    {
      id: "m12l2",
      title: "Zamek został zbudowany",
      titleRu: "Пасивні дієприкметники і пасив",
      topic: "Historia i zabytki",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати пасивні дієприкметники на -any, -ony, -ty (przeczytany, zrobiony, zamknięty)",
        "Будувати пасив: jest budowany / został zbudowany, виконавець дії — przez + знахідний відмінок",
        "Розповідати про історію польських міст і пам’яток"
      ],
      vocab: [
        { pl: "zabytek", g: "m", ru: "історична пам’ятка (старовинна будівля)", note: "мн. zabytki; ≠ pomnik (статуя, монумент)! Як і в українській: пам’ятка ≠ пам’ятник", ex: "Kraków jest pełen zabytków.", exRu: "Краків повний історичних пам’яток." },
        { pl: "pomnik", g: "m", ru: "пам’ятник (монумент, статуя)", ex: "Pod pomnikiem Mickiewicza w Krakowie zawsze ktoś na kogoś czeka.", exRu: "Біля пам’ятника Міцкевичу в Кракові завжди хтось когось чекає." },
        { pl: "zamek", g: "m", ru: "замок", note: "також «замо́к» у дверях і «блискавка» (zamek błyskawiczny)", ex: "Zamek w Malborku został zbudowany przez Krzyżaków.", exRu: "Замок у Мальборку був збудований хрестоносцями." },
        { pl: "wiek", g: "m", ru: "століття; вік", note: "w XIX wieku — у XIX столітті; w moim wieku — у моєму віці", ex: "Ta kamienica pochodzi z XVIII wieku.", exRu: "Ця кам’яниця походить з XVIII століття." },
        { pl: "niszczyć / zniszczyć", ru: "руйнувати / зруйнувати", note: "дієпр. zniszczony", ex: "Stare Miasto w Warszawie zostało prawie całkowicie zniszczone.", exRu: "Старе Місто у Варшаві було майже повністю зруйноване." },
        { pl: "odbudowywać / odbudować", ru: "відбудовувати / відбудувати", ex: "Po wojnie warszawiacy odbudowali Stare Miasto cegła po cegle.", exRu: "Після війни варшав’яни відбудували Старе Місто цеглинка за цеглинкою." },
        { pl: "zakładać / założyć", ru: "засновувати / заснувати", note: "також «надягати» (założyć kurtkę) і «припускати»", ex: "Akademię Krakowską założył w 1364 roku król Kazimierz Wielki.", exRu: "Краківську академію заснував 1364 року король Казимир Великий." },
        { pl: "dziedzictwo", g: "n", ru: "спадщина", ex: "Kopalnia soli w Wieliczce należy do światowego dziedzictwa UNESCO.", exRu: "Соляна шахта у Величці належить до світової спадщини ЮНЕСКО." },
        { pl: "powstanie", g: "n", ru: "повстання", note: "також «виникнення»: powstanie państwa", ex: "Powstanie Warszawskie wybuchło 1 sierpnia 1944 roku.", exRu: "Варшавське повстання спалахнуло 1 серпня 1944 року." },
        { pl: "przewodnik", g: "m", ru: "екскурсовод, гід; путівник", ex: "Nasz przewodnik znał każdą legendę o Wawelu.", exRu: "Наш екскурсовод знав кожну легенду про Вавель." },
        { pl: "odsłaniać / odsłonić", ru: "відкривати / відкрити (пам’ятник, меморіальну дошку)", note: "дієпр. odsłonięty (не *odsłoniony)", ex: "Pomnik Mickiewicza w Krakowie został odsłonięty w 1898 roku.", exRu: "Пам’ятник Міцкевичу в Кракові був відкритий 1898 року." },
        { pl: "rocznica", g: "f", ru: "річниця", ex: "Co roku 1 sierpnia Warszawa obchodzi rocznicę wybuchu Powstania.", exRu: "Щороку 1 серпня Варшава відзначає річницю початку Повстання." },
        { pl: "władca", g: "m", ru: "правитель, володар", note: "мн. władcy; відмінюється як mężczyzna", ex: "Zygmunt III Waza był władcą, który przeniósł stolicę do Warszawy.", exRu: "Сигізмунд III Ваза був правителем, який переніс столицю до Варшави." }
      ],
      grammar: {
        title: "Пасивний дієприкметник і пасив",
        html: `<h4>1. Пасивний дієприкметник: -any, -ony, -ty</h4>
<p>Відповідає на питання «який? що з ним зробили?»: прочитаний, збудований, закритий. Утворюється від перехідних дієслів, найчастіше доконаного виду. Українцям тут легко — суфікси майже ті самі: <b>-any ≈ -аний</b> (прочитаний), <b>-ony ≈ -ений</b> (зроблений), <b>-ty ≈ -тий</b> (закритий, випитий).</p>
<table class="g">
<tr><th>Дієслово</th><th>Суфікс</th><th>Дієприкметник</th></tr>
<tr><td class="pl">przeczytać, zbudować, napisać</td><td>-any</td><td class="pl">przeczytany, zbudowany, napisany</td></tr>
<tr><td class="pl">zrobić, zniszczyć, zaprosić, przynieść</td><td>-ony</td><td class="pl">zrobiony, zniszczony, zaproszony, przyniesiony</td></tr>
<tr><td class="pl">zamknąć, zacząć, umyć, wypić</td><td>-ty</td><td class="pl">zamknięty, zaczęty, umyty, wypity</td></tr>
<tr><td>Запам’ятати</td><td></td><td class="pl">otworzyć → otwarty, odsłonić → odsłonięty, wziąć → wzięty</td></tr>
</table>
<p>Дієприкметник узгоджується з іменником, як прикметник. Особлива увага — чоловічо-особовій формі множини: <b>-ony → -eni</b>, <b>-any → -ani</b>, <b>-ty → -ci</b>.</p>
<table class="g">
<tr><th>ч. р.</th><th>ж. р.</th><th>с. р.</th><th>мн. чол.-особ.</th><th>мн. нечол.-особ.</th></tr>
<tr><td class="pl">zaproszony</td><td class="pl">zaproszona</td><td class="pl">zaproszone</td><td class="pl">zaproszeni</td><td class="pl">zaproszone</td></tr>
<tr><td class="pl">wybrany</td><td class="pl">wybrana</td><td class="pl">wybrane</td><td class="pl">wybrani</td><td class="pl">wybrane</td></tr>
<tr><td class="pl">zajęty</td><td class="pl">zajęta</td><td class="pl">zajęte</td><td class="pl">zajęci</td><td class="pl">zajęte</td></tr>
</table>
<h4>2. Пасив: być чи zostać?</h4>
<p>Українцям пасив знайомий: «музей зачинений» ≈ być, «замок був збудований» ≈ zostać. Але польська суворо розрізняє стан і подію:</p>
<table class="g">
<tr><th>Конструкція</th><th>Значення</th><th>Приклад</th></tr>
<tr><td class="pl">być + дієприкметник</td><td>стан або тривалий процес (часто недок. вид)</td><td class="pl">Muzeum jest zamknięte w poniedziałki. Most jest budowany od dwóch lat.</td></tr>
<tr><td class="pl">zostać + дієприкметник</td><td>одноразова подія, результат (док. вид)</td><td class="pl">Zamek został zbudowany w XIII wieku. Muzeum zostanie otwarte w maju.</td></tr>
</table>
<p>Форми <span class="pl">zostać</span>: мин. <span class="pl">został, została, zostało, zostali, zostały</span>; майб. <span class="pl">zostanie, zostaną</span>. Дієприкметник узгоджується з підметом: <span class="pl">Stare Miasto zostało odbudowane.</span> <span class="pl">Kościoły zostały zniszczone.</span> <span class="pl">Goście zostali zaproszeni.</span></p>
<p>Хто виконав дію? — <b>przez + знахідний відмінок</b>:</p>
<div class="ex"><span class="pl">Zamek w Malborku został zbudowany przez Krzyżaków.</span> — Замок у Мальборку був збудований хрестоносцями.</div>
<div class="ex"><span class="pl">Pomnik został zaprojektowany przez Teodora Rygiera.</span> — Пам’ятник був спроєктований Теодором Ригером.</div>
<div class="tip"><b>Три пастки для українців:</b><ol>
<li>Виконавець дії — НЕ орудний відмінок, як в українській («збудований хрестоносцями»), а <span class="pl">przez</span> + знахідний. Помилка: <i>*zbudowany Krzyżakami</i>.</li>
<li>Українська в теперішньому часі обходиться без «є»: «музей зачинений», «замок збудований у XIII ст.». Польська вимагає допоміжного дієслова: «збудований» (подія) = <span class="pl">został zbudowany</span>, «зачинений» (стан) = <span class="pl">jest zamknięty</span>.</li>
<li>«Магазин був зачинений» (стан) — <span class="pl">Sklep był zamknięty.</span> «Магазин зачинили» (подія) — <span class="pl">Sklep został zamknięty.</span></li>
</ol></div>
<div class="tip">Пасив звучить офіційно: він типовий для новин, путівників і підручників історії. У розмові поляки частіше скажуть активно або безособово — про це наступний урок (і там українцям пощастить: наші форми «збудовано», «відкрито» мають прямий польський відповідник).</div>`
      },
      exercises: [
        { type: "match", q: "З’єднайте дієслово з пасивним дієприкметником", pairs: [["przeczytać", "przeczytany"], ["zrobić", "zrobiony"], ["zamknąć", "zamknięty"], ["otworzyć", "otwarty"], ["zaprosić", "zaproszony"], ["odsłonić", "odsłonięty"]], explain: "-ać → -any; -ić → -ony (із чергуванням: zaprosić → zaproszony); -nąć → -nięty. Otwarty та odsłonięty треба запам’ятати." },
        { type: "gap", q: "Zamek w Malborku ___ zbudowany przez Krzyżaków. (zostać, мин. час)", answers: ["został"], explain: "Одноразова подія в минулому → zostać: zamek (ч. р.) został zbudowany." },
        { type: "gap", q: "Stare Miasto zostało ___ po wojnie. (odbudować)", answers: ["odbudowane"], explain: "Miasto — середній рід, тому zostało odbudowane (закінчення -e)." },
        { type: "choice", q: "Akademia Krakowska została założona ___ króla Kazimierza Wielkiego.", options: ["przez", "od", "z"], answer: 0, explain: "Виконавець дії в пасиві — przez + знахідний: przez króla Kazimierza Wielkiego." },
        { type: "choice", q: "Як правильно сказати «Пам’ятник спроєктований Ригером»?", options: ["Pomnik został zaprojektowany Rygierem.", "Pomnik został zaprojektowany przez Rygiera.", "Pomnik zaprojektował się Rygierem."], answer: 1, explain: "У польській виконавець дії — przez + знахідний, а не орудний відмінок, як в українській." },
        { type: "gap", q: "Wszyscy goście zostali ___ na otwarcie wystawy. (zaprosić)", answers: ["zaproszeni"], explain: "goście — чоловічо-особова група: zaproszony → zaproszeni (-ony → -eni)." },
        { type: "choice", q: "Muzeum ___ zamknięte w poniedziałki.", options: ["jest", "został", "są"], answer: 0, explain: "Регулярний стан → być: muzeum jest zamknięte. Został — ч. р. і подія, są — множина." },
        { type: "choice", q: "Nowy most ___ już od dwóch lat i wciąż nie jest gotowy.", options: ["jest budowany", "został zbudowany", "zbudował"], answer: 0, explain: "Тривалий процес → być + дієприкметник недок. виду: jest budowany («будується»)." },
        { type: "order", ru: "Міст буде відкритий наступного року.", words: ["Most", "zostanie", "otwarty", "w", "przyszłym", "roku."], alt: ["W przyszłym roku most zostanie otwarty."], explain: "Майбутня подія → zostanie + дієприкметник: zostanie otwarty (otworzyć → otwarty)." },
        { type: "translate", ru: "Цей замок був зруйнований під час війни.", answers: ["Ten zamek został zniszczony podczas wojny.", "Ten zamek został zniszczony w czasie wojny.", "Ten zamek został zniszczony w trakcie wojny."], explain: "Подія в минулому → został + zniszczony; «під час» — podczas + родовий або w czasie." }
      ],
      pronunciation: {
        focus: "-ony / -ona / -eni (zrobiony, zrobieni)",
        tip: `<p>У закінченнях <b>-iony, -iona</b> літера <b>i</b> — не окремий склад, а знак м’якості: <span class="pl">zrobiony</span> = zro-bio-ny, три склади, наголос на <b>bio</b> (≈ «бьо»).</p>
<p>У чоловічо-особовій формі множини змінюється голосний: <b>-ony → -eni</b>: <span class="pl">zaproszony — zaproszeni</span>, <span class="pl">zrobiony — zrobieni</span>. Кінцеве <b>ni</b> — м’яке, як українське «ні», навіть трохи м’якше. Наголос лишається на передостанньому складі: za-pro-<b>SZE</b>-ni.</p>
<p>У <b>-ęty</b> носове <b>ę</b> перед <b>t</b> звучить як [ен]: <span class="pl">zamknięty</span> ≈ «замкнєнти». У <b>-ona / -one</b> вимовляйте чисте [о], як і в українській, а кінцеві <b>-a</b> та <b>-e</b> — чітко різними: від них залежать рід і число.</p>`,
        items: [
          { type: "listen", text: "zrobiony, zrobiona, zrobione, zrobieni", ru: "зроблений, зроблена, зроблене, зроблені (чол.-особ.)" },
          { type: "minimal", options: ["zaproszony", "zaproszeni"], ru: ["запрошений", "запрошені (про чоловіків / змішану групу)"] },
          { type: "minimal", options: ["zbudowana", "zbudowane"], ru: ["збудована", "збудоване / збудовані"] },
          { type: "stress", word: "zniszczony", syllables: ["zni", "szczo", "ny"], answer: 1 },
          { type: "stress", word: "odbudowany", syllables: ["od", "bu", "do", "wa", "ny"], answer: 3 },
          { type: "listen", text: "Wszyscy goście zostali zaproszeni.", ru: "Усі гості були запрошені." },
          { type: "dictation", text: "Zamek został zniszczony, a potem odbudowany." }
        ]
      },
      reading: {
        title: "Miasto, które powstało z popiołów",
        text: "Grupa turystów z Wilna stoi na placu Zamkowym w Warszawie. Ich przewodnik, pan Marek, pokazuje wysoką kolumnę z posągiem króla.\n\n— To Kolumna Zygmunta, najstarszy świecki pomnik w Warszawie. Została postawiona w 1644 roku przez króla Władysława IV, który chciał w ten sposób uczcić swojego ojca, Zygmunta III Wazę. To właśnie ten władca przeniósł stolicę z Krakowa do Warszawy.\n\nTuryści robią zdjęcia, a pan Marek odwraca się w stronę czerwonego budynku z wieżą zegarową.\n\n— A to Zamek Królewski. Wygląda na kilkaset lat, prawda? Tymczasem został odbudowany dopiero w latach 1971–1984, więc ten zabytek jest młodszy niż niektórzy z państwa! W 1944 roku, po upadku Powstania Warszawskiego, zamek został wysadzony w powietrze przez Niemców, a Stare Miasto zostało prawie całkowicie zniszczone.\n\n— Jak to możliwe, że wszystko wygląda tak autentycznie? — pyta jedna z turystek.\n\n— Architekci korzystali między innymi z obrazów Canaletta, włoskiego malarza, który w XVIII wieku namalował ponad dwadzieścia widoków Warszawy. Jego obrazy były tak dokładne, że pomogły odtworzyć wiele kamienic. Hasło tamtych lat brzmiało: „Cały naród buduje swoją stolicę”. W 1980 roku Stare Miasto zostało wpisane na Listę Światowego Dziedzictwa UNESCO, a dziś jest odwiedzane przez miliony turystów.\n\nNa koniec pan Marek dodaje:\n\n— Jeśli będą państwo w Warszawie 1 sierpnia, w rocznicę wybuchu Powstania, o 17:00 usłyszą państwo syreny. Całe miasto zatrzymuje się wtedy na minutę: stoją samochody, tramwaje i ludzie. Warszawa pamięta.",
        glossary: [
          { pl: "posągiem", ru: "статуєю (posąg)" },
          { pl: "świecki", ru: "світський" },
          { pl: "uczcić", ru: "вшанувати" },
          { pl: "wysadzony w powietrze", ru: "висаджений у повітря, підірваний" },
          { pl: "upadku", ru: "поразки, падіння (upadek)" },
          { pl: "kamienic", ru: "кам’яниць — старих міських будинків (kamienica)" },
          { pl: "odtworzyć", ru: "відтворити" },
          { pl: "Hasło", ru: "гасло" },
          { pl: "syreny", ru: "сирени" }
        ],
        questions: [
          { type: "tf", q: "Kolumna Zygmunta została postawiona przez Zygmunta III Wazę.", answer: false, explain: "Її поставив його син, король Владислав IV, щоб ушанувати батька." },
          { type: "choice", q: "Kiedy został odbudowany Zamek Królewski?", options: ["zaraz po wojnie, w 1945 roku", "w latach 1971–1984", "w 1644 roku"], answer: 1, explain: "został odbudowany dopiero w latach 1971–1984 — тому «пам’ятка молодша за деяких туристів»." },
          { type: "choice", q: "Jak pomogły obrazy Canaletta?", options: ["Zostały sprzedane, żeby zdobyć pieniądze na odbudowę.", "Pokazywały, jak wyglądało miasto, więc pomogły odtworzyć kamienice.", "Zostały zniszczone razem z zamkiem."], answer: 1, explain: "Картини були такими точними, що за ними відтворили багато кам’яниць." },
          { type: "tf", q: "Stare Miasto zostało wpisane na listę UNESCO w 1980 roku.", answer: true, explain: "W 1980 roku Stare Miasto zostało wpisane na Listę Światowego Dziedzictwa UNESCO." },
          { type: "tf", q: "1 sierpnia o 17:00 w Warszawie słychać syreny.", answer: true, explain: "У річницю початку Повстання о 17:00 лунають сирени, і місто завмирає на хвилину." }
        ]
      },
      writing: {
        prompt: "Ви пишете текст для туристичного сайту про головну пам’ятку вашого міста (або будь-якого польського міста). Розкажіть: 1) що це за пам’ятка і де вона розташована; 2) коли й ким її було збудовано чи засновано (пасив + przez); 3) що з нею відбувалося потім (зруйнована, відбудована, перебудована); 4) чому її варто відвідати.",
        minWords: 80,
        maxWords: 130,
        useWords: ["zabytek", "wieku", "odbudować", "przewodnik"],
        checklist: [
          { label: "Щонайменше 2 пасивні конструкції з został / została / zostało / zostali / zostały", pattern: "(?<!\\p{L})zosta(?:ł|ła|ło|li|ły|nie|ną)\\s+(?:\\p{L}+\\s+)?\\p{L}+(?:any|ana|ane|ani|ony|ona|one|eni|ty|ta|te|ci)(?!\\p{L})", min: 2 },
          { label: "Виконавець дії з przez + знахідний відмінок", pattern: "(?<!\\p{L})przez\\s+\\p{L}+", min: 1 }
        ],
        model: "Jeśli przyjedziecie do Krakowa, koniecznie odwiedźcie Wawel — najważniejszy zabytek miasta. Pierwsze murowane budowle powstały na wzgórzu ponad tysiąc lat temu, a obecny renesansowy zamek został zbudowany w XVI wieku przez włoskich architektów, sprowadzonych do Krakowa przez króla Zygmunta Starego. Przez wieki mieszkali tu polscy władcy, a w katedrze byli koronowani królowie. Po przeniesieniu stolicy do Warszawy zamek był wielokrotnie niszczony i grabiony. W XIX wieku Austriacy zamienili go na koszary. Dopiero w XX wieku został odnowiony i częściowo odbudowany, a dziś jest odwiedzany przez tłumy turystów. Najlepiej zwiedzać go z przewodnikiem, bo bez niego trudno zrozumieć historię komnat. I nie zapomnijcie o smoku wawelskim — jego pomnik co kilka minut zieje ogniem!"
      }
    },

    // ───────────────────────── УРОК 3 ─────────────────────────
    {
      id: "m12l3",
      title: "Tu się nie pali",
      titleRu: "Безособові форми: -no/-to, się, można/wolno",
      topic: "Społeczeństwo i prawo",
      review: false,
      minutes: 30,
      goals: [
        "Розуміти й будувати безособові форми на -no/-to (zbudowano, otwarto) — прямі відповідники українських «збудовано», «відкрито»",
        "Говорити про правила й норми за допомогою się (mówi się, tu się nie pali)",
        "Розрізняти można, trzeba, wolno, nie wolno, nie można",
        "Розповідати про закони, штрафи й правила життя в Польщі"
      ],
      vocab: [
        { pl: "prawo", g: "n", ru: "закон; право", note: "prawo jazdy — посвідчення водія; w prawo — праворуч", ex: "Nieznajomość prawa nie zwalnia z odpowiedzialności.", exRu: "Незнання закону не звільняє від відповідальності." },
        { pl: "przepis", g: "m", ru: "правило, норма (закону); рецепт", note: "пор. укр. «припис»; пастка: przepis na pierogi — рецепт вареників!", ex: "Zgodnie z przepisami w tym miejscu nie wolno parkować.", exRu: "Згідно з правилами, у цьому місці паркуватися заборонено." },
        { pl: "ustawa", g: "f", ru: "закон (акт парламенту)", ex: "Sejm uchwalił nową ustawę o ochronie zwierząt.", exRu: "Сейм ухвалив новий закон про захист тварин." },
        { pl: "obywatel", g: "m", ru: "громадянин", note: "мн. obywatele; ж. р. obywatelka", ex: "Każdy pełnoletni obywatel może głosować w wyborach.", exRu: "Кожен повнолітній громадянин може голосувати на виборах." },
        { pl: "wybory", g: "pl", ru: "вибори", note: "лише мн.: iść na wybory", ex: "Wybory do Sejmu odbywają się co cztery lata.", exRu: "Вибори до Сейму відбуваються раз на чотири роки." },
        { pl: "głosować / zagłosować", ru: "голосувати / проголосувати", note: "na kogo? — głosować na kandydata; za czym? / przeciw czemu?", ex: "Na kogo zagłosujesz w niedzielę?", exRu: "За кого ти проголосуєш у неділю?" },
        { pl: "mandat", g: "m", ru: "штраф (виписаний поліцією); мандат", note: "dostać mandat — отримати штраф", ex: "Dostałem mandat za przejście na czerwonym świetle.", exRu: "Я отримав штраф за перехід на червоне світло." },
        { pl: "kara", g: "f", ru: "покарання; штраф", note: "не урочисте «кара», а звичайне повсякденне слово", ex: "Za jazdę bez biletu grozi wysoka kara.", exRu: "За проїзд без квитка загрожує великий штраф." },
        { pl: "zakaz", g: "m", ru: "заборона", note: "zakaz czego? — zakaz palenia, zakaz wstępu", ex: "Na plaży obowiązuje zakaz wprowadzania psów.", exRu: "На пляж заборонено приводити собак." },
        { pl: "pozwolenie", g: "n", ru: "дозвіл", note: "pozwolenie na co? — pozwolenie na budowę", ex: "Na budowę domu potrzebne jest pozwolenie.", exRu: "Для будівництва будинку потрібен дозвіл." },
        { pl: "przestrzegać", ru: "дотримуватися; застерігати", note: "przestrzegać czego? (родовий!) — przestrzegać prawa (як укр. «дотримуватися закону»); przestrzegać przed czym — застерігати від чогось", ex: "Trzeba przestrzegać przepisów ruchu drogowego.", exRu: "Треба дотримуватися правил дорожнього руху." },
        { pl: "łamać / złamać", ru: "порушувати / порушити; ламати / зламати", ex: "Kto łamie prawo, musi liczyć się z karą.", exRu: "Хто порушує закон, мусить бути готовим до покарання." },
        { pl: "społeczeństwo", g: "n", ru: "суспільство", ex: "Polskie społeczeństwo szybko się starzeje.", exRu: "Польське суспільство швидко старіє." }
      ],
      grammar: {
        title: "Безособові форми: -no/-to, się, можна / не можна",
        html: `<h4>1. Форми на -no / -to: «збудовано», «відкрито»</h4>
<p>Тут українцям пощастило найбільше: польські форми на <b>-no / -to</b> — прямий відповідник наших безособових форм на <b>-но / -то</b> («збудовано», «відкрито», «запроваджено»). Як і в українській, вони потрібні, коли неважливо або невідомо, хто виконав дію, і так само легко утворюються від пасивного дієприкметника: <b>-ny → -no</b>, <b>-ty → -to</b> (збудований → збудовано, відкритий → відкрито).</p>
<table class="g">
<tr><th>Дієприкметник</th><th>Безособова форма</th><th>Приклад</th></tr>
<tr><td class="pl">zbudowany</td><td class="pl">zbudowano</td><td class="pl">Zbudowano nowy most.</td></tr>
<tr><td class="pl">wprowadzony</td><td class="pl">wprowadzono</td><td class="pl">Wprowadzono nowe przepisy.</td></tr>
<tr><td class="pl">otwarty</td><td class="pl">otwarto</td><td class="pl">Otwarto nową szkołę.</td></tr>
<tr><td class="pl">zamknięty</td><td class="pl">zamknięto</td><td class="pl">Zamknięto ulicę Floriańską.</td></tr>
</table>
<ul>
<li>Форма <b>не змінюється</b> і не потребує <span class="pl">było</span>: <span class="pl">Wczoraj otwarto muzeum.</span> (не <i>*było otwarto</i>). Українською можна сказати «було відкрито», «буде відкрито», а польською — лише саму форму на -no/-to.</li>
<li>Додаток стоїть у <b>знахідному</b> відмінку — точнісінько як в українській («відкрито нову школу»): <span class="pl">Otwarto nową szkołę</span> (не <i>*nowa szkoła</i>). При запереченні — родовий: <span class="pl">Nie otwarto nowej szkoły.</span></li>
<li>Значення — лише минулий час. Виконавця назвати не можна (жодного <span class="pl">przez</span>; в українській «збудовано робітниками» інколи трапляється, у польській — ніколи).</li>
<li>Буває й від неперехідних дієслів: <span class="pl">Na weselu tańczono do rana.</span> — На весіллі танцювали до ранку (тут українська форма на -но вже незвична, а польська — цілком природна).</li>
</ul>
<h4>2. Безособове się: mówi się, tu się nie pali</h4>
<p>3-тя особа однини + <span class="pl">się</span> описує те, що «прийнято», «так роблять»: <span class="pl">Mówi się, że…</span> — Кажуть, що…; <span class="pl">Tu się nie pali.</span> — Тут не курять; <span class="pl">Tego się nie robi!</span> — Так не роблять!; <span class="pl">Jak się to pisze?</span> — Як це пишеться?</p>
<p>У минулому — форма с. р. на <b>-ło się</b>: <span class="pl">Kiedyś pisało się listy.</span> — Колись писали листи. У майбутньому — <span class="pl">będzie się</span> + інфінітив: <span class="pl">Wkrótce będzie się płacić tylko telefonem.</span> — Незабаром платитимуть лише телефоном.</p>
<h4>3. Можна, треба, не можна</h4>
<table class="g">
<tr><th>Слово</th><th>Значення</th><th>Приклад</th></tr>
<tr><td class="pl">można</td><td>можна (можливо, дозволено)</td><td class="pl">Tu można płacić kartą.</td></tr>
<tr><td class="pl">nie można</td><td>неможливо; не можна</td><td class="pl">Nie można otworzyć okna.</td></tr>
<tr><td class="pl">wolno</td><td>дозволено (правилами)</td><td class="pl">Czy tu wolno parkować?</td></tr>
<tr><td class="pl">nie wolno</td><td>заборонено (законом, мораллю)</td><td class="pl">Nie wolno pić alkoholu na ulicy.</td></tr>
<tr><td class="pl">trzeba</td><td>треба, потрібно</td><td class="pl">Trzeba mieć ważny bilet.</td></tr>
<tr><td class="pl">należy</td><td>слід, належить (офіц.)</td><td class="pl">Należy okazać dokument.</td></tr>
</table>
<p>У минулому й майбутньому додаємо <span class="pl">było / będzie</span> — точно як в українській («можна було», «треба буде»): <span class="pl">można było</span>, <span class="pl">trzeba będzie</span>, <span class="pl">nie wolno było</span>.</p>
<div class="tip"><b>Українське «не можна» — це два польські вирази.</b> <span class="pl">Nie wolno</span> — заборонено правилом: <span class="pl">Nie wolno tu parkować.</span> (Галичанам знайоме діалектне «не вільно» — це саме воно.) <span class="pl">Nie można</span> — неможливо: <span class="pl">Nie można otworzyć okna, jest zepsute.</span></div>
<div class="tip">Не плутайте <span class="pl">zbudowano</span> (безособова форма: «збудовано») і <span class="pl">zbudowane</span> (дієприкметник: «збудоване, збудовані») — різниця та сама, що й в українській: <span class="pl">Zbudowano dwa domy.</span> — <span class="pl">Domy są już zbudowane.</span></div>`
      },
      exercises: [
        { type: "match", q: "З’єднайте польське слово з його значенням", pairs: [["można", "можна"], ["trzeba", "треба, потрібно"], ["nie wolno", "заборонено"], ["nie można", "неможливо"], ["należy", "слід, належить (офіц.)"]], explain: "Nie wolno — заборона (правило, закон), nie można — неможливість. Należy — офіційне «слід, належить»." },
        { type: "gap", q: "W 2018 roku ___ zakaz handlu w niedziele. (wprowadzić — безособова форма)", answers: ["wprowadzono"], explain: "wprowadzony → wprowadzono: «запроваджено» — так само, як українською, без указівки, хто саме." },
        { type: "gap", q: "W zeszłym roku w naszym mieście ___ nową bibliotekę. (otworzyć — безособова форма)", answers: ["otwarto"], explain: "otworzyć → otwarty → otwarto (≈ «відкрито»). Додаток у знахідному: nową bibliotekę — як в укр. «відкрито нову бібліотеку»." },
        { type: "gap", q: "Kiedyś ___ listy, a dziś wysyła się SMS-y. (pisać + się, мин. час)", answers: ["pisało się", "się pisało"], explain: "Безособове się в минулому — форма с. р.: pisało się («колись писали»)." },
        { type: "choice", q: "W tym roku zbudowano ___ do Zakopanego.", options: ["nową drogę", "nowa droga", "nowej drogi"], answer: 0, explain: "Після форми на -no додаток стоїть у знахідному відмінку — як в укр. «збудовано нову дорогу»: zbudowano nową drogę. Родовий — лише при запереченні." },
        { type: "gap", q: "W Polsce ___ „Smacznego!” przed jedzeniem. (mówić + się)", answers: ["mówi się", "się mówi"], explain: "Безособове się: mówi się — «кажуть, прийнято казати»." },
        { type: "choice", q: "Na przejściu dla pieszych ___ przechodzić na czerwonym świetle — grozi za to mandat.", options: ["nie wolno", "trzeba", "można"], answer: 0, explain: "Заборона, за яку штрафують, → nie wolno." },
        { type: "choice", q: "Kiedyś w pociągach ___ palić papierosy.", options: ["można było", "można będzie", "można jest"], answer: 0, explain: "Минуле (kiedyś) → można było (як укр. «можна було»). Форми *można jest не буває." },
        { type: "order", ru: "У Польщі не можна пити алкоголь на вулиці.", words: ["W", "Polsce", "nie", "wolno", "pić", "alkoholu", "na", "ulicy."], alt: ["W Polsce na ulicy nie wolno pić alkoholu.", "Nie wolno pić alkoholu na ulicy w Polsce.", "Na ulicy w Polsce nie wolno pić alkoholu."], explain: "Nie wolno + інфінітив; після заперечення додаток у родовому: alkoholu." },
        { type: "translate", ru: "Тут не курять.", answers: ["Tu się nie pali.", "Tutaj się nie pali.", "Tu nie pali się.", "Tutaj nie pali się."], explain: "Безособове się: tu się nie pali — «тут не курять» (таке правило)." }
      ],
      pronunciation: {
        focus: "Наголос у формах -no / -to",
        tip: `<p>Форми на <b>-no / -to</b> підкоряються звичайному правилу — наголос на передостанньому складі: zbu-do-<b>WA</b>-no, o-<b>TWAR</b>-to, wpro-wa-<b>DZO</b>-no. Жодних зсувів, як у <span class="pl">zrobiliśmy</span> чи <span class="pl">zrobiłbym</span>.</p>
<p>Увага: саме тут українці часто помиляються, бо переносять наголос із рідних форм — «збудо́вано», «запрова́джено», «зро́блено». Польською: zbu-do-<b>WA</b>-no, wpro-wa-<b>DZO</b>-no, zro-<b>BIO</b>-no.</p>
<p>У <b>-iono</b> літера <b>i</b> не утворює складу: <span class="pl">zrobiono</span> = zro-bio-no.</p>
<p>Головна трудність — на слух відрізнити безособову форму від дієприкметника: <span class="pl">zbudowano / zbudowane</span>, <span class="pl">otwarto / otwarte</span>. Різниця лише в останньому голосному. Вимовляйте кінцеве <b>-o</b> чисто, а <b>-e</b> не звужуйте до [еи], як це буває з ненаголошеним «е» в українській.</p>`,
        items: [
          { type: "stress", word: "zbudowano", syllables: ["zbu", "do", "wa", "no"], answer: 2 },
          { type: "stress", word: "otwarto", syllables: ["o", "twar", "to"], answer: 1 },
          { type: "stress", word: "wprowadzono", syllables: ["wpro", "wa", "dzo", "no"], answer: 2 },
          { type: "minimal", options: ["zbudowano", "zbudowane"], ru: ["збудовано (безос.)", "збудоване / збудовані"] },
          { type: "minimal", options: ["otwarto", "otwarte"], ru: ["відкрито (безос.)", "відкрите / відкриті"] },
          { type: "listen", text: "Tu się nie pali. Tu nie wolno parkować.", ru: "Тут не курять. Тут не можна паркуватися." },
          { type: "dictation", text: "Wczoraj otwarto nową bibliotekę i zamknięto stary most." }
        ]
      },
      reading: {
        title: "Co wolno, a czego nie wolno?",
        text: "Pół roku temu przeprowadziłam się z Charkowa do Poznania. Na blogu opisuję rzeczy, które mnie tu zaskoczyły. Dziś temat praktyczny: prawo i przepisy w życiu codziennym.\n\nZacznijmy od alkoholu. W Polsce nie wolno pić piwa na ulicy, w parku ani na plaży. Mój kolega Ihor nie wiedział o tym i dostał mandat za puszkę piwa nad Wartą. Do dziś żartuje, że to było najdroższe piwo w jego życiu.\n\nCzerwone światło to osobna historia. Nawet kiedy ulica jest zupełnie pusta, Polacy cierpliwie czekają na zielone. I słusznie: trzeba przestrzegać przepisów, bo za przejście na czerwonym świetle też grozi mandat.\n\nŚmieci segreguje się tu do pięciu pojemników: papier do niebieskiego, szkło do zielonego, plastik i metal do żółtego, resztki jedzenia do brązowego, a całą resztę do czarnego. Przez pierwszy tydzień stałam nad koszami jak nad trudnym egzaminem.\n\nA niedziela? W 2018 roku wprowadzono zakaz handlu w niedziele, więc większość sklepów jest wtedy zamknięta. Można jednak zrobić zakupy w niektórych Żabkach, bo za ladą stoi sam właściciel — a jemu pracować wolno.\n\nNa koniec cisza nocna. Przyjmuje się, że trwa od 22:00 do 6:00. Kiedy zorganizowałam urodziny, o 22:15 do drzwi zadzwonił sąsiad. Myślałam, że będzie awantura, a on przyniósł kawałek sernika i poprosił, żebyśmy grali trochę ciszej. Mówi się, że polskie społeczeństwo jest surowe. Może i tak — ale ma też serce.",
        glossary: [
          { pl: "przeprowadziłam się", ru: "я переїхала" },
          { pl: "puszkę", ru: "бляшанку (puszka)" },
          { pl: "grozi", ru: "загрожує" },
          { pl: "segreguje się", ru: "сортують" },
          { pl: "pojemników", ru: "контейнерів" },
          { pl: "za ladą", ru: "за прилавком" },
          { pl: "cisza nocna", ru: "«нічна тиша» (час, коли не можна шуміти)" },
          { pl: "Przyjmuje się", ru: "вважається, прийнято вважати" },
          { pl: "awantura", ru: "сварка, скандал (не «авантюра»!)" },
          { pl: "surowe", ru: "суворе" }
        ],
        questions: [
          { type: "tf", q: "Ihor dostał mandat za przejście na czerwonym świetle.", answer: false, explain: "Він отримав штраф за бляшанку пива на березі Варти." },
          { type: "choice", q: "Do którego pojemnika wrzuca się szkło?", options: ["do niebieskiego", "do zielonego", "do żółtego"], answer: 1, explain: "szkło do zielonego; papier — у синій, пластик і метал — у жовтий." },
          { type: "choice", q: "Dlaczego niektóre Żabki są otwarte w niedziele?", options: ["Bo zakaz nie dotyczy małych sklepów.", "Bo za ladą stoi właściciel, któremu pracować wolno.", "Bo w Poznaniu nie ma zakazu handlu."], answer: 1, explain: "za ladą stoi sam właściciel — a jemu pracować wolno." },
          { type: "tf", q: "Sąsiad przyszedł, żeby zrobić awanturę.", answer: false, explain: "Він приніс шматок сирного пирога (sernik) і чемно попросив грати тихіше." },
          { type: "tf", q: "Zakaz handlu w niedziele wprowadzono w 2018 roku.", answer: true, explain: "W 2018 roku wprowadzono zakaz handlu w niedziele." }
        ]
      },
      writing: {
        prompt: "Ваш друг Павло незабаром переїжджає до Польщі, де ви живете вже рік. Напишіть йому e-mail польською: 1) що обов’язково треба робити (trzeba, należy); 2) що заборонено і чим це загрожує (nie wolno, mandat, kara); 3) що тут «прийнято» і «не прийнято» (безособові форми з się); 4) випадок із вашого життя з формою на -no/-to (wprowadzono, zamknięto…) — це ті самі «запроваджено», «зачинено», що й в українській.",
        minWords: 80,
        maxWords: 140,
        useWords: ["przepisy", "mandat", "przestrzegać", "kara"],
        checklist: [
          { label: "Щонайменше 2 конструкції з się (mówi się, nie pije się…)", pattern: "(?<!\\p{L})się(?!\\p{L})", min: 2 },
          { label: "Щонайменше 3 модальні слова: można / trzeba / wolno / należy", pattern: "(?<!\\p{L})(?:można|trzeba|wolno|należy)(?!\\p{L})", min: 3 },
          { label: "Хоча б одна форма на -no/-to (wprowadzono, otwarto…)", pattern: "\\p{L}{3,}(?:ano|ono|ęto|yto|ito|arto)(?!\\p{L})", min: 1 }
        ],
        model: "Cześć, Pawle!\nSuper, że w końcu przeprowadzasz się do Polski! Zanim przyjedziesz, kilka rad. Po pierwsze, trzeba tu przestrzegać przepisów drogowych. Nie wolno przechodzić na czerwonym świetle, nawet w nocy — można za to dostać mandat. Po drugie, w autobusie trzeba od razu skasować bilet, bo kara za jazdę bez biletu jest wysoka. Po trzecie, w Polsce nie pije się alkoholu na ulicy ani w parku. W domu natomiast zdejmuje się buty, a gościom zawsze proponuje się herbatę. Uważaj też na niedziele: w 2018 roku wprowadzono zakaz handlu i większość sklepów jest wtedy zamknięta. Ja przekonałem się o tym w pierwszym tygodniu — w niedzielę zostałem bez chleba! Mówi się, że Polacy są poważni, ale to nieprawda: chętnie pomagają, jeśli się grzecznie zapyta.\nDo zobaczenia!\nAndrzej"
      }
    },

    // ───────────────────────── УРОК 4 ─────────────────────────
    {
      id: "m12l4",
      title: "Szczerze mówiąc…",
      titleRu: "Дієприслівники та зв’язки для есе",
      topic: "Opinie i dyskusja",
      review: false,
      minutes: 30,
      goals: [
        "Уживати дієприслівники на -ąc (czytając, mówiąc) і впізнавати форми на -wszy (przeczytawszy)",
        "Будувати аргументацію за допомогою зв’язок: po pierwsze, jednak, natomiast, mimo że, dlatego, ponieważ, podsumowując",
        "Висловлювати й обґрунтовувати думку в дискусії та в есе"
      ],
      vocab: [
        { pl: "pogląd", g: "m", ru: "погляд, думка (переконання)", note: "частіше в мн.: poglądy polityczne; pogląd na co?", ex: "Mamy zupełnie różne poglądy na wychowanie dzieci.", exRu: "У нас зовсім різні погляди на виховання дітей." },
        { pl: "zdanie", g: "n", ru: "думка; речення (грам.)", note: "moim zdaniem — на мою думку; zmienić zdanie — передумати", ex: "Moim zdaniem to świetny pomysł, ale Kasia zmieniła zdanie.", exRu: "На мою думку, це чудова ідея, але Кася передумала." },
        { pl: "przekonywać / przekonać", ru: "переконувати / переконати", note: "kogo? do czego? — przekonać szefa do pracy zdalnej", ex: "W końcu przekonałam szefa do pracy zdalnej.", exRu: "Зрештою я переконала начальника перейти на дистанційну роботу." },
        { pl: "zgadzać się / zgodzić się", ru: "погоджуватися / погодитися", note: "z kim? z czym? — zgadzam się z tobą; na co? — zgodzić się na propozycję", ex: "Nie zgadzam się z tobą, ale rozumiem twoje argumenty.", exRu: "Я з тобою не згоден, але розумію твої аргументи." },
        { pl: "zaleta", g: "f", ru: "перевага, плюс", ex: "Największą zaletą tego mieszkania jest lokalizacja.", exRu: "Найбільша перевага цієї квартири — розташування." },
        { pl: "wada", g: "f", ru: "вада, недолік, мінус", note: "пор. укр. «вада»; не плутати з woda (вода)!", ex: "Każde rozwiązanie ma swoje wady i zalety.", exRu: "Кожне рішення має свої мінуси й плюси." },
        { pl: "rozwiązanie", g: "n", ru: "розв’язання, рішення (проблеми)", note: "від rozwiązać (пор. укр. «розв’язати»); рішення-постанова — decyzja", ex: "Szukamy rozwiązania, które zadowoli wszystkich.", exRu: "Ми шукаємо рішення, яке влаштує всіх." },
        { pl: "przyznać rację", ru: "визнати правоту", note: "komu? — przyznać komuś rację; mieć rację — мати рацію (як в українській!)", ex: "Muszę ci przyznać rację: to był zły pomysł.", exRu: "Мушу визнати, що ти маєш рацію: це була погана ідея." },
        { pl: "wątpliwość", g: "f", ru: "сумнів", note: "mieć wątpliwości; bez wątpienia — без сумніву", ex: "Nie mam wątpliwości, że warto uczyć się języków.", exRu: "Я не маю сумнівів, що вивчати мови варто." },
        { pl: "skutek", g: "m", ru: "наслідок, результат", note: "мн. skutki; wskutek czego — внаслідок чого", ex: "Skutki tej decyzji odczujemy dopiero za kilka lat.", exRu: "Наслідки цього рішення ми відчуємо лише за кілька років." },
        { pl: "przyczyna", g: "f", ru: "причина", ex: "Główną przyczyną korków jest remont mostu.", exRu: "Головна причина заторів — ремонт мосту." },
        { pl: "twierdzić", ru: "стверджувати", note: "twierdzę, twierdzisz; twierdzić, że…", ex: "Eksperci twierdzą, że praca zdalna zostanie z nami na zawsze.", exRu: "Експерти стверджують, що дистанційна робота залишиться з нами назавжди." },
        { pl: "praca zdalna", ru: "дистанційна (віддалена) робота", note: "pracować zdalnie; model hybrydowy — гібридний формат", ex: "Praca zdalna pozwala mi oszczędzać dwie godziny dziennie.", exRu: "Дистанційна робота дає мені змогу заощаджувати дві години на день." }
      ],
      grammar: {
        title: "Дієприслівники (-ąc, -wszy) і зв’язки для есе",
        html: `<h4>1. Дієприслівник на -ąc: czytając, mówiąc</h4>
<p>Відповідник українського «читаючи, говорячи» — і навіть звучить схоже. Дія відбувається <b>одночасно</b> з головною. Утворюється від недоконаного виду так само, як в українській: 3-тя особа множини + <b>-c</b> (пор. читають → читаючи, czytają → czytając). Форма не змінюється.</p>
<table class="g">
<tr><th>3 ос. мн.</th><th>Дієприслівник</th></tr>
<tr><td class="pl">czytają</td><td class="pl">czytając</td></tr>
<tr><td class="pl">mówią</td><td class="pl">mówiąc</td></tr>
<tr><td class="pl">idą</td><td class="pl">idąc</td></tr>
<tr><td class="pl">pracują</td><td class="pl">pracując</td></tr>
<tr><td class="pl">będą (być)</td><td class="pl">będąc</td></tr>
</table>
<div class="ex"><span class="pl">Wracając z pracy, zawsze kupuję chleb.</span> — Повертаючись з роботи, я завжди купую хліб.</div>
<p>Сталі вирази, без яких не обходиться жодна дискусія: <span class="pl">szczerze mówiąc</span> (чесно кажучи), <span class="pl">krótko mówiąc</span> (коротко кажучи), <span class="pl">biorąc pod uwagę</span> (беручи до уваги), <span class="pl">podsumowując</span> (підсумовуючи).</p>
<h4>2. Дієприслівник на -wszy: przeczytawszy (впізнавати)</h4>
<p>Відповідник «прочитавши, зробивши» — і знову майже однаково: przeczytawszy ≈ прочитавши. Дія <b>передує</b> головній. Утворюється від доконаного виду: основа минулого часу + <b>-wszy</b> (після голосного) або <b>-łszy</b> (після приголосного): <span class="pl">przeczytał → przeczytawszy</span>, <span class="pl">wziął → wziąwszy</span>, <span class="pl">wyszedł → wyszedłszy</span>.</p>
<p>Головна відмінність від української: у нас «прочитавши», «взявши» — звичайні щоденні слова, а польські форми на -wszy — книжні. Їх треба впізнавати в текстах, але в мовленні поляки скажуть інакше:</p>
<div class="ex"><span class="pl">Przeczytawszy list, wyszedł.</span> = <span class="pl">Po przeczytaniu listu wyszedł.</span> = <span class="pl">Kiedy przeczytał list, wyszedł.</span></div>
<div class="tip"><b>Один підмет!</b> Дієприслівник і головне дієслово мають стосуватися однієї особи — як і в українській. Помилка: <i>*Wracając do domu, zaczął padać deszcz</i> (дощ додому не повертався!). Правильно: <span class="pl">Kiedy wracałem do domu, zaczął padać deszcz.</span> Зворот виділяється комами.</div>
<h4>3. Зв’язки для есе</h4>
<table class="g">
<tr><th>Функція</th><th>Польською</th><th>Українською</th></tr>
<tr><td>порядок</td><td class="pl">po pierwsze, po drugie, ponadto, poza tym</td><td>по-перше, по-друге, крім того</td></tr>
<tr><td>протиставлення</td><td class="pl">jednak, natomiast, z jednej strony… z drugiej strony</td><td>однак, проте; а, тоді як; з одного боку… з іншого</td></tr>
<tr><td>поступка</td><td class="pl">mimo że, chociaż; mimo + dop.</td><td>хоча, попри те що; попри, незважаючи на</td></tr>
<tr><td>причина</td><td class="pl">ponieważ, bo</td><td>оскільки, бо</td></tr>
<tr><td>наслідок</td><td class="pl">dlatego, więc</td><td>тому, отже</td></tr>
<tr><td>висновок</td><td class="pl">podsumowując</td><td>підсумовуючи</td></tr>
</table>
<div class="tip"><b>Хибні друзі:</b><ul>
<li><span class="pl">dlatego</span> = ТОМУ, а «чому» — <span class="pl">dlaczego</span>: <span class="pl">Padało, dlatego zostałem w domu.</span> Підказка: dla + tego ≈ «для того» → тому; dla + czego ≈ «для чого» → чому.</li>
<li><span class="pl">natomiast</span> схоже на укр. «натомість», але означає лише «а, тоді як» — не «замість цього» (це zamiast tego) і не «навпаки»: <span class="pl">Ja lubię morze, mój brat natomiast woli góry.</span> «Навпаки» — <span class="pl">wręcz przeciwnie</span>.</li>
<li><span class="pl">mimo</span> + родовий (<span class="pl">mimo deszczu</span>; пор. укр. «попри дощ» — там знахідний), але <span class="pl">mimo że</span> + речення (<span class="pl">mimo że padało</span>).</li>
</ul></div>`
      },
      exercises: [
        { type: "match", q: "З’єднайте зв’язку з перекладом", pairs: [["dlatego", "тому"], ["natomiast", "а, тоді як"], ["mimo że", "хоча, попри те що"], ["ponieważ", "оскільки"], ["podsumowując", "підсумовуючи"], ["jednak", "однак"]], explain: "Головні пастки: dlatego — «тому» (не «чому»), natomiast — «а, тоді як» (не «замість цього» і не «навпаки»)." },
        { type: "gap", q: "___ mówiąc, ten film mi się nie podobał. (szczery → прислівник)", answers: ["szczerze"], explain: "Сталий вираз szczerze mówiąc — «чесно кажучи»." },
        { type: "gap", q: "___ artykuły o pracy zdalnej, zmieniłem zdanie. (czytać — дієприслівник)", answers: ["czytając"], explain: "czytają → czytając (пор. читають → читаючи). Підмет один (ja): читав і передумав одна й та сама людина." },
        { type: "choice", q: "Pada deszcz, ___ zostaję w domu.", options: ["dlatego", "dlaczego", "ponieważ"], answer: 0, explain: "Наслідок → dlatego («тому»). Dlaczego — «чому», ponieważ — «оскільки» (вводить причину, а не наслідок)." },
        { type: "choice", q: "Яке речення побудоване правильно?", options: ["Wracając do domu, zaczął padać deszcz.", "Wracając do domu, spotkałem sąsiada.", "Wracając do domu, autobus się spóźnił."], answer: 1, explain: "Дієприслівник і головне дієслово мусять мати один підмет: я повертався — я зустрів." },
        { type: "choice", q: "___ deszczu poszliśmy na spacer.", options: ["Mimo", "Mimo że", "Ponieważ"], answer: 0, explain: "Перед іменником — mimo + родовий: mimo deszczu. Mimo że потребує цілого речення: mimo że padało." },
        { type: "gap", q: "Ja wolę pracę w biurze, mój brat ___ lubi pracować z domu. (а, тоді як)", answers: ["natomiast", "zaś"], explain: "Natomiast (або книжне zaś) протиставляє двох людей і зазвичай стоїть після першої групи слів: mój brat natomiast… (zaś не може стояти на початку)." },
        { type: "choice", q: "„Przeczytawszy umowę, Anna ją podpisała.” Що означає przeczytawszy?", options: ["читаючи", "прочитавши", "прочитаний"], answer: 1, explain: "-wszy — книжний дієприслівник док. виду: przeczytawszy = po przeczytaniu («прочитавши» — і звучить майже так само)." },
        { type: "order", ru: "По-перше, дистанційна робота заощаджує час.", words: ["Po", "pierwsze,", "praca", "zdalna", "oszczędza", "czas."], alt: [], explain: "Зв’язка Po pierwsze відкриває аргумент і відокремлюється комою (як укр. «по-перше»)." },
        { type: "translate", ru: "Чесно кажучи, я з тобою не згоден.", answers: ["Szczerze mówiąc, nie zgadzam się z tobą.", "Szczerze mówiąc, ja się z tobą nie zgadzam.", "Szczerze powiedziawszy, nie zgadzam się z tobą."], explain: "Szczerze mówiąc — «чесно кажучи»; zgadzać się z kim — погоджуватися з кимось." }
      ],
      pronunciation: {
        focus: "Читання вголос аргументативного тексту",
        tip: `<p>Есе читають спокійно й чітко, з паузами:</p>
<ul>
<li>після зв’язок на початку речення: <span class="pl">Po pierwsze,</span> | …; <span class="pl">Podsumowując,</span> | …</li>
<li>навколо дієприслівникового звороту: <span class="pl">Pracując z domu,</span> ↗ | <span class="pl">oszczędzam czas.</span> ↘ — голос піднімається перед паузою й опускається в кінці;</li>
<li>з логічним наголосом на протиставленні: <span class="pl">Ja wolę biuro, mój brat natomiast — dom.</span></li>
</ul>
<p>Наголос у зв’язках звичайний, на передостанній склад: na-<b>TO</b>-miast, po-<b>NIE</b>-waż, pod-su-mo-<b>WU</b>-jąc, <b>MI</b>-mo. Не переносьте наголос з українського «підсумо́вуючи»: польською — pod-su-mo-<b>WU</b>-jąc.</p>`,
        items: [
          { type: "stress", word: "natomiast", syllables: ["na", "to", "miast"], answer: 1 },
          { type: "stress", word: "podsumowując", syllables: ["pod", "su", "mo", "wu", "jąc"], answer: 3 },
          { type: "stress", word: "ponieważ", syllables: ["po", "nie", "waż"], answer: 1 },
          { type: "minimal", options: ["dlatego", "dlaczego"], ru: ["тому", "чому"] },
          { type: "listen", text: "Po pierwsze, praca zdalna oszczędza czas. Po drugie, daje więcej swobody.", ru: "По-перше, дистанційна робота заощаджує час. По-друге, вона дає більше свободи.", note: "пауза після «Po pierwsze» і «Po drugie»" },
          { type: "listen", text: "Z jednej strony to wygodne, z drugiej strony brakuje mi kontaktu z ludźmi.", ru: "З одного боку, це зручно, з іншого — мені бракує спілкування з людьми." },
          { type: "dictation", text: "Szczerze mówiąc, nie zgadzam się z tym poglądem." }
        ]
      },
      reading: {
        title: "Praca zdalna: wolność czy pułapka?",
        text: "Jeszcze kilka lat temu praca z domu była przywilejem nielicznych. Dziś, przeglądając ogłoszenia o pracę, co chwilę widzę słowa „zdalnie” albo „hybrydowo”. Czy to dobra zmiana? Moim zdaniem tak, ale nie dla wszystkich.\n\nZalety są oczywiste. Po pierwsze, praca zdalna oszczędza czas. Mieszkając na warszawskiej Białołęce, codziennie traciłem półtorej godziny w korkach. Teraz ten czas spędzam z dziećmi albo na rowerze. Po drugie, można pracować z dowolnego miejsca. Mój kolega, wziąwszy laptopa, spędził cały październik w Bieszczadach i żaden klient tego nie zauważył.\n\nTa forma pracy ma jednak również wady. Pracując sam w pustym mieszkaniu, człowiek łatwo traci kontakt z innymi. Brakuje rozmów przy ekspresie do kawy, wspólnych obiadów, a nawet narzekania na szefa. Ponadto granica między pracą a odpoczynkiem znika: wiele osób odpisuje na maile o jedenastej w nocy. Psycholodzy twierdzą, że skutkiem takiego trybu życia bywa wypalenie zawodowe.\n\nMimo że sam kocham pracę z domu, muszę przyznać rację tym, którzy wolą biuro. Ja mam już wieloletnie doświadczenie, młodzi pracownicy natomiast szczególnie potrzebują kontaktu z doświadczonymi kolegami, dlatego coraz więcej firm wybiera model hybrydowy: dwa dni w biurze, trzy w domu.\n\nPodsumowując: praca zdalna nie jest ani rajem, ani piekłem — to tylko narzędzie. Nie chcę nikogo przekonywać do swoich poglądów, ale nie mam wątpliwości, że najlepszym rozwiązaniem jest wolność wyboru. Każdy z nas pracuje przecież inaczej.",
        glossary: [
          { pl: "przywilejem", ru: "привілеєм" },
          { pl: "nielicznych", ru: "небагатьох, нечисленних" },
          { pl: "przeglądając", ru: "переглядаючи" },
          { pl: "wziąwszy", ru: "взявши" },
          { pl: "ekspresie do kawy", ru: "кавомашині" },
          { pl: "narzekania", ru: "нарікань, бурчання" },
          { pl: "wypalenie zawodowe", ru: "професійне вигорання" },
          { pl: "rajem", ru: "раєм" },
          { pl: "piekłem", ru: "пеклом" },
          { pl: "narzędzie", ru: "знаряддя, інструмент" }
        ],
        questions: [
          { type: "tf", q: "Autor uważa, że praca zdalna jest dobra dla wszystkich.", answer: false, explain: "Moim zdaniem tak, ale nie dla wszystkich." },
          { type: "choice", q: "Dlaczego autor dawniej tracił dużo czasu?", options: ["Bo długo szukał pracy.", "Bo codziennie stał w korkach.", "Bo pracował w Bieszczadach."], answer: 1, explain: "Mieszkając na Białołęce, codziennie traciłem półtorej godziny w korkach." },
          { type: "tf", q: "Kolega autora pracował przez miesiąc z Bieszczad i klienci tego nie zauważyli.", answer: true, explain: "spędził cały październik w Bieszczadach i żaden klient tego nie zauważył." },
          { type: "choice", q: "Przed czym ostrzegają psycholodzy?", options: ["przed wypaleniem zawodowym", "przed zbyt wysokimi pensjami", "przed brakiem internetu"], answer: 0, explain: "skutkiem takiego trybu życia bywa wypalenie zawodowe." },
          { type: "choice", q: "Jakie rozwiązanie autor uważa za najlepsze?", options: ["tylko pracę w biurze", "tylko pracę zdalną", "wolność wyboru"], answer: 2, explain: "najlepszym rozwiązaniem jest wolność wyboru." }
        ]
      },
      writing: {
        prompt: "Напишіть есе-думку (rozprawka) на тему «Czy w czasach tłumaczy automatycznych warto uczyć się języków obcych?» (Чи варто вивчати мови в епоху автоматичних перекладачів?). План: 1) теза (Moim zdaniem…); 2) два аргументи (po pierwsze, po drugie); 3) контраргумент (jednak, mimo że, natomiast); 4) висновок (Podsumowując…). Використайте хоча б один дієприслівник на -ąc.",
        minWords: 100,
        maxWords: 150,
        useWords: ["zdaniem", "zalety", "wady", "twierdzić"],
        checklist: [
          { label: "Щонайменше 4 зв’язки (po pierwsze, jednak, natomiast, mimo że, dlatego, ponieważ, podsumowując…)", pattern: "(?<!\\p{L})(?:po pierwsze|po drugie|po trzecie|jednak|natomiast|mimo że|mimo|dlatego|ponieważ|podsumowując|ponadto|poza tym|z jednej strony|z drugiej strony)(?!\\p{L})", min: 4 },
          { label: "Хоча б один дієприслівник на -ąc", pattern: "\\p{L}{3,}ąc(?!\\p{L})", min: 1 }
        ],
        model: "Czy w czasach, gdy telefon tłumaczy wszystko w sekundę, warto jeszcze uczyć się języków? Moim zdaniem zdecydowanie tak.\nPo pierwsze, znając język, rozumiemy nie tylko słowa, ale też kulturę, żarty i emocje rozmówcy. Żaden tłumacz automatyczny nie wyjaśni nam, dlaczego Polacy śmieją się z niektórych dowcipów. Po drugie, nauka języka to świetny trening dla mózgu: naukowcy twierdzą, że osoby dwujęzyczne dłużej zachowują sprawność umysłu.\nOczywiście aplikacje mają swoje zalety: są szybkie, tanie i zawsze pod ręką. Mają jednak również wady — często mylą się w idiomach i nie rozumieją kontekstu. Mimo że sam korzystam z nich w podróży, nigdy nie zastąpią mi prawdziwej rozmowy.\nPodsumowując: maszyny mogą nam pomagać, ale to człowiek, ucząc się języka, buduje mosty między ludźmi. Dlatego nie zamierzam przestać się uczyć."
      }
    },

    // ───────────────────────── УРОК 5 (ПОВТОРЕННЯ) ─────────────────────────
    {
      id: "m12l5",
      title: "Powtórka 12",
      titleRu: "Повторення модуля і підготовка до іспиту B1",
      topic: "Kultura w Polsce dziś",
      review: true,
      minutes: 30,
      goals: [
        "Повторити віддієслівні іменники, дієприкметники, пасив, безособові форми й дієприслівники",
        "Перевірити граматику всієї частини B1 (M7–M12) у форматі іспиту",
        "Написати підсумкове есе-думку польською"
      ],
      vocab: [
        { pl: "dzieło", g: "n", ru: "твір (мистецтва)", note: "мн. dzieła; dzieło sztuki — твір мистецтва; ≠ укр. «діло» (це sprawa)", ex: "„Dama z gronostajem” to najcenniejsze dzieło w zbiorach krakowskiego muzeum.", exRu: "«Дама з горностаєм» — найцінніший твір у зібранні краківського музею." },
        { pl: "twórca", g: "m", ru: "творець, автор", note: "мн. twórcy; twórczość — творчість", ex: "Twórcą „Wiedźmina” jest Andrzej Sapkowski.", exRu: "Творець «Відьмака» — Анджей Сапковський." },
        { pl: "wystawa", g: "f", ru: "виставка; вітрина", ex: "W Muzeum Narodowym otwarto nową wystawę.", exRu: "У Національному музеї відкрито нову виставку." },
        { pl: "widz", g: "m", ru: "глядач", note: "мн. widzowie", ex: "Po spektaklu widzowie wstali i długo bili brawo.", exRu: "Після вистави глядачі встали й довго аплодували." },
        { pl: "nagroda", g: "f", ru: "нагорода, премія", note: "Nagroda Nobla; zdobyć / otrzymać nagrodę", ex: "Olga Tokarczuk otrzymała literacką Nagrodę Nobla za rok 2018.", exRu: "Ольга Токарчук отримала Нобелівську премію з літератури за 2018 рік." },
        { pl: "czytelnik", g: "m", ru: "читач", note: "мн. czytelnicy; ж. р. czytelniczka", ex: "Polscy czytelnicy uwielbiają kryminały.", exRu: "Польські читачі обожнюють детективи." },
        { pl: "wydarzenie", g: "n", ru: "подія", ex: "Noc Muzeów to jedno z najważniejszych wydarzeń kulturalnych roku.", exRu: "Ніч музеїв — одна з найважливіших культурних подій року." },
        { pl: "przekład", g: "m", ru: "переклад (літературний)", note: "= tłumaczenie; tłumacz — перекладач (пор. укр. «тлумач»)", ex: "Czytałem „Pana Tadeusza” w przekładzie na angielski.", exRu: "Я читав «Пана Тадеуша» в англійському перекладі." },
        { pl: "ekranizacja", g: "f", ru: "екранізація", ex: "Ekranizacja „Chłopów” z 2023 roku została namalowana ręcznie.", exRu: "Екранізація «Селян» 2023 року була намальована вручну." }
      ],
      grammar: {
        title: "Підсумок модуля 12 і шпаргалка B1 перед іспитом",
        html: `<h4>Модуль 12: усі форми від одного дієслова</h4>
<table class="g">
<tr><th>Форма</th><th>Як утворюється</th><th>Приклад</th></tr>
<tr><td>Віддієслівний іменник</td><td>-anie / -enie / -cie</td><td class="pl">czytanie, palenie, picie</td></tr>
<tr><td>Активний дієприкметник (лише недок. вид)</td><td>3 ос. мн. + -cy</td><td class="pl">czytający, czytająca, czytające</td></tr>
<tr><td>Пасивний дієприкметник</td><td>-any / -ony / -ty; чол.-особ. -ani / -eni / -ci</td><td class="pl">przeczytany, zrobiony, zamknięty, zaproszeni</td></tr>
<tr><td>Пасив</td><td>być (стан) / zostać (подія) + дієприкметник; виконавець — przez + знах. в.</td><td class="pl">Zamek został zbudowany przez Krzyżaków.</td></tr>
<tr><td>Безособова форма минулого часу</td><td>-no / -to + знах. в. (як укр. «відкрито школу»)</td><td class="pl">Otwarto nową szkołę.</td></tr>
<tr><td>Безособове się</td><td>3 ос. одн. + się</td><td class="pl">Tu się nie pali. Mówi się, że…</td></tr>
<tr><td>Модальні слова</td><td>można, trzeba, (nie) wolno, należy + інфінітив</td><td class="pl">Nie wolno tu parkować.</td></tr>
<tr><td>Дієприслівники</td><td>-ąc (недок., одночасність) / -wszy (док., книжн.)</td><td class="pl">czytając, przeczytawszy</td></tr>
</table>
<p><b>Зв’язки для есе:</b> <span class="pl">po pierwsze, po drugie, ponadto, jednak, natomiast, mimo że, dlatego, ponieważ, podsumowując</span>.</p>
<h4>Шпаргалка B1 (M7–M11)</h4>
<table class="g">
<tr><th>Тема</th><th>Приклад</th></tr>
<tr><td>Чол.-особ. множина й минулий час</td><td class="pl">Moi koledzy byli mili, a koleżanki były zmęczone.</td></tr>
<tr><td>Числівники з чол.-особ. іменниками</td><td class="pl">dwaj studenci = dwóch studentów; pięciu panów; dwoje dzieci</td></tr>
<tr><td>Умовний спосіб</td><td class="pl">Gdybym miał czas, pojechałbym nad morze.</td></tr>
<tr><td>Żeby: мета й прохання</td><td class="pl">Chcę, żebyś przyszedł. Poprosił, żebym zadzwonił.</td></tr>
<tr><td>Порівняння</td><td class="pl">lepszy niż film = lepszy od filmu; najlepszy z nas</td></tr>
<tr><td>Префіксальні дієслова руху</td><td class="pl">Przyjechałem do Gdańska. Wyszła z domu o ósmej.</td></tr>
<tr><td>Który в усіх відмінках</td><td class="pl">firma, w której pracuję; reżyser, którego film znam</td></tr>
<tr><td>Непряма мова</td><td class="pl">Powiedział, że przyjdzie. Zapytała, czy mam czas.</td></tr>
</table>
<div class="tip"><b>Топ-5 помилок на іспиті:</b><ol>
<li><i>*dwa studenci</i> → <span class="pl">dwaj studenci</span> / <span class="pl">dwóch studentów</span>;</li>
<li><i>*gdyby ja miałem</i> → <span class="pl">gdybym miał</span>;</li>
<li><i>*zbudowany robotnikami</i> → <span class="pl">zbudowany przez robotników</span>;</li>
<li><i>*otwarto nowa szkoła</i> → <span class="pl">otwarto nową szkołę</span>;</li>
<li><span class="pl">dlatego</span> — «тому», <span class="pl">dlaczego</span> — «чому»; <span class="pl">natomiast</span> — «а», не «навпаки».</li>
</ol></div>
<div class="tip">Стратегія на іспиті: у завданнях із пропуском спершу визначте <b>рід і число</b> підмета (чоловічо-особовий чи ні?), потім <b>відмінок</b>, якого вимагає дієслово чи прийменник, і лише тоді обирайте форму.</div>`
      },
      exercises: [
        { type: "match", q: "З’єднайте форму з її назвою", pairs: [["czytanie", "віддієслівний іменник"], ["czytający", "активний дієприкметник"], ["przeczytany", "пасивний дієприкметник"], ["czytając", "дієприслівник"], ["przeczytano", "безособова форма на -no"]], explain: "Одна основа — п’ять форм: -anie (дія), -ący (який? той, що робить), -any (який? зроблений), -ąc (як? роблячи), -no (зроблено, безособово)." },
        { type: "gap", q: "Po ___ Wawelu poszliśmy na obwarzanki. (zwiedzać)", answers: ["zwiedzaniu"], explain: "po + місцевий відмінок: zwiedzanie → po zwiedzaniu." },
        { type: "gap", q: "Studenci ___ polskiego często oglądają polskie seriale. (uczyć się — дієприкметник)", answers: ["uczący się"], explain: "uczą się → uczący się; się зберігається. Studenci — чол.-особ., форма на -ący." },
        { type: "choice", q: "Nagroda Nobla ___ Oldze Tokarczuk w 2019 roku.", options: ["została przyznana", "został przyznany", "przyznała się"], answer: 0, explain: "Nagroda — ж. р., подія → została przyznana." },
        { type: "gap", q: "W 1996 roku Wisławie Szymborskiej ___ Nagrodę Nobla. (przyznać — безособова форма)", answers: ["przyznano"], explain: "przyznany → przyznano (≈ укр. «присуджено»); додаток у знахідному: Nagrodę Nobla." },
        { type: "choice", q: "___ z muzeum, spotkałam dawną koleżankę.", options: ["Wychodząc", "Wychodząca", "Wyjście"], answer: 0, explain: "Дієприслівник на -ąc: wychodzą → wychodząc. Підмет один — я виходила і я зустріла." },
        { type: "choice", q: "Ten film jest bardzo długi, ___ warto go obejrzeć.", options: ["jednak", "dlatego", "ponieważ"], answer: 0, explain: "Протиставлення → jednak («однак»). Dlatego дав би абсурд: «довгий, тому варто подивитися»." },
        { type: "choice", q: "Na spotkanie z autorem przyszło ___.", options: ["pięciu studentów", "pięć studenci", "pięciu studenci"], answer: 0, explain: "M7: 5+ із чоловічо-особовими — pięciu + родовий мн. (studentów), дієслово в с. р. однини: przyszło." },
        { type: "gap", q: "Przewodnik poprosił, ___ nie dotykali obrazów. (żeby + my)", answers: ["żebyśmy", "abyśmy", "byśmy"], explain: "M8/M11: непряме прохання — żeby + особове закінчення: żebyśmy nie dotykali." },
        { type: "gap", q: "Gdybym miała więcej czasu, ___ więcej książek. (czytać, ja — kobieta)", answers: ["czytałabym", "przeczytałabym"], explain: "M8: умовний спосіб, ж. р., 1-ша ос.: czytała + bym → czytałabym." },
        { type: "choice", q: "Mówi się, że książka jest zawsze ___ od ekranizacji.", options: ["lepsza", "lepszy", "najlepsza"], answer: 0, explain: "M9: вищий ступінь; książka — ж. р.: lepsza od + родовий (od ekranizacji)." },
        { type: "gap", q: "Wczoraj pociąg z Krakowa ___ do Warszawy z godzinnym opóźnieniem. (przyjechać)", answers: ["przyjechał"], explain: "M10: przyjechać — приїхати, прибути; pociąg — ч. р., минулий час: przyjechał." },
        { type: "gap", q: "To jest reżyser, ___ film zdobył nagrodę w Gdyni. (który)", answers: ["którego"], explain: "M11: «чий фільм» → którego film (родовий відмінок належності)." },
        { type: "order", ru: "Журналіст запитав, чи фільм був знятий у Польщі.", words: ["Dziennikarz", "zapytał,", "czy", "film", "został", "nakręcony", "w", "Polsce."], alt: [], explain: "M11 + M12: непряме питання з czy і пасив został nakręcony." },
        { type: "translate", ru: "Кажуть, що книжка краща за фільм.", answers: ["Mówi się, że książka jest lepsza niż film.", "Mówi się, że książka jest lepsza od filmu.", "Mówią, że książka jest lepsza niż film.", "Mówią, że książka jest lepsza od filmu."], explain: "Mówi się — безособове «кажуть»; порівняння: lepsza niż film = lepsza od filmu (пор. укр. «краща, ніж фільм» = «краща за фільм»)." }
      ],
      pronunciation: {
        focus: "Повторення: -anie, -ący/-ąc, -eni, -no/-to",
        tip: `<p>Повторюємо вимову модуля:</p>
<ul>
<li><b>-anie, -enie</b>: м’який склад nie, наголос перед ним — zwie-<b>DZA</b>-nie;</li>
<li><b>-ący / -ąc</b>: ą перед c = [он]. Порівняйте наголос: czy-ta-<b>JĄ</b>-cy, але czy-<b>TA</b>-jąc — у дієприслівнику на один склад менше (наголос на тому самому складі, що й в укр. «чита́ючи»);</li>
<li><b>-ony → -eni</b>: za-pro-<b>SZO</b>-ny — za-pro-<b>SZE</b>-ni;</li>
<li><b>-no / -to</b>: звичайний наголос на передостанньому — prze-tłu-ma-<b>CZO</b>-no (а не на третьому складі з кінця, як в укр. «перекла́дено», «збудо́вано»);</li>
<li>у довгих фразах — пауза після зв’язки та після дієприслівникового звороту.</li>
</ul>`,
        items: [
          { type: "stress", word: "przetłumaczono", syllables: ["prze", "tłu", "ma", "czo", "no"], answer: 3 },
          { type: "stress", word: "czytając", syllables: ["czy", "ta", "jąc"], answer: 1 },
          { type: "stress", word: "zaproszeni", syllables: ["za", "pro", "sze", "ni"], answer: 2 },
          { type: "minimal", options: ["zrobiono", "zrobione"], ru: ["зроблено (безос.)", "зроблене / зроблені"] },
          { type: "minimal", options: ["czytając", "czytający"], ru: ["читаючи", "той, що читає"] },
          { type: "listen", text: "Zwiedzanie muzeum zajęło nam cały dzień.", ru: "Огляд музею забрав у нас цілий день." },
          { type: "listen", text: "Szczerze mówiąc, książka była lepsza niż film.", ru: "Чесно кажучи, книжка була краща за фільм.", note: "пауза після «Szczerze mówiąc»" },
          { type: "dictation", text: "Powieść została przetłumaczona na wiele języków." }
        ]
      },
      reading: {
        title: "Reymont w nowej odsłonie",
        text: "W każdy pierwszy czwartek miesiąca w małej bibliotece na łódzkich Bałutach spotyka się Dyskusyjny Klub Książki. Dla wielu mieszkańców dzielnicy to najważniejsze wydarzenie miesiąca. Klub skupia czytelników w każdym wieku — od licealistów po emerytów. Tym razem przyszło dziewięć osób, w tym — co rzadkie — aż czterech panów.\n\nTemat spotkania wybrano miesiąc wcześniej: „Chłopi” Władysława Reymonta. Powieść została napisana na początku XX wieku, a w 1924 roku jej twórca otrzymał Nagrodę Nobla. W 2023 roku powstała jej niezwykła ekranizacja: najpierw nakręcono film z aktorami, a potem każda klatka została ręcznie namalowana farbami olejnymi przez zespół malarzy. Film zachwycił widzów w wielu krajach i sprawił, że po powieść sięgnęło wielu nowych czytelników. Również w klubie wielu uczestników przyznało, że zamiast zacząć od książki, najpierw obejrzeli film.\n\n— Szczerze mówiąc, bez filmu nigdy nie przeczytałabym tej książki — powiedziała pani Halina, emerytowana nauczycielka. — W szkole „Chłopi” byli dla mnie nudną lekturą obowiązkową. Dopiero oglądając te obrazy, zrozumiałam, jak piękny jest ten świat.\n\nTomek, student polonistyki i najmłodszy uczestnik, nie zgodził się z nią.\n\n— Film to dzieło sztuki, ale książka jest lepsza. Reymont pisze gwarą, którą słyszy się w głowie jak muzykę. Żaden obraz tego nie zastąpi.\n\n— Gdyby Reymont żył dzisiaj, pewnie pisałby scenariusze do seriali — zażartował pan Zbigniew, emerytowany kolejarz siedzący zawsze przy oknie. Wszyscy się zaśmiali, ale nikt nie zaprzeczył.\n\nBibliotekarka zapytała, czy ktoś czytał powieść w przekładzie. Pani Olga, która przyjechała do Łodzi ze Lwowa, odpowiedziała, że czytała „Chłopów” po ukraińsku jeszcze na studiach.\n\n— U nas powieść nosi tytuł „Selany” — dodała ze śmiechem. — Brzmi zupełnie inaczej, prawda?\n\nNa koniec ustalono, że na następne spotkanie wszyscy przeczytają przynajmniej pierwszy tom, czyli „Jesień”. Pani Halina obiecała, że przyniesie domowy sernik.\n\n— Może jednak lepiej byłoby, żeby książki czytano przed seansem, a nie po nim? — zaśmiała się bibliotekarka, zamykając salę.",
        glossary: [
          { pl: "Bałutach", ru: "Балути — район Лодзі" },
          { pl: "klatka", ru: "кадр (фільму); також «клітка»" },
          { pl: "farbami olejnymi", ru: "олійними фарбами" },
          { pl: "emerytowana", ru: "на пенсії" },
          { pl: "lekturą obowiązkową", ru: "обов’язковим читанням зі шкільної програми" },
          { pl: "polonistyki", ru: "полоністики (польської філології)" },
          { pl: "gwarą", ru: "говіркою, діалектом (пор. укр. «гвара»)" },
          { pl: "seansem", ru: "сеансом (у кіно)" }
        ],
        questions: [
          { type: "tf", q: "Na spotkanie przyszło dziewięć osób, w tym czterech mężczyzn.", answer: true, explain: "przyszło dziewięć osób, w tym — co rzadkie — aż czterech panów." },
          { type: "choice", q: "Jak powstał film „Chłopi”?", options: ["Nakręcono go z aktorami, a potem każda klatka została namalowana.", "Został narysowany na komputerze bez udziału aktorów.", "Został nakręcony we Lwowie."], answer: 0, explain: "najpierw nakręcono film z aktorami, a potem każda klatka została ręcznie namalowana." },
          { type: "tf", q: "Pani Halina w szkole uwielbiała „Chłopów”.", answer: false, explain: "W szkole „Chłopi” byli dla niej nudną lekturą obowiązkową." },
          { type: "choice", q: "Dlaczego Tomek uważa, że książka jest lepsza?", options: ["Bo jest krótsza niż film.", "Bo język Reymonta brzmi jak muzyka.", "Bo nie lubi kina."], answer: 1, explain: "Reymont pisze gwarą, którą słyszy się w głowie jak muzykę." },
          { type: "choice", q: "Co ustalono na koniec spotkania?", options: ["że wszyscy jeszcze raz obejrzą film", "że każdy przeczyta przynajmniej pierwszy tom", "że klub nie będzie się już spotykał"], answer: 1, explain: "wszyscy przeczytają przynajmniej pierwszy tom, czyli „Jesień”." }
        ]
      },
      writing: {
        prompt: "Підсумкове есе модуля. Тема: «Czy muzea i teatry powinny być bezpłatne?» Напишіть аргументований текст: теза, два аргументи «за», контраргумент, висновок. Обов’язково використайте зв’язки есе, хоча б одну пасивну чи безособову форму (został…, -no/-to, się) та один дієприкметник або дієприслівник (-ący / -ąc). Можна спертися на польські реалії: Noc Muzeów, безкоштовні дні в музеях.",
        minWords: 100,
        maxWords: 150,
        useWords: ["wydarzenie", "widz", "wystawa", "twórca"],
        checklist: [
          { label: "Щонайменше 4 зв’язки есе", pattern: "(?<!\\p{L})(?:po pierwsze|po drugie|po trzecie|jednak|natomiast|mimo że|mimo|dlatego|ponieważ|podsumowując|ponadto|poza tym|z jednej strony|z drugiej strony)(?!\\p{L})", min: 4 },
          { label: "Пасив або безособова форма (został…, -no/-to)", pattern: "(?<!\\p{L})(?:zosta(?:ł|ła|ło|li|ły|nie|ną)|\\p{L}{3,}(?:ano|ono|ęto|arto))(?!\\p{L})", min: 1 },
          { label: "Дієприкметник на -ący або дієприслівник на -ąc", pattern: "\\p{L}{3,}ąc(?:y|a|e|ych|ym|ej|ego)?(?!\\p{L})", min: 1 }
        ],
        model: "Czy muzea i teatry powinny być bezpłatne?\nW ostatnich latach coraz częściej mówi się o tym, że kultura powinna być dostępna dla wszystkich. Moim zdaniem bezpłatny wstęp to dobry pomysł, ale nie zawsze.\nPo pierwsze, darmowe wydarzenia przyciągają nowych widzów. Podczas Nocy Muzeów kolejki ustawiają się nawet przed małymi galeriami, a wiele osób odwiedza muzeum pierwszy raz w życiu. Po drugie, młodzi ludzie, nie mając pieniędzy, często rezygnują z teatru. Darmowe bilety mogłyby to zmienić.\nZ drugiej strony twórcy też muszą z czegoś żyć. Gdyby wszystko było za darmo, nowe wystawy i spektakle byłyby finansowane wyłącznie z podatków. Mimo że brzmi to dobrze, w praktyce oznaczałoby to mniej pieniędzy na sztukę.\nPodsumowując: uważam, że najlepszym rozwiązaniem są bezpłatne dni, na przykład raz w tygodniu. W wielu polskich muzeach wprowadzono już takie dni, dlatego każdy może z nich skorzystać."
      }
    }
  ]
});
