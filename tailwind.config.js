/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Novig Brand Colors from style guide
        'sky-blue': '#7ACFFF',      // PRIMARY BRAND BLUE - CTAs, focused states, accents (CORRECT!)
        'ultra-blue': '#8D83FF',    // Purple accent
        'ice-rink': '#D9FCFE',      // Light cyan accent
        'reflex-green': '#E0E9BE',  // Success - valid fields, success messages
        'orange-zone': '#FCBF28',   // Loss/Warning
        'lilac': '#C581FF',         // Cash out fields
        'daffodil': '#FFF27A',      // Pending fields
        'dark-bg': '#0A0A0A',       // Dark backgrounds
        'novig-black': '#000000',   // Primary black
      },
      fontFamily: {
        sans: ['PP Monument Extended', 'system-ui', '-apple-system', 'sans-serif'],
        monument: ['PP Monument Extended', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
