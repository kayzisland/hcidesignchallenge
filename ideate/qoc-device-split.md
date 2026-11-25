# QOC: which device does which job? (T16)

Status: v2.1, 24 Nov 2026. v1 (19 Nov, KAYZ) was reviewed by Jishnu on 23 Nov; v2 revises five marks, adds O5, says how the marking rule was adapted, and adds a rule for changing our minds. v2.1 records the rule as agreed by Jishnu and KAYZ, with KAYZ's tweak: the split must win a laptop majority, and "depends" is a third answer. Owners: Jishnu, KAYZ (16 Nov action). Rubric criteria 2, 4 and 5.

**The v2 marks were agreed by Jishnu and KAYZ on 24 Nov. Rahul's independent marking is pending.** Every finding ID is indexed in `../research/findings-register.md` or `../research/affinity.md`.

## Where this sits in the process
On 16 Nov the group chose one app with two roles. The phone gets students started, and the laptop does the learning (`../meetings/2026-11-16-sync.md`, decisions 2 and 3). The same sync asked for the method behind that choice, because the rubric penalises premature commitment (criterion 5).

This QOC tests the 16 Nov split against the alternatives the design log records for it, plus one the review added (O5). It uses the method of `../QOC Design Space Analysis.pdf` (26 Oct):

- the same criteria bank, fixed before this question existed. The criteria come from the brief and the module's lectures, not from us;
- the same marking rule, adapted (see below);
- no weights and no totals.

## Bias review
| Risk | Evidence | Fix in this version |
|---|---|---|
| Marking up the option already chosen | The split was decided on 16 Nov, before this QOC | The criteria come from the 26 Oct bank, chosen three weeks before the split. Every mark cites a finding ID |
| Device roles assumed, not asked | T20 R-8: no participant was asked where they want to learn | Marked **?** wherever only an inference supports a cell. The open question goes to T18 |
| Dropping an option without showing why | "Two separate apps" was dropped at the sync with one reason | It is marked here on the same criteria as the others |
| The people who chose the split also marked it | v1 was marked by KAYZ and reviewed by Jishnu, both at the 16 Nov sync. The review found four marks resting on inference (v2 changes below) | Rahul, who was not part of the decision, marks the matrix from the evidence without seeing these marks. Disagreements are logged here |
| Only the options recorded at the sync were compared | The design log lists O1, O2 and O4 as alternatives. A middle option was missing | O5 added: the phone starts, the student chooses where to carry on |

## Marking rule (adapted from the 26 Oct QOC)
- **+** = our evidence or design documents describe a concrete mechanism that meets the criterion.
- **−** = the option works against the criterion, and nothing we have offers a fix.
- **?** = not yet addressed, dependent on testing, or supported only by inference.
- Marks are never totalled. They show trade-offs to discuss, not a ranking.

Adapted because there are no separate concept documents now. A **+** needs our evidence or design documents instead of "the concept's own document", and a **?** also covers marks that rest only on inference.

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
- **O5. Phone starts, student chooses.** One app, synced. The phone does the start prompt and the block, as in O3. After the first question, the student picks whether to carry on on the phone or the laptop. Added in v2.

### Matrix
Criteria IDs are from the 26 Oct bank.

| Criterion | O1 All on phone | O2 All on laptop | O3 The split | O4 Two apps | O5 Student chooses |
|---|---|---|---|---|---|
| **B1** Acts on its own initiative | **+** Actionable notifications reach the student anywhere and can be answered from the lock screen (`../research/ui-research-lofi.md`, Q1) | **?** Desktop notifications act without the app being opened, but they only reach a student who is already at the laptop. That reach problem is marked under C1 | **+** As O1, for the start prompt (T20 R-1, N-1) | **+** As O1 | **+** As O3 |
| **B3** Intervenes with an action | **+** The block sits on the device that distracts (AFF-M: 5 of 6; LIT-6) | **−** Blocking laptop sites leaves the phone untouched, and the phone is the distraction (AFF-M, LIT-6) | **+** As O1 | **+** As O1 | **+** As O1 |
| **B4** Better experience than before | **?** To be shown in T18 | **?** AE2-10 judged LearnHarness with no nudges or blocking. This option adds both, so it is not the same tool. To be shown in T18 | **?** To be shown in T18 | **?** To be shown in T18 | **?** To be shown in T18 |
| **U1** Effective: helps users reach their goal | **?** Learning on the phone may pull students away (AFF-M, LIT-6), but the phone block (B3) is meant to stop that, and no one was asked where they want to learn (R-8). T18 asks | **+** The engine teaches well (AE2-10) | **?** Works only if students move from the phone to the laptop, the handover marked **?** on U2 and P2. The single question is practice testing (LIT-16, LIT-17). T18 tests the handover | **?** As O3 | **?** The same open question as O1 and O3 |
| **U2** Efficient, easy to learn | **+** One device, no pairing | **+** One device, no pairing | **?** Pairing and handover add steps, and AE2-1 and AE2-P14 show setup cost kills starts. The proposed fix (pair only after the first question is answered, `../research/ui-research-lofi.md` Q3) is untested | **−** Two installs and two accounts. The sync dropped it for this reason ("one user base") | **?** Pairing is needed only if the student chooses the laptop. Otherwise as O3 |
| **C1** Fits the context of use | **?** Fits free gaps (Q-8: an unprompted quiz in a free gap is welcome). Long sessions on a phone are not evidenced either way | **?** Fits a desk at a chosen place (AFF-J). Misses the free gap where Q-8 says the prompt lands | **+** Phone in the gap, laptop at the place: Q-8 for the first, AFF-J (INT-03-d, INT-05-b, INT-06-d) for the second | **+** As O3 | **+** Fits both the free gap and the desk, and the student decides which applies (LIT-10, LIT-11) |
| **P2** Can be prototyped early and tested | **+** One set of screens | **+** The hi-fi base exists | **?** Two screens plus a handover. Feasible, because both can open the same local server (`../research/ui-research-lofi.md` Q3), but the handover is the part T18 has to test | **−** Two prototypes for the same test budget | **?** The lo-fi already half-builds it ("Another one" on the move keeps learning on the phone), but the choice itself is untested |

