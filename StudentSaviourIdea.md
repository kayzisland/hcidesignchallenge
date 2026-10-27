# Student Saviour – A Proactive Student Safety and Crime Awareness App

## Project Summary

**Student Saviour** is a proactive smartphone application designed to improve university student safety by combining location tracking, crime statistics, university security alerts, and real-time transport information.

University students may encounter safety concerns when travelling home at night, navigating unfamiliar areas, living in student accommodation, or protecting valuable belongings. Many students are unaware of local crime patterns, recent security incidents, or disruptions that could affect their journeys.

Student Saviour aims to address these challenges by providing personalised, location-aware safety information and proactively intervening when relevant situations arise.

The application uses smartphone sensors, external APIs, and user preferences to identify potential concerns and offer practical actions, such as viewing alternative routes, sharing journeys with trusted contacts, or receiving relevant security alerts.

**The goal is to help students make informed decisions about their personal safety without requiring them to constantly monitor crime reports or security information themselves.**

---

## 1. Problem Definition

University students can face a range of safety concerns throughout their everyday lives.

These may include:

- Walking home alone at night.
- Travelling through unfamiliar areas.
- Being unaware of recent crimes near campus or student accommodation.
- Experiencing theft of bicycles, laptops, phones, or other valuables.
- Being unaware of university security warnings.
- Travelling home when public transport is delayed or cancelled.
- Becoming separated from friends during nights out.
- Not knowing how or where to report safety concerns.
- Feeling uncertain about personal safety in unfamiliar environments.

Although crime information and safety resources are available through police websites, university security departments, and transport providers, this information is often spread across multiple platforms.

Students must typically search for information themselves, meaning they may not discover relevant updates until after they become useful.

Existing crime maps also tend to focus on displaying historical information rather than providing personalised, actionable assistance.

### Problem Statement

> How might we use smartphone sensors and external data to proactively improve university students' safety awareness, provide relevant information, and support safer decision-making during everyday activities?

---

## 2. Proposed Solution

Student Saviour is a location-aware student safety companion that combines crime awareness, journey assistance, and personalised notifications into a single smartphone application.

The application would allow students to:

1. Explore historical crime statistics around their university and accommodation.
2. Receive relevant alerts from verified university security sources.
3. Access contextual safety information based on their location.
4. Plan journeys and receive updates about transport disruptions.
5. Share selected journeys with trusted contacts.
6. Receive optional journey check-in notifications.
7. Report safety concerns through appropriate channels.
8. Access university security and emergency contact information.

Rather than simply displaying crime statistics, Student Saviour uses available data to recognise relevant situations and proactively offer helpful interventions.

---

## 3. Key Features

### 3.1 Interactive Crime Awareness Map

An interactive map allows students to explore historical crime information around their university, accommodation, and surrounding areas.

**Features:**
- Display recorded crimes on a map.
- Filter crimes by category.
- View historical crime patterns over time.
- Explore crime information near saved locations.
- View information about different types of recorded crime.
- Access the original data source.

**Data Source:** Police.uk API.

The Police.uk API provides publicly available historical crime records, including approximate locations, categories, and reporting months.

**Benefit:** Helps students become more informed about recorded crime patterns in areas they regularly visit.

**Important:** Police crime data is historical and uses approximate, anonymised locations. It cannot reliably predict where future crimes will occur or determine whether a particular street is safe.

### 3.2 Location-Based Security Alerts

Student Saviour uses GPS and geofencing to recognise when students enter locations associated with relevant, verified security notices.

**Features:**
- Detect when a student enters a selected area.
- Check for relevant university security alerts.
- Notify students about verified incidents or warnings.
- Provide practical advice related to the alert.
- Allow users to customise notification categories.
- Prevent repeated notifications about the same incident.

**Example:**

> **Student Saviour – Campus Security Notice**
>
> University security has reported recent laptop thefts in the library. Remember to take your belongings with you when leaving your desk.
>
> View Notice | Dismiss

**Benefit:** Provides relevant safety information at the time and location where it may be useful.

University security data would require an available feed, authorised integration, or a simulated dataset for the prototype.

### 3.3 Smart Journey Companion

The application supports students travelling between university, accommodation, work, and social events.

**Features:**
- Select a journey destination.
- View available transport options.
- Monitor relevant transport disruptions.
- Receive updates about cancelled or delayed services.
- Offer alternative journey options when disruptions occur.
- Enable optional journey check-ins.
- Provide access to trusted contacts.

**Example:**

> **Student Saviour – Journey Update**
>
> Your planned bus home has been cancelled.
>
> Would you like to view alternative transport options or share your journey with a trusted contact?
>
> View Alternatives | Share Journey

