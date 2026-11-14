/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-deep': '#244B43',
        'forest-pine': '#335C54',
        'sage-earthy': '#5B7A50',
        'terracotta': '#6E4735',
        'espresso': '#462E22',
        'sand-beige': '#E6C3A0',
        'sand-muted': '#C5A78B',
        'canvas-warm': '#F6F1EA',
        'canvas-tonal': '#EDE3D5',
        'surface-ivory': '#FAF6F0',
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      borderRadius: {
        'bento': '18px',
        'bento-lg': '20px',
        'bento-sm': '16px',
      },
    },
  },
  plugins: [],
};
