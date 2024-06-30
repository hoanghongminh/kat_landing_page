/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#99EA66",
        mainBlack: "#121212",
        mainGrey: "#F8F8F8",
        primary: "#1DA1F2",
        green: {
          50: "#FAFDF9",
          100: "#F5FDF0",
          200: "#F0FCE8",
          300: "#DFF8D0",
          400: "#B8FD8D",
          500: "#99EA66",
          600: "#8AD35C",
          700: "#79A95C",
          800: "#476C2E",
          900: "#274116",
        },
        grey: {
          50: "#F8F8F8",
          100: "#E8E7E7",
          200: "#DFDFDF",
          300: "#C6C6C6",
          400: "#BABABA",
          500: "#959595",
          600: "#707070",
          700: "#535654",
          800: "#222322",
          900: "#080908",
        },
      },
    },
  },
  plugins: [],
};
