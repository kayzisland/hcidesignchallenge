# Lo-fi test plan: Wed 25 Nov

Nov 24, 2026 · @Jishnu

## What the test is for

On Wednesday, 5 students try the clickable lo-fi so we can find what confuses them and choose between design alternatives before Jiven's Thursday build. This is task T18; the changes it causes are T19.

The lo-fi is a set of screens that behave like the app. Nothing in it is real: no notifications, no AI, no app blocking, and phone and laptop sit on one screen. So the test answers three questions:

1. **Do students understand it?** Where do they hesitate, get stuck or misread a screen?
2. **Which version do they prefer?** Each task has two versions that differ in one thing (A/B).
3. **Where do they want to keep learning?** One question after task 1 decides whether the phone/laptop split stays (the agreed rule, below).

It does **not** test whether LockedIn actually helps people study, whether app blocking works, or how good the AI teaching is. Those need the real app and Friday's focus group.

It matters for marks because the rubric penalises building the hi-fi before checking ideas with users (criterion 5), and asks for design changes tied to data (criterion 4). Every change from this test gets logged with the finding behind it.

## To settle in today's meeting

None of these are decided yet, and the test can't run well without them. Fill in the answers here.

| Question | Answer | Who decides |
| --- | --- | --- |
| Who are the 5 testers, plus 1 backup? |  | Everyone; T35 recruiting had no owner on 23 Nov |
| What time is each session, and where? |  | Lekan |
| Who facilitates and who takes notes in each slot? |  | Lekan |
| Who runs the pilot session tonight? |  |  |
| Who writes up the results on Wednesday evening, and by what time? |  | Lekan, Jishnu (T19) |
| If the rule sends us to O5, what is the smallest change Jiven can make by Thursday? |  | Jiven |

The last row matters because the timeline is tight: lo-fi test Wednesday, final build Thursday, focus group Friday. Agreeing the fallback now means an unexpected result can't wreck Thursday. A sensible minimum: after the first phone question, add a "keep going here" button next to "4 more on your laptop".

## Testers

We need 5 students who are not in our group and have not seen the lo-fi, plus 1 backup.

- **Who:** students from a mix of subjects, like the people we interviewed. Friends who already tried the shared link don't count: they've seen the screens, so they're an informal pilot, not test data.
- **How many:** 5. If one drops out the test still works with 4, and the rule becomes 3 of 4.
- **How long:** about 25 minutes each, including consent and reset. Five sessions take about 2 to 2.5 hours; leave 5 minutes between them.
- **IDs:** P01 to P05, in session order. Odd IDs see version A first and even IDs see B first, so the order of the versions doesn't skew the results. The lo-fi does this for you from the ID.
- **Names:** never written next to results. Keep the name-to-ID list separate, and delete it after the write-up.

## Roles on the day

Every session needs two people: one runs it, one watches and writes. One person can't run the panel and take good notes at once.

| Role | What they do | Who |
| --- | --- | --- |
| Facilitator | Reads the consent script and task scripts, runs the facilitator panel, switches versions, taps the tester's preference and the phone / laptop / depends answer, copies the log at the end | Lekan (T18 owner) |
| Note-taker | Sits slightly behind the tester. Writes down where they hesitate, what confuses them and what they say out loud, on the note sheet below | One of Jishnu, KAYZ, Rahul per slot |
| Device | One laptop runs everything: the phone and laptop screens are drawn side by side on the same page | Facilitator's laptop |

## Tonight's checklist

All of this should be done tonight, so the morning is only setup.

- [ ] Download `prototype/lofi/lockedin-lofi-test.html` from the repo onto the test laptop. Open it in Chrome from the file, so the test doesn't depend on the Wi-Fi or a sign-in. Offline it still works; only the fonts change.
- [ ] Check Developer mode opens: add `#dev` to the end of the address. Without it the page only shows User mode, which is what testers should see.
- [ ] Run one full pilot session with a teammate as the tester, start to finish, all three tasks and both versions. Time it, and check nothing breaks.
- [ ] Make one results doc for the day, with a section per participant (P01 to P05) for the pasted log and the notes.
- [ ] Print or share the note sheet (below), one per tester.
- [ ] Confirm every tester's time and room, and send them a reminder.
- [ ] Charger for the laptop.

## Consent script

Read this to every tester before anything else, in the same words each time. It follows the wording of our interview guide.

> Thanks for doing this. It takes about 20 minutes. You'll try a rough prototype of a study app our HCI group is designing. Nothing in it is real: no notifications, no AI, nothing leaves this laptop. We're testing the design, not you, so there are no wrong answers. If something confuses or annoys you, that's exactly what we want to find.
>
> We'll save your taps and take notes on what you say, under an ID like P01, never your name. Your name won't appear in anything we submit, and quotes will be anonymised. You can stop at any time without giving a reason. Are you happy to take part?

