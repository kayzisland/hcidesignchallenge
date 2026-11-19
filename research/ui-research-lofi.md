# UI research for the lo-fi (16 Nov action, KAYZ)

Status: v1, 18 Nov 2026. Owner: KAYZ. Feeds T17 (lo-fi) and T20 (notification design). Rubric criteria 6 and 8.

## Why this exists
On 16 Nov the group decided the phone gets students started and the laptop does the learning, and prioritised five features for the lo-fi:
- dynamic calendar blocking with a phone block;
- the Sunday checklist;
- the single-question notification;
- light onboarding;
- feature toggles in Settings.

Three of those depend on what a phone platform allows. This note checks those limits before Jishnu draws screens a real phone couldn't show, and says what each limit means for the lo-fi. Every platform claim was checked against the platform's own documentation on 18 Nov.

## Q1. Can a notification be a question the student answers without opening the app?

**Yes, on both platforms, with a cap on answer buttons.**
- **iOS:** "Actionable notifications let the user respond to a delivered notification without launching the corresponding app." The answer is handled in the background, and users can respond while the device is locked (Apple, *Declaring your actionable notification types*). Apple's page does not state a maximum number of buttons.
- **Android:** an expanded notification "can provide up to three" actions: suggested replies, emphasised (pill) buttons or standard text actions (Android Developers, *Notifications* design guide). A Reply action lets the user type a short answer, and the guide sends longer typing into the app.

**For the lo-fi:**
1. Draw the question with **three answer buttons**. Three works on both platforms; four would not fit on Android.
2. Keep the question under about 90 characters so it isn't truncated (T20, section 5).
3. After the tap, the notification shows a one-line result and offers the handover to the laptop (T20, R-8). Draw that second state too, because it's where the phone hands over.
4. Short typed answers are possible on the phone, through Reply, but they push against "the phone only starts". Keep typed answers on the laptop.

## Q2. Can our app block other apps on a student's phone?

**On iOS, only through Apple's Screen Time frameworks, and the student picks the apps.** A developer write-up of a working blocker describes the parts:
- `FamilyControls` "lets the user choose apps or app categories through Apple's system picker";
- `ManagedSettings` "lets the app apply shields to the selected apps/categories";
- `DeviceActivity` "lets the system wake an extension when a scheduled interval starts or ends".

The selected apps come back as opaque tokens, so the app never learns which apps they are.

**For the lo-fi and the hi-fi:**
- **The block is the student's choice by design.** The platform itself makes the student choose the blocked apps, which matches LIT-10 and LIT-11.
- **A real block can't be built in a web prototype.** It needs a native app with Apple's frameworks. The lo-fi fakes it Wizard of Oz style, with a teammate swapping the "blocked" screen. The hi-fi shows it as a simulated screen, and the deck says so.
- **Whether a block is in the lo-fi at all is still the group's decision** (`../meetings/lock-decision-brief.md`, X-8).

**Not checked:** the Android equivalent. It isn't needed for a simulated block. Check it only if the group commits to a real build.

## Q3. Two devices, one app: how does the handover look?

The 16 Nov sync used WhatsApp and WhatsApp Web as the model: one account, two screens. That pattern needs three moments in the lo-fi.

| Moment | What to draw | Evidence |
|---|---|---|
| **Pairing (once)** | Laptop shows a code; phone confirms. Part of light onboarding, after the first question has been answered | 10 Nov decision (value before onboarding), AE2-1 |
| **Handover** | Phone: "4 more on your laptop". Laptop: the session is already open at question 2, with question 1's answer shown | R-8, AFF-A, INT-04-e |
| **Laptop not to hand** | Phone offers "Done for now" and keeps the session for the next block. The student never sees it as overdue | R-6, INT-01-i |

**Prototype note:** the 16 Nov points to consider say the phone and laptop screens can open the same local server, so the hi-fi gets syncing for free.

## Q4. The Sunday checklist and calendar blocks

The interview evidence sets the shape. The platform question is only whether we write to the student's own calendar.

- Students plan in weeks and need to move blocks (INT-05-h). A checklist of suggested blocks that the student ticks, moves or removes fits that (T20, N-5).
- **Writing to the student's calendar** is a choice to make, not a given. Keeping blocks inside the app avoids a permissions step in onboarding (AE2-1). Writing them to Google or Apple Calendar makes them visible where students already look. **Proposed by KAYZ for group review:** in the lo-fi, keep blocks in the app, and draw a single "add to my calendar" toggle in Settings so testers can say whether they'd want it.

## Q5. Settings as the home for toggles

The 16 Nov sync put feature toggles in Settings, and decided an LLM doesn't choose them. That fits the anti-persona Dev (`../define/personas.md`): advanced choices exist but stay out of the start flow. For the lo-fi, draw Settings with the toggles the sync named:
- leaderboards, off by default (T20, R-6, proposal);
- the phone block, if the group keeps it;
- notifications per day (0, 1 or 2);
- add to my calendar.

Plus a plain list of the data used, with location marked never (Q-10).

## Heuristics to check the lo-fi against (Week 8)
The Week 8 page on Shneiderman's and Nielsen's heuristics belongs to T22, Lekan's heuristic checklist. Three of them bear directly on these screens:
- **visibility of system status:** the handover shows where the session went;
- **user control and freedom:** every block and toggle can be undone, and there is always an exit;
- **recognition rather than recall:** answers are tapped, not typed.

## Limitations
- Platform behaviour changes between OS versions. These checks are from current documentation and were not tested on devices.
- The iOS blocking summary comes from a developer's write-up, not Apple's own pages, and it doesn't say whether Apple must approve the app first. That matters only for a real build.
- None of this is user evidence. It sets what is possible, and T18 decides what students want.

## Sources
- Apple Developer. *Declaring your actionable notification types.* https://developer.apple.com/documentation/usernotifications/declaring-your-actionable-notification-types (checked 18 Nov 2026)
- Android Developers. *Notifications* (design guide). https://developer.android.com/design/ui/mobile/guides/home-screen/notifications (checked 18 Nov 2026)
- *Building an iOS app blocker with Screen Time APIs* (DEV Community). https://dev.to/mn_in_4951c0dbf0f61a57b50/building-an-ios-app-blocker-with-screen-time-apis-30dn (checked 18 Nov 2026)
- HCI Week 8, Canvas: "Design: more heuristics - Shneiderman, Neilsen".
