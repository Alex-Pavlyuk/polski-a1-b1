// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m11",
  n: 11,
  level: "B1",
  title: "Media i praca",
  titleRu: "ЗМІ та робота",
  summary: "Ви навчитеся будувати складні речення з który в усіх відмінках, переказувати чужі слова, запитання й прохання (że, czy, żeby), писати офіційні листи та впевнено проходити співбесіду, звертаючись на pan / pani / Państwo.",
  lessons: [

    // ───────────────────────── УРОК 1 ─────────────────────────
    {
      id: "m11l1",
      title: "Firma, w której pracuję",
      titleRu: "Który / która / które в усіх відмінках",
      topic: "Praca i firma",
      review: false,
      minutes: 30,
      goals: [
        "Відмінювати który / która / które в усіх відмінках і числах",
        "Будувати підрядні речення з прийменниками: w której, z którym, o których",
        "Не помилятися з відмінком: польське керування (używać, szukać + D) і заперечення",
        "Розповідати про свою фірму, відділ і колег"
      ],

      vocab: [
        { pl: "przedsiębiorstwo", g: "n", ru: "підприємство", ex: "To przedsiębiorstwo zatrudnia trzystu pracowników.", exRu: "На цьому підприємстві працює триста працівників." },
        { pl: "pracodawca", g: "m", ru: "роботодавець", note: "ч. р., але в однині відмінюється як іменник ж. р. на -a (пор. укр. «староста»): pracodawcy, pracodawcę", ex: "Mój pracodawca płaci za kurs angielskiego.", exRu: "Мій роботодавець оплачує курс англійської." },
        { pl: "pracownik", g: "m", ru: "працівник, співробітник", note: "ж. р. pracownica; мн. pracownicy", ex: "Każdy pracownik ma swój laptop.", exRu: "Кожен працівник має свій ноутбук." },
        { pl: "dział", g: "m", ru: "відділ", note: "dział kadr — відділ кадрів, dział sprzedaży — відділ продажів", ex: "Pracuję w dziale sprzedaży.", exRu: "Я працюю у відділі продажів." },
        { pl: "kierownik", g: "m", ru: "керівник, начальник", note: "ж. р. kierowniczka", ex: "Kierownik naszego działu jest na urlopie.", exRu: "Начальник нашого відділу у відпустці." },
        { pl: "siedziba", g: "f", ru: "головний офіс, штаб-квартира", ex: "Siedziba firmy znajduje się w Poznaniu.", exRu: "Головний офіс фірми розташований у Познані." },
        { pl: "zatrudniać / zatrudnić", ru: "наймати, брати на роботу", note: "kogo (знах.); być zatrudnionym — бути офіційно працевлаштованим", ex: "W tym roku firma zatrudniła dziesięć osób.", exRu: "Цього року фірма найняла десять осіб." },
        { pl: "umowa", g: "f", ru: "договір, угода", note: "umowa o pracę — трудовий договір", ex: "Jutro podpisuję umowę o pracę.", exRu: "Завтра я підписую трудовий договір." },
        { pl: "zespół", g: "m", ru: "команда, колектив", note: "ó → o: zespołu, w zespole", ex: "Nasz zespół pracuje nad nową aplikacją.", exRu: "Наша команда працює над новим застосунком." },
        { pl: "termin", g: "m", ru: "строк, дедлайн; дата, запис", note: "як укр. «термін» у значенні «строк» (термін придатності); також дата, запис: termin u dentysty — запис до стоматолога", ex: "Mamy bardzo krótki termin.", exRu: "У нас дуже стислі терміни." },
        { pl: "narada", g: "f", ru: "нарада", ex: "Narada zaczyna się o dziewiątej.", exRu: "Нарада починається о дев’ятій." },
        { pl: "etat", g: "m", ru: "ставка, штатна посада", note: "na pełen etat — на повну ставку, na pół etatu — на пів ставки", ex: "Pracuję na pół etatu, bo studiuję.", exRu: "Я працюю на пів ставки, бо навчаюся." },
        { pl: "delegacja", g: "f", ru: "відрядження", note: "хибний друг! Насамперед «відрядження», а не «делегація»: jechać w delegację — їхати у відрядження", ex: "W przyszłym tygodniu jadę w delegację do Gdańska.", exRu: "Наступного тижня я їду у відрядження до Гданська." }
      ],

      grammar: {
        title: "Który / która / które: означальні підрядні речення",
        html: `<p>Польське <b>który</b> працює так само, як українське «який» (або «котрий» — це споріднене слово!): <b>рід і число</b> беремо від іменника, до якого воно належить, а <b>відмінок</b> — від його ролі в підрядному реченні. Відмінюється як прикметник.</p>
<table class="g">
<tr><th>Відмінок</th><th>ч. р.</th><th>с. р.</th><th>ж. р.</th><th>мн. ч.-особ.</th><th>мн. інші</th></tr>
<tr><td>M (хто? що?)</td><td class="pl">który</td><td class="pl">które</td><td class="pl">która</td><td class="pl">którzy</td><td class="pl">które</td></tr>
<tr><td>D (кого? чого?)</td><td class="pl">którego</td><td class="pl">którego</td><td class="pl">której</td><td class="pl">których</td><td class="pl">których</td></tr>
<tr><td>C (кому? чому?)</td><td class="pl">któremu</td><td class="pl">któremu</td><td class="pl">której</td><td class="pl">którym</td><td class="pl">którym</td></tr>
<tr><td>B (кого? що?)</td><td class="pl">którego / który*</td><td class="pl">które</td><td class="pl">którą</td><td class="pl">których</td><td class="pl">które</td></tr>
<tr><td>N (ким? чим?)</td><td class="pl">którym</td><td class="pl">którym</td><td class="pl">którą</td><td class="pl">którymi</td><td class="pl">którymi</td></tr>
<tr><td>Msc (на кому? на чому?)</td><td class="pl">którym</td><td class="pl">którym</td><td class="pl">której</td><td class="pl">których</td><td class="pl">których</td></tr>
</table>
<p>* Знахідний ч. р.: для істот — <span class="pl">którego</span> (<span class="pl">kolega, którego znam</span>), для неістот — <span class="pl">który</span> (<span class="pl">projekt, który robię</span>). Точнісінько як в українській: «колега, якого я знаю», але «проєкт, який я роблю».</p>
<h4>Приклади</h4>
<div class="ex"><span class="pl">Człowiek, którego znam, pracuje w tej firmie.</span> — Людина, яку я знаю, працює в цій фірмі.</div>
<div class="ex"><span class="pl">Firma, w której pracuję, ma siedzibę w Gdyni.</span> — Фірма, у якій я працюю, має головний офіс у Гдині.</div>
<div class="ex"><span class="pl">Kierownik, któremu ufam, odchodzi na emeryturę.</span> — Керівник, якому я довіряю, виходить на пенсію.</div>
<div class="ex"><span class="pl">Ludzie, z którymi pracuję, są bardzo mili.</span> — Люди, з якими я працюю, дуже приємні.</div>
<div class="ex"><span class="pl">To umowa, o której ci mówiłem.</span> — Це угода, про яку я тобі казав.</div>
<h4>Пастки для україномовних</h4>
<ul>
<li><b>Відмінок визначає польське дієслово, а не український переклад.</b> <span class="pl">program, którego używam</span> (używać + D) — «програма, якою я користуюся»; <span class="pl">kobieta, której szukam</span> (szukać + D) — «жінка, яку я шукаю». Українське «шукати роботи, допомоги» теж буває з родовим, але польське дієслово вимагає його завжди.</li>
<li><b>Заперечення → родовий:</b> <span class="pl">praca, której nie lubię</span> — «робота, якої (яку) я не люблю». В українській родовий після «не» можливий, а в польській — обов’язковий.</li>
<li><b>Чоловічо-особовий рід:</b> <span class="pl">pracownicy, którzy…</span>, але <span class="pl">pracownice, które…</span> і <span class="pl">firmy, które…</span> — а українською в усіх випадках просто «які».</li>
<li><b>Прийменник — завжди перед który</b>, як і в українській: <span class="pl">Projekt, nad którym pracujemy, jest tajny.</span> Але відмінок після прийменника може не збігатися: укр. «про який» — знахідний, а польське o вимагає місцевого (o którym, o której).</li>
<li><b>Коми</b> ставлять з обох боків підрядного речення — як в українській.</li>
<li>У розмовній мові замість <span class="pl">w którym</span> часто кажуть <span class="pl">gdzie</span>: <span class="pl">miasto, gdzie mieszkam</span> (як укр. «місто, де я живу»). А от <span class="pl">facet, co tu pracuje</span> — просторіччя, хоча українське «хлопець, що тут працює» цілком літературне. На письмі вживайте тільки który.</li>
</ul>
<div class="tip">Закінчення <span class="pl">-ego</span> читається так, як пишеться: [któ-RE-go] — з проривним [ґ], як в українському «ґанок», а не з українським [г], як у слові «якого».</div>`
      },

      exercises: [
        { type: "choice", q: "To jest kolega, ___ pracuję w jednym zespole.", options: ["z którym", "z którego", "który"], answer: 0, explain: "Pracować z kim? — z + орудний. Kolega — ч. р., тому z którym." },
        { type: "gap", q: "Firma, w ___ pracuję, ma siedzibę w Poznaniu. (który)", answers: ["której"], explain: "Firma — ж. р.; w + місцевий відмінок (gdzie?) → w której." },
        { type: "gap", q: "Kierownik, ___ wczoraj poznałem, jest bardzo sympatyczny. (który)", answers: ["którego"], explain: "Poznać kogo? — знахідний; kierownik — назва істоти ч. р., тому którego (як укр. «якого»)." },
        { type: "choice", q: "Projekt, ___ teraz robimy, ma krótki termin.", options: ["który", "którego", "którym"], answer: 0, explain: "Robić co? — знахідний. Projekt — неістота ч. р., у нього B = M: który (як укр. «проєкт, який…»)." },
        { type: "gap", q: "To jest program, ___ używamy w pracy codziennie. (który)", answers: ["którego"], explain: "Używać + родовий (на відміну від українського «користуватися чим»): program → którego." },
        { type: "choice", q: "Pracownicy, ___ zatrudniliśmy w maju, mają już pierwszy projekt.", options: ["których", "którzy", "które"], answer: 0, explain: "Zatrudnić kogo? — знахідний. У множині чоловічо-особового роду B = D: których. Którzy було б, якби pracownicy самі щось робили." },
        { type: "choice", q: "To jest praca, ___ nie chcę stracić.", options: ["której", "którą", "która"], answer: 0, explain: "Заперечення (nie chcę stracić) вимагає родового: której. Без заперечення було б: praca, którą chcę mieć." },
        { type: "match", q: "З’єднайте польські фрази з перекладом", pairs: [
          ["dział, w którym pracuję", "відділ, у якому я працюю"],
          ["szef, któremu ufam", "шеф, якому я довіряю"],
          ["umowa, której nie podpisałem", "договір, який я не підписав"],
          ["ludzie, z którymi pracuję", "люди, з якими я працюю"],
          ["firma, o której słyszałem", "фірма, про яку я чув"]
        ], explain: "Прийменник стоїть перед który, а відмінок залежить від прийменника або дієслова. Після заперечення — родовий: której nie podpisałem. І зверніть увагу: укр. «про яку» — знахідний, а польське o której — місцевий." },
        { type: "order", ru: "Я шукаю роботу у фірмі, яка має головний офіс у Кракові.", words: ["Szukam", "pracy", "w", "firmie,", "która", "ma", "siedzibę", "w", "Krakowie."], alt: [], explain: "Która — називний відмінок: фірма сама «має» офіс. І не забудьте: szukać + родовий → szukam pracy (пор. укр. «шукати роботи»)." },
        { type: "translate", ru: "Це жінка, яку я шукаю.", answers: ["To jest kobieta, której szukam.", "To kobieta, której szukam."], explain: "Szukać + родовий відмінок, тому której, а не którą." }
      ],

      pronunciation: {
        focus: "Темп і ритм довгих речень",
        tip: `<p>У польській наголос майже завжди падає на <b>передостанній склад</b> — на відміну від вільного українського наголосу — і звучить слабше. Ненаголошені голосні, як і в українській, <b>вимовляються чітко</b>, без «ковтання»: <span class="pl">którego</span> звучить [кту-РЕ-ґо].</p>
<p>Довге речення діліть на смислові групи, паузи — на комах навколо підрядного речення. Перед комою голос трохи <b>підвищується</b> (думка не закінчена), у кінці речення — <b>знижується</b>.</p>
<p>Короткі прийменники не мають наголосу й «прилипають» до наступного слова: <span class="pl">w której</span> звучить як одне слово [фктурей], <span class="pl">z którym</span> — [сктурим]. Увага: в українській дзвінкі перед глухими не оглушуються («в кімнаті», «казка»), а в польській w, z перед глухим k стають [ф], [с].</p>`,
        items: [
          { type: "listen", text: "Firma, w której pracuję, ma siedzibę w Warszawie.", ru: "Фірма, у якій я працюю, має головний офіс у Варшаві.", note: "Три групи: Firma | w której pracuję | ma siedzibę w Warszawie." },
          { type: "stress", word: "którego", syllables: ["któ", "re", "go"], answer: 1 },
          { type: "minimal", options: ["który", "która", "które"], ru: ["який", "яка", "яке / які"] },
          { type: "stress", word: "przedsiębiorstwo", syllables: ["przed", "się", "bior", "stwo"], answer: 2 },
          { type: "listen", text: "Ludzie, z którymi pracuję, często zostają po godzinach.", ru: "Люди, з якими я працюю, часто затримуються після роботи.", note: "z którymi — одна фонетична група, звучить [сктурими]" },
          { type: "stress", word: "pracodawca", syllables: ["pra", "co", "daw", "ca"], answer: 2 },
          { type: "dictation", text: "Kolega, z którym pracuję, jest teraz w delegacji." }
        ]
      },

      reading: {
        title: "Pierwszy tydzień Oli",
        text: "Ola ma dwadzieścia sześć lat i od poniedziałku pracuje w przedsiębiorstwie, które produkuje gry komputerowe. Firma zatrudnia czterdzieści osób, a jej siedziba znajduje się we Wrocławiu, w starym budynku, w którym kiedyś była fabryka czekolady. Na korytarzu do dzisiaj czuć zapach kakao — przynajmniej tak twierdzi Ola.\n\nPierwszego dnia kierownik działu, pan Marek, pokazał jej biuro i przedstawił zespół. Najpierw poznała Kubę, programistę, który pracuje tu od dziesięciu lat i wie wszystko o wszystkich. Potem Agatę, z którą będzie dzielić biurko, i Tomka, któremu nikt nie przeszkadza, bo zawsze siedzi w słuchawkach.\n\nOla od razu podpisała umowę na pełen etat. To pierwsza praca, której nie znalazła przez znajomych: zobaczyła ogłoszenie w internecie, a pracodawca odpisał już po dwóch godzinach.\n\nW środę była pierwsza narada. Okazało się, że gra, nad którą pracuje cały dział, ma termin za dwa tygodnie, a jeszcze nic nie działa. Wszyscy byli zdenerwowani, ale pan Marek powiedział tylko: „Spokojnie. Mamy kawę i pizzę”.\n\nW piątek kierownik pojechał w delegację do Berlina, a pracownicy, którzy zostali w biurze, zamówili sushi i do wieczora grali w planszówki. Ola pomyślała, że to firma, w której naprawdę chce zostać.",
        glossary: [
          { pl: "twierdzi", ru: "стверджує" },
          { pl: "przedstawił", ru: "представив, познайомив" },
          { pl: "dzielić biurko", ru: "ділити (один) робочий стіл" },
          { pl: "przeszkadza", ru: "заважає" },
          { pl: "w słuchawkach", ru: "у навушниках" },
          { pl: "ogłoszenie", ru: "оголошення" },
          { pl: "odpisał", ru: "відповів (на лист)" },
          { pl: "Okazało się", ru: "Виявилося" },
          { pl: "planszówki", ru: "настільні ігри" }
        ],
        questions: [
          { type: "tf", q: "Firma, w której pracuje Ola, ma siedzibę w Krakowie.", answer: false, explain: "Siedziba firmy znajduje się we Wrocławiu." },
          { type: "choice", q: "Kim jest Kuba?", options: ["kierownikiem działu", "programistą, który zna wszystkich", "nowym pracownikiem, tak jak Ola"], answer: 1, explain: "Kuba pracuje tu od dziesięciu lat i wie wszystko o wszystkich." },
          { type: "tf", q: "Ola znalazła tę pracę dzięki znajomym.", answer: false, explain: "To pierwsza praca, której nie znalazła przez znajomych — zobaczyła ogłoszenie w internecie." },
          { type: "choice", q: "Dlaczego na naradzie wszyscy byli zdenerwowani?", options: ["Bo kierownik wyjechał do Berlina.", "Bo gra ma termin za dwa tygodnie, a jeszcze nic nie działa.", "Bo w biurze skończyła się kawa."], answer: 1, explain: "Gra, nad którą pracuje dział, ma termin za dwa tygodnie, a jeszcze nic nie działa." },
          { type: "tf", q: "W piątek kierownika nie było w biurze.", answer: true, explain: "Pan Marek pojechał w delegację do Berlina." }
        ]
      },

      writing: {
        prompt: "Напишіть e-mail подрузі Kasi про свою (справжню або вигадану) роботу. Розкажіть: 1) що це за фірма і де її головний офіс; 2) у якому відділі ви працюєте; 3) про двох-трьох колег і начальника; 4) що вам подобається, а що ні. Використайте który / która / które щонайменше в 4 різних формах, хоча б раз — із прийменником (w której, z którym…).",
        minWords: 80,
        maxWords: 120,
        useWords: ["zespół", "dział", "kierownik", "siedziba"],
        checklist: [
          { label: "Щонайменше 4 форми który / która / które", pattern: "któr\\p{L}+", min: 4 },
          { label: "Прийменник + który (w której, z którym…)", pattern: "\\b(w|we|z|ze|o|na|do|od|dla|u|przy|nad|po|przez)\\s+któr\\p{L}+", min: 1 }
        ],
        model: "Cześć Kasiu!\nOd miesiąca pracuję w nowej firmie, o której ci opowiadałam. To małe przedsiębiorstwo, które robi aplikacje dla szkół. Siedziba jest w Gdańsku, niedaleko morza, więc w przerwie chodzę na spacer. Pracuję w dziale marketingu, w którym jest pięć osób. Mój kierownik to człowiek, któremu naprawdę ufam: zawsze pomaga i nigdy nie krzyczy. Najbardziej lubię Ewę, z którą codziennie jem lunch. Cały zespół jest młody i wesoły. Jedyna rzecz, której nie lubię, to narady w poniedziałki o ósmej! W przyszłym tygodniu jadę w delegację do Berlina. Napiszę ci, jak było!\nBuziaki,\nOla"
      }
    },

    // ───────────────────────── УРОК 2 ─────────────────────────
    {
      id: "m11l2",
      title: "Powiedział, że…",
      titleRu: "Непряма мова: że, czy, питальні слова",
      topic: "Wiadomości",
      review: false,
      minutes: 30,
      goals: [
        "Переказувати чужі слова з że — без зсуву часів",
        "Передавати запитання з czy та питальними словами",
        "Правильно змінювати особу в переказі (powiedział, że przyjdzie)",
        "Розуміти новини й говорити про ЗМІ"
      ],

      vocab: [
        { pl: "wiadomości", g: "pl", ru: "новини", note: "одн. wiadomość — повідомлення, звістка; oglądać wiadomości — дивитися новини", ex: "Codziennie o 19:30 oglądam wiadomości.", exRu: "Щодня о 19:30 я дивлюся новини." },
        { pl: "dziennikarz", g: "m", ru: "журналіст", note: "ж. р. dziennikarka; мн. dziennikarze", ex: "Dziennikarz zadał ministrowi trudne pytanie.", exRu: "Журналіст поставив міністрові складне запитання." },
        { pl: "artykuł", g: "m", ru: "стаття", ex: "Czytałeś ten artykuł o cenach mieszkań?", exRu: "Ти читав цю статтю про ціни на квартири?" },
        { pl: "nagłówek", g: "m", ru: "заголовок", note: "випадне e: nagłówek → nagłówka", ex: "Ten nagłówek jest bardzo sensacyjny.", exRu: "Цей заголовок дуже сенсаційний." },
        { pl: "wywiad", g: "m", ru: "інтерв’ю", note: "udzielić wywiadu — дати інтерв’ю; друге значення — розвідка", ex: "Aktorka udzieliła wywiadu dla radia.", exRu: "Акторка дала інтерв’ю для радіо." },
        { pl: "rzecznik prasowy", g: "m", ru: "речник, прес-секретар", ex: "Rzecznik prasowy policji nie chciał komentować sprawy.", exRu: "Речник поліції не захотів коментувати справу." },
        { pl: "ogłaszać / ogłosić", ru: "оголошувати / оголосити", ex: "Rząd ogłosił, że ceny prądu nie wzrosną.", exRu: "Уряд оголосив, що ціни на електроенергію не зростуть." },
        { pl: "twierdzić", ru: "стверджувати", note: "twierdzę, twierdzisz", ex: "Sąsiad twierdzi, że widział UFO.", exRu: "Сусід стверджує, що бачив НЛО." },
        { pl: "zaprzeczać / zaprzeczyć", ru: "заперечувати, спростовувати", note: "+ давальний: zaprzeczyć plotkom (укр. «спростувати що» — знахідний!)", ex: "Piosenkarka zaprzeczyła plotkom o ślubie.", exRu: "Співачка спростувала чутки про весілля." },
        { pl: "według", ru: "за словами, на думку, згідно з", note: "+ родовий: według ekspertów, według mnie", ex: "Według synoptyków jutro będzie padać.", exRu: "За словами синоптиків, завтра буде дощ." },
        { pl: "plotka", g: "f", ru: "плітка, чутка", ex: "To tylko plotka, nie wierz w to.", exRu: "Це лише чутка, не вір." },
        { pl: "relacja", g: "f", ru: "репортаж, трансляція", note: "relacja na żywo — пряма трансляція; у мн. ще й «стосунки» (relacje z ludźmi)", ex: "Oglądaliśmy relację na żywo z meczu.", exRu: "Ми дивилися пряму трансляцію матчу." },
        { pl: "zapowiadać / zapowiedzieć", ru: "анонсувати, обіцяти, віщувати", ex: "Synoptycy zapowiadają upały.", exRu: "Синоптики обіцяють спеку." }
      ],

      grammar: {
        title: "Непряма мова: że, czy та питальні слова",
        html: `<p>Добра новина: польська непряма мова влаштована майже так само, як українська. <b>Часи не зсуваються</b> (на відміну від англійської): що було теперішнім у прямій мові, лишається теперішнім, майбутнє — майбутнім.</p>
<h4>1. Твердження → że («що»)</h4>
<table class="g">
<tr><th>Пряма мова</th><th>Непряма мова</th></tr>
<tr><td class="pl">Marek: „Jestem zmęczony.”</td><td class="pl">Marek mówi, że jest zmęczony.</td></tr>
<tr><td class="pl">Ania: „Jutro przyjdę.”</td><td class="pl">Ania powiedziała, że jutro przyjdzie.</td></tr>
<tr><td class="pl">Szef: „Byłem w Berlinie.”</td><td class="pl">Szef powiedział, że był w Berlinie.</td></tr>
</table>
<h4>2. Запитання без питального слова → czy</h4>
<p><span class="pl">Czy</span> — це наше українське «чи»! Як і в українській, воно стоїть <b>на початку</b> підрядного речення, а порядок слів після нього звичайний:</p>
<div class="ex"><span class="pl">„Masz czas?” → Zapytała, czy mam czas.</span> — Запитала, чи є в мене час.</div>
<h4>3. Запитання з питальним словом → те саме слово</h4>
<div class="ex"><span class="pl">„Gdzie pracujesz?” → Zapytał, gdzie pracuję.</span></div>
<div class="ex"><span class="pl">„Ile to kosztuje?” → Zapytałem, ile to kosztuje.</span></div>
<h4>4. Зміна особи</h4>
<p>Займенники й форми дієслова змінюються за змістом — з погляду того, хто переказує:</p>
<div class="ex"><span class="pl">Kasia do mnie: „Pomogę ci.” → Kasia powiedziała, że mi pomoże.</span></div>
<div class="ex"><span class="pl">Szef do nas: „Dostaniecie wolny piątek.” → Szef powiedział, że dostaniemy wolny piątek.</span></div>
<p>Якщо переказуєте пізніше, змінюються й слова часу: <span class="pl">jutro → następnego dnia</span>, <span class="pl">wczoraj → dzień wcześniej</span>.</p>
<h4>Дієслова мовлення</h4>
<p><span class="pl">powiedzieć, mówić, zapytać / spytać, odpowiedzieć, dodać, wyjaśnić, twierdzić, ogłosić, obiecać, przyznać</span>. Зручне слово для чуток: <span class="pl">podobno</span> — «нібито, кажуть, що»: <span class="pl">Podobno szef odchodzi z firmy.</span></p>
<div class="tip"><b>Пастка 1:</b> <span class="pl">zapytać kogo</span> — знахідний без прийменника, як «запитати маму»: <span class="pl">Zapytaj mamę.</span> Варіант «спитати в мами» польською неможливий. Питати <i>про що</i> — <span class="pl">pytać o + B</span>, як укр. «питати про + знахідний»: <span class="pl">Zapytał o cenę.</span></div>
<div class="tip"><b>Пастка 2:</b> не плутайте <span class="pl">czy</span> і <span class="pl">jeśli</span>. Тут українська — ваш союзник: «запитав, чи…» = <span class="pl">Zapytał, czy…</span>. А от англійське «asked if» не калькуйте: «запитав, якщо…» неможливо ні українською, ні польською. Перед <span class="pl">że</span>, <span class="pl">czy</span> і питальним словом завжди ставлять кому — як і в українській.</div>
<div class="tip"><b>Пастка 3:</b> прохання й накази (<span class="pl">„Zadzwoń!”</span>) передають не через że, а через <span class="pl">żeby</span> (укр. «щоб») — це тема наступного уроку. І зверніть увагу на польські лапки: <span class="pl">„…”</span> — відкривальні внизу, закривальні вгорі (а не «ялинки», як в українській).</div>`
      },

      exercises: [
        { type: "choice", q: "Marek: „Jestem chory.” → Marek powiedział, że ___ chory.", options: ["jest", "był", "jestem"], answer: 0, explain: "Часи в непрямій мові не зсуваються, а особа змінюється: jestem → jest." },
        { type: "choice", q: "Kasia: „Masz czas?” → Kasia zapytała, ___ mam czas.", options: ["czy", "że", "jeśli"], answer: 0, explain: "Запитання без питального слова передають через czy — точнісінько як українське «чи»." },
        { type: "gap", q: "Szef: „Przyjdę o dziewiątej.” → Szef powiedział, że ___ o dziewiątej. (przyjść)", answers: ["przyjdzie"], explain: "Przyjdę (я) → przyjdzie (він): особа змінюється, майбутній час лишається." },
        { type: "gap", q: "Ania do mnie: „Gdzie byłeś wczoraj?” → Ania zapytała mnie, gdzie ___ wczoraj. (być; ja — mężczyzna)", answers: ["byłem"], explain: "Byłeś (ти) → byłem (я): переказую запитання про себе." },
        { type: "gap", q: "Mama do mnie: „Co jesz?” → Mama zapytała, co ___. (jeść)", answers: ["jem"], explain: "Питальне слово co зберігається, а jesz (ти) → jem (я)." },
        { type: "choice", q: "Nie wiem, o której jest narada. Zapytaj ___!", options: ["kierownika", "u kierownika", "kierownikowi"], answer: 0, explain: "Zapytać kogo — знахідний без прийменника, як «запитати керівника». Конструкція «спитати в кого» польською неможлива." },
        { type: "order", ru: "Журналістка запитала, чи це правда.", words: ["Dziennikarka", "zapytała,", "czy", "to", "prawda."], alt: [], explain: "Czy стоїть на початку непрямого запитання (як укр. «чи»), після нього — звичайний порядок слів." },
        { type: "match", q: "Ewa каже вам ці фрази. З’єднайте її слова з переказом", pairs: [
          ["„Jestem zmęczona.”", "Ewa mówi, że jest zmęczona."],
          ["„Jesteś zmęczony?”", "Ewa pyta, czy jestem zmęczony."],
          ["„Kiedy wracasz?”", "Ewa pyta, kiedy wracam."],
          ["„Wrócę w piątek.”", "Ewa mówi, że wróci w piątek."],
          ["„Co czytasz?”", "Ewa pyta, co czytam."]
        ], explain: "Твердження → że, запитання «так/ні» → czy, запитання з питальним словом → те саме слово. Особа змінюється: jesteś → jestem, wrócę → wróci." },
        { type: "translate", ru: "Він запитав, де я працюю.", answers: ["Zapytał, gdzie pracuję.", "On zapytał, gdzie pracuję.", "Spytał, gdzie pracuję.", "Zapytał mnie, gdzie pracuję."], explain: "Питальне слово gdzie зберігається, особа змінюється: pracujesz → pracuję." },
        { type: "gap", q: "Według ___ firma nie ma problemów. (rzecznik)", answers: ["rzecznika"], explain: "Według + родовий відмінок: rzecznik → rzecznika." }
      ],

      pronunciation: {
        focus: "Інтонація цитати й переказу",
        tip: `<p>Коли ви <b>цитуєте</b>, після дієслова мовлення робиться пауза (на письмі — двокрапка), а сама цитата звучить «живим голосом»: з питальним підвищенням, вигуком, іноді трохи вище за тоном.</p>
<p>У <b>переказі</b> все речення — одна рівна розповідна хвиля зі зниженням у кінці. Навіть непряме запитання з <span class="pl">czy</span> вимовляють <b>без</b> питального підвищення — так само, як українське «спитала, чи…»: <span class="pl">Zapytała, czy mam czas.</span> ↘</p>
<p>Стежте й за звуками: <span class="pl">czy</span> звучить майже як українське «чи» — тверде [ч]: [чи]; <span class="pl">trzy</span> — два звуки, [т] + [ш]: [тши].</p>`,
        items: [
          { type: "listen", text: "Marek powiedział: „Jestem zmęczony!”", ru: "Марек сказав: «Я втомився!»", note: "Пауза після powiedział, цитата — емоційно." },
          { type: "listen", text: "Marek powiedział, że jest zmęczony.", ru: "Марек сказав, що втомився.", note: "Рівна інтонація, зниження в кінці." },
          { type: "listen", text: "Zapytała: „Masz czas?”", ru: "Вона запитала: «У тебе є час?»", note: "Підвищення тону на слові czas." },
          { type: "listen", text: "Zapytała, czy mam czas.", ru: "Вона запитала, чи є в мене час.", note: "Без питального підвищення — це розповідь." },
          { type: "minimal", options: ["czy", "trzy"], ru: ["чи (питальна частка)", "три"] },
          { type: "stress", word: "powiedziała", syllables: ["po", "wie", "dzia", "ła"], answer: 2 },
          { type: "stress", word: "dziennikarka", syllables: ["dzien", "ni", "kar", "ka"], answer: 2 },
          { type: "dictation", text: "Rzecznik zapytał, czy dziennikarze mają jeszcze pytania." }
        ]
      },

      reading: {
        title: "Niedźwiedź w Żabce?",
        text: "We wtorek rano na jednym z portali pojawił się nagłówek: „Niedźwiedź robi zakupy w Zakopanem!”. Artykuł był krótki. Autor twierdził, że w nocy do sklepu przy Krupówkach wszedł niedźwiedź i zjadł dwadzieścia drożdżówek. Według portalu kasjer uciekł na zaplecze i zadzwonił na policję. W ciągu kilku minut pod artykułem pojawiło się ponad tysiąc komentarzy.\n\nPo godzinie o niedźwiedziu mówiła cała Polska. Dziennikarka radia zadzwoniła do rzecznika prasowego Tatrzańskiego Parku Narodowego i zapytała, czy to prawda. Rzecznik odpowiedział, że niedźwiedzie rzeczywiście czasem schodzą do miasta, ale nic nie wie o żadnym sklepie. Dodał, że jesienią zwierzęta szukają jedzenia przed snem zimowym, i poprosił turystów o ostrożność.\n\nW południe na Krupówki przyjechała telewizja. Dziennikarze zrobili wywiad z kierowniczką sklepu, panią Haliną, która zaprzeczyła wszystkiemu. Powiedziała, że w nocy sklep był zamknięty, a drożdżówki zjadł rano jej syn, który wrócił z nocnej zmiany w szpitalu. Operator kamery zapytał jeszcze, czy może sfilmować pustą półkę. Kierowniczka odpowiedziała, że półka nie jest pusta, bo rano przyszła nowa dostawa. Na koniec zapytała dziennikarzy, kto wymyśla takie historie.\n\nWieczorem w wiadomościach była już tylko krótka relacja. Prezenter ogłosił, że to była plotka, a policja nie dostała żadnego zgłoszenia. Synoptycy zapowiadają jednak na weekend słońce, więc turyści i niedźwiedzie pewnie znowu spotkają się w górach.",
        glossary: [
          { pl: "drożdżówek", ru: "здобних булочок" },
          { pl: "zaplecze", ru: "підсобне приміщення" },
          { pl: "schodzą", ru: "спускаються" },
          { pl: "snem zimowym", ru: "зимовою сплячкою" },
          { pl: "ostrożność", ru: "обережність" },
          { pl: "zmiany", ru: "зміни (робочої)" },
          { pl: "wymyśla", ru: "вигадує" },
          { pl: "zgłoszenia", ru: "виклику, заяви" },
          { pl: "Synoptycy", ru: "синоптики" }
        ],
        questions: [
          { type: "tf", q: "Według artykułu niedźwiedź zjadł drożdżówki.", answer: true, explain: "Autor twierdził, że niedźwiedź zjadł dwadzieścia drożdżówek." },
          { type: "choice", q: "O co dziennikarka radia zapytała rzecznika?", options: ["Czy niedźwiedzie śpią w zimie.", "Czy historia z portalu jest prawdziwa.", "Gdzie można zobaczyć niedźwiedzia."], answer: 1, explain: "Zapytała, czy to prawda." },
          { type: "tf", q: "Pani Halina potwierdziła, że widziała niedźwiedzia.", answer: false, explain: "Pani Halina zaprzeczyła wszystkiemu." },
          { type: "choice", q: "Kto naprawdę zjadł drożdżówki?", options: ["niedźwiedź", "kasjer", "syn kierowniczki"], answer: 2, explain: "Drożdżówki zjadł rano jej syn, który wrócił z nocnej zmiany." },
          { type: "tf", q: "Policja dostała w nocy zgłoszenie ze sklepu.", answer: false, explain: "Prezenter ogłosił, że policja nie dostała żadnego zgłoszenia." }
        ]
      },

      writing: {
        prompt: "Учора ви подивилися інтерв’ю з відомою (можна вигаданою) людиною — спортсменом, актором, мандрівником. Напишіть другові повідомлення й перекажіть інтерв’ю: 1) з ким було інтерв’ю; 2) що ця людина сказала (щонайменше 2 речення з że); 3) про що запитав журналіст (одне запитання з czy й одне — з питальним словом); 4) ваша думка (według mnie…).",
        minWords: 80,
        maxWords: 130,
        useWords: ["wywiad", "dziennikarz", "według", "twierdzić"],
        checklist: [
          { label: "Щонайменше 2 речення з że", pattern: ",\\s*że\\s", min: 2 },
          { label: "Непряме запитання з czy", pattern: ",\\s*czy\\s", min: 1 },
          { label: "Непряме запитання з питальним словом (gdzie, co, kiedy…)", pattern: ",\\s*(gdzie|kiedy|co|kto|jak|dlaczego|ile|skąd|dokąd|jaki|jaka|jakie)\\s", min: 1 }
        ],
        model: "Cześć Bartek!\nWczoraj oglądałam w telewizji wywiad z himalaistką Anną Kowalską, która w maju weszła na Mount Everest. Dziennikarz zapytał ją, czy bała się w górach. Anna odpowiedziała, że strach to normalna rzecz, ale w górach trzeba myśleć spokojnie. Powiedziała też, że codziennie biega dziesięć kilometrów i nigdy nie je słodyczy. Potem dziennikarz zapytał, co planuje w przyszłym roku. Anna twierdzi, że chce pojechać na Antarktydę. Według mnie to był najciekawszy wywiad w tym miesiącu, chociaż mój brat twierdzi, że sportowcy zawsze mówią to samo. Jeśli chcesz, wyślę ci link!\nPa,\nOla"
      }
    },

    // ───────────────────────── УРОК 3 ─────────────────────────
    {
      id: "m11l3",
      title: "Poprosił, żebym…",
      titleRu: "Żeby в непрямих проханнях. Офіційний лист",
      topic: "Korespondencja",
      review: false,
      minutes: 30,
      goals: [
        "Передавати прохання й накази через żeby + форму минулого часу",
        "Уживати prosić, kazać, radzić із правильним відмінком",
        "Писати офіційний e-mail: привітання, формули, прощання"
      ],

      vocab: [
        { pl: "załącznik", g: "m", ru: "вкладення, додаток", note: "w załączniku — у вкладенні, у додатку", ex: "W załączniku przesyłam fakturę.", exRu: "У вкладенні надсилаю рахунок-фактуру." },
        { pl: "prośba", g: "f", ru: "прохання", note: "zwracać się z prośbą o + знах. (укр. «з проханням про що»)", ex: "Mam do pana jedną prośbę.", exRu: "У мене до вас одне прохання." },
        { pl: "w sprawie", ru: "щодо, у справі", note: "+ родовий: w sprawie rezerwacji (як укр. «у справі чого»)", ex: "Dzwonię w sprawie rezerwacji.", exRu: "Я телефоную щодо бронювання." },
        { pl: "uprzejmie", ru: "люб’язно, ввічливо", note: "Uprzejmie proszę o… — ввічлива формула прохання", ex: "Uprzejmie proszę o szybką odpowiedź.", exRu: "Люб’язно прошу якнайшвидше відповісти." },
        { pl: "potwierdzenie", g: "n", ru: "підтвердження", ex: "Czekam na potwierdzenie rezerwacji.", exRu: "Чекаю на підтвердження бронювання." },
        { pl: "przesyłać / przesłać", ru: "пересилати / переслати, надсилати", note: "przesłać: prześlę, prześlesz", ex: "Prześlę ci ten plik wieczorem.", exRu: "Я перешлю тобі цей файл увечері." },
        { pl: "wdzięczny", ru: "вдячний", note: "być wdzięcznym za + знах.: Będę wdzięczna za… — Буду вдячна за…", ex: "Będę wdzięczny za informację.", exRu: "Буду вдячний за інформацію." },
        { pl: "reklamacja", g: "f", ru: "рекламація, скарга (на товар чи послугу)", note: "złożyć reklamację — подати рекламацію (скаргу на товар або послугу)", ex: "Złożyłam reklamację, bo buty się rozkleiły.", exRu: "Я подала рекламацію, бо черевики розклеїлися." },
        { pl: "z poważaniem", ru: "з повагою", note: "у кінці офіційного листа; кома після нього не ставиться (в українських листах її часто ставлять), ім’я — з нового рядка", ex: "Na końcu listu napisz: Z poważaniem.", exRu: "Наприкінці листа напиши: «З повагою»." },
        { pl: "kazać", ru: "веліти, наказати", note: "komu (дав.) + інфінітив; każę, każesz. Хибний друг: kazać — не «казати», а «веліти»!", ex: "Lekarz kazał mi leżeć w łóżku.", exRu: "Лікар звелів мені лежати в ліжку." },
        { pl: "zwracać się / zwrócić się", ru: "звертатися / звернутися", note: "do kogo z czym; без się: zwrócić — повернути", ex: "Zwracam się do Pani z prośbą o pomoc.", exRu: "Звертаюся до Вас із проханням про допомогу." },
        { pl: "z góry", ru: "заздалегідь, наперед", note: "Z góry dziękuję. — Заздалегідь дякую.", ex: "Z góry dziękuję za pomoc.", exRu: "Заздалегідь дякую за допомогу." },
        { pl: "niezwłocznie", ru: "невідкладно, негайно", note: "офіційний стиль", ex: "Proszę niezwłocznie odpowiedzieć na tę wiadomość.", exRu: "Прошу невідкладно відповісти на це повідомлення." }
      ],

      grammar: {
        title: "Żeby в непрямих проханнях. Формули офіційного листа",
        html: `<h4>1. Прохання й накази в переказі: żeby</h4>
<p>Наказовий спосіб у непрямій мові перетворюється на <b>żeby + форму минулого часу</b> — як українське «щоб + минулий час»: «попросив, щоб я подзвонив». Різниця одна: особове закінчення приєднується до <span class="pl">żeby</span>:</p>
<table class="g">
<tr><th>особа</th><th>żeby + …</th><th>приклад</th></tr>
<tr><td>ja</td><td class="pl">żebym</td><td class="pl">Poprosił, żebym zadzwonił.</td></tr>
<tr><td>ty</td><td class="pl">żebyś</td><td class="pl">Prosi, żebyś przyszła.</td></tr>
<tr><td>on / ona / Pan / Pani</td><td class="pl">żeby</td><td class="pl">Proszę, żeby Pan podpisał umowę.</td></tr>
<tr><td>my</td><td class="pl">żebyśmy</td><td class="pl">Kazał, żebyśmy poczekali.</td></tr>
<tr><td>wy</td><td class="pl">żebyście</td><td class="pl">Prosimy, żebyście nie palili.</td></tr>
<tr><td>oni / one / Państwo</td><td class="pl">żeby</td><td class="pl">Proszę, żeby Państwo przesłali fakturę.</td></tr>
</table>
<div class="ex"><span class="pl">Szefowa: „Wyślij raport!” → Szefowa poprosiła, żebym wysłał raport.</span></div>
<div class="ex"><span class="pl">Mama: „Nie wracaj późno!” → Mama prosi, żebym nie wracała późno.</span></div>
<div class="tip"><b>Пастка:</b> закінчення «переїжджає» до żeby: <span class="pl">żebyś napisał</span>, а не <i>żeby napisałeś</i>. Українське «щоб» не змінюється, а польське — змінюється за особами. І жодного теперішнього чи майбутнього часу після żeby: <i>żebym napiszę</i> — помилка.</div>
<h4>2. Дієслова прохання та їхнє керування</h4>
<ul>
<li><span class="pl">prosić / poprosić kogo (B) o co (B)</span>: <span class="pl">Poprosiłem kolegę o pomoc.</span> = <span class="pl">Poprosiłem kolegę, żeby mi pomógł.</span></li>
<li><span class="pl">kazać komu (C) + інфінітив</span> — «веліти» (а не «казати»!): <span class="pl">Szef kazał mi zostać dłużej.</span></li>
<li><span class="pl">radzić komu (C), żeby…</span>: <span class="pl">Radzę ci, żebyś odpoczął.</span></li>
</ul>
<div class="tip">Тут допомагає українська: <span class="pl">prosić mamę o pieniądze</span> — «просити маму про гроші» (кого? про що?), без прийменника перед особою — не «просити в мами». «Звелів батькові» — <span class="pl">kazał ojcu</span> (давальний, як і в українській).</div>
<h4>3. Офіційний e-mail</h4>
<table class="g">
<tr><th>Частина листа</th><th>Формули</th></tr>
<tr><td>Привітання</td><td class="pl">Szanowni Państwo, / Szanowna Pani, / Szanowny Panie, / Dzień dobry,</td></tr>
<tr><td>Привід</td><td class="pl">Piszę w sprawie… / Zwracam się z prośbą o…</td></tr>
<tr><td>Прохання</td><td class="pl">Uprzejmie proszę o… / Czy mogliby Państwo…? / Będę wdzięczny za…</td></tr>
<tr><td>Вкладення</td><td class="pl">W załączniku przesyłam…</td></tr>
<tr><td>Завершення</td><td class="pl">Z góry dziękuję. / Z poważaniem / Z wyrazami szacunku / Pozdrawiam</td></tr>
</table>
<div class="tip"><b>Важливо:</b> 1) у листі <span class="pl">Pan, Pani, Państwo</span> та їхні форми пишуть із великої літери — як українське «Ви» в листі: <span class="pl">Dziękuję za Pani wiadomość.</span> 2) Прізвище у звертанні звучить грубувато — не пишіть <i>Szanowny Panie Kowalski</i>, хоча українське «Шановний пане Коваленку!» цілком нормальне; краще <span class="pl">Szanowny Panie</span> або з посадою: <span class="pl">Szanowna Pani Dyrektor</span> (≈ «Шановна пані директорко»). 3) Українське звертання в листі зазвичай закінчується знаком оклику, а текст далі починається з великої літери; після польського <span class="pl">Szanowni Państwo,</span> стоїть кома, а текст за правилами починають з малої літери. 4) Після <span class="pl">Z poważaniem</span> кома не потрібна.</div>`
      },

      exercises: [
        { type: "choice", q: "Szefowa: „Wyślij raport!” → Szefowa poprosiła, ___ wysłał raport.", options: ["żebym", "że", "czy"], answer: 0, explain: "Наказовий спосіб у переказі → żeby + минулий час; «я» → żebym (укр. «щоб я…»)." },
        { type: "gap", q: "Klient prosi, ___ przesłali mu potwierdzenie. (żeby + my)", answers: ["żebyśmy"], explain: "My → żebyśmy, а дієслово — у формі минулого часу мн.: przesłali." },
        { type: "gap", q: "Mama prosiła, żebyś ___ do niej wieczorem. (zadzwonić; ty — mężczyzna)", answers: ["zadzwonił"], explain: "Після żebyś — форма минулого часу без особового закінчення: zadzwonił (не zadzwoniłeś)." },
        { type: "choice", q: "Lekarz kazał ___ więcej odpoczywać. (ojciec)", options: ["ojcu", "ojca", "ojcem"], answer: 0, explain: "Kazać komu? — давальний відмінок: ojcu (як укр. «звелів батькові»)." },
        { type: "choice", q: "Ви пишете до фірми й не знаєте, хто прочитає лист. Як почати?", options: ["Szanowni Państwo,", "Szanowny Panie Kowalski,", "Cześć,", "Drodzy przyjaciele,"], answer: 0, explain: "Szanowni Państwo — стандартне звертання до невідомого адресата (≈ «Шановні пані та панове»). Прізвище у звертанні звучить неввічливо." },
        { type: "match", q: "З’єднайте формули ділового листа з перекладом", pairs: [
          ["Piszę w sprawie…", "Пишу щодо…"],
          ["W załączniku przesyłam…", "У вкладенні надсилаю…"],
          ["Z góry dziękuję.", "Заздалегідь дякую."],
          ["Uprzejmie proszę o…", "Люб’язно прошу (Вас)…"],
          ["Będę wdzięczna za odpowiedź.", "Буду вдячна за відповідь."],
          ["Z poważaniem", "З повагою"]
        ], explain: "Ці формули — кістяк будь-якого офіційного листа. W sprawie та prośba o вимагають: w sprawie + D, proszę o + B." },
        { type: "gap", q: "Piszę w sprawie ___, którą złożyłam w maju. (reklamacja)", answers: ["reklamacji"], explain: "W sprawie + родовий (як укр. «у справі чого»): reklamacja → reklamacji." },
        { type: "order", ru: "Директор попросив, щоб ми не запізнювалися.", words: ["Dyrektor", "poprosił,", "żebyśmy", "się", "nie", "spóźniali."], alt: ["Dyrektor poprosił, żebyśmy nie spóźniali się."], explain: "Żebyśmy + минулий час мн. (spóźniali); się зазвичай стоїть одразу після żebyśmy." },
        { type: "translate", ru: "Вона попросила, щоб я їй подзвонив.", answers: ["Poprosiła, żebym do niej zadzwonił.", "Ona poprosiła, żebym do niej zadzwonił.", "Poprosiła mnie, żebym do niej zadzwonił.", "Poprosiła, żebym zadzwonił do niej."], explain: "Żebym + zadzwonił (укр. «щоб я подзвонив»). Дзвонити кому — dzwonić do kogo (з прийменником do)." },
        { type: "choice", q: "Яка формула підходить для завершення листа до банку?", options: ["Z poważaniem", "Buziaki", "Trzymaj się", "Na razie"], answer: 0, explain: "Z poważaniem — нейтрально-офіційно. Інші варіанти — для друзів." }
      ],

      pronunciation: {
        focus: "Pan / Pani / Państwo — ввічлива інтонація",
        tip: `<p><span class="pl">Pani</span> — з м’яким [н’], як українське «пані». <span class="pl">Państwo</span> — [пан’стфо]: ń м’яке, а <b>w після глухого t оглушується</b> в [ф] (в українському «твій» такого оглушення немає!). <span class="pl">Panią</span> — у кінці носовий голосний, а не «панью» чи «панію».</p>
<p>Ввічливе прохання звучить м’яко: рівний тон без різких наголосів і легке підвищення наприкінці запитання: <span class="pl">Czy mógłby pan…?</span> ↗. (У листах ці слова пишуть із великої літери, в усному мовленні й діалогах — з малої.) Слова <span class="pl">proszę, przepraszam, dziękuję</span> вимовляйте повністю й спокійно — скоромовка звучить недбало.</p>`,
        items: [
          { type: "listen", text: "Szanowni Państwo,", ru: "Шановні пані та панове,", note: "Państwo ≈ [пан’стфо]" },
          { type: "listen", text: "Czy mógłby pan przesłać mi potwierdzenie?", ru: "Чи не могли б ви надіслати мені підтвердження?", note: "М’яке підвищення тону наприкінці." },
          { type: "listen", text: "Bardzo panią przepraszam za kłopot.", ru: "Дуже перепрошую вас за клопіт.", note: "Panią — носовий звук у кінці." },
          { type: "minimal", options: ["pani", "panie", "panią"], ru: ["пані (наз. в.)", "пане! (кличний) / пані (мн.)", "пані (знах. в.)"] },
          { type: "stress", word: "poważaniem", syllables: ["po", "wa", "ża", "niem"], answer: 2 },
          { type: "stress", word: "uprzejmie", syllables: ["u", "przej", "mie"], answer: 1 },
          { type: "dictation", text: "Szanowna Pani, w załączniku przesyłam umowę." }
        ]
      },

      reading: {
        title: "Kanapa na czwartym piętrze",
        text: "Szanowni Państwo,\n\npiszę w sprawie zamówienia nr 4471/2026. Niestety muszę złożyć reklamację dotyczącą dostawy. Trzy tygodnie temu kupiłam w Państwa sklepie internetowym zieloną kanapę. Według potwierdzenia, które dostałam e-mailem, kurier miał ją przywieźć 3 października. Tego dnia wzięłam wolne i czekałam w domu do wieczora. Kurier przyjechał o 19:30 i powiedział, że w budynku nie ma windy, więc kanapy nie wniesie. Prosiłam, żeby zostawił ją chociaż na parterze, ale się nie zgodził. Kazał mi odebrać ją z magazynu pod Łodzią. Próbowałam też dzwonić na infolinię, ale nikt nie odbierał.\n\nZwracam się z uprzejmą prośbą o dostarczenie kanapy do mieszkania na czwartym piętrze (brak windy zaznaczyłam w zamówieniu). W załączniku przesyłam zdjęcie potwierdzenia. Jeśli nie jest to możliwe, proszę, żeby Państwo niezwłocznie zwrócili mi pieniądze.\n\nBędę wdzięczna za szybką odpowiedź. Z góry dziękuję.\n\nZ poważaniem\nOlga Wiśniewska\n\n* * *\n\nSzanowna Pani,\n\nbardzo przepraszamy za kłopot. Poprosiliśmy firmę kurierską, żeby w sobotę przysłała do Pani dwóch pracowników, którzy wniosą kanapę na czwarte piętro. Kurierzy zadzwonią do Pani dzień wcześniej, żeby potwierdzić godzinę dostawy. Jako rekompensatę przesyłamy kod rabatowy: 15% zniżki na kolejne zakupy.\n\nZ wyrazami szacunku\nDział Obsługi Klienta",
        glossary: [
          { pl: "zamówienia", ru: "замовлення" },
          { pl: "wzięłam wolne", ru: "взяла вихідний (відгул)" },
          { pl: "wniesie", ru: "занесе (нагору)" },
          { pl: "parterze", ru: "першому поверсі" },
          { pl: "magazynu", ru: "складу (не магазину!)" },
          { pl: "zaznaczyłam", ru: "позначила, зазначила" },
          { pl: "kłopot", ru: "незручність, клопіт" },
          { pl: "rekompensatę", ru: "компенсацію" },
          { pl: "zniżki", ru: "знижки" }
        ],
        questions: [
          { type: "tf", q: "Olga wzięła wolny dzień, żeby czekać na kuriera.", answer: true, explain: "„Tego dnia wzięłam wolne i czekałam w domu do wieczora.”" },
          { type: "choice", q: "Dlaczego kurier nie wniósł kanapy?", options: ["Bo Olgi nie było w domu.", "Bo w budynku nie ma windy.", "Bo kanapa była uszkodzona."], answer: 1, explain: "Kurier powiedział, że w budynku nie ma windy." },
          { type: "tf", q: "Kurier zgodził się zostawić kanapę na parterze.", answer: false, explain: "Olga prosiła, żeby zostawił ją na parterze, ale się nie zgodził." },
          { type: "choice", q: "O co prosi Olga?", options: ["Żeby sklep dostarczył kanapę do mieszkania albo zwrócił pieniądze.", "Żeby kurier przyjechał w niedzielę rano.", "Żeby sklep wysłał jej kanapę w innym kolorze."], answer: 0, explain: "Prosi o dostarczenie kanapy, a jeśli to niemożliwe — o zwrot pieniędzy." },
          { type: "tf", q: "Sklep proponuje Oldze zniżkę na następne zakupy.", answer: true, explain: "Sklep przesyła kod rabatowy: 15% zniżki na kolejne zakupy." }
        ]
      },

      writing: {
        prompt: "Напишіть офіційний e-mail до мовної школи «Lingwista» у Варшаві: ви хочете записатися на курс польської рівня B1. Обов’язково додайте: 1) правильне привітання; 2) з якого приводу пишете (w sprawie…); 3) що надсилаєте у вкладенні (w załączniku…); 4) ввічливе прохання (proszę, żeby… / uprzejmie proszę o…) й одне запитання; 5) офіційне прощання.",
        minWords: 80,
        maxWords: 130,
        useWords: ["w sprawie", "załącznik", "uprzejmie", "z góry"],
        checklist: [
          { label: "Офіційне привітання (Szanowni Państwo / Szanowna Pani / Szanowny Panie)", pattern: "Szanown\\p{L}+\\s+(Państwo|Pani|Panie)", min: 1 },
          { label: "Офіційне прощання (Z poważaniem / Z wyrazami szacunku)", pattern: "Z\\s+(poważaniem|wyrazami\\s+szacunku)", min: 1 },
          { label: "Прохання з żeby або proszę o…", pattern: "żeby\\p{L}*|proszę\\s+o\\s|prośbą\\s+o\\s", min: 1 }
        ],
        model: "Szanowni Państwo,\n\npiszę w sprawie kursu języka polskiego na poziomie B1. Od roku mieszkam w Warszawie i chciałbym zapisać się na kurs wieczorowy, który zaczyna się w listopadzie. W załączniku przesyłam wynik testu, który napisałem w Państwa szkole w zeszłym tygodniu.\n\nUprzejmie proszę, żeby Państwo przesłali mi plan zajęć i informację o cenie. Czy można zapłacić w dwóch ratach? Chciałbym też zapytać, czy w grupie jest jeszcze miejsce dla mojej żony, która ma podobny poziom.\n\nBędę wdzięczny za szybką odpowiedź. Z góry dziękuję.\n\nZ poważaniem\nAndriej Pietrow"
      }
    },

    // ───────────────────────── УРОК 4 ─────────────────────────
    {
      id: "m11l4",
      title: "Czy ma pan doświadczenie?",
      titleRu: "Офіційний регістр. Співбесіда",
      topic: "Rozmowa o pracę",
      review: false,
      minutes: 30,
      goals: [
        "Звертатися на pan / pani / państwo з дієсловом у 3-й особі",
        "Відмінювати pan, pani, państwo й правильно казати proszę pana / pani",
        "Відповідати на типові запитання співбесіди й розуміти польське CV"
      ],

      vocab: [
        { pl: "rozmowa kwalifikacyjna", g: "f", ru: "співбесіда (під час працевлаштування)", ex: "Jutro mam rozmowę kwalifikacyjną w banku.", exRu: "Завтра в мене співбесіда в банку." },
        { pl: "kandydat", g: "m", ru: "кандидат", note: "ж. р. kandydatka; мн. kandydaci", ex: "Na to stanowisko jest dwudziestu kandydatów.", exRu: "На цю посаду двадцять кандидатів." },
        { pl: "stanowisko", g: "n", ru: "посада", note: "na stanowisku kierownika — на посаді керівника", ex: "Szukamy osoby na stanowisko księgowej.", exRu: "Шукаємо людину на посаду бухгалтерки." },
        { pl: "doświadczenie", g: "n", ru: "досвід", note: "doświadczenie zawodowe — досвід роботи", ex: "Mam trzy lata doświadczenia w sprzedaży.", exRu: "У мене три роки досвіду в продажах." },
        { pl: "wykształcenie", g: "n", ru: "освіта", note: "wyższe wykształcenie — вища освіта", ex: "Wymagamy wyższego wykształcenia.", exRu: "Ми вимагаємо вищої освіти." },
        { pl: "umiejętności", g: "pl", ru: "навички, уміння", note: "одн. umiejętność", ex: "W CV warto opisać swoje umiejętności.", exRu: "У резюме варто описати свої навички." },
        { pl: "wynagrodzenie", g: "n", ru: "заробітна плата, винагорода", note: "офіційніше, ніж pensja (увага: pensja — це зарплата, а пенсія — emerytura!); brutto — до сплати податків, netto — «на руки»", ex: "Wynagrodzenie wynosi sześć tysięcy złotych brutto.", exRu: "Зарплата становить шість тисяч злотих брутто." },
        { pl: "oczekiwania", g: "pl", ru: "очікування", note: "oczekiwania finansowe — бажана зарплата", ex: "Jakie są pani oczekiwania finansowe?", exRu: "Які ваші фінансові очікування?" },
        { pl: "ubiegać się", ru: "претендувати, домагатися", note: "o + знах.: ubiegać się o stanowisko (укр. «претендувати на посаду»)", ex: "Ubiegam się o stanowisko asystentki.", exRu: "Я претендую на посаду асистентки." },
        { pl: "oferta pracy", g: "f", ru: "вакансія, пропозиція роботи", ex: "Znalazłem ciekawą ofertę pracy na portalu.", exRu: "Я знайшов цікаву вакансію на порталі." },
        { pl: "mocna strona", g: "f", ru: "сильна сторона", note: "мн. mocne strony; słaba strona — слабка сторона", ex: "Moją mocną stroną jest cierpliwość.", exRu: "Моя сильна сторона — терпіння." },
        { pl: "okres próbny", g: "m", ru: "випробувальний термін", ex: "Okres próbny trwa trzy miesiące.", exRu: "Випробувальний термін триває три місяці." },
        { pl: "list motywacyjny", g: "m", ru: "супровідний (мотиваційний) лист", ex: "Do CV proszę dołączyć list motywacyjny.", exRu: "До резюме, будь ласка, додайте супровідний лист." }
      ],

      grammar: {
        title: "Pan / pani / państwo: офіційне звертання",
        html: `<p>В офіційній ситуації українці звертаються на «ви», а поляки — у третій особі: <span class="pl">pan</span> (до чоловіка), <span class="pl">pani</span> (до жінки), <span class="pl">państwo</span> (до групи або пари). Дієслово — у <b>3-й особі</b>, ніби ви говорите про цю людину («чи пан має…?»):</p>
<table class="g">
<tr><th>до кого</th><th>польською</th><th>українською</th></tr>
<tr><td>до чоловіка</td><td class="pl">Czy ma pan doświadczenie?</td><td>Ви маєте досвід?</td></tr>
<tr><td>до жінки</td><td class="pl">Skąd pani jest?</td><td>Звідки ви?</td></tr>
<tr><td>до групи</td><td class="pl">Czy państwo mają pytania?</td><td>У вас є запитання?</td></tr>
<tr><td>мин. час</td><td class="pl">Gdzie pan pracował? Gdzie państwo byli?</td><td>Де ви працювали? Де ви були?</td></tr>
</table>
<div class="tip"><b>Головна пастка для українців:</b> ми кажемо «Пане Андрію, ви маєте досвід?» — звертання «пане», але дієслово в 2-й особі множини. Польською так не можна: <i>Czy pan macie…?</i> — помилка. А звертання на «ви» (<i>Wy jesteście…</i>) до однієї людини в Польщі звучить грубо або нагадує епоху ПНР. Правильно: <span class="pl">Czy pan ma…?</span></div>
<h4>Відмінювання</h4>
<table class="g">
<tr><th>відмінок</th><th>pan</th><th>pani</th><th>państwo</th></tr>
<tr><td>M</td><td class="pl">pan</td><td class="pl">pani</td><td class="pl">państwo</td></tr>
<tr><td>D</td><td class="pl">pana</td><td class="pl">pani</td><td class="pl">państwa</td></tr>
<tr><td>C</td><td class="pl">panu</td><td class="pl">pani</td><td class="pl">państwu</td></tr>
<tr><td>B</td><td class="pl">pana</td><td class="pl">panią</td><td class="pl">państwa</td></tr>
<tr><td>N</td><td class="pl">panem</td><td class="pl">panią</td><td class="pl">państwem</td></tr>
<tr><td>Msc</td><td class="pl">panu</td><td class="pl">pani</td><td class="pl">państwu</td></tr>
<tr><td>W</td><td class="pl">panie</td><td class="pl">pani</td><td class="pl">państwo</td></tr>
</table>
<div class="ex"><span class="pl">Dziękuję panu.</span> — Дякую вам. <span class="pl">Rozmawiałam z panią.</span> — Я говорила з вами. <span class="pl">Czy to pana CV?</span> — Це ваше резюме?</div>
<ul>
<li><b>«Ваш»</b> = родовий відмінок: <span class="pl">pana / pani / państwa</span> (<span class="pl">pani doświadczenie, państwa firma</span>). Форма <span class="pl">pański</span> звучить старомодно або іронічно.</li>
<li><b>Привернути увагу:</b> <span class="pl">Proszę pana! Proszę pani! Proszę państwa!</span> — після proszę тут родовий. <i>Proszę panią</i> — помилка.</li>
<li><b>Ввічливий наказ:</b> <span class="pl">proszę + інфінітив</span>: <span class="pl">Proszę usiąść. Proszę powiedzieć coś o sobie.</span></li>
<li><b>Дуже ввічливо</b> — умовний спосіб: <span class="pl">Czy mógłby pan…? Czy mogłaby pani…? Czy mogliby państwo…?</span></li>
<li><b>Напівофіційно (на роботі):</b> pan / pani + ім’я в кличному відмінку: <span class="pl">pani Aniu, panie Marku</span> — як українське «пані Аню, пане Марку» (але дієслово далі — у 3-й особі!). Перейти на «ти»: <span class="pl">Przejdźmy na ty.</span> — зазвичай пропонує старший або начальник.</li>
</ul>
<div class="tip">З <span class="pl">państwo</span> дієслово стоїть у чоловічо-особовій формі множини: <span class="pl">państwo byli, państwo przyszli, czy państwo chcieliby…?</span> У листах усі ці слова пишуть із великої літери (<span class="pl">Pan, Pani, Państwo</span>), у діалогах і статтях — з малої.</div>
<h4>CV польською</h4>
<p>Звичайні розділи: <span class="pl">dane osobowe, doświadczenie zawodowe, wykształcenie, umiejętności, języki obce, zainteresowania</span>. Наприкінці польського CV традиційно додають згоду на обробку персональних даних (<span class="pl">klauzula RODO</span>): <span class="pl">Wyrażam zgodę na przetwarzanie moich danych osobowych…</span></p>`
      },

      exercises: [
        { type: "choice", q: "Czy ___ pan doświadczenie w sprzedaży?", options: ["ma", "masz", "macie"], answer: 0, explain: "Pan + дієслово в 3-й особі одн.: ma (а не «маєте», як підказує українська)." },
        { type: "choice", q: "___, gdzie jest sala numer dwanaście? (ви звертаєтеся до незнайомої жінки)", options: ["Proszę pani", "Proszę panią", "Proszę pana"], answer: 0, explain: "У звертанні після proszę — родовий: proszę pani. Proszę panią — помилка, proszę pana — до чоловіка." },
        { type: "gap", q: "Czy państwo ___ jakieś pytania? (mieć)", answers: ["mają"], explain: "Państwo + дієслово в 3-й особі мн.: mają." },
        { type: "gap", q: "Dziękuję ___ za rozmowę. (pan)", answers: ["panu"], explain: "Dziękować komu? — давальний відмінок: panu (як укр. «дякую вам»)." },
        { type: "gap", q: "Wczoraj rozmawiałam z ___ o tym stanowisku. (pani)", answers: ["panią"], explain: "Z + орудний відмінок: z panią." },
        { type: "choice", q: "Як офіційно запитати кандидата-чоловіка, чому він хоче у нас працювати?", options: ["Dlaczego chce pan u nas pracować?", "Dlaczego chcesz u nas pracować?", "Dlaczego chcecie u nas pracować?"], answer: 0, explain: "Офіційно: pan + 3-тя особа (chce). Chcesz — на «ти», а chcecie до однієї людини — помилка, хоч українською «ви хочете» звучить саме так." },
        { type: "match", q: "З’єднайте розділи польського CV з перекладом", pairs: [
          ["doświadczenie zawodowe", "досвід роботи"],
          ["wykształcenie", "освіта"],
          ["umiejętności", "навички"],
          ["języki obce", "іноземні мови"],
          ["zainteresowania", "захоплення"],
          ["dane osobowe", "особисті дані"]
        ], explain: "Це стандартні розділи польського CV. Не забудьте наприкінці клаузулу RODO." },
        { type: "order", ru: "Які ваші фінансові очікування? (до чоловіка)", words: ["Jakie", "są", "pana", "oczekiwania", "finansowe?"], alt: [], explain: "«Ваш» при звертанні на pan — родовий: pana oczekiwania." },
        { type: "gap", q: "Mam pięć lat ___ w marketingu. (doświadczenie)", answers: ["doświadczenia"], explain: "Pięć lat чого? — родовий відмінок: doświadczenia (укр. «п’ять років досвіду» — теж родовий)." },
        { type: "translate", ru: "Ви розмовляєте польською? (офіційно, до чоловіка)", answers: ["Czy pan mówi po polsku?", "Pan mówi po polsku?", "Czy mówi pan po polsku?", "Mówi pan po polsku?"], explain: "Pan + дієслово в 3-й особі: mówi (не mówicie, хоч українською — «ви розмовляєте»)." }
      ],

      pronunciation: {
        focus: "Абревіатури: PKP, CV, NFZ, ZUS",
        tip: `<p>Абревіатури читають двома способами.</p>
<ul>
<li><b>За літерами</b> — польськими назвами літер, з наголосом на <b>останню</b> літеру (як українське ЗСУ [зе-ес-У]): <span class="pl">PKP</span> [пе-ка-ПЕ], <span class="pl">NFZ</span> [ен-еф-ЗЕТ], <span class="pl">AGD</span> [а-ґ’е-ДЕ], <span class="pl">RTV</span> [ер-те-ФАУ].</li>
<li><b>Як слово</b> — якщо його можна прочитати: <span class="pl">ZUS</span> [зус], <span class="pl">PESEL</span> [ПЕ-сель], <span class="pl">RODO</span> [РО-до]. Тоді наголос звичайний — на передостанній склад.</li>
</ul>
<p>Назви літер: <i>a, be, ce, de, e, ef, gie, ha, i, jot, ka, el, eł, em, en, o, pe, er, es, te, u, wu, zet</i>. <span class="pl">CV</span> зазвичай читають по-англійськи: [сі-ві].</p>
<p>Розшифрування: PKP — Польські державні залізниці, NFZ — Національний фонд здоров’я (державне медичне страхування, аналог НСЗУ), ZUS — Заклад соціального страхування (пенсії, лікарняні). Абревіатури-слова відмінюються через дефіс: <span class="pl">w ZUS-ie, do ZUS-u</span>; літерні зазвичай не відмінюються: <span class="pl">w NFZ</span>.</p>`,
        items: [
          { type: "listen", text: "Jadę pociągiem PKP Intercity.", ru: "Я їду потягом PKP Intercity.", note: "PKP = [пе-ка-ПЕ]" },
          { type: "listen", text: "Muszę iść do ZUS-u.", ru: "Мені треба сходити в ZUS (соцстрах).", note: "ZUS читається як слово: [зус]" },
          { type: "listen", text: "Mam ubezpieczenie w NFZ.", ru: "Я застрахований у NFZ (державне медстрахування).", note: "NFZ = [ен-еф-ЗЕТ]" },
          { type: "minimal", options: ["PKP", "PKO", "PKS"], ru: ["залізниця", "банк PKO", "автобуси PKS"] },
          { type: "stress", word: "NFZ", syllables: ["N", "F", "Z"], answer: 2 },
          { type: "stress", word: "kwalifikacyjna", syllables: ["kwa", "li", "fi", "ka", "cyj", "na"], answer: 4 },
          { type: "dictation", text: "Na rozmowę proszę przynieść CV i dowód osobisty." }
        ]
      },

      reading: {
        title: "Pierogi i kariera",
        text: "— Dzień dobry, proszę wejść. Proszę usiąść. Pan Michał Zieliński, prawda?\n\n— Tak, dzień dobry.\n\n— Nazywam się Monika Lis, jestem kierowniczką działu personalnego. Przeczytałam pana CV i list motywacyjny. Widzę, że ma pan spore doświadczenie w gastronomii.\n\n— Tak, przez cztery lata pracowałem w restauracji w Zakopanem, najpierw jako kelner, a potem jako zastępca kierownika.\n\n— A jakie ma pan wykształcenie?\n\n— Skończyłem technikum gastronomiczne w Nowym Targu.\n\n— Dlaczego ubiega się pan o stanowisko kierownika zmiany właśnie u nas?\n\n— Szczerze mówiąc, państwa pierogi są najlepsze w Krakowie. Jem je od studiów. Kiedy zobaczyłem państwa ofertę pracy, od razu wysłałem CV. Poza tym chciałbym pracować w większym zespole.\n\n— Miło mi to słyszeć. Jakie są pana mocne strony?\n\n— Jestem spokojny i dobrze organizuję pracę. Mam też prawo jazdy, więc mogę jeździć do dostawców.\n\n— A słabe strony?\n\n— Za bardzo lubię pierogi z kapustą i grzybami.\n\n— U nas to raczej zaleta! Jakie są pana oczekiwania finansowe?\n\n— Myślę o wynagrodzeniu na poziomie siedmiu tysięcy złotych brutto.\n\n— Rozumiem. Na początek proponujemy umowę na okres próbny, na trzy miesiące, a potem umowę o pracę na czas nieokreślony. Czy ma pan jakieś pytania?\n\n— Tak. Kiedy mogę spodziewać się odpowiedzi?\n\n— Zadzwonimy do pana do piątku. Dziękuję za rozmowę.\n\n— To ja dziękuję. Do widzenia!",
        glossary: [
          { pl: "działu personalnego", ru: "відділу кадрів" },
          { pl: "spore", ru: "чималий, значний" },
          { pl: "gastronomii", ru: "ресторанній справі, громадському харчуванні" },
          { pl: "zastępca kierownika", ru: "заступник керівника" },
          { pl: "technikum", ru: "технікум (середній фаховий навчальний заклад)" },
          { pl: "kierownika zmiany", ru: "начальника зміни" },
          { pl: "Szczerze mówiąc", ru: "щиро кажучи, чесно кажучи" },
          { pl: "dostawców", ru: "постачальників" },
          { pl: "zaleta", ru: "перевага, плюс" },
          { pl: "na czas nieokreślony", ru: "безстроковий (договір)" }
        ],
        questions: [
          { type: "tf", q: "Pani Monika przeczytała CV kandydata przed rozmową.", answer: true, explain: "„Przeczytałam pana CV i list motywacyjny.”" },
          { type: "choice", q: "Gdzie pan Michał pracował wcześniej?", options: ["w biurze podróży w Krakowie", "w restauracji w Zakopanem", "w pierogarni w Warszawie"], answer: 1, explain: "Przez cztery lata pracował w restauracji w Zakopanem." },
          { type: "choice", q: "Dlaczego pan Michał chce pracować w tej firmie?", options: ["Bo firma daje samochód służbowy.", "Bo lubi ich pierogi i chce pracować w większym zespole.", "Bo mieszka blisko restauracji."], answer: 1, explain: "Mówi, że ich pierogi są najlepsze w Krakowie i chce pracować w większym zespole." },
          { type: "tf", q: "Firma od razu proponuje umowę na czas nieokreślony.", answer: false, explain: "Najpierw jest umowa na okres próbny na trzy miesiące." },
          { type: "tf", q: "Pani Monika zadzwoni do kandydata do piątku.", answer: true, explain: "„Zadzwonimy do pana do piątku.”" }
        ]
      },

      writing: {
        prompt: "Напишіть діалог-співбесіду (10–12 реплік) між рекрутером і кандидатом на роботу вашої мрії. Рекрутер звертається до кандидата на pan / pani і запитує: 1) чому кандидат претендує на цю посаду; 2) про досвід; 3) про сильні сторони; 4) про фінансові очікування. Наприкінці рекрутер розповідає про умови (okres próbny) і дякує за розмову.",
        minWords: 90,
        maxWords: 140,
        useWords: ["stanowisko", "doświadczenie", "wynagrodzenie", "okres próbny"],
        checklist: [
          { label: "Звертання pan / pani в різних формах (щонайменше 4 рази)", pattern: "\\b(pan|pani|pana|panu|panią|panem)(?!\\p{L})", min: 4 },
          { label: "Щонайменше 3 запитання рекрутера", pattern: "\\?", min: 3 }
        ],
        model: "— Dzień dobry, proszę usiąść. Dlaczego ubiega się pan o stanowisko recepcjonisty w naszym hotelu?\n— Dzień dobry. Lubię pracować z ludźmi i znam trzy języki: polski, ukraiński i angielski.\n— Jakie ma pan doświadczenie?\n— Przez dwa lata pracowałem w hotelu w Gdańsku. Odpowiadałem za rezerwacje i kontakt z gośćmi.\n— Jakie są pana mocne strony?\n— Jestem cierpliwy i dobrze zorganizowany. Nigdy się nie spóźniam.\n— A jakie ma pan oczekiwania finansowe?\n— Myślę o wynagrodzeniu na poziomie sześciu tysięcy złotych brutto.\n— Dobrze. Na początek proponujemy trzymiesięczny okres próbny. Czy ma pan jakieś pytania?\n— Tak. Czy mogę pracować tylko na rannej zmianie?\n— Porozmawiamy o tym. Dziękuję panu za rozmowę. Zadzwonimy do pana do piątku."
      }
    },

    // ───────────────────────── УРОК 5 (ПОВТОРЕННЯ) ─────────────────────────
    {
      id: "m11l5",
      title: "Powtórka 11",
      titleRu: "Повторення: ЗМІ та робота",
      topic: "Nowoczesna praca",
      review: true,
      minutes: 30,
      goals: [
        "Повторити który в усіх відмінках",
        "Упевнено переказувати слова, запитання й прохання (że, czy, żeby)",
        "Писати офіційний лист і спілкуватися в офіційному регістрі"
      ],

      vocab: [
        { pl: "zdalnie", ru: "дистанційно, віддалено", note: "praca zdalna — дистанційна (віддалена) робота", ex: "W piątki pracuję zdalnie.", exRu: "Щоп’ятниці я працюю дистанційно." },
        { pl: "nadgodziny", g: "pl", ru: "понаднормові години, понаднормова робота", note: "robić nadgodziny — працювати понаднормово", ex: "W grudniu robimy dużo nadgodzin.", exRu: "У грудні ми багато працюємо понаднормово." },
        { pl: "podwyżka", g: "f", ru: "підвищення зарплати", note: "dostać podwyżkę; podwyżka cen — подорожчання", ex: "Po roku dostałam podwyżkę.", exRu: "Через рік я отримала підвищення зарплати." },
        { pl: "premia", g: "f", ru: "премія", ex: "Za ten projekt cały zespół dostał premię.", exRu: "За цей проєкт уся команда отримала премію." },
        { pl: "zwolnienie lekarskie", g: "n", ru: "лікарняний (листок)", note: "розм. L4 [ель-чтери]: być na L4. Не плутайте: zwolnienie z pracy — звільнення з роботи", ex: "Kasia jest na zwolnieniu lekarskim do piątku.", exRu: "Кася на лікарняному до п’ятниці." },
        { pl: "wypowiedzenie", g: "n", ru: "заява про звільнення; попередження про звільнення", note: "złożyć wypowiedzenie — подати заяву про звільнення", ex: "Złożyłem wypowiedzenie, bo znalazłem lepszą pracę.", exRu: "Я подав заяву про звільнення, бо знайшов кращу роботу." },
        { pl: "zrezygnować", ru: "відмовитися; піти (з роботи)", note: "z + род.: zrezygnować z pracy (укр. «відмовитися від чого»)", ex: "Zrezygnowała z pracy w korporacji.", exRu: "Вона пішла з роботи в корпорації." },
        { pl: "media społecznościowe", g: "pl", ru: "соціальні мережі", ex: "Firma reklamuje się w mediach społecznościowych.", exRu: "Фірма рекламується в соцмережах." },
        { pl: "udostępniać / udostępnić", ru: "поширювати (допис), ділитися; надавати доступ", ex: "Udostępnij ten post znajomym!", exRu: "Поділися цим дописом із друзями!" },
        { pl: "elastyczny", ru: "гнучкий", note: "elastyczne godziny pracy — гнучкий графік", ex: "Mamy elastyczne godziny pracy.", exRu: "У нас гнучкий графік." }
      ],

      grammar: {
        title: "Підсумок модуля 11: który, непряма мова, офіційний регістр",
        html: `<h4>1. Który — «який / котрий»</h4>
<p>Рід і число — від іменника, відмінок — від ролі в підрядному реченні (від польського дієслова чи прийменника!).</p>
<table class="g">
<tr><th></th><th>ч. р.</th><th>ж. р.</th><th>с. р.</th><th>мн. ч.-особ.</th><th>мн. інші</th></tr>
<tr><td>M</td><td class="pl">który</td><td class="pl">która</td><td class="pl">które</td><td class="pl">którzy</td><td class="pl">które</td></tr>
<tr><td>D</td><td class="pl">którego</td><td class="pl">której</td><td class="pl">którego</td><td class="pl">których</td><td class="pl">których</td></tr>
<tr><td>C</td><td class="pl">któremu</td><td class="pl">której</td><td class="pl">któremu</td><td class="pl">którym</td><td class="pl">którym</td></tr>
<tr><td>B</td><td class="pl">którego / który</td><td class="pl">którą</td><td class="pl">które</td><td class="pl">których</td><td class="pl">które</td></tr>
<tr><td>N</td><td class="pl">którym</td><td class="pl">którą</td><td class="pl">którym</td><td class="pl">którymi</td><td class="pl">którymi</td></tr>
<tr><td>Msc</td><td class="pl">którym</td><td class="pl">której</td><td class="pl">którym</td><td class="pl">których</td><td class="pl">których</td></tr>
</table>
<div class="tip"><span class="pl">program, którego używam</span> (używać + D); <span class="pl">szefowa, której się boję</span> (bać się + D — як укр. «якої я боюся»); <span class="pl">praca, której nie lubię</span> (заперечення → D).</div>
<h4>2. Непряма мова</h4>
<table class="g">
<tr><th>Пряма мова</th><th>Сполучник</th><th>Переказ</th></tr>
<tr><td class="pl">„Jestem w pracy.”</td><td class="pl">że</td><td class="pl">Powiedział, że jest w pracy.</td></tr>
<tr><td class="pl">„Masz czas?”</td><td class="pl">czy</td><td class="pl">Zapytała, czy mam czas.</td></tr>
<tr><td class="pl">„Gdzie mieszkasz?”</td><td class="pl">gdzie, kiedy, co…</td><td class="pl">Zapytał, gdzie mieszkam.</td></tr>
<tr><td class="pl">„Zadzwoń!”</td><td class="pl">żeby + мин. час</td><td class="pl">Poprosiła, żebym zadzwonił.</td></tr>
</table>
<ul>
<li>Час не зсувається, особа змінюється за змістом: <span class="pl">„Dostaniesz premię.” → Powiedział, że dostanę premię.</span></li>
<li><span class="pl">zapytać kogo</span> (B, без прийменника), <span class="pl">kazać komu</span> (C) + інфінітив, <span class="pl">prosić kogo o co</span> (= «просити кого про що»).</li>
<li>Особове закінчення — на żeby: <span class="pl">żebym, żebyś, żebyśmy, żebyście</span> + <span class="pl">napisał / napisała / napisali</span>.</li>
</ul>
<h4>3. Офіційний регістр</h4>
<table class="g">
<tr><th></th><th>pan</th><th>pani</th><th>państwo</th></tr>
<tr><td>«ви маєте»</td><td class="pl">pan ma</td><td class="pl">pani ma</td><td class="pl">państwo mają</td></tr>
<tr><td>«ваш»</td><td class="pl">pana</td><td class="pl">pani</td><td class="pl">państwa</td></tr>
<tr><td>«вам»</td><td class="pl">panu</td><td class="pl">pani</td><td class="pl">państwu</td></tr>
<tr><td>«з вами»</td><td class="pl">z panem</td><td class="pl">z panią</td><td class="pl">z państwem</td></tr>
<tr><td>оклик</td><td class="pl">proszę pana!</td><td class="pl">proszę pani!</td><td class="pl">proszę państwa!</td></tr>
</table>
<p>Ввічливий наказ — <span class="pl">proszę + інфінітив</span> (<span class="pl">Proszę usiąść.</span>), дуже ввічливе прохання — умовний спосіб (<span class="pl">Czy mógłby pan…? Czy mogłaby pani…?</span>).</p>
<div class="ex">Кістяк листа: <span class="pl">Szanowni Państwo, piszę w sprawie… Uprzejmie proszę o… W załączniku przesyłam… Z góry dziękuję. Z poważaniem</span></div>
<div class="tip">У листі <span class="pl">Pan, Pani, Państwo</span> пишуть із великої літери. І жодного українського «ви» (2-га особа мн.) щодо однієї людини: <span class="pl">Czy pan ma…?</span>, а не <i>Czy pan macie…?</i></div>`
      },

      exercises: [
        { type: "choice", q: "Kolega, ___ pożyczyłem samochód, jest dziś na zwolnieniu lekarskim.", options: ["któremu", "którego", "który"], answer: 0, explain: "Pożyczyć komu? — давальний відмінок: któremu." },
        { type: "gap", q: "Mam szefową, ___ wszyscy się boją. (który)", answers: ["której"], explain: "Bać się + родовий: której (як укр. «якої всі бояться»)." },
        { type: "gap", q: "To są ludzie, z ___ pracuję zdalnie. (który)", answers: ["którymi"], explain: "Z + орудний мн.: którymi." },
        { type: "choice", q: "To propozycja, ___ nie można odrzucić.", options: ["której", "którą", "która"], answer: 0, explain: "Заперечення (nie można odrzucić) вимагає родового: której." },
        { type: "choice", q: "Szef do mnie: „Dostaniesz podwyżkę.” → Szef powiedział, że ___ podwyżkę.", options: ["dostanę", "dostaniesz", "dostanie"], answer: 0, explain: "Це сказали вам: «ти отримаєш» → у вашому переказі «я отримаю»: dostanę." },
        { type: "gap", q: "Ewa: „Pracujesz zdalnie?” → Ewa zapytała, ___ pracuję zdalnie. (питальна частка)", answers: ["czy"], explain: "Запитання без питального слова → czy (= укр. «чи»)." },
        { type: "gap", q: "Kierowniczka: „Dlaczego się spóźniłeś?” → Kierowniczka zapytała, ___ się spóźniłem. (питальне слово)", answers: ["dlaczego", "czemu"], explain: "Питальне слово зберігається: dlaczego (розм. czemu)." },
        { type: "choice", q: "Lekarz: „Proszę zostać w domu.” → Lekarz kazał mi ___ w domu.", options: ["zostać", "zostanę", "zostałem"], answer: 0, explain: "Kazać komu + інфінітив: kazał mi zostać." },
        { type: "gap", q: "Koleżanka prosi, ___ udostępnił jej post. (żeby + ja)", answers: ["żebym"], explain: "Ja → żebym + форма минулого часу: żebym udostępnił." },
        { type: "gap", q: "Szefowa poprosiła, żebyśmy nie ___ w weekendy. (pracować; my — змішана група)", answers: ["pracowali"], explain: "Żebyśmy + минулий час мн., чоловічо-особова форма: pracowali." },
        { type: "choice", q: "Czy Państwo ___ już naszą ofertę?", options: ["dostali", "dostały", "dostał"], answer: 0, explain: "Państwo + 3-тя особа мн., завжди чоловічо-особова форма: dostali (не dostały, навіть якщо це дві жінки)." },
        { type: "match", q: "З’єднайте офіційні фрази з перекладом", pairs: [
          ["Proszę pani!", "Пані! / Перепрошую! (до жінки)"],
          ["Czy mógłby pan…?", "Чи не могли б ви…? (до чоловіка)"],
          ["Szanowni Państwo,", "Шановні пані та панове,"],
          ["Z poważaniem", "З повагою"],
          ["Przejdźmy na ty.", "Перейдімо на «ти»."]
        ], explain: "Proszę pani — оклик (родовий!), mógłby pan — ввічливе прохання в умовному способі." },
        { type: "order", ru: "Чи не могли б ви надіслати мені договір? (до жінки)", words: ["Czy", "mogłaby", "pani", "przesłać", "mi", "umowę?"], alt: ["Czy mogłaby mi pani przesłać umowę?", "Czy pani mogłaby przesłać mi umowę?", "Czy pani mogłaby mi przesłać umowę?"], explain: "Czy + умовний спосіб (mogłaby) + pani — ввічливе прохання до жінки." },
        { type: "translate", ru: "Він сказав, що працює дистанційно.", answers: ["Powiedział, że pracuje zdalnie.", "On powiedział, że pracuje zdalnie."], explain: "Że + теперішній час (без зсуву часів): pracuje." }
      ],

      pronunciation: {
        focus: "Повторення: ритм, інтонація, ввічливі форми, абревіатури",
        tip: `<p>Зберіть усе разом:</p>
<ul>
<li><b>Ритм:</b> довге речення — кілька смислових груп, пауза на комах, підвищення перед комою, зниження в кінці.</li>
<li><b>Цитата й переказ:</b> питальне підвищення — тільки в цитаті; <span class="pl">Zapytał, czy…</span> звучить розповідно.</li>
<li><b>Ввічливі форми:</b> <span class="pl">pana, panu, panem</span> — наголос на перший склад, закінчення чітке.</li>
<li><b>Абревіатури за літерами</b> — наголос на останню літеру: <span class="pl">AGD</span> [а-ґ’е-ДЕ].</li>
</ul>`,
        items: [
          { type: "listen", text: "Kierowniczka, z którą rozmawiałem wczoraj, powiedziała, że mogę pracować zdalnie.", ru: "Керівниця, з якою я вчора розмовляв, сказала, що я можу працювати дистанційно.", note: "Паузи на комах, зниження в кінці." },
          { type: "listen", text: "Zapytał: „Czy mogę wyjść wcześniej?”", ru: "Він запитав: «Чи можна мені піти раніше?»", note: "Питальне підвищення — тільки в цитаті." },
          { type: "minimal", options: ["pana", "panu", "panem"], ru: ["(кого?) вас — до чоловіка", "(кому?) вам — до чоловіка", "(з ким?) з вами — до чоловіка"] },
          { type: "stress", word: "wypowiedzenie", syllables: ["wy", "po", "wie", "dze", "nie"], answer: 3 },
          { type: "stress", word: "AGD", syllables: ["A", "G", "D"], answer: 2 },
          { type: "stress", word: "elastyczny", syllables: ["e", "la", "stycz", "ny"], answer: 2 },
          { type: "dictation", text: "Szef poprosił, żebym przesłał raport do piątku." }
        ]
      },

      reading: {
        title: "Piątek wolny? W Łodzi to już prawda",
        text: "Łódzka firma Pixel, która tworzy aplikacje dla banków, od pół roku testuje czterodniowy tydzień pracy. Pracownicy pracują od poniedziałku do czwartku, a za piątek dostają normalne wynagrodzenie. Godziny pracy są elastyczne: każdy zaczyna, kiedy chce, byle przed dziesiątą. Nasza dziennikarka odwiedziła biuro, w którym — jak się okazało — w piątki naprawdę nikogo nie ma.\n\nPrezes firmy, pani Joanna Malinowska, powiedziała nam, że pomysł zaproponowali sami pracownicy. „Na początku byłam sceptyczna” — przyznała. Dodała jednak, że po trzech miesiącach wyniki firmy były lepsze niż rok wcześniej, a liczba zwolnień lekarskich spadła o połowę. Od początku testu nikt nie złożył wypowiedzenia. Zapytaliśmy, czy klienci nie narzekają. Pani prezes odpowiedziała, że w piątki jedna osoba zawsze ma dyżur: pracuje zdalnie, odbiera telefony i odpisuje na pilne e-maile.\n\nRozmawialiśmy też z pracownikami. Pan Tomasz, programista, z którym spotkaliśmy się w firmowej kuchni (oczywiście w czwartek), twierdzi, że jest mniej zmęczony i ma więcej czasu dla dzieci. Pani Karolina z działu marketingu przyznała, że czasami musi robić nadgodziny, ale nie chciałaby wracać do starego systemu. „Szefowa prosi tylko, żebyśmy nie pisali do siebie w weekendy” — śmieje się. Nowa programistka, która pracuje tu dopiero od tygodnia, powiedziała nam, że wolny piątek był dla niej najważniejszy. Żeby przyjść do Pixela, zrezygnowała z lepiej płatnej pracy w Warszawie.\n\nNie wszyscy są jednak zachwyceni. Ekonomista, którego poprosiliśmy o komentarz, uważa, że taki model nie sprawdzi się w każdej branży. Zapytał, kto w piątek obsłuży klientów w sklepie albo pacjentów w szpitalu.\n\nFirma pochwaliła się eksperymentem w mediach społecznościowych, a post udostępniło ponad dziesięć tysięcy osób. Na koniec pani prezes poprosiła nas, żebyśmy nie podawali, ile dokładnie zarabiają jej pracownicy. Zdradziła tylko, że w styczniu wszyscy dostaną podwyżkę, a najlepszy zespół — także premię. A my zapytaliśmy, czy przypadkiem nie szukają dziennikarzy.",
        glossary: [
          { pl: "Łódzka", ru: "лодзинська (з Лодзі)" },
          { pl: "byle", ru: "аби лише, головне — щоб" },
          { pl: "sceptyczna", ru: "налаштована скептично" },
          { pl: "przyznała", ru: "визнала, зізналася" },
          { pl: "dyżur", ru: "чергування" },
          { pl: "pilne", ru: "термінові" },
          { pl: "zachwyceni", ru: "у захваті" },
          { pl: "branży", ru: "галузі" },
          { pl: "pochwaliła się", ru: "похвалилася" },
          { pl: "Zdradziła", ru: "видала (таємницю), розповіла" }
        ],
        questions: [
          { type: "tf", q: "Za czterodniowy tydzień pracownicy dostają niższe wynagrodzenie.", answer: false, explain: "Za piątek dostają normalne wynagrodzenie." },
          { type: "choice", q: "Kto wymyślił czterodniowy tydzień pracy w firmie Pixel?", options: ["pani prezes", "sami pracownicy", "ekonomista"], answer: 1, explain: "Prezes powiedziała, że pomysł zaproponowali sami pracownicy." },
          { type: "choice", q: "Co się zmieniło po trzech miesiącach?", options: ["Firma straciła wielu klientów.", "Wyniki były lepsze, a pracownicy rzadziej chorowali.", "Pracownicy zaczęli pracować w weekendy."], answer: 1, explain: "Wyniki firmy były lepsze, a liczba zwolnień lekarskich spadła o połowę." },
          { type: "tf", q: "W piątki nikt w firmie nie odbiera telefonów.", answer: false, explain: "Jedna osoba ma dyżur: pracuje zdalnie i odbiera telefony." },
          { type: "choice", q: "O co pani prezes poprosiła dziennikarzy?", options: ["Żeby nie podawali, ile zarabiają pracownicy.", "Żeby przyszli do biura w piątek.", "Żeby napisali artykuł o podwyżkach."], answer: 0, explain: "Poprosiła, żebyśmy nie podawali, ile dokładnie zarabiają jej pracownicy." }
        ]
      },

      writing: {
        prompt: "Підсумковий лист модуля. Ви хочете працювати дистанційно два дні на тиждень. Напишіть офіційний e-mail директорці з персоналу: 1) офіційне привітання; 2) представтеся й скажіть, у якому відділі працюєте (з który); 3) викладіть прохання (zwracam się z prośbą o… / proszę, żeby…); 4) перекажіть, що сказав ваш керівник і про що він запитав (że, czy); 5) наведіть аргументи й офіційно попрощайтеся.",
        minWords: 100,
        maxWords: 150,
        useWords: ["zdalnie", "elastyczny", "nadgodziny"],
        checklist: [
          { label: "Офіційні привітання й прощання", pattern: "Szanown\\p{L}+|Z\\s+poważaniem|Z\\s+wyrazami", min: 2 },
          { label: "Щонайменше 2 підрядні речення з który", pattern: "któr\\p{L}+", min: 2 },
          { label: "Щонайменше 3 сполучники непрямої мови (że / czy / żeby…)", pattern: ",\\s*(że|czy)\\s|żeby\\p{L}*", min: 3 }
        ],
        model: "Szanowna Pani Dyrektor,\n\nnazywam się Paweł Nowicki i od trzech lat pracuję w dziale sprzedaży, którym kieruje pan Adam Wójcik. Zwracam się do Pani z prośbą o możliwość pracy zdalnej dwa dni w tygodniu.\n\nOd września dojeżdżam do biura z Pruszkowa, co zajmuje mi prawie dwie godziny dziennie. Rozmawiałem już z moim kierownikiem. Powiedział, że nie ma nic przeciwko temu, żebym pracował z domu, jeśli będę dostępny pod telefonem od 9 do 17. Zapytał też, czy mogę przychodzić do biura na poniedziałkowe narady. Oczywiście mogę.\n\nJestem gotowy pracować w elastycznych godzinach, a w razie potrzeby także robić nadgodziny. Wiem, że kilka osób, z którymi współpracuję, już pracuje zdalnie i ich wyniki są bardzo dobre.\n\nUprzejmie proszę o pozytywne rozpatrzenie mojego wniosku. Z góry dziękuję za odpowiedź.\n\nZ poważaniem\nPaweł Nowicki"
      }
    }
  ]
});
