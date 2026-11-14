import React from 'react';
// src/components/StudentProfile.jsx
import { Target, Heart, Zap, User, MapPin, GraduationCap, Sparkles } from 'lucide-react';

const StudentProfile = () => {
  return (
    <section
      id="section-3"
      aria-labelledby="profile-heading"
      className="bento-section-tonal p-4 sm:p-5 space-y-4 animate-fade-in"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45">
        <div>
          <span className="inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5">
            Section 03 • Biography & Academic Profile
          </span>
          <h2
            id="profile-heading"
            className="font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight"
          >
            Student Profile & Transition Story
          </h2>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-deep text-sand-beige text-[10px] sm:text-[11px] font-bold uppercase tracking-wider self-start sm:self-center">
          <MapPin size={13} />
          <span>Mandaluyong City • JRU</span>
        </div>
      </div>

      {/* Official Section 3 Checklist Card (Per Guide Page 3) */}
      <div className="bento-card p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between pb-2.5 border-b border-sand-muted/40 flex-wrap gap-2">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-terracotta">
              Prescribed Profile Information
            </span>
            <h3 className="font-display text-sm sm:text-base font-extrabold text-espresso">
              Academic & Personal Identification
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-forest-deep text-sand-beige text-[9px] font-bold uppercase tracking-wider">
            Verified Student Record
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-terracotta block">
              • Full Name
            </span>
            <p className="font-extrabold text-xs text-espresso">Jullianna Basiao Villaluna</p>
          </div>

          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-terracotta block">
              • Student Number
            </span>
            <p className="font-extrabold text-xs text-forest-deep font-mono">26-268353</p>
          </div>

          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-terracotta block">
              • Program & Year Level
            </span>
            <p className="font-extrabold text-[11px] sm:text-xs text-espresso">BSIT (Business Analytics) • 1st Year</p>
          </div>

          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-terracotta block">
              • Section
            </span>
            <p className="font-extrabold text-[11px] sm:text-xs text-espresso">BSIT-101BA</p>
          </div>

          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5 sm:col-span-2">
            <span className="text-[9px] font-bold uppercase tracking-wider text-terracotta block">
              • Course Code & Description
            </span>
            <p className="font-extrabold text-[11px] sm:text-xs text-forest-deep">
              ITC C601 – Statistics for Business Analytics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 pt-1 text-xs">
          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-sage-earthy block">
              • Educational Background
            </span>
            <p className="font-semibold text-espresso/90 text-[10px] sm:text-[11px] leading-relaxed">
              José Rizal University (BSIT-BA, 2026–Pres.) • NU MOA (MedTech, 2023–2025) • HSU UMak (STEM, 2021–2023)
            </p>
          </div>

          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-sage-earthy block">
              • Interests / Hobbies
            </span>
            <p className="font-semibold text-espresso/90 text-[10px] sm:text-[11px] leading-relaxed">
              3D Digital Modeling (Blender), Performing Arts & Choreography, Statistical Modeling, Big Data Systems
            </p>
          </div>

          <div className="bento-tile p-2.5 sm:p-3 space-y-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-sage-earthy block">
              • Trainings / Work Experience
            </span>
            <p className="font-semibold text-espresso/90 text-[10px] sm:text-[11px] leading-relaxed">
              Secretary & Data Analyst (AWS Student Builder Group), DataCamp Scholar, Youth Leadership & Summit Organizer
            </p>
          </div>
        </div>
      </div>

      {/* Layered Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
        {/* About Me Hero Card */}
        <div className="sm:col-span-12 bento-card-forest p-4 sm:p-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-sand-beige/20">
            <div className="w-9 h-9 bento-icon-circle bg-sage-earthy text-canvas-warm shrink-0">
              <Sparkles size={17} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.12em] text-sand-beige/80 font-bold">
                Personal Introduction
              </p>
              <h3 className="font-display text-base sm:text-lg font-bold text-canvas-warm">
                About Me
              </h3>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-canvas-warm/90 leading-relaxed font-medium space-y-2.5">
            <p>
              Hello! I am <strong className="text-sand-beige">Jullianna Basiao Villaluna</strong>, a dedicated student at <strong className="text-sand-beige">José Rizal University (JRU)</strong> taking <strong className="text-sand-beige">Bachelor of Science in Information Technology Major in Business Analytics (BSIT-101BA)</strong> under Instructor <strong className="text-sand-beige">Virginia B. Loyola, MIT</strong> for <strong className="text-sand-beige">ITC C601 – Statistics for Business Analytics</strong>.
            </p>
            <p>
              As someone passionate about technology, empirical reasoning, and quantitative decision-making, this course serves as my analytical bedrock. Through data collection methods, sampling designs, frequency tables, central tendency, dispersion metrics, and normal distribution probability modeling, I am building the competencies needed to convert raw datasets into strategic business intelligence. Outside the classroom, I actively organize tech summits, lead within the AWS Student Builder Group, and champion data-driven innovation within the JRU community.
            </p>
          </div>
        </div>

        {/* Academic Background Timeline Card */}
        <div className="sm:col-span-12 bento-card p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-sand-muted/35">
            <div className="w-9 h-9 bento-icon-circle bg-forest-deep text-sand-beige shrink-0">
              <GraduationCap size={17} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
                Education History
              </p>
              <h3 className="font-display text-base sm:text-lg font-bold text-espresso">
                Academic Background
              </h3>
            </div>
          </div>

          <div className="relative border-l-2 border-sage-earthy ml-3 space-y-4 py-1">
            <div className="relative pl-5">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-forest-deep ring-4 ring-sand-beige/50" />
              <div className="space-y-0.5">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-display font-bold text-xs sm:text-[13px] text-espresso">
                    José Rizal University
                  </h4>
                  <span className="text-[9px] bg-sage-earthy text-canvas-warm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    2026 – Present
                  </span>
                </div>
                <p className="text-[11px] text-terracotta font-semibold">
                  BS in Information Technology (Business Analytics Specialization)
                </p>
              </div>
            </div>

            <div className="relative pl-5">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-terracotta ring-4 ring-sand-beige/40" />
              <div className="space-y-0.5">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-display font-bold text-xs sm:text-[13px] text-espresso">
                    National University MOA
                  </h4>
                  <span className="text-[9px] bg-sand-beige text-espresso font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    2023 – 2025
                  </span>
                </div>
                <p className="text-[11px] text-espresso/75 font-semibold">
                  BS in Medical Technology
                </p>
              </div>
            </div>

            <div className="relative pl-5">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sand-muted ring-4 ring-canvas-tonal" />
              <div className="space-y-0.5">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-display font-bold text-xs sm:text-[13px] text-espresso">
                    Higher School ng UMak
                  </h4>
                  <span className="text-[9px] bg-canvas-tonal text-espresso font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    2021 – 2023
                  </span>
                </div>
                <p className="text-[11px] text-espresso/75 font-semibold">
                  STEM Strand | Senior High School Graduate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Transition Story Card (12 cols full width Bento block) */}
        <div className="sm:col-span-12 bento-card p-4 sm:p-5">
          <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-sand-muted/35">
            <div className="w-9 h-9 bento-icon-circle bg-terracotta text-sand-beige shrink-0">
              <User size={17} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.12em] text-terracotta font-bold">
                Academic Pivot & Vision
              </p>
              <h3 className="font-display text-base sm:text-lg font-bold text-espresso">
                My Transition Story
              </h3>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-espresso/90 leading-relaxed font-medium">
            My transition from BS Medical Technology at National University to a BS in Information Technology, specializing in Business Analytics at José Rizal University, was a strategic step toward finding my true professional alignment. While my foundational studies in the sciences honed my analytical mindset, I realized my ambitions align much closer with the dynamic corporate world. My ultimate goal is still to earn the title of &ldquo;Doctor,&rdquo; not in a clinical setting, but by pursuing a doctorate in Data Science. I have always envisioned myself driving decisions in a modern business environment, and the BSIT Business Analytics program seamlessly blends technological innovation with corporate strategy to help me reach that goal. Today, I am excited to apply my analytical skills where they thrive most: at the intersection of business intelligence, statistical modeling, and strategic growth.
          </p>
        </div>

        {/* 3 Alternating Tonal Bento Cards (Sage #5B7A50, Espresso #462E22, Tan #E6C3A0) */}
        <div className="sm:col-span-4 bento-card-sage p-3.5 sm:p-4 flex flex-col items-center text-center space-y-2.5">
          <div className="w-9 h-9 bento-icon-circle bg-forest-deep text-sand-beige">
            <Target size={17} strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-xs sm:text-sm font-extrabold text-canvas-warm leading-snug">
            Career Goals
          </h3>
          <p className="text-[10px] sm:text-[11px] text-canvas-warm/90 leading-snug font-medium">
            My goal is to become a Data Scientist who translates complex mathematical and statistical models into actionable business strategies, bridging quantitative rigor and strategic innovation.
          </p>
        </div>

        <div className="sm:col-span-4 bento-card-espresso p-3.5 sm:p-4 flex flex-col items-center text-center space-y-2.5">
          <div className="w-9 h-9 bento-icon-circle bg-terracotta text-sand-beige">
            <Heart size={17} strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-xs sm:text-sm font-extrabold text-sand-beige leading-snug">
            Interests in Tech & Analytics
          </h3>
          <p className="text-[10px] sm:text-[11px] text-canvas-warm/90 leading-snug font-medium">
            Deeply interested in Big Data Statistics, Cloud Computing (AWS), Data Engineering, and the mathematical structures that power predictive analytics and modern business intelligence.
          </p>
        </div>

        <div className="sm:col-span-4 bento-card-tan p-3.5 sm:p-4 flex flex-col items-center text-center space-y-2.5">
          <div className="w-9 h-9 bento-icon-circle bg-espresso text-sand-beige">
            <Zap size={17} strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-xs sm:text-sm font-extrabold text-espresso leading-snug">
            Skills & Strengths
          </h3>
          <ul className="text-[10px] sm:text-[11px] text-espresso/90 font-semibold space-y-1 text-left w-full pl-3.5 list-disc leading-snug">
            <li>Statistical Analysis & Hypothesis Testing</li>
            <li>Frequency Distributions & Graphical Charts</li>
            <li>Measures of Central Tendency & Variation</li>
            <li>Normal Curve Modeling & z-Score Probability</li>
            <li>Python & SQL Data Modeling</li>
            <li>Critical Thinking & UN SDG Research</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
