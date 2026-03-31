/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cb-black':  '#080808',
        'cb-surface': '#0f0f0f',
        'cb-panel':  '#141414',
        'cb-border': '#222222',
        'cb-muted':  '#2a2a2a',
        'cb-subtle': '#3a3a3a',
        'cb-text':   '#e8e8e8',
        'cb-dim':    '#888888',
        'cb-faint':  '#444444',

        /* Accent – restrained amber/sage, no blue/purple */
        'cb-accent': '#d4a44c',
        'cb-green':  '#4caf7d',
        'cb-red':    '#d4604c',
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scroll-left-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease forwards',
        'slide-in-left': 'slide-in-left 0.3s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee-lr': 'scroll-left-right 12s linear infinite',
      },
    },
  },
  plugins: [],
}
