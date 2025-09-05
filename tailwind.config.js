/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#1d1b28",
        background: "#111828",
        coupon: "#8a2eff"
      },
    },
  },
  plugins: [],
}