# The look test: four designs for LockedIn

Four complete looks for the same seven LockedIn screens, with identical content, and a test page that shows them to students. The reasoning is in [`../../ideate/visual-design-space.md`](../../ideate/visual-design-space.md).

## Open it

**[`lockedin-look-test.html`](lockedin-look-test.html)**: download it and open it in Chrome.

**Running sessions:** [`look-test-run-sheet.md`](look-test-run-sheet.md) has the checklist, session steps, facilitator rules and tonight's write-up. Test page v2 (27 Nov) changed two reading questions, hides the answers, times from the question, adds layout and density picks, session details and a **Tally all testers** page; the run sheet lists every change and why. It is one file. It needs the internet only for fonts; offline, each design falls back to similar system fonts.

| On the first screen | What it does |
|---|---|
| **Start the test** | The tester flow (below). Asks for a tester ID; never a name |
| **Browse the designs** | Every design, every screen and every style sheet, under their real names. For the team, not for testers |
| **Sheets for the deck** | The four designs side by side for each screen, and the table of what each chose on each axis |

## The four

| | Stance | Menu | Numbers | Type and colour | Icons |
|---|---|---|---|---|---|
| **Soft Focus** | The hi-fi as built: the control | Left rail | Score and line chart | Display face and Atkinson Hyperlegible; a hue per module | Line icons with words |
| **Paper** | A calm page you read | Words across the top | Sentences, dots, thin rules | Serif for reading; ink and one accent | None |
| **Blocks** | Big, bold, hard to miss | Tab bar with pictograms | Big numerals, rings, blocks | Heavy sans; a colour block per module | Filled pictograms |
| **Timeline** | Your day is the interface | Stops on a line | Time on an axis | Narrow sans with aligned figures; greys and stripes | Markers on a line |

Every screen of every design shows exactly the same words and numbers (`src/data.js`). Only the look differs.

## The tester flow (25 to 30 minutes)

For each of seven screens: Today, a Learn step, a Practise question, after a wrong answer, Progress, Week, and the phone question.

1. **One design alone.** The facilitator asks "What do you notice first?", then a question with one right answer (shown on screen with its answer), and marks it right, partly or wrong. The time is recorded.
2. **All four together,** as A, B, C and D. Which would you rather use? Which feels the most cluttered? Which puts the most pressure on you? Why?

At the end: one pick for each part of the look (menu, numbers, icons, text, colour, buttons and boxes), one design for the whole app, and one word for each design. Then **Copy results** and paste them into the results file before the next tester.

**Fair to every design:**
- Which design is A, B, C or D changes with the tester ID.
- The design met alone first rotates across screens and testers.
- Nothing on screen says which design is the one already built.

**Use the script, consent wording and integrity rule in [`../../test/hifi-test-script.md`](../../test/hifi-test-script.md).** Record only what happened. A blank stays blank.

## Pictures

[`pictures/`](pictures/) has every screen of every design (`<design>-<screen>.png`), each design's style sheet (`<design>-stylesheet.png`), and a four-way comparison per screen (`compare-<screen>.png`, plus `compare-axes.png`).

## How it was made

1. **One written brief** ([`src/BRIEF.md`](src/BRIEF.md)) and **one data file** ([`src/data.js`](src/data.js)) were fixed first.
2. **Four designs drawn in parallel,** each by a separate AI assistant session given the brief, the data and its design's stance, and nothing else. Nobody saw any design until all four existed (Dow et al. 2010).
   - Soft Focus was asked to reproduce the built hi-fi faithfully.
   - The other three were asked to commit fully to their stance.
3. **A checker** ([`src/shot.mjs`](src/shot.mjs)) fails a design that adds or leaves out any content, or that scrolls sideways. All four pass.
4. **Review.** Jiven's session looked at every picture. It fixed one kind of bug in Blocks, Paper and Timeline: a broad reset rule outranked each design's own styles, which blanked Blocks' dark buttons and shrank Timeline's question headings. The fix wraps the reset in `:where()` so the design's own rules apply. No design decision was changed.
5. **Declare the AI use** in the deck, with the rest of the project's.

## Changing it

- **Edit the content:** `src/data.js`.
- **Edit a design:** `src/dN-name.js`.
- **Check a design:** `node src/shot.mjs <id> <folder for pictures>`. The puppeteer path at the top of `shot.mjs` points at Jiven's checkout; change it to any `puppeteer-core`.
- **Rebuild the test file:** `node src/build.mjs`.
