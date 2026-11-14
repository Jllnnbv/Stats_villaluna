# Earthy Bento-Grid E-Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Computer Programming 1 E-Portfolio with an earthy deep forest/sage/terracotta/espresso/sand Bento-grid aesthetic, editorial split-layout hero, 4-icon dark forest feature strip, 3-column tonal square cards, sticky top navigation, 11-section quick-jump Table of Contents for Instructor Virginia B. Loyola, MIT, full-screen Lightbox modal, and clean `@media print` 1-inch margin styling.

**Architecture:** Retain multi-page React Router navigation while adding semantic section anchors (`#section-1` through `#section-11`) with smooth hash scrolling across routes, a shared `LightboxModal` state passed from `App.jsx` to visual components, and a dedicated `hidden print:block` full-portfolio view that prints all 11 sections sequentially with `@page { margin: 1in; }`.

**Tech Stack:** React 19, React Router DOM 7, Tailwind CSS 3.4, Lucide React icons, Vite 7.

---

### Task 1: Configure Earthy Color Palette, Bento Surfaces, and `@media print` Rules

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Test: `.agent/tmp/verify-theme.js`

- [ ] **Step 1: Write the failing verification script**

Create `.agent/tmp/verify-theme.js`:
```js
// .agent/tmp/verify-theme.js
import fs from 'node:fs';

const tailwindConfig = fs.readFileSync('tailwind.config.js', 'utf8');
const indexCss = fs.readFileSync('src/index.css', 'utf8');

const requiredColors = ['#244B43', '#335C54', '#5B7A50', '#6E4735', '#462E22', '#E6C3A0', '#C5A78B'];
for (const hex of requiredColors) {
  if (!tailwindConfig.toUpperCase().includes(hex) && !indexCss.toUpperCase().includes(hex)) {
    console.error(`Missing required color hex: ${hex}`);
    process.exit(1);
  }
}

if (!indexCss.includes('@media print') || !indexCss.includes('1in')) {
  console.error('Missing @media print or 1in margin styling in src/index.css');
  process.exit(1);
}

if (!indexCss.includes('.bento-card') || !indexCss.includes('.bento-card-forest')) {
  console.error('Missing Bento surface classes in src/index.css');
  process.exit(1);
}

console.log('PASS: Theme palette, Bento classes, and print styles verified.');
```

- [ ] **Step 2: Run verification script to confirm it fails**

Run: `mkdir -p .agent/tmp && node .agent/tmp/verify-theme.js`
Expected: FAIL with `Missing required color hex: #244B43`

- [ ] **Step 3: Implement `tailwind.config.js` and `src/index.css`**

Update `tailwind.config.js` with the earthy color tokens (`forest-deep: '#244B43'`, `forest-pine: '#335C54'`, `sage-earthy: '#5B7A50'`, `terracotta: '#6E4735'`, `espresso: '#462E22'`, `sand-beige: '#E6C3A0'`, `sand-muted: '#C5A78B'`, `canvas-warm: '#F6F1EA'`, `canvas-tonal: '#EDE3D5'`) and update `src/index.css` with tactile Bento card classes (`16px–20px` border radius, soft drop shadows, subtle inner highlights, textured tonal blocks) and `@media print` / `@page { margin: 1in; }` rules.

- [ ] **Step 4: Run verification script to confirm it passes**

Run: `node .agent/tmp/verify-theme.js`
Expected: `PASS: Theme palette, Bento classes, and print styles verified.`

- [ ] **Step 5: Commit (if `auto_commit` enabled)**

Check `.agent/config.yml` for `auto_commit` setting. If `auto_commit: false`, print: `"Skipping git operation (auto_commit: false)."`

---

### Task 2: Create Reusable Full-Screen `LightboxModal` Component

**Files:**
- Create: `src/components/LightboxModal.jsx`
- Test: `.agent/tmp/verify-lightbox.js`

- [ ] **Step 1: Write the failing verification script**

Create `.agent/tmp/verify-lightbox.js`:
```js
// .agent/tmp/verify-lightbox.js
import fs from 'node:fs';

if (!fs.existsSync('src/components/LightboxModal.jsx')) {
  console.error('Missing src/components/LightboxModal.jsx');
  process.exit(1);
}

const content = fs.readFileSync('src/components/LightboxModal.jsx', 'utf8');
if (!content.includes('Escape') || !content.includes('onClose')) {
  console.error('LightboxModal missing Escape key handler or onClose prop');
  process.exit(1);
}

console.log('PASS: LightboxModal component verified.');
```

- [ ] **Step 2: Run verification script to confirm it fails**

Run: `node .agent/tmp/verify-lightbox.js`
Expected: FAIL with `Missing src/components/LightboxModal.jsx`

- [ ] **Step 3: Implement `src/components/LightboxModal.jsx`**

