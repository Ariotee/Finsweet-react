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
        'accent-dark': '#cda73f',
      },
      backgroundImage: {
        'intro-bg': 'url(../../src/assets/img/intro-bg.png)',
      },
    },
    fontFamily: {
      sen: ['Sen', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
