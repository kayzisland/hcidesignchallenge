# SpokeSafe – A Proactive Bike Theft Prevention App for Student Cyclists

## Project Summary

**SpokeSafe** is a proactive smartphone application that helps student cyclists protect their bikes, and themselves, around campus and student areas such as Selly Oak.

Bike theft is one of the most common crimes students experience, yet most prevention advice arrives too late: after the bike has gone. Students lock up wherever is convenient, rarely know which racks are targeted, and only find out about thefts nearby through word of mouth or group chats.

SpokeSafe steps in at the moment it matters most: **when a student parks**. It combines phone activity sensing, an optional Bluetooth motion tag on the bike, police crime data and moderated student reports. It warns riders before they lock up in a theft hotspot, suggests better parking nearby, and alerts them if their bike moves while they're away. It also supports riders who cycle after dark.

**The goal is to prevent bike theft before it happens, rather than helping students deal with it afterwards.**

---

## 1. Problem Definition

Student cyclists face a range of theft and safety concerns, including:

- Leaving bikes at public racks on campus, outside shops and outside student houses.
- Not knowing which locations are targeted by thieves.
- Using cheap or poorly fitted locks, often locking only the wheel.
- Leaving bikes outside overnight, or over the holidays.
- Not registering their bike or recording its frame number, which makes recovery unlikely.
- Riding home late at night, sometimes alone and on poorly lit routes.
- For high-level riders, owning bikes worth thousands of pounds and training in the dark during autumn and winter.

Crime information exists, but it is not where students need it. Police data is published online as historical maps. Theft warnings spread informally through group chats and are quickly lost. Nothing tells a student, at the rack, that this is a bad place to lock up.

### Local Evidence: Selly Oak

Selly Oak has a large student population and a reputation for theft and robbery.

- In June 2026, CrimeRadar's summary of police data for the Selly Oak area recorded **518 crimes**, including **11 bicycle thefts**, **7 thefts from the person** and **5 robberies**. This was roughly double the total for June 2025 (257). ([CrimeRadar](https://crimeradar.co.uk/crime/west-midlands/selly-oak/2026-06/))
- The same source gives a resolution rate of about **4.8%** over the previous 12 months. Once a bike is stolen, it is very unlikely to be recovered, so prevention matters more than reaction.
- **Data gap:** police open data separates "bicycle theft" (a bike stolen while unattended) from "robbery" (theft by force or threat), but robberies are not broken down by what was taken. Bike robberies therefore cannot be isolated from public data. Our questionnaire (Q7–Q9) and student reports help fill this gap.

These figures should be treated as indicative. The "Selly Oak" area used by the aggregator may be wider than the student streets, and police locations are approximate.

### Problem Statement

> How might we use smartphone sensing and external crime data to help student cyclists in Selly Oak prevent bike theft at the moment they park, and respond quickly if their bike is tampered with?

---

## 2. Proposed Solution

SpokeSafe is a location-aware bike security companion that recognises when a student has parked and offers timely, practical help.

The application would allow students to:

1. Detect automatically when a ride ends and the bike is parked.
2. Receive a warning when parking somewhere with a history of bike theft.
3. See nearby alternative cycle parking.
4. Get an alert if their parked bike is moved while they are away (with an optional Bluetooth tag).
5. Report thefts, attempted thefts and suspicious activity to warn other students.
6. Register their bike and store its frame number and photos for recovery.
7. Get reminders about lights and ride check-ins when riding after dark.
8. Follow step-by-step guidance on reporting a theft to the police.

Rather than showing a crime map and hoping students check it, SpokeSafe brings the relevant information to them at the rack.

---

## 3. Key Features

### 3.1 Smart Parking Nudge

SpokeSafe detects when a ride has ended and checks the parking location against theft data.

