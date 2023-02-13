/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/container/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      project: "35px",
    },
    extend: {
      fontFamily: { 
        Roboto: ["Roboto"],
        NeoSB: ["NeoSB"],
        NeoR: ["NeoR"],
        NeoEB: ["NeoEB"],
        Jost: ["Jost"]
      },
      textColor: {
        Text_Color1: ["#8D8A93"],
        Text_Color2: ["#525252"],
        Text_Color3: ["#CDCDCD"],
      },
      colors: {
        gradient_color1: ["#F590FA"],
        gradient_color2: ["#81A0F6"],
      }
    },
    screens: {
      xs: {"min": "0px", "max": "350px"},
      sm: {"min": "350px", 'max': "720px"},
      md: {"min": "721px", 'max': "1080px"},
      lg: {"min": "1081px", 'max': "1440px"},
      xl: {"min": "1441px", 'max': "1920px"},
      xxl: {"min": "1921px"}
    }
  },
  plugins: [],
}
