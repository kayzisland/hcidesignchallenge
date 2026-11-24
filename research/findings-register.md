# Findings register

Status: v1, 8 Nov 2026. Owner: KAYZ. Rubric criteria 4 (data to design) and 8 (justification).

Every finding the project has produced, in one place. Requirements (T15) and hi-fi features (T21) cite IDs from this register, so a marker can follow any design decision back to the data in one hop.

**How to cite.** Use the ID alone, for example `Q-1`. Where a claim rests on several findings, list them all. Where a finding is Contested, say so at the point of use and name what contests it.

**This register is an index, not an authority.** Each finding is paraphrased in one line and the paraphrase is deliberately no stronger than the source. The source document holds the numbers, the method and the limitations, and it wins wherever the two differ.

**Strength.** *Strong* means three or more IDs from at least two different methods agree. *Single-source* means one method produced it and nothing else has tested it. *Contested* means another finding disagrees.

---

## Q-n: Questionnaire (n = 22)
Source: [`questionnaire-results.md`](questionnaire-results.md). Collected 31 Oct to 8 Nov 2026.

| ID | Finding | Source | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|---|
| **Q-1** | Getting started is the most frequent study problem and the one most would pick for an app to fix | questionnaire-results.md | Strong | Q-11, AFF-A, AE-11, AE2-P14, AE2-P15, AE2-1, AE2-10 | |
| **Q-2** | Staying focused is the second most frequent problem | questionnaire-results.md | Strong | Q-1, AFF-A, AFF-B, AE-7, AE2-P6 | |
| **Q-3** | Understanding new material is the least frequent problem | questionnaire-results.md | Contested | AE2-11 (indirectly: the teaching engine addressed the smallest need) | AE-5, AE-7, AE2-6, AFF-C: comprehension walls did stop sessions for the autoethnographer |
| **Q-4** | Attention in lectures drifts early, mostly inside 20 minutes | questionnaire-results.md | Strong | AE-1, AFF-C, AE2-P6 | |
| **Q-5** | Recordings are not the main study channel | questionnaire-results.md | Single-source | AE-10 (recording not available when wanted) | |
| **Q-6** | What students use most is not what they rate most helpful; generative methods are rated higher than passive ones | questionnaire-results.md | Strong | AE-3, AE-4, AE-8, AFF-D, AE2-5, AE2-8 | |
| **Q-7** | There is no single preferred teaching mode across students | questionnaire-results.md | Contested | AFF-C, AE2-P9, AE2-P12 | AE-3, AE-4 (one autoethnographer strongly prefers question-led) |
| **Q-8** | A quiz suggested unprompted in a free gap is welcome to most respondents | questionnaire-results.md | Strong | AFF-F, AE-9, AE2-P13 | |
| **Q-9** | The notification budget is 1 to 2 a day before most would switch them off | questionnaire-results.md | Single-source | AFF-F, AE2-P13 | |
| **Q-10** | Timetable and lecture materials are acceptable data sources; location is not | questionnaire-results.md | Single-source | AE2-P13 | |
| **Q-11** | Bad sessions fail at the start or in the social setting, rarely on content | questionnaire-results.md | Strong | Q-1, AFF-A, AFF-B, AE-11 | |
| **Q-12** | The neurodivergent split shows no clear difference at this sample size | questionnaire-results.md | Single-source | | |

## AE-n: Autoethnography 01, studying a module from the inside
Source: [`autoethnography-01-kobi.md`](autoethnography-01-kobi.md). 28 Sep to 29 Oct 2026, one participant.

| ID | Finding | Source | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|---|
| **AE-1** | Taking notes during a fast lecture pulled attention away from the lecture, and the notes were weak anyway | autoethnography-01-kobi.md | Single-source | Q-4 | |
| **AE-2** | A class test score was recorded and the two misses were fed into review | autoethnography-01-kobi.md | Single-source | AE-6, AE-8, AFF-E | |
| **AE-3** | Concepts argued through by question and counter-example stuck | autoethnography-01-kobi.md | Strong | Q-6, AE-4, AE-8, AFF-D, AE2-5, AE2-8 | Q-7 (not all students share this preference) |
| **AE-4** | When the assistant hinted at the answer inside its questions, the struggle went and so did the learning | autoethnography-01-kobi.md | Single-source | AE-3, AFF-D, Q-6 | |
| **AE-5** | Seeing the whole teaching plan at once would have overwhelmed; working one question at a time did not | autoethnography-01-kobi.md | Single-source | AE-7, AFF-C, AE2-P16 | |
| **AE-6** | The same mistake returned twice across a week | autoethnography-01-kobi.md | Single-source | AE-2, AE-8, AFF-E | |
| **AE-7** | A session became too heavy mid-dialogue and switching mode kept it alive where stopping would not | autoethnography-01-kobi.md | Single-source | AE-5, AFF-C, Q-2 | |
| **AE-8** | Retesting weak spots fixed most of them; one fact failed twice before it held | autoethnography-01-kobi.md | Single-source | AE-6, AFF-E, Q-6 | |
| **AE-9** | Material split by week, and limited to lectures already attended, kept review manageable | autoethnography-01-kobi.md | Single-source | AFF-F, Q-8 | |
| **AE-10** | Embedded slides failed to load and the recording was not up when review was wanted | autoethnography-01-kobi.md | Single-source | Q-5 | |
| **AE-11** | Study happened in fixed deep-work blocks and in spontaneous urgent sessions, so plans had to fit both | autoethnography-01-kobi.md | Single-source | Q-1, AFF-A, AFF-F | |

## AE2-Pn: Autoethnography 02, part 1, onboarding prototype walkthrough
Source: [`autoethnography-02-kobi.md`](autoethnography-02-kobi.md). 8 Nov 2026, one participant, first contact with Rahul's spike.

