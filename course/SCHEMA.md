# Курс польского A2 → B1: формат контента

Курс рассчитан на 12 недель (12 модулей × 5 уроков = 60 уроков) + итоговый экзамен.
Каждый урок ≤ 30 минут. Учащийся — украиноязычный, уровень A1 уже есть (алфавит, чтение,
базовые фразы, настоящее время самых частых глаголов, именительный падеж).
**Все объяснения, переводы и инструкции — на украинском (сучасна літературна мова, апостроф ’). Весь учебный материал — на польском. Русского языка в контенте быть не должно.** Поля называются `ru`/`titleRu` по историческим причинам — в них украинский текст.
Польский должен быть безупречным: правильные окончания, диакритика (ą ę ó ł ś ć ż ź ń),
естественные фразы, актуальная лексика (Польша 2020-х: BLIK, Żabka, PKP Intercity, NFZ и т.п.).

## Файл модуля

Каждый модуль — отдельный файл `course/mNN.js` (NN = 01..12), чистый JavaScript:

```js
COURSE.module({
  id: "m01",
  n: 1,
  level: "A2",                 // "A2" для модулей 1–6, "B1" для 7–12
  title: "Codzienność",        // польское название
  titleRu: "Повседневность",
  summary: "1–2 предложения по-русски: что умеешь после модуля.",
  lessons: [ /* ровно 5 уроков, последний — повторение */ ]
});
```

Дополнительные модули (`m13`…`m15`) имеют `extra: true`: показываются отдельной группой «Додаткові модулі»
с подписью «Dodatek N», не участвуют в «следующем уроке», прогрессе курса и объёме экзаменов.

Строки: используйте двойные кавычки `"..."` или обратные кавычки для длинного HTML.
Внутри обратных кавычек нельзя писать `${` и неэкранированный `` ` ``.
Файл должен проходить `node --check`.

## Урок

```js
{
  id: "m01l1",                 // mNNlK
  title: "Mam, jem, wiem",     // польский заголовок
  titleRu: "Спряжение -am/-em",
  topic: "Mój dzień",          // лексическая тема по-польски
  review: false,               // true только у 5-го урока модуля
  minutes: 25,                 // 20–30
  goals: ["…", "…", "…"],      // 2–4 цели по-русски

  vocab: [ ... ],              // 10–14 слов
  grammar: { ... },
  exercises: [ ... ],          // 8–10 заданий (в уроке-повторении 12–15)
  pronunciation: { ... },
  reading: { ... },
  writing: { ... }
}
```

### vocab
```js
{ pl: "codziennie", ru: "ежедневно", ex: "Codziennie piję kawę.", exRu: "Я каждый день пью кофе." }
```
- `pl` — чистая словарная форма (для озвучки), без пометок. Для существительных можно
  добавить `g: "m" | "f" | "n" | "pl"`. Для глаголов можно дать пару видов: `pl: "robić / zrobić"`.
- `note` (необязательно) — короткая пометка по-русски (управление, нерегулярность).
- Слова должны быть НОВЫМИ для A1-уровня и полезными, по теме урока. Не повторять слова между уроками модуля.

### grammar
```js
{
  title: "Спряжение глаголов на -am / -em",
  html: `<p>…объяснение по-русски…</p>
<table class="g"><tr><th></th><th>mieć</th></tr><tr><td>ja</td><td class="pl">mam</td></tr></table>
<div class="ex"><span class="pl">Mam dużo pracy.</span> — У меня много работы.</div>
<div class="tip">Подсказка / типичная ошибка русскоязычных.</div>`
}
```
- Разрешённые элементы: `p, ul, ol, li, b, i, table(class="g"), tr, th, td, div.ex, div.tip, span.pl, h4`.
- **Каждый польский пример оборачивайте в `class="pl"`** (span или td) — движок делает его кликабельным для озвучки.
- Объём: 250–600 слов. Ясно, структурно, с таблицами окончаний. Обязательно отмечайте
  ловушки для русскоговорящих (ложные друзья, отличия в управлении, ударение).

### exercises
Типы (поле `explain` — короткое объяснение по-русски, показывается после ответа; обязательно):

```js
// выбор варианта; answer — индекс правильного варианта (0-based)
{ type: "choice", q: "Wczoraj ___ do kina. (ja, kobieta)", options: ["poszłam", "poszedłem", "szłam"], answer: 0, explain: "…" }

