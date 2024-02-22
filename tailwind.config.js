/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screen: {
      phoneXs: "575px",
      phoneSm: { min: "576px", max: "897px" },
      tablet: { min: "898px", max: "1199px" },
      desktopXs: { min: "1200px" },
      desktop: { min: "1259px" },
    },
    colors: {
      mainColor: "#393bd0",
    },
  },
  plugins: [],
};
