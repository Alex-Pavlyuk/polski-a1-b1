// Polski A1–B1 · © 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// Licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
// Zadania z życia — по одному справжньому документу на модуль (M1–M6: A2, M7–M12: B1)

// ───────────────────────── M1 ─────────────────────────
COURSE.life({
  module: "m01",
  title: "Ogłoszenie na klatce schodowej",
  titleRu: "Оголошення в під’їзді",
  intro: "Ви винаймаєте квартиру у варшавському будинку, і на дверях під’їзду з’явилося оголошення від житлового кооперативу. З’ясуйте, коли не буде води, як сортувати сміття і куди телефонувати в разі аварії.",
  doc: {
    kind: "notice",
    html: `<div class="doc-head">Spółdzielnia Mieszkaniowa „Zacisze” · ul. Kwiatowa 12, 02-345 Warszawa · Warszawa, 6 października 2026 r.</div>
<h4>OGŁOSZENIE</h4>
<p><b>Szanowni Mieszkańcy!</b></p>
<p>Informujemy, że w czwartek <b>15 października</b> w godz. <b>8:00–14:00</b> firma „Hydro-Serwis” wymienia wodomierze w mieszkaniach. W tym czasie woda w całym budynku jest zakręcona. Prosimy przygotować zapas wody i zapewnić pracownikom firmy dostęp do łazienki i kuchni. Jeśli w tym dniu Państwo pracują, prosimy zostawić klucz u sąsiada i wpisać numer jego mieszkania na liście przy windzie.</p>
<p><b>Przypominamy podstawowe zasady:</b></p>
<ul>
<li>Cisza nocna obowiązuje od 22:00 do 6:00.</li>
<li>Rowery i wózki trzymamy w wózkowni na parterze, a nie na klatce schodowej.</li>
<li>Śmieci segregujemy: papier – pojemnik niebieski, szkło – zielony, metale i tworzywa sztuczne – żółty, odpady bio – brązowy, zmieszane – czarny.</li>
<li>Psa wyprowadzamy na smyczy i zawsze po nim sprzątamy.</li>
<li>Na klatce schodowej i w windzie nie palimy papierosów.</li>
</ul>
<p>Firma sprzątająca myje klatkę we wtorki i piątki. Awarie zgłaszamy w biurze spółdzielni: tel. 22 000 40 40 (pon.–pt. 7:00–15:00). Po godz. 15:00 oraz w weekendy i święta dzwonimy na pogotowie techniczne: 600 000 333.</p>
<p>Administrator budynku, pan Dariusz Kowalczyk, przyjmuje mieszkańców we wtorki i czwartki w godz. 10:00–14:00 (biuro spółdzielni, pokój nr 3).</p>
<div class="doc-sign">Zarząd Spółdzielni</div>`
  },
  questions: [
    { type: "tf", q: "W czwartek 15 października nie ma wody przez cały dzień.", answer: false, explain: "Воду перекриють лише w godz. 8:00–14:00 — з 8-ї до 14-ї години, а не на весь день." },
    { type: "choice", q: "Gdzie mieszkańcy trzymają rowery?", options: ["na klatce schodowej", "w wózkowni na parterze", "na balkonie"], answer: 1, explain: "«Rowery i wózki trzymamy w wózkowni na parterze, a nie na klatce schodowej». Wózkownia — візочкова, приміщення для дитячих візочків і велосипедів." },
    { type: "choice", q: "Masz pustą plastikową butelkę po wodzie. Do jakiego pojemnika ją wyrzucasz?", options: ["do niebieskiego", "do zielonego", "do żółtego"], answer: 2, explain: "Пластик (tworzywa sztuczne) і метал — у жовтий контейнер. Синій — папір, зелений — скло. Це загальнопольська система кольорів." },
    { type: "gap", q: "Od 22:00 do 6:00 obowiązuje ___ nocna.", answers: ["cisza"], explain: "Cisza nocna — «нічна тиша», у Польщі зазвичай з 22:00 до 6:00." },
    { type: "choice", q: "Jest sobota, w łazience cieknie rura. Dokąd dzwonisz?", options: ["22 000 40 40", "600 000 333", "do pana Kowalczyka"], answer: 1, explain: "Офіс працює лише pon.–pt. 7:00–15:00; у вихідні та після 15:00 телефонують на pogotowie techniczne — 600 000 333." },
    { type: "gap", q: "Pan Nowak codziennie wyprowadza ___ (pies) na smyczy.", answers: ["psa"], explain: "Знахідний відмінок назв істот ч. р. збігається з родовим: pies → psa (з випадінням -ie-)." }
  ],
  task: {
    prompt: "Ви нещодавно заселилися в кв. 14 цього будинку. У суботу 17 жовтня ви вішатимете полиці й свердлитимете. Напишіть записку на дошку оголошень: представтеся, назвіть номер квартири, скажіть, що й коли робитимете, перепросіть за шум і залиште номер телефону.",
    minWords: 25, maxWords: 60,
    useWords: ["mieszkanie", "remont", "przepraszam"],
    checklist: [
      { label: "Щонайменше 3 дієслова в 1-й особі однини (mieszkam, robię, wiercę…)", pattern: "(?<!\\p{L})\\p{L}+(am|em|ę)(?!\\p{L})", min: 3 },
      { label: "Зазначено час (10:00, godz. …)", pattern: "\\d{1,2}[:.]\\d{2}|(?<!\\p{L})godz", min: 1 }
    ],
    model: "Dzień dobry! Nazywam się Olga Kowalenko i od tygodnia mieszkam w mieszkaniu nr 14. W sobotę 17 października robię mały remont: wieszam półki i montuję lampę w kuchni. Wiercę tylko od 10:00 do 13:00. Bardzo przepraszam za hałas! Jeśli mają Państwo pytania, proszę dzwonić: 500 000 678. Pozdrawiam serdecznie, Olga (m. 14)"
  }
});

// ───────────────────────── M2 ─────────────────────────
COURSE.life({
  module: "m02",
  title: "Profil opiekunki do dziecka",
  titleRu: "Анкета няні",
  intro: "Ви шукаєте няню для дитини в Кракові й знайшли на порталі анкету пані Марти. Прочитайте, де і ким вона працювала, чим цікавиться і що пишуть про неї батьки.",
  doc: {
    kind: "ad",
    html: `<div class="doc-head">OpiekunkiBlisko · profil opiekunki · Kraków, Podgórze · ostatnio aktywna: wczoraj</div>
<h4>Marta, 34 lata – opiekunka do dzieci</h4>
<div class="doc-field"><b>Stawka:</b> 30 zł/godz.</div>
<div class="doc-field"><b>Dostępność:</b> pon.–pt. 7:00–17:00</div>
<div class="doc-field"><b>Doświadczenie:</b> 7 lat</div>
<p><b>O mnie</b></p>
<p>Z wykształcenia jestem pedagogiem. Przez pięć lat pracowałam jako nauczycielka w przedszkolu „Słoneczko” w Tarnowie. Dwa lata temu przeprowadziłam się do Krakowa i zostałam nianią dwójki dzieci: opiekowałam się dwuletnią Zosią i pięcioletnim Kubą. Odprowadzałam Kubę do przedszkola, gotowałam obiady i codziennie chodziłam z dziećmi na spacer. Rodzina niedawno wyjechała za granicę, dlatego szukam nowej pracy.</p>
<p>W zeszłym roku zrobiłam kurs pierwszej pomocy dla dzieci. Interesuję się muzyką i plastyką – z dziećmi dużo śpiewam, rysuję i lepię z plasteliny. Nie palę. Mam prawo jazdy kat. B, ale po mieście najchętniej jeżdżę tramwajem.</p>
<p><b>Opinie rodziców</b></p>
<div><i>„Pani Marta opiekowała się naszymi dziećmi przez dwa lata. Była cierpliwa, ciepła i zawsze punktualna. Dzieci bardzo za nią tęsknią!”</i> – Agnieszka (mama Zosi i Kuby), ocena 5/5</div>
<div><i>„Pani Marta zajmowała się naszym synem kilka razy wieczorem. Bardzo miła i kompetentna, niestety nie mówi po angielsku.”</i> – Tom, ocena 4/5</div>`
  },
  questions: [
    { type: "tf", q: "Marta pracowała w przedszkolu w Krakowie.", answer: false, explain: "У дитячому садку вона працювала w Tarnowie, а в Кракові була нянею." },
    { type: "choice", q: "Kim była Marta w Krakowie?", options: ["nauczycielką w przedszkolu", "nianią", "kierowcą"], answer: 1, explain: "«Zostałam nianią dwójki dzieci» — після zostać/być назва професії стоїть в орудному відмінку: niania → nianią." },
    { type: "gap", q: "Marta interesuje się ___ (muzyka) i plastyką.", answers: ["muzyką"], explain: "Interesować się + орудний відмінок: muzyka → muzyką." },
    { type: "choice", q: "Ile kosztują 4 godziny opieki?", options: ["30 zł", "90 zł", "120 zł"], answer: 2, explain: "Ставка 30 zł/godz. × 4 години = 120 zł." },
    { type: "choice", q: "Dlaczego Marta szuka nowej pracy?", options: ["bo nie lubiła tych dzieci", "bo rodzina wyjechała za granicę", "bo przeprowadziła się do Tarnowa"], answer: 1, explain: "«Rodzina niedawno wyjechała za granicę, dlatego szukam nowej pracy» — родина виїхала за кордон." },
    { type: "gap", q: "Marta codziennie ___ (chodzić, czas przeszły) z dziećmi na spacer.", answers: ["chodziła"], explain: "Минулий час, 3-тя особа ж. р.: chodzić → chodziła." }
  ],
  task: {
    prompt: "Ви шукаєте няню й пишете Марті через портал. Представтеся і скажіть, ким працюєте (орудний відмінок: jestem lekarzem / księgową). Розкажіть, хто раніше доглядав дитину і що змінилося (минулий час), чим цікавиться дитина, і запитайте, коли вона може почати.",
    minWords: 30, maxWords: 70,
    useWords: ["niania", "przedszkole", "opiekowała się"],
    checklist: [
      { label: "Щонайменше 2 дієслова в минулому часі (-ł, -ła, -łem, -łam…)", pattern: "\\p{L}+(łem|łam|łeś|łaś|ł|ła|ło|li|ły)(?!\\p{L})", min: 2 },
      { label: "Орудний відмінок: jestem + професія або interesuje się + czym", pattern: "(?<!\\p{L})(jestem|jest|byłem|byłam|był|była|zostałem|zostałam|się)\\s+\\p{L}+(ą|em|iem|ami|mi)(?!\\p{L})", min: 1 },
      { label: "Запитання до няні (?)", pattern: "\\?", min: 1 }
    ],
    model: "Dzień dobry, Pani Marto! Nazywam się Irina Kowal, jestem księgową i pracuję w biurze w centrum Krakowa. Mam czteroletnią córkę Lenę. Do końca września opiekowała się nią moja mama, ale w październiku wróciła do Lwowa. Rano Lena chodzi do przedszkola, więc szukamy niani od 13:00 do 17:00. Lena interesuje się zwierzętami i bardzo lubi rysować. Czy może Pani zacząć w listopadzie? Pozdrawiam, Irina"
  }
});

