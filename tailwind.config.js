module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      maxWidth: {
        'custom': '1170px',
      },
      spacing: {
        '200': '200px',
        '69': '69px', 
        '48': '48px', 
      },
      fontSize: {
        '13': '13px',
        '14': '14px', 
        '16': '16px', 
        '21': '21px', 
      },
      fontFamily: {
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
        'cabin': ['Cabin', 'sans-serif'],
      },
      colors: {  
        'text-color': '#333333',
        'custom-red': '#850345',
        'custom-red-light': '#B7045F',
        'custom-blue': '#22264B'
        
      },
      width: {
        '30': '30px', 
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
