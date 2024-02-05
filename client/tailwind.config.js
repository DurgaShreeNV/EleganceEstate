/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};