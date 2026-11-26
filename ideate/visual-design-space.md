# QOC: how should LockedIn look?

Status: v1, 26 Nov 2026. Owner: Jiven, for group review. Rubric criteria 2, 4, 5 and 8.

Every finding ID is indexed in `../research/findings-register.md` or `../research/affinity.md`. Sketch IDs are from `sketches/`. Criteria IDs are from the 26 Oct bank in `../QOC Design Space Analysis.pdf`.

## Where this sits in the process

We explored what LockedIn does: 70 sketches, a QOC on the device split, a lo-fi and its test. **We never explored how it looks.** The hi-fi's look grew from one starting point (violet, rounded cards, a left rail, a line chart) and was refined from there. The *Designing alternatives* lecture calls that "premature commitment to their first design ideas" and "local hill climbing".

This QOC opens the design space for the look, the same way `qoc-device-split.md` did for the device split. It leads to four designs made in parallel and a test of all four at once.

**One rule holds throughout: only the look varies.** Every design has the same features, the same words, the same buttons and the same data. Placement, widgets, styling, icons and the way numbers are drawn are free. If two designs differ in what they do, the comparison is void.

## Method, and why this one

| Choice | Why | Instead of |
|---|---|---|
| **A QOC of the look** | The group's own method (26 Oct, 24 Nov), with criteria fixed before this question existed | Choosing by taste |
| **Four whole designs, made in parallel** | Dow et al. (2010): people who made several prototypes before any feedback, and got feedback on all at once, produced better and more varied designs than people who refined one at a time. Each of their prototypes was a complete answer to the brief, critiqued on "overall theme, composition and layout, and surface elements" | Restyling the existing screens one property at a time. We did that first on 26 Nov; it is refinement, and belongs after a direction is chosen |
| **Showing testers all four together** | Tohidi et al. (2006): users shown three designs criticised more freely and inflated their ratings less than users shown one | Showing the hi-fi alone and asking if they like it |
| **Styled mock-ups, not sketches** | The look is the thing under test | Grey wireframes, which hide exactly what we are asking about |

**What Dow et al. did, from the full paper.** 33 people each designed web adverts. Both groups made five prototypes and a final one, with the same critique and time. The parallel group made three, got critique on all three, made two more, got critique, then finished. "The only difference between conditions was a matter of when participants received a critique." The authors' reasons: comparing feedback side by side teaches the principles; parallel work explores more ("perhaps serial participants hill-climbed to local, rather than global optima"); and "parallel offers people distance between ego and object". **Limits:** novices, adverts, expert critique; teams and longer projects are named as future work. Applying it to an app's look is our inference.

## Bias review

| Risk | Fix |
|---|---|
| The hi-fi's builder wrote this QOC and would favour the look he built | The built look is in the test as one of the four, under a letter, with no label saying which is ours. The marks below were written before any design had been seen |
| Designs drawn one after another would borrow from each other | Each was drawn separately from the same written brief (`../prototype/look/src/BRIEF.md`) and the same data, without sight of the others. None was shown to anyone until all four existed |
| A design could win by showing less, or more | A script checks that every design shows every item of content, word for word (`../prototype/look/src/shot.mjs`) |
| Testers favour whatever they see first, or the letter A | Which design is A, B, C or D changes with each tester. The design seen first on each screen rotates |
| Preference is not the same as being able to use it | Each screen has a factual question, asked before the tester has seen the other three versions |
| The designs were drawn with an AI assistant | Declared here and in the deck. The brief, the axes and the choice of four are the team's |

## Q: how should each part of the look be done?

Nine questions, each with its options. The four designs are four different sets of answers.

| Question | Options |
|---|---|
| **Q1 Composition:** how is a screen laid out? | Cards in a grid · one reading column · full-width panels · a time strip as the spine |
| **Q2 Menu:** where does navigation sit? | Left rail · top bar of words · tab bar · part of the time strip |
| **Q3 Density:** how much at once? | One thing per screen · a few large things · medium · everything, strictly ordered |
| **Q4 Numbers:** how is progress drawn? | Big score and line chart · sentences with small marks · rings, pies and blocks · time on an axis |
| **Q5 Shape:** edges and depth | Rounded with soft shadows · square with hairlines · thick outlines and hard blocks · compact with thin strokes |
| **Q6 Type** | Display face plus a legible sans · serif headings with large text · heavy sans at a large scale · narrow sans with aligned figures |
| **Q7 Colour** | A hue per module on tinted surfaces · ink and one accent · a full colour block per module · greys with module stripes |
| **Q8 Icons** | Line icons with words · none, words only · filled pictograms with words · small markers on a line |
| **Q9 Motion** | Calm, only on a change the student caused · none · lively · movement along the strip |