// ───────────────────────── M3 ─────────────────────────
COURSE.life({
  module: "m03",
  title: "Paragon z Biedronki",
  titleRu: "Чек із «Бедронки»",
  intro: "Ви купили продукти на всю орендовану квартиру й хочете поділити витрати із сусідкою. Розберіться в чеку: знижки, акція «2+1», застава за пляшки і спосіб оплати.",
  doc: {
    kind: "receipt",
    html: `<div class="doc-head">Biedronka · sklep nr 2187<br>ul. Kwiatowa 15, 04-100 Warszawa</div>
<h4>PARAGON FISKALNY</h4>
<p class="doc-small">2026-10-12, godz. 18:42 · kasa nr 3</p>
<table>
<tr><th>Towar</th><th>Ilość × cena</th><th class="doc-price">Wartość</th></tr>
<tr><td>Mleko UHT 3,2% 1 l</td><td>2 × 3,49</td><td class="doc-price">6,98</td></tr>
<tr><td>Chleb wiejski krojony 500 g</td><td>1 × 4,99</td><td class="doc-price">4,99</td></tr>
<tr><td>Jaja z wolnego wybiegu M 10 szt.</td><td>1 × 11,99</td><td class="doc-price">11,99</td></tr>
<tr><td>Pomidory malinowe luz</td><td>0,850 kg × 12,99</td><td class="doc-price">11,04</td></tr>
<tr><td>Woda mineralna niegaz. 1,5 l</td><td>6 × 1,79</td><td class="doc-price">10,74</td></tr>
<tr><td>Kaucja – butelka PET</td><td>6 × 0,50</td><td class="doc-price">3,00</td></tr>
<tr><td>Masło ekstra 82% 200 g</td><td>1 × 7,99</td><td class="doc-price">7,99</td></tr>
<tr><td><i>Rabat Moja Biedronka</i></td><td></td><td class="doc-price">-2,00</td></tr>
<tr><td>Ser gouda plastry 150 g</td><td>3 × 5,49</td><td class="doc-price">16,47</td></tr>
<tr><td><i>Rabat 2+1 gratis</i></td><td></td><td class="doc-price">-5,49</td></tr>
<tr><td>Kawa mielona 500 g</td><td>1 × 24,99</td><td class="doc-price">24,99</td></tr>
<tr><td>Torba wielorazowa</td><td>1 × 1,99</td><td class="doc-price">1,99</td></tr>
<tr><td><b>SUMA PLN</b></td><td></td><td class="doc-price"><b>92,69</b></td></tr>
<tr><td>w tym kaucja</td><td></td><td class="doc-price">3,00</td></tr>
<tr><td>Płatność: BLIK</td><td></td><td class="doc-price">92,69</td></tr>
</table>
<p><b>Twoje oszczędności dziś: 7,49 zł</b></p>
<p class="doc-small">Promocja „2+1 gratis” na ser gouda w plastrach obowiązuje do 17.10.2026 (sobota) przy zakupie 3 opakowań – najtańsze gratis. Rabat na masło – tylko z aplikacją lub kartą Moja Biedronka. Puste butelki z logo systemu kaucyjnego oddasz w każdym naszym sklepie i odzyskasz 0,50 zł za sztukę. Reklamacje przyjmujemy tylko z paragonem. Sklep czynny pon.–sob. 6:00–23:00. Dziękujemy za zakupy!</p>`
  },
  questions: [
    { type: "choice", q: "Ile kosztowały 3 opakowania sera gouda po rabacie?", options: ["16,47 zł", "10,98 zł", "5,49 zł"], answer: 1, explain: "16,47 − 5,49 = 10,98 zł: за акцією «2+1 gratis» третя упаковка безкоштовна." },
    { type: "gap", q: "Na paragonie jest sześć ___ (butelka) wody.", answers: ["butelek"], explain: "Після 5 і більше — родовий відмінок множини: butelka → butelek (з випадним -e-)." },
    { type: "gap", q: "Klient kupił 850 gramów ___ (pomidory).", answers: ["pomidorów"], explain: "Після позначення кількості — родовий відмінок множини: pomidory → pomidorów." },
    { type: "choice", q: "Co to jest „kaucja” na paragonie?", options: ["opłata za torbę", "zwrotna opłata za plastikowe butelki", "napiwek dla kasjerki"], answer: 1, explain: "З жовтня 2025 р. у Польщі діє system kaucyjny: за пластикову пляшку платять заставу 0,50 zł і отримують її назад, коли здають порожню пляшку." },
    { type: "choice", q: "Ile pieniędzy odzyskasz, jeśli oddasz wszystkie puste butelki?", options: ["0,50 zł", "1,79 zł", "3,00 zł"], answer: 2, explain: "6 пляшок × 0,50 zł = 3,00 zł — це рядок «Kaucja»." },
    { type: "tf", q: "Bez aplikacji Moja Biedronka masło kosztuje 7,99 zł.", answer: true, explain: "Знижка 2,00 zł на масло — «tylko z aplikacją lub kartą Moja Biedronka». Без застосунку — 7,99 zł." }
  ],
  task: {
    prompt: "Напишіть SMS сусідці по квартирі Касі: що ви купили (кількість + родовий відмінок: dwa litry mleka, sześć butelek wody…), скільки заплатили, скільки вона вам винна (половина без застави за пляшки), і попросіть переказати гроші BLIK-ом на номер телефону.",
    minWords: 25, maxWords: 60,
    useWords: ["butelka", "opakowanie", "przelew"],
    checklist: [
      { label: "Щонайменше 3 сполучення «кількість + іменник» (dwa litry, sześć butelek…)", pattern: "(?<!\\p{L})(dwa|dwie|trzy|cztery|pięć|sześć|siedem|osiem|dziewięć|dziesięć|kilka|kilo|kilogram|pół|dużo|trochę|litr|litry|litrów)\\s+\\p{L}+", min: 3 },
      { label: "Сума в złotych (zł)", pattern: "\\d+([,.]\\d+)?\\s*(zł|złotych|złote|złoty)", min: 1 }
    ],
    model: "Cześć Kasiu! Zrobiłam zakupy do domu: dwa litry mleka, chleb, dziesięć jajek, prawie kilogram pomidorów, sześć butelek wody, masło, trzy opakowania sera i kawę. Zapłaciłam 92,69 zł, ale 3 zł to kaucja za butelki. Twoja część to 44,85 zł. Możesz mi zrobić przelew na telefon BLIK-iem? Dzięki!"
  }
});

