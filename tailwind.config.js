  // tailwind.config.js
  module.exports = {
    theme: {
      backgroundColor: theme => ({

       ...theme('colors'),

       'ElmBg': '#FFFFFF',

       'Bg': '#ffed4a',

       'BtnLightGrey': '#e3342f',

       'BtnDarkGrey' : '#495464',

       'Black' : '#000000',

       'BtnOrange' : '#FF6900'
      })
    }
  }