## Options: the four designs

| | O1 Soft Focus | O2 Paper | O3 Blocks | O4 Timeline |
|---|---|---|---|---|
| **Stance** | A friendly dashboard. This is the hi-fi as built: the control | A calm page you read | Big, bold, hard to miss | Your day is the interface |
| **Argued from** | AE2-P10 (a live theme "feels like home") | AFF-C, R-6, INT-02-g; Rams, "as little design as possible" | AFF-A, LIT-13, LIT-14; Um et al. (2012) on warm colour and round shape | Q-10, INT-05-h, AFF-F; the timetable is the one thing the app senses |
| **Its risk** | Cluttered (AE2-P16) | Plain, "a document" | Childish or pushy (R-6) | Dense; calendar anxiety (INT-01-i) |
| Q1 | Cards in a grid | One reading column | Full-width panels | Time strip |
| Q2 | Left rail | Top bar of words | Tab bar | In the strip |
| Q3 | Medium | One thing per screen | A few large things | Everything, ordered |
| Q4 | Score and line chart | Sentences and small marks | Rings, pies, blocks | Time on an axis |
| Q5 | Rounded, soft shadows | Square, hairlines | Thick outlines, hard blocks | Compact, thin strokes |
| Q6 | Display plus legible sans | Serif headings, large text | Heavy sans, large scale | Narrow sans, aligned figures |
| Q7 | Hue per module | Ink and one accent | Colour block per module | Greys and stripes |
| Q8 | Line icons with words | None | Filled pictograms | Markers on a line |
| Q9 | Calm | None | Lively | Along the strip |

Each design's own account of its nine answers is in its file (`../prototype/look/src/d1` to `d4`), in the test page under "Sheets for the deck", and as one table in `../prototype/look/pictures/compare-axes.png`. Every screen of every design is in `../prototype/look/pictures/`.

**How the four were made.** Each was drawn by a separate AI assistant session, given the same brief and data plus its own stance and nothing else. Soft Focus was told to reproduce the built hi-fi; the other three were told to commit fully to their stance. All four pass the content check. Review then fixed one kind of CSS bug in three of them, where a reset rule outranked the design's own styles. No design decision was changed (`../prototype/look/README.md`).

**Where the sketches fit.** Slice 3 of T10 drew ways of showing progress: a guided roadmap (S-18), a metro map (S-54), fog of war (S-55), "next frontier" in place of a percentage (S-23). Those change what the product shows, so they are outside this QOC. They stand as the record that the hi-fi's Progress page (a score and a chart) was not one of the group's sketched options. That is a separate question for the group.

## Criteria

From the 26 Oct bank, the ones a look can affect:

| ID | Criterion | Source |
|---|---|---|
| **U2** | Efficient, easy to learn | Week 1: usability goals |
| **U3** | Safe: avoids harm to users. Here: does not pressure (R-6, INT-01-i) | Week 1: safety |
| **U4** | Fun, engaging and enjoyable | Week 1: user experience goals |
| **H1** | Fits users' capabilities and individual differences | *The Human in HCI* |
| **H2** | Keeps short-term memory load low | *The Human in HCI*: 7 ± 2 chunks |
| **H5** | Matches users' mental models | *The Human in HCI* |
| **H6** | Gets attention without overloading it | *The Human in HCI*: selective attention |

## Matrix, marked before any design had been seen

Marking rule as in `qoc-device-split.md`: **+** our evidence or a published study describes a mechanism that meets the criterion; **−** it works against the criterion and nothing offers a fix; **?** untested or resting on inference. Marks are never totalled.

