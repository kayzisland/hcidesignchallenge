# LectureFlow – An ADHD-Friendly Smart Lecture Companion

## Project Summary

**LectureFlow** is a proactive smartphone application designed to make university lectures more accessible and engaging for students with ADHD.

Many students with ADHD struggle to concentrate during lengthy, passive lectures, find sitting still uncomfortable, and prefer watching recorded lectures at increased playback speeds in familiar environments.

LectureFlow aims to address these challenges by transforming traditional lecture recordings into shorter, manageable, and interactive learning sessions.

The application integrates university timetables, recorded lectures, and calendar data to proactively recommend suitable learning opportunities, provide personalised reminders, and help students resume unfinished lectures.

**The goal is to make the learning experience adapt to the student, rather than expecting the student to adapt to traditional lecture formats.**

---

## 1. Problem Definition

Traditional university lectures often require students to:

- Sit still for extended periods, often exceeding an hour.
- Maintain concentration while listening to a lecturer.
- Absorb information at a fixed pace.
- Learn in environments that may be uncomfortable or distracting.
- Remain engaged with content that may be presented monotonously.

For some students with ADHD, these expectations can create significant barriers to learning.

Some students prefer watching recorded lectures at home, where they can:

- Sit or lie somewhere comfortable.
- Move around freely.
- Adjust playback speeds, often to 1.5× or 2×.
- Pause and resume whenever necessary.
- Learn at their own pace.

However, recorded lectures remain lengthy and passive, and students may still struggle to stay engaged, manage their progress, and complete unfinished recordings.

### Problem Statement

> How might we help university students with ADHD engage with lengthy recorded lectures in a way that accommodates their attention patterns, preferred learning environments, and individual learning needs?

---

## 2. Proposed Solution

LectureFlow is a personalised lecture companion that transforms traditional recorded lectures into a more flexible, interactive, and accessible learning experience.

The application would allow students to:

1. Import or access university lecture recordings.
2. Automatically divide recordings into manageable sections.
3. Watch lectures at their preferred playback speed.
4. Engage with optional interactive learning activities.
5. Switch between video and audio-focused learning.
6. Resume unfinished lectures with contextual summaries.
7. Receive proactive suggestions based on their university timetable and availability.

The system aims to reduce the difficulties associated with traditional lecture delivery while maintaining the educational content.

---

## 3. Key Features

### 3.1 Smart Lecture Segmentation

Long lecture recordings are automatically divided into shorter sections based on their content.

**Features:**
- Divide lectures into manageable topic-based sections.
- Display estimated completion times.
- Adjust estimates according to playback speed.
- Track completed and unfinished sections.
- Allow students to skip between topics.

**Benefit:** Reduces the need to engage with an entire lecture in one continuous session.

### 3.2 Personalised Playback

Students can customise how they experience lecture recordings.

**Features:**
- Adjustable playback speeds, including 1×, 1.5×, and 2×.
- Easy pausing, rewinding, and skipping.
- Captions and transcripts.
- Optional lecture summaries.
- Personalised playback preferences.

**Benefit:** Gives students control over the pace and format of learning.

### 3.3 Interactive Learning

LectureFlow introduces optional interactions between lecture sections.

**Features:**
- Short comprehension questions.
- Quick knowledge checks.
- Interactive summaries.
- Opportunities to revisit confusing topics.
- Optional explanations of difficult concepts.

**Benefit:** Encourages active engagement with lecture content rather than relying entirely on passive listening.

### 3.4 Movement-Friendly Learning

The application supports students who find sitting still for extended periods uncomfortable.

**Features:**
- Audio-first playback mode.
- Easy switching between audio and video.
- Ability to listen while moving around.
- Bookmarks for visual content that needs reviewing.
- Flexible pauses and breaks.

**Benefit:** Allows students to learn in environments and positions that are comfortable for them.

### 3.5 Smart Lecture Resuming

The application remembers where students stopped and helps them continue.

**Features:**
- Automatic progress tracking.
- Resume from the previous position.
- Brief summaries of previously watched content.
- Reminders of what comes next.
- Bookmarked sections and notes.

