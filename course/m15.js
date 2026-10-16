COURSE.module({
  id: "m15",
  n: 15,
  level: "A2",
  extra: true,
  title: "Liczebniki",
  titleRu: "Числівники",
  summary: "Бонусний модуль про числа: ви впевнено називаєте десятки, сотні й тисячі, на слух розрізняєте czternaście і czterdzieści, правильно узгоджуєте числівники з іменниками й дієсловами, відмінюєте десятки (od czterdziestu do pięćdziesięciu) і вільно говорите про вік, ціни, роки та десятиліття.",
  lessons: [

    // ───────────────────────── LEKCJA 1 ─────────────────────────
    {
      id: "m15l1",
      title: "Czternaście czy czterdzieści?",
      titleRu: "Числа 0–100: десятки",
      topic: "Numery i wiek",
      review: false,
      minutes: 30,
      goals: [
        "Називати всі десятки 20–100 і не плутати їх із числами 11–19 (czternaście / czterdzieści)",
        "Правильно писати й вимовляти pięćdziesiąt, sześćdziesiąt, dziewięćdziesiąt",
        "Складати числа 21–99, казати вік (Mam czterdzieści dwa lata) і диктувати номер телефону"
      ],

      vocab: [
        { pl: "liczba", g: "f", ru: "число (кількість)", note: "numer — номер (телефону, будинку), cyfra — цифра", ex: "Siedem to moja szczęśliwa liczba.", exRu: "Сім — моє щасливе число." },
        { pl: "cyfra", g: "f", ru: "цифра", ex: "Numer PESEL ma jedenaście cyfr.", exRu: "Номер PESEL має одинадцять цифр." },
        { pl: "numer kierunkowy", g: "m", ru: "телефонний код (країни, міста)", ex: "Numer kierunkowy do Polski to plus czterdzieści osiem.", exRu: "Телефонний код Польщі — плюс сорок вісім." },
        { pl: "wybierać / wybrać numer", ru: "набирати / набрати номер", ex: "W razie wypadku wybierz numer sto dwanaście.", exRu: "У разі нещасного випадку набери номер сто дванадцять." },
        { pl: "liczyć / policzyć", ru: "рахувати / порахувати", note: "do stu — Р. в. від sto (урок 4)", ex: "Mój syn umie już liczyć do stu.", exRu: "Мій син вже вміє рахувати до ста." },
        { pl: "dodawać / dodać", ru: "додавати / додати", ex: "Czterdzieści dodać dwadzieścia to sześćdziesiąt.", exRu: "Сорок додати двадцять — це шістдесят." },
        { pl: "odejmować / odjąć", ru: "віднімати / відняти", ex: "Sto odjąć trzydzieści to siedemdziesiąt.", exRu: "Сто відняти тридцять — це сімдесят." },
        { pl: "równać się", ru: "дорівнювати", ex: "Pięćdziesiąt plus pięćdziesiąt równa się sto.", exRu: "П’ятдесят плюс п’ятдесят дорівнює ста." },
        { pl: "parzysty", ru: "парний", note: "nieparzysty — непарний", ex: "Czterdzieści cztery to liczba parzysta, a czterdzieści pięć — nieparzysta.", exRu: "Сорок чотири — парне число, а сорок п’ять — непарне." },
        { pl: "wiek", g: "m", ru: "вік; також століття", note: "XXI wiek — XXI століття", ex: "W moim wieku trzeba dbać o zdrowie.", exRu: "У моєму віці треба дбати про здоров’я." },
        { pl: "pełnoletni", ru: "повнолітній", ex: "W Polsce jesteś pełnoletni, kiedy masz osiemnaście lat.", exRu: "У Польщі ти повнолітній, коли тобі вісімнадцять років." },
        { pl: "rówieśnik", g: "m", ru: "ровесник", note: "ж. р. rówieśniczka", ex: "Marek to mój rówieśnik: obaj mamy czterdzieści trzy lata.", exRu: "Марек — мій ровесник: нам обом по сорок три роки." },
        { pl: "mniej więcej", ru: "приблизно, більш-менш", ex: "Do Krakowa jest stąd mniej więcej osiemdziesiąt kilometrów.", exRu: "Звідси до Кракова приблизно вісімдесят кілометрів." }
      ],

      grammar: {
        title: "Числа 0–100: -naście, десятки, складені числа",
        html: `<p>Польські числа до 100 будуються з тих самих «цеглинок», що й українські: одиниця + <b>-naście</b> (≈ -надцять) дає 11–19, одиниця + <b>-dzieści / -dziesiąt</b> (≈ -дцять / -десят) дає десятки.</p>
<table class="g">
<tr><th></th><th>одиниці</th><th>11–19 (-naście)</th><th>десятки</th></tr>
<tr><td>1</td><td class="pl">jeden</td><td class="pl">jedenaście</td><td class="pl">dziesięć</td></tr>
<tr><td>2</td><td class="pl">dwa</td><td class="pl">dwanaście</td><td class="pl">dwadzieścia</td></tr>
<tr><td>3</td><td class="pl">trzy</td><td class="pl">trzynaście</td><td class="pl">trzydzieści</td></tr>
<tr><td>4</td><td class="pl">cztery</td><td class="pl">czternaście</td><td class="pl">czterdzieści</td></tr>
<tr><td>5</td><td class="pl">pięć</td><td class="pl">piętnaście</td><td class="pl">pięćdziesiąt</td></tr>
<tr><td>6</td><td class="pl">sześć</td><td class="pl">szesnaście</td><td class="pl">sześćdziesiąt</td></tr>
<tr><td>7</td><td class="pl">siedem</td><td class="pl">siedemnaście</td><td class="pl">siedemdziesiąt</td></tr>
<tr><td>8</td><td class="pl">osiem</td><td class="pl">osiemnaście</td><td class="pl">osiemdziesiąt</td></tr>
<tr><td>9</td><td class="pl">dziewięć</td><td class="pl">dziewiętnaście</td><td class="pl">dziewięćdziesiąt</td></tr>
<tr><td>0 / 100</td><td class="pl">zero</td><td></td><td class="pl">sto</td></tr>
</table>
<h4>-dzieści чи -dziesiąt?</h4>
<p>20, 30, 40 закінчуються на <b>-dzieści(a)</b>, а 50–90 — на <b>-dziesiąt</b>. Це та сама логіка, що й «2–4 + наз. мн., 5+ + род. мн.»: <span class="pl">cztery + dzieści</span> — «чотири десятки», <span class="pl">pięć + dziesiąt</span> — «п’ять десятків». Запам’ятайте цю межу: вона ще не раз повториться в сотнях і тисячах.</p>
<div class="tip"><b>Пастки для українців.</b> 1) 40 — не «сорок», а цілком регулярне <span class="pl">czterdzieści</span> («чотири-десят»). 2) 90 — не «дев’яносто», а <span class="pl">dziewięćdziesiąt</span> («дев’ять-десят»). 3) Наголос — завжди на передостанньому складі: czter-<b>DZIE</b>-ści, pięć-<b>DZIE</b>-siąt, а не «п’ятдеся́т».</div>
<h4>Правопис</h4>
<ul>
<li>У десятках одиниця зберігається повністю: <span class="pl">pięćdziesiąt</span> (pięć + dziesiąt), <span class="pl">sześćdziesiąt</span> (sześć + dziesiąt). Хоч чуємо [п’єнь-джє-сьонт] і [шезь-джє-сьонт], писати ✗ <i>pieńdziesiąt</i>, ✗ <i>szejdziesiąt</i> — помилка.</li>
<li>У -naście одиниця скорочується: <span class="pl">piętnaście</span> (t замість ć), <span class="pl">szesnaście</span> (без ść!), <span class="pl">dziewiętnaście</span>.</li>
<li><span class="pl">czternaście, czterdzieści</span> — без y, хоча <span class="pl">cztery</span> — з y.</li>
</ul>
<h4>Складені числа 21–99</h4>
<p>Десяток + одиниця, <b>без «i»</b> і без дефіса: <span class="pl">czterdzieści pięć, sześćdziesiąt trzy, dziewięćdziesiąt dziewięć</span>. ✗ <i>czterdzieści i pięć</i>.</p>
<h4>Вік: rok / lata / lat</h4>
<table class="g">
<tr><th>1</th><th>2–4, 22–24, 42–44…</th><th>5–21, 25–31, 40, 41, 45–51…</th></tr>
<tr><td class="pl">rok</td><td class="pl">czterdzieści dwa lata</td><td class="pl">czterdzieści lat, czterdzieści jeden lat</td></tr>
</table>
<div class="ex"><span class="pl">Ile masz lat? — Mam czterdzieści trzy lata.</span> — Скільки тобі років? — Мені сорок три роки.</div>
<div class="tip">Конструкція інша, ніж в українській: не «мені сорок», а «я маю сорок років» — <span class="pl">Mam czterdzieści lat.</span> І пастка: 41 — <span class="pl">czterdzieści jeden lat</span> (укр. «сорок один рік»).</div>
<h4>Номер телефону</h4>
<p>Польський мобільний номер має 9 цифр. Його диктують групами 3+3+3 (<span class="pl">sześćset dwa, czterysta pięćdziesiąt, siedemset osiem</span>) або 3+2+2+2 (<span class="pl">sześćset dwa, czterdzieści, pięćdziesiąt, siedemdziesiąt osiem</span>). Тож десятки треба впізнавати на слух миттєво!</p>`
      },

      exercises: [
        { type: "choice", q: "Mój syn chodzi do liceum, ma ___ lat.", options: ["szesnaście", "sześćdziesiąt", "sześćset"], answer: 0,
          explain: "Ліцеїстові 16 років: szesnaście (-naście = -надцять). sześćdziesiąt — 60, sześćset — 600." },
        { type: "choice", q: "Numer kierunkowy do Polski to plus ___ (48).", options: ["czterdzieści osiem", "czterdzieści i osiem", "czternaście osiem"], answer: 0,
          explain: "Складені числа — без «i»: czterdzieści osiem. Czternaście — це 14." },
        { type: "gap", q: "Czterdzieści dodać dwadzieścia równa się ___. (60, словами)", answers: ["sześćdziesiąt"],
          explain: "40 + 20 = 60: sześćdziesiąt = sześć + dziesiąt. Пишемо ść, хоч чуємо [шезь-джє-сьонт]." },
        { type: "gap", q: "Mój dziadek ma ___ lat. (90, словами)", answers: ["dziewięćdziesiąt"],
          explain: "90 — dziewięć + dziesiąt («дев’ять десятків»), а не калька з «дев’яносто»." },
        { type: "gap", q: "Zapisz cyframi: siedemdziesiąt trzy = ___", answers: ["73"],
          explain: "siedemdziesiąt (70) + trzy (3) = 73. Не плутайте з siedemnaście (17)." },
        { type: "match", q: "З’єднайте число словами з цифрами (-naście чи десятки?)",
          pairs: [["czternaście", "14"], ["czterdzieści", "40"], ["piętnaście", "15"], ["pięćdziesiąt", "50"], ["szesnaście", "16"], ["sześćdziesiąt", "60"]],
          explain: "Середина слова вирішує все: -na- → 11–19, -dzie- → десятки." },
        { type: "choice", q: "Liczba 60 to ___.", options: ["sześćdziesiąt", "szejdziesiąt", "sześdziesiąt"], answer: 0,
          explain: "У десятках одиниця зберігається повністю: sześć + dziesiąt → sześćdziesiąt." },
        { type: "gap", q: "Moja siostra ma czterdzieści dwa ___ (rok).", answers: ["lata"],
          explain: "Останнє слово dwa (2–4) → lata, як укр. «сорок два роки»." },
        { type: "order", ru: "Моєму татові п’ятдесят дев’ять років.", words: ["Mój", "tata", "ma", "pięćdziesiąt", "dziewięć", "lat."], alt: [],
          explain: "Вік — через mieć: «тато має … років». 59 закінчується на 9 → lat." },
        { type: "translate", ru: "Мені сорок один рік.", answers: ["Mam czterdzieści jeden lat."],
          explain: "Пастка: 41 → lat (як 5+), а не «rok». І конструкція «я маю»: Mam … lat." }
      ],

      pronunciation: {
        focus: "Десятки vs -naście; наголос у десятках",
        tip: `<p>Найчастіша помилка на слух — переплутати 14 і 40, 15 і 50, 16 і 60. Ці пари відрізняються <b>серединою</b> слова, і саме на неї падає наголос (передостанній склад):</p>
<ul>
<li><span class="pl">czternaście</span> ≈ [чтер-НА-сьчє] — <span class="pl">czterdzieści</span> ≈ [чтер-ДЖЄ-сьчі]</li>
<li><span class="pl">piętnaście</span> ≈ [п’єт-НА-сьчє] — <span class="pl">pięćdziesiąt</span> ≈ [п’єнь-ДЖЄ-сьонт]</li>
<li><span class="pl">szesnaście</span> ≈ [шес-НА-сьчє] — <span class="pl">sześćdziesiąt</span> ≈ [шезь-ДЖЄ-сьонт]</li>
</ul>
<p>Правило для вуха: чуєте наголошене <b>-NA-</b> — це 11–19; чуєте <b>-DZIE-</b> [джє] — це десятки. Кінцівка <b>-siąt</b> [сьонт] буває тільки в 50–90.</p>
<p>Наголос у десятках не стрибає на кінець, як в українських «п’ятдеся́т», «шістдеся́т»: czter-<b>DZIE</b>-ści, pięć-<b>DZIE</b>-siąt, dzie-więć-<b>DZIE</b>-siąt. ę перед ć + dź звучить як [ень]: <span class="pl">pięćdziesiąt</span>, <span class="pl">dziewięćdziesiąt</span> ≈ [джє-в’єнь-джє-сьонт].</p>`,
        items: [
          { type: "minimal", options: ["czternaście", "czterdzieści"], ru: ["14", "40"] },
          { type: "minimal", options: ["piętnaście", "pięćdziesiąt"], ru: ["15", "50"] },
          { type: "minimal", options: ["szesnaście", "sześćdziesiąt"], ru: ["16", "60"] },
          { type: "stress", word: "czterdzieści", syllables: ["czter", "dzie", "ści"], answer: 1 },
          { type: "stress", word: "dziewięćdziesiąt", syllables: ["dzie", "więć", "dzie", "siąt"], answer: 2 },
          { type: "listen", text: "pięćdziesiąt pięć", ru: "55", note: "≈ [п’єнь-джє-сьонт п’єньчь]" },
          { type: "dictation", text: "Babcia ma dziewięćdziesiąt lat, a dziadek osiemdziesiąt cztery." }
        ]
      },

      reading: {
        title: "Czternaście czy czterdzieści?",
        text: "Oksana mieszka w Krakowie od roku. W sobotę sąsiad, pan Marek, podyktował jej numer do hydraulika: „Sześćset dwa, czternaście, pięćdziesiąt, siedemdziesiąt osiem”. Oksana szybko zapisała go na kartce.\n\nW poniedziałek kran w łazience znowu zaczął cieknąć. Oksana wybrała numer i czekała. Odebrał starszy pan.\n– Dzień dobry, czy to pan hydraulik?\n– Hydraulik? Proszę pani, ja mam dziewięćdziesiąt jeden lat! Ostatni kran naprawiałem w latach siedemdziesiątych.\n\nOksana spojrzała na kartkę. Zamiast „czternaście” zapisała „czterdzieści”. Te dwie liczby brzmią prawie tak samo, a różnią się tylko jedną sylabą!\n\nStarszy pan nie odłożył jednak słuchawki. Rozmawiał z nią mniej więcej dwadzieścia minut: o wnuczce, która ma czterdzieści dwa lata, o rówieśnikach z wojska i o tym, że w jego wieku liczy się każdy dzień. Na koniec powiedział: „Hydraulik to mój sąsiad. Jego numer kończy się na pięćdziesiąt siedem”.\n\nWieczorem kran już nie ciekł. A Oksana ma teraz w telefonie nowy kontakt: „Pan Józef, 91 lat – dzwonić w niedziele”.",
        glossary: [
          { pl: "podyktował", ru: "продиктував" },
          { pl: "hydraulika", ru: "сантехніка (hydraulik — сантехнік)" },
          { pl: "cieknąć", ru: "текти, протікати" },
          { pl: "Odebrał", ru: "узяв слухавку, відповів на дзвінок" },
          { pl: "sylabą", ru: "складом" },
          { pl: "odłożył jednak słuchawki", ru: "проте не поклав слухавку" },
          { pl: "z wojska", ru: "з армії" },
          { pl: "liczy się każdy dzień", ru: "важить кожен день" }
        ],
        questions: [
          { type: "tf", q: "Pan Marek podyktował Oksanie numer do hydraulika.", answer: true,
            explain: "«Sąsiad, pan Marek, podyktował jej numer do hydraulika»." },
          { type: "choice", q: "Jaki błąd zrobiła Oksana?", options: ["Zapisała 40 zamiast 14.", "Zapisała 14 zamiast 40.", "Zapomniała numeru kierunkowego."], answer: 0,
            explain: "«Zamiast „czternaście” zapisała „czterdzieści”» — 40 замість 14." },
          { type: "choice", q: "Ile lat ma pan Józef?", options: ["dziewiętnaście", "dziewięćdziesiąt jeden", "dziewięćdziesiąt dziewięć"], answer: 1,
            explain: "«Ja mam dziewięćdziesiąt jeden lat!» — 91." },
          { type: "tf", q: "Wnuczka pana Józefa ma czternaście lat.", answer: false,
            explain: "Онуці «czterdzieści dwa lata» — 42 роки." },
          { type: "choice", q: "Na jakie cyfry kończy się numer hydraulika?", options: ["57", "75", "50"], answer: 0,
            explain: "«Jego numer kończy się na pięćdziesiąt siedem» — 57." }
        ]
      },

      writing: {
        prompt: "Ви записуєтеся на курс польської в Познані, і викладачка просить коротко розповісти про себе. Напишіть: 1) скільки вам років; 2) вік трьох членів родини (обирайте числа з десятками: 42, 58, 67…); 3) хто з рідних чи друзів ваш ровесник або хто вже повнолітній; 4) продиктуйте словами свій номер телефону з кодом країни.",
        minWords: 40, maxWords: 80,
        useWords: ["wiek", "rówieśnik", "numer kierunkowy", "pełnoletni"],
        checklist: [
          { label: "Щонайменше 3 десятки словами (dwadzieścia … dziewięćdziesiąt)", pattern: "\\b\\p{L}*(dzieścia|dzieści|dziesiąt)\\b", min: 3 },
          { label: "Вік зі словами lat / lata — мінімум 2 рази", pattern: "\\b(lat|lata)\\b", min: 2 }
        ],
        model: "Dzień dobry! Nazywam się Iryna i mam czterdzieści dwa lata. Mój mąż Taras jest moim rówieśnikiem – też ma czterdzieści dwa lata. Nasz syn jest już pełnoletni: ma dwadzieścia jeden lat. Moja mama ma sześćdziesiąt siedem lat, ale w jej wieku nadal pracuje w szkole. Mój numer telefonu: numer kierunkowy plus czterdzieści osiem, potem sześćset dziewięćdziesiąt, trzydzieści, pięćdziesiąt, osiemdziesiąt. Proszę dzwonić wieczorem."
      }
    },

    // ───────────────────────── LEKCJA 2 ─────────────────────────
    {
      id: "m15l2",
      title: "Sto, tysiąc, milion",
      titleRu: "Сотні й тисячі; роки і великі суми",
      topic: "Ceny i budżet",
      review: false,
      minutes: 30,
      goals: [
        "Називати сотні 100–900 і не плутати dwieście, trzysta, czterysta, pięćset",
        "Узгоджувати tysiąc / tysiące / tysięcy, milion / miliony / milionów",
        "Читати роки (1989, 2026) і великі суми: зарплата, оренда, кредит"
      ],

      vocab: [
        { pl: "budżet", g: "m", ru: "бюджет", ex: "Nasz miesięczny budżet to siedem tysięcy złotych.", exRu: "Наш місячний бюджет — сім тисяч злотих." },
        { pl: "pensja", g: "f", ru: "зарплата", ex: "Moja pensja wynosi pięć tysięcy dwieście złotych netto.", exRu: "Моя зарплата становить п’ять тисяч двісті злотих чистими." },
        { pl: "netto / brutto", ru: "нетто (чистими) / брутто (до сплати податків)", note: "розм. na rękę — «на руки», чистими", ex: "Ile to jest netto, czyli na rękę?", exRu: "Скільки це чистими, тобто на руки?" },
        { pl: "wynosić", ru: "становити (про суму, кількість)", note: "wynosi + З. в.", ex: "Rachunek za prąd wynosi trzysta dwadzieścia złotych.", exRu: "Рахунок за електрику становить триста двадцять злотих." },
        { pl: "czynsz", g: "m", ru: "квартплата; орендна плата", ex: "Czynsz płacę do dziesiątego dnia miesiąca.", exRu: "Квартплату я сплачую до десятого числа місяця." },
        { pl: "kaucja", g: "f", ru: "застава, депозит (за квартиру)", ex: "Kaucja to tysiąc pięćset złotych.", exRu: "Застава — тисяча п’ятсот злотих." },
        { pl: "oszczędzać / zaoszczędzić", ru: "заощаджувати / заощадити", ex: "W tym roku zaoszczędziłam dziewięćset złotych.", exRu: "Цього року я заощадила дев’ятсот злотих." },
        { pl: "rata", g: "f", ru: "внесок (платіж частинами)", note: "na raty — у розстрочку", ex: "Kupiłem telefon na raty: sto dwadzieścia złotych miesięcznie.", exRu: "Я купив телефон у розстрочку: сто двадцять злотих на місяць." },
        { pl: "kredyt", g: "m", ru: "кредит", note: "kredyt hipoteczny — іпотека", ex: "Wzięli kredyt na trzydzieści lat.", exRu: "Вони взяли кредит на тридцять років." },
        { pl: "podwyżka", g: "f", ru: "підвищення (зарплати, цін)", note: "podwyżka o + З. в.", ex: "Dostałam podwyżkę o trzysta złotych.", exRu: "Мені підвищили зарплату на триста злотих." },
        { pl: "drożeć / podrożeć", ru: "дорожчати / подорожчати", ex: "Masło znowu podrożało.", exRu: "Масло знову подорожчало." },
        { pl: "tanieć / potanieć", ru: "дешевшати / подешевшати", ex: "Bilety lotnicze potaniały o czterdzieści procent.", exRu: "Авіаквитки подешевшали на сорок відсотків." },
        { pl: "opłaty", g: "pl", ru: "платежі (комунальні тощо)", ex: "Opłaty za prąd i gaz wynoszą razem czterysta złotych.", exRu: "Платежі за електрику й газ разом становлять чотириста злотих." }
      ],

      grammar: {
        title: "Сотні, тисячі, мільйони; як читати роки",
        html: `<p>Сотні — знову та сама межа «2–4 / 5+», що й у десятках:</p>
<table class="g">
<tr><th>число</th><th>польською</th><th>як утворено</th><th>українською</th></tr>
<tr><td>100</td><td class="pl">sto</td><td></td><td>сто</td></tr>
<tr><td>200</td><td class="pl">dwieście</td><td>dwie + ście</td><td>двісті</td></tr>
<tr><td>300</td><td class="pl">trzysta</td><td>trzy + sta</td><td>триста</td></tr>
<tr><td>400</td><td class="pl">czterysta</td><td>cztery + sta</td><td>чотириста</td></tr>
<tr><td>500</td><td class="pl">pięćset</td><td>pięć + set</td><td>п’ятсот</td></tr>
<tr><td>600</td><td class="pl">sześćset</td><td>sześć + set</td><td>шістсот</td></tr>
<tr><td>700</td><td class="pl">siedemset</td><td>siedem + set</td><td>сімсот</td></tr>
<tr><td>800</td><td class="pl">osiemset</td><td>osiem + set</td><td>вісімсот</td></tr>
<tr><td>900</td><td class="pl">dziewięćset</td><td>dziewięć + set</td><td>дев’ятсот</td></tr>
</table>
<div class="tip"><b>Пастки.</b> 1) <span class="pl">dwieście</span> — від <b>dwie</b>, а не «dwa» (як укр. «двісті»). 2) Немає форм ✗ <i>dwiesta</i>, ✗ <i>pięćsto</i>. 3) <span class="pl">czterysta</span> — з y, а <span class="pl">czternaście, czterdzieści</span> — без. 4) Ряд одного кореня: <span class="pl">siedemnaście</span> (17) — <span class="pl">siedemdziesiąt</span> (70) — <span class="pl">siedemset</span> (700).</div>
<h4>Тисяча й мільйон — це іменники</h4>
<table class="g">
<tr><th></th><th>1</th><th>2–4, 22–24…</th><th>5–21, 25–31…</th></tr>
<tr><td>тисяча</td><td class="pl">tysiąc</td><td class="pl">dwa tysiące</td><td class="pl">pięć tysięcy</td></tr>
<tr><td>мільйон</td><td class="pl">milion</td><td class="pl">trzy miliony</td><td class="pl">dziesięć milionów</td></tr>
</table>
<p>1000 — просто <span class="pl">tysiąc</span>, без «jeden» (укр. «одна тисяча»). Після тисяч і мільйонів іменник <b>завжди в род. мн.</b>, бо він залежить від слова «тисяча»: <span class="pl">tysiąc złotych, dwa tysiące złotych, pięć milionów ludzi</span>. Але якщо число закінчується звичайною одиницею — вирішує <b>останнє слово</b>: <span class="pl">dwa tysiące dwa złote</span> (2002 zł), <span class="pl">tysiąc czterdzieści złotych</span> (1040 zł).</p>
<div class="tip">✗ <i>dwa tysiące złote</i> — типова помилка! Порівняйте укр. «дві тисячі гривень» — тут теж родовий.</div>
<h4>Великі суми</h4>
<p>Розряди відділяють пробілом, гроші — після коми: 1 250 000 zł — <span class="pl">milion dwieście pięćdziesiąt tysięcy złotych</span>; 4 999,99 zł — <span class="pl">cztery tysiące dziewięćset dziewięćdziesiąt dziewięć złotych i dziewięćdziesiąt dziewięć groszy</span>. У розмові: <span class="pl">osiem tysięcy na rękę</span>, <span class="pl">pół miliona</span>.</p>
<h4>Роки</h4>
<p>Роки називають <b>порядковими</b> числівниками, і порядковими стають <b>два</b> останні слова (десятки й одиниці), а не одне, як в українській:</p>
<table class="g">
<tr><th>рік</th><th>який?</th><th>у якому році?</th></tr>
<tr><td>1989</td><td class="pl">tysiąc dziewięćset osiemdziesiąty dziewiąty</td><td class="pl">w tysiąc dziewięćset osiemdziesiątym dziewiątym roku</td></tr>
<tr><td>2026</td><td class="pl">dwa tysiące dwudziesty szósty</td><td class="pl">w dwa tysiące dwudziestym szóstym roku</td></tr>
<tr><td>2000</td><td class="pl">dwutysięczny</td><td class="pl">w dwutysięcznym roku</td></tr>
</table>
<div class="tip">Укр. «у дві тисячі двадцять шостому році» → не ✗ <i>w dwa tysiące dwadzieścia szóstym</i>, а <span class="pl">w dwa tysiące dwudziestym szóstym roku</span>. «Тисяча дев’ятсот» і «дві тисячі» при цьому не змінюються. Порядкові десятки детальніше — в уроці 4.</div>`
      },

      exercises: [
        { type: "choice", q: "Czynsz wynosi dwa ___ złotych.", options: ["tysiące", "tysięcy", "tysiąc"], answer: 0,
          explain: "Tysiąc — іменник: після dwa (2–4) — наз. мн. tysiące, як укр. «дві тисячі»." },
        { type: "gap", q: "Ten samochód kosztuje pięćdziesiąt ___ złotych. (tysiąc)", answers: ["tysięcy"],
          explain: "50 → род. мн.: pięćdziesiąt tysięcy (як укр. «п’ятдесят тисяч»)." },
        { type: "gap", q: "Kaucja wynosi ___ złotych. (500, словами)", answers: ["pięćset"],
          explain: "pięć + set: pięćset. Вимова ≈ [п’єньсет], але пишемо з ć." },
        { type: "gap", q: "Zapisz cyframi: tysiąc dziewięćset osiemdziesiąt dziewięć = ___", answers: ["1989"],
          explain: "tysiąc (1000) + dziewięćset (900) + osiemdziesiąt (80) + dziewięć (9) = 1989." },
        { type: "match", q: "З’єднайте сотні з цифрами",
          pairs: [["dwieście", "200"], ["trzysta", "300"], ["czterysta", "400"], ["pięćset", "500"], ["sześćset", "600"], ["dziewięćset", "900"]],
          explain: "200 — dwie + ście; 300–400 — + sta; 500–900 — + set." },
        { type: "choice", q: "Na koncie mam dwa tysiące ___.", options: ["złotych", "złote", "złoty"], answer: 0,
          explain: "Після тисяч іменник завжди в род. мн.: dwa tysiące złotych. А от 2002 zł — dwa tysiące dwa złote (вирішує останнє слово)." },
        { type: "choice", q: "Urodziłem się w ___ roku. (1989)", options: ["tysiąc dziewięćset osiemdziesiątym dziewiątym", "tysiąc dziewięćset osiemdziesiąt dziewięć", "tysiąc dziewięćset osiemdziesiątego dziewiątego"], answer: 0,
          explain: "w + М. в.: два останні слова стають порядковими — osiemdziesiątym dziewiątym (укр. «вісімдесят дев’ятому» — лише одне)." },
        { type: "gap", q: "Mamy rok dwa tysiące ___ szósty. (2026)", answers: ["dwudziesty"],
          explain: "У роках порядкові і десятки, і одиниці: dwudziesty szósty, а не «dwadzieścia szósty»." },
        { type: "order", ru: "Моя зарплата становить шість тисяч злотих брутто.", words: ["Moja", "pensja", "wynosi", "sześć", "tysięcy", "złotych", "brutto."], alt: [],
          explain: "sześć (5+) → tysięcy; після тисяч — złotych (род. мн.)." },
        { type: "translate", ru: "Квартира коштує мільйон злотих.", answers: ["Mieszkanie kosztuje milion złotych."],
          explain: "milion, як і tysiąc, — без «jeden»; після нього іменник у род. мн.: milion złotych." }
      ],

      pronunciation: {
        focus: "Сотні: pięćset [п’єньсет], sześćset [шесьсет]; tysiące",
        tip: `<p>У сотнях на стику приголосних деякі звуки «губляться» — так говорять усі поляки:</p>
<ul>
<li><span class="pl">pięćset</span> ≈ [П’ЄНЬ-сет]: ć перед s майже зникає, а ę звучить як [ень].</li>
<li><span class="pl">sześćset</span> ≈ [ШЕСЬ-сет], <span class="pl">dziewięćset</span> ≈ [джє-В’ЄНЬ-сет].</li>
<li><span class="pl">dwieście</span> ≈ [ДВЄ-сьчє], <span class="pl">trzysta</span> ≈ [ТШИ-ста] (trz = [т+ш]), <span class="pl">czterysta</span> ≈ [чте-РИ-ста].</li>
<li><span class="pl">tysiąc</span> ≈ [ТИ-сьонц], <span class="pl">tysiące</span> ≈ [ти-СЬОН-це], <span class="pl">tysięcy</span> ≈ [ти-СЬЄН-ци]: ą/ę перед c звучать як [он]/[ен].</li>
</ul>
<p>Наголос — на передостанній склад, тож у <span class="pl">dziewięćset</span> він падає на «więć», а в <span class="pl">czterysta</span> — на «ry». Слухайте кінцівку: <b>-sta</b> → 300/400, <b>-dzieści</b> → 30/40.</p>`,
        items: [
          { type: "listen", text: "pięćset pięćdziesiąt pięć", ru: "555", note: "≈ [п’єньсет п’єнь-джє-сьонт п’єньчь]" },
          { type: "listen", text: "sześćset sześćdziesiąt", ru: "660" },
          { type: "minimal", options: ["trzysta", "trzydzieści"], ru: ["300", "30"] },
          { type: "minimal", options: ["czterysta", "czterdzieści"], ru: ["400", "40"] },
          { type: "minimal", options: ["siedemset", "siedemdziesiąt"], ru: ["700", "70"] },
          { type: "stress", word: "dziewięćset", syllables: ["dzie", "więć", "set"], answer: 1 },
          { type: "stress", word: "tysiące", syllables: ["ty", "sią", "ce"], answer: 1 },
          { type: "dictation", text: "Czynsz wynosi dwa tysiące czterysta pięćdziesiąt złotych." }
        ]
      },

      reading: {
        title: "Budżet rodziny Nowaków",
        text: "Ania i Paweł Nowakowie mieszkają we Wrocławiu z dwojgiem dzieci. Raz w miesiącu siadają przy kuchennym stole i liczą domowy budżet.\n\nPaweł jest programistą i zarabia osiem tysięcy dwieście złotych netto. Pensja Ani, która pracuje w aptece, wynosi pięć tysięcy czterysta złotych. Razem to trzynaście tysięcy sześćset złotych – sporo, ale wydatków też jest dużo.\n\nMieszkanie kupili w dwa tysiące dziewiętnastym roku za czterysta osiemdziesiąt tysięcy złotych. Wzięli kredyt na trzydzieści lat i co miesiąc płacą ratę: trzy tysiące sto pięćdziesiąt złotych. Do tego czynsz – osiemset czterdzieści złotych – i opłaty za prąd i internet. Na jedzenie wydają prawie trzy tysiące, bo wszystko drożeje: masło, kawa, nawet jajka.\n\nW tym roku Ania dostała podwyżkę – czterysta złotych. Paweł od razu znalazł w internecie telewizor za cztery tysiące dziewięćset dziewięćdziesiąt dziewięć złotych. „Na raty! Tylko dziewięćdziesiąt dziewięć złotych miesięcznie!” – przekonywał. Ania szybko policzyła: pięćdziesiąt rat po dziewięćdziesiąt dziewięć złotych to prawie pięć tysięcy.\n– Wolę oszczędzać – powiedziała. – Odkładamy pięćset złotych miesięcznie na wakacje nad morzem.\n\nTelewizor musi poczekać. Stary działa przecież od dwa tysiące dwunastego roku.",
        glossary: [
          { pl: "z dwojgiem dzieci", ru: "із двома дітьми" },
          { pl: "programistą", ru: "програмістом" },
          { pl: "zarabia", ru: "заробляє" },
          { pl: "wydatków", ru: "витрат" },
          { pl: "wydają", ru: "витрачають" },
          { pl: "miesięcznie", ru: "щомісяця, на місяць" },
          { pl: "przekonywał", ru: "переконував" },
          { pl: "Odkładamy", ru: "відкладаємо (гроші)" }
        ],
        questions: [
          { type: "choice", q: "Ile zarabia Paweł netto?", options: ["8200 zł", "5400 zł", "13 600 zł"], answer: 0,
            explain: "«Zarabia osiem tysięcy dwieście złotych netto» — 8200 zł." },
          { type: "tf", q: "Nowakowie kupili mieszkanie w 2019 roku.", answer: true,
            explain: "«W dwa tysiące dziewiętnastym roku» — у 2019 році." },
          { type: "choice", q: "Ile wynosi rata kredytu?", options: ["840 zł", "3150 zł", "400 zł"], answer: 1,
            explain: "«Trzy tysiące sto pięćdziesiąt złotych» — 3150 zł. 840 zł — це czynsz." },
          { type: "tf", q: "Ania chce kupić nowy telewizor na raty.", answer: false,
            explain: "Телевізор хоче Павел, а Аня воліє заощаджувати: «Wolę oszczędzać»." },
          { type: "choice", q: "Na co Nowakowie odkładają pieniądze?", options: ["na telewizor", "na wakacje nad morzem", "na nowe mieszkanie"], answer: 1,
            explain: "«Odkładamy pięćset złotych miesięcznie na wakacje nad morzem»." }
        ]
      },

      writing: {
        prompt: "Польська подруга питає, скільки коштує життя у вашому місті. Опишіть свій місячний бюджет: 1) зарплату (netto чи brutto); 2) оренду / квартплату й комунальні платежі; 3) скільки йде на їжу й транспорт; 4) скільки ви відкладаєте і на що. Усі суми пишіть словами (сотні й тисячі!).",
        minWords: 40, maxWords: 80,
        useWords: ["budżet", "czynsz", "oszczędzać", "wynosić"],
        checklist: [
          { label: "Щонайменше 2 суми з tysiąc / tysiące / tysięcy", pattern: "\\btysi(ąc|ące|ęcy)\\b", min: 2 },
          { label: "Щонайменше 2 сотні словами (sto, dwieście, trzysta, pięćset…)", pattern: "\\b(sto|dwieście|trzysta|czterysta|pięćset|sześćset|siedemset|osiemset|dziewięćset)\\b", min: 2 }
        ],
        model: "Mój miesięczny budżet nie jest duży. Pracuję w hotelu w Gdańsku i zarabiam cztery tysiące osiemset złotych na rękę. Za pokój płacę tysiąc dwieście złotych, a czynsz i opłaty wynoszą razem trzysta pięćdziesiąt złotych. Na jedzenie wydaję mniej więcej tysiąc pięćset złotych, bo wszystko drożeje. Bilet miesięczny kosztuje sto dziesięć złotych. Staram się oszczędzać: co miesiąc odkładam pięćset złotych. W przyszłym roku chcę pojechać na wakacje do Hiszpanii."
      }
    },

    // ───────────────────────── LEKCJA 3 ─────────────────────────
    {
      id: "m15l3",
      title: "Pięć osób przyszło",
      titleRu: "Числівник + іменник + дієслово",
      topic: "Statystyki i ankiety",
      review: false,
      minutes: 30,
      goals: [
        "Безпомилково обирати форму іменника після будь-якого числа: 42 osoby, ale 41 osób",
        "Узгоджувати дієслово: Dwie osoby przyszły / Pięćdziesiąt osób przyszło",
        "Уживати pół, półtora / półtorej, kilka, kilkanaście, kilkadziesiąt",
        "Переказувати результати опитування (procent, większość, połowa)"
      ],

      vocab: [
        { pl: "ankieta", g: "f", ru: "опитування; анкета", ex: "W ankiecie wzięło udział czterdzieści osób.", exRu: "В опитуванні взяли участь сорок осіб." },
        { pl: "badanie", g: "n", ru: "дослідження; обстеження", ex: "Badanie pokazało, że co trzeci student pracuje.", exRu: "Дослідження показало, що кожен третій студент працює." },
        { pl: "procent", g: "m", ru: "відсоток", note: "після числівників не змінюється: dwa procent, pięćdziesiąt procent", ex: "Dwadzieścia procent klientów płaci gotówką.", exRu: "Двадцять відсотків клієнтів платять готівкою." },
        { pl: "większość", g: "f", ru: "більшість", note: "mniejszość — меншість", ex: "Większość moich znajomych ma psa.", exRu: "Більшість моїх знайомих має собаку." },
        { pl: "połowa", g: "f", ru: "половина", ex: "Połowa ankietowanych nie czyta książek.", exRu: "Половина опитаних не читає книжок." },
        { pl: "ankietowany", ru: "опитаний, респондент", note: "відмінюється як прикметник; мн. ankietowani", ex: "Co piąty ankietowany chce pracować z domu.", exRu: "Кожен п’ятий опитаний хоче працювати з дому." },
        { pl: "mieszkaniec", g: "m", ru: "мешканець", note: "мн. mieszkańcy, Р. в. мн. mieszkańców", ex: "Kraków ma ponad osiemset tysięcy mieszkańców.", exRu: "Краків має понад вісімсот тисяч мешканців." },
        { pl: "średnio", ru: "у середньому", ex: "Średnio śpię siedem godzin na dobę.", exRu: "У середньому я сплю сім годин на добу." },
        { pl: "wynik", g: "m", ru: "результат", ex: "Wyniki badania są zaskakujące.", exRu: "Результати дослідження несподівані." },
        { pl: "wzrastać / wzrosnąć", ru: "зростати / зрости", note: "o + З. в.: wzrosnąć o dziesięć procent", ex: "Ceny biletów wzrosły o dziesięć procent.", exRu: "Ціни на квитки зросли на десять відсотків." },
        { pl: "spadać / spaść", ru: "падати / впасти, знижуватися", ex: "Liczba turystów spadła o połowę.", exRu: "Кількість туристів зменшилася вдвічі." },
        { pl: "kilkadziesiąt", ru: "кілька десятків (20–90)", note: "kilkanaście — 11–19; kilkaset — кілька сотень", ex: "Na przystanku czekało kilkadziesiąt osób.", exRu: "На зупинці чекало кілька десятків людей." }
      ],

      grammar: {
        title: "Числівник + іменник + дієслово: повна система",
        html: `<p>Форму іменника вирішує <b>останнє слово</b> числівника. Уся система — в одній таблиці:</p>
<table class="g">
<tr><th>число закінчується на…</th><th>іменник</th><th>дієслово (мин. час)</th><th>приклад</th></tr>
<tr><td>1 (лише саме число 1)</td><td>наз. одн.</td><td>однина</td><td class="pl">jedna osoba przyszła</td></tr>
<tr><td>2, 3, 4 (22–24, 32–34, 42–44 … 92–94, 102–104)</td><td>наз. мн.</td><td>множина</td><td class="pl">czterdzieści dwie osoby przyszły</td></tr>
<tr><td>0, 5–9, 11–19; 21, 31, 41… (на jeden); круглі десятки, сотні, тисячі</td><td>род. мн.</td><td>3 ос. одн., с. р.</td><td class="pl">czterdzieści jeden osób przyszło</td></tr>
</table>
<div class="tip"><b>Три пастки.</b> 1) 12, 13, 14 (і 112–114) — завжди род. мн.: <span class="pl">czternaście osób</span>, хоча «закінчуються на 2–4». 2) 21, 31, 41 … — род. мн.: <span class="pl">czterdzieści jeden osób</span> (укр. «сорок одна особа»!). 3) Круглі десятки — род. мн.: <span class="pl">pięćdziesiąt lat, dziewięćdziesiąt osób</span>.</div>
<h4>Дієслово</h4>
<p>Теперішній час: 2–4 → множина (<span class="pl">Dwie osoby czekają.</span>), 5+ → однина (<span class="pl">Pięćdziesiąt osób czeka.</span>). Минулий: 2–4 → <b>-ły / -li</b>, 5+ → <b>-ło</b>: <span class="pl">Czterdzieści osób odpowiedziało.</span> В українській можна сказати «п’ятдесят осіб відповіли», у польській — тільки однина середнього роду.</p>
<div class="ex"><span class="pl">Dwadzieścia trzy osoby głosowały na „tak”, a dwadzieścia pięć osób głosowało na „nie”.</span> — Двадцять три особи проголосували «за», а двадцять п’ять — «проти».</div>
<h4>dwa / dwie — і в довгих числах</h4>
<p><span class="pl">dwa</span> — ч. р. (неособові) і с. р.: <span class="pl">pięćdziesiąt dwa lata, trzydzieści dwa okna</span>; <span class="pl">dwie</span> — ж. р.: <span class="pl">czterdzieści dwie osoby</span>; чоловіки — <span class="pl">dwóch / dwaj</span> (модуль 7). Рід перевіряйте і в кінці довгого числа!</p>
<h4>pół, półtora, półtorej</h4>
<p><span class="pl">pół</span> + род. одн.: <span class="pl">pół godziny, pół roku, pół litra</span>. «Півтора / півтори» залежить від роду, як і в українській: <span class="pl">półtora</span> (ч. і с. р.): <span class="pl">półtora roku, półtora kilo</span>; <span class="pl">półtorej</span> (ж. р.): <span class="pl">półtorej godziny</span>. ✗ <i>półtory</i> — такої форми немає.</p>
<h4>Неточна кількість</h4>
<table class="g">
<tr><th class="pl">ile?</th><th class="pl">kilka</th><th class="pl">kilkanaście</th><th class="pl">kilkadziesiąt</th><th class="pl">kilkaset</th></tr>
<tr><td>скільки?</td><td>кілька (2–9)</td><td>кільканадцять (11–19)</td><td>кілька десятків (20–90)</td><td>кілька сотень</td></tr>
</table>
<p>Усі вони + род. мн., дієслово — в однині: <span class="pl">Kilkanaście osób czekało na pociąg.</span> З чоловіками — форма на -u: <span class="pl">kilku studentów, kilkudziesięciu kibiców</span>.</p>
<div class="tip"><span class="pl">procent</span> після числівника в сучасній мові не змінюється: <span class="pl">dwa procent, czterdzieści procent</span>. Дієслово після «X procent» — в однині: <span class="pl">Sześćdziesiąt procent Polaków pije kawę.</span></div>`
      },

      exercises: [
        { type: "choice", q: "W ankiecie wzięły udział czterdzieści dwie ___.", options: ["osoby", "osób", "osoba"], answer: 0,
          explain: "Останнє слово dwie (2–4) → наз. мн. osoby, і дієслово в множині: wzięły." },
        { type: "choice", q: "Czterdzieści jeden ___ odpowiedziało „tak”.", options: ["osób", "osoby", "osoba"], answer: 0,
          explain: "Пастка: 41 поводиться як 5+ → род. мн. osób (укр. «сорок одна особа»)." },
        { type: "gap", q: "Na spotkanie przyszło pięćdziesiąt ___ (osoba).", answers: ["osób"],
          explain: "Круглий десяток → род. мн.: pięćdziesiąt osób; дієслово — przyszło." },
        { type: "gap", q: "Dwie osoby ___ (przyjść, мин. час) za późno.", answers: ["przyszły"],
          explain: "2–4 → дієслово в множині; osoba — ж. р., тож -ły: przyszły." },
        { type: "gap", q: "Sześćdziesiąt procent ankietowanych ___ (mieszkać, теп. час) w mieście.", answers: ["mieszka"],
          explain: "Після 5+ (і після «X procent») дієслово в однині: mieszka." },
        { type: "choice", q: "Czekałam na autobus ___ godziny. (1,5)", options: ["półtorej", "półtora", "półtory"], answer: 0,
          explain: "Godzina — ж. р. → półtorej godziny (як укр. «півтори години»). Форми «półtory» немає." },
        { type: "match", q: "З’єднайте польське словосполучення з перекладом",
          pairs: [["dwadzieścia dwa lata", "22 роки"], ["dwadzieścia pięć lat", "25 років"], ["czternaście lat", "14 років"], ["czterdzieści cztery lata", "44 роки"], ["pół roku", "пів року"], ["półtora roku", "півтора року"]],
          explain: "22, 44 → lata; 14, 25 → lat; pół / półtora + род. одн. roku." },
        { type: "choice", q: "Na koncercie na Stadionie Narodowym było ___ tysięcy ludzi.", options: ["kilkadziesiąt", "kilkudziesięciu", "kilkadziesiątych"], answer: 0,
          explain: "kilkadziesiąt (кілька десятків) + род. мн.: kilkadziesiąt tysięcy ludzi; дієслово — było." },
        { type: "order", ru: "Ціна впала на сорок відсотків.", words: ["Cena", "spadła", "o", "czterdzieści", "procent."], alt: [],
          explain: "spaść o + З. в.: o czterdzieści procent (procent після числівника не змінюється)." },
        { type: "translate", ru: "Двадцять одна особа відповіла «ні».", answers: ["Dwadzieścia jeden osób odpowiedziało „nie”.", "Dwadzieścia jeden osób odpowiedziało nie."],
          explain: "21 → род. мн. osób і дієслово в 3 ос. одн. с. р.: odpowiedziało." }
      ],

      pronunciation: {
        focus: "Числа у фразі: kilkanaście / kilkadziesiąt, dwanaście / dwadzieścia",
        tip: `<p>У довгій фразі числівник «зливається» з іменником, тому важливо чітко вимовити наголошений склад — саме він розрізняє схожі числа:</p>
<ul>
<li><span class="pl">kilkanaście</span> ≈ [кіль-ка-НА-сьчє] (11–19) — <span class="pl">kilkadziesiąt</span> ≈ [кіль-ка-ДЖЄ-сьонт] (20–90).</li>
<li><span class="pl">dwanaście</span> ≈ [два-НА-сьчє] (12) — <span class="pl">dwadzieścia</span> ≈ [два-ДЖЄ-сьчя] (20).</li>
<li><span class="pl">półtorej</span> ≈ [пуў-ТО-рей]: ó = [у], ł = [ў].</li>
<li><span class="pl">czterdzieści dwie osoby</span> ≈ [чтер-ДЖЄ-сьчі ДВЄ о-СО-би] — кожне слово має свій наголос.</li>
</ul>
<p>Не «ковтайте» -ście в кінці: [сьчє] — це м’яке [сь] + м’яке [ч], як у слові <span class="pl">jeść</span>.</p>`,
        items: [
          { type: "listen", text: "kilkadziesiąt osób", ru: "кілька десятків осіб" },
          { type: "listen", text: "czterdzieści dwie osoby", ru: "сорок дві особи" },
          { type: "minimal", options: ["kilkanaście", "kilkadziesiąt"], ru: ["кільканадцять (11–19)", "кілька десятків (20–90)"] },
          { type: "minimal", options: ["dwanaście", "dwadzieścia"], ru: ["12", "20"] },
          { type: "stress", word: "kilkadziesiąt", syllables: ["kil", "ka", "dzie", "siąt"], answer: 2 },
          { type: "stress", word: "półtorej", syllables: ["pół", "to", "rej"], answer: 1 },
          { type: "dictation", text: "Sześćdziesiąt procent ankietowanych pije kawę codziennie." }
        ]
      },

      reading: {
        title: "Ankieta na osiedlu",
        text: "Spółdzielnia z osiedla Kwiatowego w Poznaniu zrobiła ankietę: czego brakuje mieszkańcom? Na pytania odpowiedziały sto czterdzieści dwie osoby, czyli prawie połowa dorosłych mieszkańców osiedla.\n\nWyniki są ciekawe. Większość ankietowanych, bo aż sześćdziesiąt osiem procent, chce nowego placu zabaw. Czterdzieści jeden osób narzeka na brak miejsc parkingowych, a dwadzieścia trzy osoby piszą, że w nocy jest za głośno. Tylko dwanaście osób jest zadowolonych ze wszystkiego.\n\nNajwięcej emocji wywołało pytanie o psy. Na osiedlu mieszka mniej więcej siedemdziesiąt psów, ale nie ma ani jednego wybiegu. Pięćdziesiąt cztery osoby chcą wybiegu dla psów, a kilkanaście osób uważa, że psów jest już za dużo.\n\nŚrednio mieszkańcy czekają na windę trzy minuty. W bloku numer czternaście winda nie działa od półtora roku, więc jego mieszkańcy dopisali na końcu ankiety: „Najpierw winda, potem plac zabaw!”.\n\nPrezes spółdzielni obiecał, że w przyszłym roku wydatki na osiedle wzrosną o trzydzieści procent. A mieszkańcy bloku numer czternaście na razie liczą… schody.",
        glossary: [
          { pl: "Spółdzielnia", ru: "житловий кооператив" },
          { pl: "osiedla", ru: "житлового масиву, мікрорайону" },
          { pl: "placu zabaw", ru: "дитячого майданчика" },
          { pl: "narzeka", ru: "скаржиться" },
          { pl: "miejsc parkingowych", ru: "паркомісць" },
          { pl: "wywołało", ru: "викликало" },
          { pl: "wybiegu", ru: "майданчика для вигулу собак" },
          { pl: "windę", ru: "ліфт" },
          { pl: "dopisali", ru: "дописали" },
          { pl: "Prezes", ru: "голова (кооперативу, правління)" }
        ],
        questions: [
          { type: "choice", q: "Ile osób odpowiedziało na pytania ankiety?", options: ["142", "124", "42"], answer: 0,
            explain: "«Sto czterdzieści dwie osoby» — 142." },
          { type: "tf", q: "Większość ankietowanych chce nowego placu zabaw.", answer: true,
            explain: "«Większość ankietowanych, bo aż sześćdziesiąt osiem procent, chce nowego placu zabaw»." },
          { type: "choice", q: "Ile osób chce wybiegu dla psów?", options: ["czterdzieści jeden", "pięćdziesiąt cztery", "kilkanaście"], answer: 1,
            explain: "«Pięćdziesiąt cztery osoby chcą wybiegu dla psów» — 54." },
          { type: "tf", q: "Winda w bloku numer czternaście nie działa od pół roku.", answer: false,
            explain: "Ліфт не працює «od półtora roku» — вже півтора року." },
          { type: "choice", q: "O ile procent mają wzrosnąć wydatki na osiedle?", options: ["o trzynaście", "o trzydzieści", "o czterdzieści"], answer: 1,
            explain: "«Wzrosną o trzydzieści procent» — на 30 %." }
        ]
      },

      writing: {
        prompt: "Ви провели невелике опитування на роботі чи в групі на курсі (тема на вибір: робота з дому, спорт, кава, дорога на роботу). Напишіть короткий звіт: 1) скільки осіб відповіло; 2) що думає більшість (у відсотках); 3) 2–3 конкретні результати з числами (і з 2–4, і з 5+!); 4) один висновок.",
        minWords: 40, maxWords: 80,
        useWords: ["ankieta", "większość", "procent", "średnio"],
        checklist: [
          { label: "Числівник 2–4 + наз. мн. (dwie osoby, cztery osoby, dwa lata…)", pattern: "\\b(dwa|dwie|trzy|cztery)\\s+(osoby|kobiety|panie|studentki|koleżanki|lata|godziny|dni)\\b", min: 1 },
          { label: "Щонайменше 3 рази procent або osób", pattern: "\\b(procent|osób)\\b", min: 3 },
          { label: "Неточна кількість або «півтора» (kilka, kilkanaście, kilkadziesiąt, pół, półtora, półtorej)", pattern: "\\b(kilka|kilku|kilkanaście|kilkunastu|kilkadziesiąt|kilkudziesięciu|pół|półtora|półtorej)\\b", min: 1 }
        ],
        model: "W naszej firmie zrobiliśmy ankietę o pracy zdalnej. Odpowiedziały czterdzieści dwie osoby. Większość, czyli siedemdziesiąt procent, chce pracować z domu dwa lub trzy dni w tygodniu. Dwadzieścia jeden osób woli biuro, bo w domu ma małe dzieci. Tylko cztery osoby chcą pracować zdalnie codziennie. Średnio dojeżdżamy do pracy półtorej godziny dziennie, a kilkanaście osób – nawet dwie godziny. Szef obiecał, że od stycznia będzie więcej dni zdalnych."
      }
    },

    // ───────────────────────── LEKCJA 4 ─────────────────────────
    {
      id: "m15l4",
      title: "Po pięćdziesiątce",
      titleRu: "Відмінки десятків; порядкові; десятиліття",
      topic: "Dekady i jubileusze",
      review: false,
      minutes: 30,
      goals: [
        "Відмінювати десятки: od czterdziestu do pięćdziesięciu, z sześćdziesięcioma złotymi",
        "Уживати порядкові десятки: czterdziesty, pięćdziesiąty, setny",
        "Говорити про десятиліття (w latach sześćdziesiątych) і ювілеї (czterdzieste urodziny, po pięćdziesiątce)"
      ],

      vocab: [
        { pl: "jubileusz", g: "m", ru: "ювілей", ex: "Nasza szkoła obchodzi w tym roku jubileusz.", exRu: "Наша школа цього року святкує ювілей." },
        { pl: "rocznica", g: "f", ru: "річниця", ex: "W sobotę jest czterdziesta rocznica ślubu moich rodziców.", exRu: "У суботу — сорокова річниця весілля моїх батьків." },
        { pl: "obchodzić", ru: "відзначати, святкувати (дату)", note: "obchodzić urodziny, rocznicę, święto", ex: "Babcia obchodzi w maju osiemdziesiąte urodziny.", exRu: "У травні бабуся святкує вісімдесятиріччя." },
        { pl: "złote gody", g: "pl", ru: "золоте весілля (50 років шлюбу)", ex: "Dziadkowie obchodzili złote gody w restauracji.", exRu: "Бабуся з дідусем відзначали золоте весілля в ресторані." },
        { pl: "dekada", g: "f", ru: "десятиліття", ex: "W ostatniej dekadzie ceny mieszkań bardzo wzrosły.", exRu: "За останнє десятиліття ціни на квартири дуже зросли." },
        { pl: "pokolenie", g: "n", ru: "покоління", ex: "Przy stole siedziały cztery pokolenia naszej rodziny.", exRu: "За столом сиділи чотири покоління нашої родини." },
        { pl: "czterdziestolatek", g: "m", ru: "сорокарічний (чоловік)", note: "ж. р. czterdziestolatka; pięćdziesięciolatek, sześćdziesięciolatek", ex: "Typowy czterdziestolatek ma kredyt i dwoje dzieci.", exRu: "Типовий сорокарічний чоловік має кредит і двох дітей." },
        { pl: "stulecie", g: "n", ru: "сторіччя (100-річчя)", ex: "W dwa tysiące osiemnastym roku Polska obchodziła stulecie niepodległości.", exRu: "У 2018 році Польща відзначала сторіччя незалежності." },
        { pl: "około", ru: "близько, приблизно", note: "+ Р. в.: około sześćdziesięciu osób", ex: "Na koncert przyszło około sześćdziesięciu tysięcy osób.", exRu: "На концерт прийшло близько шістдесяти тисяч людей." },
        { pl: "ponad", ru: "понад", note: "+ З. в.: ponad czterdzieści osób, ale ponad czterdziestu uczestników", ex: "Ten dom ma ponad sto lat.", exRu: "Цьому будинку понад сто років." },
        { pl: "emerytura", g: "f", ru: "пенсія (за віком)", note: "przejść na emeryturę — вийти на пенсію", ex: "Mama przeszła na emeryturę w wieku sześćdziesięciu lat.", exRu: "Мама вийшла на пенсію в шістдесят років." },
        { pl: "pięćdziesiątka", g: "f", ru: "(розм.) п’ятдесят років; «п’ятдесятка»", note: "так само czterdziestka, sześćdziesiątka", ex: "Po pięćdziesiątce tata zaczął biegać.", exRu: "Після п’ятдесяти тато почав бігати." },
        { pl: "setny", ru: "сотий", ex: "To już setny odcinek naszego podcastu!", exRu: "Це вже сотий випуск нашого подкасту!" },
        { pl: "młodość", g: "f", ru: "молодість", ex: "W młodości tata grał w zespole rockowym.", exRu: "У молодості тато грав у рок-гурті." }
      ],

      grammar: {
        title: "Відмінювання десятків, порядкові числівники, десятиліття",
        html: `<p>Після прийменників <span class="pl">od, do, około, dla, z, po</span> числівник змінюється — як укр. «від сорока до п’ятдесяти».</p>
<table class="g">
<tr><th>відмінок</th><th>20</th><th>40</th><th>50</th><th>90</th><th>100</th></tr>
<tr><td>Н. / З.</td><td class="pl">dwadzieścia</td><td class="pl">czterdzieści</td><td class="pl">pięćdziesiąt</td><td class="pl">dziewięćdziesiąt</td><td class="pl">sto</td></tr>
<tr><td>Р. / Д. / М.</td><td class="pl">dwudziestu</td><td class="pl">czterdziestu</td><td class="pl">pięćdziesięciu</td><td class="pl">dziewięćdziesięciu</td><td class="pl">stu</td></tr>
<tr><td>О.</td><td class="pl">dwudziestoma</td><td class="pl">czterdziestoma</td><td class="pl">pięćdziesięcioma</td><td class="pl">dziewięćdziesięcioma</td><td class="pl">stoma</td></tr>
</table>
<p>Схема: <b>-dzieści → -dziestu</b>, <b>-dziesiąt → -dziesięciu</b> (ą → ę!), в орудному <b>+ -oma</b>. Відмінюються <b>усі</b> частини складеного числа: <span class="pl">od czterdziestu pięciu do pięćdziesięciu dwóch lat</span>. Сотні: <span class="pl">dwustu, trzystu, czterystu, pięciuset, sześciuset</span>.</p>
<div class="ex"><span class="pl">Bilety kosztują od czterdziestu do pięćdziesięciu złotych.</span> — Квитки коштують від сорока до п’ятдесяти злотих.</div>
<div class="ex"><span class="pl">Wyszłam z domu z pięćdziesięcioma złotymi.</span> — Я вийшла з дому з п’ятдесятьма злотими.</div>
<div class="tip"><b>ponad</b> + З. в. — форма не змінюється: <span class="pl">ponad czterdzieści osób</span>. Але з чоловіками З. в. = Р. в.: <span class="pl">ponad czterdziestu uczestników</span>. <b>około</b> — завжди + Р. в.: <span class="pl">około sześćdziesięciu osób</span>.</div>
<h4>Порядкові десятки</h4>
<table class="g">
<tr><td>20.</td><td class="pl">dwudziesty</td><td>60.</td><td class="pl">sześćdziesiąty</td></tr>
<tr><td>30.</td><td class="pl">trzydziesty</td><td>70.</td><td class="pl">siedemdziesiąty</td></tr>
<tr><td>40.</td><td class="pl">czterdziesty</td><td>80.</td><td class="pl">osiemdziesiąty</td></tr>
<tr><td>50.</td><td class="pl">pięćdziesiąty</td><td>90.</td><td class="pl">dziewięćdziesiąty</td></tr>
<tr><td>100.</td><td class="pl">setny</td><td>1000.</td><td class="pl">tysięczny</td></tr>
</table>
<p>Відмінюються як прикметники: <span class="pl">czterdziesty, czterdziesta, czterdzieste</span>. У складених числах порядкові <b>обидва</b> слова: <span class="pl">czterdziesty piąty</span> (укр. «сорок п’ятий» — лише одне).</p>
<div class="tip">Не перекладайте з української дослівно: 40-й — <span class="pl">czterdziesty</span>, а не «sorokowy»; 90-й — <span class="pl">dziewięćdziesiąty</span> («дев’ять-десятий»), без жодного «-ностий».</div>
<h4>Десятиліття</h4>
<table class="g">
<tr><td class="pl">lata sześćdziesiąte</td><td>шістдесяті роки</td></tr>
<tr><td class="pl">w latach sześćdziesiątych</td><td>у шістдесятих</td></tr>
<tr><td class="pl">muzyka z lat osiemdziesiątych</td><td>музика з вісімдесятих</td></tr>
<tr><td class="pl">lata dwutysięczne</td><td>двотисячні</td></tr>
</table>
<p>Письмово скорочують: <span class="pl">lata 60.</span>, <span class="pl">w latach 90.</span></p>
<h4>Ювілеї та вік</h4>
<ul>
<li><span class="pl">urodziny</span> — тільки множина, тому й порядковий у множині: <span class="pl">czterdzieste urodziny, na pięćdziesiąte urodziny</span> (укр. «сороковий день народження»).</li>
<li><span class="pl">rocznica</span> — ж. р.: <span class="pl">czterdziesta rocznica ślubu</span>.</li>
<li>Розмовні іменники: <span class="pl">po pięćdziesiątce</span> — після п’ятдесяти; <span class="pl">przed czterdziestką</span> — до сорока; <span class="pl">stuknęła mu sześćdziesiątka</span> — йому стукнуло шістдесят.</li>
<li>Люди: <span class="pl">czterdziestolatek, pięćdziesięciolatka</span> — в основі <b>pięćdziesięcio-, sześćdziesięcio-</b>.</li>
</ul>`
      },

      exercises: [
        { type: "choice", q: "Bilety kosztują od czterdziestu do ___ złotych.", options: ["pięćdziesięciu", "pięćdziesiąt", "pięćdziesiątych"], answer: 0,
          explain: "do + Р. в.: pięćdziesiąt → pięćdziesięciu (ą → ę), як укр. «до п’ятдесяти»." },
        { type: "gap", q: "Wyszłam z domu z ___ złotymi w portfelu. (50)", answers: ["pięćdziesięcioma"],
          explain: "z + О. в.: pięćdziesięcioma złotymi (укр. «з п’ятдесятьма злотими»)." },
        { type: "gap", q: "Na konferencję przyjechało ponad ___ uczestników. (40)", answers: ["czterdziestu"],
          explain: "Uczestnicy — чоловічо-особове слово: З. в. = Р. в. czterdziestu. Пор.: ponad czterdzieści osób." },
        { type: "choice", q: "Moi rodzice poznali się w latach ___.", options: ["sześćdziesiątych", "sześćdziesiąt", "sześćdziesięciu"], answer: 0,
          explain: "Десятиліття — порядковий у М. в. мн.: w latach sześćdziesiątych." },
        { type: "gap", q: "Babcia obchodzi ___ urodziny. (90, порядковий)", answers: ["dziewięćdziesiąte"],
          explain: "Urodziny — тільки множина → dziewięćdziesiąte (не «дев’яностий»)." },
        { type: "match", q: "З’єднайте порядковий числівник із перекладом",
          pairs: [["czterdziesty", "сороковий"], ["pięćdziesiąty", "п’ятдесятий"], ["sześćdziesiąty", "шістдесятий"], ["siedemdziesiąty", "сімдесятий"], ["dziewięćdziesiąty", "дев’яностий"], ["setny", "сотий"]],
          explain: "Польські порядкові десятки регулярні: czterdziesty («чотири-десятий»), dziewięćdziesiąty («дев’ять-десятий»)." },
        { type: "choice", q: "Mój tata przeszedł na emeryturę po ___.", options: ["sześćdziesiątce", "sześćdziesiątka", "sześćdziesiąt"], answer: 0,
          explain: "po + М. в. від розм. sześćdziesiątka → po sześćdziesiątce (після шістдесяти)." },
        { type: "gap", q: "Pociąg PKP Intercity jedzie z prędkością ___ kilometrów na godzinę. (160)", answers: ["stu sześćdziesięciu"],
          explain: "prędkość czego? → Р. в.: обидва слова змінюються: sto → stu, sześćdziesiąt → sześćdziesięciu." },
        { type: "order", ru: "Ми святкували сорокову річницю весілля батьків.", words: ["Świętowaliśmy", "czterdziestą", "rocznicę", "ślubu", "rodziców."], alt: [],
          explain: "rocznica — ж. р., З. в.: czterdziestą rocznicę." },
        { type: "translate", ru: "Мій брат народився у дев’яностих.", answers: ["Mój brat urodził się w latach dziewięćdziesiątych.", "Brat urodził się w latach dziewięćdziesiątych.", "Mój brat urodził się w latach 90."],
          explain: "«У дев’яностих» — w latach dziewięćdziesiątych (М. в. мн.)." }
      ],

      pronunciation: {
        focus: "Довгі форми: pięćdziesięciu, dziewięćdziesiąty, czterdziestolatek",
        tip: `<p>Коли числівник відмінюється, слово подовжується, а наголос <b>пересувається</b>, щоб залишитися на передостанньому складі:</p>
<ul>
<li>pięć-<b>DZIE</b>-siąt → pięć-dzie-<b>SIĘ</b>-ciu → pięć-dzie-się-<b>CIO</b>-ma</li>
<li>czter-<b>DZIE</b>-ści → czter-<b>DZIE</b>-stu → czter-dzie-<b>STO</b>-ma</li>
<li>dzie-więć-dzie-<b>SIĄ</b>-ty, czter-dzie-sto-<b>LA</b>-tek</li>
</ul>
<p>ę перед ć/ci звучить як [ень]: <span class="pl">pięćdziesięciu</span> ≈ [п’єнь-джє-СЬЄНЬ-чу]. Розрізняйте на слух Р. в. десятків і «-надцяти»: <span class="pl">czterdziestu</span> [чтер-ДЖЄ-сту] — <span class="pl">czternastu</span> [чтер-НА-сту].</p>`,
        items: [
          { type: "listen", text: "od czterdziestu do pięćdziesięciu", ru: "від сорока до п’ятдесяти" },
          { type: "listen", text: "w latach sześćdziesiątych", ru: "у шістдесятих роках" },
          { type: "minimal", options: ["czterdziestu", "czternastu"], ru: ["сорока (Р. в.)", "чотирнадцяти (Р. в.)"] },
          { type: "stress", word: "pięćdziesięciu", syllables: ["pięć", "dzie", "się", "ciu"], answer: 2 },
          { type: "stress", word: "dziewięćdziesiąty", syllables: ["dzie", "więć", "dzie", "sią", "ty"], answer: 3 },
          { type: "stress", word: "czterdziestolatek", syllables: ["czter", "dzie", "sto", "la", "tek"], answer: 3 },
          { type: "dictation", text: "Na pięćdziesiąte urodziny taty przyszło ponad czterdziestu gości." }
        ]
      },

      reading: {
        title: "Złote gody",
        text: "W czerwcu dwa tysiące dwudziestego szóstego roku Halina i Zbigniew Zielińscy obchodzili złote gody – pięćdziesiątą rocznicę ślubu. Na przyjęcie do restauracji w Łodzi przyszło ponad czterdziestu gości: dzieci, wnuki, sąsiedzi i przyjaciele z młodości.\n\nPoznali się w latach siedemdziesiątych na dyskotece w akademiku. Zbyszek miał wtedy dwadzieścia dwa lata, długie włosy i jedną marynarkę. Ślub wzięli w tysiąc dziewięćset siedemdziesiątym szóstym roku. W latach osiemdziesiątych godzinami stali w kolejkach po mięso i papier toaletowy, a w latach dziewięćdziesiątych otworzyli mały sklep z rowerami.\n\nPo pięćdziesiątce pan Zbigniew zaczął biegać i ukończył już ponad trzydzieści maratonów. Pani Halina przeszła na emeryturę po sześćdziesiątce, ale nadal uczy matematyki – teraz wnuki, przez internet.\n\nWnuczka Ola przygotowała prezentację: pięćdziesiąt lat w stu zdjęciach. Na ostatnim slajdzie było pytanie: „Jaki jest przepis na udane małżeństwo?”. Dziadek odpowiedział: „Przez pięćdziesiąt lat zawsze mówiłem żonie: masz rację”. Babcia dodała: „A ja przez pięćdziesiąt lat udawałam, że mu wierzę”. Wszystkie trzy pokolenia śmiały się do łez.",
        glossary: [
          { pl: "przyjęcie", ru: "прийом, урочиста вечеря" },
          { pl: "w akademiku", ru: "у студентському гуртожитку" },
          { pl: "marynarkę", ru: "піджак" },
          { pl: "w kolejkach", ru: "у чергах" },
          { pl: "ukończył", ru: "пробіг до кінця, завершив" },
          { pl: "udane małżeństwo", ru: "щасливий (вдалий) шлюб" },
          { pl: "udawałam", ru: "вдавала" },
          { pl: "do łez", ru: "до сліз" }
        ],
        questions: [
          { type: "tf", q: "Zielińscy wzięli ślub w 1976 roku.", answer: true,
            explain: "«W tysiąc dziewięćset siedemdziesiątym szóstym roku» — 1976 + 50 = 2026." },
          { type: "choice", q: "Kiedy Halina i Zbigniew się poznali?", options: ["w latach sześćdziesiątych", "w latach siedemdziesiątych", "w latach osiemdziesiątych"], answer: 1,
            explain: "«Poznali się w latach siedemdziesiątych na dyskotece»." },
          { type: "choice", q: "Co zrobili w latach dziewięćdziesiątych?", options: ["Stali w kolejkach.", "Otworzyli sklep z rowerami.", "Biegali maratony."], answer: 1,
            explain: "«W latach dziewięćdziesiątych otworzyli mały sklep z rowerami». У черги стояли у вісімдесятих." },
          { type: "tf", q: "Pan Zbigniew zaczął biegać przed czterdziestką.", answer: false,
            explain: "Він почав бігати «po pięćdziesiątce» — після п’ятдесяти." },
          { type: "choice", q: "Ile zdjęć było w prezentacji Oli?", options: ["pięćdziesiąt", "sto", "czterdzieści"], answer: 1,
            explain: "«Pięćdziesiąt lat w stu zdjęciach» — сто фото (w stu — М. в. від sto)." }
        ]
      },

      writing: {
        prompt: "Напишіть запрошення на ювілей (40-ві, 50-ті чи 60-ті уродини або річниця весілля когось із рідних). Укажіть: 1) який це ювілей (порядковим числівником); 2) коротко про молодість ювіляра — у якому десятилітті що сталося; 3) скільки гостей очікується (ponad / około + число); 4) одне прохання до гостей.",
        minWords: 40, maxWords: 90,
        useWords: ["rocznica", "młodość", "pokolenie", "ponad"],
        checklist: [
          { label: "Щонайменше 2 порядкові десятки (pięćdziesiątą, siedemdziesiątych…)", pattern: "\\b\\p{L}*(dziest|dziesiąt)(y|a|e|ą|ego|ej|ym|ych)\\b", min: 2 },
          { label: "Відмінена форма десятка (czterdziestu, pięćdziesięciu, sześćdziesięcioma…)", pattern: "\\b\\p{L}*(dziestu|dziesięciu|dziestoma|dziesięcioma)\\b", min: 1 },
          { label: "Десятиліття: w latach … / z lat …", pattern: "\\blat(ach)?\\s+\\p{L}+(ych)\\b", min: 1 }
        ],
        model: "Kochani! Zapraszamy na jubileusz – pięćdziesiątą rocznicę ślubu naszych rodziców! Mama i tata poznali się w młodości, w latach siedemdziesiątych, na koncercie w Opolu. Przyjęcie będzie w sobotę o osiemnastej w restauracji „Pod Lipami”. Spodziewamy się ponad sześćdziesięciu gości: trzy pokolenia rodziny i przyjaciele z dawnych lat. Prosimy nie kupować prezentów – rodzice mówią, że po pięćdziesięciu latach razem mają już wszystko. Zamiast kwiatów przynieście stare zdjęcia z lat osiemdziesiątych! Ania i Marek"
      }
    },

    // ───────────────────────── LEKCJA 5: POWTÓRKA ─────────────────────────
    {
      id: "m15l5",
      title: "Powtórka: liczebniki",
      titleRu: "Повторення модуля «Числівники»",
      topic: "Historia w liczbach",
      review: true,
      minutes: 30,
      goals: [
        "Повторити всю систему числівників: -naście, десятки, сотні, тисячі",
        "Упевнено узгоджувати числа з іменниками, дієсловами й відмінками",
        "Розповісти історію родини чи міста мовою чисел"
      ],

      vocab: [
        { pl: "raport", g: "m", ru: "звіт", note: "GUS (Główny Urząd Statystyczny) — Головне статистичне управління Польщі", ex: "Raport GUS pokazuje, że ceny znowu wzrosły.", exRu: "Звіт GUS показує, що ціни знову зросли." },
        { pl: "statystyka", g: "f", ru: "статистика", ex: "Lubię statystykę, bo liczby nie kłamią.", exRu: "Я люблю статистику, бо числа не брешуть." },
        { pl: "przeciętny", ru: "середній, пересічний", ex: "Przeciętna rodzina wydaje na jedzenie ponad dwa tysiące złotych miesięcznie.", exRu: "Пересічна родина витрачає на їжу понад дві тисячі злотих на місяць." },
        { pl: "wynagrodzenie", g: "n", ru: "заробітна плата (офіц.), винагорода", ex: "Wynagrodzenie wypłacamy do dziesiątego dnia miesiąca.", exRu: "Заробітну плату ми виплачуємо до десятого числа місяця." },
        { pl: "przekraczać / przekroczyć", ru: "перевищувати / перевищити", ex: "W lipcu temperatura przekroczyła trzydzieści pięć stopni.", exRu: "У липні температура перевищила тридцять п’ять градусів." },
        { pl: "inflacja", g: "f", ru: "інфляція", ex: "Inflacja spadła poniżej pięciu procent.", exRu: "Інфляція впала нижче п’яти відсотків." },
        { pl: "stopień", g: "m", ru: "градус; ступінь", note: "Р. в. мн. stopni (не «stopniów»)", ex: "W styczniu było minus dwadzieścia stopni.", exRu: "У січні було мінус двадцять градусів." },
        { pl: "podwajać / podwoić się", ru: "подвоюватися / подвоїтися", ex: "W ciągu dekady ceny mieszkań się podwoiły.", exRu: "За десятиліття ціни на квартири подвоїлися." },
        { pl: "liczny", ru: "численний", ex: "Na koncercie byli liczni goście z zagranicy.", exRu: "На концерті були численні гості з-за кордону." }
      ],

      grammar: {
        title: "Підсумок модуля: уся система числівників",
        html: `<h4>1. Будова: одиниця + -naście / -dzieści / -dziesiąt / -sta / -set</h4>
<table class="g">
<tr><th></th><th>11–19</th><th>десятки</th><th>сотні</th></tr>
<tr><td>2</td><td class="pl">dwanaście</td><td class="pl">dwadzieścia</td><td class="pl">dwieście</td></tr>
<tr><td>3</td><td class="pl">trzynaście</td><td class="pl">trzydzieści</td><td class="pl">trzysta</td></tr>
<tr><td>4</td><td class="pl">czternaście</td><td class="pl">czterdzieści</td><td class="pl">czterysta</td></tr>
<tr><td>5</td><td class="pl">piętnaście</td><td class="pl">pięćdziesiąt</td><td class="pl">pięćset</td></tr>
<tr><td>6</td><td class="pl">szesnaście</td><td class="pl">sześćdziesiąt</td><td class="pl">sześćset</td></tr>
<tr><td>7</td><td class="pl">siedemnaście</td><td class="pl">siedemdziesiąt</td><td class="pl">siedemset</td></tr>
<tr><td>8</td><td class="pl">osiemnaście</td><td class="pl">osiemdziesiąt</td><td class="pl">osiemset</td></tr>
<tr><td>9</td><td class="pl">dziewiętnaście</td><td class="pl">dziewięćdziesiąt</td><td class="pl">dziewięćset</td></tr>
</table>
<p>Межа «2–4 / 5+» проходить через усю систему: <span class="pl">czterdzieści / pięćdziesiąt</span>, <span class="pl">czterysta / pięćset</span>, <span class="pl">cztery tysiące / pięć tysięcy</span>.</p>
<h4>2. Число + іменник + дієслово</h4>
<table class="g">
<tr><th>1</th><th>2–4, 22–24, 42–44…</th><th>5–21, 25–31, 41, круглі числа</th></tr>
<tr><td class="pl">jedna osoba przyszła</td><td class="pl">czterdzieści dwie osoby przyszły</td><td class="pl">czterdzieści jeden osób przyszło</td></tr>
<tr><td class="pl">rok</td><td class="pl">pięćdziesiąt trzy lata</td><td class="pl">pięćdziesiąt lat</td></tr>
<tr><td class="pl">tysiąc złotych</td><td class="pl">dwa tysiące złotych</td><td class="pl">pięć tysięcy złotych</td></tr>
</table>
<p>Неточна кількість: <span class="pl">kilka, kilkanaście, kilkadziesiąt, kilkaset</span> + род. мн. «Півтора»: <span class="pl">półtora roku</span>, <span class="pl">półtorej godziny</span>.</p>
<h4>3. Відмінки десятків</h4>
<table class="g">
<tr><th>Н.</th><th>Р. / Д. / М.</th><th>О.</th></tr>
<tr><td class="pl">czterdzieści</td><td class="pl">czterdziestu</td><td class="pl">czterdziestoma</td></tr>
<tr><td class="pl">sześćdziesiąt</td><td class="pl">sześćdziesięciu</td><td class="pl">sześćdziesięcioma</td></tr>
<tr><td class="pl">sto</td><td class="pl">stu</td><td class="pl">stoma</td></tr>
</table>
<h4>4. Порядкові, роки, десятиліття</h4>
<table class="g">
<tr><td class="pl">czterdzieste urodziny, pięćdziesiąta rocznica</td><td>ювілеї</td></tr>
<tr><td class="pl">w tysiąc dziewięćset osiemdziesiątym dziewiątym roku</td><td>у 1989 році</td></tr>
<tr><td class="pl">w dwa tysiące dwudziestym szóstym roku</td><td>у 2026 році</td></tr>
<tr><td class="pl">w latach sześćdziesiątych, z lat osiemdziesiątych</td><td>у 60-х, з 80-х</td></tr>
<tr><td class="pl">po pięćdziesiątce, przed czterdziestką</td><td>після 50, до 40 (розм.)</td></tr>
</table>
<div class="tip"><b>Сім пасток модуля.</b> 1) 40 — <span class="pl">czterdzieści</span>, 90 — <span class="pl">dziewięćdziesiąt</span> (жодних «сорок» і «дев’яносто»). 2) Пишемо <span class="pl">pięćdziesiąt, sześćdziesiąt</span>, хоч чуємо [п’єнь-], [шезь-]. 3) Наголос на передостанньому: czter-<b>DZIE</b>-ści. 4) 41 — <span class="pl">czterdzieści jeden lat / osób</span>. 5) <span class="pl">dwa tysiące złotych</span>, не «złote». 6) 5+ → <span class="pl">przyszło, odpowiedziało</span>. 7) У роках порядкові два слова: <span class="pl">dwudziestym szóstym</span>.</div>
<div class="ex"><span class="pl">W połowie lat dziewięćdziesiątych bochenek chleba kosztował około złotówki.</span> — У середині дев’яностих буханець хліба коштував близько злотого.</div>`
      },

      exercises: [
        { type: "choice", q: "Liczba 70 to ___.", options: ["siedemdziesiąt", "siedemnaście", "siedemset"], answer: 0,
          explain: "-dziesiąt — десятки: siedemdziesiąt. siedemnaście — 17, siedemset — 700." },
        { type: "gap", q: "Zapisz słowami: 90 = ___", answers: ["dziewięćdziesiąt"],
          explain: "dziewięć + dziesiąt — не «дев’яносто»." },
        { type: "gap", q: "Zapisz cyframi: czterdzieści cztery = ___", answers: ["44"],
          explain: "czterdzieści (40) + cztery (4) = 44. Не плутайте з czternaście (14)." },
        { type: "match", q: "З’єднайте числа одного кореня з цифрами",
          pairs: [["osiemnaście", "18"], ["osiemdziesiąt", "80"], ["osiemset", "800"], ["trzynaście", "13"], ["trzydzieści", "30"], ["trzysta", "300"]],
          explain: "-naście — 11–19, -dzieści / -dziesiąt — десятки, -sta / -set — сотні." },
        { type: "choice", q: "Bilet do Krakowa kosztuje sto czterdzieści dwa ___.", options: ["złote", "złotych", "złoty"], answer: 0,
          explain: "Вирішує останнє слово: dwa (2–4) → złote." },
        { type: "gap", q: "W badaniu wzięło udział tysiąc dwieście ___ (osoba).", answers: ["osób"],
          explain: "Останнє слово dwieście (кругле число) → род. мн. osób; дієслово — wzięło." },
        { type: "choice", q: "Pięćdziesiąt dwie osoby ___ na pociąg.", options: ["czekały", "czekało", "czekał"], answer: 0,
          explain: "dwie (2–4) → дієслово в множині, ж. р.: czekały." },
        { type: "gap", q: "Pracuję od dwudziestu do ___ godzin tygodniowo. (30)", answers: ["trzydziestu"],
          explain: "do + Р. в.: trzydzieści → trzydziestu." },
        { type: "gap", q: "Przyjechał do Polski z ___ złotymi w kieszeni. (60)", answers: ["sześćdziesięcioma"],
          explain: "z + О. в.: sześćdziesiąt → sześćdziesięcioma." },
        { type: "choice", q: "Ta piosenka jest z lat ___.", options: ["osiemdziesiątych", "osiemdziesiąt", "osiemdziesiątymi"], answer: 0,
          explain: "z + Р. в. мн.: z lat osiemdziesiątych." },
        { type: "choice", q: "Rok 2025 to rok dwa tysiące ___.", options: ["dwudziesty piąty", "dwadzieścia piąty", "dwudziesty pięć"], answer: 0,
          explain: "У роках порядкові обидва останні слова: dwudziesty piąty." },
        { type: "gap", q: "W sierpniu temperatura przekroczyła ___ stopni. (40)", answers: ["czterdzieści", "40"],
          explain: "przekroczyć + З. в.: czterdzieści stopni (кругле число → род. мн. stopni)." },
        { type: "order", ru: "На концерт прийшло понад п’ятдесят тисяч людей.", words: ["Na", "koncert", "przyszło", "ponad", "pięćdziesiąt", "tysięcy", "osób."], alt: ["Ponad pięćdziesiąt tysięcy osób przyszło na koncert."],
          explain: "ponad + З. в. (форма не змінюється); 50 → tysięcy, після тисяч — osób; дієслово — przyszło." },
        { type: "translate", ru: "Мамі п’ятдесят чотири роки.", answers: ["Mama ma pięćdziesiąt cztery lata.", "Moja mama ma pięćdziesiąt cztery lata."],
          explain: "Вік — через mieć; 54 закінчується на 4 → lata." },
        { type: "translate", ru: "Квиток коштує дев’яносто дев’ять злотих.", answers: ["Bilet kosztuje dziewięćdziesiąt dziewięć złotych."],
          explain: "dziewięćdziesiąt dziewięć (99) → род. мн. złotych." }
      ],

      pronunciation: {
        focus: "Повторення: -naście / десятки / сотні, наголос",
        tip: `<p>Зберімо все, що тренували в модулі:</p>
<ul>
<li><b>-NA-</b> [на] → 11–19, <b>-DZIE-</b> [джє] → десятки, <b>-sta / -set</b> → сотні: <span class="pl">trzynaście — trzydzieści — trzysta</span>.</li>
<li>Спрощення на стику: <span class="pl">pięćdziesiąt</span> ≈ [п’єнь-джє-сьонт], <span class="pl">sześćdziesiąt</span> ≈ [шезь-джє-сьонт], <span class="pl">pięćset</span> ≈ [п’єньсет], <span class="pl">sześćset</span> ≈ [шесьсет].</li>
<li>Наголос — завжди передостанній склад, навіть коли слово подовжується: o-siem-<b>DZIE</b>-siąt, pięć-dzie-<b>SIĘ</b>-ciu, dwu-<b>DZIE</b>-stym.</li>
<li>ą/ę перед t, c, ć звучать як [он]/[ен]: <span class="pl">tysiąc</span> [ти-сьонц], <span class="pl">tysięcy</span> [ти-сьєн-ци].</li>
</ul>`,
        items: [
          { type: "minimal", options: ["dziewiętnaście", "dziewięćdziesiąt", "dziewięćset"], ru: ["19", "90", "900"] },
          { type: "minimal", options: ["trzynaście", "trzydzieści", "trzysta"], ru: ["13", "30", "300"] },
          { type: "stress", word: "osiemdziesiąt", syllables: ["o", "siem", "dzie", "siąt"], answer: 2 },
          { type: "stress", word: "pięćdziesiąt", syllables: ["pięć", "dzie", "siąt"], answer: 1 },
          { type: "listen", text: "tysiąc dziewięćset dziewięćdziesiąt dziewięć", ru: "1999" },
          { type: "listen", text: "czterdzieści cztery", ru: "44" },
          { type: "dictation", text: "Bilet kosztował sto czterdzieści dziewięć złotych i dziewięćdziesiąt groszy." }
        ]
      },

      reading: {
        title: "Historia w liczbach",
        text: "Kuba studiuje ekonomię w Lublinie. Na zajęcia ze statystyki musiał przygotować raport o swojej rodzinie: jak przez pięćdziesiąt lat zmieniały się ceny i pensje.\n\nNajpierw zadzwonił do dziadka. Dziadek Henryk urodził się w tysiąc dziewięćset czterdziestym ósmym roku. W latach siedemdziesiątych pracował w fabryce i zarabiał około czterech tysięcy złotych. „Pieniądze to nie był problem – mówi dziadek. – Problemem były puste półki. Na pierwszego malucha czekałem prawie dziesięć lat!”\n\nPotem porozmawiał z mamą. W latach dziewięćdziesiątych, kiedy była studentką, ceny zmieniały się co miesiąc. Jej pierwsza pensja w tysiąc dziewięćset dziewięćdziesiątym czwartym roku wynosiła cztery miliony złotych. Kuba się zdziwił, ale mama wyjaśniła: w tysiąc dziewięćset dziewięćdziesiątym piątym roku była denominacja i dziesięć tysięcy starych złotych zamieniło się w jeden nowy złoty. Czyli cztery miliony to czterysta nowych złotych.\n\nNa koniec Kuba sprawdził własne wydatki. Za pokój w akademiku płaci osiemset czterdzieści złotych, bilet miesięczny ze zniżką studencką kosztuje pięćdziesiąt pięć złotych, a kawa na uczelni – czternaście. Przeciętne wynagrodzenie w Polsce przekroczyło już osiem tysięcy złotych brutto, ale Kuba na razie zarabia w kawiarni trzydzieści dwa złote na godzinę.\n\nWniosek z raportu? Dziadek miał pieniądze, ale nie było czego kupić. Kuba ma wszystko w sklepach, ale… nie ma pieniędzy. Profesor dał mu piątkę.",
        glossary: [
          { pl: "zajęcia", ru: "заняття, пари" },
          { pl: "puste półki", ru: "порожні полиці" },
          { pl: "malucha", ru: "«малюка» — автомобіль Fiat 126p" },
          { pl: "denominacja", ru: "деномінація" },
          { pl: "zamieniło się", ru: "перетворилося, обміняли на" },
          { pl: "akademiku", ru: "студентському гуртожитку" },
          { pl: "uczelni", ru: "у виші, університеті" },
          { pl: "Wniosek", ru: "висновок" },
          { pl: "piątkę", ru: "п’ятірку (найвищу оцінку в університеті)" }
        ],
        questions: [
          { type: "tf", q: "Dziadek Henryk urodził się w 1948 roku.", answer: true,
            explain: "«W tysiąc dziewięćset czterdziestym ósmym roku» — 1948." },
          { type: "choice", q: "Na co dziadek czekał prawie dziesięć lat?", options: ["na mieszkanie", "na samochód", "na telefon"], answer: 1,
            explain: "«Maluch» — це автомобіль Fiat 126p." },
          { type: "choice", q: "Ile nowych złotych to cztery miliony starych złotych?", options: ["czterdzieści", "czterysta", "cztery tysiące"], answer: 1,
            explain: "10 000 старих = 1 новий злотий, отже 4 000 000 : 10 000 = 400 — czterysta." },
          { type: "tf", q: "Kuba płaci za akademik osiemset czterdzieści złotych.", answer: true,
            explain: "«Za pokój w akademiku płaci osiemset czterdzieści złotych»." },
          { type: "choice", q: "Ile Kuba zarabia na godzinę?", options: ["czternaście złotych", "trzydzieści dwa złote", "pięćdziesiąt pięć złotych"], answer: 1,
            explain: "«Zarabia w kawiarni trzydzieści dwa złote na godzinę» — 32 → złote." }
        ]
      },

      writing: {
        prompt: "Підсумковий твір модуля: «Моя родина (або моє місто) в числах». Розкажіть: 1) коли народилися старші родичі й що відбувалося в їхній молодості (рік, десятиліття); 2) скільки років членам родини зараз; 3) ваші доходи й витрати або ціни у вашому місті; 4) одну цікаву статистику (відсотки, «понад», «близько»). Усі числа пишіть словами.",
        minWords: 60, maxWords: 90,
        useWords: ["przeciętny", "wynagrodzenie", "przekroczyć", "statystyka"],
        checklist: [
          { label: "Щонайменше 4 десятки в будь-якій формі (czterdzieści, pięćdziesiątym, sześćdziesięciu…)", pattern: "\\b\\p{L}+(dzieśc|dziest|dziesiąt|dziesięc)\\p{L}*", min: 4 },
          { label: "Рік або десятиліття (… roku / w latach …)", pattern: "\\b(roku|latach)\\b", min: 1 },
          { label: "Тисячі: tysiąc / tysiące / tysięcy", pattern: "\\btysi(ąc|ące|ęcy)\\b", min: 1 }
        ],
        model: "Moja rodzina w liczbach. Dziadek urodził się w tysiąc dziewięćset pięćdziesiątym drugim roku w małej wsi pod Lwowem. W latach osiemdziesiątych był nauczycielem i zarabiał mniej niż przeciętny inżynier. Mama ma pięćdziesiąt cztery lata, a tata – pięćdziesiąt siedem. Ja mam trzydzieści jeden lat i od trzech lat mieszkam w Warszawie. Moje wynagrodzenie przekroczyło już siedem tysięcy złotych, ale czynsz wynosi dwa tysiące trzysta złotych. Według statystyki ceny mieszkań w Warszawie wzrosły w ciągu dekady o ponad sześćdziesiąt procent."
      }
    }

  ]
});
