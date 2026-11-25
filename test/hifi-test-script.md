# Hi-fi test script: next round (T23)

Draft for Lekan (testing owner), 26 Nov 2026. Semi-structured, 20 to 25 minutes per tester, on hi-fi v2.1. Builds on `prototype/lofi/lofi-test-plan.md` and `research/interviews/interview-guide.md`, so the consent wording and facilitator rules match what testers have already heard from us.

**Course methods (Wk 9):** usability testing with set tasks, think-aloud, the System Usability Scale (SUS), and semi-structured follow-up questions. The heuristic evaluation (Nielsen, Shneiderman, Norman, T22) is separate and done by us, never by testers.

---

## Integrity rule

**Record only what happened.** A blank stays blank. No estimated answers, no merged testers, no "augmented" data, and no rewording quotes into something stronger. If a session goes wrong, write down what went wrong and keep the result marked. Small, honest samples score well under criterion 3 when the limitations are named. Invented data would put the whole module at risk.

---

## Recruitment

| Rule | Why |
|---|---|
| 5 testers plus 1 backup | Enough to find most usability problems; same size as T18 |
| **At least half non-STEM** (humanities, social science, arts, law, languages) | The poster reader said the numbers made it feel "for STEM students"; T18 testers skewed STEM |
| Include neurodivergent students if they volunteer; never ask anyone to disclose | The design was built with ND students in mind (28 Oct decision); self-report only |
| **Never group members**, and nobody who has used the lo-fi or the hi-fi before | They have seen the screens, so they are a pilot, not data |
| A mix of years | Context of use differs between first years and finalists |

Already offered in the group chat: Jiven has 1 humanities and 1 maths student; Jishnu may bring a flatmate (humanities). Check none took part in T18.

IDs continue from T18 so nothing collides: **H01 to H05**. Names never sit next to results.

---

## Roles and setup

| Role | Does |
|---|---|
| Facilitator (Lekan) | Reads every script word for word, gives the tasks, asks the follow-up questions, runs the SUS |
| Note-taker (one of Jishnu, KAYZ, Rahul) | Writes hesitations, confusion and quotes on the note sheet; times each task |
| Tech (Jiven, before the first session) | Hi-fi v2.1 running from a production build on the test laptop, a phone ready to pair, demo clock and facilitator mode set up, a fresh data folder per tester |

**Before each tester:** reset to a fresh profile, sample timetable loaded, phone unpaired, focus screen off.

---

## Consent script (read word for word)

> Thanks for doing this. It takes about 25 minutes. You'll try a working prototype of a study app our HCI group is designing. It uses a sample timetable and sample lecture slides; none of your own data is used, and nothing you do is sent anywhere outside this test. We're testing the design, not you, so there are no wrong answers. If something confuses or annoys you, that's exactly what we want to find.
>
> We'll take notes on what you do and say, under an ID like H01, never your name. Your name won't appear in anything we submit, and quotes will be anonymised. You can skip anything or stop at any time without giving a reason. Are you happy to take part?

- Start only after a clear yes. Write "consent: yes" against their ID.
- No audio or screen recording unless you ask separately and they say yes to that too. Restate consent on the recording if one is made.
- Then: "While you use it, please say what you're thinking out loud: what you expect, what you're looking for, anything that surprises you."

---

## Session plan (about 23 minutes)

| Step | Time |
|---|---|
| Consent and think-aloud instruction | 2 min |
| Warm-up: "What do you study, and what year are you in? When did you last sit down to study?" | 1 min |
| Tasks 1 to 6 | 12 min |
| SUS questionnaire | 3 min |
| Visual design probes | 3 min |
| Wrap-up | 2 min |

---

## Tasks

Read each scenario aloud word for word, then hand over. Note-taker records: finished alone / with help / stuck, time, hesitations, quotes.

**Task 1: pair the phone.**
"You've just set LockedIn up on your laptop. Get it onto your phone so it can send you questions."
Watch: do they find Me → Phone; does the QR scan work first time; on an iPhone, do they get through the install steps; do they understand why they are allowing notifications?