**Benefit:** Helps students respond to unexpected travel disruptions and remain informed during their journeys.

The application would not claim that any suggested route is guaranteed to be safe.

### 3.4 Journey Check-In System

Students can voluntarily activate a check-in feature before travelling.

**Features:**
- Select a destination.
- Choose an estimated arrival time.
- Select trusted contacts.
- Receive arrival check-in notifications.
- Extend the journey timer.
- Confirm safe arrival.
- Optionally share journey progress with a trusted contact.

**Example:**

> **Student Saviour – Journey Check-In**
>
> You haven't confirmed your arrival yet.
>
> Are you OK, or would you like more time?
>
> I'm OK | Extend Timer | Contact Someone

**Benefit:** Provides reassurance and an easy way for students to communicate their journey status.

Location sharing would require explicit consent, and a missed check-in would not automatically be treated as proof of an emergency.

### 3.5 Student Property Theft Prevention

Student Saviour can provide contextual reminders to help students protect valuable belongings.

**Features:**
- Save bicycle parking locations.
- View historical bicycle theft reports.
- Receive optional security reminders.
- Access property protection advice.
- Save relevant information about valuable belongings.

**Example:**

> **Student Saviour – Bicycle Security**
>
> Bicycle thefts have previously been recorded in this neighbourhood.
>
> Consider using suitable locks and securing your bicycle frame and wheels.

**Benefit:** Encourages practical crime-prevention behaviours without requiring students to regularly search crime databases.

### 3.6 Community Safety Reporting

Students can report environmental safety concerns or access appropriate channels for reporting incidents.

**Features:**
- Report broken streetlights or poorly maintained pathways.
- Submit location-tagged environmental concerns.
- Upload supporting photographs.
- View verified or moderated community reports.
- Access university security reporting services.
- Find relevant police reporting information.

**Example:**

> **Student Saviour – Campus Safety Update**
>
> Lighting has been reported and confirmed as faulty on a pathway near your saved route.
>
> Would you like to review an alternative route?

**Benefit:** Encourages students to contribute to campus safety and helps communicate relevant environmental concerns.

Reports would require moderation and verification before being presented as confirmed information.

The platform would not allow users to publicly accuse or identify suspected offenders.

### 3.7 Emergency and University Support

The app provides quick access to relevant support services.

**Features:**
- University security contact information.
- Emergency service information.
- Non-emergency police reporting links.
- University wellbeing and student support contacts.
- Guidance on reporting theft, harassment, or other incidents.
- Optional saved emergency contacts.

**Benefit:** Makes it easier for students to identify appropriate support and reporting options.

The application would supplement rather than replace emergency services.

---

## 4. Sensing and External Data Integration

To meet the requirements of the *Sensing for Benefit* design challenge, Student Saviour will use smartphone sensors and external information sources.

| Data Source | Purpose |
|---|---|
| Smartphone GPS | Determine location during opted-in features |
| Geofencing | Trigger relevant notifications when entering selected areas |
| Phone clock | Support time-sensitive journey assistance |
| Accelerometer (optional) | Support movement and journey-state detection |
| Police.uk API | Retrieve historical recorded crime data |
| University security notices | Provide verified campus safety alerts |
| Public transport APIs | Identify delays, cancellations, and alternative services |
| Maps and routing APIs | Display journeys and nearby facilities |
| Phone calendar (optional) | Identify upcoming events or late finishes |
| User-submitted reports | Collect community environmental safety concerns |
| User preferences | Personalise alerts and interventions |
| Trusted contacts | Enable optional journey sharing and check-ins |

### Potential External APIs

**Police.uk API**

Website: https://data.police.uk/

Provides historical crime data for England, Wales, and Northern Ireland.

Potential uses:
- Displaying historical crimes.
- Filtering crime categories.
- Analysing reported crime patterns.
- Providing contextual theft-prevention information.

**Google Maps Platform**

Website: https://developers.google.com/maps

Potential uses:
- Displaying student locations.
- Calculating journey routes.
- Finding nearby destinations.
- Estimating travel times.

**Transport for West Midlands API**

Website: https://api-portal.tfwm.org.uk/

Potential uses:
- Retrieving public transport information.
- Monitoring delays and cancellations.
- Supporting alternative journey recommendations.

**University Security Information**

Potential sources:
- University security announcements.
- Campus safety notices.
- Official university websites.
- Authorised security feeds.

Availability would depend on the university's systems and permissions.

---

## 5. Proactive Behaviour

A key requirement of the project is that Student Saviour must proactively respond to relevant stimuli rather than only displaying information when opened.

