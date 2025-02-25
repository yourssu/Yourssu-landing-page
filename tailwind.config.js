/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/containers/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    scale: {
      '-100': '-1',
    },
    borderRadius: {
      project: '35px',
    },
    extend: {
      keyframes: {
        accordionSlideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionSlideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-slide-down': 'accordionSlideDown 300ms ease-out',
        'accordion-slide-up': 'accordionSlideUp 300ms ease-out',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        roboto: ['Roboto'],
        jost: ['Jost'],
        neo: ['Neo'],
        pretendard: ['Pretendard'],
        'apple-neo': ['Apple SD Gothic Neo'],
      },
      textColor: {
        Text_Color1: ['#8D8A93'],
        Text_Color2: ['#525252'],
        Text_Color3: ['#CDCDCD'],
      },
      colors: {
        gradient_color1: ['#F590FA'],
        gradient_color2: ['#81A0F6'],
        mainGra1: ['#f953ff'],
        mainGra2: ['#5a89ff'],
        glass: ['rgba(255, 255, 255, 0.5)'],
        white: ['#FFFFFF'],
        black: ['#111111'],
        gray1: ['#525252'],
        gray2: ['#d4d7db'],
        gray3: ['#ececec'],
        gray4: ['#f9fafb'],
        purple: ['#db95fa'],
        blue: ['#5a47cc'],
        bluegray1: ['#98a4cd'],
        bluegray2: ['#d8def2'],
        bluegray3: ['#e9ecf6'],
        bluegray4: ['#f4f6fc'],
      },
    },
    screens: {
      xs: { min: '0px', max: '350px' },
      sm: { min: '350px', max: '720px' },
      md: { min: '721px', max: '1080px' },
      lg: { min: '1081px', max: '1440px' },
      xl: { min: '1441px', max: '1920px' },
      xxl: { min: '1921px' },
    },
  },
  plugins: [],
};
