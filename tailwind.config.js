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
      screens: {
        myLg: "768px",
      },
      height: {
        jj: "18px",
        30: "122px",
        15: "68px",
        19: "73px",
        22222: "60%",
        HeadMedH: "450px",
      },
      width: {
        jj: "18px",
        HeadMedW: "300px",
        15: "68px",
        72: "354px",

        800: "600px",
        4444: "768px",
      },
      maxWidth: {
        72: "354px",
        the72: "450px",
        44: "176px",
        444: "378px",
        4444: "768px",
      },
      minHeight: {
        44: "469",
      },
      borderWidth: {
        6: "6px",
      },
      fontSize: {
        777: " 1.6875rem ",
        xss: "9px",
        myXl: "22px",
        xs1: "11px",
      },
      borderRadius: {
        myround: "55px",
        myround1: "35px",
      },
      padding: {
        19: "47px",
        4.5: "18px",
      },
    },
  },
  plugins: [],
};
