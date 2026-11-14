# Earthy Bento-Grid E-Portfolio Redesign Specification

**Date:** 2026-11-14  
**Author:** Jullianna Villaluna  
**Course:** ITC C105-101BA — Computer Programming 1 (José Rizal University)  
**Instructor:** Virginia B. Loyola, MIT  

---

## 1. Overview & Objectives

Redesign the Computer Programming 1 E-Portfolio from a pastel claymorphic single-column card into an **earthy, tactile layered Bento-grid web application** tailored for seamless academic review by Instructor **Virginia B. Loyola, MIT**.

Key goals:
1. **Color Palette:** Deep forest & sage greens (`#244B43`, `#335C54`, `#5B7A50`), warm terracotta & espresso browns (`#6E4735`, `#462E22`), and soft beige/sand accents (`#E6C3A0`, `#C5A78B`) on warm tonal backgrounds (`#F6F1EA` / `#EDE3D5`).
2. **Layout & Surfaces:** Layered Bento-grid aesthetic using rounded-corner cards (`16px–20px` border radius), soft drop shadows, subtle `1px` inner top/left highlights, and textured/tonal section backgrounds separating major blocks.
3. **Editorial Split Hero Banner:** Left side with bold clean sans-serif display typography, concise subtitle/intro, and a warm beige (`#E6C3A0`) pill-shaped CTA button (`Explore Portfolio`); right side with decorative botanical & geometric layered visual accents framing the student portrait.
4. **Feature Strip & 3-Column Bento Grid Cards:** Dark forest-green (`#244B43`) horizontal rounded container with 4 minimalist line-art icons and summaries for quick navigation/highlights, followed by a 3-column grid of rounded square cards in alternating sage green (`#5B7A50`), dark espresso (`#462E22`), and warm tan (`#C5A78B`/`#E6C3A0`) tones with centered circular icon badges.
5. **Sticky Navigation, 11-Section Quick-Jump TOC, Lightbox & Print Support:**
   - Sticky top navigation bar + quick-jump Table of Contents for all **11 required sections**.
   - Multi-page React Router browsing combined with hash-anchor scrolling (`#section-1` through `#section-11`).
   - Full-screen Lightbox modal for all activity screenshots, certificates, hobbies photos, and resume image.
   - Clean `@media print` styling (`1-inch` margins via `@page { margin: 1in; }`) that renders all 11 sections sequentially when exported to PDF.

---

## 2. Design Tokens & Surface System

### 2.1 Color Palette (`tailwind.config.js` & CSS Custom Properties)

| Token Name | Hex Code | Role |
|---|---|---|
| `forest-deep` | `#244B43` | Primary dark surface, sticky navbar, horizontal feature strip, primary headings on light surfaces |
| `forest-pine` | `#335C54` | Secondary green surface, interactive hover surface, subtle borders, botanical layers |
| `sage-earthy` | `#5B7A50` | Sage Bento card background, active pills, botanical accents, timeline markers |
| `terracotta` | `#6E4735` | Warm terracotta accent badges, secondary highlights, decorative geometric shapes |
| `espresso` | `#462E22` | Dark espresso Bento card background, deep body/heading contrast text |
| `sand-beige` | `#E6C3A0` | Primary CTA pill button (`Explore Portfolio`), warm highlights, high-contrast text on dark surfaces |
| `sand-muted` | `#C5A78B` | Warm tan Bento card surface, muted borders, secondary tags and metadata labels |
| `canvas-warm` | `#F6F1EA` | Base page background |
| `canvas-tonal` | `#EDE3D5` | Tonal section background separating major blocks |

### 2.2 Bento Card & Surface Classes (`src/index.css`)