| ID | Finding | Source | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|---|
| **AE2-P1** | The welcome screen removed objections and gave no reason to start | autoethnography-02-kobi.md | Single-source | AE2-P2, Q-1 | |
| **AE2-P2** | The cost of the whole flow was estimated and judged too high before any question was answered | autoethnography-02-kobi.md | Strong | Q-1, AFF-A, AE2-P14, AE2-1, AE2-2 | |
| **AE2-P3** | The four problems picked unprompted matched the four the questionnaire ranks highest | autoethnography-02-kobi.md | Single-source | Q-1, Q-2 | |
| **AE2-P4** | A multi-select of universally true problems collected no signal, and the participant noticed | autoethnography-02-kobi.md | Single-source | Q-8 method note | |
| **AE2-P5** | A question that split the population by preference was welcomed, in direct contrast to AE2-P4 | autoethnography-02-kobi.md | Single-source | Q-7, AE-3 | |
| **AE2-P6** | Attention was gone by the end of the first of four onboarding stages | autoethnography-02-kobi.md | Strong | Q-2, Q-4, AFF-C, AE2-P14 | |
| **AE2-P7** | The revision options omitted practice questions, the method the project's own data rates highest | autoethnography-02-kobi.md | Single-source | Q-6, AE-8 | |
| **AE2-P8** | Fixed session-length options did not fit; the "choose each time" escape was the only honest answer | autoethnography-02-kobi.md | Single-source | AE-11, Q-4 | |
| **AE2-P9** | The wrong-answer-handling question confused the participant, who could not predict their own behaviour | autoethnography-02-kobi.md | Single-source | Q-7, AFF-C | |
| **AE2-P10** | The theme picker changed the app immediately and produced the walkthrough's only delight and buy-in | autoethnography-02-kobi.md | Single-source | AFF-A | |
| **AE2-P11** | Accessibility options were phrased as system settings and asked before any content had been seen | autoethnography-02-kobi.md | Single-source | Q-7 | |
| **AE2-P12** | The participant wanted to switch information-display modes later, with no commitment at onboarding | autoethnography-02-kobi.md | Single-source | AFF-C, AE2-P8 | |
| **AE2-P13** | The nudge questions landed well and the demo labelling on sample calendar data was noticed unprompted | autoethnography-02-kobi.md | Single-source | Q-8, Q-9, Q-10 | |
| **AE2-P14** | A 15-question onboarding was perceived as roughly 60 questions, and judged harder than studying itself | autoethnography-02-kobi.md | Strong | Q-1, Q-2, AFF-A, AE2-P2, AE2-1, AE2-2 | |
| **AE2-P15** | The participant answered a practice item correctly and quit the game anyway | autoethnography-02-kobi.md | Strong | Q-1, AFF-A, AE2-P14, AE2-10 | |
| **AE2-P16** | The archetype reveal bought attention back and its information density spent it again; the override sliders were valued | autoethnography-02-kobi.md | Single-source | AE-5, AFF-C, Q-7, Q-12 | |

## AE2-n: Autoethnography 02, part 2, LearnHarness study session
Source: [`autoethnography-02-kobi.md`](autoethnography-02-kobi.md). 8 Nov 2026, one participant, session 1, reached Unit 3 of 8.

| ID | Finding | Source | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|---|
| **AE2-1** | Six setup steps stood between deciding to learn and the first question | autoethnography-02-kobi.md | Strong | Q-1, AFF-A, AE2-P14, AE2-P2 | |
| **AE2-2** | A wait was called long and then revised the moment it ended, with no progress signal shown | autoethnography-02-kobi.md | Single-source | AE2-P14 | |
| **AE2-3** | The product read as a wrapper within the first ten seconds, and the session did not overturn that | autoethnography-02-kobi.md | Single-source | AE2-11 | |
| **AE2-4** | Visible agent reading and searching, with no stated purpose, read as waste | autoethnography-02-kobi.md | Single-source | AFF-C, AE2-2 | |
| **AE2-5** | A confidence rating and a reasoning field beside one question produced the session's clearest delight | autoethnography-02-kobi.md | Strong | Q-6, AE-3, AE-4, AE2-8 | AE2-9 (the same probing, continued, felt like a test) |
| **AE2-6** | A confidence rating of 30% accompanied a wrong answer, catching uncertainty the answer alone hid | autoethnography-02-kobi.md | Single-source | Q-6, AE2-5 | Q-3 (understanding was a problem here) |
| **AE2-7** | Feedback used a cell-naming convention the lesson had not introduced, so the correction did not land | autoethnography-02-kobi.md | Single-source | AFF-C, AE2-4 | |
| **AE2-8** | The thinking field was used properly and without prompting | autoethnography-02-kobi.md | Strong | Q-6, AE-3, AE2-5 | |
| **AE2-9** | Repeated probing without explanation read as being tested before being taught, and the participant was unsure whether that was good | autoethnography-02-kobi.md | Contested | Q-1, Q-3, AFF-A | AE2-5, AE2-8 (the same mechanism, welcomed at first contact) |
| **AE2-10** | The tool was judged to teach well and to do nothing about the problem of starting | autoethnography-02-kobi.md | Strong | Q-1, Q-2, AFF-A, AE2-1, AE2-P14, AE2-P15 | |
| **AE2-11** | Nothing observed in the session needed a separate application; the participant judged a general assistant could do the same | autoethnography-02-kobi.md | Single-source | AE2-3 | Q-6 (students use general assistants most and trust them least) |

## AFF-x: Affinity clusters
Source: [`affinity.md`](affinity.md). Built from Q12 open answers, questionnaire findings and the AE-01 log.