**Features:**
- Detect the end of a ride using phone activity recognition (cycling → walking or still).
- Ignore safe locations the student has saved, such as home or a locked bike store.
- Check the location against police.uk bicycle theft records and moderated student reports.
- Suggest nearby official cycle parking from OpenStreetMap.
- Give lock-up tips suited to the bike's value (e.g. lock the frame, not just the wheel).
- Send at most one nudge per parking event.

**Example:**

> **SpokeSafe – Parking Check**
>
> Bikes have been reported stolen near this spot recently. There's a covered cycle rack 150 m away on Bristol Road.
>
> Show Me | I'm Staying Here

**Benefit:** Turns crime data into a practical choice at the exact moment the student can act on it.

### 3.2 Bike Movement Alerts

An optional low-cost Bluetooth motion tag attached to the bike alerts the owner if the bike is moved while they are away.

**Features:**
- Arm automatically when the owner walks away from the parked bike.
- Detect sustained movement, not just a knock from a passer-by.
- Send an urgent alert, sounding even if the phone is on silent (if the user allows it).
- Show the bike's last known location.
- Give one-tap options: go to bike, report to police, notify friends nearby.
- Disarm automatically when the owner returns.

**Example:**

> **SpokeSafe – Bike Moved**
>
> Your bike outside the Selly Oak library has been moving for 30 seconds.
>
> View Location | Report Theft | It's Me

**Benefit:** Gives students a chance to respond while a theft is in progress, and evidence if it is not stopped.

SpokeSafe would advise students **never to confront a thief**, and to contact the police instead.

### 3.3 Student Theft Reports

Students can report thefts, attempted thefts and suspicious activity, which warns other riders nearby.

**Features:**
- Submit a location-tagged report in under 30 seconds.
- Choose a category: bike stolen, attempted theft, cut lock found, suspicious activity.
- Add an optional photo of the scene (not of people).
- Reports are moderated before being shown as confirmed.
- Alerts are sent to students with bikes parked nearby.
- Reports expire automatically after a set period.

**Example:**

> **SpokeSafe – Nearby Report**
>
> A student reported a cut lock at the Aston Webb racks 20 minutes ago. Your bike is parked 100 m away.
>
> Check My Bike | Dismiss

**Benefit:** Fills the gaps in police data, which is published 1–2 months late and uses approximate locations.

The platform would not allow users to identify, describe or accuse individuals.

### 3.4 Bike Passport

A secure record of the student's bike, ready if it is ever stolen.

**Features:**
- Store make, model, colour and frame number.
- Store photos of the bike and its distinguishing features.
- Prompt the student to register the bike with BikeRegister, the UK's national bike database.
- Record the lock type, to tailor parking advice.
- Generate a summary for a police report or insurance claim in one tap.

**Benefit:** Makes recovery more likely and reporting easier. Many students don't know their frame number until it's too late.

### 3.5 Night Riding Support

Support for students who ride after dark, from commuters to national-level riders training through the winter.

**Features:**
- Remind riders to take lights when a ride is likely to finish after sunset.
- Offer optional live location sharing with a chosen friend or teammate during a ride.
- Check in if the rider stops unexpectedly for a long time on a late ride.
- Warn about ice or poor weather before a ride.

**Example:**

> **SpokeSafe – Lights Check**
>
> Sunset is at 16:42. Your ride home from training usually finishes at 17:15. Have you got your lights?
>
> Got Them | Remind Me Later

**Benefit:** Extends SpokeSafe from protecting the bike to supporting the rider.

### 3.6 Community Impact and Club Challenges

SpokeSafe shows students how their actions help others.

**Features:**
- Show how many riders a student's reports have warned.
- Track bikes "kept safe" across the community.
- Optional cycling club challenges, such as the most registered bikes or reports confirmed.
- Celebrate milestones without punishing missed days.

**Example:**

> **SpokeSafe – Your Impact**
>
> Your 3 reports this month warned 42 riders about risky racks. Thank you!

**Benefit:** Gives students a reason to report, which keeps the shared data current.

### 3.7 Theft Response Guide

If the worst happens, SpokeSafe walks the student through what to do next.