- **`.bento-shell`**: Outer content wrapper with max-width `1120px` (`max-w-6xl`), responsive padding, and subtle layered tonal background.
- **`.bento-card`**: Base tactile card with `border-radius: 18px` (`16px–20px` range), warm ivory/sand surface (`#FAF6F0`), `1px solid rgba(197, 167, 139, 0.35)`, soft drop shadow (`0 12px 28px -8px rgba(36, 75, 67, 0.10), 0 4px 10px -3px rgba(70, 46, 34, 0.06)`), and subtle inner highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.85)`).
- **`.bento-card-forest`**: Deep forest green (`#244B43` to `#335C54` subtle gradient), `border-radius: 18px`, inner top highlight (`inset 0 1px 0 rgba(230, 195, 160, 0.22)`), text in `#F6F1EA` / `#E6C3A0`.
- **`.bento-card-sage`**: Sage green (`#5B7A50`), `border-radius: 18px`, inner top highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.25)`), text in `#F6F1EA`.
- **`.bento-card-espresso`**: Dark espresso (`#462E22` to `#6E4735` subtle gradient), `border-radius: 18px`, inner top highlight (`inset 0 1px 0 rgba(230, 195, 160, 0.20)`), text in `#F6F1EA` / `#E6C3A0`.
- **`.bento-card-tan`**: Warm tan/sand (`#E6C3A0` / `#C5A78B`), `border-radius: 18px`, inner top highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.65)`), text in `#462E22`.
- **`.bento-section-tonal`**: Textured/tonal section container (`#EDE3D5` with subtle dot/grain pattern and `20px` radius) separating major blocks.

---

## 3. Component Architecture

### 3.1 `src/components/Navigation.jsx` (Sticky Top Navigation Bar)
- Sticky top bar (`sticky top-0 z-50`) styled in deep forest green (`#244B43/95` with backdrop blur and sand border `#335C54`).
- Left: Brand identity (`JV • ITC C105-101BA`) + instructor badge (`Prof. Virginia B. Loyola, MIT`).
- Center: Route links (`Welcome`, `Profile`, `Overview`, `Lab Portfolio`, `Reflections`, `Trainings & Certs`, `Resume`) with active pill highlight in `#E6C3A0` (text `#462E22`).
- Right:
  - **"Quick Jump (11)"** dropdown menu listing all 11 required sections with direct route + `#section-X` hash links.
  - **"Print / Export PDF"** button (`window.print()`) for instant PDF generation.
  - Responsive mobile drawer for small viewports.

### 3.2 `src/components/Hero.jsx` (Editorial Split Hero + Feature Strip + 3-Column Grid)
Anchored as **Section 01 (`#section-1`)**:
1. **Editorial Split-Layout Hero Banner (`bento-card` / tonal container):**
   - **Left Column (60%):**
     - Upper pill badge in terracotta/sand: `ITC C105-101BA • Computer Programming 1 • SY 2026–2027`
     - Bold, clean sans-serif display heading: `Jullianna Villaluna`
     - Subtitle & concise academic introduction welcoming Instructor **Virginia B. Loyola, MIT** and summarizing the BSIT-Business Analytics programming portfolio at José Rizal University.
     - Dynamic typewriter badge (`Student Leader`, `Business Analyst`, `Data Specialist`, `Cloud Enthusiast`).
     - Warm beige pill-shaped CTA button (`#E6C3A0` background, `#462E22` bold text, hover `#C5A78B`): **"Explore Portfolio"** (scrolls to `#section-2` Table of Contents or navigates to `/portfolio`) plus secondary outline pill **"View Lab Outputs"**.
   - **Right Column (40%):**
     - Decorative botanical SVG leaf motifs and layered geometric Bento cards in `#244B43`, `#5B7A50`, `#6E4735`, and `#E6C3A0` framing `/profile.jpg` (`18px` rounded portrait frame) with floating metadata badges (`BSIT-BA • 1st Year`, `JRU Mandaluyong`).
2. **Dark Forest-Green Feature Strip (`#244B43`, `rounded-[18px]`):**
   - Horizontal rounded container with 4 minimalist line-art icons (`lucide-react` strokeWidth `1.75`) and clickable quick-navigation summaries:
     1. **Course & Section:** `ITC C105-101BA` — Computer Programming 1
     2. **Instructor:** `Virginia B. Loyola, MIT` — José Rizal University
     3. **17 Lab & Term Outputs:** Prelims, Midterms & Finals compilation
     4. **13+ Certs & Seminars:** Python, AWS, Data Science & Hackathons
