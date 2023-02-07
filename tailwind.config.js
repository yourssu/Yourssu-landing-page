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
      size1: '1920px',
      size2: '1440px',
      size3: '1080px',
      size4: '720px',
    }
  },
  plugins: [],
}