**Features:**
- Step-by-step guidance on reporting to West Midlands Police online or by phone on 101.
- Pre-filled bike details from the Bike Passport.
- Mark the bike as stolen on BikeRegister.
- Links to university security and student support.
- An option to warn other students with an automatic report.

**Benefit:** Makes reporting quick and easy, which also improves police data for everyone.

---

## 4. Sensing and External Data Integration

To meet the requirements of the *Sensing for Benefit* design challenge, SpokeSafe combines smartphone sensors, an optional IoT device and external data sources.

| Data Source | Purpose |
|---|---|
| Phone activity recognition | Detect when a ride starts and ends |
| Smartphone GPS | Locate the parked bike and nearby parking |
| Geofencing | Recognise saved safe locations, such as home |
| Bluetooth motion tag (optional) | Detect the bike being moved while the owner is away |
| Bluetooth proximity | Arm the alert when the owner walks away, disarm when they return |
| Phone clock and calendar | Time-sensitive reminders, such as night rides and end of term |
| Police.uk API | Historical bicycle theft and robbery records |
| OpenStreetMap | Locations of official cycle parking |
| Sunrise and sunset data | Lights reminders for rides after dark |
| Weather API | Ice and weather warnings before rides |
| Student reports | Recent, precise theft and suspicious activity reports |
| Smartwatch (optional) | Discreet haptic alerts while locking up or riding |
| Trusted contacts | Optional ride sharing and check-ins |
| User preferences | Personalise alerts, safe locations and frequency |

### Potential External APIs

**Police.uk API**

Website: https://data.police.uk/docs/

Provides street-level crime data for England, Wales and Northern Ireland, with a dedicated `bicycle-theft` category.

Example request (bicycle thefts within a mile of Selly Oak):

```
https://data.police.uk/api/crimes-street/bicycle-theft?lat=52.4378&lng=-1.9355
```

Potential uses:
- Identifying theft hotspots near a parking location.
- Building the parking risk check.
- Showing historical trends for transparency.

Limitations: locations are approximate, data is published one to two months late, and robbery is not broken down by item.

**OpenStreetMap (via the Overpass API)**

Website: https://wiki.openstreetmap.org/wiki/Overpass_API

Potential uses:
- Finding official cycle parking (`amenity=bicycle_parking`), including whether it is covered.
- Checking whether streets are tagged as lit.

**Sunrise-Sunset API**

Website: https://sunrise-sunset.org/api

Potential uses:
- Triggering lights reminders for rides that finish after dark.

**Open-Meteo Weather API**

Website: https://open-meteo.com/

Potential uses:
- Ice, rain and wind warnings before a ride.

**BikeRegister**

Website: https://www.bikeregister.com/

Potential uses:
- Linking students to registration and marking.
- Marking a bike as stolen.

Integration would depend on the access BikeRegister offers; for the prototype, SpokeSafe would link out to its website.

**Strava API (optional)**

Website: https://developers.strava.com/

Potential uses:
- Detecting planned training rides for national-level and club riders.
- Estimating when a ride will finish, for lights reminders.

**Bluetooth tags**

Apple AirTags cannot be read by third-party apps, so SpokeSafe would use a generic Bluetooth Low Energy tag with a motion sensor. For the prototype, a second phone's accelerometer could simulate the tag.

---

## 5. Proactive Behaviour

A key requirement of the project is that SpokeSafe acts on its own initiative, not only when the student opens the app.

### Scenario 1: Parking in a Theft Hotspot

**Trigger:** Activity recognition detects a ride ending at a location that isn't a saved safe location.

**External Data:** Police.uk bicycle theft records, student reports and OpenStreetMap cycle parking.

**Intervention:**

> Bikes have been reported stolen near this spot recently. There's a covered rack 150 m away. Want directions?

**Action:** Get directions to the alternative rack, or stay and receive lock-up tips.

### Scenario 2: Bike Moved While the Owner Is Away