// ───────────────────────── M4 ─────────────────────────
COURSE.life({
  module: "m04",
  title: "Grafik sprzątania",
  titleRu: "Графік прибирання",
  intro: "Ви — Саша (Sasza) і винаймаєте кімнату в квартирі разом із трьома поляками. На холодильнику висять графік прибирання і правила. З’ясуйте, що і коли вам треба прибрати.",
  doc: {
    kind: "schedule",
    html: `<div class="doc-head">ul. Lipowa 8 m. 5, Kraków · wersja z 10.10.2026</div>
<h4>GRAFIK SPRZĄTANIA: październik – listopad</h4>
<table>
<tr><th>Tydzień</th><th>Kuchnia</th><th>Łazienka</th><th>Przedpokój + śmieci</th><th>Wolne</th></tr>
<tr><td>12–18.10</td><td>Kasia</td><td>Bartek</td><td>Sasza</td><td>Miłosz</td></tr>
<tr><td>19–25.10</td><td>Miłosz</td><td>Kasia</td><td>Bartek</td><td>Sasza</td></tr>
<tr><td>26.10–1.11</td><td>Sasza</td><td>Miłosz</td><td>Kasia</td><td>Bartek</td></tr>
<tr><td>2–8.11</td><td>Bartek</td><td>Sasza</td><td>Miłosz</td><td>Kasia</td></tr>
</table>
<p><b>Co trzeba zrobić?</b></p>
<ul>
<li><b>Kuchnia:</b> umyć kuchenkę i zlew, wytrzeć stół i blaty; w ostatnim tygodniu miesiąca – także wyczyścić lodówkę.</li>
<li><b>Łazienka:</b> umyć wannę, umywalkę, sedes i lustro, opróżnić kosz; kupić papier toaletowy, jeśli się kończy.</li>
<li><b>Przedpokój + śmieci:</b> odkurzyć i umyć podłogę, wynosić śmieci co 2–3 dni (pojemniki stoją za blokiem – pamiętajcie o segregacji!).</li>
</ul>
<p><b>Zasady:</b></p>
<ul>
<li>Sprzątamy do niedzieli, do godz. 20:00.</li>
<li>Jeśli nie możesz posprzątać w swoim tygodniu, zamień się z kimś i wpisz zmianę do grafiku.</li>
<li>Kto nie posprząta w swoim tygodniu, w następnym tygodniu będzie sprzątał jeszcze raz i kupi wszystkim pizzę.</li>
<li>Płyn do naczyń, worki na śmieci itp. kupujemy ze wspólnej skarbonki: 20 zł od osoby miesięcznie. Pieniądze zbiera Kasia do 5. dnia miesiąca.</li>
</ul>
<div class="doc-sign">Kasia (pokój 2)</div>`
  },
  questions: [
    { type: "choice", q: "Co robi Sasza w tygodniu 19–25 października?", options: ["sprząta kuchnię", "ma wolne", "sprząta łazienkę"], answer: 1, explain: "У рядку 19–25.10 ім’я Sasza стоїть у стовпці «Wolne» — вільний тиждень." },
    { type: "choice", q: "Kto w tygodniu 26.10–1.11 musi też wyczyścić lodówkę?", options: ["Kasia", "Sasza", "Miłosz"], answer: 1, explain: "Холодильник миють в останній тиждень місяця разом із кухнею. Тиждень 26.10–1.11 — останній у жовтні, і кухня цього тижня в Саші." },
    { type: "tf", q: "Łazienkę trzeba posprzątać do niedzieli do godz. 20:00.", answer: true, explain: "«Sprzątamy do niedzieli, do godz. 20:00» — правило для всіх зон." },
    { type: "gap", q: "Kto nie posprząta, w następnym tygodniu ___ sprzątał jeszcze raz. (być, on)", answers: ["będzie"], explain: "Складений майбутній час: będzie + sprzątał (або będzie sprzątać)." },
    { type: "choice", q: "Bartek pisze: „Dzisiaj nie mam czasu, ale obiecuję, że ___ śmieci jutro rano.”", options: ["wynoszę", "wyniosę", "wynosiłem"], answer: 1, explain: "Одна конкретна дія в майбутньому з результатом — доконаний вид: wynieść → wyniosę. Wynoszę — теперішній час (недок.), wynosiłem — минулий." },
    { type: "choice", q: "Ile Sasza wpłaci do skarbonki za październik i listopad?", options: ["20 zł", "40 zł", "80 zł"], answer: 1, explain: "20 zł od osoby miesięcznie × 2 місяці = 40 zł." }
  ],
  task: {
    prompt: "Ви — Саша. З 26 жовтня по 1 листопада ви будете на навчанні в Гданську і не зможете прибрати кухню (і холодильник!). Напишіть у спільний чат квартири: поясніть ситуацію (майбутній час), запропонуйте Бартекові обмін (у нього цього тижня wolne) і скажіть, що зробите натомість.",
    minWords: 30, maxWords: 70,
    useWords: ["posprzątać", "zamiana", "grafik"],
    checklist: [
      { label: "Майбутній час із być (będę, będziesz, będzie…)", pattern: "(?<!\\p{L})będ(ę|ziesz|zie|ziemy|ziecie|ą)(?!\\p{L})", min: 1 },
      { label: "Щонайменше 3 дієслова док. виду в простому майбутньому часі (posprzątam, umyję, wpiszę…)", pattern: "(?<!\\p{L})(po|u|wy|za|z|s|prze|przy|na|w|do|od)\\p{L}*(ę|am|em|esz|isz|ysz|asz)(?!\\p{L})", min: 3 }
    ],
    model: "Cześć wszystkim! Od 26 października do 1 listopada będę w Gdańsku na szkoleniu, więc nie posprzątam kuchni ani nie wyczyszczę lodówki. Bartek, proponuję zamianę: w tym tygodniu masz wolne, więc posprzątasz kuchnię za mnie, a ja w tygodniu 2–8 listopada posprzątam kuchnię za ciebie. Swoją łazienkę też oczywiście umyję. Jeśli się zgadzasz, wpiszę zmianę do grafiku. Z Gdańska przywiozę wam coś słodkiego!"
  }
});

// ───────────────────────── M5 ─────────────────────────
COURSE.life({
  module: "m05",
  title: "Remont torowiska – zmiany w komunikacji",
  titleRu: "Ремонт колій: зміни в транспорті",
  intro: "На зупинці висить оголошення: на вашій вулиці ремонтують трамвайні колії. З’ясуйте, які трамваї їздять об’їзним маршрутом, де тимчасові зупинки і коли курсує автобус, що замінює трамвай.",
  doc: {
    kind: "timetable",
    html: `<div class="doc-head">Zarząd Transportu Miejskiego · Komunikat nr 87/2026 · 14 października 2026 r.</div>
<h4>Remont torowiska na ul. Kościuszki – zmiany w komunikacji</h4>
<p>Od soboty <b>24 października</b> do niedzieli <b>29 listopada 2026 r.</b> trwa remont torowiska na ul. Kościuszki, na odcinku od pl. Wolności do Ronda Solidarności. W tym czasie:</p>
<ul>
<li>tramwaje linii <b>3</b> i <b>8</b> jeżdżą objazdem przez ul. Ogrodową i ul. Polną – nie zatrzymują się na przystankach Kościuszki/Teatr i Kościuszki/Poczta;</li>
<li>tramwaje linii <b>5</b> kursują tylko na trasie Osiedle Słoneczne – Dworzec Główny;</li>
<li>uruchamiamy zastępczą linię autobusową <b>Z5</b>: pl. Wolności – Kościuszki/Teatr – Kościuszki/Poczta – Rondo Solidarności.</li>
</ul>
<p>Przystanki linii Z5 są tymczasowe: Kościuszki/Teatr – na ul. Mickiewicza, przy wejściu do parku; Kościuszki/Poczta – na ul. Słowackiego, ok. 100 m od poczty. Z Dworca Głównego na pl. Wolności można przejść pieszo w ok. 10 minut.</p>
<p>Autobusy Z5 jeżdżą w godz. 5:00–23:30: w dni robocze co 7–8 minut, w soboty, niedziele i święta – co 12 minut. Obowiązują zwykłe bilety jednorazowe, czasowe i okresowe. Bilet kupisz w automacie, w kiosku lub w aplikacji mobilnej (np. jakdojade, mPay, SkyCash).</p>
<p><b>Z5 – odjazdy z przystanku pl. Wolności (dni robocze, fragment rozkładu):</b></p>
<table>
<tr><th>Godz.</th><th>Minuty</th></tr>
<tr><td>6</td><td>05 13 20 28 35 43 50 58</td></tr>
<tr><td>7</td><td>06 13 21 28 36 43 51 58</td></tr>
</table>
<p class="doc-small">Przepraszamy za utrudnienia. Infolinia ZTM: 800 000 456 (bezpłatna, czynna całą dobę).</p>`
  },
  questions: [
    { type: "tf", q: "Tramwaj linii 3 zatrzymuje się na przystanku Kościuszki/Poczta.", answer: false, explain: "Лінії 3 і 8 їздять об’їзним маршрутом і «nie zatrzymują się na przystankach Kościuszki/Teatr i Kościuszki/Poczta»." },
    { type: "choice", q: "Gdzie jest tymczasowy przystanek Kościuszki/Teatr?", options: ["na ul. Słowackiego", "na ul. Mickiewicza, przy wejściu do parku", "na pl. Wolności"], answer: 1, explain: "«Kościuszki/Teatr – na ul. Mickiewicza, przy wejściu do parku». На ul. Słowackiego — тимчасова зупинка Kościuszki/Poczta." },
    { type: "gap", q: "Tramwaj linii 5 kończy trasę na Dworcu ___ (Główny).", answers: ["Głównym"], explain: "Місцевий відмінок прикметника ч. р.: na Dworcu Głównym (-ym)." },
    { type: "choice", q: "Jest czwartek, 7:20. Stoisz na pl. Wolności. O której odjedzie najbliższy autobus Z5?", options: ["o 7:21", "o 7:28", "o 7:13"], answer: 0, explain: "У рядку «7» після 7:20 перша хвилина — 21, тобто 7:21." },
    { type: "tf", q: "W autobusie Z5 trzeba mieć specjalny bilet.", answer: false, explain: "«Obowiązują zwykłe bilety» — діють звичайні квитки: разові, на певний час і проїзні." },
    { type: "choice", q: "Pan Adam codziennie ___ do pracy tramwajem linii 8.", options: ["jedzie", "jeździ", "idzie"], answer: 1, explain: "Codziennie — регулярна, повторювана дія: jeździć → jeździ. Jedzie — зараз, в один бік; idzie — пішки." }
  ],
  task: {
    prompt: "До вас у гості приїжджає подруга Марта, поїзд прибуває на Dworzec Główny. Ви живете біля зупинки Kościuszki/Teatr, але зараз там ремонт. Напишіть їй SMS: як дістатися (пішки до pl. Wolności, потім автобусом Z5), де тимчасова зупинка і де купити квиток.",
    minWords: 30, maxWords: 70,
    useWords: ["przystanek", "pieszo", "wsiąść"],
    checklist: [
      { label: "Щонайменше 3 форми місцевого відмінка (na ulicy, w automacie, przy wejściu…)", pattern: "(?<!\\p{L})(w|we|na|przy|o|po)\\s+\\p{L}+(e|u|i|y|ej|ym|im|ach)(?!\\p{L})", min: 3 },
      { label: "Щонайменше 2 дієслова руху (iść, jechać, jeździć, chodzić…)", pattern: "(?<!\\p{L})(iść|id\\p{L}+|jech\\p{L}+|jed\\p{L}+|jad\\p{L}+|jeźdz\\p{L}+|jeżdż\\p{L}+|jeździ\\p{L}*|chodz\\p{L}+|chodzi\\p{L}*)(?!\\p{L})", min: 2 }
    ],
    model: "Cześć Marto! Teraz na ulicy Kościuszki trwa remont i tramwaj nr 3 nie jeździ koło mojego domu. Z dworca musisz iść pieszo na plac Wolności – to około 10 minut. Tam wsiądź do autobusu Z5 i jedź do przystanku Kościuszki/Teatr. Ten przystanek jest teraz na ulicy Mickiewicza, przy wejściu do parku. Bilet kupisz w automacie albo w aplikacji. Zadzwoń, jak będziesz w autobusie!"
  }
});

