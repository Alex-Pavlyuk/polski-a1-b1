// Polski A1–B1 · Copyright 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// SPDX-License-Identifier: Apache-2.0
(function () {
  "use strict";

  const C = window.COURSE;
  C.modules.sort((a, b) => a.n - b.n);
  const LESSONS = [];
  C.modules.forEach(m => m.lessons.forEach((l, k) => { l.mod = m; l.k = k; l.idx = LESSONS.length; LESSONS.push(l); }));
  const byId = id => LESSONS.find(l => l.id === id);
  // Додаткові модулі (extra: true) — необов’язкові: не входять у «наступний урок», прогрес курсу й обсяг іспитів
  const CORE = LESSONS.filter(l => !l.mod.extra);
  const EXTRA_MODS = C.modules.filter(m => m.extra);
  const modNum = m => m.extra ? EXTRA_MODS.indexOf(m) + 1 : m.n;
  const modWord = m => m.extra ? "Dodatek" : "Tydzień";
  const modLabel = m => modWord(m) + " " + modNum(m);

  // ───────────────────────── helpers ─────────────────────────
  const $ = (s, r) => (r || document).querySelector(s);
  function h(tag, attrs) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (let i = 2; i < arguments.length; i++) add(el, arguments[i]);
    return el;
  }
  function add(el, kid) {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) kid.forEach(k => add(el, k));
    else el.appendChild(typeof kid === "string" || typeof kid === "number" ? document.createTextNode(String(kid)) : kid);
  }
  function put(el) { for (let i = 1; i < arguments.length; i++) add(el, arguments[i]); return el; }
  function fill(el) { el.replaceChildren(); for (let i = 1; i < arguments.length; i++) add(el, arguments[i]); return el; }
  const ICONS = {
    speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" fill-opacity=".15"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    turtle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15c0-4 3.5-7 8-7s8 3 8 7H4z" fill="currentColor" fill-opacity=".15"/><path d="M20 15h1.5a1.5 1.5 0 0 0 0-3H20M7 15l-1 3M17 15l1 3M9 9l1.5 6M15 9l-1.5 6"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" fill-opacity=".15"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4 0 7-2.7 7-7 0-4-3-6.5-4-10-2 1.5-3 3.5-3 5.5C10.5 9 9.5 8 9 6.5 6.5 8.5 5 11.5 5 15c0 4.3 3 7 7 7z" fill="currentColor" fill-opacity=".15"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="14" rx="2" fill="currentColor" fill-opacity=".15"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z" fill="currentColor" fill-opacity=".12"/></svg>'
  };
  function icon(name) { const s = h("span", { class: "ic", "aria-hidden": "true" }); s.innerHTML = ICONS[name]; return s; }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const DIA = { "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ó": "o", "ś": "s", "ź": "z", "ż": "z" };
  const norm = s => String(s || "").toLowerCase().replace(/[„”“"«»‚’'.,!?;:()\[\]…–—-]/g, " ").replace(/\s+/g, " ").trim();
  const strip = s => s.replace(/[ąćęłńóśźż]/g, c => DIA[c]);
  // \b, \w, \W in JS regexes are ASCII-only; rewrite them so Polish letters (ł, ę, ś…) count as word characters
  const W_ = "[\\p{L}\\p{N}_]";
  function uniRe(pattern) {
    const src = String(pattern)
      .replace(/\\b/g, "(?:(?<!" + W_ + ")(?=" + W_ + ")|(?<=" + W_ + ")(?!" + W_ + "))")
      .replace(/\\w/g, W_)
      .replace(/\\W/g, "[^\\p{L}\\p{N}_]");
    return new RegExp(src, "giu");
  }
  const countWords = s => (String(s).match(/[\p{L}\d]+(?:[-'][\p{L}\d]+)*/gu) || []).length;
  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const similarity = (a, b) => { a = norm(a); b = norm(b); const L = Math.max(a.length, b.length) || 1; return 1 - lev(a, b) / L; };
  const today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const addDays = (iso, n) => { const d = new Date(iso + "T12:00:00"); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
  const pctOf = s => s && s.max ? Math.round(100 * s.score / s.max) : null;
  function plural(n, one, few, many) { const a = n % 10, b = n % 100; if (a === 1 && b !== 11) return one; if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return few; return many; }

  const GRADES = [
    [95, 6, "celujący"], [85, 5, "bardzo dobry"], [70, 4, "dobry"],
    [50, 3, "dostateczny"], [35, 2, "dopuszczający"], [0, 1, "niedostateczny"]
  ];
  const gradeOf = pct => GRADES.find(g => pct >= g[0]);

  let toastTimer;
  function toast(msg, ms) {
    let t = $(".toast"); if (!t) { t = h("div", { class: "toast", role: "status" }); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, ms || 2600);
  }

  // ───────────────────────── storage ─────────────────────────
  const KEY = "polski-krok-po-kroku-v1";
  const blank = () => ({ v: 1, updatedAt: 0, lessons: {}, srs: {}, days: {}, drafts: {}, exam: null, examRun: null, settings: { rate: 0.9, voice: "" } });
  const Store = {
    data: blank(),
    load() {
      try { const raw = localStorage.getItem(KEY); if (raw) this.data = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* storage blocked */ }
    },
    save() {
      this.data.updatedAt = Date.now();
      try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* ignore */ }
      Cloud.schedule();
    },
    lesson(id) { return this.data.lessons[id] || (this.data.lessons[id] = { step: 0, sec: {}, done: false }); },
    markDay(kind) { const d = today(); const day = this.data.days[d] || (this.data.days[d] = { l: 0, r: 0 }); day[kind] = (day[kind] || 0) + 1; }
  };

  const Cloud = {
    ref: null, timer: null, busy: false, pending: false, status: "local",
    async init() {
      if (!window.claude || typeof window.claude.use !== "function") return;
      try {
        const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
        if (!db || !user) return;
        const id = await user.id();
        if (!id) return;
        this.ref = db.doc("data/users/" + id + "/progress");
        const snap = await this.ref.get();
        const remote = snap.exists ? snap.data() : null;
        if (remote && (remote.updatedAt || 0) > (Store.data.updatedAt || 0)) {
          Store.data = Object.assign(blank(), JSON.parse(JSON.stringify(remote)));
          try { localStorage.setItem(KEY, JSON.stringify(Store.data)); } catch (e) { /* ignore */ }
          this.status = "cloud"; App.refresh();
        } else {
          this.status = "cloud";
          if (Store.data.updatedAt && (!remote || Store.data.updatedAt > (remote.updatedAt || 0))) this.schedule();
          App.refreshBar();
        }
      } catch (e) { this.ref = null; }
    },
    schedule() { if (!this.ref) return; clearTimeout(this.timer); this.timer = setTimeout(() => this.flush(), 1500); },
    async flush() {
      if (!this.ref) return;
      if (this.busy) { this.pending = true; return; }
      this.busy = true;
      try { await this.ref.set(JSON.parse(JSON.stringify(Store.data))); }
      catch (e) { if (e && (e.code === "invalid_argument" || e.code === "revoked" || e.code === "not_granted")) { this.ref = null; this.status = "local"; App.refreshBar(); } }
      this.busy = false;
      if (this.pending) { this.pending = false; this.flush(); }
    }
  };

  // ───────────────────────── Claude (sample) ─────────────────────────
  const AI = {
    fn: null, off: false,
    async init() {
      if (!window.claude || typeof window.claude.use !== "function") return;
      try { this.fn = await window.claude.use("sample"); } catch (e) { this.fn = null; }
      if (this.fn) document.querySelectorAll("[data-ai]").forEach(el => { el.hidden = false; });
    },
    get ready() { return !!this.fn && !this.off; },
    errText(e) {
      const code = e && e.code;
      if (code === "not_granted" || code === "sampling_disabled" || code === "not_declared" || code === "capability_disabled" || code === "capability_removed") {
        this.off = true; document.querySelectorAll("[data-ai]").forEach(el => { el.hidden = true; });
        return "Перевірка через Claude недоступна в цьому вікні.";
      }
      if (code === "rate_limited") return "Забагато запитів поспіль. Спробуйте за хвилину.";
      if (code === "session_expired") return "Потрібно знову увійти в Claude.";
      if (code === "invalid_json") return "Claude відповів у неочікуваному форматі. Натисніть ще раз.";
      if (code === "cancelled") return "";
      return "Не вдалося зв’язатися з Claude. Спробуйте ще раз.";
    }
  };
  function aiShow(el) { el.setAttribute("data-ai", ""); el.hidden = !AI.ready; return el; }

  // ───────────────────────── external checkers ─────────────────────────
  // Only outside claude.ai (GitHub Pages, local build): the claude.ai viewer blocks requests to other hosts.
  // REVIEW_API — the Cloudflare Worker from worker/ (POST /review); empty string hides the AI essay check.
  const REVIEW_API = "https://polski-essay-review.polskia1b1.workers.dev/review";
  const EXTERNAL = !window.claude;
  const LT_API = "https://api.languagetool.org/v2/check";
  async function ltCheck(text) {
    const r = await fetch(LT_API, { method: "POST", body: new URLSearchParams({ text: text, language: "pl-PL", motherTongue: "uk-UA" }) });
    if (r.status === 429) throw { code: "rate_limited" };
    if (!r.ok) throw { code: "http" };
    const d = await r.json();
    return (d.matches || []).map(m => ({
      offset: m.offset, length: m.length, message: m.message || m.shortMessage || "",
      repl: (m.replacements || []).slice(0, 3).map(x => x.value),
      cat: m.rule && m.rule.category ? m.rule.category.name : ""
    }));
  }
  async function workerReview(payload) {
    const r = await fetch(REVIEW_API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (r.status === 429) throw { code: "rate_limited" };
    if (!r.ok) throw { code: "http", status: r.status };
    return sanitizeReview(await r.json());
  }
  function extErrText(e) {
    if (e && e.code === "rate_limited") return "Забагато перевірок поспіль. Зачекайте хвилину й спробуйте знову.";
    if (e && e.status === 503) return "Безкоштовний ліміт AI-перевірок на сьогодні вичерпано або модель тимчасово недоступна. Спробуйте пізніше.";
    if (e && e.status === 502) return "Модель відповіла в неочікуваному форматі. Натисніть ще раз.";
    if (e && e.status === 400) return "Текст надто короткий для оцінювання. Напишіть хоча б кілька речень.";
    return "Не вдалося зв’язатися із сервісом перевірки. Перевірте інтернет і спробуйте ще раз.";
  }
  // a review of a text shorter than the task asks for: say so above the grade
  function shortNotice(out, n, w) {
    if (n >= w.minWords) return;
    out.insertBefore(h("div", { class: "notice" }, "Текст коротший, ніж потрібно в завданні: " + n + " з " + w.minWords + "–" + w.maxWords + " слів. Через це оцінка нижча — допишіть твір і перевірте ще раз."), out.firstChild);
  }
  function renderLT(out, text, matches) {
    if (!matches.length) { fill(out, feedback("ok", "Dobrze!", "LanguageTool не знайшов помилок. Автоматична перевірка ловить не все, тож порівняйте текст і зі зразком.")); return; }
    const marked = h("div", { class: "lt-text" });
    let pos = 0;
    matches.slice().sort((a, b) => a.offset - b.offset).forEach(m => {
      if (m.offset < pos) return;
      add(marked, text.slice(pos, m.offset));
      add(marked, h("mark", { class: "lt-err", title: m.message + (m.repl.length ? " → " + m.repl.join(" / ") : "") }, text.slice(m.offset, m.offset + m.length)));
      pos = m.offset + m.length;
    });
    add(marked, text.slice(pos));
    fill(out,
      h("div", { class: "eyebrow" }, "LanguageTool · можливих помилок: " + matches.length),
      marked,
      h("div", { class: "corrs" }, matches.map(m => h("div", { class: "corr-row" },
        h("span", null, h("span", { class: "w" }, text.slice(m.offset, m.offset + m.length) || "…"), m.repl.length ? ["  →  ", h("span", { class: "r" }, m.repl.join(" / "))] : null),
        h("span", { class: "y" }, m.message), m.cat ? h("span", { class: "small muted" }, m.cat) : null))),
      h("p", { class: "small muted" }, "Пояснення LanguageTool — польською. Автоматична перевірка знаходить не всі помилки й іноді помиляється."));
  }
  // grammar (LanguageTool) + AI grade (Cloudflare Worker) buttons for a writing box; returns [] inside claude.ai
  function externalCheckButtons(o) {
    if (!EXTERNAL) return [];
    const lt = h("button", { class: "btn", type: "button" }, icon("check"), "Граматика (LanguageTool)");
    lt.addEventListener("click", async () => {
      const text = o.text();
      if (countWords(text) < 5) { toast("Для перевірки напишіть хоча б 5 слів (зараз " + countWords(text) + ")."); return; }
      lt.disabled = true; fill(o.ltOut, h("div", { class: "thinking" }, "LanguageTool перевіряє текст…"));
      try { renderLT(o.ltOut, text, await ltCheck(text)); }
      catch (e) { fill(o.ltOut, h("div", { class: "notice" }, extErrText(e))); }
      setTimeout(() => { lt.disabled = false; }, 3000);
    });
    if (!REVIEW_API) return [lt];
    const ai = h("button", { class: "btn primary", type: "button" }, icon("spark"), "Оцінити твір (AI)");
    ai.addEventListener("click", async () => {
      const text = o.text();
      const n = countWords(text);
      if (n < 5) { toast("Для оцінювання напишіть хоча б 5 слів (зараз " + n + ")."); return; }
      ai.disabled = true; fill(o.out, h("div", { class: "thinking" }, "AI-екзаменатор читає ваш текст… зазвичай 10–30 секунд."));
      try {
        const rv = await workerReview({ text: text, prompt: o.w.prompt, level: o.level, minWords: o.w.minWords, maxWords: o.w.maxWords, useWords: o.w.useWords || [], topic: o.topic });
        renderReview(o.out, rv);
        shortNotice(o.out, n, o.w);
        put(o.out, h("p", { class: "small muted" }, "Оцінку дала відкрита модель Gemma (Cloudflare Workers AI). Вона може помилятися — звіряйтеся зі зразком."));
        o.onReview(rv);
      } catch (e) { fill(o.out, h("div", { class: "notice" }, extErrText(e))); }
      ai.disabled = false;
    });
    return [lt, ai];
  }

  // ───────────────────────── speech ─────────────────────────
  const Speech = {
    voices: [], all: 0, voice: null, ok: "speechSynthesis" in window, current: null, warned: false,
    linux: /Linux/.test(navigator.userAgent) && !/Android/.test(navigator.userAgent),
    // Where to get a Polish voice on this OS; Linux browsers take voices from speech-dispatcher, which Ubuntu often lacks.
    get help() {
      return this.linux
        ? "На Ubuntu встановіть системні голоси: sudo apt install speech-dispatcher espeak-ng — і перезапустіть браузер. Найпростіше — Google Chrome (не Chromium зі Snap): у ньому польський голос Google є одразу."
        : "На macOS: Системні параметри → Доступність → Озвучений вміст → Голоси → Polski (Zosia). У Chrome польський голос Google є за замовчуванням.";
    },
    fail() { if (this.warned) return; this.warned = true; toast("Звук не відтворюється. " + this.help, 12000); },
    init() {
      if (!this.ok) return;
      const load = () => {
        const all = speechSynthesis.getVoices();
        this.all = all.length;
        this.voices = all.filter(v => /^pl(-|_|$)/i.test(v.lang));
        const pref = Store.data.settings.voice;
        this.voice = this.voices.find(v => v.name === pref) ||
          this.voices.find(v => /zosia|ewa|paulina|google/i.test(v.name)) || this.voices[0] || null;
        App.refreshVoiceNotice();
      };
      load();
      speechSynthesis.addEventListener ? speechSynthesis.addEventListener("voiceschanged", load) : (speechSynthesis.onvoiceschanged = load);
    },
    speak(text, opts) {
      opts = opts || {};
      if (!this.ok) { toast("Браузер не вміє озвучувати текст."); return Promise.resolve(); }
      const busy = speechSynthesis.speaking || speechSynthesis.pending;
      speechSynthesis.cancel();
      if (this.current && this.current.el) this.current.el.classList.remove("speaking");
      return new Promise(resolve => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "pl-PL";
        if (this.voice) u.voice = this.voice;
        u.rate = (opts.slow ? 0.62 : 1) * (Store.data.settings.rate || 0.9);
        let started = false, watchdog = 0;
        const done = () => { clearTimeout(watchdog); if (opts.el) opts.el.classList.remove("speaking"); resolve(); };
        u.onstart = () => { started = true; clearTimeout(watchdog); };
        u.onend = done;
        u.onerror = e => { if (e.error !== "interrupted" && e.error !== "canceled") this.fail(); done(); };
        if (opts.el) opts.el.classList.add("speaking");
        this.current = { u, el: opts.el };
        // Chrome on Linux drops an utterance queued right after cancel(), so give the engine a beat.
        setTimeout(() => {
          if (this.current.u !== u) return done();
          speechSynthesis.resume();
          speechSynthesis.speak(u);
          // With no speech engine the utterance neither starts nor errors; don't leave the learner waiting in silence.
          watchdog = setTimeout(() => { if (!started && this.current.u === u) { speechSynthesis.cancel(); this.fail(); done(); } }, 5000);
        }, busy ? 120 : 0);
      });
    },
    stop() { if (this.ok) speechSynthesis.cancel(); }
  };
  function spkBtn(text, opts) {
    opts = opts || {};
    const b = h("button", { class: "iconbtn", type: "button", title: opts.slow ? "Повільно" : "Послухати", "aria-label": opts.slow ? "Послухати повільно" : "Послухати" }, icon(opts.slow ? "turtle" : "speaker"));
    b.addEventListener("click", e => { e.stopPropagation(); Speech.speak(typeof text === "function" ? text() : text, opts); });
    return b;
  }
  const Rec = {
    Ctor: window.SpeechRecognition || window.webkitSpeechRecognition,
    blocked: false,
    get ok() { return !!this.Ctor && !this.blocked; },
    get hint() { return window.claude ? "Щоб тренувати вимову з мікрофоном, відкрийте локальну версію курсу (файл polski-a1-b1.html) у Chrome." : "Дозвольте доступ до мікрофона в налаштуваннях сайту в Chrome (значок ліворуч від адреси) і оновіть сторінку."; },
    listen() {
      return new Promise((resolve, reject) => {
        let r;
        try { r = new this.Ctor(); } catch (e) { this.blocked = true; return reject("unsupported"); }
        r.lang = "pl-PL"; r.interimResults = false; r.maxAlternatives = 3;
        let got = false;
        r.onresult = e => { got = true; const alts = []; for (let i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript); resolve(alts); };
        r.onerror = e => { if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture") this.blocked = true; reject(e.error); };
        r.onend = () => { if (!got) reject("no-speech"); };
        try { r.start(); } catch (e) { reject("start"); }
      });
    }
  };
  // make every .pl element inside a container speakable
  function wireSpeakables(root) {
    root.querySelectorAll(".pl").forEach(el => {
      el.setAttribute("role", "button"); el.tabIndex = 0; el.title = "Послухати";
      const go = () => Speech.speak(el.textContent.replace(/[—–]\s*$/, ""), { el });
      el.addEventListener("click", go);
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
  }

  // ───────────────────────── exercise items ─────────────────────────
  // render(item, {onDone(score, detail), exam}) → element. score ∈ [0,1].
  function feedback(kind, head, ...body) {
    return h("div", { class: "feedback " + kind, role: "status" }, h("span", { class: "fh" }, head), ...body);
  }
  const PRAISE = ["Świetnie!", "Brawo!", "Dobrze!", "Super!", "Doskonale!", "Tak jest!"];
  const praise = () => PRAISE[Math.floor(Math.random() * PRAISE.length)];
  function qText(q) {
    const parts = String(q).split("___");
    const el = h("div", { class: "q" });
    parts.forEach((p, i) => { add(el, p); if (i < parts.length - 1) add(el, h("span", { class: "blank" })); });
    return el;
  }
  function explainEl(item) { return item.explain ? h("div", { class: "small" }, item.explain) : null; }
  function matchAnswer(val, answers) {
    const v = norm(val);
    if (!v) return 0;
    if (answers.some(a => norm(a) === v)) return 1;
    if (answers.some(a => strip(norm(a)) === strip(v))) return 0.5;
    return 0;
  }

  const Items = {
    choice(item, o) {
      const box = h("div", { class: "item" }, qText(item.q));
      const opts = h("div", { class: "opts" });
      const fb = h("div");
      const order = shuffle(item.options.map((t, i) => i));
      order.forEach(i => {
        const b = h("button", { class: "opt", type: "button" }, item.options[i]);
        b.addEventListener("click", () => {
          const right = i === item.answer;
          opts.querySelectorAll("button").forEach(x => { x.disabled = true; });
          if (o.exam) { b.classList.add("picked"); fill(fb, feedback("neutral", "Zapisano", "Відповідь прийнято.")); }
          else {
            b.classList.add(right ? "right" : "wrong");
            if (!right) opts.children[order.indexOf(item.answer)].classList.add("right");
            fill(fb, right ? feedback("ok", praise(), explainEl(item)) : feedback("bad", "Niestety…", h("div", null, "Правильно: ", h("span", { class: "corr" }, item.options[item.answer])), explainEl(item)));
          }
          o.onDone(right ? 1 : 0, { given: item.options[i] });
        });
        opts.appendChild(b);
      });
      put(box, opts, fb);
      return box;
    },
    tf(item, o) {
      const it = Object.assign({}, item, { options: ["Prawda", "Fałsz"], answer: item.answer ? 0 : 1 });
      const box = h("div", { class: "item" }, h("div", { class: "q" }, item.q));
      const opts = h("div", { class: "opts" });
      const fb = h("div");
      it.options.forEach((t, i) => {
        const b = h("button", { class: "opt", type: "button" }, t + (i === 0 ? " — правда" : " — неправда"));
        b.addEventListener("click", () => {
          const right = i === it.answer;
          opts.querySelectorAll("button").forEach(x => { x.disabled = true; });
          if (o.exam) { b.classList.add("picked"); fill(fb, feedback("neutral", "Zapisano", "Відповідь прийнято.")); }
          else {
            b.classList.add(right ? "right" : "wrong");
            if (!right) opts.children[it.answer].classList.add("right");
            fill(fb, right ? feedback("ok", praise(), explainEl(item)) : feedback("bad", "Niestety…", explainEl(item)));
          }
          o.onDone(right ? 1 : 0, { given: t });
        });
        opts.appendChild(b);
      });
      put(box, opts, fb);
      return box;
    },
    gap(item, o) {
      const parts = String(item.q).split("___");
      const inp = h("input", { class: "inp inline", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Відповідь" });
      const q = h("div", { class: "q" }, parts[0], inp, parts.slice(1).join("___"));
      const fb = h("div");
      const btn = h("button", { class: "btn primary sm", type: "button" }, "Перевірити");
      const check = () => {
        if (!inp.value.trim()) { inp.focus(); return; }
        const s = matchAnswer(inp.value, item.answers);
        inp.disabled = true; btn.disabled = true;
        if (o.exam) fill(fb, feedback("neutral", "Zapisano", "Відповідь прийнято."));
        else {
          inp.classList.add(s === 1 ? "ok" : s ? "half" : "bad");
          fill(fb, s === 1 ? feedback("ok", praise(), item.answers.length > 1 ? h("div", { class: "small" }, "Можливі відповіді: " + item.answers.join(" / ")) : null, explainEl(item))
            : s ? feedback("half", "Prawie!", h("div", null, "Перевірте діакритику: ", h("span", { class: "corr" }, item.answers[0])), explainEl(item))
              : feedback("bad", "Niestety…", h("div", null, "Правильно: ", h("span", { class: "corr" }, item.answers.join(" / "))), explainEl(item)));
        }
        o.onDone(s, { given: inp.value });
      };
      inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      btn.addEventListener("click", check);
      setTimeout(() => { if (!o.noFocus) inp.focus({ preventScroll: true }); }, 30);
      return h("div", { class: "item" }, q, h("div", { class: "row" }, btn), fb);
    },
    translate(item, o) {
      const inp = h("textarea", { class: "inp", rows: "2", autocomplete: "off", spellcheck: "false", placeholder: "Напишіть польською…", "aria-label": "Переклад" });
      const fb = h("div");
      const btn = h("button", { class: "btn primary sm", type: "button" }, "Перевірити");
      const check = () => {
        if (!inp.value.trim()) { inp.focus(); return; }
        const s = matchAnswer(inp.value, item.answers);
        inp.disabled = true; btn.disabled = true;
        if (s === 1) { inp.classList.add("ok"); fill(fb, feedback("ok", praise(), explainEl(item))); o.onDone(1, { given: inp.value }); return; }
        if (s) { inp.classList.add("half"); fill(fb, feedback("half", "Prawie!", h("div", null, "Перевірте діакритику: ", h("span", { class: "corr" }, item.answers[0])), explainEl(item))); o.onDone(0.5, { given: inp.value }); return; }
        inp.classList.add("bad");
        const accept = h("button", { class: "btn sm", type: "button" }, "Мій варіант теж правильний");
        const ask = aiShow(h("button", { class: "btn sm", type: "button" }, icon("spark"), "Запитати Claude"));
        const aiOut = h("div", { class: "small answer" });
        // a wrong answer is reported as 0 right away; "accept" or Claude's verdict can upgrade it to 1 once
        let upgraded = false;
        const finish = sc => { if (sc === 0) { o.onDone(0, { given: inp.value }); return; } if (upgraded) return; upgraded = true; accept.disabled = true; o.onDone(1, { given: inp.value }); };
        accept.addEventListener("click", () => { finish(1); toast("Зараховано"); });
        ask.addEventListener("click", async () => {
          ask.disabled = true; aiOut.className = "small thinking"; aiOut.textContent = "Claude перевіряє…";
          try {
            const r = await AI.fn.json(
              "Ти викладач польської для україномовних учнів. Завдання: перекласти польською фразу «" + item.ru + "». Еталон(и): " + item.answers.join(" | ") +
              ". Відповідь учня: «" + inp.value + "». Чи правильна відповідь учня за змістом і граматикою (природна польська, допускаються синоніми та інший порядок слів)? " +
              'Ответь только JSON: {"correct": true|false, "comment": "1–2 речення українською: що не так або чому правильно"}', { modelTier: "quick" });
            aiOut.className = "small answer"; aiOut.textContent = (r.correct ? "Claude: правильно. " : "Claude: є помилка. ") + (r.comment || "");
            if (r.correct) finish(1);
          } catch (e) { aiOut.className = "small"; aiOut.textContent = AI.errText(e); ask.disabled = false; }
        });
        fill(fb, feedback("bad", "Sprawdźmy…", h("div", null, "Еталон: ", h("span", { class: "corr" }, item.answers.join(" / "))), explainEl(item), h("div", { class: "row" }, accept, ask), aiOut));
        finish(0);
      };
      btn.addEventListener("click", check);
      inp.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); check(); } });
      return h("div", { class: "item" }, h("div", { class: "instr" }, "Перекладіть"), h("div", { class: "q" }, item.ru), inp, h("div", { class: "row" }, btn), fb);
    },
    order(item, o) {
      const target = item.words.join(" ");
      let pool = shuffle(item.words.map((w, i) => ({ w, i })));
      if (pool.map(x => x.w).join(" ") === target && item.words.length > 2) pool = pool.slice(1).concat(pool[0]);
      const picked = [];
      const line = h("div", { class: "answer-line", "aria-label": "Ваше речення" });
      const bank = h("div", { class: "chips" });
      const fb = h("div");
      const btn = h("button", { class: "btn primary sm", type: "button", disabled: true }, "Перевірити");
      const reset = h("button", { class: "btn ghost sm", type: "button" }, "Скинути");
      let locked = false;
      const draw = () => {
        fill(line, ...picked.map((p, k) => {
          const b = h("button", { class: "wchip", type: "button" }, p.w);
          b.addEventListener("click", () => { if (locked) return; picked.splice(k, 1); draw(); });
          return b;
        }));
        fill(bank, ...pool.map(p => {
          const used = picked.includes(p);
          const b = h("button", { class: "wchip" + (used ? " used" : ""), type: "button", disabled: used || locked }, p.w);
          b.addEventListener("click", () => { if (locked) return; picked.push(p); draw(); });
          return b;
        }));
        btn.disabled = locked || picked.length !== pool.length;
        bank.hidden = locked;
      };
      btn.addEventListener("click", () => {
        locked = true; draw(); reset.disabled = true;
        const given = picked.map(p => p.w).join(" ");
        const ok = [target].concat(item.alt || []).some(a => norm(a) === norm(given));
        if (o.exam) fill(fb, feedback("neutral", "Zapisano", "Відповідь прийнято."));
        else {
          line.classList.add(ok ? "ok" : "bad");
          fill(fb, ok ? feedback("ok", praise(), explainEl(item)) : feedback("bad", "Niestety…", h("div", null, "Правильно: ", h("span", { class: "corr" }, target)), explainEl(item)));
        }
        o.onDone(ok ? 1 : 0, { given });
      });
      reset.addEventListener("click", () => { picked.length = 0; draw(); });
      draw();
      return h("div", { class: "item" }, h("div", { class: "instr" }, "Складіть речення"), item.ru ? h("div", { class: "q" }, item.ru) : null, line, bank, h("div", { class: "row" }, btn, reset), fb);
    },
    match(item, o) {
      const left = shuffle(item.pairs.map((p, i) => i));
      const right = shuffle(item.pairs.map((p, i) => i));
      let sel = null, mistakes = 0, solved = 0;
      const fb = h("div");
      const lcol = h("div", { class: "col" }), rcol = h("div", { class: "col" });
      const lb = {}, rb = {};
      left.forEach(i => {
        const b = h("button", { class: "opt", type: "button" }, item.pairs[i][0]);
        b.addEventListener("click", () => { if (b.disabled) return; Object.values(lb).forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = i; Speech.speak(item.pairs[i][0]); });
        lb[i] = b; lcol.appendChild(b);
      });
      right.forEach(i => {
        const b = h("button", { class: "opt", type: "button" }, item.pairs[i][1]);
        b.addEventListener("click", () => {
          if (sel == null || b.disabled) return;
          if (sel === i) {
            [lb[i], b].forEach(x => { x.classList.remove("sel"); x.classList.add("right"); x.disabled = true; });
            sel = null; solved++;
            if (solved === item.pairs.length) {
              const s = Math.max(0, (item.pairs.length - mistakes) / item.pairs.length);
              fill(fb, mistakes ? feedback("half", "Gotowe", "Помилок: " + mistakes, explainEl(item)) : feedback("ok", praise(), explainEl(item)));
              o.onDone(s, { given: "помилок: " + mistakes });
            }
          } else {
            mistakes++; b.classList.add("flash"); setTimeout(() => b.classList.remove("flash"), 450);
          }
        });
        rb[i] = b; rcol.appendChild(b);
      });
      return h("div", { class: "item" }, h("div", { class: "instr" }, "З’єднайте пари"), item.q ? h("div", { class: "q" }, item.q) : null, h("div", { class: "match" }, lcol, rcol), fb);
    },

    // pronunciation
    listen(item, o) {
      const res = h("div", { class: "rec-result" });
      const mic = h("button", { class: "btn sm", type: "button" }, icon("mic"), "Вимовити");
      mic.hidden = !Rec.ok;
      let reported = false;
      const report = s => { if (!reported) { reported = true; o.onDone(s); } };
      mic.addEventListener("click", async () => {
        mic.disabled = true; res.className = "rec-result thinking"; res.textContent = "Говоріть…";
        try {
          const alts = await Rec.listen();
          const best = alts.map(a => ({ a, s: similarity(a, item.text) })).sort((x, y) => y.s - x.s)[0];
          const pct = Math.round(best.s * 100);
          res.className = "rec-result";
          fill(res, feedback(pct >= 85 ? "ok" : pct >= 60 ? "half" : "bad", pct >= 85 ? praise() : pct >= 60 ? "Prawie!" : "Jeszcze raz",
            h("div", null, "Розпізнано: «" + best.a + "» — збіг " + pct + "%")));
        } catch (err) {
          res.className = "rec-result small muted";
          res.textContent = Rec.blocked ? "Мікрофон тут недоступний. " + Rec.hint + " А поки повторюйте вголос за диктором — це теж працює." : "Не розчув. Спробуйте ще раз, ближче до мікрофона.";
          if (Rec.blocked) mic.hidden = true;
        }
        mic.disabled = false; report(1);
      });
      const done = h("button", { class: "btn ghost sm", type: "button" }, icon("check"), "Повторив(ла) вголос");
      done.addEventListener("click", () => { done.disabled = true; report(1); });
      return h("div", { class: "item say" },
        h("div", { class: "instr" }, "Послухайте й повторіть"),
        h("div", { class: "big" }, item.text),
        item.ru ? h("div", { class: "muted" }, item.ru) : null,
        item.note ? h("div", { class: "small muted" }, item.note) : null,
        h("div", { class: "row" }, spkBtn(item.text), spkBtn(item.text, { slow: true }), mic, done), res);
    },
    minimal(item, o) {
      const target = Math.floor(Math.random() * item.options.length);
      const opts = h("div", { class: "opts" });
      const fb = h("div");
      item.options.forEach((t, i) => {
        const b = h("button", { class: "opt", type: "button" }, t, item.ru && item.ru[i] ? h("span", { class: "small muted" }, " — " + item.ru[i]) : null);
        b.addEventListener("click", () => {
          opts.querySelectorAll("button").forEach(x => { x.disabled = true; });
          const right = i === target;
          b.classList.add(right ? "right" : "wrong");
          if (!right) opts.children[target].classList.add("right");
          fill(fb, right ? feedback("ok", praise()) : feedback("bad", "Niestety…", "Звучало: " + item.options[target]),
            h("div", { class: "speakers" }, item.options.map(w => h("span", { class: "row small" }, spkBtn(w), w))));
          o.onDone(right ? 1 : 0);
        });
        opts.appendChild(b);
      });
      return h("div", { class: "item" }, h("div", { class: "instr" }, "Яке слово прозвучало?"),
        h("div", { class: "row" }, spkBtn(() => item.options[target]), spkBtn(() => item.options[target], { slow: true }), h("span", { class: "small muted" }, "Можна слухати скільки завгодно")), opts, fb);
    },
    stress(item, o) {
      const syl = h("div", { class: "syl" });
      const fb = h("div");
      item.syllables.forEach((s, i) => {
        const b = h("button", { type: "button" }, s);
        b.addEventListener("click", () => {
          syl.querySelectorAll("button").forEach(x => { x.disabled = true; });
          const alt = (item.accept || []).includes(i);
          const right = i === item.answer || alt;
          b.classList.add(right ? "right" : "wrong");
          if (i !== item.answer) syl.children[item.answer].classList.add("right");
          if (alt) {
            fill(fb, feedback("ok", "Też dobrze!", "Так кажуть у живому мовленні. За нормою наголос: " + item.syllables.map((x, k) => k === item.answer ? x.toUpperCase() : x).join("-") + ".", item.explain ? h("div", { class: "small" }, item.explain) : null));
            o.onDone(1);
            return;
          }
          fill(fb, right ? feedback("ok", praise(), item.explain ? h("div", { class: "small" }, item.explain) : null)
            : feedback("bad", "Niestety…", "Наголос: " + item.syllables.map((x, k) => k === item.answer ? x.toUpperCase() : x).join("-"), item.explain ? h("div", { class: "small" }, item.explain) : null));
          o.onDone(right ? 1 : 0);
        });
        syl.appendChild(b);
      });
      return h("div", { class: "item" }, h("div", { class: "instr" }, "Де наголос? Натисніть на наголошений склад"), syl, h("div", { class: "row" }, spkBtn(item.word), h("span", { class: "small muted" }, "Спершу подумайте, потім перевірте на слух")), fb);
    },
    dictation(item, o) {
      const inp = h("textarea", { class: "inp", rows: "2", spellcheck: "false", autocomplete: "off", placeholder: "Пишіть те, що чуєте…", "aria-label": "Диктант" });
      const fb = h("div");
      const btn = h("button", { class: "btn primary sm", type: "button" }, "Перевірити");
      btn.addEventListener("click", () => {
        if (!inp.value.trim()) { inp.focus(); return; }
        inp.disabled = true; btn.disabled = true;
        const tw = norm(item.text).split(" "), uw = norm(inp.value).split(" ");
        // word-level LCS to mark missed words
        const L = Array.from({ length: tw.length + 1 }, () => new Array(uw.length + 1).fill(0));
        for (let i = tw.length - 1; i >= 0; i--) for (let j = uw.length - 1; j >= 0; j--) L[i][j] = tw[i] === uw[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
        const hit = new Set(); let i = 0, j = 0;
        while (i < tw.length && j < uw.length) { if (tw[i] === uw[j]) { hit.add(i); i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
        const ratio = hit.size / tw.length;
        const sim = similarity(inp.value, item.text);
        const s = ratio === 1 ? 1 : sim >= 0.9 ? 0.5 : 0;
        const origWords = item.text.split(/\s+/);
        const diff = h("div", { class: "diff" }, origWords.map((w, k) => [h("span", { class: hit.has(k) ? "hit" : "miss" }, w), " "]));
        fill(fb, feedback(s === 1 ? "ok" : s ? "half" : "bad", s === 1 ? praise() : s ? "Prawie!" : "Sprawdźmy", diff,
          h("div", { class: "small muted" }, "Підкреслено слова, які не збіглися. Правильно: " + hit.size + " з " + tw.length)));
        o.onDone(s, { given: inp.value });
      });
      return h("div", { class: "item" }, h("div", { class: "instr" }, "Диктант: прослухайте й запишіть"),
        h("div", { class: "row" }, spkBtn(item.text), spkBtn(item.text, { slow: true })), inp, h("div", { class: "row" }, btn), fb);
    }
  };
  const SCORED_PRON = { minimal: 1, stress: 1, dictation: 1 };

  // ───────────────────────── error notebook ─────────────────────────
  // key: "<lessonId>|ex|<i>" or "<lessonId>|pr|<i>" for course items; "gen|<lessonId>|<hash>" for Claude-made items (stored inline)
  const Errors = {
    get map() { return Store.data.errors || (Store.data.errors = {}); },
    add(key, item, src) {
      const m = this.map;
      const e = m[key] || (m[key] = { n: 0, src: src || key.split("|")[key.startsWith("gen|") ? 1 : 0] });
      e.n++; e.at = today();
      if (key.startsWith("gen|")) e.item = item;
      const keys = Object.keys(m);
      if (keys.length > 250) { keys.sort((a, b) => (m[a].at || "") < (m[b].at || "") ? -1 : 1); delete m[keys[0]]; }
    },
    remove(key) { delete this.map[key]; },
    item(key) {
      const e = this.map[key]; if (!e) return null;
      if (e.item) return e.item;
      const [lid, sec, i] = key.split("|"); const l = byId(lid); if (!l) return null;
      return sec === "ex" ? l.exercises[+i] : sec === "pr" ? l.pronunciation.items[+i] : null;
    },
    keys() { return Object.keys(this.map).filter(k => this.item(k)); },
    count() { return this.keys().length; },
    byLesson() { const r = {}; this.keys().forEach(k => { const s = this.map[k].src; r[s] = (r[s] || 0) + 1; }); return r; }
  };
  function hashStr(s) { let x = 0; for (let i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) | 0; return (x >>> 0).toString(36); }

  // ───────────────────────── Claude-made practice ─────────────────────────
  function sanitizeItem(x) {
    if (!x || typeof x !== "object") return null;
    const s = v => typeof v === "string" && v.trim().length > 0;
    const explain = s(x.explain) ? String(x.explain) : "";
    if (x.type === "choice" && s(x.q) && Array.isArray(x.options) && x.options.length >= 2 && x.options.every(s) &&
      Number.isInteger(x.answer) && x.answer >= 0 && x.answer < x.options.length && new Set(x.options).size === x.options.length)
      return { type: "choice", q: String(x.q), options: x.options.map(String), answer: x.answer, explain };
    if (x.type === "gap" && s(x.q) && String(x.q).split("___").length === 2 && Array.isArray(x.answers) && x.answers.length && x.answers.every(s))
      return { type: "gap", q: String(x.q), answers: x.answers.map(String), explain };
    if (x.type === "order" && Array.isArray(x.words) && x.words.length >= 3 && x.words.length <= 14 && x.words.every(s))
      return { type: "order", ru: s(x.ru) ? String(x.ru) : "", words: x.words.map(String), alt: Array.isArray(x.alt) ? x.alt.filter(s).map(String) : [], explain };
    if (x.type === "match" && Array.isArray(x.pairs) && x.pairs.length >= 3 && x.pairs.every(p => Array.isArray(p) && p.length === 2 && s(p[0]) && s(p[1])) &&
      new Set(x.pairs.map(p => p[0])).size === x.pairs.length && new Set(x.pairs.map(p => p[1])).size === x.pairs.length)
      return { type: "match", q: s(x.q) ? String(x.q) : "", pairs: x.pairs.map(p => [String(p[0]), String(p[1])]), explain };
    return null;
  }
  async function genItems(l, n, focusItems) {
    const samples = l.exercises.filter(e => e.type !== "translate").slice(0, 4);
    const gram = l.grammar.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 2400);
    const prompt = "Ти — автор вправ із польської мови для україномовних учнів рівня " + l.mod.level + ".\n" +
      "Тема уроку: «" + l.grammar.title + "».\nКонспект теми: " + gram + "\nЛексика уроку: " + l.vocab.map(v => v.pl).join(", ") + ".\n" +
      (focusItems && focusItems.length ? "Учень помилився в цих завданнях — зроби схожі на них, на ту саму граматику:\n" + JSON.stringify(focusItems).slice(0, 3000) + "\n" : "") +
      "Склади " + n + " НОВИХ вправ (не повторюй приклади нижче), змішай типи choice, gap і order (match — не більше одного). Формат — точно як у прикладах:\n" +
      JSON.stringify(samples) + "\n" +
      "Правила: польська бездоганна, з діакритикою; у gap рівно один ___ і підказка в дужках (початкова форма, особа, рід), answers — УСІ допустимі варіанти; " +
      "у choice 3 варіанти й рівно один правильний, answer — його індекс із нуля; в order words — слова в правильному порядку, пунктуація приклеєна до слів, alt — інші природні порядки; " +
      "explain — 1–2 речення українською, чому так. Відповідай ТІЛЬКИ JSON-масивом вправ.";
    const res = await AI.fn.json(prompt, { cache: false });
    const arr = Array.isArray(res) ? res : res && Array.isArray(res.items) ? res.items : [];
    return arr.map(sanitizeItem).filter(Boolean).slice(0, n);
  }

  // A sequence player: shows items one by one with progress and a Next button.
  function sequence(items, opts) {
    // opts: { onFinish(score, max, results), exam, track(i, item) → error-notebook key | null, src, fixMode }
    const wrap = h("div", { class: "ex-wrap" });
    const results = [];
    const flagged = [];
    let i = 0;
    const prog = h("div", { class: "ex-progress" });
    const bar = h("div", { class: "bar" }, h("i", { style: "width:0%" }));
    const counter = h("span");
    const scoreEl = h("span", { class: "score-pill" });
    put(prog, counter, bar, scoreEl);
    const slot = h("div");
    const next = h("button", { class: "btn primary", type: "button", disabled: true }, "Далі", icon("arrow"));
    put(wrap, prog, slot, h("div", { class: "row end" }, next));
    const scoreSoFar = () => results.reduce((a, r) => a + (r ? r.s : 0), 0);
    const show = () => {
      counter.textContent = (i + 1) + " / " + items.length;
      bar.firstChild.style.width = Math.round(100 * i / items.length) + "%";
      const sc = scoreSoFar(); scoreEl.textContent = results.length ? (Math.round(sc * 10) / 10) + " pkt" : "";
      next.disabled = true;
      fill(next, i === items.length - 1 ? "Завершити" : "Далі", icon(i === items.length - 1 ? "check" : "arrow"));
      const item = items[i];
      const el = Items[item.type](item, {
        exam: opts.exam,
        onDone: (s, d) => {
          results[i] = { s: s, d: d };
          const key = opts.track && opts.track(i, item);
          if (key) {
            if (s < 1) { if (!flagged[i] || opts.fixMode) Errors.add(key, item, opts.src); flagged[i] = true; }
            else if (flagged[i] || opts.fixMode) { Errors.remove(key); flagged[i] = false; }
            Store.save();
          }
          next.disabled = false;
          scoreEl.textContent = (Math.round(scoreSoFar() * 10) / 10) + " pkt";
          next.focus({ preventScroll: true });
        }
      });
      fill(slot, el);
    };
    next.addEventListener("click", () => {
      if (i < items.length - 1) { i++; show(); slot.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      else {
        bar.firstChild.style.width = "100%";
        const score = scoreSoFar();
        opts.onFinish(score, items.length, results);
      }
    });
    show();
    return wrap;
  }

  // ───────────────────────── views ─────────────────────────
  const root = () => $("#app");
  let mainEl, barEl;

  const App = {
    route: "home",
    start() {
      Store.load();
      root().replaceChildren(this.topbar(), (mainEl = h("main", { id: "main" })));
      Speech.init();
      this.go(location.hash.slice(1) || "home", true);
      Cloud.init();
      AI.init();
    },
    topbar() {
      barEl = h("div", { class: "stats" });
      const brand = h("button", { class: "brand", type: "button", "aria-label": "На головну" }, h("b", null, "Polski"), h("span", null, "A1 → B1"));
      brand.addEventListener("click", () => this.go("home"));
      const gear = h("button", { class: "iconbtn", type: "button", title: "Налаштування", "aria-label": "Налаштування" }, icon("gear"));
      gear.addEventListener("click", () => this.settings());
      const bar = h("header", { class: "topbar" }, h("div", { class: "topbar-in" }, brand, barEl, gear));
      this.refreshBar();
      return bar;
    },
    refreshBar() {
      if (!barEl) return;
      const done = CORE.filter(l => Store.lesson(l.id).done).length;
      const st = streak();
      const due = srsDue().length;
      fill(barEl, 
        h("span", { class: "chip", title: "Днів поспіль" }, icon("fire"), h("b", null, st), plural(st, "день", "дні", "днів")),
        h("span", { class: "chip", title: "Пройдено уроків" }, h("b", null, done), "/ " + CORE.length),
        due ? h("span", { class: "chip", title: "Слів до повторення" }, icon("cards"), h("b", null, due)) : null,
        Cloud.status === "cloud" ? h("span", { class: "chip", title: "Прогрес зберігається у вашому акаунті Claude" }, icon("cloud")) : null
      );
    },
    refreshVoiceNotice() {
      const n = $("#voice-notice");
      if (!n) return;
      n.hidden = !Speech.ok || Speech.voices.length > 0;
      n.textContent = (Speech.all ? "У вашій системі немає польського голосу — озвучення буде з акцентом. " : "Браузер не знайшов жодного голосу для озвучення. ") + Speech.help;
    },
    refresh() { this.refreshBar(); this.go(this.route, true); },
    go(route, fromHash) {
      Speech.stop();
      this.route = route || "home";
      if (!fromHash && location.hash.slice(1) !== this.route) { try { history.pushState(null, "", "#" + this.route); } catch (e) { /* sandboxed */ } }
      const r = this.route;
      if (r === "review") this.review();
      else if (r === "exam") this.exam("b1");
      else if (/^exam-\w+$/.test(r) && C.exams[r.slice(5)]) this.exam(r.slice(5));
      else if (r === "errors") this.errorsPage();
      else if (r === "map") this.mapPage();
      else if (/^talk-m\d\d$/.test(r)) this.talk(r.slice(5));
      else if (/^life-m\d\d$/.test(r)) this.lifePage(r.slice(5));
      else if (/^m\d\dl\d$/.test(r) && byId(r)) this.lesson(byId(r));
      else this.home();
      this.refreshBar();
      window.scrollTo(0, 0);
    },

    // ── home ──
    home() {
      const next = CORE.find(l => !Store.lesson(l.id).done);
      const done = CORE.filter(l => Store.lesson(l.id).done).length;
      const due = srsDue().length;
      const totalWords = Object.keys(Store.data.srs).length;
      const hour = new Date().getHours();
      const hello = hour < 12 ? "Dzień dobry!" : hour < 18 ? "Cześć!" : "Dobry wieczór!";

      const nextCard = h("section", { class: "card next-card" });
      if (next) {
        const ls = Store.lesson(next.id);
        put(nextCard, 
          h("div", { class: "row between" }, h("span", { class: "eyebrow" }, hello + " · наступний урок"), h("span", { class: "wk" }, modLabel(next.mod) + ", lekcja " + (next.k + 1))),
          h("h2", null, next.title),
          h("p", { class: "muted" }, next.titleRu + " · " + next.topic),
          h("div", { class: "meta" }, h("span", null, "≈ " + (next.minutes || 25) + " хв"), h("span", null, next.mod.level), next.review ? h("span", { class: "tag review" }, "Powtórka") : null),
          h("div", { class: "row" }, h("button", { class: "btn primary", type: "button", onclick: () => this.go(next.id) }, ls.step ? "Продовжити" : "Почати урок", icon("arrow")),
            due ? h("button", { class: "btn", type: "button", onclick: () => this.go("review") }, icon("cards"), "Повторити слова (" + due + ")") : null)
        );
      } else {
        put(nextCard, h("span", { class: "eyebrow" }, "Усі уроки пройдено"), h("h2", null, "Gratulacje! Час складати іспит"),
          h("div", { class: "row" }, h("button", { class: "btn primary", type: "button", onclick: () => this.go("exam") }, "До іспиту", icon("arrow"))));
      }
      if (next && next.mod.n === 7 && next.k === 0 && C.exams.a2 && !examState("a2").res) {
        put(nextCard, h("div", { class: "notice small" }, "Тиждень 6 позаду — саме час для контрольного тесту A2.", " ", h("button", { class: "btn sm", type: "button", onclick: () => this.go("exam-a2") }, "Пройти тест A2")));
      }
      const side = h("section", { class: "card side-card" },
        h("span", { class: "eyebrow" }, "Прогрес курсу"),
        h("div", { class: "bigstat" }, h("b", null, Math.round(100 * done / CORE.length) + "%"), h("span", { class: "muted" }, done + " з " + CORE.length + " уроків")),
        h("div", { class: "bar" }, h("i", { style: "width:" + (100 * done / CORE.length) + "%" })),
        h("div", { class: "small muted" }, "Слів у картках: " + totalWords + (due ? " · до повторення сьогодні: " + due : "")),
        h("div", { class: "row" },
          h("button", { class: "btn sm", type: "button", onclick: () => this.go("review") }, icon("cards"), "Картки"),
          h("button", { class: "btn sm", type: "button", onclick: () => this.go("errors") }, "Помилки" + (Errors.count() ? " (" + Errors.count() + ")" : "")),
          h("button", { class: "btn sm", type: "button", onclick: () => this.go("map") }, "Мапа"))
      );
      const weak = this.weakLessons().slice(0, 3);
      const weakCard = weak.length ? h("section", { class: "card stack" },
        h("div", { class: "row between" }, h("span", { class: "eyebrow" }, "Слабкі місця"), h("button", { class: "btn ghost sm", type: "button", onclick: () => this.go("map") }, "Уся мапа", icon("arrow"))),
        weak.map(x => this.weakRow(x))) : null;
      const intro = h("p", { class: "muted small" }, "12 тижнів по 5 уроків (кожен ≤ 30 хвилин) + повторення слів. У кожному уроці: слова, граматика, вправи, вимова, читання або аудіювання і твір. Щотижня ще діалог із Claude і завдання з життя, після 6-го тижня — тест A2. Оцінки — за польською шкільною шкалою від 1 до 6.");
      const voiceNotice = h("div", { class: "notice", id: "voice-notice", hidden: true }, "");

      const groups = ["A2", "B1"].map(level => {
        const mods = C.modules.filter(m => m.level === level && !m.extra);
        if (!mods.length) return null;
        return h("section", { class: "stack" },
          h("div", { class: "level-head" }, h("span", { class: "lv" }, level), h("span", { class: "muted small" }, level === "A2" ? "Тижні 1–6 · базова граматика всіх відмінків, минулий і майбутній час" : "Тижні 7–12 · множина, умовний спосіб, складні речення, офіційний стиль")),
          h("div", { class: "modlist" }, mods.map(m => this.modRow(m, next))),
          level === "A2" && C.exams.a2 ? this.examCard("a2", "Після тижня 6", "Контрольний тест: 5 частин, близько 40 хвилин. Покаже, чи готові ви до частини B1.", next && next.mod.level === "A2") : null
        );
      });
      const examCard = C.exams.b1 ? this.examCard("b1", "Тиждень 13", "Граматика, лексика, читання, аудіювання і письмо. Близько години, можна за два підходи.", !next) : null;
      const extraGroup = EXTRA_MODS.length ? h("section", { class: "stack" },
        h("div", { class: "level-head" }, h("span", { class: "lv" }, "+"), h("span", { class: "muted small" }, "Додаткові модулі · відмінки, часи дієслів, числівники. Необов’язкові — проходьте в будь-який момент, коли тема потребує практики.")),
        h("div", { class: "modlist" }, EXTRA_MODS.map(m => this.modRow(m, next)))) : null;
      fill(mainEl, h("div", { class: "hero" }, nextCard, side), weakCard, voiceNotice, intro, ...groups.filter(Boolean), examCard, extraGroup);
      this.refreshVoiceNotice();
    },
    examCard(id, eyebrow, about, primary) {
      const E = C.exams[id], ex = examState(id).res, route = id === "b1" ? "exam" : "exam-" + id;
      const word = id === "b1" ? "іспит" : "тест";
      return h("section", { class: "card exam-card" + (id === "b1" ? "" : " small-exam") },
        h("div", { class: "stack" },
          h("span", { class: "eyebrow" }, eyebrow),
          h("h2", null, E.title),
          h("p", { class: "muted" }, ex ? "Останній результат: " + ex.pct + "% — " + (ex.pass ? "складено" : "не складено") + ". Можна перескласти." : about),
          h("div", { class: "row" }, h("button", { class: "btn" + (primary ? " primary" : ""), type: "button", onclick: () => this.go(route) }, ex ? "Відкрити " + word : "Почати " + word, icon("arrow")))),
        ex && ex.pass ? h("span", { class: "stamp" }, "Zdany!") : null);
    },
    modRow(m, next) {
      const open = next && next.mod === m;
      const body = h("div", { class: "mod-body", hidden: !open });
      const dots = h("div", { class: "dots", "aria-hidden": "true" }, m.lessons.map(l => {
        const s = Store.lesson(l.id);
        return h("span", { class: "dot" + (s.done ? " done" : s.step ? " started" : "") }, s.done && s.grade ? String(s.grade) : "");
      }));
      const doneN = m.lessons.filter(l => Store.lesson(l.id).done).length;
      const head = h("button", { class: "mod-head", type: "button", "aria-expanded": String(open) },
        h("span", { class: "mod-n" }, modWord(m), h("b", null, modNum(m))),
        h("span", null, h("div", { class: "mod-title" }, m.title), h("div", { class: "mod-sub" }, m.titleRu + " · " + doneN + "/5")),
        dots);
      head.addEventListener("click", () => { body.hidden = !body.hidden; head.setAttribute("aria-expanded", String(!body.hidden)); });
      m.lessons.forEach(l => {
        const s = Store.lesson(l.id);
        const row = h("button", { class: "lesson-row", type: "button" },
          h("span", { class: "k" }, l.k + 1),
          h("span", null, h("div", { class: "t" }, l.title, " ", l.review ? h("span", { class: "tag review" }, "Powtórka") : null), h("div", { class: "s" }, l.titleRu + " · " + l.topic)),
          h("span", { class: "g", title: s.done && s.grade ? gradeOf(s.pct || 0)[2] : "" }, s.done && s.grade ? String(s.grade) : s.step ? "…" : ""));
        row.addEventListener("click", () => this.go(l.id));
        body.appendChild(row);
      });
      const dlg = C.dialogs.find(x => x.module === m.id), life = C.lifeTasks.find(x => x.module === m.id);
      const extra = (tag, title, sub, mark, route) => {
        const r = h("button", { class: "lesson-row extra", type: "button" }, h("span", { class: "k" }, "+"),
          h("span", null, h("div", { class: "t" }, title, " ", h("span", { class: "tag" }, tag)), h("div", { class: "s" }, sub)), h("span", { class: "g" }, mark || ""));
        r.addEventListener("click", () => this.go(route));
        return r;
      };
      const talkRes = Store.data.talks && Store.data.talks[m.id] && Store.data.talks[m.id].result;
      const lifeSt = Store.data.life && Store.data.life[m.id];
      if (dlg) body.appendChild(extra("Rozmowa", dlg.title, "Діалог із Claude · " + dlg.titleRu, talkRes ? String(talkRes.grade) : "", "talk-" + m.id));
      if (life) body.appendChild(extra("Z życia", life.title, "Справжній документ · " + life.titleRu, lifeSt && lifeSt.done ? "✓" : "", "life-" + m.id));
      return h("div", { class: "mod" }, head, body);
    },

    // ── lesson ──
    STEPS: [
      { key: "vocab", label: "Słówka" }, { key: "grammar", label: "Gramatyka" }, { key: "exercises", label: "Ćwiczenia" },
      { key: "pron", label: "Wymowa" }, { key: "reading", label: "Czytanie" }, { key: "writing", label: "Pisanie" }, { key: "summary", label: "Wynik" }
    ],
    lesson(l, stepArg, opt) {
      const st = Store.lesson(l.id);
      const step = stepArg != null ? stepArg : Math.min(st.step || 0, this.STEPS.length - 1);
      st.step = step; Store.save();
      const steps = h("nav", { class: "steps", "aria-label": "Кроки уроку" }, this.STEPS.map((s, i) => {
        const doneSec = st.sec[s.key];
        const b = h("button", { class: "step" + (i === step ? " cur" : doneSec ? " done" : ""), type: "button", "aria-current": i === step ? "step" : null }, h("i"), s.label);
        b.addEventListener("click", () => this.lesson(l, i));
        return b;
      }));
      const head = h("div", { class: "lesson-head" },
        h("div", { class: "crumbs" }, h("button", { type: "button", onclick: () => this.go("home") }, "Курс"), h("span", null, "›"), h("span", null, modLabel(l.mod) + " · " + l.mod.title), h("span", null, "›"), h("span", null, "Lekcja " + (l.k + 1))),
        h("h1", null, l.title),
        h("p", { class: "muted" }, l.titleRu + " · " + l.topic + " · ≈ " + (l.minutes || 25) + " хв"),
        steps);
      const sheet = h("article", { class: "sheet" });
      const goNext = () => this.lesson(l, Math.min(step + 1, this.STEPS.length - 1));
      const nav = h("div", { class: "footer-nav" },
        step > 0 ? h("button", { class: "btn ghost", type: "button", onclick: () => this.lesson(l, step - 1) }, icon("back"), this.STEPS[step - 1].label) : h("span"),
        step < this.STEPS.length - 1 ? h("button", { class: "btn", type: "button", onclick: goNext }, this.STEPS[step + 1].label, icon("arrow")) : h("span"));
      const key = this.STEPS[step].key;
      const mark = (val) => { st.sec[key] = val; Store.save(); this.refreshBar(); };
      this["step_" + key](l, sheet, mark, goNext, st);
      fill(mainEl, head, sheet, nav);
      window.scrollTo(0, 0);
      if (opt && opt.practice && key === "exercises") this.practice(l, sheet, goNext);
    },
    step_vocab(l, sheet, mark, goNext) {
      put(sheet, 
        h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Цілі уроку"), h("ul", { class: "goals" }, l.goals.map(g => h("li", null, g)))),
        h("div", { class: "sheet-title" }, h("h2", null, "Słówka"), h("div", { class: "hint-line" }, "Натисніть на картку, щоб побачити переклад. Значок динаміка — озвучення.")),
        h("div", { class: "vocab-grid" }, l.vocab.map(v => {
          const card = h("div", { class: "vcard", role: "button", tabindex: "0", "aria-label": v.pl },
            h("div", { class: "face" },
              h("div", { class: "pl-word" }, v.pl, v.g ? h("span", { class: "g" }, v.g) : null),
              h("div", { class: "ru-word hide" }, v.ru, v.note ? h("span", { class: "small muted" }, " · " + v.note) : null),
              v.ex ? h("div", { class: "exs hide" }, h("span", { class: "pl" }, v.ex), v.exRu ? h("div", null, v.exRu) : null) : null),
            h("span", { class: "spk" }, spkBtn(v.pl.replace(/\s*\/\s*/g, ", "))));
          const flip = () => card.classList.toggle("open");
          card.addEventListener("click", e => { if (!e.target.closest(".pl")) flip(); });
          card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
          return card;
        })),
        h("div", { class: "row between" },
          h("button", { class: "btn ghost sm", type: "button", onclick: () => sheet.querySelectorAll(".vcard").forEach(c => c.classList.add("open")) }, "Відкрити всі"),
          h("button", { class: "btn primary", type: "button", onclick: () => { mark({ done: true }); goNext(); } }, "Слова вивчено", icon("arrow")))
      );
      wireSpeakables(sheet);
    },
    step_grammar(l, sheet, mark, goNext) {
      const g = h("div", { class: "gram", html: l.grammar.html });
      g.querySelectorAll("table").forEach(t => { const w = h("div", { class: "tablewrap" }); t.replaceWith(w); w.appendChild(t); });
      const q = h("textarea", { class: "inp", rows: "2", placeholder: "Наприклад: чому тут «czasu», а не «czas»?" });
      const out = h("div", { class: "answer" });
      const ask = h("button", { class: "btn sm", type: "button" }, icon("spark"), "Запитати");
      let ctl = null;
      ask.addEventListener("click", async () => {
        if (!q.value.trim()) { q.focus(); return; }
        if (ctl) ctl.abort();
        ctl = new AbortController();
        out.className = "answer thinking"; out.textContent = "Claude думає…"; ask.disabled = true;
        try {
          await AI.fn("Ти — терплячий викладач польської мови для україномовного учня рівня " + l.mod.level + ". Тема уроку: «" + l.grammar.title + "». Запитання учня: «" + q.value.trim() +
            "». Відповідай українською, коротко (до 150 слів), з 2–3 польськими прикладами та перекладом. Без markdown-таблиць, звичайним текстом.", {
            signal: ctl.signal, cache: false,
            onText: ({ text }) => { out.className = "answer"; out.textContent = text; }
          });
        } catch (e) { const t = AI.errText(e); if (t) { out.className = "answer small"; out.textContent = (e.text ? e.text + "\n\n" : "") + t; } }
        ask.disabled = false;
      });
      put(sheet, 
        h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Gramatyka"), h("h2", null, l.grammar.title)),
        g,
        aiShow(h("div", { class: "ask" }, h("span", { class: "eyebrow" }, "Запитання викладачеві (Claude)"), q, h("div", { class: "row" }, ask), out)),
        h("div", { class: "row end" }, h("button", { class: "btn primary", type: "button", onclick: () => { mark({ done: true }); goNext(); } }, "Зрозуміло, до вправ", icon("arrow")))
      );
      wireSpeakables(sheet);
    },
    step_exercises(l, sheet, mark, goNext, st) {
      const prev = st.sec.exercises;
      put(sheet, h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Ćwiczenia"), h("h2", null, l.review ? "Повторення модуля" : "Тренуємо граматику"),
        prev ? h("p", { class: "small muted" }, "Минулий результат: " + prev.score + " з " + prev.max + ". Можна пройти ще раз — збережеться найкращий.") : null));
      put(sheet, sequence(l.exercises, {
        track: i => l.id + "|ex|" + i, src: l.id,
        onFinish: (score, max) => {
          const best = prev && prev.score > score ? prev : { score: Math.round(score * 10) / 10, max };
          mark(best);
          this.sectionDone(sheet, score, max, goNext, "До вимови", this.practiceBtn(l, sheet, goNext));
        }
      }));
    },
    practiceBtn(l, sheet, goNext) {
      const b = aiShow(h("button", { class: "btn", type: "button" }, icon("spark"), "Ще 5 вправ від Claude"));
      b.addEventListener("click", () => this.practice(l, sheet, goNext));
      return b;
    },
    // extra exercises generated by Claude on the lesson's grammar (optionally modelled on the learner's mistakes)
    async practice(l, sheet, goNext, focusItems) {
      Speech.stop();
      const ctl = { stop: false };
      const stop = h("button", { class: "btn ghost sm", type: "button", onclick: () => { ctl.stop = true; this.lesson(l, 2); } }, "Скасувати");
      fill(sheet, h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Додаткова практика · Claude"), h("h2", null, l.grammar.title)),
        h("p", { class: "thinking" }, "Claude складає нові вправи на цю тему… зазвичай 20–60 секунд."), h("div", { class: "row" }, stop));
      sheet.scrollIntoView({ block: "start" });
      let items;
      try { items = await genItems(l, 5, focusItems); }
      catch (e) { if (ctl.stop) return; fill(sheet, h("div", { class: "notice" }, AI.errText(e) || "Генерацію зупинено."), h("div", { class: "row" }, h("button", { class: "btn", type: "button", onclick: () => this.practice(l, sheet, goNext, focusItems) }, "Спробувати ще раз"), h("button", { class: "btn ghost", type: "button", onclick: goNext }, "Далі"))); return; }
      if (ctl.stop) return;
      if (!items.length) { fill(sheet, h("div", { class: "notice" }, "Не вдалося скласти вправи. Спробуйте ще раз."), h("div", { class: "row" }, h("button", { class: "btn", type: "button", onclick: () => this.practice(l, sheet, goNext, focusItems) }, "Ще раз"))); return; }
      fill(sheet, h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Додаткова практика · Claude"), h("h2", null, l.grammar.title),
        h("p", { class: "small muted" }, "Завдання склав Claude для вас. Помилки потраплять до зошита помилок.")),
        sequence(items, {
          track: (i, it) => "gen|" + l.id + "|" + hashStr(JSON.stringify(it)), src: l.id,
          onFinish: (score, max) => this.sectionDone(sheet, score, max, goNext, "Далі за уроком", this.practiceBtn(l, sheet, goNext))
        }));
    },
    sectionDone(sheet, score, max, goNext, nextLabel, extra) {
      const pct = Math.round(100 * score / max);
      const g = gradeOf(pct);
      fill(sheet,
        h("div", { class: "result" }, h("div", null, h("div", { class: "gbig" }, g[1]), h("div", { class: "gname" }, g[2])),
          h("div", { class: "stack" }, h("h2", null, (Math.round(score * 10) / 10) + " з " + max + " (" + pct + "%)"),
            h("p", { class: "muted" }, pct >= 85 ? "Чудово, матеріал засвоєно." : pct >= 60 ? "Добре. Помилки варто розібрати ще раз — поверніться до граматики." : "Тема поки не закріпилася. Перечитайте граматику і пройдіть вправи ще раз."),
            h("div", { class: "row" }, h("button", { class: "btn primary", type: "button", onclick: goNext }, nextLabel, icon("arrow")), extra)))
      );
    },
    step_pron(l, sheet, mark, goNext) {
      const p = l.pronunciation;
      const tip = h("div", { class: "pron-tip", html: p.tip });
      put(sheet, h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Wymowa"), h("h2", null, p.focus)), tip,
        Speech.ok ? null : h("div", { class: "notice" }, "Ваш браузер не підтримує озвучення — відкрийте курс у Chrome, Safari або Edge."));
      const scoredMax = p.items.filter(it => SCORED_PRON[it.type]).length;
      put(sheet, sequence(p.items, {
        track: (i, it) => SCORED_PRON[it.type] ? l.id + "|pr|" + i : null, src: l.id,
        onFinish: (score, max, results) => {
          const sc = results.reduce((a, r, i) => a + (SCORED_PRON[p.items[i].type] && r ? r.s : 0), 0);
          mark({ score: Math.round(sc * 10) / 10, max: scoredMax || 1 });
          this.sectionDone(sheet, scoredMax ? sc : 1, scoredMax || 1, goNext, "До читання");
        }
      }));
      wireSpeakables(tip);
    },
    step_reading(l, sheet, mark, goNext, st) {
      const r = l.reading;
      const s = Store.data.settings;
      const mode = s.readMode === "listen" ? "listen" : "read";
      const textEl = readingText(r);
      let reading = false;
      const label = mode === "listen" ? "Слухати текст" : "Прочитати вголос";
      const playAll = h("button", { class: "btn sm" + (mode === "listen" ? " primary" : ""), type: "button" }, icon("speaker"), label);
      const play = async (slow) => {
        if (reading) { reading = false; Speech.stop(); fill(playAll, icon("speaker"), label); return; }
        reading = true; fill(playAll, "Стоп");
        for (const p of textEl.querySelectorAll("p")) { if (!reading) break; await Speech.speak(p.textContent, { el: p, slow }); }
        reading = false; fill(playAll, icon("speaker"), label);
      };
      playAll.addEventListener("click", () => play(false));
      const slowBtn = h("button", { class: "btn ghost sm", type: "button", hidden: mode !== "listen" }, icon("turtle"), "Повільніше");
      slowBtn.addEventListener("click", () => play(true));
      const modeBtn = (m, text) => h("button", { class: "seg" + (mode === m ? " on" : ""), type: "button", "aria-pressed": String(mode === m),
        onclick: () => { s.readMode = m; Store.save(); this.lesson(l, 4); } }, text);
      const glossary = r.glossary && r.glossary.length ? h("details", { class: "box" }, h("summary", null, "Словничок до тексту"), h("div", { class: "glossary" }, r.glossary.map(g => h("div", null, h("b", null, g.pl), "— " + g.ru)))) : null;
      const reveal = h("button", { class: "btn ghost sm", type: "button", hidden: mode !== "listen" }, "Показати текст");
      const showText = () => { textEl.hidden = false; reveal.hidden = true; if (glossary) glossary.hidden = false; };
      reveal.addEventListener("click", showText);
      if (mode === "listen") { textEl.hidden = true; if (glossary) glossary.hidden = true; }
      put(sheet,
        h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, mode === "listen" ? "Słuchanie" : "Czytanie"), h("h2", null, r.title)),
        h("div", { class: "segs", role: "group", "aria-label": "Режим" }, modeBtn("read", "Читати"), modeBtn("listen", "Спершу послухати")),
        h("div", { class: "row" }, playAll, slowBtn, reveal,
          h("span", { class: "small muted" }, mode === "listen" ? "Текст приховано: прослухайте його й дайте відповіді на запитання. Після відповідей текст відкриється." : "Натисніть на абзац, щоб його послухати. Виділені слова — з підказкою.")),
        textEl, glossary,
        h("h3", null, "Pytania do tekstu")
      );
      put(sheet, sequence(r.questions, {
        onFinish: (score, max) => {
          const prev = st.sec.reading;
          mark({ score: Math.round(score * 10) / 10, max, listened: mode === "listen" || !!(prev && prev.listened) });
          if (mode === "listen") {
            this.sectionDone(sheet, score, max, goNext, "До письма");
            put(sheet, h("h3", null, "Текст, який ви слухали"), (showText(), textEl), glossary);
          } else this.sectionDone(sheet, score, max, goNext, "До письма");
        }
      }));
    },
    step_writing(l, sheet, mark, goNext, st) {
      const panel = writingPanel({
        w: l.writing, draftKey: l.id, level: l.mod.level, topic: l.grammar.title,
        review: st.sec.writing && st.sec.writing.review,
        onReview: (rv, n) => mark({ done: true, words: n, review: rv }),
        onDone: n => { mark(Object.assign({}, st.sec.writing || {}, { done: true, words: n })); goNext(); },
        doneLabel: "Твір готовий"
      });
      put(sheet, h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Pisanie"), h("h2", null, "Твір")), panel);
      wireSpeakables(sheet);
    },
    step_summary(l, sheet, mark, goNext, st) {
      const s = st.sec;
      const parts = [["Вправи", s.exercises], ["Вимова", s.pron], ["Читання", s.reading]];
      let score = 0, max = 0;
      parts.forEach(([, v]) => { if (v && v.max) { score += v.score / v.max * (v === s.exercises ? 2 : 1); max += v === s.exercises ? 2 : 1; } });
      const writingDone = s.writing && s.writing.done;
      if (s.writing && s.writing.review && s.writing.review.grade) { score += (s.writing.review.grade - 1) / 5; max += 1; }
      else if (writingDone) { score += 1; max += 1; }
      const pct = max ? Math.round(100 * score / max) : 0;
      const g = gradeOf(pct);
      const missing = this.STEPS.slice(0, 6).filter(x => !s[x.key]);
      const finish = h("button", { class: "btn primary", type: "button" }, st.done ? "Оновити оцінку" : "Завершити урок", icon("check"));
      finish.addEventListener("click", () => {
        const first = !st.done;
        st.done = true; st.pct = pct; st.grade = g[1]; st.doneAt = st.doneAt || today();
        if (first) { Store.markDay("l"); addToSrs(l); }
        Store.save(); this.refreshBar();
        toast(first ? "Урок завершено! Слова додано до карток." : "Оцінку оновлено.");
        const nxt = LESSONS[l.idx + 1];
        this.go(nxt && !Store.lesson(nxt.id).done ? "home" : "home");
      });
      put(sheet, 
        h("div", { class: "result" },
          h("div", null, h("div", { class: "gbig" }, max ? g[1] : "–"), h("div", { class: "gname" }, max ? g[2] : "")),
          h("div", { class: "stack" },
            h("h2", null, max ? "Підсумок уроку: " + pct + "%" : "Пройдіть розділи уроку"),
            h("div", { class: "breakdown" }, parts.map(([name, v]) => h("div", { class: "brow" }, h("span", null, name), h("div", { class: "bar" }, h("i", { style: "width:" + (pctOf(v) || 0) + "%" })), h("span", null, v ? pctOf(v) + "%" : "—"))),
              h("div", { class: "brow" }, h("span", null, "Письмо"), h("div", { class: "bar" }, h("i", { style: "width:" + (writingDone ? (s.writing.review ? (s.writing.review.grade - 1) * 20 : 100) : 0) + "%" })), h("span", null, writingDone ? (s.writing.review ? "оцінка " + s.writing.review.grade : "готово") : "—"))),
            missing.length ? h("p", { class: "small muted" }, "Не пройдено: " + missing.map(x => x.label).join(", ") + ". Можна завершити й так, але оцінка буде нижчою.") : null,
            h("div", { class: "row" }, finish)))
      );
    },

    pageHead(crumb, title, sub) {
      return h("div", { class: "lesson-head" },
        h("div", { class: "crumbs" }, h("button", { type: "button", onclick: () => this.go("home") }, "Курс"), h("span", null, "›"), h("span", null, crumb)),
        h("h1", null, title), sub ? h("p", { class: "muted" }, sub) : null);
    },

    // ── error notebook ──
    errorsPage() {
      const keys = Errors.keys();
      const sheet = h("article", { class: "sheet" });
      fill(mainEl, this.pageHead("Зошит помилок", "Zeszyt błędów", "Сюди автоматично потрапляє кожне завдання, де ви помилилися. Відповіли правильно — завдання зникає із зошита."), sheet);
      if (!keys.length) { put(sheet, h("p", { class: "muted" }, "Помилок немає. Щойно ви помилитеся у вправі, вона з’явиться тут.")); return; }
      const byL = Errors.byLesson();
      const lessons = Object.keys(byL).map(byId).filter(Boolean).sort((a, b) => byL[b.id] - byL[a.id]);
      const start = h("button", { class: "btn primary", type: "button" }, "Робота над помилками (" + Math.min(15, keys.length) + ")", icon("arrow"));
      start.addEventListener("click", () => {
        const pick = shuffle(keys).slice(0, 15);
        fill(sheet, h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Praca nad błędami"), h("h2", null, "Робота над помилками")),
          sequence(pick.map(k => Errors.item(k)), {
            fixMode: true, track: i => pick[i],
            onFinish: (score, max) => {
              Store.markDay("r"); Store.save(); this.refreshBar();
              this.sectionDone(sheet, score, max, () => this.go("home"), "На головну", h("button", { class: "btn", type: "button", onclick: () => this.errorsPage() }, "До зошита помилок"));
            }
          }));
      });
      const similar = aiShow(h("button", { class: "btn", type: "button" }, icon("spark"), "Схожі завдання від Claude"));
      similar.addEventListener("click", () => {
        const l = lessons[0];
        const focus = keys.filter(k => Errors.map[k].src === l.id).slice(0, 5).map(k => Errors.item(k));
        this.practice(l, sheet, () => this.go("errors"), focus);
      });
      put(sheet,
        h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Усього завдань у зошиті: " + keys.length), h("h2", null, "Де найбільше помилок")),
        h("div", { class: "stack" }, lessons.slice(0, 8).map(l => h("div", { class: "weak-row" },
          h("span", { class: "grade-hand weak-n" }, String(byL[l.id])),
          h("span", null, h("div", { class: "t" }, l.grammar.title), h("div", { class: "small muted" }, modLabel(l.mod) + " · " + l.title)),
          h("button", { class: "btn ghost sm", type: "button", onclick: () => { this.go(l.id); this.lesson(l, 1); } }, "Граматика")))),
        h("div", { class: "row" }, start, similar));
    },

    // ── weak spots map ──
    weakLessons() {
      const errs = Errors.byLesson();
      return LESSONS.map(l => {
        const s = Store.lesson(l.id).sec.exercises;
        const pct = s ? pctOf(s) : null;
        return { l, pct, errs: errs[l.id] || 0 };
      }).filter(x => (x.pct != null && x.pct < 75) || x.errs >= 3)
        .sort((a, b) => ((a.pct == null ? 90 : a.pct) - 6 * a.errs) - ((b.pct == null ? 90 : b.pct) - 6 * b.errs));
    },
    mapPage() {
      const errs = Errors.byLesson();
      const sheet = h("article", { class: "sheet" });
      const cell = l => {
        const s = Store.lesson(l.id);
        const p = s.sec.exercises ? pctOf(s.sec.exercises) : null;
        const cls = p == null ? "none" : p < 50 ? "bad" : p < 75 ? "mid" : p < 90 ? "good" : "top";
        const b = h("button", { class: "heat " + cls, type: "button", title: l.grammar.title + (p != null ? " — " + p + "%" : "") + (errs[l.id] ? " · помилок у зошиті: " + errs[l.id] : "") },
          p != null ? String(p) : "", errs[l.id] ? h("i", { class: "heat-err" }) : null);
        b.addEventListener("click", () => this.go(l.id));
        return b;
      };
      const weak = this.weakLessons();
      put(sheet,
        h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Результат вправ за уроками, %"), h("h2", null, "Мапа курсу")),
        h("div", { class: "heatmap" }, C.modules.map(m => h("div", { class: "heat-row" }, h("span", { class: "heat-lbl" }, (m.extra ? "D" : "T") + modNum(m)), m.lessons.map(cell)))),
        h("div", { class: "legend small muted" }, [["none", "не розпочато"], ["bad", "< 50%"], ["mid", "50–74%"], ["good", "75–89%"], ["top", "90%+"]].map(([c, t]) => h("span", null, h("i", { class: "heat " + c }), t)), h("span", null, h("i", { class: "heat-err" }), "є помилки в зошиті")),
        h("h3", null, "Що повторити"),
        weak.length ? h("div", { class: "stack" }, weak.slice(0, 6).map(x => this.weakRow(x))) : h("p", { class: "muted" }, "Слабких місць поки немає — так тримати."));
      fill(mainEl, this.pageHead("Мапа прогресу", "Mapa postępów", "Колір клітинки — результат вправ уроку. Натисніть на клітинку, щоб відкрити урок."), sheet);
    },
    weakRow(x) {
      const l = x.l;
      const gen = aiShow(h("button", { class: "btn ghost sm", type: "button" }, icon("spark"), "Вправи"));
      gen.addEventListener("click", () => this.lesson(l, 2, { practice: true }));
      return h("div", { class: "weak-row" },
        h("span", { class: "grade-hand weak-n" }, x.pct != null ? x.pct + "%" : "–"),
        h("span", null, h("div", { class: "t" }, l.grammar.title), h("div", { class: "small muted" }, modLabel(l.mod) + " · " + l.title + (x.errs ? " · помилок: " + x.errs : ""))),
        h("span", { class: "row" }, h("button", { class: "btn ghost sm", type: "button", onclick: () => this.lesson(l, 1) }, "Граматика"), gen));
    },

    // ── role-play dialog with Claude ──
    talk(mid) {
      const d = C.dialogs.find(x => x.module === mid), m = C.modules.find(x => x.id === mid);
      if (!d || !m) return this.home();
      const T = Store.data.talks || (Store.data.talks = {});
      const t = T[mid] || (T[mid] = { log: [], result: null });
      if (!t.log.length) t.log.push({ role: "bot", text: d.opener });
      const sheet = h("article", { class: "sheet" });
      fill(mainEl, this.pageHead("Tydzień " + m.n + " · Rozmowa", d.title, d.titleRu + " · рівень " + d.level), sheet);
      const chat = h("div", { class: "chat", "aria-live": "polite" });
      const bubble = msg => {
        if (msg.role === "bot") return h("div", { class: "msg bot" }, h("div", { class: "bub" }, h("span", null, msg.text), spkBtn(msg.text)),
          msg.hint ? h("details", { class: "hint" }, h("summary", null, "Підказка"), msg.hint) : null);
        return h("div", { class: "msg me" }, h("div", { class: "bub" }, msg.text),
          msg.fix ? h("div", { class: "fix" }, h("span", { class: "w" }, msg.fix.wrong), " → ", h("span", { class: "r" }, msg.fix.right), msg.fix.why ? h("div", { class: "y" }, msg.fix.why) : null) : null);
      };
      const draw = () => { fill(chat, t.log.map(bubble)); chat.scrollTop = chat.scrollHeight; };
      const inp = h("textarea", { class: "inp", rows: "2", id: "talk-" + mid, placeholder: "Odpowiedz po polsku…", spellcheck: "false" });
      const send = h("button", { class: "btn primary", type: "button" }, "Wyślij", icon("arrow"));
      const status = h("span", { class: "small muted" });
      const finishBtn = h("button", { class: "btn", type: "button" }, icon("check"), "Завершити й отримати оцінку");
      const restart = h("button", { class: "btn ghost sm", type: "button" }, "Почати заново");
      const result = h("div", { class: "review-out" });
      const transcript = () => t.log.slice(-24).map(x => (x.role === "bot" ? "Postać: " : "Uczeń: ") + x.text).join("\n");
      const brief = "Character (you): " + d.role + "\nSetting: " + d.setting + "\nTarget grammar to elicit: " + d.grammar + "\nLearner's goals: " + d.goals.join("; ") + "\nLearner level: " + d.level + " (Ukrainian-speaking learner).";
      let busy = false;
      const doSend = async () => {
        const text = inp.value.trim();
        if (!text || busy) return;
        busy = true; send.disabled = true; inp.value = "";
        const mine = { role: "me", text };
        t.log.push(mine); draw(); status.textContent = "Співрозмовник друкує…";
        try {
          const r = await AI.fn.json("You are role-playing a conversation in a Polish course.\n" + brief +
            "\nRules: stay in character; reply in natural spoken Polish suited to the learner's level, 1–3 short sentences, and end with a question or prompt that pushes the learner to use the target grammar and reach the goals. Never use Ukrainian or Russian in \"reply\". " +
            "If the learner's LAST message has a mistake, give ONE most important correction: \"wrong\" = exact fragment from the learner's message, \"right\" = corrected fragment, \"why\" = short explanation in Ukrainian. If there is no mistake, correction = null. " +
            "\"hint\" = one short suggestion in Ukrainian of what the learner could say next, with a Polish fragment. Set \"done\" = true only when all goals are reached or the conversation has naturally ended.\n\nConversation so far:\n" + transcript() +
            '\n\nReply ONLY with JSON: {"reply": "...", "correction": {"wrong": "...", "right": "...", "why": "..."} or null, "hint": "...", "done": false}', { modelTier: "quick", cache: false });
          const c = r && r.correction && typeof r.correction === "object" && r.correction.wrong && r.correction.right ? { wrong: String(r.correction.wrong), right: String(r.correction.right), why: String(r.correction.why || "") } : null;
          if (c && norm(c.wrong) !== norm(c.right)) mine.fix = c;
          const reply = String(r && r.reply || "").trim();
          if (reply) t.log.push({ role: "bot", text: reply, hint: r.hint ? String(r.hint) : "" });
          status.textContent = r && r.done ? "Схоже, розмова добігла кінця — можна отримати оцінку." : "";
          Store.save(); draw();
          if (reply && Store.data.settings.talkVoice) Speech.speak(reply);
        } catch (e) { t.log.pop(); inp.value = text; draw(); status.textContent = AI.errText(e); }
        busy = false; send.disabled = false; inp.focus({ preventScroll: true });
      };
      send.addEventListener("click", doSend);
      inp.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); doSend(); } });
      restart.addEventListener("click", () => { if (!restart.dataset.sure) { restart.dataset.sure = "1"; restart.textContent = "Точно? Натисніть ще раз"; return; } T[mid] = { log: [], result: null }; Store.save(); this.talk(mid); });
      finishBtn.addEventListener("click", async () => {
        if (t.log.filter(x => x.role === "me").length < 3) { toast("Зробіть хоча б 3 репліки."); return; }
        finishBtn.disabled = true; fill(result, h("div", { class: "thinking" }, "Claude оцінює розмову…"));
        try {
          const r = await AI.fn.json("Ти — викладач польської. Оціни, як україномовний учень (рівень " + d.level + ") впорався з рольовим діалогом.\n" + brief +
            "\n\nДіалог:\n" + transcript() + '\n\nОтветь ТОЛЬКО JSON: {"grade": 1-6 (польська шкільна шкала), "summary": "2–3 речення українською", "goals": [{"goal": "мета", "done": true|false}], ' +
            '"corrections": [{"wrong": "фрагмент учня", "right": "виправлення", "why": "коротко українською"}], "improved": "", "tips": ["1–3 поради українською з польськими фразами"]}. Не более 6 исправлений.');
          const rv = sanitizeReview(r);
          rv.goals = (Array.isArray(r.goals) ? r.goals : []).slice(0, 6).map(g => ({ goal: String(g.goal || ""), done: !!g.done }));
          t.result = Object.assign(rv, { date: today() });
          Store.markDay("r"); Store.save(); this.refreshBar();
          renderTalkResult(result, t.result);
        } catch (e) { fill(result, h("div", { class: "notice" }, AI.errText(e) || "Оцінювання зупинено.")); }
        finishBtn.disabled = false;
      });
      if (t.result) renderTalkResult(result, t.result);
      const voice = h("label", { class: "wcheck small" }, h("input", { type: "checkbox", checked: !!Store.data.settings.talkVoice, onchange: e => { Store.data.settings.talkVoice = e.target.checked; Store.save(); } }), "Озвучувати відповіді співрозмовника");
      put(sheet,
        h("div", { class: "prompt" }, d.scenario),
        h("div", { class: "stack" }, h("span", { class: "eyebrow" }, "Ваші завдання"), h("ul", { class: "goals" }, d.goals.map(g => h("li", null, g)))),
        h("details", { class: "box" }, h("summary", null, "Корисні фрази"), h("div", { class: "glossary" }, d.phrases.map(p => h("div", null, h("b", { class: "pl" }, p.pl), "— " + p.ru)))),
        AI.ready ? null : h("div", { class: "notice" }, "Співрозмовник-Claude працює у версії курсу на claude.ai. Тут можна потренуватися самостійно: прочитайте сценарій і фрази та проговоріть діалог уголос."),
        chat,
        aiShow(h("div", { class: "stack" }, inp, h("div", { class: "row between" }, status, h("div", { class: "row" }, send)), h("div", { class: "row between" }, voice, h("div", { class: "row" }, restart, finishBtn)))),
        result);
      draw();
      wireSpeakables(sheet);
    },

    // ── real-life task ──
    lifePage(mid) {
      const T = C.lifeTasks.find(x => x.module === mid), m = C.modules.find(x => x.id === mid);
      if (!T || !m) return this.home();
      const LS = Store.data.life || (Store.data.life = {});
      const st = LS[mid] || (LS[mid] = {});
      const sheet = h("article", { class: "sheet" });
      fill(mainEl, this.pageHead("Tydzień " + m.n + " · Zadanie z życia", T.title, T.titleRu), sheet);
      const doc = h("div", { class: "doc doc-" + (T.doc.kind || "notice"), html: T.doc.html });
      doc.querySelectorAll("table").forEach(t => { const w = h("div", { class: "tablewrap" }); t.replaceWith(w); w.appendChild(t); });
      let reading = false;
      const read = h("button", { class: "btn sm", type: "button" }, icon("speaker"), "Прочитати вголос");
      read.addEventListener("click", async () => {
        if (reading) { reading = false; Speech.stop(); fill(read, icon("speaker"), "Прочитати вголос"); return; }
        reading = true; fill(read, "Стоп"); await Speech.speak(doc.innerText); reading = false; fill(read, icon("speaker"), "Прочитати вголос");
      });
      const qs = h("div", { class: "stack" });
      const taskBox = h("div", { class: "stack" });
      const showTask = () => {
        if (!T.task) return;
        fill(taskBox, h("h3", null, "Ваша відповідь"), writingPanel({
          w: T.task, draftKey: "life-" + mid, level: m.level, topic: "реальна ситуація: " + T.titleRu, review: st.review,
          onReview: rv => { st.review = rv; st.done = true; Store.save(); },
          onDone: () => { st.done = true; Store.markDay("l"); Store.save(); toast("Завдання виконано!"); this.go("home"); },
          doneLabel: "Готово"
        }));
      };
      put(qs, h("h3", null, "Запитання до документа"), sequence(T.questions, {
        onFinish: (score, max) => {
          st.score = Math.round(score * 10) / 10; st.max = max; if (!T.task) st.done = true; Store.save();
          fill(qs, feedback(score / max >= 0.75 ? "ok" : "half", score / max >= 0.75 ? praise() : "Sprawdźmy", "Правильно " + (Math.round(score * 10) / 10) + " з " + max + "."));
          if (!T.task) put(qs, h("div", { class: "row" }, h("button", { class: "btn primary", type: "button", onclick: () => this.go("home") }, "На головну")));
          showTask();
        }
      }));
      put(sheet, h("div", { class: "prompt" }, T.intro), h("div", { class: "row" }, read), doc, qs, taskBox);
      if (st.max) showTask();
    },

    // ── srs review ──
    review() {
      const due = srsDue();
      const all = Object.keys(Store.data.srs);
      const boxes = [1, 2, 3, 4, 5].map(b => all.filter(k => Store.data.srs[k].box === b).length);
      const head = h("div", { class: "lesson-head" },
        h("div", { class: "crumbs" }, h("button", { type: "button", onclick: () => this.go("home") }, "Курс"), h("span", null, "›"), h("span", null, "Картки")),
        h("h1", null, "Powtórka słówek"),
        h("p", { class: "muted" }, "Інтервальне повторення: слово, яке ви пам’ятаєте, повернеться через 1, 3, 7, 16 і 35 днів. Забуте — знову в першу коробку."),
        h("div", { class: "boxes" }, boxes.map((n, i) => h("div", null, h("b", null, n), ["1 день", "3 дні", "7 днів", "16 днів", "35 днів"][i]))));
      const sheet = h("article", { class: "sheet" });
      fill(mainEl, head, sheet, h("details", { class: "box" }, h("summary", null, "Щоденне нагадування"), toolsPanel()));
      if (!all.length) { put(sheet, h("p", { class: "muted" }, "Карток поки немає. Вони з’являться після першого завершеного уроку.")); return; }
      let queue = due.length ? shuffle(due).slice(0, 25) : shuffle(all).slice(0, 12);
      const practice = !due.length;
      if (practice) put(sheet, h("div", { class: "notice" }, "На сьогодні все повторено. Нижче — вільне тренування, воно не змінює розклад."));
      const card = h("div", { class: "flash" });
      const stat = h("div", { class: "ex-progress" });
      put(sheet, stat, card);
      let n = 0, good = 0;
      const total = queue.length;
      const show = () => {
        fill(stat, h("span", null, "Картка " + Math.min(n + 1, total) + " з " + total), h("span", { class: "score-pill" }, good + " ✓"));
        if (!queue.length) {
          if (!practice) { Store.markDay("r"); Store.save(); this.refreshBar(); }
          fill(card, h("div", { class: "front" }, "Koniec!"), h("div", { class: "back" }, "Пам’ятаю: " + good + " з " + total), h("div", { class: "row" }, h("button", { class: "btn primary", type: "button", onclick: () => this.go("home") }, "На головну"), h("button", { class: "btn", type: "button", onclick: () => this.review() }, "Ще раз")));
          return;
        }
        const key = queue[0], c = Store.data.srs[key];
        const toPl = Math.random() < 0.4;
        const rate = ok => {
          if (!practice) {
            c.box = ok ? Math.min(5, c.box + 1) : 1;
            c.due = addDays(today(), ok ? [0, 1, 3, 7, 16, 35][c.box] : 0);
            Store.save();
          }
          queue.shift(); n++;
          if (ok) good++; else if (!practice) queue.push(key);
          show();
        };
        const grade = h("div", { class: "row", hidden: true },
          h("button", { class: "btn", type: "button", onclick: () => rate(false) }, "Не пам’ятаю"),
          h("button", { class: "btn primary", type: "button", onclick: () => rate(true) }, "Пам’ятаю"));
        if (toPl) {
          const inp = h("input", { class: "inp", type: "text", autocomplete: "off", spellcheck: "false", placeholder: "польською…", style: "max-width:320px" });
          const fb = h("div");
          const chk = h("button", { class: "btn sm", type: "button" }, "Перевірити");
          const doCheck = () => {
            const variants = c.pl.split("/").map(s => s.trim());
            const s = Math.max(...variants.map(v => matchAnswer(inp.value, [v])), matchAnswer(inp.value, [c.pl]));
            inp.disabled = true; chk.disabled = true;
            inp.classList.add(s === 1 ? "ok" : s ? "half" : "bad");
            fill(fb, h("div", { class: "back" }, c.pl), spkBtn(c.pl.replace(/\s*\/\s*/g, ", ")));
            Speech.speak(c.pl.replace(/\s*\/\s*/g, ", "));
            grade.hidden = false;
          };
          chk.addEventListener("click", doCheck);
          inp.addEventListener("keydown", e => { if (e.key === "Enter") doCheck(); });
          fill(card, h("span", { class: "eyebrow" }, "Як польською?"), h("div", { class: "front" }, c.ru), h("div", { class: "row" }, inp, chk), fb, grade);
          setTimeout(() => inp.focus({ preventScroll: true }), 30);
        } else {
          const back = h("div", { class: "back", hidden: true }, c.ru, c.ex ? h("div", { class: "small" }, c.ex) : null);
          const show2 = h("button", { class: "btn", type: "button" }, "Показати переклад");
          show2.addEventListener("click", () => { back.hidden = false; show2.hidden = true; grade.hidden = false; });
          fill(card, h("span", { class: "eyebrow" }, "Що це означає?"), h("div", { class: "front" }, c.pl), spkBtn(c.pl.replace(/\s*\/\s*/g, ", ")), back, show2, grade);
          Speech.speak(c.pl.replace(/\s*\/\s*/g, ", "));
        }
      };
      show();
    },

    // ── exam ──
    exam(id) {
      id = id || "b1";
      const X = examState(id);
      const E = C.exams[id];
      const head = h("div", { class: "lesson-head" },
        h("div", { class: "crumbs" }, h("button", { type: "button", onclick: () => this.go("home") }, "Курс"), h("span", null, "›"), h("span", null, id === "b1" ? "Іспит" : "Тест " + id.toUpperCase())),
        h("h1", null, E ? E.title : "Egzamin"));
      const sheet = h("article", { class: "sheet" });
      fill(mainEl, head, sheet);
      if (!E) { put(sheet, h("p", null, "Іспит ще не завантажено.")); return; }
      const run = X.run;
      if (!run) {
        const scope = id === "a2" ? CORE.filter(l => l.mod.level === "A2") : CORE;
        const done = scope.filter(l => Store.lesson(l.id).done).length;
        put(sheet, h("div", { class: "gram", html: E.intro }),
          done < scope.length ? h("div", { class: "notice" }, "Пройдено " + done + " з " + scope.length + " уроків. " + (id === "a2" ? "Тест розраховано на кінець 6-го тижня" : "Іспит розраховано на кінець курсу") + ", але можна спробувати й зараз — як діагностику.") : null,
          X.res ? h("p", { class: "muted" }, "Минулий результат: " + X.res.pct + "% (" + X.res.date + ")") : null,
          h("div", { class: "row" }, h("button", { class: "btn primary", type: "button", onclick: () => { X.setRun({ sec: 0, answers: {}, started: today() }); Store.save(); this.exam(id); } }, id === "b1" ? "Почати іспит" : "Почати тест", icon("arrow"))));
        wireSpeakables(sheet);
        return;
      }
      const secs = E.sections;
      const si = run.sec;
      if (si >= secs.length) return this.examResult(sheet, id, X);
      const S = secs[si];
      const tabs = h("div", { class: "sec-tabs" }, secs.map((s, i) => h("span", { class: "sec-tab" + (i === si ? " cur" : i < si ? " done" : "") }, (i + 1) + ". " + s.title)));
      put(sheet, tabs, h("div", { class: "sheet-title" }, h("span", { class: "eyebrow" }, "Część " + (si + 1) + " z " + secs.length + " · " + secName(S)), h("h2", null, S.title)));
      const nextSec = h("button", { class: "btn primary", type: "button" }, si === secs.length - 1 ? (id === "b1" ? "Завершити іспит" : "Завершити тест") : "Наступна частина", icon("arrow"));
      let needed = 0;
      const renderQ = (item, key) => {
        needed++;
        const prev = run.answers[key];
        const wrap = h("div", { class: "exam-q" });
        if (prev) { put(wrap, h("div", { class: "q" }, item.q || item.ru || (item.pairs ? item.q || "Зіставлення" : "")), feedback("neutral", "Zapisano", "Ваша відповідь: " + (prev.given || "—"))); return wrap; }
        put(wrap, Items[item.type](item, { exam: true, noFocus: true, onDone: (s, d) => { run.answers[key] = { s: s, given: d && d.given }; Store.save(); upd(); } }));
        return wrap;
      };
      const body = h("div", { class: "stack" });
      if (S.items) S.items.forEach((it, i) => put(body, renderQ(it, S.id + ":" + i)));
      if (S.texts) S.texts.forEach((t, ti) => {
        const block = h("div", { class: "stack" }, h("h3", null, (ti + 1) + ". " + t.title));
        if (S.id === "listening") {
          const plays = run.answers[S.id + ":plays" + ti] || { n: 0 };
          const left = h("span", { class: "small muted" });
          const btn = h("button", { class: "btn", type: "button" }, icon("speaker"), "Прослухати");
          const sync = () => { left.textContent = "Залишилося прослуховувань: " + (2 - plays.n); btn.disabled = plays.n >= 2; };
          btn.addEventListener("click", async () => {
            plays.n++; run.answers[S.id + ":plays" + ti] = plays; Store.save(); sync(); btn.disabled = true;
            await Speech.speak(t.text); sync();
          });
          sync();
          put(block, h("div", { class: "row" }, btn, left), h("p", { class: "small muted" }, "Текст звучить двічі, як на справжньому іспиті. Спершу прочитайте запитання."));
        } else {
          put(block, readingText(t));
        }
        t.questions.forEach((q, qi) => put(block, renderQ(q, S.id + ":" + ti + ":" + qi)));
        put(body, block);
      });
      if (S.task) {
        needed++;
        put(body, this.examWriting(S, run, () => upd(), X));
      }
      const status = h("span", { class: "small muted" });
      const upd = () => {
        // listening "plays" keys aren't answers
        const n = Object.keys(run.answers).filter(k => k.startsWith(S.id + ":") && !/:plays\d+$/.test(k)).length;
        status.textContent = "Відповіли: " + n + " з " + needed;
      };
      nextSec.addEventListener("click", () => {
        const n = Object.keys(run.answers).filter(k => k.startsWith(S.id + ":") && !/:plays\d+$/.test(k)).length;
        if (n < needed && !nextSec.dataset.sure) { nextSec.dataset.sure = "1"; toast("Є запитання без відповіді. Натисніть ще раз, щоб продовжити."); return; }
        run.sec++; Store.save(); this.exam(id);
      });
      put(sheet, body, h("div", { class: "row between" }, status, nextSec));
      upd();
    },
    examWriting(S, run, upd, X) {
      const w = S.task;
      const key = S.id + ":task";
      const ta = h("textarea", { class: "inp", rows: "12", id: "exam-writing", spellcheck: "false", placeholder: "Pisz tutaj…" });
      ta.value = Store.data.drafts[X.draft] || "";
      const wc = h("span", { class: "wc" });
      const upc = () => { const n = countWords(ta.value); wc.textContent = n + " " + plural(n, "слово", "слова", "слів") + " · потрібно " + w.minWords + "–" + w.maxWords; wc.classList.toggle("ok", n >= w.minWords && n <= w.maxWords); };
      let t;
      ta.addEventListener("input", () => { upc(); clearTimeout(t); t = setTimeout(() => { Store.data.drafts[X.draft] = ta.value; Store.save(); }, 800); });
      upc();
      const out = h("div", { class: "review-out" });
      const prev = run.answers[key];
      if (prev && prev.review) renderReview(out, prev.review);
      const save = (s, review) => { run.answers[key] = { s: s, given: countWords(ta.value) + " слів", review: review }; Store.data.drafts[X.draft] = ta.value; Store.save(); upd(); };
      const check = aiShow(h("button", { class: "btn primary", type: "button" }, icon("spark"), "Надіслати на оцінювання Claude"));
      check.addEventListener("click", async () => {
        if (countWords(ta.value) < 40) { toast("Для оцінювання іспитового твору потрібно хоча б 40 слів (зараз " + countWords(ta.value) + ")."); return; }
        check.disabled = true;
        const lvl = X.draft === "exam" ? "B1" : "A2";
        fill(out, h("div", { class: "thinking" }, "Claude оцінює роботу за критеріями " + lvl + "…"));
        try {
          const res = await AI.fn.json(writingPrompt(lvl, w, lvl === "B1" ? "підсумковий іспит B1" : "контрольний тест A2", ta.value.trim()));
          const rv = sanitizeReview(res);
          renderReview(out, rv);
          save((rv.grade - 1) / 5, rv);
        } catch (e) { fill(out, h("div", { class: "notice" }, AI.errText(e) || "Перевірку зупинено.")); }
        check.disabled = false;
      });
      // self-assessment fallback
      const crit = ["Завдання виконано повністю (усі пункти)", "Граматика майже без помилок", "Різноманітна лексика, слова зі списку", "Текст зв’язний, є вступ і висновок"];
      const boxes = crit.map(c => { const cb = h("input", { type: "checkbox" }); return { cb, el: h("label", { class: "wcheck" }, cb, c) }; });
      const self = h("button", { class: "btn", type: "button" }, "Оцінити самостійно");
      self.addEventListener("click", () => {
        if (countWords(ta.value) < 40) { toast("Для оцінювання іспитового твору потрібно хоча б 40 слів (зараз " + countWords(ta.value) + ")."); return; }
        const n = boxes.filter(b => b.cb.checked).length;
        save(n / crit.length, null); toast("Самооцінку збережено: " + n + " з " + crit.length);
      });
      const ltOut = h("div", { class: "review-out" });
      const ext = externalCheckButtons({ w: w, level: X.draft === "exam" ? "B1" : "A2", topic: X.draft === "exam" ? "підсумковий іспит B1" : "контрольний тест A2", out: out, ltOut: ltOut,
        text: () => { Store.data.drafts[X.draft] = ta.value; Store.save(); return ta.value.trim(); }, onReview: rv => save((rv.grade - 1) / 5, rv) });
      return h("div", { class: "stack" },
        h("div", { class: "prompt" }, w.prompt),
        w.useWords && w.useWords.length ? h("div", { class: "chips" }, w.useWords.map(u => h("span", { class: "usechip" }, u))) : null,
        ta, h("div", { class: "row between" }, wc, h("div", { class: "row" }, check, ext)), ltOut, out,
        h("details", { class: "box" }, h("summary", null, ext.length > 1 ? "Самооцінка (якщо AI-перевірка недоступна)" : "Самооцінка (якщо перевірка Claude недоступна)"), h("div", { class: "wchecks" }, boxes.map(b => b.el)), h("div", { class: "row" }, self), h("details", { class: "box" }, h("summary", null, "Зразок відповіді"), h("div", { class: "model" }, w.model))));
    },
    examResult(sheet, id, X) {
      const E = C.exams[id], run = X.run;
      const secScores = E.sections.map(S => {
        const keys = [];
        if (S.items) S.items.forEach((it, i) => keys.push([S.id + ":" + i, it]));
        if (S.texts) S.texts.forEach((t, ti) => t.questions.forEach((q, qi) => keys.push([S.id + ":" + ti + ":" + qi, q])));
        if (S.task) keys.push([S.id + ":task", null]);
        const got = keys.reduce((a, [k]) => a + (run.answers[k] ? run.answers[k].s : 0), 0);
        const wrong = keys.filter(([k, it]) => it && (!run.answers[k] || run.answers[k].s < 1)).map(([k, it]) => ({ k, it, a: run.answers[k] }));
        return { S, pct: keys.length ? Math.round(100 * got / keys.length) : 0, wrong };
      });
      const pct = Math.round(secScores.reduce((a, s) => a + s.pct, 0) / secScores.length);
      const pass = pct >= (E.passScore || 60) && secScores.every(s => s.pct >= 40);
      X.setRes({ pct, pass, date: today(), secs: secScores.map(s => ({ id: s.S.id, pct: s.pct })) });
      Store.save();
      const again = h("button", { class: "btn", type: "button" }, "Перескласти");
      again.addEventListener("click", () => { X.setRun(null); Store.data.drafts[X.draft] = ""; Store.save(); this.exam(id); });
      put(sheet, 
        h("div", { class: "cert" },
          h("span", { class: "eyebrow" }, E.title + " · " + today()),
          h("h2", null, pass ? "Poziom " + id.toUpperCase() + " — zdany" : "Поки не складено"),
          h("span", { class: "stamp" }, pct + "%"),
          h("p", { class: "muted" }, pass ? (id === "b1" ? "Вітаємо! Ваш результат відповідає рівню B1. Для офіційного сертифіката наступний крок — państwowy egzamin certyfikatowy." : "Вітаємо! Рівень A2 підтверджено — можна сміливо переходити до частини B1.") : "Для заліку потрібно 60% загалом і не менше 40% у кожній частині. Розберіть помилки нижче й повторіть відповідні модулі.")),
        h("div", { class: "breakdown" }, secScores.map(s => h("div", { class: "brow" }, h("span", null, secName(s.S)), h("div", { class: "bar" }, h("i", { style: "width:" + s.pct + "%" })), h("span", null, s.pct + "%")))),
        h("h3", null, "Розбір помилок"),
        h("div", { class: "stack" }, secScores.flatMap(s => s.wrong.map(w => {
          const it = w.it;
          const right = it.type === "choice" ? it.options[it.answer] : it.type === "tf" ? (it.answer ? "Prawda" : "Fałsz") : it.type === "gap" || it.type === "translate" ? it.answers.join(" / ") : it.type === "order" ? it.words.join(" ") : it.type === "match" ? it.pairs.map(p => p[0] + " — " + p[1]).join("; ") : "";
          return h("div", { class: "corr-row" }, h("span", { class: "small muted" }, secName(s.S)), h("span", null, it.q || it.ru || ""), w.a ? h("span", { class: "w" }, w.a.given || "") : h("span", { class: "small muted" }, "без відповіді"), h("span", { class: "r" }, right), it.explain ? h("span", { class: "y" }, it.explain) : null);
        }))),
        h("div", { class: "row" }, again, h("button", { class: "btn primary", type: "button", onclick: () => this.go("home") }, "На головну"))
      );
    },

    // ── settings ──
    settings() {
      const s = Store.data.settings;
      const bg = h("div", { class: "modal-bg" });
      const close = () => bg.remove();
      bg.addEventListener("click", e => { if (e.target === bg) close(); });
      const voiceSel = h("select", { class: "inp", id: "set-voice" }, Speech.voices.length ? Speech.voices.map(v => h("option", { value: v.name, selected: Speech.voice && v.name === Speech.voice.name }, v.name + " (" + v.lang + ")")) : h("option", { value: "" }, "Польський голос не знайдено"));
      voiceSel.addEventListener("change", () => { s.voice = voiceSel.value; Speech.voice = Speech.voices.find(v => v.name === s.voice) || Speech.voice; Store.save(); Speech.speak("Dzień dobry, jak się masz?"); });
      const rate = h("input", { type: "range", min: "0.6", max: "1.2", step: "0.05", value: String(s.rate || 0.9), id: "set-rate" });
      const rateVal = h("span", { class: "small muted" }, "×" + (s.rate || 0.9));
      rate.addEventListener("input", () => { s.rate = parseFloat(rate.value); rateVal.textContent = "×" + s.rate; });
      rate.addEventListener("change", () => { Store.save(); Speech.speak("Szczebrzeszyn"); });
      const reset = h("button", { class: "btn sm", type: "button" }, "Скинути весь прогрес");
      reset.addEventListener("click", () => {
        if (!reset.dataset.sure) { reset.dataset.sure = "1"; reset.textContent = "Точно скинути? Натисніть ще раз"; return; }
        const keep = Store.data.settings; Store.data = blank(); Store.data.settings = keep; Store.save(); close(); this.go("home"); toast("Прогрес скинуто");
      });
      const theme = h("select", { class: "inp", id: "set-theme" }, [["", "Як у системі"], ["light", "Зошит (світла)"], ["dark", "Дошка (темна)"]].map(([v, t]) => h("option", { value: v, selected: (s.theme || "") === v }, t)));
      theme.addEventListener("change", () => { s.theme = theme.value; applyTheme(); Store.save(); });
      put(bg, h("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-label": "Налаштування" },
        h("h2", null, "Налаштування"),
        h("div", { class: "field" }, h("label", { for: "set-voice" }, "Голос озвучення"), voiceSel),
        h("div", { class: "field" }, h("label", { for: "set-rate" }, "Швидкість мовлення"), h("div", { class: "row" }, rate, rateVal)),
        h("div", { class: "field" }, h("label", { for: "set-theme" }, "Оформлення"), theme),
        toolsPanel(),
        h("p", { class: "small muted" }, Cloud.status === "cloud" ? "Прогрес зберігається у вашому акаунті Claude і доступний на інших пристроях." : "Прогрес зберігається в цьому браузері."),
        h("p", { class: "small muted" }, "Розпізнавання мовлення: " + (Rec.ok ? "доступне (Chrome / Edge / Safari)." : "недоступне в цьому вікні. " + Rec.hint)),
        h("div", { class: "row between" }, reset, h("button", { class: "btn primary", type: "button", onclick: close }, "Готово"))));
      document.body.appendChild(bg);
    }
  };

  // ───────────────────────── shared pieces ─────────────────────────
  function readingText(r) {
    const gl = (r.glossary || []).slice().sort((a, b) => b.pl.length - a.pl.length);
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = gl.length ? new RegExp("(" + gl.map(g => esc(g.pl)).join("|") + ")", "g") : null;
    const map = {}; gl.forEach(g => { map[g.pl] = g.ru; });
    const box = h("div", { class: "reading-text" });
    String(r.text).split(/\n\s*\n/).forEach(par => {
      const p = h("p", { title: "Натисніть, щоб послухати" });
      if (re) {
        let last = 0;
        par.replace(re, (m, _g, off) => {
          add(p, par.slice(last, off));
          const mk = h("mark", { class: "gl", "data-ru": map[m] }, m);
          p.appendChild(mk);
          last = off + m.length;
          return m;
        });
        add(p, par.slice(last));
      } else p.textContent = par;
      p.addEventListener("click", e => { if (e.target.closest("mark")) return; Speech.speak(p.textContent, { el: p }); });
      box.appendChild(p);
    });
    let pop;
    const showPop = (mk) => {
      if (!pop) { pop = h("div", { class: "pop", role: "tooltip" }); document.body.appendChild(pop); }
      pop.textContent = mk.textContent + " — " + mk.dataset.ru; pop.hidden = false;
      const r2 = mk.getBoundingClientRect();
      pop.style.left = Math.max(8, Math.min(window.innerWidth - pop.offsetWidth - 8, r2.left)) + "px";
      pop.style.top = (r2.top - pop.offsetHeight - 6 < 8 ? r2.bottom + 6 : r2.top - pop.offsetHeight - 6) + "px";
    };
    const hidePop = () => { if (pop) pop.hidden = true; };
    box.addEventListener("mouseover", e => { const mk = e.target.closest("mark.gl"); if (mk) showPop(mk); });
    box.addEventListener("mouseout", e => { if (e.target.closest("mark.gl")) hidePop(); });
    box.addEventListener("click", e => { const mk = e.target.closest("mark.gl"); if (mk) { showPop(mk); Speech.speak(mk.textContent); setTimeout(hidePop, 2200); } });
    window.addEventListener("scroll", hidePop, { passive: true });
    return box;
  }

  // Writing task: prompt, live word count / required words / checklist, Claude review, model answer.
  // o: { w, draftKey, level, topic, review, onReview(rv, words), onDone(words), doneLabel }
  const SEC_UK = { grammar: "Граматика", vocab: "Лексика", reading: "Читання", listening: "Аудіювання", writing: "Письмо" };
  const secName = S => SEC_UK[S.id] || S.title;

  function examState(id) {
    const d = Store.data;
    if (id === "b1") return { draft: "exam", get run() { return d.examRun; }, setRun(v) { d.examRun = v; }, get res() { return d.exam; }, setRes(v) { d.exam = v; } };
    d.examRuns = d.examRuns || {}; d.examRes = d.examRes || {};
    return { draft: "exam-" + id, get run() { return d.examRuns[id] || null; }, setRun(v) { d.examRuns[id] = v; }, get res() { return d.examRes[id] || null; }, setRes(v) { d.examRes[id] = v; } };
  }

  function writingPanel(o) {
    const w = o.w;
    const ta = h("textarea", { class: "inp", rows: "9", id: "w-" + o.draftKey, placeholder: "Pisz tutaj…", spellcheck: "false" });
    ta.value = Store.data.drafts[o.draftKey] || "";
    const wc = h("span", { class: "wc" });
    const uses = (w.useWords || []).map(u => ({ u, el: h("span", { class: "usechip" }, u) }));
    const checks = (w.checklist || []).map(c => ({ c, el: h("div", { class: "wcheck" }, h("span", { class: "box" }, icon("check")), c.label) }));
    const update = () => {
      const t = ta.value, n = countWords(t), low = t.toLowerCase();
      wc.textContent = n + " " + plural(n, "слово", "слова", "слів") + " · потрібно " + w.minWords + "–" + w.maxWords;
      wc.classList.toggle("ok", n >= w.minWords && n <= w.maxWords);
      uses.forEach(x => {
        const word = x.u.toLowerCase();
        const stem = word.slice(0, Math.max(3, Math.min(word.length, Math.ceil(word.length * 0.6))));
        x.el.classList.toggle("on", low.includes(stem));
      });
      checks.forEach(x => {
        let ok = false;
        try { ok = x.c.pattern ? (t.match(uniRe(x.c.pattern)) || []).length >= (x.c.min || 1) : n >= w.minWords; } catch (e) { ok = false; }
        x.el.classList.toggle("on", ok);
      });
    };
    let saveT;
    const saveDraft = () => { Store.data.drafts[o.draftKey] = ta.value; Store.save(); };
    ta.addEventListener("input", () => { update(); clearTimeout(saveT); saveT = setTimeout(saveDraft, 800); });
    update();
    const out = h("div", { class: "review-out" });
    if (o.review) renderReview(out, o.review);
    const check = aiShow(h("button", { class: "btn primary", type: "button" }, icon("spark"), "Перевірити з Claude"));
    check.addEventListener("click", async () => {
      const text = ta.value.trim();
      if (countWords(text) < 5) { toast("Для перевірки напишіть хоча б 5 слів (зараз " + countWords(text) + ")."); ta.focus(); return; }
      saveDraft();
      check.disabled = true;
      fill(out, h("div", { class: "thinking" }, "Claude читає ваш текст… зазвичай це займає до хвилини."));
      try {
        const rv = sanitizeReview(await AI.fn.json(writingPrompt(o.level, w, o.topic, text)));
        renderReview(out, rv);
        shortNotice(out, countWords(text), w);
        o.onReview(rv, countWords(text));
      } catch (e) { fill(out, h("div", { class: "notice" }, AI.errText(e) || "Перевірку зупинено.")); }
      check.disabled = false;
    });
    const finish = h("button", { class: "btn", type: "button" }, o.doneLabel || "Готово", icon("arrow"));
    finish.addEventListener("click", () => {
      const n = countWords(ta.value);
      if (n < Math.round(w.minWords * 0.6)) { toast("Текст надто короткий: " + n + " з " + w.minWords + " слів."); return; }
      saveDraft(); o.onDone(n);
    });
    const ltOut = h("div", { class: "review-out" });
    const ext = externalCheckButtons({ w: w, level: o.level, topic: o.topic, out: out, ltOut: ltOut,
      text: () => { saveDraft(); return ta.value.trim(); }, onReview: rv => o.onReview(rv, countWords(ta.value)) });
    return h("div", { class: "stack" },
      h("div", { class: "prompt" }, w.prompt),
      uses.length ? h("div", { class: "stack" }, h("span", { class: "small muted" }, "Використайте слова:"), h("div", { class: "chips" }, uses.map(x => x.el))) : null,
      checks.length ? h("div", { class: "wchecks" }, checks.map(x => x.el)) : null,
      ta, h("div", { class: "row between" }, wc, h("div", { class: "row" }, check, ext, finish)),
      AI.ready || ext.length ? null : h("p", { class: "small muted" }, "Порівняйте свій текст зі зразком. У версії курсу на claude.ai текст можна надіслати на перевірку Claude."),
      ltOut, out,
      h("details", { class: "box" }, h("summary", null, "Показати зразок"), h("div", { class: "model pl" }, w.model)));
  }

  function renderTalkResult(out, rv) {
    renderReview(out, rv);
    if (rv.goals && rv.goals.length) out.insertBefore(h("div", { class: "wchecks" }, rv.goals.map(g => h("div", { class: "wcheck" + (g.done ? " on" : "") }, h("span", { class: "box" }, icon("check")), g.goal))), out.children[1] || null);
  }

  // plain browser download; used only in the local build (inside claude.ai the .ics button is hidden)
  function saveFile(filename, text) {
    try {
      const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
      const a = h("a", { href: url, download: filename }); document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
    } catch (e) { toast("Завантаження недоступне в цьому вікні."); }
  }
  function calendarLink(time) {
    const [hh, mm] = (time || "19:00").split(":").map(Number);
    const d = new Date(); d.setDate(d.getDate() + 1); d.setHours(hh, mm, 0, 0);
    const e = new Date(d.getTime() + 30 * 60000);
    const f = x => x.getFullYear() + String(x.getMonth() + 1).padStart(2, "0") + String(x.getDate()).padStart(2, "0") + "T" + String(x.getHours()).padStart(2, "0") + String(x.getMinutes()).padStart(2, "0") + "00";
    let tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (err) { tz = ""; }
    return { start: f(d), url: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Polski A1–B1: урок на 30 хвилин") +
      "&details=" + encodeURIComponent("Один урок курсу + повторення карток. Codziennie po trochu!") + "&dates=" + f(d) + "/" + f(e) + "&recur=" + encodeURIComponent("RRULE:FREQ=DAILY") + (tz ? "&ctz=" + encodeURIComponent(tz) : "") };
  }
  function icsFile(time) {
    const c = calendarLink(time);
    const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Polski A1-B1//RU", "BEGIN:VEVENT", "UID:polski-" + Date.now() + "@kurs", "DTSTAMP:" + now, "DTSTART:" + c.start, "DURATION:PT30M",
      "RRULE:FREQ=DAILY", "SUMMARY:Polski A1–B1: урок на 30 хвилин", "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:Czas na polski!", "TRIGGER:PT0M", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n") + "\r\n";
  }
  function toolsPanel() {
    const time = h("input", { type: "time", class: "inp", id: "rem-time", value: Store.data.settings.remTime || "19:00", style: "max-width:130px" });
    const gcal = h("a", { class: "btn sm", href: calendarLink(time.value).url, target: "_blank", rel: "noopener" }, "Google Календар");
    time.addEventListener("change", () => { Store.data.settings.remTime = time.value; Store.save(); gcal.href = calendarLink(time.value).url; });
    const ics = h("button", { class: "btn sm", type: "button", hidden: !!window.claude }, "Файл .ics");
    ics.addEventListener("click", () => saveFile("polski-codziennie.ics", icsFile(time.value)));
    return h("div", { class: "stack" },
      h("div", { class: "field" }, h("label", { for: "rem-time" }, "Щоденне нагадування в календарі"),
        h("div", { class: "row" }, time, gcal, ics)));
  }

  function writingPrompt(level, w, topic, text) {
    return "Ти — досвідчений викладач польської мови для україномовних учнів, екзаменатор рівня " + level + ".\n" +
      "Завдання учня: " + w.prompt + "\nОбсяг: " + w.minWords + "–" + w.maxWords + " слів. Потрібно вжити слова: " + (w.useWords || []).join(", ") +
      ". Граматична тема: " + topic + ".\n\nТекст учня:\n\"\"\"\n" + text.slice(0, 6000) + "\n\"\"\"\n\n" +
      "Оціни текст за критеріями: виконання завдання, граматика, лексика, зв’язність. Будь доброзичливим, але точним. " +
      "Відповідай ТІЛЬКИ JSON такого вигляду:\n" +
      '{"grade": 1-6 (польська шкільна шкала: 6 celujący … 1 niedostateczny), "summary": "2–3 речення українською: що вдалося і що покращити", ' +
      '"corrections": [{"wrong": "точний фрагмент із тексту учня", "right": "виправлений фрагмент", "why": "коротке пояснення українською"}], ' +
      '"improved": "увесь текст учня, виправлений і трохи покращений, польською", "tips": ["1–3 поради щодо лексики або стилю, українською, з польськими словами"]}\n' +
      "Не більше 8 найважливіших виправлень. Якщо помилок немає, corrections — порожній масив.";
  }
  function sanitizeReview(r) {
    r = r && typeof r === "object" ? r : {};
    const g = Math.max(1, Math.min(6, Math.round(Number(r.grade) || 1)));
    return {
      grade: g,
      summary: String(r.summary || ""),
      corrections: (Array.isArray(r.corrections) ? r.corrections : []).slice(0, 10).map(c => ({ wrong: String(c.wrong || ""), right: String(c.right || ""), why: String(c.why || "") })),
      improved: String(r.improved || ""),
      tips: (Array.isArray(r.tips) ? r.tips : []).slice(0, 4).map(String)
    };
  }
  function renderReview(out, rv) {
    const name = (GRADES.find(g => g[1] === rv.grade) || [])[2] || "";
    fill(out, 
      h("div", { class: "row" }, h("span", { class: "grade-hand", style: "font-size:3.4rem" }, String(rv.grade)), h("span", { class: "grade-hand", style: "font-size:1.5rem" }, name)),
      rv.summary ? h("p", null, rv.summary) : null,
      rv.corrections.length ? h("div", { class: "corrs" }, rv.corrections.map(c => h("div", { class: "corr-row" }, h("span", null, h("span", { class: "w" }, c.wrong), "  →  ", h("span", { class: "r" }, c.right)), c.why ? h("span", { class: "y" }, c.why) : null))) : null,
      rv.tips.length ? h("ul", { class: "goals" }, rv.tips.map(t => h("li", null, t))) : null,
      rv.improved ? h("details", { class: "box" }, h("summary", null, "Виправлена версія"), h("div", { class: "model" }, rv.improved)) : null
    );
  }

  function addToSrs(l) {
    l.vocab.forEach(v => {
      const key = l.id + "|" + v.pl;
      if (!Store.data.srs[key]) Store.data.srs[key] = { pl: v.pl, ru: v.ru, ex: v.ex || "", box: 1, due: addDays(today(), 1) };
    });
  }
  function srsDue() { const t = today(); return Object.keys(Store.data.srs).filter(k => Store.data.srs[k].due <= t); }
  function streak() {
    let n = 0, d = today();
    if (!Store.data.days[d]) d = addDays(d, -1);
    while (Store.data.days[d]) { n++; d = addDays(d, -1); }
    return n;
  }
  function applyTheme() {
    const t = Store.data.settings.theme;
    if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
  }

  window.addEventListener("popstate", () => App.go(location.hash.slice(1) || "home", true));
  Store.load(); applyTheme();
  App.start();
})();
