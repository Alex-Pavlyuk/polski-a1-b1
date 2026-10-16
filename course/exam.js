COURSE.exam({
  title: "Egzamin końcowy B1",
  intro: `<p>Підсумковий іспит перевіряє, чи досягли ви рівня <b>B1</b>. Формат наближений до державного іспиту <i>egzamin certyfikatowy z języka polskiego jako obcego</i>: завдання охоплюють граматику й лексику всіх 12 модулів курсу — від відмінків і виду дієслова до дієприкметників і безособових форм.</p>
<h4>Структура і час</h4>
<ul>
<li><b>Gramatyka</b> — 25 завдань (вибір варіанта, вписати форму) · ~15 хв</li>
<li><b>Słownictwo</b> — 15 завдань (вибір, вписати слово, зіставлення) · ~8 хв</li>
<li><b>Czytanie</b> — 2 тексти по ~300 слів, до кожного 5 запитань · ~15 хв</li>
<li><b>Słuchanie</b> — 2 записи, до кожного 4 запитання. Текст запису <b>не показується</b>; слухайте не більше двох разів, як на справжньому іспиті · ~8 хв</li>
<li><b>Pisanie</b> — офіційний лист (e-mail) на 120–180 слів · ~20 хв</li>
</ul>
<p>Загальний час — <b>приблизно 65–70 хвилин</b>. Іспит можна поділити на дві частини: <b>1)</b> граматика, лексика й читання (~40 хв); <b>2)</b> аудіювання та письмо (~30 хв). У межах однієї частини намагайтеся не робити перерв.</p>
<h4>Оцінювання</h4>
<ul>
<li>Кожна з п’яти частин важить однаково (по 20%). Іспит складено, якщо загалом набрано <b>не менше 60%</b> і жодна частина не нижча за <b>40%</b>.</li>
<li>У завданнях «вписати» відповідь без польських літер (ą, ę, ó, ł, ś, ć, ż, ź, ń) зараховується лише як «майже» — пишіть із діакритикою.</li>
<li>Письмо оцінює Claude за критеріями B1 (виконання завдання, граматика, лексика, зв’язність). Якщо перевірка недоступна, оцініть текст самостійно за чек-листом і порівняйте зі зразком.</li>
<li>На справжньому державному іспиті поріг треба подолати в <b>кожній частині окремо</b>, тож після іспиту подивіться, який розділ у вас найслабший, і повторіть відповідні модулі.</li>
</ul>
<div class="tip">Не користуйтеся словником і перекладачем. До текстів для читання й аудіювання є невеликий глосарій — решту слів ви вже знаєте з курсу.</div>`,
  passScore: 60,
  sections: [
    {
      id: "grammar",
      title: "Gramatyka",
      titleRu: "Граматика",
      items: [
        // --- przypadki, liczba pojedyncza ---
        {
          type: "gap",
          q: "Moja siostra jest ___ (dobra lekarka) i pracuje w szpitalu w Poznaniu.",
          answers: ["dobrą lekarką"],
          explain: "Після być + професія — narzędnik (орудний відмінок), як і в українському «бути лікаркою». Ж. р.: і прикметник, і іменник мають закінчення -ą: dobrą lekarką."
        },
        {
          type: "gap",
          q: "Wczoraj długo rozmawialiśmy o ___ (nasz nowy projekt).",
          answers: ["naszym nowym projekcie"],
          explain: "o + miejscownik (місцевий відмінок). Ч. р.: прикметники на -ym, іменник на -t → -cie: projekt → projekcie."
        },
        {
          type: "gap",
          q: "Na urodziny kupiłem ___ (moja babcia) ciepły szal.",
          answers: ["mojej babci"],
          explain: "Кому? — celownik (давальний відмінок). Ж. р. на -ia: babcia → babci, moja → mojej."
        },
        // --- aspekt, czas przyszły ---
        {
          type: "choice",
          q: "Wczoraj ___ ten raport przez trzy godziny, ale nie skończyłem.",
          options: ["pisałem", "napisałem", "piszę"],
          answer: 0,
          explain: "Процес тривав (przez trzy godziny) і не завершився → недоконаний вид: pisałem. Napisałem означало б, що звіт готовий."
        },
        {
          type: "choice",
          q: "Jutro cały dzień ___ do egzaminu.",
          options: ["będę się przygotowywać", "przygotuję się", "przygotowałem się"],
          answer: 0,
          explain: "«Цілий день» — тривалий процес у майбутньому → складений майбутній час недоконаного виду: będę się przygotowywać (пор. укр. «буду готуватися»). Przygotuję się — результат, із cały dzień не поєднується."
        },
        // --- tryb rozkazujący ---
        {
          type: "gap",
          q: "___ (wziąć, ty) parasol, bo zaraz będzie padać!",
          answers: ["Weź"],
          explain: "Наказовий спосіб від wziąć утворюється нерегулярно: weź (мн. weźcie)."
        },
        {
          type: "choice",
          q: "Dzieci, nie ___ tyle słodyczy przed obiadem!",
          options: ["jedzcie", "zjedzcie", "jecie"],
          answer: 0,
          explain: "Заборону виражають недоконаним видом: nie jedzcie. Nie zjedzcie — застереження «не з’їжте ненароком», а jecie — дійсний спосіб («ви їсте»), не наказовий."
        },
        // --- liczba mnoga, rodzaj męskoosobowy, liczebniki ---
        {
          type: "choice",
          q: "Poznałam wczoraj twoich kolegów z pracy. Są naprawdę bardzo ___!",
          options: ["mili", "miłe", "miłymi"],
          answer: 0,
          explain: "Koledzy — чоловічо-особова група: прикметник на -i з чергуванням ł → l: miły → mili. Miłe — для нечоловічо-особових (koleżanki)."
        },
        {
          type: "choice",
          q: "W sobotę Marek i Ania ___ razem do teatru.",
          options: ["poszli", "poszły", "poszedł"],
          answer: 0,
          explain: "Змішана група (чоловік + жінка) — чоловічо-особовий рід: poszli. Poszły — лише тоді, коли в групі немає жодного чоловіка."
        },
        {
          type: "gap",
          q: "Na zebraniu w szkole poznałem ___ (nowi nauczyciele) mojego syna.",
          answers: ["nowych nauczycieli"],
          explain: "У чоловічо-особовому роді biernik (знахідний) мн. збігається з dopełniacz (родовим): nowych nauczycieli — пор. укр. «бачу нових учителів»."
        },
        {
          type: "gap",
          q: "W Krakowie jest dużo ___ (ciekawe muzeum).",
          answers: ["ciekawych muzeów"],
          explain: "Після dużo — dopełniacz мн. Muzeum в однині не відмінюється, а в множині відмінюється: muzea, muzeów."
        },
        {
          type: "gap",
          q: "W kolejce do kasy czekało ___ (pięć) panów.",
          answers: ["pięciu"],
          explain: "Із чоловічо-особовими іменниками числівники 5+ мають форму на -u: pięciu panów; дієслово — у с. р. однини (czekało)."
        },
        // --- tryb przypuszczający, gdyby, żeby ---
        {
          type: "choice",
          q: "Przepraszam, ___ pani zamknąć okno? Trochę mi zimno.",
          options: ["mogłaby", "mógłby", "mogłabym"],
          answer: 0,
          explain: "Ввічливе прохання: умовний спосіб 3-ї особи + pani: mogłaby pani. Українською тут звернулися б на «Ви» («чи не могли б Ви…»), а польською — pani/pan + дієслово 3-ї особи. Mógłby — з pan, mogłabym — «я могла б»."
        },
        {
          type: "choice",
          q: "Gdybym ___ więcej czasu, nauczyłbym się grać na gitarze.",
          options: ["miał", "mam", "będę miał"],
          answer: 0,
          explain: "Після gdyby — форма минулого часу, а особове закінчення приєднується до gdyby: gdybym miał (пор. укр. «якби я мав»). Mam / będę miał — для реальної умови з jeśli."
        },
        {
          type: "gap",
          q: "Gdybyś wcześniej wyszedł z domu, nie ___ (spóźnić się, ty) na pociąg.",
          answers: ["spóźniłbyś się"],
          explain: "Головна частина нереальної умови — tryb przypuszczający (умовний спосіб): spóźnił + by + ś → spóźniłbyś się."
        },
        {
          type: "gap",
          q: "Szef poprosił mnie, ___ przygotował raport do piątku.",
          answers: ["żebym", "abym", "bym"],
          explain: "Прохання, звернене до іншої особи: poprosić, żeby + форма минулого часу; особове закінчення (-m) кріпиться до żeby: żebym przygotował (пор. укр. «щоб я підготував»). Abym, bym — книжні синоніми."
        },
        // --- stopniowanie ---
        {
          type: "choice",
          q: "Kraków jest mniejszy ___ Warszawy, ale ma piękniejsze Stare Miasto.",
          options: ["od", "niż", "z"],
          answer: 0,
          explain: "Після вищого ступеня: od + dopełniacz (od Warszawy) або niż + називний (niż Warszawa) — пор. укр. «менший від Варшави / ніж Варшава». Тут Warszawy — родовий відмінок, отже od."
        },
        // --- czasowniki ruchu z przedrostkami ---
        {
          type: "choice",
          q: "Uwaga! Pociąg do Gdyni Głównej ___ z toru drugiego przy peronie trzecim.",
          options: ["odjedzie", "przyjedzie", "wjedzie"],
          answer: 0,
          explain: "od- + z — від’їзд звідкись: odjechać z toru. Przyjechać — прибути (na tor, do miasta), wjechać — в’їхати всередину (do tunelu, na stację)."
        },
        {
          type: "gap",
          q: "Kiedy ___ (wejść, ja) do biura, wszyscy już pili kawę.",
          answers: ["wszedłem", "weszłam"],
          explain: "Wejść змінюється як iść (szedł, szła): wszedłem (ч. р.), weszłam (ж. р.)."
        },
        // --- który ---
        {
          type: "gap",
          q: "To jest firma, w ___ pracuję od pięciu lat. (który)",
          answers: ["której"],
          explain: "w + miejscownik; firma — ж. р. → w której."
        },
        {
          type: "choice",
          q: "Mam przyjaciela, ___ mogę powiedzieć wszystko.",
          options: ["któremu", "którego", "który"],
          answer: 0,
          explain: "powiedzieć komu? — celownik (давальний відмінок): któremu. Którego — biernik/dopełniacz, który — називний відмінок."
        },
        // --- mowa zależna ---
        {
          type: "choice",
          q: "Marek: „Masz czas wieczorem?” → Marek zapytał mnie, ___ czas wieczorem.",
          options: ["czy mam", "że mam", "czy masz"],
          answer: 0,
          explain: "Непряме загальне питання вводять через czy — як і в українській через «чи» («спитав, чи маю я час»); особа змінюється з погляду оповідача: masz → mam. Że вводить твердження, а не питання."
        },
        // --- imiesłowy, strona bierna, formy bezosobowe ---
        {
          type: "gap",
          q: "Ten most został ___ (zbudować) w 1920 roku.",
          answers: ["zbudowany"],
          explain: "Пасив: zostać + imiesłów bierny (пасивний дієприкметник), узгоджений із підметом (most — ч. р.): został zbudowany."
        },
        {
          type: "gap",
          q: "W zeszłym roku w naszym mieście ___ (otworzyć — безособова форма на -no/-to) nowe muzeum.",
          answers: ["otwarto", "otworzono"],
          explain: "Безособова форма на -no/-to (виконавця не названо, лише минулий час): otworzyć → otwarto (рідше otworzono). Як і в українському «відкрито новий музей», додаток лишається в знахідному відмінку: nowe muzeum."
        },
        {
          type: "gap",
          q: "Studenci ___ (pracować) w weekendy mają mniej czasu na naukę.",
          answers: ["pracujący"],
          explain: "Imiesłów czynny (активний дієприкметник): основа 3-ї ос. мн. (pracują) + -ący. Із чоловічо-особовим studenci — форма pracujący."
        }
      ]
    },
    {
      id: "vocab",
      title: "Słownictwo",
      titleRu: "Лексика",
      items: [
        {
          type: "choice",
          q: "W sklepie kupiłam ___ wody mineralnej i dwa jogurty.",
          options: ["butelkę", "kromkę", "plasterek"],
          answer: 0,
          explain: "butelka wody — пляшка води. Kromka — скибка (хліба), plasterek — тонка скибочка (sera, szynki)."
        },
        {
          type: "match",
          q: "З’єднайте «хибних друзів перекладача» з їхнім справжнім значенням",
          pairs: [["dywan", "килим"], ["przystojny", "вродливий (про чоловіка)"], ["sklep", "магазин"], ["zakaz", "заборона"], ["owoce", "фрукти"], ["pensja", "зарплата"]],
          explain: "Dywan — не диван (kanapa), przystojny — не «пристойний» (przyzwoity), sklep — не склеп (grobowiec), zakaz — не «замовлення» (zamówienie), а заборона (пор. укр. «заказник»), owoce — не овочі (warzywa), pensja — не пенсія (emerytura)."
        },
        {
          type: "choice",
          q: "Żeby dojechać na dworzec, musisz ___ do tramwaju numer 8.",
          options: ["wsiąść", "wysiąść", "zsiąść"],
          answer: 0,
          explain: "wsiąść do — сісти в транспорт; wysiąść z — вийти з транспорту; zsiąść z — злізти, зійти (z roweru, z konia)."
        },
        {
          type: "gap",
          q: "— Jak dojść do poczty? — Proszę iść prosto, a na skrzyżowaniu ___ w prawo. (повернути)",
          answers: ["skręcić"],
          explain: "skręcić w prawo / w lewo — повернути праворуч / ліворуч (недок. вид: skręcać)."
        },
        {
          type: "choice",
          q: "Boli mnie gardło, kaszlę i mam wysoką ___.",
          options: ["gorączkę", "grypę", "alergię"],
          answer: 0,
          explain: "mieć wysoką gorączkę — мати високу температуру (пор. укр. «гарячка»). Grypa — грип, alergia — алергія: вони не бувають «високими»."
        },
        {
          type: "gap",
          q: "Lekarz wypisał mi ___ na antybiotyk, więc idę do apteki. (рецепт)",
          answers: ["receptę"],
          explain: "recepta — рецепт від лікаря (wypisać receptę). Кулінарний рецепт польською — przepis!"
        },
        {
          type: "choice",
          q: "Jutro mam rozmowę ___ w dużej firmie informatycznej. Trzymaj kciuki!",
          options: ["kwalifikacyjną", "kwalifikowaną", "egzaminacyjną"],
          answer: 0,
          explain: "rozmowa kwalifikacyjna — співбесіда під час прийняття на роботу. Kwalifikowany — кваліфікований (pracownik), egzaminacyjny — екзаменаційний."
        },
        {
          type: "gap",
          q: "Pracuję na pełny ___ — od poniedziałku do piątku, osiem godzin dziennie. (ставка)",
          answers: ["etat"],
          explain: "pracować na pełny etat / na pół etatu — працювати на повну ставку / на півставки."
        },
        {
          type: "match",
          q: "З’єднайте слова зі світу медіа з перекладом",
          pairs: [["czasopismo", "журнал"], ["odcinek", "серія (епізод)"], ["widz", "глядач"], ["nagłówek", "заголовок"], ["ogłoszenie", "оголошення"]],
          explain: "Czasopismo — журнал, часопис (а dziennik — щоденна газета), odcinek serialu — серія, widz — глядач (słuchacz — слухач), nagłówek — заголовок, ogłoszenie — оголошення."
        },
        {
          type: "choice",
          q: "W sobotę byliśmy w filharmonii na ___ muzyki Chopina.",
          options: ["koncercie", "wystawie", "przedstawieniu"],
          answer: 0,
          explain: "Музику слухають na koncercie. Wystawa — виставка (w muzeum, w galerii), przedstawienie — вистава (w teatrze). Не переплутайте: польське wystawa — це «виставка», а не «вистава»!"
        },
        {
          type: "choice",
          q: "W Wigilię Polacy dzielą się ___ i składają sobie życzenia.",
          options: ["opłatkiem", "pączkiem", "jajkiem"],
          answer: 0,
          explain: "Opłatek — тонка облатка, якою діляться на Святвечір. Jajkiem діляться на Великдень (Wielkanoc), а pączki їдять у Tłusty czwartek (Жирний четвер)."
        },
        {
          type: "choice",
          q: "Przed wyjazdem za granicę warto wykupić ___ turystyczne.",
          options: ["ubezpieczenie", "zameldowanie", "zaświadczenie"],
          answer: 0,
          explain: "ubezpieczenie turystyczne — туристичне страхування. Zameldowanie — реєстрація за місцем проживання, zaświadczenie — довідка."
        },
        {
          type: "gap",
          q: "Pociąg z Krakowa ma dwadzieścia minut ___. (запізнення)",
          answers: ["opóźnienia"],
          explain: "opóźnienie — запізнення (поїзда, літака); після означення кількості — dopełniacz: dwadzieścia minut opóźnienia."
        },
        {
          type: "choice",
          q: "Kasia i Tomek zaręczyli się w zeszłym roku, a w czerwcu biorą ___.",
          options: ["ślub", "rozwód", "wesele"],
          answer: 0,
          explain: "brać ślub — брати шлюб, одружуватися (про пару). Wesele — весільне свято, гостина (urządzać / mieć wesele), rozwód — розлучення."
        },
        {
          type: "gap",
          q: "Mąż mojej siostry to mój ___. (зять)",
          answers: ["szwagier"],
          explain: "szwagier — чоловік сестри (а також брат чоловіка чи дружини; пор. західноукр. «шваґер»). Zięć — лише чоловік доньки, на відміну від ширшого українського «зять»."
        }
      ]
    },
    {
      id: "reading",
      title: "Czytanie",
      titleRu: "Читання",
      texts: [
        {
          title: "Bary mleczne wracają do łask",
          text: "Jeszcze kilkanaście lat temu wydawało się, że bary mleczne znikną z polskich miast. Kojarzyły się z czasami PRL-u, z ceratą na stołach i z kucharką, która woła przez okienko: „Pierogi ruskie gotowe!”. Dziś przeżywają drugą młodość. W Warszawie, Krakowie czy Łodzi przed najpopularniejszymi barami w porze obiadowej ustawiają się długie kolejki.\n\nPierwszy bar mleczny otwarto w Warszawie pod koniec XIX wieku. Nazwa wzięła się stąd, że serwowano w nim głównie dania z mleka, jajek i mąki: naleśniki, kluski czy zupy mleczne. Po wojnie bary stały się miejscem, w którym jadali robotnicy, studenci i emeryci. Państwo dopłacało do posiłków, dlatego ceny były bardzo niskie. W latach dziewięćdziesiątych, kiedy w Polsce otwierano pierwsze restauracje typu fast food, wiele barów zniknęło, ponieważ klienci woleli hamburgery i pizzę. Dotacje istnieją do dziś, choć dotyczą głównie dań bezmięsnych.\n\nKto teraz chodzi do barów mlecznych? Właściwie wszyscy. Przy sąsiednich stolikach można zobaczyć starszego pana w garniturze, grupę studentów i zagranicznych turystów, którzy fotografują talerz z gołąbkami. — Przychodzę tu trzy razy w tygodniu — mówi pani Halina, emerytowana nauczycielka. — W domu nie opłaca się gotować dla jednej osoby, a tutaj zjem zupę i drugie danie za niecałe dwadzieścia złotych. I wszystko smakuje prawie jak moje!\n\nMłodzi ludzie cenią bary mleczne z innego powodu. Jedzenie jest tu proste, ale świeże, a menu zmienia się codziennie. — Wolę zjeść kotlet z ziemniakami niż kolejnego burgera — przyznaje Bartek, student informatyki. — Poza tym to po prostu kawałek historii. Młodzi klienci chętnie piszą o barach w mediach społecznościowych: oceniają je, porównują ceny i polecają sobie nawzajem najlepsze pierogi w mieście.\n\nNie wszystkim barom udało się jednak przetrwać. Wysokie czynsze w centrach miast i rosnące ceny produktów sprawiają, że co roku kilka z nich zostaje zamkniętych. Właściciele apelują do władz o wyższe dotacje. Na razie, jeśli chcecie spróbować prawdziwej polskiej kuchni, nie szukajcie drogich restauracji — wystarczy znaleźć najbliższy bar mleczny.",
          glossary: [
            { pl: "ceratą", ru: "цератою, клейонкою (cerata — церата)" },
            { pl: "przeżywają drugą młodość", ru: "переживають другу молодість" },
            { pl: "dopłacało", ru: "доплачувала, субсидувала (держава)" },
            { pl: "gołąbkami", ru: "голубцями" },
            { pl: "czynsze", ru: "орендна плата" },
            { pl: "przetrwać", ru: "вижити, протриматися" }
          ],
          questions: [
            {
              type: "tf",
              q: "Pierwszy bar mleczny otwarto po II wojnie światowej.",
              answer: false,
              explain: "Неправда: «Pierwszy bar mleczny otwarto w Warszawie pod koniec XIX wieku». Після війни бари лише стали масовими."
            },
            {
              type: "choice",
              q: "Skąd się wzięła nazwa „bar mleczny”?",
              options: ["Serwowano tam głównie dania z mleka, jajek i mąki.", "Bary otwierali producenci mleka.", "Do każdego obiadu podawano szklankę mleka."],
              answer: 0,
              explain: "«Nazwa wzięła się stąd, że serwowano w nim głównie dania z mleka, jajek i mąki»."
            },
            {
              type: "tf",
              q: "Dziś państwo dopłaca do wszystkich dań w barach mlecznych.",
              answer: false,
              explain: "Неправда: дотації «dotyczą głównie dań bezmięsnych» — стосуються переважно страв без м’яса."
            },
            {
              type: "choice",
              q: "Dlaczego pani Halina chodzi do baru mlecznego?",
              options: ["Bo nie umie gotować.", "Bo w domu nie opłaca się jej gotować dla jednej osoby.", "Bo spotyka tam swoich byłych uczniów."],
              answer: 1,
              explain: "Вона каже: «W domu nie opłaca się gotować dla jednej osoby» — готувати вдома для однієї людини невигідно."
            },
            {
              type: "choice",
              q: "Co jest dziś problemem dla barów mlecznych?",
              options: ["Brak klientów.", "Wysokie czynsze i rosnące ceny produktów.", "Zbyt częste zmiany menu."],
              answer: 1,
              explain: "«Wysokie czynsze w centrach miast i rosnące ceny produktów sprawiają, że co roku kilka z nich zostaje zamkniętych». Клієнтів, навпаки, багато (długie kolejki)."
            }
          ]
        },
        {
          title: "Z korporacji na wieś. Rok później",
          text: "Dokładnie rok temu złożyłam wypowiedzenie w dużej firmie w Warszawie, w której pracowałam przez siedem lat. Gdyby ktoś mi wtedy powiedział, że zamieszkam w małej wsi na Podlasiu, roześmiałabym się. A jednak tu jestem: siedzę na werandzie starego drewnianego domu i piszę ten tekst, a obok śpi mój pies, Kluska.\n\nDlaczego zdecydowałam się na taką zmianę? W Warszawie zarabiałam dobrze, ale codziennie spędzałam w korkach prawie dwie godziny, a wieczorami byłam tak zmęczona, że nie miałam nawet siły zadzwonić do przyjaciół. Moje życie kręciło się w kółko: praca, korki, sen i znowu praca. Kiedy powiedziałam rodzicom o swoich planach, mama zapytała tylko, czy na pewno wiem, co robię. Tata był większym optymistą: stwierdził, że świeże powietrze jeszcze nikomu nie zaszkodziło.\n\nPierwsze miesiące nie były łatwe. Zimą trzeba było palić w piecu, a najbliższy sklep jest trzy kilometry od domu. Pamiętam pierwszą noc, kiedy zabrakło prądu, a ja siedziałam przy świecy i zastanawiałam się, czy nie popełniłam największego błędu w życiu. Musiałam nauczyć się wielu rzeczy, o których wcześniej nie miałam pojęcia: jak rąbać drewno, jak robić przetwory na zimę, jak naprawić płot. Na szczęście sąsiedzi okazali się niezwykle życzliwi. Pan Józek pożyczył mi narzędzia, a jego żona nauczyła mnie piec chleb.\n\nCzy czegoś żałuję? Czasami brakuje mi kina, dobrej kawy i spontanicznych spotkań ze znajomymi. Dlatego raz w miesiącu jeżdżę do Białegostoku — to godzina autobusem — żeby nadrobić zaległości. Zarabiam też mniej niż kiedyś — pracuję zdalnie jako tłumaczka, trzy dni w tygodniu. Ale śpię lepiej, więcej się ruszam i wreszcie mam czas na czytanie. Internet jest tu zresztą, o dziwo, szybszy niż w moim warszawskim mieszkaniu!\n\nNie namawiam nikogo, żeby rzucał pracę i wyjeżdżał na wieś. To nie jest rozwiązanie dla każdego. Chciałabym tylko powiedzieć jedno: jeśli od dawna o czymś marzycie, spróbujcie. Najwyżej wrócicie.",
          glossary: [
            { pl: "wypowiedzenie", ru: "заява про звільнення" },
            { pl: "w korkach", ru: "у заторах" },
            { pl: "palić w piecu", ru: "топити піч" },
            { pl: "rąbać drewno", ru: "рубати дрова" },
            { pl: "przetwory", ru: "домашні заготовки (варення, соління)" },
            { pl: "życzliwi", ru: "доброзичливі" }
          ],
          questions: [
            {
              type: "tf",
              q: "Autorka pracowała w warszawskiej firmie przez siedem lat.",
              answer: true,
              explain: "Правда: «w dużej firmie w Warszawie, w której pracowałam przez siedem lat»."
            },
            {
              type: "choice",
              q: "Jak zareagowała mama autorki na jej plany?",
              options: ["Bardzo się ucieszyła.", "Zapytała, czy córka na pewno wie, co robi.", "Powiedziała, że świeże powietrze nikomu nie szkodzi."],
              answer: 1,
              explain: "«Mama zapytała tylko, czy na pewno wiem, co robię». Фразу про свіже повітря сказав тато."
            },
            {
              type: "choice",
              q: "Czego autorka musiała się nauczyć na wsi?",
              options: ["Prowadzić samochód.", "Rąbać drewno i robić przetwory.", "Tłumaczyć teksty."],
              answer: 1,
              explain: "«Musiałam nauczyć się… jak rąbać drewno, jak robić przetwory na zimę, jak naprawić płot». Про водіння й переклад як про нові навички в тексті не йдеться."
            },
            {
              type: "tf",
              q: "Na wsi autorka ma wolniejszy internet niż w Warszawie.",
              answer: false,
              explain: "Неправда: «Internet jest tu… szybszy niż w moim warszawskim mieszkaniu» — інтернет у селі швидший."
            },
            {
              type: "choice",
              q: "Co autorka chce przekazać czytelnikom?",
              options: ["Że każdy powinien rzucić pracę w korporacji.", "Że warto spróbować spełnić swoje marzenia.", "Że życie na wsi jest łatwiejsze niż w mieście."],
              answer: 1,
              explain: "«Jeśli od dawna o czymś marzycie, spróbujcie». Водночас авторка прямо пише, що такий шлях підходить не всім, а перші місяці були важкими."
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
          title: "Komunikaty na dworcu",
          text: "Uwaga, uwaga! Pociąg PKP Intercity z Krakowa Głównego do Gdyni Głównej, planowy przyjazd godzina czternasta dziesięć, przyjedzie z opóźnieniem około dwudziestu pięciu minut. Opóźnienie może ulec zmianie. Za utrudnienia przepraszamy.\n\nUwaga! Zmiana peronu! Pociąg osobowy do Łodzi Kaliskiej, odjazd godzina czternasta trzydzieści, odjedzie dziś z toru pierwszego przy peronie trzecim, a nie, jak podano w rozkładzie jazdy, z peronu drugiego. Powtarzam: peron trzeci, tor pierwszy.\n\nInformujemy również, że z powodu remontu torów pociągi do Siedlec nie kursują do niedzieli. Na tej trasie uruchomiono zastępczą komunikację autobusową. Autobusy odjeżdżają sprzed głównego wejścia do dworca co godzinę. Bilety kolejowe są ważne w autobusach. Szczegółowy rozkład jazdy autobusów znajduje się w kasach oraz na stronie internetowej przewoźnika.\n\nProsimy podróżnych o zachowanie ostrożności na peronach i niepozostawianie bagażu bez opieki.",
          glossary: [
            { pl: "utrudnienia", ru: "незручності" },
            { pl: "zastępczą komunikację autobusową", ru: "заміну поїздів автобусами" },
            { pl: "bez opieki", ru: "без нагляду" }
          ],
          questions: [
            {
              type: "choice",
              q: "Jakie opóźnienie ma pociąg z Krakowa?",
              options: ["Około 15 minut.", "Około 25 minut.", "Około 45 minut."],
              answer: 1,
              explain: "«z opóźnieniem około dwudziestu pięciu minut» — близько 25 хвилин."
            },
            {
              type: "choice",
              q: "Skąd odjedzie dziś pociąg do Łodzi Kaliskiej?",
              options: ["Z peronu drugiego, z toru pierwszego.", "Z peronu trzeciego, z toru pierwszego.", "Z peronu pierwszego, z toru trzeciego."],
              answer: 1,
              explain: "«z toru pierwszego przy peronie trzecim… Powtarzam: peron trzeci, tor pierwszy». Peron drugi — це застаріла інформація з розкладу."
            },
            {
              type: "tf",
              q: "Pociągi do Siedlec nie kursują z powodu remontu torów.",
              answer: true,
              explain: "Правда: «z powodu remontu torów pociągi do Siedlec nie kursują do niedzieli»."
            },
            {
              type: "tf",
              q: "Do autobusu zastępczego trzeba kupić nowy bilet.",
              answer: false,
              explain: "Неправда: «Bilety kolejowe są ważne w autobusach» — залізничні квитки дійсні в автобусах."
            }
          ]
        },
        {
          title: "Wiadomość na poczcie głosowej",
          text: "Cześć, Kasiu, tu Ola. Dzwonię w sprawie soboty, ale nie odbierasz, więc nagrywam ci się na pocztę. Słuchaj, jest mała zmiana planów. Mieliśmy jechać w góry samochodem Tomka, ale jego auto jest u mechanika i będzie gotowe dopiero w poniedziałek. Dlatego pojedziemy pociągiem. Wrócimy w niedzielę wieczorem, tak jak planowaliśmy. Kupiłam już bilety dla nas wszystkich. Pociąg do Zakopanego odjeżdża o ósmej piętnaście z Dworca Głównego, więc spotkajmy się przy kasach za kwadrans ósma. Weź ciepłą kurtkę, bo w górach ma padać śnieg, i nie zapomnij legitymacji studenckiej, bo bilet jest ze zniżką. Pieniądze za bilet oddasz mi później, nie ma pośpiechu. Aha, i jeszcze jedno: Ania pytała, czy mogłabyś wziąć swój aparat, bo chce zrobić zdjęcia w Dolinie Kościeliskiej. Oddzwoń, jak będziesz mogła. Pa!",
          glossary: [
            { pl: "nagrywam ci się na pocztę", ru: "залишаю тобі голосове повідомлення" },
            { pl: "legitymacji studenckiej", ru: "студентського квитка" }
          ],
          questions: [
            {
              type: "choice",
              q: "Dlaczego plany się zmieniły?",
              options: ["Tomek zachorował.", "Samochód Tomka jest w naprawie.", "Pociąg został odwołany."],
              answer: 1,
              explain: "«jego auto jest u mechanika i będzie gotowe dopiero w poniedziałek» — машина Томека в ремонті."
            },
            {
              type: "choice",
              q: "O której Ola chce się spotkać z Kasią?",
              options: ["O 7:15.", "O 7:45.", "O 8:15."],
              answer: 1,
              explain: "«spotkajmy się przy kasach za kwadrans ósma» = 7:45. О 8:15 відправляється поїзд."
            },
            {
              type: "tf",
              q: "Kasia musi od razu oddać Oli pieniądze za bilet.",
              answer: false,
              explain: "Неправда: «Pieniądze za bilet oddasz mi później, nie ma pośpiechu»."
            },
            {
              type: "tf",
              q: "Ania chciałaby, żeby Kasia wzięła aparat.",
              answer: true,
              explain: "Правда: «Ania pytała, czy mogłabyś wziąć swój aparat» — Аня хоче фотографувати в Косцелиській долині (Dolina Kościeliska)."
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
        prompt: "Улітку ви провели чотири ночі в готелі в Сопоті, але відпочинок було зіпсовано. Напишіть офіційний лист (e-mail) адміністрації готелю. Зазначте: 1) коли ви були в готелі та номер бронювання; 2) дві проблеми — що було не так порівняно з обіцяним на сайті; 3) як відреагував персонал; 4) чого ви очікуєте — ввічливе прохання в умовному способі (chciałbym/chciałabym…, byłbym wdzięczny, gdyby…). Пишіть в офіційному стилі: звертання Szanowni Państwo; замість українського ввічливого «Ви» — форма Państwo з дієсловом 3-ї особи множини; офіційне прощання. Обсяг: 120–180 слів.",
        minWords: 120,
        maxWords: 180,
        useWords: ["rezerwacja", "niestety", "mimo że", "zwrot", "Z poważaniem"],
        checklist: [
          { label: "Офіційне звертання (Szanowni Państwo / Szanowna Pani / Szanowny Panie)", pattern: "Szanown(i|a|y)\\s+(Państwo|Pani|Panie)", min: 1 },
          { label: "Офіційне прощання (Z poważaniem / Z wyrazami szacunku / Łączę wyrazy szacunku)", pattern: "(Z\\s+poważaniem|Z\\s+wyrazami\\s+szacunku|Łączę\\s+wyrazy\\s+szacunku)", min: 1 },
          { label: "Ввічливе прохання: щонайменше 2 форми умовного способу (chciałbym, byłabym wdzięczna, gdyby…)", pattern: "\\p{L}*[łl][aoiy]?by(m|ś|śmy|ście)?(?!\\p{L})|(?<!\\p{L})gdyby\\p{L}*", min: 2 },
          { label: "Щонайменше 3 слова-зв’язки (ponieważ, niestety, jednak, mimo że, dlatego, poza tym, ponadto)", pattern: "(?<!\\p{L})(ponieważ|niestety|jednak|mimo\\s+że|dlatego|poza\\s+tym|ponadto|co\\s+więcej)(?!\\p{L})", min: 3 }
        ],
        model: "Szanowni Państwo,\n\nw dniach 10–14 lipca przebywałem w Państwa hotelu w Sopocie (rezerwacja nr 4521). Piszę, ponieważ niestety nie jestem zadowolony z pobytu.\n\nNa stronie internetowej hotelu przeczytałem, że wszystkie pokoje mają widok na morze. Tymczasem okno mojego pokoju wychodziło na parking. Poza tym przez trzy dni nie działała klimatyzacja, a w pokoju było bardzo gorąco. Zgłosiłem problem w recepcji już pierwszego dnia. Pracownik obiecał, że technik przyjdzie jeszcze tego samego wieczoru, jednak nikt się nie pojawił. Następnego dnia usłyszałem tylko, że wszystkie pokoje są zajęte i nie można mnie przenieść.\n\nMimo że zapłaciłem za pokój o podwyższonym standardzie, nie mogłem w pełni odpocząć. Dlatego chciałbym prosić o zwrot części kosztów pobytu, przynajmniej za trzy noce bez klimatyzacji. Byłbym wdzięczny, gdyby Państwo odpowiedzieli na moją wiadomość w ciągu tygodnia.\n\nW załączniku przesyłam kopię rachunku.\n\nZ poważaniem\nIgor Sokołow"
      }
    }
  ]
});