- Start only after a clear yes. Write "consent: yes" against their ID on the note sheet.
- Don't record audio or the screen unless you ask separately and they say yes to that too.
- Then add: "While you use it, please say what you're thinking out loud: what you expect, what you're looking for, anything that surprises you."

## One session, step by step

About 23 minutes. The facilitator panel on the right of the page shows each task's script, so the facilitator never works from memory.

1. **Set up (before they sit down, 1 min).** Developer mode on. Type the participant ID (P01, P02…) in the Tester box. The panel says which version to show first.
2. **Consent (2 min).** Read the consent script. Note "consent: yes".
3. **Task 1, after the lecture (7 min).**
    1. Press task 1 in the panel and read the "Read aloud" text word for word. Hand over the laptop.
    2. The notification arrives after a few seconds. If they've been waiting, press "Send the nudge now".
    3. At laptop question 3, say: "A friend messages you, you have to go." Once they leave, press "An hour later: reopen". Watch whether they find their place.
    4. When the screen says the task is finished, press "Run the other version" and let them go just as far as the part that's different.
    5. Tap their preferred version (A, B or Neither). Ask the two "Ask after" questions.
    6. **Tap their phone / laptop / depends answer** under "Where would they rather keep learning?". This is the answer the rule counts.
4. **Task 2, Thursday's block (6 min).** Same pattern: read aloud, hand over, watch, run the other version, tap the preference, ask after.
5. **Task 3, first time (5 min).** Same pattern. The last "ask after" question is optional: "If you wanted fewer notifications, where would you look?" Note whether they find Settings on the week screen.
6. **Wrap up (2 min).** Ask: "Anything else you noticed, or would change?" Thank them.
7. **Save and reset (1 min).** Press "Copy log" and paste it into that participant's section of the results doc. Then press "Reset for next tester" (it asks twice): it clears the taps and moves the ID on to the next number.

## Running a session online

In person is better, but a tester who can only join online can use User mode on their own laptop while Lekan watches over a call. The lo-fi was updated on 24 Nov so this works.

**What's different online:** the tester runs the lo-fi themselves in User mode, which walks them through the three tasks, both versions, their preference and the phone / laptop / depends question. Lekan doesn't use the facilitator panel; he watches, prompts and takes notes.

1. **Before the call:** send the tester the HTML file (`lockedin-lofi-test.html`) on WhatsApp or the Teams chat; email often blocks `.html` attachments. Ask them to use a laptop, not a phone.
2. **Start the call** (Teams or Zoom). Read the consent script, adding: "I won't record this call unless you say that's OK."
3. **They open the file in Chrome** and share that browser window only, so no notifications or other tabs show.
4. **Give them their ID** (P01 to P05) and ask them to type it in the box on the welcome screen **before starting**. It labels their results and sets which version they see first, the same as in person.
5. **Read each task's "Read aloud" text** as they start it, even though it's on their screen too, so every tester hears the same thing. In task 1, say "A friend messages you, you have to go" when they reach question 3 on the laptop.
6. **Prompt the think-aloud more than in person:** "What are you thinking?", "What are you looking for?" You can't see their face or hands, so hesitations are easy to miss.
7. **Ask the "ask after" questions out loud** after each task, including the optional Settings question in task 3. The lo-fi asks the phone / laptop / depends question on screen; Lekan notes their reason.
8. **At the end** they press "Copy my results" and paste the text into the call chat. If copying fails, the page shows the text to select and copy by hand. Then ask them to press "Start over" twice, so nothing stays in their browser.

**What the lo-fi now handles for you:**

- **Testers can't see the facilitator panel.** The mode switch and the developer link only appear when the page is opened with `#dev` at the end of the address. Facilitators in person still open it that way.
- **A reload or a dropped call doesn't lose the session.** Progress is saved in their browser and picks up where they were. The log marks it as restored.
- **The instructions match in-person sessions.** User mode's task text is the facilitator script, word for word.
- **Finishing alone is visible in the results.** A task that reached its end screen shows as "completed"; one where they pressed "I've finished" shows as "finished (self-reported)". Lekan still notes whether he helped.

**Still worth noting in the write-up:**

- Mark which sessions were online, so the findings can say whether the mode made a difference.
- Online, the tester chooses how far to go on the second version, so A/B comparisons may be a little uneven.

## The three tasks

Each task tests one moment from our storyboards, in two versions that differ in one thing. These are the same scripts the panel shows; they're here so the note-taker knows what to watch for.

| Task | Version A | Version B | Why we're comparing |
| --- | --- | --- | --- |
| 1. After the lecture | Answer the question on the lock screen | Tap the notification to open the question | Our research (R-1, N-1) says answering on the lock screen makes starting easiest; Jiven's spec (V-11) opens the app |
| 2. Thursday's block | The block asks "where are you?" first | It doesn't ask | Place helps people commit (R-9), but an extra question could feel pushy (O-4) |
| 3. First time | One question first, then a 3-tap setup | Connect ChatGPT first | Value before setup (10 Nov decision) vs sign-in first (V-3) |

