// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
COURSE.module({
  id: "m13",
  n: 13,
  level: "A2",
  extra: true,
  title: "Przypadki w praktyce",
  titleRu: "Відмінки на практиці",
  summary: "Бонусний модуль-систематизація: після нього ви бачите всі сім польських відмінків як єдину систему, впевнено вибираєте між родовим і знахідним, орудним і місцевим, правильно ставите особові займенники й кличний відмінок і знаєте, де польська підступно відрізняється від української.",
  lessons: [

    // ───────────────────────── Урок 1 ─────────────────────────
    {
      id: "m13l1",
      title: "Kto? Co? Komu? Czym?",
      titleRu: "Система семи відмінків",
      topic: "Rodzina i dom",
      review: false,
      minutes: 28,
      goals: [
        "Ставити питання до всіх семи відмінків і впізнавати відмінок за питанням",
        "Відмінювати іменники й прикметники в однині всіх трьох родів",
        "Бачити, де польські відмінки збігаються з українськими, а де ні",
        "Розрізняти на слух кінцеві -ę та -ą"
      ],

      vocab: [
        { pl: "wnuczka", g: "f", ru: "онука", ex: "Babcia codziennie dzwoni do wnuczki.", exRu: "Бабуся щодня дзвонить онуці.", note: "dzwonić do + род. в. — а не давальний, як в українській" },
        { pl: "bratowa", g: "f", ru: "дружина брата, невістка", ex: "Moja bratowa pochodzi z Lublina.", exRu: "Дружина мого брата родом із Любліна.", note: "відмінюється як прикметник: bratowej, z bratową" },
        { pl: "teść / teściowa", ru: "тесть, свекор / теща, свекруха", ex: "W niedzielę jemy obiad u teściów.", exRu: "У неділю ми обідаємо в тестя з тещею.", note: "польська не розрізняє «тещу» і «свекруху»: обидві — teściowa; teściowie — батьки чоловіка або дружини" },
        { pl: "chrzestna", g: "f", ru: "хрещена мати", ex: "Moja chrzestna zawsze pamięta o moich imieninach.", exRu: "Моя хрещена завжди пам’ятає про мої іменини.", note: "також matka chrzestna; хрещений батько — chrzestny, ojciec chrzestny" },
        { pl: "domownik", g: "m", ru: "член родини, домашній (хто живе в домі)", ex: "Wszyscy domownicy już śpią.", exRu: "Усі домашні вже сплять." },
        { pl: "salon", g: "m", ru: "вітальня", ex: "Wieczorem cała rodzina siedzi w salonie.", exRu: "Увечері вся родина сидить у вітальні.", note: "у квартирі кажуть і pokój dzienny; salon fryzjerski — перукарня" },
        { pl: "przedpokój", g: "m", ru: "передпокій, коридор", ex: "Buty zostawiamy w przedpokoju.", exRu: "Взуття ми залишаємо в передпокої.", note: "ó → o в непрямих відмінках: w przedpokoju" },
        { pl: "piwnica", g: "f", ru: "підвал, льох", ex: "Rowery trzymamy w piwnicy.", exRu: "Велосипеди ми тримаємо в підвалі.", note: "piwo тут ні до чого — хоча в Кракові в piwnicach справді часто є бари" },
        { pl: "opiekować się", ru: "доглядати, піклуватися", ex: "Opiekuję się chorą babcią.", exRu: "Я доглядаю хвору бабусю.", note: "+ оруд. в. (kim? czym?) — в українській «доглядати кого» зі знахідним" },
        { pl: "dzielić się", ru: "ділитися", ex: "Zawsze dzielę się czekoladą z młodszym bratem.", exRu: "Я завжди ділюся шоколадом із молодшим братом.", note: "dzielić się czym z kim — обидва додатки в орудному; але кімнату: dzielić pokój z kimś" },
        { pl: "podobny do", ru: "схожий на", ex: "Jesteś bardzo podobna do mamy.", exRu: "Ти дуже схожа на маму.", note: "do + род. в., а не «на + знах.», як в українській!" },
        { pl: "przypominać", ru: "нагадувати; бути схожим", ex: "Ten dom przypomina mi dzieciństwo.", exRu: "Цей дім нагадує мені дитинство.", note: "przypominać komu co / kogo" },
        { pl: "rozpieszczać", ru: "балувати, розпещувати", ex: "Dziadkowie rozpieszczają wnuki.", exRu: "Дідусь і бабуся балують онуків." }
      ],

      grammar: {
        title: "Сім відмінків: система однини",
        html: `<p>У польській, як і в українській, <b>сім відмінків</b>. Добра новина: шість із семи мають ті самі питання, що й наші, а багато закінчень схожі. Погана новина: схожість підступна — саме там, де «все як у нас», найчастіше трапляються помилки. Цей бонусний модуль збирає все, що ви вже знаєте про відмінки, в одну систему.</p>
<h4>1. Відмінки та їхні питання</h4>
<table class="g">
<tr><th>польська назва</th><th>питання</th><th>українською</th><th>приклад</th></tr>
<tr><td>mianownik</td><td class="pl">kto? co?</td><td>називний</td><td class="pl">To jest mój brat.</td></tr>
<tr><td>dopełniacz</td><td class="pl">kogo? czego?</td><td>родовий</td><td class="pl">Nie ma brata.</td></tr>
<tr><td>celownik</td><td class="pl">komu? czemu?</td><td>давальний</td><td class="pl">Pomagam bratu.</td></tr>
<tr><td>biernik</td><td class="pl">kogo? co?</td><td>знахідний</td><td class="pl">Kocham brata.</td></tr>
<tr><td>narzędnik</td><td class="pl">(z) kim? (z) czym?</td><td>орудний</td><td class="pl">Rozmawiam z bratem.</td></tr>
<tr><td>miejscownik</td><td class="pl">o kim? o czym?</td><td>місцевий</td><td class="pl">Myślę o bracie.</td></tr>
<tr><td>wołacz</td><td>—</td><td>кличний</td><td class="pl">Bracie!</td></tr>
</table>
<div class="tip"><b>Пастка: питання місцевого.</b> В українській місцевий перевіряємо питаннями «на кому? на чому? у чому?», а польська граматика ставить <span class="pl">o kim? o czym?</span> — бо найчастіший прийменник із цим відмінком — <span class="pl">o</span> (про). І тут друга пастка: українське «думаю <i>про брата</i>» — це знахідний, а польське <span class="pl">Myślę o bracie.</span> — місцевий!</div>
<h4>2. Іменники: однина</h4>
<table class="g">
<tr><th></th><th>ч. р. (особа)</th><th>ч. р. (річ)</th><th>ж. р.</th><th>ж. р. (м’яка)</th><th>с. р.</th></tr>
<tr><td>M.</td><td class="pl">syn</td><td class="pl">telefon</td><td class="pl">mama</td><td class="pl">ciocia</td><td class="pl">okno</td></tr>
<tr><td>D.</td><td class="pl">syna</td><td class="pl">telefonu</td><td class="pl">mamy</td><td class="pl">cioci</td><td class="pl">okna</td></tr>
<tr><td>C.</td><td class="pl">synowi</td><td class="pl">telefonowi</td><td class="pl">mamie</td><td class="pl">cioci</td><td class="pl">oknu</td></tr>
<tr><td>B.</td><td class="pl">syna</td><td class="pl">telefon</td><td class="pl">mamę</td><td class="pl">ciocię</td><td class="pl">okno</td></tr>
<tr><td>N.</td><td class="pl">synem</td><td class="pl">telefonem</td><td class="pl">mamą</td><td class="pl">ciocią</td><td class="pl">oknem</td></tr>
<tr><td>Msc.</td><td class="pl">synu</td><td class="pl">telefonie</td><td class="pl">mamie</td><td class="pl">cioci</td><td class="pl">oknie</td></tr>
<tr><td>W.</td><td class="pl">synu!</td><td class="pl">telefonie!</td><td class="pl">mamo!</td><td class="pl">ciociu!</td><td class="pl">okno!</td></tr>
</table>
<ul>
<li><b>Як у нас:</b> у ч. р. для осіб і тварин знахідний = родовий (<span class="pl">widzę syna</span>), для речей знахідний = називний (<span class="pl">mam telefon</span>) — точно як «бачу сина», «маю телефон».</li>
<li><b>Як у нас:</b> у ж. р. давальний = місцевий (<span class="pl">mamie — o mamie</span>), як «мамі — на мамі». Ч. р. давальний <b>-owi</b> ≈ українське «-ові»: <span class="pl">synowi</span> — «синові». Кілька коротких слів мають <b>-u</b>: <span class="pl">bratu, ojcu, panu, kotu, psu</span>.</li>
<li><b>Інакше:</b> знахідний ж. р. <b>-ę</b> замість українського «-у» (<span class="pl">mamę</span> — «маму»), орудний <b>-ą</b> замість «-ою» (<span class="pl">mamą</span> — «мамою»), місцевий ч. р. часто <b>-u</b> (<span class="pl">o synu, w domu</span>).</li>
</ul>
<h4>3. Прикметники (і займенники mój, ten)</h4>
<table class="g">
<tr><th></th><th>ч. р.</th><th>ж. р.</th><th>с. р.</th></tr>
<tr><td>M.</td><td class="pl">dobry</td><td class="pl">dobra</td><td class="pl">dobre</td></tr>
<tr><td>D.</td><td class="pl">dobrego</td><td class="pl">dobrej</td><td class="pl">dobrego</td></tr>
<tr><td>C.</td><td class="pl">dobremu</td><td class="pl">dobrej</td><td class="pl">dobremu</td></tr>
<tr><td>B.</td><td class="pl">dobrego (особа) / dobry (річ)</td><td class="pl">dobrą</td><td class="pl">dobre</td></tr>
<tr><td>N.</td><td class="pl">dobrym</td><td class="pl">dobrą</td><td class="pl">dobrym</td></tr>
<tr><td>Msc.</td><td class="pl">dobrym</td><td class="pl">dobrej</td><td class="pl">dobrym</td></tr>
</table>
<p>Запам’ятайте три «склеєні» форми: у ж. р. <b>-ej</b> — це і родовий, і давальний, і місцевий; <b>-ą</b> — і знахідний, і орудний; у ч. і с. р. <b>-ym</b> — і орудний, і місцевий. Після k, g з’являється <b>-i-</b>: <span class="pl">polskiego, polskim, drogiej</span>.</p>
<div class="ex"><span class="pl">Mieszkam z moją starszą siostrą w dużym domu pod Krakowem.</span> — Я живу зі своєю старшою сестрою у великому будинку під Краковом.</div>
<div class="tip"><b>Кличний відмінок</b> в українській живий — і в польській теж. Але в розмові з друзями поляки дедалі частіше кличуть одне одного називним: <span class="pl">Kasia, chodź tu!</span> А от у звертаннях із <span class="pl">pan / pani</span>, у листах і привітаннях кличний обов’язковий: <span class="pl">Panie Marku! Droga Ciociu!</span> Детально — в уроці 4.</div>`
      },

      exercises: [
        { type: "match", q: "З’єднайте назву відмінка з його питаннями", pairs: [["dopełniacz", "kogo? czego?"], ["celownik", "komu? czemu?"], ["biernik", "kogo? co?"], ["narzędnik", "z kim? z czym?"], ["miejscownik", "o kim? o czym?"]], explain: "Питання ті самі, що в українській, крім місцевого: польська ставить o kim? o czym?, а не «на кому? на чому?»." },
        { type: "choice", q: "Często myślę o ___ (moja bratowa).", options: ["mojej bratowej", "moją bratową", "moja bratowa"], answer: 0, explain: "o + місцевий: ж. р. -ej (mojej bratowej). Українське «думаю про невістку» має знахідний — не переносьте його в польську." },
        { type: "gap", q: "W weekendy pomagam ___ (mój teść) w ogrodzie.", answers: ["mojemu teściowi"], explain: "pomagać + давальний: mój → mojemu, teść → teściowi (-owi ≈ укр. «-ові»: «тестеві»)." },
        { type: "gap", q: "Babcia rozpieszcza swoją jedyną ___ (wnuczka).", answers: ["wnuczkę"], explain: "Прямий додаток — знахідний: ж. р. -a → -ę (укр. «-у»): wnuczkę." },
        { type: "choice", q: "Po pracy opiekuję się ___.", options: ["młodszym bratem", "młodszego brata", "młodszy brat"], answer: 0, explain: "opiekować się + орудний: młodszym bratem. Українською «доглядаю молодшого брата» (знахідний) — пастка!" },
        { type: "choice", q: "Wszyscy mówią, że jesteś podobny do ___.", options: ["taty", "tatę", "tatą"], answer: 0, explain: "podobny do + родовий: do taty. Українською «схожий на тата» — інший прийменник і інший відмінок." },
        { type: "gap", q: "Stare rowery stoją w ___ (piwnica).", answers: ["piwnicy"], explain: "Gdzie? — w + місцевий. Ж. р. з основою на -c має -y: w piwnicy (як na ulicy)." },
        { type: "choice", q: "W ___ wiszą kurtki wszystkich domowników.", options: ["przedpokoju", "przedpokój", "przedpokojem"], answer: 0, explain: "w + місцевий; ч. р. з м’якою основою (-j) має -u, а ó переходить в o: w przedpokoju." },
        { type: "order", ru: "Я завжди ділюся шоколадом із сестрою.", words: ["Zawsze", "dzielę", "się", "czekoladą", "z", "siostrą."], alt: ["Zawsze dzielę się z siostrą czekoladą."], explain: "dzielić się czym (оруд.) z kim (оруд.): czekoladą, z siostrą. Się стоїть одразу після дієслова." },
        { type: "translate", ru: "Я часто думаю про брата.", answers: ["Często myślę o bracie.", "Myślę często o bracie."], explain: "o + місцевий: brat → o bracie (t → ci, як у w mieście). Не «o brata»!" }
      ],

      pronunciation: {
        focus: "-ę і -ą у кінці слова (знахідний і орудний)",
        tip: `<p>Закінчення <b>-ę</b> і <b>-ą</b> несуть граматичну інформацію: <span class="pl">mamę</span> — знахідний, <span class="pl">mamą</span> — орудний. Тому їх треба чути й вимовляти.</p>
<ul>
<li><b>-ę у кінці слова</b> в сучасній вимові звучить майже як чисте [е], ледь носове: <span class="pl">mamę</span> ≈ [маме], <span class="pl">siostrę</span> ≈ [сьостре]. «Мамен» чи «маменг» — неправильно.</li>
<li><b>-ą у кінці слова</b> завжди носове, схоже на [оў] з носовим призвуком: <span class="pl">mamą</span> ≈ [мамоў], <span class="pl">z ciocią</span> ≈ [з чьочьоў].</li>
</ul>
<div class="tip">Типова помилка — вимовляти обидва закінчення як українське «-у» або «-ою». Пам’ятайте: знахідний <span class="pl">-ę</span> ≈ [е], орудний <span class="pl">-ą</span> ≈ [оў].</div>`,
        items: [
          { type: "listen", text: "Kocham mamę i tatę.", ru: "Я люблю маму й тата.", note: "кінцеве ę ≈ легке [е]" },
          { type: "listen", text: "Rozmawiam z mamą i z ciocią.", ru: "Я розмовляю з мамою і з тіткою.", note: "кінцеве ą ≈ [оў]" },
          { type: "minimal", options: ["mamę", "mamą"], ru: ["маму (знах.)", "мамою (оруд.)"] },
          { type: "minimal", options: ["siostrę", "siostrą"], ru: ["сестру (знах.)", "сестрою (оруд.)"] },
          { type: "stress", word: "przedpokoju", syllables: ["przed", "po", "ko", "ju"], answer: 2 },
          { type: "stress", word: "domownicy", syllables: ["do", "mow", "ni", "cy"], answer: 2 },
          { type: "dictation", text: "Opiekuję się babcią i często odwiedzam ciocię." }
        ]
      },

      reading: {
        title: "Jeden dom, siedem przypadków",
        text: "Nazywam się Ola i mieszkam z rodziną w starym domu pod Krakowem. Dom jest duży, ale domowników jest dużo: ja, mój mąż Bartek, nasz syn Staś, teść i teściowa. Na szczęście każdy ma swój pokój, a wspólny jest tylko salon.\n\nTeść ma osiemdziesiąt lat i potrzebuje pomocy. Opiekuję się nim razem z teściową. Bartek pracuje zdalnie w piwnicy, bo tam jest cicho. Mówi, że to jego biuro, ale ja wiem, że w piwnicy stoi też jego kolekcja win.\n\nStaś jest bardzo podobny do dziadka: ma ten sam nos i ten sam uparty charakter. Dziadkowie go rozpieszczają i dają mu słodycze, chociaż ja się nie zgadzam.\n\nW weekendy przyjeżdża do nas moja bratowa z córką. Wtedy w przedpokoju stoi dziesięć par butów, a w salonie jest głośno jak na stadionie. Dzielimy się obowiązkami: ja gotuję, bratowa piecze ciasto, a mężczyźni zmywają.\n\nCzasami marzę o małym mieszkaniu w centrum. Ale kiedy wieczorem cała rodzina siedzi przy jednym stole, myślę: „Nie, ten dom przypomina mi, co jest najważniejsze”.",
        glossary: [
          { pl: "kolekcja win", ru: "колекція вин" },
          { pl: "uparty", ru: "упертий" },
          { pl: "słodycze", ru: "солодощі" },
          { pl: "nie zgadzam", ru: "(не) погоджуюся" },
          { pl: "piecze", ru: "пече" },
          { pl: "zmywają", ru: "миють посуд" },
          { pl: "marzę o", ru: "мрію про (+ місц. в.)" }
        ],
        questions: [
          { type: "tf", q: "Bartek pracuje w biurze w centrum Krakowa.", answer: false, explain: "Він працює дистанційно в підвалі: «Bartek pracuje zdalnie w piwnicy»." },
          { type: "tf", q: "Staś ma charakter dziadka.", answer: true, explain: "«Ma ten sam nos i ten sam uparty charakter»." },
          { type: "choice", q: "Kto piecze ciasto w weekendy?", options: ["Ola", "bratowa", "teściowa"], answer: 1, explain: "«Ja gotuję, bratowa piecze ciasto, a mężczyźni zmywają»." },
          { type: "choice", q: "Dlaczego Bartek pracuje w piwnicy?", options: ["Bo tam jest cicho.", "Bo tam jest ciepło.", "Bo tam stoi komputer teścia."], answer: 0, explain: "«Bartek pracuje zdalnie w piwnicy, bo tam jest cicho» — хоча Оля підозрює, що причина в колекції вин." },
          { type: "tf", q: "Ola chce się przeprowadzić do mieszkania w centrum.", answer: false, explain: "Вона лише іноді мріє про це, але вирішує: «Nie, ten dom przypomina mi, co jest najważniejsze»." }
        ]
      },

      writing: {
        prompt: "Ваш польський друг Матео питає про вашу родину. Напишіть йому повідомлення: з ким ви живете і де (у квартирі, у будинку), на кого схожі ви чи ваші діти, про кого ви піклуєтеся або кому допомагаєте, про кого часто думаєте. Наприкінці поставте йому запитання.",
        minWords: 40,
        maxWords: 80,
        useWords: ["podobny do", "opiekować się", "przedpokój", "domownik"],
        checklist: [
          { label: "Щонайменше 2 форми орудного після z / ze (z mamą, z bratem…)", pattern: "\\bze?\\s+\\p{L}+(ą|em|iem)\\b", min: 2 },
          { label: "Щонайменше 2 прикметники або займенники на -ej / -ego", pattern: "\\p{L}+(ej|ego)\\b", min: 2 }
        ],
        model: "Cześć, Mateo! Mieszkam z mężem i z córką w małym domu pod Lublinem. Mamy czterech domowników, bo mieszka z nami też moja teściowa. Córka jest bardzo podobna do męża. W przedpokoju zawsze leżą jej zabawki. Kiedy teść był chory, teściowa opiekowała się nim, a ja pomagałam jej w kuchni. Często myślę o mojej rodzinie w Ukrainie i dzwonię do mojego brata. A ty? Z kim mieszkasz?"
      }
    },

    // ───────────────────────── Урок 2 ─────────────────────────
    {
      id: "m13l2",
      title: "Nie mam samochodu",
      titleRu: "Родовий чи знахідний: заперечення й керування",
      topic: "Zakupy i potrzeby",
      review: false,
      minutes: 27,
      goals: [
        "Автоматично ставити родовий після заперечення замість знахідного",
        "Запам’ятати дієслова з родовим, які в українській мають знахідний (szukać, słuchać, używać, pilnować)",
        "Вживати прийменники з родовим: podczas, według, zamiast, oprócz, z powodu",
        "Правильно наголошувати довгі відмінкові форми"
      ],

      vocab: [
        { pl: "pralka", g: "f", ru: "пральна машина", ex: "Nasza pralka znowu nie działa.", exRu: "Наша пральна машина знову не працює." },
        { pl: "wyprzedaż", g: "f", ru: "розпродаж", ex: "Kupiłam tę kurtkę na wyprzedaży za pół ceny.", exRu: "Я купила цю куртку на розпродажі за пів ціни.", note: "ж. р., хоч закінчується на приголосний: tej wyprzedaży" },
        { pl: "rozmiar", g: "m", ru: "розмір", ex: "Czy jest ta koszula w większym rozmiarze?", exRu: "Чи є ця сорочка більшого розміру?" },
        { pl: "przymierzalnia", g: "f", ru: "примірочна", ex: "Przymierzalnie są na końcu sklepu.", exRu: "Примірочні в кінці магазину.", note: "przymierzać / przymierzyć — приміряти" },
        { pl: "raty", g: "pl", ru: "розстрочка (внески)", ex: "Kupiliśmy lodówkę na raty.", exRu: "Ми купили холодильник у розстрочку.", note: "na raty — у розстрочку; rata — один внесок" },
        { pl: "używany", ru: "вживаний, б/в", ex: "Szukam używanego roweru.", exRu: "Я шукаю вживаний велосипед.", note: "szukać + род. в.: używanego roweru, а не «używany rower»" },
        { pl: "lista życzeń", g: "f", ru: "список бажань", ex: "Dodałem te słuchawki do listy życzeń.", exRu: "Я додав ці навушники до списку бажань." },
        { pl: "zwracać / zwrócić", ru: "повертати / повернути", ex: "Chcę zwrócić te buty, są za małe.", exRu: "Я хочу повернути це взуття, воно замале.", note: "zwrot — повернення товару; без чека (paragonu) буває складно" },
        { pl: "pilnować", ru: "пильнувати, наглядати, стерегти", ex: "Pilnuj torby, idę do przymierzalni.", exRu: "Пильнуй сумку, я йду в примірочну.", note: "+ род. в.: pilnować dziecka, torby — в українській зі знахідним" },
        { pl: "żałować", ru: "шкодувати", ex: "Nie żałuję tego zakupu.", exRu: "Я не шкодую про цю покупку.", note: "+ род. в. без прийменника: żałować czego? — укр. «шкодувати про що»" },
        { pl: "dotyczyć", ru: "стосуватися", ex: "Promocja nie dotyczy tego produktu.", exRu: "Акція не стосується цього товару.", note: "+ род. в., як «стосуватися чого»" },
        { pl: "wymagać", ru: "вимагати, потребувати", ex: "Ta pralka wymaga naprawy.", exRu: "Ця пральна машина потребує ремонту.", note: "+ род. в., як «вимагати чого»" }
      ],

      grammar: {
        title: "Родовий чи знахідний: заперечення, дієслова, прийменники",
        html: `<p>Родовий і знахідний — два відмінки, які українськомовні плутають найчастіше. Причина проста: в українській межа між ними гнучка («не купив хліб» і «не купив хліба» — обидва варіанти можливі), а в польській правила жорсткі.</p>
<h4>1. Заперечення перемикає знахідний на родовий</h4>
<p>Якщо дієслово вимагає знахідного, то з <span class="pl">nie</span> додаток <b>завжди</b> переходить у родовий — без винятків і без варіантів:</p>
<table class="g">
<tr><th>так (знахідний)</th><th>ні (родовий)</th></tr>
<tr><td class="pl">Mam samochód.</td><td class="pl">Nie mam samochodu.</td></tr>
<tr><td class="pl">Lubię kawę.</td><td class="pl">Nie lubię kawy.</td></tr>
<tr><td class="pl">Kupiłem nową pralkę.</td><td class="pl">Nie kupiłem nowej pralki.</td></tr>
<tr><td class="pl">Znam tego sprzedawcę.</td><td class="pl">Nie znam tego sprzedawcy.</td></tr>
<tr><td class="pl">Widzę przymierzalnię.</td><td class="pl">Nie widzę przymierzalni.</td></tr>
</table>
<p>Правило стосується <b>лише знахідного</b>. Інші відмінки після <span class="pl">nie</span> не змінюються:</p>
<div class="ex"><span class="pl">Nie pomagam bratu.</span> (давальний) · <span class="pl">Nie interesuję się modą.</span> (орудний) · <span class="pl">Nie myślę o zakupach.</span> (місцевий)</div>
<div class="tip"><b>Пастка: nie jest / nie był.</b> Після <span class="pl">być</span> родового немає: <span class="pl">To nie jest mój rozmiar.</span> <span class="pl">Nie jestem ekspertem.</span> Родовий з’являється лише в <span class="pl">nie ma / nie było / nie będzie</span> у значенні «немає»: <span class="pl">Nie ma już rozmiaru M.</span></div>
<h4>2. Дієслова з родовим</h4>
<p>Частина дієслів вимагає родового завжди — і з запереченням, і без нього. Найнебезпечніші ті, де в українській знахідний:</p>
<table class="g">
<tr><th>дієслово</th><th>приклад</th><th>українською (знахідний!)</th></tr>
<tr><td class="pl">szukać</td><td class="pl">Szukam pracy.</td><td>шукаю роботу</td></tr>
<tr><td class="pl">słuchać</td><td class="pl">Słucham podcastu.</td><td>слухаю подкаст</td></tr>
<tr><td class="pl">używać</td><td class="pl">Używam tej aplikacji.</td><td>використовую цей застосунок</td></tr>
<tr><td class="pl">pilnować</td><td class="pl">Pilnuj dziecka!</td><td>пильнуй дитину</td></tr>
<tr><td class="pl">uczyć się</td><td class="pl">Uczę się polskiego.</td><td>учу польську</td></tr>
<tr><td class="pl">zapomnieć</td><td class="pl">Zapomniałam portfela.</td><td>забула гаманець</td></tr>
</table>
<p>А ці збігаються з українськими — їх запам’ятати легко: <span class="pl">potrzebować pomocy</span> (потребувати допомоги), <span class="pl">bać się psa</span> (боятися собаки), <span class="pl">życzyć zdrowia</span> (бажати здоров’я), <span class="pl">unikać ludzi</span> (уникати людей), <span class="pl">wymagać cierpliwości</span>, <span class="pl">dotyczyć umowy</span>. Окремо — <span class="pl">żałować decyzji</span>: українською «шкодувати <i>про</i> рішення», а польською без прийменника.</p>
<h4>3. Прийменники з родовим</h4>
<p>Відомі вам <span class="pl">do, od, z, bez, u, dla, obok, koło, naprzeciwko</span> доповніть ще кількома корисними:</p>
<table class="g">
<tr><th>прийменник</th><th>значення</th><th>приклад</th></tr>
<tr><td class="pl">podczas</td><td>під час</td><td class="pl">podczas wyprzedaży</td></tr>
<tr><td class="pl">według</td><td>за, згідно з</td><td class="pl">według instrukcji</td></tr>
<tr><td class="pl">zamiast</td><td>замість</td><td class="pl">zamiast pralki</td></tr>
<tr><td class="pl">oprócz</td><td>крім</td><td class="pl">oprócz chleba</td></tr>
<tr><td class="pl">z powodu</td><td>через (причина)</td><td class="pl">z powodu remontu</td></tr>
<tr><td class="pl">około</td><td>близько, приблизно</td><td class="pl">około stu złotych</td></tr>
</table>
<div class="tip"><b>Пастка «через».</b> Нейтральну причину передає <span class="pl">z powodu</span> + родовий: <span class="pl">Sklep jest zamknięty z powodu remontu.</span> <span class="pl">przez</span> + знахідний теж означає причину, але з відтінком провини: <span class="pl">Przez ciebie spóźniłem się!</span></div>
<div class="ex"><span class="pl">Podczas wyprzedaży nie kupiłam niczego oprócz skarpetek.</span> — Під час розпродажу я не купила нічого, крім шкарпеток.</div>`
      },

      exercises: [
        { type: "gap", q: "Nie mam już ___ (samochód), jeżdżę rowerem.", answers: ["samochodu"], explain: "Заперечення: знахідний samochód → родовий samochodu (неістота, -u)." },
        { type: "choice", q: "Niestety nie znalazłam w sklepie ___.", options: ["mojego rozmiaru", "mój rozmiar", "moim rozmiarze"], answer: 0, explain: "znaleźć + знахідний, але з nie — родовий: mojego rozmiaru." },
        { type: "choice", q: "Sto złotych za skarpetki? To nie jest ___!", options: ["dobra cena", "dobrej ceny", "dobrą cenę"], answer: 0, explain: "Після nie jest родового немає — залишається називний: To nie jest dobra cena." },
        { type: "gap", q: "Od miesiąca szukam ___ (tania pralka).", answers: ["taniej pralki"], explain: "szukać + родовий завжди: tania pralka → taniej pralki. Українською «шукаю пральну машину» — знахідний." },
        { type: "gap", q: "Mój syn codziennie słucha ___ (ten podcast).", answers: ["tego podcastu"], explain: "słuchać + родовий: tego podcastu. Не «ten podcast»!" },
        { type: "match", q: "З’єднайте дієслово з правильною формою додатка", pairs: [["szukać", "portfela"], ["kupować", "sukienkę"], ["opiekować się", "babcią"], ["pomagać", "mamie"], ["myśleć", "o prezencie"]], explain: "szukać + родовий, kupować + знахідний, opiekować się + орудний, pomagać + давальний, myśleć o + місцевий." },
        { type: "choice", q: "Kupiłam tę kurtkę ___ wyprzedaży.", options: ["podczas", "przez", "dla"], answer: 0, explain: "podczas + родовий — «під час»: podczas wyprzedaży." },
        { type: "gap", q: "Wcale nie żałuję ___ (ten zakup).", answers: ["tego zakupu"], explain: "żałować + родовий без прийменника: tego zakupu (укр. «шкодувати про покупку»)." },
        { type: "order", ru: "Я не користуюся цим застосунком.", words: ["Nie", "używam", "tej", "aplikacji."], explain: "używać + родовий: tej aplikacji. Українською «користуюся чим» — орудний, «використовую що» — знахідний; польською — родовий." },
        { type: "translate", ru: "Я шукаю роботу.", answers: ["Szukam pracy."], explain: "szukać + родовий: praca → pracy. «Szukam pracę» — типова помилка." }
      ],

      pronunciation: {
        focus: "Наголос у довгих відмінкових формах",
        tip: `<p>Польський наголос майже завжди падає на <b>передостанній склад</b>. Коли закінчення додає склад, наголос «переїжджає» праворуч:</p>
<ul>
<li><span class="pl">samochód</span> (sa-MO-chód) → <span class="pl">samochodu</span> (sa-mo-CHO-du) → <span class="pl">samochodami</span> (sa-mo-cho-DA-mi);</li>
<li><span class="pl">wyprzedaż</span> (wy-PRZE-daż) → <span class="pl">wyprzedaży</span> (wy-prze-DA-ży).</li>
</ul>
<div class="tip">В українській наголос часто стоїть на тому самому місці в усіх відмінках («автомобі́ль — автомобі́ля»), тому українськомовні залишають його там, де він був у називному: «саМОходу». Рахуйте склади з кінця!</div>`,
        items: [
          { type: "listen", text: "samochód, samochodu, samochodem", ru: "автомобіль (наз., род., оруд.)", note: "наголос рухається праворуч" },
          { type: "listen", text: "Nie mam samochodu ani roweru.", ru: "У мене немає ні автомобіля, ні велосипеда." },
          { type: "stress", word: "samochodu", syllables: ["sa", "mo", "cho", "du"], answer: 2 },
          { type: "stress", word: "przymierzalni", syllables: ["przy", "mie", "rzal", "ni"], answer: 2 },
          { type: "stress", word: "wyprzedaży", syllables: ["wy", "prze", "da", "ży"], answer: 2 },
          { type: "dictation", text: "Podczas wyprzedaży nie kupiłam niczego oprócz skarpetek." }
        ]
      },

      reading: {
        title: "Wielkie zakupy pana Darka",
        text: "Pan Darek od tygodnia nie ma pralki. Stara pralka po dwudziestu latach pracy po prostu umarła. Żona daje mu listę: „Kup pralkę, ale nie za drogą. I nie zapomnij paragonu!”\n\nW sobotę pan Darek jedzie do dużego sklepu z elektroniką. Akurat trwa wyprzedaż. Sprzedawca pokazuje mu model z ekranem dotykowym. „Pan używa smartfona? Ta pralka wyśle panu wiadomość, kiedy pranie będzie gotowe!” Pan Darek nie potrzebuje wiadomości od pralki, ale model jest w promocji, więc kupuje go na raty.\n\nW domu okazuje się, że pralka nie mieści się w łazience. Brakuje trzech centymetrów. Żona nic nie mówi, tylko patrzy. To jest gorsze niż krzyk.\n\nNastępnego dnia pan Darek chce zwrócić pralkę. Niestety sprzedawca wyjaśnia, że rzeczy z wyprzedaży nie można zwrócić. Pan Darek kupuje więc mniejszą, używaną pralkę od sąsiada.\n\nTeraz w przedpokoju stoi wielkie pudło z nową pralką, której nikt nie używa. Żona kładzie na nim klucze i torby. Pan Darek niczego nie żałuje: „Przynajmniej mamy nowy stolik!”",
        glossary: [
          { pl: "umarła", ru: "померла (тут: зламалася назавжди)" },
          { pl: "ekranem dotykowym", ru: "сенсорним екраном" },
          { pl: "pranie", ru: "прання" },
          { pl: "nie mieści się", ru: "не вміщається" },
          { pl: "gorsze niż krzyk", ru: "гірше, ніж крик" },
          { pl: "pudło", ru: "велика коробка" },
          { pl: "stolik", ru: "столик" }
        ],
        questions: [
          { type: "tf", q: "Stara pralka działała dwadzieścia lat.", answer: true, explain: "«Po dwudziestu latach pracy po prostu umarła»." },
          { type: "choice", q: "Dlaczego pan Darek kupuje pralkę z ekranem?", options: ["Bo potrzebuje wiadomości od pralki.", "Bo jest w promocji.", "Bo żona tego chce."], answer: 1, explain: "«Nie potrzebuje wiadomości od pralki, ale model jest w promocji»." },
          { type: "choice", q: "Jaki problem jest w domu?", options: ["Pralka nie mieści się w łazience.", "Pralka nie działa.", "Pralka jest za mała."], answer: 0, explain: "«Pralka nie mieści się w łazience. Brakuje trzech centymetrów»." },
          { type: "tf", q: "Sklep przyjmuje zwrot pralki.", answer: false, explain: "«Rzeczy z wyprzedaży nie można zwrócić»." },
          { type: "tf", q: "Pan Darek żałuje zakupu.", answer: false, explain: "«Pan Darek niczego nie żałuje» — зверніть увагу на родовий: niczego." }
        ]
      },

      writing: {
        prompt: "Напишіть подрузі Ані про невдалий шопінг: чого ви шукали, чого не було в магазині (nie było…), що купили замість цього (zamiast…), чи вдалося щось повернути і чи шкодуєте ви про покупку. Наприкінці запитайте, що купила вона.",
        minWords: 40,
        maxWords: 80,
        useWords: ["wyprzedaż", "rozmiar", "zwrócić", "żałować"],
        checklist: [
          { label: "Щонайменше 2 заперечення з родовим (nie było…, nie mam…, nie znalazłam…)", pattern: "\\bnie\\s+(ma|mam|miał\\p{L}*|było|kupił\\p{L}*|znalazł\\p{L}*|widział\\p{L}*|lubię)\\b", min: 2 },
          { label: "Дієслово з родовим: szukać, potrzebować, używać, słuchać, pilnować або żałować", pattern: "\\b(szuka|potrzeb|używa|słucha|pilnow|pilnuj|żału|żałow)\\p{L}*", min: 1 },
          { label: "Прийменник з родовим: podczas, zamiast, oprócz, według, z powodu", pattern: "\\b(podczas|zamiast|oprócz|według|z powodu)\\b", min: 1 }
        ],
        model: "Cześć, Ania! W sobotę byłam na wyprzedaży w galerii. Szukałam zimowej kurtki, ale nie było mojego rozmiaru. Niestety nie znalazłam też butów. Zamiast kurtki kupiłam więc dwa swetry i szalik. W domu okazało się, że jeden sweter jest za duży. Chciałam go zwrócić, ale zgubiłam paragon! Na początku żałowałam tego zakupu, ale teraz w nim śpię, bo jest bardzo ciepły. A ty? Co ostatnio kupiłaś?"
      }
    },

    // ───────────────────────── Урок 3 ─────────────────────────
    {
      id: "m13l3",
      title: "Na stół czy na stole?",
      titleRu: "Орудний і місцевий: де? і куди?",
      topic: "Mieszkanie",
      review: false,
      minutes: 28,
      goals: [
        "Розрізняти питання gdzie? і dokąd? та вибирати відмінок після na, w, pod, nad, za, przed, między",
        "Правильно вживати дієслова розміщення: kłaść, stawiać, wieszać, chować",
        "Розрізняти z + орудний і z + родовий, o + місцевий і o + знахідний",
        "Чітко вимовляти м’які закінчення місцевого (w szafie, na dywanie)"
      ],

      vocab: [
        { pl: "wieszak", g: "m", ru: "вішалка", ex: "Twoja kurtka wisi na wieszaku.", exRu: "Твоя куртка висить на вішалці.", note: "місц. в.: na wieszaku (-u після k)" },
        { pl: "komoda", g: "f", ru: "комод", ex: "Skarpetki są w komodzie.", exRu: "Шкарпетки в комоді.", note: "ж. р.! w komodzie (d → dzi)" },
        { pl: "regał", g: "m", ru: "стелаж, відкрита книжкова шафа", ex: "Na regale stoją książki i rośliny.", exRu: "На стелажі стоять книжки й рослини." },
        { pl: "dywan", g: "m", ru: "килим", ex: "Kot śpi na dywanie.", exRu: "Кіт спить на килимі." },
        { pl: "zasłona", g: "f", ru: "штора, завіса", ex: "Za zasłoną ktoś się chowa!", exRu: "За шторою хтось ховається!" },
        { pl: "lustro", g: "n", ru: "дзеркало", ex: "W przedpokoju wisi duże lustro.", exRu: "У передпокої висить велике дзеркало.", note: "місц. в.: w lustrze (r → rz)" },
        { pl: "kaloryfer", g: "m", ru: "батарея (опалення)", ex: "Rękawiczki suszą się na kaloryferze.", exRu: "Рукавички сохнуть на батареї." },
        { pl: "gniazdko", g: "n", ru: "розетка", ex: "Przy łóżku nie ma gniazdka.", exRu: "Біля ліжка немає розетки.", note: "у розмові кажуть і kontakt" },
        { pl: "szuflada", g: "f", ru: "шухляда", ex: "Klucze są w górnej szufladzie.", exRu: "Ключі у верхній шухляді." },
        { pl: "kosz na śmieci", g: "m", ru: "смітник, відро для сміття", ex: "Kosz na śmieci stoi pod zlewem.", exRu: "Відро для сміття стоїть під раковиною." },
        { pl: "wieszać / powiesić", ru: "вішати / повісити", ex: "Powiesiłam nowy obraz nad kanapą.", exRu: "Я повісила нову картину над диваном.", note: "результат: obraz wisi nad kanapą" },
        { pl: "stawiać / postawić", ru: "ставити / поставити", ex: "Postaw kwiaty na parapecie, tam jest więcej słońca.", exRu: "Постав квіти на підвіконня, там більше сонця.", note: "поляки зазвичай кажуть na parapecie (місц.), а не «na parapet»" },
        { pl: "chować / schować", ru: "ховати / сховати", ex: "Schowaj zimowe ubrania do szafy.", exRu: "Сховай зимовий одяг у шафу.", note: "усередину — do + род. в." }
      ],

      grammar: {
        title: "Орудний і місцевий: gdzie? і dokąd?",
        html: `<p>Орудний (<span class="pl">kim? czym?</span>) і місцевий (<span class="pl">o kim? o czym?</span>) зустрічаються в тих самих ситуаціях — коли йдеться про місце. Ключ до правильного вибору — питання: <span class="pl">Gdzie?</span> (Де?) чи <span class="pl">Dokąd?</span> (Куди?).</p>
<h4>1. Закінчення однини: нагадування</h4>
<table class="g">
<tr><th></th><th>орудний</th><th>місцевий</th></tr>
<tr><td>ч. р.</td><td class="pl">-em / -iem: stołem, wieszakiem</td><td class="pl">-e: stole, dywanie; -u: wieszaku, domu</td></tr>
<tr><td>ж. р.</td><td class="pl">-ą: szafą, komodą</td><td class="pl">-e: szafie, komodzie; -i / -y: kuchni, piwnicy</td></tr>
<tr><td>с. р.</td><td class="pl">-em: lustrem, łóżkiem</td><td class="pl">-e: lustrze, oknie; -u: łóżku</td></tr>
<tr><td>прикм.</td><td class="pl">-ym / -ą: dużym, dużą</td><td class="pl">-ym / -ej: dużym, dużej</td></tr>
</table>
<p>Чергування в місцевому вам знайомі з української («на столі, на нозі»): <span class="pl">szafa → w szafie</span>, <span class="pl">komoda → w komodzie</span>, <span class="pl">lustro → w lustrze</span>, <span class="pl">dywan → na dywanie</span>.</p>
<h4>2. Gdzie? чи Dokąd?</h4>
<table class="g">
<tr><th>прийменник</th><th>dokąd? (рух, мета)</th><th>gdzie? (місце)</th></tr>
<tr><td class="pl">na</td><td class="pl">+ знах.: Kot wskoczył na stół.</td><td class="pl">+ місц.: Kot śpi na stole.</td></tr>
<tr><td class="pl">do / w</td><td class="pl">do + род.: Idę do kuchni.</td><td class="pl">w + місц.: Jestem w kuchni.</td></tr>
<tr><td class="pl">pod</td><td class="pl">+ знах.: Piłka wpadła pod łóżko.</td><td class="pl">+ оруд.: Piłka leży pod łóżkiem.</td></tr>
<tr><td class="pl">nad</td><td class="pl">+ знах.: Jedziemy nad jezioro.</td><td class="pl">+ оруд.: Lampa wisi nad stołem.</td></tr>
<tr><td class="pl">za</td><td class="pl">+ знах.: Kot wszedł za kanapę.</td><td class="pl">+ оруд.: Kot siedzi za kanapą.</td></tr>
<tr><td class="pl">przed</td><td class="pl">+ знах.: Wyszedł przed dom.</td><td class="pl">+ оруд.: Czeka przed domem.</td></tr>
<tr><td class="pl">między</td><td class="pl">+ знах.: Wstawiłam regał między okna.</td><td class="pl">+ оруд.: Regał stoi między oknami.</td></tr>
</table>
<p>Логіка така сама, як в українській: «заліз під ліжко — лежить під ліжком», «сховався за диван — сидить за диваном». Різниця одна: у значенні «всередину» польська вживає не <span class="pl">w</span> + знахідний, а <span class="pl">do</span> + родовий: <span class="pl">do szafy, do szuflady, do łazienki</span>.</p>
<div class="tip"><b>Головна пастка: kłaść, stawiać, wieszać.</b> Українською кажемо «поклади ключі <i>на стіл</i>», «повісь куртку <i>на вішалку</i>» (знахідний). Поляки ж із дієсловами розміщення зазвичай уживають <b>місцевий</b> — називають місце, де предмет опиниться: <span class="pl">Połóż klucze na stole.</span> <span class="pl">Powieś kurtkę na wieszaku.</span> <span class="pl">Postaw kwiaty na parapecie.</span> «Połóż na stół» можна почути в розмові, але нормою вважається <span class="pl">na stole</span>. Знахідний залишається після дієслів справжнього руху: <span class="pl">wskoczyć, wejść, rzucić, wpaść</span>: <span class="pl">Rzuciłem plecak na łóżko.</span></div>
<table class="g">
<tr><th>дія (куди покласти)</th><th>стан (де є)</th></tr>
<tr><td class="pl">kłaść / położyć</td><td class="pl">leżeć</td></tr>
<tr><td class="pl">stawiać / postawić</td><td class="pl">stać</td></tr>
<tr><td class="pl">wieszać / powiesić</td><td class="pl">wisieć</td></tr>
</table>
<h4>3. Один прийменник — два відмінки</h4>
<ul>
<li><span class="pl">z</span> + орудний = «з ким, з чим» (разом): <span class="pl">mieszkam z siostrą, kawa z mlekiem</span>; <span class="pl">z</span> + родовий = «звідки, з чого»: <span class="pl">wyjąć z szuflady, wrócić z pracy</span>. Як в українській: «з сестрою» — «з шухляди».</li>
<li><span class="pl">o</span> + місцевий = «про»: <span class="pl">rozmawiamy o mieszkaniu</span>; <span class="pl">o</span> + знахідний — після кількох дієслів: <span class="pl">prosić o pomoc</span> (просити допомоги), <span class="pl">pytać o drogę</span> (питати дорогу), <span class="pl">dbać o dom</span> (дбати про дім), <span class="pl">martwić się o dzieci</span> (хвилюватися за дітей).</li>
<li><span class="pl">po</span> + місцевий = «по, після»: <span class="pl">chodzić po mieszkaniu, po obiedzie</span>; <span class="pl">przy</span> + місцевий = «біля, при»: <span class="pl">przy oknie</span>.</li>
</ul>
<div class="tip"><b>Пастка «думати про».</b> Українське «про» вимагає знахідного («думаю про тебе»), а польське <span class="pl">o</span> у значенні «про» — місцевого: <span class="pl">Myślę o tobie.</span> <span class="pl">Marzę o własnym mieszkaniu.</span></div>`
      },

      exercises: [
        { type: "choice", q: "Kot wskoczył na ___ i zrzucił mój kubek.", options: ["stół", "stole", "stołem"], answer: 0, explain: "wskoczyć — рух (dokąd?), тому na + знахідний: na stół." },
        { type: "choice", q: "Pilot od telewizora leży pod ___.", options: ["kanapą", "kanapę", "kanapie"], answer: 0, explain: "leżeć — стан (gdzie?), тому pod + орудний: pod kanapą." },
        { type: "gap", q: "Klucze są w górnej ___ (szuflada).", answers: ["szufladzie"], explain: "Gdzie? — w + місцевий: d → dzi + e: w szufladzie (прикметник górnej теж у місцевому)." },
        { type: "gap", q: "Powieś kurtkę na ___ (wieszak), nie na krześle!", answers: ["wieszaku"], explain: "Дієслова розміщення в польській зазвичай з місцевим: powieś na wieszaku (після k — -u)." },
        { type: "choice", q: "Piłka wpadła pod ___.", options: ["regał", "regałem", "regale"], answer: 0, explain: "wpaść — рух, тому pod + знахідний: pod regał. Результат: piłka leży pod regałem." },
        { type: "gap", q: "Mokre rękawiczki suszą się na ___ (kaloryfer).", answers: ["kaloryferze"], explain: "Gdzie? — na + місцевий: r → rz + e: na kaloryferze." },
        { type: "choice", q: "Wyjmij czyste talerze z ___.", options: ["szafki", "szafką", "szafce"], answer: 0, explain: "z у значенні «звідки» — з родовим: z szafki. З орудним z означає «разом з»." },
        { type: "match", q: "З’єднайте початок і кінець речення", pairs: [["Mieszkam razem z", "siostrą."], ["Wyjęłam pieniądze z", "portfela."], ["Ciągle myślę o", "nowym mieszkaniu."], ["Proszę cię o", "pomoc."], ["Lampa wisi nad", "stołem."]], explain: "z + оруд. (разом), z + род. (звідки), o + місц. (про), prosić o + знах., nad + оруд. (де?)." },
        { type: "order", ru: "Постав квіти на підвіконня.", words: ["Postaw", "kwiaty", "na", "parapecie."], explain: "Дієслово розміщення + місцевий: na parapecie. Українською «на підвіконня» (знахідний), а польською природніше місцевий." },
        { type: "translate", ru: "Я думаю про нову квартиру.", answers: ["Myślę o nowym mieszkaniu."], explain: "o + місцевий: nowe mieszkanie → o nowym mieszkaniu. Не «o nowe mieszkanie»!" }
      ],

      pronunciation: {
        focus: "М’які закінчення місцевого: -ie, -ni, -rze",
        tip: `<p>У місцевому відмінку багато слів закінчуються на <b>-ie</b> після губних і <b>n</b>: <span class="pl">w szafie, na kanapie, na dywanie, w komodzie</span>. Тут <b>i</b> — не окремий голосний, а лише знак м’якості: <span class="pl">szafie</span> — два склади, [ша-ф’е], а не «ша-фі-е».</p>
<ul>
<li><b>-pie, -bie, -fie, -wie, -mie</b> — губний + легкий [й]: <span class="pl">na kanapie</span> ≈ [на канап’є].</li>
<li><b>-nie, -ni</b> = польське ń + голосний: <span class="pl">na dywanie</span> ≈ [на диваньє], <span class="pl">w kuchni</span> ≈ [ф кухнь’і].</li>
<li><b>-rze</b> = [же]: <span class="pl">na kaloryferze</span> ≈ [на калориф’еже], <span class="pl">w lustrze</span> ≈ [в лустше] — після глухого t rz оглушується.</li>
</ul>
<div class="tip">Типові помилки — твердо вимовляти «на шафе» або вставляти зайвий склад «на шафіе». Слухайте, як м’якість лише «фарбує» приголосний.</div>`,
        items: [
          { type: "listen", text: "w szafie, na dywanie, w lustrze", ru: "у шафі, на килимі, у дзеркалі", note: "-ie — лише пом’якшення, без окремого [і]" },
          { type: "listen", text: "Kot śpi na kaloryferze w kuchni.", ru: "Кіт спить на батареї на кухні." },
          { type: "minimal", options: ["na szafie", "na szafę"], ru: ["на шафі (де?)", "на шафу (куди?)"] },
          { type: "minimal", options: ["pod łóżkiem", "pod łóżko"], ru: ["під ліжком (де?)", "під ліжко (куди?)"] },
          { type: "stress", word: "kaloryferze", syllables: ["ka", "lo", "ry", "fe", "rze"], answer: 3 },
          { type: "dictation", text: "Kot śpi na dywanie, a klucze leżą w szufladzie." }
        ]
      },

      reading: {
        title: "Gdzie są moje klucze?",
        text: "Kuba spieszy się do pracy, ale nie może znaleźć kluczy. Zawsze kładzie je na komodzie w przedpokoju, ale dzisiaj ich tam nie ma.\n\nNajpierw szuka w kurtce, która wisi na wieszaku. Nic. Potem sprawdza szuflady w kuchni i kosz na śmieci pod zlewem. Też nic. Zagląda pod kanapę, za zasłony i nawet za kaloryfer. Pod kanapą znajduje tylko starą skarpetkę i długopis, który zgubił w zeszłym roku.\n\nKuba dzwoni do swojej dziewczyny, Zuzy. „A myślałeś o kocie?” — pyta Zuza. Kuba nie rozumie. Co ma kot do kluczy?\n\nWtedy widzi Filemona. Kot siedzi na regale między książkami i patrzy na niego bardzo spokojnie. Obok kota coś błyszczy. Klucze! Wczoraj wieczorem Filemon bawił się nimi na dywanie, a potem zaniósł je na górę jak swoją zdobycz.\n\nKuba wchodzi na krzesło i zabiera klucze. Spóźnia się do pracy o dwadzieścia minut. Wieczorem kupuje mały wieszak na klucze i wiesza go wysoko na ścianie obok lustra. Filemon patrzy na nowy wieszak z dużym zainteresowaniem.",
        glossary: [
          { pl: "spieszy się", ru: "поспішає" },
          { pl: "zlewem", ru: "раковиною (на кухні)" },
          { pl: "Zagląda", ru: "зазирає" },
          { pl: "długopis", ru: "кулькова ручка" },
          { pl: "błyszczy", ru: "блищить" },
          { pl: "zaniósł", ru: "відніс" },
          { pl: "zdobycz", ru: "здобич" },
          { pl: "z dużym zainteresowaniem", ru: "з великим інтересом" }
        ],
        questions: [
          { type: "tf", q: "Kuba zwykle kładzie klucze na komodzie.", answer: true, explain: "«Zawsze kładzie je na komodzie w przedpokoju» — дієслово розміщення + місцевий." },
          { type: "choice", q: "Co Kuba znajduje pod kanapą?", options: ["klucze", "starą skarpetkę i długopis", "kota"], answer: 1, explain: "«Pod kanapą znajduje tylko starą skarpetkę i długopis»." },
          { type: "choice", q: "Gdzie są klucze?", options: ["na regale obok kota", "w kurtce na wieszaku", "w koszu na śmieci"], answer: 0, explain: "«Kot siedzi na regale… Obok kota coś błyszczy. Klucze!»" },
          { type: "tf", q: "Kuba przychodzi do pracy na czas.", answer: false, explain: "«Spóźnia się do pracy o dwadzieścia minut»." },
          { type: "tf", q: "Nowy wieszak na klucze wisi nisko, przy podłodze.", answer: false, explain: "Kuba «wiesza go wysoko na ścianie obok lustra» — щоб кіт не дістав." }
        ]
      },

      writing: {
        prompt: "Ваш друг Олек поживе у вашій квартирі, поки ви у відрядженні, і догляне кота. Напишіть йому записку: де що лежить і стоїть (gdzie?), куди що класти й вішати (połóż, postaw, powieś, włóż…), де спить кіт. Подякуйте наприкінці.",
        minWords: 50,
        maxWords: 90,
        useWords: ["szuflada", "wieszak", "regał", "kaloryfer"],
        checklist: [
          { label: "Щонайменше 3 прийменники місця (na, w, pod, nad, za, przed, między, obok)", pattern: "\\b(na|w|we|pod|nad|za|przed|między|obok)\\s", min: 3 },
          { label: "Щонайменше 2 наказові форми дієслів розміщення (połóż, postaw, powieś, schowaj, włóż)", pattern: "\\b(połóż|postaw|powieś|schowaj|wstaw|włóż)\\p{L}*", min: 2 },
          { label: "Орудний після pod / nad / za / między", pattern: "\\b(pod|nad|za|między)\\s+\\p{L}+(em|ą|ami)\\b", min: 1 }
        ],
        model: "Cześć, Olek! Dziękuję, że zaopiekujesz się moim mieszkaniem. Klucze wiszą na wieszaku w przedpokoju. Kurtkę powieś obok, a buty postaw pod lustrem. Ręczniki są w szufladzie w komodzie. Na regale w salonie stoją moje kwiaty — podlewaj je, proszę, co trzy dni. Kot śpi zwykle na kaloryferze albo pod kanapą. Jego karma jest w szafce nad zlewem. Brudne naczynia włóż do zmywarki. Wracam w niedzielę. Dzięki!"
      }
    },

    // ───────────────────────── Урок 4 ─────────────────────────
    {
      id: "m13l4",
      title: "Panie Marku, dziękuję panu!",
      titleRu: "Давальний, кличний і особові займенники",
      topic: "Prezenty i życzenia",
      review: false,
      minutes: 29,
      goals: [
        "Вживати давальний іменників і прикметників у привітаннях і подарунках (komu? czemu?)",
        "Вибирати правильну форму особового займенника: коротку, повну чи з n- після прийменника",
        "Утворювати кличний відмінок імен і звертатися до людей офіційно й по-дружньому",
        "Вимовляти звертання з правильною інтонацією"
      ],

      vocab: [
        { pl: "życzenia", g: "pl", ru: "побажання, вітання", ex: "Składam ci najlepsze życzenia!", exRu: "Щиро вітаю тебе!", note: "składać życzenia komu — вітати когось" },
        { pl: "z okazji", ru: "з нагоди", ex: "Wszystkiego najlepszego z okazji urodzin!", exRu: "Усього найкращого з нагоди дня народження!", note: "+ род. в.: z okazji świąt, ślubu, imienin" },
        { pl: "gratulować / pogratulować", ru: "вітати (з успіхом), поздоровляти", ex: "Gratuluję ci nowej pracy!", exRu: "Вітаю тебе з новою роботою!", note: "komu + czego: давальний + родовий — а в українській «вітати кого з чим»!" },
        { pl: "upominek", g: "m", ru: "невеликий подарунок, сувенір", ex: "Mam dla pani mały upominek.", exRu: "У мене для вас невеликий подаруночок." },
        { pl: "drobiazg", g: "m", ru: "дрібниця", ex: "To tylko drobiazg, nie trzeba dziękować.", exRu: "Це лише дрібниця, не треба дякувати." },
        { pl: "kwiaciarnia", g: "f", ru: "квіткова крамниця", ex: "Kupię kwiaty w kwiaciarni przy dworcu.", exRu: "Куплю квіти в квітковій крамниці біля вокзалу." },
        { pl: "solenizant / solenizantka", ru: "іменинник / іменинниця", ex: "Zdrowie solenizantki!", exRu: "За здоров’я іменинниці!", note: "у Польщі іменини (imieniny) святкують не менше, ніж день народження" },
        { pl: "wręczać / wręczyć", ru: "вручати / вручити", ex: "Wręczyliśmy szefowej kwiaty i kartkę.", exRu: "Ми вручили начальниці квіти й листівку.", note: "komu co: давальний + знахідний" },
        { pl: "pakować / zapakować", ru: "пакувати / запакувати", ex: "Czy może pan zapakować to na prezent?", exRu: "Чи можете ви запакувати це як подарунок?" },
        { pl: "cieszyć się / ucieszyć się", ru: "радіти / зрадіти", ex: "Mama bardzo ucieszyła się z prezentu.", exRu: "Мама дуже зраділа подарунку.", note: "z + род. в.: cieszyć się z czegoś — а не давальний, як в українській" },
        { pl: "spełnienie marzeń", g: "n", ru: "здійснення мрій", ex: "Życzę ci spełnienia marzeń!", exRu: "Бажаю тобі здійснення мрій!", note: "życzyć komu czego — давальний + родовий" },
        { pl: "sto lat", ru: "«сто років» — польська вітальна пісня", ex: "Wszyscy zaśpiewali solenizantowi „Sto lat”.", exRu: "Усі заспівали іменинникові «Сто років»." }
      ],

      grammar: {
        title: "Давальний, особові займенники, кличний",
        html: `<h4>1. Давальний (komu? czemu?) — адресат подарунків і побажань</h4>
<table class="g">
<tr><th></th><th>іменник</th><th>прикметник</th></tr>
<tr><td>ч. р.</td><td class="pl">-owi: synowi, Markowi, szefowi; -u: bratu, ojcu, panu, chłopcu</td><td class="pl">-emu: drogiemu</td></tr>
<tr><td>ж. р.</td><td class="pl">-e: mamie, siostrze, Ance, Oldze; -i / -y: babci, cioci, pani, koleżance</td><td class="pl">-ej: drogiej</td></tr>
<tr><td>с. р.</td><td class="pl">-u: dziecku, oknu</td><td class="pl">-emu: małemu</td></tr>
<tr><td>мн.</td><td class="pl">-om: rodzicom, dzieciom, przyjaciołom</td><td class="pl">-ym: drogim</td></tr>
</table>
<p>Давальний потрібен після <span class="pl">dawać, kupować, wysyłać, wręczać, pokazywać</span> (komu co), а також <span class="pl">pomagać, dziękować, ufać, przeszkadzać</span>. Особливі конструкції: <span class="pl">życzyć komu czego</span> (<span class="pl">Życzę ci zdrowia.</span>) і <span class="pl">gratulować komu czego</span> (<span class="pl">Gratuluję ci awansu!</span>).</p>
<div class="tip"><b>Пастка: gratulować, życzyć, cieszyć się.</b> «Вітаю тебе з підвищенням» → <span class="pl">Gratuluję ci awansu</span> (кому — чого, без прийменника). <span class="pl">gratulować</span> — лише з успіхом; з днем народження кажуть <span class="pl">Wszystkiego najlepszego z okazji urodzin!</span> А «радіти подарунку» → <span class="pl">cieszyć się z prezentu</span> (z + родовий).</div>
<h4>2. Особові займенники в усіх відмінках</h4>
<table class="g">
<tr><th>M.</th><th>D.</th><th>C.</th><th>B.</th><th>N.</th><th>Msc.</th></tr>
<tr><td class="pl">ja</td><td class="pl">mnie</td><td class="pl">mi, mnie</td><td class="pl">mnie</td><td class="pl">mną</td><td class="pl">mnie</td></tr>
<tr><td class="pl">ty</td><td class="pl">cię, ciebie</td><td class="pl">ci, tobie</td><td class="pl">cię, ciebie</td><td class="pl">tobą</td><td class="pl">tobie</td></tr>
<tr><td class="pl">on</td><td class="pl">go, jego, niego</td><td class="pl">mu, jemu, niemu</td><td class="pl">go, jego, niego</td><td class="pl">nim</td><td class="pl">nim</td></tr>
<tr><td class="pl">ona</td><td class="pl">jej, niej</td><td class="pl">jej, niej</td><td class="pl">ją, nią</td><td class="pl">nią</td><td class="pl">niej</td></tr>
<tr><td class="pl">ono</td><td class="pl">go, jego, niego</td><td class="pl">mu, jemu, niemu</td><td class="pl">je, nie</td><td class="pl">nim</td><td class="pl">nim</td></tr>
<tr><td class="pl">my</td><td class="pl">nas</td><td class="pl">nam</td><td class="pl">nas</td><td class="pl">nami</td><td class="pl">nas</td></tr>
<tr><td class="pl">wy</td><td class="pl">was</td><td class="pl">wam</td><td class="pl">was</td><td class="pl">wami</td><td class="pl">was</td></tr>
<tr><td class="pl">oni</td><td class="pl">ich, nich</td><td class="pl">im, nim</td><td class="pl">ich, nich</td><td class="pl">nimi</td><td class="pl">nich</td></tr>
<tr><td class="pl">one</td><td class="pl">ich, nich</td><td class="pl">im, nim</td><td class="pl">je, nie</td><td class="pl">nimi</td><td class="pl">nich</td></tr>
</table>
<ul>
<li><b>Коротка форма</b> (<span class="pl">go, mu, cię, ci, mi</span>) — нейтральна, ніколи на початку речення: <span class="pl">Dałem mu prezent. Widzę go.</span></li>
<li><b>Повна форма</b> (<span class="pl">jego, jemu, ciebie, tobie, mnie</span>) — на початку речення й при протиставленні: <span class="pl">Jemu kupiłem książkę, a jej kwiaty.</span></li>
<li><b>Після прийменника</b> — повна форма, у 3-й особі з <b>n-</b>: <span class="pl">do niego, dla niej, z nim, o nich, na nią</span> — так само, як українське «до нього, з нею».</li>
</ul>
<div class="tip"><b>Пастка: ją чи jej?</b> Українське «її» — і знахідний, і родовий. У польській це дві форми: <span class="pl">Kocham ją.</span> (знах.) — <span class="pl">Nie widzę jej.</span> (род. після заперечення) — <span class="pl">Daję jej prezent.</span> (дав.). «Kocham jej» — типова помилка українськомовних.</div>
<h4>3. Кличний відмінок (wołacz)</h4>
<table class="g">
<tr><th>тип</th><th>називний</th><th>кличний</th></tr>
<tr><td>ч. р., тверда основа: -e (чергування як у місцевому)</td><td class="pl">Adam, Piotr, Paweł, pan, doktor</td><td class="pl">Adamie! Piotrze! Pawle! panie! doktorze!</td></tr>
<tr><td>ч. р. на -k, -g, -ch і м’які: -u</td><td class="pl">Marek, Tomek, Jacek, Łukasz</td><td class="pl">Marku! Tomku! Jacku! Łukaszu!</td></tr>
<tr><td>ж. р. на -a: -o</td><td class="pl">Anna, Ewa, mama</td><td class="pl">Anno! Ewo! mamo!</td></tr>
<tr><td>ж. р. здрібнілі на -ia: -u</td><td class="pl">Kasia, Basia, ciocia, babcia</td><td class="pl">Kasiu! Basiu! ciociu! babciu!</td></tr>
<tr><td>ж. р. на -i: без змін</td><td class="pl">pani</td><td class="pl">pani!</td></tr>
</table>
<p>Офіційно-ввічливе звертання: <span class="pl">pan / pani</span> + ім’я в кличному: <span class="pl">Panie Marku! Pani Anno! Panie doktorze!</span> Але жіночі титули не змінюються: <span class="pl">Pani profesor! Pani doktor!</span> У листах: <span class="pl">Szanowny Panie! Droga Pani Ewo!</span></p>
<div class="tip"><b>Як в українській:</b> «пане Марку, пані Анно» — абсолютно та сама модель, тож вона вам природна. Але «Pani Anna!» як звертання (називним) звучить грубо, а от у розмові з друзями називний (<span class="pl">Kasia, chodź!</span>) цілком нормальний.</div>`
      },

      exercises: [
        { type: "gap", q: "Na urodziny kupiłam ___ (mój tata) nowy portfel.", answers: ["mojemu tacie"], explain: "kupić komu co: давальний. mój → mojemu, tata (ч. р. на -a) → tacie (t → ci, як у ж. р.)." },
        { type: "choice", q: "Droga ___, wszystkiego najlepszego z okazji urodzin! (na kartce)", options: ["Kasiu", "Kasię", "Kasią"], answer: 0, explain: "У листівці — кличний: здрібнілі на -ia мають -u: Kasia → Kasiu." },
        { type: "choice", q: "Dzień dobry, ___ Marku! Jak się pan ma?", options: ["panie", "pan", "panu"], answer: 0, explain: "Звертання — кличний: pan → panie, Marek → Marku (як укр. «пане Марку»)." },
        { type: "gap", q: "Nie widziałam ___ (ona) od miesiąca.", answers: ["jej"], explain: "Заперечення → родовий: jej. Знахідний був би ją (widziałam ją)." },
        { type: "choice", q: "Moja żona jest wspaniała. Kocham ___ najbardziej na świecie.", options: ["ją", "jej", "nią"], answer: 0, explain: "kochać + знахідний: ją. jej — родовий/давальний, nią — після прийменника або орудний." },
        { type: "gap", q: "Ten upominek jest dla ___ (on).", answers: ["niego"], explain: "Після прийменника — повна форма з n-: dla niego (як укр. «для нього»)." },
        { type: "match", q: "З’єднайте називний відмінок із кличним", pairs: [["Marek", "Marku!"], ["Anna", "Anno!"], ["Piotr", "Piotrze!"], ["babcia", "babciu!"], ["pan doktor", "panie doktorze!"], ["Tomek", "Tomku!"]], explain: "-k → -ku (Marku, Tomku), тверді основи → -e з чергуванням (Piotrze, doktorze), -a → -o (Anno), -ia → -iu (babciu)." },
        { type: "gap", q: "Gratuluję ___ (wy) ślubu!", answers: ["wam"], explain: "gratulować komu (давальний: wam) czego (родовий: ślubu)." },
        { type: "order", ru: "Ми бажаємо тобі здоров’я і щастя.", words: ["Życzymy", "ci", "zdrowia", "i", "szczęścia."], explain: "życzyć komu (ci — коротка форма, не на початку) czego (zdrowia, szczęścia — родовий)." },
        { type: "translate", ru: "Дякую вам за подарунок!", answers: ["Dziękuję wam za prezent!", "Dziękuję państwu za prezent!", "Dziękuję panu za prezent!", "Dziękuję pani za prezent!"], explain: "dziękować komu (давальний) za co (знахідний): wam / państwu / panu / pani za prezent." }
      ],

      pronunciation: {
        focus: "Інтонація звертань і кличний відмінок",
        tip: `<p>Звертання в польській відокремлюється короткою паузою й власним інтонаційним піком — як і в українській.</p>
<ul>
<li>Наголос у кличному залишається на передостанньому складі: <span class="pl">Pa-nie MAR-ku</span>, <span class="pl">Pa-ni AN-no</span>, <span class="pl">KA-siu</span> (тут два склади: si = ś).</li>
<li>У дружньому звертанні голос підіймається на наголошеному складі й м’яко спадає: <span class="pl">Kasiu!</span> — тепло, <span class="pl">Kasia!</span> — нейтрально або суворо.</li>
<li>В офіційному — рівна, спокійна мелодія без різкого підйому: <span class="pl">Panie doktorze, mam pytanie.</span></li>
</ul>
<div class="tip">Розрізняйте на слух кінцеве <b>-a</b> / <b>-o</b> / <b>-u</b>: саме воно відрізняє називний від кличного (<span class="pl">Anna – Anno</span>, <span class="pl">Kasia – Kasiu</span>).</div>`,
        items: [
          { type: "listen", text: "Panie Marku, dzień dobry!", ru: "Пане Марку, добрий день!", note: "коротка пауза після звертання" },
          { type: "listen", text: "Kasiu, wszystkiego najlepszego!", ru: "Касю, усього найкращого!" },
          { type: "minimal", options: ["Kasia", "Kasiu"], ru: ["Кася (наз.)", "Касю! (клич.)"] },
          { type: "minimal", options: ["Anna", "Anno"], ru: ["Анна (наз.)", "Анно! (клич.)"] },
          { type: "stress", word: "solenizantko", syllables: ["so", "le", "ni", "zant", "ko"], answer: 3 },
          { type: "dictation", text: "Droga Pani Ewo, dziękuję pani za piękne życzenia!" }
        ]
      },

      reading: {
        title: "Imieniny pani Haliny",
        text: "Dwudziestego czerwca w biurze firmy „Tęcza” wszyscy pamiętają o jednym: to imieniny pani Haliny, szefowej działu. Już tydzień wcześniej Marta zbiera pieniądze. „Kupmy jej coś praktycznego” — mówi Tomek. „Jej? Praktycznego? Ona ma wszystko!” — odpowiada Marta.\n\nW końcu decydują: kwiaty z kwiaciarni na rogu i mały upominek — bon do SPA. Tomek ma zapakować prezent, ale pakowanie nie idzie mu najlepiej. Papier się drze, a taśma przykleja się do rąk. Marta pomaga mu i oboje się śmieją.\n\nO dziesiątej cały dział wchodzi do gabinetu solenizantki. Marta wręcza jej kwiaty i mówi: „Pani Halino, z okazji imienin życzymy pani zdrowia, spokoju i spełnienia marzeń!” Wszyscy śpiewają „Sto lat”.\n\nPani Halina jest wzruszona. „Kochani, dziękuję wam! Panie Tomku, to pan pakował? Widzę, że włożył pan w to dużo serca”. Tomek się czerwieni.\n\nPotem szefowa otwiera szufladę i wyjmuje wielkie pudełko pączków. „To dla was. A teraz… do pracy!” — mówi z uśmiechem. Ale nikt nie wraca do biurka, dopóki nie zniknie ostatni pączek.",
        glossary: [
          { pl: "zbiera pieniądze", ru: "збирає гроші" },
          { pl: "na rogu", ru: "на розі" },
          { pl: "się drze", ru: "рветься" },
          { pl: "wzruszona", ru: "зворушена" },
          { pl: "Kochani", ru: "Любі мої" },
          { pl: "się czerwieni", ru: "червоніє" },
          { pl: "pączków", ru: "пончиків" },
          { pl: "dopóki nie zniknie", ru: "поки не зникне" }
        ],
        questions: [
          { type: "tf", q: "Imieniny pani Haliny są w czerwcu.", answer: true, explain: "«Dwudziestego czerwca… to imieniny pani Haliny»." },
          { type: "choice", q: "Co koledzy kupują szefowej?", options: ["kwiaty i bon do SPA", "pudełko pączków", "coś praktycznego do biura"], answer: 0, explain: "«Kwiaty z kwiaciarni na rogu i mały upominek — bon do SPA». Пончики приносить сама пані Галина." },
          { type: "choice", q: "Kto pomaga Tomkowi pakować prezent?", options: ["pani Halina", "Marta", "nikt"], answer: 1, explain: "«Marta pomaga mu i oboje się śmieją» — pomagać + давальний: mu." },
          { type: "tf", q: "Pani Halina nie lubi niespodzianek i jest zła.", answer: false, explain: "Вона зворушена: «Pani Halina jest wzruszona. Kochani, dziękuję wam!»" },
          { type: "tf", q: "Po życzeniach wszyscy od razu wracają do pracy.", answer: false, explain: "«Nikt nie wraca do biurka, dopóki nie zniknie ostatni pączek»." }
        ]
      },

      writing: {
        prompt: "Напишіть листівку з привітанням бабусі, тітці, колезі чи начальникові (на вибір): почніть зі звертання в кличному відмінку, назвіть нагоду (z okazji…), побажайте 2–3 речі (życzyć + родовий), скажіть, який подарунок ви надсилаєте або вручаєте. Підпишіться.",
        minWords: 40,
        maxWords: 80,
        useWords: ["z okazji", "życzenia", "upominek", "spełnienie"],
        checklist: [
          { label: "Звертання в кличному відмінку (Droga Aniu, Panie Marku, Kochana Babciu…)", pattern: "\\b(Drog[ia]|Kochan[ya]|Pani|Panie|Szanown[ya])\\s+\\p{L}+(o|u|e)\\b", min: 1 },
          { label: "Дієслово życzyć + родовий", pattern: "\\bżycz\\p{L}*", min: 1 },
          { label: "Щонайменше 2 займенники в давальному (ci, tobie, mu, jej, wam, panu, pani…)", pattern: "\\b(ci|tobie|mu|jemu|jej|wam|nam|panu|pani|państwu)\\b", min: 2 }
        ],
        model: "Droga Babciu! Z okazji Twoich urodzin składam Ci najserdeczniejsze życzenia. Życzę Ci przede wszystkim zdrowia, dużo radości i spełnienia wszystkich marzeń. Bardzo za Tobą tęsknię! Wysyłam Ci mały upominek — szalik, który sama zrobiłam na drutach. Mam nadzieję, że będzie Ci w nim ciepło. W sierpniu przyjadę do Ciebie z Olą i razem upieczemy Twój słynny sernik. Całuję mocno! Twoja wnuczka Iryna"
      }
    },

    // ───────────────────────── Урок 5: POWTÓRKA ─────────────────────────
    {
      id: "m13l5",
      title: "Powtórka: wszystkie przypadki",
      titleRu: "Повторення: відмінки однини й множини",
      topic: "Przeprowadzka",
      review: true,
      minutes: 30,
      goals: [
        "Зібрати в одну систему всі сім відмінків однини й множини",
        "Відмінювати іменники в множині з урахуванням чоловічо-особового роду",
        "Упевнено вибирати відмінок після дієслова, прийменника й заперечення",
        "Написати підсумковий текст про переїзд"
      ],

      vocab: [
        { pl: "przeprowadzka", g: "f", ru: "переїзд", ex: "Przeprowadzka zajęła nam cały weekend.", exRu: "Переїзд забрав у нас усі вихідні.", note: "przeprowadzać się / przeprowadzić się — переїжджати" },
        { pl: "karton", g: "m", ru: "картонна коробка", ex: "Spakowałam książki do dziesięciu kartonów.", exRu: "Я спакувала книжки в десять коробок." },
        { pl: "pudło", g: "n", ru: "велика коробка, ящик", ex: "W tym pudle są zimowe ubrania.", exRu: "У цій коробці зимовий одяг.", note: "місц. в.: w pudle (ł → l); род. мн.: pudeł" },
        { pl: "taśma klejąca", g: "f", ru: "скотч, клейка стрічка", ex: "Brakuje nam taśmy klejącej!", exRu: "Нам бракує скотчу!", note: "у розмові часто просто taśma" },
        { pl: "umeblowany", ru: "мебльований", ex: "Wynajmujemy umeblowane mieszkanie na Mokotowie.", exRu: "Ми винаймаємо мебльовану квартиру на Мокотові." },
        { pl: "ekipa", g: "f", ru: "бригада, команда", ex: "Ekipa przeprowadzkowa przyjedzie o ósmej.", exRu: "Бригада вантажників приїде о восьмій." },
        { pl: "wnosić / wnieść", ru: "заносити / занести", ex: "Pomóż mi wnieść kanapę na trzecie piętro.", exRu: "Допоможи мені занести диван на третій поверх.", note: "na + знах.: куди? — na trzecie piętro" },
        { pl: "rozpakowywać / rozpakować", ru: "розпаковувати / розпакувати", ex: "Wciąż nie rozpakowałam wszystkich kartonów.", exRu: "Я досі не розпакувала всіх коробок.", note: "заперечення → родовий: nie rozpakowałam kartonów" },
        { pl: "lokator / lokatorka", ru: "мешканець, квартирант", ex: "Poprzedni lokatorzy zostawili nam stary dywan.", exRu: "Попередні мешканці залишили нам старий килим.", note: "мн. чол.-ос.: lokatorzy" }
      ],

      grammar: {
        title: "Підсумок модуля: відмінки однини й множини",
        html: `<p>В уроках 1–4 ми розібрали однину. Тепер — множина, яка насправді простіша: три відмінки в ній мають спільні закінчення для всіх родів.</p>
<h4>1. Множина: сім відмінків</h4>
<table class="g">
<tr><th></th><th>чол.-особ.</th><th>інші ч. р.</th><th>ж. р.</th><th>с. р.</th><th>прикметник</th></tr>
<tr><td>M.</td><td class="pl">studenci</td><td class="pl">koty</td><td class="pl">szafy</td><td class="pl">okna</td><td class="pl">mili / miłe</td></tr>
<tr><td>D.</td><td class="pl">studentów</td><td class="pl">kotów</td><td class="pl">szaf</td><td class="pl">okien</td><td class="pl">miłych</td></tr>
<tr><td>C.</td><td class="pl">studentom</td><td class="pl">kotom</td><td class="pl">szafom</td><td class="pl">oknom</td><td class="pl">miłym</td></tr>
<tr><td>B.</td><td class="pl">studentów</td><td class="pl">koty</td><td class="pl">szafy</td><td class="pl">okna</td><td class="pl">miłych / miłe</td></tr>
<tr><td>N.</td><td class="pl">studentami</td><td class="pl">kotami</td><td class="pl">szafami</td><td class="pl">oknami</td><td class="pl">miłymi</td></tr>
<tr><td>Msc.</td><td class="pl">studentach</td><td class="pl">kotach</td><td class="pl">szafach</td><td class="pl">oknach</td><td class="pl">miłych</td></tr>
<tr><td>W.</td><td class="pl">studenci!</td><td class="pl">koty!</td><td class="pl">szafy!</td><td class="pl">okna!</td><td class="pl">mili / miłe</td></tr>
</table>
<ul>
<li><b>Давальний -om, орудний -ami, місцевий -ach</b> — однакові для всіх родів і дуже схожі на українські «-ам, -ами, -ах». Винятки в орудному: <span class="pl">ludźmi, dziećmi, pieniędzmi, przyjaciółmi, gośćmi</span>.</li>
<li><b>Родовий:</b> ч. р. <b>-ów</b> (<span class="pl">kartonów</span>), після м’яких і шиплячих <b>-i / -y</b> (<span class="pl">nauczycieli, kluczy</span>); ж. і с. р. — нульове закінчення, часто зі вставним e (<span class="pl">szaf, okien, pudeł, książek</span>).</li>
<li><b>Чоловічо-особовий рід</b> має окрему форму лише в називному (і кличному); його знахідний = родовий: <span class="pl">Widzę studentów</span>, але <span class="pl">Widzę koty, szafy, okna</span>.</li>
</ul>
<h4>2. Шпаргалка: коли який відмінок</h4>
<table class="g">
<tr><th>відмінок</th><th>коли</th></tr>
<tr><td>dopełniacz</td><td>заперечення замість знахідного; кількість; <span class="pl">szukać, słuchać, używać, potrzebować, życzyć, żałować</span>; <span class="pl">do, od, z</span> (звідки), <span class="pl">bez, u, dla, podczas, zamiast, oprócz</span></td></tr>
<tr><td>celownik</td><td>кому? — <span class="pl">dawać, pomagać, dziękować, gratulować, podobać się</span>; <span class="pl">dzięki, przeciwko</span></td></tr>
<tr><td>biernik</td><td>прямий додаток; dokąd? з <span class="pl">na, pod, nad, za, przed, między</span>; <span class="pl">prosić o, dbać o, pytać o</span></td></tr>
<tr><td>narzędnik</td><td><span class="pl">być / zostać</span> + хто; транспорт; <span class="pl">z</span> (з ким); gdzie? з <span class="pl">pod, nad, za, przed, między</span>; <span class="pl">interesować się, opiekować się</span></td></tr>
<tr><td>miejscownik</td><td>лише з прийменниками: <span class="pl">w, na</span> (gdzie?), <span class="pl">o</span> (про), <span class="pl">po, przy</span></td></tr>
<tr><td>wołacz</td><td>звертання: <span class="pl">Panie Marku! Kasiu! Mamo!</span></td></tr>
</table>
<div class="tip"><b>П’ять пасток модуля:</b><br>1) <span class="pl">Nie mam samochodu</span>, але <span class="pl">To nie jest samochód</span>.<br>2) <span class="pl">Myślę o tobie</span> (місцевий), а не «o ciebie».<br>3) <span class="pl">Połóż klucze na stole</span> — дієслова розміщення з місцевим.<br>4) <span class="pl">Kocham ją</span>, але <span class="pl">Nie widzę jej</span>.<br>5) <span class="pl">gratulować komu czego, cieszyć się z czego, podobny do kogo</span> — керування не таке, як в українській.</div>
<div class="ex"><span class="pl">Dziękujemy sąsiadom za pomoc przy kartonach i pudłach!</span> — Дякуємо сусідам за допомогу з коробками та ящиками!</div>`
      },

      exercises: [
        { type: "choice", q: "Na zdjęciu widzę moich nowych ___.", options: ["sąsiadów", "sąsiedzi", "sąsiadami"], answer: 0, explain: "Чоловічо-особовий рід: знахідний = родовий: moich nowych sąsiadów." },
        { type: "gap", q: "Wszystkie książki są jeszcze w ___ (kartony).", answers: ["kartonach"], explain: "w + місцевий множини: -ach для всіх родів: w kartonach." },
        { type: "gap", q: "Nie mamy już ___ (taśma klejąca).", answers: ["taśmy klejącej"], explain: "Заперечення → родовий: taśmy klejącej (іменник -y, прикметник -ej)." },
        { type: "choice", q: "W sobotę pomagam ___ wnieść meble.", options: ["sąsiadom", "sąsiadów", "sąsiadami"], answer: 0, explain: "pomagać + давальний множини: -om: sąsiadom (як укр. «сусідам»)." },
        { type: "gap", q: "Nowe mieszkanie dzielę z dwoma ___ (kolega).", answers: ["kolegami"], explain: "z + орудний множини: -ami: z dwoma kolegami." },
        { type: "choice", q: "Cały wieczór rozmawiamy o ___.", options: ["nowych lokatorach", "nowymi lokatorami", "nowych lokatorów"], answer: 0, explain: "o + місцевий множини: прикметник -ych, іменник -ach: o nowych lokatorach." },
        { type: "gap", q: "Najcięższe pudło stoi na ___ (podłoga) w kuchni.", answers: ["podłodze"], explain: "Gdzie? — na + місцевий: g → dz + e: na podłodze (укр. «на підлозі»)." },
        { type: "match", q: "З’єднайте слово з його формою в орудному множини (винятки!)", pairs: [["człowiek", "ludźmi"], ["dziecko", "dziećmi"], ["pieniądze", "pieniędzmi"], ["przyjaciel", "przyjaciółmi"], ["gość", "gośćmi"]], explain: "Ці слова мають в орудному множини -mi замість -ami: z ludźmi, z dziećmi, z pieniędzmi, z przyjaciółmi, z gośćmi." },
        { type: "choice", q: "Kot wszedł pod ___ i nie chce wyjść.", options: ["łóżko", "łóżkiem", "łóżku"], answer: 0, explain: "wejść — рух (dokąd?), тому pod + знахідний: pod łóżko. Де він зараз? — pod łóżkiem." },
        { type: "gap", q: "Dzień dobry, pani ___ (Ewa)! Czy mogę pani w czymś pomóc?", answers: ["Ewo"], explain: "Звертання з pani — кличний: Ewa → Ewo (як укр. «пані Єво»)." },
        { type: "choice", q: "Właścicielka dała ___ klucze do piwnicy. (my)", options: ["nam", "nas", "nami"], answer: 0, explain: "dać komu co: давальний — nam. nas — родовий/знахідний/місцевий, nami — орудний." },
        { type: "gap", q: "Od miesiąca szukamy ___ (umeblowane mieszkanie).", answers: ["umeblowanego mieszkania"], explain: "szukać + родовий: с. р. прикметник -ego, іменник -a." },
        { type: "order", ru: "Ми ще не розпакували всіх коробок.", words: ["Jeszcze", "nie", "rozpakowaliśmy", "wszystkich", "kartonów."], alt: ["Nie rozpakowaliśmy jeszcze wszystkich kartonów."], explain: "Заперечення → родовий множини: wszystkich kartonów." },
        { type: "translate", ru: "Я думаю про своїх батьків.", answers: ["Myślę o moich rodzicach.", "Myślę o swoich rodzicach."], explain: "o + місцевий множини: o moich / swoich rodzicach. Не «o moich rodziców»!" },
        { type: "translate", ru: "Дякую вам за допомогу з переїздом.", answers: ["Dziękuję wam za pomoc przy przeprowadzce.", "Dziękuję wam za pomoc z przeprowadzką.", "Dziękuję państwu za pomoc przy przeprowadzce."], explain: "dziękować komu (wam / państwu) za co (знахідний: pomoc); przy przeprowadzce — місцевий, z przeprowadzką — орудний." }
      ],

      pronunciation: {
        focus: "Повторення: -ą / -ę, наголос, м’які закінчення, звертання",
        tip: `<p>Зберімо все, що тренували в модулі:</p>
<ul>
<li><b>-ę / -ą</b>: <span class="pl">siostrę</span> [е] — знахідний, <span class="pl">siostrą</span> [оў] — орудний; і займенники <span class="pl">ją</span> [йоў] — <span class="pl">jej</span> [єй].</li>
<li><b>Наголос рухається</b> разом із закінченням: <span class="pl">lokator → lokatora → lokatorami</span> (lo-ka-to-RA-mi).</li>
<li><b>М’які закінчення</b> місцевого: <span class="pl">w szafie, na dywanie</span> — без зайвого [і].</li>
<li><b>Звертання</b> — з паузою й теплою інтонацією: <span class="pl">Panie Tomku, dziękujemy!</span></li>
</ul>`,
        items: [
          { type: "listen", text: "Rozpakowujemy kartony z książkami.", ru: "Ми розпаковуємо коробки з книжками.", note: "kartony, książkami — рахуйте склади з кінця" },
          { type: "minimal", options: ["ją", "jej"], ru: ["її (знах.)", "її (род., дав.)"] },
          { type: "minimal", options: ["kartonami", "kartonach"], ru: ["коробками", "у коробках"] },
          { type: "stress", word: "przeprowadzka", syllables: ["prze", "pro", "wadz", "ka"], answer: 2 },
          { type: "stress", word: "lokatorami", syllables: ["lo", "ka", "to", "ra", "mi"], answer: 3 },
          { type: "listen", text: "Panie Tomku, dziękujemy panu za pomoc!", ru: "Пане Томку, дякуємо вам за допомогу!" },
          { type: "dictation", text: "Sąsiedzi pomogli nam wnieść ciężkie pudła na trzecie piętro." }
        ]
      },

      reading: {
        title: "Przeprowadzka z przygodami",
        text: "Iryna i Andrij od trzech lat mieszkają w Gdańsku. Do tej pory wynajmowali małą kawalerkę na Przymorzu, ale w marcu znaleźli większe, umeblowane mieszkanie we Wrzeszczu. Przeprowadzka miała być prosta. Miała.\n\nPrzez cały tydzień pakowali rzeczy do kartonów. Okazało się, że mają dwadzieścia trzy kartony książek, a taśmy klejącej zabrakło już w środę. Andrij twierdził, że połowy rzeczy wcale nie potrzebują, ale niczego nie chciał wyrzucić.\n\nW sobotę o ósmej rano przyjechała ekipa przeprowadzkowa: dwóch młodych mężczyzn z dużym busem. Niestety w nowym bloku nie działała winda. Panowie wnosili pudła na czwarte piętro i głośno myśleli o zmianie zawodu.\n\nNa górze czekała pani Teresa, właścicielka mieszkania. „Pani Iryno, proszę się nie martwić — powiedziała. — Klucze do piwnicy leżą na lodówce, a instrukcja pralki jest w szufladzie pod oknem”. Potem dała im słoik domowych ogórków i życzyła wszystkiego dobrego w nowym miejscu.\n\nWieczorem sąsiedzi z trzeciego piętra przynieśli ciasto i zaprosili ich na herbatę. Iryna i Andrij siedzieli na podłodze między kartonami, jedli sernik i rozmawiali z nowymi znajomymi o Gdańsku, o pracy i o Ukrainie.\n\nW niedzielę Iryna zadzwoniła do mamy do Lwowa. „Mamo, mamy nowy dom! Kuchnia jest mała, ale z okna widać park, a sąsiedzi są bardzo mili”. Mama ucieszyła się z tych wiadomości i obiecała, że latem przyjedzie do nich z ciocią.\n\nDo dziś nie rozpakowali wszystkich pudeł. Ale wiedzą jedno: to mieszkanie już jest ich domem.",
        glossary: [
          { pl: "kawalerkę", ru: "однокімнатну квартиру, студію" },
          { pl: "Wrzeszczu", ru: "Вжещ (район Гданська)" },
          { pl: "twierdził", ru: "стверджував" },
          { pl: "wyrzucić", ru: "викинути" },
          { pl: "busem", ru: "мікроавтобусом" },
          { pl: "zmianie zawodu", ru: "зміну професії" },
          { pl: "słoik domowych ogórków", ru: "банку домашніх огірків" },
          { pl: "znajomymi", ru: "знайомими" }
        ],
        questions: [
          { type: "tf", q: "Nowe mieszkanie jest umeblowane.", answer: true, explain: "«Znaleźli większe, umeblowane mieszkanie we Wrzeszczu»." },
          { type: "choice", q: "Ile kartonów książek mają Iryna i Andrij?", options: ["dwanaście", "dwadzieścia trzy", "trzydzieści dwa"], answer: 1, explain: "«Mają dwadzieścia trzy kartony książek» — 23 закінчується на 3, тому називний множини: kartony." },
          { type: "tf", q: "W nowym bloku winda działała bez problemu.", answer: false, explain: "«W nowym bloku nie działała winda» — вантажникам довелося нести все пішки." },
          { type: "choice", q: "Gdzie leżą klucze do piwnicy?", options: ["w szufladzie pod oknem", "na lodówce", "u sąsiadów"], answer: 1, explain: "«Klucze do piwnicy leżą na lodówce». У шухляді — інструкція до пральної машини." },
          { type: "choice", q: "Co przynieśli sąsiedzi z trzeciego piętra?", options: ["ogórki", "ciasto", "taśmę klejącą"], answer: 1, explain: "«Sąsiedzi z trzeciego piętra przynieśli ciasto». Огірки дала власниця квартири." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля. Опишіть переїзд — свій або вигаданий: 1) звідки й куди ви переїжджали; 2) хто вам допомагав і чого бракувало (nie było…, zabrakło…); 3) де тепер що стоїть і лежить у новому помешканні; 4) кому ви дякуєте і як відсвяткували новосілля.",
        minWords: 60,
        maxWords: 90,
        useWords: ["przeprowadzka", "karton", "rozpakować", "ekipa"],
        checklist: [
          { label: "Заперечення з родовим (nie było…, nie miałam…, nie rozpakowałam…)", pattern: "\\bnie\\s+(ma|mam|mamy|było|mieliśmy|miałam|miałem|rozpakował\\p{L}*)\\b", min: 1 },
          { label: "Щонайменше 2 форми множини в орудному або місцевому (-ami, -ach)", pattern: "\\p{L}+(ami|ach)\\b", min: 2 },
          { label: "Давальний: подяка або допомога (pomogli mi, dziękuję przyjaciołom…)", pattern: "\\b(mi|nam|ci|wam|im|jej|mu|sąsiadom|rodzicom|przyjaciołom)\\b", min: 1 }
        ],
        model: "W zeszłym miesiącu przeprowadziłam się z akademika do małego mieszkania w Krakowie. Przeprowadzka trwała cały dzień. Ekipa nie przyjechała, więc pomogli mi przyjaciele z pracy. Nosiliśmy kartony z książkami i ubraniami na trzecie piętro. Niestety nie było windy, a ja nie miałam taśmy klejącej! Teraz łóżko stoi pod oknem, a biurko między regałami. Jeszcze nie rozpakowałam wszystkich kartonów, ale już czuję się jak w domu. Dziękuję moim przyjaciołom za pomoc — w sobotę robię dla nich parapetówkę!"
      }
    }

  ]
});
