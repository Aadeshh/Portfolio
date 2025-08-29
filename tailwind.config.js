/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0a0e27',
          black: '#000000',
        },
        accent: {
          cyan: '#00d4ff',
          purple: '#8b5cf6',
          gold: '#fbbf24',
        },
        text: {
          primary: '#ffffff',
          secondary: '#e5e7eb',
          muted: '#9ca3af',
        },
        neutral: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      spacing: {
        '1': '0.5rem',   // 8px
        '2': '1rem',     // 16px
        '3': '1.5rem',   // 24px
        '4': '2rem',     // 32px
        '5': '2.5rem',   // 40px
        '6': '3rem',     // 48px
        '8': '4rem',     // 64px
        '10': '5rem',    // 80px
        '12': '6rem',    // 96px
        '16': '8rem',    // 128px
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color',
        'transform': 'transform',
        'all': 'all',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}