| Criterion | O1 Soft Focus | O2 Paper | O3 Blocks | O4 Timeline |
|---|---|---|---|---|
| **U2** easy to learn | **?** A rail with icons and words is the best-evidenced menu (Wiedenbeck 1999), but nobody has been timed on it | **?** Words-only menus did as well as icons with words at first use in the same study. Untested here | **?** | **?** No separate menu is the least familiar choice |
| **U3** does not pressure | **?** A score and a pace line can say "behind" without the word (R-6) | **?** No big numbers, by construction. Whether that feels calmer is the test's question | **?** Bold and energetic could read as pushy | **?** Time already gone could read as debt |
| **U4** enjoyable | **+** AE2-P10: the theme "feels like home", one participant | **?** | **+** Um et al. (2012): warm colour and round shapes raised positive feeling in learning material | **?** |
| **H1** individual differences | **+** Text size, theme and motion settings exist | **?** | **?** | **?** Small labels are a risk for some readers |
| **H2** memory load | **?** | **+** One thing carries the weight on each screen (AFF-C, AE-5) | **+** Few large things per screen | **−** More on screen at once, by design. The fix it claims is strict ordering; untested |
| **H5** mental models | **+** Looks like the apps students already use | **?** | **+** A tab bar is the phone convention | **+** A timetable is how students already see their week (Q-10, INT-05-h) |
| **H6** attention without overload | **−** Today shows seven things beside the next step (AE2-P16) | **+** One accent, used only for the next action | **+** One very large panel for the next step | **?** |

Most cells are **?**. That is the finding: almost nothing about the look has been tested, for the built design or any other.

## The test

**The tool:** `../prototype/look/lockedin-look-test.html`. Open it in Chrome; it needs the internet only for fonts.

For each of seven screens (Today, a Learn step, a Practise question, the answer feedback, Progress, Week, the phone question):

1. **One design alone.** "What do you notice first?" Then a factual question with one right answer, timed (for Progress: "Which module has had the least of your time this week?"). The tester has not yet seen the other three, so this measures the design, not memory.
2. **All four together.** Which would you use? Which feels most cluttered? Which puts the most pressure on you? And why.

At the end: one pick per part of the look (menu, numbers, icons, text, colour, buttons and boxes), one design for the whole app, and one word for each design.

**Who:** at least five students who are not in the group, at least half not from STEM subjects. Consent wording and facilitator rules as in `../test/hifi-test-script.md`.

## Rule for changing our minds (written before the first tester)

For each question Q1 to Q8:
- **Adopt an option** when at least four of five testers, or 70% of a larger group, choose it, and no evidence about performance points the other way.
- **Make it a setting,** with the current look as the default, when testers split and their reasons are about taste. T18 testers are reported to have liked being able to customise; that is not yet written up as an LF finding.
- **Rule an option out for a screen** when a majority name it the most pressuring or the most cluttered there, or when most testers who met it first got the reading question wrong.
- **Keep what is built, and say so,** where nothing wins.

No design is expected to win outright. As in Dow et al., the second round is a new design built from the per-question results, tested again if time allows, and then built into the hi-fi (T24). Font and colour details are tuned on that design afterwards.

## Limitations

- **Stills, not use.** Nobody studies for an hour in a mock-up. Motion (Q9) is described, not shown.
- **Small numbers.** Report counts ("4 of 5"), never percentages.
- **Four points in a large space.** Each design fixes nine answers at once, so a preference for a design does not say which of its nine answers earned it. The per-part picks at the end and the reasons are how we separate them, and that separation is rough.
- **The exploration came after the build.** The look should have been explored before the hi-fi was styled. This QOC is the repair, and the deck should say so.
- **One sample student.** The data is fictional: three modules, one of them History, so the screens are not all STEM.

## Sources

- Dow, Glassco, Kass, Schwarz, Schwartz & Klemmer (2010). Parallel prototyping leads to better design results, more divergence, and increased self-efficacy. *ACM Transactions on Computer-Human Interaction*, 17(4), article 18. doi:10.1145/1879831.1879836. Full text read, 26 Nov 2026.
- Tohidi, Buxton, Baecker & Sellen (2006). Getting the right design and the design right: testing many is better than one. *CHI '06*, 1243-1252. doi:10.1145/1124772.1124960. Record and abstract checked.
- Um, Plass, Hayward & Homer (2012) and Wiedenbeck (1999): see the visual design research note in the hi-fi repository (`docs/companion/visual-design-research.md`), section 11.
- HCI lectures: *Designing alternatives*; *The Human in HCI*; *Secrets of design* (Rams).
