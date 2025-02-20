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
        '1055': { max: '1055px', min: "992px" } 
      },
      backgroundImage: {
        'hero-categories-bg': "url('/hero-category.png')", 
        'hero-cities-bg': "url('/hero-cities.png')", 
        'hero-home-bg': "url('/hero-image.png')", 
      },
    },
  },

  plugins: [],
} satisfies Config;
