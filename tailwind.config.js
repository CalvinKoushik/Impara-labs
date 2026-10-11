/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0866E8',    // Primary blue
          accent: '#159CF5',     // Accent blue
          navy: '#091B78',       // Deep navy
          pale: '#F0F7FF',       // Pale blue
          body: '#253653',       // Body text
          border: '#DCEBFA',     // Borders
          dark: '#0B132B',       // Dark surface
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(8, 102, 232, 0.08), 0 2px 6px -1px rgba(9, 27, 120, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(8, 102, 232, 0.16), 0 4px 12px -2px rgba(9, 27, 120, 0.08)',
        'glow': '0 0 24px rgba(21, 156, 245, 0.35)',
      }
    },
  },
  plugins: [],
}
