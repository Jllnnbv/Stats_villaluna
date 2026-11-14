// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  BookOpen,
  Layers,
  MessageSquare,
  Award,
  FileText,
  Printer,
} from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Cover & TOC (Sec 01–02)', icon: <Home size={19} strokeWidth={2} /> },
    { path: '/profile', label: 'Student Profile (Sec 03)', icon: <User size={19} strokeWidth={2} /> },
    { path: '/overview', label: 'Course Syllabus (Sec 04)', icon: <BookOpen size={19} strokeWidth={2} /> },
    { path: '/portfolio', label: 'Coursework (Sec 05–09)', icon: <Layers size={19} strokeWidth={2} /> },
    { path: '/reflections', label: 'Reflection & Summary (Sec 10–11)', icon: <MessageSquare size={19} strokeWidth={2} /> },
    { path: '/hobbies-trainings', label: 'Trainings & Certs', icon: <Award size={19} strokeWidth={2} /> },
    { path: '/resume', label: 'Resume & CV', icon: <FileText size={19} strokeWidth={2} /> },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <nav
      aria-label='Main Navigation'
      className='w-full flex justify-center mb-6 sm:mb-8 print:hidden'
    >
      <div className='bg-[#244B43] border border-[#335C54]/60 rounded-full shadow-xl px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-4 md:gap-5 transition-all duration-300'>
        {/* Navigation Logo Icons */}
        <div className='flex items-center gap-1 sm:gap-2 md:gap-3'>
          {navItems.map((item) => (
            <div key={item.path} className='relative group'>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#E6C3A0] text-[#244B43] shadow-md scale-105 ring-2 ring-[#E6C3A0]/40'
                      : 'text-[#E6C3A0]/85 hover:text-[#E6C3A0] hover:bg-white/10 hover:scale-105'
                  }`
                }
                aria-label={item.label}
              >
                {item.icon}
              </NavLink>

              {/* Floating Tooltip on Hover */}
              <div className='absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap'>
                <div className='bg-[#1D3E37] text-canvas-warm border border-[#335C54] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xl'>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Vertical Divider */}
        <div className='h-5 w-[1px] bg-white/20 mx-0.5 sm:mx-1' aria-hidden='true' />

        {/* Sage Green PRINT PDF Pill Button */}
        <button
          type='button'
          onClick={handlePrint}
          title='Export entire 11-section portfolio to PDF with 1-inch margins'
          className='flex items-center gap-1.5 sm:gap-2 bg-[#517359] hover:bg-[#5D8466] active:scale-95 text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md transition-all duration-200 shrink-0'
        >
          <Printer size={15} strokeWidth={2.2} />
          <span>PRINT PDF</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