### Task 1: after the lecture

**Read aloud:** "It's Tuesday, 13:05. Your HCI lecture just finished and you're free until 3. Your phone is in your hand. Do whatever feels natural."

Watch for:

- Do they answer straight away, or put it off?
- Do they understand "4 more on your laptop"?
- On the laptop: do they use the confidence buttons, the reasoning box, Hint or Show me first?
- After the friend interruption and "An hour later: reopen": do they find their place?

Ask after:

- "How did that notification feel?"
- "After the first question on your phone, where would you rather keep learning: on your phone, on your laptop, or does it depend where you are?" **Tap the answer in the panel.**

### Task 2: Thursday's block

**Read aloud:** "It's Thursday, 14:00. On Sunday you planned a study block for now. Start it. Then, during the block, try to open Instagram."

Watch for:

- Version A: how do they react to "where are you?" Do they move?
- In bed, at a café or on the move: do they study now or later? Do they take the suggestion, stay put, or reschedule?
- On the move: do they stop after one question or keep going?
- Which focus level do they pick (Off, Gentle, Firm), and why?
- At the Instagram shield: helpful, or annoying?

Ask after:

- "Would you leave focus on in a real block?"
- "Was anything pushy?"

### Task 3: first time

**Read aloud:** "A friend told you about LockedIn. You've just opened it for the first time. Get to the point where you're actually studying, then check your week."

Watch for:

- Time to the first question (it's in the log).
- Any hesitation at the ChatGPT step (version B).
- Do they read the setup questions or rush them?

Ask after:

- "Was that quick enough?"
- "Would you sign in with ChatGPT for this?"
- Optional: "If you wanted fewer notifications, where would you look?" Note whether they find Settings.

## The deciding question and the rule

The phone/laptop split stays only if at least 3 of 5 testers pick the laptop. Jishnu and KAYZ agreed this on 24 Nov, before testing, in `ideate/qoc-device-split.md`.

**The question** (after task 1, same words every time): "After the first question on your phone, where would you rather keep learning: on your phone, on your laptop, or does it depend where you are?"

| Result | What happens at T19 |
| --- | --- |
| 3 or more of 5 say laptop (3 of 4 if one drops out) | Keep the split: the phone starts, the laptop teaches |
| Anything else: most say phone, most say depends, or no laptop majority | Switch to O5: the phone still starts, and the student chooses where to carry on |

- **Why the split has to win a majority:** it's our own assumption (R-8 says no one was asked), so it has to prove itself. A mixed answer is exactly the case O5 is for (LIT-10, LIT-11: let the student choose).
- **What doesn't count:** whether they tapped "4 more on your laptop" is recorded, but it isn't part of the rule, because "Done for now" can just mean they were finished.
- **Don't lead them.** Read the question as written, with all three answers, in a neutral tone. Don't explain our plan before they answer. Ask "why?" afterwards and note it.

## What we record

Five measures, agreed now so everyone records the same thing. SUS and the before-and-after recall quiz are left for Friday's focus group.

| Measure | How it's captured | Who |
| --- | --- | --- |
| Task success: finished without help, finished with help, or stuck | Note sheet; any help the facilitator gave is written down | Note-taker |
| Time on task, and time to the first question in task 3 | Automatic: every tap in the log has a timestamp | Lo-fi log |
| Preferred version per task (A, B or Neither) | Tapped in the panel after both versions | Facilitator |
| Phone / laptop / depends | Tapped in the panel after task 1; logged as `learn_where` | Facilitator |
| What they say and do: hesitations, confusion, quotes | Think-aloud, written on the note sheet | Note-taker |

The log also records every screen, every choice (place, focus level, now or later), whether they moved to the laptop, and any settings they changed. Nothing is sent anywhere: it stays on the page until the facilitator copies it.

## Facilitator rules

The aim is that every tester gets the same session, and that we see what they would do without us.

- **Read the scripts word for word.** Same consent, same scenario, same questions, for all five.
- **Don't help.** If they ask "what do I do?", say "What would you expect to do?" or "What are you looking for?"
- **Only step in when they're completely stuck** (about a minute with no progress). Give the smallest hint, and tell the note-taker so it's written down as "finished with help".
- **Don't explain or defend the design.** No "it's meant to…". If they criticise it, say "That's really useful" and move on.
- **Keep them talking.** If they go quiet: "What are you thinking?"
- **Don't lead the deciding question.** Read all three answers, in a neutral tone.
- **Copy the log, then reset, between every tester,** so taps don't mix.

## Note sheet

One copy per tester. Write what you see and hear, not what you think it means: "stopped for 10 s at the focus buttons", not "found focus confusing".

**Participant:** P0\_\_ · **Consent:** yes / no · **Version shown first:** A / B

|  | Task 1: after the lecture | Task 2: Thursday's block | Task 3: first time |
| --- | --- | --- | --- |
| Finished? (alone / with help / stuck, and where) |  |  |  |
| Hesitations or confusion (screen + what happened) |  |  |  |
| Quotes worth keeping |  |  |  |
| Preferred version, and why |  |  |  |
| Answers to "ask after" questions |  |  |  |

**Phone / laptop / depends:** \_\_\_\_\_\_ · **Why:** \_\_\_\_\_\_

**Found Settings when asked (task 3)?** yes / no / not asked

**Anything else they mentioned:**

## Wednesday evening: from results to changes

The write-up has to reach Jiven on Wednesday evening, because Thursday is the final build. This is T19.

1. **Collect.** All 5 logs and note sheets in the results doc, one section per participant.
2. **Apply the rule.** Count the phone / laptop / depends answers. Write the count and the outcome (split stays, or switch to O5) at the top of the results.
3. **Tally the A/B preferences** per task. With 5 people, report counts ("4 of 5 preferred A"), not percentages.
4. **Write the findings** in `test/lofi-results.md`, one row per problem or pattern, each with an ID:

| ID | What we saw | Testers | How bad | Proposed change |
| --- | --- | --- | --- | --- |
| LF-1 | e.g. 3 testers didn't notice "4 more on your laptop" | P01, P03, P04 | Blocks the task / slows them / cosmetic | e.g. make it the main button |

5. **Decide the changes together.** Not every finding needs one: a problem one person hit might be them, not the design. Write down why each finding was acted on or not.
6. **Log each change** in `design-log.md` with the LF finding behind it (date, decision, evidence, alternatives, who decided). This is what the rubric looks for: design changes tied to data.
7. **Hand Jiven the list** of changes that affect the hi-fi, in priority order, so Thursday's build includes them.
8. **Update the lo-fi change log** if the lo-fi itself changes.

## Limitations to declare

The deck should state these plainly; markers reward honest criticism (criterion 8).

- **5 testers find problems; they don't prove anything.** Results are reported as counts, and the rule is a decision aid, not a statistical test.
- **Nothing is real.** Notifications, blocking, AI and phone-to-laptop sync are simulated, so the test shows what students understand and choose, not whether it works.
- **Phone and laptop are on one screen,** so the handover isn't experienced across two devices.
- **The questions are sample content** about Lecture 7, written for the test, not testers' own course material.
- **Testers are students we could reach,** likely friends of friends, who may be kinder than strangers.
- **We designed it and we're running it,** so the facilitator rules and scripts are there to limit our influence.

## Friday's hi-fi test: personal data checklist

The hi-fi handles real data, unlike the lo-fi, so Friday's focus group needs these in place first. The biggest risk is that the app requires a ChatGPT sign-in before it can be used (Jiven's decision V-16).