// вписать слово; ровно один пропуск ___; answers — все допустимые ответы
{ type: "gap", q: "Nie mam ___ (czas).", answers: ["czasu"], explain: "…" }

// собрать предложение из слов; words — в ПРАВИЛЬНОМ порядке (движок перемешает)
{ type: "order", ru: "Завтра я пойду в кино.", words: ["Jutro", "pójdę", "do", "kina."], alt: [], explain: "…" }
// alt — список других допустимых порядков (строки целиком), если есть

// сопоставление (4–6 пар); левая часть — польская
{ type: "match", q: "Соедините глагол с его совершенным видом", pairs: [["robić", "zrobić"], ["pisać", "napisać"]], explain: "…" }

// перевод короткой фразы с русского; answers — 1–4 эталонных варианта
{ type: "translate", ru: "У меня нет времени.", answers: ["Nie mam czasu."], explain: "…" }
```
- Проверка gap/translate: без учёта регистра, пунктуации и лишних пробелов. Если ответ совпадает
  только без диакритики — движок засчитает «почти» и укажет на диакритику.
- В `q` для gap в скобках давайте подсказку (исходную форму, лицо, род).
- Микс типов: в каждом уроке минимум 3 разных типа; `translate` — не более 2 на урок и только
  короткие однозначные фразы.

### pronunciation
```js
{
  focus: "sz / ś / s",
  tip: `<p>HTML по-русски: как артикулировать, сравнение с русскими звуками.</p>`,
  items: [
    { type: "listen", text: "szczęście", ru: "счастье", note: "необязательная подсказка" },   // послушать и повторить (движок умеет запись речи)
    { type: "minimal", options: ["kasza", "kasa"], ru: ["каша", "касса"] },                  // движок произносит случайный вариант, ученик угадывает (2–3 варианта)
    { type: "stress", word: "uniwersytet", syllables: ["u","ni","wer","sy","tet"], answer: 3 }, // кликнуть ударный слог; answer — индекс
    { type: "dictation", text: "Szczebrzeszyn słynie z chrząszcza." }                           // диктант: услышать и написать
  ]
}
```
- 5–8 элементов, минимум 3 разных типа, обязательно хотя бы один `minimal` или `stress` и один `dictation`.
- Слоги в `stress` должны склеиваться ровно в `word`.
- Если норма допускает два ударения (uniwersytet, matematyka), правильный по норме слог — `answer`, разговорный — `accept: [индекс]`.
- Темы произношения строго по плану ниже.

### reading
```js
{
  title: "Poranek Kasi",
  text: "Абзац 1.\n\nАбзац 2.",       // A2: 120–200 слов; B1: 180–280 слов. Абзацы разделять \n\n
  glossary: [ { pl: "budzik", ru: "будильник" } ],   // 5–10 трудных слов, pl — ровно как в тексте
  questions: [
    { type: "tf", q: "Kasia wstaje o szóstej.", answer: true, explain: "…" },
    { type: "choice", q: "Dlaczego…?", options: ["…","…","…"], answer: 2, explain: "…" }
  ]                                   // 4–5 вопросов, вопросы по-польски
}
```
- Текст обязательно использует грамматику урока и слова из `vocab`. Живой, с сюжетом/юмором,
  реалии Польши (города, еда, транспорт, обычаи).

### writing
```js
{
  prompt: "По-русски: ситуация и что нужно написать (адресат, цель, 3–4 пункта содержания).",
  minWords: 40, maxWords: 80,          // A2: 40–90; B1: 80–150
  useWords: ["codziennie", "zwykle", "potem"],   // 3–5 слов из vocab, которые надо употребить
  checklist: [
    { label: "Минимум 3 глагола в 1-м лице (-am/-em)", pattern: "\\b\\w+(am|em)\\b", min: 3 }
  ],                                   // 1–3 пункта; pattern — строка RegExp (флаги "giu"), min — сколько совпадений нужно (по умолч. 1)
  model: "Образец ответа на польском, соответствующий заданию и объёму."
}
```

### Урок-повторение (5-й урок модуля)
`review: true`. Тот же формат, но: vocab 8–10 слов (новые, на расширение темы), grammar — сжатая
сводка всего модуля (таблицы), 12–15 упражнений на всю грамматику модуля, чтение подлиннее
(A2 ~220 слов, B1 ~300), письмо — итоговое сочинение модуля.

## План курса

Произношение в каждом уроке — по указанной теме. Темы лексики могут уточняться автором.

### A2
**M1 Codzienność — Повседневность** (настоящее время, винительный падеж)
1. Спряжение -am/-asz, -em/-esz (mieć, jeść, wiedzieć, umieć, rozumieć) · Mój dzień · Произн.: sz / ś / s
2. Спряжение -ę/-esz, -ę/-isz/-ysz, чередования (pisać→piszę, móc→mogę, chcieć, mówić) · Praca i obowiązki · Произн.: cz / ć / c
3. Biernik ед.ч. (лицо/неодуш. м.р., ж.р., ср.р.; прилагательные) · Czas wolny · Произн.: ż=rz / ź / z
4. Возвратные глаголы (się), частотность (zawsze, często, rzadko, nigdy + двойное отрицание) · Weekend · Произн.: dż / dź / dz
5. Powtórka 1

**M2 Przeszłość — Прошлое** (прошедшее время, творительный)
1. Czas przeszły ед.ч. (-łem/-łam/-ł/-ła/-ło), позиция окончаний · Wczoraj · Произн.: ł = [w], l мягкое
2. Прошедшее нерегулярное (iść→szedł/szła, jeść→jadł, móc→mógł, mieć→miał), мн.ч. intro (byli/były) · Wspomnienia · Произн.: ą / ę
3. Narzędnik ед.ч.: być + профессия, z + kim, транспорт (autobusem) · Zawody · Произн.: ę в конце слова, ą перед b/p
4. Narzędnik прилагательных, interesować się czym, zajmować się, przed/za/nad/pod + narz. · Zainteresowania · Произн.: ó = u, h = ch
5. Powtórka 2

**M3 Zakupy i jedzenie — Покупки и еда** (родительный)
1. Dopełniacz ед.ч.: отрицание (nie mam czasu), окончания -a/-u/-y/-i · W sklepie · Произн.: группы согласных szcz, chrz, ść
2. Dopełniacz: количество (kilo, butelka, dużo, mało, trochę), род.мн. intro · Na targu · Произн.: оглушение на конце (chleb, sad)
3. Dopełniacz с предлогами (do, od, z, bez, u, dla, obok, koło, naprzeciwko) · W restauracji · Произн.: ассимиляция w/rz после глухих (w kuchni, przy, krzesło)
4. Числительные + существительные (2–4 + им.мн., 5+ род.мн.), цены, złoty/złote/złotych · Ceny i rachunki · Произн.: числительные (pięćset, sześćdziesiąt)
5. Powtórka 3

**M4 Plany — Планы** (вид глагола, будущее время)
1. Вид: несовершенный / совершенный — идея, пары с приставками (robić/zrobić) · Obowiązki domowe · Произн.: ударение на предпоследний слог
2. Видовые пары -ać/-ić, -ywać/-iwać, супплетивные (brać/wziąć, mówić/powiedzieć, oglądać/obejrzeć) · Media i rozrywka · Произн.: исключения ударения (uniwersytet, matematyka, rzeczpospolita)
3. Czas przyszły złożony (będę robić / będę robił) · Wakacje · Произн.: интонация повествования vs вопроса (czy…?)
4. Будущее простое (zrobię), вид в прошедшем (czytałem vs przeczytałem) · Plany na przyszłość · Произн.: ударение в -liśmy/-łyście (robiliśmy)
5. Powtórka 4

**M5 Miasto i podróże — Город и поездки** (предложный, глаголы движения)
1. Miejscownik ед.ч.: w/na + msc., чередования (Kraków→w Krakowie, Polska→w Polsce, rzeka→na rzece) · Moje miasto · Произн.: смягчения k→c, g→dz, r→rz, t→ci
2. Miejscownik: o, po, przy; прилагательные в msc.; na vs w (na poczcie, w banku) · Załatwianie spraw · Произн.: i vs y
3. iść/chodzić, jechać/jeździć, lecieć/latać (однонаправленные и разнонаправленные) · Transport · Произн.: ź / dź / ż в jeździć, jeżdżę
4. Gdzie? vs Dokąd? (w/na + msc. vs do/na + bier.), как пройти (prosto, skręcić w lewo) · Pytanie o drogę · Произн.: вопросительная интонация, вежливые формы (przepraszam, czy mógłby pan)
5. Powtórka 5

**M6 Zdrowie — Здоровье** (дательный, повелительное)
1. Celownik местоимений (mi/mnie, ci, mu, jej, nam, wam, im); podobać się, smakować, pomagać, dziękować · Samopoczucie · Произн.: мягкие ni, si, ci, zi vs ń, ś, ć, ź
2. Celownik существительных (dawać komu, pomagać mamie), безличные (zimno mi, jest mi przykro) · Prezenty i pomoc · Произн.: rz после глухих = [sz] (przy, trzy, krzyczeć)
3. Tryb rozkazujący: образование (zrób, idź, weź, czytaj, mówcie, chodźmy) · U lekarza · Произн.: скороговорки 1 (Stół z powyłamywanymi nogami)
4. Отрицательный императив (nie rób! — несов.вид), proszę + inf., niech · W aptece · Произн.: скороговорки 2 (W Szczebrzeszynie chrząszcz…)
5. Powtórka 6 + контрольная A2

### B1
**M7 Ludzie — Люди** (мн.ч., мужско-личный род)
1. Им.мн. мужско-личный vs не-мужско-личный (studenci / studentki, ci / te), чередования (student→studenci, Polak→Polacy, profesor→profesorowie) · Rodzina i znajomi · Произн.: чередования t→c, d→dz, k→c, r→rz на слух
2. Прилагательные мн.ч. (dobrzy, mili, wysocy vs dobre) и прошедшее мн.ч. (byli/były, zrobili/zrobiły) · Wygląd i charakter · Произн.: -li/-ły на слух (byli/były)
3. Biernik и dopełniacz мн.ч. (widzę studentów / studentki; nie ma ludzi), ludzie/ludzi/ludźmi · Relacje · Произн.: ludzie, ludźmi, dzieci — ź/dź/ci
4. Числительные с мужско-личными (dwaj studenci / dwóch studentów, pięciu panów), собирательные (dwoje dzieci) · Spotkania · Произн.: эмоциональная интонация (wykrzyknienia: No coś ty! Serio?)
5. Powtórka 7

**M8 Gdyby… — Если бы…** (условное наклонение)
1. Tryb przypuszczający: формы (zrobiłbym, zrobiłabyś, zrobilibyśmy), вежливые просьбы (chciałbym, mógłbyś) · Uprzejme prośby · Произн.: ударение в формах -łbym (ZRObiłbym — 3-й слог с конца)
2. Gdyby + условное (Gdybym miał czas, pojechałbym…) · Marzenia · Произн.: ударение в -libyśmy (zroBIlibyśmy — 4-й с конца)
3. Żeby / aby: цель и желание (chcę, żebyś…; poszedłem, żeby…) · Cele i prośby · Произн.: ż / rz / ź в связной речи
4. Советы: powinien/powinna, trzeba, warto, należy, musieć; na twoim miejscu + условное · Porady · Произн.: связная речь, слияние предлогов (w domu, z nim, bez niego)
5. Powtórka 8

**M9 Porównania — Сравнения** (степени сравнения, неопределённые местоимения)
1. Сравнительная степень прилагательных (-szy, -ejszy, lepszy, gorszy, większy, mniejszy), niż / od + dop. · Zakupy porównawcze · Произн.: -ejszy (ładniejszy, łatwiejszy)
2. Превосходная (naj-), bardziej/najbardziej, z + dop. (najlepszy z…) · Rekordy i rankingi · Произн.: группы согласных в naj- (najszczęśliwszy, najzdrowszy)
3. Наречия и их степени (szybko→szybciej, dobrze→lepiej, źle→gorzej, dużo→więcej) · Styl życia · Произн.: длинные слова, ритм (najprawdopodobniej)
4. Неопределённые/отрицательные местоимения (ktoś, coś, nikt, nic, gdzieś, nigdzie, kiedyś, ktokolwiek), склонение kto/co · Tajemnice · Произн.: -kolwiek, ударение
5. Powtórka 9

**M10 W drodze — В пути** (приставочные глаголы движения, время)
1. Приставки с iść: przyjść, wyjść, wejść, dojść, odejść, przejść, zejść, obejść (+ przychodzić…) · W budynku i na ulicy · Произн.: wejść, przyjść, wyjść — группы согласных
2. Приставки с jechać: przyjechać, wyjechać, wjechać, dojechać, przejechać, odjechać, zjechać + предлоги z/do/od/przez/za · Podróż pociągiem · Произн.: przyjeżdżać, wyjeżdżać — ż/dż
3. Время и даты: o której?, wpół do, za kwadrans, kwadrans po; daty (piątego maja 2025 r.); przed, po, za, temu, od…do · Kalendarz · Произн.: порядковые числительные (dwudziestego trzeciego)
4. Временные союзы: kiedy, gdy, zanim, dopóki (nie), jak tylko, odkąd, podczas gdy · Opowiadanie historii · Произн.: интонация в сложных предложениях (пауза перед союзом)
5. Powtórka 10

**M11 Media i praca — СМИ и работа** (придаточные, косвенная речь, официальный стиль)
1. Który/która/które во всех падежах (człowiek, którego znam; firma, w której pracuję) · Praca i firma · Произн.: темп и ритм длинных предложений
2. Косвенная речь: że, czy, вопросительные слова; смена лица (powiedział, że…; zapytała, czy…) · Wiadomości · Произн.: интонация цитаты vs пересказа
3. Żeby в косвенных просьбах (poprosił, żebym…), formalny e-mail (Szanowni Państwo, Z poważaniem) · Korespondencja · Произн.: Pan/Pani/Państwo — вежливая интонация
4. Официальный регистр: pan/pani + 3 л., proszę pana/pani, rozmowa kwalifikacyjna, CV · Rozmowa o pracę · Произн.: аббревиатуры (PKP, CV, NFZ, ZUS)
5. Powtórka 11

**M12 Kultura i społeczeństwo — Культура и общество** (отглагольные существительные, причастия, пассив, безличные формы)
1. Rzeczowniki odczasownikowe (czytanie, palenie, zwiedzanie) и imiesłów czynny (czytający, pracujący) · Kultura i zwyczaje · Произн.: -anie/-enie, -ący
2. Imiesłów bierny (przeczytany, zrobiony, zbudowany) и страдательный залог (został zbudowany / jest sprzedawany) · Historia i zabytki · Произн.: -ony/-ona/-eni (zrobieni)
3. Безличные формы: -no/-to (zbudowano, otwarto), się (mówi się, nie pali się), można/trzeba/wolno/nie wolno · Społeczeństwo i prawo · Произн.: ударение в формах -no/-to
4. Imiesłów przysłówkowy (czytając, przeczytawszy — узнавание) + связки для эссе (po pierwsze, jednak, natomiast, mimo że, dlatego, ponieważ, podsumowując) · Opinie i dyskusja · Произн.: чтение вслух аргументативного текста
5. Powtórka 12 + подготовка к экзамену

## Итоговый экзамен — `course/exam.js`

```js
COURSE.exam({
  title: "Egzamin końcowy B1",
  intro: "HTML по-русски: структура, время, порог 60%.",
  passScore: 60,
  sections: [
    { id: "grammar",   title: "Gramatyka",   titleRu: "Грамматика", items: [ /* 25 заданий choice|gap */ ] },
    { id: "vocab",     title: "Słownictwo",  titleRu: "Лексика",    items: [ /* 15 заданий choice|gap|match */ ] },
    { id: "reading",   title: "Czytanie",    titleRu: "Чтение",     texts: [ /* 2 текста по ~300 слов, по 5 вопросов: {title, text, questions} */ ] },
    { id: "listening", title: "Słuchanie",   titleRu: "Аудирование", texts: [ /* 2 текста ~120 слов (озвучиваются, не показываются), по 4 вопроса */ ] },
    { id: "writing",   title: "Pisanie",     titleRu: "Письмо",     task: { prompt, minWords: 120, maxWords: 180, useWords: [], checklist: [], model } }
  ]
});
```
Задания экзамена покрывают грамматику ВСЕГО курса (M1–M12) и проверяют именно уровень B1.
