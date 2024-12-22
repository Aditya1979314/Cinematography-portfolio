
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/src/assests/heroimagedesktop.png')",
        'hero-phone' : "url('/src/assests/heroimage.png')",
        'contact-phone': "url('/src/assests/contact.png')"
      }
    },
  },
  plugins: [],
}