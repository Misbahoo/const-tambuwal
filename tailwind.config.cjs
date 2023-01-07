/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'bgImageLogin' : "url('/images/bgTenOpacity.png')",
        // 'infraBannerImage' : "url('/images/kwareBg1.jpg')",
        // 'firstBgImageInfra' : "url('/images/BgSocialInfraMid.jpg')",
        // 'topBannerOutreach' : "url('/images/topBannerOutreach.jpg')"
},
    },
  },
  plugins: [],
}