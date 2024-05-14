/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#ffba00',
      'fire-engine-red': '#ad1b1f',
      'silver-chalice': '#ababab',
      'white': '#ffffff',
      'black': '#000000',
      'very-dark-blue':'#23282d',
      'black-coral': '#666666',
      'cyan-lime': '#e7ecea',
      'lily-white': '#f0f3f1',
      'isabelline': '#f1efef',
      'bright-gray': '#e6ecef', 
      'strong-red': '#cd000e', 
      'american-silver': '#cecece',
      'chinese-silver': '#c7c7c7',
      'gray82': '#1d1d1e',
    },
    
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "inner-page-header" : "url('/is-it-career-goog.jpg')",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-opensans)"],
      },
    },
  },
  plugins: [],
};