| ID | Cluster | Source | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|---|
| **AFF-A** | "I can't get going": the first job is getting a student into a session at a time that fits | affinity.md | Strong | Q-1, Q-11, AE-11, AE2-P14, AE2-P15, AE2-1, AE2-10 | |
| **AFF-B** | "The setting derails me": sessions must be short and resumable, with no social features by default | affinity.md | Single-source | Q-11, Q-2 | Q-8 is silent on this; Focusmate-style body doubling works for some (existing-solutions.md) |
| **AFF-C** | "Too much at once": show one step at a time and offer a lighter mode when overloaded | affinity.md | Strong | AE-5, AE-7, Q-4, AE2-P6, AE2-P16, AE2-4 | |
| **AFF-D** | "I learn when I produce the answer": sessions are active recall, hints in steps, never the answer early | affinity.md | Strong | Q-6, AE-3, AE-4, AE-8, AE2-5, AE2-8 | Q-7 (not every student prefers this) |
| **AFF-E** | "Mistakes repeat": keep an error log and resurface misses in later sessions | affinity.md | Single-source | AE-2, AE-6, AE-8 | |
| **AFF-F** | "Fit my week, nudge me gently": organise by course week, nudge into free gaps, 1 to 2 a day at most | affinity.md | Strong | Q-8, Q-9, Q-10, AE-9, AE-11, AE2-P13 | |
| **AFF-G** | "Why are you asking me this?": a question that changes something visible earns the next one; a question that only collects spends goodwill | affinity.md (new in v1.1) | Single-source | AE2-P4, AE2-P9, AE2-P11, AE2-9 | AE2-P5 and AE2-P10 are questions that gave something back and were welcomed. Both are kept in the cluster as counter-notes |
| **AFF-H** | "I can't tell what it's doing": show progress during a wait, say what background work is for, never use a term the session has not introduced | affinity.md (new in v1.1) | Single-source | AE2-2, AE2-4, AE2-7 | |

## INT-n-x: Interviews
Six semi-structured interviews, 6 to 12 Nov 2026 (T07). INT-01 and INT-02 by Jishnu, INT-03 to INT-06 by KAYZ. Sources: [`interviews/INT-01.md`](interviews/INT-01.md) to [`interviews/INT-06.md`](interviews/INT-06.md), counted across all six in [`interviews/synthesis.md`](interviews/synthesis.md).

**Read every row with one caveat.** Each finding is one participant. Strength here comes from what agrees with it, and the quotes in INT-03 to INT-06 come from AI summaries that have not yet been checked against the transcripts.

### INT-01: year 3, Computer Science, ND yes (Jishnu)
| ID | Finding | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|
| **INT-01-a** | Studies week by week. Being on time removes the reason to work ahead, so effort rises only after falling behind | Strong | INT-04-a, Q-1, AFF-A | |
| **INT-01-b** | Manages attention through his surroundings, not apps. Works in the library because the walk commits him, and leaves phone notifications uncleared as a standing reminder | Contested | INT-03-d, INT-05-b, INT-06-d (place as commitment); LIT-6 (devices away) | The phone-lock concept would hide the notifications he uses as a cue. He is the counter-case in X-6 |
| **INT-01-c** | Whether he follows up depends on how much he understood. Below roughly 80% of a lecture he struggles to follow up at all | Single-source | Q-3, AE2-6 | |
| **INT-01-d** | Wants to go straight to the section he struggled with. Ten cards on weak topics beats a hundred to find them | Single-source | AE-8, AFF-E, INT-02-e | |
| **INT-01-e** | Lecture material arrives with no order, which makes studying an "insurmountable task". He wants a roadmap with an order | Strong | INT-04-e, INT-02-b, Q-11, AFF-A | |
| **INT-01-f** | He wants to reach any piece of information directly. A tool that makes him go the long way round is redundant | Single-source | INT-01-e, AE2-1 | INT-01-e also asks for a fixed order, so the design owes him both |
| **INT-01-g** | Does not trust LLMs as a source of truth. Every summary should link to the exact slide or moment for checking | Strong | INT-02-i, Q-6 | INT-03-f, INT-06-e both rely on AI daily. See X-9 |
| **INT-01-h** | Transcripts are useful, but Panopto's interface and inaccurate transcript make 50 minutes of lecture unsearchable | Single-source | INT-02-e, Q-5 | |
| **INT-01-i** | Abandonment: cards unreviewed for 17 days were marked not completed, over 2,000 lapsed, and recovery meant 100+ a day. Progress must be recoverable "like the gym" | Strong | AE2-P14, AE2-P15, AE2-1, Q-1 | |

### INT-02: year 4, MSc Computational Finance, ND no (Jishnu)
| ID | Finding | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|
| **INT-02-a** | Noticed his knowledge gap through social media and forums, which produced a sense of missing out and social pressure | Single-source | INT-02-c | |
| **INT-02-b** | Decision paralysis across too many resources, with no streamlined path to what he needed | Strong | INT-01-e, INT-04-e, Q-11 | |
| **INT-02-c** | His challenge is long-term consistency. Starting is fine; once he sees progress he stops chasing | Contested | INT-01-i (progress systems drive abandonment) | Q-1, INT-05-a and four others say starting is the problem. He is the exception in T-1 |
| **INT-02-d** | With no external pressure he turns to his phone, and always thinks he should have started earlier | Strong | INT-03-b, INT-04-b, INT-05-d, INT-06-c, LIT-6, LIT-9 | |
| **INT-02-e** | Starts with a past paper to find what he does not know, then goes through all lectures, using the transcript to skim what he knows | Single-source | AE2-9 (measure first), INT-01-d, Q-6 | |
| **INT-02-f** | On hard topics he goes down rabbit holes and can become obsessed. He asks a person if he cannot solve it, and never abandons a topic | Single-source | Q-3 | |
| **INT-02-g** | Visual cues with audio help a lot. Symbol-heavy maths and jargon make his brain switch off | Single-source | Q-7, AFF-C | |
| **INT-02-h** | He is more interested in practical application than theory. Real-world framing helps him start and helps him choose what to study | Single-source | INT-03-g (interest drives mode) | |
| **INT-02-i** | Does not go to LLMs first, prefers human and forum sources. Sees flashcards as a gimmick because of the time making them, and would use them if provided | Strong | INT-01-g, INT-06-e (would use what is provided), Q-6 | INT-03-f, INT-06-e rely on AI. See X-9 |