**Trigger:** The Bluetooth tag detects sustained movement while the owner is out of range.

**Input Data:** Tag motion sensor and Bluetooth proximity.

**Intervention:**

> Your bike outside the library has been moving for 30 seconds. Is this you?

**Action:** Confirm it's them, view location, report a theft or alert friends nearby. The app advises against confronting anyone.

### Scenario 3: A Theft Reported Near Your Bike

**Trigger:** A moderated student report is filed within 200 m of where the student's bike is parked.

**External Data:** Student reports.

**Intervention:**

> A cut lock was reported near your bike 20 minutes ago. Worth checking on it?

**Action:** Check on the bike, or dismiss.

### Scenario 4: Bike Left Out Overnight

**Trigger:** The student arrives home in the evening, but their bike is still parked at a public rack.

**Input Data:** GPS, geofence for home, and saved parking location.

**Intervention:**

> Your bike is still at the Selly Oak station racks. Bikes left out overnight are at higher risk. Would you like a reminder to collect it tomorrow morning?

**Action:** Set a reminder, or mark the location as safe.

### Scenario 5: Riding Home After Dark

**Trigger:** A planned ride, or the student's usual ride home, is likely to finish after sunset.

**External Data:** Sunrise-sunset data, weather data, and optionally Strava or calendar.

**Intervention:**

> Sunset is at 16:42 and it's going to be icy tonight. Got your lights? Want to share your ride with a teammate?

**Action:** Confirm lights, start ride sharing, or dismiss.

### Scenario 6: End of Term

**Trigger:** The calendar shows the end of term, and the bike is normally kept outside.

**Input Data:** Calendar and saved bike storage location.

**Intervention:**

> Term ends Friday. If you're going home, is your bike somewhere secure for 3 weeks? Here are some storage options.

**Action:** View storage options, or dismiss.

### Scenario 7: Unregistered Bike

**Trigger:** One week after setup, the student still hasn't added a frame number.

**Input Data:** Bike Passport record.

**Intervention:**

> Only a small share of stolen bikes are returned, and a recorded frame number makes it much more likely. It takes 2 minutes to add yours.

**Action:** Add frame number and photos, or remind later.

All interventions would be optional and customisable, with a daily limit to avoid notification fatigue. The urgent "bike moved" alert is the only one that would break through silent mode, and only with the user's permission.

---

## 6. Target Users

### Primary Audience

University students who cycle around campus and student areas such as Selly Oak and Bournbrook.

This may include:

- Students who cycle to lectures and leave bikes at public racks.
- Students living in shared houses without secure bike storage.
- First-year students who are new to the area and its theft patterns.
- Students who ride home late from the library, work or nights out.
- Students on a budget, for whom losing a bike means losing their transport.

### Expert Users

**National-level and club student cyclists.** They have high-value bikes, train after dark in autumn and winter, and carry their bikes to café stops and events. They are likely to reject anything that distracts them mid-ride. Our contacts in this group can act as expert users and co-designers, revealing edge cases that make the design credible.

### Secondary Audience

The application could also benefit:

- University security teams, who could gain insight into theft patterns on campus.
- Cycling clubs and their captains.
- Housemates and trusted contacts.
- Student unions and accommodation providers.
- Local police, through more reliable reporting.

The design should account for different bike values, experience levels, and willingness to share location data.

---

## 7. User-Centred Design Approach

The project will follow the user-centred design lifecycle:

**Empathise → Define → Ideate → Prototype → Test**

### 7.1 Empathise

Investigate students' experiences of bike theft, their parking habits and their attitudes to proactive alerts.

**Methods:**
- Questionnaire v1 (Q7–Q9 cover bike theft and storage; Q12–Q14 cover proactive alerts).
- Semi-structured interviews with everyday student cyclists and national-level riders.
- Observation of campus and Selly Oak bike racks, with consent where people are involved: count lock types, how bikes are locked, and racks that are full or empty.
- Competitor analysis: AirTag and Find My, Strava Beacon, bike alarm locks and BikeRegister.
- Analysis of police.uk bicycle theft data for the area.
- Empathy mapping and critical incident stories from students whose bikes were stolen.

