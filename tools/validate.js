// Polski A1–B1 · Copyright 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// SPDX-License-Identifier: Apache-2.0
// Проверка файлов контента курса: node tools/validate.js course/m01.js [course/m02.js ...]
// Без аргументов проверяет все course/m*.js и course/exam.js.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let files = process.argv.slice(2);
if (!files.length) {
  const dir = path.join(root, "course");
  files = fs.readdirSync(dir).filter(f => /^(m\d\d|exam(-\w+)?|life|dialogs)\.js$/.test(f)).sort().map(f => path.join("course", f));
}

let errors = 0, warnings = 0;
const err = (where, msg) => { errors++; console.log(`  ✗ ${where}: ${msg}`); };
const warn = (where, msg) => { warnings++; console.log(`  ! ${where}: ${msg}`); };
const W_ = "[\\p{L}\\p{N}_]";
const uniRe = p => new RegExp(String(p).replace(/\\b/g, "(?:(?<!" + W_ + ")(?=" + W_ + ")|(?<=" + W_ + ")(?!" + W_ + "))").replace(/\\w/g, W_).replace(/\\W/g, "[^\\p{L}\\p{N}_]"), "giu");
const words = s => (s.match(/[\p{L}\d-]+/gu) || []).length;
const isStr = s => typeof s === "string" && s.trim().length > 0;

function checkExercise(ex, where) {
  if (!ex || !ex.type) return err(where, "нет type");
  if (["choice", "gap", "order", "match", "translate", "tf"].indexOf(ex.type) < 0) return err(where, "неизвестный type " + ex.type);
  if (ex.type !== "tf" && !isStr(ex.explain)) warn(where, "нет explain");
  switch (ex.type) {
    case "choice":
      if (!isStr(ex.q)) err(where, "нет q");
      if (!Array.isArray(ex.options) || ex.options.length < 2) err(where, "options < 2");
      else if (!(Number.isInteger(ex.answer) && ex.answer >= 0 && ex.answer < ex.options.length)) err(where, "answer вне диапазона");
      else if (new Set(ex.options).size !== ex.options.length) err(where, "повторяющиеся options");
      break;
    case "gap":
      if (!isStr(ex.q) || (ex.q.match(/___/g) || []).length !== 1) err(where, "в q должен быть ровно один ___");
      if (!Array.isArray(ex.answers) || !ex.answers.length || !ex.answers.every(isStr)) err(where, "answers пусты");
      break;
    case "order":
      if (!Array.isArray(ex.words) || ex.words.length < 3) err(where, "words < 3");
      if (!isStr(ex.ru)) warn(where, "нет ru");
      break;
    case "match":
      if (!Array.isArray(ex.pairs) || ex.pairs.length < 3) err(where, "pairs < 3");
      else {
        if (!ex.pairs.every(p => Array.isArray(p) && p.length === 2 && isStr(p[0]) && isStr(p[1]))) err(where, "пара должна быть [pl, ru]");
        if (new Set(ex.pairs.map(p => p[1])).size !== ex.pairs.length) err(where, "повторяющиеся правые части");
        if (new Set(ex.pairs.map(p => p[0])).size !== ex.pairs.length) err(where, "повторяющиеся левые части");
      }
      break;
    case "translate":
      if (!isStr(ex.ru)) err(where, "нет ru");
      if (!Array.isArray(ex.answers) || !ex.answers.length) err(where, "answers пусты");
      break;
    case "tf":
      if (!isStr(ex.q)) err(where, "нет q");
      if (typeof ex.answer !== "boolean") err(where, "answer должен быть true/false");
      break;
  }
}

function checkWriting(w, where, level) {
  if (!w) return err(where, "нет writing");
  if (!isStr(w.prompt)) err(where, "нет prompt");
  if (!isStr(w.model)) err(where, "нет model");
  if (!(w.minWords > 0 && w.maxWords > w.minWords)) err(where, "minWords/maxWords");
  (w.checklist || []).forEach((c, i) => {
    if (!isStr(c.label)) err(where + ".checklist[" + i + "]", "нет label");
    if (c.pattern) {
      try {
        const re = uniRe(c.pattern);
        const n = (w.model.match(re) || []).length;
        if (n < (c.min || 1)) warn(where + ".checklist[" + i + "]", `образец не проходит pattern (${n}/${c.min || 1}): ${c.pattern}`);
      } catch (e) { err(where + ".checklist[" + i + "]", "битый RegExp: " + e.message); }
    }
  });
  (w.useWords || []).forEach(u => {
    const stem = u.toLowerCase().slice(0, Math.max(3, Math.min(u.length, Math.ceil(u.length * 0.6))));
    if (w.model.toLowerCase().indexOf(stem) < 0) warn(where, "образец не содержит useWord «" + u + "»");
  });
  const n = words(w.model);
  if (n < w.minWords * 0.9 || n > w.maxWords * 1.15) warn(where, `образец ${n} слов при норме ${w.minWords}–${w.maxWords}`);
}

