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

## INT-n-x: Interviews
**To come.** Interviews are booked and run w/c 9 Nov 2026 (T07). Findings land in `research/interviews/INT-0n.md` and are added here as each interview is written up. The affinity diagram rebuilds as v2 once the last one is done.

## LIT-n: Literature
Source: [`../define/behaviour-change.md`](../define/behaviour-change.md). All five verified against primary texts on 8 Nov 2026: author, year, venue and the specific claim used. Nothing was dropped as unverifiable.

| ID | Source | Finding used | Strength | Corroborated by | Contradicted by |
|---|---|---|---|---|---|
| **LIT-1** | Fogg (2009), *Persuasive '09*, DOI 10.1145/1541948.1541999 | A behaviour happens when motivation, ability and a prompt occur together; ability is the more reliable lever for a designer | Established framework | Q-1, Q-8, AE2-P15, AFF-A | |
| **LIT-2** | Michie, van Stralen & West (2011), *Implementation Science* 6:42, DOI 10.1186/1748-5908-6-42 | COM-B: behaviour needs capability, opportunity and motivation; nine intervention functions sit on the wheel | Established framework | Q-3, Q-8, Q-10, Q-11 | |
| **LIT-3** | Gollwitzer (1999), *American Psychologist* 54(7), 493-503, DOI 10.1037/0003-066X.54.7.493 | A goal intention names an endpoint; an implementation intention specifies when, where and how, as "whenever situation x arises, I will initiate response y" | Established framework | Q-11, AE2-P1, AE2-1, AFF-A | |
| **LIT-4** | Adamczyk & Bailey (2004), *CHI '04*, 271-278 | Interrupting at predicted best points produced less annoyance, frustration, time pressure and mental effort, and was rated more respectful of the primary task. **No main effect on time on task** | Single study, desktop laboratory, non-study tasks | Q-8, Q-9, AFF-F | |
| **LIT-5** | Mehrotra, Pejovic, Vermeulen, Hendley & Musolesi (2016), *CHI '16*, 1021-1032 | Response time and perceived disruption vary with notification presentation, alert type, sender-recipient relationship, and the ongoing task's type, completion level and complexity. Even useful content can disrupt | Single study, in the wild, 20 users | Q-9, LIT-4 | LIT-4 is desktop and laboratory; this is mobile and in the wild, and it finds disruption depends on task factors a timetable cannot sense |

**Still to come.** T09, the learning-science and neurodivergent-learners base, owned by Rahul. Due Fri 6 Nov on the current plan and now overdue; a new date is on the 10 Nov sync agenda.

**Numbering, proposed by KAYZ for group review.** T20 has taken LIT-1 to LIT-5, so **T09 should start at LIT-6**. If Rahul has already numbered from LIT-1, these five renumber instead, because his is the larger set.

---

## Convergences

Claims backed by three or more IDs from at least two different methods. These are the safest things the project can say, and they are what the deck should lead on.

**C-1. Starting is the problem, and it is a cost problem.**
Q-1, Q-2, Q-11, AFF-A, AE-11, AE2-P2, AE2-P14, AE2-P15, AE2-1, AE2-10.
Four methods agree: questionnaire, affinity clustering, and both autoethnographies. The strongest version is AE2-P15, where a correct answer was followed by quitting anyway, and AE2-10, where a tool that teaches well was judged to do nothing about starting. This is the design's central claim and the best-evidenced thing here.

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
