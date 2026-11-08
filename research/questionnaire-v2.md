# Questionnaire v2: how students study

Status: v2, ready to pilot. Target: Birmingham students, any year and any subject. Anonymous. About 5 minutes, 16 questions.

**Live form:** https://docs.google.com/forms/d/e/1FAIpQLScTX_cZAEZgopnmq-ow8Y0PJb83cqHDN8QyiejqQaWxqtomWg/viewform (built from `questionnaire-v2-form.gs`; responses go to KAYZ's Google account)

## Change log v1 → v2
- **The scope moved from choosing a problem to studying.** The group converged on a study app that supports neurodivergent students (see `PLAN.md`). Its deciding criteria (B4 better than now, B5 significant impact, P3 improves on existing tools in the QOC bank) needed evidence about studying, and v1 asked nothing about lectures or revision. That gap is flagged in `QOC Design Space Analysis.pdf`.
- **Dropped:** housing, safety, bikes and phone platform (v1 Q2, Q7-Q11, Q15).
- **Kept the forms that worked:** a recent, countable time frame; labelled scales; "if at all" stems; filter options; a forced single choice to show priority; and the proactive-acceptance block (v1 Q12-Q14, rewritten for study).
- **Added:** questions on lectures and recordings, study problems, revision methods, learning preference, and an optional neurodivergence question so results can be split.

## Research questions
1. **RQ1:** Where do students struggle most when studying?
2. **RQ2:** How do they engage with lectures and recordings?
3. **RQ3:** How do they revise, and what do they think works?
4. **RQ4:** Do they prefer being shown answers or being questioned into them?
5. **RQ5:** Will they accept a proactive study app: unprompted nudges, data access, and how many notifications?
6. **RQ6:** Do answers differ for students who identify as neurodivergent?

Each research question also tests a theme from `autoethnography-01-kobi.md` (mapping at the end).

---

## Intro (shown before Q1)
> We're a group of HCI students at Birmingham designing an app to help students study. This questionnaire is anonymous: we don't collect names or emails. It takes about 5 minutes. You can skip any question or stop at any time. By continuing you agree to your answers being used in our coursework.

## Section A: About you

**Q1. What year of study are you in?**
1st year UG / 2nd year UG / 3rd year or above, UG / Postgraduate

**Q2. Which area is your degree in?**
Science, technology, engineering or maths / Medicine, dentistry or health / Social sciences / Arts and humanities / Business or law / Other

**Q3. Do you identify as neurodivergent (for example ADHD, autism, dyslexia)?** *(optional)*
Yes / No / Not sure / Prefer not to say

## Section B: Lectures

**Q4. In the past two weeks, how many of your scheduled lectures did you attend in person?**
All / Most / About half / A few / None

**Q5. When you watch a lecture recording, what do you usually do?** *(tick all that apply)*
Watch at normal speed / Speed it up / Skip to the parts I need / Pause to take notes / Watch while doing something else / I don't watch recordings

**Q6. In the last lecture you attended, roughly how long was it before your attention first drifted?**
Under 10 minutes / 10-20 minutes / 20-40 minutes / Over 40 minutes / It didn't drift / I haven't attended one recently

## Section C: Studying

**Q7. In the past two weeks, how often, if at all, has each of these been a problem for you?**
Scale per row: Never / Once / 2-3 times / Weekly or more
- Getting started on studying
- Staying focused once I've started
- Planning what to study and when
- Understanding new material
- Remembering material later
- Knowing whether I've really understood something

**Q8. If an app could help with only one of those, which would you choose?**
Getting started / Staying focused / Planning / Understanding / Remembering / Checking my understanding / None of these

**Q9. Which of these, if any, did you use to study in the past two weeks?** *(tick all that apply)*
Rereading notes or slides / Highlighting / Rewriting notes / Flashcards (e.g. Anki, Quizlet) / Practice questions or past papers / Explaining it to someone else / Asking an AI chatbot / Studying with others / Watching explainer videos / None of these

**Q10. Of the methods you ticked, which one helps you most?**
Same list as Q9, single choice.

