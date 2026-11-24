# hcidesignchallenge
HCI Group Design Challenge ("Sensing for Benefit"). The product is **LockedIN**: a study app that gets a student into a session and keeps them in it.

## See the design

**The lo-fi going into user testing:** `prototype/lofi/LockedIn lo-fi test (8).html`. Open it in a browser. Every decision in it, and everything the test still has to answer, is in [`prototype/lofi/CHANGELOG.md`](prototype/lofi/CHANGELOG.md).

**The wider picture:** [`prototype/sketch/lockedin-sketch.html`](prototype/sketch/lockedin-sketch.html). One file, five tabs, no build step: screens, personas, scenarios, a Week 1-5 syllabus map and the design rationale, each citing its research.

## Quick start: run the code

The only runnable code is **`onboarding/`**, the *Learning Discovery* adaptive onboarding prototype (Vite + React + TypeScript). It is the onboarding spike merged on 1 Nov and it feeds the build. LockedIN itself is not built yet. Everything else in the repo is research and design documentation.

```bash
bash setup.sh          # one-off: installs Node (if needed), npm packages and matplotlib
cd onboarding
npm run dev            # http://localhost:5173
npm test               # unit + smoke tests
```

Full details are in [`onboarding/README.md`](onboarding/README.md).

## Repo map

```text
hcidesignchallenge/
├── README.md                    ← you are here
├── setup.sh                     ← installs all dependencies
├── PLAN.md                      ← project plan, built from the marking rubric
├── design-log.md                ← every design decision and the evidence behind it
├── QOC Design Space Analysis.pdf← analysis comparing the candidate concepts
│
├── LectureFlowIdeaADHD.md       ┐
├── SpokeSafeIdea.md             ├ the three early candidate concepts
├── StudentSaviourIdea.md        ┘
│
├── define/                      ← turning research into design
│   ├── personas.md              ← personas, scenarios, storyboard outline
│   ├── behaviour-change.md      ← behaviour-change and notification design
│   ├── figures/personas/        ← persona photos (Unsplash Licence)
│   └── storyboards/             ← T14 storyboards, S-1 to S-4 and two anti-scenarios
│
├── research/                    ← evidence
│   ├── questionnaire-v1.md / -v2.md   ← questionnaire drafts
│   ├── questionnaire-v2-form.gs       ← script that built the Google Form
│   ├── questionnaire-results.md       ← results analysis (n = 22)
│   ├── interviews/                    ← guide, INT-01 to INT-06, synthesis
│   ├── autoethnography-01/02-kobi.md  ← self-study logs
│   ├── literature-phones.md           ← literature on phones and distraction
│   ├── literature-review.md           ← T09 literature review, LIT-13 to LIT-23
│   ├── literature-learning-loop.md    ← the learning loop, LIT-24 to LIT-31
│   ├── ui-research-lofi.md            ← UI research feeding the lo-fi (T17)
│   ├── existing-solutions.md          ← review of existing apps
│   ├── affinity.md                    ← affinity diagram notes (v2)
│   ├── findings-register.md           ← all findings in one place
│   └── figures/                       ← charts, affinity v1 to v2, make_affinity.py
│
├── meetings/                    ← sync notes and decision briefs
│   ├── 2026-11-10-sync.md       ← the LearnHarness decision, option D
│   ├── 2026-11-16-sync.md       ← the phone and laptop split, and what was dropped
│   ├── 2026-11-23-sync.md       ← the core four features, and the 27 Nov focus group
│   └── lock-decision-brief.md   ← does the phone lock stay in the lo-fi? Open
│
├── ideate/
│   ├── qoc-device-split.md      ← T16 QOC: which device does which job (draft marks)
│   └── sketches/                ← T10: 70 sketches, the selection and the scores
│
├── deck/
│   └── feature-chains.md        ← T38: a research-to-testing chain per core feature
│
├── prototype/
│   ├── sketch/                  ← the LockedIN flow sketch, one HTML file
│   └── lofi/                    ← the lo-fi under test, with its change log
│
└── onboarding/                  ← the onboarding spike: the only runnable code
    ├── package.json             ← npm dependencies
    ├── index.html, vite.config.ts, tsconfig.json
    └── src/
        ├── screens/             ← Welcome, Onboarding, Hub, GameRunner, FormatComparison, Reveal
        ├── games/               ← question runner, figure rendering, game metadata
        ├── content/             ← question banks (verbal, numerical, non-verbal, memory)
        ├── engine/              ← adaptive difficulty logic
        ├── profile/             ← learning-profile scoring and archetypes
        ├── state/               ← saving progress (localStorage)
        ├── data/                ← onboarding questions, format definitions
        └── components/          ← shared UI (mascot, radar chart, settings, …)
```

## Where to look for…

| I want to… | Go to |
|---|---|
| See the lo-fi being tested | `prototype/lofi/` |
| See what LockedIN is | `prototype/sketch/lockedin-sketch.html` |
| Run or change the code | `onboarding/` |
| See why a design choice was made | `design-log.md` |
| Check what the project is being marked on | `PLAN.md` |
| Find research evidence | `research/findings-register.md` |
| Read what students told us | `research/interviews/synthesis.md` |
| Understand the target users | `define/personas.md` |
| Catch up on decisions from meetings | `meetings/` |