Potential research topics:
- How common bike theft is among students, and where it happens.
- Where students park, and why there.
- What locks students use, and how they use them.
- What students did after a theft.
- Whether students would accept a nudge at the moment they park.
- Whether students would buy or fit a Bluetooth tag.

**Goal:** Understand how students actually park and lose bikes before designing a solution.

### 7.2 Define

Analyse research findings to identify the most important problems.

Potential focus areas:
- Students not knowing which locations are targeted.
- Poor locking habits.
- Bikes left outside overnight or over holidays.
- No way of knowing a theft is in progress.
- Low reporting and recovery rates.
- Safety concerns for riders after dark.

**Goal:** Develop a focused, evidence-based problem statement and clear user requirements.

### 7.3 Ideate

Explore several approaches before committing to one.

Possible concepts include:

**ParkSmart**
- Focuses on the parking moment: hotspot warnings and better rack suggestions.

**BikeWatch**
- Focuses on the Bluetooth tag: movement alerts and theft response.

**RideHome**
- Focuses on night riding: lights reminders, ride sharing and check-ins.

**SpokeSafe**
- Combines the strongest features into one proactive bike security companion.

Our QOC analysis has already compared these options. It chose:
- The parking moment, plus a movement alert, as the main intervention points.
- Police.uk data plus student reports as the risk data.
- A Bluetooth tag, with phone-only detection as a free fallback.
- A smartwatch tap where available, otherwise a phone notification.
- Community impact feedback as the main way of keeping users engaged.

**Goal:** Compare alternatives and justify which features go into the prototype.

### 7.4 Prototype

Create and refine interactive prototypes.

Potential tools:
- Figma.
- React Native.
- Expo.
- Smartphone and smartwatch simulators.
- AI-assisted development tools.

Prototype screens could include:
- Onboarding and Bike Passport setup.
- Parking check notification.
- Alternative parking map.
- Bike moved alert.
- Report a theft.
- Theft response guide.
- Night ride reminder.
- Impact and club challenge screen.
- Notification and privacy settings.

**Goal:** Demonstrate how SpokeSafe senses situations and intervenes.

### 7.5 Test

Evaluate the prototype with representative student cyclists.

Wizard of Oz testing could be used for proactive notifications: a team member triggers alerts manually while a participant parks a bike, to test timing and wording before building real detection.

Potential evaluation criteria:
- Whether participants notice and understand the parking nudge.
- Whether they would act on it, such as moving to another rack.
- Speed of responding to a "bike moved" alert.
- Ease of reporting a theft.
- Trust in police data versus student reports.
- Perceived privacy and control.
- Notification fatigue.
- Reassurance versus unnecessary anxiety.
- Overall user satisfaction.

**Goal:** Use evidence from testing to improve the design.

---

## 8. Key Research Questions

1. How many students have had a bike stolen, and where?
2. Where do students currently park, and why there?
3. What locks do students use, and how do they lock their bikes?
4. Do students know which locations are targeted by thieves?
5. Would students act on a warning at the moment they park?
6. Would students fit a Bluetooth tag, and how much would they pay for one?
7. How comfortable are students with an app detecting when they stop cycling?
8. Would students report thefts and suspicious activity to warn others?
9. Do students trust police data more than reports from other students?
10. How many notifications a day would students accept?
11. What do national-level riders need that everyday commuters don't?
12. Does SpokeSafe change where and how students lock their bikes?

---

## 9. Expected Benefits

SpokeSafe aims to:

- Reduce bike theft among student cyclists.
- Help students make better parking choices at the moment they park.
- Improve locking habits.
- Give students a chance to respond to a theft in progress.
- Increase bike registration, making recovery more likely.
- Make theft reporting quicker, improving police data.
- Build a community of riders looking out for each other.
- Support riders who cycle after dark.

