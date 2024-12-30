const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '../../ui/src/**/*.{ts,jsx,tsx}',
    '../../apps/web/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...fontFamily.sans],
      },
      animation: {
        firework: 'firework 1.5s ease-in-out infinite',
      },

      keyframes: {
        firework: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)', opacity: '0.6' }, // Adjusted for softness
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