### INT-03: postgraduate, law conversion, ND not recorded (KAYZ)
| ID | Finding | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|
| **INT-03-a** | Starting is the hardest part. A "mental block" filled with social media, games and chores. Once in flow it is not as bad | Strong | Q-1, AFF-A, INT-05-a, INT-06-a, INT-04-a | |
| **INT-03-b** | Social media is the main pull. Breaks about every 50 minutes often become 20 minutes of scrolling | Strong | INT-02-d, INT-04-b, INT-05-d, INT-06-c, LIT-7, LIT-9 | |
| **INT-03-c** | Dropped Pomodoro because the timer interrupted their flow, for example mid question set | Strong | AE2-P8, AE-11, INT-05-h, LIT-11 | Directly contradicts the fixed 25 and 5 cycle in the 10 Nov concept |
| **INT-03-d** | Moved from home to the library. Home is too comfortable and has family interruptions. Plans the day the night before, roughly 9 to 5, "not too strict" | Strong | INT-01-b, INT-05-b, INT-06-d | |
| **INT-03-e** | A bad session: friends were on campus, they ate together instead of going to the library, and the day was gone | Strong | Q-11, AFF-B, INT-06-c | |
| **INT-03-f** | Uses AI twice a session: a summary first, then AI-written multiple-choice questions at the end to test themselves | Single-source | INT-06-e, Q-6, AFF-D | INT-01-g, INT-02-i distrust LLMs. See X-9 |
| **INT-03-g** | Shown versus asked depends on interest. Interesting subjects they work out themselves; less interesting ones they would rather be told | Strong | Q-7, INT-04-h, INT-05-f, INT-06-i | |

### INT-04: postgraduate, maths and philosophy, ND not recorded (KAYZ)
| ID | Finding | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|
| **INT-04-a** | Their last session was exam crunch. The gap between deciding and starting was short because of the deadline. **Urgency removed the starting problem** | Strong | INT-01-a, Q-1, AFF-A | |
| **INT-04-b** | Their phone is "always right next to me" and "almost always" pulls them off track | Strong | INT-02-d, INT-03-b, INT-05-d, INT-06-c, LIT-6, LIT-9 | |
| **INT-04-c** | A bad session is constant distraction, drawn into non-study tasks such as editing videos until they need to eat or sleep | Single-source | INT-03-a, Q-11 | |
| **INT-04-d** | Removing the phone would help, but they have a general distraction problem and would "probably find another way" | Contested | INT-06-h (focus is the real barrier) | LIT-6, LIT-9 say phone removal has a real effect |
| **INT-04-e** | Breaking a task down is their biggest struggle. An AI could split an objective into steps, "even just the very, very first, tiniest step" | Strong | INT-01-e, INT-02-b, AFF-A, Q-11 | |
| **INT-04-f** | A 10-minute post-lecture quiz: positive, but annoying "if I don't want to do it". Timing it to when they are receptive, or letting them schedule it, would help | Strong | Q-8, Q-9, INT-05-g, LIT-4 | |
| **INT-04-g** | A phone lock in fixed study times: they would keep it on for urgent tasks and might switch it off for non-urgent ones | Contested | INT-05-h, INT-06-h, LIT-10, LIT-11 | The lock is weakest exactly when INT-04-a says starting is hardest. See X-8 |
| **INT-04-h** | Shown versus asked depends on the subject. Shown in maths after many questions; in philosophy they ask and re-read | Strong | Q-7, INT-03-g, INT-05-f, INT-06-i | INT-06-i splits on the same two subjects in the opposite direction |

### INT-05: year 3, Medicine, ND not recorded (KAYZ)
| ID | Finding | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|
| **INT-05-a** | They know how to study and lack the desire to start. Asked whether an app should teach studying or tell them when to study, they chose the second: "no desire to do it", not a skills gap | Strong | Q-1, Q-2, AFF-A, INT-03-a, INT-06-a, AE2-10 | |
| **INT-05-b** | A couple of spare hours after placement, so they went to the library. About an hour between deciding and starting, mostly travel. Being there mattered "even if they did no work" | Strong | INT-01-b, INT-03-d, INT-06-d | |
| **INT-05-c** | No clear finish point. They stopped when they ran out of time | Single-source | Q-11 (no goal for the session), AE2-P1 | INT-06-f and INT-02-e both have a finish condition |
| **INT-05-d** | Their phone distracted them several times. They returned to work after getting bored of it or turning it off | Strong | INT-02-d, INT-03-b, INT-04-b, INT-06-c, LIT-9 | |
| **INT-05-e** | Uses Anki on an iPad, with cards made by a student in the year above. Writes the answer, then marks wrong ones to see again | Single-source | Q-6, AFF-D, AFF-E, INT-02-i (would use cards made for them) | |
| **INT-05-f** | Shown versus asked depends on whether there is a set goal. Checks understanding by answering more questions and by confidence, and says there is no objective measure | Strong | Q-7, AE2-5, INT-03-g, INT-04-h, INT-06-i | |
| **INT-05-g** | A 10-minute post-lecture quiz would be "really, really great" **if limited to one notification**. Repeated reminders would "get on my nerves" | Strong | Q-8, Q-9, INT-04-f, LIT-4, LIT-5 | |
| **INT-05-h** | Would declare free study times only if the times could be adjusted, because their schedule fluctuates. Plans availability in weeks | Strong | AE2-P8, AE-11, INT-03-c, LIT-10, LIT-11 | |