**Benefit:** Reduces the effort required to return to a lecture after an interruption.

### 3.6 Proactive Lecture Assistance

LectureFlow uses external information and user preferences to identify suitable opportunities for learning.

**Features:**
- University timetable integration.
- Calendar integration.
- Awareness of upcoming lectures and seminars.
- Detection of available time slots.
- Suggestions for manageable lecture sections.
- Personalised reminders about unfinished recordings.

**Example intervention:**

> You have 25 minutes free before your next commitment. You have one 12-minute section of Software Engineering remaining. Would you like to complete it now?

**Benefit:** Helps students manage their lecture content without requiring them to constantly plan and organise their learning manually.

---

## 4. Sensing and External Data Integration

To meet the requirements of the *Sensing for Benefit* design challenge, LectureFlow will combine smartphone capabilities with external information.

| Data Source | Purpose |
|---|---|
| University lecture recordings | Access recorded teaching content |
| Lecture transcripts | Identify topics and generate summaries |
| University timetable | Identify upcoming lectures and seminars |
| Phone calendar | Identify suitable periods for learning |
| Playback activity | Track progress, pauses, and unfinished sections |
| User preferences | Personalise playback and interventions |
| Accelerometer (optional) | Support movement-aware interaction |
| GPS (optional) | Provide context-sensitive suggestions at preferred locations |

Access to university recordings and timetables would depend on the university's systems, permissions, and available APIs.

For the prototype, some integrations may be simulated using sample recordings, transcripts, and timetable data.

---

## 5. Proactive Behaviour

A key requirement of the project is that the system must actively respond to relevant information rather than simply waiting for user input.

LectureFlow would achieve this through context-aware interventions.

### Scenario 1: Upcoming Seminar

**Trigger:** A seminar is approaching, and relevant lecture content remains unfinished.

**Intervention:**

> Your Software Engineering seminar is tomorrow. You have two short lecture sections remaining. Would you like to finish one today?

### Scenario 2: Available Free Time

**Trigger:** The student's calendar contains an available time slot.

**Intervention:**

> You have 20 minutes free. There's an unfinished 10-minute lecture section available. Want to continue?

### Scenario 3: Returning After an Interruption

**Trigger:** The student reopens an unfinished lecture.

**Intervention:**

> Welcome back! Last time, you covered unit testing. Would you like a quick recap before continuing?

### Scenario 4: Unfinished Lecture Content

**Trigger:** Several lecture sections remain incomplete before a relevant scheduled class.

**Intervention:**

> You have three unfinished lecture sections before Thursday's workshop. Would you like to create a manageable viewing plan?

### Scenario 5: Personalised Learning Preferences

**Trigger:** A student repeatedly chooses shorter lecture sections or declines certain interactions.

**Intervention:**

> You seem to prefer shorter sessions. Would you like to use 10-minute sections by default?

All interventions would be optional, customisable, and designed to avoid unnecessary distractions.

---

## 6. Target Users

### Primary Audience

University students with ADHD who experience difficulties engaging with traditional lectures.

This may include students who:

- Struggle to maintain attention during lengthy lectures.
- Find remaining seated for extended periods uncomfortable.
- Prefer watching recorded lectures at increased speeds.
- Learn more effectively in familiar or comfortable environments.
- Find it difficult to return to unfinished learning activities.
- Prefer greater control over how educational content is delivered.

### Secondary Audience

The application could also benefit:

- Students without ADHD who prefer self-paced learning.
- Students with other attention-related difficulties.
- Students who learn more effectively through shorter sessions.
- Students balancing university with other commitments.

The design should recognise that students with ADHD have different needs and preferences rather than assuming one approach works for everyone.

---

## 7. User-Centred Design Approach

The project will follow the user-centred design lifecycle:

**Empathise → Define → Ideate → Prototype → Test**

### 7.1 Empathise

Investigate how students with ADHD currently experience university lectures.

**Methods:**
- Interviews with students with ADHD.
- Questionnaires.
- Observations of recorded lecture usage, with consent.
- Research into existing lecture platforms.
- Analysis of common challenges and existing coping strategies.