3. **3-Column Grid of Rounded Square Cards (`grid-cols-1 md:grid-cols-3 gap-5`):**
   - **Card 1 (Sage Green `#5B7A50`):** Centered circular icon badge (`Code2`), title *"Algorithm & Python Engineering"*, summary of flowcharts, control structures, OOP, and modular Python labs, linking to `/portfolio#section-5`.
   - **Card 2 (Dark Espresso `#462E22`):** Centered circular icon badge (`MessageSquare`), title *"Term-by-Term Reflections"*, summary of analytical growth across Prelim, Midterm, and Final periods, linking to `/reflections#section-8`.
   - **Card 3 (Warm Tan `#C5A78B` / `#E6C3A0`):** Centered circular icon badge (`Award`), title *"Leadership, Arts & Credentials"*, summary of AWS leadership, Blender 3D art, WCOPA dance, and CV, linking to `/hobbies-trainings#section-9`.

### 3.3 `src/components/TableOfContents.jsx` (11-Section Quick-Jump Directory)
Anchored as **Section 02 (`#section-2`)**:
- Displays all **11 required sections** in a structured Bento grid with section number badges (`01`–`11`), category tags, route + hash links, and alternating sage/terracotta/forest icon badges:
  1. `01` — **Cover & Welcome Banner** (`/#section-1`)
  2. `02` — **Table of Contents & Portfolio Guide** (`/#section-2`)
  3. `03` — **Student Profile, Biography & Academic Timeline** (`/profile#section-3`)
  4. `04` — **Course Overview, Specifications & Syllabus** (`/overview#section-4`)
  5. `05` — **Prelim Period Outputs (Flowcharts, Logic & Quiz/Exam)** (`/portfolio#section-5`)
  6. `06` — **Midterm Period Outputs (Python Fundamentals, Loops & Lists)** (`/portfolio#section-6`)
  7. `07` — **Final Period Outputs (Functions Lab & SDG Case Study: Ambagan)** (`/portfolio#section-7`)
  8. `08` — **Narrative Reflections (Prelim, Midterm & Final Terms)** (`/reflections#section-8`)
  9. `09` — **Trainings, Seminars, Hackathons & Student Leadership** (`/hobbies-trainings#section-9`)
  10. `10` — **Certificates & Technical Credentials** (`/hobbies-trainings#section-10`)
  11. `11` — **Hobbies, Creative Pursuits & Curriculum Vitae (Resume)** (`/resume#section-11`)

### 3.4 `src/components/StudentProfile.jsx` (Section 03)
- Anchored as `#section-3`.
- Uses a multi-cell Bento grid layout:
  - Hero bio card (`bento-card-forest` or `bento-card-sage`) with Mandaluyong • JRU badge.
  - Transition Story card (`bento-card`) detailing the journey from BS Medical Technology to BSIT Business Analytics & Data Science doctorate aspiration.
  - Academic Background timeline (`bento-card`) + 3 alternating tonal cards (`#5B7A50` sage, `#462E22` espresso, `#E6C3A0` tan) for *Career Goals*, *Interests in Tech*, and *Skills & Strengths*.

### 3.5 `src/components/CourseOverview.jsx` (Section 04)
- Anchored as `#section-4`.
- Course Description in a layered forest/sage Bento card, 6 Course Specifications in a 3x2 Bento grid, and the Interactive Syllabus Outline with Prelim/Midterm/Final filter tabs (and all 3 terms rendered sequentially during `@media print`).

### 3.6 `src/components/Portfolio.jsx` (Sections 05, 06, 07)
- Grouped cleanly into the 3 term sections so each has its own dedicated anchor and header:
  - **Section 05 (`#section-5`):** Prelim Period Outputs (8 outputs: `PPT1`–`PPT4`, `PP1`–`PP2`, `PWW1`, `PrelimExam2026`).
  - **Section 06 (`#section-6`):** Midterm Period Outputs (6 outputs: `Week 7 Activity` through `Week 11 Activity`).
  - **Section 07 (`#section-7`):** Final Period Outputs (3 outputs: `Week 14 Functions Lab`, `Week 15 Case Study`, `Week 16 Final Docs`).