The application will combine sensor information, external data, and user preferences to determine when an intervention may be useful.

### Scenario 1: Entering an Area with a Relevant Security Notice

**Trigger:** GPS detects that a student has entered a campus area covered by a verified security notice.

**External Data:** University security announcement.

**Intervention:**

> Recent unattended-property thefts have been reported in this library. Keep your belongings with you when leaving your desk.

**Action:** View the official notice or dismiss the notification.

### Scenario 2: Late-Night Transport Disruption

**Trigger:** A student is following a selected journey home, and their planned bus is cancelled.

**External Data:** Live public transport API.

**Intervention:**

> Your planned bus home has been cancelled. Would you like to review alternative transport or start a journey check-in?

**Action:** View alternative routes or contact a trusted person.

### Scenario 3: Bicycle Parking Reminder

**Trigger:** A student saves their bicycle's location in an area with historical bicycle theft reports.

**External Data:** Police.uk historical crime data.

**Intervention:**

> Bicycle theft has been recorded in this neighbourhood. Make sure your bicycle is properly secured before leaving.

**Action:** Save the parking location or dismiss the reminder.

### Scenario 4: Missed Journey Check-In

**Trigger:** The expected arrival time of an opted-in journey passes without confirmation.

**Input Data:** GPS, selected destination, and journey timer.

**Intervention:**

> You haven't confirmed your arrival. Would you like to check in, extend your journey, or contact someone?

**Action:** Confirm arrival, extend the timer, or contact a trusted person.

### Scenario 5: Environmental Safety Concern

**Trigger:** A student plans a route through an area with a verified report of broken lighting.

**External Data:** Moderated community safety reports.

**Intervention:**

> Lighting has been reported as faulty along part of your selected route. Would you like to review another route?

**Action:** View alternatives or continue with the existing route.

All notifications would be optional, customisable, and designed to avoid unnecessary fear or notification fatigue.

---

## 6. Target Users

### Primary Audience

University students who travel around campus, student accommodation, and surrounding urban areas.

This may include:

- Students walking home after evening lectures.
- Students attending university nightlife events.
- First-year students unfamiliar with their university city.
- Students living away from home for the first time.
- Students travelling alone.
- Students who cycle to university.
- Students concerned about protecting their belongings.

### Secondary Audience

The application could also benefit:

- University security teams.
- Student accommodation providers.
- Students' trusted contacts.
- Student unions.
- Other young adults living in university areas.

The system should account for different levels of safety concern, experience, confidence, and willingness to share personal information.

---

## 7. User-Centred Design Approach

The project will follow the user-centred design lifecycle:

**Empathise → Define → Ideate → Prototype → Test**

### 7.1 Empathise

Investigate students' experiences, concerns, and existing safety behaviours.

**Methods:**
- Student interviews.
- Questionnaires.
- User observations where appropriate and consented to.
- Competitor analysis.
- Empathy mapping.
- Research into existing student safety services.

Potential research topics:
- Students' awareness of local crime.
- Experiences travelling home at night.
- Attitudes towards location tracking.
- Use of existing safety applications.
- Trust in student-generated reports.
- Preferences for proactive notifications.

**Goal:** Understand what safety-related problems students actually experience and which forms of support they would find useful.

### 7.2 Define

Analyse research findings to identify specific problems worth addressing.

Potential focus areas:
- Lack of awareness of relevant campus security information.
- Difficulty accessing safety resources.
- Uncertainty during disrupted late-night journeys.
- Limited knowledge of local crime patterns.
- Difficulty staying connected with trusted contacts.
- Concerns about privacy and excessive notifications.

**Goal:** Establish an evidence-based problem statement and define clear user requirements.

### 7.3 Ideate

Explore multiple possible approaches to improving student safety.

Potential design concepts include:

**CampusWatch**
- Focuses on verified crime awareness and location-based security notifications.

**WalkWise**
- Focuses on journey assistance, transport disruptions, and check-ins.

**TheftAlert**
- Focuses on protecting student belongings using contextual crime-prevention information.

**Student Saviour**
- Combines the most valuable features into a personalised student safety companion.

**Goal:** Compare alternative ideas and justify which features should be included in the final prototype.

### 7.4 Prototype

Develop interactive prototypes that demonstrate the application's primary features.

Potential tools:
- Figma.
- React Native.
- Expo.
- Smartphone simulators.
- AI-assisted development tools.

Prototype screens could include:
- Home dashboard.
- Crime awareness map.
- Security alerts.
- Journey planning.
- Trusted contacts.
- Journey check-ins.
- Community reporting.
- Notification preferences.
- Emergency support.