**Q11. When you're learning something difficult, which do you prefer?**
1 Being shown the answer, then practising / 2 / 3 Either / 4 / 5 Being asked questions until I work it out myself

**Q12. Think about the last time a study session went badly. What happened?** *(optional, open text)*

## Section D: A proactive study app

**Q13. How welcome or unwelcome would this be: a study app notices you have a free gap between lectures and suggests a short quiz on that morning's lecture, without you opening it?**
1 Very unwelcome / 2 Unwelcome / 3 Neither / 4 Welcome / 5 Very welcome

**Q14. Which of these, if any, would you let a study app use?** *(tick all that apply)*
My timetable or calendar / My lecture slides and recordings / My location / My screen time or app usage / None of these

**Q15. How many notifications a day from one study app would you accept before turning them off?**
None / 1-2 / 3-5 / 6 or more

**Q16. Would you take part in a 15-minute follow-up interview or a short study-session observation?**
Yes, take me to a separate sign-up form *(the separate form keeps this one anonymous)* / No

---

## Why each question is here

| Q | Answers | Why this form |
|---|---|---|
| 1-2 | Context | Splits results by year and subject. |
| 3 | RQ6 | Our users include neurodivergent students. Optional, with "Prefer not to say" and "Not sure", because it's sensitive. Lets us compare groups without collecting a diagnosis. |
| 4 | RQ2 | Behaviour in a recent, countable window, not an opinion. |
| 5 | RQ2 | Tests AE theme 1 (capture vs attention) and LectureFlow's speed-up assumption. Tick-all because people combine habits. |
| 6 | RQ2 | Attention span in a real recent lecture. "Didn't drift" and "haven't attended" stop forced answers. |
| 7 | RQ1 | Six single-barrelled problems covering the study cycle: start, focus, plan, understand, remember, check. Frequency scale, neutral stem. |
| 8 | RQ1 | A forced single choice shows priority. Frequency alone doesn't. |
| 9-10 | RQ3 | What students actually do, then what they rate. The gap between rereading and practice testing matters for the design. |
| 11 | RQ4 | Tests AE theme 2 head-on. Balanced, labelled scale with a neutral midpoint. Decides whether the hi-fi questions students by default or offers it as a mode. |
| 12 | RQ1 | The "why" behind Q7. Seeds personas and scenarios. Optional and last in its section. |
| 13 | RQ5 | The brief requires proactive behaviour, so this tests acceptance with a concrete example. |
| 14 | RQ5 | Which data sources are acceptable. Sets what the system can sense (brief: external data). |
| 15 | RQ5 | Interruption tolerance, which sets the notification budget. |
| 16 | Next stage | Recruits for interviews and observation without breaking anonymity. |

## Autoethnography themes → questions
| Theme (AE-01) | Questions that test it |
|---|---|
| 1 Capture competes with attention | Q4, Q5, Q6 |
| 2 Learning sticks when I generate it | Q9, Q10, Q11 |
| 3 Load has a ceiling | Q7 (focus), Q12 |
| 4 Errors are the best data | Q7 (remember, check understanding), Q9 |
| 5 Structure and proactive timing | Q13, Q14, Q15 |

## Pilot (before sending)
- 3-5 students outside the group complete it on a phone.
- Ask each: which question did you reread, and what did you think it meant? How long did it take?
- Fix the wording, log the change here as v2.1, then send.

## Analysis plan
- **Q7 × Q8:** rank problems by frequency and by priority. The hi-fi leads on whatever tops both.
- **Split Q6, Q7 and Q11 by Q3:** do neurodivergent respondents differ? That decides how much the design adapts.
- **Q9 vs Q10:** the methods students use against the ones they rate. Any mismatch is a design opportunity.
- **Q11:** the share who prefer being questioned sets the hi-fi's default teaching mode.
- **Q13-Q15:** limits on how proactive the system can be.
- **Q12:** code the open answers into themes with an affinity diagram (Week 7). They feed personas and scenarios.
- Every finding gets an ID (Q7-a, Q11-b...) so features in the deck can cite it (rubric criteria 3, 4 and 8).
