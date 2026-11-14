import React, { useState } from 'react';
// src/components/CourseOverview.jsx
import {
  Book,
  GraduationCap,
  Clock,
  BarChart3,
  Calendar,
  ListChecks,
  Target,
  Award,
  Compass,
  FileSpreadsheet,
  CheckCircle2,
} from 'lucide-react';

const CourseOverview = () => {
  const [activeTab, setActiveTab] = useState('prelims');

  const courseDetails = [
    {
      label: 'Course Code & Title',
      value: 'ITC C601 – Statistics for Business Analytics',
      icon: <BarChart3 size={18} strokeWidth={1.75} />,
      tone: 'bg-forest-deep text-sand-beige',
    },
    {
      label: 'Credit Units & Hours',
      value: '3 Units Lecture • 3 Hours/Week',
      icon: <Clock size={18} strokeWidth={1.75} />,
      tone: 'bg-sage-earthy text-canvas-warm',
    },
    {
      label: 'Pre-Requisite',
      value: 'None',
      icon: <ListChecks size={18} strokeWidth={1.75} />,
      tone: 'bg-terracotta text-sand-beige',
    },
    {
      label: 'Course Instructor',
      value: 'Virginia B. Loyola, MIT',
      icon: <GraduationCap size={18} strokeWidth={1.75} />,
      tone: 'bg-espresso text-sand-beige',
    },
    {
      label: 'Department & College',
      value: 'IT Department • College of Computer Studies & Engineering',
      icon: <Book size={18} strokeWidth={1.75} />,
      tone: 'bg-forest-pine text-sand-beige',
    },
    {
      label: 'Academic Placement',
      value: '1st Semester, SY 2026–2027 • BSIT-101BA',
      icon: <Calendar size={18} strokeWidth={1.75} />,
      tone: 'bg-sand-beige text-espresso',
    },
  ];

  const courseLearningOutcomes = [
    {
      code: 'CLO 1',
      title: 'Descriptive Statistics Fundamentals',
      text: 'Describe the basic concepts and importance of descriptive statistics, variables, and levels of measurement.',
      mapping: 'SO: a, b, c',
    },
    {
      code: 'CLO 2',
      title: 'Central Tendency & Dispersion Calculation',
      text: 'Calculate measures of central tendency and dispersion for both ungrouped and grouped datasets.',
      mapping: 'SO: a, b, c, d, g, j',
    },
    {
      code: 'CLO 3',
      title: 'Statistical Dataset Analysis & Tools',
      text: 'Analyze datasets using appropriate descriptive statistical methods, graphical charts, normal curve modeling, and software tools.',
      mapping: 'SO: a, c, d, f, g, l',
    },
  ];

  const graduateAttributes = [
    { code: 'GA1', title: 'Critical & Creative Thinker', desc: 'Applies logical, disciplined analysis and evaluation to interpret information.' },
    { code: 'GA2', title: 'Effective Communicator & Collaborator', desc: 'Engages diverse stakeholders using quantitative data to build shared understanding.' },
    { code: 'GA3', title: 'Lifelong Learner', desc: 'Focuses on continuous personal, statistical, and professional development.' },
    { code: 'GA4', title: 'Ethical & Responsible Citizen', desc: 'Practices high ethical standards and social responsibility aligned with UN SDGs.' },
    { code: 'GA5', title: 'Professionally Competent', desc: 'Demonstrates broad knowledge, skills, and statistical computing competencies.' },
    { code: 'GA6', title: 'Technology-enabled Professional', desc: 'Utilizes modern software packages, data analysis tools, and statistical platforms.' },
  ];

  const syllabusData = {
    prelims: {
      title: 'Prelim Term',
      badge: 'Weeks 1 – 6',
      weeks: [
        {
          week: 'Week 1',
          title: 'Course Orientation & Academic Policies',
          details:
            'Mission and Vision of the University, classroom and laboratory policies, sustainability & UN SDGs (SDG 4, 7, 8, 9), and grading system review. Intended Learning Objectives: Familiarize students with policies and align UN SDGs with course competencies.',
          tasks: 'Faculty-led discussion and interaction (100% participation)',
        },
        {
          week: 'Weeks 1 – 2',
          title: 'Introduction to Big Data Statistics, Variables & Sampling',
          details:
            'Overview of big data statistics, characteristics of big data, descriptive vs. inferential statistics, variables and data types, data collection methods, sampling techniques (random, systematic, stratified, and cluster), and observational vs. experimental studies.',
          tasks: 'Prelim Seatwork #1 (Data Collection) • Prelim Assignment (PT1.1: Data Collection & Sampling Techniques)',
        },
        {
          week: 'Week 3',
          title: 'Frequency Distribution (Categorical & Grouped)',
          details:
            'Organizing raw quantitative data, constructing frequency distributions for ungrouped data, and generating complete grouped frequency distribution tables (range, class intervals, class boundaries, midpoints, relative frequencies, and cumulative frequencies).',
          tasks: 'Prelim Seatwork #2 (Grouped Frequency Distribution) • Prelim Activity #1 (PT1.2: Grouped & Ungrouped Data) • Prelim Quiz #1 (WW1: Concepts, Variables, Data Types)',
        },
        {
          week: 'Week 4',
          title: 'Statistical Graphs & Data Visualization',
          details:
            'Constructing and analyzing key statistical graphs: histograms, frequency polygons, cumulative frequency ogives, relative frequency graphs, bar graphs, Pareto graphs, and time series charts using spreadsheet software.',
          tasks: 'Prelim Activity #2 (PT1.3: Statistical Graphs) • Prelim Quiz #2 (WW2: Frequency Distribution & Graphs)',
        },
        {
          week: 'Week 5',
          title: 'Individual Prelim Project: UN SDG Problem Analysis',
          details:
            'Identifying a problem domain in any UN Sustainable Development Goal (SDG 4: Quality Education, SDG 7: Clean Energy, SDG 8: Decent Work, SDG 9: Industry & Innovation) and applying statistical problem-solving methods to real datasets.',
          tasks: 'Individual Prelim Project: Problem Analysis (P1)',
        },
        {
          week: 'Week 6',
          title: 'Preliminary Term Summative Examination',
          details:
            'Comprehensive examination evaluating competencies in data collection, sampling techniques, frequency distributions, and statistical graphing.',
          tasks: 'Prelim Term Examination (PE • 30% of Prelim Grade)',
        },
      ],
    },
    midterms: {
      title: 'Midterm Term',
      badge: 'Weeks 7 – 12',
      weeks: [
        {
          week: 'Weeks 7 – 8',
          title: 'Data Description & Measures of Central Tendency',
          details:
            'Introduction to data description. Computing and interpreting the mean, median, mode, and midrange for ungrouped and grouped datasets. Calculating grouped mean using class midpoints and grouped median using lower boundaries and cumulative frequencies.',
          tasks: 'Midterm Seatwork #1 (PT2.1: Central Tendency) • Midterm Activity #1 (PT2.2: Grouped Data Central Tendency)',
        },
        {
          week: 'Week 9',
          title: 'Measures of Variations (Range, Variance & Standard Deviation)',
          details:
            'Quantifying data dispersion. Computing range, population variance, sample variance, population standard deviation, and sample standard deviation for ungrouped datasets. Interpreting the coefficient of variation (CV).',
          tasks: 'Midterm Quiz #1 (WW3: Central Tendency) • Midterm Seatwork #2 (PT2.3: Measures of Variations)',
        },
        {
          week: 'Week 10',
          title: 'Grouped Data Variance, Standard Deviation & Modal Class',
          details:
            'Calculating variance and standard deviation for grouped frequency distributions. Identifying the modal class and calculating the mode of grouped data using frequency differences (Δ1 and Δ2). Assessing distribution symmetry.',
          tasks: 'Midterm Activity #2 (PT2.4: Grouped Variation & Mode) • Midterm Quiz #2 (WW4)',
        },
        {
          week: 'Week 11',
          title: 'Midterm Term Project: UN SDG Statistical Problem Analysis',
          details:
            'Solving real-world business analytics problems aligned with UN SDGs 4, 7, 8, 9 using measures of central tendency and dispersion to drive evidence-based decisions.',
          tasks: 'Midterm Project: Problem Analysis (P2)',
        },
        {
          week: 'Week 12',
          title: 'Midterm Term Summative Examination',
          details:
            'Summative assessment covering measures of central tendency, measures of variation, grouped calculations, and statistical problem formulation.',
          tasks: 'Midterm Term Examination (ME • 30% of Midterm Grade)',
        },
      ],
    },
    finals: {
      title: 'Final Term',
      badge: 'Weeks 13 – 18',
      weeks: [
        {
          week: 'Week 13',
          title: 'Measures of Position (Percentiles, Deciles & Quartiles)',
          details:
            'Computing standard scores (z-scores), percentiles, deciles, and quartiles for business datasets. Interpreting percentile ranks and relative standing in organizational evaluation.',
          tasks: 'Final Term Seatwork #1 (PT3.1: Measures of Position) • Final Term Activity #1 (PT3.2: Positions)',
        },
        {
          week: 'Week 14',
          title: 'The Binomial Probability Distribution',
          details:
            'Characteristics of binomial experiments, binomial formula, expected values, and solving practical business analytics probability problems.',
          tasks: 'Final Term Activity #2 (PT3.3: Binomial Distributions) • Final Term Quiz #1 (WW5)',
        },
        {
          week: 'Weeks 15 – 16',
          title: 'The Normal Distribution & Standard Normal Curve',
          details:
            'Properties of the continuous normal distribution, the standard normal (z) distribution, and finding areas under the standard normal curve for single, interval, and tail probabilities.',
          tasks: 'Final Term Activity #3 (PT3.4: Application of Normal Distribution) • Final Term Quiz #2 (WW6)',
        },
        {
          week: 'Week 17',
          title: 'Final Term Project & e-Portfolio Submission',
          details:
            'Synthesizing statistical analyses on UN SDGs 4, 7, 8, 9, compiling complete coursework, and submitting the formal Student Class E-Portfolio.',
          tasks: 'Submission of Student E-Portfolio (P3.1) • Final Term Project: Problem Analysis (P3.2)',
        },
        {
          week: 'Week 18',
          title: 'Final Term Summative Examination',
          details:
            'Comprehensive final term examination covering all course competencies in Statistics for Business Analytics.',
          tasks: 'Final Term Examination (FE • 30% of Final Term Grade)',
        },
      ],
    },
  };

  const gradingBreakdown = [
    {
      term: 'Prelim Grade (30%)',
      standing: 'Class Standing (70%): Written Works (Quizzes/Seatworks) 25%, Performance Tasks (Lab Activities/Assignments) 25%, Product (Project P1) 20%',
      exam: 'Major Exam (30%): Prelim Term Examination',
    },
    {
      term: 'Midterm Grade (30%)',
      standing: 'Class Standing (70%): Written Works (Quizzes/Assignments) 25%, Performance Tasks (Lab Activities) 25%, Product (Project P2) 20%',
      exam: 'Major Exam (30%): Midterm Term Examination',
    },
    {
      term: 'Final Term Grade (40%)',
      standing: 'Class Standing (70%): Written Works (Quizzes/Assignments) 25%, Performance Tasks (Lab Activities) 20%, Product (Project P3) 20%',
      exam: 'Major Exam (30%): Final Term Examination',
    },
  ];

  const referencesList = [
    { author: 'Ghosh, T. (2023)', title: 'Practical mathematics for AI and deep learning', publisher: 'BPB Online (Accession No. 0128374) — Official Adopted Textbook' },
    { author: 'Bluman, A. G. (2025)', title: 'Elementary statistics: a brief version', publisher: 'McGraw Hill LLC (Accession No. 0129449)' },
    { author: 'Doane, D. P., & Seward, L. E. (2024)', title: 'Applied statistics in business and economics', publisher: 'McGraw-Hill (Accession No. 0129588)' },
    { author: 'Sirug, W. S. (2023)', title: 'Statistical Analysis for Business', publisher: 'Mindshapers Co., Inc. (Accession No. 0129452)' },
    { author: 'Lind, D. A., Marchal, W. G., & Samuel, W. A. (2024)', title: 'Statistical techniques in business and Economics', publisher: 'McGraw Hill LLC (Accession No. 0129571)' },
    { author: 'W3Schools (2023)', title: 'Statistics - Descriptive Statistics', publisher: 'Online Reference (w3schools.com/statistics)' },
  ];

  return (
    <section
      id="section-4"
      aria-labelledby="overview-heading"
      className="bento-section-tonal p-4 sm:p-5 space-y-4 animate-fade-in"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45">
        <div>
          <span className="inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5">
            Section 04 • Official Course Syllabus
          </span>
          <h2
            id="overview-heading"
            className="font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight"
          >
            Course Overview & 18-Week Syllabus
          </h2>
          <p className="text-[11px] text-espresso/75 font-semibold mt-0.5">
            OBE Syllabus • 1st Semester SY 2026–2027 • Information Technology Department
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-full bg-sage-earthy text-canvas-warm text-[10px] sm:text-[11px] font-bold uppercase tracking-wider self-start sm:self-center shrink-0">
          ITC C601 • 3 Units Lecture
        </span>
      </div>

      {/* Official Course Description Card */}
      <div className="bento-card-forest p-4 sm:p-5 space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bento-icon-circle bg-sand-beige text-espresso shrink-0">
            <Book size={17} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-sand-beige/80 font-bold">
              Official Course Description (ITC C601)
            </p>
            <h3 className="font-display text-base sm:text-lg font-bold text-canvas-warm">
              Statistics for Business Analytics
            </h3>
          </div>
        </div>
        <p className="text-[11px] sm:text-xs text-canvas-warm/90 leading-relaxed font-medium pt-0.5">
          This course aims to help the students understand the overview of the field of big data, with a focus on the statistical techniques for analyzing data. It also helps students to learn and apply several key applications of big data which includes different techniques in data analysis using graphical techniques and hypothesis testing. It also provides a brief overview of software packages application on how they can be used to analyze statistical data.
        </p>
      </div>

      {/* Course Specifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {courseDetails.map((detail) => (
          <div key={detail.label} className="bento-card p-3.5 sm:p-4 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-[12px] flex items-center justify-center shrink-0 ${detail.tone}`}>
              {detail.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-terracotta uppercase tracking-[0.12em] font-bold">
                {detail.label}
              </p>
              <p className="text-[11px] sm:text-xs font-extrabold text-espresso mt-0.5 leading-snug">
                {detail.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Course Learning Outcomes (CLOs) */}
      <div className="bento-card p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-sand-muted/35">
          <div className="w-9 h-9 bento-icon-circle bg-forest-deep text-sand-beige shrink-0">
            <Target size={17} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
              Competencies & Assessment
            </p>
            <h3 className="font-display text-base sm:text-lg font-bold text-espresso">
              Course Learning Outcomes (CLOs)
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {courseLearningOutcomes.map((clo) => (
            <div key={clo.code} className="bento-tile p-3.5 sm:p-4 flex flex-col justify-between space-y-2">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-forest-deep text-sand-beige text-[10px] font-bold uppercase tracking-wider">
                    {clo.code}
                  </span>
                  <span className="text-[9px] text-terracotta font-bold uppercase">
                    {clo.mapping}
                  </span>
                </div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-espresso leading-snug">
                  {clo.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-espresso/85 leading-relaxed font-medium">
                  {clo.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JRU Graduate Attributes Grid */}
      <div className="bento-card p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-sand-muted/35">
          <div className="w-9 h-9 bento-icon-circle bg-sage-earthy text-canvas-warm shrink-0">
            <Award size={17} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
              Institutional Outcomes
            </p>
            <h3 className="font-display text-base sm:text-lg font-bold text-espresso">
              JRU Graduate Attributes (GA1 – GA6)
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {graduateAttributes.map((ga) => (
            <div key={ga.code} className="bento-tile p-3.5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sand-beige text-espresso text-[10px] font-extrabold flex items-center justify-center shrink-0">
                  {ga.code.replace('GA', '')}
                </span>
                <h4 className="font-display text-xs font-bold text-forest-deep truncate">
                  {ga.title}
                </h4>
              </div>
              <p className="text-[10px] sm:text-[11px] text-espresso/80 font-medium leading-snug">
                {ga.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 18-Week Syllabus Outline (Screen View) */}
      <div className="bento-card p-4 sm:p-5 space-y-4 print:hidden">
        <div className="flex items-center justify-between border-b border-sand-muted/35 pb-3.5 flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bento-icon-circle bg-forest-deep text-sand-beige shrink-0">
              <Calendar size={17} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
                18-Week Term Breakdown
              </p>
              <h3 className="font-display text-base sm:text-lg font-bold text-espresso">
                Weekly Course Outline
              </h3>
            </div>
          </div>

          <div className="flex gap-1 bg-canvas-tonal p-1 rounded-full border border-sand-muted/40">
            {Object.keys(syllabusData).map((termKey) => (
              <button
                key={termKey}
                type="button"
                onClick={() => setActiveTab(termKey)}
                className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-all ${
                  activeTab === termKey
                    ? 'bg-forest-deep text-sand-beige shadow-sm'
                    : 'text-espresso/75 hover:text-espresso'
                }`}
              >
                {syllabusData[termKey].title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {syllabusData[activeTab].weeks.map((item) => (
            <div key={item.week} className="bento-tile p-3.5 sm:p-4 flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[9px] bg-sage-earthy text-canvas-warm font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {item.week}
                  </span>
                  <span className="text-[9px] font-bold text-terracotta uppercase tracking-wider">
                    {syllabusData[activeTab].title}
                  </span>
                </div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-forest-deep leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-espresso/85 leading-relaxed font-medium">
                  {item.details}
                </p>
              </div>

              <div className="pt-2 border-t border-sand-muted/25 text-[10px] sm:text-[11px] text-espresso/80 font-semibold flex items-start gap-1.5">
                <CheckCircle2 size={12} className="text-sage-earthy shrink-0 mt-0.5" />
                <span>{item.tasks}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Print-Only Complete Syllabus View (All 3 Terms Expanded for PDF) */}
      <div className="hidden print:block space-y-4">
        {Object.entries(syllabusData).map(([key, term]) => (
          <div key={key} className="bento-card p-4 space-y-2.5">
            <h3 className="font-display text-base font-extrabold text-forest-deep border-b border-sand-muted pb-1">
              {term.title} ({term.badge})
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {term.weeks.map((item) => (
                <div key={item.week} className="bento-tile p-2.5 space-y-1">
                  <p className="text-[9px] font-bold uppercase text-terracotta">{item.week}</p>
                  <p className="text-[11px] font-bold text-espresso">{item.title}</p>
                  <p className="text-[10px] text-espresso/85">{item.details}</p>
                  <p className="text-[9px] text-sage-earthy font-semibold pt-1">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Grading System and Components */}
      <div className="bento-card p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-sand-muted/35">
          <div className="w-9 h-9 bento-icon-circle bg-espresso text-sand-beige shrink-0">
            <BarChart3 size={17} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
              Institutional Grading Policy
            </p>
            <h3 className="font-display text-base sm:text-lg font-bold text-espresso">
              Grading System & Components
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {gradingBreakdown.map((grade) => (
            <div key={grade.term} className="bento-tile p-3.5 sm:p-4 space-y-1.5 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-forest-deep pb-1 border-b border-sand-muted/30">
                  {grade.term}
                </h4>
                <p className="text-[11px] sm:text-xs text-espresso/85 leading-relaxed font-medium pt-1.5">
                  {grade.standing}
                </p>
              </div>
              <div className="pt-1.5 border-t border-sand-muted/20 text-[11px] font-bold text-terracotta">
                {grade.exam}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adopted Textbooks & References */}
      <div className="bento-card p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-sand-muted/35">
          <div className="w-9 h-9 bento-icon-circle bg-forest-pine text-sand-beige shrink-0">
            <FileSpreadsheet size={17} strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
              Course Literature & Reading List
            </p>
            <h3 className="font-display text-base sm:text-lg font-bold text-espresso">
              Adopted Textbooks & References
            </h3>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {referencesList.map((ref) => (
            <li key={ref.title} className="bento-tile p-3 text-[11px] space-y-0.5">
              <p className="font-bold text-forest-deep">{ref.author}</p>
              <p className="italic font-medium text-espresso">{ref.title}</p>
              <p className="text-[10px] text-terracotta">{ref.publisher}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CourseOverview;
