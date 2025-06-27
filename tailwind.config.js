/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'groupize-dark': '#1e2b47',
        'groupize-green': '#4fb06d',
        'groupize-light-green': '#e8f5e9',
        'groupize-text': '#2c3e50',
        'aime-accent': '#3f51b5',
      },
    },
  },
  plugins: [],
}