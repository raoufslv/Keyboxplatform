/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#06112C",
        "secondary": "#35A29F",
        "tertiary": "#004DE1",
      },
    },
  },
  plugins: [],
};