The effectiveness of these features would need to be evaluated through user testing rather than assumed.

---

## 10. Potential Challenges

### 10.1 Historical and Approximate Police Data

Police.uk data is published one to two months late, and locations are snapped to approximate points.

**Possible approach:** Combine police data with recent student reports, and label which source each warning comes from.

### 10.2 Missing Bike Robbery Data

Robberies are not broken down by item, so bikes taken by force cannot be separated from public data.

**Possible approach:** Use questionnaire results and student reports to estimate this. A Freedom of Information request to West Midlands Police could give more detail.

### 10.3 Unreliable Ride Detection

Phone activity recognition may misjudge when a ride has ended, for example when stopping at traffic lights.

**Possible approach:** Wait for a short period of walking before nudging, let students correct the app, and test detection accuracy.

### 10.4 False Alarms

A bike knocked at a busy rack could trigger a movement alert. One false alarm could make students ignore future alerts.

**Possible approach:** Only alert on sustained movement, include an "It's me" option, and tune sensitivity during testing.

### 10.5 Hardware Cost

Not every student will buy a Bluetooth tag.

**Possible approach:** Make the parking nudge, reports and Bike Passport work without a tag. Explore discounts through the university or cycling clubs.

### 10.6 Privacy and Location Tracking

Students may be uncomfortable with an app detecting when they ride and stop.

**Possible approach:**
- Process ride detection on the phone where possible.
- Store only the current parking location, not ride history.
- Make ride sharing opt-in and time-limited.
- Explain clearly what is collected and why.

### 10.7 Stigmatising Neighbourhoods

Theft warnings could create unfounded fear about particular streets or areas.

**Possible approach:** Talk about specific racks and recent reports, not "dangerous areas". Avoid giving whole streets a safety rating.

### 10.8 Confrontation Risk

A "bike moved" alert could lead students to confront a thief.

**Possible approach:** Advise clearly against confrontation in the alert itself, and make reporting to the police the main action.

### 10.9 Report Moderation and Misuse

Fake or malicious reports could spread misinformation or target individuals.

**Possible approach:** Moderate reports, let them expire, prevent descriptions of individuals, and don't reward the number of reports alone.

### 10.10 Battery and Background Limits

Background location and Bluetooth monitoring use battery, and iOS limits what apps can do in the background.

**Possible approach:** Use the phone's built-in activity transitions rather than constant GPS, and keep tag monitoring low-power.

---

## 11. Potential Minimum Viable Prototype (MVP)

For the initial high-fidelity prototype, development could focus on four core features.

### Feature 1: Smart Parking Nudge
- Use real police.uk bicycle theft data for Selly Oak.
- Simulate the end of a ride.
- Show the parking warning and an alternative rack from OpenStreetMap.

### Feature 2: Bike Movement Alert
- Simulate the Bluetooth tag with a second phone's accelerometer.
- Trigger the "bike moved" alert.
- Show the response options and theft response guide.

### Feature 3: Student Theft Reports
- Allow students to submit a location-tagged report.
- Simulate moderation.
- Alert students with bikes parked nearby.

### Feature 4: Night Riding Reminder
- Use real sunset times.
- Trigger a lights reminder for a ride finishing after dark.
- Offer optional ride sharing.

Additional features, such as the Bike Passport, club challenges and end-of-term reminders, could be added based on research findings.

---

## 12. Overall Project Aim

To design a proactive, location-aware smartphone application that helps student cyclists prevent bike theft. It integrates police crime data, student reports, phone sensing and an optional Bluetooth tag to intervene at the moment a student parks, and alerts them if their bike is tampered with.

The application should offer timely, practical interventions while respecting user privacy, avoiding unnecessary fear, and never encouraging confrontation.

### Core Design Principle

> **Instead of helping students after their bike is stolen, SpokeSafe helps them at the moment they lock up.**

### Project Vision

**SpokeSafe – Park smarter. Ride safer. Look out for each other.**