**Not discriminating.** These criteria mark the same for all five options, so they don't help choose:

- **B2:** timetable and lecture materials (Q-10).
- **G1:** the notification budget (Q-9, INT-05-g).
- **G2:** acceptable data (Q-10).
- **X-9:** trust in the engine, which is the same engine in every option.

### Changes from v1 (Jishnu's review, 23 Nov)
| Cell | v1 | v2 | Reason |
|---|---|---|---|
| U1 / O1 | − | ? | The − rested on an inference (R-8). The phone block (B3 +) is a fix for AFF-M, so "nothing offers a fix" did not hold. LIT-6 applies to O3's laptop session too, and LIT-7 does not compare learning on a phone with learning on a laptop |
| U1 / O3 | + | ? | The + depends on the handover, which is **?** on U2 and P2. If O1 cannot get a − on an inference, O3 cannot get a + on one |
| U1 / O2 | + (design log, 28 Oct) | + (AE2-10) | The design-log entry is a build decision, which belongs under P2. AE2-10 is the evidence that the engine teaches well |
| B1 / O2 | − | ? | Desktop notifications act without the app being opened, which is what B1 asks. The limit is reach, already counted under C1. AFF-A and Q-1 say starting a session fails, not that opening the laptop is the step that fails |
| B4 / O2 | − | ? | AE2-10 judged LearnHarness without nudges or blocking. O2 adds both |
| O5 | none | added | The middle option was missing. It follows LIT-10, LIT-11 and the 8 Nov "student chooses" decision |

## What the matrix shows
- **O1, O3 and O5 have no −.** O1 is simpler (U2, P2: one device, no pairing). O3 fits where students are better (C1: phone in the gap, laptop at the desk). O5 sits between them. All three depend on the same open question in U1: where does learning actually work for students? T18 decides.
- **O2 fails on B3.** It can't block the phone, which is the main distraction (AFF-M, LIT-6).
- **O4 does what O3 does, plus two installs and two accounts (U2, P2).** That backs the sync's reason for dropping it.
- **The split stays the working choice until T18,** because it is what the lo-fi and hi-fi are built around. It is not yet shown to be better than O1 or O5.

## What would overturn the split
**Rule for changing our minds (agreed by Jishnu and KAYZ on 24 Nov, before T18).** After task 1, each tester is asked: "After the first question on your phone, where would you rather keep learning?" There are three answers: **on my phone**, **on my laptop**, or **depends where I am**.

- **The split stays only if at least 3 of 5 testers actively pick the laptop** (3 of 4 if a tester drops out).
- **Anything else sends us to O5 at T19:** a majority for the phone, a majority for "depends", or a split answer with no laptop majority. O5 lets students choose where to carry on.
- **Why the burden sits on the split.** It is our assumption (R-8 calls it an inference), so it has to earn its place. A split answer is exactly the case O5 is for: LIT-10 and LIT-11 say the student should choose.
- **What is not part of the rule.** Whether testers tapped "4 more on your laptop" is recorded as supporting evidence only, because "Done for now" can mean finished rather than preferring the phone.

- **T18 shows students answer the phone question and don't move to the laptop.** Then the handover fails, and the learning has to move closer to the phone: O5, or a short phone session (O1).
- **T18 shows pairing costs a start.** Then pairing moves later, or the laptop opens without pairing through a link.
- **How T18 measures it.** Task 1 of the lo-fi is the handover as a set task: answer the question on the lock screen, then "4 more on your laptop". After task 1, the lo-fi asks the rule's question with three answer buttons (phone, laptop, depends where I am): in developer mode the facilitator records the answer in the panel, and in user mode the tester answers on screen. Each answer is logged as `learn_where`. For every tester, record that answer (the rule above) and whether they carried on to the laptop (supporting evidence). That closes the gap T20 R-8 names.
- **What the hi-fi must not do yet.** Until T18's results are in, the hi-fi should not hard-wire "learning only on the laptop". The engine is the same in every option (X-9), so engine work is safe. If the rule above is triggered, the change lands at T24.

### Hi-fi v2.0 status (added 25 Nov)
- **The hi-fi went ahead of the rule.** Hi-fi v2.0 (`lockedin-companion` DECISIONS V-46) lets Practise continue on the phone ("Keep going here" beside "4 more on your laptop"). Teach (Learn) stays on the laptop. That is option O5, chosen before T18, and V-46 says so itself.
- **T18 still decides.** The rule above is unchanged and is scored from the T18 `learn_where` answers once they are written up.
- **If the split holds** (at least 3 of 5 pick the laptop): the group decides at T24 whether "Keep going here" stays as a student choice or goes. Either way, the deck reports V-46 as a pre-test departure.
- **If the rule sends us to O5:** V-46 already matches it, and T19 checks the lo-fi against it.
- **Honest criticism for the deck and viva.** We set a rule before testing and the build moved before the result. It gets logged in `../design-log.md` once the group agrees it.

## Limitations
- Most marks rest on the evidence we already have, not on testing, so the decisive marks are **?** for every option.
- The criteria bank was built to choose a concept on 26 Oct. It has no criterion for battery, offline use or cost, because the supplementary list there was not adopted.
- The split was chosen before this analysis. The bias review names that. The rule above says what T18 result would change it, and it was written before T18.
- v1 and v2 were marked by people who made the decision. Rahul's independent marking is pending.
