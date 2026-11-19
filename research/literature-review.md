# Literature review (T09)

Status: v1.2, 19 Nov 2026. Owner: KAYZ (16 Nov sync). Rubric criteria 4 (data to design) and 7 (domain understanding).

**Labels.** Each source has a label (supports, contradicts or complicates) against our own findings. KAYZ confirmed every label on 19 Nov.

Every finding ID is indexed in `findings-register.md`. LIT-1 to LIT-5 are in `../define/behaviour-change.md` and LIT-6 to LIT-12 are in `literature-phones.md`. This review adds LIT-13 to LIT-23.

## Why a literature review, and how
Our own research is small: 22 questionnaire responses, 6 interviews and 2 autoethnographies. It tells us what our participants said and did. It cannot tell us whether a mechanism works beyond them. The literature review tests our main design claims against larger studies before we build on them.

- **Method.** A targeted review, organised around six research questions agreed on 19 Nov. Each question comes from a live design decision.
- **Selection.** Meta-analyses and reviews first, then classic experiments, then HCI studies of comparable tools.
- **Verification.** Every source was checked online on 19 Nov (authors, year, venue, finding).
- **Not attempted.** A systematic search.

## The six research questions
| RQ | Question | The design decision it tests |
|---|---|---|
| RQ1 | Why do students fail to start studying, and what lowers the cost of starting? | The start-first focus (10 Nov), the tiniest first step (AFF-K) |
| RQ2 | Does a phone's presence or a blocker affect study, and do students keep using blockers? | The optional phone block (X-8) |
| RQ3 | Do short retrieval questions help learning? | The single-question notification (16 Nov), the review loop |
| RQ4 | Does where and when you study change whether you study? | Weekly study blocks, place as a commitment (AFF-J) |
| RQ5 | Do leaderboards and social comparison help or hurt? | Optional leaderboards (16 Nov), T20 R-6 |
| RQ6 | Which behaviour change models best explain our users? | T20 section 2.4 |

---

## RQ1. Starting
| ID | Source | What it found | Against our findings | Label |
|---|---|---|---|---|
| **LIT-13** | Steel (2007). The nature of procrastination: a meta-analytic and theoretical review of quintessential self-regulatory failure. *Psychological Bulletin*, 133(1), 65-94 | Meta-analysis of 691 correlations. The "strong and consistent predictors" of procrastination are task aversiveness, task delay, self-efficacy and impulsiveness | Task delay matches INT-04-a: urgency removed the starting problem. Task aversiveness matches INT-05-a: "no desire to do it". Impulsiveness matches the phone pull (AFF-M) | Supports |
| **LIT-14** | Sirois & Pychyl (2013). Procrastination and the priority of short-term mood regulation: consequences for future self. *Social and Personality Psychology Compass*, 7(2), 115-127 | Conceptual review: procrastination "has a great deal to do with short-term mood repair". People avoid an aversive task to feel better now, and the cost falls on the future self | Explains INT-03-a, where the "mental block" fills with social media, games and chores. The problem is how starting *feels*, not a lack of skill (Q-3) | Supports, and sharpens |
| LIT-3 | Gollwitzer (1999), in T20 | If-then plans hand control to a situational cue | Q-11: sessions failed with no goal set | Supports |

**What it means for the design.** The first step has to be *less aversive*, not just shorter. That favours a question the student can answer, which gives an early success, over a task to plan. And it favours a cue tied to a time, since task delay predicts procrastination and blocks bring the deadline closer.

## RQ2. Phones and blockers
| ID | Source | What it found | Against our findings | Label |
|---|---|---|---|---|
| LIT-6 to LIT-9 | `literature-phones.md` | A phone's mere presence reduces cognitive capacity. Students are on task about 65% of a 15-minute session. Problematic phone use is linked to procrastination | AFF-M: 5 of 6 interviewees named the phone, unprompted | Supports |
| LIT-10, LIT-11 | Lyngs et al. (2024, 2020) | Students who chose their own tools and goals kept using them (95% at 1 to 3 months). Blocking works, but must be flexible | X-8: the lock was rejected *as specified*, which was fixed and imposed | Supports an optional block. Contradicts a compulsory one |
| **LIT-15** | Ko et al. (2015). Lock n' LoL: mitigating smartphone disturbance in co-located social interactions. *CHI '15 Extended Abstracts*, 1561-1566 | A group phone-limiting app. 79.5% of 49 surveyed were "disturbed by smartphones while socializing". In a pilot (n = 20), groups said they "could limit smartphones together". No controlled outcome | INT-03-e and INT-06-c lost sessions to friends. A shared, chosen block is a social version of the same idea | Complicates: a promising direction, weak evidence |

**What it means for the design.** The literature backs a block the student chooses and can end, and does not back a fixed one. That matches what our interviewees accepted and rejected. INT-04-d ("would probably find another way") is a warning that blocking alone does not create study. It has to come with the first step.

## RQ3. Short retrieval questions
| ID | Source | What it found | Against our findings | Label |
|---|---|---|---|---|
| **LIT-16** | Roediger & Karpicke (2006). Test-enhanced learning: taking memory tests improves long-term retention. *Psychological Science*, 17(3), 249-255 | On delayed tests, "prior testing produced substantially greater retention than studying". At 5 minutes, restudying did better | Q-6: students mostly reread and ask chatbots. AE-8: retesting weak spots fixed most misses | Supports, with a caveat |
| **LIT-17** | Dunlosky et al. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest* (January 2013) | Of ten techniques, practice testing and distributed practice "received the highest overall utility rating". Rereading, highlighting and summarisation rated low | Q-6 again: what students use most is what this review rates least | Supports |

