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
        ignews: {
          blue: "#61DCFB",
          green: "#04D361",
          yellow: "#EBA417",
          gray: {
            title: "#E1E1E6",
            text: "#A8A8B3",
            shape: "#1F2729",
            background: "#121214",
          },
        },
      },
    },
  },
  plugins: [],
};