function checkReading(r, where, isExam) {
  if (!r) return err(where, "нет reading");
  if (!isStr(r.title)) err(where, "нет title");
  if (!isStr(r.text)) err(where, "нет text");
  (r.glossary || []).forEach(g => {
    if (!isStr(g.pl) || !isStr(g.ru)) err(where, "glossary: нужен pl и ru");
    else if (r.text.indexOf(g.pl) < 0) warn(where, "слово из glossary не найдено в тексте: " + g.pl);
  });
  if (!Array.isArray(r.questions) || r.questions.length < 3) err(where, "questions < 3");
  else r.questions.forEach((q, i) => checkExercise(q, where + ".q" + i));
}

function checkLesson(l, mod, k) {
  const where = l.id || (mod.id + "l" + (k + 1));
  if (l.id !== `${mod.id}l${k + 1}`) err(where, "id должен быть " + mod.id + "l" + (k + 1));
  ["title", "titleRu", "topic"].forEach(f => isStr(l[f]) || err(where, "нет " + f));
  if (!Array.isArray(l.goals) || l.goals.length < 2) err(where, "goals < 2");
  if (!Array.isArray(l.vocab) || l.vocab.length < 8) err(where, "vocab < 8");
  else l.vocab.forEach((v, i) => { if (!isStr(v.pl) || !isStr(v.ru)) err(where + ".vocab[" + i + "]", "нужны pl и ru"); });
  if (!l.grammar || !isStr(l.grammar.title) || !isStr(l.grammar.html)) err(where, "grammar неполная");
  else if (l.grammar.html.indexOf('class="pl"') < 0) warn(where, "в grammar нет class=\"pl\"");
  const minEx = l.review ? 12 : 8;
  if (!Array.isArray(l.exercises) || l.exercises.length < minEx) err(where, `exercises < ${minEx}`);
  else {
    l.exercises.forEach((e, i) => checkExercise(e, where + ".ex" + i));
    const types = new Set(l.exercises.map(e => e.type));
    if (types.size < 3) warn(where, "менее 3 типов упражнений");
  }
  const p = l.pronunciation;
  if (!p || !Array.isArray(p.items) || p.items.length < 4) err(where, "pronunciation.items < 4");
  else {
    if (!isStr(p.focus) || !isStr(p.tip)) err(where, "pronunciation: нет focus/tip");
    p.items.forEach((it, i) => {
      const w = where + ".pron" + i;
      if (it.type === "listen" || it.type === "dictation") { if (!isStr(it.text)) err(w, "нет text"); }
      else if (it.type === "minimal") { if (!Array.isArray(it.options) || it.options.length < 2) err(w, "options < 2"); }
      else if (it.type === "stress") {
        if (!Array.isArray(it.syllables) || it.syllables.join("") !== it.word) err(w, "слоги не склеиваются в слово " + it.word);
        if (!(it.answer >= 0 && it.answer < (it.syllables || []).length)) err(w, "answer вне диапазона");
        (it.accept || []).forEach(k => { if (!(k >= 0 && k < it.syllables.length && k !== it.answer)) err(w, "accept вне диапазона"); });
      } else err(w, "неизвестный type " + it.type);
    });
    if (!p.items.some(it => it.type === "dictation")) warn(where, "нет dictation");
  }
  checkReading(l.reading, where + ".reading");
  checkWriting(l.writing, where + ".writing", mod.level);
}

