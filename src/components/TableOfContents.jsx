import React from 'react';
// src/components/TableOfContents.jsx
import { Link } from 'react-router-dom';
import {
  Compass,
  Home,
  List,
  User,
  BookOpen,
  BarChart3,
  Calculator,
  TrendingUp,
  MessageSquare,
  Users,
  Award,
  FileText,
  ArrowUpRight,
  Printer,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_SECTIONS } from '../constants/sections';

const SECTION_ICONS = {
  '01': <Home size={15} strokeWidth={1.75} />,
  '02': <List size={15} strokeWidth={1.75} />,
  '03': <User size={15} strokeWidth={1.75} />,
  '04': <BookOpen size={15} strokeWidth={1.75} />,
  '05': <BarChart3 size={15} strokeWidth={1.75} />,
  '06': <Calculator size={15} strokeWidth={1.75} />,
  '07': <TrendingUp size={15} strokeWidth={1.75} />,
  '08': <MessageSquare size={15} strokeWidth={1.75} />,
  '09': <Users size={15} strokeWidth={1.75} />,
  '10': <Award size={15} strokeWidth={1.75} />,
  '11': <FileText size={15} strokeWidth={1.75} />,
};

const TONE_BADGE_STYLES = {
  forest: 'bg-[#244B43] text-[#E6C3A0]',
  sage: 'bg-[#5B7A50] text-[#FAF6F0]',
  espresso: 'bg-[#462E22] text-[#E6C3A0]',
  tan: 'bg-[#E6C3A0] text-[#462E22]',
};

const TableOfContents = () => {
  const detailedCoursework = [
    {
      term: 'Section 05: Classroom Activities & Exercises',
      to: '/portfolio#section-5',
      items: [
        'Midterm Seatwork No. 1 – Central Tendency (Ungrouped Data)',
        'Midterm Seatwork No. 2 – Measures of Variation (Range, Variance, SD)',
        'Final Term Seatwork No. 1 – Measures of Position (Quartiles & Deciles)',
        'Final Term Seatwork No. 2 – Percentile Ranks & Normal Curve Drills',
      ],
    },
    {
      term: 'Section 06: Laboratory Activities',
      to: '/portfolio#section-6',
      items: [
        'Prelim Activity No. 1 – Grouped Frequency Distribution Table',
        'Prelim Activity No. 2 – Organizing Data: Grouped Distribution',
        'Prelim Activity No. 3 – Statistical Charts (Histogram, Polygon, Ogive)',
        'Midterm Activity No. 1 – Central Tendency for Grouped Data',
        'Midterm Activity No. 2 – Mode of Grouped Data & Volatility',
        'Final Term Activity No. 2 – Normal Distribution & z-Score Models',
      ],
    },
    {
      term: 'Sections 07, 08 & 09: Assessments & Projects',
      to: '/portfolio#section-7',
      items: [
        'Sec 07: Prelim Quiz No. 1 (Sampling & Variables)',
        'Sec 07: Prelim Quiz No. 2 (Frequency Tables & Graphs)',
        'Sec 07: Midterm Quiz (Central Tendency & Variation)',
        'Sec 08: Prelim Project – UN SDG Problem Analysis',
        'Sec 08: Midterm Project – Applied Business Analytics Project',
        'Sec 09: Prelim & Midterm Examination Results',
      ],
    },
  ];

  return (
    <section
      id="section-2"
      aria-labelledby="toc-heading"
      className="bento-section-tonal p-4 sm:p-5 mt-6 space-y-4"
    >
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-[14px] bg-forest-deep text-sand-beige flex items-center justify-center shrink-0 shadow-md">
            <Compass size={19} strokeWidth={1.75} />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-terracotta mb-0.5">
              <span>Section 02 • Complete Course Directory</span>
            </div>
            <h2
              id="toc-heading"
              className="font-display text-lg sm:text-xl font-extrabold text-espresso tracking-tight"
            >
              Table of Contents & 11-Section Guide
            </h2>
          </div>
        </div>

        <div className="bento-tile px-3.5 py-2 flex items-center justify-between sm:justify-start gap-2.5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
              Subject & Instructor
            </p>
            <p className="text-[11px] sm:text-xs font-extrabold text-forest-deep">
              ITC C601 • Virginia B. Loyola, MIT
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="print:hidden p-1.5 rounded-full bg-sand-beige/70 hover:bg-sand-beige text-espresso transition-colors"
            title="Print all 11 sections (1-inch margins)"
            aria-label="Print all 11 sections"
          >
            <Printer size={15} />
          </button>
        </div>
      </div>

      {/* Reviewer Guidance Note */}
      <div className="bento-card p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <p className="text-[11px] sm:text-xs text-espresso/90 font-medium leading-relaxed">
          Select any of the <strong>11 required sections</strong> below to jump directly to its content, or use the sticky top navigation icons. Exporting to PDF prints all 11 sections in order with clean 1-inch margins.
        </p>
        <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sage-earthy text-canvas-warm shrink-0 self-start sm:self-center">
          11 / 11 Sections Complete
        </span>
      </div>

      {/* 11-Section Bento Directory Grid */}
      <nav aria-label="11 Required Portfolio Sections">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PORTFOLIO_SECTIONS.map((sec, idx) => {
            const isWide = idx === 10;
            return (
              <li
                key={sec.id}
                className={isWide ? 'sm:col-span-2' : ''}
              >
                <Link
                  to={sec.to}
                  className="bento-card h-full p-3.5 sm:p-4 flex flex-col justify-between gap-2.5 group hover:-translate-y-1 hover:border-forest-pine/60 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                          TONE_BADGE_STYLES[sec.tone] || TONE_BADGE_STYLES.forest
                        }`}
                      >
                        {SECTION_ICONS[sec.number]}
                      </span>
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-terracotta block">
                          Section {sec.number}
                        </span>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-sage-earthy">
                          {sec.category}
                        </span>
                      </div>
                    </div>

                    <span className="w-6 h-6 rounded-full bg-canvas-tonal text-espresso flex items-center justify-center group-hover:bg-forest-deep group-hover:text-sand-beige transition-colors print:hidden">
                      <ArrowUpRight size={13} />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-espresso group-hover:text-forest-deep transition-colors leading-snug">
                      {sec.title}
                    </h3>
                    <p className="text-[11px] text-espresso/75 font-medium mt-1 leading-snug">
                      {sec.subtitle}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Detailed Statistical Coursework Index (Sections 05–07 Breakdown) */}
      <div className="pt-3.5 border-t border-sand-muted/35 space-y-3">
        <h3 className="font-display text-sm sm:text-base font-bold text-espresso">
          Compiled Statistical Works Index (Sections 05–07)
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {detailedCoursework.map((group) => (
            <Link
              key={group.term}
              to={group.to}
              className="bento-tile p-3.5 flex flex-col justify-between gap-2.5 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-sand-muted/25">
                  <span className="text-[11px] sm:text-xs font-bold text-forest-deep group-hover:text-terracotta transition-colors">
                    {group.term}
                  </span>
                  <ArrowUpRight size={13} className="text-terracotta group-hover:translate-x-0.5 transition-transform" />
                </div>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-espresso/85 font-medium">
                      <CheckCircle2 size={12} className="text-sage-earthy shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
