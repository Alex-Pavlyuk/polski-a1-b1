// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m06",
  n: 6,
  level: "A2",
  title: "Zdrowie",
  titleRu: "Здоров’я",
  summary: "Ви вмієте розповісти про самопочуття, поговорити з лікарем і фармацевтом, давати поради, просити й забороняти (наказовий спосіб, proszę, niech) та впевнено вживаєте давальний відмінок: кому допомогти, що кому подарувати, кому холодно. Фінальний урок — контрольна з усієї граматики A2.",
  lessons: [

    // ───────────────────────── Урок 1 ─────────────────────────
    {
      id: "m06l1",
      title: "Co ci jest?",
      titleRu: "Давальний відмінок займенників",
      topic: "Samopoczucie",
      review: false,
      minutes: 25,
      goals: [
        "Відмінювати особові займенники в давальному відмінку й вибирати коротку або повну форму (mi / mnie, ci / tobie)",
        "Вживати дієслова з давальним: podobać się, smakować, pomagać, dziękować, dolegać",
        "Розповідати про самопочуття: Słabo mi, Kręci mi się w głowie, Mam gorączkę"
      ],

      vocab: [
        { pl: "samopoczucie", g: "n", ru: "самопочуття", ex: "Po urlopie mam świetne samopoczucie.", exRu: "Після відпустки в мене чудове самопочуття." },
        { pl: "dolegać", ru: "турбувати (про хворобу)", note: "komu? — Co panu dolega? = Що вас турбує? (пор. укр. «що вам дошкуляє?» — теж давальний)", ex: "Co ci dolega? Wyglądasz blado.", exRu: "Що тебе турбує? Ти виглядаєш блідим." },
        { pl: "przeziębiony", ru: "застуджений", note: "ж. р. przeziębiona", ex: "Jestem przeziębiony, więc dziś pracuję z domu.", exRu: "Я застуджений, тому сьогодні працюю з дому." },
        { pl: "gorączka", g: "f", ru: "температура, жар", note: "mieć gorączkę = мати (підвищену) температуру", ex: "Dziecko ma wysoką gorączkę.", exRu: "У дитини висока температура." },
        { pl: "kaszel", g: "m", ru: "кашель", note: "род. в. kaszlu — випадне e", ex: "Suchy kaszel nie daje mi spać.", exRu: "Сухий кашель не дає мені спати." },
        { pl: "katar", g: "m", ru: "нежить", note: "хибний друг: це не медичний «катар», а звичайний нежить", ex: "Mam katar i ciągle kicham.", exRu: "У мене нежить, і я постійно чхаю." },
        { pl: "dreszcze", g: "pl", ru: "озноб, дрижаки", ex: "Wieczorem miałam dreszcze i bolała mnie głowa.", exRu: "Увечері мене морозило й боліла голова." },
        { pl: "słabo", ru: "зле, млосно (про самопочуття)", note: "Słabo mi — мені зле, млосно", ex: "Słabo mi, muszę na chwilę usiąść.", exRu: "Мені зле, треба ненадовго сісти." },
        { pl: "niedobrze", ru: "недобре, нудить", note: "Niedobrze mi — мене нудить", ex: "Po tej rybie jest mi niedobrze.", exRu: "Після цієї риби мене нудить." },
        { pl: "kręcić się w głowie", ru: "паморочитися (про голову)", note: "Kręci mi się w głowie — у мене паморочиться голова", ex: "Od rana kręci mi się w głowie.", exRu: "З самого ранку в мене паморочиться голова." },
        { pl: "szkodzić", ru: "шкодити", note: "komu? czemu? — як і укр. «шкодити кому»", ex: "Kawa na pusty żołądek mi szkodzi.", exRu: "Кава на голодний шлунок мені шкодить." },
        { pl: "służyć", ru: "іти на користь, підходити", note: "komu? — Ten klimat mi nie służy.", ex: "Morskie powietrze bardzo mi służy.", exRu: "Морське повітря дуже йде мені на користь." },
        { pl: "wyzdrowieć", ru: "одужати", note: "док. вид: wyzdrowieję, wyzdrowiejesz", ex: "Mam nadzieję, że szybko wyzdrowiejesz!", exRu: "Сподіваюся, ти швидко одужаєш!" },
        { pl: "ufać", ru: "довіряти", note: "komu? — ufam ci (а не «ufam cię»), як і укр. «довіряю тобі»", ex: "Ufasz mu? — Tak, ufam mu w stu procentach.", exRu: "Ти йому довіряєш? — Так, довіряю на сто відсотків." }
      ],

      grammar: {
        title: "Давальний відмінок особових займенників",
        html: `<p>Давальний відмінок (<b>celownik</b>) відповідає на питання <span class="pl">komu? czemu?</span> — як українське «кому? чому?». Багато дієслів керують ним так само, як в українській. В особових займенників є <b>короткі</b> (ненаголошені) і <b>повні</b> (наголошені) форми — приблизно як <span class="pl">cię / ciebie</span> у знахідному.</p>
<table class="g"><tr><th></th><th>коротка</th><th>повна</th><th>після прийменника</th></tr>
<tr><td class="pl">ja</td><td class="pl">mi</td><td class="pl">mnie</td><td class="pl">dzięki mnie</td></tr>
<tr><td class="pl">ty</td><td class="pl">ci</td><td class="pl">tobie</td><td class="pl">dzięki tobie</td></tr>
<tr><td class="pl">on, ono</td><td class="pl">mu</td><td class="pl">jemu</td><td class="pl">dzięki niemu</td></tr>
<tr><td class="pl">ona</td><td class="pl">jej</td><td class="pl">jej</td><td class="pl">dzięki niej</td></tr>
<tr><td class="pl">my</td><td class="pl">nam</td><td class="pl">nam</td><td class="pl">dzięki nam</td></tr>
<tr><td class="pl">wy</td><td class="pl">wam</td><td class="pl">wam</td><td class="pl">dzięki wam</td></tr>
<tr><td class="pl">oni, one</td><td class="pl">im</td><td class="pl">im</td><td class="pl">dzięki nim</td></tr>
<tr><td class="pl">pan, pani, państwo</td><td class="pl">panu, pani, państwu</td><td class="pl">panu, pani, państwu</td><td class="pl">dzięki panu</td></tr>
</table>
<h4>Яку форму вибрати</h4>
<ul>
<li><b>Коротка</b> — у нейтральному мовленні, після дієслова або в середині фрази: <span class="pl">Podoba mi się ten film.</span></li>
<li><b>Повна</b> — на початку фрази та при протиставленні: <span class="pl">Mnie się podoba, a tobie?</span> <span class="pl">Jemu pomagam, a jej nie.</span></li>
<li><b>Після прийменника</b> — повна форма, а в 3-й особі з <b>n-</b>, як в українському «до нього», «з нею»: <span class="pl">dzięki niemu, przeciwko nim</span>. Прийменників із давальним небагато: <span class="pl">dzięki</span> (завдяки), <span class="pl">przeciwko</span> (проти), <span class="pl">wbrew</span> (всупереч). «Завдяки» та «всупереч» і в українській вимагають давального (завдяки тобі, всупереч батькам), а от наше «проти» — з родовим (проти нього).</li>
</ul>
<h4>Дієслова з давальним</h4>
<table class="g"><tr><th>дієслово</th><th>приклад</th><th>переклад</th></tr>
<tr><td class="pl">podobać się</td><td class="pl">Podobasz mi się.</td><td>Ти мені подобаєшся.</td></tr>
<tr><td class="pl">smakować</td><td class="pl">Smakuje ci zupa?</td><td>Тобі смакує суп?</td></tr>
<tr><td class="pl">pomagać</td><td class="pl">Pomagam jej w nauce.</td><td>Я допомагаю їй у навчанні.</td></tr>
<tr><td class="pl">dziękować</td><td class="pl">Dziękuję wam!</td><td>Дякую вам! (давальний — як в українській)</td></tr>
<tr><td class="pl">wierzyć</td><td class="pl">Nie wierzę mu.</td><td>Я йому не вірю.</td></tr>
<tr><td class="pl">dolegać</td><td class="pl">Co pani dolega?</td><td>Що вас турбує?</td></tr>
</table>
<div class="ex"><span class="pl">Co ci jest?</span> — Що з тобою? · <span class="pl">Słabo mi.</span> — Мені зле.</div>
<div class="tip"><b>Пастка 1.</b> Тут українцям пощастило: «дякую <i>тобі</i>» — давальний, і польське <span class="pl">dziękuję ci</span> — теж давальний. Тож ніколи не «dziękuję cię» — це знахідний!</div>
<div class="tip"><b>Пастка 2.</b> «У мене болить голова» — <span class="pl">Boli mnie głowa</span>: тут <span class="pl">mnie</span> — знахідний відмінок, а не давальний (дослівно «болить мене голова»). А от «мені зле, мене нудить» польською — давальний: <span class="pl">Niedobrze mi.</span></div>
<div class="tip"><b>Пастка 3.</b> Не починайте фразу з <span class="pl">mi</span>: не «Mi się podoba», а <span class="pl">Podoba mi się</span> або, з наголосом, <span class="pl">Mnie się podoba</span>. А от <span class="pl">smakować</span> — справжній друг: як і українське «смакувати», це «бути смачним для когось»: <span class="pl">Pierogi bardzo mi smakują.</span> — Вареники мені дуже смакують.</div>`
      },

      exercises: [
        { type: "choice", q: "Ta zupa bardzo ___ smakuje. (ja)", options: ["mi", "mnie", "mną"], answer: 0, explain: "У середині фрази без особливого наголосу — коротка форма mi. Mnie — для початку фрази або протиставлення, mną — орудний відмінок." },
        { type: "choice", q: "___ się to nie podoba, a tobie? (ja)", options: ["Mi", "Mnie", "Ja"], answer: 1, explain: "На початку фрази та при протиставленні («мені — а тобі?») потрібна повна форма mnie. З короткої mi фразу не починають." },
        { type: "gap", q: "Dziękuję ___ za pomoc! (ty)", answers: ["ci", "tobie"], explain: "dziękować + давальний: dziękuję ci (нейтрально) або tobie (з наголосом) — так само, як укр. «дякую тобі». Не «cię» — це знахідний." },
        { type: "gap", q: "Dzień dobry, co ___ dolega? (pan)", answers: ["panu"], explain: "Питання лікаря: Co panu dolega? / Co pani dolega? — pan у давальному відмінку: panu (пор. укр. «панові»)." },
        { type: "match", q: "З’єднайте займенник із його короткою формою в давальному відмінку", pairs: [["ja", "mi"], ["ty", "ci"], ["on", "mu"], ["ona", "jej"], ["my", "nam"], ["oni", "im"]], explain: "Короткі форми: mi, ci, mu, jej, nam, wam, im. В ona, my, wy, oni коротка й повна форми збігаються." },
        { type: "choice", q: "Dzięki ___ zdałem egzamin. (ona)", options: ["jej", "niej", "nią"], answer: 1, explain: "Після прийменника займенники 3-ї особи отримують n-: dzięki niej, dzięki niemu, dzięki nim (пор. укр. «до неї», «з ним»). Nią — орудний." },
        { type: "order", ru: "У мене паморочиться голова.", words: ["Kręci", "mi", "się", "w", "głowie."], alt: ["W głowie mi się kręci."], explain: "Безособова конструкція: kręci mi się w głowie — дослівно «крутиться мені в голові». Mi стоїть одразу після дієслова, перед się." },
        { type: "translate", ru: "Тобі подобається Краків?", answers: ["Podoba ci się Kraków?", "Czy podoba ci się Kraków?", "Kraków ci się podoba?", "Czy Kraków ci się podoba?"], explain: "podobać się + давальний: Podoba ci się…? — як укр. «тобі подобається». Ci не ставимо на початок фрази." },
        { type: "gap", q: "Pomagam ___ w nauce, a nie jej. (on)", answers: ["jemu"], explain: "Протиставлення («йому, а не їй») вимагає повної форми: jemu. У нейтральній фразі було б pomagam mu." },
        { type: "choice", q: "Od rana boli ___ głowa. (ja)", options: ["mi", "mnie", "mną"], answer: 1, explain: "Пастка! boleć вимагає знахідного: Boli mnie głowa — дослівно «болить мене голова». Давальний (mi) — у «Słabo mi», «Niedobrze mi»." }
      ],

      pronunciation: {
        focus: "ni, si, ci, zi vs ń, ś, ć, ź",
        tip: `<p>Літери <b>ś, ć, ź, ń</b> і сполучення <b>si, ci, zi, ni</b> позначають <b>ті самі</b> м’які звуки — змінюється лише написання:</p>
<ul>
<li>перед голосним пишемо <span class="pl">si-, ci-, zi-, ni-</span>, і <i>i</i> лише пом’якшує: <span class="pl">siedem</span> [ш’едем], <span class="pl">ciepło</span> [ч’епўо], <span class="pl">niebo</span> [н’ебо];</li>
<li>перед приголосним або в кінці слова — <span class="pl">ś, ć, ź, ń</span>: <span class="pl">dzień, jesień, ćma, źle</span>;</li>
<li>якщо після ci/si/zi/ni йде приголосний або кінець слова, i читається як голосний: <span class="pl">zima</span> [ж’іма], <span class="pl">ci</span> [ч’і].</li>
</ul>
<p>Порівняння з українською: <b>ć</b> — дуже м’яке «ч’»; такого звуку в нашій літературній мові немає, а українське «ч» тверде — як польське <b>cz</b>! <b>ś</b> — дуже м’яке «ш’» (а не «сь»); <b>ź</b> — його дзвінка пара, дуже м’яке «ж’»; <b>ń</b> — «н’», як у слові «кінь». Вимовляйте їх середньою частиною язика, губи злегка розтягнуті в усмішку.</p>`,
        items: [
          { type: "listen", text: "Co ci jest? Słabo mi.", ru: "Що з тобою? Мені зле.", note: "ci — м’яке [ч’і], а не тверде українське «чи»" },
          { type: "minimal", options: ["Kasia", "kasa"], ru: ["Кася (ім’я)", "каса"] },
          { type: "minimal", options: ["wieś", "wiesz"], ru: ["село", "(ти) знаєш"] },
          { type: "listen", text: "Zosia nie czuje się dziś dobrze.", ru: "Зося сьогодні погано почувається." },
          { type: "stress", word: "samopoczucie", syllables: ["sa", "mo", "po", "czu", "cie"], answer: 3 },
          { type: "stress", word: "przeziębiony", syllables: ["prze", "zię", "bio", "ny"], answer: 2 },
          { type: "dictation", text: "Zosi jest niedobrze, kręci jej się w głowie." }
        ]
      },

      reading: {
        title: "Akurat dzisiaj!",
        text: "W poniedziałek rano Marek budzi się i od razu wie, że coś jest nie tak. Kręci mu się w głowie, ma katar i dreszcze. Termometr pokazuje trzydzieści osiem i pół. Gorączka! I to akurat dzisiaj, kiedy ma w pracy ważne spotkanie.\n\nDzwoni do szefowej.\n\n– Pani Ewo, przepraszam, ale jestem przeziębiony. Słabo mi i nie dam rady przyjść do biura.\n\n– Nic się nie stało, panie Marku. Zdrowie jest najważniejsze. Szybkiego powrotu do zdrowia!\n\nPotem dzwoni mama.\n\n– Synku, co ci jest? Masz kaszel? Zaraz przyjadę i ugotuję ci rosół!\n\nMarek nie ma siły protestować. Mama mieszka w Opolu, ale po dwóch godzinach już stoi w drzwiach z wielkim garnkiem zupy.\n\nWieczorem Marek czuje się trochę lepiej. Rosół bardzo mu smakuje, a samopoczucie ma coraz lepsze.\n\n– Dziękuję ci, mamo – mówi. – Ale chyba za dużo jem. Ten rosół szkodzi mojej diecie!\n\n– Rosół nikomu nie szkodzi! – śmieje się mama. – Rosół każdemu służy. A do jutra na pewno wyzdrowiejesz.",
        glossary: [
          { pl: "akurat", ru: "якраз, саме" },
          { pl: "szefowej", ru: "начальниці (szefowa)" },
          { pl: "nie dam rady", ru: "не зможу, не впораюся" },
          { pl: "Nic się nie stało", ru: "нічого страшного" },
          { pl: "Szybkiego powrotu do zdrowia", ru: "швидкого одужання" },
          { pl: "rosół", ru: "бульйон, курячий суп" },
          { pl: "garnkiem", ru: "каструлею, горщиком (garnek)" },
          { pl: "nikomu", ru: "нікому (nikt)" }
        ],
        questions: [
          { type: "tf", q: "Marek ma gorączkę.", answer: true, explain: "Termometr pokazuje 38,5 — це температура (gorączka)." },
          { type: "choice", q: "Co mówi szefowa?", options: ["Że Marek musi przyjść na spotkanie.", "Że zdrowie jest najważniejsze.", "Że spotkanie jest jutro."], answer: 1, explain: "Szefowa: «Zdrowie jest najważniejsze» — здоров’я найважливіше." },
          { type: "tf", q: "Mama Marka mieszka w Krakowie.", answer: false, explain: "Мама живе в Ополі: «Mama mieszka w Opolu»." },
          { type: "choice", q: "Jak Marek czuje się wieczorem?", options: ["Gorzej niż rano.", "Trochę lepiej.", "Jest już zupełnie zdrowy."], answer: 1, explain: "«Wieczorem Marek czuje się trochę lepiej» — трохи краще, але ще не здоровий." },
          { type: "tf", q: "Według mamy rosół każdemu służy.", answer: true, explain: "Мама: «Rosół każdemu służy» — бульйон усім іде на користь (każdemu — давальний, як укр. «кожному»)." }
        ]
      },

      writing: {
        prompt: "Ви захворіли й не зможете прийти на день народження подруги Олі. Напишіть їй повідомлення: 1) перепросіть і опишіть симптоми; 2) розкажіть, хто вам допомагає; 3) подякуйте за запрошення; 4) запитайте, чи подобається їй ваш подарунок (його мав привезти кур’єр).",
        minWords: 40,
        maxWords: 80,
        useWords: ["przeziębiony", "gorączka", "słabo", "wyzdrowieć"],
        checklist: [
          { label: "Щонайменше 3 короткі форми давального (mi, ci, mu, nam, wam, im)", pattern: "(?<![\\p{L}])(mi|ci|mu|nam|wam|im)(?![\\p{L}])", min: 3 },
          { label: "Щонайменше 2 дієслова з давальним (podoba się, smakuje, pomaga, dziękuję…)", pattern: "(podob|smakow|smakuj|pomag|pomog|dziękuj|dolega|szkodz|służ|ufa)", min: 2 }
        ],
        model: "Cześć Olu! Niestety nie przyjdę jutro na twoje urodziny. Jestem przeziębiona: mam gorączkę, katar i okropny kaszel. Od rana jest mi słabo i kręci mi się w głowie. Na szczęście mama mi pomaga – ugotowała mi rosół, który bardzo mi smakował. Dziękuję ci za zaproszenie! Mam nadzieję, że szybko wyzdrowieję i zobaczymy się w przyszłym tygodniu. Czy podoba ci się mój prezent? Kurier miał go przywieźć dziś rano. Buziaki, Kasia"
      }
    },

    // ───────────────────────── Урок 2 ─────────────────────────
    {
      id: "m06l2",
      title: "Kupuję mamie prezent",
      titleRu: "Давальний відмінок іменників",
      topic: "Prezenty i pomoc",
      review: false,
      minutes: 25,
      goals: [
        "Ставити іменники та прикметники в давальний відмінок: mamie, bratu, mojemu koledze",
        "Говорити, кому що даруєте, позичаєте, чого бажаєте",
        "Висловлювати стан безособовими конструкціями: Zimno mi, Przykro mi, Wstyd mi"
      ],

      vocab: [
        { pl: "podarować", ru: "подарувати", note: "komu? co? — podarować mamie kwiaty", ex: "Na urodziny podarowałam bratu zegarek.", exRu: "На день народження я подарувала братові годинник." },
        { pl: "pożyczać / pożyczyć", ru: "позичати / позичити", note: "pożyczyć komuś — дати в борг; pożyczyć od kogoś — узяти в борг (як укр. «позичити комусь / у когось»)", ex: "Pożyczysz mi sto złotych do piątku?", exRu: "Позичиш мені сто злотих до п’ятниці?" },
        { pl: "życzyć", ru: "бажати", note: "komu? + czego? — Życzę ci zdrowia. (як укр. «бажаю тобі здоров’я»)", ex: "Życzymy wam wesołych świąt!", exRu: "Бажаємо вам веселих свят!" },
        { pl: "polecać / polecić", ru: "рекомендувати / порекомендувати, радити", note: "komu? co?", ex: "Polecam ci tę kawiarnię na Kazimierzu.", exRu: "Раджу тобі цю кав’ярню на Казімежі." },
        { pl: "obiecywać / obiecać", ru: "обіцяти / пообіцяти", note: "komu?", ex: "Obiecałem mamie, że zadzwonię wieczorem.", exRu: "Я пообіцяв мамі, що зателефоную ввечері." },
        { pl: "przeszkadzać", ru: "заважати", note: "komu? — Nie przeszkadzaj mi! (як укр. «не заважай мені»)", ex: "Czy nie przeszkadza panu muzyka?", exRu: "Вам не заважає музика?" },
        { pl: "kibicować", ru: "уболівати (за команду)", note: "komu? — kibicuję Legii (дослівно «вболіваю Легії», а не «za Legię»)", ex: "Cała rodzina kibicuje polskim siatkarzom.", exRu: "Уся родина вболіває за польських волейболістів." },
        { pl: "dzięki", ru: "завдяки", note: "+ давальний, як і в українській: dzięki koleżance = завдяки подрузі", ex: "Dzięki sąsiadce znalazłam dobrego dentystę.", exRu: "Завдяки сусідці я знайшла хорошого стоматолога." },
        { pl: "imieniny", g: "pl", ru: "іменини", note: "у Польщі їх святкують не менш весело, ніж день народження", ex: "Na imieniny cioci kupiliśmy tort.", exRu: "На іменини тітки ми купили торт." },
        { pl: "niespodzianka", g: "f", ru: "сюрприз, несподіванка", ex: "Mam dla ciebie niespodziankę!", exRu: "У мене для тебе сюрприз!" },
        { pl: "karta podarunkowa", g: "f", ru: "подарункова картка", note: "Empik — мережа книгарень", ex: "Kupiłem siostrze kartę podarunkową do Empiku.", exRu: "Я купив сестрі подарункову картку в Empik." },
        { pl: "wstyd", ru: "соромно", note: "Wstyd mi — мені соромно", ex: "Wstyd mi, że zapomniałem o twoich urodzinach.", exRu: "Мені соромно, що я забув про твій день народження." },
        { pl: "szkoda", ru: "шкода", note: "Szkoda mi go — мені його шкода (як в українській)", ex: "Szkoda mi tego psa, jest taki chudy.", exRu: "Мені шкода цього пса, він такий худий." },
        { pl: "duszno", ru: "душно", note: "Duszno mi — мені душно", ex: "W zatłoczonym tramwaju zawsze jest mi duszno.", exRu: "У переповненому трамваї мені завжди душно." }
      ],

      grammar: {
        title: "Давальний відмінок іменників. Безособові конструкції",
        html: `<p>Іменники в давальному відмінку (<b>celownik</b>) відповідають на питання <span class="pl">komu? czemu?</span>. Типова схема — <b>кому (дав.) + що (знах.)</b> з дієсловами <span class="pl">dawać / dać, kupować / kupić, pokazywać / pokazać, pożyczać, podarować, obiecać</span>, а також <span class="pl">pomagać, dziękować, życzyć</span>.</p>
<div class="ex"><span class="pl">Daję mamie kwiaty.</span> — Я дарую (даю) мамі квіти.</div>
<h4>Однина</h4>
<table class="g"><tr><th>рід</th><th>закінчення</th><th>приклади</th></tr>
<tr><td>чоловічий (≈ укр. -ові / -еві)</td><td class="pl">-owi</td><td class="pl">Tomek → Tomkowi, lekarz → lekarzowi, sąsiad → sąsiadowi</td></tr>
<tr><td>чоловічий, винятки</td><td class="pl">-u</td><td class="pl">brat → bratu, ojciec → ojcu, pan → panu, chłopiec → chłopcu, pies → psu, kot → kotu</td></tr>
<tr><td>жіночий (і чоловічий на -a), тверда основа</td><td class="pl">-e / -ie</td><td class="pl">mama → mamie, siostra → siostrze, córka → córce, kolega → koledze, tata → tacie</td></tr>
<tr><td>жіночий, м’яка основа, -ca, -ia</td><td class="pl">-i / -y</td><td class="pl">babcia → babci, Ola → Oli, ulica → ulicy, Legia → Legii</td></tr>
<tr><td>середній</td><td class="pl">-u</td><td class="pl">dziecko → dziecku, miasto → miastu, zdrowie → zdrowiu</td></tr>
</table>
<div class="tip">Добра новина: чоловіче -owi — це наше -ові / -еві (Томкові, лікареві, сусідові); окремо запам’ятайте лише винятки на -u (bratu, ojcu, panu, psu). А давальний жіночого роду <b>збігається з місцевим</b> (модуль 5), як і в українській (мамі, сестрі): <span class="pl">o mamie → mamie, o córce → córce</span>. Чергування ті самі: k → c, g → dz, r → rz, t → ci: <span class="pl">córka → córce, Olga → Oldze, siostra → siostrze, Agata → Agacie</span> — пор. українські «доньці», «Ользі», «подрузі».</div>
<h4>Прикметники та множина</h4>
<table class="g"><tr><th></th><th>ч. р. / с. р.</th><th>ж. р.</th><th>мн.</th></tr>
<tr><td>закінчення</td><td class="pl">-emu</td><td class="pl">-ej</td><td class="pl">-ym / -im</td></tr>
<tr><td>приклад</td><td class="pl">mojemu bratu</td><td class="pl">mojej siostrze</td><td class="pl">moim rodzicom</td></tr>
</table>
<p>Іменники в множині майже завжди отримують <span class="pl">-om</span> (пор. укр. -ам / -ям): <span class="pl">rodzicom, dzieciom, przyjaciołom, studentom</span>. Прикметники теж нагадують українські: моєму братові, моїй сестрі, моїм батькам.</p>
<h4>Безособові конструкції «кому + як»</h4>
<p>Стан людини виражається прислівником + давальним, точнісінько як в українському «мені холодно»:</p>
<div class="ex"><span class="pl">Zimno mi.</span> / <span class="pl">Jest mi zimno.</span> — Мені холодно.</div>
<div class="ex"><span class="pl">Mamie było przykro.</span> — Мамі було прикро.</div>
<div class="ex"><span class="pl">Wstyd mi. Szkoda mi go. Wszystko mi jedno.</span> — Мені соромно. Мені його шкода. Мені все одно.</div>
<div class="tip"><b>Пастка.</b> <span class="pl">Jestem zimny / zimna</span> означає «я холодний / холодна (на дотик або за характером)», а не «мені холодно». У минулому часі — середній рід: <span class="pl">Było mi gorąco</span> (не «byłem gorąco»), як і в нас: «мені було спекотно».</div>
<div class="tip"><b>Друзі та хибні друзі.</b> <span class="pl">Przykro mi</span> — «мені прикро, шкода», як в українській; а от «głupio mi» — не «мені нерозумно», а «мені ніяково». <span class="pl">Kibicować komu</span> — «уболівати за кого», але без прийменника: <span class="pl">Kibicuję Legii.</span> <span class="pl">Pożyczyć komuś</span> — дати в борг, <span class="pl">pożyczyć od kogoś</span> — узяти в борг, як укр. «позичити комусь / у когось».</div>
<div class="tip">«Подарунок для мами» можна сказати й польською: <span class="pl">prezent dla mamy</span> (dla + родовий). Але з дієсловом природніший давальний: <span class="pl">Kupiłem mamie prezent.</span> — Я купив мамі подарунок.</div>`
      },

      exercises: [
        { type: "choice", q: "Kupiłem ___ nowy telefon. (brat)", options: ["bratowi", "bratu", "brata"], answer: 1, explain: "brat — виняток із закінченням -u: bratu (як ojcu, panu, chłopcu, psu, kotu). Українське «братові» тут підводить!" },
        { type: "gap", q: "Codziennie pomagam ___ w kuchni. (mama)", answers: ["mamie"], explain: "pomagać + давальний, як укр. «допомагати мамі». Жіночий рід на -a з твердою основою: mama → mamie (як у місцевому: o mamie)." },
        { type: "gap", q: "Na imieniny podarowałam ___ ciepły szal. (babcia)", answers: ["babci"], explain: "М’яка основа (-cia) → -i: babcia → babci, ciocia → cioci." },
        { type: "choice", q: "Pożyczyłem ___ sto złotych i do dziś mi nie oddał! (Tomek)", options: ["Tomkowi", "od Tomka", "Tomka"], answer: 0, explain: "Pożyczyć komuś (дав.) — дати в борг. «Він мені не віддав» — отже, гроші дав я: pożyczyłem Tomkowi. Pożyczyć od Tomka — позичити в Томка." },
        { type: "choice", q: "Obiecałam ___, że przyjdę na mecz. (mój kolega)", options: ["mojemu koledze", "mojemu kolegowi", "mojego kolegi"], answer: 0, explain: "kolega (чоловічий рід на -a) відмінюється як жіночий: koledze (g → dz, пор. укр. «колезі»). Прикметник — чоловічого роду: mojemu." },
        { type: "match", q: "З’єднайте слово з його формою в давальному відмінку", pairs: [["ojciec", "ojcu"], ["siostra", "siostrze"], ["dziecko", "dziecku"], ["córka", "córce"], ["lekarz", "lekarzowi"], ["pies", "psu"]], explain: "Чоловічий рід — -owi (lekarzowi) або -u у винятках (ojcu, psu); жіночий — -e з чергуванням (siostrze, córce); середній — -u (dziecku)." },
        { type: "choice", q: "W nocy ___ bardzo zimno. (ja)", options: ["byłam", "było mi", "miałam"], answer: 1, explain: "Безособова конструкція: było + давальний + прислівник. W nocy było mi zimno — як укр. «уночі мені було холодно»." },
        { type: "order", ru: "Мені прикро, що ти хворієш.", words: ["Przykro", "mi,", "że", "jesteś", "chory."], alt: [], explain: "Przykro mi — «мені прикро, шкода». Коротке mi стоїть після прислівника, не на початку фрази." },
        { type: "translate", ru: "Мені все одно.", answers: ["Wszystko mi jedno.", "Jest mi wszystko jedno."], explain: "Стійкий вираз: Wszystko mi jedno — дослівно «все мені одно»." },
        { type: "gap", q: "Życzę ___ wszystkiego najlepszego! (twój tata)", answers: ["twojemu tacie"], explain: "życzyć komu (дав.) czego (род.) — як укр. «бажати кому чого». tata відмінюється як жіночий рід: tacie (t → ci), але прикметник чоловічого роду: twojemu." }
      ],

      pronunciation: {
        focus: "rz після глухих = [ш] (przy, trzy, krzyczeć)",
        tip: `<p>Зазвичай <b>rz</b> читається як <b>ż</b> — дзвінке тверде «ж»: <span class="pl">rzeka, morze, brzuch</span>. Жодного «р» у ньому немає — не читайте його як українське «рж»! Цікаво, що на місці польського rz в українській часто стоїть «р»: ріка, море, три.</p>
<p>Але після глухих приголосних <b>p, t, k, ch</b> сполучення rz оглушується і звучить як <b>sz</b> (тверде «ш»): <span class="pl">przy</span> [пши], <span class="pl">trzy</span> [тши], <span class="pl">krzesło</span> [кшесўо], <span class="pl">chrzan</span> [хшан]. У кінці слова — теж [ш]: <span class="pl">lekarz</span> [лекаш].</p>
<p>Увага: <span class="pl">trz</span> — це <b>два</b> звуки, t + sz, а не одне «ч». Тому <span class="pl">trzy</span> (три) і <span class="pl">czy</span> (чи — як і в українській!) звучать по-різному: у першому слові чітко чути «т», а потім тверде «ш».</p>`,
        items: [
          { type: "listen", text: "Przepraszam, że krzyczę.", ru: "Перепрошую, що я кричу.", note: "prze- [пше], krzy- [кши]" },
          { type: "minimal", options: ["trzy", "czy"], ru: ["три", "чи (питальна частка)"] },
          { type: "minimal", options: ["trzech", "Czech"], ru: ["трьох", "чех"] },
          { type: "listen", text: "Przy oknie stoją trzy krzesła.", ru: "Біля вікна стоять три стільці." },
          { type: "stress", word: "przepraszam", syllables: ["prze", "pra", "szam"], answer: 1 },
          { type: "stress", word: "niespodzianka", syllables: ["nie", "spo", "dzian", "ka"], answer: 2 },
          { type: "dictation", text: "Przyjaciółka przyniosła mamie trzy prezenty." }
        ]
      },

      reading: {
        title: "Imieniny cioci Basi",
        text: "Czwartego grudnia ciocia Basia ma imieniny. W rodzinie Nowaków to ważny dzień, bo ciocia zawsze wszystkim pomaga: sąsiadce robi zakupy, dzieciom tłumaczy matematykę, a dziadkowi naprawia komputer.\n\nW tym roku każdy chce jej podarować coś wyjątkowego. Ola kupiła cioci kartę podarunkową do Empiku, bo ciocia uwielbia kryminały. Tomek oprawił w ramkę jej stare zdjęcie z Zakopanego, a mama upiekła sernik.\n\nTylko dziadek zapomniał. Rano było mu głupio i trochę wstyd.\n\n– Szkoda, że nie mam prezentu – powiedział wnuczce.\n\n– Dziadku, mam pomysł! – odpowiedziała Ola. – Pożyczę ci sto złotych i kupisz cioci kwiaty.\n\nWieczorem do małego mieszkania przyszło dwanaście osób. Było głośno, gorąco i duszno, ale wszyscy świetnie się bawili. Dziadek dał cioci ogromny bukiet róż i życzył jej dużo zdrowia. Ciocia miała łzy w oczach.\n\n– Dziękuję wam! Co za niespodzianka!\n\nA dziadek szepnął wnuczce do ucha:\n\n– Obiecuję ci, że oddam ci te pieniądze. Zaraz po moich imieninach!",
        glossary: [
          { pl: "wyjątkowego", ru: "особливе (wyjątkowy)" },
          { pl: "kryminały", ru: "детективи" },
          { pl: "oprawił w ramkę", ru: "вставив у рамку" },
          { pl: "głupio", ru: "ніяково" },
          { pl: "wnuczce", ru: "онучці (wnuczka)" },
          { pl: "łzy w oczach", ru: "сльози на очах" },
          { pl: "szepnął", ru: "шепнув, прошепотів" }
        ],
        questions: [
          { type: "tf", q: "Ciocia Basia ma imieniny w grudniu.", answer: true, explain: "«Czwartego grudnia ciocia Basia ma imieniny» — 4 грудня, день святої Барбари (Варвари)." },
          { type: "choice", q: "Co Ola kupiła cioci?", options: ["Kwiaty.", "Kartę podarunkową do Empiku.", "Sernik."], answer: 1, explain: "Оля купила тітці подарункову картку в Empik, бо тітка обожнює детективи." },
          { type: "tf", q: "Dziadek kupił prezent tydzień wcześniej.", answer: false, explain: "Дідусь забув про подарунок: «Tylko dziadek zapomniał»." },
          { type: "choice", q: "Kto pożyczył dziadkowi pieniądze?", options: ["Tomek.", "Mama.", "Ola."], answer: 2, explain: "Оля: «Pożyczę ci sto złotych» — позичу тобі (дав.) сто злотих." },
          { type: "choice", q: "Dlaczego w mieszkaniu było duszno?", options: ["Bo przyszło dużo gości.", "Bo mama piekła sernik.", "Bo na dworze było gorąco."], answer: 0, explain: "До маленької квартири прийшло дванадцять людей — звідси шум, спека й задуха." }
        ]
      },

      writing: {
        prompt: "Незабаром Різдво. Напишіть подрузі Марті повідомлення: 1) що ви подаруєте членам родини (кому — що); 2) хто допоміг вам вибрати подарунок; 3) кого або чого вам шкода; 4) побажайте їй веселих свят.",
        minWords: 40,
        maxWords: 80,
        useWords: ["podarować", "życzyć", "niespodzianka", "dzięki"],
        checklist: [
          { label: "Щонайменше 2 форми давального на -owi / -emu / -om", pattern: "(?<![\\p{L}])\\p{L}{2,}(owi|emu|om)(?![\\p{L}])", min: 2 },
          { label: "Безособова конструкція: przykro / wstyd / szkoda / zimno / wszystko jedno…", pattern: "(przykro|wstyd|szkoda|zimno|gorąco|duszno|jedno|smutno|głupio)", min: 1 }
        ],
        model: "Cześć Marto! Święta już za dwa tygodnie, więc robię zakupy. Tacie kupię nowy portfel, a mamie chcę podarować kartę podarunkową do Empiku, bo uwielbia czytać. Bratu dam grę komputerową, a małemu siostrzeńcowi klocki Lego. Dzięki tobie wiem, co kupić babci: ciepłe kapcie! Szkoda mi tylko, że dziadek leży w szpitalu. Dla niego też mam niespodziankę: zrobię mu album ze starymi zdjęciami. Życzę ci wesołych świąt! Ania"
      }
    },

    // ───────────────────────── Урок 3 ─────────────────────────
    {
      id: "m06l3",
      title: "Otwórz usta i powiedz „a”",
      titleRu: "Наказовий спосіб",
      topic: "U lekarza",
      review: false,
      minutes: 25,
      goals: [
        "Утворювати наказовий спосіб від форми 3-ї особи: czyta → czytaj, robi → rób",
        "Запам’ятати неправильні форми: bądź, idź, weź, jedz, powiedz",
        "Розуміти вказівки лікаря й давати поради хворому другові"
      ],

      vocab: [
        { pl: "przychodnia", g: "f", ru: "поліклініка", note: "слово «poliklinika» майже не вживається", ex: "Moja przychodnia jest otwarta do osiemnastej.", exRu: "Моя поліклініка працює до шостої вечора." },
        { pl: "lekarz rodzinny", g: "m", ru: "сімейний лікар (терапевт)", ex: "Mój lekarz rodzinny przyjmuje tylko rano.", exRu: "Мій сімейний лікар приймає лише вранці." },
        { pl: "zapisywać się / zapisać się", ru: "записуватися / записатися", note: "do lekarza, na wizytę", ex: "Zapisałam się do dentysty na czwartek.", exRu: "Я записалася до стоматолога на четвер." },
        { pl: "badać / zbadać", ru: "оглядати / оглянути, обстежувати", ex: "Lekarz dokładnie mnie zbadał.", exRu: "Лікар ретельно мене оглянув." },
        { pl: "objaw", g: "m", ru: "симптом, ознака (не «об’ява»!)", ex: "Jakie ma pan objawy?", exRu: "Які у вас симптоми?" },
        { pl: "płuca", g: "pl", ru: "легені", ex: "Lekarz osłuchał mi płuca.", exRu: "Лікар прослухав мені легені." },
        { pl: "ciśnienie", g: "n", ru: "тиск", note: "zmierzyć ciśnienie — виміряти тиск", ex: "Pielęgniarka zmierzyła mi ciśnienie.", exRu: "Медсестра виміряла мені тиск." },
        { pl: "oddychać", ru: "дихати", ex: "Oddychaj głęboko!", exRu: "Дихай глибоко!" },
        { pl: "rozbierać się / rozebrać się", ru: "роздягатися / роздягнутися", note: "наказ.: rozbierz się", ex: "Rozbierz się do pasa, proszę.", exRu: "Роздягнися до пояса, будь ласка." },
        { pl: "kłaść się / położyć się", ru: "лягати / лягти", note: "наказ.: połóż się (o → ó)", ex: "Połóż się na kozetce.", exRu: "Ляж на кушетку." },
        { pl: "skierowanie", g: "n", ru: "направлення, скерування", note: "skierowanie na badania / do specjalisty", ex: "Lekarz dał mi skierowanie na badanie krwi.", exRu: "Лікар дав мені направлення на аналіз крові." },
        { pl: "e-recepta", g: "f", ru: "електронний рецепт", note: "як і в Україні: код приходить в SMS, в аптеці досить його назвати", ex: "Kod e-recepty przyszedł mi SMS-em.", exRu: "Код електронного рецепта прийшов мені в SMS." },
        { pl: "zwolnienie lekarskie", g: "n", ru: "лікарняний (листок непрацездатності)", note: "розм. L4 [ель-чтери]", ex: "Dostałem zwolnienie lekarskie na tydzień.", exRu: "Мені дали лікарняний на тиждень." }
      ],

      grammar: {
        title: "Наказовий спосіб (tryb rozkazujący)",
        html: `<p>Наказовий спосіб утворюється від форми <b>3-ї особи одн.</b> теперішнього (або простого майбутнього) часу: беремо форму <span class="pl">on / ona</span> і відкидаємо закінчення. Для «ми» додаємо <span class="pl">-my</span>, для «ви» — <span class="pl">-cie</span>. Схема знайома з української: роби — робімо — робіть, читай — читаймо — читайте; польське -my відповідає нашому -мо, а -cie — нашому -те.</p>
<table class="g"><tr><th>3 ос. одн.</th><th>ty</th><th>my</th><th>wy</th><th>правило</th></tr>
<tr><td class="pl">czyta</td><td class="pl">czytaj</td><td class="pl">czytajmy</td><td class="pl">czytajcie</td><td>на -a → + j</td></tr>
<tr><td class="pl">pisze</td><td class="pl">pisz</td><td class="pl">piszmy</td><td class="pl">piszcie</td><td>відкинути -e</td></tr>
<tr><td class="pl">mówi</td><td class="pl">mów</td><td class="pl">mówmy</td><td class="pl">mówcie</td><td>відкинути -i</td></tr>
<tr><td class="pl">zadzwoni</td><td class="pl">zadzwoń</td><td class="pl">zadzwońmy</td><td class="pl">zadzwońcie</td><td>м’якість лишається: ni → ń</td></tr>
<tr><td class="pl">zrobi</td><td class="pl">zrób</td><td class="pl">zróbmy</td><td class="pl">zróbcie</td><td>o → ó</td></tr>
<tr><td class="pl">zamknie</td><td class="pl">zamknij</td><td class="pl">zamknijmy</td><td class="pl">zamknijcie</td><td>важка група приголосних → + ij</td></tr>
</table>
<p>Чергування <b>o → ó</b> часто з’являється перед кінцевим дзвінким приголосним: <span class="pl">robi → rób, stoi → stój, otworzy → otwórz, położy → połóż, pomoże → pomóż</span> (але: <span class="pl">chodzi → chodź</span>). Це споріднене з українським чергуванням о → і: stój — стій, stół — стіл. М’які приголосні дають ś, ć, ź, ń: <span class="pl">prosi → proś, płaci → płać, siedzi → siedź</span>.</p>
<h4>Неправильні форми — вивчити</h4>
<table class="g"><tr><th>інфінітив</th><th>ty</th><th>wy</th></tr>
<tr><td class="pl">być</td><td class="pl">bądź</td><td class="pl">bądźcie</td></tr>
<tr><td class="pl">mieć</td><td class="pl">miej</td><td class="pl">miejcie</td></tr>
<tr><td class="pl">iść</td><td class="pl">idź</td><td class="pl">idźcie</td></tr>
<tr><td class="pl">jechać</td><td class="pl">jedź</td><td class="pl">jedźcie</td></tr>
<tr><td class="pl">wziąć</td><td class="pl">weź</td><td class="pl">weźcie</td></tr>
<tr><td class="pl">jeść</td><td class="pl">jedz</td><td class="pl">jedzcie</td></tr>
<tr><td class="pl">powiedzieć</td><td class="pl">powiedz</td><td class="pl">powiedzcie</td></tr>
<tr><td class="pl">dać</td><td class="pl">daj</td><td class="pl">dajcie</td></tr>
<tr><td class="pl">usiąść</td><td class="pl">usiądź</td><td class="pl">usiądźcie</td></tr>
</table>
<p>Форма на <span class="pl">-my</span> — це українське «-мо» (ходімо, зробімо) або розмовне «давай(те)…»: <span class="pl">Chodźmy na spacer!</span> — Ходімо гуляти! <span class="pl">Zadzwońmy do lekarza.</span> — Зателефонуймо лікареві.</p>
<h4>Який вид вибрати?</h4>
<p>Конкретна одноразова дія — зазвичай доконаний вид: <span class="pl">Weź tę tabletkę!</span> Регулярна дія або запрошення — недоконаний: <span class="pl">Bierz lek dwa razy dziennie.</span> <span class="pl">Siadaj, proszę!</span> Запрошення в недоконаному виді звучать тепліше й гостинніше, як і в українській: <span class="pl">Wchodź! Rozbieraj się! Częstuj się!</span> — Заходь! Роздягайся! Пригощайся!</p>
<p>Наголос у формах на -my і -cie, як і раніше, падає на передостанній склад: <span class="pl">czytajcie</span> [czy-TAJ-cie], <span class="pl">zróbmy</span> [ZRÓB-my], <span class="pl">powiedzcie</span> [po-WIEDZ-cie]. Не переносьте українського наголосу на закінчення (хо-ДІ-мо, ска-ЖІТЬ): польською завжди CHODŹ-my, po-WIEDZ-cie.</p>
<div class="tip"><b>Пастка 1.</b> «Іди сюди!» — <span class="pl">Chodź tu!</span>, а не «Idź tu!» (згадайте розмовне «ходи сюди!»). <span class="pl">Idź!</span> означає «іди (туди, геть)».</div>
<div class="tip"><b>Пастка 2.</b> Розмовне «давай» ≠ польське <span class="pl">daj</span> («дай»). «Давай поговоримо» = «поговорімо» — <span class="pl">Porozmawiajmy</span>.</div>
<div class="tip"><b>Пастка 3.</b> Форма на <span class="pl">-cie</span> — лише для кількох людей. На відміну від українського ввічливого «Сідайте, будь ласка», звернутися так до одного незнайомого не можна: для цього є <span class="pl">proszę</span> + інфінітив (наступний урок).</div>`
      },

      exercises: [
        { type: "match", q: "З’єднайте інфінітив із формою наказового способу (ty)", pairs: [["robić", "rób"], ["pisać", "pisz"], ["czytać", "czytaj"], ["iść", "idź"], ["wziąć", "weź"], ["jeść", "jedz"]], explain: "robi → rób (o → ó), pisze → pisz, czyta → czytaj; idź, weź, jedz — неправильні форми, їх треба запам’ятати." },
        { type: "choice", q: "___ tu, pokażę ci coś ciekawego! (підійди сюди)", options: ["Idź", "Chodź", "Jedź"], answer: 1, explain: "«Іди сюди» — Chodź tu! (як розмовне «ходи сюди»). Форма idź означає «іди туди / геть», jedź — «їдь»." },
        { type: "gap", q: "___ głęboko i nie ruszaj się. (oddychać, ty)", answers: ["Oddychaj"], explain: "oddycha → oddychaj: у дієслів на -a додаємо -j (як укр. «дихай»)." },
        { type: "gap", q: "___ się na kozetce, proszę. (położyć się, ty)", answers: ["Połóż"], explain: "położy → połóż: відкидаємо -y, і o переходить в ó перед останнім приголосним." },
        { type: "choice", q: "Dzieci, ___ ręce przed obiadem! (umyć)", options: ["umyjcie", "umyjmy", "umyj"], answer: 0, explain: "Звертання до кількох дітей — форма wy: umyje → umyj → umyjcie (пор. укр. «помийте»)." },
        { type: "choice", q: "Jest już późno. ___ do domu! (my)", options: ["Chodźmy", "Chodźcie", "Chodź"], answer: 0, explain: "«Ходімо!» з участю мовця — форма на -my: chodźmy, як укр. «ходімо»." },
        { type: "order", ru: "Візьми цю таблетку й ляж.", words: ["Weź", "tę", "tabletkę", "i", "połóż", "się."], alt: ["Weź tę tabletkę i się połóż."], explain: "Weź — від wziąć (неправильна форма), połóż się — від położyć się. Одноразові дії — доконаний вид." },
        { type: "gap", q: "___ mi, co się stało. (powiedzieć, ty)", answers: ["Powiedz"], explain: "powiedzieć → powie → powiedz (неправильна форма, як jedz, wiedz)." },
        { type: "translate", ru: "Поговорімо з лікарем.", answers: ["Porozmawiajmy z lekarzem.", "Porozmawiajmy z lekarką.", "Pogadajmy z lekarzem."], explain: "Українське «поговорімо» (або «давай поговоримо») = польська форма на -my: porozmawiajmy. Не «daj porozmawiamy»!" },
        { type: "gap", q: "___ cierpliwi, wyniki będą jutro. (być, wy)", answers: ["Bądźcie"], explain: "być → bądź, bądźmy, bądźcie (будь, будьмо, будьте) — неправильна форма." }
      ],

      pronunciation: {
        focus: "Скоромовки 1: Stół z powyłamywanymi nogami",
        tip: `<p>Скоромовки польською — <span class="pl">łamańce językowe</span>, дослівно «язиколамки». Метод тренування:</p>
<ol>
<li>прочитайте повільно, по складах;</li>
<li>у кожному слові ставте наголос на <b>передостанній</b> склад: <span class="pl">po-wy-ła-my-wa-NY-mi</span>;</li>
<li>пришвидшуйтеся, лише коли виходить без помилок.</li>
</ol>
<p>У <span class="pl">Stół z powyłamywanymi nogami</span> стежте за <b>ł</b> = [ў] (губи округлені, як в англійському <i>water</i> або як українське «в» у кінці складу: вовк, любов) і за <b>y</b> — воно звучить майже як голосний у нашому слові «син». У <span class="pl">Król Karol kupił…</span> тренуємо <b>k</b>, чітке коротке <b>r</b> і <b>ó</b> = [у]. У <span class="pl">Czy tata czyta cytaty Tacyta?</span> розрізняємо тверде <b>cz</b> (як українське «ч») і <b>c</b> = [ц].</p>`,
        items: [
          { type: "listen", text: "Stół z powyłamywanymi nogami.", ru: "Стіл із поламаними ніжками.", note: "ł = [ў]; наголос: po-wy-ła-my-wa-NY-mi" },
          { type: "stress", word: "powyłamywanymi", syllables: ["po", "wy", "ła", "my", "wa", "ny", "mi"], answer: 5 },
          { type: "listen", text: "Król Karol kupił królowej Karolinie korale koloru koralowego.", ru: "Король Кароль купив королеві Кароліні корали коралового кольору.", note: "królowej Karolinie — давальний відмінок, як і «королеві Кароліні»!" },
          { type: "stress", word: "koralowego", syllables: ["ko", "ra", "lo", "we", "go"], answer: 3 },
          { type: "listen", text: "Czy tata czyta cytaty Tacyta?", ru: "Чи читає тато цитати Тацита?", note: "cz — тверде «ч», як українське; c — «ц»" },
          { type: "dictation", text: "Król Karol kupił królowej Karolinie korale." }
        ]
      },

      reading: {
        title: "Lew w gabinecie",
        text: "W środę rano pani Anna zapisała bliźniaki do lekarza. Kuba i Zuzia od dwóch dni mają katar, kaszel i trochę gorączki. Lekarz rodzinny, doktor Wiśniewski, przyjmuje w gabinecie numer pięć.\n\n– Dzień dobry! Usiądźcie, proszę – mówi z uśmiechem. – Kto pierwszy? Zuzia? Świetnie. Otwórz szeroko buzię i powiedz „aaa”. Teraz rozbierz się do pasa i oddychaj głęboko. Jeszcze raz… Płuca czyste!\n\nPotem bada Kubę. Kuba się boi i nie chce otworzyć ust.\n\n– Wiesz co? Udawaj, że jesteś lwem – proponuje lekarz. – Pokaż mi, jak ryczy lew!\n\nKuba ryczy tak głośno, że pielęgniarka zagląda do gabinetu.\n\n– To zwykłe przeziębienie – mówi doktor do mamy. – Wystawię pani e-receptę na syrop. Dzieci muszą dużo pić i leżeć w łóżku.\n\nW drodze do domu mama mówi:\n\n– Chodźmy jeszcze do apteki.\n\nWieczorem Zuzia bawi się w lekarza.\n\n– Misiu, połóż się na kozetce! Weź tabletkę i nie płacz! – mówi do pluszowego misia.\n\nA za drzwiami cicho ryczy lew.",
        glossary: [
          { pl: "bliźniaki", ru: "близнюки" },
          { pl: "gabinecie", ru: "кабінеті (лікаря)" },
          { pl: "buzię", ru: "ротик (buzia)" },
          { pl: "Udawaj", ru: "удавай, прикинься" },
          { pl: "ryczy", ru: "реве, гарчить" },
          { pl: "zagląda", ru: "заглядає, зазирає" },
          { pl: "Wystawię", ru: "випишу" },
          { pl: "kozetce", ru: "кушетці (kozetka)" },
          { pl: "pluszowego misia", ru: "плюшевого ведмедика" }
        ],
        questions: [
          { type: "tf", q: "Kuba i Zuzia chorują od tygodnia.", answer: false, explain: "Вони хворіють два дні: «od dwóch dni»." },
          { type: "choice", q: "Co lekarz mówi do Zuzi?", options: ["Usiądź na podłodze.", "Otwórz szeroko buzię i powiedz „aaa”.", "Weź tabletkę."], answer: 1, explain: "Лікар каже Зузі: «Otwórz szeroko buzię i powiedz „aaa”» — відкрий рот і скажи «а»." },
          { type: "choice", q: "Dlaczego pielęgniarka zagląda do gabinetu?", options: ["Bo Kuba głośno ryczy jak lew.", "Bo Zuzia płacze.", "Bo lekarz ją woła."], answer: 0, explain: "Куба реве так голосно, що медсестра зазирає до кабінету." },
          { type: "tf", q: "Lekarz wystawia mamie e-receptę na syrop.", answer: true, explain: "«Wystawię pani e-receptę na syrop» — випишу вам електронний рецепт на сироп." },
          { type: "tf", q: "Wieczorem Kuba bawi się w lekarza.", answer: false, explain: "Грається в лікаря Зузя, а Куба тихо «реве» за дверима." }
        ]
      },

      writing: {
        prompt: "Ваш друг Павло вже тиждень кашляє, але не хоче йти до лікаря. Напишіть йому повідомлення: 1) переконайте його записатися до поліклініки (що і коли зробити); 2) що зробить лікар; 3) 2–3 поради, як лікуватися вдома; 4) запропонуйте зустрітися, коли він одужає (форма на -my). Використайте щонайменше 5 форм наказового способу.",
        minWords: 40,
        maxWords: 90,
        useWords: ["przychodnia", "zwolnienie lekarskie", "ciśnienie", "oddychać"],
        checklist: [
          { label: "Щонайменше 5 форм наказового способу", pattern: "(?<![\\p{L}])(idź|chodź|chodźmy|idźmy|weź|zrób|zadzwoń|zapisz|pij|wypij|leż|połóż|jedz|zjedz|bądź|zmierz|kup|oddychaj|odpocznij|odpoczywaj|powiedz|napisz|daj|pamiętaj|zostań|śpij|wyśpij|ubierz|zamknij|otwórz|sprawdź|pokaż|słuchaj|uważaj|trzymaj|spróbuj)(?![\\p{L}])", min: 5 },
          { label: "Пропозиція «ходімо…, зустріньмося…» — форма на -my (chodźmy, spotkajmy się…)", pattern: "(?<![\\p{L}])(chodźmy|idźmy|jedźmy|spotkajmy|zróbmy|pójdźmy|zadzwońmy|pojedźmy|zjedzmy|obejrzyjmy|wypijmy|porozmawiajmy|zagrajmy|umówmy)(?![\\p{L}])", min: 1 }
        ],
        model: "Cześć Pawle! Kaszlesz już tydzień, a nadal nie byłeś u lekarza? Nie bądź dzieckiem i zapisz się wreszcie do przychodni! Zadzwoń tam jutro rano. Lekarz cię zbada, zmierzy ci ciśnienie i może da ci skierowanie na prześwietlenie. Weź też zwolnienie lekarskie – w pracy na pewno sobie bez ciebie poradzą. Pij dużo herbaty z miodem, oddychaj nad parą i leż w łóżku. A jak wyzdrowiejesz, chodźmy razem na spacer nad Wisłę! Trzymaj się, Ewa"
      }
    },

    // ───────────────────────── Урок 4 ─────────────────────────
    {
      id: "m06l4",
      title: "Nie bierz tego na czczo!",
      titleRu: "Заборона, proszę + інфінітив, niech",
      topic: "W aptece",
      review: false,
      minutes: 25,
      goals: [
        "Забороняти й застерігати: Nie rób tego! Uważaj, nie przewróć się!",
        "Ввічливо просити: Proszę usiąść, Niech pan weźmie…",
        "Порозумітися в аптеці: ліки, дозування, побічні дії, аналоги"
      ],

      vocab: [
        { pl: "lek", g: "m", ru: "ліки, препарат", note: "вживається частіше, ніж lekarstwo; мн. leki. Увага: укр. «ці ліки» — пол. ten lek (однина!)", ex: "Ten lek jest dostępny bez recepty.", exRu: "Ці ліки продаються без рецепта." },
        { pl: "tabletka przeciwbólowa", g: "f", ru: "знеболювальна таблетка", ex: "Wziąłem tabletkę przeciwbólową i od razu mi przeszło.", exRu: "Я прийняв знеболювальне, і мені одразу полегшало." },
        { pl: "krople", g: "pl", ru: "краплі", note: "krople do nosa / do oczu", ex: "Krople do nosa stosuj najwyżej pięć dni.", exRu: "Краплі в ніс застосовуй не довше ніж п’ять днів." },
        { pl: "maść", g: "f", ru: "мазь", ex: "Smaruj kolano maścią dwa razy dziennie.", exRu: "Змащуй коліно маззю двічі на день." },
        { pl: "plaster", g: "m", ru: "пластир", note: "род. в. plastra", ex: "Masz plaster? Skaleczyłam się w palec.", exRu: "У тебе є пластир? Я порізала палець." },
        { pl: "na czczo", ru: "натщесерце, на голодний шлунок", ex: "Tego leku nie bierz na czczo!", exRu: "Цих ліків не приймай натщесерце!" },
        { pl: "ulotka", g: "f", ru: "листок-вкладиш, інструкція до ліків", ex: "Przed użyciem przeczytaj ulotkę.", exRu: "Перед застосуванням прочитай інструкцію." },
        { pl: "dawkowanie", g: "n", ru: "дозування", ex: "Dawkowanie: jedna tabletka co osiem godzin.", exRu: "Дозування: одна таблетка кожні вісім годин." },
        { pl: "skutki uboczne", g: "pl", ru: "побічні дії", ex: "Ten syrop nie ma poważnych skutków ubocznych.", exRu: "Цей сироп не має серйозних побічних дій." },
        { pl: "farmaceutka", g: "f", ru: "фармацевтка", note: "ч. р. farmaceuta", ex: "Zapytaj farmaceutkę, ona ci coś poleci.", exRu: "Запитай фармацевтку, вона тобі щось порадить." },
        { pl: "odpowiednik", g: "m", ru: "аналог, відповідник (дешевший препарат)", ex: "Czy jest tańszy odpowiednik tego leku?", exRu: "Чи є дешевший аналог цих ліків?" },
        { pl: "połykać / połknąć", ru: "ковтати / проковтнути", note: "наказ.: połknij", ex: "Tabletkę połknij w całości, nie gryź jej.", exRu: "Таблетку проковтни цілою, не розжовуй її." },
        { pl: "termin ważności", g: "m", ru: "термін придатності", ex: "Sprawdź termin ważności na opakowaniu.", exRu: "Перевір термін придатності на упаковці." }
      ],

      grammar: {
        title: "Заборона (nie + недок. вид), proszę + інфінітив, niech",
        html: `<h4>1. Заборона: nie + недоконаний вид</h4>
<p>Заборона майже завжди виражається <b>недоконаним</b> видом — навіть якщо прохання було в доконаному. Так само, як в українській: «зроби!» — «не роби!»</p>
<table class="g"><tr><th>Зроби! (док.)</th><th>Не роби! (недок.)</th></tr>
<tr><td class="pl">Zrób to!</td><td class="pl">Nie rób tego!</td></tr>
<tr><td class="pl">Weź lek!</td><td class="pl">Nie bierz leku!</td></tr>
<tr><td class="pl">Kup syrop!</td><td class="pl">Nie kupuj syropu!</td></tr>
<tr><td class="pl">Powiedz mamie!</td><td class="pl">Nie mów mamie!</td></tr>
<tr><td class="pl">Usiądź!</td><td class="pl">Nie siadaj!</td></tr>
<tr><td class="pl">Otwórz okno!</td><td class="pl">Nie otwieraj okna!</td></tr>
</table>
<div class="tip">Не забувайте про <b>родовий відмінок після заперечення</b> (модуль 3): <span class="pl">Weź parasol → Nie bierz parasola.</span> Пор. укр. «не бери парасольки».</div>
<p>Виняток — <b>застереження</b> «дивись, не…» про ненавмисну дію. Тут доконаний вид, як і в українському «не впади!»: <span class="pl">Nie zapomnij!</span> <span class="pl">Uważaj, nie przewróć się!</span> <span class="pl">Nie zgub kluczy!</span></p>
<h4>2. Proszę + інфінітив</h4>
<p>Ввічливе прохання до <span class="pl">pan / pani / państwo</span>, а також в оголошеннях і написах:</p>
<div class="ex"><span class="pl">Proszę usiąść.</span> — Сідайте, будь ласка.</div>
<div class="ex"><span class="pl">Proszę brać ten lek po jedzeniu.</span> — Приймайте ці ліки після їди.</div>
<div class="ex"><span class="pl">Proszę nie palić.</span> — Прохання не палити.</div>
<p>Вид і тут важливий: <span class="pl">Proszę usiąść</span> — нейтральне прохання, а <span class="pl">Proszę siadać!</span> — гостинне запрошення господаря. Типові фрази лікаря: <span class="pl">Proszę się rozebrać. Proszę głęboko oddychać.</span></p>
<h4>3. Niech + 3-тя особа</h4>
<p><span class="pl">Niech</span> = українське «нехай / хай». Дієслово — у формі 3-ї особи (теперішній або простий майбутній час):</p>
<table class="g"><tr><th>коли</th><th>приклад</th><th>переклад</th></tr>
<tr><td>про третю особу</td><td class="pl">Niech Marek zadzwoni do lekarza.</td><td>Нехай Марек зателефонує лікареві.</td></tr>
<tr><td>ввічливо: pan / pani</td><td class="pl">Niech pan usiądzie.</td><td>Сідайте, будь ласка.</td></tr>
<tr><td>ввічливо: państwo</td><td class="pl">Niech państwo wejdą.</td><td>Заходьте (до групи людей).</td></tr>
<tr><td>побажання</td><td class="pl">Niech żyje!</td><td>Хай живе! (як і в українській)</td></tr>
</table>
<p>У пісні «Sto lat», яку співають на дні народження та іменини, звучить <span class="pl">niech żyje nam</span> — «хай живе (нам)»: niech + давальний.</p>
<div class="tip"><b>Пастка 1.</b> «Давайте» ≠ <span class="pl">niech</span>. «Почнімо» (давайте почнемо) — <span class="pl">Zacznijmy</span> (форма на -my), а «Нехай він почне» — <span class="pl">Niech on zacznie</span>.</div>
<div class="tip"><b>Пастка 2.</b> Не змішуйте конструкції: не «Proszę pan usiądzie», а <span class="pl">Proszę usiąść</span> або <span class="pl">Niech pan usiądzie</span>. І не звертайтеся до пана через -cie, хоч українською «сідайте» до однієї особи цілком нормально: «Usiądźcie» — це лише для кількох людей.</div>`
      },

      exercises: [
        { type: "choice", q: "Nie ___ tego leku na czczo! (brać / wziąć)", options: ["weź", "bierz", "bierzesz"], answer: 1, explain: "Заборона — недоконаний вид: nie bierz (як укр. «не бери»). Weź — доконаний (для ствердження), bierzesz — не наказова форма. Зверніть увагу: tego leku — родовий після заперечення." },
        { type: "gap", q: "Kup mleko! → Nie ___ mleka! (kupić / kupować)", answers: ["kupuj"], explain: "Заборона утворюється від недоконаного виду: kupować → kupuje → kupuj. Mleka — родовий після заперечення (пор. укр. «не купуй молока»)." },
        { type: "choice", q: "Otwórz okno! → Nie ___ okna!", options: ["otwórz", "otwieraj", "otwierasz"], answer: 1, explain: "Пара otworzyć / otwierać: заборона — від недоконаного: nie otwieraj (як укр. «не відчиняй»)." },
        { type: "choice", q: "Uważaj, jest ślisko! Nie ___ się!", options: ["przewróć", "przewracaj", "przewrócisz"], answer: 0, explain: "Застереження про ненавмисну дію («дивись не впади») — доконаний вид: nie przewróć się. Як в українському «не впади!»." },
        { type: "gap", q: "Proszę ___ ulotkę przed użyciem leku. (przeczytać)", answers: ["przeczytać"], explain: "Ввічливе прохання: proszę + інфінітив. Дієслово не змінюється: proszę przeczytać." },
        { type: "choice", q: "Pani jest zmęczona? ___ pani usiądzie!", options: ["Niech", "Proszę", "Musi"], answer: 0, explain: "З формою 3-ї особи (usiądzie) потрібне niech: Niech pani usiądzie. З proszę був би інфінітив: Proszę usiąść." },
        { type: "gap", q: "Mama ma gorączkę? Niech ___ w łóżku! (leżeć)", answers: ["leży"], explain: "niech + 3-тя особа: (ona) leży → Niech leży w łóżku — нехай лежить." },
        { type: "match", q: "З’єднайте прохання із забороною", pairs: [["Zrób to!", "Nie rób tego!"], ["Weź lek!", "Nie bierz leku!"], ["Kup syrop!", "Nie kupuj syropu!"], ["Powiedz mu!", "Nie mów mu!"], ["Zadzwoń do niej!", "Nie dzwoń do niej!"], ["Usiądź!", "Nie siadaj!"]], explain: "Заборона = nie + недоконаний вид: zrobić → nie rób, wziąć → nie bierz, kupić → nie kupuj, powiedzieć → nie mów, zadzwonić → nie dzwoń, usiąść → nie siadaj. Додаток — у родовому." },
        { type: "order", ru: "Нехай він прийме цю таблетку після їди.", words: ["Niech", "on", "weźmie", "tę", "tabletkę", "po", "jedzeniu."], alt: ["Niech on po jedzeniu weźmie tę tabletkę."], explain: "niech + 3-тя особа простого майбутнього: weźmie (від wziąć). «Нехай» = niech." },
        { type: "translate", ru: "Не кажи мамі!", answers: ["Nie mów mamie!"], explain: "Заборона — недоконаний вид (mówić → nie mów), mamie — давальний відмінок, як укр. «мамі»." }
      ],

      pronunciation: {
        focus: "Скоромовки 2: W Szczebrzeszynie chrząszcz brzmi w trzcinie",
        tip: `<p>Найвідоміша польська скоромовка — рядок Яна Бжехви про хруща з містечка Щебжешин. Містечко справді існує (Люблінське воєводство) і навіть поставило хрущеві пам’ятник. Розберімо складні групи:</p>
<ul>
<li><span class="pl">szcz</span> = sz + cz, обидва тверді: <span class="pl">Szczebrzeszyn</span> [шчебжешин]. Українцям легко: це наше «щ» = [шч]!</li>
<li><span class="pl">chrz</span> = ch + sz (rz оглушується після ch!): <span class="pl">chrząszcz</span> [хшоншч].</li>
<li><span class="pl">brz</span> = b + ż (після дзвінкого rz лишається дзвінким): <span class="pl">brzmi</span> [бжмі].</li>
<li><span class="pl">trzc</span> = t + sz + ć: <span class="pl">trzcinie</span> [тшч’ін’е].</li>
</ul>
<p>Тренуйте з кінця: <span class="pl">w trzcinie → brzmi w trzcinie → chrząszcz brzmi w trzcinie</span>, потім додайте початок. Друга скоромовка, <span class="pl">Nie pieprz, Pietrze…</span>, — заразом приклад заперечного наказового способу!</p>`,
        items: [
          { type: "listen", text: "W Szczebrzeszynie chrząszcz brzmi w trzcinie.", ru: "У Щебжешині хрущ дзижчить в очереті." },
          { type: "stress", word: "Szczebrzeszynie", syllables: ["Szcze", "brze", "szy", "nie"], answer: 2 },
          { type: "listen", text: "Nie pieprz, Pietrze, wieprza pieprzem.", ru: "Не перчи, Петре, вепра перцем.", note: "nie pieprz — заперечний наказовий від pieprzyć (перчити)" },
          { type: "minimal", options: ["szczęka", "szczeka"], ru: ["щелепа", "гавкає"] },
          { type: "listen", text: "Cesarz czesał cesarzową.", ru: "Цісар розчісував цісареву.", note: "c [ц], cz [ч], rz у кінці — [ш]: cesarz [цесаш]" },
          { type: "stress", word: "dawkowanie", syllables: ["daw", "ko", "wa", "nie"], answer: 2 },
          { type: "dictation", text: "Nie pieprz, Pietrze, wieprza pieprzem." }
        ]
      },

      reading: {
        title: "Antybiotyk dla pana Zdzisława",
        text: "Pan Zdzisław wchodzi do apteki na rogu i już od progu mówi:\n\n– Dzień dobry! Poproszę antybiotyk. Najmocniejszy, jaki pani ma.\n\n– Dzień dobry. A ma pan receptę? – pyta farmaceutka.\n\n– Nie mam. Ale ja dobrze wiem, co mi jest: kaszel, katar, trochę gorączki.\n\n– Antybiotyki są tylko na receptę. Proszę iść do lekarza rodzinnego. Na razie mogę panu polecić syrop na kaszel i krople do nosa.\n\n– A skutki uboczne?\n\n– Niech się pan nie martwi. Proszę brać syrop trzy razy dziennie, po jedzeniu, nie na czczo. A kropli do nosa niech pan nie stosuje dłużej niż pięć dni.\n\n– A jest jakiś tańszy odpowiednik?\n\n– Jest. Ten kosztuje dwanaście złotych.\n\nPan Zdzisław płaci telefonem i już przy drzwiach się odwraca:\n\n– Proszę pani, a tę ulotkę muszę czytać?\n\n– Oczywiście! Niech pan przeczyta dawkowanie i nie wyrzuca ulotki. Przed użyciem zapoznaj się z ulotką – jak w reklamie!\n\n– Dobrze, dobrze. A ten syrop jest chociaż smaczny?\n\n– To lek, nie deser! – śmieje się farmaceutka. – Proszę nie pić go zamiast herbaty.",
        glossary: [
          { pl: "od progu", ru: "з порога" },
          { pl: "Najmocniejszy", ru: "найсильніший" },
          { pl: "Niech się pan nie martwi", ru: "не хвилюйтеся" },
          { pl: "stosuje", ru: "застосовує (stosować)" },
          { pl: "odwraca", ru: "обертається" },
          { pl: "wyrzuca", ru: "викидає" },
          { pl: "zapoznaj się", ru: "ознайомся" },
          { pl: "zamiast", ru: "замість" }
        ],
        questions: [
          { type: "tf", q: "Pan Zdzisław ma receptę na antybiotyk.", answer: false, explain: "«Nie mam» — рецепта в нього немає, а антибіотики продаються лише за рецептом." },
          { type: "choice", q: "Co poleca farmaceutka?", options: ["Antybiotyk i tabletki przeciwbólowe.", "Syrop na kaszel i krople do nosa.", "Maść i plaster."], answer: 1, explain: "«Mogę panu polecić syrop na kaszel i krople do nosa»." },
          { type: "choice", q: "Jak długo najwyżej można stosować krople?", options: ["Pięć dni.", "Dwa tygodnie.", "Trzy dni."], answer: 0, explain: "«Niech pan nie stosuje dłużej niż pięć dni» — не довше ніж п’ять днів." },
          { type: "tf", q: "Syrop trzeba brać na czczo.", answer: false, explain: "Навпаки: «po jedzeniu, nie na czczo» — після їди, не натщесерце." },
          { type: "tf", q: "Według farmaceutki syrop można pić zamiast herbaty.", answer: false, explain: "«Proszę nie pić go zamiast herbaty» — це ліки, а не десерт." }
        ]
      },

      writing: {
        prompt: "Ви їдете на вихідні, а з бабусею залишається ваш брат Куба. Напишіть йому записку: 1) які ліки й коли давати бабусі; 2) чого НЕ робити (щонайменше 2 заборони або застереження); 3) що бабуся хай робить сама (niech); 4) що й де купити, якщо ліки закінчаться.",
        minWords: 40,
        maxWords: 90,
        useWords: ["lek", "na czczo", "krople", "termin ważności"],
        checklist: [
          { label: "Щонайменше 2 заборони або застереження (nie dawaj…, nie zapomnij…)", pattern: "(?<![\\p{L}])nie\\s+(\\p{L}+(aj|uj|ij|yj)|daj|bierz|mów|rób|jedz|pij|dzwoń|pozwól|pal|siedź|wychodź|zapomnij|zgub|martw)(?![\\p{L}])", min: 2 },
          { label: "Конструкція з niech", pattern: "(?<![\\p{L}])niech(?![\\p{L}])", min: 1 }
        ],
        model: "Kuba, dzięki, że zostajesz z babcią! Rano dawaj jej tabletkę na ciśnienie, ale nie na czczo – najpierw śniadanie. Krople do oczu są w lodówce. Wieczorem niech babcia sama smaruje kolano maścią, ona to umie. Nie dawaj jej kawy po szesnastej i nie pozwalaj jej oglądać seriali do północy! Jeśli zabraknie leków, kup je w aptece na rogu, ale sprawdź termin ważności. I nie zapomnij podlać kwiatów! W razie czego dzwoń. Ola"
      }
    },

    // ───────────────────────── Урок 5 (повторення + контрольна A2) ─────────────────────────
    {
      id: "m06l5",
      title: "Zdrowie przede wszystkim",
      titleRu: "Повторення модуля 6 і контрольна A2",
      topic: "Zdrowy tryb życia",
      review: true,
      minutes: 30,
      goals: [
        "Повторити давальний відмінок (займенники та іменники) і наказовий спосіб",
        "Перевірити ключову граматику A2: відмінки, минулий і майбутній час, вид, дієслова руху",
        "Прочитати лист із санаторію та написати лист-пораду про здоровий спосіб життя"
      ],

      vocab: [
        { pl: "zdrowy tryb życia", g: "m", ru: "здоровий спосіб життя", ex: "Od roku prowadzę zdrowy tryb życia.", exRu: "Вже рік я веду здоровий спосіб життя." },
        { pl: "ruch", g: "m", ru: "рух, фізична активність", note: "Ruch to zdrowie! — Рух — це здоров’я!", ex: "Brakuje mi ruchu, bo cały dzień siedzę przy biurku.", exRu: "Мені бракує руху, бо я цілий день сиджу за столом." },
        { pl: "rzucić palenie", ru: "кинути палити", note: "rzucać / rzucić + знахідний", ex: "Mój tata rzucił palenie dwa lata temu.", exRu: "Мій тато кинув палити два роки тому." },
        { pl: "wysypiać się / wyspać się", ru: "висипатися / виспатися", ex: "W tygodniu nigdy się nie wysypiam.", exRu: "У будні я ніколи не висипаюся." },
        { pl: "nadwaga", g: "f", ru: "зайва вага", ex: "Lekarz mówi, że mam lekką nadwagę.", exRu: "Лікар каже, що в мене невелика зайва вага." },
        { pl: "szczepienie", g: "n", ru: "щеплення", note: "szczepienie na grypę — щеплення ВІД грипу (польською «на»)", ex: "Jesienią robię szczepienie na grypę.", exRu: "Восени я роблю щеплення від грипу." },
        { pl: "kontuzja", g: "f", ru: "травма (спортивна; не «контузія»!)", ex: "Po kontuzji kolana przez miesiąc nie biegałem.", exRu: "Після травми коліна я місяць не бігав." },
        { pl: "złamać", ru: "зламати", note: "złamać rękę / nogę", ex: "Na nartach w Zakopanem złamałam nogę.", exRu: "На лижах у Закопаному я зламала ногу." },
        { pl: "pogotowie", g: "n", ru: "швидка допомога", note: "номер 999 або загальний 112; dzwonić NA pogotowie", ex: "Szybko, dzwoń na pogotowie!", exRu: "Мерщій дзвони в швидку!" }
      ],

      grammar: {
        title: "Підсумок модуля 6 і шпаргалка A2",
        html: `<p>Це урок-повторення й водночас <b>контрольна точка рівня A2</b>. Якщо ви виконуєте вправи нижче без підказок (≥ 80%), сміливо переходьте до модулів B1.</p>
<h4>Давальний відмінок (celownik) — komu? czemu?</h4>
<table class="g"><tr><th></th><th>закінчення</th><th>приклади</th></tr>
<tr><td>ч. р.</td><td class="pl">-owi (-u)</td><td class="pl">lekarzowi, Tomkowi; bratu, ojcu, panu</td></tr>
<tr><td>ж. р.</td><td class="pl">-e / -ie, -i / -y</td><td class="pl">mamie, córce, siostrze; babci, ulicy</td></tr>
<tr><td>с. р.</td><td class="pl">-u</td><td class="pl">dziecku, miastu</td></tr>
<tr><td>мн.</td><td class="pl">-om</td><td class="pl">rodzicom, dzieciom</td></tr>
<tr><td>прикметники</td><td class="pl">-emu / -ej / -ym, -im</td><td class="pl">mojemu, mojej, moim</td></tr>
</table>
<p>Займенники: <span class="pl">mi (mnie), ci (tobie), mu (jemu, niemu), jej (niej), nam, wam, im (nim)</span>. Дієслова: <span class="pl">pomagać, dziękować, podobać się, smakować, życzyć, dawać, kupować</span>. Безособові: <span class="pl">Zimno mi. Przykro mi. Wszystko mi jedno.</span></p>
<h4>Наказовий спосіб</h4>
<table class="g"><tr><th></th><th>прохання</th><th>заборона (недок. вид)</th></tr>
<tr><td>ty</td><td class="pl">Zrób! Weź! Idź!</td><td class="pl">Nie rób! Nie bierz! Nie idź!</td></tr>
<tr><td>my</td><td class="pl">Chodźmy! Zróbmy!</td><td class="pl">Nie róbmy tego!</td></tr>
<tr><td>wy</td><td class="pl">Zróbcie! Weźcie!</td><td class="pl">Nie róbcie! Nie bierzcie!</td></tr>
<tr><td>pan / pani</td><td class="pl">Proszę usiąść. Niech pan usiądzie.</td><td class="pl">Proszę nie palić. Niech pan nie pali.</td></tr>
</table>
<h4>Шпаргалка A2: відмінки на одному прикладі</h4>
<table class="g"><tr><th>відмінок</th><th>питання</th><th>приклад</th></tr>
<tr><td>mianownik (наз.)</td><td class="pl">kto? co?</td><td class="pl">To jest moja siostra.</td></tr>
<tr><td>dopełniacz (род.)</td><td class="pl">kogo? czego?</td><td class="pl">Nie ma mojej siostry.</td></tr>
<tr><td>celownik (дав.)</td><td class="pl">komu? czemu?</td><td class="pl">Pomagam mojej siostrze.</td></tr>
<tr><td>biernik (знах.)</td><td class="pl">kogo? co?</td><td class="pl">Kocham moją siostrę.</td></tr>
<tr><td>narzędnik (оруд.)</td><td class="pl">z kim? z czym?</td><td class="pl">Idę do kina z moją siostrą.</td></tr>
<tr><td>miejscownik (місц.)</td><td class="pl">o kim? o czym?</td><td class="pl">Często myślę o mojej siostrze.</td></tr>
</table>
<div class="tip">У польській, як і в українській, сім відмінків: до шести з таблиці додайте кличний — wołacz (Siostro! Mamo! Panie doktorze! — як укр. «Сестро! Мамо! Пане лікарю!»). У жіночого роду давальний = місцевий (<span class="pl">siostrze</span>, як укр. «сестрі»), а в чоловічого роду істот знахідний = родовий, як і в нас («люблю брата», «немає брата»): <span class="pl">Kocham brata. Nie ma brata.</span></div>
<h4>Дієслова: час, вид, рух</h4>
<ul>
<li>Минулий: <span class="pl">byłem / byłam, poszedł / poszła, jadł / jadła</span> (модуль 2).</li>
<li>Майбутній недок.: <span class="pl">będę robić / będę robił(a)</span>, як укр. «буду робити»; док.: <span class="pl">zrobię</span>. Ніколи не «będę zrobić» — як і в нас не кажуть «буду зробити»! (модуль 4)</li>
<li>Рух: <span class="pl">idę, jadę</span> — зараз, в один бік; <span class="pl">chodzę, jeżdżę</span> — регулярно (модуль 5).</li>
<li><span class="pl">Gdzie?</span> → <span class="pl">w / na</span> + місцевий (<span class="pl">w Krakowie</span>); <span class="pl">Dokąd?</span> → <span class="pl">do</span> + родовий / <span class="pl">na</span> + знахідний (<span class="pl">do Krakowa, na pocztę</span>).</li>
<li>Числа: <span class="pl">dwa złote, pięć złotych</span> (модуль 3).</li>
</ul>`
      },

      exercises: [
        { type: "choice", q: "Ten film bardzo ___ się podobał. (my)", options: ["nas", "nam", "nami"], answer: 1, explain: "podobać się + давальний: nam (як укр. «нам сподобався»). Nas — родовий/знахідний, nami — орудний. (M6)" },
        { type: "gap", q: "Na imieniny kupiłam ___ nowy szalik. (dziadek)", answers: ["dziadkowi"], explain: "Кому? — давальний, чоловічий рід: dziadek → dziadkowi (випадне e зникає; пор. укр. «дідові»). (M6)" },
        { type: "gap", q: "___ mi ten lek z półki, proszę. (podać, ty)", answers: ["Podaj"], explain: "poda → podaj: у дієслів на -a додаємо -j (як укр. «подай»). (M6)" },
        { type: "choice", q: "Nie ___ tak głośno, dziecko śpi! (krzyczeć)", options: ["krzycz", "krzyknij", "krzyczysz"], answer: 0, explain: "Заборона — недоконаний вид: krzyczy → krzycz → nie krzycz (як укр. «не кричи»). (M6)" },
        { type: "choice", q: "Pan doktor jest jeszcze zajęty. ___ pan chwilę poczeka.", options: ["Niech", "Proszę", "Musi"], answer: 0, explain: "niech + 3-тя особа: Niech pan poczeka. З proszę потрібен інфінітив: Proszę chwilę poczekać. (M6)" },
        { type: "order", ru: "Не давай йому цих таблеток.", words: ["Nie", "dawaj", "mu", "tych", "tabletek."], alt: [], explain: "Заборона — недок. вид (nie dawaj), mu — давальний, tych tabletek — родовий після заперечення, точнісінько як в українському реченні. (M6 + M3)" },
        { type: "gap", q: "Codziennie rano piję ___ z cytryną. (ciepła woda)", answers: ["ciepłą wodę"], explain: "Пити що? — знахідний: ciepła woda → ciepłą wodę. (M1)" },
        { type: "choice", q: "Wczoraj ___ autobusem do przychodni. (ja, kobieta)", options: ["pojechałam", "pojechałem", "pojechała"], answer: 0, explain: "Минулий час, 1-ша особа жіночого роду: -łam. Autobusem — орудний (транспорт). (M2)" },
        { type: "gap", q: "Mój brat jest ___ . (dobry lekarz)", answers: ["dobrym lekarzem"], explain: "być + професія — орудний: dobrym lekarzem (як укр. «бути добрим лікарем»). (M2)" },
        { type: "gap", q: "W aptece nie było ___ . (ten syrop)", answers: ["tego syropu"], explain: "nie było + родовий: ten syrop → tego syropu (закінчення -u, як у багатьох неістот). (M3)" },
        { type: "choice", q: "Te krople kosztują dwadzieścia ___ .", options: ["złoty", "złote", "złotych"], answer: 2, explain: "З числами від 5 (зокрема 20) — родовий множини: dwadzieścia złotych. Złote — з 2–4 (dwa złote, dwadzieścia dwa złote). (M3)" },
        { type: "choice", q: "Jutro ___ do lekarza i zapytam o wyniki. (zadzwonić)", options: ["zadzwonię", "będę zadzwonić", "zadzwoniłem"], answer: 0, explain: "Майбутній доконаного виду — простий: zadzwonię. «Będę» + доконаний вид — груба помилка, як і укр. «буду зателефонувати». (M4)" },
        { type: "gap", q: "Moja siostra pracuje w szpitalu w ___ . (Gdańsk)", answers: ["Gdańsku"], explain: "Gdzie? — w + місцевий: Gdańsk → w Gdańsku (після k, g, ch — закінчення -u). (M5)" },
        { type: "choice", q: "Co tydzień ___ na basen, bo ruch to zdrowie. (ja)", options: ["chodzę", "idę", "jadę"], answer: 0, explain: "Регулярна дія (co tydzień) — різноспрямоване дієслово: chodzę. Idę / jadę — зараз, один раз. (M5)" },
        { type: "match", q: "З’єднайте речення з відмінком слова «brat» у ньому", pairs: [["Pomagam bratu.", "celownik (давальний)"], ["Nie mam brata.", "dopełniacz (родовий)"], ["Rozmawiam z bratem.", "narzędnik (орудний)"], ["Myślę o bracie.", "miejscownik (місцевий)"], ["Kocham brata.", "biernik (знахідний)"]], explain: "bratu — давальний (виняток на -u), z bratem — орудний, o bracie — місцевий (t → ci). Brata — і родовий, і знахідний: в істот чоловічого роду вони збігаються, як і в українській («немає брата», «люблю брата»)." }
      ],

      pronunciation: {
        focus: "Повторення: м’які приголосні, rz після глухих, скоромовки",
        tip: `<p>Повторюємо три теми модуля:</p>
<ol>
<li><b>ś, ć, ź, ń</b> = <b>si, ci, zi, ni</b> перед голосним: <span class="pl">kosi</span> — м’яке [ш’], <span class="pl">kosy</span> — тверде [с], а y — як голосний в українському «коси».</li>
<li><b>rz</b> після p, t, k, ch звучить як <b>sz</b>: <span class="pl">przepraszam</span> [пшепрашам], <span class="pl">trzy</span> [тши].</li>
<li>Скоромовки — повільно, по складах, з наголосом на <b>передостанній</b> склад, потім швидше.</li>
</ol>`,
        items: [
          { type: "minimal", options: ["kosi", "kosy"], ru: ["косить", "коси"] },
          { type: "stress", word: "szczepienie", syllables: ["szcze", "pie", "nie"], answer: 1 },
          { type: "stress", word: "pogotowie", syllables: ["po", "go", "to", "wie"], answer: 2 },
          { type: "listen", text: "Przepraszam, czy mógłby mi pan pomóc?", ru: "Перепрошую, чи не могли б ви мені допомогти?", note: "prze- [пше]; mi — коротка форма давального" },
          { type: "listen", text: "Pchła pchłę pchała, pchła płakała.", ru: "Блоха блоху штовхала, блоха плакала." },
          { type: "dictation", text: "Niech pan nie bierze tego leku na czczo." },
          { type: "dictation", text: "Pomóż babci, ona źle się czuje." }
        ]
      },

      reading: {
        title: "List z Ciechocinka",
        text: "Kochana Madziu!\n\nPiszę do ciebie z Ciechocinka. Jestem tu już tydzień i czuję się świetnie! Sanatorium jest duże, a z mojego pokoju widać park. Codziennie rano chodzę na spacer koło tężni. Lekarz mówi, że to powietrze bardzo mi służy, a ruch to zdrowie. Mieszkam z panią Krysią z Łodzi. Jest bardzo miła, tylko w nocy strasznie chrapie.\n\nMój dzień wygląda jak w wojsku: o siódmej śniadanie, potem ćwiczenia na basenie, masaż i obiad. Jedzenie nie bardzo mi smakuje, bo wszystko jest bez soli. Ale za to schudłam dwa kilo! Mam jeszcze lekką nadwagę, więc wieczorem chodzę z kijkami po parku.\n\nWczoraj na wieczorku tanecznym poznałam pana Henryka. Kiedyś był kierowcą autobusu w Poznaniu. Dwa lata temu miał kontuzję kolana, a teraz tańczy jak zawodowiec. Tylko nie mów o tym mamie, bo zaraz zacznie się martwić!\n\nA jak ty się czujesz? Mama pisała mi, że znowu jesteś przeziębiona. Posłuchaj babci: ubieraj się ciepło, pij herbatę z miodem i cytryną, wysypiaj się i nie siedź do północy przed komputerem. I zrób wreszcie szczepienie na grypę!\n\nDziękuję ci za paczkę – książki bardzo mi się podobają. W niedzielę przyjeżdżam do was pociągiem. Niech tata odbierze mnie z dworca o piętnastej.\n\nŚciskam cię mocno,\n\nBabcia Halina\n\nPS Pan Henryk też przesyła ci pozdrowienia!",
        glossary: [
          { pl: "tężni", ru: "градирні (соляні споруди на курорті; tężnia)" },
          { pl: "chrapie", ru: "хропе" },
          { pl: "w wojsku", ru: "у війську, в армії" },
          { pl: "schudłam", ru: "схудла" },
          { pl: "z kijkami", ru: "з палицями (скандинавська ходьба)" },
          { pl: "wieczorku tanecznym", ru: "танцювальному вечорі" },
          { pl: "zawodowiec", ru: "професіонал" },
          { pl: "odbierze", ru: "зустріне, забере" },
          { pl: "Ściskam", ru: "обіймаю (наприкінці листа)" }
        ],
        questions: [
          { type: "tf", q: "Babcia jest w sanatorium od miesiąca.", answer: false, explain: "Вона там тиждень: «Jestem tu już tydzień»." },
          { type: "choice", q: "Dlaczego jedzenie nie smakuje babci?", options: ["Bo jest bez soli.", "Bo jest za ostre.", "Bo jest zimne."], answer: 0, explain: "«Jedzenie nie bardzo mi smakuje, bo wszystko jest bez soli»." },
          { type: "choice", q: "Kim był kiedyś pan Henryk?", options: ["Lekarzem.", "Kierowcą autobusu.", "Tancerzem."], answer: 1, explain: "«Kiedyś był kierowcą autobusu w Poznaniu» — być + орудний." },
          { type: "tf", q: "Pani Krysia chrapie w nocy.", answer: true, explain: "«Jest bardzo miła, tylko w nocy strasznie chrapie»." },
          { type: "choice", q: "Kto ma odebrać babcię z dworca?", options: ["Madzia.", "Mama.", "Tata."], answer: 2, explain: "«Niech tata odbierze mnie z dworca» — нехай тато зустріне мене на вокзалі." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля. Ваш друг Войтек постійно хворіє. Напишіть йому лист: 1) розкажіть, як ви самі нещодавно хворіли і що вам допомогло (минулий час); 2) дайте 3–4 поради про здоровий спосіб життя (наказовий спосіб, зокрема хоча б одна заборона); 3) побажайте йому здоров’я (życzyć + кому + чого).",
        minWords: 60,
        maxWords: 90,
        useWords: ["zdrowy tryb życia", "ruch", "szczepienie", "wysypiać się"],
        checklist: [
          { label: "Щонайменше 3 форми наказового способу", pattern: "(?<![\\p{L}])(pij|jedz|śpij|chodź|idź|zrób|rób|weź|bierz|ubieraj|ubierz|rzuć|pal|siedź|zapisz|uprawiaj|ćwicz|biegaj|pamiętaj|odpoczywaj|zadzwoń|dzwoń|słuchaj|posłuchaj|spaceruj|dbaj|zacznij|kup|wyłącz|spróbuj|wysypiaj|jeźdź)(?![\\p{L}])", min: 3 },
          { label: "Побажання: życzyć + кому (Życzę ci…)", pattern: "życz\\p{L}*\\s+(ci|tobie|wam|panu|pani)(?![\\p{L}])", min: 1 },
          { label: "Щонайменше 2 дієслова в минулому часі 1-ї особи (-łem / -łam)", pattern: "\\p{L}+(łem|łam)(?![\\p{L}])", min: 2 }
        ],
        model: "Cześć Wojtku! Słyszałam, że znowu jesteś chory. Ja w zeszłym miesiącu też miałam grypę i przez tydzień leżałam w łóżku. Pomogły mi dopiero odpoczynek i rosół mojej mamy. Teraz dbam o zdrowy tryb życia – spróbuj i ty! Codziennie chodź na spacer, bo ruch to zdrowie. Nie siedź do nocy przed komputerem, musisz się wysypiać. Jedz dużo warzyw i nie pij tyle kawy. Jesienią zrób szczepienie na grypę. Życzę ci dużo zdrowia i energii! Ściskam, Ania"
      }
    }
  ]
});
