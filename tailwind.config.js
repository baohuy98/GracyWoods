/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slide1": `url('/public/asset/slide1.jpg')`,
        "slide2": `url('/public/asset/slide2.jpg')`,
        "slide3": `url('/public/asset/slide3.jpg')`,
        "slide4": `url('/public/asset/slide4.jpg')`,
        "slide5": `url('/public/asset/slide5.jpg')`,
        "slide6": `url('/public/asset/slide6.jpg')`,
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-slide1',
    'bg-slide2',
    'bg-slide3',
    'bg-slide4',
    'bg-slide5',
    'bg-slide6',
  ],
}