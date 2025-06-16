// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-ElmBg',
    'bg-Bg',
    'bg-BtnLightGrey',
    'bg-BtnDarkGrey',
    'bg-Black',
    'bg-BtnOrange',
  ],
  theme: {
    extend: {
      colors: {
        ElmBg: '#FFFFFF',
        Bg: '#ffed4a',
        BtnLightGrey: '#e3342f',
        BtnDarkGrey: '#495464',
        Black: '#000000',
        BtnOrange: '#FF6900',
      },
    },
  },
};