// ───────────────────────── M6 ─────────────────────────
COURSE.life({
  module: "m06",
  title: "Ulotka leku",
  titleRu: "Інструкція до ліків",
  intro: "Ви купили в аптеці жарознижувальний засіб без рецепта. Прочитайте інструкцію-вкладиш (ulotka): скільки таблеток можна дорослому і дитині, з яким інтервалом і чого робити не можна.",
  doc: {
    kind: "label",
    html: `<div class="doc-head">Ulotka dołączona do opakowania: informacja dla pacjenta</div>
<h4>Paracetamol Medika, 500 mg, tabletki</h4>
<p><b>Przeczytaj uważnie ulotkę przed zastosowaniem leku.</b> Zachowaj ją, aby w razie potrzeby móc ją ponownie przeczytać. W razie wątpliwości zapytaj lekarza lub farmaceutę.</p>
<p><b>Co to za lek?</b> Lek przeciwbólowy i przeciwgorączkowy. Pomaga dorosłym i dzieciom przy bólu głowy, zębów i mięśni, przy bolesnym miesiączkowaniu oraz przy gorączce, np. w czasie przeziębienia lub grypy.</p>
<p><b>Dawkowanie</b></p>
<table>
<tr><th>Wiek</th><th>Dawka jednorazowa</th><th>Maksymalnie na dobę</th></tr>
<tr><td>Dorośli i młodzież powyżej 12 lat (powyżej 40 kg)</td><td>1–2 tabletki co 4–6 godzin</td><td>8 tabletek (4 g)</td></tr>
<tr><td>Dzieci 6–12 lat</td><td>½–1 tabletka co 6 godzin</td><td>4 tabletki</td></tr>
<tr><td>Dzieci poniżej 6 lat</td><td>nie podawać</td><td>–</td></tr>
</table>
<p>Tabletki połykaj w całości i popijaj wodą. Lek możesz przyjmować przed jedzeniem albo po jedzeniu.</p>
<p><b>Uwaga!</b></p>
<ul>
<li>Nie pij alkoholu w czasie leczenia.</li>
<li>Nie przyjmuj w tym samym czasie innych leków z paracetamolem (np. proszków na grypę w saszetkach).</li>
<li>Nie stosuj leku dłużej niż 3 dni bez porady lekarza. Jeśli gorączka nie spada albo czujesz się gorzej, idź do lekarza.</li>
<li>Jeśli przypadkowo weźmiesz za dużo tabletek, natychmiast skontaktuj się z lekarzem – nawet jeśli czujesz się dobrze.</li>
</ul>
<p>Przechowuj w temperaturze poniżej 25°C, w miejscu niewidocznym i niedostępnym dla dzieci.</p>
<p class="doc-small">Lek wydawany bez recepty. Opakowanie: 20 tabletek. Podmiot odpowiedzialny: Medika Pharma sp. z o.o., ul. Farmaceutów 3, 90-001 Łódź. Data ostatniej aktualizacji ulotki: marzec 2026.</p>`
  },
  questions: [
    { type: "choice", q: "Ile tabletek może maksymalnie przyjąć dorosły w ciągu doby?", options: ["4", "6", "8"], answer: 2, explain: "Для дорослих: «Maksymalnie na dobę — 8 tabletek (4 g)». Na dobę — «на добу», як і в українській." },
    { type: "tf", q: "Ten lek można podać trzyletniemu dziecku.", answer: false, explain: "«Dzieci poniżej 6 lat — nie podawać»: дітям до 6 років давати не можна." },
    { type: "choice", q: "Twój syn ma 9 lat i gorączkę. Dostał tabletkę o 8:00. Kiedy najwcześniej może dostać następną?", options: ["o 10:00", "o 12:00", "o 14:00"], answer: 2, explain: "Дітям 6–12 років — «co 6 godzin»: 8:00 + 6 годин = 14:00." },
    { type: "gap", q: "Nie ___ alkoholu w czasie leczenia! (pić, ty)", answers: ["pij"], explain: "Заперечний наказовий спосіб утворюють від недоконаного виду: pić → pij → nie pij." },
    { type: "gap", q: "Ten lek pomaga ___ (dorośli) i dzieciom.", answers: ["dorosłym"], explain: "Pomagać + давальний відмінок; множина субстантивованого прикметника: dorośli → dorosłym." },
    { type: "tf", q: "Jeśli po trzech dniach gorączka nie spada, ulotka radzi iść do lekarza.", answer: true, explain: "«Nie stosuj leku dłużej niż 3 dni bez porady lekarza. Jeśli gorączka nie spada… idź do lekarza»." }
  ],
  task: {
    prompt: "Ваша сусідка по квартирі Оля захворіла на грип, а ви йдете на роботу. Залиште їй записку: де ліки і як їх приймати (наказовий спосіб: weź, popij…), чого робити не можна (nie pij, nie bierz…) і що ви для неї зробите (давальний відмінок: ugotuję ci…).",
    minWords: 30, maxWords: 70,
    useWords: ["tabletka", "gorączka", "zadzwonić"],
    checklist: [
      { label: "Щонайменше 3 форми наказового способу (weź, popij, zadzwoń…)", pattern: "(?<!\\p{L})(weź|bierz|pij|popij|wypij|śpij|zadzwoń|dzwoń|jedz|zjedz|idź|leż|połóż|zmierz|mierz|odpoczywaj|odpocznij|uważaj|pamiętaj|kup|zostań|napisz|zrób|rób|trzymaj|łykaj|otwórz|zamknij)(?!\\p{L})", min: 3 },
      { label: "Заперечний наказовий спосіб: nie + недок. вид (nie pij, nie bierz…)", pattern: "(?<!\\p{L})nie\\s+(pij|bierz|jedz|rób|wychodź|chodź|zapominaj|łącz|pal|dawaj|stosuj|przyjmuj|martw|otwieraj)(?!\\p{L})", min: 1 },
      { label: "Займенник у давальному відмінку (ci, mi, jej, mu…)", pattern: "(?<!\\p{L})(ci|mi|mu|jej|nam|wam|im|tobie)(?!\\p{L})", min: 1 }
    ],
    model: "Olu, paracetamol leży na stole w kuchni. Weź teraz dwie tabletki i popij je wodą. Następną dawkę weź najwcześniej za cztery godziny. Nie bierz więcej niż osiem tabletek na dobę i nie pij wina! Pij dużo herbaty z cytryną i dużo śpij. Jeśli gorączka nie spadnie, zadzwoń do mnie. Po pracy ugotuję ci rosół. Trzymaj się! Ania"
  }
});

