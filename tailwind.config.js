/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#232536',
        accent: '#ffd050',
        'accent-second': '#592ea9',
        'accent-dark': '#cda73f',
        'border-dark': 'rgba(109, 110, 118, 0.1)',
        'light-dark': '#4c4c4c',
        gray: '#6d6e76',
        purple: '#592ea9',
      },
      backgroundImage: {
        'intro-bg': 'url(../../src/assets/img/intro-bg.png)',
      },
      spacing: {
        pcard: '25px 116px 25px 32px',
      },
    },
    fontFamily: {
      sen: ['Sen', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
