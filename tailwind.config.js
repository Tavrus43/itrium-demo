module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'custom': '1170px',
      },
      spacing: {
        '200': '200px',
        '69': '69px', // Custom size for logo
        '48': '48px', // Custom size for the phone icon background
      },
      fontSize: {
        '13': '13px',
        '14': '14px', // Custom font size
        '16': '16px', // Custom font size
        '21': '21px', // Custom font size
      },
      fontFamily: {
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
        'cabin': ['Cabin', 'sans-serif'], // Assuming Open Sans is added
      },
      colors: {  
        'text-color': '#333333',
        'custom-red': '#850345',
        'custom-red-light': '#B7045F',
        'custom-blue': '#22264B'
         // Custom red color
      },
      width: {
        '30': '30px', // Custom width for icons
      },
      height: {
        '30': '30px', // Custom height for icons
      },
      

    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
