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
      }
    },
  },
  plugins: [],
}