| Risk | What to do | Who |
| --- | --- | --- |
| Testers sign in with their own ChatGPT account: sign-in details saved on the laptop, everything typed goes through their account and allowance | One team ChatGPT account, signed in by the facilitator before each session (Jiven's O-6). Testers never type their own details. Ask instead: "Would you sign in with ChatGPT for this?" | Jiven |
| A real timetable shows a tester's name, course and where they are each day | Use the sample timetable built into the app (B-4). Don't connect testers' own calendars | Jiven |
| "Add your slides" sends uploaded files to the AI | Testers upload the demo slides provided. If anyone uses their own, ordinary course slides only, deleted afterwards | Facilitator |
| Testers type personal things in free-text boxes; dictation sends their voice to an outside service | Turn dictation off for the test. Tell testers at the start not to type anything personal | Jiven, facilitator |
| Stored data | One data folder per participant on the facilitator laptop (`runs/P01` and so on), participant IDs only, never committed, deleted after analysis (Jiven's SECURITY.md) | Jiven |
| The app has no login, so anyone on the same network can see its data | Never run it on eduroam or public Wi-Fi. Phones connect through a private hotspot | Jiven |
| Names and contact details from recruiting | One separate list, never next to results, deleted after Friday | Whoever recruits (T35) |
| Questionnaires (SUS, recall quiz) | Collected under participant IDs. No form that collects email addresses: our first questionnaire promised anonymity and then took emails | Lekan |
| Recording a group | Audio, video and photos each need their own consent. Say at the start that what others say stays in the room | Facilitator |
| Testers' own laptops | Testers use our laptops; nobody installs the app on their own device | Jiven |

- [ ] Check whether the module needs ethics sign-off or a consent form for testing with students (Canvas, or ask Russell).