### INT-06: year 2, International Business, ND not recorded (KAYZ)
| ID | Finding | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|
| **INT-06-a** | About a week passed between deciding to study and starting, then two to three hours on the day. They kept getting sidetracked, then "just opened the website and started" | Strong | Q-1, AFF-A, INT-03-a, INT-05-a | |
| **INT-06-b** | What would help them start: "Absence of distraction." Named notifications, tidying and opening the curtains | Contested | INT-05-a, Q-1 | INT-06-h rejects the lock that would deliver it. See X-8 |
| **INT-06-c** | A bad session: a library visit with a friend, where they chatted and doom scrolled instead of studying | Strong | Q-11, AFF-B, INT-03-e, LIT-9 | |
| **INT-06-d** | The phone sat next to them at first, then face down on the bed while they worked at the desk. Studying away from their room helps them focus | Strong | INT-01-b, INT-03-d, INT-05-b, LIT-6 | |
| **INT-06-e** | Their main tool is a notebook-style AI app: they upload question banks and it generates quizzes. The first study app they have used, and they have never stopped | Single-source | INT-03-f, INT-02-i (would use what is provided), Q-6 | INT-01-g, INT-02-i distrust LLMs. See X-9 |
| **INT-06-f** | They count themselves done when they can answer every practice question with full confidence. They memorise by cumulative repetition | Single-source | AE2-5, INT-05-f, Q-6 | INT-05-c has no finish point at all |
| **INT-06-g** | A 10-minute post-lecture quiz: useful because it covers the lecture, but doing a quiz is annoying and they would probably put it off ("I'm just lazy to be honest") | Strong | Q-8, INT-04-f, AE2-P15 | |
| **INT-06-h** | Two fixed weekly study times with the phone locked and breaks every 25 minutes: they do not think they would use it. If already focused the phone does not matter; if they cannot focus, everything is a distraction | Strong | INT-04-d, INT-04-g, INT-03-c | INT-06-b wants absence of distraction. See X-8 |
| **INT-06-i** | Shown versus asked depends on the subject: guiding questions in maths, told first then reverse-engineer for language-based subjects. Checks understanding by explaining to someone | Strong | Q-7, INT-03-g, INT-04-h, INT-05-f | INT-04-h splits on the same two subjects the opposite way |

## LIT-n: Literature
Four sources. **LIT-1 to LIT-5** come from [`../define/behaviour-change.md`](../define/behaviour-change.md) (T20), verified against primary texts on 8 Nov 2026. **LIT-6 to LIT-12** come from [`literature-phones.md`](literature-phones.md), checked on 9 Nov 2026. **LIT-13 to LIT-23** come from [`literature-review.md`](literature-review.md) (T09), checked on 19 Nov 2026. **LIT-24 to LIT-31** come from [`literature-learning-loop.md`](literature-learning-loop.md), drafted by Jiven on 23 Nov and reviewed by KAYZ on 24 Nov: all eight DOIs were checked against Crossref for authors, year, venue, volume and pages, and the Yang et al. and Bastani et al. figures were checked against their abstracts. In every case author, year, venue and the specific claim were checked, and nothing was dropped as unverifiable.

The corroborating and contradicting IDs for LIT-13 to LIT-23 are the ones the review itself names in its RQ tables. None was added here.

| ID | Source | Finding used | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|---|
| **LIT-1** | Fogg (2009), *Persuasive '09*, DOI 10.1145/1541948.1541999 | A behaviour happens when motivation, ability and a prompt occur together; ability is the more reliable lever for a designer | Established framework | Q-1, Q-8, AE2-P15, AFF-A | |
| **LIT-2** | Michie, van Stralen & West (2011), *Implementation Science* 6:42, DOI 10.1186/1748-5908-6-42 | COM-B: behaviour needs capability, opportunity and motivation; nine intervention functions sit on the wheel | Established framework | Q-3, Q-8, Q-10, Q-11 | |
| **LIT-3** | Gollwitzer (1999), *American Psychologist* 54(7), 493-503, DOI 10.1037/0003-066X.54.7.493 | A goal intention names an endpoint; an implementation intention specifies when, where and how, as "whenever situation x arises, I will initiate response y" | Established framework | Q-11, AE2-P1, AE2-1, AFF-A | |
| **LIT-4** | Adamczyk & Bailey (2004), *CHI '04*, 271-278 | Interrupting at predicted best points produced less annoyance, frustration, time pressure and mental effort, and was rated more respectful of the primary task. **No main effect on time on task** | Single study, desktop laboratory, non-study tasks | Q-8, Q-9, AFF-F | |
| **LIT-5** | Mehrotra, Pejovic, Vermeulen, Hendley & Musolesi (2016), *CHI '16*, 1021-1032 | Response time and perceived disruption vary with notification presentation, alert type, sender-recipient relationship, and the ongoing task's type, completion level and complexity. Even useful content can disrupt | Single study, in the wild, 20 users | Q-9, LIT-4 | LIT-4 is desktop and laboratory; this is mobile and in the wild, and it finds disruption depends on task factors a timetable cannot sense |

| **LIT-6** | Ward, Duke, Gneezy & Bos (2017), *Journal of the Association for Consumer Research* 2(2) | The mere presence of one's own phone reduces available cognitive capacity. Participants with the phone in another room outperformed those with it on the desk, even when it was silent, face down or off. The most phone-dependent were hit hardest | Experiment, nearly 800 participants, laboratory | | |
| **LIT-7** | Rosen, Carrier & Cheever (2013), *Computers in Human Behavior* 29(3) | 263 students observed minute by minute over 15-minute study sessions were on task about 65% of the time, with focus slipping after about two minutes | Observational, 263 students | Q-2, Q-4, AFF-C | |
| **LIT-8** | Lepp, Barkley & Karpinski (2014), *Computers in Human Behavior* 31 | Higher phone use was associated with lower cumulative GPA, taken from university records, and with higher anxiety | Correlational, 500+ students. No causal claim | | |
| **LIT-9** | Hidalgo-Fuentes (2022), *Electronic Journal of Research in Educational Psychology* 20(57) | Meta-analysis of 18 studies and 8,679 students: a moderate positive relationship between problematic smartphone use and procrastination (Zr = 0.40) | Meta-analysis, and correlational, so the direction is unresolved | Q-1, AFF-A | **Q-11:** none of the 8 Q12 answers named the phone. See X-6 |
| **LIT-10** | Lyngs et al. (2024), *CHI 2024* | 280 students set their own device-use goals and chose their own self-control tools. At 1 to 3 months, 95% were still using at least one, self-reported self-control rose substantially, and students picked very different combinations | Field study with follow-up, 280 students | Q-7, Q-9, AE2-P8, AE2-P12 | |
| **LIT-11** | Lyngs et al. (2020), *CHI 2020* | 58 students over six weeks: goal reminders and a removed newsfeed both kept them on task. Reminders were often called annoying and feed removal caused fear of missing out. The authors recommend flexible blocking matched to each person's definition of distraction | Field study, 58 students, six weeks | Q-9, AE2-P8, AE2-P12 | |
| **LIT-12** | Lally, van Jaarsveld, Potts & Wardle (2010), *European Journal of Social Psychology* 40(6) | Median 66 days for a daily behaviour to become automatic, range 18 to 254. Missing a single day did not derail formation | Field study, small sample, self-report | | **AE2-P8, AE-11:** fixed weekly blocks sit awkwardly with a student who wants to choose each time and who studies in bursts. See X-7 |