**Task 2: answer the nudge.**
"It's Tuesday, 13:05. Your lecture just finished and you're free until 3. Your phone buzzes." *(Facilitator sends a question from the facilitator panel.)*
Watch: do they open it in one tap; do they answer straight away or put it off; how does the notification feel?

**Task 3: carry on to the laptop.**
"You've reached the library and you're at your laptop. Carry on from where your phone left off."
Watch: do they understand "4 more on your laptop"; do they use confidence, "why", Hint or Show me first; do they look at the slide panel?
Then ask, same words as T18: **"After the first question on your phone, where would you rather keep learning: on your phone, on your laptop, or does it depend where you are?"** Ask why.

**Task 4: move a study block.**
"Your Thursday block clashes with something new. Move it to another time this week."
Watch: do they find Week; is moving clear; how do they react to a block that was proposed rather than set?

**Task 5: turn the focus screen on, then off.**
"You're starting a study block and want fewer distractions on your phone. Turn on the focus screen, then end it."
Watch: do they understand it doesn't block apps; does ending it feel easy or guilty; helpful or annoying?

**Task 6: run a short session.**
"Pick any lecture and do a short session on it."
Watch: time to the first question; do they finish; does it feel like being taught or being tested?

**Facilitator rules (same as T18):** don't help ("What would you expect to do?"); step in only after about a minute stuck, with the smallest hint, and tell the note-taker; never explain or defend the design; keep them talking ("What are you thinking?").

---

## SUS: System Usability Scale

Hand it over on paper or a form, after the tasks and before any discussion. Standard wording, 1 = strongly disagree to 5 = strongly agree. Replace "this system" with "LockedIn" only if the team agrees to do it for every tester.

1. I think that I would like to use this system frequently.
2. I found the system unnecessarily complex.
3. I thought the system was easy to use.
4. I think that I would need the support of a technical person to be able to use this system.
5. I found the various functions in this system were well integrated.
6. I thought there was too much inconsistency in this system.
7. I would imagine that most people would learn to use this system very quickly.
8. I found the system very cumbersome to use.
9. I felt very confident using the system.
10. I needed to learn a lot of things before I could get going with this system.

**Scoring:** odd items, score minus 1; even items, 5 minus score; add the ten, multiply by 2.5. The result runs 0 to 100. Report each tester's score and the median; with 5 testers, don't compare to benchmarks as if it were a population average.

---

## Visual design probes (Jiven's visual-design gap)

Ask after the SUS. Keep the laptop open on the Today screen.

1. **Text size.** "Is the text comfortable to read? Is anything too small?"
2. **Colour.** "What do the colours tell you, if anything? Is anything hard to see?"
3. **Clarity.** "Looking at this screen for five seconds, what is the most important thing on it?" *(Note what they point to first.)*
4. **People like me.** "Who do you think this app is for? Does it feel like it's for someone like you?" *(Key for non-STEM testers.)*
5. **Optional.** "If you could change one thing about how it looks, what would it be?"

---

## Wrap-up

"Anything else you noticed, or would change?" Thank them. Save the log and notes under their ID; reset for the next tester.

---

## Note sheet (one per tester)

**Tester:** H0_ · **Consent:** yes / no · **Subject:** ____ · **STEM / non-STEM** · **Year:** __

| Task | Finished (alone / help / stuck) | Time | Hesitations or confusion | Quotes |
|---|---|---|---|---|
| 1. Pair the phone | | | | |
| 2. Answer the nudge | | | | |
| 3. Carry on to the laptop | | | | |
| 4. Move a study block | | | | |
| 5. Focus screen on and off | | | | |
| 6. Run a session | | | | |

**Phone / laptop / depends:** ____ · **Why:** ____
**SUS score:** ____
**Visual probes:** text ____ · colour ____ · first thing noticed ____ · "for people like me?" ____
**Anything else:**

Results go into `07-results-template.md` as HF-n findings, then `test/hifi-results.md`, then T24 changes.
