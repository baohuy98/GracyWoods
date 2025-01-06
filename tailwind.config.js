/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "circular": `url('/public/asset/slide1.jpg')`,
      },
    },
  },
  plugins: [],
}