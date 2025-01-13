/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the App Router structure
    "./pages/**/*.{js,ts,jsx,tsx}", // Include any remaining Pages Router files (if used)
    "./components/**/*.{js,ts,jsx,tsx}", // Include reusable components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
