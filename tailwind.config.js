/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // "@xs": { min: "200px", max: "319px" },
        "@sm": { max: "768px" },
        "@md": { min: "769px", max: "1024px" },
        "@lg": { min: "1025px", max: "1440px" },
        "@lgtab": { min: "1024px", max: "1200px" },
        "@xl": { min: "1441px", max: "1919px" },
        "@2xl": { min: "1920px" },
      },
    },
  },
  plugins: [],
};
