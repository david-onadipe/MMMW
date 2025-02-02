/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      darkpurple: '#3D446A',
      purple: '#4E4187',
      white: '#ffffff',
      pink: '#F2D7EE',
      black: '#000000',
      contactlightblue: '#F0F5FE',
      contactmidblue: '#6381B1',
      contactdarkblue: '#40649E',
      warmwhite: '#fffdf8',

    },
    screens: {
      'xxs': '360px',
      // => @media (min-width: 640px) { ... }

      'xs': '410px',
      // => @media (min-width: 640px) { ... }

      'xs2': '500px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md2': '850px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg2': '1150px',
      // => @media (min-width: 768px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl2': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      'singleman': "url('../public/images/happysingleman.jpg')",
      'singleman': "url('../public/images/happysingleman.jpg')",
      'singleman': "url('../public/images/happysingleman.jpg')",
      'singleman': "url('../public/images/happysingleman.jpg')",
    },
    
    extend: {

      
    }
  },
  plugins: [],
}