// ───────────────────────── M7 ─────────────────────────
COURSE.life({
  module: "m07",
  title: "Zaproszenie na ślub",
  titleRu: "Запрошення на весілля",
  intro: "Польські друзі, Магда й Павел, надіслали вам запрошення на весілля з практичною інформацією для гостей. З’ясуйте, до якого числа треба відповісти, що написати про дітей і меню та що подарувати замість квітів.",
  doc: {
    kind: "letter",
    html: `<div class="doc-head">Gdynia, październik 2026</div>
<h4>Zaproszenie na ślub</h4>
<p>Kochani!</p>
<p>Z ogromną radością zapraszamy Was na nasz ślub cywilny, który odbędzie się w sobotę <b>21 listopada 2026 r. o godz. 14:00</b> w Urzędzie Stanu Cywilnego w Gdyni. Po ceremonii serdecznie zapraszamy na przyjęcie weselne do restauracji „Pod Lipami” (ul. Morska 140, Gdynia).</p>
<p>Będą z nami nasi rodzice, dziadkowie, przyjaciele i cała szalona rodzina – bez Was ta zabawa nie będzie pełna!</p>
<div class="doc-sign">Magda i Paweł</div>
<hr>
<p><b>Kilka praktycznych informacji</b></p>
<ul>
<li><b>Potwierdzenie:</b> prosimy o odpowiedź do 31 października – SMS do Magdy (600 000 908) lub Pawła (500 000 640). Napiszcie, ile osób przyjdzie i czy będą z Wami dzieci.</li>
<li><b>Dzieci:</b> najmłodsi goście są mile widziani! Przygotowaliśmy dla nich osobny stolik i kącik zabaw z animatorką. Dajcie znać, ile lat mają Wasze pociechy.</li>
<li><b>Menu:</b> jeśli ktoś z Was jest wegetarianinem lub ma alergię, napiszcie nam o tym.</li>
<li><b>Nocleg:</b> zarezerwowaliśmy 10 pokoi w hotelu obok restauracji (śniadanie w cenie). Jeśli chcecie zostać na noc, napiszcie do 31 października.</li>
<li><b>Powrót:</b> o 1:00 i o 3:00 w nocy autokar odwiezie gości pod Dworzec Główny w Gdańsku.</li>
<li><b>Prezenty:</b> zamiast kwiatów prosimy o książkę z dedykacją albo wpłatę na schronisko dla zwierząt.</li>
<li><b>Strój:</b> elegancko, ale wygodnie – panowie nie muszą zakładać krawatów, a panie mogą przyjść w płaskich butach, bo będziemy dużo tańczyć!</li>
</ul>
<p>W razie pytań dzwońcie do naszych świadków: Oli, siostry Magdy, i Kuby, przyjaciela Pawła. Oboje znają wszystkie szczegóły!</p>`
  },
  questions: [
    { type: "tf", q: "Magda i Paweł biorą ślub w kościele.", answer: false, explain: "Це ślub cywilny — цивільна реєстрація шлюбу w Urzędzie Stanu Cywilnego (відповідник РАЦСу)." },
    { type: "choice", q: "Do kiedy trzeba potwierdzić przybycie?", options: ["do 21 listopada", "do 31 października", "do 1 listopada"], answer: 1, explain: "«Prosimy o odpowiedź do 31 października». 21 листопада — дата самого весілля." },
    { type: "choice", q: "O co para młoda prosi zamiast kwiatów?", options: ["o wino", "o książkę z dedykacją albo wpłatę na schronisko", "o pieniądze w kopercie"], answer: 1, explain: "«Zamiast kwiatów prosimy o książkę z dedykacją albo wpłatę na schronisko dla zwierząt» — популярне нині в Польщі прохання." },
    { type: "gap", q: "O 1:00 i o 3:00 autokar odwiezie wszystkich ___ (gość) do Gdańska.", answers: ["gości"], explain: "Знахідний відмінок множини чоловічо-особового роду збігається з родовим: goście → (widzę, odwiozę) gości; wszystkich — теж чоловічо-особова форма." },
    { type: "choice", q: "Przyjdziesz z mężem, synem i córką. Jak to napiszesz?", options: ["Będziemy w czwórkę: ja, mąż i dwoje dzieci.", "Będziemy w czwórkę: ja, mąż i dwa dzieci.", "Będziemy w czwórkę: ja, mąż i dwóch dzieci."], answer: 0, explain: "Зі словом dzieci (і для змішаної пари хлопчик + дівчинка) вживають збірний числівник, як в українському «двоє дітей»: dwoje dzieci." },
    { type: "tf", q: "Panowie muszą przyjść w krawatach.", answer: false, explain: "«Panowie nie muszą zakładać krawatów» — краватка не обов’язкова." }
  ],
  task: {
    prompt: "Дайте відповідь Магді й Павелові (довге SMS або e-mail): подякуйте за запрошення, підтвердьте свою участь, напишіть, скільки вас буде і скільки років дітям (dwoje dzieci…), повідомте про вегетаріанця чи алергію і поставте запитання про номер у готелі або про автобус.",
    minWords: 50, maxWords: 100,
    useWords: ["potwierdzać", "dwoje", "nocleg"],
    checklist: [
      { label: "Збірний або чоловічо-особовий числівник (dwoje, troje, dwóch, oboje…)", pattern: "(?<!\\p{L})(dwoje|troje|czworo|dwojga|trojga|oboje|obojga|dwaj|trzej|dwóch|trzech|czterech|obaj|obu)(?!\\p{L})", min: 1 },
      { label: "Чоловічо-особова форма множини на -li (potrzebowali, byliśmy…)", pattern: "\\p{L}+li(śmy|ście)?(?!\\p{L})", min: 1 },
      { label: "Запитання (?)", pattern: "\\?", min: 1 }
    ],
    model: "Droga Magdo, drogi Pawle! Bardzo dziękujemy za zaproszenie i z radością potwierdzamy przybycie. Będziemy w czwórkę: ja, mój mąż Igor i dwoje naszych dzieci – Sonia ma siedem lat, a Tima cztery. Dzieci już się cieszą na kącik z animatorką! Igor nie je mięsa, więc prosimy o danie wegetariańskie. Chcielibyśmy też skorzystać z noclegu: czy możecie zarezerwować dla nas jeden pokój rodzinny? Wtedy nie będziemy potrzebowali autokaru. Ściskamy Was mocno i do zobaczenia w Gdyni! Ola i Igor"
  }
});

// ───────────────────────── M8 ─────────────────────────
COURSE.life({
  module: "m08",
  title: "Post w grupie sąsiedzkiej",
  titleRu: "Допис у сусідській групі",
  intro: "У фейсбук-групі вашого району у Вроцлаві сусідка просить допомогти знайти кота й наглянути за квартирою. Прочитайте допис і поради в коментарях — і дайте відповідь самі.",
  doc: {
    kind: "article",
    html: `<div class="doc-head">Grupa „Sąsiedzi z Nadodrza – Wrocław” · post: Joanna Kubiak · wczoraj, 21:47</div>
<h4>ZAGINĄŁ KOT – BARDZO PROSZĘ O POMOC!</h4>
<p>Kochani, w poniedziałek wieczorem z mieszkania przy ul. Jedności Narodowej 41 uciekł nasz kot Bazyl. Jest rudy, ma białą łapkę i niebieską obróżkę z adresówką. Bazyl jest bardzo płochliwy, więc gdybyście go zobaczyli, nie łapcie go, tylko od razu do mnie zadzwońcie: 600 000 112. Byłabym bardzo wdzięczna, gdyby ktoś mógł zajrzeć do swojej piwnicy albo na podwórko – koty często się tam chowają. Dla znalazcy jest nagroda: 300 zł.</p>
<p>I jeszcze jedna prośba: w sobotę muszę wyjechać na dwa dni do Opola, do chorej mamy. Czy ktoś z okolicy mógłby w sobotę i w niedzielę wieczorem zajrzeć pod nasze drzwi, żeby sprawdzić, czy Bazyl nie wrócił? Zostawiłabym klucz do klatki u pani Haliny z parteru.</p>
<hr>
<p><b>Komentarze (4)</b></p>
<div><b>Marek Wiśniewski:</b> Na twoim miejscu wydrukowałbym ogłoszenia ze zdjęciem i powiesiłbym je w sklepach na Nadodrzu. Ludzie naprawdę czytają kartki w Żabce!</div>
<div><b>Agnieszka Pawlak:</b> Powinnaś też zgłosić zaginięcie do schroniska i do straży miejskiej. Jeśli Bazyl ma czip, warto sprawdzić, czy Twoje dane w bazie są aktualne.</div>
<div><b>Tomek Zieliński:</b> Mieszkam na Rydygiera, mogę zajrzeć w sobotę i w niedzielę. Napisz do mnie na priv.</div>
<div><b>Joanna Kubiak (autorka):</b> Dziękuję Wam! Tomek, już napisałam. Jeśli Bazyl wróci, od razu dam znać w komentarzu.</div>`
  },
  questions: [
    { type: "tf", q: "Bazyl ma niebieską obróżkę.", answer: true, explain: "«Ma białą łapkę i niebieską obróżkę z adresówką»." },
    { type: "choice", q: "Co trzeba zrobić, gdy zobaczysz Bazyla?", options: ["złapać go i zanieść do schroniska", "nie łapać go i od razu zadzwonić do Joanny", "zrobić zdjęcie i wrzucić je do grupy"], answer: 1, explain: "Кіт полохливий: «nie łapcie go, tylko od razu do mnie zadzwońcie»." },
    { type: "choice", q: "Dlaczego Joanna potrzebuje pomocy w weekend?", options: ["bo pracuje w sobotę i w niedzielę", "bo wyjeżdża do chorej mamy do Opola", "bo idzie do schroniska"], answer: 1, explain: "«W sobotę muszę wyjechać na dwa dni do Opola, do chorej mamy»." },
    { type: "gap", q: "Marek: „Na twoim miejscu ___ (wydrukować, ja – mężczyzna) ogłoszenia ze zdjęciem.”", answers: ["wydrukowałbym"], explain: "Умовний спосіб, 1-ша особа ч. р.: основа минулого часу wydrukował + -bym → wydrukowałbym." },
    { type: "choice", q: "Kto zaproponował konkretną pomoc w weekend?", options: ["Marek", "Agnieszka", "Tomek"], answer: 2, explain: "Томек: «mogę zajrzeć w sobotę i w niedzielę». Марек і Агнешка лише дають поради." },
    { type: "gap", q: "Joanna prosi, ___ ktoś zajrzał w weekend pod jej drzwi.", answers: ["żeby", "aby", "by"], explain: "Непряме прохання: prosić, żeby / aby (книжн. by) + форма минулого часу (zajrzał)." }
  ],
  task: {
    prompt: "Напишіть коментар під дописом Йоанни: висловіть співчуття, дайте 2 поради (na twoim miejscu…, powinnaś…, warto…) і поясніть за допомогою gdybym…, чому не можете наглянути за квартирою у вихідні, але запропонуйте іншу допомогу.",
    minWords: 50, maxWords: 100,
    useWords: ["na twoim miejscu", "powinnaś", "gdybym"],
    checklist: [
      { label: "Щонайменше 2 форми умовного способу (poszłabym, zrobiłbym…)", pattern: "\\p{L}+(łbym|łabym|łbyś|łabyś|łby|łaby|łoby|libyśmy|łybyśmy|libyście|łybyście|liby|łyby)(?!\\p{L})", min: 2 },
      { label: "Щонайменше 2 поради (na twoim miejscu, powinnaś, warto, radzę)", pattern: "(?<!\\p{L})(powinn\\p{L}*|powinien\\p{L}*|warto|radzę)(?!\\p{L})|na twoim miejscu", min: 2 },
      { label: "Gdyby… або żeby…", pattern: "(?<!\\p{L})(gdyby\\p{L}*|żeby\\p{L}*|aby\\p{L}*)(?!\\p{L})", min: 1 }
    ],
    model: "Joanno, bardzo mi przykro! Na twoim miejscu poszłabym jeszcze dziś wieczorem na podwórko z miską karmy i potrząsnęłabym nią – mój kot zawsze wracał na ten dźwięk. Powinnaś też zostawić na wycieraczce jego kocyk, żeby Bazyl poczuł zapach domu. Gdybym nie pracowała w weekend, chętnie zajrzałabym pod twoje drzwi, ale niestety mam dyżur w szpitalu. Mogę za to w poniedziałek powiesić ogłoszenia na Kluczborskiej. Trzymam kciuki za Bazyla!"
  }
});

