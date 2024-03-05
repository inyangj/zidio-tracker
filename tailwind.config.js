/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple2: "#6145D0",
        based: "#090914",
        gray_6: "#52525B",
        gray_7: '#F8FAFC',
        blue1: '#177AE5',
        danger: '#EB1D35',
        success: '#00B058',





        primary: "#0061FF",
        secondary: "#41C498",
        gray_4: "rgba(189, 189, 189, 1)",
        textprimary: "#162D3A",
        textgray: "#828282",
        lightgreen: "#41C498",
        darkgray: "#282828",
        textgreen: "#707070",
        lighttextgray: "#BDBDBD",
        primaryWhite: "#F3F9FA",
      },
      boxShadow: {
        btnShadow: "0px 1px 0px 0px rgba(27, 31, 35, 0.05)",
        formShadow: " 0px 10px 15px 0px #00000008, 0px 3px 11px 0px #0000000F",
      },
      borderRadius: {
        btnRadius: "10px",
      },
    },
  },
  plugins: [],
};

