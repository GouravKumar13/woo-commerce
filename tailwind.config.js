/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/Assets/Other icons/bg.png')",
        "Limited-offer": "url('../../src/Assets/Other icons/Limiter offer.png')"
      }
    },
    colors: {
      red: '#A51910',
      blackP: "#2D2B2B",
      grayS: "#656161",
      white: "#FFFFFF"

    }
  },
  plugins: [],
}