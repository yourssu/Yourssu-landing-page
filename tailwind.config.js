/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { 
        Roboto: ["Roboto"],
        NeoSB: ["NeoSB"],
        NeoR: ["NeoR"],
      },
      textColor: {
        Text_Color1: ["#8D8A93"],
        Text_Color2: ["#525252"],
      }
    },
  },
  plugins: [],
}
