# hcidesignchallenge
HCI Group Design Challenge ("Sensing for Benefit").

## Quick start: run the app

All the code is in **`onboarding/`**, the *Learning Discovery* adaptive onboarding prototype (Vite + React + TypeScript). Everything else in the repo is research and design documentation.

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
│   └── behaviour-change.md      ← behaviour-change and notification design
│
├── research/                    ← evidence
│   ├── questionnaire-v1.md / -v2.md   ← questionnaire drafts
│   ├── questionnaire-v2-form.gs       ← script that built the Google Form
│   ├── questionnaire-results.md       ← results analysis (n = 22)
│   ├── interviews/interview-guide.md
│   ├── autoethnography-01/02-kobi.md  ← self-study logs
│   ├── literature-phones.md           ← literature on phones and distraction
│   ├── existing-solutions.md          ← review of existing apps
│   ├── affinity.md                    ← affinity diagram notes
│   ├── findings-register.md           ← all findings in one place
│   └── figures/                       ← charts + make_affinity.py (Python)
│
├── meetings/                    ← weekly sync notes
│
└── onboarding/                  ← ★ THE APP: all source code
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
| Run or change the app | `onboarding/` |
| See why a design choice was made | `design-log.md` |
| Check what the project is being marked on | `PLAN.md` |
| Find research evidence | `research/findings-register.md` |
| Understand the target users | `define/personas.md` |
| Catch up on decisions from meetings | `meetings/` |
