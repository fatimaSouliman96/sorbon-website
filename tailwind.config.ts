import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0effa", 
        secondary: "#17133F",
        thirdy: "#E0963F" 
      },
      screens: {
        '913max': { max: '913px' }, 
        '914min': { min: '914px' }, 
        '721max': { max: '721px' }, 
        '721min': { min: '721px' }, 
        '585max': { max: '585px' }, 
        '585min': { min: '585px' }, 
        '433max': { max: '433px' }, 
        '431max': { max: '431px' }, 
        '431min': { min: '431px' }, 
        '1055': { max: '1055px', min: "992px" }, 
        '1227MAX': {max: '1227px'},
        '1227min': {min: '1227px'},
        '1249max': {max: '1249px'},
        '1250min': {min: '1250px'},
        '1213min': {min: '1213px'},
        '1213max': {max: '1213px'},
      },
      backgroundImage: {
        'hero-categories-bg': "url('/categoroes.jfif')", 
        'hero-cities-bg': "url('/cities.jfif')", 
        'hero-home-bg': "url('/home.jfif')", 
        'hero-about-bg': "url('/about.jfif')",
        'hero-contact-bg': "url('/contact.jfif')"

      },
      boxShadow: {
        'custom-md': '0px 2px 4px 0px rgba(23, 19, 63, 0.25)',
        'custom-lg': '0px 0px 6px 0px rgba(23, 19, 63, 0.25)',
      },
    },
  },

  plugins: [],
} satisfies Config;