Create `src/components/LightboxModal.jsx` supporting `{ item, onClose }` where `item` has `{ src, title, subtitle, tag }`, with Escape key close, backdrop click close, zoom-in/fit toggle, and `print:hidden` class.

- [ ] **Step 4: Run verification script to confirm it passes**

Run: `node .agent/tmp/verify-lightbox.js`
Expected: `PASS: LightboxModal component verified.`

- [ ] **Step 5: Commit (if `auto_commit` enabled)**

Check `.agent/config.yml` for `auto_commit` setting. If `auto_commit: false`, print: `"Skipping git operation (auto_commit: false)."`

---

### Task 3: Implement Sticky Top Navigation & 11-Section Quick-Jump Table of Contents

**Files:**
- Create: `src/constants/sections.js`
- Modify: `src/components/Navigation.jsx`
- Modify: `src/components/TableOfContents.jsx`
- Test: `.agent/tmp/verify-nav-toc.js`

- [ ] **Step 1: Write the failing verification script**

Create `.agent/tmp/verify-nav-toc.js`:
```js
// .agent/tmp/verify-nav-toc.js
import fs from 'node:fs';

if (!fs.existsSync('src/constants/sections.js')) {
  console.error('Missing src/constants/sections.js');
  process.exit(1);
}

const sectionsFile = fs.readFileSync('src/constants/sections.js', 'utf8');
const navFile = fs.readFileSync('src/components/Navigation.jsx', 'utf8');
const tocFile = fs.readFileSync('src/components/TableOfContents.jsx', 'utf8');

for (let i = 1; i <= 11; i++) {
  if (!sectionsFile.includes(`section-${i}`)) {
    console.error(`Missing section-${i} in src/constants/sections.js`);
    process.exit(1);
  }
}

if (!navFile.includes('Virginia B. Loyola') && !tocFile.includes('Virginia B. Loyola')) {
  console.error('Missing instructor Virginia B. Loyola, MIT in Navigation or TOC');
  process.exit(1);
}

console.log('PASS: 11 sections, sticky Navigation, and TableOfContents verified.');
```

- [ ] **Step 2: Run verification script to confirm it fails**

Run: `node .agent/tmp/verify-nav-toc.js`
Expected: FAIL with `Missing src/constants/sections.js`

- [ ] **Step 3: Implement `src/constants/sections.js`, `src/components/Navigation.jsx`, and `src/components/TableOfContents.jsx`**

Create `src/constants/sections.js` exporting `PORTFOLIO_SECTIONS` (all 11 required sections with route path, hash anchor `#section-1` to `#section-11`, number `01`–`11`, title, subtitle, and category). Update `Navigation.jsx` with a sticky top bar (`sticky top-0 z-50`), route links, an interactive **"11 Sections Quick-Jump"** dropdown menu, and a **"Print / PDF"** button. Update `TableOfContents.jsx` (`#section-2`) with a Bento-grid directory of all 11 sections tailored for Instructor **Virginia B. Loyola, MIT**.

- [ ] **Step 4: Run verification script to confirm it passes**

Run: `node .agent/tmp/verify-nav-toc.js`
Expected: `PASS: 11 sections, sticky Navigation, and TableOfContents verified.`

- [ ] **Step 5: Commit (if `auto_commit` enabled)**

Check `.agent/config.yml` for `auto_commit` setting. If `auto_commit: false`, print: `"Skipping git operation (auto_commit: false)."`

---

### Task 4: Implement Editorial Split-Layout Hero, 4-Icon Forest Feature Strip & 3-Column Tonal Grid

**Files:**
- Modify: `src/components/Hero.jsx`
- Test: `.agent/tmp/verify-hero.js`

- [ ] **Step 1: Write the failing verification script**

Create `.agent/tmp/verify-hero.js`:
```js
// .agent/tmp/verify-hero.js
import fs from 'node:fs';

const hero = fs.readFileSync('src/components/Hero.jsx', 'utf8');

const requiredStrings = [
  'section-1',
  'Explore Portfolio',
  'Virginia B. Loyola, MIT',
  '#244B43',
  '#5B7A50',
  '#462E22',
  '#E6C3A0',
];

for (const str of requiredStrings) {
  if (!hero.includes(str)) {
    console.error(`Hero.jsx missing required element/token: ${str}`);
    process.exit(1);
  }
}

console.log('PASS: Hero split-layout, feature strip, and 3-column grid verified.');
```

- [ ] **Step 2: Run verification script to confirm it fails**

Run: `node .agent/tmp/verify-hero.js`
Expected: FAIL with `Hero.jsx missing required element/token: section-1`

- [ ] **Step 3: Implement `src/components/Hero.jsx`**

