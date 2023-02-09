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
        NeoEB: ["NeoEB"]
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
      sm: {"min": "0px", 'max': "580px"},
      md: {"min": "580px", 'max': "869px"},
      lg: {"min": "870px", 'max': "1159px"},
      xl: {"min": "1160px", 'max': "1440px"},
      xxl: {"min": "1441px"}
    }
  },
  plugins: [],
}
