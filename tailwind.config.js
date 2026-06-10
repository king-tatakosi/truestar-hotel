/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Accent — Poolside Cyan / Teal (10%)
        gold: {
          100: '#E0F7F9',
          200: '#B2EDF2',
          300: '#4DCDD9',
          400: '#00BDD0',
          500: '#00A4B4',   // PRIMARY TEAL
          600: '#0089A0',
          700: '#006E82',
          800: '#005264',
          900: '#003848',
        },
        // Text — Espresso (30%)
        cream: {
          100: '#FDFBF7',   // alabaster — for text on dark sections
          200: '#2B1E17',   // PRIMARY TEXT (espresso)
          300: '#3D2B1F',
          400: '#4A3527',
          500: '#6B4E3D',   // muted text
          600: '#8C6B58',   // very muted
          700: '#B09080',   // placeholder / disabled
        },
        // Backgrounds — Alabaster (60%)
        dark: {
          100: '#2B1E17',   // deep espresso (hero, footer, structural)
          200: '#3D2B1F',   // slightly lighter espresso
          300: '#F8F2EC',   // warm off-white surface
          400: '#FFFFFF',   // white (card backgrounds)
          500: '#F0E8DC',   // warm beige (input backgrounds)
          600: '#F5EDE3',   // warm cream (alternate section bg)
          700: '#FDFBF7',   // ALABASTER — main background
          800: '#FDFBF7',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display SC"', 'Georgia', 'serif'],
        body: ['Karla', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(0, 164, 180, 0.18)',
        'gold':    '0 4px 20px rgba(0, 164, 180, 0.25)',
        'gold-lg': '0 8px 40px rgba(0, 164, 180, 0.32)',
        'card':      '0 2px 16px rgba(43, 30, 23, 0.08)',
        'card-hover':'0 6px 32px rgba(43, 30, 23, 0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #2B1E17 0%, #3D2B1F 40%, #2B1E17 70%, #1A1008 100%)',
        'gold-gradient': 'linear-gradient(135deg, #4DCDD9 0%, #00A4B4 50%, #0089A0 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(43,30,23,0.85) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