**What it means for the design.** A question on the lock screen is practice testing, and one a day is distributed practice: the two highest-rated techniques. **The caveat:** the benefit shows up later, not straight away (LIT-16), so students won't feel it at once. The app has to show progress over the week (AFF-H) or the method will feel like it isn't working.

## RQ4. Time and place
| ID | Source | What it found | Against our findings | Label |
|---|---|---|---|---|
| **LIT-18** | Wood & Neal (2007). A new look at habits and the habit-goal interface. *Psychological Review*, 114(4), 843-863 | Habits form from associations between a response and its context. Once formed, the context "triggers the associated response without a mediating goal" | AFF-J: place commits people (INT-03-d, INT-05-b, INT-06-d). AE-11: study happens in fixed blocks | Supports |
| LIT-12 | Lally et al. (2010) | A median of 66 days for a daily behaviour to become automatic | Our test window is weeks, not months | Complicates: claim routine, not habit |

**What it means for the design.** Weekly blocks at a stable time and place are how a context cue forms. **The tension:** INT-05-h wants blocks that can move, and moving a block weakens the cue. **Proposed by KAYZ for group review (19 Nov):** each week has a default anchor slot and place. Students can move a block when they need to, and a missed block carries no penalty.

## RQ5. Leaderboards and social comparison
| ID | Source | What it found | Against our findings | Label |
|---|---|---|---|---|
| **LIT-19** | Sailer & Homner (2020). The gamification of learning: a meta-analysis. *Educational Psychology Review*, 32, 77-112 | 40 experiments. Small positive effects: cognitive g = .49, motivational g = .36, behavioural g = .25. Combining competition with collaboration was "particularly effective" | The 16 Nov sync kept leaderboards as optional. INT-02-a felt social pressure | Complicates |
| **LIT-20** | Albuquerque et al. (2017). Does gender stereotype threat in gamified educational environments cause anxiety? *Computers & Education*, 115, 161-170 | Experimental study: a male-stereotyped gamified environment affected participants' anxiety. Cites earlier work in which a male-dominated leaderboard affected women's maths performance | No direct data of ours. R-6 already declines loss framing | Contradicts pure ranking |

**What it means for the design.** The evidence doesn't support a plain ranked leaderboard. It does support collaborative or team comparison, and it supports keeping comparison off by default and opt-in, as T20 R-6 proposes.

**Proposed by KAYZ for group review (19 Nov):** leaderboards are off by default. When a student switches them on, they compare study groups. There is no individual ranking.

## RQ6. The Week 8 models
| ID | Source | Used in T20 for |
|---|---|---|
| **LIT-21** | Locke & Latham (2002). Building a practically useful theory of goal setting and task motivation: a 35-year odyssey. *American Psychologist*, 57(9), 705-717 | Every session states one clear, achievable goal (R-4) |
| **LIT-22** | Ajzen (1991). The theory of planned behavior. *Organizational Behavior and Human Decision Processes*, 50(2), 179-211 | Perceived control is low at the start, so the first step must be small. Norm-based features are risky |
| **LIT-23** | Tversky & Kahneman (1979). Prospect theory: an analysis of decision under risk. *Econometrica*, 47(2), 263-292 | Losses loom larger than gains, so no streaks (R-6, INT-01-i) |
| LIT-1, LIT-2, LIT-3 | Fogg; Michie et al.; Gollwitzer (in T20) | The prompt, the COM-B diagnosis, if-then plans |

**Not yet sourced:** dual process theory, social cognitive theory, bounded rationality and the transtheoretical model are cited in T20 from the Week 8 slides only. Their primary sources still need checking before the deck relies on them.

---

## What the literature changes (proposals for the group)
1. **The first step must feel good, not just be short** (LIT-13, LIT-14). Lead with a question the student can answer.
2. **The block stays optional and student-set** (LIT-10, LIT-11, LIT-15). This is our second source for not making it compulsory, alongside X-8.
3. **The notification question is our strongest learning mechanism** (LIT-16, LIT-17), but its benefit is delayed, so progress over the week must be visible.
4. **Blocks need a stable anchor** (LIT-18) as well as the flexibility INT-05-h asked for: a default slot the student can move, with no penalty for a missed block.
5. **Leaderboards stay off by default, and compare study groups when switched on** (LIT-19, LIT-20).

## Limitations
- This is a targeted review with no systematic search, so it may miss counter-evidence.
- LIT-15 is a short pilot with no control group. LIT-20 is a hypothetical scenario study.
- Most of these studies are not of university students starting study on a phone. The link to our users is an inference, and T18 is where it gets tested.

## Sources checked 19 Nov 2026
- Steel 2007: University of Calgary repository record (prism.ucalgary.ca).
- Sirois & Pychyl 2013: White Rose eprints 91793.
- Ko et al. 2015: KAIST paper PDF (ic.kaist.ac.kr).
- Roediger & Karpicke 2006: PubMed 16507066.
- Dunlosky et al. 2013: APS press release for the report.
- Wood & Neal 2007: PubMed 17907866.
- Sailer & Homner 2020: Springer, doi 10.1007/s10648-019-09498-w.
- Albuquerque et al. 2017: Open University ORO 80025.
- Locke & Latham 2002: BibBase record.
- Ajzen 1991: EconPapers record.
- Tversky & Kahneman 1979: Econometric Society.