// ───────────────────────── M9 ─────────────────────────
COURSE.life({
  module: "m09",
  title: "Mieszkania na wynajem",
  titleRu: "Квартири в оренду",
  intro: "Ви шукаєте двокімнатну квартиру в Кракові й зберегли три оголошення. Порівняйте ціну, комунальні платежі, заставу, площу і дорогу до центру.",
  doc: {
    kind: "ad",
    html: `<div class="doc-head">Mieszkania na wynajem · Kraków · 2 pokoje · do 3500 zł · zapisane oferty (10.10.2026)</div>
<h4>Porównanie ofert</h4>
<table>
<tr><th></th><th>A. Kazimierz</th><th>B. Ruczaj</th><th>C. Bronowice</th></tr>
<tr><td>Powierzchnia</td><td>38 m²</td><td>52 m²</td><td>46 m²</td></tr>
<tr><td>Piętro</td><td>3/3, bez windy</td><td>6/10, winda</td><td>parter/4</td></tr>
<tr><td>Czynsz najmu</td><td>3300 zł</td><td>2900 zł</td><td>2700 zł</td></tr>
<tr><td>Opłaty (czynsz adm. + media)</td><td>ok. 500 zł</td><td>ok. 700 zł</td><td>ok. 600 zł</td></tr>
<tr><td>Kaucja</td><td>3300 zł</td><td>5800 zł</td><td>2700 zł</td></tr>
<tr><td>Dojazd do Rynku Głównego</td><td>15 min pieszo</td><td>25 min tramwajem</td><td>20 min tramwajem</td></tr>
<tr><td>Zwierzęta</td><td>nie</td><td>tak</td><td>do uzgodnienia</td></tr>
<tr><td>Dostępne</td><td>od zaraz</td><td>od 1.11</td><td>od 15.11</td></tr>
</table>
<p><b>A.</b> Klimatyczna kamienica, wysokie sufity, mieszkanie po remoncie. Najbliżej centrum, ale w weekendy bywa głośno – pod oknami są puby.</p>
<p><b>B.</b> Nowe osiedle, mieszkanie w pełni umeblowane, ze zmywarką i balkonem. Nikt jeszcze w nim nie mieszkał. Miejsce w garażu podziemnym – dodatkowo 250 zł/mies. Umowa najmu okazjonalnego (potrzebne oświadczenie u notariusza).</p>
<p><b>C.</b> Blok z lat 70., mieszkanie odświeżone, bez zmywarki. Spokojna okolica, blisko park i Biedronka. Właścicielka mieszka w tym samym bloku – jeśli coś się zepsuje, szybko pomoże.</p>
<p class="doc-small">Wszystkie oferty bezpośrednio od właścicieli – bez prowizji. Opłaty za media zależą od zużycia. Minimalny okres najmu: 12 miesięcy.</p>`
  },
  questions: [
    { type: "choice", q: "Które mieszkanie jest największe?", options: ["A", "B", "C"], answer: 1, explain: "B — 52 m², більша, ніж C (46 m²) і A (38 m²)." },
    { type: "choice", q: "Które mieszkanie jest najtańsze, jeśli liczymy czynsz najmu i opłaty razem?", options: ["A", "B", "C"], answer: 2, explain: "A: 3300 + 500 = 3800 zł; B: 2900 + 700 = 3600 zł; C: 2700 + 600 = 3300 zł — C najtańsze." },
    { type: "gap", q: "Z mieszkania A do Rynku jest ___ (blisko) niż z mieszkania C.", answers: ["bliżej"], explain: "Вищий ступінь порівняння прислівника: blisko → bliżej (+ niż)." },
    { type: "tf", q: "Kaucja za mieszkanie B jest wyższa niż za mieszkania A i C.", answer: true, explain: "5800 zł — більше, ніж 3300 zł (A) і 2700 zł (C)." },
    { type: "tf", q: "W mieszkaniu B ktoś już wcześniej mieszkał.", answer: false, explain: "«Nikt jeszcze w nim nie mieszkał» — там ще ніхто не жив (подвійне заперечення nikt … nie, як і в українській)." },
    { type: "choice", q: "Masz kota i chcesz się wprowadzić 1 listopada. Która oferta jest dla ciebie najlepsza?", options: ["A", "B", "C"], answer: 1, explain: "У квартирі A тварин тримати заборонено, C доступна лише з 15.11, а в B тварини дозволені й квартира вільна od 1.11." }
  ],
  task: {
    prompt: "Напишіть другові чи подрузі, яку квартиру ви обрали і чому: порівняйте щонайменше дві пропозиції (tańszy, większy, bliżej, najlepszy…), назвіть мінуси і запитайте, чи живе хтось із його або її знайомих у цьому районі (ktoś).",
    minWords: 50, maxWords: 100,
    useWords: ["tańszy", "najlepszy", "niż"],
    checklist: [
      { label: "Щонайменше 3 форми вищого / найвищого ступеня порівняння (tańsze, większe, najbliżej…)", pattern: "(?<!\\p{L})(naj\\p{L}+|\\p{L}*(ejsz|ńsz|ższ|ększ|lepsz|gorsz|tsz|dsz)\\p{L}*|lepiej|gorzej|więcej|mniej|bliżej|dalej|szybciej|taniej|drożej|wyżej|niżej|łatwiej|trudniej)(?!\\p{L})", min: 3 },
      { label: "Порівняння з niż", pattern: "(?<!\\p{L})niż(?!\\p{L})", min: 1 },
      { label: "Неозначений або заперечний займенник (ktoś, coś, nikt, nic…)", pattern: "(?<!\\p{L})(ktoś|kogoś|komuś|kimś|coś|czegoś|nikt|nikogo|nikomu|nic|niczego|gdzieś|nigdzie|kiedyś|ktokolwiek|cokolwiek)(?!\\p{L})", min: 1 }
    ],
    model: "Cześć Kuba! Szukam mieszkania w Krakowie i mam trzy oferty. Mieszkanie na Kazimierzu jest najładniejsze i najbliżej Rynku, ale też najdroższe i chyba najgłośniejsze. Na Ruczaju jest największe i najnowsze – nikt w nim jeszcze nie mieszkał – ale kaucja jest mniej więcej dwa razy wyższa niż w innych ofertach. Wybieram Bronowice: mieszkanie jest mniejsze niż na Ruczaju, ale tańsze o 300 zł miesięcznie, a okolica jest spokojniejsza. Moim zdaniem to najlepsza oferta. Czy ktoś z twoich znajomych mieszka w Bronowicach? Pozdrawiam, Wika"
  }
});

