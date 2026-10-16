// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m01",
  n: 1,
  level: "A2",
  title: "Codzienność",
  titleRu: "Повсякдення",
  summary: "Після модуля ви впевнено дієвідмінюєте дієслова всіх типів теперішнього часу (mam, jem, piszę, mogę, mówię), ставите назви людей і предметів у знахідний відмінок і розповідаєте про свій день, роботу, хобі та вихідні, використовуючи зворотні дієслова й слова частотності.",
  lessons: [

    // ───────────────────────── Урок 1 ─────────────────────────
    {
      id: "m01l1",
      title: "Mam, jem, wiem",
      titleRu: "Дієвідмінювання -am/-asz і -em/-esz",
      topic: "Mój dzień",
      review: false,
      minutes: 25,
      goals: [
        "Дієвідмінювати дієслова на -am/-asz та -em/-esz, зокрема неправильні mieć, wiedzieć і jeść",
        "Розрізняти wiedzieć і znać, umieć і móc",
        "Розповідати про свій розпорядок дня",
        "Розрізняти на слух sz, ś і s"
      ],

      vocab: [
        { pl: "budzik", g: "m", ru: "будильник", ex: "Mój budzik dzwoni o szóstej.", exRu: "Мій будильник дзвонить о шостій." },
        { pl: "drzemka", g: "f", ru: "коротка дрімота; кнопка «відкласти» на будильнику", ex: "Po obiedzie mam czas na krótką drzemkę.", exRu: "Після обіду в мене є час трохи подрімати." },
        { pl: "pośpiech", g: "m", ru: "поспіх", ex: "Rano zawsze jem w pośpiechu.", exRu: "Уранці я завжди їм поспіхом.", note: "w pośpiechu — поспіхом, на бігу" },
        { pl: "posiłek", g: "m", ru: "прийом їжі, їжа", ex: "Śniadanie to dla mnie najważniejszy posiłek dnia.", exRu: "Сніданок для мене — найважливіший прийом їжі за день." },
        { pl: "przerwa", g: "f", ru: "перерва", ex: "O dwunastej mam przerwę na lunch.", exRu: "О дванадцятій у мене обідня перерва." },
        { pl: "wiadomość", g: "f", ru: "повідомлення; новина", ex: "W tramwaju czytam wiadomości.", exRu: "У трамваї я читаю новини.", note: "мн. wiadomości — новини (пор. укр. «відомість», «відомо»)" },
        { pl: "zasypiać", ru: "засинати", ex: "Zwykle zasypiam przed północą.", exRu: "Зазвичай я засинаю до півночі." },
        { pl: "odpoczywać", ru: "відпочивати", ex: "Wieczorem odpoczywam na kanapie.", exRu: "Увечері я відпочиваю на дивані." },
        { pl: "spędzać", ru: "проводити (час)", ex: "Ile czasu spędzasz w internecie?", exRu: "Скільки часу ти проводиш в інтернеті?", note: "spędzać czas — проводити час" },
        { pl: "dojeżdżać", ru: "добиратися, їздити (регулярно)", ex: "Do pracy dojeżdżam tramwajem.", exRu: "На роботу я їжджу трамваєм.", note: "dojeżdżać do + род. в.; транспорт — в орудному, як і в українській: tramwajem" },
        { pl: "zaczynać", ru: "починати", ex: "Pracę zaczynam o dziewiątej.", exRu: "Роботу я починаю о дев’ятій." },
        { pl: "na co dzień", ru: "у повсякденному житті, зазвичай", ex: "Na co dzień mam mało czasu dla siebie.", exRu: "У буденному житті в мене мало часу для себе." },
        { pl: "w tygodniu", ru: "у будні", ex: "W tygodniu wstaję o szóstej, a w sobotę śpię do dziewiątej.", exRu: "У будні я встаю о шостій, а в суботу сплю до дев’ятої.", note: "дослівно «у тижні»; протилежне — w weekend (у вихідні)" },
        { pl: "mieć ochotę na", ru: "мати охоту (до чогось), хотіти", ex: "Mam ochotę na gorącą herbatę.", exRu: "Мені хочеться гарячого чаю.", note: "+ знах. в.; з інфінітивом — без na: mam ochotę iść do kina" }
      ],

      grammar: {
        title: "Дієвідмінювання на -am/-asz і -em/-esz",
        html: `<p>Польське дієслово в теперішньому часі зручно визначати за двома формами — <b>ja</b> і <b>ty</b>. Знаючи їх, ви відновите всю парадигму. У цьому уроці — дві найпрозоріші групи: <b>-am / -asz</b> і <b>-em / -esz</b>. Закінчення в них побудовані однаково, відрізняється лише голосний.</p>
<h4>1. Група -am / -asz</h4>
<p>Сюди належить багато дієслів на <b>-ać</b>: <span class="pl">czytać</span>, <span class="pl">znać</span>, <span class="pl">mieszkać</span>, <span class="pl">zaczynać</span>, <span class="pl">odpoczywać</span>. Але не всі! <span class="pl">pisać → piszę</span>, <span class="pl">pracować → pracuję</span> — це інші групи (наступний урок).</p>
<h4>2. Група -em / -esz</h4>
<p>Це <span class="pl">rozumieć</span> і <span class="pl">umieć</span>. Зверніть увагу на форму <b>oni</b>: <b>-eją</b>.</p>
<table class="g">
<tr><th></th><th>czytać</th><th>rozumieć</th><th>umieć</th></tr>
<tr><td>ja</td><td class="pl">czytam</td><td class="pl">rozumiem</td><td class="pl">umiem</td></tr>
<tr><td>ty</td><td class="pl">czytasz</td><td class="pl">rozumiesz</td><td class="pl">umiesz</td></tr>
<tr><td>on / ona</td><td class="pl">czyta</td><td class="pl">rozumie</td><td class="pl">umie</td></tr>
<tr><td>my</td><td class="pl">czytamy</td><td class="pl">rozumiemy</td><td class="pl">umiemy</td></tr>
<tr><td>wy</td><td class="pl">czytacie</td><td class="pl">rozumiecie</td><td class="pl">umiecie</td></tr>
<tr><td>oni / one</td><td class="pl">czytają</td><td class="pl">rozumieją</td><td class="pl">umieją</td></tr>
</table>
<h4>3. Неправильні: mieć, wiedzieć, jeść</h4>
<table class="g">
<tr><th></th><th>mieć</th><th>wiedzieć</th><th>jeść</th></tr>
<tr><td>ja</td><td class="pl">mam</td><td class="pl">wiem</td><td class="pl">jem</td></tr>
<tr><td>ty</td><td class="pl">masz</td><td class="pl">wiesz</td><td class="pl">jesz</td></tr>
<tr><td>on / ona</td><td class="pl">ma</td><td class="pl">wie</td><td class="pl">je</td></tr>
<tr><td>my</td><td class="pl">mamy</td><td class="pl">wiemy</td><td class="pl">jemy</td></tr>
<tr><td>wy</td><td class="pl">macie</td><td class="pl">wiecie</td><td class="pl">jecie</td></tr>
<tr><td>oni / one</td><td class="pl">mają</td><td class="pl">wiedzą</td><td class="pl">jedzą</td></tr>
</table>
<p><span class="pl">mieć</span> дієвідмінюється від основи <b>ma-</b>, хоча інфінітив на -eć (як українське «мати – маю»). У <span class="pl">wiedzieć</span> і <span class="pl">jeść</span> у формі <b>oni</b> повертається <b>-dz-</b>: <span class="pl">wiedzą</span>, <span class="pl">jedzą</span> — порівняйте українське «їм, їси, але їдять». Форми «rozumią», «umią», а також «wieją» в значенні «знають» — помилкові.</p>
<div class="tip"><b>Пастка 1: wiedzieć чи znać?</b> Українське «знати» в польській розпадається на два дієслова. <span class="pl">wiedzieć</span> — знати факт (споріднене з укр. «відати», «відомо»); після нього йде підрядне речення з <i>że, gdzie, co, kiedy</i>: <span class="pl">Wiem, gdzie mieszkasz.</span> <span class="pl">znać</span> (-am) — знати когось або щось; після нього — іменник у знахідному відмінку: <span class="pl">Znam Kraków.</span> <span class="pl">Znam twojego szefa.</span> «Znam, że…» — помилка.</div>
<div class="tip"><b>Пастка 2: umieć ≠ móc.</b> <span class="pl">umieć</span> — уміти, володіти навичкою: <span class="pl">Umiem pływać.</span> <span class="pl">móc</span> — могти, мати змогу: <span class="pl">Dziś nie mogę pływać, bo jestem chory.</span></div>
<h4>4. mieć — майже як українське «мати»</h4>
<p>Тут українцям пощастило: <span class="pl">mam</span> — це просто «маю», а <span class="pl">mieć</span> уживається майже так само, як «мати», зокрема в багатьох сталих виразах. Головна різниця: замість «у мене є» поляки кажуть лише «маю».</p>
<div class="ex"><span class="pl">Mam trzydzieści lat.</span> — Мені тридцять років. (Увага: українською «мені», а польською — <i>mam</i>.)</div>
<div class="ex"><span class="pl">Masz rację.</span> — Маєш рацію. (Ти правий / права.)</div>
<div class="ex"><span class="pl">Mam ochotę na kawę.</span> — Мені хочеться кави.</div>
<div class="ex"><span class="pl">Nie mam czasu.</span> — Не маю часу. (Після заперечення — родовий, як і в українській; докладно в модулі 3.)</div>
<div class="tip">Займенник зазвичай пропускають: закінчення й так показує особу. <span class="pl">Mam kota</span>, а не «Ja mam kota» (<span class="pl">ja</span> — лише для наголосу: <span class="pl">Ja wiem, a ty nie!</span>). Ввічливе <span class="pl">pan / pani</span> вимагає 3-ї особи однини: <span class="pl">Czy pan wie, gdzie jest dworzec?</span> Українське ввічливе «Ви знаєте…?» з дієсловом у 2-й особі множини тут не підходить.</div>`
      },

      exercises: [
        { type: "gap", q: "Czy ___ (ty, mieć) dziś czas na kawę?", answers: ["masz"], explain: "mieć → ty masz. Основа ma-, хоча інфінітив на -eć (як «мати – маєш»)." },
        { type: "gap", q: "Na śniadanie zwykle ___ (ja, jeść) owsiankę.", answers: ["jem"], explain: "jeść → ja jem, ty jesz, oni jedzą (пор. укр. «їм – їдять»)." },
        { type: "choice", q: "Oni nie ___, gdzie jest dworzec.", options: ["wiedzą", "wieją", "wiedzieją"], answer: 0, explain: "wiedzieć → oni wiedzą (повертається -dz-). «wieją» — це «віють» (від wiać), а «wiedzieją» не існує." },
        { type: "gap", q: "Moi dziadkowie nie ___ (rozumieć) po angielsku.", answers: ["rozumieją"], explain: "rozumieć → oni rozumieją (-eją). Часта помилка — «rozumią»." },
        { type: "choice", q: "___ bardzo dobrze Gdańsk, bo mieszkam tam od pięciu lat.", options: ["Znam", "Wiem", "Umiem"], answer: 0, explain: "Знати місце або людину — znać + знах. в.; wiedzieć — знати факт (Wiem, że…), umieć — уміти." },
        { type: "choice", q: "Czy ___, o której jest ostatni tramwaj?", options: ["wiesz", "znasz", "umiesz"], answer: 0, explain: "Далі йде підрядне речення (o której…), отже, потрібне wiedzieć: Czy wiesz, o której…?" },
        { type: "gap", q: "Czy ___ (ty, umieć) lepić pierogi?", answers: ["umiesz"], explain: "umieć → ty umiesz. Навичка, уміння — саме umieć (до речі, pierogi — це вареники)." },
        { type: "match", q: "З’єднайте вираз із mieć і переклад", pairs: [["Mam rację.", "Я маю рацію."], ["Mam ochotę na kawę.", "Мені хочеться кави."], ["Mam trzydzieści lat.", "Мені тридцять років."], ["Mam dość!", "З мене досить!"], ["Mam przerwę.", "У мене перерва."]], explain: "mieć — дуже «робоче» дієслово: вік, бажання, слушність — усе через mam. Зверніть увагу: «Мені тридцять років», але Mam trzydzieści lat." },
        { type: "order", ru: "Ти знаєш, де живе Оля?", words: ["Wiesz,", "gdzie", "mieszka", "Ola?"], alt: ["Wiesz, gdzie Ola mieszka?"], explain: "wiedzieć + підрядне з gdzie. Порядок «gdzie mieszka Ola» — найприродніший." },
        { type: "translate", ru: "Я не знаю, де мій будильник.", answers: ["Nie wiem, gdzie jest mój budzik.", "Nie wiem, gdzie mój budzik."], explain: "Факт (де?) — wiedzieć: nie wiem. «Будильник» — budzik." }
      ],

      pronunciation: {
        focus: "sz / ś / s",
        tip: `<p>У польській три ряди схожих звуків — свистячі, шиплячі та м’які. Перші два вам знайомі з української, а от м’який ряд доведеться ставити заново.</p>
<ul>
<li><b>s</b> — як українське «с»: <span class="pl">sok</span>, <span class="pl">sum</span>.</li>
<li><b>sz</b> — твердий звук, близький до українського «ш»; губи трохи витягнуті, кінчик язика піднятий: <span class="pl">szum</span>, <span class="pl">kasza</span>, <span class="pl">masz</span>.</li>
<li><b>ś</b> — м’який звук, якого в українській немає: середня частина язика притиснута до піднебіння, кінчик — за нижніми зубами. Звучить як дуже м’яке [ш’], а не як «сь»! Перед приголосним і в кінці слова пишеться <b>ś</b>, а перед голосним — <b>si</b>: <span class="pl">śpi</span>, <span class="pl">wieś</span>, <span class="pl">siostra</span>, <span class="pl">Kasia</span>.</li>
</ul>
<div class="tip">Типова помилка українськомовних — вимовляти <span class="pl">ś</span> як українське «сь» («сьпі»). Польське <span class="pl">ś</span> шипить сильніше: уявіть «ш», вимовлене з усмішкою й дуже м’яко. І не підставляйте українське «щ» — це два звуки [шч].</div>`,
        items: [
          { type: "listen", text: "szybko", ru: "швидко", note: "тверде sz" },
          { type: "listen", text: "Sąsiad nosi szary sweter.", ru: "Сусід носить сірий светр.", note: "s, si = ś, sz" },
          { type: "minimal", options: ["kasa", "kasza", "Kasia"], ru: ["каса", "каша", "Кася (ім’я)"] },
          { type: "minimal", options: ["proszę", "prosię"], ru: ["прошу / будь ласка", "порося"] },
          { type: "minimal", options: ["szum", "sum"], ru: ["шум", "сом"] },
          { type: "stress", word: "śniadanie", syllables: ["śnia", "da", "nie"], answer: 1 },
          { type: "dictation", text: "Szymon wie, że siostra jeszcze śpi." }
        ]
      },

      reading: {
        title: "Drzemka, mój największy wróg",
        text: "Mam na imię Szymon, mam trzydzieści lat i mieszkam we Wrocławiu. Na co dzień pracuję w banku, a do pracy dojeżdżam tramwajem. W tygodniu mój budzik dzwoni o szóstej. Wiem, że muszę wstać, ale wciskam drzemkę. Raz, drugi, trzeci…\n\nPotem wszystko robię w pośpiechu. Śniadanie jem na stojąco, a kawę kupuję w Żabce obok przystanku. W tramwaju czytam wiadomości. Pracę zaczynam o ósmej — no, czasami o ósmej dziesięć.\n\nO dwunastej mam przerwę. Koledzy jedzą pierogi w barze mlecznym, ale ja nie mam ochoty na ciężki posiłek. Jem sałatkę. Wiem, że to zdrowe… ale o szesnastej jestem strasznie głodny.\n\nWieczorem odpoczywam albo spędzam czas z Martą. Marta świetnie gotuje, a ja nie umiem zrobić nawet jajecznicy. Dlatego to ja zmywam naczynia. Marta mówi, że nie rozumie, jak można tak kochać drzemkę. Ja też tego nie rozumiem. Zasypiam o północy, a rano… znowu drzemka.",
        glossary: [
          { pl: "wciskam", ru: "натискаю" },
          { pl: "na stojąco", ru: "стоячи" },
          { pl: "przystanku", ru: "зупинки" },
          { pl: "barze mlecznym", ru: "«молочному барі» — дешевій польській їдальні" },
          { pl: "ciężki", ru: "важкий, ситний" },
          { pl: "głodny", ru: "голодний" },
          { pl: "jajecznicy", ru: "яєчні" },
          { pl: "zmywam naczynia", ru: "мию посуд" }
        ],
        questions: [
          { type: "tf", q: "Szymon dojeżdża do pracy autobusem.", answer: false, explain: "Він їздить трамваєм: «do pracy dojeżdżam tramwajem»." },
          { type: "tf", q: "Kiedy dzwoni budzik, Szymon od razu wstaje.", answer: false, explain: "Ні, він кілька разів натискає «drzemkę»: «Raz, drugi, trzeci…»." },
          { type: "choice", q: "Gdzie Szymon kupuje kawę?", options: ["W barze mlecznym.", "W Żabce obok przystanku.", "W banku."], answer: 1, explain: "«Kawę kupuję w Żabce obok przystanku»." },
          { type: "choice", q: "Dlaczego to Szymon zmywa naczynia?", options: ["Bo lubi zmywać.", "Bo nie umie gotować.", "Bo Marta pracuje wieczorem."], answer: 1, explain: "Він не вміє приготувати навіть яєчню: «nie umiem zrobić nawet jajecznicy. Dlatego to ja zmywam naczynia»." },
          { type: "tf", q: "Na przerwie Szymon je pierogi z kolegami.", answer: false, explain: "Pierogi (тобто вареники, а не пироги!) їдять колеги, а Шимон їсть салат." }
        ]
      },

      writing: {
        prompt: "Ви листуєтеся з поляком Мареком. Напишіть йому повідомлення про свій звичайний будній день: о котрій ви встаєте, що їсте на сніданок, як добираєтеся на роботу чи навчання, коли у вас перерва і як ви відпочиваєте ввечері. Наприкінці запитайте, як минає його день.",
        minWords: 40,
        maxWords: 80,
        useWords: ["na co dzień", "dojeżdżać", "przerwa", "odpoczywać"],
        checklist: [
          { label: "Щонайменше 4 дієслова в 1-й особі на -am/-em (mam, jem, czytam…)", pattern: "\\p{L}+(am|em)(?!\\p{L})", min: 4 },
          { label: "Дієслово umieć, wiedzieć або rozumieć", pattern: "(?<!\\p{L})(umiem|umiesz|wiem|wiesz|rozumiem|rozumiesz)(?!\\p{L})", min: 1 }
        ],
        model: "Cześć, Marek! Na co dzień wstaję o siódmej. Na śniadanie jem owsiankę i piję kawę. Do pracy dojeżdżam metrem, to tylko dwadzieścia minut. Pracę zaczynam o dziewiątej, a o trzynastej mam przerwę i jem obiad z kolegami. Wieczorem odpoczywam: czytam książki albo oglądam seriale. Umiem trochę gotować, więc często robię kolację. Zasypiam zwykle o jedenastej. A ty? Jak wygląda twój dzień?"
      }
    },

    // ───────────────────────── Урок 2 ─────────────────────────
    {
      id: "m01l2",
      title: "Piszę, mogę, mówię",
      titleRu: "Дієвідмінювання -ę/-esz, -ę/-isz і чергування",
      topic: "Praca i obowiązki",
      review: false,
      minutes: 28,
      goals: [
        "Дієвідмінювати дієслова на -ę/-esz та -ę/-isz/-ysz",
        "Розпізнавати чергування у формах ja і oni: piszę, mogę, płacę, chodzę",
        "Говорити про роботу й обов’язки, не потрапляючи в пастки «хибних друзів»",
        "Розрізняти cz, ć і c"
      ],

      vocab: [
        { pl: "obowiązek", g: "m", ru: "обов’язок", ex: "W nowej pracy mam dużo obowiązków.", exRu: "На новій роботі в мене багато обов’язків." },
        { pl: "zebranie", g: "n", ru: "збори, нарада", ex: "W poniedziałek mamy zebranie o dziewiątej.", exRu: "У понеділок у нас нарада о дев’ятій." },
        { pl: "termin", g: "m", ru: "термін, строк, дедлайн; запис (до лікаря)", ex: "Termin mija w piątek.", exRu: "Термін спливає в п’ятницю.", note: "як укр. «термін» у значенні «строк»; друге значення — запис до лікаря, перукаря" },
        { pl: "szef / szefowa", ru: "начальник / начальниця", ex: "Szefowa chce mieć raport na jutro.", exRu: "Начальниця хоче мати звіт на завтра." },
        { pl: "współpracownik", g: "m", ru: "колега, співробітник", ex: "Moi współpracownicy są bardzo pomocni.", exRu: "Мої колеги дуже охоче допомагають." },
        { pl: "umowa", g: "f", ru: "договір", ex: "Mam umowę o pracę na czas nieokreślony.", exRu: "У мене безстроковий трудовий договір.", note: "хибний друг: це не «умова» (умова — warunek)! umowa o pracę, umowa zlecenie, B2B — основні форми працевлаштування в Польщі" },
        { pl: "wypłata", g: "f", ru: "зарплата (виплата)", ex: "Wypłata jest zawsze dziesiątego.", exRu: "Зарплата завжди десятого числа.", note: "синонім: pensja — це теж зарплата, а не пенсія! (пенсія — emerytura)" },
        { pl: "urlop", g: "m", ru: "відпустка", ex: "W sierpniu biorę dwa tygodnie urlopu.", exRu: "У серпні я беру два тижні відпустки.", note: "urlop — відпустка на роботі; wakacje — канікули, літній відпочинок" },
        { pl: "nadgodziny", g: "pl", ru: "понаднормові (години)", ex: "W tym miesiącu mam dużo nadgodzin.", exRu: "Цього місяця в мене багато понаднормових." },
        { pl: "zdalnie", ru: "дистанційно, віддалено", ex: "We wtorki pracuję zdalnie z domu.", exRu: "По вівторках я працюю дистанційно з дому." },
        { pl: "odpowiadać za", ru: "відповідати за", ex: "Odpowiadam za kontakt z klientami.", exRu: "Я відповідаю за зв’язок із клієнтами.", note: "+ знах. в.; odpowiadać na pytanie — відповідати на запитання" },
        { pl: "kończyć", ru: "закінчувати", ex: "Kończę pracę o szesnastej.", exRu: "Я закінчую роботу о шістнадцятій.", note: "kończę, kończysz (-ę/-ysz)" },
        { pl: "dzwonić do", ru: "дзвонити (комусь)", ex: "Codziennie dzwonię do klientów.", exRu: "Я щодня дзвоню клієнтам.", note: "do + род. в., а не давальний, як в українській!" }
      ],

      grammar: {
        title: "Дієвідмінювання на -ę/-esz і -ę/-isz/-ysz, чергування",
        html: `<p>Це дві великі групи, у яких форма <b>ja</b> закінчується на <b>-ę</b>, а форма <b>oni</b> — на <b>-ą</b>. Розрізняє їх форма <b>ty</b>: <b>-esz</b> або <b>-isz / -ysz</b>.</p>
<table class="g">
<tr><th></th><th>-ę / -esz</th><th>-ę / -isz</th><th>-ę / -ysz</th></tr>
<tr><td>ja</td><td>-ę</td><td>-ę</td><td>-ę</td></tr>
<tr><td>ty</td><td>-esz</td><td>-isz</td><td>-ysz</td></tr>
<tr><td>on / ona</td><td>-e</td><td>-i</td><td>-y</td></tr>
<tr><td>my</td><td>-emy</td><td>-imy</td><td>-ymy</td></tr>
<tr><td>wy</td><td>-ecie</td><td>-icie</td><td>-ycie</td></tr>
<tr><td>oni / one</td><td>-ą</td><td>-ą</td><td>-ą</td></tr>
</table>
<p><b>-ysz</b> пишеться після <b>cz, sz, ż, rz</b>, де літера i неможлива: <span class="pl">kończyć → kończysz</span>, <span class="pl">słyszeć → słyszysz</span>, <span class="pl">uczyć → uczysz</span>. Польське <b>y</b> звучить майже як українське [и], а <b>i</b> — як [і], тож остання форма звучить майже як українське «учиш».</p>
<h4>1. Група -ę / -esz: pisać, móc, chcieć</h4>
<table class="g">
<tr><th></th><th>pisać</th><th>móc</th><th>chcieć</th></tr>
<tr><td>ja</td><td class="pl">piszę</td><td class="pl">mogę</td><td class="pl">chcę</td></tr>
<tr><td>ty</td><td class="pl">piszesz</td><td class="pl">możesz</td><td class="pl">chcesz</td></tr>
<tr><td>on / ona</td><td class="pl">pisze</td><td class="pl">może</td><td class="pl">chce</td></tr>
<tr><td>my</td><td class="pl">piszemy</td><td class="pl">możemy</td><td class="pl">chcemy</td></tr>
<tr><td>wy</td><td class="pl">piszecie</td><td class="pl">możecie</td><td class="pl">chcecie</td></tr>
<tr><td>oni / one</td><td class="pl">piszą</td><td class="pl">mogą</td><td class="pl">chcą</td></tr>
</table>
<p>У <span class="pl">pisać</span> <b>s → sz</b> в усіх формах. У <span class="pl">móc</span> <b>g</b> залишається лише в <b>ja</b> і <b>oni</b>, в інших формах — <b>ż</b>. За тими самими схемами: <span class="pl">płakać → płaczę, płaczesz</span>; <span class="pl">pomóc → pomogę, pomożesz</span>. Сюди ж належать дієслова на <b>-ować</b>: <span class="pl">pracować → pracuję, pracujesz</span> (як українське «працювати – працюю»).</p>
<h4>2. Група -ę / -isz: mówić, płacić, chodzić</h4>
<table class="g">
<tr><th></th><th>mówić</th><th>płacić</th><th>chodzić</th></tr>
<tr><td>ja</td><td class="pl">mówię</td><td class="pl">płacę</td><td class="pl">chodzę</td></tr>
<tr><td>ty</td><td class="pl">mówisz</td><td class="pl">płacisz</td><td class="pl">chodzisz</td></tr>
<tr><td>on / ona</td><td class="pl">mówi</td><td class="pl">płaci</td><td class="pl">chodzi</td></tr>
<tr><td>my</td><td class="pl">mówimy</td><td class="pl">płacimy</td><td class="pl">chodzimy</td></tr>
<tr><td>wy</td><td class="pl">mówicie</td><td class="pl">płacicie</td><td class="pl">chodzicie</td></tr>
<tr><td>oni / one</td><td class="pl">mówią</td><td class="pl">płacą</td><td class="pl">chodzą</td></tr>
</table>
<p>У формах <b>ja</b> і <b>oni</b> м’який приголосний основи твердне: <b>ć → c</b> (<span class="pl">płacę</span>), <b>dź → dz</b> (<span class="pl">chodzę</span>), <b>ś → sz</b> (<span class="pl">prosić → proszę</span>), <b>ź → ż</b> (<span class="pl">wozić → wożę</span>). Після <b>b, p, w, m, n</b> пишеться <b>-ię / -ią</b>: <span class="pl">mówię</span>, <span class="pl">robię</span>, <span class="pl">dzwonię</span>, <span class="pl">mówią</span>.</p>
<div class="tip"><b>Добра новина:</b> ці чергування дуже схожі на українські! <span class="pl">mogę – możesz</span> ≈ можу – можеш; <span class="pl">piszę – piszesz</span> = пишу – пишеш; <span class="pl">płacę – płacisz</span> ≈ плачу – платиш; <span class="pl">proszę – prosisz</span> = прошу – просиш; <span class="pl">chodzę – chodzisz</span> ≈ ходжу – ходиш. Одна відмінність: українське «можу» має ж вже в 1-й особі, а польське mogę (як і mogą) зберігає g. Довіряйте чуттю, але перевіряйте форми ja та oni.</div>
<div class="tip"><b>Пастка: chcę, а не «chcem».</b> Форма «chcem» — грубе просторіччя. І не плутайте на письмі <span class="pl">piszę</span> (я пишу) і <span class="pl">pisze</span> (він пише): у швидкому мовленні кінцеве -ę звучить майже як -e, але писати його потрібно завжди.</div>
<div class="tip"><b>Офісна лексика і керування.</b> <span class="pl">termin</span> — як і українське «термін», передусім строк, а ще — запис до лікаря чи перукаря. Справжня пастка — керування: <span class="pl">dzwonić do kogoś</span> — дзвонити комусь, із <span class="pl">do</span> і родовим відмінком: <span class="pl">Dzwonię do szefa.</span> (не «szefowi», хоч українською «дзвоню шефові»). А ще бережіться слів umowa (договір, а не «умова») і pensja (зарплата, а не «пенсія»).</div>`
      },

      exercises: [
        { type: "gap", q: "Codziennie ___ (ja, pisać) raporty dla szefa.", answers: ["piszę"], explain: "pisać → piszę: s → sz в усіх формах (як «писати – пишу»)." },
        { type: "gap", q: "Czy ___ (ty, móc) zadzwonić do klienta?", answers: ["możesz"], explain: "móc → mogę, możesz, może… g → ż в усіх формах, крім ja і oni (пор. укр. «можеш»)." },
        { type: "gap", q: "Nie ___ (ja, chcieć) znowu robić nadgodzin.", answers: ["chcę"], explain: "chcieć → chcę, chcesz, chcą. Форма «chcem» — помилка." },
        { type: "choice", q: "Nasza szefowa ___ po angielsku i po niemiecku.", options: ["mówi", "mówię", "mówią"], answer: 0, explain: "mówić → ona mówi (група -ę/-isz). mówię — ja, mówią — oni." },
        { type: "choice", q: "W Żabce zawsze ___ telefonem.", options: ["płacę", "płacię", "płaciem"], answer: 0, explain: "płacić → płacę: у формі ja ć переходить у c (пор. «платити – плачу»)." },
        { type: "match", q: "З’єднайте інфінітив із формою «ja»", pairs: [["pisać", "piszę"], ["móc", "mogę"], ["prosić", "proszę"], ["chodzić", "chodzę"], ["płacić", "płacę"], ["kończyć", "kończę"]], explain: "Чергування у формі ja: s → sz, g зберігається, ś → sz, dź → dz, ć → c; у kończyć чергування немає." },
        { type: "gap", q: "Oni nie ___ (móc) przyjść na zebranie.", answers: ["mogą"], explain: "móc → oni mogą: у формі oni знову g (хоча українською «вони можуть» — із ж)." },
        { type: "choice", q: "Co znaczy: „Termin mija w piątek”?", options: ["Строк спливає в п’ятницю.", "Нове слово пояснять у п’ятницю.", "Нарада буде в п’ятницю."], answer: 0, explain: "termin тут — строк, дедлайн, як і українське «термін» у цьому значенні. Друге часте значення — запис до лікаря." },
        { type: "order", ru: "Я закінчую роботу о п’ятій і дзвоню мамі.", words: ["Kończę", "pracę", "o", "piątej", "i", "dzwonię", "do", "mamy."], alt: ["O piątej kończę pracę i dzwonię do mamy.", "Pracę kończę o piątej i dzwonię do mamy."], explain: "kończyć → kończę; dzwonić do + род. в.: dzwonię do mamy (а не «mamie», як підказує українське «дзвоню мамі»)." },
        { type: "translate", ru: "Ти можеш мені допомогти?", answers: ["Możesz mi pomóc?", "Czy możesz mi pomóc?"], explain: "móc → ty możesz; «мені» — mi. Запитання можна почати з czy (як українське «чи»)." }
      ],

      pronunciation: {
        focus: "cz / ć / c",
        tip: `<ul>
<li><b>c</b> — як українське «ц»: <span class="pl">cena</span>, <span class="pl">noc</span>.</li>
<li><b>cz</b> — <b>тверде</b> «ч», як в українській; язик стоїть як для «ш»: <span class="pl">czas</span>, <span class="pl">czekać</span>, <span class="pl">kończę</span>. Тут українцям легко: польське <span class="pl">czas</span> звучить майже як українське «час».</li>
<li><b>ć</b> / <b>ci</b> — м’який звук, якого в українській немає: щось середнє між «ч» і «ть», вимовлене дуже м’яко, із середньою частиною язика, піднятою до піднебіння, — [ч’]: <span class="pl">ćma</span>, <span class="pl">być</span>, <span class="pl">ciocia</span>, <span class="pl">cicho</span>. Перед голосним пишеться <b>ci</b>.</li>
</ul>
<div class="tip">Головна пастка — <span class="pl">ć</span>: не замінюйте його українським «ць» (ciocia — це не «цьоця», а [ч’оч’а]) і не вимовляйте твердо. Тверде українське «ч» залиште для <span class="pl">cz</span>.</div>`,
        items: [
          { type: "listen", text: "czwartek", ru: "четвер", note: "тверде cz" },
          { type: "listen", text: "Ciocia czyta cudze listy.", ru: "Тітка читає чужі листи.", note: "ci = ć, cz, c" },
          { type: "minimal", options: ["leczę", "lecę"], ru: ["лікую", "лечу"] },
          { type: "minimal", options: ["czy", "ci"], ru: ["чи (питальна частка)", "тобі"] },
          { type: "minimal", options: ["Czech", "cech"], ru: ["чех", "цех, гільдія"] },
          { type: "stress", word: "współpracownik", syllables: ["współ", "pra", "cow", "nik"], answer: 2 },
          { type: "dictation", text: "Czy możesz zadzwonić do cioci w czwartek?" }
        ]
      },

      reading: {
        title: "Życie w korpo",
        text: "Nazywam się Ola i pracuję w dużej firmie w Warszawie, w szklanym biurowcu na Mokotowie. Odpowiadam za kontakt z klientami z Niemiec, więc codziennie piszę dziesiątki maili i dzwonię do Berlina. Mówię po niemiecku, ale klienci czasami mówią tak szybko, że nic nie rozumiem!\n\nW poniedziałki mamy zebranie. Szef mówi długo, a my piszemy notatki i patrzymy na zegarek. We wtorki i czwartki pracuję zdalnie. Wtedy mogę pracować w piżamie — kamera i tak jest wyłączona.\n\nMam umowę o pracę, więc mam płatny urlop. W lipcu chcę jechać na Hel, ale najpierw muszę skończyć duży raport. Termin mija trzydziestego czerwca. Moja współpracownica Kasia mówi, że nie mogę robić wszystkiego sama. Ma rację: nie chcę znowu robić nadgodzin.\n\nNajlepszy dzień miesiąca? Dziesiąty, bo wtedy jest wypłata. Najgorszy moment tygodnia? Piątek, piętnasta pięćdziesiąt dziewięć. Kończę pracę o szesnastej, a szef pisze na Teamsie: „Masz chwilę?”",
        glossary: [
          { pl: "szklanym biurowcu", ru: "скляному офісному центрі" },
          { pl: "dziesiątki", ru: "десятки" },
          { pl: "notatki", ru: "нотатки" },
          { pl: "zegarek", ru: "годинник (наручний)" },
          { pl: "wyłączona", ru: "вимкнена" },
          { pl: "płatny", ru: "оплачуваний" },
          { pl: "Ma rację", ru: "вона має рацію" },
          { pl: "chwilę", ru: "хвилинку" }
        ],
        questions: [
          { type: "tf", q: "Ola dzwoni do klientów z Niemiec.", answer: true, explain: "«Odpowiadam za kontakt z klientami z Niemiec… dzwonię do Berlina»." },
          { type: "tf", q: "W poniedziałki Ola pracuje z domu.", answer: false, explain: "Дистанційно вона працює по вівторках і четвергах, а в понеділок — нарада." },
          { type: "choice", q: "Dlaczego Ola może pracować w piżamie?", options: ["Bo kamera jest wyłączona.", "Bo szef też pracuje w piżamie.", "Bo ma urlop."], answer: 0, explain: "«kamera i tak jest wyłączona»." },
          { type: "choice", q: "Co Ola musi zrobić przed urlopem?", options: ["Pojechać na Hel.", "Skończyć duży raport.", "Podpisać nową umowę."], answer: 1, explain: "«najpierw muszę skończyć duży raport»." },
          { type: "tf", q: "Wypłata jest dziesiątego dnia miesiąca.", answer: true, explain: "«Dziesiąty, bo wtedy jest wypłata»." }
        ]
      },

      writing: {
        prompt: "До вашої команди прийшла нова колега Ania. Напишіть їй коротке вітальне повідомлення: за що ви відповідаєте, що робите щодня (пишете, дзвоните…), коли бувають наради, у які дні ви працюєте дистанційно і чого не хочете (наприклад, понаднормових). Запропонуйте писати вам, якщо будуть запитання.",
        minWords: 40,
        maxWords: 80,
        useWords: ["odpowiadać", "zebranie", "zdalnie", "nadgodziny"],
        checklist: [
          { label: "Щонайменше 3 форми на -ę (piszę, mówię, kończę…)", pattern: "\\p{L}{2,}ę(?!\\p{L})", min: 3 },
          { label: "Дієслово móc або chcieć (mogę, możesz, chcę…)", pattern: "(?<!\\p{L})(mog|moż|chc)\\p{L}*", min: 1 }
        ],
        model: "Cześć, Aniu! Witaj w zespole! Odpowiadam za kontakt z klientami, więc codziennie piszę maile i dzwonię do firm z całej Polski. W poniedziałki o dziewiątej mamy zebranie. Szef mówi długo, więc zawsze biorę dużą kawę. W środy i piątki pracuję zdalnie. Pracę kończę zwykle o szesnastej, bo nie chcę robić nadgodzin. Jeśli masz pytania, możesz do mnie pisać albo dzwonić. Pozdrawiam, Marta"
      }
    },

    // ───────────────────────── Урок 3 ─────────────────────────
    {
      id: "m01l3",
      title: "Lubię kawę i mojego psa",
      titleRu: "Знахідний відмінок однини",
      topic: "Czas wolny",
      review: false,
      minutes: 27,
      goals: [
        "Ставити іменники й прикметники всіх родів у знахідний відмінок",
        "Розрізняти чоловічий рід істот і неістот",
        "Розповідати про хобі й запрошувати кудись",
        "Чути різницю між ż/rz, ź і z"
      ],

      vocab: [
        { pl: "w wolnym czasie", ru: "у вільний час", ex: "W wolnym czasie robię zdjęcia.", exRu: "У вільний час я фотографую." },
        { pl: "uwielbiać", ru: "обожнювати", ex: "Uwielbiam włoską kawę.", exRu: "Обожнюю італійську каву.", note: "+ знах. в." },
        { pl: "zapraszać", ru: "запрошувати", ex: "Zapraszam cię na kawę!", exRu: "Запрошую тебе на каву!", note: "zapraszać kogo? (знах. в.) na co? (na + знах. в.) — як в українській" },
        { pl: "wystawa", g: "f", ru: "виставка", ex: "W sobotę oglądamy nową wystawę w muzeum.", exRu: "У суботу ми оглядаємо нову виставку в музеї." },
        { pl: "spacer", g: "m", ru: "прогулянка", ex: "Wieczorem idę na spacer z psem.", exRu: "Увечері я йду гуляти з псом.", note: "iść na spacer — піти погуляти" },
        { pl: "siłownia", g: "f", ru: "тренажерний зал, спортзал", ex: "Trzy razy w tygodniu chodzę na siłownię.", exRu: "Тричі на тиждень я ходжу в спортзал.", note: "зазвичай кажуть na siłownię" },
        { pl: "karnet", g: "m", ru: "абонемент", ex: "Mam karnet na basen.", exRu: "У мене абонемент у басейн." },
        { pl: "szachy", g: "pl", ru: "шахи", ex: "Dziadek świetnie gra w szachy.", exRu: "Дідусь чудово грає в шахи.", note: "grać w + знах. в. (ігри), grać na + місц. в. (інструменти) — як в українській" },
        { pl: "piłka nożna", g: "f", ru: "футбол", ex: "W niedzielę gramy w piłkę nożną na Orliku.", exRu: "У неділю ми граємо у футбол на «Орлику» (безкоштовному спортмайданчику)." },
        { pl: "mecz", g: "m", ru: "матч", ex: "Oglądamy mecz Legii w pubie.", exRu: "Ми дивимося матч «Легії» в пабі." },
        { pl: "odcinek", g: "m", ru: "серія, епізод", ex: "Jeszcze jeden odcinek i idę spać!", exRu: "Ще одна серія — і йду спати!" },
        { pl: "kryminał", g: "m", ru: "детектив (книжка, фільм)", ex: "Czytam świetny kryminał.", exRu: "Я читаю чудовий детектив.", note: "хибний друг: detektyw — це сищик (людина), а не жанр" },
        { pl: "znajomy / znajoma", ru: "знайомий / знайома", ex: "Zapraszam znajomego na mecz.", exRu: "Я запрошую знайомого на матч.", note: "відмінюється як прикметник: znajomego, znajomą (як укр. «знайомого», «знайому»)" }
      ],

      grammar: {
        title: "Знахідний відмінок (biernik) однини",
        html: `<p>Biernik відповідає на запитання <span class="pl">kogo? co?</span> і стоїть після більшості перехідних дієслів: <span class="pl">mieć</span>, <span class="pl">lubić</span>, <span class="pl">znać</span>, <span class="pl">oglądać</span>, <span class="pl">czytać</span>, <span class="pl">uwielbiać</span>, <span class="pl">zapraszać</span>, а також у виразах із <span class="pl">na</span> і <span class="pl">w</span>: <span class="pl">iść na spacer</span>, <span class="pl">grać w szachy</span>.</p>
<h4>Іменник + прикметник</h4>
<table class="g">
<tr><th>Рід</th><th>Kto? Co?</th><th>Kogo? Co?</th></tr>
<tr><td>ж. р.</td><td class="pl">ciekawa książka</td><td class="pl">ciekawą książkę</td></tr>
<tr><td>ч. р. (істоти)</td><td class="pl">młodszy brat</td><td class="pl">młodszego brata</td></tr>
<tr><td>ч. р. (неістоти)</td><td class="pl">nowy telefon</td><td class="pl">nowy telefon</td></tr>
<tr><td>с. р.</td><td class="pl">zimne piwo</td><td class="pl">zimne piwo</td></tr>
</table>
<ul>
<li><b>Жіночий рід:</b> іменник <b>-a → -ę</b>, прикметник <b>-a → -ą</b>: <span class="pl">Mam nową pracę.</span> Підказка: там, де в українській «-у» (нову роботу), у польській носові ą / ę. Іменники ж. р. на приголосний не змінюються: <span class="pl">Kocham jesień.</span> Особлива форма: <span class="pl">pani → panią</span>.</li>
<li><b>Чоловічий рід, назви істот</b> (люди й тварини) — як родовий: <b>-a</b>, прикметник <b>-ego</b>: <span class="pl">Znam twojego szefa.</span> <span class="pl">Mam małego psa.</span> Так само, як в українській: «знаю твого шефа», «маю малого пса». Іменники ч. р. на -a відмінюються як жіночі, але прикметник залишається чоловічим: <span class="pl">Mam nowego kolegę.</span> (укр. «маю нового колегу»).</li>
<li><b>Чоловічий рід (неістоти) і середній</b> — форма не змінюється: <span class="pl">Oglądam ciekawy film.</span> <span class="pl">Mam wolne popołudnie.</span></li>
</ul>
<h4>Вказівні та присвійні займенники</h4>
<table class="g">
<tr><th></th><th>ч. р. істоти</th><th>ч. р. неістоти</th><th>ж. р.</th><th>с. р.</th></tr>
<tr><td>ten</td><td class="pl">tego</td><td class="pl">ten</td><td class="pl">tę</td><td class="pl">to</td></tr>
<tr><td>mój</td><td class="pl">mojego</td><td class="pl">mój</td><td class="pl">moją</td><td class="pl">moje</td></tr>
<tr><td>twój</td><td class="pl">twojego</td><td class="pl">twój</td><td class="pl">twoją</td><td class="pl">twoje</td></tr>
</table>
<div class="tip"><b>tę чи tą?</b> У розмові поляки часто кажуть «tą książkę», але норма для знахідного — <span class="pl">tę książkę</span>. На письмі — тільки <span class="pl">tę</span>.</div>
<div class="tip"><b>Пастка керування.</b> Не всі дієслова, які в українській вимагають знахідного, роблять це в польській! <span class="pl">słuchać</span> (слухати), <span class="pl">szukać</span> (шукати), <span class="pl">uczyć się</span> (вчити, вивчати) вимагають <b>родового</b>: <span class="pl">Słucham muzyki.</span> <span class="pl">Szukam pracy.</span> «Шукати роботи» буває й в українській, а от «слухаю музику» по-польськи — тільки <span class="pl">słucham muzyki</span>.</div>
<div class="tip"><b>Розмовне -a в неістот.</b> Деякі предмети в живому мовленні отримують -a, як істоти: ігри, танці, марки, повідомлення: <span class="pl">gram w tenisa</span>, <span class="pl">tańczę walca</span>, <span class="pl">piszę SMS-a</span>, <span class="pl">mam iPhone'a</span>. Українцям це знайомо: «написати листа», «танцювати вальса». Поки що просто впізнавайте такі форми.</div>
<div class="tip">Після заперечення знахідний переходить у родовий — так само, як в українській («маю брата – не маю брата»): <span class="pl">Mam brata. → Nie mam brata.</span> Докладно — у модулі 3.</div>`
      },

      exercises: [
        { type: "gap", q: "Uwielbiam ___ (polska kuchnia).", answers: ["polską kuchnię"], explain: "Ж. р. у знахідному: прикметник -a → -ą, іменник -a → -ę (укр. «польську кухню»)." },
        { type: "gap", q: "Ola ma ___ (duży pies).", answers: ["dużego psa"], explain: "Тварина — істота: ч. р. істот у знах. в. = род. в.: dużego psa (e випадає: pies → psa, як укр. «пес – пса»)." },
        { type: "gap", q: "Oglądam ___ (nowy serial) na Netfliksie.", answers: ["nowy serial"], explain: "Ч. р., неістота: у знахідному форма не змінюється." },
        { type: "choice", q: "Zapraszam ___ na kawę.", options: ["Ewę", "Ewa", "Ewą"], answer: 0, explain: "zapraszać kogo? — знах. в.: Ewa → Ewę. Ewą — орудний." },
        { type: "choice", q: "Znasz ___ szefa?", options: ["mojego", "mój", "moją"], answer: 0, explain: "szef — істота, ч. р., тому mojego szefa (як укр. «мого шефа»)." },
        { type: "choice", q: "Wieczorem słucham ___.", options: ["muzyki", "muzykę", "muzyka"], answer: 0, explain: "Пастка! słuchać вимагає родового: słucham muzyki (а українською — «слухаю музику»)." },
        { type: "choice", q: "Lubię ___ piosenkę.", options: ["tę", "ten", "tego"], answer: 0, explain: "ta → tę у знахідному. «tą» почуєте в розмові, але норма — tę." },
        { type: "match", q: "З’єднайте польський вираз із перекладом", pairs: [["grać w szachy", "грати в шахи"], ["iść na spacer", "піти на прогулянку"], ["chodzić na siłownię", "ходити в спортзал"], ["oglądać mecz", "дивитися матч"], ["zapraszać na kawę", "запрошувати на каву"]], explain: "grać w + знах. в. — для ігор; iść / chodzić na + знах. в. — для заходів і занять." },
        { type: "order", ru: "Я запрошую знайому на виставку.", words: ["Zapraszam", "znajomą", "na", "wystawę."], alt: ["Na wystawę zapraszam znajomą."], explain: "zapraszać kogo (znajomą — знах. в. ж. р.) + na co (wystawę)." },
        { type: "translate", ru: "У мене абонемент у спортзал.", answers: ["Mam karnet na siłownię."], explain: "mieć + знах. в. (karnet не змінюється); «у спортзал» — na siłownię." }
      ],

      pronunciation: {
        focus: "ż = rz / ź / z",
        tip: `<ul>
<li><b>z</b> — як українське «з»: <span class="pl">zupa</span>, <span class="pl">koza</span>.</li>
<li><b>ż</b> і <b>rz</b> — <b>один і той самий</b> звук, тверде «ж», як в українській: <span class="pl">żaba</span>, <span class="pl">rzeka</span>. Різниця лише в написанні: <span class="pl">może</span> (може) і <span class="pl">morze</span> (море) звучать однаково.</li>
<li><b>ź</b> / <b>zi</b> — м’яке [ж’], дзвінна пара до <span class="pl">ś</span>: <span class="pl">źle</span>, <span class="pl">zima</span>, <span class="pl">ziemia</span>. Такого звука в українській немає: не замінюйте його на «зь» (zima — не «зіма»). Перед голосним пишеться <b>zi</b>.</li>
</ul>
<div class="tip">Як вгадати <b>rz</b>? Якщо в українському спорідненому слові є «р», у польському часто <b>rz</b>: ріка → <span class="pl">rzeka</span>, море → <span class="pl">morze</span>, три → <span class="pl">trzy</span>, Григорій → <span class="pl">Grzegorz</span>. А <b>ż</b> часто чергується з g і z — як і в українській (могти – може, возити – вожу): <span class="pl">mogę – może</span>, <span class="pl">wozić – wożę</span>. Після p, t, k, ch літери rz звучать глухо, як sz (<span class="pl">trzy</span>, <span class="pl">przy</span>) — докладніше в модулі 3.</div>`,
        items: [
          { type: "listen", text: "rzeka", ru: "ріка", note: "rz = ż" },
          { type: "listen", text: "Może zimą pojedziemy nad morze.", ru: "Може, взимку поїдемо на море.", note: "może і morze звучать однаково; zi = ź" },
          { type: "minimal", options: ["zebra", "żebra"], ru: ["зебра", "ребра"] },
          { type: "minimal", options: ["ważę", "wazę"], ru: ["зважую", "вазу (знах. в.)"] },
          { type: "minimal", options: ["ziarno", "żarno"], ru: ["зерно", "жорно"] },
          { type: "stress", word: "rzeczywiście", syllables: ["rze", "czy", "wiś", "cie"], answer: 2 },
          { type: "dictation", text: "Zuzia zaprasza Grzegorza na wystawę." }
        ]
      },

      reading: {
        title: "Sonda uliczna: co robisz w wolnym czasie?",
        text: "Pytamy mieszkańców Krakowa, co robią w wolnym czasie.\n\nPan Zbigniew, 67 lat: Jestem na emeryturze, więc mam dużo czasu. Rano idę na spacer z psem, a potem gram w szachy z sąsiadem na Plantach. Sąsiad zawsze przegrywa, ale nie rezygnuje. Wieczorem oglądam mecz albo czytam dobry kryminał.\n\nOla, 24 lata: Mam karnet na siłownię, ale… rzadko tam chodzę. W wolnym czasie wolę oglądać seriale. Mówię sobie: „Jeszcze jeden odcinek” — i nagle jest druga w nocy!\n\nPani Bożena, 45 lat: Uwielbiam sztukę. W tym miesiącu zapraszam męża na nową wystawę w Muzeum Narodowym. On woli piłkę nożną, więc w zamian oglądam z nim mecz Wisły. To się nazywa kompromis!\n\nKuba, 16 lat: Gram w planszówki z kolegami, a w sobotę zapraszam nową dziewczynę do kina. Tylko tego nie piszcie, bo moja mama czyta waszą gazetę!",
        glossary: [
          { pl: "mieszkańców", ru: "мешканців" },
          { pl: "na emeryturze", ru: "на пенсії" },
          { pl: "Plantach", ru: "Планти — парк навколо Старого міста в Кракові" },
          { pl: "przegrywa", ru: "програє" },
          { pl: "nie rezygnuje", ru: "не здається" },
          { pl: "nagle", ru: "раптом" },
          { pl: "sztukę", ru: "мистецтво (а не «штуку»!)" },
          { pl: "w zamian", ru: "натомість, навзамін" },
          { pl: "Wisły", ru: "«Вісли» — футбольного клубу Кракова" },
          { pl: "planszówki", ru: "настільні ігри" }
        ],
        questions: [
          { type: "tf", q: "Pan Zbigniew gra w szachy z wnukiem.", answer: false, explain: "Він грає із сусідом: «gram w szachy z sąsiadem»." },
          { type: "tf", q: "Ola często chodzi na siłownię.", answer: false, explain: "Абонемент є, але «rzadko tam chodzę»." },
          { type: "choice", q: "Dokąd pani Bożena zaprasza męża?", options: ["Na mecz Wisły.", "Na wystawę w muzeum.", "Na spacer po Plantach."], answer: 1, explain: "«zapraszam męża na nową wystawę w Muzeum Narodowym»." },
          { type: "choice", q: "Co pani Bożena robi w zamian?", options: ["Gra w szachy.", "Ogląda z mężem mecz.", "Czyta kryminał."], answer: 1, explain: "«w zamian oglądam z nim mecz Wisły»." },
          { type: "tf", q: "Mama Kuby czyta tę gazetę.", answer: true, explain: "«moja mama czyta waszą gazetę»." }
        ]
      },

      writing: {
        prompt: "Напишіть повідомлення польському другові чи подрузі: розкажіть, що ви обожнюєте робити у вільний час і що зараз читаєте або дивитеся, і запросіть його/її в суботу на виставку (або на матч, прогулянку). Згадайте, кого ще ви кличете (брата, знайому…). Стежте за знахідним відмінком.",
        minWords: 40,
        maxWords: 80,
        useWords: ["w wolnym czasie", "uwielbiać", "zapraszać", "wystawa"],
        checklist: [
          { label: "Прикметник + іменник ж. р. у знахідному (nową książkę, ciekawą wystawę)", pattern: "\\p{L}+ą\\s+\\p{L}+ę(?!\\p{L})", min: 1 },
          { label: "Назва істоти ч. р. у знахідному (mojego brata, nowego kolegę…)", pattern: "\\p{L}+ego\\s+\\p{L}+(a|ę)(?!\\p{L})", min: 1 },
          { label: "Запрошення: zapraszam (cię) na…", pattern: "zaprasza\\p{L}*", min: 1 }
        ],
        model: "Cześć, Michał! W wolnym czasie uwielbiam sztukę i dobre kryminały. Teraz czytam nową książkę Marka Krajewskiego. W sobotę zapraszam cię na ciekawą wystawę w Muzeum Narodowym. Potem możemy iść na spacer po Starym Mieście. Wieczorem oglądamy mecz Polski z Hiszpanią. Znasz mojego brata Tomka? On też przychodzi. Mamy duży telewizor i zimne piwo. Co ty na to? Ania"
      }
    },

    // ───────────────────────── Урок 4 ─────────────────────────
    {
      id: "m01l4",
      title: "Nigdy się nie nudzę",
      titleRu: "Зворотні дієслова і частотність",
      topic: "Weekend",
      review: false,
      minutes: 27,
      goals: [
        "Правильно ставити się в реченні",
        "Знати, де польська зворотність не збігається з українською",
        "Говорити, як часто ви щось робите, з подвійним запереченням nigdy … nie",
        "Вимовляти dz, dż і dź"
      ],

      vocab: [
        { pl: "wysypiać się", ru: "висипатися", ex: "Kiedy się wysypiam, mam dobry humor.", exRu: "Коли я висипаюся, у мене гарний настрій." },
        { pl: "opalać się", ru: "засмагати", ex: "Latem opalamy się nad jeziorem.", exRu: "Улітку ми засмагаємо біля озера.", note: "в українській без -ся!" },
        { pl: "nudzić się", ru: "нудьгувати (коли нема чим зайнятися)", ex: "Z tobą nigdy się nie nudzę!", exRu: "З тобою мені ніколи не нудно!", note: "сумувати за кимось — tęsknić za kimś" },
        { pl: "spotykać się", ru: "зустрічатися", ex: "Co sobotę spotykam się ze znajomymi.", exRu: "Щосуботи я зустрічаюся з друзями.", note: "spotykać się z kimś (+ оруд. в.)" },
        { pl: "spóźniać się", ru: "запізнюватися", ex: "Nigdy się nie spóźniam na pociąg.", exRu: "Я ніколи не запізнююся на поїзд.", note: "spóźniać się na pociąg, але do pracy (укр. «на роботу»)" },
        { pl: "wracać", ru: "повертатися", ex: "Zwykle wracam z pracy o osiemnastej.", exRu: "Зазвичай я повертаюся з роботи о шостій вечора.", note: "без się!" },
        { pl: "leniuchować", ru: "ледарювати, байдикувати", ex: "W niedzielę cały dzień leniuchuję.", exRu: "У неділю я цілий день ледарюю.", note: "leniuchuję, leniuchujesz" },
        { pl: "działka", g: "f", ru: "дача, садова ділянка", ex: "Rodzice mają działkę pod Łodzią.", exRu: "Батьки мають дачу під Лодзю." },
        { pl: "grill", g: "m", ru: "гриль; шашлики на природі", ex: "W sobotę robimy grilla na działce.", exRu: "У суботу ми смажимо шашлики на дачі.", note: "розм.: robić grilla (знах. в. на -a)" },
        { pl: "wycieczka", g: "f", ru: "поїздка, екскурсія, похід", ex: "W niedzielę jedziemy na wycieczkę w Tatry.", exRu: "У неділю ми їдемо в похід у Татри." },
        { pl: "impreza", g: "f", ru: "вечірка, тусівка; також захід (концерт, змагання)", ex: "W sobotę idę na imprezę urodzinową.", exRu: "У суботу я йду на день народження (вечірку)." },
        { pl: "kac", g: "m", ru: "похмілля", ex: "W niedzielę rano Marek ma kaca.", exRu: "У неділю вранці в Марека похмілля.", note: "mieć kaca (знах. в. на -a)" },
        { pl: "zazwyczaj", ru: "зазвичай", ex: "Zazwyczaj w weekend śpię do dziesiątej.", exRu: "Зазвичай на вихідних я сплю до десятої." },
        { pl: "od czasu do czasu", ru: "час від часу", ex: "Od czasu do czasu chodzę do teatru.", exRu: "Час від часу я ходжу до театру." }
      ],

      grammar: {
        title: "Зворотні дієслова (się) і слова частотності",
        html: `<p>Польське <span class="pl">się</span> — це українське «-ся», але <b>окремим словом</b>. Воно не приростає до дієслова і може «мандрувати» реченням (так само «ся» окремо живе в західноукраїнських говірках: «Як ся маєш?»). Саме дієслово дієвідмінюється як звичайно.</p>
<table class="g">
<tr><th></th><th>myć się</th><th>uczyć się</th><th>spotykać się</th></tr>
<tr><td>ja</td><td class="pl">myję się</td><td class="pl">uczę się</td><td class="pl">spotykam się</td></tr>
<tr><td>ty</td><td class="pl">myjesz się</td><td class="pl">uczysz się</td><td class="pl">spotykasz się</td></tr>
<tr><td>on / ona</td><td class="pl">myje się</td><td class="pl">uczy się</td><td class="pl">spotyka się</td></tr>
<tr><td>my</td><td class="pl">myjemy się</td><td class="pl">uczymy się</td><td class="pl">spotykamy się</td></tr>
<tr><td>wy</td><td class="pl">myjecie się</td><td class="pl">uczycie się</td><td class="pl">spotykacie się</td></tr>
<tr><td>oni / one</td><td class="pl">myją się</td><td class="pl">uczą się</td><td class="pl">spotykają się</td></tr>
</table>
<h4>Де стоїть się</h4>
<ul>
<li><b>Ніколи — на початку речення:</b> <span class="pl">Nazywam się Ola.</span> (не «Się nazywam…»).</li>
<li>Тягнеться <b>ближче до початку</b>, часто одразу після першого слова: <span class="pl">Często się spóźniam.</span> <span class="pl">Jak się nazywasz?</span></li>
<li>Із запереченням зазвичай стає <b>перед nie</b>: <span class="pl">Nigdy się nie spóźniam.</span> Варіант <span class="pl">Nigdy nie spóźniam się.</span> теж правильний, але звучить менш природно.</li>
<li>Може означати «один одного»: <span class="pl">Znamy się od lat.</span> — Ми знайомі багато років.</li>
</ul>
<h4>Зворотність не завжди збігається</h4>
<table class="g">
<tr><th>польською</th><th>українською</th></tr>
<tr><td class="pl">wracać</td><td>повертатися — <b>без się!</b></td></tr>
<tr><td class="pl">zostawać</td><td>залишатися — <b>без się!</b></td></tr>
<tr><td class="pl">opalać się</td><td>засмагати — <b>з się</b></td></tr>
<tr><td class="pl">spieszyć się</td><td>поспішати — <b>з się</b></td></tr>
<tr><td class="pl">nudzić się</td><td>нудьгувати — <b>з się</b></td></tr>
<tr><td><span class="pl">uczyć się</span> + род. в.</td><td>вчити, вивчати щось: <span class="pl">uczę się polskiego</span></td></tr>
</table>
<h4>Як часто?</h4>
<table class="g">
<tr><td class="pl">zawsze</td><td>завжди</td></tr>
<tr><td class="pl">zwykle, zazwyczaj</td><td>зазвичай</td></tr>
<tr><td class="pl">często</td><td>часто</td></tr>
<tr><td class="pl">czasami, od czasu do czasu</td><td>іноді, час від часу</td></tr>
<tr><td class="pl">rzadko</td><td>рідко</td></tr>
<tr><td class="pl">prawie nigdy</td><td>майже ніколи</td></tr>
<tr><td class="pl">nigdy nie</td><td>ніколи не</td></tr>
</table>
<p>Ще корисно: <span class="pl">co sobotę</span> — щосуботи (<span class="pl">co</span> + знах. в.; пор. укр. «що-» у «щосуботи», «щотижня»), <span class="pl">co tydzień</span>, <span class="pl">raz w tygodniu</span>, <span class="pl">dwa razy w miesiącu</span>.</p>
<div class="tip"><b>Подвійне заперечення</b> — як в українській: <span class="pl">nigdy</span>, <span class="pl">nic</span>, <span class="pl">nikt</span> вимагають <span class="pl">nie</span> при дієслові. <span class="pl">Nigdy nie pracuję w weekend.</span> <span class="pl">W niedzielę nic nie robię.</span> «Nigdy pracuję» — груба помилка (так помиляються ті, у кого в голові англійське never).</div>`
      },

      exercises: [
        { type: "choice", q: "Яке речення правильне?", options: ["Często się spóźniam.", "Się często spóźniam.", "Często spóźniam."], answer: 0, explain: "się не може стояти на початку речення і не може зникнути: spóźniać się — зворотне дієслово." },
        { type: "gap", q: "W weekend wreszcie się ___ (ja, wysypiać).", answers: ["wysypiam"], explain: "wysypiać się → (ja) wysypiam się, група -am. się вже стоїть перед дієсловом." },
        { type: "gap", q: "W niedzielę wieczorem ___ (my, wracać) z działki.", answers: ["wracamy"], explain: "wracać — без się, на відміну від українського «повертатися»." },
        { type: "choice", q: "Marek nigdy ___ na pociąg.", options: ["się nie spóźnia", "się spóźnia", "spóźnia"], answer: 0, explain: "Подвійне заперечення: nigdy + nie. się зазвичай стоїть перед nie." },
        { type: "choice", q: "Як сказати «я вчу польську»?", options: ["Uczę się polskiego.", "Uczę polski.", "Uczę się polski."], answer: 0, explain: "uczyć się + родовий: uczę się polskiego. Українське «вчити» означає і «вивчати», і «навчати», а польська їх розрізняє: без się uczyć — це «вчити когось, викладати»." },
        { type: "gap", q: "Latem moi rodzice ___ (opalać się) nad morzem.", answers: ["opalają się", "się opalają"], explain: "opalać się → oni opalają się. Українською «засмагати» — без -ся, польською — з się." },
        { type: "match", q: "З’єднайте слово частотності з перекладом", pairs: [["zawsze", "завжди"], ["zazwyczaj", "зазвичай"], ["od czasu do czasu", "час від часу"], ["rzadko", "рідко"], ["prawie nigdy", "майже ніколи"], ["nigdy", "ніколи"]], explain: "Шкала від «завжди» до «ніколи». З nigdy дієслово завжди вживається з nie." },
        { type: "order", ru: "На дачі ми ніколи не нудьгуємо.", words: ["Na", "działce", "nigdy", "się", "nie", "nudzimy."], alt: ["Nigdy się nie nudzimy na działce.", "Na działce nigdy nie nudzimy się.", "Nigdy nie nudzimy się na działce."], explain: "się тягнеться до початку і стає перед nie; nigdy вимагає nie." },
        { type: "gap", q: "W każdą sobotę ___ (my, spotykać się) z przyjaciółmi w pubie.", answers: ["spotykamy się", "się spotykamy"], explain: "spotykać się z kim — зустрічатися з ким. Форма my: spotykamy się." },
        { type: "translate", ru: "Я повертаюся додому в неділю.", answers: ["Wracam do domu w niedzielę.", "W niedzielę wracam do domu."], explain: "wracać — без się! «Додому» після дієслова руху — do domu." }
      ],

      pronunciation: {
        focus: "dż / dź / dz",
        tip: `<ul>
<li><b>dz</b> — дзвінке «ц», один злитий звук, як українське «дз» у слові «дзвін»: <span class="pl">dzwon</span>, <span class="pl">cudzy</span>, <span class="pl">pieniądze</span>. Не розбивайте його на «д» + «з».</li>
<li><b>dż</b> — тверде злите «дж», як в українських словах «джем», «джміль»: <span class="pl">dżem</span>, <span class="pl">dżungla</span>, <span class="pl">jeżdżę</span>.</li>
<li><b>dź</b> / <b>dzi</b> — м’яке [дж’], дзвінна пара до <span class="pl">ć</span>: <span class="pl">dzień</span>, <span class="pl">dziadek</span>, <span class="pl">niedziela</span>, <span class="pl">jeździć</span>. Схоже на українське «дзь» у слові «дзьоб», але шиплячіше: середня частина язика притиснута до піднебіння. Перед голосним пишеться <b>dzi</b>.</li>
</ul>
<div class="tip">Ряди парні: <span class="pl">c – dz</span>, <span class="pl">cz – dż</span>, <span class="pl">ć – dź</span>. Якщо ви вмієте вимовляти глухий звук, просто «увімкніть голос». Українцям тут легше, ніж багатьом іншим: «дз» і «дж» в українській теж окремі звуки (дзеркало, джерело).</div>`,
        items: [
          { type: "listen", text: "dżem", ru: "джем", note: "тверде dż" },
          { type: "listen", text: "W niedzielę dzwonię do dziadka.", ru: "У неділю я дзвоню дідусеві.", note: "dzi = dź, dz" },
          { type: "minimal", options: ["wodze", "wodzie"], ru: ["віжки, поводи", "(у) воді"] },
          { type: "minimal", options: ["drożdże", "droździe"], ru: ["дріжджі", "(про) дрозда"] },
          { type: "stress", word: "przyjeżdżamy", syllables: ["przy", "jeż", "dża", "my"], answer: 2 },
          { type: "dictation", text: "W niedzielę jeżdżę na działkę do dziadka." }
        ]
      },

      reading: {
        title: "Weekend: plan i rzeczywistość",
        text: "W piątek wieczorem zawsze mam wielki plan na weekend. W sobotę wstaję o siódmej, biegam w parku, a potem uczę się hiszpańskiego. W niedzielę jedziemy na wycieczkę w góry. Brzmi pięknie, prawda?\n\nA teraz rzeczywistość. W piątek idę na imprezę albo spotykam się ze znajomymi i zwykle wracam do domu o trzeciej w nocy. W sobotę rano mam kaca, więc wysypiam się do południa. Hiszpański? Od czasu do czasu otwieram aplikację, ale zazwyczaj tylko patrzę na zieloną sowę i czuję się winny.\n\nW niedzielę jedziemy na działkę do rodziców pod Łodzią. Tata robi grilla, mama opala się na leżaku, a ja leniuchuję w hamaku. Nigdy się tam nie nudzę, bo zawsze jest coś do jedzenia. Kiedy wracamy, w samochodzie rzadko rozmawiamy — wszyscy śpią, oprócz kierowcy, oczywiście.\n\nW poniedziałek koledzy pytają: „Jak tam weekend?” A ja odpowiadam z uśmiechem: „Bardzo aktywny!”",
        glossary: [
          { pl: "rzeczywistość", ru: "реальність, дійсність" },
          { pl: "Brzmi", ru: "звучить" },
          { pl: "sowę", ru: "сову" },
          { pl: "czuję się winny", ru: "почуваюся винним" },
          { pl: "leżaku", ru: "шезлонгу" },
          { pl: "hamaku", ru: "гамаку" },
          { pl: "oprócz", ru: "крім" },
          { pl: "kierowcy", ru: "водія" },
          { pl: "z uśmiechem", ru: "з усмішкою" }
        ],
        questions: [
          { type: "tf", q: "W sobotę rano autor biega w parku.", answer: false, explain: "Це лише план. Насправді в суботу в нього похмілля, і він спить до полудня." },
          { type: "choice", q: "Dlaczego autor czuje się winny?", options: ["Bo nie uczy się hiszpańskiego.", "Bo nie jedzie na działkę.", "Bo wraca późno do domu."], answer: 0, explain: "Він лише зрідка відкриває застосунок і дивиться на зелену сову — тобто не вчить іспанську." },
          { type: "choice", q: "Co robi mama na działce?", options: ["Robi grilla.", "Opala się na leżaku.", "Leniuchuje w hamaku."], answer: 1, explain: "Гриль — у тата, гамак — в автора, а «mama opala się na leżaku»." },
          { type: "tf", q: "Na działce autor często się nudzi.", answer: false, explain: "«Nigdy się tam nie nudzę»." },
          { type: "tf", q: "W drodze powrotnej kierowca nie śpi.", answer: true, explain: "«wszyscy śpią, oprócz kierowcy, oczywiście»." }
        ]
      },

      writing: {
        prompt: "Напишіть допис «Mój typowy weekend» для польського форуму тих, хто вивчає мову: що ви робите завжди, часто, іноді й ніколи; з ким зустрічаєтеся; де відпочиваєте і коли повертаєтеся додому. Використайте зворотні дієслова і хоча б одне подвійне заперечення (nigdy … nie).",
        minWords: 40,
        maxWords: 80,
        useWords: ["zazwyczaj", "od czasu do czasu", "wracać", "działka"],
        checklist: [
          { label: "Щонайменше 2 зворотні дієслова з się", pattern: "(?<!\\p{L})się(?!\\p{L})", min: 2 },
          { label: "Подвійне заперечення: nigdy … nie", pattern: "nigdy(\\s+się)?\\s+nie(?!\\p{L})", min: 1 },
          { label: "Щонайменше 3 слова частотності (zawsze, często, rzadko…)", pattern: "(?<!\\p{L})(zawsze|zwykle|zazwyczaj|często|czasami|czasem|rzadko|nigdy)(?!\\p{L})", min: 3 }
        ],
        model: "Mój typowy weekend? W piątek zazwyczaj spotykam się z przyjaciółmi w pubie, ale nigdy nie wracam do domu późno, bo w sobotę rano gram w tenisa. Potem często robię zakupy na targu. W niedzielę jeżdżę na działkę do rodziców. Tata zawsze robi grilla, a mama opala się w ogrodzie. Ja od czasu do czasu czytam książkę, ale zwykle po prostu leniuchuję w hamaku. Wieczorem wracam do miasta i… znowu jest poniedziałek!"
      }
    },

    // ───────────────────────── Урок 5: повторення ─────────────────────────
    {
      id: "m01l5",
      title: "Powtórka 1",
      titleRu: "Повторення модуля 1",
      topic: "Na osiedlu",
      review: true,
      minutes: 30,
      goals: [
        "Повторити всі типи дієвідмінювання теперішнього часу і чергування",
        "Закріпити знахідний відмінок, зворотні дієслова і слова частотності",
        "Написати підсумковий лист про свій тиждень"
      ],

      vocab: [
        { pl: "osiedle", g: "n", ru: "житловий масив, житловий комплекс", ex: "Mieszkamy na nowym osiedlu pod Krakowem.", exRu: "Ми живемо в новому житловому комплексі під Краковом.", note: "na osiedlu (а не «w»)" },
        { pl: "blok", g: "m", ru: "багатоповерхівка", ex: "Mieszkam w bloku na czwartym piętrze.", exRu: "Я живу в багатоповерхівці на четвертому поверсі (по-нашому — на п’ятому).", note: "parter — наш перший поверх, pierwsze piętro — другий!" },
        { pl: "klatka schodowa", g: "f", ru: "під’їзд, сходова клітка", ex: "Na klatce schodowej pachnie bigosem.", exRu: "У під’їзді пахне бігосом." },
        { pl: "winda", g: "f", ru: "ліфт", ex: "Winda znowu nie działa!", exRu: "Ліфт знову не працює!" },
        { pl: "hałas", g: "m", ru: "шум, галас", ex: "Na naszej ulicy jest straszny hałas.", exRu: "На нашій вулиці страшенний шум." },
        { pl: "remont", g: "m", ru: "ремонт", ex: "Sąsiedzi robią remont od trzech miesięcy.", exRu: "Сусіди вже три місяці роблять ремонт." },
        { pl: "wynajmować", ru: "винаймати (житло); здавати", ex: "Wynajmuję mieszkanie na Pradze.", exRu: "Я винаймаю квартиру на Празі (район Варшави).", note: "wynajmuję, wynajmujesz" },
        { pl: "kawalerka", g: "f", ru: "однокімнатна квартира", ex: "Kawalerka jest mała, ale tania.", exRu: "Однокімнатна квартирка маленька, але дешева." },
        { pl: "czynsz", g: "m", ru: "квартплата; орендна плата", ex: "Czynsz płacę zawsze do dziesiątego.", exRu: "Квартплату я завжди плачу до десятого числа." },
        { pl: "paczkomat", g: "m", ru: "поштомат (InPost)", ex: "Odbieram paczkę z paczkomatu pod blokiem.", exRu: "Я забираю посилку з поштомата біля будинку." }
      ],

      grammar: {
        title: "Підсумок модуля: теперішній час, знахідний, się",
        html: `<p>Модуль 1 — фундамент для всього курсу. Звіртеся з таблицями, перш ніж виконувати вправи.</p>
<h4>1. Чотири типи дієвідмінювання</h4>
<table class="g">
<tr><th>Тип</th><th>ja</th><th>ty</th><th>oni</th><th>Ще приклади</th></tr>
<tr><td>-am / -asz</td><td class="pl">czytam</td><td class="pl">czytasz</td><td class="pl">czytają</td><td class="pl">mam, znam, wracam</td></tr>
<tr><td>-em / -esz</td><td class="pl">rozumiem</td><td class="pl">rozumiesz</td><td class="pl">rozumieją</td><td class="pl">umiem, wiem, jem</td></tr>
<tr><td>-ę / -esz</td><td class="pl">piszę</td><td class="pl">piszesz</td><td class="pl">piszą</td><td class="pl">mogę, chcę, wynajmuję</td></tr>
<tr><td>-ę / -isz, -ysz</td><td class="pl">mówię</td><td class="pl">mówisz</td><td class="pl">mówią</td><td class="pl">płacę, kończę</td></tr>
</table>
<p>Неправильні форми <b>oni</b>: <span class="pl">mają, wiedzą, jedzą</span>. Дієслова на <b>-ować</b> дієвідмінюються з <b>-uj-</b> (як українські на -увати: працюю, малюю): <span class="pl">pracować → pracuję</span>, <span class="pl">wynajmować → wynajmuję</span>.</p>
<h4>2. Чергування</h4>
<table class="g">
<tr><th>Чергування</th><th>Приклад</th></tr>
<tr><td>ć → c</td><td class="pl">płacić → płacę</td></tr>
<tr><td>dź → dz</td><td class="pl">chodzić → chodzę</td></tr>
<tr><td>ś → sz</td><td class="pl">prosić → proszę</td></tr>
<tr><td>ź → ż</td><td class="pl">wozić → wożę</td></tr>
<tr><td>g / ż</td><td class="pl">mogę, możesz, mogą</td></tr>
<tr><td>k / cz</td><td class="pl">piekę, pieczesz, pieką</td></tr>
</table>
<p>У групі -isz чергування лише в <b>ja</b> і <b>oni</b>; у <span class="pl">móc</span> і <span class="pl">piec</span> вихідний приголосний (g, k) залишається в <b>ja</b> і <b>oni</b>, а в інших формах — ż, cz. Українська тут поводиться інакше («печу, печеш, печуть», «можу, можуть» — скрізь ч, ж), тож саме ці форми перевіряйте особливо уважно.</p>
<h4>3. Знахідний відмінок однини</h4>
<table class="g">
<tr><th>Рід</th><th>Закінчення</th><th>Приклад</th></tr>
<tr><td>ж. р.</td><td>-ą + -ę</td><td class="pl">wynajmuję małą kawalerkę</td></tr>
<tr><td>ч. р. (істоти)</td><td>-ego + -a</td><td class="pl">znam nowego sąsiada</td></tr>
<tr><td>ч. р. (неістоти)</td><td>= називний</td><td class="pl">oglądam nowy serial</td></tr>
<tr><td>с. р.</td><td>= називний</td><td class="pl">lubię nasze osiedle</td></tr>
</table>
<div class="tip">Пам’ятайте про <span class="pl">słuchać, szukać, uczyć się</span> — вони вимагають родового: <span class="pl">słucham radia</span>. А після заперечення, зокрема в <span class="pl">nie ma</span>, потрібен родовий, як і в українській («немає ліфта»): <span class="pl">W bloku nie ma windy.</span></div>
<h4>4. Się і частотність</h4>
<ul>
<li><span class="pl">się</span> ніколи не стоїть першим і тягнеться до початку: <span class="pl">Często się spóźniam.</span></li>
<li>Із запереченням: <span class="pl">Nigdy się nie nudzę.</span> — <b>nigdy / nic / nikt + nie</b>.</li>
<li>Без się, на відміну від української: <span class="pl">wracać, zostawać</span>. З się, на відміну від української: <span class="pl">opalać się, spieszyć się, nudzić się</span>.</li>
</ul>
<div class="tip">Не впевнені щодо типу дієслова? Подивіться в словнику форму <b>ty</b>: -asz, -esz, -isz чи -ysz одразу підкажуть усю парадигму.</div>`
      },

      exercises: [
        { type: "gap", q: "Czy ___ (wy, wiedzieć), gdzie jest paczkomat?", answers: ["wiecie"], explain: "wiedzieć → wy wiecie (а oni — wiedzą)." },
        { type: "choice", q: "Dziś nie ___ przyjść, bo mam remont.", options: ["mogę", "może", "umiem"], answer: 0, explain: "Можливість — móc: ja mogę. umieć — навичка, а może — форма «він/вона»." },
        { type: "gap", q: "Czynsz zawsze ___ (ja, płacić) przez internet.", answers: ["płacę"], explain: "płacić → płacę (ć → c у формі ja)." },
        { type: "gap", q: "Oni zawsze ___ (pisać) do mnie na Messengerze.", answers: ["piszą"], explain: "pisać → piszą: s → sz в усіх формах, oni на -ą." },
        { type: "choice", q: "Wynajmuję ___ na Pradze.", options: ["małą kawalerkę", "mała kawalerka", "małej kawalerki"], answer: 0, explain: "wynajmować co? — знах. в. ж. р.: małą kawalerkę." },
        { type: "gap", q: "Na klatce schodowej często spotykam ___ (nowy sąsiad).", answers: ["nowego sąsiada"], explain: "spotykać kogo? — ч. р., істота: nowego sąsiada (як укр. «нового сусіда»)." },
        { type: "choice", q: "Kogo zapraszasz na urodziny?", options: ["Mojego brata i jego dziewczynę.", "Mój brat i jego dziewczyna.", "Mojemu bratu i jego dziewczynie."], answer: 0, explain: "zapraszać kogo? — знахідний: mojego brata, dziewczynę (jego не відмінюється, як і укр. «його»)." },
        { type: "match", q: "З’єднайте інфінітив із формою «oni»", pairs: [["mieć", "mają"], ["wiedzieć", "wiedzą"], ["jeść", "jedzą"], ["móc", "mogą"], ["chcieć", "chcą"], ["rozumieć", "rozumieją"]], explain: "Форма oni завжди на -ą; у wiedzieć і jeść повертається -dz-, у rozumieć — -eją." },
        { type: "order", ru: "Ми ніколи не запізнюємося на роботу.", words: ["Nigdy", "się", "nie", "spóźniamy", "do", "pracy."], alt: ["Nigdy nie spóźniamy się do pracy.", "Do pracy nigdy się nie spóźniamy.", "Do pracy nigdy nie spóźniamy się."], explain: "Подвійне заперечення nigdy + nie; «запізнюватися на роботу» — spóźniać się do pracy (з do, а не na)." },
        { type: "choice", q: "Яке речення правильне?", options: ["W weekend nigdy się nie nudzę.", "W weekend nigdy się nudzę.", "W weekend nie nigdy się nudzę."], answer: 0, explain: "nigdy + nie + дієслово; się — перед nie." },
        { type: "choice", q: "W tramwaju zawsze słucham ___.", options: ["podcastu", "podcast", "podcastem"], answer: 0, explain: "słuchać + родовий: słucham podcastu, muzyki, radia." },
        { type: "gap", q: "Rano zawsze ___ (ja, myć się) w pośpiechu.", answers: ["myję się", "się myję"], explain: "myć się → myję się (група -ę/-esz: myję, myjesz)." },
        { type: "translate", ru: "Я не знаю, де живе новий сусід.", answers: ["Nie wiem, gdzie mieszka nowy sąsiad.", "Nie wiem, gdzie nowy sąsiad mieszka."], explain: "Факт із підрядним реченням (gdzie…) — wiedzieć: nie wiem." },
        { type: "translate", ru: "Ми повертаємося додому пізно.", answers: ["Wracamy do domu późno.", "Późno wracamy do domu."], explain: "wracać — без się; «додому» — do domu." }
      ],

      pronunciation: {
        focus: "Усі шиплячі й свистячі: s–sz–ś, z–ż–ź, c–cz–ć, dz–dż–dź",
        tip: `<p>За модуль ви пройшли всю систему польських «шиплячих». Вона дуже логічна: чотири ряди по три звуки.</p>
<table class="g">
<tr><th></th><th>як в українській (с, з, ц, дз)</th><th>тверді (ш, ж, ч, дж)</th><th>м’які (ш’, ж’, ч’, дж’)</th></tr>
<tr><td>s / sz / ś</td><td class="pl">sok</td><td class="pl">szum</td><td class="pl">śpi</td></tr>
<tr><td>z / ż (rz) / ź</td><td class="pl">zebra</td><td class="pl">żebra</td><td class="pl">źle</td></tr>
<tr><td>c / cz / ć</td><td class="pl">cena</td><td class="pl">czas</td><td class="pl">ćma</td></tr>
<tr><td>dz / dż / dź</td><td class="pl">dzwon</td><td class="pl">dżem</td><td class="pl">dzień</td></tr>
</table>
<p>М’які звуки перед голосним пишуться через <b>i</b>: <span class="pl">siostra</span>, <span class="pl">zima</span>, <span class="pl">ciocia</span>, <span class="pl">dziadek</span>.</p>
<div class="tip">Перші два стовпчики українцям даються легко: тверде <span class="pl">cz</span> звучить майже як українське «ч», sz — як «ш». Головні помилки українськомовних — у третьому стовпчику: «сь» замість шиплячого <span class="pl">ś</span>, «ць» замість ć (ciocia — не «цьоця»), «зь» замість ź.</div>`,
        items: [
          { type: "listen", text: "Cześć, Zosiu! Dzisiaj jem chleb z dżemem.", ru: "Привіт, Зосю! Сьогодні я їм хліб із джемом.", note: "cz, ś, si, z, dzi, dż" },
          { type: "listen", text: "Szczęśliwy szczur szuka sera.", ru: "Щасливий щур шукає сиру." },
          { type: "minimal", options: ["nosze", "nosie"], ru: ["ноші", "(на) носі"] },
          { type: "minimal", options: ["koce", "kocie"], ru: ["пледи, ковдри", "(про) кота"] },
          { type: "stress", word: "paczkomat", syllables: ["pacz", "ko", "mat"], answer: 1 },
          { type: "stress", word: "kawalerka", syllables: ["ka", "wa", "ler", "ka"], answer: 2 },
          { type: "dictation", text: "Sąsiadka z czwartego piętra znowu robi remont." }
        ]
      },

      reading: {
        title: "Sąsiedzi z Osiedla Słonecznego",
        text: "Pani Halina (blok 7): Drodzy sąsiedzi! Mieszkam tu od trzydziestu lat i nigdy nie piszę skarg, ale teraz muszę. Ktoś z czwartego piętra od miesiąca robi remont. Codziennie o siódmej rano słyszę wiertarkę i straszny hałas. Rozumiem, że remont to remont, ale w sobotę chcę się wyspać!\n\nTomek (blok 7, czwarte piętro): Pani Halino, to ja. Bardzo przepraszam! Od września wynajmuję tu kawalerkę i chcę ją szybko wyremontować. Obiecuję, że w weekendy już nie wiercę. Zapraszam panią na kawę i sernik na przeprosiny.\n\nKasia (blok 5): Czy ktoś wie, dlaczego winda znowu nie działa? Mam wózek i małe dziecko, a mieszkam na dziesiątym piętrze. Codziennie odbieram paczki z paczkomatu i chodzę po schodach. Siłowni już nie potrzebuję!\n\nPan Marian (blok 3): A ja mam inny problem. Nowy sąsiad z góry codziennie o szóstej rano gra na perkusji. Nie znam go, ale już go nie lubię. Czy ktoś zna jego numer telefonu?\n\nPan Zdzisław (administrator): Windę naprawiamy jutro rano. Przy okazji przypominam: czynsz płacimy do dziesiątego, a rowerów nie zostawiamy na klatce schodowej!\n\nPani Halina: Panie Tomku, przyjmuję zaproszenie. Ale sernik piekę ja. Wiem, że młodzi ludzie nie umieją piec.\n\nTomek: Świetnie! W takim razie ja kupuję kwiaty i dobrą kawę. A perkusista z bloku 3? Jego też zapraszamy!",
        glossary: [
          { pl: "skarg", ru: "скарг" },
          { pl: "wiertarkę", ru: "дриль" },
          { pl: "perkusji", ru: "ударній установці, барабанах" },
          { pl: "Obiecuję", ru: "обіцяю" },
          { pl: "wiercę", ru: "свердлю" },
          { pl: "na przeprosiny", ru: "на знак вибачення" },
          { pl: "wózek", ru: "дитячий візок" },
          { pl: "Przy okazji", ru: "до речі, при нагоді" },
          { pl: "przyjmuję zaproszenie", ru: "приймаю запрошення" },
          { pl: "piekę", ru: "печу" }
        ],
        questions: [
          { type: "tf", q: "Pani Halina często pisze skargi.", answer: false, explain: "«nigdy nie piszę skarg, ale teraz muszę»." },
          { type: "choice", q: "Kto robi remont?", options: ["Pan Zdzisław.", "Tomek z czwartego piętra.", "Kasia z bloku 5."], answer: 1, explain: "Томек зізнається: «Pani Halino, to ja»." },
          { type: "choice", q: "Dlaczego winda jest dla Kasi bardzo ważna?", options: ["Bo ma wózek i mieszka na dziesiątym piętrze.", "Bo ma ciężki rower.", "Bo robi remont."], answer: 0, explain: "«Mam wózek i małe dziecko, a mieszkam na dziesiątym piętrze»." },
          { type: "tf", q: "Pani Halina przyjmuje zaproszenie Tomka.", answer: true, explain: "«Panie Tomku, przyjmuję zaproszenie»." },
          { type: "tf", q: "Sernik piecze Tomek.", answer: false, explain: "Сирник пече пані Галина: «sernik piekę ja». Томек купує квіти й каву." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля. Напишіть лист польському другові про свій звичайний тиждень: де і як ви живете (будинок, район, сусіди), чим зайняті в будні (що робите, що можете і чого не хочете), як проводите вільний час і вихідні (як часто?). Наприкінці запросіть друга кудись.",
        minWords: 60,
        maxWords: 90,
        useWords: ["osiedle", "blok", "winda", "wynajmować"],
        checklist: [
          { label: "Щонайменше 5 дієслів у 1-й особі різних типів (-am, -em, -ę)", pattern: "\\p{L}{2,}(am|em|ę)(?!\\p{L})", min: 5 },
          { label: "Щонайменше 2 зворотні дієслова з się", pattern: "(?<!\\p{L})się(?!\\p{L})", min: 2 },
          { label: "Знахідний: прикметник + іменник ж. р. (nową wystawę) або назва істоти ч. р. (mojego brata)", pattern: "\\p{L}+(ą\\s+\\p{L}+ę|ego\\s+\\p{L}+a)(?!\\p{L})", min: 1 }
        ],
        model: "Cześć, Paweł! Od września wynajmuję kawalerkę na osiedlu w Gdańsku. Mój blok jest stary i winda często nie działa, ale sąsiedzi są mili. Na co dzień pracuję w biurze: piszę raporty i dzwonię do klientów. Pracę kończę o szesnastej, bo nie chcę robić nadgodzin. W wolnym czasie chodzę na siłownię albo czytam dobry kryminał. W weekend zawsze się wysypiam, a w niedzielę spotykam się z przyjaciółmi. Nigdy się nie nudzę! Zapraszam cię na kawę i na nową wystawę w muzeum. Pozdrawiam, Ania"
      }
    }
  ]
});
