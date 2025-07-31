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
      },
      animation: {
        'bounce-once': 'bounceOnce 1s ease-out',
      },
      keyframes: {
        bounceOnce: {
           '0%': {
    transform: 'translateY(-50%)',
    animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
  },
  '40%': {
    transform: 'translateY(-25%)',
    animationTimingFunction: 'cubic-bezier(0.6, 0, 0.4, 1)',
  },
  '70%': {
    transform: 'translateY(-10%)',
    animationTimingFunction: 'cubic-bezier(0.6, 0, 0.4, 1)',
  },
  '100%': {
    transform: 'translateY(0)',
    animationTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
  },
        },
      },
    },
  },
  plugins: [],
}