// ───────────────────────── M10 ─────────────────────────
COURSE.life({
  module: "m10",
  title: "Opóźnienie pociągu",
  titleRu: "Затримка поїзда",
  intro: "Рано-вранці перед поїздкою до Гданська ви отримали листа від перевізника: поїзд затримується і відправляється з іншої платформи. Розберіться з новим часом, даними квитка і правилами компенсації за запізнення.",
  doc: {
    kind: "email",
    html: `<div class="doc-head">Od: PKP Intercity – powiadomienia · Temat: Zmiana godziny odjazdu – Twoja podróż 23.10.2026 · 23.10.2026, 6:52</div>
<p>Dzień dobry,</p>
<p>z powodu awarii sieci trakcyjnej między Działdowem a Iławą Twój pociąg <b>IC 5310 „Neptun”</b> relacji Warszawa Centralna – Gdańsk Główny odjedzie z opóźnieniem ok. 40 minut.</p>
<table>
<tr><th></th><th>Rozkład</th><th>Nowa godzina (prognoza)</th></tr>
<tr><td>Odjazd: Warszawa Centralna</td><td>7:35, peron 2</td><td><b>8:15, peron 4</b></td></tr>
<tr><td>Przyjazd: Gdańsk Główny</td><td>10:28</td><td><b>ok. 11:40</b></td></tr>
</table>
<p><b>Uwaga:</b> pociąg odjedzie z innego peronu niż w rozkładzie! Zanim wsiądziesz, sprawdź tablicę odjazdów. Pociąg wjedzie na peron ok. 8:05. Jak tylko otrzymamy nowe informacje, wyślemy Ci kolejną wiadomość.</p>
<div class="doc-field"><b>Nr biletu:</b> eIC 74120593</div>
<div class="doc-field"><b>Miejsce:</b> wagon 7, miejsce 54 (okno), klasa 2</div>
<div class="doc-field"><b>Cena:</b> 89,00 zł (bilet normalny), płatność: BLIK</div>
<p><b>Odszkodowanie za opóźnienie</b> (zgodnie z przepisami UE):</p>
<ul>
<li>25% ceny biletu – jeśli pociąg przyjedzie do stacji docelowej 60–119 minut później niż w rozkładzie;</li>
<li>50% ceny biletu – przy opóźnieniu 120 minut lub dłuższym;</li>
<li>odszkodowania nie wypłaca się, jeśli jest niższe niż równowartość 4 euro.</li>
</ul>
<p>Wniosek złożysz w kasie, przez formularz na stronie internetowej lub w aplikacji. Do wniosku dołącz bilet i numer konta.</p>
<p class="doc-small">Bilet jest ważny tylko z dokumentem tożsamości ze zdjęciem. Przepraszamy za utrudnienia. Wiadomość wygenerowana automatycznie – prosimy na nią nie odpowiadać.</p>`
  },
  questions: [
    { type: "choice", q: "O której pociąg odjedzie z Warszawy?", options: ["o 7:35", "o 8:15", "o 8:05"], answer: 1, explain: "Новий час відправлення — 8:15. О 7:35 — за розкладом, а о 8:05 поїзд лише подадуть на платформу (wjedzie na peron)." },
    { type: "choice", q: "Z którego peronu odjedzie pociąg?", options: ["z peronu 2", "z peronu 4", "z peronu 7"], answer: 1, explain: "«8:15, peron 4» — платформа змінилася (за розкладом була 2). 7 — номер вагона." },
    { type: "choice", q: "Pociąg przyjechał do Gdańska o 11:40. Ile wyniesie odszkodowanie?", options: ["nic – opóźnienie jest za małe", "22,25 zł", "44,50 zł"], answer: 1, explain: "10:28 → 11:40 = 72 хвилини, це діапазон 60–119 хвилин: 25% × 89,00 zł = 22,25 zł (більше ніж 4 євро)." },
    { type: "tf", q: "Gdyby pociąg przyjechał do Gdańska 50 minut później, pasażer dostałby odszkodowanie.", answer: false, explain: "Компенсацію виплачують від 60 хвилин запізнення; за 50 хвилин її немає." },
    { type: "gap", q: "Pociąg ___ (przyjechać – czas przyszły) do Gdańska Głównego ok. 11:40.", answers: ["przyjedzie"], explain: "Przyjechać — доконаний вид, простий майбутній час: przyjadę, przyjedziesz, przyjedzie." },
    { type: "gap", q: "___ wsiądziesz do pociągu, sprawdź tablicę odjazdów.", answers: ["Zanim", "Nim"], explain: "Zanim (книжн. nim) — «перш ніж»: дія головного речення (перевір табло) відбувається раніше." }
  ],
  task: {
    prompt: "У Гданську на вас чекає колега Бартек, зустріч в офісі о 12:00. Напишіть йому e-mail: що сталося з поїздом, коли ви вирушите і приїдете, що зробите після приїзду (zanim, jak tylko), запропонуйте перенести зустріч і згадайте про компенсацію.",
    minWords: 50, maxWords: 100,
    useWords: ["opóźnienie", "wysiąść", "zanim"],
    checklist: [
      { label: "Щонайменше 2 префіксальні дієслова руху (odjedziemy, dojedziemy, przyjdę…)", pattern: "(?<!\\p{L})(przy|od|do|wy|w|prze|z|za|pod|ob|roz)(jad|jedzi|jech|jeżdż)\\p{L}*(?!\\p{L})|(?<!\\p{L})(przy|wy|we|do|ode|prze|ze|obe|pode|w|od|o|z|roze)(jd|jść|szed|szł|chodz)\\p{L}*(?!\\p{L})", min: 2 },
      { label: "Часовий сполучник (zanim, jak tylko, kiedy, gdy, dopóki, odkąd)", pattern: "(?<!\\p{L})(zanim|jak tylko|kiedy|gdy|dopóki|odkąd|podczas gdy)(?!\\p{L})", min: 1 },
      { label: "Зазначення часу (11:40, kwadrans po…, wpół do…)", pattern: "\\d{1,2}[:.]\\d{2}|kwadrans|wpół do", min: 1 }
    ],
    model: "Cześć Bartku! Niestety mój pociąg ma opóźnienie. Między Działdowem a Iławą jest awaria sieci trakcyjnej, więc odjedziemy z Warszawy dopiero kwadrans po ósmej, a do Gdańska dojedziemy około 11:40, czyli ponad godzinę później. Nie czekaj na mnie na peronie – jak tylko wysiądę z pociągu, zadzwonię do ciebie. Zanim przyjdę do biura, zostawię walizkę w hotelu. Czy możemy przełożyć spotkanie z 12:00 na 13:30? Dobra wiadomość: za takie opóźnienie dostanę odszkodowanie – 25% ceny biletu! Do zobaczenia, Dima"
  }
});

// ───────────────────────── M11 ─────────────────────────
COURSE.life({
  module: "m11",
  title: "Oferta pracy",
  titleRu: "Вакансія",
  intro: "На сайті з вакансіями ви знайшли пропозицію для людей зі знанням української мови. Розберіться в обов’язках, вимогах і умовах — і напишіть офіційний супровідний лист.",
  doc: {
    kind: "ad",
    html: `<div class="doc-head">Oferta pracy · nr ref. CS/UA/10/2026 · opublikowana: 12.10.2026 · ważna do: 15.11.2026</div>
<h4>Specjalista / Specjalistka ds. obsługi klienta z językiem ukraińskim lub rosyjskim</h4>
<p><b>Nordline Logistics sp. z o.o.</b> to firma, która od 15 lat organizuje transport międzynarodowy w Europie Środkowo-Wschodniej. Do biura we Wrocławiu (ul. Legnicka 55) szukamy osoby, która lubi kontakt z ludźmi i nie boi się rozmów telefonicznych.</p>
<p><b>Twoje zadania:</b></p>
<ul>
<li>obsługa klientów, z którymi będziesz się kontaktować telefonicznie i mailowo;</li>
<li>śledzenie przesyłek i informowanie klientów o opóźnieniach;</li>
<li>współpraca z kierowcami, przewoźnikami i działem księgowości;</li>
<li>przygotowywanie cotygodniowych raportów w Excelu.</li>
</ul>
<p><b>Nasze wymagania:</b></p>
<ul>
<li>bardzo dobra znajomość języka ukraińskiego lub rosyjskiego (min. C1);</li>
<li>znajomość języka polskiego na poziomie min. B2 w mowie i w piśmie;</li>
<li>min. rok doświadczenia w obsłudze klienta;</li>
<li>dobra znajomość Excela (tabele przestawne będą dodatkowym atutem);</li>
<li>język angielski – mile widziany;</li>
<li>gotowość do pracy zmianowej: pon.–pt. 7:00–15:00 lub 13:00–21:00.</li>
</ul>
<p><b>Oferujemy:</b></p>
<ul>
<li>umowę o pracę na pełny etat (po 3-miesięcznym okresie próbnym);</li>
<li>wynagrodzenie 6200–7400 zł brutto + premię kwartalną;</li>
<li>pracę hybrydową (2 dni w tygodniu z domu) po zakończeniu wdrożenia;</li>
<li>prywatną opiekę medyczną, kartę Multisport i dofinansowanie do nauki języków.</li>
</ul>
<p>Osoby zainteresowane prosimy o przesłanie CV w języku polskim przez przycisk „Aplikuj” do 15.11.2026 r. W tytule wiadomości prosimy wpisać numer referencyjny oferty. Uprzejmie informujemy, że skontaktujemy się tylko z wybranymi kandydatami.</p>
<p class="doc-small">Prosimy o dopisanie do CV zgody na przetwarzanie danych osobowych na potrzeby rekrutacji (zgodnie z RODO).</p>`
  },
  questions: [
    { type: "choice", q: "Ile dni w tygodniu można pracować z domu po zakończeniu wdrożenia?", options: ["ani jednego", "dwa", "pięć"], answer: 1, explain: "«Pracę hybrydową (2 dni w tygodniu z domu) po zakończeniu wdrożenia»." },
    { type: "tf", q: "Znajomość angielskiego jest obowiązkowa.", answer: false, explain: "«Język angielski – mile widziany» — англійська бажана, але не обов’язкова." },
    { type: "choice", q: "Jaką umowę oferuje firma?", options: ["umowę zlecenie", "umowę o pracę", "umowę o dzieło"], answer: 1, explain: "Umowa o pracę na pełny etat — повноцінний трудовий договір на повну ставку (з оплачуваною відпусткою та гарантіями Трудового кодексу), на відміну від цивільно-правових umowa zlecenie / o dzieło." },
    { type: "gap", q: "To firma, w ___ można pracować hybrydowo. (który)", answers: ["której"], explain: "Firma — ж. р.; w + місцевий відмінок: która → w której." },
    { type: "gap", q: "Kandydatka zapytała, ___ praca jest zmianowa.", answers: ["czy"], explain: "Непряме загальне запитання (так/ні) вводять словом czy, як українське «чи»: «Czy praca jest zmianowa?» → zapytała, czy…" },
    { type: "choice", q: "Co trzeba wpisać w tytule wiadomości?", options: ["swoje imię i nazwisko", "numer referencyjny oferty", "nazwę stanowiska po angielsku"], answer: 1, explain: "«W tytule wiadomości prosimy wpisać numer referencyjny oferty» — тобто CS/UA/10/2026." }
  ],
  task: {
    prompt: "Напишіть короткий офіційний супровідний лист (e-mail) на цю вакансію: офіційне звертання, номер оголошення, ваш досвід (щонайменше 2 рази który/która/które), мови, коли можете почати, офіційна формула прощання.",
    minWords: 50, maxWords: 100,
    useWords: ["doświadczenie", "rozpocząć", "rozmowa"],
    checklist: [
      { label: "Офіційне звертання (Szanowni Państwo / Szanowna Pani…)", pattern: "Szanown\\p{L}+", min: 1 },
      { label: "Формула прощання (Z poważaniem / Łączę pozdrowienia)", pattern: "z poważaniem|łączę (wyrazy szacunku|pozdrowienia)|z wyrazami szacunku", min: 1 },
      { label: "Щонайменше 2 підрядні речення з który/która/które (у будь-якому відмінку)", pattern: "(?<!\\p{L})któr\\p{L}+(?!\\p{L})", min: 2 }
    ],
    model: "Szanowni Państwo,\nw odpowiedzi na ogłoszenie nr CS/UA/10/2026 przesyłam swoje CV. Mam dwa lata doświadczenia w obsłudze klienta: pracuję w firmie kurierskiej w Poznaniu, w której obsługuję klientów z Polski i Ukrainy. Język ukraiński znam na poziomie ojczystym, a polski – na poziomie B2. Na co dzień przygotowuję w Excelu raporty dla kierownika działu, który na ich podstawie planuje trasy kierowców. Pracę mogę rozpocząć od 1 grudnia. Chętnie opowiem o sobie więcej podczas rozmowy kwalifikacyjnej.\nZ poważaniem\nNatalia Petrenko"
  }
});

