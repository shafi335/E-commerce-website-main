/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand': {
          '50': '#f0f7ff',
          '100': '#e0effe',
          '200': '#c1e1fd',
          '300': '#93d0fc',
          '400': '#60b8f9',
          '500': '#3b9cf5',
          '600': '#2580ec',
          '700': '#1c68d8',
          '800': '#1a54b1',
          '900': '#17478f',
          '950': '#112d5a',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
