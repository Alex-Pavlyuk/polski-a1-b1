// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m07",
  n: 7,
  level: "B1",
  title: "Ludzie",
  titleRu: "Люди",
  summary: "Ви навчитеся говорити про людей у множині: розрізняти чоловічо-особовий і нечоловічо-особовий рід (studenci / studentki, byli / były), відмінювати ludzie, przyjaciele, bracia, рахувати людей (dwóch kolegów, pięciu panów, dwoje dzieci) та описувати родину, зовнішність, характер і стосунки.",
  lessons: [
    // ───────────────────────── УРОК 1 ─────────────────────────
    {
      id: "m07l1",
      title: "Studenci i studentki",
      titleRu: "Чоловічо-особовий рід: наз. відм. мн.",
      topic: "Rodzina i znajomi",
      review: false,
      minutes: 30,
      goals: [
        "Розрізняти чоловічо-особовий і нечоловічо-особовий рід у множині: ci studenci / te studentki, oni / one",
        "Утворювати наз. в. мн. із чергуваннями: student → studenci, Polak → Polacy, aktor → aktorzy",
        "Знати закінчення -owie (synowie, profesorowie) та винятки (ludzie, bracia, przyjaciele)",
        "Розповідати про родичів і знайомих"
      ],
      vocab: [
        { pl: "rodzeństwo", g: "n", ru: "брати й сестри (рідні)", ex: "Czy masz rodzeństwo? – Tak, starszego brata i dwie młodsze siostry.", exRu: "У тебе є брати чи сестри? — Так, старший брат і дві молодші сестри.", note: "збірне, вживається в однині: Moje rodzeństwo mieszka w Gdańsku." },
        { pl: "kuzyn", g: "m", ru: "двоюрідний брат", ex: "Moi kuzyni mieszkają w Poznaniu.", exRu: "Мої двоюрідні брати живуть у Познані.", note: "kuzynka — двоюрідна сестра; мн. kuzyni / kuzynki" },
        { pl: "teściowie", g: "pl", ru: "батьки чоловіка або дружини", ex: "W niedzielę jedziemy na obiad do teściów.", exRu: "У неділю їдемо на обід до тестя й тещі.", note: "teść — тесть / свекор, teściowa — теща / свекруха" },
        { pl: "szwagier", g: "m", ru: "зять (чоловік сестри); шурин, дівер", ex: "Mój szwagier, mąż siostry, jest mechanikiem.", exRu: "Мій зять, чоловік сестри, — механік.", note: "мн. szwagrowie; szwagierka — невістка (дружина брата), зовиця чи своячка (сестра чоловіка / дружини)" },
        { pl: "wnuk", g: "m", ru: "онук", ex: "Dziadek zabiera wnuka na ryby.", exRu: "Дідусь бере онука на риболовлю.", note: "wnuczka — онука; мн. wnukowie, розм. wnuki (онуки загалом)" },
        { pl: "sąsiad", g: "m", ru: "сусід", ex: "Nasi sąsiedzi z dołu są bardzo głośni.", exRu: "Наші сусіди знизу дуже галасливі.", note: "мн. sąsiedzi (d → dzi, a → e); sąsiadka — сусідка" },
        { pl: "znajomy", g: "m", ru: "знайомий", ex: "To nie mój przyjaciel, tylko znajomy z pracy.", exRu: "Це не мій друг, а просто знайомий з роботи.", note: "відмінюється як прикметник: znajoma; мн. znajomi / znajome" },
        { pl: "przyjaciel", g: "m", ru: "(близький) друг", ex: "Przyjaciele zawsze mogą na mnie liczyć.", exRu: "Друзі завжди можуть на мене розраховувати.", note: "мн. przyjaciele (!); przyjaciółka — подруга. Це сильніше за укр. «приятель»; kolega — товариш, знайомий, не близький друг" },
        { pl: "krewny", g: "m", ru: "родич", ex: "Na wesele przyjechali krewni z całej Polski.", exRu: "На весілля приїхали родичі з усієї Польщі.", note: "відмінюється як прикметник: krewna; мн. krewni. Пор. укр. «кревний» (кровний родич)" },
        { pl: "bliźniak", g: "m", ru: "близнюк", ex: "Moi bracia to bliźniacy i nikt ich nie rozróżnia.", exRu: "Мої брати — близнюки, і ніхто їх не розрізняє.", note: "мн. bliźniacy (k → c); дівчатка — bliźniaczki" },
        { pl: "jedynak", g: "m", ru: "одинак, єдина дитина (син)", ex: "Jestem jedynakiem, nie mam rodzeństwa.", exRu: "Я одинак, у мене немає братів і сестер.", note: "jedynaczka — єдина донька в родині" },
        { pl: "rówieśnik", g: "m", ru: "ровесник, одноліток", ex: "Moi rówieśnicy mają już dzieci.", exRu: "У моїх ровесників вже є діти.", note: "мн. rówieśnicy (k → c)" },
        { pl: "pokolenie", g: "n", ru: "покоління", ex: "W tym domu mieszkają trzy pokolenia.", exRu: "У цьому будинку живуть три покоління." }
      ],
      grammar: {
        title: "Наз. в. мн.: чоловічо-особовий і нечоловічо-особовий рід",
        html: `<p>В однині в польській мові три роди, а в множині — лише <b>два</b>:</p>
<ul>
<li><b>чоловічо-особовий</b> (rodzaj męskoosobowy) — чоловіки та групи, де є <b>хоча б один чоловік</b>;</li>
<li><b>нечоловічо-особовий</b> (niemęskoosobowy) — усе інше: жінки, діти, тварини, речі.</li>
</ul>
<table class="g">
<tr><th></th><th>чоловічо-особовий</th><th>нечоловічо-особовий</th></tr>
<tr><td>вони</td><td class="pl">oni</td><td class="pl">one</td></tr>
<tr><td>ці</td><td class="pl">ci</td><td class="pl">te</td></tr>
<tr><td>мої</td><td class="pl">moi</td><td class="pl">moje</td></tr>
<tr><td>наші</td><td class="pl">nasi</td><td class="pl">nasze</td></tr>
<tr><td>приклад</td><td class="pl">ci studenci</td><td class="pl">te studentki, te psy, te okna</td></tr>
</table>
<div class="ex"><span class="pl">Anna i Marek? Oni mieszkają w Lublinie.</span> — Анна і Марек? Вони живуть у Любліні.</div>
<div class="ex"><span class="pl">Anna i Ewa? One mieszkają w Gdyni.</span> — Анна і Ева? Вони живуть у Гдині.</div>
<div class="tip">Для українців це нова категорія: у нас «вони, ці, мої» — однакові для всіх. Одна жінка серед чоловіків нічого не змінює, а один чоловік серед жінок змінює все: десять студенток + один студент = <span class="pl">ci studenci</span>. Тварини й діти — завжди нечоловічо-особові: <span class="pl">te psy, te dzieci</span>.</div>
<h4>Чоловіки: закінчення -i / -y і чергування</h4>
<p>Останній приголосний основи пом’якшується або змінюється — пор. українські чергування к → ц, г → з, х → с: рука → у руці, нога → на нозі, муха → на мусі:</p>
<table class="g">
<tr><th>чергування</th><th>одн.</th><th>мн.</th></tr>
<tr><td>t → ci</td><td class="pl">student, architekt</td><td class="pl">studenci, architekci</td></tr>
<tr><td>d → dzi</td><td class="pl">sąsiad, Szwed</td><td class="pl">sąsiedzi, Szwedzi</td></tr>
<tr><td>k → cy</td><td class="pl">Polak, rówieśnik</td><td class="pl">Polacy, rówieśnicy</td></tr>
<tr><td>g → dzy</td><td class="pl">kolega, psycholog</td><td class="pl">koledzy, psycholodzy</td></tr>
<tr><td>r → rzy</td><td class="pl">aktor, kelner</td><td class="pl">aktorzy, kelnerzy</td></tr>
<tr><td>ch → si</td><td class="pl">Czech, Włoch</td><td class="pl">Czesi, Włosi</td></tr>
<tr><td>st → ści</td><td class="pl">turysta, dentysta</td><td class="pl">turyści, dentyści</td></tr>
<tr><td>-ec → -cy</td><td class="pl">chłopiec, Niemiec</td><td class="pl">chłopcy, Niemcy</td></tr>
</table>
<h4>Закінчення -owie</h4>
<p>Його мають багато назв родичів, титули, деякі професії та прізвища (уся родина): <span class="pl">syn → synowie, pan → panowie, ojciec → ojcowie, dziadek → dziadkowie, wujek → wujkowie, profesor → profesorowie, Nowak → Nowakowie</span>.</p>
<h4>Закінчення -e</h4>
<p>Після м’яких і «шиплячих» (-arz, -l, -ć…): <span class="pl">lekarz → lekarze, nauczyciel → nauczyciele, gość → goście</span>. Закінчення виглядає «жіночим», але це чоловіки: <span class="pl">ci lekarze, moi goście</span>.</p>
<h4>Нечоловічо-особові форми (повторення)</h4>
<ul>
<li>ж. р.: <span class="pl">kobieta → kobiety, kuzynka → kuzynki, ciocia → ciocie</span></li>
<li>с. р.: <span class="pl">pokolenie → pokolenia, okno → okna</span></li>
<li>ч. р. неособовий: <span class="pl">pies → psy, ptak → ptaki, koń → konie</span></li>
</ul>
<h4>Винятки — вивчити напам’ять</h4>
<table class="g">
<tr><th>одн.</th><th>мн.</th></tr>
<tr><td class="pl">człowiek</td><td class="pl">ludzie</td></tr>
<tr><td class="pl">brat</td><td class="pl">bracia</td></tr>
<tr><td class="pl">przyjaciel</td><td class="pl">przyjaciele</td></tr>
<tr><td class="pl">dziecko</td><td class="pl">dzieci</td></tr>
<tr><td class="pl">Rosjanin, Amerykanin</td><td class="pl">Rosjanie, Amerykanie</td></tr>
</table>
<div class="tip">Пастки: <span class="pl">Polaki</span> — груба, зневажлива форма (хоча українське «поляки» звучить нейтрально!), правильно <span class="pl">Polacy</span>. <span class="pl">Czechy</span> і <span class="pl">Włochy</span> — це країни (Чехія, Італія), а люди — <span class="pl">Czesi, Włosi</span>. А от <span class="pl">Niemcy</span> — і «німці», і «Німеччина».</div>`
      },
      exercises: [
        { type: "choice", q: "___ studenci są z Ukrainy.", options: ["Ci", "Te", "Ten"], answer: 0, explain: "studenci — чоловічо-особова форма, тому вказівний займенник ci." },
        { type: "choice", q: "Anna i Marek? ___ mieszkają w Lublinie.", options: ["Oni", "One", "Ona"], answer: 0, explain: "У групі є чоловік (Marek) → oni." },
        { type: "gap", q: "W naszej grupie są ___ (Polak) i Ukraińcy.", answers: ["Polacy"], explain: "k → c + y: Polak → Polacy (пор. укр. к → ц: рука — у руці). Форма «Polaki» — зневажлива." },
        { type: "gap", q: "Moi ___ (sąsiad) mają trzy psy.", answers: ["sąsiedzi"], explain: "d → dzi і a → e: sąsiad → sąsiedzi." },
        { type: "gap", q: "Ci ___ (aktor) grają w serialu „Ranczo”.", answers: ["aktorzy"], explain: "r → rz + y: aktor → aktorzy." },
        { type: "gap", q: "Na tej konferencji są ___ (profesor) z całej Europy.", answers: ["profesorowie"], explain: "Титули часто мають -owie: profesor → profesorowie." },
        { type: "match", q: "З’єднайте однину і множину", pairs: [["Czech", "Czesi"], ["Włoch", "Włosi"], ["Niemiec", "Niemcy"], ["turysta", "turyści"], ["kolega", "koledzy"], ["człowiek", "ludzie"]], explain: "ch → si, -ec → -cy, st → ści, g → dz; człowiek → ludzie — виняток." },
        { type: "choice", q: "Kto to jest? – To moi ___.", options: ["bracia", "braci", "bratowie"], answer: 0, explain: "brat → bracia — виняток. braci — це род. / знах. в. (nie mam braci), форми «bratowie» немає." },
        { type: "order", ru: "Ці люди — мої родичі.", words: ["Ci", "ludzie", "to", "moi", "krewni."], alt: [], explain: "ludzie — чоловічо-особова форма → ci, moi; krewny → krewni." },
        { type: "translate", ru: "Мої брати — студенти.", answers: ["Moi bracia są studentami.", "Moi bracia to studenci."], explain: "bracia → moi. Після są — оруд. в. (studentami, як укр. «є студентами»), після to — наз. в. (studenci)." }
      ],
      pronunciation: {
        focus: "Чергування t → ci, d → dzi, k → c, r → rz на слух",
        tip: `<p>У множині чоловічо-особового роду кінцевий приголосний змінюється — і це добре чути. Тренуйте слух на парах «однина — множина»:</p>
<ul>
<li><b>t → ci</b>: <span class="pl">student → studenci</span> — польське <i>ci</i> [ч’] — м’який звук між «ць» і «ч», набагато м’якший за українське тверде «ч»; кінчик язика внизу, губи не витягнуті: [студе́нч’і].</li>
<li><b>d → dzi</b>: <span class="pl">sąsiad → sąsiedzi</span> — [дж’], дзвінка пара до ć: м’яке «дзь», як в укр. «дзьоб», з легким відтінком «дж».</li>
<li><b>k → c</b>: <span class="pl">Polak → Polacy</span> — тверде «ц» + <i>y</i>, що звучить як голосний у слові «дим»: [поля́ци] — порівняйте з укр. «поляки».</li>
<li><b>r → rz</b>: <span class="pl">aktor → aktorzy</span> — <i>rz</i> звучить як українське «ж»: [акто́жи].</li>
</ul>
<p>Україномовні часто за звичкою кажуть «студенти» замість <span class="pl">studenci</span>: стежте, щоб у кінці звучало м’яке [ч’і], а не [ти].</p>`,
        items: [
          { type: "listen", text: "student, studenci", ru: "студент — студенти", note: "t → ci [ч’]" },
          { type: "listen", text: "Polak, Polacy", ru: "поляк — поляки", note: "k → c, у кінці -cy [ци]" },
          { type: "listen", text: "sąsiad, sąsiedzi; aktor, aktorzy", ru: "сусід — сусіди; актор — актори", note: "d → dzi, r → rz" },
          { type: "minimal", options: ["Włosi", "Włochy", "włosy"], ru: ["італійці", "Італія", "волосся"] },
          { type: "minimal", options: ["Czesi", "Czechy"], ru: ["чехи", "Чехія"] },
          { type: "stress", word: "profesorowie", syllables: ["pro", "fe", "so", "ro", "wie"], answer: 3 },
          { type: "dictation", text: "Nasi sąsiedzi to Czesi, a ich koledzy to Polacy." }
        ]
      },
      reading: {
        title: "Rodzinne zdjęcie",
        text: "Na tym zdjęciu jest cała moja rodzina – trzy pokolenia. To osiemdziesiąte urodziny babci Heli. W środku siedzą dziadkowie, a obok nich moi rodzice. Babcia ma na głowie koronę z papieru – to pomysł wnuków.\n\nPo lewej stoją moi wujkowie, Janusz i Zbyszek. Oni są bliźniakami, ale wcale nie są podobni: Janusz jest wysoki i spokojny, a Zbyszek niski i bardzo energiczny. Obok nich stoją ich żony, ciocia Ola i ciocia Basia. One co roku konkurują, która robi lepsze pierogi. Babcia mówi, że wygrywają obie.\n\nPo prawej są moi kuzyni: Kuba, Bartek i Zosia. Kuba i Bartek to studenci z Wrocławia, a Zosia chodzi jeszcze do liceum. Jestem jedynakiem, więc kuzyni są dla mnie jak rodzeństwo. Wysoki brunet obok Zosi to Marco, mąż jej starszej siostry, Magdy. Marco jest Włochem i twierdzi, że Włosi i Polacy są bardzo podobni: kochają jedzenie, długie obiady i głośne rozmowy przy stole.\n\nA ten starszy pan w czapce? To nie jest nasz krewny, tylko sąsiad, pan Ryszard. Nasi sąsiedzi to bardzo mili ludzie i często przychodzą na rodzinne imprezy. Pan Ryszard zwykle robi wszystkie zdjęcia, dlatego sam prawie nigdy na nich nie jest. Tym razem ustawił aparat na szafie i w ostatniej sekundzie wskoczył obok dziadka.\n\nA te dwa psy na dole? To Burek i Azor. One też są członkami rodziny, chociaż babcia nazywa je „te łobuzy”.",
        glossary: [
          { pl: "koronę", ru: "корону" },
          { pl: "konkurują", ru: "змагаються, суперничають" },
          { pl: "liceum", ru: "ліцей (старша школа)" },
          { pl: "twierdzi", ru: "стверджує" },
          { pl: "ustawił aparat", ru: "поставив фотоапарат" },
          { pl: "wskoczył", ru: "заскочив, стрибнув" },
          { pl: "na dole", ru: "унизу" },
          { pl: "łobuzy", ru: "бешкетники, шибеники" }
        ],
        questions: [
          { type: "tf", q: "Wujkowie Janusz i Zbyszek są do siebie bardzo podobni.", answer: false, explain: "Вони близнюки, але «wcale nie są podobni»: один високий, другий низький." },
          { type: "choice", q: "Kim jest Marco?", options: ["kuzynem narratora", "mężem kuzynki narratora", "sąsiadem rodziny"], answer: 1, explain: "Marco — чоловік Магди, старшої сестри Зосі, тобто двоюрідної сестри оповідача." },
          { type: "tf", q: "Narrator ma brata i siostrę.", answer: false, explain: "«Jestem jedynakiem» — у нього немає рідних братів і сестер." },
          { type: "choice", q: "Dlaczego pan Ryszard rzadko jest na zdjęciach?", options: ["Bo nie lubi zdjęć.", "Bo zwykle sam je robi.", "Bo nie jest krewnym."], answer: 1, explain: "«Pan Ryszard zwykle robi wszystkie zdjęcia, dlatego sam prawie nigdy na nich nie jest»." },
          { type: "choice", q: "Dlaczego w tekście jest „moi kuzyni”, a nie „moje kuzynki”?", options: ["Bo w grupie są chłopcy.", "Bo wszyscy są studentami.", "Bo Zosia jest najmłodsza."], answer: 0, explain: "Kuba, Bartek i Zosia — у групі є чоловіки, тому чоловічо-особова форма: moi kuzyni." }
        ]
      },
      writing: {
        prompt: "Ви показуєте польському другові родинну світлину (або фото з друзями). Опишіть, хто на ній: 1) хто ці люди і ким вони вам доводяться; 2) звідки вони і чим займаються; 3) хто з них ваш улюблений родич і чому. Використовуйте форми множини: ci / te, moi / moje, nasi і чоловічо-особові форми іменників (kuzyni, sąsiedzi, wujkowie).",
        minWords: 80,
        maxWords: 130,
        useWords: ["rodzeństwo", "kuzyn", "krewny", "sąsiad"],
        checklist: [
          { label: "Щонайменше 2 чоловічо-особові займенники (ci, moi, nasi…)", pattern: "(?<!\\p{L})(ci|moi|nasi|twoi|wasi|oni)(?!\\p{L})", min: 2 },
          { label: "Щонайменше 3 чоловічо-особові форми мн. (studenci, Polacy, wujkowie, sąsiedzi…)", pattern: "\\p{L}+(ci|dzi|cy|dzy|rzy|owie|si)(?!\\p{L})", min: 3 }
        ],
        model: "To zdjęcie z wesela mojej kuzynki Marty. Z przodu stoją moi dziadkowie i rodzice. Obok nich są moi wujkowie z Gdyni – oni są marynarzami i rzadko bywają w domu. Ci chłopcy w garniturach to moi kuzyni, Adam i Piotr. Oni studiują w Krakowie. Nie mam rodzeństwa, więc kuzyni są dla mnie jak bracia. Te dziewczyny po prawej to koleżanki Marty ze studiów. Ten pan z gitarą nie jest naszym krewnym – to sąsiad, pan Leszek. Nasi sąsiedzi zawsze przychodzą na rodzinne uroczystości. Moim ulubionym krewnym jest dziadek Tadeusz, bo ma świetne poczucie humoru i opowiada najlepsze historie."
      }
    },

    // ───────────────────────── УРОК 2 ─────────────────────────
    {
      id: "m07l2",
      title: "Byli mili, były miłe",
      titleRu: "Прикметники і минулий час у множині",
      topic: "Wygląd i charakter",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати чоловічо-особові форми прикметників: dobry → dobrzy, wysoki → wysocy, miły → mili",
        "Узгоджувати займенники: moi / moje, nasi / nasze, wszyscy / wszystkie",
        "Розрізняти минулий час у множині: byli / były, zrobili / zrobiły, jedli / jadły",
        "Описувати зовнішність і характер людей"
      ],
      vocab: [
        { pl: "przystojny", ru: "вродливий, гарний (про чоловіка)", ex: "Twój brat jest bardzo przystojny!", exRu: "Твій брат дуже вродливий!", note: "про жінку кажуть ładna, piękna; мн. ч.-о. przystojni" },
        { pl: "szczupły", ru: "стрункий, худорлявий", ex: "Ewa jest wysoka i szczupła.", exRu: "Ева висока і струнка.", note: "мн. ч.-о. szczupli (ł → l)" },
        { pl: "łysy", ru: "лисий", ex: "Mój tata jest łysy jak kolano.", exRu: "Мій тато лисий як коліно.", note: "мн. ч.-о. łysi" },
        { pl: "broda", g: "f", ru: "борода; підборіддя", ex: "Mój brat zapuścił brodę.", exRu: "Мій брат відпустив бороду.", note: "zapuścić brodę — відпустити (розм. «запустити») бороду" },
        { pl: "wąsy", g: "pl", ru: "вуса", ex: "Pan Zdzisław ma wąsy jak Lech Wałęsa.", exRu: "У пана Здзіслава вуса, як у Леха Валенси.", note: "зазвичай у множині" },
        { pl: "kręcone włosy", g: "pl", ru: "кучеряве волосся", ex: "Zosia ma rude, kręcone włosy.", exRu: "У Зосі руде кучеряве волосся.", note: "≠ proste włosy — пряме волосся; włosy — множина, а укр. «волосся» — однина" },
        { pl: "piegi", g: "pl", ru: "веснянки, ластовиння", ex: "Latem mam na nosie piegi.", exRu: "Улітку в мене на носі веснянки." },
        { pl: "pracowity", ru: "працьовитий", ex: "Moi rodzice zawsze byli bardzo pracowici.", exRu: "Мої батьки завжди були дуже працьовитими.", note: "мн. ч.-о. pracowici (t → ci)" },
        { pl: "uparty", ru: "упертий", ex: "Moi bracia są uparci jak osły.", exRu: "Мої брати вперті як віслюки.", note: "мн. ч.-о. uparci (t → ci)" },
        { pl: "nieśmiały", ru: "сором’язливий, несміливий", ex: "Na początku wszyscy byli trochę nieśmiali.", exRu: "Спочатку всі були трохи сором’язливі.", note: "мн. ч.-о. nieśmiali (ł → l)" },
        { pl: "gadatliwy", ru: "балакучий", ex: "Moje ciocie są strasznie gadatliwe.", exRu: "Мої тітки страшенно балакучі." },
        { pl: "życzliwy", ru: "доброзичливий", ex: "Ludzie w tym mieście są bardzo życzliwi.", exRu: "Люди в цьому місті дуже доброзичливі.", note: "мн. ч.-о. życzliwi; пор. укр. «зичливий», «зичити»" },
        { pl: "sympatyczny", ru: "приємний, милий (у спілкуванні)", ex: "Nowy szef jest bardzo sympatyczny.", exRu: "Новий начальник — дуже приємна людина.", note: "хибний друг: це про характер, а не про зовнішність; «симпатичний» зовні — ładny, przystojny" },
        { pl: "zarozumiały", ru: "зарозумілий, пихатий", ex: "Nie lubię zarozumiałych ludzi.", exRu: "Я не люблю зарозумілих людей.", note: "мн. ч.-о. zarozumiali; значення те саме, що в укр. «зарозумілий»" }
      ],
      grammar: {
        title: "Прикметники в множині і минулий час: -li / -ły",
        html: `<h4>Прикметники в множині</h4>
<p>Нечоловічо-особова форма завжди на <b>-e</b>: <span class="pl">miłe koleżanki, uparte koty, nowe mieszkania</span>. Чоловічо-особова — на <b>-i / -y</b> з тими самими чергуваннями, що й в іменників:</p>
<table class="g">
<tr><th>одн.</th><th>чоловічо-особовий</th><th>нечоловічо-особовий</th><th></th></tr>
<tr><td class="pl">dobry</td><td class="pl">dobrzy</td><td class="pl">dobre</td><td>r → rz</td></tr>
<tr><td class="pl">miły</td><td class="pl">mili</td><td class="pl">miłe</td><td>ł → l</td></tr>
<tr><td class="pl">wysoki</td><td class="pl">wysocy</td><td class="pl">wysokie</td><td>k → c</td></tr>
<tr><td class="pl">drogi</td><td class="pl">drodzy</td><td class="pl">drogie</td><td>g → dz</td></tr>
<tr><td class="pl">pracowity</td><td class="pl">pracowici</td><td class="pl">pracowite</td><td>t → ci</td></tr>
<tr><td class="pl">młody</td><td class="pl">młodzi</td><td class="pl">młode</td><td>d → dzi</td></tr>
<tr><td class="pl">cichy</td><td class="pl">cisi</td><td class="pl">ciche</td><td>ch → si</td></tr>
<tr><td class="pl">starszy</td><td class="pl">starsi</td><td class="pl">starsze</td><td>sz → si</td></tr>
<tr><td class="pl">ładny</td><td class="pl">ładni</td><td class="pl">ładne</td><td>n → ni</td></tr>
</table>
<div class="tip">Особливі випадки: <span class="pl">wesoły → weseli</span> (o → e), <span class="pl">zły → źli</span>, <span class="pl">niski → niscy</span>. Знайоме звертання <span class="pl">Drodzy Państwo!</span> — теж чоловічо-особова форма.</div>
<h4>Займенники</h4>
<table class="g">
<tr><th>чоловічо-особовий</th><th>нечоловічо-особовий</th></tr>
<tr><td class="pl">moi, twoi, nasi, wasi</td><td class="pl">moje, twoje, nasze, wasze</td></tr>
<tr><td class="pl">ci, tamci</td><td class="pl">te, tamte</td></tr>
<tr><td class="pl">wszyscy, tacy, którzy</td><td class="pl">wszystkie, takie, które</td></tr>
</table>
<p>А <span class="pl">jego, jej, ich</span> не змінюються: <span class="pl">jej bracia, jej siostry</span>. Чоловічо-особова форма потрібна і в присудку після <i>być</i>: <span class="pl">Ci panowie są bardzo mili.</span> — <span class="pl">Te panie są bardzo miłe.</span></p>
<h4>Минулий час у множині: -li / -ły</h4>
<table class="g">
<tr><th></th><th>чоловічо-особовий</th><th>нечоловічо-особовий</th></tr>
<tr><td>my</td><td class="pl">byliśmy</td><td class="pl">byłyśmy</td></tr>
<tr><td>wy</td><td class="pl">byliście</td><td class="pl">byłyście</td></tr>
<tr><td>oni / one</td><td class="pl">byli</td><td class="pl">były</td></tr>
</table>
<p>Перед <b>-li</b> у деяких дієслів змінюється голосний кореня — запам’ятайте пари:</p>
<table class="g">
<tr><th>інфінітив</th><th>oni</th><th>one</th></tr>
<tr><td class="pl">mieć</td><td class="pl">mieli</td><td class="pl">miały</td></tr>
<tr><td class="pl">jeść</td><td class="pl">jedli</td><td class="pl">jadły</td></tr>
<tr><td class="pl">widzieć</td><td class="pl">widzieli</td><td class="pl">widziały</td></tr>
<tr><td class="pl">móc</td><td class="pl">mogli</td><td class="pl">mogły</td></tr>
<tr><td class="pl">iść / pójść</td><td class="pl">szli / poszli</td><td class="pl">szły / poszły</td></tr>
<tr><td class="pl">wziąć</td><td class="pl">wzięli</td><td class="pl">wzięły</td></tr>
</table>
<div class="ex"><span class="pl">Babcia i dziadek byli w teatrze.</span> — Бабуся і дідусь були в театрі.</div>
<div class="ex"><span class="pl">Mama i ciocia poszły na zakupy.</span> — Мама з тіткою пішли на закупи.</div>
<div class="tip">В українській «вони були» — для всіх. У польській щоразу питайте себе: чи є в групі чоловік? Обережно з <span class="pl">dzieci</span>: це нечоловічо-особовий рід, навіть якщо йдеться про хлопчиків: <span class="pl">Dzieci były zmęczone.</span> А <span class="pl">ludzie, rodzice, państwo</span> — чоловічо-особові: <span class="pl">Ludzie byli mili.</span></div>`
      },
      exercises: [
        { type: "choice", q: "Moi bracia są bardzo ___.", options: ["wysocy", "wysokie", "wysoki"], answer: 0, explain: "bracia — чоловіки → чоловічо-особова форма: wysoki → wysocy (k → c)." },
        { type: "choice", q: "Dzieci ___ wczoraj w kinie.", options: ["były", "byli", "był"], answer: 0, explain: "dzieci — нечоловічо-особовий рід (навіть якщо це хлопчики) → były." },
        { type: "gap", q: "Nasi sąsiedzi są bardzo ___ (miły).", answers: ["mili"], explain: "ł → l: miły → mili. Форма miłe — для жінок, дітей, речей." },
        { type: "gap", q: "Ci piłkarze są strasznie ___ (zarozumiały).", answers: ["zarozumiali"], explain: "ł → l: zarozumiały → zarozumiali." },
        { type: "choice", q: "Marek i Ania ___ do Zakopanego.", options: ["pojechali", "pojechały", "pojechał"], answer: 0, explain: "У групі є чоловік → -li: pojechali." },
        { type: "gap", q: "Wczoraj Ania i Kasia ___ (zrobić) pyszną pizzę.", answers: ["zrobiły"], explain: "Лише жінки → -ły: zrobiły." },
        { type: "gap", q: "Ewa i Tomek ___ (jeść, przeszły) obiad w barze mlecznym.", answers: ["jedli"], explain: "jeść → jedli (ч.-о.), але jadły (неч.-о.): e / a чергуються. Bar mleczny — недорога польська їдальня." },
        { type: "match", q: "З’єднайте прикметник із чоловічо-особовою формою мн.", pairs: [["dobry", "dobrzy"], ["wysoki", "wysocy"], ["młody", "młodzi"], ["cichy", "cisi"], ["wesoły", "weseli"], ["starszy", "starsi"]], explain: "r → rz, k → c, d → dzi, ch → si, sz → si; у wesoły ще й o → e." },
        { type: "order", ru: "Усі мої друзі були дуже доброзичливими.", words: ["Wszyscy", "moi", "przyjaciele", "byli", "bardzo", "życzliwi."], alt: [], explain: "Усе в чоловічо-особовій формі: wszyscy, moi, byli, życzliwi." },
        { type: "translate", ru: "Мої сестри були в Кракові.", answers: ["Moje siostry były w Krakowie."], explain: "Сестри — нечоловічо-особовий рід: moje, były." }
      ],
      pronunciation: {
        focus: "-li / -ły на слух (byli / były)",
        tip: `<p>Різниця між чоловічо-особовим і нечоловічо-особовим родом у минулому часі тримається на одному складі:</p>
<ul>
<li><b>-li</b> — м’яке «ль» + «і», як в українському «лі»: <span class="pl">byli</span> ≈ [би́лі].</li>
<li><b>-ły</b> — <i>ł</i> вимовляється як англійське <i>w</i>, а <i>y</i> — як голосний у слові «дим»: <span class="pl">były</span> ≈ [би́ўи] — нескладове [ў], як «в» у словах «вовк», «знав». Губи округлюються, язик не торкається зубів.</li>
</ul>
<p>Та сама пара в прикметників: <span class="pl">mili</span> [мі́лі] — <span class="pl">miły</span> [мі́ўи]. Українцям тут легко: польське y звучить як голосний у «дим», а i — як у «дім». Наголос у <span class="pl">byli, były</span> — на перший склад, а в <span class="pl">byliśmy, zrobiliście</span> — на третій від кінця: <b>BY</b>-li-śmy, zro-<b>BI</b>-li-ście.</p>`,
        items: [
          { type: "minimal", options: ["byli", "były"], ru: ["були (ч.-о.)", "були (неч.-о.)"] },
          { type: "minimal", options: ["mili", "miły"], ru: ["милі (про чоловіків)", "милий"] },
          { type: "minimal", options: ["zrobili", "zrobiły"], ru: ["зробили (ч.-о.)", "зробили (неч.-о.)"] },
          { type: "listen", text: "Byliśmy w Gdańsku, a dziewczyny były w Sopocie.", ru: "Ми були в Гданську, а дівчата — в Сопоті." },
          { type: "listen", text: "Chłopcy byli mili, a dziewczyny były miłe.", ru: "Хлопці були милі, і дівчата були милі.", note: "порівняйте -li і -ły в одній фразі" },
          { type: "stress", word: "zrobiliście", syllables: ["zro", "bi", "li", "ście"], answer: 1 },
          { type: "dictation", text: "Wczoraj byli u nas sąsiedzi, a ich córki były w kinie." }
        ]
      },
      reading: {
        title: "Dwadzieścia lat później",
        text: "W sobotę w Toruniu odbyło się spotkanie naszej klasy z liceum – dwadzieścia lat po maturze. Bardzo się denerwowałam. Czy wszyscy mnie poznają? Czy ja poznam ich?\n\nNajpierw zobaczyłam chłopaków. W szkole byli chudzi, nieśmiali i mieli długie włosy, bo wszyscy chcieli wyglądać jak gwiazdy rocka. Teraz niektórzy są łysi, a inni mają brody i wąsy. Piotrek, który w szkole w ogóle się nie odzywał, był strasznie gadatliwy i cały wieczór opowiadał o swojej firmie. Tylko Michał wyglądał prawie tak samo: szczupły, przystojny, z kręconymi włosami. Dziewczyny szeptały, że chyba ma portret na strychu, jak Dorian Gray.\n\nDziewczyny też się zmieniły. Kiedyś były szalone i głośne, a teraz są spokojne i eleganckie. Ewa i Kaśka przyjechały aż z Londynu. Opowiadały, że Anglicy są bardzo życzliwi, ale strasznie brakuje im polskiego chleba.\n\nNajwiększą niespodzianką byli nasi nauczyciele. Przyszli pan Zieliński od matematyki i pani Nowak od polskiego. Byli tak samo surowi jak dawniej: pan Zieliński od razu zapytał Piotrka, czy w końcu nauczył się ułamków. Wszyscy się śmialiśmy, nawet Piotrek.\n\nDo domu wróciłam o trzeciej w nocy. Byliśmy zmęczeni, ale bardzo szczęśliwi. Za pięć lat spotykamy się znowu – tym razem nad morzem.",
        glossary: [
          { pl: "maturze", ru: "випускних іспитах (матурі; ≈ укр. НМТ)" },
          { pl: "się nie odzywał", ru: "не озивався, мовчав" },
          { pl: "szeptały", ru: "шепотілися" },
          { pl: "strychu", ru: "горищі" },
          { pl: "brakuje im", ru: "їм бракує" },
          { pl: "niespodzianką", ru: "несподіванкою, сюрпризом" },
          { pl: "surowi", ru: "суворі" },
          { pl: "ułamków", ru: "дробів" }
        ],
        questions: [
          { type: "tf", q: "Na spotkanie przyszli też nauczyciele.", answer: true, explain: "«Przyszli pan Zieliński od matematyki i pani Nowak od polskiego»." },
          { type: "choice", q: "Jak wyglądali chłopcy w szkole?", options: ["Byli łysi i mieli brody.", "Byli chudzi i mieli długie włosy.", "Byli grubi i mieli krótkie włosy."], answer: 1, explain: "«W szkole byli chudzi, nieśmiali i mieli długie włosy»." },
          { type: "tf", q: "Piotrek zawsze był bardzo gadatliwy.", answer: false, explain: "У школі він «w ogóle się nie odzywał», балакучим став лише тепер." },
          { type: "choice", q: "Czego brakuje Ewie i Kaśce w Londynie?", options: ["polskiego chleba", "życzliwych ludzi", "rodziny"], answer: 0, explain: "«strasznie brakuje im polskiego chleba»." },
          { type: "choice", q: "Dlaczego w zdaniu „Przyszli pan Zieliński i pani Nowak” jest forma „przyszli”?", options: ["Bo w grupie jest mężczyzna.", "Bo pani Nowak jest starsza.", "Bo to forma grzecznościowa."], answer: 0, explain: "Один чоловік у групі → чоловічо-особова форма -li." }
        ]
      },
      writing: {
        prompt: "Напишіть листа подрузі або другові: ви нещодавно зустрілися з колишніми однокласниками (колегами, сусідами), яких давно не бачили. Розкажіть: 1) де і коли була зустріч; 2) якими чоловіки були раніше і які вони тепер (зовнішність, характер); 3) як змінилися жінки; 4) як минув вечір. Використовуйте byli / były і чоловічо-особові форми прикметників.",
        minWords: 80,
        maxWords: 140,
        useWords: ["szczupły", "uparty", "życzliwy", "przystojny"],
        checklist: [
          { label: "Щонайменше 3 форми мн. на -li (byli, zmienili, szczupli…)", pattern: "\\p{L}+li(śmy|ście)?(?!\\p{L})", min: 3 },
          { label: "Щонайменше 2 форми мн. на -ły (były, wyglądały…)", pattern: "\\p{L}+ły(śmy|ście)?(?!\\p{L})", min: 2 }
        ],
        model: "Cześć Ola!\nW sobotę byłam na spotkaniu z ludźmi z mojej dawnej pracy w Gdyni. Nie widzieliśmy się od pięciu lat! Panowie bardzo się zmienili. Kiedyś byli szczupli i nieśmiali, a teraz są pewni siebie i niektórzy mają brzuszki. Tomek zapuścił brodę i wygląda jak drwal, ale nadal jest przystojny. Marcin i Adam zawsze byli uparci i dalej tacy są – cały wieczór dyskutowali o polityce. Panie wyglądały świetnie. Kasia i Monika obcięły włosy i były bardzo eleganckie. Wszyscy byli dla siebie bardzo życzliwi i obiecaliśmy sobie, że spotkamy się znowu w wakacje.\nBuziaki,\nAnia"
      }
    },

    // ───────────────────────── УРОК 3 ─────────────────────────
    {
      id: "m07l3",
      title: "Znam tych ludzi",
      titleRu: "Знахідний і родовий відмінки мн.",
      topic: "Relacje",
      review: false,
      minutes: 30,
      goals: [
        "Уживати знахідний відмінок мн.: чоловічо-особовий = родовому (widzę studentów), решта = називному (widzę studentki)",
        "Утворювати родовий відмінок мн.: -ów, -y / -i, нульове закінчення (kobiet, koleżanek)",
        "Відмінювати ludzie, dzieci, przyjaciele, bracia і розрізняти займенники ich / je",
        "Говорити про стосунки: сварки, примирення, довіру"
      ],
      vocab: [
        { pl: "związek", g: "m", ru: "стосунки (пара); союз", ex: "Są w związku od trzech lat.", exRu: "Вони разом вже три роки.", note: "być w związku — бути у стосунках; укр. «зв’язок» тут не підходить" },
        { pl: "narzeczony", g: "m", ru: "наречений (після заручин)", ex: "Mój narzeczony pochodzi z Białegostoku.", exRu: "Мій наречений родом із Білостока.", note: "narzeczona — наречена; мн. narzeczeni — наречені (він і вона). На самому весіллі: pan młody, panna młoda" },
        { pl: "małżeństwo", g: "n", ru: "шлюб; подружжя", ex: "Moi dziadkowie są małżeństwem od pięćdziesięciu lat.", exRu: "Мої бабуся й дідусь — подружжя вже п’ятдесят років." },
        { pl: "zakochać się", ru: "закохатися", ex: "Zakochał się w koleżance z pracy.", exRu: "Він закохався в колегу з роботи.", note: "w kimś — з місцевим відмінком! (укр. «в кого» — знахідний)" },
        { pl: "kłócić się / pokłócić się", ru: "сваритися / посваритися", ex: "Moi sąsiedzi ciągle się kłócą.", exRu: "Мої сусіди постійно сваряться.", note: "z kimś o coś (укр. «через щось»): kłócić się z bratem o pieniądze" },
        { pl: "godzić się / pogodzić się", ru: "миритися / помиритися", ex: "Pokłócili się, ale szybko się pogodzili.", exRu: "Вони посварилися, але швидко помирилися.", note: "godzić się na coś — погоджуватися на щось" },
        { pl: "ufać", ru: "довіряти", ex: "Ufam swoim przyjaciołom.", exRu: "Я довіряю своїм друзям.", note: "komuś — з давальним: ufać ludziom" },
        { pl: "szanować", ru: "поважати, шанувати", ex: "Szanuję moich rodziców.", exRu: "Я поважаю своїх батьків.", note: "szanuję, szanujesz" },
        { pl: "dogadywać się / dogadać się", ru: "ладнати, знаходити спільну мову; домовитися", ex: "Świetnie dogaduję się z teściową.", exRu: "Я чудово ладнаю зі свекрухою.", note: "розм.; z kimś. Не плутайте з укр. «догадатися»" },
        { pl: "wspierać", ru: "підтримувати", ex: "Przyjaciele zawsze mnie wspierają.", exRu: "Друзі завжди мене підтримують." },
        { pl: "zazdrosny", ru: "ревнивий; заздрісний", ex: "Jest zazdrosny o każdego kolegę.", exRu: "Він ревнує до кожного товариша.", note: "o kogoś / o coś — зі знахідним" },
        { pl: "rozstać się", ru: "розстатися, розійтися", ex: "Rozstali się po pięciu latach.", exRu: "Вони розійшлися через п’ять років.", note: "rozstanę się, rozstaniesz się" },
        { pl: "rozwód", g: "m", ru: "розлучення", ex: "Wzięli rozwód w zeszłym roku.", exRu: "Вони розлучилися минулого року.", note: "wziąć rozwód — розлучитися" }
      ],
      grammar: {
        title: "Знахідний і родовий відмінки множини",
        html: `<h4>Знахідний мн.: одне питання вирішує все</h4>
<p>Є в групі чоловік? <b>Так</b> → знахідний = <b>родовому</b>. <b>Ні</b> → знахідний = <b>називному</b>.</p>
<table class="g">
<tr><th>Kto to jest? (наз. в.)</th><th>Kogo / co widzisz? (знах. в.)</th></tr>
<tr><td class="pl">ci studenci</td><td class="pl">widzę tych studentów</td></tr>
<tr><td class="pl">moi bracia</td><td class="pl">kocham moich braci</td></tr>
<tr><td class="pl">nowi koledzy</td><td class="pl">lubię nowych kolegów</td></tr>
<tr><td class="pl">te studentki</td><td class="pl">widzę te studentki</td></tr>
<tr><td class="pl">moje siostry</td><td class="pl">kocham moje siostry</td></tr>
<tr><td class="pl">małe psy</td><td class="pl">lubię małe psy</td></tr>
</table>
<div class="tip">Головна пастка: в українській «бачу студенток, люблю собак» — для людей (а часто й для тварин) знахідний = родовому. У польській — лише для чоловіків! <span class="pl">Widzę studentki. Lubię psy.</span> Те саме із займенником: <span class="pl">Znasz moich braci? – Znam ich.</span>, але <span class="pl">Znasz moje siostry? – Znam je.</span></div>
<h4>Родовий мн.</h4>
<table class="g">
<tr><th>закінчення</th><th>коли</th><th>приклади</th></tr>
<tr><td>-ów</td><td>більшість чоловічих на твердий приголосний</td><td class="pl">studentów, Polaków, synów, Niemców</td></tr>
<tr><td>-y / -i</td><td>чоловічі на м’який і -sz, -cz, -rz, -l</td><td class="pl">lekarzy, nauczycieli, gości</td></tr>
<tr><td>нульове</td><td>жіночі на -a і середні</td><td class="pl">kobiet, małżeństw, okien</td></tr>
<tr><td>-i / -y</td><td>жіночі на м’який приголосний</td><td class="pl">wiadomości, rzeczy, nocy</td></tr>
</table>
<div class="tip">При нульовому закінченні часто з’являється <b>e</b> або <b>o → ó</b> — як в українському «сестер, вікон»: <span class="pl">koleżanka → koleżanek, córka → córek, siostra → sióstr, okno → okien</span>.</div>
<p>Прикметники й займенники в род. в. мн. (і в знах. в. чоловічо-особового) — <b>-ych / -ich</b> для всіх родів (пор. укр. «-их»): <span class="pl">tych miłych ludzi, moich starszych sióstr, wszystkich nowych koleżanek</span>.</p>
<h4>Особливі слова</h4>
<table class="g">
<tr><th></th><th>люди</th><th>діти</th><th>друзі</th><th>брати</th></tr>
<tr><td>наз. в.</td><td class="pl">ludzie</td><td class="pl">dzieci</td><td class="pl">przyjaciele</td><td class="pl">bracia</td></tr>
<tr><td>род. в. = знах. в.</td><td class="pl">ludzi</td><td class="pl">dzieci</td><td class="pl">przyjaciół</td><td class="pl">braci</td></tr>
<tr><td>оруд. в.</td><td class="pl">ludźmi</td><td class="pl">dziećmi</td><td class="pl">przyjaciółmi</td><td class="pl">braćmi</td></tr>
</table>
<div class="ex"><span class="pl">Nie ma tu ludzi.</span> — Тут немає людей.</div>
<div class="ex"><span class="pl">Lubię spotykać się z ludźmi.</span> — Я люблю зустрічатися з людьми.</div>
<div class="tip">Не плутайте три форми: <span class="pl">ludzie</span> (хто? — люди), <span class="pl">ludzi</span> (кого? — людей), <span class="pl">ludźmi</span> (з ким? — з людьми). І ще одна пастка керування: <span class="pl">zakochać się w kimś</span> — з місцевим відмінком: <span class="pl">Zakochał się w Ani</span>, а не «в Аню», як в українській.</div>`
      },
      exercises: [
        { type: "choice", q: "Na imprezie poznałam nowe ___.", options: ["koleżanki", "koleżanek", "koleżankami"], answer: 0, explain: "Жінки → знахідний = називному: poznałam nowe koleżanki. Українською «нових подруг», але в польській так лише для чоловіків." },
        { type: "choice", q: "Znasz moje siostry? – Tak, znam ___.", options: ["je", "ich", "ją"], answer: 0, explain: "je — про жінок, дітей, речі; ich — про чоловіків і змішані групи." },
        { type: "choice", q: "Wczoraj widziałam twoich ___ w parku.", options: ["braci", "bracia", "braćmi"], answer: 0, explain: "Чоловіки → знах. в. = род. в.: bracia → braci." },
        { type: "gap", q: "Szanuję moich ___ (rodzice).", answers: ["rodziców"], explain: "rodzice — чоловічо-особова форма, тому знах. в. = род. в.: rodziców." },
        { type: "gap", q: "W tym klubie nie ma młodych ___ (ludzie).", answers: ["ludzi"], explain: "nie ma + род. в.: ludzie → ludzi." },
        { type: "gap", q: "Lubię rozmawiać z ___ (ludzie).", answers: ["ludźmi"], explain: "z + оруд. в.: ludźmi (dź перед m)." },
        { type: "gap", q: "W tym mieście nie mam ___ (przyjaciele).", answers: ["przyjaciół"], explain: "Род. в. мн.: przyjaciół — з ó, без закінчення -ów." },
        { type: "match", q: "З’єднайте наз. в. одн. з род. в. мн.", pairs: [["kobieta", "kobiet"], ["siostra", "sióstr"], ["nauczyciel", "nauczycieli"], ["Polak", "Polaków"], ["dziecko", "dzieci"], ["małżeństwo", "małżeństw"]], explain: "Жіночий і середній рід — нульове закінчення (sióstr: o → ó); чоловічий твердий — -ów; м’який — -i." },
        { type: "order", ru: "Я дуже добре ладнаю зі своїми братами.", words: ["Bardzo", "dobrze", "dogaduję", "się", "z", "moimi", "braćmi."], alt: ["Bardzo dobrze się dogaduję z moimi braćmi.", "Dogaduję się bardzo dobrze z moimi braćmi.", "Z moimi braćmi bardzo dobrze się dogaduję.", "Z moimi braćmi dogaduję się bardzo dobrze."], explain: "dogadywać się z kimś + оруд. в.: z moimi braćmi." },
        { type: "translate", ru: "Тут немає дітей.", answers: ["Tu nie ma dzieci.", "Nie ma tu dzieci.", "Tutaj nie ma dzieci.", "Nie ma tutaj dzieci."], explain: "nie ma + род. в.; у dzieci наз. в. і род. в. збігаються." }
      ],
      pronunciation: {
        focus: "ludzie, ludźmi, dzieci — ź / dź / ci",
        tip: `<p>У словах <span class="pl">ludzie, ludźmi, dzieci</span> — м’які звуки, яких в українській у чистому вигляді немає:</p>
<ul>
<li><b>dź</b> (перед голосним пишеться <i>dzi</i>): <span class="pl">ludzie, dzieci</span> — злитне м’яке «дзь», як в укр. «дзьоб», але з легким відтінком «дж’»; кінчик язика внизу. Не кажіть «люди» з українським твердим «д»!</li>
<li><b>dź + m</b>: <span class="pl">ludźmi</span> [лю́дж’мі] — м’якість зберігається і перед приголосним.</li>
<li><b>ć</b> (перед голосним — <i>ci</i>): <span class="pl">dzieci</span> — м’який звук між «ць» і «ч»: [дж’е́ч’і].</li>
</ul>
<p>Порівняйте з твердими звуками: <i>dz</i> у <span class="pl">koledzy</span> (як укр. «дз» у «дзвін»), <i>cz</i> у <span class="pl">czy</span> (як укр. «ч» у «чи»). І не плутайте закінчення: <span class="pl">ludzie</span> [-дж’е] — <span class="pl">ludzi</span> [-дж’і].</p>`,
        items: [
          { type: "listen", text: "ludzie, ludzi, ludźmi", ru: "люди, людей, з людьми", note: "три форми — три різні закінчення" },
          { type: "listen", text: "dzieci, z dziećmi", ru: "діти, з дітьми" },
          { type: "minimal", options: ["ludzie", "ludzi"], ru: ["люди", "людей"] },
          { type: "minimal", options: ["płaci", "płacy"], ru: ["платить", "платні (род. в. від płaca)"] },
          { type: "minimal", options: ["ci", "czy"], ru: ["ці (ч.-о.)", "чи (питальна частка)"] },
          { type: "stress", word: "przyjaciółmi", syllables: ["przy", "ja", "ciół", "mi"], answer: 2 },
          { type: "dictation", text: "Ci ludzie spędzają weekendy z dziećmi i przyjaciółmi." }
        ]
      },
      reading: {
        title: "Mój narzeczony nie lubi moich przyjaciół",
        text: "Droga Redakcjo,\n\nmam dwadzieścia osiem lat i od dwóch lat jestem w związku z Damianem. W maju bierzemy ślub. Damian jest pracowity i czuły, ale ma jeden problem: nie znosi moich przyjaciół. Kiedy spotykam się z ludźmi z mojej dawnej klasy, Damian jest zazdrosny i obrażony. Mówi, że moi koledzy to „wieczni studenci”, a moje koleżanki tylko plotkują.\n\nNajgorzej jest z Kubą i Olkiem. Znam ich od przedszkola i ufam im jak braciom. Damian twierdzi, że oni mnie nie szanują, bo zawsze się spóźniają. Ostatnio pokłóciliśmy się o to, czy zaprosić ich na wesele. Ja chcę zaprosić wszystkich przyjaciół, a Damian woli tylko krewnych i kolegów z pracy. Moja mama mówi, że nie ma idealnych mężczyzn i że mam przestać dramatyzować. Co mam robić?\n\nZrozpaczona Marta z Łodzi\n\nDroga Marto,\n\nw każdym związku są trudne chwile. Porozmawiaj z Damianem spokojnie, bez wyrzutów. Zaproś narzeczonego i przyjaciół na wspólną kolację – niech Damian pozna tych ludzi bliżej. Może zobaczy, że Kuba i Olek to dobrzy, życzliwi faceci, a nie rywale. I pamiętaj: dobry partner nie każe wybierać między sobą a przyjaciółmi. Jeśli się dogadacie, wesele będzie wspaniałe!",
        glossary: [
          { pl: "nie znosi", ru: "терпіти не може" },
          { pl: "obrażony", ru: "ображений" },
          { pl: "plotkują", ru: "пліткують" },
          { pl: "przedszkola", ru: "дитячого садка" },
          { pl: "wesele", ru: "весілля (свято)" },
          { pl: "Zrozpaczona", ru: "зневірена, у розпачі" },
          { pl: "wyrzutów", ru: "докорів" },
          { pl: "faceci", ru: "хлопці, чоловіки (розм.)" },
          { pl: "nie każe", ru: "не змушує, не велить (а не «не каже»!)" }
        ],
        questions: [
          { type: "tf", q: "Marta i Damian są już małżeństwem.", answer: false, explain: "«W maju bierzemy ślub» — поки що вони наречені (narzeczeni)." },
          { type: "choice", q: "Kogo Marta zna od przedszkola?", options: ["Kubę i Olka", "koleżanki z klasy", "kolegów Damiana"], answer: 0, explain: "«Najgorzej jest z Kubą i Olkiem. Znam ich od przedszkola»." },
          { type: "choice", q: "Kogo Damian chce zaprosić na wesele?", options: ["wszystkich przyjaciół Marty", "tylko krewnych i kolegów z pracy", "tylko Kubę i Olka"], answer: 1, explain: "«Damian woli tylko krewnych i kolegów z pracy»." },
          { type: "tf", q: "Mama Marty uważa, że córka przesadza.", answer: true, explain: "Мама каже, що Марта має «przestać dramatyzować»." },
          { type: "choice", q: "Co radzi redakcja?", options: ["Przełożyć ślub.", "Zorganizować wspólną kolację.", "Przestać spotykać się z przyjaciółmi."], answer: 1, explain: "«Zaproś narzeczonego i przyjaciół na wspólną kolację»." }
        ]
      },
      writing: {
        prompt: "Напишіть відповідь Марті (або в схожу «колонку порад»): 1) поспівчувайте; 2) розкажіть про схожу ситуацію з життя ваших знайомих; 3) дайте 2–3 поради. Використовуйте знахідний і родовий відмінки множини (moich przyjaciół, tych ludzi, kolegów z pracy, nie ma…).",
        minWords: 80,
        maxWords: 140,
        useWords: ["ufać", "szanować", "pogodzić się", "związek"],
        checklist: [
          { label: "Щонайменше 3 форми род. / знах. в. мн. (kolegów, wszystkich, ludzi, przyjaciół…)", pattern: "\\p{L}+(ów|ych|ich)(?!\\p{L})|(?<!\\p{L})(ludzi|przyjaciół|braci)(?!\\p{L})", min: 3 },
          { label: "Ужийте ludzi або ludźmi", pattern: "(?<!\\p{L})(ludzi|ludźmi)(?!\\p{L})", min: 1 }
        ],
        model: "Droga Marto,\ndobrze cię rozumiem. Moja siostra miała podobny problem: jej mąż nie lubił jej koleżanek ze studiów i był zazdrosny o kolegów z pracy. Kłócili się prawie co tydzień. W końcu siostra zaprosiła wszystkich znajomych na grilla. Jej mąż poznał tych ludzi bliżej i zobaczył, że jej koledzy to fajni, normalni faceci, a nie rywale. Dzisiaj gra z nimi w piłkę!\nMoja rada: porozmawiajcie spokojnie. Partnerzy w dobrym związku muszą się szanować i sobie ufać. Nie wybieraj między narzeczonym a przyjaciółmi – spróbuj pogodzić te dwa światy. Zaproś Kubę i Olka na kolację i pozwól Damianowi zobaczyć, że to dobrzy ludzie. Trzymam kciuki!\nEwa"
      }
    },

    // ───────────────────────── УРОК 4 ─────────────────────────
    {
      id: "m07l4",
      title: "Dwaj bracia, dwoje dzieci",
      titleRu: "Числівники: чоловічо-особові форми і збірні",
      topic: "Spotkania",
      review: false,
      minutes: 30,
      goals: [
        "Рахувати чоловіків: dwaj studenci / dwóch studentów, pięciu panów",
        "Узгоджувати дієслово: Przyszło pięciu gości (3 ос. одн., с. р.)",
        "Уживати збірні числівники: dwoje dzieci, troje przyjaciół",
        "Запрошувати, домовлятися про зустріч і емоційно реагувати (No coś ty! Serio?)"
      ],
      vocab: [
        { pl: "umawiać się / umówić się", ru: "домовлятися / домовитися (про зустріч)", ex: "Umówiłam się z Kasią na kawę w sobotę.", exRu: "Я домовилася з Касею випити кави в суботу.", note: "z kimś na coś: umówić się na randkę, na piwo" },
        { pl: "zapraszać / zaprosić", ru: "запрошувати / запросити", ex: "Zaprosiliśmy dziesięciu gości.", exRu: "Ми запросили десятьох гостей.", note: "na + знах. в.: zaprosić na urodziny, na kolację" },
        { pl: "gość", g: "m", ru: "гість", ex: "Goście przyszli punktualnie.", exRu: "Гості прийшли вчасно.", note: "мн. goście, род. мн. gości (не «gościów»)" },
        { pl: "gospodarz", g: "m", ru: "господар (дому, вечірки)", ex: "Gospodarz otworzył szampana.", exRu: "Господар відкрив шампанське.", note: "gospodyni — господиня; мн. gospodarze" },
        { pl: "parapetówka", g: "f", ru: "новосілля", ex: "W sobotę robimy parapetówkę!", exRu: "У суботу святкуємо новосілля!", note: "розм.; robić parapetówkę (від parapet — підвіконня)" },
        { pl: "imieniny", g: "pl", ru: "іменини", ex: "Na imieniny cioci Krysi przyszło piętnaście osób.", exRu: "На іменини тітки Кристини прийшло п’ятнадцять осіб.", note: "лише мн.; у Польщі їх святкують не менше, ніж день народження" },
        { pl: "zjazd", g: "m", ru: "зустріч (випускників, родини); з’їзд", ex: "Na zjeździe absolwentów spotkałem dawnych kolegów.", exRu: "На зустрічі випускників я побачив давніх товаришів.", note: "zjazd rodzinny, zjazd absolwentów; na zjeździe" },
        { pl: "towarzystwo", g: "n", ru: "компанія, товариство (люди)", ex: "W dobrym towarzystwie czas szybko leci.", exRu: "У доброму товаристві час швидко летить.", note: "компанія-фірма — firma" },
        { pl: "przyprowadzić", ru: "привести (з собою)", ex: "Czy mogę przyprowadzić koleżankę?", exRu: "Можна, я приведу подругу?", note: "недок. przyprowadzać; машиною — przywieźć" },
        { pl: "odwołać", ru: "скасувати; відкликати", ex: "Musimy odwołać spotkanie, bo Marek jest chory.", exRu: "Нам доведеться скасувати зустріч, бо Марек хворий.", note: "недок. odwoływać" },
        { pl: "wznieść toast", ru: "виголосити тост, підняти келих", ex: "Wznieśmy toast za gospodarzy!", exRu: "Піднімімо келихи за господарів!", note: "za + знах. в.; найкоротший тост — Na zdrowie!" },
        { pl: "wpaść", ru: "заскочити, зазирнути (в гості)", ex: "Wpadnij do nas w piątek wieczorem!", exRu: "Заскоч до нас у п’ятницю ввечері!", note: "розм.; wpadnę, wpadniesz; wpaść do kogoś" },
        { pl: "pogadać", ru: "побалакати, потеревенити", ex: "Musimy kiedyś pogadać przy piwie.", exRu: "Нам треба якось побалакати за пивом.", note: "розм.; gadać — балакати (не укр. «гадати»!)" }
      ],
      grammar: {
        title: "Числівники з чоловічо-особовими іменниками і збірні",
        html: `<p>Рахуючи людей, знову ставимо головне питання модуля: <b>лише чоловіки, лише жінки / предмети чи змішана група (діти)?</b></p>
<h4>Чоловіки: 2–4 — два варіанти</h4>
<table class="g">
<tr><th>варіант</th><th>форма</th><th>дієслово</th><th>приклад</th></tr>
<tr><td>A (книжніший)</td><td class="pl">dwaj, trzej, czterej + наз. в.</td><td>мн. (-li)</td><td class="pl">Dwaj studenci przyszli.</td></tr>
<tr><td>B (частіше в мовленні)</td><td class="pl">dwóch, trzech, czterech + род. в.</td><td>3 ос. одн., с. р. (-ło)</td><td class="pl">Dwóch studentów przyszło.</td></tr>
</table>
<div class="tip">Не змішуйте варіанти: ✗ <i>dwaj studentów</i>, ✗ <i>dwóch studenci</i>, ✗ <i>dwóch studentów przyszli</i>. В українській теж є два шляхи: «два студенти прийшли» (≈ A) і «двоє студентів прийшло» (≈ B: так само родовий і дієслово в однині). Але у варіанті B польська вживає не збірний числівник, а dwóch / trzech / czterech.</div>
<h4>Чоловіки: 5 і більше</h4>
<p>Числівник на <b>-u</b> + род. в. мн. + дієслово в 3 ос. одн. (у минулому — с. р.): <span class="pl">pięciu panów, sześciu kolegów, dziesięciu gości, dwudziestu studentów</span>. Так само поводяться <span class="pl">kilku, kilkunastu, wielu, paru, ilu, tylu</span>. Форма на -u нагадує українське «п’ятьох, десятьох» (бачу п’ятьох студентів).</p>
<div class="ex"><span class="pl">Na imprezę przyszło dziesięciu gości.</span> — На вечірку прийшло десять гостей.</div>
<div class="ex"><span class="pl">Ilu kolegów zaprosiłeś?</span> — Скількох товаришів ти запросив?</div>
<h4>Порівняйте з жінками та предметами</h4>
<table class="g">
<tr><th></th><th>чоловіки</th><th>жінки / предмети</th></tr>
<tr><td>2–4</td><td class="pl">dwóch kolegów przyszło</td><td class="pl">dwie koleżanki przyszły</td></tr>
<tr><td>5+</td><td class="pl">pięciu kolegów przyszło</td><td class="pl">pięć koleżanek przyszło</td></tr>
</table>
<h4>Збірні: dwoje, troje, czworo, pięcioro…</h4>
<p>+ род. в. мн., дієслово в 3 ос. одн. (с. р.). Уживаються:</p>
<ul>
<li>зі словом <span class="pl">dzieci</span>: <span class="pl">Mamy troje dzieci.</span> (не ✗ <i>trzy dzieci</i>);</li>
<li>для змішаних груп: <span class="pl">dwoje studentów</span> = студент і студентка, <span class="pl">czworo przyjaciół</span>;</li>
<li>для малят тварин і деяких слів, що мають лише множину: <span class="pl">dwoje kociąt, troje drzwi</span> — як і в українській: двоє кошенят, троє дверей.</li>
</ul>
<div class="ex"><span class="pl">Dwoje dzieci bawiło się w ogrodzie.</span> — Двоє дітей гралося в саду.</div>
<p>Форми непрямих відмінків: <span class="pl">dwoje → dwojga, z dwojgiem</span>: <span class="pl">kolacja dla dwojga, matka z dwojgiem dzieci</span> (укр. «вечеря на двох», «мати з двома дітьми»).</p>
<div class="tip">Українське «двоє дітей» = <span class="pl">dwoje dzieci</span> — тут польська збігається з українською! Але українське «двоє чоловіків», «троє студентів» (самі чоловіки) — це <span class="pl">dwóch mężczyzn</span>, а не ✗ <i>dwoje mężczyzn</i>: із групою із самих чоловіків польські збірні числівники не вживаються. І дієслово: українською можна «прийшли п’ятеро», а польською лише <span class="pl">przyszło pięciu</span>.</div>`
      },
      exercises: [
        { type: "choice", q: "Na spotkanie przyszło ___ kolegów.", options: ["pięciu", "pięć", "pięcioma"], answer: 0, explain: "Чоловіки, 5+ → форма на -u: pięciu kolegów." },
        { type: "choice", q: "___ studenci czekają przed salą.", options: ["Dwaj", "Dwóch", "Dwoje"], answer: 0, explain: "studenci — наз. в., отже dwaj. З dwóch потрібен род. в.: dwóch studentów czeka. Dwoje (як укр. «двоє») — лише для змішаної групи і з род. в." },
        { type: "choice", q: "Mamy ___ dzieci: syna i dwie córki.", options: ["troje", "trzy", "trzech"], answer: 0, explain: "З dzieci — лише збірні числівники: troje dzieci (як укр. «троє дітей»)." },
        { type: "choice", q: "Dwóch kelnerów ___ do naszego stolika.", options: ["podeszło", "podeszli", "podeszły"], answer: 0, explain: "dwóch + род. в. → дієслово в 3 ос. одн., с. р.: podeszło." },
        { type: "gap", q: "Na parapetówkę przyszło ___ (sześć) gości.", answers: ["sześciu"], explain: "goście — чоловічо-особове слово → sześciu gości." },
        { type: "gap", q: "Czterech ___ (sąsiad) pomagało nam nieść szafę.", answers: ["sąsiadów"], explain: "czterech + род. в. мн.: sąsiadów; дієслово — pomagało." },
        { type: "gap", q: "Ilu ___ (gość) zaprosiłaś na imieniny?", answers: ["gości"], explain: "ilu + род. в. мн.: gość → gości." },
        { type: "match", q: "З’єднайте польське словосполучення з перекладом", pairs: [["pięć kobiet", "п’ять жінок"], ["pięciu mężczyzn", "п’ять чоловіків"], ["pięcioro dzieci", "п’ятеро дітей"], ["dwie koleżanki", "дві подруги"], ["dwóch kolegów", "два товариші"], ["dwoje przyjaciół", "двоє друзів (він і вона)"]], explain: "Жінки — pięć, dwie; чоловіки — pięciu, dwóch; діти й змішані групи — збірні." },
        { type: "order", ru: "На вечірку прийшло десять гостей.", words: ["Na", "imprezę", "przyszło", "dziesięciu", "gości."], alt: ["Dziesięciu gości przyszło na imprezę."], explain: "dziesięciu + род. в. мн., дієслово в с. р.: przyszło." },
        { type: "translate", ru: "У нас двоє дітей.", answers: ["Mamy dwoje dzieci."], explain: "dzieci + збірний числівник: dwoje dzieci — як і в українській." }
      ],
      pronunciation: {
        focus: "Емоційна інтонація: вигуки (No coś ty! Serio?)",
        tip: `<p>Польське розмовне мовлення сповнене коротких емоційних реакцій. Зміст передає насамперед <b>інтонація</b>:</p>
<ul>
<li><span class="pl">Serio?</span> / <span class="pl">Naprawdę?</span> — здивування: голос різко йде <b>вгору</b> до кінця.</li>
<li><span class="pl">No coś ty!</span> — «Та ти що!»: високий пік на <i>coś</i>, потім різке падіння. Виражає і здивування, і незгоду.</li>
<li><span class="pl">Ale super!</span>, <span class="pl">Nie wierzę!</span> — захват: широкий діапазон голосу, наголошений склад сильно виділений.</li>
<li><span class="pl">No nie!</span> — досада: нижче й протяжніше.</li>
</ul>
<p>Наголос і в емоціях лишається на передостанньому складі (на відміну від вільного українського наголосу): na-<b>PRAW</b>-dę, pa-ra-pe-<b>TÓW</b>-ka. Поляки вимовляють такі репліки дуже жваво й виразно — не бійтеся «переграти»!</p>`,
        items: [
          { type: "listen", text: "No coś ty!", ru: "Та ти що!", note: "пік на coś, потім падіння" },
          { type: "listen", text: "Serio? Naprawdę?", ru: "Серйозно? Справді?", note: "висхідна інтонація" },
          { type: "listen", text: "Ale super! Nie wierzę!", ru: "Оце класно! Не вірю!" },
          { type: "listen", text: "No nie! Znowu się spóźnił!", ru: "Ну ні! Знову він запізнився!", note: "досада: нижче й протяжніше" },
          { type: "stress", word: "naprawdę", syllables: ["na", "praw", "dę"], answer: 1 },
          { type: "stress", word: "parapetówka", syllables: ["pa", "ra", "pe", "tów", "ka"], answer: 3 },
          { type: "dictation", text: "Serio? Przyszło aż dwudziestu gości?" }
        ]
      },
      reading: {
        title: "Parapetówka na Pradze",
        text: "Kamil w końcu kupił kawalerkę na warszawskiej Pradze – dwadzieścia pięć metrów, ale własne! Postanowił zrobić parapetówkę i zaprosił sześciu kolegów z pracy oraz dwie przyjaciółki ze studiów. „Dziewięć osób to idealna liczba” – pomyślał.\n\nW sobotę o siódmej zadzwonił domofon. Przyszło trzech kolegów, ale nie sami: każdy przyprowadził dziewczynę. Potem przyjechała Ola, przyjaciółka ze studiów, z mężem i dwojgiem dzieci. – Nie mieliśmy z kim ich zostawić – wytłumaczyła.\n\n– No coś ty! Dzieci też? – zdziwił się Kamil, ale szybko schował wino i wyjął soki.\n\nO dziewiątej w mieszkaniu było już dwudziestu gości. Czterej koledzy z działu IT przynieśli konsolę i zorganizowali turniej na podłodze. Pięciu nieznajomych chłopaków twierdziło, że są „znajomymi znajomych”. Ludzie siedzieli na parapecie, w wannie i na schodach.\n\nO jedenastej ktoś zapukał. W drzwiach stali dwaj sąsiedzi z góry, pan Heniek i pan Stefan. – Serio? Muzyka o tej godzinie? – zapytał groźnie pan Heniek. Kamil zbladł. Ale sąsiedzi nie przyszli się kłócić. – Słyszeliśmy, że jest parapetówka. Możemy wznieść toast za nowego sąsiada? – Pan Stefan wyjął z kieszeni butelkę domowej wiśniówki.\n\nImpreza skończyła się o czwartej rano. Kamil policzył: było trzydziestu dwóch gości, dwoje dzieci i jeden pies. – Następną imprezę robię w parku – zdecydował.",
        glossary: [
          { pl: "kawalerkę", ru: "однокімнатну квартиру, студію" },
          { pl: "własne", ru: "власне, своє" },
          { pl: "schował", ru: "сховав" },
          { pl: "działu", ru: "відділу" },
          { pl: "parapecie", ru: "підвіконні (а не «парапеті»!)" },
          { pl: "zapukał", ru: "постукав" },
          { pl: "zbladł", ru: "зблід" },
          { pl: "wiśniówki", ru: "вишнівки (вишневої наливки)" }
        ],
        questions: [
          { type: "tf", q: "Kamil zaprosił na parapetówkę sześciu kolegów z pracy.", answer: true, explain: "«zaprosił sześciu kolegów z pracy oraz dwie przyjaciółki ze studiów»." },
          { type: "choice", q: "Z kim przyszła Ola?", options: ["z mężem i dwojgiem dzieci", "z trzema kolegami", "z psem"], answer: 0, explain: "«przyjechała Ola […] z mężem i dwojgiem dzieci»." },
          { type: "tf", q: "Wszyscy goście dobrze znali Kamila.", answer: false, explain: "П’ятеро незнайомих хлопців були «znajomymi znajomych»." },
          { type: "choice", q: "Po co przyszli sąsiedzi?", options: ["Chcieli się kłócić o muzykę.", "Chcieli wznieść toast za nowego sąsiada.", "Chcieli pożyczyć konsolę."], answer: 1, explain: "«Możemy wznieść toast za nowego sąsiada?»" },
          { type: "choice", q: "Gdzie Kamil chce zrobić następną imprezę?", options: ["w parku", "u sąsiadów", "w pracy"], answer: 0, explain: "«Następną imprezę robię w parku»." }
        ]
      },
      writing: {
        prompt: "Напишіть повідомлення в груповий чат друзів: ви запрошуєте їх на зустріч (новосілля, іменини чи гриль). Укажіть: 1) привід, коли і де; 2) скільки людей вже підтвердило і хто (числівники з чоловічо-особовими: dwóch kolegów, pięciu…, і збірні: dwoje…); 3) що взяти з собою; 4) попросіть відповісти до певного дня. Додайте хоча б один вигук.",
        minWords: 80,
        maxWords: 130,
        useWords: ["zaprosić", "gość", "przyprowadzić", "towarzystwo"],
        checklist: [
          { label: "Числівник із чоловіками (dwaj, dwóch, trzech, pięciu, kilku…)", pattern: "(?<!\\p{L})(dwaj|trzej|czterej|dwóch|trzech|czterech|pięciu|sześciu|siedmiu|ośmiu|dziewięciu|dziesięciu|kilku|wielu|paru)(?!\\p{L})", min: 1 },
          { label: "Збірний числівник (dwoje, troje, czworo…)", pattern: "(?<!\\p{L})(dwoje|troje|czworo|pięcioro|dwojga|trojga|dwojgiem|trojgiem)(?!\\p{L})", min: 1 },
          { label: "Хоча б один вигук (!)", pattern: "!", min: 1 }
        ],
        model: "Cześć wszystkim!\nW końcu mam własne mieszkanie, więc w sobotę 14 czerwca robię parapetówkę! Zapraszam od 18:00, ulica Długa 5, mieszkanie 12. Domofon nie działa, więc dzwońcie na komórkę. Na razie potwierdziło pięciu kolegów z pracy i dwie dziewczyny z kursu jogi. Ola przyprowadzi męża i dwoje dzieci, więc będzie wesoło! Możecie przyprowadzić swoje drugie połówki, ale napiszcie, ilu gości mam się spodziewać. Zaprosiłem też dwóch sąsiadów – wtedy nie będą narzekać na muzykę. Weźcie coś do picia, jedzenie załatwiam ja. Dobre towarzystwo gwarantowane!\nDajcie znać do czwartku!\nMichał"
      }
    },

    // ───────────────────────── УРОК 5 (ПОВТОРЕННЯ) ─────────────────────────
    {
      id: "m07l5",
      title: "Powtórka 7: Ludzie wokół nas",
      titleRu: "Повторення модуля 7",
      topic: "Sąsiedzi i społeczność",
      review: true,
      minutes: 30,
      goals: [
        "Повторити чоловічо-особовий рід: іменники, прикметники, займенники, минулий час",
        "Закріпити знахідний і родовий відмінки мн. (ludzi, przyjaciół, kobiet, je / ich)",
        "Упевнено рахувати людей: dwaj / dwóch, pięciu, dwoje",
        "Написати підсумковий текст про людей навколо вас"
      ],
      vocab: [
        { pl: "mieszkaniec", g: "m", ru: "мешканець", ex: "Mieszkańcy osiedla posadzili nowe drzewa.", exRu: "Мешканці мікрорайону посадили нові дерева.", note: "мн. mieszkańcy (-niec → -ńcy); mieszkanka — мешканка" },
        { pl: "nastolatek", g: "m", ru: "підліток", ex: "Nastolatkowie z naszego bloku grają w kosza na boisku.", exRu: "Підлітки з нашої багатоповерхівки грають у баскетбол на майданчику.", note: "мн. nastolatkowie, розм. nastolatki; nastolatka — дівчина-підліток" },
        { pl: "dorosły", g: "m", ru: "дорослий", ex: "Dorośli rozmawiali, a dzieci bawiły się w ogrodzie.", exRu: "Дорослі розмовляли, а діти гралися в саду.", note: "відмінюється як прикметник: мн. dorośli" },
        { pl: "emeryt", g: "m", ru: "пенсіонер", ex: "Emeryci z klubu seniora chodzą na nordic walking.", exRu: "Пенсіонери з клубу для літніх людей ходять на скандинавську ходьбу.", note: "emerytka — пенсіонерка; мн. emeryci (t → ci); emerytura — пенсія" },
        { pl: "wolontariusz", g: "m", ru: "волонтер", ex: "Wolontariusze WOŚP zbierają pieniądze dla szpitali.", exRu: "Волонтери WOŚP збирають гроші для лікарень.", note: "мн. wolontariusze; wolontariuszka. WOŚP — Великий оркестр святкової допомоги, щорічна акція в січні" },
        { pl: "współlokator", g: "m", ru: "сусід по квартирі", ex: "Moi współlokatorzy nigdy nie zmywają naczyń.", exRu: "Мої сусіди по квартирі ніколи не миють посуду.", note: "мн. współlokatorzy (r → rz); współlokatorka" },
        { pl: "tłum", g: "m", ru: "натовп", ex: "Na Rynku w Krakowie zawsze jest tłum turystów.", exRu: "На площі Ринок у Кракові завжди натовп туристів." },
        { pl: "samotny", ru: "самотній", ex: "Pan Józef jest samotny, więc często go odwiedzamy.", exRu: "Пан Юзеф самотній, тому ми часто його відвідуємо.", note: "мн. ч.-о. samotni" },
        { pl: "wychowywać / wychować", ru: "виховувати / виховати", ex: "Babcia sama wychowała czworo dzieci.", exRu: "Бабуся сама виховала четверо дітей." },
        { pl: "społeczność", g: "f", ru: "спільнота", ex: "Nasza osiedlowa społeczność ma grupę na Facebooku.", exRu: "Спільнота нашого мікрорайону має групу у Фейсбуці." }
      ],
      grammar: {
        title: "Підсумок модуля 7: чоловічо-особовий рід",
        html: `<p>Головне питання всього модуля: <b>чи є в групі чоловік?</b> Від відповіді залежать займенники, закінчення іменників і прикметників, дієслово в минулому часі, знахідний відмінок і числівники.</p>
<h4>1. Називний мн.</h4>
<table class="g">
<tr><th></th><th>чоловічо-особовий</th><th>нечоловічо-особовий</th></tr>
<tr><td>займенники</td><td class="pl">oni, ci, moi, nasi, wszyscy</td><td class="pl">one, te, moje, nasze, wszystkie</td></tr>
<tr><td>іменники</td><td class="pl">studenci, Polacy, aktorzy, synowie, lekarze</td><td class="pl">studentki, psy, okna</td></tr>
<tr><td>прикметники</td><td class="pl">dobrzy, mili, wysocy, młodzi</td><td class="pl">dobre, miłe, wysokie, młode</td></tr>
<tr><td>минулий час</td><td class="pl">byli, zrobili, jedli, mogli</td><td class="pl">były, zrobiły, jadły, mogły</td></tr>
</table>
<p>Чергування: t → ci, d → dzi, k → cy, g → dzy, r → rzy, ch → si, st → ści, -ec → -cy. Закінчення <b>-owie</b>: <span class="pl">synowie, panowie, profesorowie</span>. Винятки: <span class="pl">ludzie, bracia, przyjaciele, dzieci</span>. У минулому часі пам’ятайте про чергування перед -li: <span class="pl">mieli / miały, jedli / jadły, szli / szły, wzięli / wzięły</span>. І про «пастку»: <span class="pl">dzieci były</span>, але <span class="pl">ludzie byli, rodzice byli</span>.</p>
<h4>2. Знахідний і родовий мн.</h4>
<table class="g">
<tr><th></th><th>чоловічо-особовий</th><th>нечоловічо-особовий</th></tr>
<tr><td>знах. в.</td><td class="pl">widzę tych miłych studentów</td><td class="pl">widzę te miłe studentki</td></tr>
<tr><td>род. в.</td><td class="pl">nie ma tych miłych studentów</td><td class="pl">nie ma tych miłych studentek</td></tr>
<tr><td>займенник</td><td class="pl">znam ich</td><td class="pl">znam je</td></tr>
</table>
<p>Род. в. мн.: <b>-ów</b> (<span class="pl">kolegów</span>), <b>-y / -i</b> (<span class="pl">lekarzy, gości</span>), <b>нульове</b> (<span class="pl">kobiet, koleżanek, sióstr</span>). Особливі форми: <span class="pl">ludzie – ludzi – ludźmi</span>, <span class="pl">przyjaciele – przyjaciół</span>, <span class="pl">bracia – braci</span>.</p>
<h4>3. Числівники</h4>
<table class="g">
<tr><th></th><th>чоловіки</th><th>жінки / предмети</th><th>діти, змішані групи</th></tr>
<tr><td>2–4</td><td class="pl">dwaj koledzy przyszli / dwóch kolegów przyszło</td><td class="pl">dwie koleżanki przyszły</td><td class="pl">dwoje dzieci przyszło</td></tr>
<tr><td>5+</td><td class="pl">pięciu kolegów przyszło</td><td class="pl">pięć koleżanek przyszło</td><td class="pl">pięcioro dzieci przyszło</td></tr>
</table>
<p>Збірні відмінюються: <span class="pl">dwoje → dwojga → z dwojgiem</span> (<span class="pl">matka z dwojgiem dzieci</span>), а форма на -u слугує для чоловіків і знахідним, і родовим: <span class="pl">widzę pięciu kolegów, bez pięciu kolegów</span> (орудний: <span class="pl">z pięcioma kolegami</span>).</p>
<div class="tip">Три найчастіші помилки україномовних: 1) «бачу студенток» → ✗ <i>widzę studentek</i>, правильно <span class="pl">widzę studentki</span>; 2) ✗ <i>dzieci byli</i> → <span class="pl">dzieci były</span>; 3) ✗ <i>pięć kolegów</i> → <span class="pl">pięciu kolegów</span>. І суто «українська» пастка: «двоє колег» про самих чоловіків — це dwóch, а не dwoje.</div>`
      },
      exercises: [
        { type: "choice", q: "Ci ___ są z Czech.", options: ["turyści", "turysty", "turystowie"], answer: 0, explain: "st → ści: turysta → turyści." },
        { type: "gap", q: "Nasi ___ (współlokator) są z Hiszpanii.", answers: ["współlokatorzy"], explain: "r → rz + y: współlokator → współlokatorzy." },
        { type: "choice", q: "Moi dziadkowie są bardzo ___.", options: ["życzliwi", "życzliwe", "życzliwy"], answer: 0, explain: "dziadkowie — бабуся й дідусь, у групі є чоловік → życzliwi." },
        { type: "gap", q: "Te dziewczyny są bardzo ___ (wesoły).", answers: ["wesołe"], explain: "Жінки → нечоловічо-особова форма на -e: wesołe." },
        { type: "gap", q: "Ci chłopcy są bardzo ___ (wesoły).", answers: ["weseli"], explain: "Чоловіки → weseli: ł → l і o → e." },
        { type: "choice", q: "Wolontariusze ___ cały dzień na mrozie.", options: ["stali", "stały", "stało"], answer: 0, explain: "wolontariusze — чоловічо-особова форма → stali." },
        { type: "gap", q: "Wczoraj Ania i jej mama ___ (pójść) na spacer.", answers: ["poszły"], explain: "Лише жінки → poszły (ч.-о. — poszli)." },
        { type: "choice", q: "Znasz tych ___ z parteru?", options: ["mieszkańców", "mieszkańcy", "mieszkańcami"], answer: 0, explain: "Чоловічо-особовий знах. в. = род. в.: tych mieszkańców." },
        { type: "choice", q: "Kochasz swoje siostry? – Oczywiście, że ___ kocham!", options: ["je", "ich", "jej"], answer: 0, explain: "Сестри — нечоловічо-особовий рід → je." },
        { type: "gap", q: "W autobusie był tłum ___ (nastolatek).", answers: ["nastolatków"], explain: "tłum + род. в. мн.: nastolatków." },
        { type: "gap", q: "Na zebranie przyszło ___ (siedem) emerytów.", answers: ["siedmiu"], explain: "Чоловіки, 5+ → siedmiu emerytów, дієслово przyszło." },
        { type: "choice", q: "Moja siostra ma ___ dzieci.", options: ["czworo", "cztery", "czterech"], answer: 0, explain: "З dzieci — збірний числівник: czworo dzieci (укр. «четверо дітей»)." },
        { type: "match", q: "З’єднайте однину з наз. в. мн.", pairs: [["emeryt", "emeryci"], ["wolontariusz", "wolontariusze"], ["mieszkaniec", "mieszkańcy"], ["brat", "bracia"], ["człowiek", "ludzie"], ["dorosły", "dorośli"]], explain: "t → ci, -niec → -ńcy, м’які → -e; brat і człowiek — винятки; dorosły відмінюється як прикметник." },
        { type: "order", ru: "Двоє моїх товаришів прийшли з дітьми.", words: ["Dwóch", "moich", "kolegów", "przyszło", "z", "dziećmi."], alt: ["Z dziećmi przyszło dwóch moich kolegów."], explain: "Укр. «двоє» про самих чоловіків → dwóch (не dwoje!) + род. в. мн. (moich kolegów), дієслово в с. р.: przyszło; z dziećmi — оруд. в." },
        { type: "translate", ru: "Ці люди — наші сусіди.", answers: ["Ci ludzie to nasi sąsiedzi.", "Ci ludzie są naszymi sąsiadami."], explain: "ludzie — чоловічо-особова форма → ci, nasi; sąsiad → sąsiedzi." }
      ],
      pronunciation: {
        focus: "Повторення: чергування, -li / -ły, м’які приголосні, інтонація",
        tip: `<p>Повторюємо всі теми вимови модуля:</p>
<ul>
<li>чергування на слух: <span class="pl">mieszkaniec → mieszkańcy, Czech → Czesi</span>;</li>
<li><b>-li / -ły</b>: <span class="pl">chcieli</span> (м’яке «лі», як в українській) і <span class="pl">chciały</span> (<i>ł</i> = англійське <i>w</i>, нескладове [ў], як у слові «вовк»);</li>
<li>м’які <b>ś, ć, dź</b>: <span class="pl">Czesi, dzieci, ludzie</span> — не плутайте з твердими <i>sz, cz</i>: <span class="pl">wieś — wiesz</span>;</li>
<li>наголос на передостанній склад, навіть у довгих словах: <span class="pl">wolontariusze</span>;</li>
<li>емоційна інтонація: <span class="pl">No coś ty!</span> — пік на <i>coś</i> і різке падіння.</li>
</ul>`,
        items: [
          { type: "minimal", options: ["chcieli", "chciały"], ru: ["хотіли (ч.-о.)", "хотіли (неч.-о.)"] },
          { type: "minimal", options: ["wieś", "wiesz"], ru: ["село", "знаєш"] },
          { type: "stress", word: "wolontariusze", syllables: ["wo", "lon", "ta", "riu", "sze"], answer: 3 },
          { type: "stress", word: "mieszkańcy", syllables: ["miesz", "kań", "cy"], answer: 1 },
          { type: "listen", text: "No coś ty! Przyszło aż dwudziestu emerytów?", ru: "Та ти що! Прийшло аж двадцять пенсіонерів?" },
          { type: "listen", text: "Ludzie z naszego osiedla to wspaniali sąsiedzi.", ru: "Люди з нашого мікрорайону — чудові сусіди." },
          { type: "dictation", text: "Wolontariusze byli zmęczeni, ale bardzo szczęśliwi." }
        ]
      },
      reading: {
        title: "Blok, który stał się rodziną",
        text: "Jeszcze kilka lat temu mieszkańcy bloku przy ulicy Kasprowicza w Lublinie prawie się nie znali. Ludzie mijali się na klatce schodowej, mówili „dzień dobry” i szybko zamykali drzwi. Wszystko zmieniła pandemia. Dwaj studenci z czwartego piętra, Bartek i jego współlokator Jarek, powiesili w windzie kartkę: „Robimy zakupy dla seniorów. Dzwońcie!”. Pierwsza zadzwoniła pani Halina, samotna emerytka z parteru.\n\nDziś w osiedlowej grupie na Facebooku jest ponad dwustu członków. Sąsiedzi pożyczają sobie wiertarki, wymieniają się książkami i w wakacje pilnują nawzajem swoich kotów. Emeryci uczą nastolatków grać w szachy, a nastolatkowie pokazują starszym sąsiadom, jak płacić BLIK-iem i wysyłać zdjęcia wnukom.\n\nNajważniejszym wydarzeniem roku jest letni piknik na podwórku. W tym roku przyszło ponad stu sąsiadów. Panie z trzeciego piętra upiekły dwanaście ciast, a panowie z pierwszego rozpalili grilla. Pięciu wolontariuszy z pobliskiej parafii zorganizowało gry dla dzieci, a czworo studentów z Ukrainy i Gruzji ugotowało barszcz i chaczapuri. Dorośli rozmawiali przy stołach do późna, a dzieci biegały po całym podwórku.\n\nOczywiście nie zawsze jest idealnie. Zimą dwóch panów z pierwszego piętra pokłóciło się o miejsce na parkingu i przez miesiąc nie mówili sobie „dzień dobry”. Pogodzili się dopiero na sąsiedzkiej Wigilii, kiedy pani Halina posadziła ich przy stole obok siebie i postawiła przed nimi jeden talerz pierogów na dwóch.\n\n– Kiedyś byłam tu bardzo samotna – mówi pani Halina, która sama wychowała troje dzieci. – Moje dzieci i wnuki mieszkają w Anglii i w Gdańsku. A teraz mam tu drugą rodzinę: chłopcy z czwartego piętra wnoszą mi zakupy, a dziewczyny z drugiego zapraszają mnie na kawę.\n\nBartek i Jarek skończyli już studia, ale nie chcą się wyprowadzać.\n\n– Gdzie znajdziemy takich sąsiadów? – śmieje się Bartek. – W tłumie w centrum jesteś nikim. A tu nikt nie jest anonimowy, wszyscy cię znają.",
        glossary: [
          { pl: "mijali się", ru: "розминалися, проходили повз одне одного" },
          { pl: "klatce schodowej", ru: "сходовій клітці, у під’їзді" },
          { pl: "parteru", ru: "першого поверху (parter — перший поверх, pierwsze piętro — другий!)" },
          { pl: "wiertarki", ru: "дрилі" },
          { pl: "pilnują", ru: "пильнують, доглядають (за)" },
          { pl: "podwórku", ru: "подвір’ї" },
          { pl: "parafii", ru: "(католицької) парафії" },
          { pl: "rozpalili grilla", ru: "розпалили гриль" },
          { pl: "wyprowadzać", ru: "з’їжджати, виселятися (з квартири)" },
          { pl: "anonimowy", ru: "анонімний, непомітний" }
        ],
        questions: [
          { type: "tf", q: "Kiedyś mieszkańcy bloku dobrze się znali.", answer: false, explain: "«Jeszcze kilka lat temu mieszkańcy bloku […] prawie się nie znali»." },
          { type: "choice", q: "Kto pierwszy zadzwonił do studentów?", options: ["pani Halina", "pan z czwartego piętra", "wolontariusze z parafii"], answer: 0, explain: "«Pierwsza zadzwoniła pani Halina, samotna emerytka z parteru»." },
          { type: "choice", q: "Czego nastolatkowie uczą starszych sąsiadów?", options: ["grać w szachy", "płacić BLIK-iem i wysyłać zdjęcia", "piec ciasta"], answer: 1, explain: "Навпаки: пенсіонери вчать підлітків грати в шахи, а підлітки показують, як платити BLIK-ом і надсилати фото." },
          { type: "tf", q: "Na pikniku czworo studentów z zagranicy ugotowało jedzenie.", answer: true, explain: "«czworo studentów z Ukrainy i Gruzji ugotowało barszcz i chaczapuri»." },
          { type: "choice", q: "Dlaczego Bartek i Jarek nie chcą się wyprowadzać?", options: ["Bo mieszkanie jest bardzo tanie.", "Bo mają wspaniałych sąsiadów.", "Bo jeszcze studiują."], answer: 1, explain: "«Gdzie znajdziemy takich sąsiadów?» — а навчання вони вже закінчили." }
        ]
      },
      writing: {
        prompt: "Підсумковий твір модуля «Ludzie wokół mnie»: опишіть людей навколо вас — сусідів, сусідів по квартирі, друзів чи колег. 1) Хто вони і які (зовнішність, характер)? 2) Що ви нещодавно робили разом (минулий час, мн.)? 3) Скільки людей брало участь (числівники з людьми)? 4) Що для вас важливе у стосунках із людьми?",
        minWords: 100,
        maxWords: 150,
        useWords: ["mieszkaniec", "wolontariusz", "samotny", "społeczność"],
        checklist: [
          { label: "Щонайменше 3 дієслова минулого часу мн. (-li / -ły)", pattern: "\\p{L}+(li|ły)(śmy|ście)?(?!\\p{L})", min: 3 },
          { label: "Числівник із людьми (dwóch, pięciu, kilku, dwoje…)", pattern: "(?<!\\p{L})(dwaj|trzej|czterej|dwóch|dwoma|trzech|czterech|pięciu|sześciu|siedmiu|ośmiu|dziewięciu|dziesięciu|kilku|wielu|paru|dwoje|troje|czworo|pięcioro|dwojgiem|trojgiem)(?!\\p{L})", min: 1 },
          { label: "Щонайменше 2 форми род. / знах. в. мн. (sąsiadów, turystów, ludzi…)", pattern: "\\p{L}+(ów|ych|ich)(?!\\p{L})|(?<!\\p{L})(ludzi|przyjaciół|braci)(?!\\p{L})", min: 2 }
        ],
        model: "Ludzie wokół mnie\nMieszkam w Krakowie od trzech lat i mam szczęście do ludzi. Moi współlokatorzy, Hiszpan Diego i Polak Kuba, to weseli, trochę leniwi, ale bardzo życzliwi faceci. Często razem gotujemy i oglądamy mecze.\nBardzo lubię też naszych sąsiadów. Mieszkańcy naszej kamienicy to głównie starsi ludzie. Pani Zofia jest samotna, więc w niedzielę często pijemy u niej herbatę. Na parterze mieszka małżeństwo z dwojgiem dzieci – dzieci są głośne, ale urocze. Czuję, że jesteśmy małą społecznością.\nW styczniu razem z dwoma kolegami byliśmy wolontariuszami podczas finału WOŚP. Staliśmy na mrozie osiem godzin! Dorośli i dzieci wrzucali pieniądze do puszek, a kilku turystów z Niemiec zrobiło sobie z nami zdjęcia. Byliśmy zmęczeni, ale bardzo szczęśliwi.\nDla mnie najważniejsi są ludzie, którym mogę ufać."
      }
    }
  ]
});
