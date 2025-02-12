import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container:"1440px",
      contentContainer: "1140px",
      containerSmall:"1024px",
      containerxs:"768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"

      },
      fontFamily: {
        bodyFont: ["Bebas Neue", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        headerFont:["Bebas Neue, sans-serif"],
        accentFont: ["Dancing Script", "sans-serif"]


      },
      boxShadow: { 
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)"
      },
      colors: {
        bodyColor:'#FFFFFF',
        textBrown: '#5C3D2E',
        textLight: '#A85D33',
        textBlack: '#000000',
        textBeige: '#D4A373',
        hoverColor: "#FAD02C",
        lightColor: "#FBF6F1",
        darkGrey: "#282828",
        blackGrey:"#0B0B0B",
        darkYellow: "#E8B209",
        offWhite: "#FFFBEF"
        
      },
    },
  },
  plugins: [ ],
} satisfies Config;