Update `src/components/Hero.jsx` with:
1. Editorial split-layout hero banner (`#section-1`): bold clean sans-serif display typography on the left, concise subtitle/intro, warm beige (`#E6C3A0`) pill-shaped CTA button (`Explore Portfolio`), and decorative botanical/geometric layered visual accents on the right framing `/profile.jpg` (clickable in Lightbox).
2. Dark forest-green (`#244B43`) horizontal rounded container with 4 minimalist line-art icons and summaries for quick navigation/highlights.
3. 3-column grid of rounded square cards in alternating sage green (`#5B7A50`), dark espresso (`#462E22`), and warm tan (`#E6C3A0`/`#C5A78B`) tones with centered circular icon badges.

- [ ] **Step 4: Run verification script to confirm it passes**

Run: `node .agent/tmp/verify-hero.js`
Expected: `PASS: Hero split-layout, feature strip, and 3-column grid verified.`

- [ ] **Step 5: Commit (if `auto_commit` enabled)**

Check `.agent/config.yml` for `auto_commit` setting. If `auto_commit: false`, print: `"Skipping git operation (auto_commit: false)."`

---

### Task 5: Update `StudentProfile`, `CourseOverview`, `Portfolio`, `Reflections`, `HobbiesAndTrainings`, and `Resume` with Bento Aesthetics, Section Anchors (`#section-3` to `#section-11`), and Lightbox Integration

**Files:**
- Modify: `src/components/StudentProfile.jsx`
- Modify: `src/components/CourseOverview.jsx`
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/components/Reflections.jsx`
- Modify: `src/components/HobbiesAndTrainings.jsx`
- Modify: `src/components/Resume.jsx`
- Modify: `src/App.jsx`
- Test: `.agent/tmp/verify-all-sections.js`

- [ ] **Step 1: Write the failing verification script**

Create `.agent/tmp/verify-all-sections.js`:
```js
// .agent/tmp/verify-all-sections.js
import fs from 'node:fs';

const files = [
  'src/App.jsx',
  'src/components/Hero.jsx',
  'src/components/TableOfContents.jsx',
  'src/components/StudentProfile.jsx',
  'src/components/CourseOverview.jsx',
  'src/components/Portfolio.jsx',
  'src/components/Reflections.jsx',
  'src/components/HobbiesAndTrainings.jsx',
  'src/components/Resume.jsx',
];

const combined = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

for (let i = 1; i <= 11; i++) {
  if (!combined.includes(`id="section-${i}"`)) {
    console.error(`Missing id="section-${i}" across components`);
    process.exit(1);
  }
}

if (!combined.includes('LightboxModal')) {
  console.error('Missing LightboxModal integration in App.jsx');
  process.exit(1);
}

console.log('PASS: All 11 section IDs and LightboxModal integration verified.');
```

- [ ] **Step 2: Run verification script to confirm it fails**

Run: `node .agent/tmp/verify-all-sections.js`
Expected: FAIL with `Missing id="section-2" across components` (or `id="section-3"`)

- [ ] **Step 3: Implement updates across all section components and `src/App.jsx`**

- `StudentProfile.jsx`: Anchor `id="section-3"`, Bento-grid layout in forest, sage, espresso, and tan surfaces.
- `CourseOverview.jsx`: Anchor `id="section-4"`, Bento-grid specifications, interactive Prelim/Midterm/Final syllabus tabs on screen plus full 3-term print view (`hidden print:block`).
- `Portfolio.jsx`: Anchors `id="section-5"` (Prelim Period Outputs), `id="section-6"` (Midterm Period Outputs), `id="section-7"` (Final Period Outputs & SDG Case Study), Bento cards with screenshot previews and `onOpenLightbox` handler.
- `Reflections.jsx`: Anchor `id="section-8"`, 3 alternating Bento cards (Sage `#5B7A50`, Espresso `#462E22`, Tan `#E6C3A0`) with circular icon badges.
- `HobbiesAndTrainings.jsx`: Anchors `id="section-9"` (Trainings, Seminars, Hackathons & Leadership) and `id="section-10"` (Certificates & Technical Credentials), plus Creative Pursuits (3D Blender & Dance) with `onOpenLightbox` on every image.
- `Resume.jsx`: Anchor `id="section-11"`, CV overview, download button, Hobbies summary card, and clickable full-screen Lightbox trigger on `/assets/resume/resume.jpg`.
- `App.jsx`: Connect `LightboxModal`, hash-scroll listener, earthy layered background, wide Bento layout (`max-w-6xl`), and `hidden print:block` full-portfolio print layout rendering all 11 sections sequentially.

- [ ] **Step 4: Run verification script, linter, and production build**

Run: `node .agent/tmp/verify-all-sections.js && npm run lint && npm run build && rm -rf .agent/tmp`
Expected: `PASS`, 0 lint errors, successful Vite production build, and `.agent/tmp` cleaned up.

- [ ] **Step 5: Commit (if `auto_commit` enabled)**

Check `.agent/config.yml` for `auto_commit` setting. If `auto_commit: false`, print: `"Skipping git operation (auto_commit: false)."`
