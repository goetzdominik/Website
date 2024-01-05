/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#111827',
        border_col: '#111827',
        secondary: '#f9fafb',
        nav_col: '#374151',
        nav_col_dark: '#1f2937',
        action: ' #6b7280 '   // #23A9F1 blau active
       },
      fontFamily:{
        body: ['Merriweather ']
      },
      fontSize:{
        xxs: ['0.7rem', { lineHeight: '0.75' }],

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
