// Собирает курс в один HTML-файл: node tools/build.js
//   dist/polski-a1-b1.html — открыть локально в браузере (полный документ)
//   dist/artifact.html             — то же без <!doctype>/<head>, для публикации как Artifact
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
const safe = js => js.replace(/<\/script/gi, "<\\/script");

const courseDir = path.join(root, "course");
const files = fs.readdirSync(courseDir).filter(f => /^(m\d\d|exam(-\w+)?|life|dialogs)\.js$/.test(f)).sort();
const course = files.map(f => "// " + f + "\n" + read("course/" + f)).join("\n;\n");

const page = read("src/shell.html")
  .replace("/*__CSS__*/", () => read("src/app.css"))
  .replace("/*__COURSE__*/", () => safe(course))
  .replace("/*__APP__*/", () => safe(read("src/app.js")));

fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist/artifact.html"), page);
const full = '<!doctype html>\n<html lang="uk">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n</head>\n<body>\n' + page + "\n</body>\n</html>\n";
fs.writeFileSync(path.join(root, "dist/polski-a1-b1.html"), full);
console.log("Модулей: " + files.filter(f => f[0] === "m").length + " + " + files.filter(f => f[0] !== "m").join(", ") + ", размер: " + Math.round(full.length / 1024) + " КБ");