| **LIT-13** | Steel (2007), *Psychological Bulletin* 133(1), 65-94 | Meta-analysis of 691 correlations. The strong and consistent predictors of procrastination are task aversiveness, task delay, self-efficacy and impulsiveness | Meta-analysis, 691 correlations | INT-04-a (task delay), INT-05-a (task aversiveness), AFF-M (impulsiveness) | |
| **LIT-14** | Sirois & Pychyl (2013), *Social and Personality Psychology Compass* 7(2), 115-127 | Conceptual review: procrastination has a great deal to do with short-term mood repair. An aversive task is avoided to feel better now, and the cost falls on the future self | Conceptual review, no new data | INT-03-a, Q-3 | |
| **LIT-15** | Ko et al. (2015), *CHI '15 Extended Abstracts*, 1561-1566 | A group phone-limiting app. 79.5% of 49 surveyed were disturbed by smartphones while socialising. In a pilot of 20, groups said they could limit smartphones together. No controlled outcome | Pilot, n = 20, no control group | INT-03-e, INT-06-c | |
| **LIT-16** | Roediger & Karpicke (2006), *Psychological Science* 17(3), 249-255 | On delayed tests, prior testing produced substantially greater retention than studying. At 5 minutes, restudying did better, so the benefit arrives late | Experiment | Q-6, AE-8 | Its own caveat: at a 5-minute delay restudying won, so students will not feel the benefit at once |
| **LIT-17** | Dunlosky et al. (2013), *Psychological Science in the Public Interest* | Of ten techniques, practice testing and distributed practice received the highest overall utility rating. Rereading, highlighting and summarisation rated low | Review of ten techniques | Q-6 | |
| **LIT-18** | Wood & Neal (2007), *Psychological Review* 114(4), 843-863 | Habits form from associations between a response and its context. Once formed, the context triggers the associated response without a mediating goal | Theoretical review | AFF-J, INT-03-d, INT-05-b, INT-06-d, AE-11 | **INT-05-h:** moving a block weakens the context cue, and INT-05-h wants blocks that can move. The review names this tension |
| **LIT-19** | Sailer & Homner (2020), *Educational Psychology Review* 32, 77-112 | Meta-analysis of 40 experiments. Small positive effects: cognitive g = .49, motivational g = .36, behavioural g = .25. Combining competition with collaboration was particularly effective | Meta-analysis, 40 experiments | INT-02-a | |
| **LIT-20** | Albuquerque et al. (2017), *Computers & Education* 115, 161-170 | A male-stereotyped gamified environment affected participants' anxiety. Cites earlier work in which a male-dominated leaderboard affected women's maths performance | Experimental, hypothetical scenario study | No direct data of ours. T20 R-6 already declines loss framing | |
| **LIT-21** | Locke & Latham (2002), *American Psychologist* 57(9), 705-717 | Goal setting and task motivation over 35 years. Used in T20 for R-4: every session states one clear, achievable goal | Established framework | | |
| **LIT-22** | Ajzen (1991), *Organizational Behavior and Human Decision Processes* 50(2), 179-211 | The theory of planned behaviour. Used in T20 for: perceived control is low at the start, so the first step must be small, and norm-based features are risky | Established framework | | |
| **LIT-23** | Tversky & Kahneman (1979), *Econometrica* 47(2), 263-292 | Prospect theory: losses loom larger than gains. Used in T20 for R-6, no streaks | Established framework | INT-01-i | |

| **LIT-24** | Yang, Luo, Vadillo, Yu & Shanks (2021), *Psychological Bulletin* 147(4), 399-435 | Systematic review and meta-analysis of 222 classroom studies covering 48,478 students. Quizzing raises student academic achievement to a medium extent (g = 0.499) against restudying and other strategies. The benefit depends on provision of corrective feedback and number of test repetitions | Meta-analysis, 222 classroom studies, 48,478 students. Classroom, not laboratory | LIT-16, N-2 | |
| **LIT-25** | Bastani, Bastani, Sungu, Ge, Kabakcı & Mariman (2025), *PNAS* 122(26), e2422633122 | Field experiment with nearly 1,000 high-school maths students. Grades rose 48% with a standard chatbot interface and 127% with a safeguarded tutor. Once the tool was taken away, the standard-interface group did 17% worse than students who never had it, having used it as a crutch. Safeguards largely mitigated the harm | Field experiment, ~1,000 students, high-school maths, one country, early in generative AI's adoption | AE2-11, Q-6 | |
| **LIT-26** | Pan & Carpenter (2023), *Educational Psychology Review* 35, 97 | Testing students on material they have not learned yet can benefit learning if there is an opportunity to study the correct answers afterwards. It works despite many erroneous responses, across text, video and lectures, and covers memory and transfer. The size varies with procedure | Review of empirical research. The authors say best practice for education still needs research | | **AE2-9:** being questioned before being taught read as being tested. The mechanism works, and how it is framed decides how it feels |
| **LIT-27** | Metcalfe (2017), *Annual Review of Psychology* 68, 465-489 | Errorful learning followed by corrective feedback is beneficial. Errors made with high confidence are corrected more readily than low-confidence errors. Feedback that analyses the reasoning leading up to the mistake is crucial | Annual review | AE2-5, AE2-6, AE2-8 | |
| **LIT-28** | Kestin, Miller, Klales, Milbourne & Ponti (2025), *Scientific Reports* 15, 17458 | Randomised controlled trial with Harvard physics students. An AI tutor built on the same teaching best practices as the class had students learn significantly more in less time than an active-learning class, and feel more engaged and more motivated | RCT, one course, and the tutor was built by that course's own instructors | X-9: evidence that a well-designed AI tutor can teach and not just answer | |
| **LIT-29** | Antony, Ferreira, Norman & Wimber (2017), *Trends in Cognitive Sciences* 21(8), 573-576 | Retrieval acts as a rapid consolidation event. Recall reactivates the memory and its associations and builds lasting hippocampal-neocortical links, which restudying does not do in the same way | A proposal with testable predictions, not a settled result. Co-author Wimber was at the University of Birmingham when it was written | Q-6 | |
| **LIT-30** | Rouhani, Niv, Frank & Schwabe (2023), *Trends in Cognitive Sciences* 27(9), 867-882 | Memories are strengthened by the extent to which outcomes deviate from expectations, that is, by prediction errors. This route has a distinct neural signature | Review of mechanism, mostly laboratory studies | | |
| **LIT-31** | Gilboa & Marlatte (2017), *Trends in Cognitive Sciences* 21(8), 618-631 | Schemas, the structures of what a person already knows, enhance or distort mnemonic processing from the outset and accelerate neocortical integration, supported by the ventromedial prefrontal cortex, the hippocampus and the angular gyrus | Review of mechanism, mostly laboratory studies | | |

