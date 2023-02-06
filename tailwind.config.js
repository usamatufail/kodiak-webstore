/* We  */
/* Tailwind Configuration Docs: https://tailwindcss.com/docs/configuration */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255,255,255,0.5)",
        contrast: "rgba(0,0,0,0.75)"
      }
    },
  },
  plugins: [],
};