**Goal:** Understand genuine student needs before designing a solution.

### 7.2 Define

Analyse research findings to identify the most important problems.

Potential areas include:
- Difficulty remaining attentive.
- Discomfort during lengthy lectures.
- Preference for increased playback speeds.
- Difficulty restarting unfinished lectures.
- Lack of engagement with passive content.
- Challenges organising recorded learning.

**Goal:** Develop a focused, evidence-based problem statement.

### 7.3 Ideate

Explore several potential approaches rather than immediately selecting one solution.

Possible concepts include:

**LectureRemix**
- Focuses on automatically restructuring lectures into shorter, interactive content.

**LectureBuddy**
- Focuses on proactively organising lecture viewing around student availability.

**Move & Learn**
- Focuses on movement-friendly learning and flexible audio/video playback.

**Goal:** Compare alternatives and identify the strongest design direction.

### 7.4 Prototype

Create and refine interactive prototypes.

Potential tools:
- Figma.
- React or another frontend framework.
- Smartphone simulators.
- AI-assisted development tools.

Prototype features could include:
- Lecture dashboard.
- Personalised playback controls.
- Topic-based navigation.
- Interactive knowledge checks.
- Smart resume functionality.
- Context-aware notifications.

**Goal:** Create a realistic demonstration of how the system would work.

### 7.5 Test

Evaluate prototypes with representative users.

Potential evaluation criteria:
- Ease of navigation.
- Perceived comfort.
- Ability to understand lecture content.
- User engagement.
- Ease of resuming unfinished lectures.
- Usefulness of proactive interventions.
- Notification fatigue.
- Overall user satisfaction.

**Goal:** Use evidence from testing to improve the design.

---

## 8. Key Research Questions

1. Why do some students with ADHD prefer recorded lectures over attending in person?
2. Which aspects of traditional lectures create the greatest difficulties?
3. How do students currently adapt recorded lectures to suit their needs?
4. Does dividing lectures into shorter sections improve the learning experience?
5. Are interactive questions helpful or distracting?
6. How important is freedom of movement during learning?
7. How do students feel about proactive learning suggestions?
8. What types of reminders are helpful without becoming overwhelming?
9. How much control should users have over personalisation?
10. Does LectureFlow improve comfort, engagement, and understanding compared with existing lecture players?

---

## 9. Expected Benefits

LectureFlow aims to:

- Improve accessibility of university lecture materials.
- Make lengthy lectures easier to engage with.
- Support comfortable and flexible learning environments.
- Give students greater control over their learning experience.
- Reduce difficulties resuming unfinished lectures.
- Encourage meaningful engagement with educational content.
- Provide personalised, context-aware assistance.
- Reduce the organisational effort involved in managing recorded lectures.

The success of the application should be evaluated through user research and testing rather than assumed benefits.

---

## 10. Potential Challenges

### University Integration

University platforms may restrict access to lecture recordings, transcripts, or timetables.

**Possible approach:** Use authorised imports or simulated university data during prototyping.

### Notification Fatigue

Excessive proactive suggestions could distract or overwhelm users.

**Possible approach:** Allow students to customise the timing, frequency, and types of notifications.

### Individual Differences

Not all students with ADHD experience the same difficulties or prefer the same learning approaches.

**Possible approach:** Prioritise personalisation and user control.

### AI-Generated Content Accuracy

Automatically generated summaries, explanations, and questions may contain mistakes.

**Possible approach:** Allow students to access the original lecture content and verify important information.

### Maintaining Understanding

Watching lectures more quickly or completing shorter sections does not necessarily guarantee better learning.

**Possible approach:** Evaluate comprehension and perceived usability alongside completion rates.

---

## 11. Overall Project Aim

To design a proactive, personalised smartphone application that helps university students with ADHD engage with recorded lectures by adapting content delivery, playback speed, session length, and learning opportunities to their individual needs.

The application should use external educational data and contextual information to provide timely, meaningful interventions while maintaining student autonomy.

### Core Design Principle

> **Instead of making students adapt to the lecture, make the lecture adapt to the student.**