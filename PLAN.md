# Project plan: HCI Design Challenge ("Sensing for Benefit")

Updated 29 Oct 2026. The plan is built backwards from the marking rubric. Every task names the rubric criterion it earns marks for.

## 1. What we're making
A **proactive study app that works for all students and is designed with neurodivergent students in mind**. It senses context (timetable, lecture materials, free time, study behaviour) and steps in at the right moment with short, question-led learning. The hi-fi prototype is built on **LearnHarness** (github.com/amosblomqvist/learnharness), an open-source AI tutor that measures what a learner knows, teaches by questioning, and practises with retrieval.

We arrived here by exploring the design space first: five problem areas in the HCI Design Plan doc (socialising, fitness, neurodivergent workload, finance, safety), then three written concepts (LectureFlow, Student Saviour, SpokeSafe), compared in `QOC Design Space Analysis.pdf`. Viva slide 1 tells that story.

## 2. Deliverables and deadlines (Canvas, checked 26 Oct)

| Deliverable | Due | Marks |
|---|---|---|
| A3 poster PDF | **Wed 2 Dec, 12:00** | Rubric criterion 10 |
| Design Challenge slide deck | **Fri 4 Dec, 17:00** | 100 points: 10 criteria × 10 |
| Viva slide deck (max 12 slides, ideally 4-6) | **Fri 4 Dec, 17:00** | Supports the viva |
| Viva | TBC | |

Module weight: the Design Challenge is 91% of HCI.

## 3. The rubric, and what earns 10/10
1. **Deck presentation:** a clear logical order, well written, excellent graphic design.
2. **UCD stages:** all stages present, techniques chosen *with reasons over alternatives*, applied specifically to our problem.
3. **Data produced:** clear outcomes from each technique, limitations discussed, deep insights.
4. **Data → design:** changes in design clearly tied to research outcomes. Alternative interpretations noted.
5. **Process overall:** a clear progression E→D→I→P→T, earlier stages reused later (scenarios), **no premature commitment**, lots of design-space exploration.
6. **Solution appropriateness:** balances effectiveness with complexity, clearly meets the brief, no unexplained features.
7. **Domain understanding:** deep, evidenced understanding of students and study.
8. **Justification:** every hi-fi element traceable to research. Honest criticism of our own work.
9. **Management:** planning and use of time evidenced (2-3 slides).
10. **Poster:** works at far, medium and close range. Shows how the design evolved.

The brief's hard requirements: proactive as well as reactive; intervenes rather than just informing; uses external data or sensors plus user input; UX is central; follows UCD.

## 4. How we work: a concurrent design cycle
We run the UCD cycle with **parallel tracks** because we have five people and five weeks. Each track has an owner who is **responsible** for it. Responsible means they make sure it gets done well; it doesn't mean doing it alone. Anyone can ask anyone for help.

| Role | Owner | Responsible for |
|---|---|---|
| Research and organisation | KAYZ (Kobi) | Empathise and Define: autoethnography, questionnaire, observation, literature, personas, requirements. Plus the plan, the task board, the meetings log and rubric alignment |
| Lo-fi prototyping | Jishnu | Ideate and lo-fi: sketches, alternatives, storyboards, paper or Figma prototypes |
| Hi-fi prototyping | Jiven | The hi-fi build on the LearnHarness base |
| Testing and recalibration | Lekan | Lo-fi and hi-fi testing, heuristic evaluation, and turning results into design changes |
| Viva deck and poster | Rahul | The slide deck, viva deck and poster: structure, design and assembly |

**The traceability rule.** This is how the data visibly drives the design.
- Every finding gets an ID: `AE-n` (autoethnography), `Q-n` (questionnaire), `OBS-n` (observation), `LIT-n` (literature), `LF-n` (lo-fi test), `HF-n` (hi-fi test).
- Every requirement and every hi-fi feature cites at least one finding ID.
- Every design change goes in `design-log.md`: date, decision, evidence ID, alternatives considered, who decided.

The deck is assembled from this log, which covers rubric criteria 3, 4, 5 and 8.

## 5. Timeline

