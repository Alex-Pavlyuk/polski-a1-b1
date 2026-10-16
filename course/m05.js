// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m05",
  n: 5,
  level: "A2",
  title: "Miasto i podróże",
  titleRu: "Місто і поїздки",
  summary: "Ви навчитеся розповідати, де ви перебуваєте й куди йдете чи їдете: місцевий відмінок із чергуваннями (w Krakowie, na poczcie), дієслова руху idę/chodzę, jadę/jeżdżę, lecę/latam та питання про дорогу.",
  lessons: [

    // ───────────────────────── Урок 1 ─────────────────────────
    {
      id: "m05l1",
      title: "We Wrocławiu, na rynku",
      titleRu: "Місцевий відмінок: w / na + чергування",
      topic: "Moje miasto",
      review: false,
      minutes: 30,
      goals: [
        "Відповідати на питання Gdzie? за допомогою w / na + місцевий відмінок",
        "Засвоїти закінчення -e (з чергуванням), -u та -i/-y",
        "Не плутати w і na з містами, районами й відкритими місцями",
        "Розповісти, де ви живете і що є у вашому районі"
      ],

      vocab: [
        { pl: "dzielnica", g: "f", ru: "район (міста)", ex: "Mokotów to duża dzielnica Warszawy.", exRu: "Мокотув — великий район Варшави." },
        { pl: "okolica", g: "f", ru: "околиця, навколишня місцевість", ex: "W okolicy jest dużo sklepów.", exRu: "Поблизу багато магазинів.", note: "w okolicy — поблизу, у цьому районі (не «на околиці»!)" },
        { pl: "osiedle", g: "n", ru: "житловий масив, житловий комплекс", ex: "Mieszkam na nowym osiedlu.", exRu: "Я живу в новому житловому комплексі.", note: "з прийменником na: na osiedlu (пор. укр. «на масиві»)" },
        { pl: "kamienica", g: "f", ru: "кам’яниця (старий багатоквартирний будинок, XIX–XX ст.)", ex: "Moja babcia mieszka w kamienicy w centrum.", exRu: "Моя бабуся живе в кам’яниці в центрі." },
        { pl: "wieżowiec", g: "m", ru: "висотка, хмарочос", ex: "Pracuję w wieżowcu na trzydziestym piętrze.", exRu: "Я працюю у висотці на тридцятому поверсі.", note: "w wieżowcu — випадне e" },
        { pl: "rynek", g: "m", ru: "центральна (ринкова) площа", ex: "Wieczorem na rynku gra muzyka.", exRu: "Увечері на площі грає музика.", note: "na rynku (не *rynke!), як укр. «на ринку»; пор. площу Ринок у Львові" },
        { pl: "ratusz", g: "m", ru: "ратуша", ex: "W ratuszu jest muzeum miasta.", exRu: "У ратуші розташований музей міста." },
        { pl: "zabytek", g: "m", ru: "пам’ятка історії та архітектури", ex: "W Krakowie jest wiele zabytków.", exRu: "У Кракові багато історичних пам’яток.", note: "хибний друг: не «забутий»! Укр. «пам’ятка» = zabytek, «пам’ятник» = pomnik" },
        { pl: "pomnik", g: "m", ru: "пам’ятник (монумент, статуя)", ex: "Na rynku stoi pomnik Adama Mickiewicza.", exRu: "На площі стоїть пам’ятник Адамові Міцкевичу." },
        { pl: "most", g: "m", ru: "міст", ex: "Na moście jest dużo turystów.", exRu: "На мосту багато туристів.", note: "na moście (st → ści)" },
        { pl: "brzeg", g: "m", ru: "берег", ex: "Latem siedzimy na brzegu Wisły.", exRu: "Улітку ми сидимо на березі Вісли." },
        { pl: "bulwar", g: "m", ru: "набережна, бульвар", ex: "Na bulwarze jest dużo knajpek.", exRu: "На набережній багато кафе й барів.", note: "na bulwarze (r → rz)" },
        { pl: "dworzec", g: "m", ru: "вокзал", ex: "Czekam na ciebie na dworcu.", exRu: "Я чекаю на тебе на вокзалі.", note: "na dworcu — випадне e" }
      ],

      grammar: {
        title: "Miejscownik (місцевий відмінок) одн.: w / na + Gdzie?",
        html: `<p><b>Miejscownik</b> — місцевий відмінок; навіть назва та сама (від <span class="pl">miejsce</span> — місце). Він відповідає на питання <span class="pl">o kim? o czym?</span>, а з прийменниками <span class="pl">w</span> і <span class="pl">na</span> — на питання <span class="pl">Gdzie?</span> (Де?). Як і в українській, без прийменника він не вживається.</p>
<h4>1. Закінчення -e + чергування приголосного</h4>
<p>Іменники з твердою основою отримують <b>-e</b>, а останній приголосний пом’якшується. Для українців це знайома річ: у нас теж <i>рука → у руці, нога → на нозі, муха → на мусі</i> (к → ц, г → з, х → с). У польській так само: <span class="pl">rzeka → na rzece</span> (пор. укр. <i>річка → на річці</i>), тільки g дає не «з», а <b>dz</b>: <span class="pl">Praga → w Pradze</span> (укр. <i>у Празі</i>).</p>
<table class="g"><tr><th>чергування</th><th>хто? що?</th><th>де?</th></tr>
<tr><td>k → c (ж. р.)</td><td class="pl">rzeka, Polska</td><td class="pl">na rzece, w Polsce</td></tr>
<tr><td>g → dz (ж. р.)</td><td class="pl">Praga, noga</td><td class="pl">w Pradze, na nodze</td></tr>
<tr><td>r → rz</td><td class="pl">teatr, góra</td><td class="pl">w teatrze, na górze</td></tr>
<tr><td>t → ci</td><td class="pl">poczta, kot</td><td class="pl">na poczcie, o kocie</td></tr>
<tr><td>st → ści</td><td class="pl">miasto, most</td><td class="pl">w mieście, na moście</td></tr>
<tr><td>d → dzi</td><td class="pl">woda, ogród</td><td class="pl">w wodzie, w ogrodzie</td></tr>
<tr><td>ł → l, sł → śl</td><td class="pl">szkoła, Wisła</td><td class="pl">w szkole, na Wiśle</td></tr>
<tr><td>b, p, w, m, n, s → + i</td><td class="pl">klub, sklep, Kraków, film, las</td><td class="pl">w klubie, w sklepie, w Krakowie, w filmie, w lesie</td></tr>
</table>
<p>Іноді змінюється й голосний: <span class="pl">miasto → w mieście</span>, <span class="pl">las → w lesie</span>, <span class="pl">ogród → w ogrodzie</span>.</p>
<h4>2. Закінчення -u</h4>
<ul><li>ч. і с. рід на <b>-k, -g, -ch</b>: <span class="pl">rynek → na rynku, brzeg → na brzegu, Gdańsk → w Gdańsku, dach → na dachu</span> — як укр. <i>на ринку, у Гданську, на даху</i>;</li>
<li>ч. і с. рід з м’якою або шиплячою основою (-sz, -cz, -rz, -c, -l, -j, -ń): <span class="pl">ratusz → w ratuszu, dworzec → na dworcu, hotel → w hotelu, pokój → w pokoju, Poznań → w Poznaniu, osiedle → na osiedlu</span>;</li>
<li>запам’ятайте винятки: <span class="pl">dom → w domu, syn → o synu, pan → o panu</span>.</li></ul>
<h4>3. Закінчення -i / -y</h4>
<p>Жіночий рід з м’якою або шиплячою основою — форма як у родовому: <span class="pl">ulica → na ulicy, kamienica → w kamienicy, kawiarnia → w kawiarni, Gdynia → w Gdyni, plaża → na plaży</span>. Слова на <b>-um</b> не змінюються: <span class="pl">w centrum, w muzeum</span> (а в українській відмінюються: <i>у центрі, у музеї</i>).</p>
<h4>4. w чи na?</h4>
<p><span class="pl">w</span> — усередині: у місті, країні, будівлі (<span class="pl">w Krakowie, w Polsce, w ratuszu</span>). <span class="pl">na</span> — на поверхні та у відкритих місцях (<span class="pl">na rynku, na moście, na ulicy, na dworcu, na osiedlu</span>), а також з частиною країн і регіонів: <span class="pl">na Słowacji, na Litwie, na Węgrzech, na Mazurach, na Śląsku</span>. Традиційно поляки кажуть і <span class="pl">na Ukrainie</span>, хоча останніми роками дедалі частіше чути й <span class="pl">w Ukrainie</span> — обидві форми правильні. Перед <b>w/f + приголосний</b> прийменник стає <span class="pl">we</span> (для милозвучності, як наше <i>у / в</i>): <span class="pl">we Wrocławiu, we Włoszech, we Francji</span>.</p>
<div class="ex"><span class="pl">Mieszkam we Wrocławiu, na Nadodrzu, w starej kamienicy.</span> — Я живу у Вроцлаві, в районі Надодже, у старій кам’яниці.</div>
<div class="tip">Що збігається з українською, а що ні: 1) «на ринку» → <span class="pl">na rynku</span> — так само (не *rynke), але «на березі» → <span class="pl">na brzegu</span>: у ч. р. на -g польська чергування не має; 2) «на річці» → <span class="pl">na rzece</span>, «у Польщі» → <span class="pl">w Polsce</span> — польською обов’язково з чергуванням k → c; 3) <span class="pl">w domu</span>, а не *w domie; 4) варшавський район Прага — <span class="pl">na Pradze</span>, а столиця Чехії — <span class="pl">w Pradze</span>.</div>`
      },

      exercises: [
        { type: "choice", q: "Moja ciocia od lat mieszka w ___ (Ameryka).", options: ["Ameryce", "Ameryki", "Amerykie"], answer: 0, explain: "Ж. р. на -ka: k → c + -e. Ameryka → w Ameryce, як Polska → w Polsce (пор. укр. Америка → в Америці)." },
        { type: "gap", q: "Ratusz stoi na ___ (rynek).", answers: ["rynku"], explain: "Ч. р. на -k отримує -u, випадне e зникає: rynek → na rynku (як укр. «на ринку»). Не «rynke»!" },
        { type: "gap", q: "Moja babcia mieszka w ___ (kamienica) na Kazimierzu.", answers: ["kamienicy"], explain: "Ж. р. на -ca — закінчення -y, як у родовому: w kamienicy." },
        { type: "gap", q: "Pociąg stoi na ___ (dworzec) już dwadzieścia minut.", answers: ["dworcu"], explain: "dworzec → dworca → na dworcu: випадне e зникає, після c — закінчення -u." },
        { type: "choice", q: "Mam mieszkanie ___ osiedlu Ruczaj w Krakowie.", options: ["na", "w", "we"], answer: 0, explain: "З osiedle поляки кажуть na: na osiedlu (пор. укр. «на масиві»)." },
        { type: "choice", q: "Studiuję ___ Wrocławiu.", options: ["we", "w", "na"], answer: 0, explain: "Перед w/f + приголосний пишемо we: we Wrocławiu, we Włoszech, we Francji." },
        { type: "match", q: "З’єднайте слово з формою «де?»", pairs: [["Gdańsk", "w Gdańsku"], ["Warszawa", "w Warszawie"], ["Wisła", "na Wiśle"], ["teatr", "w teatrze"], ["rzeka", "na rzece"], ["dom", "w domu"]], explain: "Після k — -u (w Gdańsku); -e з чергуванням: w → wi, sł → śl, r → rz, k → c; dom — виняток: w domu." },
        { type: "order", ru: "Ми живемо у висотці в центрі.", words: ["Mieszkamy", "w", "wieżowcu", "w", "centrum."], alt: ["W centrum mieszkamy w wieżowcu."], explain: "wieżowiec → w wieżowcu (випадне e); centrum в однині не відмінюється: w centrum (на відміну від укр. «у центрі»)." },
        { type: "translate", ru: "Я живу в Польщі.", answers: ["Mieszkam w Polsce.", "Ja mieszkam w Polsce."], explain: "Polska → w Polsce: k → c. Не «w Polske»." },
        { type: "translate", ru: "Ми зустрічаємося на мосту.", answers: ["Spotykamy się na moście.", "My spotykamy się na moście."], explain: "most → na moście: st → ści + e. Українською «на мосту», а польською закінчення -e з чергуванням." }
      ],

      pronunciation: {
        focus: "Пом’якшення в місцевому: k→c, g→dz, r→rz, t→ci",
        tip: `<p>У місцевому відмінку останній твердий приголосний «пом’якшується». На слух це головна ознака відмінка — тренуйте пари «хто? що? → де?»:</p>
<ul><li><b>k → c</b>: <span class="pl">rzeka → na rzece</span> — звук [ц], як в укр. «на річці». Для поляка «na rzeke» звучить так само дивно, як для нас «на річкі».</li>
<li><b>g → dz</b>: <span class="pl">Praga → w Pradze</span> — дзвінке злите [дз], як в укр. «дзвін», «дзеркало». Не розбивайте його на «д» + «з» і не заміняйте нашим [з] (у Празі).</li>
<li><b>r → rz</b>: <span class="pl">góra → na górze</span> — тверде [ж]. Після глухих приголосних rz оглушується до [ш]: <span class="pl">w teatrze</span> ≈ «фтеатше».</li>
<li><b>t → ci</b>: <span class="pl">poczta → na poczcie</span> — ci звучить як дуже м’яке [ч’], якого в українській немає (наше «ч» тверде). Не читайте його як «ці» чи «ті».</li></ul>
<p>І пам’ятайте: прийменник <span class="pl">w</span> перед глухим звуком звучить як [ф]: <span class="pl">w Polsce</span> ≈ «фпольсце».</p>`,
        items: [
          { type: "listen", text: "rzeka — na rzece", ru: "річка — на річці", note: "k → c: [ц]" },
          { type: "listen", text: "Praga — w Pradze", ru: "Прага — у Празі", note: "g → dz: дзвінке [дз], а не [з]" },
          { type: "listen", text: "góra — na górze", ru: "гора — на горі", note: "r → rz: [ж]" },
          { type: "listen", text: "poczta — na poczcie", ru: "пошта — на пошті", note: "t → ci: м’яке [ч’]" },
          { type: "minimal", options: ["w lecie", "w lesie"], ru: ["улітку", "у лісі"] },
          { type: "minimal", options: ["Pradze", "prace"], ru: ["(у) Празі", "роботи"] },
          { type: "stress", word: "Krakowie", syllables: ["Kra", "ko", "wie"], answer: 1 },
          { type: "dictation", text: "Moja siostra mieszka w Polsce, w Krakowie, na Kazimierzu." }
        ]
      },

      reading: {
        title: "Wrocław — miasto mostów",
        text: "Cześć! Jestem Igor i od roku mieszkam we Wrocławiu. Wynajmuję pokój w starej kamienicy na Nadodrzu. To modna dzielnica: w okolicy jest dużo kawiarni, galerii i małych sklepów.\n\nPracuję w biurze w wieżowcu Sky Tower. To najwyższy budynek w mieście. Z okna widzę prawie cały Wrocław: rynek, ratusz, Odrę i mosty. Wrocław ma ponad sto mostów! Mój ulubiony to Most Tumski. Na moście wiszą setki kłódek zakochanych par.\n\nW weekend lubię siedzieć na rynku i szukać krasnali. Te małe figurki z brązu są wszędzie — w mieście jest ich ponad sześćset: na chodniku, na murku, a nawet na latarni. W telefonie mam już zdjęcia czterdziestu krasnali!\n\nWieczorem często siedzę na bulwarze nad Odrą. Kiedyś na brzegu rzeki poznałem Kasię. Ona też szukała krasnala. Teraz szukamy ich razem, a w przyszłym miesiącu jedziemy do Krakowa, bo Kasia chce mi pokazać smoka.",
        glossary: [
          { pl: "Wynajmuję", ru: "винаймаю (житло)" },
          { pl: "modna", ru: "модна" },
          { pl: "kłódek zakochanych par", ru: "навісних замків (колодок) закоханих пар" },
          { pl: "krasnali", ru: "гномів (вроцлавські бронзові фігурки)" },
          { pl: "z brązu", ru: "з бронзи" },
          { pl: "na chodniku", ru: "на тротуарі (зах.-укр. «на хіднику»)" },
          { pl: "na murku", ru: "на невисокому мурі" },
          { pl: "na latarni", ru: "на ліхтарі" },
          { pl: "smoka", ru: "дракона (Вавельського)" }
        ],
        questions: [
          { type: "tf", q: "Igor mieszka w wieżowcu.", answer: false, explain: "Igor mieszka w kamienicy na Nadodrzu, a w wieżowcu tylko pracuje." },
          { type: "choice", q: "Co Igor widzi z okna w biurze?", options: ["Tylko dworzec i tory", "Rynek, ratusz, Odrę i mosty", "Morze i plażę"], answer: 1, explain: "„Z okna widzę prawie cały Wrocław: rynek, ratusz, Odrę i mosty”." },
          { type: "tf", q: "Na Moście Tumskim wiszą kłódki.", answer: true, explain: "„Na moście wiszą setki kłódek zakochanych par”." },
          { type: "choice", q: "Gdzie Igor poznał Kasię?", options: ["Na rynku", "Na brzegu rzeki", "W biurze"], answer: 1, explain: "„Kiedyś na brzegu rzeki poznałem Kasię”." },
          { type: "tf", q: "Igor ma zdjęcia wszystkich krasnali we Wrocławiu.", answer: false, explain: "Ma zdjęcia czterdziestu krasnali, a w mieście jest ich ponad sześćset." }
        ]
      },

      writing: {
        prompt: "Напишіть другові коротке повідомлення про місто, де ви живете (або хотіли б жити): у якому районі та в якому будинку ви живете, що є поблизу, де ви любите проводити час і де ви зустрінетеся, коли він приїде.",
        minWords: 40, maxWords: 80,
        useWords: ["dzielnica", "okolica", "kamienica", "bulwar"],
        checklist: [
          { label: "Щонайменше 4 вирази «де?»: w / we / na + місцевий", pattern: "(?<!\\p{L})(w|we|na)\\s+\\p{L}+(e|u|y|i)(?!\\p{L})", min: 4 },
          { label: "Хоча б одна форма з чергуванням (na moście, w Polsce, w Pradze, w teatrze…)", pattern: "(?<!\\p{L})(w|we|na|o|po|przy)\\s+\\p{L}*(ście|cie|dzie|ce|dze|rze|le|nie|wie|mie|bie|pie|sie|zie)(?!\\p{L})", min: 1 }
        ],
        model: "Cześć, Marku! Od roku mieszkam w Gdańsku, w dzielnicy Wrzeszcz. Mam małe mieszkanie w starej kamienicy na trzecim piętrze. W okolicy jest dużo kawiarni, a na rogu jest Żabka. W weekend jeżdżę do centrum. Najbardziej lubię siedzieć na bulwarze nad Motławą i patrzeć na statki. Kiedy przyjedziesz, spotkamy się na dworcu, a potem pójdziemy na Długi Targ. Pozdrawiam, Ania"
      }
    },

    // ───────────────────────── Урок 2 ─────────────────────────
    {
      id: "m05l2",
      title: "Na poczcie i w banku",
      titleRu: "Місцевий: o, po, przy; прикметники; w чи na",
      topic: "Załatwianie spraw",
      review: false,
      minutes: 30,
      goals: [
        "Уживати місцевий відмінок після o, po, przy",
        "Узгоджувати прикметники й займенники: w nowym banku, na głównej poczcie",
        "Запам’ятати, де w, а де na: na poczcie, w banku, w pracy, na basenie",
        "Розповісти, як ви залагоджуєте справи на пошті, в банку та в установі"
      ],

      vocab: [
        { pl: "sprawa", g: "f", ru: "справа, питання", ex: "Mam do pani ważną sprawę.", exRu: "У мене до вас важлива справа." },
        { pl: "załatwiać / załatwić", ru: "залагоджувати / залагодити (справи)", ex: "Dziś muszę załatwić kilka spraw w mieście.", exRu: "Сьогодні мені треба залагодити кілька справ у місті." },
        { pl: "urząd", g: "m", ru: "установа, відомство (державне)", ex: "W urzędzie zawsze są kolejki.", exRu: "В установі завжди черги.", note: "w urzędzie: ą → ę, d → dzi; хибний друг: укр. «уряд» — це rząd" },
        { pl: "wniosek", g: "m", ru: "заява (офіційна)", ex: "Złożyłem wniosek o kartę pobytu.", exRu: "Я подав заяву на посвідку на проживання.", note: "złożyć wniosek — подати заяву; we wniosku; друге значення — висновок" },
        { pl: "termin", g: "m", ru: "строк; дата, запис (на прийом)", ex: "Mam termin w urzędzie na wtorek.", exRu: "У мене запис до установи на вівторок.", note: "як укр. «термін» у значенні «строк»; а ще — запис, призначена дата візиту" },
        { pl: "kolejka", g: "f", ru: "черга", ex: "Stoję w kolejce już pół godziny.", exRu: "Я стою в черзі вже пів години.", note: "w kolejce (k → c), як укр. черга → у черзі" },
        { pl: "okienko", g: "n", ru: "віконце (в установі)", ex: "Proszę podejść do okienka numer trzy.", exRu: "Підійдіть, будь ласка, до віконця номер три." },
        { pl: "wypełniać / wypełnić", ru: "заповнювати / заповнити", ex: "Proszę wypełnić ten formularz.", exRu: "Будь ласка, заповніть цей бланк." },
        { pl: "podpis", g: "m", ru: "підпис", ex: "Tutaj proszę o podpis.", exRu: "Тут, будь ласка, ваш підпис." },
        { pl: "awizo", g: "n", ru: "повідомлення (про посилку, лист)", ex: "W skrzynce było awizo z poczty.", exRu: "У поштовій скриньці було повідомлення з пошти." },
        { pl: "paczkomat", g: "m", ru: "поштомат", ex: "Paczka czeka w paczkomacie przy moim bloku.", exRu: "Посилка чекає в поштоматі біля мого будинку.", note: "w paczkomacie (t → ci)" },
        { pl: "konto", g: "n", ru: "рахунок (у банку)", ex: "Sprawdzam, ile mam pieniędzy na koncie.", exRu: "Я перевіряю, скільки грошей у мене на рахунку.", note: "na koncie (t → ci)" },
        { pl: "przelew", g: "m", ru: "банківський переказ", ex: "Zrobię ci przelew na telefon.", exRu: "Я перекажу тобі гроші за номером телефону.", note: "przelew na telefon — переказ через BLIK" }
      ],

      grammar: {
        title: "Прийменники o, po, przy; прикметники в місцевому; w чи na",
        html: `<p>Місцевий відмінок потрібен не лише після <span class="pl">w</span> і <span class="pl">na</span>. Ось ще три часті прийменники:</p>
<table class="g"><tr><th>прийменник</th><th>значення</th><th>приклад</th></tr>
<tr><td class="pl">o</td><td>про (говорити, думати, читати про…)</td><td class="pl">Rozmawiamy o pracy.</td></tr>
<tr><td class="pl">po</td><td>1) по (поверхні) 2) після</td><td class="pl">Spaceruję po parku. Po pracy idę na pocztę.</td></tr>
<tr><td class="pl">przy</td><td>біля, коло; на (в адресі)</td><td class="pl">Czekam przy okienku. Mieszkam przy ulicy Długiej.</td></tr></table>
<div class="tip">«po» + місцевий часто означає <b>після</b>: <span class="pl">po obiedzie</span> — після обіду (пор. укр. «по обіді»), <span class="pl">po pracy</span> — після роботи. А <span class="pl">przy ulicy…</span> — звичайний спосіб назвати адресу: «на вулиці …». Головна відмінність від української: польське <span class="pl">o</span> + місцевий відповідає нашому «про» + знахідний: <span class="pl">Rozmawiamy o pracy</span> — розмовляємо про роботу. Обережно: після <span class="pl">pytać o, prosić o</span> іде знахідний: <span class="pl">pytam o drogę</span> (як укр. «питаю про дорогу»).</div>
<h4>Прикметники та займенники</h4>
<table class="g"><tr><th></th><th>ч. і с. рід</th><th>ж. рід</th></tr>
<tr><td>прикметник</td><td class="pl">w nowym banku, w dużym mieście</td><td class="pl">na głównej poczcie</td></tr>
<tr><td>основа на k, g</td><td class="pl">w polskim urzędzie, na drugim piętrze</td><td class="pl">w polskiej firmie</td></tr>
<tr><td>ten / ta</td><td class="pl">w tym urzędzie</td><td class="pl">w tej kolejce</td></tr>
<tr><td>mój / moja</td><td class="pl">na moim koncie</td><td class="pl">w mojej sprawie</td></tr>
<tr><td>nasz / nasza</td><td class="pl">na naszym osiedlu</td><td class="pl">przy naszej ulicy</td></tr></table>
<p>Формула проста: ч. і с. рід — <b>-ym / -im</b>, ж. рід — <b>-ej</b>. Українською «у новому банку», а польською <span class="pl">w nowym banku</span> — закінчення <b>-ym</b>, без «-ому» (воно схоже радше на нашу коротку форму «у новім»). Українською «на головній пошті», польською <span class="pl">na głównej poczcie</span>: наше -ій ↔ польське -ej.</p>
<h4>w чи na: місця, які треба запам’ятати</h4>
<table class="g"><tr><th>na + місцевий</th><th>w + місцевий</th></tr>
<tr><td class="pl">na poczcie, na dworcu, na lotnisku</td><td class="pl">w banku, w urzędzie, w sklepie</td></tr>
<tr><td class="pl">na uniwersytecie, na policji</td><td class="pl">w szkole, w szpitalu, w biurze</td></tr>
<tr><td class="pl">na basenie, na siłowni, na koncercie</td><td class="pl">w kinie, w teatrze, w muzeum</td></tr>
<tr><td class="pl">na wsi, na stacji, na przystanku</td><td class="pl">w pracy, w domu, w kuchni</td></tr></table>
<p>Загальна ідея: <span class="pl">na</span> — відкриті простори, заходи й деякі установи; <span class="pl">w</span> — закриті приміщення. Але багато чого треба просто запам’ятати.</p>
<div class="tip">Пастки для українців: «на роботі» → <span class="pl">w pracy</span>; «на кухні» → <span class="pl">w kuchni</span>; «в селі» → <span class="pl">na wsi</span>; «в басейні» → <span class="pl">na basenie</span>; «в поліції» → <span class="pl">na policji</span>; «в університеті» → <span class="pl">na uniwersytecie</span>. Зате збігаються <span class="pl">na poczcie</span> (на пошті) та <span class="pl">na dworcu</span> (на вокзалі).</div>
<div class="ex"><span class="pl">Po pracy byłam na poczcie, a potem w nowym banku przy rynku.</span> — Після роботи я була на пошті, а потім у новому банку біля площі.</div>`
      },

      exercises: [
        { type: "choice", q: "Paczkę odbieram ___ poczcie.", options: ["na", "w", "do"], answer: 0, explain: "Poczta — «na»-місце: na poczcie, як і українською «на пошті»." },
        { type: "choice", q: "Mama jest teraz ___ pracy.", options: ["w", "na", "do"], answer: 0, explain: "Пастка: українське «на роботі» = польське w pracy." },
        { type: "gap", q: "Mam konto w ___ (nowy) banku.", answers: ["nowym"], explain: "Прикметник ч. р. у місцевому — -ym (після k, g — -im): w nowym banku." },
        { type: "gap", q: "Stoję w długiej ___ (kolejka) do okienka.", answers: ["kolejce"], explain: "kolejka → w kolejce: k → c, як rzeka → na rzece (і як укр. черга → у черзі)." },
        { type: "gap", q: "Wczoraj rozmawialiśmy o ___ (twoja) nowej pracy.", answers: ["twojej"], explain: "o + місцевий; ж. р.: twoja → twojej, nowa → nowej, praca → pracy. Українською тут знахідний: «про твою нову роботу»." },
        { type: "gap", q: "Proszę czekać przy ___ (okienko) numer pięć.", answers: ["okienku"], explain: "przy + місцевий; с. р. на -ko: okienko → przy okienku (-u після k)." },
        { type: "gap", q: "Paczka czeka na ciebie w ___ (paczkomat).", answers: ["paczkomacie"], explain: "t → ci + e: paczkomat → w paczkomacie (як poczta → na poczcie)." },
        { type: "match", q: "Де? З’єднайте місце з правильною формою", pairs: [["poczta", "na poczcie"], ["bank", "w banku"], ["urząd", "w urzędzie"], ["basen", "na basenie"], ["kuchnia", "w kuchni"], ["wieś", "na wsi"]], explain: "Пастки: «в басейні» — na basenie, «на кухні» — w kuchni, «в селі» — na wsi. І не забудьте чергування: urząd → w urzędzie." },
        { type: "order", ru: "У суботу ми гуляємо по Старому місту.", words: ["W", "sobotę", "spacerujemy", "po", "Starym", "Mieście."], alt: ["Spacerujemy po Starym Mieście w sobotę."], explain: "po + місцевий: Stare Miasto → po Starym Mieście (прикметник -ym, іменник st → ści)." },
        { type: "translate", ru: "Я був на пошті та в банку.", answers: ["Byłem na poczcie i w banku.", "Byłam na poczcie i w banku."], explain: "na poczcie, але w banku. Чоловік каже byłem, жінка — byłam." }
      ],

      pronunciation: {
        focus: "i vs y",
        tip: `<p><b>y</b> — окремий польський голосний, але українцям тут пощастило: він дуже близький до нашого [и] (<i>син, бик</i>), тільки язик відсунутий трохи далі назад. <b>i</b> — як українське [і], і він завжди пом’якшує попередній приголосний: <span class="pl">bić</span> ≈ «біч’», <span class="pl">być</span> ≈ «бич’».</p>
<ul><li>Після <b>c, cz, sz, rz, ż, dz</b> пишеться й звучить тільки <b>y</b>: <span class="pl">na ulicy, na plaży, w tej dzielnicy</span>.</li>
<li>Після <b>k, g</b> — тільки <b>i</b>: <span class="pl">w polskim banku, na drugim piętrze</span>.</li>
<li>Закінчення місцевого звучать по-різному: <span class="pl">w kawiarni</span> [-ні], але <span class="pl">na ulicy</span> [-ци].</li></ul>
<p>Пастка для українців: ми звикли до м’якого [ц’і] в «на вулиці» та [жі] в «на пляжі», а польською тут тверде y: <span class="pl">plaży, kapeluszy</span>. Тож <span class="pl">na ulicy</span> звучить «на уліци», а не «на уліці».</p>`,
        items: [
          { type: "listen", text: "w kawiarni — na ulicy", ru: "у кав’ярні — на вулиці", note: "[-ні] vs [-ци]" },
          { type: "listen", text: "Miły pan w okienku był bardzo cierpliwy.", ru: "Приємний пан у віконці був дуже терплячий." },
          { type: "minimal", options: ["bić", "być"], ru: ["бити", "бути"] },
          { type: "minimal", options: ["miła", "myła"], ru: ["приємна, мила", "(вона) мила (посуд)"] },
          { type: "minimal", options: ["mi", "my"], ru: ["мені", "ми"] },
          { type: "stress", word: "paczkomacie", syllables: ["pacz", "ko", "ma", "cie"], answer: 2 },
          { type: "dictation", text: "Po pracy byłam na poczcie i w banku przy ulicy Długiej." }
        ]
      },

      reading: {
        title: "Pechowy piątek pana Tomka",
        text: "W piątek pan Tomek ma wolny dzień, ale nie odpoczywa — musi załatwić trzy sprawy.\n\nNajpierw idzie na pocztę, bo w skrzynce znalazł awizo. Na poczcie przy ulicy Długiej jest długa kolejka. Pan Tomek czeka czterdzieści minut. W końcu pani w okienku mówi: „Przykro mi, ale tej paczki nie ma u nas. Jest w paczkomacie na pana osiedlu”.\n\nPotem pan Tomek idzie do banku. Chce zrobić przelew, ale w aplikacji coś nie działa. W banku pracuje bardzo miły doradca. Rozmawiają długo o koncie, o karcie i o kredycie. Po rozmowie pan Tomek ma nowe konto, ale przelewu wciąż nie zrobił.\n\nOstatnia sprawa to urząd. Pan Tomek ma termin na jedenastą. W urzędzie szybko wypełnia wniosek, ale przy podpisie… nie ma długopisu! Na szczęście urzędniczka pożycza mu swój.\n\nPo południu pan Tomek idzie do paczkomatu przy swoim bloku i otwiera paczkę. W środku jest… nowy długopis. Zamówił go w internecie tydzień temu.",
        glossary: [
          { pl: "w skrzynce", ru: "у (поштовій) скриньці" },
          { pl: "Przykro mi", ru: "мені шкода" },
          { pl: "doradca", ru: "консультант, радник" },
          { pl: "wciąż", ru: "досі, все ще" },
          { pl: "urzędniczka", ru: "службовиця (в установі)" },
          { pl: "pożycza", ru: "позичає" },
          { pl: "długopisu", ru: "ручки (кулькової)" },
          { pl: "bloku", ru: "багатоповерхівки" }
        ],
        questions: [
          { type: "tf", q: "Paczka pana Tomka była na poczcie.", answer: false, explain: "Paczka była w paczkomacie na jego osiedlu." },
          { type: "choice", q: "O czym pan Tomek rozmawiał z doradcą?", options: ["O pogodzie i o urlopie", "O koncie, o karcie i o kredycie", "O paczce i o awizo"], answer: 1, explain: "„Rozmawiają długo o koncie, o karcie i o kredycie”." },
          { type: "tf", q: "W banku pan Tomek w końcu zrobił przelew.", answer: false, explain: "Ma nowe konto, ale przelewu wciąż nie zrobił." },
          { type: "choice", q: "Czego pan Tomek nie miał w urzędzie?", options: ["Dowodu osobistego", "Długopisu", "Wniosku"], answer: 1, explain: "„Przy podpisie… nie ma długopisu!”" },
          { type: "choice", q: "Co było w paczce?", options: ["Karta do bankomatu", "Nowy długopis", "List polecony"], answer: 1, explain: "W paczce był nowy długopis, który pan Tomek zamówił tydzień temu." }
        ]
      },

      writing: {
        prompt: "Ви провели ранок, залагоджуючи справи: установа, пошта, банк. Напишіть повідомлення подрузі: де ви були й що робили в кожному місці, що пішло не так і де ви зараз (використайте o, po, przy та хоча б один прикметник у місцевому відмінку).",
        minWords: 40, maxWords: 80,
        useWords: ["sprawa", "kolejka", "termin", "urząd"],
        checklist: [
          { label: "Щонайменше 3 вирази «де?» (w / na + місцевий)", pattern: "(?<!\\p{L})(w|we|na)\\s+\\p{L}+(e|u|y|i)(?!\\p{L})", min: 3 },
          { label: "Щонайменше 2 прийменники o / po / przy", pattern: "(?<!\\p{L})(o|po|przy)\\s+\\p{L}+", min: 2 },
          { label: "Прикметник у місцевому (o nowym…, na głównej…)", pattern: "(?<!\\p{L})(w|we|na|o|po|przy)\\s+\\p{L}+(ym|im|ej)(?!\\p{L})", min: 1 }
        ],
        model: "Hej, Kasiu! Co za poranek! O ósmej miałam termin w urzędzie. Tam wypełniłam wniosek o kartę pobytu i czekałam w kolejce prawie godzinę. Potem byłam na poczcie, bo miałam awizo. Na koniec poszłam do banku i rozmawiałam z doradcą o nowym koncie. Wszystkie sprawy załatwione! Teraz siedzę w kawiarni przy rynku i piję kawę. Przyjdziesz?"
      }
    },

    // ───────────────────────── Урок 3 ─────────────────────────
    {
      id: "m05l3",
      title: "Idę, jadę, lecę",
      titleRu: "Дієслова руху: iść/chodzić, jechać/jeździć, lecieć/latać",
      topic: "Transport",
      review: false,
      minutes: 28,
      goals: [
        "Розрізняти односпрямовані (idę, jadę, lecę) і різноспрямовані (chodzę, jeżdżę, latam) дієслова",
        "Відмінювати jechać, jeździć, lecieć, latać у теперішньому та минулому часі",
        "Розповісти, як ви добираєтеся на роботу чи навчання",
        "Не казати «autobus idzie»: транспорт польською їде"
      ],

      vocab: [
        { pl: "komunikacja miejska", g: "f", ru: "міський громадський транспорт", ex: "W Warszawie komunikacja miejska działa świetnie.", exRu: "У Варшаві громадський транспорт працює чудово." },
        { pl: "rozkład jazdy", g: "m", ru: "розклад (руху транспорту)", ex: "Sprawdzam rozkład jazdy w aplikacji Jakdojade.", exRu: "Я дивлюся розклад у застосунку Jakdojade." },
        { pl: "bilet miesięczny", g: "m", ru: "місячний проїзний", ex: "Mam bilet miesięczny na tramwaje i autobusy.", exRu: "У мене місячний проїзний на трамваї та автобуси." },
        { pl: "kasować / skasować", ru: "компостувати / прокомпостувати (квиток)", ex: "Proszę skasować bilet w kasowniku.", exRu: "Будь ласка, прокомпостуйте квиток у компостері.", note: "kasownik — компостер" },
        { pl: "kanar", g: "m", ru: "контролер (розм.)", ex: "Uwaga, w tramwaju jest kanar!", exRu: "Обережно, у трамваї контролер!", note: "офіційно: kontroler biletów" },
        { pl: "przesiadać się / przesiąść się", ru: "пересідати / пересісти", ex: "Na Rondzie Daszyńskiego przesiadam się do metra.", exRu: "На Ронді Дашинського я пересідаю на метро.", note: "przesiąść się do + род. в.: do tramwaju, do metra (укр. «на трамвай»)" },
        { pl: "korek", g: "m", ru: "затор (на дорозі)", ex: "Stoimy w korku od godziny.", exRu: "Ми стоїмо в заторі вже годину.", note: "w korku; дослівно «корок»" },
        { pl: "godziny szczytu", g: "pl", ru: "година пік", ex: "W godzinach szczytu autobusy są pełne.", exRu: "У годину пік автобуси переповнені.", note: "дослівно «години піку»: w godzinach szczytu" },
        { pl: "hulajnoga", g: "f", ru: "самокат", ex: "Do pracy jeżdżę hulajnogą elektryczną.", exRu: "На роботу я їжджу на електросамокаті." },
        { pl: "kierowca", g: "m", ru: "водій", ex: "Kierowca autobusu był bardzo miły.", exRu: "Водій автобуса був дуже привітний.", note: "чоловічий рід, хоча закінчується на -a (як укр. «староста»)" },
        { pl: "spóźniać się / spóźnić się", ru: "запізнюватися / запізнитися", ex: "Znowu spóźniłem się na pociąg.", exRu: "Я знову запізнився на поїзд.", note: "spóźnić się na pociąg, do pracy (укр. «на роботу»)" },
        { pl: "pieszo", ru: "пішки", ex: "Do szkoły chodzę pieszo.", exRu: "До школи я ходжу пішки.", note: "= na piechotę" },
        { pl: "lot", g: "m", ru: "рейс, переліт", ex: "Mój lot do Gdańska trwa godzinę.", exRu: "Мій переліт до Гданська триває годину.", note: "LOT — польська авіакомпанія" }
      ],

      grammar: {
        title: "Дієслова руху: iść/chodzić, jechać/jeździć, lecieć/latać",
        html: `<p>Як і в українській, польські дієслова руху утворюють пари: <b>односпрямоване</b> дієслово (рух в один бік — зараз або конкретного разу) і <b>різноспрямоване</b> (регулярно, туди й назад, загалом, уміння). Пари майже дзеркальні: <i>іти — ходити, їхати — їздити, летіти — літати</i>.</p>
<table class="g"><tr><th>спосіб</th><th>зараз, один раз</th><th>регулярно, загалом</th></tr>
<tr><td>пішки</td><td class="pl">iść</td><td class="pl">chodzić</td></tr>
<tr><td>транспортом</td><td class="pl">jechać</td><td class="pl">jeździć</td></tr>
<tr><td>у повітрі</td><td class="pl">lecieć</td><td class="pl">latać</td></tr></table>
<table class="g"><tr><th></th><th>iść</th><th>chodzić</th><th>jechać</th><th>jeździć</th><th>lecieć</th><th>latać</th></tr>
<tr><td>ja</td><td class="pl">idę</td><td class="pl">chodzę</td><td class="pl">jadę</td><td class="pl">jeżdżę</td><td class="pl">lecę</td><td class="pl">latam</td></tr>
<tr><td>ty</td><td class="pl">idziesz</td><td class="pl">chodzisz</td><td class="pl">jedziesz</td><td class="pl">jeździsz</td><td class="pl">lecisz</td><td class="pl">latasz</td></tr>
<tr><td>on, ona</td><td class="pl">idzie</td><td class="pl">chodzi</td><td class="pl">jedzie</td><td class="pl">jeździ</td><td class="pl">leci</td><td class="pl">lata</td></tr>
<tr><td>my</td><td class="pl">idziemy</td><td class="pl">chodzimy</td><td class="pl">jedziemy</td><td class="pl">jeździmy</td><td class="pl">lecimy</td><td class="pl">latamy</td></tr>
<tr><td>wy</td><td class="pl">idziecie</td><td class="pl">chodzicie</td><td class="pl">jedziecie</td><td class="pl">jeździcie</td><td class="pl">lecicie</td><td class="pl">latacie</td></tr>
<tr><td>oni, one</td><td class="pl">idą</td><td class="pl">chodzą</td><td class="pl">jadą</td><td class="pl">jeżdżą</td><td class="pl">lecą</td><td class="pl">latają</td></tr>
<tr><td>мин. (on)</td><td class="pl">szedł</td><td class="pl">chodził</td><td class="pl">jechał</td><td class="pl">jeździł</td><td class="pl">leciał</td><td class="pl">latał</td></tr></table>
<h4>Коли яке?</h4>
<ul><li><b>зараз, цього разу</b>, а також запланована поїздка: <span class="pl">Teraz jadę do pracy. Jutro lecę do Londynu.</span></li>
<li><b>регулярно</b> (codziennie, często, zwykle, co roku): <span class="pl">Codziennie jeżdżę do pracy tramwajem.</span></li>
<li><b>загалом, уміння, (не)любов</b>: <span class="pl">Mój syn już chodzi. Nie lubię latać.</span></li>
<li><b>відвідувати</b>: <span class="pl">chodzić do szkoły, chodzić na basen</span>. А <span class="pl">Ola chodzi z Kubą</span> — «Оля зустрічається з Кубою» (розмовною українською теж «ходить з Кубою»).</li></ul>
<p>Транспорт — в орудному відмінку, як і в нас: <span class="pl">jechać autobusem, tramwajem, pociągiem; lecieć samolotem</span> (їхати автобусом, летіти літаком). З велосипедом і самокатом можна й так: <span class="pl">jeździć na rowerze, na hulajnodze</span> (їздити на велосипеді).</p>
<div class="tip">Головна пастка: українською цілком природно «автобус іде», «поїзд іде до Кракова». Польською транспорт завжди <b>їде</b>: <span class="pl">Autobus jedzie. Pociąg jedzie do Krakowa.</span> До іншого міста ми теж лише їдемо: <span class="pl">Jadę do Gdańska</span>, а не *idę do Gdańska. (У межах міста про мету поляки часто кажуть <span class="pl">idę do pracy</span>, навіть якщо їдуть трамваєм, але якщо називаєте транспорт — тільки <span class="pl">jadę tramwajem</span>.)</div>
<div class="tip">Чергування: <span class="pl">jeździć → jeżdżę, jeżdżą</span> (ź → ż, dź → dż) і <span class="pl">chodzić → chodzę, chodzą</span> (dź → dz) — майже як в українській: <i>їздити → їжджу, ходити → ходжу</i>. В інших формах звуки м’які: <span class="pl">jeździsz, jeździ, chodzisz</span>.</div>`
      },

      exercises: [
        { type: "choice", q: "Codziennie ___ do pracy metrem.", options: ["jeżdżę", "jadę", "chodzę"], answer: 0, explain: "codziennie = регулярно → jeździć: ja jeżdżę. chodzę — пішки, а тут метро." },
        { type: "choice", q: "Nie lubię ___ samolotem, wolę pociąg.", options: ["latać", "lecieć", "jechać"], answer: 0, explain: "Любов чи нелюбов «загалом» — різноспрямоване дієслово: latać (укр. «не люблю літати»)." },
        { type: "choice", q: "Mój syn ma dopiero rok, ale już ___.", options: ["chodzi", "idzie", "jeździ"], answer: 0, explain: "Уміння ходити — різноспрямоване дієслово: już chodzi «вже ходить»." },
        { type: "gap", q: "Teraz ___ (iść, ja) na przystanek, zaraz będę.", answers: ["idę"], explain: "Зараз, в одному напрямку, пішки → iść: ja idę." },
        { type: "gap", q: "Moje dzieci ___ (chodzić) do szkoły pieszo.", answers: ["chodzą"], explain: "Регулярно, відвідувати школу → chodzić: one chodzą (dź → dz)." },
        { type: "gap", q: "Czy często ___ (jeździć, ty) hulajnogą?", answers: ["jeździsz"], explain: "często → jeździć; ty jeździsz — м’які ź і dź зберігаються, чергування тільки в jeżdżę та jeżdżą." },
        { type: "gap", q: "Wczoraj Ania ___ (jechać) do Poznania aż cztery godziny!", answers: ["jechała"], explain: "Одна конкретна поїздка в минулому → jechać: ona jechała." },
        { type: "match", q: "З’єднайте форму з її значенням", pairs: [["idę", "я йду (зараз)"], ["chodzę", "я ходжу (регулярно)"], ["jadę", "я їду (зараз)"], ["jeżdżę", "я їжджу (регулярно)"], ["lecę", "я лечу (зараз)"], ["latam", "я літаю (регулярно)"]], explain: "Пари: iść/chodzić (пішки), jechać/jeździć (транспортом), lecieć/latać (у повітрі)." },
        { type: "order", ru: "У годину пік я їжджу на роботу велосипедом.", words: ["W", "godzinach", "szczytu", "jeżdżę", "do", "pracy", "rowerem."], alt: ["Do pracy w godzinach szczytu jeżdżę rowerem.", "W godzinach szczytu do pracy jeżdżę rowerem.", "W godzinach szczytu jeżdżę rowerem do pracy."], explain: "Регулярно → jeżdżę; транспорт — орудний відмінок: rowerem; «година пік» — w godzinach szczytu." },
        { type: "translate", ru: "Поїзд іде до Кракова.", answers: ["Pociąg jedzie do Krakowa."], explain: "Транспорт польською їде: pociąg jedzie. «До міста» = do + родовий: do Krakowa — як в українській." }
      ],

      pronunciation: {
        focus: "ź / dź / ż / dż: jeździć, jeżdżę",
        tip: `<p>У дієслові <span class="pl">jeździć</span> поспіль стоять м’які звуки, а в <span class="pl">jeżdżę</span> — тверді. Українцям тут легше: злиті [дз] і [дж] є і в нашій мові (<i>дзвін, бджола</i>), а чергування <i>їздити → їжджу</i> майже дзеркальне.</p>
<ul><li><b>ź</b> — дзвінка пара до <b>ś</b>. Польське ś — дуже м’яке «ш’» (м’якше за «сь» у «сюди», з виразним відтінком «ш»), отже ź — те саме з голосом: дуже м’яке «ж’».</li>
<li><b>dź</b> — дзвінка пара до <b>ć</b>. Польське ć — дуже м’яке «ч’» (наше «ч» тверде), отже dź — те саме з голосом, злито: «дж’» (схоже на «дзь» у слові «дзьоб»), а не «д» + «зь».</li>
<li><b>ż / rz</b> — тверде українське «ж».</li>
<li><b>dż</b> — тверде злите «дж», як у словах «джміль», «бджола».</li></ul>
<p>Отже: <span class="pl">jeździć</span> — усе м’яко (ź + dź + ć), <span class="pl">jeżdżę</span> — усе твердо (ż + dż). Спробуйте й слово-скоромовку <span class="pl">dżdżysty</span> — «дощовий».</p>`,
        items: [
          { type: "listen", text: "jeździć — jeżdżę — jeżdżą", ru: "їздити — я їжджу — вони їздять", note: "м’яко → твердо → твердо" },
          { type: "listen", text: "W dżdżysty dzień jeżdżę autobusem.", ru: "У дощовий день я їжджу автобусом." },
          { type: "minimal", options: ["wieże", "wiezie"], ru: ["вежі", "везе"] },
          { type: "minimal", options: ["jedzie", "jeździe"], ru: ["їде", "(про) їзду"] },
          { type: "stress", word: "jeździliśmy", syllables: ["jeź", "dzi", "li", "śmy"], answer: 1 },
          { type: "listen", text: "Nie lubię latać, wolę jeździć pociągiem.", ru: "Я не люблю літати, волію їздити поїздом." },
          { type: "dictation", text: "Zwykle jeżdżę do pracy rowerem, ale dziś jadę tramwajem." }
        ]
      },

      reading: {
        title: "Sonda: Jak dojeżdżasz do pracy?",
        text: "Sonda uliczna: zapytaliśmy czterech warszawiaków, jak dojeżdżają do pracy i na uczelnię.\n\nMarta, 29 lat, programistka: Codziennie jeżdżę metrem. Rano sprawdzam rozkład jazdy w aplikacji Jakdojade. Mam bilet miesięczny, więc nie muszę kasować biletu. Metro nigdy nie stoi w korku! Na Rondzie Daszyńskiego przesiadam się do tramwaju i po dwudziestu minutach jestem w biurze.\n\nPan Zbigniew, 58 lat, kierowca autobusu: Ja jeżdżę cały dzień — to moja praca! W godzinach szczytu jeżdżę bardzo wolno, bo na ulicach są korki. Pasażerowie się denerwują, a ja spokojnie słucham radia.\n\nKuba, 21 lat, student: Wiosną i latem jeżdżę hulajnogą. Zimą chodzę pieszo, bo mieszkam blisko uczelni. Raz jechałem tramwajem bez biletu i… spotkałem kanara. Mandat kosztował mnie więcej niż bilet miesięczny!\n\nPani Ewa, 45 lat, menedżerka: Często latam służbowo. Teraz właśnie jadę taksówką na lotnisko, bo za godzinę mam lot do Brukseli. Jestem trochę spóźniona, ale kierowca mówi, że zdążymy!",
        glossary: [
          { pl: "Sonda", ru: "опитування" },
          { pl: "dojeżdżają", ru: "доїжджають, добираються (регулярно)" },
          { pl: "się denerwują", ru: "нервують" },
          { pl: "uczelni", ru: "вишу (університету)" },
          { pl: "Mandat", ru: "штраф (не «мандат»!)" },
          { pl: "służbowo", ru: "у службових справах, у відрядження" },
          { pl: "spóźniona", ru: "запізнююся (про жінку)" },
          { pl: "zdążymy", ru: "встигнемо" }
        ],
        questions: [
          { type: "tf", q: "Marta codziennie stoi w korku.", answer: false, explain: "Marta jeździ metrem, a „metro nigdy nie stoi w korku”." },
          { type: "choice", q: "Czym Kuba jeździ wiosną i latem?", options: ["Metrem", "Hulajnogą", "Taksówką"], answer: 1, explain: "„Wiosną i latem jeżdżę hulajnogą”." },
          { type: "tf", q: "Kuba raz jechał tramwajem bez biletu.", answer: true, explain: "Tak, i spotkał kanara." },
          { type: "choice", q: "Dlaczego pan Zbigniew jeździ wolno w godzinach szczytu?", options: ["Bo jest zmęczony", "Bo na ulicach są korki", "Bo słucha radia"], answer: 1, explain: "„Jeżdżę bardzo wolno, bo na ulicach są korki”." },
          { type: "choice", q: "Dokąd teraz jedzie pani Ewa?", options: ["Do Brukseli", "Na lotnisko", "Do biura"], answer: 1, explain: "Teraz jedzie taksówką na lotnisko, a do Brukseli poleci za godzinę." }
        ]
      },

      writing: {
        prompt: "Напишіть допис на форум експатів «Jak dojeżdżasz do pracy?»: як ви зазвичай добираєтеся на роботу чи навчання (чим, з пересадкою чи без, скільки часу), що заважає (затори, година пік), як ви їдете сьогодні й чому.",
        minWords: 40, maxWords: 80,
        useWords: ["korek", "pieszo", "bilet miesięczny", "przesiadać się"],
        checklist: [
          { label: "Односпрямоване дієслово (idę / jadę / lecę…)", pattern: "(?<!\\p{L})(idę|idzie|idziemy|jadę|jedzie|jedziemy|lecę|leci|lecimy|szedłem|szłam|jechałem|jechałam|leciałem|leciałam)(?!\\p{L})", min: 1 },
          { label: "Щонайменше 2 різноспрямовані дієслова (chodzę / jeżdżę / latam…)", pattern: "(?<!\\p{L})(chodz|jeżdż|jeździ|lata)\\p{L}*", min: 2 }
        ],
        model: "Cześć! Mieszkam w Krakowie i zwykle jeżdżę do pracy tramwajem. Mam bilet miesięczny, więc jest tanio. Na Rondzie Mogilskim przesiadam się do autobusu. Cała droga trwa czterdzieści minut. Niestety w godzinach szczytu autobusy często stoją w korku. Dlatego w piątki chodzę pieszo — to tylko pół godziny. Dziś jest piątek, ale pada deszcz, więc jadę tramwajem i czytam książkę. A wy? Jak jeździcie do pracy?"
      }
    },

    // ───────────────────────── Урок 4 ─────────────────────────
    {
      id: "m05l4",
      title: "Gdzie? Dokąd? Jak dojść?",
      titleRu: "Де? і Куди?: w/na + місц. vs do + род. / na + знах.; як пройти",
      topic: "Pytanie o drogę",
      review: false,
      minutes: 28,
      goals: [
        "Розрізняти Gdzie? (w/na + місцевий) і Dokąd? (do + родовий, na + знахідний)",
        "Запам’ятати особливі випадки: nad morze, w góry, do lekarza",
        "Ввічливо питати дорогу: Przepraszam, jak dojść do…? Czy mógłby pan…?",
        "Розуміти й давати вказівки: prosto, skręcić w lewo, na skrzyżowaniu"
      ],

      vocab: [
        { pl: "skręcać / skręcić", ru: "повертати / повернути", ex: "Na rogu proszę skręcić w lewo.", exRu: "На розі, будь ласка, поверніть ліворуч." },
        { pl: "prosto", ru: "прямо", ex: "Proszę iść cały czas prosto.", exRu: "Ідіть увесь час прямо.", note: "частковий хибний друг: prosto — лише «прямо» (як укр. «іти просто»); «просто» у значенні «лише, всього-на-всього» = po prostu" },
        { pl: "skrzyżowanie", g: "n", ru: "перехрестя", ex: "Na skrzyżowaniu proszę skręcić w prawo.", exRu: "На перехресті поверніть праворуч." },
        { pl: "światła", g: "pl", ru: "світлофор", ex: "Na światłach proszę przejść przez ulicę.", exRu: "На світлофорі перейдіть вулицю.", note: "дослівно «світла, вогні»: na światłach — на світлофорі" },
        { pl: "róg", g: "m", ru: "ріг (вулиці)", ex: "Apteka jest na rogu.", exRu: "Аптека на розі.", note: "na rogu (ó → o, як укр. ріг → на розі)" },
        { pl: "przejście dla pieszych", g: "n", ru: "пішохідний перехід", ex: "Proszę przejść przez ulicę na przejściu dla pieszych.", exRu: "Перейдіть вулицю на пішохідному переході.", note: "розм. pasy — «зебра»" },
        { pl: "rondo", g: "n", ru: "кільцева розв’язка, «кільце»", ex: "Za rondem jest stacja benzynowa.", exRu: "За кільцем є заправка.", note: "na rondzie" },
        { pl: "w pobliżu", ru: "поблизу", ex: "Czy jest tu w pobliżu bankomat?", exRu: "Тут поблизу є банкомат?", note: "w pobliżu + род. в.: w pobliżu dworca (як укр. «поблизу вокзалу»)" },
        { pl: "po prawej stronie", ru: "праворуч, з правого боку", ex: "Muzeum jest po prawej stronie.", exRu: "Музей праворуч.", note: "po lewej stronie — ліворуч" },
        { pl: "zgubić się", ru: "заблукати, загубитися", ex: "Przepraszam, chyba się zgubiłam.", exRu: "Перепрошую, здається, я заблукала." },
        { pl: "dojść", ru: "дійти (пішки)", ex: "Jak dojść do dworca?", exRu: "Як дійти до вокзалу?", note: "транспортом: dojechać" },
        { pl: "stąd", ru: "звідси", ex: "To tylko pięć minut stąd.", exRu: "Це лише п’ять хвилин звідси." },
        { pl: "kierunek", g: "m", ru: "напрямок", ex: "Idzie pan w złym kierunku.", exRu: "Ви йдете не в той бік.", note: "w kierunku dworca — у напрямку вокзалу" }
      ],

      grammar: {
        title: "Gdzie? Dokąd? Skąd? + як запитати дорогу",
        html: `<p>В українській ми розрізняємо «де?» і «куди?» та змінюємо відмінок: <i>у Кракові — до Кракова</i>. Польська модель майже така сама: <span class="pl">w Krakowie → do Krakowa</span>, і навіть прийменник <span class="pl">do</span> той самий, що в нас! Відмінності — лише в окремих випадках.</p>
<table class="g"><tr><th>Gdzie? (де)</th><th>Dokąd? (куди)</th><th>Skąd? (звідки)</th></tr>
<tr><td class="pl">w Krakowie</td><td class="pl">do Krakowa</td><td class="pl">z Krakowa</td></tr>
<tr><td class="pl">w banku</td><td class="pl">do banku</td><td class="pl">z banku</td></tr>
<tr><td class="pl">na poczcie</td><td class="pl">na pocztę</td><td class="pl">z poczty</td></tr>
<tr><td class="pl">na dworcu</td><td class="pl">na dworzec</td><td class="pl">z dworca</td></tr>
<tr><td class="pl">nad morzem</td><td class="pl">nad morze</td><td class="pl">znad morza</td></tr>
<tr><td class="pl">w górach</td><td class="pl">w góry</td><td class="pl">z gór</td></tr>
<tr><td class="pl">u babci</td><td class="pl">do babci</td><td class="pl">od babci</td></tr></table>
<ul><li>Якщо «де?» — <span class="pl">w</span> + місцевий, то «куди?» — <span class="pl">do</span> + родовий: <span class="pl">w sklepie → do sklepu</span> (укр. <i>у магазині → до магазину</i>).</li>
<li>Якщо «де?» — <span class="pl">na</span> + місцевий, то «куди?» — <span class="pl">na</span> + знахідний: <span class="pl">na basenie → na basen</span> (укр. <i>на пошті → на пошту</i>).</li>
<li>Особливі випадки: <span class="pl">nad morze, nad jezioro</span> (на море, на озеро), <span class="pl">w góry</span>; до людей — <span class="pl">do lekarza, do mamy</span> (де? — <span class="pl">u lekarza</span>), так само, як укр. <i>до лікаря / у лікаря</i>.</li></ul>
<div class="tip">Пастки: «іду в магазин» — <span class="pl">idę do sklepu</span> (не *w sklep; думайте «іду до магазину»); «їду до Варшави» — <span class="pl">jadę do Warszawy</span>, як в українській; «їду на море» — <span class="pl">jadę nad morze</span> (не *na morze). «Куди?» — <span class="pl">Dokąd?</span> У розмові часто чути <span class="pl">Gdzie idziesz?</span>, але правильніше <span class="pl">Dokąd idziesz?</span></div>
<h4>Як запитати дорогу</h4>
<table class="g"><tr><th>питання</th><th>переклад</th></tr>
<tr><td class="pl">Przepraszam, jak dojść do dworca?</td><td>Перепрошую, як пройти до вокзалу?</td></tr>
<tr><td class="pl">Jak dojechać do centrum?</td><td>Як доїхати до центру?</td></tr>
<tr><td class="pl">Czy jest tu w pobliżu apteka?</td><td>Тут поблизу є аптека?</td></tr>
<tr><td class="pl">Czy mógłby mi pan pomóc?</td><td>Чи не могли б ви мені допомогти? (чоловікові)</td></tr>
<tr><td class="pl">Czy mogłaby mi pani pomóc?</td><td>Чи не могли б ви мені допомогти? (жінці)</td></tr></table>
<h4>Як зрозуміти відповідь</h4>
<table class="g"><tr><th>відповідь</th><th>переклад</th></tr>
<tr><td class="pl">Proszę iść prosto.</td><td>Ідіть прямо.</td></tr>
<tr><td class="pl">Proszę skręcić w lewo / w prawo.</td><td>Поверніть ліворуч / праворуч.</td></tr>
<tr><td class="pl">na skrzyżowaniu, na światłach, na rondzie, na rogu</td><td>на перехресті, на світлофорі, на кільці, на розі</td></tr>
<tr><td class="pl">To jest po prawej / po lewej stronie.</td><td>Це праворуч / ліворуч.</td></tr>
<tr><td class="pl">To pięć minut stąd.</td><td>Це п’ять хвилин звідси.</td></tr></table>
<div class="tip">Частковий хибний друг: <span class="pl">prosto</span> = прямо (як укр. «іти просто»), а «просто» у значенні «лише» — <span class="pl">po prostu</span>. Напрямок (куди?) — <span class="pl">w lewo</span>, місце (де?) — <span class="pl">po lewej</span>. <span class="pl">Czy mógłby pan…? / Czy mogłaby pani…?</span> — ввічливе «чи не могли б ви»; докладно цю форму розберемо в модулі 8, а поки запам’ятайте її як готову фразу.</div>`
      },

      exercises: [
        { type: "choice", q: "___ jedziesz na wakacje? — Na Mazury.", options: ["Dokąd", "Gdzie", "Skąd"], answer: 0, explain: "Питання «куди?» — Dokąd? У розмові чути й Gdzie, але правильно Dokąd." },
        { type: "choice", q: "W sierpniu jedziemy na urlop ___.", options: ["nad morze", "nad morzem", "do morzu"], answer: 0, explain: "Куди? — nad morze (nad + знахідний). Де? — nad morzem (nad + орудний, як укр. «над морем»)." },
        { type: "gap", q: "Idę na ___ (poczta), bo mam awizo.", answers: ["pocztę"], explain: "Куди? «na»-місце → na + знахідний: na pocztę (де? — na poczcie), як укр. «на пошту»." },
        { type: "gap", q: "Czy jedziesz jutro do ___ (Gdańsk)?", answers: ["Gdańska"], explain: "do + родовий: Gdańsk → do Gdańska (де? — w Gdańsku), як укр. «до Гданська»." },
        { type: "gap", q: "W zeszłym roku byliśmy w ___ (góry), w Tatrach.", answers: ["górach"], explain: "Де? — w górach (місцевий мн.). Куди? — w góry. Як укр. «у горах — у гори»." },
        { type: "choice", q: "Apteka jest ___ stronie ulicy.", options: ["po prawej", "w prawo", "na prawo"], answer: 0, explain: "Місце (де?) — po prawej stronie. Напрямок (куди?) — w prawo." },
        { type: "match", q: "Gdzie? → Dokąd? З’єднайте пари", pairs: [["w Krakowie", "do Krakowa"], ["na poczcie", "na pocztę"], ["nad morzem", "nad morze"], ["w górach", "w góry"], ["u babci", "do babci"], ["w sklepie", "do sklepu"]], explain: "w + місц. → do + род.; na + місц. → na + знах.; nad morzem → nad morze; u kogoś → do kogoś." },
        { type: "order", ru: "Перепрошую, як пройти до вокзалу?", words: ["Przepraszam,", "jak", "dojść", "do", "dworca?"], alt: [], explain: "Jak dojść do…? — стандартне питання про дорогу пішки; після do — родовий відмінок: do dworca." },
        { type: "order", ru: "На перехресті, будь ласка, поверніть ліворуч.", words: ["Na", "skrzyżowaniu", "proszę", "skręcić", "w", "lewo."], alt: ["Proszę na skrzyżowaniu skręcić w lewo.", "Proszę skręcić na skrzyżowaniu w lewo.", "Proszę skręcić w lewo na skrzyżowaniu."], explain: "proszę + інфінітив — ввічлива інструкція; w lewo — напрямок, na skrzyżowaniu — місце." },
        { type: "translate", ru: "Я йду в магазин.", answers: ["Idę do sklepu.", "Ja idę do sklepu."], explain: "«в магазин» = do sklepu (do + родовий, як укр. «до магазину»), а не «w sklep»." }
      ],

      pronunciation: {
        focus: "Питальна інтонація, ввічливі формули",
        tip: `<p>Питання з питальним словом (<span class="pl">Gdzie…? Jak…? Dokąd…?</span>) вимовляється зі <b>зниженням</b> тону до кінця, голосом виділяється саме питальне слово — майже як в українській.</p>
<p>Питання «так / ні» (з <span class="pl">czy</span> або без нього) — з <b>підйомом</b> тону наприкінці фрази. Польське czy — це наше «чи» на початку питання, але мелодія інша. Українською голос зазвичай різко злітає на слові, про яке питаємо (часто посередині фрази), а потім падає. Польською голос піднімається ближче до кінця, на останньому наголошеному складі: <span class="pl">Czy jest tu w pobliżu apteka?</span> ↗. Без <span class="pl">czy</span> підйом ще помітніший — лише інтонація відрізняє питання від ствердження.</p>
<p>Ввічливі формули вимовляються м’яко, без натиску: <span class="pl">przepraszam</span> (пор. укр. «перепрошую») — наголос на «pra»; <span class="pl">czy mógłby mi pan…</span> — у швидкому мовленні ł майже не чути: «мугби мі пан».</p>`,
        items: [
          { type: "listen", text: "Przepraszam, czy mógłby mi pan pomóc?", ru: "Перепрошую, чи не могли б ви мені допомогти?", note: "м’який підйом наприкінці" },
          { type: "listen", text: "Czy jest tu gdzieś w pobliżu apteka?", ru: "Чи є тут десь поблизу аптека?", note: "питання з czy: підйом на останньому слові" },
          { type: "listen", text: "Jak dojść do dworca?", ru: "Як пройти до вокзалу?", note: "питання зі словом jak: тон знижується" },
          { type: "listen", text: "Pan jest stąd?", ru: "Ви місцевий? (питання)", note: "Без «czy» питання передається лише інтонацією: голос піднімається на останньому слові." },
          { type: "listen", text: "Pan jest stąd.", ru: "Ви місцевий. (ствердження)", note: "Ствердження: голос до кінця знижується. Вимовте обидві фрази й відчуйте різницю." },
          { type: "stress", word: "przepraszam", syllables: ["prze", "pra", "szam"], answer: 1 },
          { type: "stress", word: "skrzyżowanie", syllables: ["skrzy", "żo", "wa", "nie"], answer: 2 },
          { type: "dictation", text: "Przepraszam, jak dojść na plażę? Proszę iść prosto, a potem skręcić w lewo." }
        ]
      },

      reading: {
        title: "Jak dojść do Domu Kopernika?",
        text: "Michał przyjechał do Torunia tylko na jeden dzień. Chce zobaczyć Dom Kopernika, ale zgubił się na Starym Mieście. Pyta starszą panią:\n\n— Przepraszam, czy mogłaby mi pani powiedzieć, jak dojść do Domu Kopernika?\n\n— Oczywiście! Proszę iść prosto, a na skrzyżowaniu skręcić w lewo. Dom Kopernika jest po prawej stronie.\n\nMichał idzie prosto, skręca w lewo… i widzi tylko sklep z piernikami. Pyta chłopaka na hulajnodze:\n\n— Sorry, gdzie jest Dom Kopernika?\n\n— Idziesz w złym kierunku! Musisz wrócić na rynek i iść w stronę Wisły. To pięć minut stąd.\n\nMichał wraca na rynek. Przy pomniku Kopernika stoi policjant.\n\n— Dom Kopernika? Jest pan już blisko! Prosto, na rogu w prawo i jest pan na miejscu.\n\nPo pół godzinie Michał w końcu stoi przed muzeum. Ale na drzwiach wisi kartka: „Dziś nieczynne”. Michał śmieje się i… idzie do sklepu z piernikami. W Toruniu pierniki zawsze poprawiają humor!",
        glossary: [
          { pl: "starszą panią", ru: "літню жінку" },
          { pl: "z piernikami", ru: "з (торунськими) пряниками" },
          { pl: "w stronę", ru: "у бік, у напрямку" },
          { pl: "na miejscu", ru: "на місці" },
          { pl: "kartka", ru: "аркуш, записка (не «картка»!)" },
          { pl: "nieczynne", ru: "зачинено, не працює" },
          { pl: "poprawiają humor", ru: "покращують настрій (humor тут — настрій)" }
        ],
        questions: [
          { type: "tf", q: "Michał mieszka w Toruniu.", answer: false, explain: "Michał przyjechał do Torunia tylko na jeden dzień." },
          { type: "choice", q: "Kogo Michał pyta o drogę najpierw?", options: ["Policjanta", "Starszą panią", "Chłopaka na hulajnodze"], answer: 1, explain: "Najpierw pyta starszą panią, potem chłopaka, a na końcu policjanta." },
          { type: "tf", q: "Chłopak mówi, że Michał idzie w złym kierunku.", answer: true, explain: "„Idziesz w złym kierunku!”" },
          { type: "choice", q: "Gdzie stoi policjant?", options: ["Przy pomniku Kopernika", "Na dworcu", "W sklepie z piernikami"], answer: 0, explain: "„Przy pomniku Kopernika stoi policjant”." },
          { type: "choice", q: "Dlaczego Michał nie zwiedza Domu Kopernika?", options: ["Bo jest zmęczony", "Bo muzeum jest dziś nieczynne", "Bo nie ma biletu"], answer: 1, explain: "Na drzwiach wisi kartka: „Dziś nieczynne”." }
        ]
      },

      writing: {
        prompt: "Друг приїжджає до вас поїздом. Напишіть йому повідомлення, як дійти від вокзалу до кав’ярні, де ви на нього чекатимете: 3–4 вказівки (prosto, skręcić, na skrzyżowaniu…), що він побачить дорогою і де саме ви сидітимете.",
        minWords: 40, maxWords: 80,
        useWords: ["prosto", "skrzyżowanie", "w pobliżu", "skręcić"],
        checklist: [
          { label: "Щонайменше 2 вказівки напрямку (prosto, w lewo, w prawo)", pattern: "w lewo|w prawo|prosto", min: 2 },
          { label: "Щонайменше 2 вирази «куди?» з do + родовий", pattern: "(?<!\\p{L})do\\s+\\p{L}+(a|u|y|i)(?!\\p{L})", min: 2 }
        ],
        model: "Cześć, Pawle! Z dworca do kawiarni jest blisko, tylko dziesięć minut pieszo. Wychodzisz z dworca i idziesz prosto ulicą Długą do skrzyżowania. Na skrzyżowaniu skręcasz w prawo, a na światłach w lewo. Po prawej stronie zobaczysz duży park. Kawiarnia jest w pobliżu, na rogu, naprzeciwko apteki. Będę czekać przy oknie. Jeśli się zgubisz, zadzwoń! Do zobaczenia!"
      }
    },

    // ───────────────────────── Урок 5 (повторення) ─────────────────────────
    {
      id: "m05l5",
      title: "Powtórka 5: w podróży",
      titleRu: "Повторення модуля 5",
      topic: "Podróże po Polsce",
      review: true,
      minutes: 30,
      goals: [
        "Закріпити місцевий відмінок: закінчення, чергування, прикметники, прийменники w / na / o / po / przy",
        "Упевнено вибирати між idę/chodzę, jadę/jeżdżę, lecę/latam",
        "Розрізняти Gdzie? / Dokąd? / Skąd? і розповідати про подорож Польщею"
      ],

      vocab: [
        { pl: "podróżować", ru: "подорожувати", ex: "Najbardziej lubię podróżować pociągiem.", exRu: "Найбільше я люблю подорожувати поїздом." },
        { pl: "zwiedzać / zwiedzić", ru: "оглядати / оглянути (місто, музей)", ex: "Chcemy zwiedzić Stare Miasto w Gdańsku.", exRu: "Ми хочемо оглянути Старе місто в Гданську." },
        { pl: "wycieczka", g: "f", ru: "екскурсія, поїздка", ex: "W sobotę jedziemy na wycieczkę do Malborka.", exRu: "У суботу ми їдемо на екскурсію до Мальборка." },
        { pl: "przewodnik", g: "m", ru: "гід, екскурсовод; путівник", ex: "Przewodnik opowiadał nam o historii zamku.", exRu: "Гід розповідав нам про історію замку." },
        { pl: "nocleg", g: "m", ru: "нічліг, житло (у поїздці)", ex: "Szukamy taniego noclegu w centrum.", exRu: "Ми шукаємо недороге житло в центрі." },
        { pl: "zamek", g: "m", ru: "замок (фортеця)", ex: "W zamku w Malborku jest muzeum.", exRu: "У замку в Мальборку є музей.", note: "w zamku; ще одне значення — дверний замок" },
        { pl: "wieża", g: "f", ru: "вежа", ex: "Na wieży kościoła Mariackiego gra trębacz.", exRu: "На вежі Маріацького костелу грає сурмач.", note: "na wieży" },
        { pl: "widok", g: "m", ru: "вид, краєвид (на місто, на море)", ex: "Z tarasu jest piękny widok na morze.", exRu: "З тераси чудовий вид на море.", note: "widok na + знах. в." },
        { pl: "pamiątka", g: "f", ru: "сувенір; пам’ять", ex: "Kupiłam magnes na pamiątkę.", exRu: "Я купила магніт на пам’ять.", note: "хибний друг: не «пам’ятка» (пам’ятка — це zabytek)" },
        { pl: "bursztyn", g: "m", ru: "бурштин", ex: "Gdańsk słynie z bursztynu.", exRu: "Гданськ славиться бурштином." }
      ],

      grammar: {
        title: "Підсумок модуля 5: місцевий відмінок і дієслова руху",
        html: `<h4>1. Іменники: «де?»</h4>
<table class="g"><tr><th>закінчення</th><th>коли</th><th>приклади</th></tr>
<tr><td>-e + чергування</td><td>тверда основа (крім ч. і с. р. на k, g, ch)</td><td class="pl">w Krakowie, w Polsce, w Pradze, w teatrze, na poczcie, w mieście</td></tr>
<tr><td>-u</td><td>ч. і с. р. на k, g, ch і на м’яку/шиплячу</td><td class="pl">na rynku, w Gdańsku, na dworcu, w hotelu, na osiedlu, w domu</td></tr>
<tr><td>-i / -y</td><td>ж. р. з м’якою або шиплячою основою</td><td class="pl">w Gdyni, w kawiarni, na ulicy, na plaży, na wsi</td></tr>
<tr><td>без змін</td><td>слова на -um</td><td class="pl">w muzeum, w centrum</td></tr></table>
<h4>2. Прикметники та займенники</h4>
<table class="g"><tr><th>ч. і с. рід: -ym / -im</th><th>ж. рід: -ej</th></tr>
<tr><td class="pl">w nowym banku, w polskim mieście, w tym hotelu</td><td class="pl">na głównej poczcie, w mojej dzielnicy, przy tej ulicy</td></tr></table>
<p>Назви-прикметники відмінюються як прикметники: <span class="pl">Zakopane → w Zakopanem, do Zakopanego</span> (як укр. <i>Кам’янське → у Кам’янському</i>).</p>
<h4>3. Прийменники з місцевим відмінком</h4>
<p><span class="pl">w, na</span> — де; <span class="pl">o</span> — про кого, про що (<span class="pl">o Polsce</span>; українською тут знахідний: «про Польщу»); <span class="pl">po</span> — по поверхні або після (<span class="pl">po plaży, po pracy</span>); <span class="pl">przy</span> — біля, коло, на (в адресі) (<span class="pl">przy ulicy Długiej</span>). Запам’ятайте: <span class="pl">w pracy, w kuchni, na basenie, na wsi</span>.</p>
<h4>4. Дієслова руху</h4>
<table class="g"><tr><th></th><th>зараз, один раз</th><th>регулярно, загалом</th></tr>
<tr><td>пішки</td><td class="pl">idę, idziesz, idą</td><td class="pl">chodzę, chodzisz, chodzą</td></tr>
<tr><td>транспортом</td><td class="pl">jadę, jedziesz, jadą</td><td class="pl">jeżdżę, jeździsz, jeżdżą</td></tr>
<tr><td>у повітрі</td><td class="pl">lecę, lecisz, lecą</td><td class="pl">latam, latasz, latają</td></tr></table>
<h4>5. Де? Куди? Звідки?</h4>
<table class="g"><tr><th>Gdzie?</th><th>Dokąd?</th><th>Skąd?</th></tr>
<tr><td class="pl">w Gdańsku</td><td class="pl">do Gdańska</td><td class="pl">z Gdańska</td></tr>
<tr><td class="pl">na plaży</td><td class="pl">na plażę</td><td class="pl">z plaży</td></tr>
<tr><td class="pl">nad jeziorem</td><td class="pl">nad jezioro</td><td class="pl">znad jeziora</td></tr>
<tr><td class="pl">w Tatrach</td><td class="pl">w Tatry</td><td class="pl">z Tatr</td></tr>
<tr><td class="pl">u lekarza</td><td class="pl">do lekarza</td><td class="pl">od lekarza</td></tr></table>
<div class="tip">П’ять головних пасток модуля: <span class="pl">na rynku</span> (не *rynke), <span class="pl">w domu</span> (не *domie), <span class="pl">w pracy</span> (українською «на роботі»), <span class="pl">autobus jedzie</span> (не «іде»), <span class="pl">jadę nad morze</span> (не *na morze).</div>
<div class="ex"><span class="pl">Co roku jeździmy nad morze, ale w tym roku jedziemy w góry, do Zakopanego.</span> — Щороку ми їздимо на море, але цього року їдемо в гори, до Закопаного.</div>`
      },

      exercises: [
        { type: "gap", q: "Moja siostra mieszka w ___ (Gdynia).", answers: ["Gdyni"], explain: "Ж. р. на -ia → -i: Gdynia → w Gdyni (як kawiarnia → w kawiarni)." },
        { type: "gap", q: "Byliśmy na ___ (wieża) kościoła Mariackiego.", answers: ["wieży"], explain: "wieża → na wieży: після ż пишеться -y (хоча українською «на вежі»)." },
        { type: "choice", q: "Przewodnik opowiadał nam o ___ zamku.", options: ["starym", "starego", "stary"], answer: 0, explain: "o + місцевий; прикметник ч. р. → -ym: o starym zamku (укр. «про старий замок» — знахідний)." },
        { type: "choice", q: "Wieczorem byliśmy ___ koncercie w filharmonii.", options: ["na", "w", "do"], answer: 0, explain: "Заходи — з na: na koncercie, na wykładzie, na meczu (як укр. «на концерті, на лекції, на матчі»)." },
        { type: "gap", q: "Rano spacerowaliśmy po ___ (plaża) w Sopocie.", answers: ["plaży"], explain: "po + місцевий: plaża → po plaży." },
        { type: "choice", q: "Co roku ___ na wakacje nad morze.", options: ["jeździmy", "jedziemy", "chodzimy"], answer: 0, explain: "co roku = регулярно → jeździć: my jeździmy." },
        { type: "choice", q: "Patrz! Tam ___ samolot do Londynu.", options: ["leci", "lata", "jedzie"], answer: 0, explain: "Зараз, в одному напрямку (do Londynu) → lecieć: leci." },
        { type: "gap", q: "Jutro ___ (jechać, my) na wycieczkę do Malborka.", answers: ["jedziemy"], explain: "Одна конкретна, запланована поїздка → jechać: my jedziemy." },
        { type: "match", q: "Gdzie? → Dokąd? З’єднайте пари", pairs: [["na plaży", "na plażę"], ["w zamku", "do zamku"], ["nad jeziorem", "nad jezioro"], ["w Tatrach", "w Tatry"], ["na wycieczce", "na wycieczkę"]], explain: "na + місц. → na + знах.; w + місц. → do + род.; nad + оруд. → nad + знах.; w górach / w Tatrach → w góry / w Tatry." },
        { type: "gap", q: "Kupiłam pamiątkę w sklepie przy ___ (ulica) Mariackiej.", answers: ["ulicy"], explain: "przy + місцевий: ulica → przy ulicy (після c — -y)." },
        { type: "order", ru: "Ми шукаємо житло поблизу вокзалу.", words: ["Szukamy", "noclegu", "w", "pobliżu", "dworca."], alt: ["W pobliżu dworca szukamy noclegu."], explain: "szukać + родовий: noclegu (укр. «шукати житло» — знахідний); w pobliżu + родовий: dworca (як укр. «поблизу вокзалу»)." },
        { type: "order", ru: "З вежі відкривається гарний вид на місто.", words: ["Z", "wieży", "jest", "piękny", "widok", "na", "miasto."], alt: [], explain: "Skąd? — z wieży (z + родовий); widok na + знахідний: na miasto." },
        { type: "translate", ru: "Ми їдемо до Гданська поїздом.", answers: ["Jedziemy do Gdańska pociągiem.", "Jedziemy pociągiem do Gdańska.", "My jedziemy do Gdańska pociągiem."], explain: "jechać do + родовий: do Gdańska; транспорт — орудний: pociągiem. Усе як в українській!" },
        { type: "translate", ru: "Я часто думаю про Польщу.", answers: ["Często myślę o Polsce.", "Myślę często o Polsce.", "Ja często myślę o Polsce."], explain: "o + місцевий: Polska → o Polsce (k → c). Українською «про Польщу» — знахідний, польською — місцевий." },
        { type: "choice", q: "Proszę iść prosto, a na rogu skręcić ___.", options: ["w lewo", "po lewej", "na lewej"], answer: 0, explain: "Напрямок (куди?) — w lewo. po lewej (stronie) — це місце (де?)." }
      ],

      pronunciation: {
        focus: "Повторення: пом’якшення, i / y, шиплячі, інтонація",
        tip: `<p>Повторюємо все, що тренували в модулі:</p>
<ul><li>чергування в місцевому відмінку: <span class="pl">w Pradze, na poczcie, w Sopocie</span>;</li>
<li>різниця <b>i / y</b> (як наші [і] / [и]): <span class="pl">widać / wydać</span>;</li>
<li>шиплячі й м’які: <span class="pl">jeździmy</span> (м’яко) vs <span class="pl">jeżdżę</span> (твердо);</li>
<li>підйом тону в питанні «так / ні»: <span class="pl">Czy ten tramwaj jedzie na dworzec?</span> ↗</li></ul>
<p>Зверніть увагу на наголос: <span class="pl">Zakopane</span> відмінюється як прикметник, але наголос залишається на передостанньому складі — <span class="pl">w Zakopanem</span>. А у формах на -liśmy він падає на третій склад від кінця: <span class="pl">podróżowaliśmy</span>.</p>`,
        items: [
          { type: "listen", text: "W Gdańsku, w Gdyni i w Sopocie", ru: "У Гданську, Гдині та Сопоті", note: "-u, -i, -cie" },
          { type: "minimal", options: ["widać", "wydać"], ru: ["видно", "витратити, видати"] },
          { type: "minimal", options: ["noce", "nodze"], ru: ["ночі", "(на) нозі"] },
          { type: "stress", word: "Zakopanem", syllables: ["Za", "ko", "pa", "nem"], answer: 2 },
          { type: "stress", word: "podróżowaliśmy", syllables: ["po", "dró", "żo", "wa", "li", "śmy"], answer: 3 },
          { type: "listen", text: "Przepraszam, czy ten tramwaj jedzie na dworzec?", ru: "Перепрошую, цей трамвай їде на вокзал?", note: "підйом тону наприкінці" },
          { type: "dictation", text: "Latem jeździmy nad morze, a zimą w góry." }
        ]
      },

      reading: {
        title: "Majówka w Trójmieście",
        text: "Mój chłopak Bartek i ja uwielbiamy podróżować, ale nie lubimy latać. Dlatego na majówkę pojechaliśmy z Krakowa do Gdańska pociągiem. Podróż trwała prawie sześć godzin, ale w Pendolino było wygodnie.\n\nNocleg mieliśmy na Starym Mieście, w małym hotelu przy ulicy Mariackiej. Pierwszego dnia zwiedzaliśmy Gdańsk z przewodnikiem. Pan Adam opowiadał nam o historii miasta, o fontannie Neptuna i o stoczni. Potem weszliśmy na wieżę Bazyliki Mariackiej. Z wieży był niesamowity widok na całe miasto! W małym sklepie na Długim Targu kupiłam pamiątkę — kolczyki z bursztynu.\n\nDrugiego dnia pojechaliśmy kolejką SKM do Sopotu. Spacerowaliśmy po Monciaku, a potem siedzieliśmy na plaży. Bartek chciał popływać w morzu, ale woda miała tylko dziesięć stopni, więc jedynie zamoczył nogi.\n\nWieczorem pojechaliśmy jeszcze do Gdyni. W porcie nie wiedzieliśmy, dokąd iść, więc zapytałam starszego pana, jak dojść do Daru Pomorza. „Proszę iść prosto, a przy fontannie skręcić w lewo” — odpowiedział. Dar Pomorza to stary żaglowiec, a dziś muzeum na wodzie.\n\nTrzeciego dnia była wycieczka do Malborka. To podobno największy zamek na świecie! W zamku zgubiliśmy się dwa razy, ale na szczęście przewodniczka zawsze nas znajdowała.\n\nW niedzielę wieczorem wróciliśmy do Krakowa. Na dworcu Bartek powiedział: „W przyszłym roku jedziemy w góry!”. A ja już tęsknię za morzem.",
        glossary: [
          { pl: "majówkę", ru: "травневі свята (поїздку на травневі)" },
          { pl: "żaglowiec", ru: "вітрильник" },
          { pl: "stoczni", ru: "верфі (Гданська корабельня)" },
          { pl: "weszliśmy", ru: "ми піднялися, зайшли" },
          { pl: "kolczyki", ru: "сережки" },
          { pl: "kolejką SKM", ru: "міською електричкою SKM" },
          { pl: "po Monciaku", ru: "по «Монцяку» (головна вулиця Сопота)" },
          { pl: "zamoczył nogi", ru: "намочив ноги" },
          { pl: "przewodniczka", ru: "екскурсоводка, гід (жінка)" },
          { pl: "tęsknię za", ru: "сумую за" }
        ],
        questions: [
          { type: "tf", q: "Narratorka i Bartek polecieli do Gdańska samolotem.", answer: false, explain: "Nie lubią latać, dlatego pojechali pociągiem Pendolino." },
          { type: "choice", q: "Gdzie mieli nocleg?", options: ["W Sopocie, przy plaży", "Na Starym Mieście, przy ulicy Mariackiej", "W zamku w Malborku"], answer: 1, explain: "„Nocleg mieliśmy na Starym Mieście, w małym hotelu przy ulicy Mariackiej”." },
          { type: "choice", q: "Co narratorka kupiła na pamiątkę?", options: ["Kolczyki z bursztynu", "Magnes z Neptunem", "Przewodnik po Gdańsku"], answer: 0, explain: "„Kupiłam pamiątkę — kolczyki z bursztynu”." },
          { type: "tf", q: "Bartek pływał w morzu.", answer: false, explain: "Woda miała tylko dziesięć stopni, więc Bartek jedynie zamoczył nogi." },
          { type: "tf", q: "W zamku w Malborku zgubili się dwa razy.", answer: true, explain: "„W zamku zgubiliśmy się dwa razy”." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля. Напишіть допис у блог про поїздку до польського міста (справжню чи вигадану): куди й чим ви їхали, де жили, що оглянули й де гуляли, чи траплялося так, що ви заблукали або питали дорогу, що купили на пам’ять.",
        minWords: 60, maxWords: 90,
        useWords: ["zwiedzać", "nocleg", "widok", "pamiątka"],
        checklist: [
          { label: "Щонайменше 4 вирази «де?» (w / na / po / przy + місцевий)", pattern: "(?<!\\p{L})(w|we|na|o|po|przy)\\s+\\p{L}+(e|u|y|i|ej|ym|im|em|ach)(?!\\p{L})", min: 4 },
          { label: "Щонайменше 2 дієслова руху (jechać / jeździć, iść / chodzić, lecieć / latać)", pattern: "(?<!\\p{L})(po|w)?(jecha|jeźdz|jeżdż|jad|jedzi|szed|szł|chodz|leci|lecia|lata)\\p{L}*", min: 2 }
        ],
        model: "W lutym byłem z kolegami w Zakopanem. Pojechaliśmy tam nocnym pociągiem z Gdańska. Nocleg mieliśmy w starym drewnianym domu przy ulicy Kościeliskiej. Codziennie chodziliśmy w góry, a wieczorem spacerowaliśmy po Krupówkach. Jednego dnia wjechaliśmy kolejką na Kasprowy Wierch. Z góry był niesamowity widok na Tatry! Niestety we mgle się zgubiliśmy, ale miły turysta pokazał nam drogę do schroniska. Na pamiątkę kupiłem oscypki i ciepłe skarpety. Następnym razem chcę zwiedzić Kraków."
      }
    }
  ]
});
