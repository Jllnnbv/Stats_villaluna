import React, { useState } from 'react';
// src/components/Portfolio.jsx
import {
  FileText,
  ClipboardList,
  BarChart3,
  Maximize2,
  TrendingUp,
  PieChart,
  Calculator,
  ExternalLink,
  Download,
  ChevronDown,
  ChevronUp,
  Filter,
  FolderOpen,
} from 'lucide-react';

const Portfolio = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [collapsedBreakdowns, setCollapsedBreakdowns] = useState({});

  const toggleBreakdown = (title) => {
    setCollapsedBreakdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const portfolioData = [
    // =========================================================
    // SECTION 05: PRELIMS
    // =========================================================
    {
      term: 'Prelims',
      category: 'Lab Activities',
      type: 'Laboratory Activity',
      code: 'PT1.1',
      statusBadge: 'Excel Formula View',
      title: 'Prelim Activity No. 1: Grouped Frequency Distribution Table',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Organized raw categorical and numerical datasets into structured grouped frequency distribution tables using Excel formulas for range, class width, class limits, boundaries, and frequency counts.',
      tags: ['Frequency Distribution', 'Class Limits', 'Excel Formulas', 'PT1.1'],
      icon: <BarChart3 size={15} />,
      image: '/assets/statistics/PRELIM ACTIVITY NO.1 GROUPED FREQUENCY DISTRIBUTION TABLE.png',
      breakdown: {
        problem:
          'Problem 1: Categorical raw dataset (Classes A, H, M, S; n = 40). Problem 2: Quantitative raw dataset (n = 32, values from 77 to 123) organized into 7 classes.',
        formulaOrSteps:
          'Excel Formulas: =MIN(A4:A35) → 77 | =MAX(A4:A35) → 123 | Width =ROUND((D6-D5)/7, 0) → 7 | Boundaries =F4-0.5 & =G4+0.5 | Frequencies =COUNTIF(...) & =SUM(L4:L10) → 32',
        interpretation:
          'Class 98–104 (boundaries 97.5–104.5) holds the highest concentration with f = 14 (43.75% of observations).',
      },
    },
    {
      term: 'Prelims',
      category: 'Lab Activities',
      type: 'Laboratory Activity',
      code: 'PT1.2',
      statusBadge: 'Excel Formula View',
      title: 'Prelim Activity No. 2: Organizing Data — Grouped Distribution',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Constructed complete frequency distribution tables from raw datasets, computing class boundaries, percentage distributions, and cumulative frequencies to reveal data dispersion.',
      tags: ['Data Organization', 'Relative Percent', 'Cumulative Frequency', 'PT1.2'],
      icon: <BarChart3 size={15} />,
      image: '/assets/statistics/PRELIM ACTIVITY NO.2_ORGANIZING DATA_ GROUPED FREQUENCY DISTRIBUTION.png',
      breakdown: {
        problem:
          'Organize n = 30 raw numerical observations ranging from 746 to 780 into a 5-class grouped frequency distribution table (width i = 7).',
        formulaOrSteps:
          'Classes: 746–752 (f=4, 13.33%, cf=4), 753–759 (f=6, 20.00%, cf=10), 760–766 (f=8, 26.67%, cf=18), 767–773 (f=3, 10.00%, cf=21), 774–780 (f=9, 30.00%, cf=30) | Excel: =H3/$H$8, =SUM(H3:H7)',
        interpretation:
          '56.67% of observations fall within 760–766 (26.67%) and 774–780 (30.00%), totaling 100.00% across n = 30.',
      },
    },
    {
      term: 'Prelims',
      category: 'Lab Activities',
      type: 'Laboratory Activity',
      code: 'PT1.3',
      statusBadge: 'Charts & Formulas',
      title: 'Prelim Activity No. 3: Statistical Charts & Graphical Presentation',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Constructed and analyzed core statistical charts—histograms, frequency polygons, and cumulative frequency ogives—to visually model data concentration and distribution shapes.',
      tags: ['Histogram', 'Frequency Polygon', 'Ogive', 'PT1.3'],
      icon: <PieChart size={15} />,
      image: '/assets/statistics/PRELIM ACTIVITY NO.3 STATISTICAL CHART.png',
      breakdown: {
        problem:
          'Construct a Histogram, Frequency Polygon, and Cumulative Frequency Ogive for n = 108 observations across 5 intervals (90–98 to 126–134).',
        formulaOrSteps:
          'Midpoints =(A2+B2)/2 → 94, 103, 112, 121, 130 | Boundaries: 89.5–98.5 to 125.5–134.5 | Frequencies: 6, 22, 43, 28, 9 | Cumulative Frequencies (cf): 6, 28, 71, 99, 108',
        interpretation:
          'The Histogram and Polygon reveal a nearly symmetrical bell-shaped distribution peaking at midpoint 112 (f = 43), while the Ogive tracks cumulative growth to N = 108.',
      },
    },
    {
      term: 'Prelims',
      category: 'Quizzes',
      type: 'Written Work / Quiz',
      code: 'WW1',
      statusBadge: 'Completed on LMS',
      title: 'Prelim Quiz No. 1: Concepts, Variables, Data Types & Sampling',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Assessed understanding of descriptive vs. inferential statistics, qualitative vs. quantitative variables, continuous vs. discrete data, and probability sampling methods.',
      tags: ['Prelim Quiz 1', 'Variables', 'Sampling Techniques', 'WW1'],
      icon: <ClipboardList size={15} />,
      image: '/assets/statistics/ITC C601 PRELIM QUIZ NO.1.png',
      breakdown: {
        problem:
          'Wayground / Canvas LMS Prelim Week 6 assessment on descriptive vs. inferential statistics, variable classification, levels of measurement, and sampling.',
        formulaOrSteps:
          'Evaluated random, systematic, stratified, and cluster probability sampling scenarios alongside qualitative vs. quantitative data types.',
        interpretation:
          'Established conceptual accuracy before transitioning to computational grouped frequency distributions.',
      },
    },
    {
      term: 'Prelims',
      category: 'Quizzes',
      type: 'Written Work / Quiz',
      code: 'WW2',
      statusBadge: 'Score: 14 / 25',
      title: 'Prelim Quiz No. 2: Frequency Distribution & Statistical Graphs',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Demonstrated proficiency in identifying extremes, calculating class boundaries, class widths, and interpreting distribution graphs under timed evaluation.',
      tags: ['Prelim Quiz 2', 'Distribution Calculations', 'WW2'],
      icon: <ClipboardList size={15} />,
      image: '/assets/statistics/ITC C601_ PRELIM QUIZ NO.2.png',
      breakdown: {
        problem:
          'Given 18 raw data values (32, 47, 51, 41, 46, 30, 46, 38, 34, 34, 52, 48, 48, 38, 43, 41, 21, 24) with 5 required classes, determine HV, LV, range, class width, and table entries.',
        formulaOrSteps:
          'Identified Highest Value (HV) = 52 and Lowest Value (LV) = 21 (2/2 pts) | Range R = 52 - 21 = 31 | Class Width i = ceil(31 / 5) = 7',
        interpretation:
          'Scored 14 / 25 in 20:02, reinforcing accuracy in identifying extremes and class boundaries under timed conditions.',
      },
    },
    {
      term: 'Prelims',
      category: 'Projects',
      type: 'Term Project',
      code: 'P1',
      statusBadge: '6-Class Dataset (n=50)',
      title: 'Prelim Project (P1): Counties & Parishes Statistical Distribution',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Applied descriptive statistical methods to analyze the distribution of Counties, Divisions, or Parishes across all 50 US states, paired with Histogram, Polygon, and Ogive charts.',
      tags: ['Prelim Project', 'US 50 States', 'Project P1'],
      icon: <TrendingUp size={15} />,
      image: '/assets/statistics/ITC C601 PRELIM PROJECT.png',
      breakdown: {
        problem:
          'Analyze the number of Counties, Divisions, or Parishes across all 50 US States (raw values from 3 to 254) using a 6-class Grouped Frequency Table and 3 statistical charts.',
        formulaOrSteps:
          'Classes: 3–44 (f=19, 38.0%, cf=19), 45–86 (f=17, 34.0%, cf=36), 87–128 (f=12, 24.0%, cf=48), 129–170 (f=1, 2.0%, cf=49), 171–212 (f=0, 0.0%, cf=49), 213–254 (f=1, 2.0%, cf=50)',
        interpretation:
          '96% of US states (48 of 50) have between 3 and 128 counties, with a strong positive (right) skew caused by outlier states like Texas (254 counties).',
      },
    },
    {
      term: 'Prelims',
      category: 'Exams',
      type: 'Major Examination',
      code: 'PE',
      statusBadge: 'Score: 42 / 45 (93.3%)',
      title: 'Prelim Examination: ITC C601 Summative Assessment',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Comprehensive preliminary examination covering statistical theory, data collection methods, sampling techniques, grouped frequency tables, and chart interpretation.',
      tags: ['Prelim Exam', 'Summative Assessment', 'ITC C601', 'PE'],
      icon: <FileText size={15} />,
      image: '/assets/statistics/ITC C601 PRELIM EXAMINATION.png',
      breakdown: {
        problem:
          'Summative Prelim Examination covering Part I (Theory & Concepts) and Part II (Frequency Distribution & Graphical Analysis).',
        formulaOrSteps:
          'Distinguished descriptive statistics (summarizing 120 student responses without generalization) from inferential statistics (generalizing from a sample to a population).',
        interpretation:
          'Achieved 42 / 45 points (93.33%) in 26 minutes 49 seconds.',
      },
    },

    // =========================================================
    // SECTION 06: MIDTERMS
    // =========================================================
    {
      term: 'Midterms',
      category: 'Seatworks',
      type: 'Seatwork Task',
      code: 'PT2.1',
      statusBadge: 'Score: 18 pts',
      title: 'Midterm Seatwork No. 1: Grouped Mean & Median Computation',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Handwritten computation evaluating the grouped arithmetic mean and grouped median using cumulative frequencies, lower class boundaries, and class interval width.',
      tags: ['Grouped Mean', 'Grouped Median', 'Seatwork', 'PT2.1'],
      icon: <Calculator size={15} />,
      image: '/assets/statistics/Midterms_Seatwork_1.jpg',
      downloadFile: '/assets/statistics/Midterms Seatwork #1.heic',
      breakdown: {
        problem:
          'Compute the Grouped Mean and Grouped Median for a 5-class frequency distribution (1–10: f=8, 11–20: f=14, 21–30: f=12, 31–40: f=9, 41–50: f=7; n = 50).',
        formulaOrSteps:
          'Mean: x̄ = (∑f · Xm) / n = 1,205 / 50 = 24.1 (24.5) | Median: n/2 = 25, Lm = 20.5, F = 22, fm = 12, i = 10 → Md = 21.5 + [(25 - 22) / 12] × 10 = 24',
        interpretation:
          'The grouped mean and median both center around 24 within the 21–30 modal/median class (Graded: 18 pts).',
      },
    },
    {
      term: 'Midterms',
      category: 'Lab Activities',
      type: 'Laboratory Activity',
      code: 'PT2.2',
      statusBadge: 'Dual Dataset Lab',
      title: 'Midterm Activity No. 1: Central Tendency for Grouped Data',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Calculated grouped arithmetic mean using frequency midpoints (f · Xm) and grouped median using the interpolation formula across two full multi-class datasets.',
      tags: ['Grouped Mean', 'Grouped Median', 'Interpolation', 'PT2.2'],
      icon: <Calculator size={15} />,
      image: '/assets/statistics/Midterm Activity No.1 - Measures of Central Tendency Grouped Data.png',
      breakdown: {
        problem:
          'Solve for the Grouped Mean and Grouped Median of two grouped datasets: Dataset A (n = 30, boundaries 7.5–32.5) and Dataset B (n = 100, limits 150–212).',
        formulaOrSteps:
          'Dataset A (n=30): x̄ = 590 / 30 = 19.67 | Median = 17.5 + [(15 - 8) / 15] × 5 = 19.83. Dataset B (n=100): x̄ = 18,026 / 100 = 180.26 | Median = 176.5 + [(50 - 41) / 21] × 9 = 180.36',
        interpretation:
          'In both datasets, the grouped mean and median are closely aligned (19.67 vs. 19.83 and 180.26 vs. 180.36), indicating near-symmetrical distributions.',
      },
    },
    {
      term: 'Midterms',
      category: 'Seatworks',
      type: 'Seatwork Task',
      code: 'PT2.3',
      statusBadge: 'Score: 10 / 10',
      title: 'Midterm Seatwork No. 2: Grouped Mode Formula Exercise',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Applied the grouped mode interpolation formula using modal class lower boundaries and adjacent frequency differences (Δ1 and Δ2).',
      tags: ['Grouped Mode', 'Modal Class', 'Seatwork', 'PT2.3'],
      icon: <Calculator size={15} />,
      image: '/assets/statistics/Midterms_Seatwork_2.jpg',
      downloadFile: '/assets/statistics/Midterms Seatwork #2.heic',
      breakdown: {
        problem:
          'Calculate the Mode for Grouped Data given modal lower boundary Lmo = 17.5, frequency differences Δ1 = 10 and Δ2 = 10, and class width i = 5.',
        formulaOrSteps:
          'Δ1 = 15 - 5 = 10 | Δ2 = 15 - 5 = 10 | i = 5 | Mode = Lmo + [Δ1 / (Δ1 + Δ2)] × i = 17.5 + [10 / (10 + 10)] × 5 = 17.5 + (0.5 × 5) = 20',
        interpretation:
          'Because Δ1 = Δ2 = 10, the mode sits exactly at the midpoint (20) of the modal class 17.5–22.5 (Score: 10 / 10).',
      },
    },
    {
      term: 'Midterms',
      category: 'Lab Activities',
      type: 'Laboratory Activity',
      code: 'PT2.4',
      statusBadge: 'Completed Lab',
      title: 'Midterm Activity No. 2: Mode of Grouped Data (Dataset B)',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Identified the modal class for Dataset B (n = 100) and solved for the grouped mode using frequency difference ratios to evaluate distribution symmetry.',
      tags: ['Grouped Mode', 'Modal Class', 'Symmetry', 'PT2.4'],
      icon: <BarChart3 size={15} />,
      image: '/assets/statistics/Midterm Activity No.2 - MODE Grouped Data.png',
      breakdown: {
        problem:
          'Determine the Grouped Mode for Dataset B (n = 100, modal class 177–185 with f = 21, flanked by f = 20 in adjacent classes).',
        formulaOrSteps:
          'Lb = 176.5 | Δ1 = 21 - 20 = 1 | Δ2 = 21 - 20 = 1 | i = 185.5 - 176.5 = 9 | Mode = 176.5 + [1 / (1 + 1)] × 9 = 176.5 + (0.5)(9) = 176.5 + 4.5 = 181',
        interpretation:
          'Combining Dataset B’s Mean (180.26), Median (180.36), and Mode (181) confirms a highly balanced, unimodal distribution centered around 180–181.',
      },
    },
    {
      term: 'Midterms',
      category: 'Quizzes',
      type: 'Written Work / Quiz',
      code: 'WW3',
      statusBadge: 'Submitted on LMS',
      title: 'Midterm Quiz: Measures of Central Tendency',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Evaluated computational accuracy in mean, median, mode, and comparative metric selection across ungrouped and grouped datasets.',
      tags: ['Midterm Quiz', 'Central Tendency', 'WW3'],
      icon: <ClipboardList size={15} />,
      image: '/assets/statistics/ITC C601 MIDTERM QUIZ - MEASURES OF CENTRAL TENDENCY.png',
      breakdown: {
        problem:
          'Midterm Week 7–8 Quiz assessing computational mastery of Mean, Median, and Mode across ungrouped and grouped datasets.',
        formulaOrSteps:
          'Submitted via Microsoft Forms / Canvas LMS (2627_1S_COL_ITC C601-101BA) on September 22, 2026.',
        interpretation:
          'Validated formula selection and interpolation accuracy ahead of the Midterm Project and Examination.',
      },
    },
    {
      term: 'Midterms',
      category: 'Projects',
      type: 'Term Project',
      code: 'P2',
      statusBadge: '6 Case Evaluations',
      title: 'Midterm Project (P2): Central Tendency Selection Analysis',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Analyzed real-world quantitative and categorical scenarios to determine and justify whether Mean, Median, or Mode best represents each dataset.',
      tags: ['Midterm Project', 'Case Analysis', 'Project P2'],
      icon: <TrendingUp size={15} />,
      image: '/assets/statistics/ITC C601 MIDTERM PROJECT.png',
      breakdown: {
        problem:
          'Evaluate 6 real-world statistical statements (Items A–F) and justify whether the Mean, Median, or Mode was applied in each situation.',
        formulaOrSteps:
          'A ($5.37/hr 50-50 wage split) → Median | B (1.8 children/family) → Mean | C (Red convertibles preference) → Mode | D (Cutting lawn once a week) → Mode | E (Most common fear) → Mode | F (42.3 yrs professor age) → Mean',
        interpretation:
          'Demonstrated how data scale (categorical vs. numerical) and distribution properties determine the appropriate measure of central tendency.',
      },
    },
    {
      term: 'Midterms',
      category: 'Exams',
      type: 'Major Examination',
      code: 'ME',
      statusBadge: 'Submitted on LMS',
      title: 'Midterm Examination: ITC C601 Summative Assessment',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Summative examination testing mastery of ungrouped and grouped central tendency, variance, standard deviation, and statistical inference.',
      tags: ['Midterm Exam', 'Major Assessment', 'ITC C601', 'ME'],
      icon: <FileText size={15} />,
      image: '/assets/statistics/ITC C601 MIDTERM EXAMS SY2526.png',
      breakdown: {
        problem:
          'Midterm Week 12 Summative Examination covering ungrouped and grouped measures of central tendency and dispersion.',
        formulaOrSteps:
          'Completed and submitted via Canvas LMS / Microsoft Forms (COL_ITC C601_DEV) on October 5, 2026.',
        interpretation:
          'Synthesized all Weeks 7–12 analytical competencies for business dataset evaluation.',
      },
    },

    // =========================================================
    // SECTION 07: FINALS
    // =========================================================
    {
      term: 'Finals',
      category: 'Seatworks',
      type: 'Seatwork Task',
      code: 'PT3.1',
      statusBadge: 'Score: 10 / 10',
      title: 'Final Term Seatwork No. 1: Measures of Position (Percentile Ranks)',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Computed percentile ranks and percentile position indices to determine the relative standing of observations within ordered statistical distributions.',
      tags: ['Percentile Rank', 'Position Index', 'Seatwork', 'PT3.1'],
      icon: <Calculator size={15} />,
      image: '/assets/statistics/Finals_Seatwork_1.jpg',
      downloadFile: '/assets/statistics/Finals Seatwork #1.heic',
      breakdown: {
        problem:
          'Calculate (1) the percentile rank of score 8 in a 10-item dataset, and (2) the position index c for the 50th percentile.',
        formulaOrSteps:
          '1. Percentile = [(values below x + 0.5) / n] × 100 = [(4 + 0.5) / 10] × 100 = 45th percentile | 2. c = (n · p) / 100 = (10 · 50) / 100 = 5',
        interpretation:
          'Score 8 ranks at the 45th percentile, while the 50th percentile falls at the 5th ordered observation (Score: 10 / 10).',
      },
    },
    {
      term: 'Finals',
      category: 'Seatworks',
      type: 'Seatwork Task',
      code: 'PT3.2',
      statusBadge: 'Score: 8/10 & 10/10',
      title: 'Final Term Seatwork No. 2: Normal Curve Area & z-Score Drills',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Sketched standard normal curves and computed exact probability areas between specified negative and positive z-score intervals.',
      tags: ['Normal Curve', 'z-Score Area', 'Seatwork', 'PT3.2'],
      icon: <Calculator size={15} />,
      image: '/assets/statistics/Finals_Seatwork_2.jpg',
      downloadFile: '/assets/statistics/Finals Seatwork #2.heic',
      breakdown: {
        problem:
          'Find the area under the standard normal distribution curve (1) between z = 0 and z = -0.32, and (2) between z = 1.23 and z = 1.90.',
        formulaOrSteps:
          '1. P(-0.32 < z < 0): 0.5000 - 0.3745 = 0.1255 (12.55%) | 2. P(1.23 < z < 1.90): 0.9713 - 0.8907 = 0.0806 (8.06%)',
        interpretation:
          'Shaded standard normal bell curves illustrate exact probability slices between z-boundaries (Graded: 8/10 & 10/10).',
      },
    },
    {
      term: 'Finals',
      category: 'Lab Activities',
      type: 'Laboratory Activity',
      code: 'PT3.4',
      statusBadge: '3-Part Normal Curve Lab',
      title: 'Final Term Activity No. 2: Application of Normal Distribution',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Modeled real-world business probability scenarios using the standard normal distribution curve, calculating standard z-scores and cumulative areas under the curve.',
      tags: ['Normal Distribution', 'z-Scores', 'Probability', 'PT3.4'],
      icon: <TrendingUp size={15} />,
      image: '/assets/statistics/FINAL TERM ACTIVITY NO.2 - APPLICATION OF NORMAL DISTRIBUTION.png',
      breakdown: {
        problem:
          'Part 1: Compute 5 normal curve probabilities. Part 2: Find z-scores from 3 given areas. Part 3: Given μ = 23.5 min and σ = 3.6 min, find the probability between 15 and 22 minutes.',
        formulaOrSteps:
          'Part 1: a) 47.50%, b) 24.86%, c) 39.07%, d) 42.36%, e) 20.61% | Part 2: a) z = 1.32, b) z = 1.98, c) z = -1.26 | Part 3: z1 = (15-23.5)/3.6 = -2.36, z2 = (22-23.5)/3.6 = -0.42 → P = 0.3372 - 0.0091 = 0.3281 (32.81%)',
        interpretation:
          '32.81% of observations occur between 15 and 22 minutes, demonstrating practical z-score standardization in operational time analysis.',
      },
    },
    {
      term: 'Finals',
      category: 'Projects',
      type: 'Capstone Project',
      code: 'P3.1 / P3.2',
      statusBadge: 'Portfolio Capstone',
      title: 'Final Term Project & e-Portfolio Submission (P3.1 / P3.2)',
      institution: 'ITC C601 – Statistics for Business Analytics',
      description:
        'Compiled complete semester portfolio documenting statistical techniques—data collection, frequency tables, visual charts, central tendency, dispersion, percentile ranks, and normal curve modeling—aligned with UN SDGs.',
      tags: ['Capstone Submission', 'UN SDG Analysis', 'P3.1', 'P3.2'],
      icon: <FileText size={15} />,
      image: '/assets/statistics/ITC C601 MIDTERM PROJECT.png',
      breakdown: {
        problem:
          'Compile all semester statistical outputs (PT1.1–PT3.4, WW1–WW3, P1–P3, PE–ME) into an interactive 11-section Student Class E-Portfolio.',
        formulaOrSteps:
          'Integrates frequency tables, statistical charts, central tendency, dispersion, percentile ranks, and normal curve modeling with full-screen inspection.',
        interpretation:
          'Fulfills P3.1 / P3.2 Final Term Capstone requirements for ITC C601 Statistics for Business Analytics.',
      },
    },
  ];

  const categoryTabs = [
    { id: 'All', label: 'All Works', count: portfolioData.length },
    {
      id: 'Lab Activities',
      label: 'Lab Activities',
      count: portfolioData.filter((item) => item.category === 'Lab Activities').length,
    },
    {
      id: 'Seatworks',
      label: 'Seatworks',
      count: portfolioData.filter((item) => item.category === 'Seatworks').length,
    },
    {
      id: 'Quizzes',
      label: 'Quizzes',
      count: portfolioData.filter((item) => item.category === 'Quizzes').length,
    },
    {
      id: 'Projects',
      label: 'Projects',
      count: portfolioData.filter((item) => item.category === 'Projects').length,
    },
    {
      id: 'Exams',
      label: 'Examinations',
      count: portfolioData.filter((item) => item.category === 'Exams').length,
    },
  ];

  const academicSections = [
    {
      id: 'section-5',
      number: '05',
      categoryKey: 'Seatworks',
      title: 'Classroom Activities and Exercises',
      subtitle:
        'Compiled classroom seat works and practice exercises covering central tendency, variation, and position ranks.',
      headerBadgeClass: 'bg-sage-earthy text-canvas-warm',
      bannerClass: 'bento-section-tonal',
    },
    {
      id: 'section-6',
      number: '06',
      categoryKey: 'Lab Activities',
      title: 'Laboratory Activities',
      subtitle:
        'Practical laboratory exercises containing activity numbers, problem statements, procedures, screenshots, and result explanations.',
      headerBadgeClass: 'bg-forest-deep text-sand-beige',
      bannerClass: 'bento-section-forest-tint',
    },
    {
      id: 'section-7',
      number: '07',
      categoryKey: 'Quizzes',
      title: 'Quizzes and Assessments',
      subtitle:
        'Completed written assessments, problem-solving quizzes, and verified knowledge evaluations across terms.',
      headerBadgeClass: 'bg-espresso text-sand-beige',
      bannerClass: 'bento-section-tonal',
    },
    {
      id: 'section-8',
      number: '08',
      categoryKey: 'Projects',
      title: 'Projects and Performance Tasks',
      subtitle:
        'Major individual and group performance tasks and UN SDG-aligned statistical problem analysis research.',
      headerBadgeClass: 'bg-terracotta text-canvas-warm',
      bannerClass: 'bento-section-tonal',
    },
    {
      id: 'section-9',
      number: '09',
      categoryKey: 'Exams',
      title: 'Examination Results',
      subtitle:
        'Official copies and documentation of preliminary and midterm summative examination performances.',
      headerBadgeClass: 'bg-forest-deep text-sand-beige',
      bannerClass: 'bento-section-forest-tint',
    },
  ];

  const totalMatchedCount =
    activeCategory === 'All'
      ? portfolioData.length
      : portfolioData.filter((item) => item.category === activeCategory).length;

  return (
    <div id='portfolio' className='space-y-6 animate-fade-in'>
      {/* Category Filter Toolbar (Screen Only) */}
      <div className='bento-card p-4 sm:p-5 space-y-3 print:hidden'>
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2.5'>
          <div className='flex items-center gap-2.5'>
            <div className='w-9 h-9 rounded-full bg-forest-deep text-sand-beige flex items-center justify-center shrink-0'>
              <FolderOpen size={16} strokeWidth={1.75} />
            </div>
            <div>
              <span className='inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta'>
                Official Coursework Directory • Sections 05–09
              </span>
              <h2 className='font-display text-sm sm:text-base font-extrabold text-espresso'>
                Filter Academic Outputs by Prescribed Section
              </h2>
            </div>
          </div>

          <div className='flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-forest-deep bg-canvas-tonal px-3 py-1 rounded-full self-start sm:self-center shrink-0'>
            <Filter size={12} />
            <span>
              Showing {totalMatchedCount} of {portfolioData.length} Files
            </span>
          </div>
        </div>

        <div
          role='tablist'
          aria-label='Filter portfolio items by category'
          className='flex flex-wrap gap-1.5'
        >
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type='button'
                role='tab'
                aria-selected={isActive}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-forest-deep text-sand-beige shadow-md scale-[1.02]'
                    : 'bg-canvas-tonal text-espresso hover:bg-sand-beige/60'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] ${
                    isActive
                      ? 'bg-sand-beige text-espresso'
                      : 'bg-canvas-warm text-terracotta'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sections 05 through 09 strictly aligned with Course Guide */}
      {academicSections.map((sec) => {
        const sectionItems = portfolioData.filter((item) => item.category === sec.categoryKey);
        const filteredItems =
          activeCategory === 'All' || activeCategory === sec.categoryKey
            ? sectionItems
            : [];

        if (filteredItems.length === 0) {
          return null;
        }

        return (
          <section
            key={sec.id}
            id={sec.id}
            aria-labelledby={`${sec.id}-heading`}
            className={`${sec.bannerClass} p-4 sm:p-5 space-y-4`}
          >
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-sand-muted/45'>
              <div>
                <span className='inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5'>
                  Section {sec.number} • Course Guide Requirement
                </span>
                <h3
                  id={`${sec.id}-heading`}
                  className='font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight'
                >
                  {sec.title}
                </h3>
                <p className='text-[11px] sm:text-xs text-espresso/80 font-medium mt-0.5'>
                  {sec.subtitle}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider self-start sm:self-center shrink-0 ${sec.headerBadgeClass}`}
              >
                {filteredItems.length} {filteredItems.length === 1 ? 'Artifact' : 'Artifacts'}
              </span>
            </div>

            <div className='grid grid-cols-1 gap-4'>
              {filteredItems.map((item) => {
                const isExpanded = !collapsedBreakdowns[item.title];
                const safeOpenUrl = encodeURI(item.image);
                const safeDownloadUrl = item.downloadFile
                  ? encodeURI(item.downloadFile).replace(/#/g, '%23')
                  : null;

                return (
                  <article
                    key={item.title}
                    className='bento-card p-4 sm:p-5 flex flex-col justify-between gap-3 group hover:-translate-y-0.5 transition-all duration-300'
                  >
                    <div className='space-y-2.5'>
                      {/* Top Meta Row: Type, Task Code, Status & Actions */}
                      <div className='flex flex-wrap items-center justify-between gap-2'>
                        <div className='flex flex-wrap items-center gap-1.5'>
                          <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-forest-deep text-sand-beige text-[9px] sm:text-[10px] font-bold uppercase tracking-wider'>
                            {item.icon}
                            <span>{item.type}</span>
                          </span>
                          <span className='px-2 py-0.5 rounded-full bg-terracotta text-canvas-warm text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider'>
                            {item.code}
                          </span>
                          <span className='px-2 py-0.5 rounded-full bg-sand-beige text-espresso text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider'>
                            {item.statusBadge}
                          </span>
                        </div>

                        <div className='print:hidden flex items-center gap-2'>
                          <a
                            href={safeOpenUrl}
                            target='_blank'
                            rel='noreferrer'
                            className='inline-flex items-center gap-1 text-[10px] font-bold text-sage-earthy hover:text-terracotta transition-colors'
                            title='Open image file in new tab'
                          >
                            <ExternalLink size={12} />
                            <span>Open File</span>
                          </a>

                          <button
                            type='button'
                            onClick={() =>
                              onOpenLightbox &&
                              onOpenLightbox({
                                src: item.image,
                                title: item.title,
                                subtitle: `${item.term} • ${item.type} (${item.code}) • ${item.statusBadge}`,
                                tag: `Section ${sec.number} • ${item.term}`,
                              })
                            }
                            className='inline-flex items-center gap-1 text-[10px] font-bold text-forest-deep hover:text-terracotta transition-colors'
                          >
                            <Maximize2 size={12} />
                            <span>Full Screen</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className='font-display text-sm sm:text-base font-extrabold text-espresso leading-snug'>
                          {item.title}
                        </h4>
                        <p className='text-[10px] font-bold text-terracotta mt-0.5'>
                          {item.institution}
                        </p>
                      </div>

                      <p className='text-[11px] sm:text-xs text-espresso/85 leading-relaxed font-medium'>
                        {item.description}
                      </p>

                      {item.image && (
                        <div
                          onClick={() =>
                            onOpenLightbox &&
                            onOpenLightbox({
                              src: item.image,
                              title: item.title,
                              subtitle: `${item.term} • ${item.type} (${item.code}) • ${item.statusBadge}`,
                              tag: `Section ${sec.number} • ${item.term}`,
                            })
                          }
                          className='relative rounded-[14px] overflow-hidden bento-tile p-2 cursor-zoom-in group/img'
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className='w-full h-48 sm:h-56 object-contain rounded-[10px] bg-white group-hover/img:scale-[1.02] transition-transform duration-300'
                          />
                          <div className='print:hidden absolute inset-0 bg-forest-deep/0 group-hover/img:bg-forest-deep/20 transition-colors flex items-center justify-center'>
                            <span className='opacity-0 group-hover/img:opacity-100 transition-opacity px-3 py-1 rounded-full bg-forest-deep text-sand-beige text-[11px] font-bold flex items-center gap-1.5 shadow-lg'>
                              <Maximize2 size={12} />
                              <span>Inspect Screenshot</span>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Structured Technical Breakdown Box */}
                      {item.breakdown && (
                        <div className='bento-tile p-3 space-y-2'>
                          <div className='flex items-center justify-between gap-2'>
                            <span className='text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-forest-deep'>
                              Technical Breakdown &amp; Computations
                            </span>
                            <div className='flex items-center gap-2 print:hidden'>
                              {safeDownloadUrl && (
                                <a
                                  href={safeDownloadUrl}
                                  download
                                  className='inline-flex items-center gap-1 text-[10px] font-bold text-terracotta hover:text-forest-deep transition-colors'
                                  title='Download original HEIC file'
                                >
                                  <Download size={12} />
                                  <span>HEIC</span>
                                </a>
                              )}
                              <button
                                type='button'
                                onClick={() => toggleBreakdown(item.title)}
                                aria-expanded={isExpanded}
                                className='inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-terracotta hover:text-forest-deep transition-colors'
                              >
                                <span>{isExpanded ? 'Hide' : 'Show'}</span>
                                {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                              </button>
                            </div>
                          </div>

                          <div className={`${isExpanded ? 'block' : 'hidden print:block'} space-y-1.5 pt-1.5 border-t border-sand-muted/30`}>
                            <div>
                              <p className='text-[9px] font-extrabold uppercase tracking-wider text-terracotta'>
                                Dataset &amp; Problem
                              </p>
                              <p className='text-[11px] text-espresso/90 font-medium leading-relaxed'>
                                {item.breakdown.problem}
                              </p>
                            </div>

                            <div>
                              <p className='text-[9px] font-extrabold uppercase tracking-wider text-forest-deep'>
                                Formulas &amp; Solution Steps
                              </p>
                              <p className='text-[10px] sm:text-[11px] text-espresso font-semibold font-mono bg-canvas-tonal/80 rounded-[10px] px-2.5 py-1.5 mt-0.5 leading-relaxed break-words'>
                                {item.breakdown.formulaOrSteps}
                              </p>
                            </div>

                            <div>
                              <p className='text-[9px] font-extrabold uppercase tracking-wider text-sage-earthy'>
                                Result &amp; Interpretation
                              </p>
                              <p className='text-[11px] text-espresso/90 font-medium leading-relaxed'>
                                {item.breakdown.interpretation}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className='flex flex-wrap gap-1.5 pt-2 border-t border-sand-muted/30'>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-canvas-tonal text-espresso font-bold'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Portfolio;