**T09 landed on 19 Nov,** written by KAYZ after the 16 Nov sync reassigned it. Its file is `literature-review.md`, and PLAN.md's original timeline names `research/literature.md`. The plan is frozen, so the file keeps the name it was written under.

**Not yet sourced.** The review flags dual process theory, social cognitive theory, bounded rationality and the transtheoretical model as cited in T20 from the Week 8 slides only. Their primary sources need checking before the deck relies on them, and they have no LIT ID until then.

---

## Convergences

Claims backed by three or more IDs from at least two different methods. These are the safest things the project can say, and they are what the deck should lead on.

**C-1. Starting is the problem, and it is a cost problem.**
Q-1, Q-2, Q-11, AFF-A, AE-11, AE2-P2, AE2-P14, AE2-P15, AE2-1, AE2-10, INT-01-a, INT-03-a, INT-04-a, INT-05-a, INT-06-a.
**Five methods agree:** questionnaire, affinity clustering, both autoethnographies and now six interviews. The best-evidenced thing the project has.
Before the interviews the strongest version was AE2-P15, a correct answer followed by quitting anyway. **INT-05-a is now the strongest version,** because it is a participant stating the design problem unprompted: asked whether an app should teach them to study or tell them when to study, they chose the second, because they have "no desire to do it" and no skills gap.
**The interviews also added the condition we were missing.** INT-04-a studied all day the moment an exam was close, and INT-01-a works ahead only once he has fallen behind. Starting fails hardest when nothing is urgent, which is the week the design has to win.

**C-2. Students learn when they produce the answer.**
Q-6, AE-3, AE-4, AE-8, AFF-D, AE2-5, AE2-8.
Three methods. The questionnaire shows generative methods rated highest while passive ones are used most. Both autoethnographies show the same pattern in behaviour, and the confidence and reasoning fields in AE2-5 and AE2-8 are the mechanism working on a second occasion.

**C-3. Cognitive load has a ceiling, and one step at a time stays under it.**
AE-5, AE-7, AFF-C, Q-4, AE2-P6, AE2-P16, AE2-4.
Three methods. Attention drifts inside 20 minutes in a lecture (Q-4) and inside one stage of four in a form (AE2-P6). Density spent goodwill at the reveal screen (AE2-P16) and unexplained machinery did the same in a tutor (AE2-4).

**C-4. Proactive nudging is welcome inside a strict budget, from course data only.**
Q-8, Q-9, Q-10, AFF-F, AE-9, AE2-P13.
Three methods. The questionnaire gives the numbers, AE-9 shows the same preference in behaviour (weekly decks, attended lectures only), and AE2-P13 shows the nudge questions landing well on first contact.

**C-5. Perceived cost runs ahead of real cost when nothing shows progress.**
AE2-P2, AE2-P14, AE2-2.
**Single method.** All three come from autoethnography 02 and from one participant on one day. Listed here because it recurs three times and has a clear design implication, and flagged because it is not yet a convergence in the sense the others are. The interviews should test it.

**C-6. Errors repeat and are worth logging.**
AE-2, AE-6, AE-8, AFF-E.
**Single method.** AFF-E is clustered from the AE-01 notes, so this is one method counted twice. It is a reasonable hypothesis and it is not corroborated. The lo-fi and hi-fi tests should test it.

## Open contradictions

Noting these is rubric criterion 4 (alternative interpretations) and criterion 8 (honest criticism). None of them is resolved by asserting one side.

**X-1. Question-led teaching by default, against a split preference.**
AE-3 and AE-4 say the autoethnographer learns best when questioned and loses the learning when hinted at. Q-7 says the student population splits roughly 10 to 8 on being questioned against being shown. AE2-9 adds a third reading: sustained questioning without explanation felt like an exam.
*Current handling:* design-log, 8 Nov, offers both modes chosen by the student. The contradiction is managed, not settled, and n = 22 is too small to test whether the split is by subject or by person.

**X-2. Understanding is the rarest problem, against a teaching engine chosen to explain.**
Q-3 says understanding is the least frequent problem and only 1 of 22 would pick it. The 28 Oct decision built the hi-fi on an engine whose strength is exactly that. AE2-11 sharpens it. AE2-6 cuts the other way: the autoethnographer got a Nash equilibrium question wrong at 30% confidence, so understanding was a real problem for him.
*Current handling:* the LearnHarness base moved to provisional on 8 Nov, pending the 10 Nov sync. See `../meetings/2026-11-10-sync.md`.

**X-3. A general assistant is enough, against students not trusting general assistants.**
AE2-11 says nothing in the session needed a separate application. Q-6 says AI chatbots are the most used tool in the sample (15 of 22) and among the least trusted (rated best by 2). If a general assistant were sufficient, the sample's experience of general assistants should be better than it is.
*Reading:* the gap may be in how students use assistants. Capability may not be the limit at all, which would favour a product that structures the interaction. One session cannot settle it.

