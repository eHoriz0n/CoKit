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
        myLg2: "540px",
        myLg3: "494px",
        myLg4: "1020px",
      },
      height: {
        jj: "1.125rem",
        30: "7.625rem",
        15: "4.25rem",
        19: "4.5625rem",
        22222: "60%",
        HeadMedH: "28.125rem",
        e15: "3.625em",
      },
      width: {
        jj: "1.125rem",
        HeadMedW: "18.75rem",
        15: "4.25rem",
        72: "22.125rem",

        800: "37.5rem",
        4444: "48rem",
      },
      maxWidth: {
        72: "22.125rem",
        the72: "28.125rem",
        44: "11rem",
        444: "23.625rem",
        4444: "48rem",
        441: "12.5rem",
      },
      minHeight: {
        44: "29.3125rem",
        50: "50%",
      },
      borderWidth: {
        6: "0.375rem",
      },
      fontSize: {
        777: " 1.6875rem ",
        xss: "0.5625rem",
        myXl: "1.375rem",
        xs1: "0.6875rem",
      },
      borderRadius: {
        myround: "55px",
        myround1: "35px",
      },
      padding: {
        19: "1.1875rem",
        4.5: "1.125rem",
      },
      margin: {
        def: "35%",
      },
    },
  },
  plugins: [],
};
