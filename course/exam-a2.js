// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.exam({
  id: "a2",
  title: "Test kontrolny A2",
  intro: `<p>Контрольний тест — це <b>проміжна перевірка після 6-го тижня</b>: він показує, наскільки впевнено ви володієте матеріалом модулів 1–6 (рівень <b>A2</b>), перш ніж переходити до частини B1. У тесті лише те, що ви вже пройшли: теперішній час і знахідний відмінок, минулий час і орудний відмінок, родовий відмінок із числівниками та цінами, вид дієслова й майбутній час, місцевий відмінок і дієслова руху, давальний відмінок і наказовий спосіб. Теми — повсякденне життя, покупки та їжа, місто й транспорт, здоров’я, плани.</p>
<h4>Структура і час</h4>
<ul>
<li><b>Gramatyka</b> — 20 завдань (вибір варіанта, вписати форму) · ~12 хв</li>
<li><b>Słownictwo</b> — 10 завдань (вибір, вписати слово, зіставлення) · ~5 хв</li>
<li><b>Czytanie</b> — 2 короткі тексти (~170 слів), до кожного 5 запитань · ~10 хв</li>
<li><b>Słuchanie</b> — 2 записи, до кожного 4 запитання. Текст запису <b>не показується</b>; слухайте не більше двох разів · ~6 хв</li>
<li><b>Pisanie</b> — особистий лист (e-mail) подрузі на 70–110 слів · ~12 хв</li>
</ul>
<p>Загальний час — <b>приблизно 40–45 хвилин</b>. Краще пройти тест за один раз, без перерв.</p>
<h4>Оцінювання</h4>
<ul>
<li>Кожна з п’яти частин важить однаково — по <b>20%</b>. Тест складено, якщо загалом набрано <b>не менше 60%</b> і жодна частина не нижча за <b>40%</b>.</li>
<li>У завданнях «вписати» відповідь без польських літер (ą, ę, ó, ł, ś, ć, ż, ź, ń) зараховується лише як «майже» — пишіть із діакритикою.</li>
<li>Письмо оцінює Claude за критеріями A2 (виконання завдання, граматика, лексика). Якщо перевірка недоступна, оцініть текст самостійно за чек-листом і порівняйте зі зразком.</li>
<li>Якщо якась частина нижча за 60%, перед модулем 7 повторіть відповідні модулі: відмінки — M1–M3 і M5–M6, вид і майбутній час — M4.</li>
</ul>
<div class="tip">Не користуйтеся словником і перекладачем. До текстів для читання й аудіювання дано невеликий глосарій — решту слів ви вже знаєте з курсу.</div>`,
  passScore: 60,
  sections: [
    {
      id: "grammar",
      title: "Gramatyka",
      titleRu: "Граматика",
      items: [
        // --- M1: czas teraźniejszy, biernik, podwójne przeczenie ---
        {
          type: "gap",
          q: "Przepraszam, dzisiaj nie ___ (móc, ja) przyjść na zebranie.",
          answers: ["mogę"],
          explain: "Móc дієвідмінюється з чергуванням g/ż: mogę, możesz, może, możemy, możecie, mogą. У формі ja — g: mogę."
        },
        {
          type: "choice",
          q: "Znasz ___? To nasz nowy sąsiad.",
          options: ["tego pana", "ten pan", "temu panu"],
          answer: 0,
          explain: "Znać kogo? — знахідний відмінок. У назвах істот ч. р. він збігається з родовим: tego pana (пор. укр. «знаю цього пана»). Ten pan — називний, temu panu — давальний."
        },
        {
          type: "choice",
          q: "W niedzielę ___ nie robię — leżę na kanapie i oglądam seriale.",
          options: ["nic", "coś", "wszystko"],
          answer: 0,
          explain: "Подвійне заперечення, як і в українській: nic nie robię — нічого не роблю. Coś і wszystko з nie у значенні «нічого» не вживаються."
        },
        // --- M2: czas przeszły, narzędnik ---
        {
          type: "gap",
          q: "Rano nie miałem czasu, więc ___ (jeść, ja — mężczyzna) śniadanie w pracy.",
          answers: ["jadłem", "zjadłem"],
          explain: "Минулий час від jeść нерегулярний, e → a: jadł, jadłem (ч. р.), jadłam (ж. р.). Форма доконаного виду zjadłem теж підходить."
        },
        {
          type: "gap",
          q: "Mój starszy brat jest ___ (dobry programista) i pracuje zdalnie.",
          answers: ["dobrym programistą"],
          explain: "Być + професія — орудний відмінок (пор. укр. «бути добрим програмістом»). Прикметник ч. р. → -ym (dobrym), а іменник ч. р. на -a відмінюється як жіночий → -ą (programistą)."
        },
        {
          type: "choice",
          q: "Codziennie jeżdżę do pracy ___.",
          options: ["tramwajem", "na tramwaju", "tramwaj"],
          answer: 0,
          explain: "Вид транспорту — орудний відмінок без прийменника: tramwajem, autobusem, pociągiem (як у нормативній українській: «їхати трамваєм»). «Na tramwaju» — калька з розмовного «на трамваї». Na + місцевий — лише з тим, на чому їдуть, стоячи чи сидячи зверху: na rowerze, na hulajnodze, na nartach."
        },
        // --- M3: dopełniacz, liczebniki, ceny ---
        {
          type: "gap",
          q: "Nie piję ___ (kawa), bo po niej boli mnie głowa.",
          answers: ["kawy"],
          explain: "Після заперечення прямий додаток стоїть у родовому відмінку, як і в українському «не п’ю кави»: piję kawę → nie piję kawy."
        },
        {
          type: "gap",
          q: "Ten zegarek to prezent dla ___ (mój tata).",
          answers: ["mojego taty"],
          explain: "Dla + родовий відмінок. Tata — чоловічий рід на -a: іменник отримує -y (taty), а займенник — чоловіче закінчення -ego (mojego)."
        },
        {
          type: "choice",
          q: "— Ile kosztuje ten chleb? — Cztery ___ pięćdziesiąt.",
          options: ["złote", "złotych", "złoty"],
          answer: 0,
          explain: "Після 2, 3, 4 (а також 22, 23, 24…) — złote; після 5–21 — złotych; після 1 — złoty. Cztery złote pięćdziesiąt = 4,50 zł."
        },
        {
          type: "gap",
          q: "Poproszę dwa kilo ___ (pomidory) i pół kilo cebuli.",
          answers: ["pomidorów"],
          explain: "Після слів кількості (kilo, pół kilo, dużo) — родовий відмінок. Множина чоловічого роду: pomidory → pomidorów."
        },
        // --- M4: aspekt, czas przyszły ---
        {
          type: "choice",
          q: "Kiedy ___ zakupy, wróciłem do domu i ugotowałem obiad.",
          options: ["zrobiłem", "robiłem", "zrobię"],
          answer: 0,
          explain: "Ланцюжок завершених дій (зробив покупки → повернувся → приготував) — доконаний вид: zrobiłem. Robiłem — процес («коли я робив покупки»), а повернутися додому під час процесу не можна; zrobię — майбутній час."
        },
        {
          type: "choice",
          q: "Od przyszłego miesiąca ___ na basen dwa razy w tygodniu.",
          options: ["będę chodzić", "pójdę", "idę"],
          answer: 0,
          explain: "Повторювана дія в майбутньому — недоконаний вид, складений майбутній час: będę chodzić (= będę chodził/chodziła). Pójdę — один раз; idę — рух в один бік зараз, а для регулярних походів потрібне chodzić."
        },
        {
          type: "gap",
          q: "Nie martw się, jutro rano ___ (zadzwonić, ja) do przychodni i zapytam o wyniki.",
          answers: ["zadzwonię"],
          explain: "Zadzwonić — доконаний вид, тому його «теперішня» форма означає майбутнє (простий майбутній час): zadzwonię = зателефоную."
        },
        // --- M5: miejscownik, czasowniki ruchu, gdzie / dokąd ---
        {
          type: "gap",
          q: "Moja siostra pracuje w ___ (apteka) na rogu ulicy.",
          answers: ["aptece"],
          explain: "Gdzie? — w + місцевий відмінок. Перед закінченням -e приголосний чергується, k → c: apteka → w aptece (як і в українському «аптека → в аптеці»)."
        },
        {
          type: "choice",
          q: "Jutro ___ do Wrocławia pociągiem.",
          options: ["jadę", "idę", "jeżdżę"],
          answer: 0,
          explain: "Їхати транспортом — jechać (не iść, це пішки). Конкретна поїздка в один бік — однонаправлене jadę; jeżdżę — регулярно або туди й назад (пор. укр. «їду / їжджу»)."
        },
        {
          type: "choice",
          q: "— Gdzie jesteś? — Jestem ___, wysyłam paczkę.",
          options: ["na poczcie", "na pocztę", "w poczcie"],
          answer: 0,
          explain: "Gdzie? — na + місцевий відмінок: poczta → na poczcie (t → ci), пор. укр. «на пошті». Na pocztę відповідає на запитання «куди?», а з poczta завжди вживається na, а не w."
        },
        // --- M6: celownik, tryb rozkazujący ---
        {
          type: "choice",
          q: "Ania kupiła tę sukienkę, bo bardzo ___ się podobała.",
          options: ["jej", "ją", "niej"],
          answer: 0,
          explain: "Podobać się komu? — давальний відмінок: jej się podobała (їй сподобалася). Ją — знахідний, niej — форма лише після прийменників."
        },
        {
          type: "gap",
          q: "Codziennie pomagam ___ (mój dziadek) robić zakupy.",
          answers: ["mojemu dziadkowi"],
          explain: "Pomagać komu? — давальний відмінок, як і в українському «допомагати кому». Ч. р.: закінчення -owi (пор. укр. -ові: дідові), випадне e зникає: dziadek → dziadkowi; займенник — mojemu."
        },
        {
          type: "gap",
          q: "___ (otworzyć, ty) okno, proszę — jest tu strasznie duszno.",
          answers: ["Otwórz"],
          explain: "Наказовий спосіб утворюється від основи 3-ї особи: otworzy → otworz-, а o переходить в ó: otwórz! (мн. otwórzcie)."
        },
        {
          type: "gap",
          q: "Nie ___ (dzwonić / zadzwonić, ty) do mnie po dziesiątej, bo wcześnie chodzę spać.",
          answers: ["dzwoń"],
          explain: "Заборону виражають недоконаним видом: nie dzwoń! Форма «nie zadzwoń» у значенні заборони не вживається."
        }
      ]
    },
    {
      id: "vocab",
      title: "Słownictwo",
      titleRu: "Лексика",
      items: [
        {
          type: "match",
          q: "З’єднайте симптоми з перекладом",
          pairs: [["kaszel", "кашель"], ["katar", "нежить"], ["gorączka", "температура, жар"], ["ból gardła", "біль у горлі"], ["dreszcze", "озноб, дрижаки"]],
          explain: "Увага: katar — це нежить, а не «катар». Mieć gorączkę — мати (високу) температуру (пор. укр. «гарячка»); mam dreszcze — мене морозить."
        },
        {
          type: "match",
          q: "З’єднайте слова з теми «Місто» з перекладом",
          pairs: [["dworzec", "вокзал"], ["przystanek", "зупинка"], ["skrzyżowanie", "перехрестя"], ["rozkład jazdy", "розклад руху"], ["przejście dla pieszych", "пішохідний перехід"]],
          explain: "Dworzec kolejowy / autobusowy — залізничний вокзал / автовокзал; na przystanku — на зупинці (не плутайте з «пристань» — przystań); rozkład jazdy — розклад руху транспорту (тут польське rozkład і українське «розклад» збігаються)."
        },
        {
          type: "choice",
          q: "Poproszę ___ dżemu truskawkowego.",
          options: ["słoik", "pęczek", "bochenek"],
          answer: 0,
          explain: "Słoik — скляна банка (słoik dżemu, miodu). Pęczek — пучок (pęczek koperku, rzodkiewki), bochenek — хлібина, буханка (bochenek chleba)."
        },
        {
          type: "gap",
          q: "Płacę kartą, ale kelnerowi zawsze zostawiam ___ w gotówce. (чайові)",
          answers: ["napiwek", "napiwki"],
          explain: "Napiwek — чайові (zostawić napiwek). Не плутайте з reszta — решта і rachunek — рахунок."
        },
        {
          type: "choice",
          q: "Przepraszam, czy mogę prosić ___? Chcemy coś zamówić.",
          options: ["kartę", "rachunek", "resztę"],
          answer: 0,
          explain: "Karta (karta dań) — меню: її просять, щоб щось замовити. Rachunek — рахунок (наприкінці), reszta — решта."
        },
        {
          type: "choice",
          q: "Jestem chory i przez tydzień nie mogę pracować. Lekarz dał mi ___.",
          options: ["zwolnienie lekarskie", "skierowanie", "receptę"],
          answer: 0,
          explain: "Zwolnienie lekarskie (L4) — лікарняний. Skierowanie — направлення (до спеціаліста, на аналізи), recepta — рецепт на ліки."
        },
        {
          type: "gap",
          q: "Z Wrocławia do Krakowa jadę pociągiem, ale w Katowicach muszę się ___. (пересісти)",
          answers: ["przesiąść"],
          explain: "Przesiąść się (док. вид) / przesiadać się — пересісти / пересідати на інший транспорт."
        },
        {
          type: "choice",
          q: "Rano nie usłyszałam ___ i spóźniłam się do pracy.",
          options: ["budzika", "drzemki", "pośpiechu"],
          answer: 0,
          explain: "Budzik — будильник (після заперечення — родовий: budzika). Drzemka — короткий сон, дрімота, pośpiech — поспіх: їх не можна «почути»."
        },
        {
          type: "gap",
          q: "W lipcu biorę dwa tygodnie ___ i jedziemy nad morze. (відпустка)",
          answers: ["urlopu", "wolnego"],
          explain: "Відпустка на роботі — urlop (wakacje — це канікули або відпочинок загалом). Після dwa tygodnie — родовий відмінок: urlopu. Розмовне «dwa tygodnie wolnego» теж правильне."
        },
        {
          type: "choice",
          q: "Zebranie jest w piątek, ale szef chce je ___ na poniedziałek.",
          options: ["przełożyć", "odwołać", "zamówić"],
          answer: 0,
          explain: "Przełożyć na… — перенести на інший термін. Odwołać — скасувати (зовсім, без нової дати), zamówić — замовити."
        }
      ]
    },
    {
      id: "reading",
      title: "Czytanie",
      titleRu: "Читання",
      texts: [
        {
          title: "Nowe życie nad morzem",
          text: "Cześć, mam na imię Weronika. Od miesiąca mieszkam w Gdańsku. Przeprowadziłam się tutaj z Lublina, bo dostałam pracę w firmie informatycznej. Wynajmuję małą kawalerkę niedaleko plaży. Rano chodzę z psem na spacer nad morze, a potem jadę do pracy tramwajem. Podróż trwa tylko dwadzieścia minut, więc nie muszę wstawać bardzo wcześnie.\n\nW pierwszym tygodniu wszystko było dla mnie nowe. Nie znałam miasta i dwa razy zgubiłam się na Starym Mieście. Raz pojechałam autobusem w złą stronę i spóźniłam się na zebranie. Na szczęście szef tylko się roześmiał.\n\nNa co dzień nie gotuję dużo. W tygodniu jem obiad w barze obok biura, a w sobotę robię zakupy na targu niedaleko domu. Kupuję tam warzywa, owoce i świeże ryby.\n\nNajbardziej podoba mi się to, że w Gdańsku jest dużo zieleni i ścieżek rowerowych. Niestety, często pada deszcz i wieje silny wiatr. W przyszły weekend odwiedzą mnie rodzice. Pokażę im Westerplatte i molo w Sopocie, a wieczorem zjemy razem rybę na Długim Targu. Mam nadzieję, że będzie ładna pogoda!",
          glossary: [
            { pl: "w złą stronę", ru: "не в той бік" },
            { pl: "roześmiał", ru: "розсміявся (roześmiać się)" },
            { pl: "zieleni", ru: "зелені (парків, дерев)" },
            { pl: "ścieżek rowerowych", ru: "велодоріжок" },
            { pl: "wieje", ru: "віє, дме (про вітер)" }
          ],
          questions: [
            {
              type: "tf",
              q: "Weronika przeprowadziła się do Gdańska, bo dostała tam pracę.",
              answer: true,
              explain: "Правда: «Przeprowadziłam się tutaj z Lublina, bo dostałam pracę w firmie informatycznej»."
            },
            {
              type: "choice",
              q: "Jak Weronika codziennie dojeżdża do pracy?",
              options: ["Tramwajem.", "Autobusem.", "Rowerem."],
              answer: 0,
              explain: "«Potem jadę do pracy tramwajem». Автобусом вона одного разу поїхала не в той бік."
            },
            {
              type: "tf",
              q: "Szef był zły, kiedy Weronika spóźniła się na zebranie.",
              answer: false,
              explain: "Неправда: «Na szczęście szef tylko się roześmiał» — начальник лише розсміявся."
            },
            {
              type: "choice",
              q: "Gdzie Weronika je obiad w tygodniu?",
              options: ["W domu.", "W barze obok biura.", "Na targu."],
              answer: 1,
              explain: "«W tygodniu jem obiad w barze obok biura». На ринку вона по суботах купує продукти, а вдома готує мало."
            },
            {
              type: "choice",
              q: "Co Weronika zrobi w przyszły weekend?",
              options: ["Pojedzie do rodziców do Lublina.", "Pokaże rodzicom Westerplatte i molo w Sopocie.", "Będzie cały weekend pracować."],
              answer: 1,
              explain: "«W przyszły weekend odwiedzą mnie rodzice. Pokażę im Westerplatte i molo w Sopocie» — батьки приїдуть до неї самі."
            }
          ]
        },
        {
          title: "Lekarz odpowiada",
          text: "Pani Doktor,\nmam trzydzieści pięć lat i od dwóch tygodni ciągle jestem zmęczona. Rano nie mogę wstać, w pracy boli mnie głowa, a wieczorem długo nie mogę zasnąć. Piję cztery kawy dziennie, bo bez kawy nie mogę pracować. Co mam robić?\nMagda z Torunia\n\nPani Magdo,\njesienią takie objawy ma wiele osób. Dni są krótkie, mamy mało słońca i mało ruchu. Najpierw proszę ograniczyć kawę: najwyżej dwie filiżanki dziennie i tylko przed południem. Po pracy niech pani idzie na spacer — nawet pół godziny na świeżym powietrzu bardzo pomaga. Proszę też chodzić spać o tej samej porze i nie patrzeć w telefon w łóżku.\n\nWażne jest też jedzenie. Niech pani je więcej warzyw, owoców i ryb, a mniej słodyczy. Wieczorem zamiast kawy proszę wypić herbatę z melisy.\n\nJeśli za dwa tygodnie nie poczuje się pani lepiej, proszę zapisać się do lekarza rodzinnego i zrobić badania krwi. Zmęczenie może być objawem choroby, dlatego proszę go nie lekceważyć.\ndr Anna Nowak",
          glossary: [
            { pl: "ograniczyć", ru: "обмежити" },
            { pl: "o tej samej porze", ru: "в один і той самий час" },
            { pl: "melisy", ru: "меліси (заспокійлива трава)" },
            { pl: "badania krwi", ru: "аналіз крові" },
            { pl: "lekceważyć", ru: "нехтувати, не зважати" }
          ],
          questions: [
            {
              type: "choice",
              q: "Ile kaw dziennie pije teraz Magda?",
              options: ["Dwie.", "Cztery.", "Pięć."],
              answer: 1,
              explain: "«Piję cztery kawy dziennie». Дві чашки — це норма, яку радить лікарка."
            },
            {
              type: "tf",
              q: "Magda ma problemy ze snem.",
              answer: true,
              explain: "Правда: «wieczorem długo nie mogę zasnąć» — увечері вона довго не може заснути."
            },
            {
              type: "tf",
              q: "Lekarka radzi Magdzie pić kawę tylko wieczorem.",
              answer: false,
              explain: "Неправда: каву — «tylko przed południem» (лише до полудня), а ввечері — «zamiast kawy… herbatę z melisy»."
            },
            {
              type: "choice",
              q: "Co lekarka radzi robić po pracy?",
              options: ["Iść na spacer.", "Iść na siłownię.", "Od razu iść spać."],
              answer: 0,
              explain: "«Po pracy niech pani idzie na spacer — nawet pół godziny na świeżym powietrzu bardzo pomaga»."
            },
            {
              type: "choice",
              q: "Kiedy Magda ma iść do lekarza rodzinnego?",
              options: ["Jeszcze w tym tygodniu.", "Jeśli za dwa tygodnie nie poczuje się lepiej.", "Tylko jeśli będzie miała gorączkę."],
              answer: 1,
              explain: "«Jeśli za dwa tygodnie nie poczuje się pani lepiej, proszę zapisać się do lekarza rodzinnego»."
            }
          ]
        }
      ]
    },
    {
      id: "listening",
      title: "Słuchanie",
      titleRu: "Аудіювання",
      texts: [
        {
          title: "Na targu",
          text: "— Dzień dobry! Poproszę kilo pomidorów i pół kilo ogórków.\n— Proszę bardzo. Coś jeszcze?\n— Ile kosztują truskawki?\n— Dwanaście złotych za kilogram. Są bardzo słodkie, prosto z działki.\n— To poproszę dwa kilo. I jeszcze pęczek koperku.\n— Niestety, koperku już nie ma, rano wszystko sprzedałem. Może być pietruszka?\n— Może być. A ile kosztują ziemniaki?\n— Młode ziemniaki kosztują pięć złotych za kilo.\n— Nie, dziękuję, ziemniaki mam w domu. Ile płacę?\n— Razem czterdzieści jeden złotych.\n— Mogę zapłacić kartą?\n— Niestety, u mnie tylko gotówka.\n— Dobrze. Proszę, pięćdziesiąt złotych.\n— Dziewięć złotych reszty. Dziękuję i zapraszam ponownie!",
          glossary: [
            { pl: "koperku", ru: "кропу (koperek — кріп)" }
          ],
          questions: [
            {
              type: "choice",
              q: "Ile kosztuje kilogram truskawek?",
              options: ["10 zł.", "12 zł.", "24 zł."],
              answer: 1,
              explain: "«Dwanaście złotych za kilogram» — 12 zł. 24 zł коштують два кілограми, які купує клієнтка."
            },
            {
              type: "tf",
              q: "Klientka kupuje koperek.",
              answer: false,
              explain: "Неправда: «koperku już nie ma» — кропу вже немає, тож клієнтка бере петрушку (pietruszka)."
            },
            {
              type: "choice",
              q: "Ile klientka płaci za wszystko?",
              options: ["31 zł.", "41 zł.", "50 zł."],
              answer: 1,
              explain: "«Razem czterdzieści jeden złotych» — 41 zł. 50 zł — це купюра, яку вона дає продавцеві (решта — 9 zł)."
            },
            {
              type: "tf",
              q: "Klientka płaci gotówką.",
              answer: true,
              explain: "Правда: карткою не можна («u mnie tylko gotówka»), тому вона дає pięćdziesiąt złotych готівкою."
            }
          ]
        },
        {
          title: "W informacji turystycznej",
          text: "— Dzień dobry, przepraszam, jak dojechać do zoo?\n— Najlepiej autobusem numer sto czterdzieści pięć. Przystanek jest za rogiem, naprzeciwko poczty.\n— Czy to daleko?\n— Nie bardzo, jedzie się około dwudziestu minut. Proszę wysiąść na ostatnim przystanku, potem skręcić w lewo i iść prosto jeszcze pięć minut.\n— A gdzie mogę kupić bilet?\n— W automacie w autobusie. Można płacić kartą.\n— Świetnie. A do której jest otwarte zoo?\n— Do osiemnastej, ale kasa jest czynna tylko do siedemnastej.\n— A czy w zoo jest jakaś kawiarnia?\n— Tak, przy wejściu jest kawiarnia i mały sklep z pamiątkami.\n— To mam jeszcze dużo czasu. Dziękuję bardzo!\n— Nie ma za co. Miłego dnia!",
          glossary: [
            { pl: "automacie", ru: "в автоматі (з продажу квитків)" },
            { pl: "czynna", ru: "відчинена, працює" }
          ],
          questions: [
            {
              type: "choice",
              q: "Którym autobusem można dojechać do zoo?",
              options: ["Numer 45.", "Numer 145.", "Numer 154."],
              answer: 1,
              explain: "«Autobusem numer sto czterdzieści pięć» — 145. Sto pięćdziesiąt cztery було б 154."
            },
            {
              type: "tf",
              q: "Przystanek jest naprzeciwko poczty.",
              answer: true,
              explain: "Правда: «Przystanek jest za rogiem, naprzeciwko poczty»."
            },
            {
              type: "choice",
              q: "Co trzeba zrobić po wyjściu z autobusu?",
              options: ["Skręcić w lewo i iść prosto pięć minut.", "Skręcić w prawo i iść prosto pięć minut.", "Przejść przez ulicę i wsiąść do tramwaju."],
              answer: 0,
              explain: "«Proszę wysiąść na ostatnim przystanku, potem skręcić w lewo i iść prosto jeszcze pięć minut»."
            },
            {
              type: "choice",
              q: "Do której jest czynna kasa w zoo?",
              options: ["Do 16:00.", "Do 17:00.", "Do 18:00."],
              answer: 1,
              explain: "«Kasa jest czynna tylko do siedemnastej» — до 17:00. До 18:00 (do osiemnastej) відчинений сам зоопарк."
            }
          ]
        }
      ]
    },
    {
      id: "writing",
      title: "Pisanie",
      titleRu: "Письмо",
      task: {
        prompt: "Ваша польська подруга Monika запросила вас на день народження минулої суботи, але ви захворіли й не прийшли. Напишіть їй e-mail. У листі: 1) перепросіть і поясніть, що сталося: що у вас боліло і що ви робили (минулий час); 2) що сказав лікар і як ви почуваєтеся зараз; 3) запропонуйте зустрітися: коли, де і що ви робитимете (майбутній час); 4) наприкінці попросіть її відповісти або зателефонувати (наказовий спосіб). Обсяг: 70–110 слів.",
        minWords: 70,
        maxWords: 110,
        useWords: ["przepraszam", "niestety", "gorączka", "lekarz", "w przyszłą sobotę"],
        checklist: [
          { label: "Щонайменше 3 дієслова в минулому часі 1-ї особи (byłam/byłem, poszłam/poszedłem, leżałam…)", pattern: "\\p{L}+(łem|łam)(?!\\p{L})", min: 3 },
          { label: "Щонайменше 2 форми майбутнього часу (będę/będziemy + інфінітив, pójdziemy, pojedziemy, spotkamy się, zobaczymy…)", pattern: "(?<!\\p{L})(będ(ę|ziesz|zie|ziemy|ziecie|ą)|(pój|przyj|wyj|doj)d(ę|ziesz|zie|ziemy|ziecie|ą)|poj(adę|edziesz|edzie|edziemy|edziecie|adą)|spotka(m|sz|my)|zobacz(ę|ysz|ymy)|zrobi(ę|sz|my)|zje(m|sz|my))(?!\\p{L})", min: 2 },
          { label: "Прохання в наказовому способі (napisz, odpisz, zadzwoń, daj znać…)", pattern: "(?<!\\p{L})(napisz|odpisz|zadzwoń|daj|odpowiedz|przyjdź|pamiętaj|wyślij|odezwij)(?!\\p{L})", min: 1 }
        ],
        model: "Cześć!\n\nBardzo cię przepraszam, że nie przyszłam w sobotę na twoje urodziny. Niestety, w piątek wieczorem dostałam wysokiej gorączki i strasznie bolało mnie gardło. Cały weekend leżałam w łóżku i piłam herbatę z miodem. W poniedziałek poszłam do lekarza. Lekarz powiedział, że to tylko przeziębienie, i dał mi zwolnienie na trzy dni. Teraz czuję się już dużo lepiej.\n\nMam dla ciebie prezent! Może spotkamy się w przyszłą sobotę? Pójdziemy na obiad do tej nowej restauracji na rynku, a potem będziemy spacerować po parku. Ja stawiam!\n\nNapisz albo zadzwoń, czy masz wtedy czas.\n\nŚciskam,\nOla"
      }
    }
  ]
});
