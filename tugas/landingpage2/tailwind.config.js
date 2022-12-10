/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-font':'#35414B',
        'gray-font' : '#4E5A65',
        'purple-button' : '#796EFF',
        'purple-second' : '#ECE5FF',
      },
      fontFamily:{
        'inter':'inter',
      }
    },
  },
  plugins: [],
}