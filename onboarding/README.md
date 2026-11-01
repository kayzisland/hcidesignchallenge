# Learning Discovery — adaptive onboarding prototype

A playful, accessible onboarding and "learning discovery" experience for neurodivergent University of Birmingham students.
It combines a 15-question themed onboarding, four adaptive mini-games, an optional "Try a Different Way!" format comparison, and a transparent, deterministic learning-profile reveal.

> **Not an IQ test.** The games are informal activities used to suggest *support*. They never produce an IQ score, a diagnosis or a measure of potential. Wording throughout says so.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # Vitest unit + smoke tests
npm run build    # type-check + production build into dist/
```

Stack: Vite, React 19, TypeScript, plain CSS. React is the only runtime dependency. No backend; everything is stored in `localStorage` (key `adaptive-learning-prototype-v1`).

## The flow

`Welcome → Onboarding (4 stages, Q1–Q15) → Game hub (4 worlds) → Try a Different Way (optional) → Profile reveal → Dashboard`

* **Onboarding** – subject search, multi-select cards with animations, a live study-space preview (Stage 2), live theme previews (Q9), comfort choices that change the app immediately (Q10), "how information appears" (Q11), reminder preferences and a clearly-labelled *demo* calendar (Q14). Everything is skippable and resumable.
* **Games** – Number Quest, Word Garden, Pattern Planet, Memory Meadow. All four share one adaptive engine. Each has an intro, an unscored practice item, adaptive questions with progressive hints, one retry, explanations, "did that help?", optional confidence, a level-up banner, pause / skip question / skip game / end game, and a results summary with a level ladder.
* **Try a Different Way** – three short ideas shown as text, diagram and audio (browser speech synthesis, adjustable speed, transcript always visible), each with two questions and comfort / effort / "use again?" ratings. Order is rotated per user.
* **Profile reveal** – animated sequence (skippable; instant with reduced motion), archetype, radar chart plus adjustable preference bars, the evidence behind the result, a "choose a different style" override, a recommended starting setup and task-support suggestions from the games.

## Adaptive difficulty engine (`src/engine`)

Pure, UI-free functions: `createEngineState`, `recordResponse`, `evaluateStop`, `summarise`, … All thresholds are in `DEFAULT_CONFIG` (`src/engine/adaptive.ts`) and can be tuned live in Settings → *Adaptive difficulty tuning*.

* 8 levels per category (Introductory → Exceptional), starting at Level 1.
* **Rise** after 2 consecutive *independent* correct answers (first try, no hints). Rising into Levels ≤ 5 carries over one correct answer (`carryStreakUpToLevel`) so a strong performer reaches the top in roughly 12 questions.
* **Drop** one level after 2 consecutive incorrect answers (never while "Keep challenging me" is on).
* Answers that needed hints or a retry are *assisted*: they reset streaks and count half in the level score, and are never recorded as mistakes. Skipped questions are neutral.
* **Stopping rules** (a *suggestion* — the student chooses): top level reached twice; ≥ 3 incorrect answers within two adjacent levels after ≥ 4 questions; ≥ 6 questions and the next level above the consistent level is clearly not consistent; hard limit of 12. **Keep challenging me** disables suggested stops, never lowers the level, and ends at a hard cap (12 + 6).
* **Recorded per category:** consistent level (highest level with ≥ 2 answers and ≥ 75 % weighted success), highest successful level (highest level with an independent success), challenge boundary (where it began to feel hard), hint rate, whether it ended early or was skipped.

## Content (`src/content`)

Content is separate from UI and engine.

* `numerical.ts` – hand-verified authored questions plus ~30 procedural generators. Generated answers are **independently recomputed in tests** (`recomputeNumerical`).
* `verbal.ts` – 16 authored passages (2 per level) and the rule-based "say it your way" key-point checklist (keyword checklist, not a grade; optional voice input where the browser supports it).
* `nonverbal.ts` – SVG matrix puzzles from a rule engine (shape / shading / size / pointer / corner marks, XOR rules at high levels). Tests check rule consistency and a unique correct option. Every cell has a text description. Colour is decorative only.
* `memory.ts` – study → interference tasks → recall, with items, order, pairs, scene-change and update tasks. Hint 2 lets the student look again.
* `index.ts` – `selectQuestion` (deterministic, no repeats, mix of authored and generated) and `getQuestionById` (regenerates by id so a refresh resumes the same question).

To add an authored question, append to the relevant array in the content file. To add a generator, add it to the kind table for its level; the tests will verify it.

## Profile algorithm (`src/profile`)

Deterministic and explainable: `computeProfile(input)` returns scores, evidence strings, dimensions, setup and recommendations. Rules live in `OPTION_RULES` plus a few documented rules in `collectSignals`; constants in `PROFILE_CONFIG`.

1. Each selected answer maps to points for an archetype with a plain-language reason (e.g. *"Walk me through everything"* → Guided Pathfinder +4). Skipped questions add nothing.
2. "What helped" feedback after games, heavy hint use across ≥ 2 games, and the format comparison (a format must beat the average comfort score by ≥ 1.5) add further points.
3. Flexible Learner gets +3 if ≥ 4 other archetypes are within 50 % of the top score.
4. **Low data:** if total evidence < 5, the result is Flexible Learner with `low-data` confidence.
5. **Close:** if the top two scores differ by ≤ 2 the result is presented as a close call, naming the runner-up.
6. **Ties:** Flexible Learner first, otherwise Guided Pathfinder → Visual Navigator → Active Explorer → Reflective Thinker.
7. Archetypes come from *preferences*, not from game performance. Game levels only drive task-support suggestions (starting level, worked examples, earlier hints, retrieval practice, text descriptions alongside diagrams), each shown with its reason and hedged as informal.

The student can override the archetype and adjust each preference slider; overrides are stored separately from computed values.

Archetype names follow the main brief (Visual Navigator, Guided Pathfinder, Active Explorer, Reflective Thinker, Flexible Learner). The supplementary brief used working names (Visual Mapper, Guided Builder, Steady Reflector); change them in `src/profile/archetypes.ts` if preferred.

## Accessibility

* Keyboard-operable throughout, visible focus rings, skip link, focus moved to headings between steps, labelled progress bars and groups, polite live regions for feedback and the mascot.
* **Reduced motion:** respects `prefers-reduced-motion` and has an in-app switch; all animation, particles and transitions are removed.
* **Non-colour cues:** correct/incorrect always carries text and symbols (✓ ↻ ✕); selected states use ●/☑ marks; non-verbal puzzles do not depend on colour; optional extra patterns for colour-blind users.
* Themes: soft light, neutral, dark, high contrast, match-device, plus accent colours; text size, line spacing, fewer elements, captions/transcripts, audio speed, "one section at a time / scroll / outline" information modes.
* Non-judgemental language: wrong answers are "information"; no timers, no streak shaming, every game can be skipped, paused or ended.

## Privacy

All data stays in this browser's `localStorage`. Response time is only recorded if the student opts in, and is never used for scoring. Settings → *Delete all my data* clears everything. The calendar connection is a sample-data demo only.

## Project layout

```
src/engine/   adaptive engine (pure) + tests
src/content/  authored + generated questions + tests
src/profile/  archetypes, scoring algorithm + tests
src/state/    app state, defaults, localStorage persistence + tests, store hook
src/data/     onboarding questions, format-comparison topics
src/screens/  Welcome, Onboarding, Hub, GameRunner, FormatComparison, Reveal (also the dashboard)
src/games/    QuestionRunner, FigureSvg, game metadata
src/components/ Mascot, Radar, StudyPreview, SettingsDrawer
```

## Known limitations (prototype)

* Audio uses the browser's speech synthesis, so voices vary; voice input only works where `webkitSpeechRecognition` exists.
* The "say it your way" feedback is a keyword checklist, not language understanding.
* Difficulty thresholds and content are research placeholders to be tuned with usability testing; no psychometric validation is claimed.
* No accounts, sync or analytics.
