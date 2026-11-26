# The brief every design was given

Four designers were given this same brief, one design each, and worked without seeing each other's work. Nobody outside saw any design until all four existed (parallel prototyping: Dow et al. 2010).

## The job

Draw LockedIn's look. LockedIn is a study app for university students who struggle to start studying. You are given seven screens and exactly what is on them. **You decide how it looks, never what it does.**

What is yours to design:
- **Placement:** where everything sits, the grid, what is biggest, what comes first.
- **Widgets:** what kind of control or display each thing is (a tab bar or a rail; a chart, a ring or a sentence; buttons or a list).
- **Styling:** type, colour, shape, borders, depth, spacing, density.
- **Icons:** which, in what style, or none.
- **How the numbers are drawn.**

What is fixed:
- **The content.** Every value in `data.js` for a screen must appear on that screen, word for word (keys starting with `_` are drawing data and need not be printed). Add nothing: no new features, no new numbers, no new buttons, no made-up text. Decorative labels that carry no information are the only exception, and keep them rare.
- **The seven screens** listed in `LOOK.screens`.

## The students

- **Tayo, 21, engineering.** Knows how to revise and can't get started. Will not configure anything. Studies in a loud student hub and at a bedroom desk with his phone beside him.
- **Maya, 20, psychology.** Attention drifts within ten minutes. Hard material makes her quit. Studies in bed or at a kitchen table. Half the testers will not be STEM students: one reader said numbers made the app feel "for STEM students".

## Rules no design may break

1. **One next step is obvious** on every screen that has one.
2. **Nothing pressures.** No red warnings, no streaks, no countdowns. The words "overdue" and "behind" never appear. The student is never told off, in words or in pictures.
3. **Status is never shown by colour alone.** A right answer, a wrong pick, done, suggested: each also has a word, a mark or a shape.
4. **Readable.** Text contrast of at least 4.5:1. Body text no smaller than 16 px on the laptop and 17 px on the phone, unless your design's stated position on density needs smaller for secondary labels, and never under 13 px.
5. **Tappable.** Anything pressed is at least 40 px high on the laptop and 48 px on the phone.
6. **Wrong is not red.** A wrong pick must not look like an alarm.

## The format

One file, `src/dN-name.js`, that pushes one object:

```js
LOOK.designs.push({
  id: "paper",                    // lower case, one word
  name: "Paper",
  idea: "One sentence: the stance this design takes.",
  fonts: ["https://fonts.googleapis.com/css2?family=...&display=swap"],  // Google Fonts stylesheets, or []
  axes: {                         // one or two plain sentences each: what you chose and why
    composition: "", menu: "", density: "", numbers: "", shape: "", type: "", colour: "", icons: "", motion: "",
  },
  css: `...`,                     // all the design's CSS
  screens: {
    today(d) { return `...`; },   // d is LOOK.data; return an HTML string
    learn(d) {}, question(d) {}, feedback(d) {}, progress(d) {}, week(d) {}, phone(d) {},
  },
  styleSheet(d) { return `...`; } // one page showing the design system: see below
});
```

- **Use the data.** Build the HTML from `d` (for example `d.today.hero.title`); do not retype the content.
- **Static.** No scripts in the screens. Hover and focus styles are welcome.
- **Self-contained.** Icons and charts are inline SVG that you draw. No images, no icon fonts, no emoji.
- **Sizes.** Laptop screens are drawn in a window 1280 px wide and may scroll down, never sideways. The first 800 px is what a student sees first, so the next step belongs there. The phone screen is 390 px wide.
- **Fonts** must name fallbacks, so the screen still works offline.
- **`motion`** cannot be shown in a still. Describe it in `axes.motion` only.
- **`styleSheet`** is one page, 1280 px wide, that a reader can take in at a glance: the typefaces and sizes, the colours with their hex values and what each is for, every icon with its name, and the main components in each of their states (button, answer option, the "how sure are you" control, status marks, the menu).

## Checking your work

```
node src/shot.mjs <id> <a folder for pictures>
```

It draws every screen, tells you if any content is missing or a screen scrolls sideways, and saves a PNG of each. Look at the PNGs. A design is finished when the check passes and every picture looks deliberate.
