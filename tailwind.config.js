/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b6065',
        secondary: '#87bba3',
        accent: '#55828c',
        light: '#d9f0f3',
        pale: '#c9e4ca',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px'
      },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}