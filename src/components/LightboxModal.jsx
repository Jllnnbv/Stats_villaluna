import React, { useEffect, useState } from 'react';
// src/components/LightboxModal.jsx
import { X, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

const LightboxModal = ({ item, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!item) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title || 'Full-screen image viewer'}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#182622]/90 backdrop-blur-md p-3 sm:p-6 print:hidden animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bento-card-forest overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-sand-beige/20 bg-[#244B43]">
          <div className="min-w-0">
            {item.tag && (
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sand-beige text-espresso mb-1">
                {item.tag}
              </span>
            )}
            <h3 className="font-display text-sm sm:text-base font-bold text-canvas-warm truncate">
              {item.title || 'Portfolio Screenshot'}
            </h3>
            {item.subtitle && (
              <p className="text-xs text-sand-beige/85 truncate">{item.subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsZoomed((prev) => !prev)}
              className="p-2 rounded-full bg-forest-pine hover:bg-sage-earthy text-sand-beige transition-colors"
              title={isZoomed ? 'Fit to screen' : 'Zoom image'}
              aria-label={isZoomed ? 'Fit to screen' : 'Zoom image'}
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-forest-pine hover:bg-sage-earthy text-sand-beige transition-colors"
              title="Open original image in new tab"
              aria-label="Open original image in new tab"
            >
              <ExternalLink size={18} />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-sand-beige text-espresso hover:bg-sand-muted transition-colors font-bold"
              title="Close viewer (Esc)"
              aria-label="Close viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image Viewport */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#1C332E] flex items-center justify-center">
          <img
            src={item.src}
            alt={item.title || 'Full-screen preview'}
            onClick={() => setIsZoomed((prev) => !prev)}
            className={`transition-transform duration-300 rounded-[14px] shadow-2xl cursor-zoom-in ${
              isZoomed
                ? 'max-w-none w-[140%] sm:w-[125%] cursor-zoom-out'
                : 'max-h-[74vh] w-auto max-w-full object-contain'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
