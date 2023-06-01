/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myYellow: "#FFB800",
        myMateBlack: "#1E1E1E",
        myLightDark: "#383838",
        myBrown: "#7D7461",
        myWhite: "#F1FDF3",
        myDarkYellow: "#8E6B0F",
        myFontWhite: "#FDFFFC",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
