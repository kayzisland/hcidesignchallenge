# Literature: smartphones, distraction and starting to study

Status: v1, 9 Nov 2026. Owner: KAYZ. Supports the study-block concept proposed for the 10 Nov sync (`../meetings/2026-11-10-sync.md`). This file sits alongside T09 (Rahul's theory base, `literature.md`) and doesn't replace it. Rubric criterion 7 (domain understanding).

## Why we went to the literature
None of our 22 questionnaire respondents named the phone when they described a bad study session (Q12 named friends, food and not starting: Q-11). That doesn't mean phones aren't a factor. We never asked about them. The phone is also the channel through which friends and food arrive, and the obvious explanation for "couldn't get started" is "started scrolling instead". This review checks whether published evidence supports that hypothesis before we design around it. The interviews (T07) now ask about it directly.

Every source below was checked online on 9 Nov 2026 (authors, year, venue, finding).

## Sources

| ID | Source | What it found | What it means for us |
|---|---|---|---|
| **LIT-6** | Ward, Duke, Gneezy and Bos (2017). Brain drain: the mere presence of one's own smartphone reduces available cognitive capacity. *Journal of the Association for Consumer Research*, 2(2) | Nearly 800 participants. People whose phone was in another room outperformed those with it on the desk, even with the phone silent, face down or off. People who depended most on their phones were hit hardest | A phone does damage just by being there. Locking apps helps, but taking the phone out of reach helps more. The lock is the minimum intervention, not the ideal one |
| **LIT-7** | Rosen, Carrier and Cheever (2013). Facebook and texting made me do it: media-induced task-switching while studying. *Computers in Human Behavior*, 29(3) | 263 students observed every minute over 15-minute study sessions. They were on task about 65% of the time, and focus started to slip after about two minutes | Sessions break up fast, mostly towards technology. Matches our own data on attention drifting early (Q-4) |
| **LIT-8** | Lepp, Barkley and Karpinski (2014). The relationship between cell phone use, academic performance, anxiety, and satisfaction with life in college students. *Computers in Human Behavior*, 31 | 500+ students. Higher phone use was associated with lower cumulative GPA (taken from university records) and with higher anxiety | Phone use and grades are linked. It's correlational, so it doesn't show the phone causes lower grades |
| **LIT-9** | Hidalgo-Fuentes (2022). Problematic smartphone use and procrastination in the academic setting: a meta-analysis. *Electronic Journal of Research in Educational Psychology*, 20(57) | 18 studies, 8,679 students. Moderate positive relationship between problematic smartphone use and procrastination (Zr = 0.40) | The closest evidence for "students can't start because they're scrolling". It's correlational: it could run either way, and both could share a cause |
| **LIT-10** | Lyngs et al. (2024). "I finally felt I had the tools to control these urges": empowering students to achieve their device use goals with the Reduce Digital Distraction Workshop. *CHI 2024* | 280 students set their own device-use goals and chose their own self-control tools (blockers, trackers). At 1-3 months, 95% were still using at least one tool, and self-reported self-control rose substantially. Students picked very different tool combinations | Blocking works best when the student sets the goal and chooses the strictness. Supports student-chosen study blocks and adjustable lock levels. Argues against one fixed lock imposed on everyone |
| **LIT-11** | Lyngs et al. (2020). "I just want to hack myself to not get distracted": evaluating design interventions for self-control on Facebook. *CHI 2020* | 58 students over six weeks. Goal reminders and a removed newsfeed both kept them on task. Goal reminders were often called annoying, and removing the feed caused fear of missing out. The authors recommend flexible blocking that matches each person's definition of distraction | Interventions work but carry a cost. Our lock needs an override, and its reminders must stay inside the 1-2 a day budget (Q-9) |
| **LIT-12** | Lally, van Jaarsveld, Potts and Wardle (2010). How are habits formed: modelling habit formation in the real world. *European Journal of Social Psychology*, 40(6) | Median 66 days for a daily behaviour to become automatic (range 18 to 254). Missing one day didn't derail it | Regular weekly blocks can build a routine, but not inside one term for most students. Claim routine and a lower starting cost, not that the starting problem disappears |

## What this supports
1. **Phones are a credible cause of failed starts and broken sessions.** LIT-7 and LIT-9 tie phone use to task-switching and procrastination in students. LIT-6 shows the cost exists even when the phone is idle.
2. **Locking during a study block is a reasonable intervention, with two conditions.** The student chooses when and how strict (LIT-10, LIT-11), and there's always an override (LIT-11, Q-9).
3. **The routine claim must be modest** (LIT-12).

## What it doesn't support
- **Causation.** LIT-8 and LIT-9 are correlational. The deck should say "linked to", never "causes".
- **Phones as the main problem for our users.** That's still a hypothesis for our sample until the interviews test it.

## Limitations
- This is a targeted review aimed at one design question, not a systematic search. It may miss counter-evidence.
- LIT-7 and LIT-8 are from 2013-14. Phone use has grown since, which more likely strengthens the effect than weakens it, but that's an assumption.
- Evidence on app blocking specifically (as opposed to general self-control tools) is thinner. LIT-10 is the closest.