// ───────────────────────── M12 ─────────────────────────
COURSE.life({
  module: "m12",
  title: "Komunikat na 11 listopada",
  titleRu: "Оголошення мерії на 11 листопада",
  intro: "11 листопада — День незалежності Польщі. Мерія вашого міста опублікувала повідомлення про перекриття вулиць, забіг і концерт. З’ясуйте, де не можна паркуватися, як курсуватиме транспорт і що буде відчинено.",
  doc: {
    kind: "notice",
    html: `<div class="doc-head">Urząd Miasta · Wydział Bezpieczeństwa i Zarządzania Kryzysowego · 28 października 2026 r.</div>
<h4>Komunikat w sprawie organizacji ruchu 11 listopada 2026 r.</h4>
<p>W związku z obchodami Narodowego Święta Niepodległości oraz XII Biegiem Niepodległości w środę 11 listopada w centrum miasta zostanie wprowadzona czasowa zmiana organizacji ruchu.</p>
<p><b>Zamknięcia ulic:</b></p>
<ul>
<li>w godz. 9:00–13:00 zamknięty zostanie Rynek wraz z przyległymi ulicami (o godz. 10:00 – uroczystości przy Pomniku Nieznanego Żołnierza i złożenie wieńców);</li>
<li>w godz. 11:30–15:00 zamknięta zostanie trasa biegu: al. Jana Pawła II, ul. Mickiewicza, ul. Kościuszki i Bulwar Nadwiślański (start i meta – pl. Wolności).</li>
</ul>
<p><b>Ważne dla kierowców:</b></p>
<ul>
<li>od 10 listopada od godz. 20:00 do 11 listopada do godz. 16:00 na trasie biegu obowiązuje zakaz zatrzymywania się;</li>
<li>pojazdy pozostawione na trasie zostaną odholowane na koszt właściciela;</li>
<li>objazdy zostaną oznakowane, a na skrzyżowaniach ruchem będą kierować policjanci.</li>
</ul>
<p><b>Komunikacja miejska:</b> 11 listopada autobusy i tramwaje kursują według rozkładu świątecznego. W godz. 11:30–15:00 autobusy linii 2, 7 i 15 zostaną skierowane na objazd ul. Polną i ul. Lipową; przystanki na trasie biegu będą nieczynne.</p>
<p><b>Zapraszamy:</b> o godz. 17:00 na Rynku odbędzie się koncert „Niepodległa w piosenkach” połączony ze wspólnym śpiewaniem pieśni patriotycznych. Wstęp wolny, śpiewniki zostaną rozdane przy wejściu. Przypominamy, że 11 listopada jest dniem ustawowo wolnym od pracy – większość sklepów będzie nieczynna.</p>
<div class="doc-sign">Za utrudnienia przepraszamy.</div>
<p class="doc-small">Informacja: Biuro Obsługi Mieszkańców, tel. 52 000 45 67 (pon.–pt. 8:00–16:00).</p>`
  },
  questions: [
    { type: "tf", q: "Podczas biegu można parkować na al. Jana Pawła II.", answer: false, explain: "Al. Jana Pawła II — частина траси забігу, там «obowiązuje zakaz zatrzymywania się» — заборонено навіть зупинятися." },
    { type: "choice", q: "Co stanie się z samochodem zostawionym na trasie biegu?", options: ["dostanie mandat, ale zostanie na miejscu", "zostanie odholowany na koszt właściciela", "zostanie bezpłatnie przestawiony na parking"], answer: 1, explain: "«Pojazdy pozostawione na trasie zostaną odholowane na koszt właściciela» — авто евакуюють коштом власника." },
    { type: "choice", q: "Zakaz zatrzymywania się na trasie biegu obowiązuje:", options: ["tylko 11 listopada w godz. 11:30–15:00", "od 10 listopada od 20:00 do 11 listopada do 16:00", "przez cały tydzień"], answer: 1, explain: "Заборона починає діяти напередодні ввечері: od 10 listopada od godz. 20:00 do 11 listopada do godz. 16:00." },
    { type: "gap", q: "Rynek zostanie ___ (zamknąć) w godz. 9:00–13:00.", answers: ["zamknięty"], explain: "Пасив: zostać + пасивний дієприкметник, узгоджений з підметом (Rynek — ч. р.): zamknąć → zamknięty." },
    { type: "choice", q: "Dlaczego 11 listopada trudno będzie zrobić zakupy w supermarkecie?", options: ["bo sklepy są na trasie biegu", "bo to dzień ustawowo wolny od pracy", "bo zamknięto wszystkie parkingi"], answer: 1, explain: "11 листопада — державне свято, dzień ustawowo wolny od pracy: більшість магазинів за законом зачинені." },
    { type: "gap", q: "Na Rynku o 17:00 zaplanowano wspólne ___ (śpiewać) pieśni patriotycznych.", answers: ["śpiewanie"], explain: "Віддієслівний іменник: śpiewać → śpiewanie (с. р., тому wspólne)." }
  ],
  task: {
    prompt: "Напишіть повідомлення в чат мешканців вашого будинку на ul. Mickiewicza: перекажіть головне з оголошення (пасив: zostanie zamknięta, zostaną odholowane; безособові форми: nie wolno, można), дайте практичну пораду і запросіть на концерт. Використайте сполучні слова (po pierwsze, dlatego, podsumowując…).",
    minWords: 60, maxWords: 100,
    useWords: ["zostanie", "nie wolno", "podsumowując"],
    checklist: [
      { label: "Щонайменше 2 пасивні конструкції (zostanie zamknięta, są zaproszeni…)", pattern: "(?<!\\p{L})(zosta\\p{L}*|jest|są|był\\p{L}*|będzie|będą)\\s+\\p{L}+(ny|na|ne|ni|ty|ta|te|ci|ona|one|ony|eni)(?!\\p{L})", min: 2 },
      { label: "Безособова конструкція (można, trzeba, nie wolno, należy)", pattern: "(?<!\\p{L})(można|trzeba|wolno|należy)(?!\\p{L})", min: 1 },
      { label: "Щонайменше 2 сполучні слова (po pierwsze, po drugie, dlatego, ponieważ, podsumowując…)", pattern: "(?<!\\p{L})(po pierwsze|po drugie|dlatego|jednak|natomiast|ponieważ|podsumowując|mimo że)(?!\\p{L})", min: 2 }
    ],
    model: "Drodzy sąsiedzi! Przeczytałem komunikat urzędu miasta w sprawie 11 listopada. Po pierwsze, nasza ulica Mickiewicza zostanie zamknięta od 11:30 do 15:00, ponieważ tędy prowadzi trasa Biegu Niepodległości. Po drugie, już od 10 listopada od godz. 20:00 nie wolno tu parkować – samochody pozostawione na ulicy zostaną odholowane na koszt właściciela. Dlatego proponuję przestawić auta na parking przy szkole. Autobus nr 7 pojedzie objazdem. Podsumowując: w środę lepiej chodzić pieszo! Wszyscy chętni są zaproszeni na wspólne śpiewanie na Rynku o 17:00. Pozdrawiam, Artem z m. 12"
  }
});
