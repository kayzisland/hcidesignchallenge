# Personas, scenarios and storyboard outline (T14)

Status: v1, 8 Nov 2026. Owners: KAYZ (personas, scenarios), Jishnu (storyboards). Built from `../research/questionnaire-results.md` (Q-n), `../research/affinity.md` (AFF-x) and `../research/autoethnography-01-kobi.md` (AE-n). The names and details are fictional. Every attribute cites the data it comes from, so a persona is never a stereotype we made up (Wk 3). We revisit them after the interviews (v2).

## Why personas, and why three
Personas keep the team designing for the students in our data, not for ourselves ("you are not the user", Wk 1). We use the three types from Week 3:
- a **primary** persona the design must satisfy;
- a **secondary** persona whose needs we meet without breaking the primary's;
- an **anti-persona** we are deliberately not designing for, which protects us from feature creep (rubric criterion 6).

---

## Primary: Tayo, the student who can't get going
**3rd year, Mechanical Engineering. Not sure if neurodivergent.** (Matches the largest groups: 3rd year+ 10/22, STEM 9/22, "not sure" 8/22.)

| Layer | Detail | Evidence |
|---|---|---|
| **Goal** | Keep up week by week, so exam season isn't a cram | AE-9, AFF-F |
| **Behaviour** | Goes to most lectures. Studies by rereading slides and asking ChatGPT. Means to start after lectures but usually starts late in the evening, if at all | Q4, Q-6, Q-1 |
| **Frustration** | Getting started, weekly or more. Once he starts he's mostly fine, but he often doesn't know what "done" looks like, and an hour of rewriting notes feels productive and isn't | Q-1, Q-11, AFF-A |
| **Attitudes** | Would welcome a short quiz in a free gap. Turns notifications off if he gets more than two a day. Fine sharing his timetable, not his location | Q-8, Q-9, Q-10 |
| **Quote (from Q12)** | "Just couldn't get started." | Q12 |

**What Tayo needs from the design:** one tap into a short session with a defined goal, offered at the right moment, built from what he was taught that day (AFF-A, AFF-F, Q-1, Q-8).

## Secondary: Maya, the student who drifts and needs a way in
**2nd year, Psychology. Identifies as neurodivergent (ADHD).** (Q3: 4 yes, 8 not sure.)

| Layer | Detail | Evidence |
|---|---|---|
| **Goal** | Stop falling behind on material she skipped | Q4 (7/22 attended no lectures) |
| **Behaviour** | Missed most lectures in the past fortnight. Doesn't watch recordings. When she does study, it's with friends, which often turns social | Q-5, AFF-B |
| **Frustration** | Attention drifts within ten minutes. Hard material makes her quit and come back days later. Remembering material is a weekly problem | Q-4, Q12, AFF-C |
| **Attitudes** | Prefers being shown a worked example before being questioned. Welcomes a nudge, but only if it's small | Q-7 (8/22 lean to "show me"), Q-8 |
| **Quote (from Q12)** | "Gave up because I didn't understand at all, then revisited days later." | Q12 |

**What Maya needs:** very short sessions that survive interruption, and a "show me first" mode when she's stuck, so being stuck doesn't end the session (AFF-B, AFF-C, Q-7). She's secondary because meeting her needs (short, resumable, two modes) doesn't harm Tayo's experience.

## Anti-persona: Sam, who wants the work done for him
**Any year. Wants the app to write answers and summaries so he doesn't have to.**

| | |
|---|---|
| **Why he's out of scope** | Our evidence and AE-4 say learning sticks when the student produces the answer (AFF-D, Q-6). An app that hands over answers is what students already use most and trust least: AI chatbots, used by 15/22 and rated best by 2/22. |
| **What we refuse because of him** | Full answer generation on request, essay or summary writing, and "skip to the answer" buttons before an attempt. |

---

## Scenarios (Grudin and Pruitt: personas acted out in context)

**S-1 Tayo, Tuesday 13:05 (primary flow).** Tayo's HCI lecture ended at 13:00 and his timetable shows nothing until 15:00. At 13:05 his phone shows one notification: "10 minutes on this morning's lecture? 5 questions." He taps it. The first screen states the goal ("5 questions on mental models, about 10 minutes") and asks the first question straight away, so there's no blank page. He gets question 3 wrong. The app gives a one-line hint, he gets it on the second try, and the miss is logged. Session done in 9 minutes. That's the only nudge he gets that day. On Friday, his 5-minute review opens with the question he missed. *(Q-1, Q-8, Q-9, Q-10, AFF-A, AFF-D, AFF-E)*

**S-2 Maya, Wednesday evening (secondary flow).** Maya opens the app herself; nothing was due. It suggests the lecture she missed, as three 5-minute chunks. Two questions into chunk 1, she taps "show me first". The app walks through a worked example, then asks her to do a similar one herself. A friend messages her and she leaves the app. When she comes back an hour later, it resumes at the same question. *(Q-4, Q-7, AFF-B, AFF-C)*

## Storyboard outline (Jishnu to draw, Wk 3 structure)
1. **Establishing shot:** a lecture ends; Tayo walks out with two free hours.
2. **The trigger:** one notification appears at 13:05 (timetable-aware).
3. **The decision:** he taps; the goal is stated, and the first question is already on screen.
4. **The struggle:** a wrong answer; a one-line hint, not the answer.
5. **Resolution:** done in 9 minutes; a progress tick; no more nudges today.
6. **Payoff:** Friday's review opens with the question he missed.

## Limitations
- **Built before the interviews**, from n = 22 and one autoethnography. v2 updates them with interview data.
- **The secondary persona's ND traits rest on 4 "yes" answers.** We avoid attributing anything to ADHD that the data doesn't show (Q-12).
