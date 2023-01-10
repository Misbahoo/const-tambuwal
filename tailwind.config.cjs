/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImageLogin: "url('/images/bgTenOpacity.png')",
      },
    },
  },
  plugins: [],
};
