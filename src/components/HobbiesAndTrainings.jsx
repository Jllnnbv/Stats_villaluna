import React from 'react';
// src/components/HobbiesAndTrainings.jsx
import { Award, Calendar, Heart, Box, Users, Maximize2 } from 'lucide-react';

const HobbiesAndTrainings = ({ onOpenLightbox }) => {
  const trainingsAndEvents = [
    {
      title:
        "Hackathons & Innovation Pitches: LIBOT, Financial Health Frontiers & Block 'N Build (Ambagan)",
      issuer: 'Cognizant APAC Hackathon • JBECP-JRU x Paiflow',
      date: '2026',
      type: 'Hackathon',
      images: [
        '/assets/certificates/Hackathon1.png',
        '/assets/certificates/Hackathon2.jpeg',
        '/assets/certificates/Hackathon3.jpeg',
        '/assets/certificates/Hackathon4.jpeg',
        '/assets/certificates/Hackathon5.png',
      ],
    },
    {
      title: 'The Cloud Grand Prix & Fireside Chat (Event Host & Secretary)',
      issuer: 'AWS Student Builder Group - JRU Chapter',
      date: '2026',
      type: 'Leadership & Hosting',
      images: [
        '/assets/certificates/Hosting1.jpeg',
        '/assets/certificates/Hosting2.jpeg',
        '/assets/certificates/Hosting3.jpeg',
      ],
    },
    {
      title: '32nd Mass Induction and Oathtaking Ceremony',
      issuer: 'José Rizal University - Student Leadership',
      date: '2026',
      type: 'Oathtaking',
      images: [
        '/assets/certificates/Oathtaking1.jpeg',
        '/assets/certificates/Oathtaking2.jpeg',
        '/assets/certificates/Oathtaking3.jpeg',
      ],
    },
    {
      title: 'AI Forward with Cloud Basics: Kiro Workshop',
      issuer: 'AWS Learning Club - JRU',
      date: '2026',
      type: 'Workshop',
      images: [
        '/assets/certificates/kiro_cert.jpg',
        '/assets/certificates/kiro_1.jpg',
        '/assets/certificates/kiro_2.jpg',
        '/assets/certificates/kiro_3.jpg',
      ],
    },
    {
      title: 'AWS Student Community Night',
      issuer: 'AWS Community - BGC',
      date: '2026',
      type: 'Community Event',
      images: [
        '/assets/certificates/aws_night_1.jpg',
        '/assets/certificates/aws_night_2.jpg',
        '/assets/certificates/aws_cloud_clubs_merch.jpg',
      ],
    },
    {
      title: 'Gen AI to Z: A Career Summit',
      issuer: 'VibeCoders - UP Diliman',
      date: '2026',
      type: 'Career Summit',
      images: [
        '/assets/certificates/gen_ai_cert.jpg',
        '/assets/certificates/gen_ai_1.jpg',
        '/assets/certificates/gen_ai_3.jpg',
      ],
    },
    {
      title: 'Data and AI for Next Generation of Tech Startups',
      issuer: 'AIM-Dado Banatao Incubator',
      date: '2026',
      type: 'Tech Seminar',
      images: ['/assets/certificates/AIM1.jpg', '/assets/certificates/AIM2.jpg'],
    },
    {
      title: 'Breaking in Building Forward',
      issuer: 'AWS User Group BuildHers+ Philippines - Infor BGC',
      date: '2026',
      type: 'Community Summit',
      images: [
        '/assets/certificates/infor1.jpg',
        '/assets/certificates/infor2.jpg',
        '/assets/certificates/breaking_1.jpg',
        '/assets/certificates/breaking_2.jpg',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy & Python Institute',
      date: 'Oct 2026',
      type: 'Certification',
      images: [
        '/assets/certificates/python_essentials_cert.png',
        '/assets/certificates/python_essentials_badge.png',
      ],
    },
    {
      title:
        'AWS Learning Club JRU Chapter Scholarship with Data Engineering Pilipinas Partnership',
      issuer: 'DataCamp',
      date: '2025',
      type: 'Scholarship',
      images: ['/assets/certificates/datacamp_scholarship.jpg'],
    },
    {
      title: 'Pinterest Media Planner Certification',
      issuer: 'Pinterest',
      date: '2026',
      type: 'Certification',
      images: ['/assets/certificates/Pinterest.png'],
    },
    {
      title: 'Kadakareer X Canva',
      issuer: 'Kadakareer and Canva Collaboration',
      date: '2026',
      type: 'Certification',
      images: [
        '/assets/certificates/canva cert.jpg',
        '/assets/certificates/canva 1.jpg',
        '/assets/certificates/canva2.jpg',
        '/assets/certificates/canva3.jpg',
      ],
    },
    {
      title: 'ASEAN Data Science Enablement',
      issuer: 'ASEAN Youth Organization',
      date: '2026',
      type: 'Certification',
      images: ['/assets/certificates/sap.jpg'],
    },
  ];

  const danceImages = [
    { src: '/assets/hobbies/dance_1.jpg', caption: 'Performance Arts' },
    { src: '/assets/hobbies/dance_2.jpg', caption: 'Choreography' },
    { src: '/assets/hobbies/dance_3.jpg', caption: 'Dagyaw Theater' },
    { src: '/assets/hobbies/dance_4.jpg', caption: 'Stage Showcase' },
  ];

  const blenderImages = [
    {
      src: '/assets/hobbies/3D3.jpeg',
      caption: 'AWS Student Builder Group 3D Emblem (Final Render)',
    },
    {
      src: '/assets/hobbies/3D2.jpeg',
      caption: 'Blender Orthographic Character & Emblem Modeling',
    },
    {
      src: '/assets/hobbies/3D1.jpeg',
      caption: '3D Shading, Lighting & Material Setup in Blender',
    },
  ];

  const renderCardList = (items, sectionLabel) => (
    <div className="grid grid-cols-1 gap-4">
      {items.map((cert, index) => (
        <article
          key={cert.title}
          className="bento-card p-4 sm:p-5 space-y-3 hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-start sm:items-center gap-3">
              <div
                className={`w-9 h-9 rounded-[12px] flex items-center justify-center shrink-0 ${
                  index % 2 === 0
                    ? 'bg-forest-deep text-sand-beige'
                    : 'bg-sage-earthy text-canvas-warm'
                }`}
              >
                <Award size={17} strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-display text-sm sm:text-base font-extrabold text-espresso leading-snug">
                  {cert.title}
                </h4>
                <p className="text-[11px] text-terracotta font-bold uppercase tracking-wider mt-0.5">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <div className="flex items-center sm:flex-col sm:items-end gap-1.5 shrink-0">
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] text-espresso/75 font-bold uppercase">
                <Calendar size={11} />
                {cert.date}
              </span>
              <span className="text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-wider bg-sand-beige text-espresso">
                {cert.type}
              </span>
            </div>
          </div>

          {cert.images && cert.images.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-hide snap-x snap-mandatory">
              {cert.images.map((img, imgIdx) => (
                <div
                  key={img}
                  onClick={() =>
                    onOpenLightbox &&
                    onOpenLightbox({
                      src: img,
                      title: cert.title,
                      subtitle: `${cert.issuer} • ${cert.date}`,
                      tag: `${sectionLabel} • ${cert.type}`,
                    })
                  }
                  className="shrink-0 snap-center bento-tile p-2 cursor-zoom-in group/img relative"
                >
                  <img
                    src={img}
                    alt={`${cert.title} ${imgIdx + 1}`}
                    className="h-36 sm:h-48 w-auto rounded-[12px] object-cover bg-white group-hover/img:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="print:hidden absolute top-3 right-3 p-1.5 rounded-full bg-forest-deep/85 text-sand-beige opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                  </span>
                </div>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );

  return (
    <div id="hobbies-trainings" className="space-y-6 animate-fade-in">
      {/* =========================================================
          SECTION 09: TRAININGS, SEMINARS, HACKATHONS & LEADERSHIP
         ========================================================= */}
      <section
        id="section-9"
        aria-labelledby="section-9-heading"
        className="bento-section-tonal p-4 sm:p-5 space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-forest-deep text-sand-beige flex items-center justify-center shrink-0">
              <Users size={19} strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5">
                Section 09 • Professional Development & Leadership
              </span>
              <h2
                id="section-9-heading"
                className="font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight"
              >
                Trainings, Seminars & Workshops
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-sage-earthy text-canvas-warm text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider self-start sm:self-center shrink-0">
            {trainingsAndEvents.length} Featured Events
          </span>
        </div>

        {renderCardList(trainingsAndEvents, 'Section 09')}
      </section>

      {/* =========================================================
          SECTION 10: CERTIFICATES & TECHNICAL ACHIEVEMENTS
         ========================================================= */}
      <section
        id="section-10"
        aria-labelledby="section-10-heading"
        className="bento-section-forest-tint p-4 sm:p-5 space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sand-muted/45">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-espresso text-sand-beige flex items-center justify-center shrink-0">
              <Award size={19} strokeWidth={1.75} />
            </div>
            <div>
              <span className="inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5">
                Section 10 • Verified Credentials
              </span>
              <h2
                id="section-10-heading"
                className="font-display text-lg sm:text-xl font-extrabold text-forest-deep tracking-tight"
              >
                Certificates & Achievements
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-espresso text-sand-beige text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider self-start sm:self-center shrink-0">
            {certifications.length} Certifications
          </span>
        </div>

        {renderCardList(certifications, 'Section 10')}
      </section>

      {/* =========================================================
          CREATIVE OUTLET & HOBBIES SHOWCASE (3D BLENDER & DANCE)
         ========================================================= */}
      <section
        id="hobbies-showcase"
        aria-labelledby="hobbies-heading"
        className="bento-section-tonal p-4 sm:p-5 space-y-4"
      >
        <div className="flex items-center gap-3 pb-3.5 border-b border-sand-muted/45">
          <div className="w-10 h-10 rounded-[14px] bg-sage-earthy text-canvas-warm flex items-center justify-center shrink-0">
            <Heart size={19} strokeWidth={1.75} />
          </div>
          <div>
            <span className="inline-block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-terracotta mb-0.5">
              Section 11 Companion • Creative Pursuits
            </span>
            <h3
              id="hobbies-heading"
              className="font-display text-base sm:text-lg font-extrabold text-forest-deep"
            >
              Hobbies, 3D Digital Art & Performing Arts
            </h3>
          </div>
        </div>

        <div className="bento-card p-4 sm:p-5 space-y-3.5">
          <div className="text-[11px] sm:text-xs text-espresso/90 leading-relaxed font-medium space-y-2.5">
            <p>
              Beyond my academic pursuits, I am deeply engaged in technology, 3D digital art, and the performing arts. I channel my creativity into <strong>3D Modeling with Blender</strong>, crafting custom 3D mascots and emblems such as the official 3D badge for the <span className="font-bold text-forest-deep">AWS Student Builder Group – JRU Chapter</span>.
            </p>
            <p>
              Dancing is another primary creative passion. As part of the <span className="font-bold text-forest-deep">Vicentinian Maraynon Dagyaw Theater</span>, I explore choreography and stage performances, showcasing my skills on major platforms including the <span className="font-bold text-terracotta">World Championship of Performing Arts (WCOPA)</span>, <span className="font-bold text-terracotta">ASEAN Hip Hop</span>, and <span className="font-bold text-terracotta">World of Dance (WOD)</span>.
            </p>
          </div>

          {/* 3D Modeling Gallery */}
          <div className="space-y-2.5 pt-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-deep text-sand-beige text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em]">
              <Box size={13} />
              <span>3D Modeling & Digital Art (Blender)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {blenderImages.map((img) => (
                <div
                  key={img.src}
                  onClick={() =>
                    onOpenLightbox &&
                    onOpenLightbox({
                      src: img.src,
                      title: img.caption,
                      subtitle: '3D Modeling & Digital Art (Blender)',
                      tag: 'Creative Hobby',
                    })
                  }
                  className="bento-tile p-2 cursor-zoom-in group relative overflow-hidden"
                >
                  <div className="relative h-40 rounded-[12px] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5">
                      <p className="text-white text-[10px] sm:text-[11px] font-semibold leading-snug">{img.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performing Arts Gallery */}
          <div className="space-y-2.5 pt-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-earthy text-canvas-warm text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em]">
              <Heart size={13} />
              <span>Performing Arts & Dance (WCOPA • ASEAN Hip Hop • WOD)</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {danceImages.map((img) => (
                <div
                  key={img.src}
                  onClick={() =>
                    onOpenLightbox &&
                    onOpenLightbox({
                      src: img.src,
                      title: img.caption,
                      subtitle: 'Vicentinian Maraynon Dagyaw Theater • Performing Arts',
                      tag: 'Creative Hobby',
                    })
                  }
                  className="bento-tile p-2 cursor-zoom-in group relative overflow-hidden"
                >
                  <div className="relative h-40 rounded-[12px] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5">
                      <p className="text-white text-[10px] sm:text-[11px] font-semibold leading-snug">{img.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HobbiesAndTrainings;
