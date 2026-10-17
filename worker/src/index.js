// Polski A1–B1 · Copyright 2026 Alex Pavlyuk (https://github.com/Alex-Pavlyuk)
// SPDX-License-Identifier: Apache-2.0
//
// Cloudflare Worker: перевірка творів курсу через Workers AI.
// Приймає лише POST /review з текстом учня й параметрами завдання, сам формує запит до моделі
// (довільні промпти не приймаються) і повертає оцінку в тому самому форматі, що й Claude у курсі.

const MODEL = "@cf/google/gemma-4-26b-a4b-it";
const ALLOWED_ORIGINS = ["https://alex-pavlyuk.github.io"];
const LIMITS = { text: 4000, prompt: 1500, topic: 200, word: 40, words: 10 };

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    const url = new URL(request.url);
    if (url.pathname !== "/review" || request.method !== "POST") return json({ error: "not_found" }, 404, cors);
    if (!cors["Access-Control-Allow-Origin"]) return json({ error: "origin_not_allowed" }, 403, cors);

    if (env.LIMITER) {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      const { success } = await env.LIMITER.limit({ key: "review:" + ip });
      if (!success) return json({ error: "rate_limited" }, 429, cors);
    }

    let body;
    try { body = await request.json(); } catch (e) { return json({ error: "bad_json" }, 400, cors); }
    const task = cleanTask(body);
    if (!task) return json({ error: "bad_request" }, 400, cors);

    let raw;
    try {
      const res = await env.AI.run(MODEL, {
        messages: [
          { role: "system", content: "Ти — досвідчений викладач польської мови для україномовних учнів. Відповідаєш лише валідним JSON без markdown." },
          { role: "user", content: reviewPrompt(task) }
        ],
        temperature: 0.2,
        max_completion_tokens: 1500,
        // Gemma 4 is a reasoning model; without this the token budget goes to reasoning_content and content stays empty
        chat_template_kwargs: { enable_thinking: false }
      });
      raw = extractText(res);
    } catch (e) {
      return json({ error: "model_unavailable" }, 503, cors);
    }

    const review = parseReview(raw);
    if (!review) return json({ error: "bad_model_output" }, 502, cors);
    return json(review, 200, cors);
  }
};

function corsHeaders(origin) {
  const ok = ALLOWED_ORIGINS.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  const h = { "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400", "Vary": "Origin" };
  if (ok) h["Access-Control-Allow-Origin"] = origin;
  return h;
}

function json(data, status, headers) {
  return new Response(JSON.stringify(data), { status, headers: Object.assign({ "Content-Type": "application/json; charset=utf-8" }, headers) });
}

const str = (v, max) => (typeof v === "string" ? v : "").slice(0, max).trim();

function cleanTask(b) {
  if (!b || typeof b !== "object") return null;
  const text = str(b.text, LIMITS.text);
  const prompt = str(b.prompt, LIMITS.prompt);
  if (text.length < 20 || !prompt) return null;
  const level = ["A2", "B1"].includes(b.level) ? b.level : "B1";
  const minWords = Math.max(10, Math.min(400, Number(b.minWords) || 40));
  const maxWords = Math.max(minWords, Math.min(500, Number(b.maxWords) || 200));
  const useWords = (Array.isArray(b.useWords) ? b.useWords : []).slice(0, LIMITS.words).map(w => str(w, LIMITS.word)).filter(Boolean);
  return { text, prompt, level, minWords, maxWords, useWords, topic: str(b.topic, LIMITS.topic) };
}

function reviewPrompt(t) {
  return "Ти — екзаменатор рівня " + t.level + ".\n" +
    "Завдання учня: " + t.prompt + "\nОбсяг: " + t.minWords + "–" + t.maxWords + " слів. Потрібно вжити слова: " + (t.useWords.join(", ") || "—") +
    ". Граматична тема: " + (t.topic || "—") + ".\n\nТекст учня (польською):\n\"\"\"\n" + t.text + "\n\"\"\"\n\n" +
    "Оціни текст за критеріями: виконання завдання, граматика, лексика, зв’язність. Будь доброзичливим, але точним. " +
    "Відповідай ТІЛЬКИ JSON такого вигляду:\n" +
    '{"grade": число 1-6 (польська шкільна шкала: 6 celujący … 1 niedostateczny), "summary": "2–3 речення українською: що вдалося і що покращити", ' +
    '"corrections": [{"wrong": "точний фрагмент із тексту учня", "right": "виправлений фрагмент", "why": "коротке пояснення українською"}], ' +
    '"improved": "увесь текст учня, виправлений і трохи покращений, польською", "tips": ["1–3 поради щодо лексики або стилю українською, з польськими словами"]}\n' +
    "Не більше 8 найважливіших виправлень. Якщо помилок немає, corrections — порожній масив.";
}

// Workers AI chat models answer either in OpenAI form (choices[0].message.content) or as { response }.
function extractText(res) {
  if (!res) return "";
  if (typeof res === "string") return res;
  if (typeof res.response === "string") return res.response;
  if (res.response && typeof res.response === "object") return JSON.stringify(res.response);
  const c = res.choices && res.choices[0];
  if (c && c.message && typeof c.message.content === "string") return c.message.content;
  if (c && typeof c.text === "string") return c.text;
  return "";
}

function parseReview(raw) {
  if (!raw) return null;
  let s = String(raw).replace(/```(?:json)?/gi, "");
  const a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a < 0 || b <= a) return null;
  let r;
  try { r = JSON.parse(s.slice(a, b + 1)); } catch (e) { return null; }
  const grade = Math.max(1, Math.min(6, Math.round(Number(r.grade) || 1)));
  return {
    grade,
    summary: String(r.summary || "").slice(0, 1200),
    corrections: (Array.isArray(r.corrections) ? r.corrections : []).slice(0, 10)
      .map(c => ({ wrong: String((c && c.wrong) || "").slice(0, 300), right: String((c && c.right) || "").slice(0, 300), why: String((c && c.why) || "").slice(0, 400) }))
      .filter(c => c.wrong || c.right),
    improved: String(r.improved || "").slice(0, 5000),
    tips: (Array.isArray(r.tips) ? r.tips : []).slice(0, 4).map(t => String(t).slice(0, 400)),
    model: MODEL
  };
}
