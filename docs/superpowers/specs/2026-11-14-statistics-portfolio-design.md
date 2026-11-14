# ITC C601 Statistics for Business Analytics E-Portfolio — Design Spec

## 1. Overview & Goal
Transform the existing React + Tailwind 3D Claymorphism E-Portfolio from `ITC C105 (Computer Programming 1)` into the official **ITC C601 – Statistics for Business Analytics Student's Class Portfolio** for **Jullianna Basiao Villaluna** (`26-268353`, `1st Year`, `BSIT-101BA`), instructed by **Virginia B. Loyola, MIT** for **Academic Year 2026–2027, 1st Semester** at **José Rizal University (College of Computer Studies and Engineering — Information Technology Department)**.

## 2. Architecture & Component Mapping
The application retains its 7-route 3D claymorphism architecture (`react-router-dom`) and updates the following components and assets:

1. **Assets (`/public/assets/statistics/`)**
   - 4 converted seatwork JPEGs (`Midterms_Seatwork_1.jpg`, `Midterms_Seatwork_2.jpg`, `Finals_Seatwork_1.jpg`, `Finals_Seatwork_2.jpg`).
   - 11 PNG screenshots covering Prelim Activities 1–3, Midterm Activities 1–2, Final Term Activities 1–2, Prelim Quizzes 1–2, Midterm Quiz, Prelim & Midterm Projects, and Prelim & Midterm Examinations.

2. **Cover Page (`src/components/Hero.jsx`) & Table of Contents (`src/components/TableOfContents.jsx`)**
   - **Section 1 (Cover Page):** Displays JRU, College of Computer Studies and Engineering, Information Technology Department, `ITC C601 – STATISTICS FOR BUSINESS ANALYTICS`, `STUDENT'S CLASS PORTFOLIO`, Student's Complete Name (`Jullianna Basiao Villaluna`), Student Number (`26-268353`), Year and Section (`1st Year – BSIT-101BA`), Instructor's Name (`Virginia B. Loyola, MIT`), and Academic Year & Semester (`Academic Year 2026–2027, 1st Semester`).
   - **Section 2 (Table of Contents):** Interactive route cards plus complete itemized directory of Sections 1–11 (5.1–5.4 Seatworks, 6.1–6.7 Laboratory Activities, 7.1–7.4 Quizzes, 8.1–8.3 Projects, 9.1–9.3 Examinations, 10. Learning Reflection, 11. Course Learning Summary).

3. **Student Profile (`src/components/StudentProfile.jsx`)**
   - **Section 3 (Student Profile):**
     - Student Information: Full Name (`Jullianna Basiao Villaluna`), Student Number (`26-268353`), Program and Year Level (`Bachelor of Science in Information Technology specializing in Business Analytics – 1st Year`), Section (`BSIT-101BA`), Course Code and Description (`ITC C601 – Statistics for Business Analytics`).
     - Personal Introduction: Complete narrative introduction tailored to ITC C601.
     - Educational Background: Tertiary (JRU BSIT-BA, Present), Senior High School (University of Makati, 2022–2023, High Honors & Dean's Lister), Junior High School (Dr. Vicente F. Gustilo Memorial National High School, 2017–2018, Special Science Class).
     - Interests / Hobbies: Data analytics, UI/UX design (Figma), 3D modeling (Blender), dancing, singing, gym workouts, jogging, sketching, and gaming.
     - Trainings / Work Experience: AWS Student Builder Group (Secretary & Data Analyst), Simply Yana Digital (Freelance Pinterest Media Planner & Digital Strategist), DataCamp Scholar (2026), Pinterest Media Planner Certification (2026), AWS Cloud Club Operations Officer (July 2025 – April 2026), Starbucks Barista (2024 – 2025).

4. **Course Syllabus / Course Outline (`src/components/CourseOverview.jsx`)**
   - **Section 4 (Course Syllabus / Course Outline):**
     - JRU Institutional Vision, Mission, Core Values, Graduate Attributes, and Course Learning Outcomes (CLOs) for `ITC C601_1STSEM_SY2627`.
     - Course Specifications: `ITC C601 – Statistics for Business Analytics`, Instructor `Virginia B. Loyola, MIT`, `1st Semester, SY 2026–2027`, Section `BSIT-101BA`.
     - Interactive Weekly Course Outline across Prelim, Midterm, and Final Terms + Grading System breakdown.

5. **Portfolio Works (`src/components/Portfolio.jsx`)**
   - Category Filter Pills (`All`, `5. Seatworks`, `6. Lab Activities`, `7. Quizzes`, `8. Projects`, `9. Exams`).
   - **Section 5 (Classroom Activities and Exercises — Seatworks 5.1–5.4):** Chronological cards with actual handwritten seatwork images, computed formulas, and scores.
   - **Section 6 (Laboratory Activities 6.1–6.7):** Every activity implements the required 5-part rubric structure:
     - `Activity Number and Title`
     - `Instructions / Problem Statement`
     - `Procedures / Solutions` (accurate formulas, class interval steps, spreadsheet formulas, and mathematical computations matching the screenshots)
     - `Screenshots of Actual Output`
     - `Brief Explanation of the Results`
   - **Section 7 (Quizzes and Assessments 7.1–7.4):** Chronological quiz cards with LMS/assessment screenshots and scores/status.
   - **Section 8 (Projects and Performance Tasks 8.1–8.3):** Prelim Project, Midterm Project, and Final Term Project cards with screenshots and explanations.
   - **Section 9 (Examination Results 9.1–9.3):** Prelim Exam (`42/45`), Midterm Exam LMS submission, and Final Term Exam cards.

6. **Learning Reflection & Summary (`src/components/Reflections.jsx`)**
   - **Section 10 (Learning Reflection):** 4 structured Q&A cards answering all required reflection prompts.
   - **Section 11 (Course Learning Summary):** Complete semester learning synthesis card.

7. **HTML Metadata (`index.html`)**
   - Update `<title>` to `Jullianna Villaluna | ITC C601 Statistics for Business Analytics Portfolio`.
