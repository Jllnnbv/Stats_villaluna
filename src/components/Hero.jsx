import React from 'react';
// src/components/Hero.jsx
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  UserCheck,
  Layers,
  Award,
  BarChart3,
  MessageSquare,
  Sparkles,
  Maximize2,
  TrendingUp,
} from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const Hero = ({ onOpenLightbox }) => {
  const roles = [
    'Student Leader',
    'Business Analyst',
    'Data Specialist',
    'Cloud Enthusiast',
  ];

  const featureStripItems = [
    {
      icon: <BookOpen size={17} strokeWidth={1.75} />,
      label: 'Subject & Course Code',
      value: 'ITC C601',
      detail: 'Statistics for Business Analytics • BSIT-101BA',
      to: '/overview#section-4',
    },
    {
      icon: <UserCheck size={17} strokeWidth={1.75} />,
      label: 'Course Instructor',
      value: 'Virginia B. Loyola, MIT',
      detail: 'José Rizal University • SY 2026–2027',
      to: '/#section-2',
    },
    {
      icon: <Layers size={17} strokeWidth={1.75} />,
      label: 'Compiled Coursework',
      value: '18 Statistical Outputs',
      detail: 'Prelims, Midterms & Finals Statistical Artifacts',
      to: '/portfolio#section-5',
    },
    {
      icon: <Award size={17} strokeWidth={1.75} />,
      label: 'Credentials & Leadership',
      value: '13+ Certs & Seminars',
      detail: 'AWS, DataCamp, Data Science & Hackathons',
      to: '/hobbies-trainings#section-9',
    },
  ];

  const bentoPillars = [
    {
      title: 'Descriptive & Inferential Statistics',
      subtitle: 'Sections 05, 06 & 07',
      description:
        'From raw frequency tables, statistical charts, and central tendency to measures of variation, percentiles, z-scores, and normal curve probability modeling.',
      to: '/portfolio#section-5',
      cardStyle: 'bento-card-sage bg-[#5B7A50]',
      badgeStyle: 'bg-[#244B43] text-[#E6C3A0]',
      textMuted: 'text-[#FAF6F0]/85',
      ctaText: 'Explore 18 Outputs',
      icon: <BarChart3 size={17} strokeWidth={1.75} />,
    },
    {
      title: 'Term-by-Term Reflections',
      subtitle: 'Section 08',
      description:
        'Analytical synthesis across Prelim, Midterm, and Final terms documenting data interpretation breakthroughs, statistical rigor, and growth.',
      to: '/reflections#section-8',
      cardStyle: 'bento-card-espresso bg-[#462E22]',
      badgeStyle: 'bg-[#6E4735] text-[#E6C3A0]',
      textMuted: 'text-[#E6C3A0]/85',
      ctaText: 'Read Reflections',
      icon: <MessageSquare size={17} strokeWidth={1.75} />,
    },
    {
      title: 'Leadership, Analytics & Credentials',
      subtitle: 'Sections 09, 10 & 11',
      description:
        'AWS Student Builder leadership, hackathon pitches, DataCamp data engineering scholarship, Blender 3D art, performing arts showcase, and full CV.',
      to: '/hobbies-trainings#section-9',
      cardStyle: 'bento-card-tan bg-[#E6C3A0]',
      badgeStyle: 'bg-[#462E22] text-[#E6C3A0]',
      textMuted: 'text-[#462E22]/85',
      ctaText: 'View Certs & CV',
      icon: <Sparkles size={17} strokeWidth={1.75} />,
    },
  ];

  return (
    <section id="section-1" className="space-y-6 animate-fade-in">
      {/* Institutional Header Banner */}
      <div className="bento-card px-4 py-2.5 text-center flex flex-col sm:flex-row items-center justify-between gap-2 border border-sand-muted/40 shadow-sm">
        <div className="text-left">
          <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em] text-forest-deep">
            José Rizal University
          </p>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.08em] text-espresso/75">
            College of Computer Studies and Engineering • Information Technology Department
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-sand-beige text-[#462E22] text-[9px] font-extrabold uppercase tracking-wider">
            STUDENT&apos;S CLASS PORTFOLIO
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-forest-deep text-sand-beige text-[9px] font-bold uppercase tracking-wider">
            ITC C601 • SY 2026–2027
          </span>
        </div>
      </div>

      {/* =========================================================
          1. EDITORIAL SPLIT-LAYOUT HERO BANNER
         ========================================================= */}
      <div className="bento-section-tonal p-4 sm:p-5 relative overflow-hidden">
        {/* Subtle decorative background ambient shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[#5B7A50]/10 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-[#6E4735]/10 blur-2xl"
        />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* LEFT COLUMN: Editorial Display Typography, Intro & Warm Beige Pill CTA */}
          <div className="sm:col-span-7 space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#244B43] text-[#E6C3A0] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] shadow-sm">
              <TrendingUp size={12} strokeWidth={2} />
              <span>Section 01 • Statistics for Business Analytics</span>
            </div>

            <div className="space-y-1.5">
              <h1 className="font-display text-xl sm:text-2xl font-extrabold text-[#244B43] tracking-tight leading-[1.1]">
                Jullianna Basiao{' '}
                <span className="text-[#6E4735]">Villaluna</span>
              </h1>

              <div className="flex flex-col gap-1 pt-0.5">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full bg-[#E6C3A0] text-[#462E22] w-fit">
                  Student ID: 26-268353 • BSIT-101BA
                </span>
                <div className="text-[10px] sm:text-[11px] font-bold text-[#335C54] tracking-[0.1em] uppercase h-5 flex items-center">
                  <TypewriterEffect words={roles} />
                </div>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-[#462E22]/90 leading-relaxed font-medium">
              Welcome to my official Student&apos;s Class Portfolio for <strong>ITC C601 – Statistics for Business Analytics</strong> at <strong>José Rizal University</strong>, submitted to <strong>Instructor Virginia B. Loyola, MIT</strong>. This curated academic repository documents my data collection and sampling analyses, grouped frequency distribution tables, statistical chart visualizations, central tendency and dispersion computations, normal distribution probability modeling, and UN SDG-aligned problem projects across all 11 required sections.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1.5 print:hidden">
              <Link
                to="/#section-2"
                className="btn-pill-beige px-3.5 py-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.1em] inline-flex items-center gap-1.5 bg-[#E6C3A0] text-[#462E22]"
              >
                <span>Explore Portfolio</span>
                <ArrowRight size={14} strokeWidth={2.25} />
              </Link>

              <Link
                to="/portfolio#section-5"
                className="px-3.5 py-2 rounded-full bg-[#244B43] hover:bg-[#335C54] text-[#E6C3A0] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>View Statistical Outputs</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Decorative Botanical & Geometric Layered Visual Accents */}
          <div className="sm:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[230px] mx-auto">
              {/* Back Geometric Accent Layer 1 (Deep Forest #244B43) */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 w-full h-full rounded-[20px] bg-[#244B43] -rotate-3 opacity-90 shadow-lg"
              />
              {/* Middle Geometric Accent Layer 2 (Terracotta #6E4735) */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full rounded-[20px] bg-[#6E4735] rotate-2 opacity-85 shadow-lg"
              />

              {/* Foreground Layered Bento Portrait Card */}
              <div className="relative z-10 bento-card p-3 sm:p-3.5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#244B43]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B7A50]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6E4735]" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-[#335C54]">
                    JRU CCSE • SY 2026–2027
                  </span>
                </div>

                {/* Portrait Image with Lightbox Trigger */}
                <div
                  onClick={() =>
                    onOpenLightbox &&
                    onOpenLightbox({
                      src: '/profile.jpg',
                      title: 'Jullianna Basiao Villaluna',
                      subtitle: 'BSIT-101BA • Statistics for Business Analytics (ITC C601)',
                      tag: 'Student Portrait',
                    })
                  }
                  className="relative rounded-[16px] overflow-hidden aspect-[4/4.2] bg-[#335C54] group cursor-zoom-in"
                >
                  <img
                    src="/profile.jpg"
                    alt="Jullianna Basiao Villaluna"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Decorative Corner Leaf SVG */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 120"
                    className="absolute -bottom-2 -right-2 w-28 h-28 text-[#E6C3A0]/85 pointer-events-none drop-shadow"
                    fill="currentColor"
                  >
                    <path d="M105 15C65 18 32 48 22 92C58 84 92 55 105 15Z" opacity="0.35" />
                    <path
                      d="M98 24C68 38 44 62 24 96"
                      stroke="#E6C3A0"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>

                  <button
                    type="button"
                    aria-label="View portrait full screen"
                    className="print:hidden absolute top-3 right-3 p-2 rounded-full bg-[#244B43]/85 text-[#E6C3A0] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>

                {/* Layered Caption Footer */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div>
                    <p className="font-display font-bold text-xs text-[#462E22]">
                      BSIT — Business Analytics
                    </p>
                    <p className="text-[9px] sm:text-[10px] font-semibold text-[#6E4735]">
                      1st Year • 1st Semester • Sec 101BA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. DARK FOREST-GREEN HORIZONTAL FEATURE STRIP (#244B43)
         ========================================================= */}
      <div className="bento-card-forest bg-[#244B43] p-4 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {featureStripItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-[12px] bg-[#335C54] group-hover:bg-[#5B7A50] text-[#E6C3A0] flex items-center justify-center shrink-0 border border-[#E6C3A0]/25 transition-colors">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#C5A78B]">
                  {item.label}
                </p>
                <p className="font-display text-xs sm:text-sm font-extrabold text-[#FAF6F0] group-hover:text-[#E6C3A0] transition-colors">
                  {item.value}
                </p>
                <p className="text-[10px] text-[#E6C3A0]/80 font-medium mt-0.5 leading-snug">
                  {item.detail}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* =========================================================
          3. 3-COLUMN GRID OF ROUNDED SQUARE CARDS
             (Alternating Sage #5B7A50, Espresso #462E22, Warm Tan #E6C3A0)
         ========================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {bentoPillars.map((pillar) => (
          <Link
            key={pillar.title}
            to={pillar.to}
            className={`${pillar.cardStyle} p-3.5 sm:p-4 flex flex-col items-center text-center justify-between min-h-[175px] group hover:-translate-y-1 transition-all duration-300`}
          >
            {/* Centered Circular Icon Badge */}
            <div className="flex flex-col items-center space-y-2">
              <div
                className={`w-9 h-9 bento-icon-circle ${pillar.badgeStyle} group-hover:scale-110 transition-transform duration-300`}
              >
                {pillar.icon}
              </div>
              <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.12em] opacity-85">
                {pillar.subtitle}
              </span>
              <h2 className="font-display text-xs sm:text-[13px] font-extrabold tracking-tight leading-snug">
                {pillar.title}
              </h2>
            </div>

            <p className={`text-[10px] sm:text-[11px] leading-snug font-medium my-2 ${pillar.textMuted}`}>
              {pillar.description}
            </p>

            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] pt-2 border-t border-current/15 w-full justify-center group-hover:gap-2 transition-all">
              <span>{pillar.ctaText}</span>
              <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