| ID | Task | Owner | Phase | Due | Output (repo) | Rubric |
|---|---|---|---|---|---|---|
| T01 | Autoethnography AE-01 | KAYZ | 1 Understand | Thu 29 Oct | `research/autoethnography-01-kobi.md` | 2, 3, 7 |
| T02 | Questionnaire v2 + Google Form | KAYZ | 1 Understand | Fri 30 Oct | `research/questionnaire-v2.md` | 2, 3 |
| T03 | Read the brief and rubric together | All | 0 Admin | Fri 30 Oct | Meetings log entry | 9 |
| T04 | Pilot the questionnaire (3-5 students) | KAYZ | 1 Understand | Sat 31 Oct | v2.1 change log | 2, 3 |
| T05 | Distribute the questionnaire (KAYZ's socials plus everyone's channels) | KAYZ, all share | 1 Understand | Sun 1 Nov, closes Sun 8 Nov | Response sheet | 3 |
| T06 | One short autoethnography each, same template | All | 1 Understand | Wed 4 Nov | `research/autoethnography-0n-name.md` | 3, 7 |
| T07 | Observation protocol and 4-6 study-session observations | KAYZ (Lekan supports) | 1 Understand | Protocol Mon 2 Nov, sessions by Fri 6 Nov | `research/observation/` | 2, 3, 7 |
| T08 | Review existing solutions (Anki, Quizlet, Notion, AI study modes, LearnHarness, focus apps) | KAYZ, Rahul | 1 Understand | Thu 5 Nov | `research/existing-solutions.md` | 6, 7 |
| T09 | Theory base: learning science and neurodivergent learners | Rahul (existing card) | 1 Understand | Fri 6 Nov | `research/literature.md` (LIT-n) | 7 |
| T10 | Sketch alternatives: 30+ across the group, 3+ distinct concepts | Jishnu | 3 Ideate | Sun 8 Nov | `ideate/sketches/` | 5 |
| T11 | Hi-fi spike: what in LearnHarness can be reused, and what has to change | Jiven | 4 Prototype | Sun 8 Nov | `prototype/hifi/spike.md` | 6 |
| T12 | Questionnaire analysis: charts and finding IDs | KAYZ | 2 Requirements | Tue 10 Nov | `research/questionnaire-results.md` | 3 |
| T13 | Affinity diagram (Q12, observation, AE) | KAYZ + all | 2 Requirements | Wed 11 Nov | `research/affinity.png` | 3, 4 |
| T14 | Personas (primary, secondary, anti), scenarios, storyboards | KAYZ, Jishnu | 2 Requirements | Thu 12 Nov | `define/personas.md` | 2, 5, 7 |
| T15 | Requirements (functional and non-functional) plus task analysis, each citing findings | Lekan | 2 Requirements | Thu 12 Nov | `define/requirements.md` | 4, 8 |
| T16 | QOC to choose between the lo-fi alternatives | Jishnu, KAYZ | 3 Ideate | Fri 13 Nov | `ideate/qoc.md` | 2, 4, 5 |
| T17 | Lo-fi prototypes (2-3 alternatives) | Jishnu | 4 Prototype | Fri 13 Nov | `prototype/lofi/` | 2, 5 |
| T18 | Lo-fi testing (5 users, think-aloud, set tasks) | Lekan | 5 Evaluate | Sun 15 Nov | `test/lofi-results.md` (LF-n) | 3 |
| T19 | Recalibrate the design from lo-fi results | Lekan, Jishnu | 5 Evaluate | Tue 17 Nov | `design-log.md` | 4, 8 |
| T20 | Behaviour-change and notification design (Wk 8 material) | KAYZ | 3 Ideate | Fri 20 Nov | `define/behaviour-change.md` | 6, 7 |
| T21 | Hi-fi build on LearnHarness | Jiven | 4 Prototype | Tue 24 Nov | `prototype/hifi/` | 6 |
| T22 | Heuristic checklist (Nielsen, Shneiderman, Norman) on the hi-fi | Lekan | 5 Evaluate | Fri 20 Nov | `test/heuristics.md` | 2, 8 |
| T23 | Hi-fi usability test (5 users) and heuristic evaluation | Lekan | 5 Evaluate | Thu 26 Nov | `test/hifi-results.md` (HF-n) | 3, 8 |
| T24 | Final iteration from the hi-fi results | Jiven | 4 Prototype | Sat 28 Nov | `design-log.md` | 4, 8 |
| T25 | Poster draft, then group review | Rahul | 6 Write-up | Fri 27 Nov | `deliverables/poster/` | 10 |
| T26 | Deck draft (owners write their own sections) | Rahul + owners | 6 Write-up | Sun 29 Nov | `deliverables/deck/` | 1-8 |
| T27 | Management slides: plan, board, meetings log | KAYZ | 6 Write-up | Tue 1 Dec | Deck section | 9 |
| T28 | **Submit poster** | Rahul | 6 Write-up | **Wed 2 Dec, 12:00** | Canvas | 10 |
| T29 | **Submit deck and viva deck** | Rahul | 6 Write-up | **Fri 4 Dec, 17:00** | Canvas | 1-9 |
| T30 | Viva prep: everyone can explain every decision | All | 6 Write-up | After 4 Dec | | All |

Course content arriving during the project, and where we use it:
- **Week 7:** task analysis (T15), affinity diagrams (T13), prototyping (T17).
- **Week 8:** heuristics and behaviour change (T20, T22).
- **Week 9:** usability testing and heuristic evaluation (T23), parallel prototyping (T17).

## 6. Deck structure (mirrors the rubric)
1. Problem space and divergence: the five areas and three concepts, and why this one
2. Empathise: autoethnographies, questionnaire, observation, existing solutions, each with *why this technique over the alternatives*
3. Findings (with IDs) and their limitations
4. Define: personas, scenarios, requirements (citing findings), task analysis
5. Ideate: sketches, alternatives, QOC
6. Lo-fi prototypes and what testing changed
7. Hi-fi: each feature mapped to the findings behind it
8. Evaluation: usability test and heuristics, and honest criticism
9. Management: plan, roles, timeline, meetings
10. Reflection and next steps

## 7. Repo structure
```
PLAN.md                 this plan
design-log.md           every design decision, with evidence IDs
research/               autoethnographies, questionnaires, observation, literature, results
define/                 personas, scenarios, requirements, task analysis
ideate/                 sketches, QOC
prototype/lofi, hifi/   prototypes
test/                   test plans and results
deliverables/           deck, viva deck, poster
```

## 8. Ground rules
- Every task has one owner and a date. Cards move Backlog → In progress → In review → Done, and a teammate reviews before Done.
- Decisions are written in Notion Meetings and `design-log.md`.
- If something will miss its date, say so two days before, not on the day.
- Weekly sync: Tuesday 14:00-16:00.
