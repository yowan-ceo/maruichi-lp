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
        brand: {
          blue: {
            50: "#f0f9fc",
            100: "#e0f4fa",
            200: "#b9e6f4",
            300: "#7fd0eb",
            400: "#3eb7df",
            500: "#00a5d4", // official main
            600: "#0084aa",
            700: "#006480",
            800: "#07546a",
            900: "#0c4658",
            950: "#052d3a",
          },
          navy: {
            DEFAULT: "#0f2d4a",
            dark: "#0a1f33",
            light: "#1e3a8a",
          },
          orange: {
            DEFAULT: "#f97316",
            hover: "#ea580c",
            light: "#ffedd5",
          },
          yellow: {
            DEFAULT: "#facc15",
            hover: "#eab308",
            light: "#fef9c3",
          },
          line: {
            DEFAULT: "#06c755",
            hover: "#05b34c",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Noto Sans JP", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(0, 165, 212, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        cta: "0 8px 25px -4px rgba(249, 115, 22, 0.4)",
        float: "0 10px 30px -5px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