for (const f of files) {
  console.log("• " + f);
  const code = fs.readFileSync(path.resolve(root, f), "utf8");
  // остатки русского: буквы, которых нет в украинском, — ошибка; частые русские слова — предупреждение
  (code.match(/.{0,30}[ыэъёЫЭЪЁ].{0,30}/g) || []).forEach(m => err(f, "русская буква: «" + m.trim() + "»"));
  (code.match(/.{0,25}(?<![\p{L}’'\[])(что|это|если|или|который|которая|которые|только|нужно|можно|очень|когда|сейчас|потому|также|уже|и)(?![\p{L}’'\]]).{0,25}/gu) || [])
    .forEach(m => warn(f, "похоже на русский: «" + m.trim() + "»"));
  const got = { modules: [], exam: null, life: [], dialogs: [] };
  const sandbox = { COURSE: { module: m => got.modules.push(m), exam: e => { got.exam = e; }, life: t => got.life.push(t), dialog: d => got.dialogs.push(d) } };
  try { vm.runInNewContext(code, sandbox, { filename: f }); }
  catch (e) { err(f, "ошибка JS: " + e.message); continue; }
  for (const mod of got.modules) {
    ["id", "title", "titleRu", "summary", "level"].forEach(k => isStr(mod[k]) || err(mod.id || f, "нет " + k));
    if (!Array.isArray(mod.lessons) || mod.lessons.length !== 5) err(mod.id, "должно быть 5 уроков");
    else {
      mod.lessons.forEach((l, k) => checkLesson(l, mod, k));
      if (!mod.lessons[4].review) err(mod.id, "5-й урок должен иметь review: true");
    }
  }
  if (got.exam) {
    const ex = got.exam;
    (ex.sections || []).forEach(s => {
      const w = "exam." + s.id;
      (s.items || []).forEach((it, i) => checkExercise(it, w + "[" + i + "]"));
      (s.texts || []).forEach((t, i) => checkReading(t, w + ".text" + i, true));
      if (s.task) checkWriting(s.task, w, "B1");
    });
  }
  got.life.forEach((t, i) => {
    const w = "life[" + (t.module || i) + "]";
    if (!/^m\d\d$/.test(t.module || "")) err(w, "module должен быть mNN");
    ["title", "titleRu", "intro"].forEach(k => isStr(t[k]) || err(w, "нет " + k));
    if (!t.doc || !isStr(t.doc.html)) err(w, "нет doc.html");
    else if (/<(script|img|a|iframe|style)\b|\sstyle=|\son\w+=/i.test(t.doc.html)) err(w, "недопустимый HTML в doc");
    if (!Array.isArray(t.questions) || t.questions.length < 3) err(w, "questions < 3");
    else t.questions.forEach((q, k) => checkExercise(q, w + ".q" + k));
    if (t.task) checkWriting(t.task, w + ".task");
  });
  got.dialogs.forEach((d, i) => {
    const w = "dialog[" + (d.module || i) + "]";
    ["module", "title", "titleRu", "scenario", "role", "setting", "grammar", "opener", "level"].forEach(k => isStr(d[k]) || err(w, "нет " + k));
    if (!Array.isArray(d.goals) || d.goals.length < 2) err(w, "goals < 2");
    if (!Array.isArray(d.phrases) || !d.phrases.every(p => isStr(p.pl) && isStr(p.ru))) err(w, "phrases: нужны pl и ru");
  });
  if (!got.modules.length && !got.exam && !got.life.length && !got.dialogs.length) err(f, "файл ничего не зарегистрировал (COURSE.module / COURSE.exam)");
  // польские поля: слова, где смешаны латиница и кириллица (например, кириллическая «о» в польском слове)
  const pol = [];
  const ex = e => { if (!e) return; pol.push(...(e.answers || []), ...(e.words || []), ...(e.alt || [])); if (e.type === "match") e.pairs.forEach(p => pol.push(p[0])); };
  const rd = r => { if (!r) return; pol.push(r.text || ""); (r.glossary || []).forEach(g => pol.push(g.pl)); (r.questions || []).forEach(ex); };
  got.modules.forEach(m => (m.lessons || []).forEach(l => {
    (l.vocab || []).forEach(v => pol.push(v.pl, v.ex || ""));
    (l.exercises || []).forEach(ex);
    ((l.pronunciation || {}).items || []).forEach(it => pol.push(it.text || "", it.word || "", ...(it.options || []), ...(it.syllables || [])));
    rd(l.reading);
    if (l.writing) pol.push(l.writing.model || "", ...(l.writing.useWords || []));
  }));
  got.life.forEach(t => { (t.questions || []).forEach(ex); if (t.task) pol.push(t.task.model || ""); });
  got.dialogs.forEach(d => { pol.push(d.opener || ""); (d.phrases || []).forEach(p => pol.push(p.pl)); });
  if (got.exam) (got.exam.sections || []).forEach(s => { (s.items || []).forEach(ex); (s.texts || []).forEach(rd); if (s.task) pol.push(s.task.model || ""); });
  pol.forEach(s => (String(s).match(/[\p{L}]*(?:\p{Script=Latin}\p{Script=Cyrillic}|\p{Script=Cyrillic}\p{Script=Latin})[\p{L}]*/gu) || [])
    .forEach(w => err(f, "смешаны латиница и кириллица в польском тексте: «" + w + "»")));
}
console.log(`\nОшибок: ${errors}, предупреждений: ${warnings}`);
process.exit(errors ? 1 : 0);
