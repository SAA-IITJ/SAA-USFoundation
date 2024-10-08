/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'suse': ['SUSE', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        primary:"#910707",
      },
      boxShadow: {
        'custom': '1px 1px 12px 0px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}