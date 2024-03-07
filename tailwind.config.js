/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: "#020d19",
      },
      colors: {
        secondary: "#ff5034",
      },
      backgroundImage: {
        sub: "url('/bg-sub.jpg')",
      },
    },
  },
  plugins: [],
};
