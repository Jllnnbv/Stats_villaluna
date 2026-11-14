// src/components/Reflections.jsx
import React from 'react';
import {
  Lightbulb,
  AlertTriangle,
  Compass,
  Briefcase,
  Award,
  Sparkles,
} from 'lucide-react';

const Reflections = () => {
  const guideQuestions = [
    {
      number: '01',
      question: 'What important knowledge and skills did you learn?',
      icon: <Lightbulb size={16} strokeWidth={1.75} />,
      tone: 'bento-card-forest bg-[#244B43]',
      badge: 'bg-[#335C54] text-[#E6C3A0]',
      textColor: 'text-canvas-warm/95',
      answer:
        'Throughout ITC C601 – Statistics for Business Analytics under Instructor Virginia B. Loyola, MIT, I mastered the mathematical and practical end-to-end quantitative pipeline. I gained fluency in organizing raw datasets into structured grouped frequency distribution tables, determining appropriate class widths, class boundaries, midpoints, and cumulative frequencies. I developed the ability to translate tabular data into visual representations using histograms, frequency polygons, and ogives to immediately diagnose data skewness and modality. In computing measures of central tendency (mean, median, mode) and dispersion (range, variance, standard deviation, and coefficient of variation) for both ungrouped and grouped datasets, I learned to assess data consistency and volatility. Finally, mastering measures of position (quartiles, deciles, percentiles) and standard normal distribution curve modeling (z-scores and probability lookups) equipped me with predictive analytical power essential for data-driven business strategy.',
    },
    {
      number: '02',
      question: 'What activities or topics were most challenging?',
      icon: <AlertTriangle size={16} strokeWidth={1.75} />,
      tone: 'bento-card-espresso bg-[#462E22]',
      badge: 'bg-[#6E4735] text-[#E6C3A0]',
      textColor: 'text-canvas-warm/95',
      answer:
        'The most intellectually challenging topics were calculating grouped data variance and standard deviation, as well as applying the normal distribution curve to complex operational scenarios. Grouped data calculations require strict algebraic precision: midpoints must be multiplied by frequencies (f·X), values squared (f·X²), and cumulative frequencies meticulously verified. Any small arithmetic error in class boundaries cascades through the entire variance formula. Similarly, in the normal distribution, translating real-world problem statements into correct z-score boundary conditions—determining whether to find the area between two values, in one tail, or beyond a percentile cutoff—demanded careful spatial and probabilistic reasoning rather than mechanical formula application.',
    },
    {
      number: '03',
      question: 'How did you overcome the difficulties?',
      icon: <Compass size={16} strokeWidth={1.75} />,
      tone: 'bento-card-sage bg-[#5B7A50]',
      badge: 'bg-[#244B43] text-[#FAF6F0]',
      textColor: 'text-canvas-warm/95',
      answer:
        'I overcame these obstacles through systematic verification, hands-on tool leveraging, and peer collaboration. For grouped computations, I constructed structured step-by-step spreadsheets in Microsoft Excel, writing out explicit formula columns for deviations (X - x̄), squared deviations, and weighted products, cross-checking manual calculations against spreadsheet formulas. To master the normal curve, I consistently sketched the bell curve by hand, shading the exact target region under the curve before calculating z-scores and consulting the standard normal table. Whenever ambiguities arose regarding problem statements, I actively participated in class discussions under Prof. Loyola, reviewed instructor lecture notes, and engaged in collaborative study sessions with my BSIT-101BA peers.',
    },
    {
      number: '04',
      question: 'How will you apply the knowledge and skills you acquired?',
      icon: <Briefcase size={16} strokeWidth={1.75} />,
      tone: 'bento-card-tan bg-[#E6C3A0]',
      badge: 'bg-[#462E22] text-[#E6C3A0]',
      textColor: 'text-espresso/95',
      answer:
        'As an aspiring Business Analyst and future Data Scientist, the competencies acquired in ITC C601 form the bedrock of my career. I will apply measures of central tendency and variation to benchmark enterprise KPI metrics, evaluate operational variability, and assess financial or logistical risks. Normal distribution and probability modeling will allow me to set quality control tolerance limits, forecast customer demand, and detect statistical anomalies in cloud infrastructure data. Furthermore, applying statistical rigor to UN Sustainable Development Goal (SDG) problem analysis proved that data can drive ethical, high-impact societal solutions. These mathematical principles will directly empower my work with Python, SQL, and AWS cloud analytics throughout my BSIT program and professional career.',
    },
  ];

  return (
    <div className='space-y-6 animate-fade-in'>
      {/* =========================================================
          SECTION 10: LEARNING REFLECTION (Official Guide Page 4)
         ========================================================= */}
      <section
        id='section-10'
        aria-labelledby='section-10-heading'
        className='bento-section-tonal p-4 sm:p-5 space-y-4'
      >
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45'>
          <div>
            <span className='inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5'>
              Section 10 • Academic Metacognition
            </span>
            <h2
              id='section-10-heading'
              className='font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight'
            >
              Learning Reflection
            </h2>
            <p className='text-[11px] text-espresso/75 font-semibold mt-0.5'>
              Addressing the 4 Core Reflective Questions from the Official E-Portfolio Guide
            </p>
          </div>
          <span className='px-3 py-1.5 rounded-full bg-forest-deep text-sand-beige text-[10px] sm:text-[11px] font-bold uppercase tracking-wider self-start sm:self-center shrink-0'>
            Section 10 • 4 Guide Prompts
          </span>
        </div>

        {/* 4 Prompt Bento Grid */}
        <div className='grid grid-cols-1 gap-3.5'>
          {guideQuestions.map((item) => (
            <div
              key={item.number}
              className={`${item.tone} p-4 sm:p-5 flex flex-col justify-between space-y-3 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className='space-y-2.5'>
                <div className='flex items-center justify-between gap-2 pb-2.5 border-b border-current/15'>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-full bg-black/20 flex items-center justify-center shrink-0'>
                      {item.icon}
                    </div>
                    <span className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${item.badge}`}>
                      Question {item.number}
                    </span>
                  </div>
                </div>

                <h3 className='font-display text-sm sm:text-base font-extrabold leading-snug'>
                  {item.question}
                </h3>

                <p className={`text-[11px] sm:text-xs leading-relaxed font-medium ${item.textColor}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 11: COURSE LEARNING SUMMARY (Official Guide Page 4)
         ========================================================= */}
      <section
        id='section-11'
        aria-labelledby='section-11-heading'
        className='bento-section-tonal p-4 sm:p-5 space-y-4'
      >
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45'>
          <div>
            <span className='inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5'>
              Section 11 • Semester Synthesis & Capstone
            </span>
            <h2
              id='section-11-heading'
              className='font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight'
            >
              Course Learning Summary
            </h2>
            <p className='text-[11px] text-espresso/75 font-semibold mt-0.5'>
              Overall Learning Experience, Milestone Achievements & Core Competencies
            </p>
          </div>
          <span className='px-3 py-1.5 rounded-full bg-sage-earthy text-canvas-warm text-[10px] sm:text-[11px] font-bold uppercase tracking-wider self-start sm:self-center shrink-0'>
            Section 11 • Overall Course Summary
          </span>
        </div>

        {/* Executive Summary Card */}
        <div className='bento-card-forest p-4 sm:p-5 space-y-3 text-canvas-warm'>
          <div className='flex items-center gap-2.5 pb-2.5 border-b border-sand-beige/20'>
            <div className='w-9 h-9 bento-icon-circle bg-sage-earthy text-canvas-warm shrink-0'>
              <Award size={17} strokeWidth={1.75} />
            </div>
            <div>
              <p className='text-[9px] uppercase tracking-[0.12em] text-sand-beige font-bold'>
                Summative Academic Synthesis
              </p>
              <h3 className='font-display text-base sm:text-lg font-bold leading-snug'>
                Overall Learning Experience in Statistics for Business Analytics
              </h3>
            </div>
          </div>

          <p className='text-[11px] sm:text-xs text-canvas-warm/95 leading-relaxed font-medium'>
            Completing <strong>ITC C601 – Statistics for Business Analytics</strong> under the dedicated mentorship of <strong>Instructor Virginia B. Loyola, MIT</strong> at <strong>José Rizal University</strong> has been a transformative academic milestone in my first year as a <strong>BSIT Business Analytics</strong> student. Across 18 rigorous weeks, this course elevated my perception of statistics from abstract mathematical formulas into an indispensable strategic language for organizational decision-making.
          </p>

          <p className='text-[11px] sm:text-xs text-canvas-warm/95 leading-relaxed font-medium'>
            From constructing my first grouped frequency distribution table and crafting ogive curves in the Prelim period, to navigating the mathematical nuances of grouped variance, modal classes, and standard deviation in the Midterm term, and finally modeling continuous probabilities and percentile positions with the normal distribution curve in the Final term, every module built compounding quantitative confidence. This class portfolio compiles 18 distinct academic artifacts—demonstrating not just individual problem-solving competence, but an abiding commitment to empirical rigor, organizational accountability, and continuous academic growth.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2.5 border-t border-sand-beige/20'>
            <div className='bento-tile p-2.5 sm:p-3 bg-black/20 text-canvas-warm space-y-0.5'>
              <p className='text-[9px] uppercase font-bold text-sand-beige tracking-wider'>CLO 1 Achieved</p>
              <p className='text-[10px] sm:text-[11px] font-semibold leading-snug'>Descriptive Data Organization & Frequency Distributions</p>
            </div>
            <div className='bento-tile p-2.5 sm:p-3 bg-black/20 text-canvas-warm space-y-0.5'>
              <p className='text-[9px] uppercase font-bold text-sand-beige tracking-wider'>CLO 2 Achieved</p>
              <p className='text-[10px] sm:text-[11px] font-semibold leading-snug'>Central Tendency, Variance & Grouped Calculations</p>
            </div>
            <div className='bento-tile p-2.5 sm:p-3 bg-black/20 text-canvas-warm space-y-0.5'>
              <p className='text-[9px] uppercase font-bold text-sand-beige tracking-wider'>CLO 3 Achieved</p>
              <p className='text-[10px] sm:text-[11px] font-semibold leading-snug'>Measures of Position, z-Scores & Normal Distribution Modeling</p>
            </div>
          </div>
        </div>

        {/* Official Guide Closing Reminder Callout */}
        <div className='bento-card-tan p-4 sm:p-5 border-l-4 border-terracotta flex items-start gap-3'>
          <div className='w-8 h-8 rounded-full bg-forest-deep text-sand-beige flex items-center justify-center shrink-0 mt-0.5'>
            <Sparkles size={15} strokeWidth={2} />
          </div>
          <div className='space-y-1 text-espresso'>
            <p className='text-[9px] font-extrabold uppercase tracking-[0.12em] text-terracotta'>
              Course Guide Official Reminder
            </p>
            <p className='font-display text-xs sm:text-sm font-extrabold leading-snug'>
              &ldquo;Your class portfolio is a reflection of your hard work, learning progress, and accomplishments throughout the semester. Make sure it is complete, organized, accurate, and professionally presented.&rdquo;
            </p>
            <p className='text-[11px] font-semibold text-espresso/75 pt-0.5'>
              — Prepared by Prof. Virginia B. Loyola, MIT • José Rizal University
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reflections;
