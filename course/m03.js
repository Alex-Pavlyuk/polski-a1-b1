// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m03",
  n: 3,
  level: "A2",
  title: "Zakupy i jedzenie",
  titleRu: "Покупки та їжа",
  summary: "Ви купуєте продукти в магазині й на ринку, замовляєте страви в ресторані, називаєте ціни та розраховуєтеся. Упевнено вживаєте родовий відмінок однини й множини та узгоджуєте числівники з іменниками.",
  lessons: [

    // ───────────────────────── LEKCJA 1 ─────────────────────────
    {
      id: "m03l1",
      title: "Nie ma twarogu!",
      titleRu: "Родовий відмінок: закінчення і заперечення",
      topic: "W sklepie",
      review: false,
      minutes: 30,
      goals: [
        "Утворювати родовий відмінок (dopełniacz) однини іменників і прикметників",
        "Вибирати закінчення -a чи -u в чоловічому роді та -y чи -i в жіночому",
        "Ставити dopełniacz після заперечення (nie mam, nie ma, nie lubię) і після дієслів szukać, potrzebować, brakować",
        "Порозумітися в магазині: запитати про товар і зрозуміти, що його немає"
      ],

      vocab: [
        { pl: "sklep spożywczy", g: "m", ru: "продуктовий магазин", ex: "Na rogu jest mały sklep spożywczy.", exRu: "На розі є маленький продуктовий магазин." },
        { pl: "kasa samoobsługowa", g: "f", ru: "каса самообслуговування", ex: "Wolę kasę samoobsługową, bo jest szybciej.", exRu: "Я віддаю перевагу касі самообслуговування — так швидше." },
        { pl: "kolejka", g: "f", ru: "черга", note: "черга до каси — kolejka do kasy", ex: "Kolejka do kasy jest dziś bardzo długa.", exRu: "Черга до каси сьогодні дуже довга." },
        { pl: "koszyk", g: "m", ru: "кошик (у магазині)", ex: "Biorę koszyk, bo nie potrzebuję wózka.", exRu: "Беру кошик: візок мені не потрібен." },
        { pl: "reklamówka", g: "f", ru: "поліетиленовий пакет", note: "у польських магазинах пакет платний", ex: "Nie potrzebuję reklamówki, mam swoją torbę.", exRu: "Мені не потрібен пакет, у мене своя торба." },
        { pl: "półka", g: "f", ru: "полиця", ex: "Na półce nie ma już masła.", exRu: "На полиці вже немає масла." },
        { pl: "nabiał", g: "m", ru: "молочні продукти", note: "тільки однина; род. в. nabiału", ex: "Dział z nabiałem jest na końcu sklepu.", exRu: "Відділ молочних продуктів — у кінці магазину." },
        { pl: "twaróg", g: "m", ru: "кисломолочний сир", note: "род. в. twarogu (ó → o, як укр. ріг → рогу); твердий сир — ser", ex: "Nie ma twarogu, jest tylko serek wiejski.", exRu: "Кисломолочного сиру немає, є тільки зернистий." },
        { pl: "mąka", g: "f", ru: "борошно", note: "не плутати з męka — му́ка, страждання", ex: "Do pierogów potrzebuję mąki.", exRu: "Для вареників мені потрібне борошно." },
        { pl: "masło", g: "n", ru: "вершкове масло", note: "олія — olej (як і в українській, це різні слова)", ex: "Masło jest w lodówce, a olej w szafce.", exRu: "Масло в холодильнику, а олія — у шафці." },
        { pl: "szukać", ru: "шукати", note: "+ dop.: szukam chleba", ex: "Przepraszam, szukam cukru.", exRu: "Перепрошую, я шукаю цукор." },
        { pl: "potrzebować", ru: "потребувати; мені потрібно", note: "+ dop., як укр. «потребувати чого»; potrzebuję, potrzebujesz", ex: "Potrzebuję chleba i mleka.", exRu: "Мені потрібні хліб і молоко." },
        { pl: "brakować", ru: "бракувати, не вистачати", note: "brakuje + komu + czego (як укр. «кому бракує чого»)", ex: "Brakuje nam jajek do ciasta.", exRu: "Нам бракує яєць для пирога." },
        { pl: "promocja", g: "f", ru: "акція, знижка", note: "w promocji — за акцією", ex: "Kawa jest dziś w promocji.", exRu: "Кава сьогодні за акцією." }
      ],

      grammar: {
        title: "Dopełniacz (родовий відмінок) однини й заперечення",
        html: `<p>Родовий відмінок — <b>dopełniacz</b> — відповідає на питання <span class="pl">kogo? czego?</span> (кого? чого?). Це один із найчастіших відмінків: він потрібен після заперечення, після слів кількості, після багатьох прийменників і деяких дієслів. Почнімо із закінчень і заперечення.</p>
<h4>Закінчення</h4>
<table class="g">
<tr><th>Рід</th><th>Називний</th><th>Родовий</th><th>Прикметник</th></tr>
<tr><td>ч. р. істоти</td><td class="pl">brat, klient, pies</td><td class="pl">brata, klienta, psa</td><td class="pl">dobrego</td></tr>
<tr><td>ч. р. неістоти</td><td class="pl">chleb, cukier</td><td class="pl">chleba, cukru</td><td class="pl">świeżego</td></tr>
<tr><td>ж. р.</td><td class="pl">kawa, mąka, kuchnia, sól</td><td class="pl">kawy, mąki, kuchni, soli</td><td class="pl">dobrej</td></tr>
<tr><td>с. р.</td><td class="pl">mleko, masło</td><td class="pl">mleka, masła</td><td class="pl">zimnego</td></tr>
</table>
<p><b>Жіночий рід:</b> зазвичай <b>-y</b> (<span class="pl">woda → wody, ryba → ryby</span>), але <b>-i</b> після k, g і м’яких приголосних (<span class="pl">mąka → mąki, Ola → Oli, kuchnia → kuchni</span>). Ж. р. на приголосний: <span class="pl">sól → soli, noc → nocy</span>. Збіг з українською разючий: «води, риби, кухні, солі». Лише після k, g польська пише -i, тоді як ми пишемо «руки», «ноги».</p>
<p>Займенники: <span class="pl">ten, to → tego; ta → tej; mój → mojego; moja → mojej</span>.</p>
<h4>Чоловічий рід: -a чи -u?</h4>
<ul>
<li><b>-a</b> — усі істоти (<span class="pl">brata, kota, klienta</span>) і частина предметів, зокрема багато продуктів: <span class="pl">chleba, sera, pomidora, ogórka, banana</span>.</li>
<li><b>-u</b> — більшість неістот, особливо речовини й абстрактні поняття: <span class="pl">cukru, soku, ryżu, twarogu, czasu, sklepu, domu</span>.</li>
</ul>
<p>Українцям тут легше: у нас теж є вибір між -а та -у, і він часто збігається (цукру, соку, рису, часу, дому). Але не завжди: укр. «сиру» — пол. <span class="pl">sera</span>.</p>
<div class="tip">Залізного правила немає — вчіть родовий разом зі словом: <span class="pl">ser, sera</span>; <span class="pl">twaróg, twarogu</span>. Стежте за чергуваннями: <span class="pl">twaróg → twarogu</span> (ó → o, як укр. ріг → рогу, сіль → солі), <span class="pl">cukier → cukru, pies → psa</span> (випадає e, як укр. пес → пса).</div>
<h4>Заперечення = dopełniacz</h4>
<p>Якщо дієслово вимагає знахідного відмінка, то в заперечному реченні додаток <b>завжди</b> переходить у родовий:</p>
<div class="ex"><span class="pl">Mam czas. → Nie mam czasu.</span> — У мене немає часу.</div>
<div class="ex"><span class="pl">Lubię kawę. → Nie lubię kawy.</span> — Я не люблю кави.</div>
<div class="ex"><span class="pl">Jest mleko. → Nie ma mleka.</span> — Молока немає. (мин.: <span class="pl">nie było mleka</span>, майб.: <span class="pl">nie będzie mleka</span> — як укр. «не було молока», «не буде молока»)</div>
<div class="tip"><b>Пастка 1.</b> В українській після заперечення можливі обидва відмінки: «не бачив цієї книжки» і розмовне «не бачив цю книжку». У польській — лише родовий: <span class="pl">Nie widziałem tej książki.</span> Тож орієнтуйтеся на перший, «книжний» варіант.<br><b>Пастка 2.</b> Після <span class="pl">nie jest</span> родового НЕМАЄ: <span class="pl">To nie jest dobry sklep.</span> Dopełniacz заміняє лише знахідний відмінок і стоїть після <span class="pl">nie ma / nie było / nie będzie</span>.</div>
<h4>Дієслова, які завжди вимагають dopełniacz</h4>
<p><span class="pl">szukać</span> (шукати), <span class="pl">potrzebować</span> (потребувати), <span class="pl">brakować</span> (бракувати, не вистачати), <span class="pl">słuchać</span> (слухати), <span class="pl">uczyć się</span> (учитися):</p>
<div class="ex"><span class="pl">Szukam mąki.</span> — Я шукаю борошно.</div>
<div class="ex"><span class="pl">Potrzebuję chleba.</span> — Мені потрібен хліб.</div>
<div class="ex"><span class="pl">Brakuje nam mleka.</span> — Нам бракує молока.</div>
<div class="tip">Українське «мені потрібен хліб» (наз. в.) польською — <span class="pl">potrzebuję chleba</span>, дослівно «потребую хліба», як і в нас «потребувати чого». А от «шукаю борошно», «слухаю музику», «вчу польську» українською — зі знахідним, тому тут помиляються найчастіше. «Слухати музику» — <span class="pl">słuchać muzyki</span>, а не «muzykę». «Вчу польську» — <span class="pl">uczę się polskiego</span> (пор. «вчуся польської»).</div>
<p>І, як в українській, родовий виражає належність: <span class="pl">koszyk mamy</span> — кошик мами.</p>
<div class="tip">Хибний друг: <span class="pl">sklep</span> — це «магазин, крамниця», а зовсім не «склеп».</div>`
      },

      exercises: [
        { type: "choice", q: "W lodówce nie ma ___.", options: ["mleko", "mleka", "mleku"], answer: 1,
          explain: "Nie ma + dopełniacz. Mleko — середній рід, закінчення -a: mleka (як укр. «немає молока»)." },
        { type: "gap", q: "Nie lubię ___ (zielona herbata).", answers: ["zielonej herbaty"],
          explain: "Lubić вимагає знахідного, але із запереченням — родовий: прикметник ж. р. -ej, herbata → herbaty." },
        { type: "gap", q: "Szukam ___ (twaróg), ale nigdzie go nie ma.", answers: ["twarogu"],
          explain: "Szukać завжди + dopełniacz (українською «шукаю сир» — знахідний!). Twaróg → twarogu: ó переходить в o (як ріг → рогу), закінчення -u." },
        { type: "choice", q: "Potrzebuję ___ do pierogów.", options: ["mąka", "mąkę", "mąki"], answer: 2,
          explain: "Potrzebować + dopełniacz. У ж. р. після k закінчення -i: mąka → mąki." },
        { type: "match", q: "З’єднайте називний відмінок із родовим",
          pairs: [["chleb", "chleba"], ["cukier", "cukru"], ["sól", "soli"], ["jajko", "jajka"], ["kawa", "kawy"], ["sok", "soku"]],
          explain: "Chleb — продукт на -a; cukier і sok — речовини на -u (у cukier випадає e); sól — ж. р. на м’який приголосний → -i; jajko (с. р.) → -a; kawa → -y. Майже як укр. хліба, цукру, соку, солі." },
        { type: "order", ru: "У цьому магазині немає свіжого хліба.", words: ["W", "tym", "sklepie", "nie", "ma", "świeżego", "chleba."],
          alt: ["Nie ma świeżego chleba w tym sklepie."],
          explain: "Nie ma + dopełniacz: świeży chleb → świeżego chleba (прикметник ч. р. -ego)." },
        { type: "gap", q: "Kupiłam ser, ale nie kupiłam ___ (masło).", answers: ["masła"],
          explain: "Kupić + знахідний, але із запереченням — родовий: masło → masła." },
        { type: "choice", q: "Яке речення правильне?", options: ["To nie jest dobry sklep.", "To nie jest dobrego sklepu."], answer: 0,
          explain: "Після «nie jest» залишається називний відмінок. Dopełniacz з’являється лише замість знахідного і в конструкції nie ma." },
        { type: "translate", ru: "Я не п’ю кави.", answers: ["Nie piję kawy.", "Ja nie piję kawy."],
          explain: "Pić + знахідний (piję kawę), із запереченням — родовий: nie piję kawy — так само, як укр. «не п’ю кави»." },
        { type: "gap", q: "W samochodzie zawsze słucham ___ (polskie radio).", answers: ["polskiego radia"],
          explain: "Słuchać + dopełniacz, навіть без заперечення: polskie radio → polskiego radia (с. р.: -ego, -a)." }
      ],

      pronunciation: {
        focus: "Групи приголосних: szcz, chrz, ść",
        tip: `<p><b>szcz</b> — це два звуки підряд: тверде [ш] + тверде [ч]. Для українців це просто: так само звучить наше <b>щ</b> [шч]. <span class="pl">barszcz</span> ≈ «барщ», тобто [баршч]. Язик піднятий, губи злегка витягнуті, усе тверде.</p>
<p><b>chrz</b> — [х] + [ш]: після глухого <i>ch</i> сполучення <i>rz</i> оглушується. <span class="pl">chrzan</span> ≈ «хшан», а от у <span class="pl">chrupiący</span> — просто [хр].</p>
<p><b>ść</b> — два м’які звуки: [ш’] (щось середнє між «сь» і «ш») + [ч’] (щось середнє між «ць» і м’яким «ч»). Українське ч тверде, тому ć треба свідомо пом’якшувати. <span class="pl">jeść, ość, część</span>. Не плутайте з твердим <b>st</b>: <span class="pl">jeść</span> (їсти) — <span class="pl">jest</span> (є).</p>
<p>Порада: спершу вимовляйте групу повільно, по звуках — <span class="pl">sz-cz</span>, <span class="pl">ch-sz</span>, <span class="pl">ś-ć</span>, — потім прискорюйтеся.</p>`,
        items: [
          { type: "listen", text: "barszcz", ru: "борщ", note: "у кінці [шч] — як наше «щ» у слові «борщ»" },
          { type: "listen", text: "szczypta soli", ru: "дрібка солі" },
          { type: "listen", text: "chrzan", ru: "хрін", note: "chrz = [хш]" },
          { type: "minimal", options: ["jeść", "jest"], ru: ["їсти", "є (від «бути»)"] },
          { type: "minimal", options: ["ość", "oś"], ru: ["риб’яча кістка", "вісь"] },
          { type: "stress", word: "szczypiorek", syllables: ["szczy", "pio", "rek"], answer: 1 },
          { type: "stress", word: "chrupiący", syllables: ["chru", "pią", "cy"], answer: 1 },
          { type: "dictation", text: "Nie ma już chrzanu ani szczypiorku." }
        ]
      },

      reading: {
        title: "Sernik dla teściowej",
        text: "W sobotę wieczorem Marek idzie do małego sklepu spożywczego na rogu. Jutro przyjeżdża teściowa, a Marek obiecał, że upiecze sernik. Ma listę: twaróg, mąka, cukier, jajka i masło.\n\nMarek bierze koszyk i szuka nabiału. Na półce jest jogurt, jest kefir, ale nie ma twarogu! „Przykro mi, dziś nie mamy już twarogu – mówi sprzedawczyni. – Jest za to promocja na serek wiejski”. Marek nie lubi serka wiejskiego, ale nie ma wyboru. Potem okazuje się, że brakuje też mąki. Marek dzwoni do żony: „Kochanie, nie ma twarogu ani mąki!”. Żona się śmieje: „To kup gotowy sernik”.\n\nNa szczęście obok kasy stoi lodówka z gotowymi sernikami. Marek nie chce stać w długiej kolejce, więc idzie do kasy samoobsługowej. Kasa mówi: „Nieoczekiwany przedmiot w obszarze pakowania”. Marek nie rozumie tego komunikatu, ale w końcu płaci telefonem. Reklamówki nie potrzebuje – ma plecak.\n\nW domu przekłada sernik na ładny talerz i posypuje go cukrem pudrem. Teściowa nigdy się nie dowie!",
        glossary: [
          { pl: "teściowa", ru: "теща" },
          { pl: "upiecze", ru: "спече" },
          { pl: "serek wiejski", ru: "зернистий сир" },
          { pl: "nie ma wyboru", ru: "у нього немає вибору" },
          { pl: "okazuje się", ru: "виявляється" },
          { pl: "Nieoczekiwany przedmiot w obszarze pakowania", ru: "«Неочікуваний предмет у зоні пакування» — знаменита фраза кас самообслуговування" },
          { pl: "komunikatu", ru: "повідомлення" },
          { pl: "przekłada", ru: "перекладає" },
          { pl: "posypuje", ru: "посипає" },
          { pl: "się nie dowie", ru: "не дізнається" }
        ],
        questions: [
          { type: "tf", q: "Marek robi zakupy w dużym supermarkecie.", answer: false,
            explain: "Він іде do małego sklepu spożywczego na rogu — до маленької крамниці на розі." },
          { type: "tf", q: "W sklepie nie ma twarogu.", answer: true,
            explain: "«Na półce jest jogurt, jest kefir, ale nie ma twarogu!»" },
          { type: "choice", q: "Czego jeszcze brakuje w sklepie?", options: ["cukru", "mąki", "jajek"], answer: 1,
            explain: "«Potem okazuje się, że brakuje też mąki.»" },
          { type: "choice", q: "Dlaczego Marek nie potrzebuje reklamówki?", options: ["Bo ma plecak.", "Bo reklamówki są drogie.", "Bo sklep nie ma reklamówek."], answer: 0,
            explain: "«Reklamówki nie potrzebuje – ma plecak.»" },
          { type: "tf", q: "Teściowa wie, że sernik jest ze sklepu.", answer: false,
            explain: "Марек перекладає готовий сирник на гарну тарілку: «Teściowa nigdy się nie dowie!»" }
        ]
      },

      writing: {
        prompt: "Ви живете у Варшаві разом із другом Кубою. Увечері він іде до магазину. Напишіть йому повідомлення: 1) чого немає в холодильнику (nie ma…); 2) що треба купити і навіщо (potrzebujemy…); 3) чого не купувати і чому; 4) де зараз акція.",
        minWords: 40, maxWords: 80,
        useWords: ["potrzebować", "promocja", "twaróg", "mąka"],
        checklist: [
          { label: "Щонайменше 3 заперечення (nie ma / nie kupuj / nie piję…)", pattern: "\\bnie\\s+\\p{L}+", min: 3 },
          { label: "Дієслово potrzebować або szukać з родовим", pattern: "potrzebuj|szuka", min: 1 },
          { label: "Щонайменше 2 прикметники в dopełniaczu (-ego / -ej)", pattern: "\\p{L}+(ego|ej)\\b", min: 2 }
        ],
        model: "Cześć Kuba!\nSprawdziłam lodówkę i niestety nie ma mleka ani masła. Brakuje też chleba. W niedzielę robię pierogi ruskie, więc potrzebujemy twarogu i mąki. Nie kupuj żółtego sera, bo nikt go nie je. W Lidlu jest promocja na kawę, ale ja nie piję kawy, więc kup ją tylko dla siebie. Szukam też dobrego dżemu truskawkowego – może coś znajdziesz?\nDzięki!\nOla"
      }
    },

    // ───────────────────────── LEKCJA 2 ─────────────────────────
    {
      id: "m03l2",
      title: "Kilo, słoik, trochę",
      titleRu: "Родовий відмінок після слів кількості",
      topic: "Na targu",
      review: false,
      minutes: 30,
      goals: [
        "Ставити dopełniacz після слів кількості (dużo, mało, trochę, kilka, ile) і мір (kilo, słoik, pęczek)",
        "Упізнавати й утворювати родовий множини найчастіших продуктів (pomidorów, jabłek, truskawek)",
        "Купувати на ринку: просити потрібну кількість, питати про свіжість і стиглість"
      ],

      vocab: [
        { pl: "targ", g: "m", ru: "ринок, базар", note: "iść na targ — іти на ринок", ex: "W sobotę rano chodzimy na targ.", exRu: "У суботу вранці ми ходимо на ринок." },
        { pl: "stragan", g: "m", ru: "прилавок, ятка", ex: "Na tym straganie są najlepsze pomidory.", exRu: "На цій ятці найкращі помідори." },
        { pl: "pół kilo", ru: "пів кіло", note: "не відмінюється; + dop.", ex: "Wystarczy mi pół kilo czereśni.", exRu: "Мені вистачить пів кіло черешень." },
        { pl: "deko", ru: "10 грамів", note: "розм. від dekagram, не відмінюється; кажуть і deka", ex: "Poproszę dwadzieścia deko szynki.", exRu: "Мені 200 грамів шинки, будь ласка." },
        { pl: "słoik", g: "m", ru: "скляна банка", ex: "Babcia dała nam słoik miodu.", exRu: "Бабуся дала нам банку меду." },
        { pl: "puszka", g: "f", ru: "бляшанка, бляшана банка", ex: "Do sałatki potrzebuję puszki kukurydzy.", exRu: "Для салату мені потрібна бляшанка кукурудзи." },
        { pl: "pęczek", g: "m", ru: "пучок", ex: "Kupiłam pęczek koperku i pęczek rzodkiewek.", exRu: "Я купила пучок кропу і пучок редиски." },
        { pl: "kawałek", g: "m", ru: "шматок, шматочок", ex: "Poproszę kawałek tego sera.", exRu: "Мені шматочок ось цього сиру, будь ласка." },
        { pl: "kilka", ru: "кілька", note: "+ род. мн.: kilka jabłek (як укр. «кілька яблук»)", ex: "Mam w lodówce kilka jajek.", exRu: "У мене в холодильнику кілька яєць." },
        { pl: "sporo", ru: "чимало, досить багато", note: "+ dop.", ex: "Wydałam dziś sporo pieniędzy.", exRu: "Я сьогодні витратила чимало грошей." },
        { pl: "dojrzały", ru: "стиглий", ex: "Te pomidory są już dojrzałe.", exRu: "Ці помідори вже стиглі." },
        { pl: "ważyć / zważyć", ru: "зважувати / зважити", ex: "Może pani zważyć te ziemniaki?", exRu: "Можете зважити цю картоплю?" },
        { pl: "truskawki", g: "pl", ru: "полуниці", note: "садові полуниці; лісові суниці — poziomki", ex: "Polskie truskawki są najlepsze w czerwcu.", exRu: "Польські полуниці найкращі в червні." },
        { pl: "ogórek kiszony", g: "m", ru: "квашений (солоний) огірок", ex: "Ogórki kiszone babcia robi sama.", exRu: "Квашені огірки бабуся робить сама." }
      ],

      grammar: {
        title: "Dopełniacz після слів кількості; родовий множини",
        html: `<p>Після слів, що позначають кількість, польська — як і українська — вживає родовий відмінок. Логіка та сама: «багато яблук», «банка меду», «кілька помідорів».</p>
<h4>1. Слова кількості</h4>
<p><span class="pl">dużo, mało, trochę, sporo, kilka, ile?, więcej, mniej, za dużo</span> + dopełniacz.</p>
<ul>
<li>Незлічуване → род. <b>одн.</b>: <span class="pl">dużo mleka, trochę cukru, mało czasu</span>.</li>
<li>Злічуване → род. <b>мн.</b>: <span class="pl">dużo jabłek, kilka pomidorów, mało ludzi</span>.</li>
</ul>
<h4>2. Міри та упаковки</h4>
<table class="g">
<tr><th>Міра</th><th>Приклад</th></tr>
<tr><td class="pl">kilo, pół kilo, deko</td><td class="pl">kilo ziemniaków, pół kilo truskawek, dwadzieścia deko szynki</td></tr>
<tr><td class="pl">butelka, karton</td><td class="pl">butelka wody, karton mleka</td></tr>
<tr><td class="pl">słoik, puszka</td><td class="pl">słoik miodu, puszka kukurydzy</td></tr>
<tr><td class="pl">kawałek, pęczek, opakowanie</td><td class="pl">kawałek sera, pęczek koperku, opakowanie jajek</td></tr>
</table>
<div class="tip"><span class="pl">kilo</span> і <span class="pl">deko</span> не відмінюються: <span class="pl">dwa kilo, pięć kilo</span>. 10 deko = 100 г. У польському магазині ковбасу й сир просять саме в «деко»: <span class="pl">Poproszę dwadzieścia deko sera.</span> — 200 г сиру.</div>
<h4>3. Родовий множини: основні моделі</h4>
<table class="g">
<tr><th>Тип</th><th>Наз. мн.</th><th>Род. мн.</th></tr>
<tr><td>ч. р. → <b>-ów</b> (пор. укр. -ів)</td><td class="pl">pomidory, ziemniaki, ogórki</td><td class="pl">pomidorów, ziemniaków, ogórków</td></tr>
<tr><td>ж. р. і с. р. → <b>нульове</b></td><td class="pl">truskawki, jabłka, jajka, cytryny</td><td class="pl">truskawek, jabłek, jajek, cytryn</td></tr>
<tr><td>м’яка основа → <b>-i</b></td><td class="pl">wiśnie, czereśnie</td><td class="pl">wiśni, czereśni</td></tr>
<tr><td>прикметники → <b>-ych / -ich</b></td><td class="pl">świeże, polskie</td><td class="pl">świeżych, polskich</td></tr>
</table>
<p>У формах із нульовим закінченням часто з’являється вставне <b>e</b>: <span class="pl">truskawka → truskawek, jajko → jajek, marchewka → marchewek</span> — як в українській «пісня → пісень», «яйце → яєць».</p>
<div class="tip">Запам’ятайте особливі форми: <span class="pl">ludzie → ludzi, pieniądze → pieniędzy, dzieci → dzieci</span>.<br><b>Пастка:</b> <span class="pl">truskawki</span> — це садові полуниці, а лісові суниці — <span class="pl">poziomki</span>. Одна ягідка — <span class="pl">jedna truskawka</span>, тому «багато полуниць» — <span class="pl">dużo truskawek</span> (лише множина, хоча українською кажемо й «багато полуниці»).</div>
<h4>4. Узгодження дієслова</h4>
<p>З <span class="pl">dużo, mało, kilka, sporo</span> дієслово стоїть у 3-й особі однини, а в минулому часі — у середньому роді, як і в українській («було кілька сортів»):</p>
<div class="ex"><span class="pl">Na targu jest dużo ludzi.</span> — На ринку багато людей.</div>
<div class="ex"><span class="pl">Na straganie było kilka gatunków jabłek.</span> — На ятці було кілька сортів яблук.</div>
<div class="ex"><span class="pl">Ile kosztuje kilo truskawek?</span> — Скільки коштує кіло полуниць?</div>`
      },

      exercises: [
        { type: "choice", q: "Poproszę kilo ___.", options: ["pomidory", "pomidorów", "pomidora"], answer: 1,
          explain: "Kilo + род. мн. Чоловічий рід має -ów: pomidorów (пор. укр. «помідорів»)." },
        { type: "gap", q: "Ile ___ (jabłko) potrzebujesz do szarlotki?", answers: ["jabłek"],
          explain: "Ile + род. мн. Jabłko (с. р.) → нульове закінчення зі вставним e: jabłek (пор. укр. «яблук»)." },
        { type: "gap", q: "Poproszę pół kilo ___ (truskawki).", answers: ["truskawek"],
          explain: "Pół kilo + род. мн.: truskawki → truskawek (вставне e, як в укр. «пісня → пісень»)." },
        { type: "match", q: "З’єднайте польський вираз із перекладом",
          pairs: [["tabliczka czekolady", "плитка шоколаду"], ["pęczek koperku", "пучок кропу"], ["słoik miodu", "банка меду"], ["kawałek sera", "шматок сиру"], ["puszka kukurydzy", "бляшанка кукурудзи"], ["karton mleka", "пакет молока"]],
          explain: "Після будь-якої міри чи упаковки — dopełniacz: czekolady, koperku, miodu, sera, kukurydzy, mleka." },
        { type: "choice", q: "Wczoraj w sklepie ___ tylko kilka bułek.", options: ["był", "były", "było"], answer: 2,
          explain: "З kilka, dużo, mało дієслово в минулому часі стоїть у середньому роді однини: było kilka bułek (як укр. «було кілька булок»)." },
        { type: "gap", q: "Na targu jest dziś sporo ___ (ludzie).", answers: ["ludzi"],
          explain: "Sporo + род. мн. Ludzie — особлива форма: ludzi (пор. укр. «людей»)." },
        { type: "order", ru: "Мені шматок сиру і пучок кропу, будь ласка.", words: ["Poproszę", "kawałek", "sera", "i", "pęczek", "koperku."],
          alt: ["Poproszę pęczek koperku i kawałek sera."],
          explain: "Poproszę + знахідний (kawałek, pęczek), а після міри — родовий: sera, koperku." },
        { type: "choice", q: "Mamy w piwnicy dużo ___.", options: ["ogórków kiszonych", "ogórki kiszone", "ogórka kiszonego"], answer: 0,
          explain: "Dużo + род. мн.: іменник -ów, прикметник -ych: ogórków kiszonych." },
        { type: "translate", ru: "Мені пів кіло полуниць, будь ласка.", answers: ["Poproszę pół kilo truskawek.", "Pół kilo truskawek, proszę."],
          explain: "Українською можна сказати й «пів кіло полуниці», а польською — лише множина: truskawki → pół kilo truskawek." },
        { type: "gap", q: "Dodaj do zupy trochę ___ (sól).", answers: ["soli"],
          explain: "Trochę + род. одн. (сіль — незлічувана). Sól — ж. р. на м’який приголосний → soli (як укр. «солі»)." }
      ],

      pronunciation: {
        focus: "Оглушення дзвінких у кінці слова",
        tip: `<p>На відміну від української, у польській дзвінкі приголосні в кінці слова оглушуються: <span class="pl">chleb</span> [хлеп], <span class="pl">sad</span> [сат], <span class="pl">róg</span> [рук], <span class="pl">grzyb</span> [гжип], <span class="pl">Kraków</span> [кракуф]. Ми вимовляємо «хліб», «сад», «гриб» із дзвінким кінцем — і саме цю звичку доведеться ламати: польське слово з дзвінким [б] чи [д] у кінці звучить з помітним акцентом.</p>
<p>Друга складність — написання: чуєте [м’ют], а пишете <span class="pl">miód</span>. Перевіряйте, змінивши форму: <span class="pl">miód → miodu, chleb → chleba, grzyb → grzyby, sad → sadu</span>. В українській такої перевірки не треба: ми й так чуємо дзвінкий кінець («дуб», «мед»).</p>
<p>Тому <span class="pl">kod</span> (код) і <span class="pl">kot</span> (кіт) звучать однаково, а от <span class="pl">kody</span> і <span class="pl">koty</span> — по-різному.</p>
<p>Оглушення діє і перед глухим приголосним: <span class="pl">ławka</span> [ўафка], <span class="pl">wódka</span> [вутка]. В українській дзвінкий тут зберігається («казка», «ложка»), а <i>в</i> перед глухим стає [ў] («лавка» [лаўка]). У польській же <i>w</i> перед глухим — чітке [ф].</p>`,
        items: [
          { type: "listen", text: "chleb", ru: "хліб", note: "[хлеп] — без дзвінкого «б» у кінці" },
          { type: "listen", text: "miód i lód", ru: "мед і лід", note: "[м’ют і лют]" },
          { type: "listen", text: "grzyb", ru: "гриб", note: "[гжип]" },
          { type: "listen", text: "Kraków", ru: "Краків", note: "[кракуф]" },
          { type: "minimal", options: ["kody", "koty"], ru: ["коди", "коти"] },
          { type: "stress", word: "truskawka", syllables: ["tru", "skaw", "ka"], answer: 1 },
          { type: "stress", word: "ziemniaki", syllables: ["ziem", "nia", "ki"], answer: 1 },
          { type: "dictation", text: "Poproszę chleb, miód i pół kilo grzybów." }
        ]
      },

      reading: {
        title: "Sobota na Kleparzu",
        text: "W każdą sobotę pani Halina chodzi na Stary Kleparz – najstarszy targ w Krakowie. Dziś idzie z wnuczką Zosią, która mieszka w Warszawie i robi zakupy tylko w aplikacji.\n\nNa targu jest sporo ludzi, a na straganach – mnóstwo warzyw i owoców. Pani Halina zna wszystkich sprzedawców. Najpierw kupuje pęczek koperku i pół kilo młodych ziemniaków. Potem idzie do pana Józka, który sprzedaje ogórki kiszone z beczki. „Słoik czy na wagę?” – pyta pan Józek. „Kilo na wagę, proszę”.\n\nZosia ogląda truskawki. „Czy one są polskie?” – pyta nieufnie. Sprzedawczyni się obraża: „Proszę pani, to są truskawki spod Krakowa, nie z Hiszpanii! Proszę spróbować”. Zosia próbuje: są słodkie i dojrzałe, zupełnie inne niż w supermarkecie. Kupuje od razu dwa kilo.\n\nNa koniec babcia bierze jeszcze kawałek oscypka i słoik miodu gryczanego. Torby są ciężkie, a w portfelu Zosi nie ma już ani grosza. „Babciu, w aplikacji nie trzeba nosić zakupów!” – mówi Zosia. „Ale w aplikacji nikt ci nie da spróbować truskawek” – śmieje się babcia.",
        glossary: [
          { pl: "wnuczką", ru: "з онукою" },
          { pl: "mnóstwo", ru: "безліч, сила-силенна" },
          { pl: "z beczki", ru: "з бочки" },
          { pl: "na wagę", ru: "на вагу" },
          { pl: "nieufnie", ru: "недовірливо" },
          { pl: "się obraża", ru: "ображається" },
          { pl: "spod Krakowa", ru: "з-під Кракова" },
          { pl: "oscypka", ru: "копченого овечого сиру з гір (наз. в. oscypek)" },
          { pl: "gryczanego", ru: "гречаного" },
          { pl: "ani grosza", ru: "ані гроша" }
        ],
        questions: [
          { type: "tf", q: "Zosia zwykle robi zakupy na targu.", answer: false,
            explain: "Зося живе у Варшаві й «robi zakupy tylko w aplikacji» — лише в застосунку." },
          { type: "choice", q: "Co pani Halina kupuje u pana Józka?", options: ["miód", "ogórki kiszone", "truskawki"], answer: 1,
            explain: "Pan Józek «sprzedaje ogórki kiszone z beczki»; бабуся бере кіло на вагу." },
          { type: "choice", q: "Skąd są truskawki?", options: ["z Hiszpanii", "spod Krakowa", "z supermarketu"], answer: 1,
            explain: "«To są truskawki spod Krakowa, nie z Hiszpanii!»" },
          { type: "tf", q: "Truskawki są słodkie i dojrzałe.", answer: true,
            explain: "«Są słodkie i dojrzałe, zupełnie inne niż w supermarkecie.»" },
          { type: "tf", q: "Na koniec Zosia ma jeszcze dużo pieniędzy.", answer: false,
            explain: "«W portfelu Zosi nie ma już ani grosza.»" }
        ]
      },

      writing: {
        prompt: "Завтра ви з друзями влаштовуєте барбекю. Ваша подруга Магда вранці йде на ринок. Напишіть їй записку: 1) що купити і скільки (kilo, pół kilo, pęczek, słoik…); 2) у якого продавця краще брати; 3) чого не купувати або купити мало; 4) що перевірити (свіжість, стиглість).",
        minWords: 40, maxWords: 80,
        useWords: ["pół kilo", "pęczek", "słoik", "dojrzały"],
        checklist: [
          { label: "Щонайменше 4 слова кількості чи упаковки (kilo, słoik, pęczek, trochę, dużo…)", pattern: "\\b(kilo|słoik|pęczek|kawałek|trochę|dużo|kilka|sporo|mało|deko|puszk\\p{L}*|butelk\\p{L}*)", min: 4 },
          { label: "Щонайменше 2 форми род. мн. на -ów (pomidorów, ziemniaków…)", pattern: "\\p{L}{3,}ów\\b", min: 2 }
        ],
        model: "Hej Magda!\nJutro robimy grilla, więc proszę, idź rano na targ. Kup kilo dojrzałych pomidorów, pół kilo młodych ziemniaków i pęczek koperku. U pana Józka weź słoik ogórków kiszonych – są najlepsze w mieście. Potrzebujemy też kawałka oscypka i trochę chleba. Nie kupuj dużo truskawek, bo mama przyniesie ciasto. Sprawdź, czy pomidory są dojrzałe, a nie twarde!\nDzięki, Kasia"
      }
    },

    // ───────────────────────── LEKCJA 3 ─────────────────────────
    {
      id: "m03l3",
      title: "Bez cebuli, proszę!",
      titleRu: "Родовий відмінок із прийменниками",
      topic: "W restauracji",
      review: false,
      minutes: 30,
      goals: [
        "Вживати прийменники do, od, z, bez, u, dla, obok, koło, naprzeciwko з родовим відмінком",
        "Розрізняти z + dop. (з чого, звідки) і z + narz. (з чим, з ким)",
        "Забронювати столик, замовити страву й попросити змінити її склад"
      ],

      vocab: [
        { pl: "stolik", g: "m", ru: "столик", ex: "Czy jest wolny stolik obok okna?", exRu: "Чи є вільний столик біля вікна?" },
        { pl: "rezerwacja", g: "f", ru: "бронювання, бронь", ex: "Mamy rezerwację na nazwisko Nowak.", exRu: "У нас бронювання на прізвище Новак." },
        { pl: "karta", g: "f", ru: "меню", note: "також «карта»; можна сказати menu", ex: "Poprosimy kartę.", exRu: "Принесіть нам меню, будь ласка." },
        { pl: "przystawka", g: "f", ru: "закуска", ex: "Na przystawkę zamówiliśmy śledzie w oleju.", exRu: "На закуску ми замовили оселедці в олії." },
        { pl: "danie główne", g: "n", ru: "основна страва", ex: "Na danie główne wezmę kotlet schabowy.", exRu: "На основну страву візьму свинячу відбивну." },
        { pl: "zupa dnia", g: "f", ru: "суп дня", ex: "Jaka jest dziś zupa dnia?", exRu: "Який сьогодні суп дня?" },
        { pl: "zamawiać / zamówić", ru: "замовляти / замовити", ex: "Co państwo zamawiają?", exRu: "Що ви будете замовляти?" },
        { pl: "kelner", g: "m", ru: "офіціант", note: "ж. р. kelnerka", ex: "Kelner przyniósł kartę i wodę.", exRu: "Офіціант приніс меню й воду." },
        { pl: "polecać / polecić", ru: "рекомендувати, радити", note: "Co pan poleca? — Що ви порадите?", ex: "Polecam żurek – jest domowy.", exRu: "Рекомендую журек — він домашній." },
        { pl: "ostry", ru: "гострий", ex: "Czy ta zupa jest ostra?", exRu: "Цей суп гострий?" },
        { pl: "wegetariański", ru: "вегетаріанський", note: "coś + dop.: coś wegetariańskiego (укр. «щось вегетаріанське» — наз. в.)", ex: "Czy macie coś wegetariańskiego?", exRu: "У вас є щось вегетаріанське?" },
        { pl: "uczulenie", g: "n", ru: "алергія", note: "mieć uczulenie na + bier.", ex: "Mam uczulenie na orzechy.", exRu: "У мене алергія на горіхи." },
        { pl: "na wynos", ru: "із собою, на виніс", ex: "Poproszę kawę na wynos.", exRu: "Каву із собою, будь ласка." },
        { pl: "surówka", g: "f", ru: "салат зі свіжих овочів", note: "звичайний гарнір до обіду", ex: "Do schabowego podajemy surówkę z kapusty.", exRu: "До відбивної ми подаємо салат із капусти." }
      ],

      grammar: {
        title: "Прийменники з родовим відмінком",
        html: `<p>Багато частих прийменників вимагають родового відмінка. Добра новина: більшість із них схожі на українські й так само вживаються з родовим (до, від, з, без, у, для, коло, навпроти). Погана — є кілька підступних відмінностей.</p>
<table class="g">
<tr><th>Прийменник</th><th>Значення</th><th>Приклад</th></tr>
<tr><td class="pl">do</td><td>до, у/в (куди?)</td><td class="pl">idę do restauracji, do kelnera</td></tr>
<tr><td class="pl">od</td><td>від; з (якого часу)</td><td class="pl">prezent od mamy, od poniedziałku</td></tr>
<tr><td class="pl">z</td><td>з, із (звідки; з чого)</td><td class="pl">wracam z pracy, sok z jabłek</td></tr>
<tr><td class="pl">bez</td><td>без</td><td class="pl">bez cebuli, bez cukru</td></tr>
<tr><td class="pl">u</td><td>у (у кого; у когось удома)</td><td class="pl">u babci, u lekarza</td></tr>
<tr><td class="pl">dla</td><td>для</td><td class="pl">deser dla dziecka</td></tr>
<tr><td class="pl">obok, koło</td><td>біля, поруч, коло</td><td class="pl">obok okna, koło kuchni</td></tr>
<tr><td class="pl">naprzeciwko</td><td>навпроти</td><td class="pl">naprzeciwko kina</td></tr>
</table>
<h4>Пастки для українців</h4>
<div class="tip"><b>1. «До ресторану» = do restauracji.</b> Напрямок до будівлі, міста, країни чи людини — <span class="pl">do</span> + dop.: <span class="pl">do sklepu, do Gdańska, do Polski, do dentysty</span>. Тут українське «до» — надійний орієнтир. А от калька з «іду в ресторан» не працює: не кажіть «w restaurację»!</div>
<div class="tip"><b>2. z + dop. ≠ z + narz.</b> Як і в українській, з родовим <span class="pl">z</span> означає «з чого, звідки»: <span class="pl">krem z dyni</span> (крем-суп із гарбуза), <span class="pl">wracam z pracy</span> (повертаюся з роботи). З орудним — «з чим, з ким»: <span class="pl">pierogi z mięsem, herbata z cytryną</span>. Порівняйте: <span class="pl">surówka z marchewki</span> (салат із моркви) — <span class="pl">ziemniaki z koperkiem</span> (картопля з кропом).</div>
<div class="tip"><b>3. «Біля вікна» = obok okna</b> — родовий без жодного «z», як в українському «біля вікна». Не перекладайте дослівно «поруч із вікном» — «obok z oknem» є помилкою.</div>
<div class="tip"><b>4. «У мене є» ≠ u mnie.</b> Українською можна сказати і «у мене є бронювання», і «я маю бронювання». У польській працює лише друге — дієслово <span class="pl">mieć</span>: <span class="pl">Mam rezerwację.</span> — Маю бронювання. А <span class="pl">u mnie</span> означає «у мене вдома»: <span class="pl">Kolacja jest u mnie.</span> — Вечеря в мене (вдома).</div>
<h4>Займенники після прийменників</h4>
<p>Після прийменника займенники <i>on, ona, ono, oni</i> отримують початкове <b>n-</b>, як в українському «у нього», «для неї»: <span class="pl">dla niego, u niej, bez nich, obok niego</span>. Форми я / ти / ми / ви: <span class="pl">dla mnie, u ciebie, do nas, od was</span>.</p>
<div class="ex"><span class="pl">Ta zupa jest dla niej, a pierogi dla mnie.</span> — Цей суп для неї, а вареники для мене.</div>
<div class="ex"><span class="pl">Restauracja jest naprzeciwko dworca.</span> — Ресторан навпроти вокзалу.</div>
<div class="ex"><span class="pl">Poproszę pierogi bez cebuli.</span> — Мені вареники без цибулі, будь ласка.</div>
<div class="tip">Хибні друзі на кухні: <span class="pl">pierogi</span> — це вареники, а не пироги; <span class="pl">dynia</span> — гарбуз, а не диня (диня — <span class="pl">melon</span>).</div>`
      },

      exercises: [
        { type: "choice", q: "Poproszę sałatkę bez ___.", options: ["cebula", "cebuli", "cebulą"], answer: 1,
          explain: "Bez + dopełniacz: cebula → cebuli (після l у ж. р. закінчення -i; пор. укр. «без цибулі»)." },
        { type: "choice", q: "Codziennie o szóstej wracam ___.", options: ["z pracy", "z pracą", "od pracy"], answer: 0,
          explain: "«Звідки?» — z + dopełniacz: z pracy (як укр. «з роботи»). Z pracą (narz.) означало б «з роботою», а od — «від людини»." },
        { type: "gap", q: "Idziemy dziś do ___ (nowa restauracja) na Kazimierzu.", answers: ["nowej restauracji"],
          explain: "Do + dopełniacz (як укр. «до ресторану»): прикметник ж. р. -ej, restauracja → restauracji." },
        { type: "gap", q: "Ta zupa jest dla ___ (ona), a pierogi dla mnie.", answers: ["niej"],
          explain: "Після прийменника займенник ona в родовому отримує n-: dla niej (як укр. «для неї»)." },
        { type: "gap", q: "Nasza ulubiona kawiarnia jest koło ___ (teatr).", answers: ["teatru"],
          explain: "Koło + dopełniacz (як укр. «коло театру»). Teatr — неістота ч. р., закінчення -u: teatru." },
        { type: "match", q: "З’єднайте польський вираз із перекладом",
          pairs: [["u babci", "у бабусі"], ["obok kina", "біля кінотеатру"], ["naprzeciwko banku", "навпроти банку"], ["od rana", "з ранку"], ["bez cukru", "без цукру"], ["do lekarza", "до лікаря"]],
          explain: "Усі ці прийменники вимагають dopełniacz — майже як в українській. Зверніть увагу: obok kina — родовий без z, do lekarza — «до лікаря»." },
        { type: "choice", q: "«У нас бронювання на сьому». Як сказати польською?", options: ["U nas jest rezerwacja na siódmą.", "Mamy rezerwację na siódmą.", "Mamy rezerwacji na siódmą."], answer: 1,
          explain: "Володіння — дієслово mieć + знахідний (як укр. «маємо бронювання»): Mamy rezerwację. «U nas» означає «у нас удома»." },
        { type: "order", ru: "Ми йдемо до бабусі на обід.", words: ["Idziemy", "do", "babci", "na", "obiad."],
          alt: ["Na obiad idziemy do babci."],
          explain: "До людини — do + dopełniacz: do babci (як укр. «до бабусі»). «На обід» — na obiad (знахідний)." },
        { type: "translate", ru: "Каву без цукру, будь ласка.", answers: ["Kawa bez cukru, proszę.", "Kawę bez cukru, proszę.", "Poproszę kawę bez cukru.", "Proszę kawę bez cukru."],
          explain: "Bez + dopełniacz: cukier → cukru (випадає e, закінчення -u, як укр. «без цукру»)." },
        { type: "gap", q: "Codziennie rano piję sok ___ pomarańczy. (із)", answers: ["z"],
          explain: "«З чого?» — z + dopełniacz: sok z pomarańczy. Порівняйте: herbata z cytryną (з чим — narz.)." }
      ],

      pronunciation: {
        focus: "Асиміляція: w і rz після глухих",
        tip: `<p><b>w після глухого = [ф].</b> Якщо перед <i>w</i> стоїть глухий приголосний (p, t, k, s, sz, ś, ch, c, cz), <i>w</i> теж оглушується: <span class="pl">twój</span> [тфуй], <span class="pl">kwiat</span> [кф’ят], <span class="pl">świeży</span> [ш’ф’єжи]. Прийменник <span class="pl">w</span> перед глухим — теж [ф]: <span class="pl">w kuchni</span> [фкухні], <span class="pl">w sklepie</span> [фсклеп’є].</p>
<p>Для українців це головна пастка: у нас <i>в</i> перед приголосним звучить як [ў] («вовк», «в кухні» [ўкухні]), а в польській — як чітке [ф]. Не кажіть [тўуй] чи [ўкухні]!</p>
<p><b>rz після глухого = [ш].</b> Після p, t, k, ch сполучення <i>rz</i> звучить як глухе [ш]: <span class="pl">przy</span> [пши], <span class="pl">trzy</span> [тши], <span class="pl">krzesło</span> [кшесўо]. Жодного «р»! Українці часто кажуть «пржи» — це помилка.</p>
<div class="tip">Не плутайте <span class="pl">trzy</span> і <span class="pl">czy</span>: у <i>trzy</i> чути два звуки — коротке [т] і [ш], а в <i>czy</i> — один звук [ч], як в українському «чи».</div>`,
        items: [
          { type: "listen", text: "w kuchni", ru: "на кухні", note: "[фкухні], а не [ўкухні]" },
          { type: "listen", text: "przy stoliku", ru: "за столиком", note: "prz = [пш]" },
          { type: "listen", text: "krzesło", ru: "стілець", note: "[кшесўо]" },
          { type: "listen", text: "świeży twarożek", ru: "свіжий сирок", note: "św = [сьф], tw = [тф]" },
          { type: "minimal", options: ["trzy", "czy"], ru: ["три", "чи (питальна частка)"] },
          { type: "minimal", options: ["trzysta", "czysta"], ru: ["триста", "чиста"] },
          { type: "stress", word: "przystawka", syllables: ["przy", "staw", "ka"], answer: 1 },
          { type: "dictation", text: "Przy oknie w kuchni stoją trzy krzesła." }
        ]
      },

      reading: {
        title: "Kolacja na Kazimierzu",
        text: "Tomek zaprosił Anię na kolację do nowej restauracji na Kazimierzu, naprzeciwko starej synagogi. Mieli rezerwację na ósmą, więc kelner od razu zaprowadził ich do stolika obok okna.\n\nAnia jest wegetarianką i ma uczulenie na orzechy, więc zamawianie to dla niej mała przygoda. „Co pan poleca?” – zapytała. „Na przystawkę tatar, a potem żurek z kiełbasą” – odpowiedział kelner. „A coś bez mięsa?” „Zupa dnia: krem z dyni z prażonymi orzechami”. „To poproszę krem z dyni, ale bez orzechów”.\n\nNa danie główne Ania zamówiła pierogi ruskie bez cebuli i surówkę z marchewki. Tomek wybrał kotlet schabowy z ziemniakami i kapustą. Wszystko było pyszne, chociaż Ania patrzyła na kotlet Tomka z niechęcią.\n\nPrzy płaceniu okazało się, że Tomek zostawił portfel u brata. Ania westchnęła i zapłaciła telefonem. „Następnym razem idziemy do baru wegańskiego koło mojego domu – powiedziała. – I płacisz ty!”",
        glossary: [
          { pl: "zaprowadził", ru: "провів" },
          { pl: "przygoda", ru: "пригода" },
          { pl: "tatar", ru: "тартар (рублена сира яловичина)" },
          { pl: "żurek", ru: "журек — кислий суп на житній заквасці" },
          { pl: "krem z dyni", ru: "гарбузовий крем-суп (dynia — гарбуз, не диня!)" },
          { pl: "prażonymi", ru: "підсмаженими" },
          { pl: "pierogi ruskie", ru: "вареники з картоплею і сиром (ruskie — від історичної Русі, тобто Галичини, а не «російські»)" },
          { pl: "z niechęcią", ru: "з неприязню" },
          { pl: "zostawił", ru: "залишив" },
          { pl: "westchnęła", ru: "зітхнула" }
        ],
        questions: [
          { type: "tf", q: "Ania i Tomek nie mieli rezerwacji.", answer: false,
            explain: "«Mieli rezerwację na ósmą» — у них було бронювання на восьму." },
          { type: "choice", q: "Gdzie siedzieli Ania i Tomek?", options: ["obok kuchni", "obok okna", "naprzeciwko baru"], answer: 1,
            explain: "Офіціант провів їх «do stolika obok okna»." },
          { type: "choice", q: "Czego Ania nie je?", options: ["mięsa i orzechów", "marchewki i dyni", "ziemniaków i sera"], answer: 0,
            explain: "Аня — вегетаріанка (bez mięsa), і в неї алергія на горіхи (bez orzechów)." },
          { type: "tf", q: "Tomek zapłacił za kolację.", answer: false,
            explain: "Томек залишив гаманець у брата, заплатила Аня — telefonem." },
          { type: "choice", q: "Dokąd chce iść Ania następnym razem?", options: ["do baru wegańskiego koło swojego domu", "do restauracji naprzeciwko synagogi", "do brata Tomka"], answer: 0,
            explain: "«Następnym razem idziemy do baru wegańskiego koło mojego domu.»" }
        ]
      },

      writing: {
        prompt: "Ви побували в ресторані чи кав’ярні в польському місті. Напишіть короткий відгук для Google Maps: 1) де розташований ресторан (naprzeciwko / obok / koło чогось); 2) де ви сиділи і як вас зустріли; 3) що замовили (на закуску, основну страву; без чого, з чого); 4) рекомендуєте чи ні.",
        minWords: 40, maxWords: 80,
        useWords: ["polecać", "danie główne", "stolik", "przystawka"],
        checklist: [
          { label: "Щонайменше 4 прийменники з родовим (do, od, bez, u, dla, obok, koło, naprzeciwko)", pattern: "\\b(do|od|bez|u|dla|obok|koło|naprzeciwko)\\s", min: 4 },
          { label: "Оцінка: polecam / nie polecam", pattern: "polecam", min: 1 }
        ],
        model: "Restauracja „Pod Lipą” jest w centrum Torunia, naprzeciwko ratusza. Byliśmy tam w sobotę bez rezerwacji, ale kelnerka szybko znalazła dla nas stolik obok okna. Na przystawkę zamówiłam pierogi z kapustą i grzybami, a na danie główne – placki ziemniaczane z surówką z marchewki. Mój mąż jadł kotlet schabowy bez sosu. Wszystko było świeże i niedrogie. Jedyny minus: koło kuchni jest głośno. Polecam!"
      }
    },

    // ───────────────────────── LEKCJA 4 ─────────────────────────
    {
      id: "m03l4",
      title: "Dwa złote, pięć złotych",
      titleRu: "Числівники з іменниками; ціни",
      topic: "Ceny i rachunki",
      review: false,
      minutes: 30,
      goals: [
        "Узгоджувати числівники з іменниками: 1 / 2–4 / 5+ (jeden banan, dwa banany, pięć bananów)",
        "Називати ціни: złoty / złote / złotych, grosz / grosze / groszy",
        "Розраховуватися: попросити рахунок, заплатити карткою чи готівкою, розділити рахунок"
      ],

      vocab: [
        { pl: "rachunek", g: "m", ru: "рахунок (у ресторані)", ex: "Poprosimy rachunek.", exRu: "Принесіть, будь ласка, рахунок." },
        { pl: "paragon", g: "m", ru: "чек", note: "faktura — рахунок-фактура для фірми", ex: "Paragon czy faktura?", exRu: "Вам чек чи рахунок-фактуру?" },
        { pl: "reszta", g: "f", ru: "решта (гроші); залишок", ex: "Proszę, oto reszta.", exRu: "Ось, будь ласка, ваша решта." },
        { pl: "gotówka", g: "f", ru: "готівка", note: "płacić gotówką — платити готівкою", ex: "Na targu często płacę gotówką.", exRu: "На ринку я часто плачу готівкою." },
        { pl: "drobne", g: "pl", ru: "дрібні гроші, дріб’язок", note: "род. в. drobnych", ex: "Nie mam drobnych, mogę zapłacić kartą?", exRu: "У мене немає дрібних, можна карткою?" },
        { pl: "napiwek", g: "m", ru: "чайові", note: "у польській — однина! (укр. «чайові» — множина)", ex: "W restauracji zwykle zostawiamy dziesięć procent napiwku.", exRu: "У ресторані ми зазвичай залишаємо десять відсотків чайових." },
        { pl: "zniżka", g: "f", ru: "знижка", ex: "W tej kawiarni studenci mają dziesięć procent zniżki.", exRu: "У цій кав’ярні студенти мають знижку десять відсотків." },
        { pl: "płacić / zapłacić", ru: "платити / заплатити", note: "za co? — za obiad; czym? — kartą, gotówką", ex: "Zapłacę za obiad BLIK-iem.", exRu: "Я заплачу за обід через BLIK." },
        { pl: "wydawać / wydać", ru: "витрачати / витратити", ex: "Ile wydajesz miesięcznie na jedzenie?", exRu: "Скільки ти витрачаєш на місяць на їжу?" },
        { pl: "osobno", ru: "окремо", note: "Razem czy osobno? — Разом чи окремо?", ex: "Płacimy osobno, proszę.", exRu: "Ми платимо окремо, будь ласка." },
        { pl: "grosz", g: "m", ru: "грош (1/100 злотого)", ex: "Ta guma kosztuje dziewięćdziesiąt dziewięć groszy.", exRu: "Ця жуйка коштує дев’яносто дев’ять грошів." },
        { pl: "złoty", g: "m", ru: "злотий", note: "відмінюється як прикметник: złote, złotych", ex: "Ta bułka kosztuje tylko jeden złoty.", exRu: "Ця булочка коштує лише один злотий." },
        { pl: "terminal", g: "m", ru: "платіжний термінал", ex: "Przepraszam, terminal nie działa.", exRu: "Перепрошую, термінал не працює." },
        { pl: "opłacać się", ru: "бути вигідним, окупатися", ex: "Duże opakowanie bardziej się opłaca.", exRu: "Велика упаковка вигідніша." }
      ],

      grammar: {
        title: "Числівники + іменники; ціни",
        html: `<p>У польській, як і в українській, форма іменника залежить від числівника. Схема майже та сама («два банани — п’ять бананів»), але є важливі відмінності.</p>
<table class="g">
<tr><th>Число</th><th>Відмінок</th><th>Приклад</th><th>Гроші</th></tr>
<tr><td>1</td><td>наз. одн.</td><td class="pl">jeden banan, jedna bułka, jedno jajko</td><td class="pl">jeden złoty, jeden grosz</td></tr>
<tr><td>2, 3, 4 (22–24, 32–34…)</td><td>наз. мн.</td><td class="pl">dwa banany, dwie bułki, trzy jajka</td><td class="pl">dwa złote, cztery grosze</td></tr>
<tr><td>5–21 (25–31, 35–41…)</td><td>род. мн.</td><td class="pl">pięć bananów, sześć bułek, dziesięć jajek</td><td class="pl">pięć złotych, dwanaście groszy</td></tr>
</table>
<h4>Головні пастки</h4>
<div class="tip"><b>1. 21, 31, 101 → родовий мн.</b> Українською «двадцять одна гривня», а польською — <span class="pl">dwadzieścia jeden złotych</span>. Складений числівник на «jeden» поводиться як 5+.</div>
<div class="tip"><b>2. 12, 13, 14 → родовий мн.</b>: <span class="pl">dwanaście złotych, czternaście groszy</span>. Але 22, 23, 24 → наз. мн.: <span class="pl">dwadzieścia dwa złote</span>. Тут усе як в українській: «дванадцять гривень», але «двадцять дві гривні».</div>
<div class="tip"><b>3. dwa / dwie</b> — як укр. «два / дві». З ж. р. — <span class="pl">dwie</span>: <span class="pl">dwie kawy, dwie herbaty</span>; з ч. р. і с. р. — <span class="pl">dwa</span>: <span class="pl">dwa soki, dwa piwa</span>.</div>
<h4>Złoty — це прикметник!</h4>
<p>Слово <span class="pl">złoty</span> (буквально «золотий») відмінюється як прикметник: <span class="pl">jeden złoty — dwa złote — pięć złotych</span>. <span class="pl">Grosz</span> — як звичайний іменник: <span class="pl">grosz — grosze — groszy</span>.</p>
<p>Ціни читають так: 12,50 zł — <span class="pl">dwanaście złotych pięćdziesiąt groszy</span>, а в розмові коротше: <span class="pl">dwanaście pięćdziesiąt</span>.</p>
<h4>Узгодження дієслова</h4>
<ul>
<li>2–4 → дієслово в множині: <span class="pl">Dwa piwa kosztują dwadzieścia złotych.</span></li>
<li>5+ → дієслово в 3-й особі однини (у минулому — с. р.): <span class="pl">Pięć bułek kosztuje siedem złotych.</span> <span class="pl">Na kolacji było dziesięć osób.</span> В українській тут можлива й множина («п’ять булочок коштують»), у польській — ні.</li>
</ul>
<div class="ex"><span class="pl">Ile kosztują te truskawki? — Dwanaście złotych za kilo.</span> — Скільки коштують ці полуниці? — Дванадцять злотих за кіло.</div>
<div class="ex"><span class="pl">Płaci pan kartą czy gotówką?</span> — Ви платите карткою чи готівкою?</div>
<div class="tip">Зверніть увагу на керування: <span class="pl">płacić za coś</span> (за що — знахідний) і <span class="pl">płacić czymś</span> (чим — орудний), як укр. «платити за обід карткою»: <span class="pl">Płacę za obiad kartą.</span> Чоловічоособові форми (<span class="pl">dwaj panowie, pięciu studentów</span>) будуть у модулі 7 — поки що рахуємо продукти й гроші.</div>`
      },

      exercises: [
        { type: "choice", q: "Ta kawa kosztuje dwanaście ___.", options: ["złote", "złotych", "złoty"], answer: 1,
          explain: "12, 13, 14 вимагають род. мн.: dwanaście złotych (як укр. «дванадцять гривень»)." },
        { type: "choice", q: "Kawa z automatu kosztuje trzy ___.", options: ["złote", "złotych", "złoty"], answer: 0,
          explain: "2, 3, 4 + наз. мн.: trzy złote (як укр. «три гривні»)." },
        { type: "gap", q: "Poproszę trzy ___ (bułka).", answers: ["bułki"],
          explain: "Після 2–4 — називний мн.: bułka → bułki (після k закінчення -i)." },
        { type: "gap", q: "Kupiłem dziesięć ___ (jajko).", answers: ["jajek"],
          explain: "5+ → род. мн.: jajko → jajek (нульове закінчення і вставне e, пор. укр. «десять яєць»)." },
        { type: "gap", q: "Poproszę ___ kawy i jedną herbatę. (2)", answers: ["dwie"],
          explain: "Kawa — жіночий рід, тому dwie, а не dwa: dwie kawy (як укр. «дві кави»)." },
        { type: "choice", q: "To kosztuje dwadzieścia jeden ___.", options: ["złoty", "złote", "złotych"], answer: 2,
          explain: "Пастка! 21 (і 31, 41…) поводиться як 5+: dwadzieścia jeden złotych. Українською ж — «двадцять одна гривня»." },
        { type: "match", q: "З’єднайте ціну словами з цифрами",
          pairs: [["jeden złoty", "1 zł"], ["trzy złote", "3 zł"], ["piętnaście złotych", "15 zł"], ["dwadzieścia dwa złote", "22 zł"], ["pięćdziesiąt groszy", "0,50 zł"], ["sześćset złotych", "600 zł"]],
          explain: "1 — złoty; 2–4 і 22–24 — złote; 5–21, 50, 600 — złotych; grosz → groszy після 5+." },
        { type: "order", ru: "П’ять булочок коштує сім злотих.", words: ["Pięć", "bułek", "kosztuje", "siedem", "złotych."],
          alt: [],
          explain: "5+ + род. мн. (bułek, złotych), а дієслово — у 3-й особі однини: kosztuje." },
        { type: "translate", ru: "Решти не треба.", answers: ["Reszty nie trzeba.", "Nie trzeba reszty."],
          explain: "Після заперечення nie trzeba — dopełniacz: reszta → reszty (як укр. «решти не треба»)." },
        { type: "gap", q: "Te dwa piwa ___ (kosztować) dwadzieścia złotych.", answers: ["kosztują"],
          explain: "З числівниками 2–4 дієслово стоїть у множині: dwa piwa kosztują." }
      ],

      pronunciation: {
        focus: "Числівники: pięćset, sześćdziesiąt",
        tip: `<p>Числівники — суцільні групи приголосних. Головні правила (м’які звуки передаємо, як у модулі 1: ś — «ш’», ć — «ч’», dź — «дж’»):</p>
<ul>
<li><b>ę перед ć</b> звучить як [ен’]: <span class="pl">pięć</span> ≈ «п’єн’ч’», <span class="pl">pięćset</span> ≈ «п’єн’ч’-сет», <span class="pl">dziewięć</span> ≈ «дж’е-в’єн’ч’».</li>
<li><b>ść перед дзвінким dź</b> стає дзвінким: <span class="pl">sześćdziesiąt</span> ≈ «шеж’-дж’е-ш’онт».</li>
<li><b>ą перед t</b> = [он]: <span class="pl">dziesiąt</span> ≈ «дж’е-ш’онт», <span class="pl">pięćdziesiąt</span> ≈ «п’єн’-дж’е-ш’онт».</li>
<li><b>ę в -tnaście</b> втрачає носовість: <span class="pl">piętnaście</span> ≈ «п’єт-на-ш’ч’е», <span class="pl">dziewiętnaście</span> ≈ «дж’е-в’єт-на-ш’ч’е».</li>
</ul>
<p>Наголос — як завжди, на передостанній склад: <span class="pl">sześćdziesiąt</span> (DZIE), <span class="pl">jedenaście</span> (NA), <span class="pl">dwadzieścia</span> (DZIE). Не переносьте сюди український наголос «шістдеся́т» на останньому складі!</p>
<div class="tip">Не плутайте -naście (11–19), -dziesiąt (50–90) і -set (500–900) — це наші -надцять, -десят, -сот: <span class="pl">siedemnaście</span> (17) — <span class="pl">siedemdziesiąt</span> (70) — <span class="pl">siedemset</span> (700).</div>`,
        items: [
          { type: "listen", text: "pięćset", ru: "п’ятсот" },
          { type: "listen", text: "sześćdziesiąt", ru: "шістдесят", note: "ść перед dź стає дзвінким" },
          { type: "listen", text: "dziewięćset dziewięćdziesiąt dziewięć", ru: "дев’ятсот дев’яносто дев’ять" },
          { type: "minimal", options: ["siedemnaście", "siedemdziesiąt", "siedemset"], ru: ["17", "70", "700"] },
          { type: "minimal", options: ["piętnaście", "pięćdziesiąt"], ru: ["15", "50"] },
          { type: "stress", word: "sześćdziesiąt", syllables: ["sześć", "dzie", "siąt"], answer: 1 },
          { type: "stress", word: "jedenaście", syllables: ["je", "de", "na", "ście"], answer: 2 },
          { type: "dictation", text: "Płacę pięćset sześćdziesiąt złotych gotówką." }
        ]
      },

      reading: {
        title: "Rachunek w karczmie",
        text: "Po całym dniu na nartach czwórka przyjaciół przyszła do karczmy na Krupówkach. Byli tak głodni, że zamówili prawie całą kartę: cztery kwaśnice, dwa kotlety schabowe, dwie porcje pierogów, pięć placków po zbójnicku i siedem herbat z cytryną.\n\nPo kolacji kelnerka przyniosła rachunek: trzysta dwanaście złotych. „Płacą państwo razem czy osobno?” – zapytała. „Osobno!” – powiedziała Ola. „Razem!” – powiedział w tym samym momencie Piotrek.\n\nOkazało się jednak, że terminal nie działa. „Przepraszam, dziś tylko gotówka” – wyjaśniła kelnerka. Ola miała dwadzieścia jeden złotych, Wojtek – pięćdziesiąt złotych i kilka groszy, a Piotrek nie miał żadnych drobnych. Kasia pokręciła głową i poszła do bankomatu naprzeciwko karczmy.\n\nZapłaciła cały rachunek i zostawiła trzydzieści złotych napiwku. Wieczorem dostała od przyjaciół trzy przelewy na telefon. Ola, jak zwykle, wysłała tylko dwadzieścia dwa złote i pięćdziesiąt groszy z opisem: „Bo ja jadłam tylko zupę!”",
        glossary: [
          { pl: "na nartach", ru: "на лижах" },
          { pl: "czwórka przyjaciół", ru: "четверо друзів" },
          { pl: "karczmy", ru: "корчми (ресторан у народному стилі)" },
          { pl: "Krupówkach", ru: "Крупувки — головна вулиця міста Закопане" },
          { pl: "kwaśnice", ru: "квашниці — гірський суп із квашеної капусти (схожий на наш капусняк)" },
          { pl: "placków po zbójnicku", ru: "дерунів «по-розбійницьки» (із гуляшем)" },
          { pl: "pokręciła głową", ru: "похитала головою" },
          { pl: "bankomatu", ru: "банкомата" },
          { pl: "przelewy na telefon", ru: "перекази за номером телефону" },
          { pl: "z opisem", ru: "з коментарем (до переказу)" }
        ],
        questions: [
          { type: "choice", q: "Ile wynosił rachunek?", options: ["212 zł", "312 zł", "320 zł"], answer: 1,
            explain: "«Trzysta dwanaście złotych» — 312 zł." },
          { type: "tf", q: "W karczmie można było zapłacić kartą.", answer: false,
            explain: "«Terminal nie działa… dziś tylko gotówka.»" },
          { type: "choice", q: "Kto nie miał drobnych?", options: ["Ola", "Wojtek", "Piotrek"], answer: 2,
            explain: "«Piotrek nie miał żadnych drobnych.»" },
          { type: "tf", q: "Kasia zapłaciła za wszystkich.", answer: true,
            explain: "Кася зняла гроші в банкоматі й «zapłaciła cały rachunek»." },
          { type: "choice", q: "Dlaczego Ola wysłała mniej pieniędzy?", options: ["Bo jadła tylko zupę.", "Bo nie miała pieniędzy.", "Bo zapomniała o rachunku."], answer: 0,
            explain: "Коментар Олі до переказу: «Bo ja jadłam tylko zupę!»" }
        ]
      },

      writing: {
        prompt: "Учора ви вечеряли з друзями й заплатили карткою за всіх. Напишіть повідомлення в спільний чат: 1) скільки коштувала вечеря (із чайовими); 2) що замовили — з числівниками (2–4 і 5+); 3) скільки винен кожен; 4) як і до якого дня повернути гроші.",
        minWords: 40, maxWords: 80,
        useWords: ["rachunek", "napiwek", "osobno", "drobne"],
        checklist: [
          { label: "Щонайменше 3 суми зі словами złote / złotych", pattern: "złot(e|ych)\\b", min: 3 },
          { label: "Числівник 2–4 + наз. мн. (dwa / dwie / trzy / cztery …)", pattern: "\\b(dwa|dwie|trzy|cztery)\\s+\\p{L}+", min: 1 },
          { label: "Числівник 5+ + род. мн. (pięć, sześćdziesiąt … złotych)", pattern: "\\b(pięć|sześć|siedem|osiem|dziewięć|dziesięć|\\p{L}+naście|\\p{L}+dzieści|\\p{L}+dziesiąt|sto|\\p{L}*set)\\s+\\p{L}+", min: 1 }
        ],
        model: "Hej, ekipa!\nWczorajszy rachunek to dwieście czterdzieści złotych razem z napiwkiem. Kelner nie chciał liczyć osobno, więc zapłaciłam kartą za wszystkich. Zamówiliśmy cztery zupy, trzy duże pizze po trzydzieści dwa złote i dwie butelki wina. Dzielimy po równo na cztery osoby: każdy płaci sześćdziesiąt złotych. Tomek, wiem, że nie masz drobnych, ale BLIK na telefon też działa! Przelejcie pieniądze do piątku, proszę. Dzięki!\nKasia"
      }
    },

    // ───────────────────────── LEKCJA 5: POWTÓRKA ─────────────────────────
    {
      id: "m03l5",
      title: "Powtórka 3",
      titleRu: "Повторення модуля 3",
      topic: "Kuchnia i święta",
      review: true,
      minutes: 30,
      goals: [
        "Повторити всі функції родового відмінка: заперечення, кількість, прийменники, дієслова, належність",
        "Упевнено називати ціни й кількості з числівниками",
        "Написати підсумковий текст про покупки й підготовку до свята"
      ],

      vocab: [
        { pl: "przepis", g: "m", ru: "рецепт (страви); припис, правило", note: "хибний друг: recepta — лише рецепт від лікаря", ex: "Masz przepis na bigos?", exRu: "У тебе є рецепт бігосу?" },
        { pl: "składnik", g: "m", ru: "інгредієнт, складник", ex: "Wszystkie składniki są w lodówce.", exRu: "Усі інгредієнти в холодильнику." },
        { pl: "przyprawa", g: "f", ru: "приправа, спеція", ex: "Bez przypraw zupa nie ma smaku.", exRu: "Без спецій суп не має смаку." },
        { pl: "termin ważności", g: "m", ru: "термін придатності", ex: "Sprawdź termin ważności jogurtu.", exRu: "Перевір термін придатності йогурту." },
        { pl: "przeterminowany", ru: "прострочений", ex: "To mleko jest przeterminowane!", exRu: "Це молоко прострочене!" },
        { pl: "dostawa", g: "f", ru: "доставка", ex: "Dostawa będzie jutro rano.", exRu: "Доставка буде завтра вранці." },
        { pl: "zamówienie", g: "n", ru: "замовлення", ex: "Twoje zamówienie jest już w drodze.", exRu: "Твоє замовлення вже в дорозі." },
        { pl: "lista zakupów", g: "f", ru: "список покупок", ex: "Zapomniałam listy zakupów!", exRu: "Я забула список покупок!" },
        { pl: "kroić / pokroić", ru: "різати / нарізати", ex: "Pokrój cebulę w kostkę.", exRu: "Наріж цибулю кубиками." },
        { pl: "zamrażarka", g: "f", ru: "морозилка", ex: "W zamrażarce zawsze mam pierogi.", exRu: "У морозилці в мене завжди є вареники." }
      ],

      grammar: {
        title: "Підсумок модуля: dopełniacz і числівники",
        html: `<p>Родовий відмінок — головний герой модуля. Повторімо все в таблицях.</p>
<h4>1. Закінчення однини</h4>
<table class="g">
<tr><th></th><th>Іменник</th><th>Прикметник / займенник</th></tr>
<tr><td>ч. р.</td><td class="pl">-a: brata, chleba, sera; -u: cukru, czasu, sklepu</td><td class="pl">-ego: dobrego, tego, mojego</td></tr>
<tr><td>ж. р.</td><td class="pl">-y: kawy, wody; -i: mąki, kuchni, soli</td><td class="pl">-ej: dobrej, tej, mojej</td></tr>
<tr><td>с. р.</td><td class="pl">-a: mleka, masła</td><td class="pl">-ego: zimnego, tego</td></tr>
</table>
<h4>2. Закінчення множини</h4>
<table class="g">
<tr><th>Тип</th><th>Приклад</th></tr>
<tr><td>ч. р. -ów</td><td class="pl">pomidorów, składników, jogurtów</td></tr>
<tr><td>ж. р. і с. р. — нульове (часто зі вставним e)</td><td class="pl">truskawek, jajek, potraw, czekolad</td></tr>
<tr><td>м’яка або шипляча основа -i / -y</td><td class="pl">wiśni, kluczy</td></tr>
<tr><td>особливі форми</td><td class="pl">ludzi, pieniędzy, dzieci, świąt</td></tr>
<tr><td>прикметники -ych / -ich</td><td class="pl">świeżych, polskich</td></tr>
</table>
<h4>3. Коли потрібен dopełniacz</h4>
<table class="g">
<tr><th>Випадок</th><th>Приклад</th></tr>
<tr><td>заперечення (замість знахідного) і nie ma</td><td class="pl">Nie mam czasu. Nie ma maku.</td></tr>
<tr><td>кількість і міри</td><td class="pl">dużo ludzi, kilo karpia, słoik miodu</td></tr>
<tr><td>прийменники</td><td class="pl">do, od, z, bez, u, dla, obok, koło, naprzeciwko</td></tr>
<tr><td>дієслова</td><td class="pl">szukać, potrzebować, słuchać, uczyć się, brakować</td></tr>
<tr><td>належність</td><td class="pl">przepis babci, samochód taty</td></tr>
</table>
<h4>4. Числівники</h4>
<table class="g">
<tr><th>1</th><th>2–4, 22–24…</th><th>5–21, 25–31…</th></tr>
<tr><td class="pl">jeden złoty</td><td class="pl">dwa złote</td><td class="pl">pięć złotych</td></tr>
<tr><td class="pl">jeden grosz</td><td class="pl">trzy grosze</td><td class="pl">dwanaście groszy</td></tr>
<tr><td class="pl">jedna bułka</td><td class="pl">dwie bułki</td><td class="pl">sześć bułek</td></tr>
</table>
<p>Дієслово: 2–4 → множина (<span class="pl">trzy jogurty kosztują</span>), 5+ → 3-тя особа однини, у минулому — с. р. (<span class="pl">było jedenaście osób</span>).</p>
<div class="tip"><b>П’ять пасток модуля:</b><br>1) <span class="pl">To nie jest dobry pomysł.</span> — після nie jest родового немає.<br>2) <span class="pl">dwadzieścia jeden złotych</span> — 21 поводиться як 5+ (а не як укр. «двадцять одна гривня»).<br>3) <span class="pl">sok z jabłek</span> (з чого — dop.) ≠ <span class="pl">herbata z cytryną</span> (з чим — narz.).<br>4) <span class="pl">potrzebuję chleba, szukam mąki, słucham muzyki</span> — родовий, а не знахідний.<br>5) <span class="pl">Mam rezerwację.</span> — а не «u mnie jest rezerwacja».</div>
<div class="ex"><span class="pl">Bez czekolady nie ma świąt!</span> — Без шоколаду немає свят!</div>`
      },

      exercises: [
        { type: "choice", q: "Nie widzę tu ___.", options: ["żadnego kelnera", "żaden kelner", "żadnym kelnerem"], answer: 0,
          explain: "Widzieć + знахідний, із запереченням — родовий: żaden kelner → żadnego kelnera (пор. укр. «не бачу жодного офіціанта»)." },
        { type: "gap", q: "W zamrażarce nie ma już ___ (lody).", answers: ["lodów"],
          explain: "Lody (морозиво) — лише множина. Nie ma + род. мн.: lodów." },
        { type: "gap", q: "Szukam ___ (dobry przepis) na bigos.", answers: ["dobrego przepisu"],
          explain: "Szukać + dopełniacz: прикметник -ego, przepis → przepisu (неістота, -u)." },
        { type: "choice", q: "Kupiłam dwa kilo ___.", options: ["ziemniaki", "ziemniaków", "ziemniaka"], answer: 1,
          explain: "Числівник стосується слова kilo, а продукт після міри — у род. мн.: dwa kilo ziemniaków." },
        { type: "gap", q: "Na liście zakupów jest sześć ___ (składnik).", answers: ["składników"],
          explain: "5+ → род. мн.: składnik → składników; дієслово в однині: jest." },
        { type: "match", q: "З’єднайте дієслово з перекладом (усі вимагають dopełniacz!)",
          pairs: [["słuchać muzyki", "слухати музику"], ["szukać kluczy", "шукати ключі"], ["potrzebować pomocy", "потребувати допомоги"], ["uczyć się polskiego", "вчити польську"], ["brakować pieniędzy", "бракувати грошей"]],
          explain: "«Потребувати допомоги» і «бракувати грошей» і в українській мають родовий, а от «слухати музику», «шукати ключі», «вчити польську» — знахідний. Польські ж дієслова завжди вимагають родового." },
        { type: "choice", q: "Trzy ___ kosztują dziesięć złotych.", options: ["jogurty", "jogurtów", "jogurtu"], answer: 0,
          explain: "2–4 + наз. мн.: trzy jogurty; дієслово в множині: kosztują." },
        { type: "gap", q: "Kupiłam ten sernik specjalnie dla ___ (ty).", answers: ["ciebie"],
          explain: "Dla + dopełniacz; після прийменника — повна форма: dla ciebie (не «cię»), як укр. «для тебе»." },
        { type: "order", ru: "Я не знайшла цього рецепта в інтернеті.", words: ["Nie", "znalazłam", "tego", "przepisu", "w", "internecie."],
          alt: ["W internecie nie znalazłam tego przepisu."],
          explain: "Znaleźć + знахідний, із запереченням — родовий: tego przepisu (як укр. «не знайшла цього рецепта»)." },
        { type: "choice", q: "Mieszkam naprzeciwko ___.", options: ["dworzec", "dworca", "dworcem"], answer: 1,
          explain: "Naprzeciwko + dopełniacz: dworzec → dworca (випадає e; пор. укр. «навпроти вокзалу»)." },
        { type: "translate", ru: "У мене немає дрібних.", answers: ["Nie mam drobnych."],
          explain: "Nie mam + dopełniacz: drobne → drobnych (род. мн., як у прикметника)." },
        { type: "choice", q: "Ile ___ potrzebujemy na pierogi?", options: ["mąka", "mąki", "mąkę"], answer: 1,
          explain: "Ile + незлічуване → род. одн.: mąki (і potrzebować теж вимагає dopełniacz)." },
        { type: "translate", ru: "Дві кави і п’ять булочок, будь ласка.", answers: ["Dwie kawy i pięć bułek, proszę.", "Poproszę dwie kawy i pięć bułek."],
          explain: "Kawa — ж. р.: dwie kawy (наз. мн., як укр. «дві кави»); 5+ → род. мн.: pięć bułek." },
        { type: "gap", q: "To nie jest ___ (dobry pomysł).", answers: ["dobry pomysł"],
          explain: "Пастка! Після «nie jest» залишається називний — жодного dopełniacza." },
        { type: "gap", q: "Rachunek wynosi dwadzieścia dwa ___ (złoty).", answers: ["złote"],
          explain: "22 (як 2–4) → наз. мн.: dwadzieścia dwa złote. А 21 — dwadzieścia jeden złotych!" }
      ],

      pronunciation: {
        focus: "Повторення: групи приголосних, оглушення, асиміляція, числівники",
        tip: `<p>Зберімо все, що тренували в модулі:</p>
<ul>
<li><b>szcz, chrz, ść</b>: <span class="pl">szczypta</span> [ш+ч] (як укр. щ), <span class="pl">chrzan</span> [хш], <span class="pl">jeść</span> [ш’+ч’].</li>
<li><b>Оглушення в кінці</b> (якого немає в українській!): <span class="pl">chleb</span> [хлеп], <span class="pl">pieprz</span> [п’єпш] — rz у кінці теж оглушується.</li>
<li><b>w, rz після глухих</b>: <span class="pl">twarożek</span> [тф], а не [тў]; <span class="pl">przeterminowany</span> [пш].</li>
<li><b>Числівники</b>: <span class="pl">sześćset</span> ≈ «шеш’ч’-сет», <span class="pl">sześćdziesiąt</span> ≈ «шеж’-дж’е-ш’онт».</li>
</ul>
<p>І не забувайте про наголос на передостанньому складі навіть у довгих словах: <span class="pl">przeterminowany</span> → -WA-.</p>`,
        items: [
          { type: "listen", text: "Szczypta soli, chrzan i pieprz.", ru: "Дрібка солі, хрін і перець.", note: "pieprz у кінці — [п’єпш]" },
          { type: "listen", text: "przeterminowany twarożek", ru: "прострочений сирок", note: "prz = [пш], tw = [тф]" },
          { type: "minimal", options: ["trzech", "Czech"], ru: ["трьох", "чех"] },
          { type: "stress", word: "zamrażarka", syllables: ["za", "mra", "żar", "ka"], answer: 2 },
          { type: "stress", word: "przeterminowany", syllables: ["prze", "ter", "mi", "no", "wa", "ny"], answer: 4 },
          { type: "listen", text: "sześćset sześćdziesiąt sześć", ru: "шістсот шістдесят шість" },
          { type: "dictation", text: "Trzy bochenki chleba kosztują piętnaście złotych." }
        ]
      },

      reading: {
        title: "Wigilia u Kowalskich",
        text: "Jest dwudziesty trzeci grudnia, godzina siedemnasta. Pani Kowalska patrzy na listę zakupów i czuje, że ma problem. Jutro Wigilia, a w domu brakuje najważniejszych składników: nie ma maku, grzybów ani mąki na pierogi. Na stole musi być dwanaście potraw, wszystkie bez mięsa, a do kolacji siada jedenaście osób.\n\nPan Kowalski bierze dwie duże torby i jedzie do supermarketu koło dworca. W środku są tłumy ludzi. Przy rybach stoi długa kolejka, bo wszyscy chcą kupić karpia. Pan Kowalski czeka czterdzieści minut i kupuje trzy kilo ryby. Na szczęście to już filety – w tym roku żaden karp nie pływa w wannie, jak kiedyś u dziadków. Potem szuka maku, ale na półce zostało tylko jedno opakowanie. Bierze je z radością.\n\nGrzybów w supermarkecie nie ma, więc pan Kowalski dzwoni do teściowej. „Mam suszone grzyby z lasu – mówi teściowa. – Przyjedź do mnie, przecież mieszkam naprzeciwko kościoła”. Pan Kowalski jedzie więc na drugi koniec miasta i wraca dopiero o dziewiątej.\n\nW domu pan Kowalski pokazuje paragon: dwieście sześćdziesiąt cztery złote i pięćdziesiąt groszy. „Za trzy kilo karpia, mak i mąkę?” – dziwi się żona. „No i jeszcze za pięć czekolad dla dzieci – odpowiada mąż. – Bez czekolady nie ma świąt!”\n\nWieczorem cała rodzina lepi pierogi z kapustą i grzybami według starego przepisu. Nikt nie pamięta, że w zamrażarce od listopada czekają gotowe uszka.",
        glossary: [
          { pl: "Wigilia", ru: "Святвечір — святкова вечеря 24 грудня (як і в нас, із дванадцятьма пісними стравами)" },
          { pl: "w wannie", ru: "у ванні (за старою традицією живий короп плаває у ванні до Святвечора)" },
          { pl: "potraw", ru: "страв" },
          { pl: "tłumy", ru: "натовпи" },
          { pl: "karpia", ru: "коропа" },
          { pl: "suszone grzyby", ru: "сушені гриби" },
          { pl: "dziwi się", ru: "дивується" },
          { pl: "świąt", ru: "свят (święta — Різдво)" },
          { pl: "lepi", ru: "ліпить" },
          { pl: "uszka", ru: "вушка — маленькі вареники з грибами до борщу, як і на нашому Святвечорі" }
        ],
        questions: [
          { type: "tf", q: "Na wigilijnym stole są dania z mięsem.", answer: false,
            explain: "«Dwanaście potraw, wszystkie bez mięsa.»" },
          { type: "choice", q: "Ile osób będzie na kolacji?", options: ["dwanaście", "jedenaście", "dwadzieścia trzy"], answer: 1,
            explain: "«Do kolacji siada jedenaście osób.» Дванадцять — це кількість страв." },
          { type: "choice", q: "Czego pan Kowalski nie znalazł w supermarkecie?", options: ["maku", "karpia", "grzybów"], answer: 2,
            explain: "«Grzybów w supermarkecie nie ma» — гриби дає теща." },
          { type: "tf", q: "Teściowa mieszka naprzeciwko kościoła.", answer: true,
            explain: "«Przecież mieszkam naprzeciwko kościoła.»" },
          { type: "choice", q: "Co od listopada czeka w zamrażarce?", options: ["karp", "gotowe uszka", "czekolady"], answer: 1,
            explain: "«W zamrażarce od listopada czekają gotowe uszka» — але ніхто про них не пам’ятає." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля. Опишіть, як ви готувалися до свята чи вечірки: 1) що і за яким рецептом хотіли приготувати; 2) куди ходили по покупки (do, obok, naprzeciwko…) і чого там не було; 3) скільки чого купили і скільки все коштувало; 4) чим усе закінчилося.",
        minWords: 60, maxWords: 90,
        useWords: ["lista zakupów", "przepis", "składnik", "przeterminowany"],
        checklist: [
          { label: "Щонайменше 3 прийменники з родовим (do, od, bez, u, dla, obok, koło, naprzeciwko…)", pattern: "\\b(do|od|z|bez|u|dla|obok|koło|naprzeciwko)\\s", min: 3 },
          { label: "Заперечення з dopełniaczem (nie ma / nie było …)", pattern: "\\bnie\\s+(ma|było|mam|miałam|miałem|mieli|mieliśmy|kupiłam|kupiłem)\\b", min: 1 },
          { label: "Ціна зі словом złote / złotych", pattern: "złot(e|ych)\\b", min: 1 }
        ],
        model: "W sobotę robiłam przyjęcie urodzinowe dla siostry. Moja lista zakupów była bardzo długa, bo chciałam zrobić tort według przepisu babci. Najpierw poszłam do sklepu obok domu, ale nie było tam mascarpone ani świeżych truskawek. Potem pojechałam na targ naprzeciwko dworca i kupiłam dwa kilo truskawek i pięć jajek. W domu okazało się, że śmietana jest przeterminowana, więc zamówiłam brakujące składniki z dostawą do domu. Wszystko kosztowało sto dwadzieścia złotych. Tort był pyszny, a goście zjedli wszystko do ostatniego okruszka!"
      }
    }

  ]
});
