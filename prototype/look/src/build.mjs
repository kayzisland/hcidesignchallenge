// Puts the data, the four designs and the test page into one file: ../lockedin-look-test.html
// Usage: node src/build.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const read = (f) => fs.readFileSync(path.join(here, f), "utf8");
const designs = fs.readdirSync(here).filter((f) => /^d\d-.*\.js$/.test(f)).sort();
// A closing script tag inside a design's strings would end the page's own script early.
const safe = (s) => s.replace(/<\/script/gi, "<\\/script");
const html = read("harness.html")
  .replace("/*DATA*/", () => safe(read("data.js")))
  .replace("/*DESIGNS*/", () => designs.map((f) => `// ${f}\n${safe(read(f))}`).join("\n"));
const out = path.join(here, "..", "lockedin-look-test.html");
fs.writeFileSync(out, html);
console.log(`${designs.length} designs (${designs.join(", ")}) -> ${path.relative(process.cwd(), out)} · ${(html.length / 1024).toFixed(0)} KB`);