**X-4. The same probing mechanism, welcomed and resented.**
AE2-5 and AE2-8 record genuine enthusiasm for the confidence rating and thinking field. AE2-9 records the same probing, continued without explanation, reading as a test. Same participant, same session, adjacent screens.
*Reading:* the mechanism is probably not the problem and its position in the flow is. That is testable in the lo-fi (T18) by moving one teaching moment before the first probe.

**X-5. Stated permission for lecture materials, against stated behaviour on recordings.**
Q-10 says 19 of 22 would let an app use their lecture slides and recordings. Q-5 says 11 of 22 do not watch recordings at all, and 7 of 22 attended no lectures in person in the fortnight.
*Reading:* permission to use a data source is not evidence that the source is rich for that student. A design that leans on recordings may be building on material half the sample ignores. Slides and timetable look safer than recordings.

**X-6. The literature blames the phone; our own respondents never mention it.**
LIT-9 is a meta-analysis over 8,679 students finding a moderate positive link between problematic smartphone use and procrastination, and LIT-7 and LIT-6 support the same picture. Q-11 is our own open-answer data: of the 8 people who described a bad study session, **none named the phone.** They named friends, a co-worker, a spilt drink, ordering food, having no goal, and simply not starting.
*Reading, 9 Nov:* two explanations fit. Either phones are not the driver for our sample, or the phone is invisible to people describing their own failures and is the channel through which friends and food arrive. We never asked, so Q12 could not have surfaced it.

**Resolved 14 Nov, largely in favour of LIT-6 to LIT-9.** We asked directly in section 5b of the interview guide, and **5 of 6 named the phone or social media without being led there**: INT-02-d, INT-03-b, INT-04-b, INT-05-d, INT-06-c. INT-04-b calls the phone "always right next to me" and "almost always" the thing that pulls them off track. INT-03-b turns a 50-minute break into 20 minutes of scrolling. The second explanation was right: Q12 did not surface phones because we never asked.

**INT-01-b stays as the counter-case, and it is not a disagreement about phones.** He keeps his laptop and phone away in lectures, which supports LIT-6. What he does differently is leave phone notifications uncleared as a deliberate standing reminder to study. A design that locks or clears notifications would take away the cue he relies on. One participant in six, and a specific thing for the lock design to handle.

*What this does not settle:* the literature and the interviews agree the phone is a distraction. Neither shows that removing it produces studying. **INT-06-h** says the opposite, and that is X-8.

**X-7. Fixed weekly study blocks, against students who want to choose each time.**
The study-block concept proposed for the 10 Nov sync asks the student to commit to fixed times each week, and LIT-12 says a routine takes a median of 66 days to become automatic. AE2-P8 is a participant rejecting fixed session lengths and taking the "choose each time" option as the only honest answer. AE-11 says study happens in set deep-work blocks **and** in spontaneous urgent bursts, so plans have to fit both.
*Reading:* the concept may be right about the mechanism and wrong about the rigidity. LIT-10 points the same way: students who chose their own tools and strictness were still using them months later. A block the student sets, moves and overrides is consistent with all three. A fixed timetable imposed by the app is consistent with none of them. This is a design constraint on the concept, not an argument against it, and it is listed as a caution in the sync brief.
*Added by KAYZ for group review, 9 Nov.*

**Update, 14 Nov: the interviews confirm the rigidity problem and leave the mechanism standing.** INT-03-c dropped Pomodoro because a fixed timer broke their flow mid question set. INT-05-h would declare study times only if they could be adjusted, because their schedule fluctuates. Neither rejected blocks; both rejected fixed ones. The reading above holds and is now evidenced by participants, not by one autoethnographer alone.

**X-8. Students want an app to make them start, and they resist being made to.**
**INT-05-a** asked for exactly our product: tell me when to study, because I know how and I have no desire to start. **INT-06-b** said what would help them start is "Absence of distraction", naming notifications, tidying and opening the curtains.
Then the same people refused the mechanism that delivers it. **INT-06-h** would not use a weekly locked block: if they are already focused the phone does not matter, and if they cannot focus then everything is a distraction. **INT-04-g** would keep a lock on for urgent work and switch it off for non-urgent work, which is precisely when INT-04-a says starting is hardest. **INT-04-d** adds that removing the phone would help but they would "probably find another way".
*Reading:* the demand is real and the proposed mechanism is not the thing they are asking for. INT-06-h is the sharpest version: a lock removes a distraction and does not create focus. Three readings are open, and the group should choose one and not average them. The lock is a setting inside a product about starting; or the lock is the wrong mechanism and the effort belongs on the first step a student takes (INT-04-e); or students underestimate how much a lock would help and a lo-fi test should check that, since every answer here is a prediction about behaviour and not a record of it.
*This is the central open question for T16 and T17.* **Unresolved.**

**X-9. Half our interview sample does not trust the engine our hi-fi is built on.**
**INT-01-g** does not trust LLMs as a base source of truth and wants every summary linked to the exact slide or moment. **INT-02-i** does not go to LLMs first, prefers human and forum sources, and calls himself old-fashioned.
**INT-03-f** uses AI twice in every session, a summary first and AI-written multiple-choice questions at the end. **INT-06-e** uses a notebook-style AI app as their main tool and has never stopped using it. INT-04 and INT-05 did not say.
*Reading:* two of six against, two of six relying on it daily, and the hi-fi keeps LearnHarness. The split is not about capability. INT-01-g's objection is about verification, and it has a cheap answer: link every AI explanation back to its source slide, which is change 6 in the synthesis. INT-02-i's objection is about marketing and would be answered by showing real use. Neither needs the engine removed, and both need the engine to show its working.
*Related:* AE2-11 asked whether a separate application is needed at all, and X-3 holds the other half of that argument.
*Added by KAYZ for group review, 14 Nov.* **Unresolved.**
