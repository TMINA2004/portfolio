/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
        colors: {
        'dark-blue': '#0a1f44',
        'light-blue': '#7DE0EA',
      }
    },
  },
  plugins: [],
}

