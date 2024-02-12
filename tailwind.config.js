/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lightThemePrimary: '#F9F7F7',
      lightThemeSecondary: '#DBE2EF',
      lightThemePrimaryText: '#112D4E',
      lightThemeSecondaryText: '#3F72AF',
      darkThemePrimary: '#021C1E',
      darkThemeSecondary: '#004445',
      darkThemePrimaryText: '#6FB98F',
      darkThemeSecondaryText: 'white',
    },
  },
  plugins: [],
};
