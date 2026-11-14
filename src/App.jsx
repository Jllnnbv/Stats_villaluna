import React, { useState, useEffect } from 'react';
// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import StudentProfile from './components/StudentProfile';
import CourseOverview from './components/CourseOverview';
import Portfolio from './components/Portfolio';
import Reflections from './components/Reflections';
import HobbiesAndTrainings from './components/HobbiesAndTrainings';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import TableOfContents from './components/TableOfContents';
import LightboxModal from './components/LightboxModal';

const ScrollToSectionHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return undefined;
  }, [pathname, hash]);

  return null;
};

const App = () => {
  const [lightboxItem, setLightboxItem] = useState(null);

  const handleOpenLightbox = (item) => {
    setLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <div className='relative min-h-screen bg-canvas-warm text-espresso font-sans selection:bg-forest-deep selection:text-sand-beige overflow-x-hidden'>
      <ScrollToSectionHandler />

      {/* Subtle Earthy Botanical & Tonal Ambient Background (Screen Only) */}
      <div
        aria-hidden='true'
        className='fixed inset-0 z-0 pointer-events-none overflow-hidden print:hidden'
      >
        <div className='absolute -top-28 -left-24 w-[34rem] h-[34rem] rounded-full bg-[#244B43]/[0.05] blur-3xl' />
        <div className='absolute top-1/3 -right-28 w-[30rem] h-[30rem] rounded-full bg-[#5B7A50]/[0.06] blur-3xl' />
        <div className='absolute -bottom-28 left-1/4 w-[32rem] h-[32rem] rounded-full bg-[#6E4735]/[0.05] blur-3xl' />
      </div>

      {/* Main Content Container (Centered Folio Box) */}
      <main className='relative z-10 max-w-2xl mx-auto my-4 sm:my-6 px-3 sm:px-4'>
        <Navigation />

        {/* Interactive Multi-Page Router View (Hidden during Print so Print renders all 11 sections) */}
        <div className='print:hidden space-y-8'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero onOpenLightbox={handleOpenLightbox} />
                  <TableOfContents />
                </>
              }
            />
            <Route path='/profile' element={<StudentProfile />} />
            <Route path='/overview' element={<CourseOverview />} />
            <Route
              path='/portfolio'
              element={<Portfolio onOpenLightbox={handleOpenLightbox} />}
            />
            <Route path='/reflections' element={<Reflections />} />
            <Route
              path='/hobbies-trainings'
              element={<HobbiesAndTrainings onOpenLightbox={handleOpenLightbox} />}
            />
            <Route
              path='/resume'
              element={<Resume onOpenLightbox={handleOpenLightbox} />}
            />
          </Routes>
        </div>

        {/* Complete 11-Section Print View (@media print with 1-inch margins) */}
        <div className='hidden print:block space-y-8'>
          <Hero />
          <TableOfContents />
          <div className='print-page-break'>
            <StudentProfile />
          </div>
          <div className='print-page-break'>
            <CourseOverview />
          </div>
          <div className='print-page-break'>
            <Portfolio />
          </div>
          <div className='print-page-break'>
            <Reflections />
          </div>
          <div className='print-page-break'>
            <HobbiesAndTrainings />
          </div>
          <div className='print-page-break'>
            <Resume />
          </div>
        </div>

        {/* Footer */}
        <footer className='mt-10 pb-8 text-center'>
          <div className='bento-card-forest px-4 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px]'>
            <p className='font-display font-bold text-canvas-warm tracking-[0.1em] uppercase'>
              © 2026 Jullianna Basiao Villaluna • ITC C601 Statistics for Business Analytics
            </p>
            <p className='text-sand-beige font-semibold'>
              Prepared for Instructor Virginia B. Loyola, MIT • José Rizal University
            </p>
          </div>
        </footer>
      </main>

      {/* Global Full-Screen Screenshot Lightbox Modal */}
      <LightboxModal item={lightboxItem} onClose={handleCloseLightbox} />

      <Analytics />
    </div>
  );
};

export default App;
