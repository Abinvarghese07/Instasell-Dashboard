/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter' : ['Inter'] 
      },
      colors:{
        'second': 'rgba(255, 248, 219, 1)',
        'third' : 'rgba(234, 244, 255, 1)',
        'hero' : 'rgba(255, 247, 238, 1)',
        'button' : 'rgba(248, 247, 255, 1)',
        'text' : 'rgba(74, 74, 74, 1)',
        'box1' : 'rgba(255, 255, 255, 1)',
        'orangebutton': 'rgba(255, 241, 227, 1)',
        'secondB' : 'rgba(241, 241, 241, 1)',
        'dot1': 'rgba(94, 66, 0, 1)',
        'dot2': 'rgba(149, 111, 0, 1)',
        'dot3': 'rgba(229, 165, 0, 1)',
        'dot4': 'rgba(255, 200, 121, 1)',
        'dot5': 'rgba(255, 221, 182, 1)',
        'secondbox': 'rgba(149, 111, 0, 1)',
        'innerBox': 'rgba(255, 235, 213, 1)',
        'outerBox': 'rgba(255, 200, 121, 1)',
        'boxPink': 'rgba(255, 152, 152, 1)',
        'boxMaroon': 'rgba(87, 16, 16, 1)',
        'boxPeach': 'rgba(255, 234, 234, 1)',
        'lastButton': 'rgba(48, 48, 48, 1)'

      }
    },

  },
  plugins: [],
}

