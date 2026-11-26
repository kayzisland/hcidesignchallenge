// Draws one design's screens to PNG and checks that nothing was added or left out.
// Usage: node shot.mjs <designId> <outDir>
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const puppeteer = (await import("/Users/jivenchana/PycharmProjects/LockedIn/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js")).default;
const here = path.dirname(fileURLToPath(import.meta.url));
const [id, out] = process.argv.slice(2);
if (!id || !out) { console.log("usage: node shot.mjs <designId> <outDir>"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
const file = fs.readdirSync(here).find((f) => /^d\d-.*\.js$/.test(f) && fs.readFileSync(path.join(here, f), "utf8").includes(`id: "${id}"`));
if (!file) { console.log(`no src/dN-*.js declares id: "${id}"`); process.exit(1); }
const data = fs.readFileSync(path.join(here, "data.js"), "utf8");
const design = fs.readFileSync(path.join(here, file), "utf8");
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
let bad = 0;
const leaves = (v, k = "") => k.startsWith("_") ? [] : Array.isArray(v) ? v.flatMap((x) => leaves(x)) : v && typeof v === "object" ? Object.entries(v).flatMap(([kk, x]) => leaves(x, kk)) : [String(v)];
const norm = (s) => s.replace(/\s+/g, " ").replace(/[’‘]/g, "'").toLowerCase();
const shell = (fonts, css, html) => `<!doctype html><html lang="en"><head><meta charset="utf-8">${fonts.map((u) => `<link rel="stylesheet" href="${u}">`).join("")}<style>html,body{margin:0}${css}</style></head><body>${html}</body></html>`;
await page.setContent(`<script>${data}</script><script>${design}</script>`);
const info = await page.evaluate(() => { const d = LOOK.designs[0]; return d ? { id: d.id, name: d.name, fonts: d.fonts || [], css: d.css, screens: LOOK.screens, html: Object.fromEntries(LOOK.screens.map((s) => [s.id, d.screens[s.id] ? d.screens[s.id](LOOK.data) : null])), sheet: d.styleSheet ? d.styleSheet(LOOK.data) : null, axes: d.axes || null, all: LOOK.data } : null; });
if (!info) { console.log("the file did not push a design onto LOOK.designs", errors); process.exit(1); }
for (const s of info.screens) {
  if (!info.html[s.id]) { console.log(`MISSING SCREEN ${s.id}`); bad++; continue; }
  await page.setViewport({ width: s.device === "phone" ? 390 : 1280, height: s.device === "phone" ? 780 : 800, deviceScaleFactor: s.device === "phone" ? 2 : 1 });
  await page.setContent(shell(info.fonts, info.css, info.html[s.id]), { waitUntil: "load", timeout: 20000 }).catch(() => {});
  await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))]));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(out, `${id}-${s.id}.png`), fullPage: true });
  const text = norm(await page.evaluate(() => document.body.textContent));
  const want = [...leaves(info.all[s.id]), ...(s.menu ? info.all.menu : [])];
  const missing = want.filter((w) => !text.includes(norm(w)));
  const size = await page.evaluate(() => ({ w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }));
  const wide = size.w > (s.device === "phone" ? 390 : 1280);
  if (missing.length || wide) bad++;
  console.log(`${s.id}: ${size.w}x${size.h}${wide ? " TOO WIDE (scrolls sideways)" : ""}${missing.length ? `\n   NOT ON SCREEN: ${missing.map((m) => JSON.stringify(m)).join(", ")}` : " · every item present"}`);
}
if (info.sheet) { await page.setViewport({ width: 1280, height: 800 }); await page.setContent(shell(info.fonts, info.css, info.sheet), { waitUntil: "load", timeout: 20000 }).catch(() => {}); await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))])); await page.screenshot({ path: path.join(out, `${id}-stylesheet.png`), fullPage: true }); console.log("stylesheet: drawn"); } else { console.log("MISSING styleSheet()"); bad++; }
const AXES = ["composition", "menu", "density", "numbers", "shape", "type", "colour", "icons", "motion"];
const noAxes = AXES.filter((a) => !info.axes || !info.axes[a]);
if (noAxes.length) { console.log("MISSING axes:", noAxes.join(", ")); bad++; }
if (errors.length) { console.log("PAGE ERRORS:", errors.join(" | ")); bad++; }
console.log(bad ? `\n${bad} problem(s) to fix` : `\nOK: ${info.name} passes. Pictures are in ${out}`);
await browser.close();
process.exit(bad ? 2 : 0);
