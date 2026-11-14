# ITC C601 Statistics for Business Analytics E-Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the React E-Portfolio application to display the complete ITC C601 – Statistics for Business Analytics Student's Class Portfolio (Sections 1–11) with all screenshots, converted seatwork JPEGs, structured laboratory rubrics, student metadata, and reflections.

**Architecture:** Retain the existing 7-route 3D claymorphism layout (`src/App.jsx`, `src/components/*`) while updating `Hero.jsx`, `TableOfContents.jsx`, `StudentProfile.jsx`, `CourseOverview.jsx`, `Portfolio.jsx`, `Reflections.jsx`, `Navigation.jsx`, and `index.html` to reflect ITC C601 data and assets in `public/assets/statistics/`.

**Tech Stack:** React 19, React Router DOM 7, Tailwind CSS 3, Lucide React, Vite 7.

---

### Task 1: Update Cover Page (`Hero.jsx`), Table of Contents (`TableOfContents.jsx`), Navigation (`Navigation.jsx`), and HTML Title (`index.html`)

**Files:**
- Modify: `index.html`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/TableOfContents.jsx`
- Modify: `src/components/Navigation.jsx`

- [x] **Step 1: Update `index.html` title**
- [x] **Step 2: Update `src/components/Hero.jsx` with Section 1 Cover Page content**
- [x] **Step 3: Update `src/components/TableOfContents.jsx` with Section 2 Table of Contents & itemized checklist (Sections 1–11)**
- [x] **Step 4: Update `src/components/Navigation.jsx` labels**
- [x] **Step 5: Check `.agent/config.yml` (`auto_commit: false`) — skip git commit**

### Task 2: Update Student Profile (`StudentProfile.jsx`)

**Files:**
- Modify: `src/components/StudentProfile.jsx`

- [x] **Step 1: Update `src/components/StudentProfile.jsx` with Section 3 Student Information, Personal Introduction, Educational Background, Interests/Hobbies, and Trainings/Work Experience**
- [x] **Step 2: Check `.agent/config.yml` (`auto_commit: false`) — skip git commit**

### Task 3: Update Course Syllabus / Course Outline (`CourseOverview.jsx`)

**Files:**
- Modify: `src/components/CourseOverview.jsx`

- [x] **Step 1: Update `src/components/CourseOverview.jsx` with Section 4 JRU Vision/Mission, Graduate Attributes, Course Learning Outcomes, Weekly Course Outline (Prelim, Midterm, Finals), and Grading System**
- [x] **Step 2: Check `.agent/config.yml` (`auto_commit: false`) — skip git commit**

### Task 4: Update Portfolio Activities, Seatworks, Quizzes, Projects & Exams (`Portfolio.jsx`)

**Files:**
- Modify: `src/components/Portfolio.jsx`

- [x] **Step 1: Update `src/components/Portfolio.jsx` with Section 5 (Seatworks 5.1–5.4), Section 6 (Laboratory Activities 6.1–6.7 with full 5-part rubric blocks), Section 7 (Quizzes 7.1–7.4), Section 8 (Projects 8.1–8.3), and Section 9 (Examinations 9.1–9.3)**
- [x] **Step 2: Check `.agent/config.yml` (`auto_commit: false`) — skip git commit**

### Task 5: Update Learning Reflection & Course Learning Summary (`Reflections.jsx`)

**Files:**
- Modify: `src/components/Reflections.jsx`

- [x] **Step 1: Update `src/components/Reflections.jsx` with Section 10 (Learning Reflection Q&A) and Section 11 (Course Learning Summary)**
- [x] **Step 2: Verify build (`npm run build`) and live dev server**
- [x] **Step 3: Check `.agent/config.yml` (`auto_commit: false`) — skip git commit**