**Goal:** Demonstrate how the system would work and how students would interact with proactive safety features.

### 7.5 Test

Evaluate the application with representative university students.

Potential evaluation criteria:
- Ease of navigation.
- Clarity of security notifications.
- Perceived usefulness.
- Trust in the information presented.
- Ability to identify and respond to alerts.
- Ease of activating journey check-ins.
- Perceived privacy and control.
- Notification fatigue.
- Feelings of reassurance versus unnecessary anxiety.
- Overall user satisfaction.

**Goal:** Refine the design based on user feedback and identify whether the application provides meaningful support.

---

## 8. Key Research Questions

1. What are the most common personal safety concerns among university students?
2. How aware are students of crime patterns around their university?
3. Where do students currently obtain campus safety information?
4. Would students find location-based security alerts helpful?
5. What types of incidents should generate notifications?
6. Would frequent safety alerts increase feelings of anxiety?
7. How comfortable are students with an application accessing their location?
8. Would students use a journey-sharing or check-in feature?
9. Do students trust official university alerts more than community reports?
10. How should the application distinguish verified information from unverified reports?
11. How much personalisation should be available?
12. Does Student Saviour improve students' awareness, confidence, and ability to respond to relevant situations?

---

## 9. Expected Benefits

Student Saviour aims to:

- Improve student awareness of verified local safety information.
- Make relevant security information easier to access.
- Provide timely and actionable notifications.
- Support students during disrupted journeys.
- Encourage sensible property theft-prevention behaviours.
- Make journey check-ins and trusted-contact communication easier.
- Improve access to university security and reporting services.
- Help students make informed decisions about their personal safety.
- Support confidence without creating unnecessary fear.

The effectiveness of these features would need to be evaluated through user testing rather than assumed.

---

## 10. Potential Challenges

### 10.1 Historical vs Real-Time Crime Data

Public police crime statistics are historical and cannot provide live crime detection.

**Possible approach:** Clearly label historical information and distinguish it from verified current security notices.

### 10.2 Data Reliability

Community reports and third-party data may be inaccurate, outdated, or incomplete.

**Possible approach:** Display source information, reporting dates, and verification status.

### 10.3 Privacy and Location Tracking

Students may be uncomfortable with continuous location tracking or sharing their journeys.

**Possible approach:**
- Request permission only when required.
- Make journey sharing optional.
- Allow users to disable location-based features.
- Minimise stored location history.
- Clearly explain what information is collected and why.

### 10.4 Notification Fatigue

Too many alerts could overwhelm students or encourage unnecessary anxiety.

**Possible approach:** Allow students to customise alert categories, frequency, and locations.

### 10.5 False Sense of Security

The application cannot guarantee that a journey or location is safe.

**Possible approach:** Avoid assigning definitive safety ratings to streets or routes. Present verified information and practical options without making guarantees.

### 10.6 Community Report Moderation

Unverified reports could spread misinformation or unfairly identify individuals.

**Possible approach:** Moderate reports, prevent public accusations, and clearly distinguish concerns from confirmed incidents.

### 10.7 External API Availability

Some university security and transport information may not be available through public APIs.

**Possible approach:** Use publicly accessible data where possible and simulate unavailable integrations during prototyping.

---

## 11. Potential Minimum Viable Prototype (MVP)

For the initial high-fidelity prototype, development could focus on four core features.

### Feature 1: Crime Awareness Map
- Integrate historical Police.uk data.
- Display recorded crimes around a selected university area.
- Allow filtering by crime category.

### Feature 2: Proactive Security Alerts
- Simulate verified university security incidents.
- Trigger notifications based on selected locations.
- Provide actionable security advice.

### Feature 3: Smart Journey Companion
- Allow students to select a destination.
- Display journey information.
- Simulate or integrate live transport disruptions.
- Offer alternative travel options.

### Feature 4: Journey Check-In
- Allow students to start an opted-in journey.
- Choose an expected arrival time.
- Confirm arrival.
- Extend the timer or contact a trusted person.

Additional features, such as community reporting and bicycle theft prevention, could be explored during ideation and prioritised based on research findings.

---

## 12. Overall Project Aim

To design a proactive, location-aware smartphone application that improves university students' safety awareness by integrating historical crime information, verified security alerts, real-time transport data, and personalised journey assistance.

The application should recognise relevant situations and offer timely, practical interventions while respecting user privacy, autonomy, and personal preferences.

### Core Design Principle

> **Instead of expecting students to constantly search for safety information, Student Saviour brings relevant information and support to them when it matters.**

### Project Vision

**Student Saviour – Stay aware. Stay connected. Feel prepared.**