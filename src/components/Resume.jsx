import React from 'react';
// src/components/Resume.jsx
import { FileText, Download, Maximize2 } from 'lucide-react';

const Resume = ({ onOpenLightbox }) => {

  return (
    <section
      id="section-11"
      aria-labelledby="resume-heading"
      className="bento-section-tonal p-4 sm:p-5 space-y-4 animate-fade-in"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45">
        <div>
          <span className="inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5">
            Section 11 • Creative Pursuits & Curriculum Vitae
          </span>
          <h2
            id="resume-heading"
            className="font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight"
          >
            Hobbies & Resume / Curriculum Vitae
          </h2>
        </div>

        <a
          href="/assets/resume/JulliannaVillalunaResume.pdf"
          download="JulliannaVillalunaResume.pdf"
          className="btn-pill-beige px-3.5 py-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5 self-start sm:self-center shrink-0 print:hidden"
        >
          <Download size={14} />
          <span>Download CV (PDF)</span>
        </a>
      </div>

      {/* Top Bento Summary Row */}
      <div className="grid grid-cols-1 gap-3.5">
        <div className="bento-card-forest p-4 sm:p-5 space-y-2">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-sand-beige/80">
            Academic & Leadership Role
          </p>
          <h3 className="font-display text-base sm:text-lg font-extrabold text-canvas-warm">
            Jullianna Basiao Villaluna
          </h3>
          <p className="text-[11px] font-semibold text-sand-beige">
            BS in Information Technology (Major in Business Analytics) • José Rizal University
          </p>
          <p className="text-[11px] text-canvas-warm/85 pt-0.5">
            Secretary & Data Analyst — AWS Student Builder Group (JRU Chapter) • Student ID: 26-268353
          </p>
        </div>

        <div className="bento-card p-4 sm:p-5 space-y-2.5 flex flex-col justify-between">
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-terracotta">
              Executive Profile
            </p>
            <h3 className="font-display text-base sm:text-lg font-extrabold text-espresso">
              Professional Summary
            </h3>
            <p className="text-[11px] sm:text-xs text-espresso/90 leading-relaxed font-medium mt-1">
              Dynamic IT and Business Analytics student and Data Engineering Pilipinas Scholar skilled in statistical analysis, Python, SQL, AWS cloud infrastructure, and data visualization. Proven track record leading technical workshops, analyzing operational data, and streamlining organizational workflows while combining analytical rigor with creative 3D design.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1.5">
            {[
              'Statistics & Data Analysis',
              'Business Analytics',
              'Python & SQL',
              'AWS Cloud Infrastructure',
              'Data Modeling',
              'Blender 3D Modeling',
            ].map((skill) => (
              <span
                key={skill}
                className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-canvas-tonal text-espresso"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full Visual Resume Preview with Lightbox Trigger */}
      <div className="bento-card p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between gap-2.5 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-forest-deep text-sand-beige flex items-center justify-center shrink-0">
              <FileText size={16} />
            </div>
            <div>
              <h3 className="font-display text-sm sm:text-base font-extrabold text-espresso">
                Curriculum Vitae Document Preview
              </h3>
              <p className="text-[11px] text-terracotta font-semibold">
                Click the resume below to inspect in full-screen Lightbox mode
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              onOpenLightbox &&
              onOpenLightbox({
                src: '/assets/resume/resume.jpg',
                title: 'Jullianna Basiao Villaluna — Curriculum Vitae',
                subtitle: 'BSIT - Business Analytics • José Rizal University',
                tag: 'Section 11 • Official Resume',
              })
            }
            className="print:hidden px-3 py-1.5 rounded-full bg-forest-deep hover:bg-forest-pine text-sand-beige text-[10px] sm:text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            <Maximize2 size={13} />
            <span>View Full-Screen CV</span>
          </button>
        </div>

        <div
          onClick={() =>
            onOpenLightbox &&
            onOpenLightbox({
              src: '/assets/resume/resume.jpg',
              title: 'Jullianna Basiao Villaluna — Curriculum Vitae',
              subtitle: 'BSIT - Business Analytics • José Rizal University',
              tag: 'Section 11 • Official Resume',
            })
          }
          className="relative group cursor-zoom-in bento-tile p-2.5 overflow-hidden"
        >
          <img
            src="/assets/resume/resume.jpg"
            alt="Jullianna Basiao Villaluna Resume"
            className="w-full h-auto max-h-[820px] object-contain rounded-[12px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