- Each output card is displayed in a tactile Bento grid with preview thumbnail, description, tags, and a **"View Full Screenshot"** button/click handler that opens the global **Lightbox Modal**.

### 3.7 `src/components/Reflections.jsx` (Section 08)
- Anchored as `#section-8`.
- Displays Prelim, Midterm, and Final narrative reflections in 3 distinct Bento cards (Sage `#5B7A50`, Espresso `#462E22`, and Deep Forest `#244B43` / Warm Tan `#E6C3A0`) with centered/prominent circular icon badges.

### 3.8 `src/components/HobbiesAndTrainings.jsx` (Sections 09 & 10 + Creative Hobbies)
- Split into clear semantic sections:
  - **Section 09 (`#section-9`):** Trainings, Seminars, Hackathons & Leadership Events (Hackathons, Cloud Grand Prix Hosting, Mass Induction Oathtaking, Kiro Workshop, AWS Community Night, Gen AI to Z, AIM Incubator, BuildHers+ Infor).
  - **Section 10 (`#section-10`):** Certificates & Scholarships (Python Essentials 1, DataCamp Scholarship, Pinterest Media Planner, Kadakareer x Canva, ASEAN Data Science SAP).
  - **Creative Hobbies Showcase (`#section-11-hobbies`):** 3D Modeling with Blender & Performing Arts/Dance galleries.
- Every image across all carousels/grids opens in the **Lightbox Modal** when clicked.

### 3.9 `src/components/Resume.jsx` (Section 11)
- Anchored as `#section-11`.
- Includes CV summary cards, PDF download button (`/assets/resume/JulliannaVillalunaResume.pdf`), clickable visual resume preview (`/assets/resume/resume.jpg`) connected to the **Lightbox Modal**, and a cross-link/summary of Hobbies & Creative Pursuits so Section 11 is self-contained both interactively and in print.

### 3.10 `src/components/LightboxModal.jsx` (Global Full-Screen Screenshot Viewer)
- Reusable modal component receiving `{ isOpen, imageSrc, title, subtitle, onClose }`.
- Features:
  - Dark espresso/forest backdrop (`bg-[#1A2623]/90 backdrop-blur-md`).
  - High-resolution image container (`max-h-[85vh] max-w-[92vw] object-contain rounded-[16px]`).
  - Top bar with title, subtitle/tag, Zoom toggle, and Close (`X`) button.
  - Closes on `Escape` key press or backdrop click; locks body scroll while open; hidden in `@media print`.

### 3.11 Scroll-to-Hash Helper & Print All-11-Sections Wrapper (`src/App.jsx`)
- **Hash Scroll Effect:** `useLocation()` listener in `App.jsx` smoothly scrolls to `#section-X` whenever route or hash changes (or scrolls to top if no hash).
- **Print Support (`@media print`):**
  - Screen view (`print:hidden`) renders the active route inside the Bento shell.
  - Print view (`hidden print:block`) renders all **11 required sections** in order (`Hero`, `TableOfContents`, `StudentProfile`, `CourseOverview`, `Portfolio`, `Reflections`, `HobbiesAndTrainings`, `Resume`) with `@page { margin: 1in; }`, expanded syllabus/portfolio details, high-contrast ink-friendly borders, and `break-inside: avoid` on cards.

---

## 4. Verification & Testing Criteria

1. **Build & Lint Verification:** `npm run build` and `npm run lint` succeed with zero errors.
2. **Visual & Palette Verification:** All 7 required hex codes (`#244B43`, `#335C54`, `#5B7A50`, `#6E4735`, `#462E22`, `#E6C3A0`, `#C5A78B`) are applied accurately across the Hero, Feature Strip, 3-Column Bento Grid, Sticky Nav, and Section cards.
3. **11-Section Navigation Verification:** All 11 sections are listed in the Table of Contents and Sticky Nav Quick-Jump menu, and clicking any item navigates and scrolls smoothly to its target section.
4. **Lightbox Verification:** Clicking any activity screenshot, certificate, hobby image, or resume opens the full-screen Lightbox modal and closes via `Esc` or close button.
5. **Print Styling Verification:** `@media print` sets `1in` page margins, hides interactive nav/modals, and outputs all 11 sections cleanly.
