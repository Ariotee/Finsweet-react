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
        'border-dark': 'rgba(109, 110, 118, 0.3)',
      },
      backgroundImage: {
        'intro-bg': 'url(../../src/assets/img/intro-bg.png)',
        'story-bg': 'url(../../src/assets/img/ourStory-ill.png)',
      },
      spacing: {
        pcard: '25px 116px 25px 32px',
      },
      gridTemplateColumns: {
        category: 'repeat(4, minmax(0, 1fr))',
        authors: 'repeat(4, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      sen: ['Sen', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
