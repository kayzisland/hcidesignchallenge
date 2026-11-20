# QOC: which device does which job? (T16)

Status: draft, 19 Nov 2026, for the T16 session with Jishnu. Owners: Jishnu, KAYZ (16 Nov action). Rubric criteria 2, 4 and 5.

**The marks are proposals until Jishnu and KAYZ agree them.** Every finding ID is indexed in `../research/findings-register.md` or `../research/affinity.md`.

## Where this sits in the process
On 16 Nov the group chose one app with two roles. The phone gets students started, and the laptop does the learning (`../meetings/2026-11-16-sync.md`, decisions 2 and 3). The same sync asked for the method behind that choice, because the rubric penalises premature commitment (criterion 5).

This QOC tests the 16 Nov split against the alternatives the design log records for it. It uses the method of `../QOC Design Space Analysis.pdf` (26 Oct):

- the same criteria bank, fixed before this question existed;
- the same marking rule;
- no weights and no totals.

## Bias review
| Risk | Evidence | Fix in this version |
|---|---|---|
| Marking up the option already chosen | The split was decided on 16 Nov, before this QOC | The criteria come from the 26 Oct bank, chosen three weeks before the split. Every mark cites a finding ID |
| Device roles assumed, not asked | T20 R-8: no participant was asked where they want to learn | Marked **?** wherever only an inference supports a cell. The open question goes to T18 |
| Dropping an option without showing why | "Two separate apps" was dropped at the sync with one reason | It is marked here on the same criteria as the others |

## Marking rule (from the 26 Oct QOC)
- **+** = our evidence or design documents describe a concrete mechanism that meets the criterion.
- **−** = the option works against the criterion, and nothing we have offers a fix.
- **?** = not yet addressed, dependent on testing, or supported only by inference.
- Marks are never totalled. They show trade-offs to discuss, not a ranking.

## Q: Where does each job run?
The app has four jobs:

1. the start prompt;
2. the phone block;
3. the weekly plan;
4. the learning session (the LearnHarness engine).

### Options
- **O1. All on phone.** Prompts, blocks, plan and full learning sessions all run on the phone.
- **O2. All on laptop.** The LearnHarness engine plus nudges and blocking, all on the laptop.
- **O3. The 16 Nov split.** One app, synced. The phone starts, with a notification that is itself one question, the phone block and the Sunday checklist. The laptop teaches.
- **O4. Two separate apps.** A phone starter app and a laptop learning app, with separate accounts.

### Matrix
Criteria IDs are from the 26 Oct bank.

| Criterion | O1 All on phone | O2 All on laptop | O3 The split | O4 Two apps |
|---|---|---|---|---|
| **B1** Acts on its own initiative | **+** Actionable notifications reach the student anywhere and can be answered from the lock screen (`../research/ui-research-lofi.md`, Q1) | **−** A laptop prompt reaches only a student who has already opened the laptop, which is the step AFF-A and Q-1 say fails | **+** As O1, for the start prompt (T20 R-1, N-1) | **+** As O1 |
| **B3** Intervenes with an action | **+** The block sits on the device that distracts (AFF-M: 5 of 6; LIT-6) | **−** Blocking laptop sites leaves the phone untouched, and the phone is the distraction (AFF-M, LIT-6) | **+** As O1 | **+** As O1 |
| **B4** Better experience than before | **?** To be shown in T18 | **−** This is close to today's LearnHarness, which AE2-10 judged to teach well and do nothing about starting | **?** To be shown in T18 | **?** To be shown in T18 |
| **U1** Effective: helps users reach their goal | **−** Full sessions keep the student on the device that pulls them away (AFF-M, LIT-6, LIT-7: on task about 65% of 15 minutes) | **+** The engine runs where it already runs (design log, 28 Oct: hi-fi on LearnHarness) | **+** One question on the phone, the session on the laptop (T20 R-8). The single question is practice testing (LIT-16, LIT-17) | **+** As O3 |
| **U2** Efficient, easy to learn | **+** One device, no pairing | **+** One device, no pairing | **?** Pairing and handover add steps, and AE2-1 and AE2-P14 show setup cost kills starts. The proposed fix (pair only after the first question is answered, `../research/ui-research-lofi.md` Q3) is untested | **−** Two installs and two accounts. The sync dropped it for this reason ("one user base") |
| **C1** Fits the context of use | **?** Fits free gaps (Q-8: an unprompted quiz in a free gap is welcome). Long sessions on a phone are not evidenced either way | **?** Fits a desk at a chosen place (AFF-J). Misses the free gap where Q-8 says the prompt lands | **+** Phone in the gap, laptop at the place: Q-8 for the first, AFF-J (INT-03-d, INT-05-b, INT-06-d) for the second | **+** As O3 |
| **P2** Can be prototyped early and tested | **+** One set of screens | **+** The hi-fi base exists | **?** Two screens plus a handover. Feasible, because both can open the same local server (`../research/ui-research-lofi.md` Q3), but the handover is the part T18 has to test | **−** Two prototypes for the same test budget |

**Not discriminating.** These criteria mark the same for all four options, so they don't help choose:

- **B2:** timetable and lecture materials (Q-10).
- **G1:** the notification budget (Q-9, INT-05-g).
- **G2:** acceptable data (Q-10).
- **X-9:** trust in the engine, which is the same engine in every option.

## What the matrix shows
- **O3 is the only option with no −.** It carries two **?** marks, on U2 (the handover cost) and P2 (testing the handover). Both point at the same moment: the phone handing over to the laptop.
- **O1 fails on U1.** It puts learning on the device that causes the distraction. LIT-6 finds the cost of a phone in reach even when it is idle.
- **O2 fails on B1, B3 and B4.** It can't reach the student before they start, can't block the phone, and is close to the tool AE2-10 already judged.
- **O4 matches O3 on every job and fails on U2 and P2.** That confirms the sync's reason for dropping it.

## What would overturn the split
- **T18 shows students answer the phone question and don't move to the laptop.** Then the handover fails, and the learning has to move closer to the phone. A short phone session (O1) is the fallback, at the U1 cost above.
- **T18 shows pairing costs a start.** Then pairing moves later, or the laptop opens without pairing through a link.
- **Neither result exists yet.** T18 should test the handover as a set task, and ask each tester where they would want to learn. That closes the gap T20 R-8 names.

## Limitations
- Most marks rest on the evidence we already have, not on testing, so the decisive marks are **?** for every option.
- The criteria bank was built to choose a concept on 26 Oct. It has no criterion for battery, offline use or cost, because the supplementary list there was not adopted.
- The split was chosen before this analysis. The bias review names that, and the marks would need to change if T18 shows the handover fails.
