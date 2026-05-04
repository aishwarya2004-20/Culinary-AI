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
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#ec4899',
          600: '#db2777',
          800: '#9d174d',
          900: '#831843', // Deep Burgundy
        },
        secondary: {
          50: '#f8fafc',
          500: '#64748b',
          800: '#1e293b',
          900: '#0f172a', // Slate
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706', // Amber/Gold
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
