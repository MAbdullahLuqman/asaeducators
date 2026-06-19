/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  safelist: [
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-5",
    "md:col-span-7",
    "md:min-h-[360px]",
    "md:min-h-[520px]"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8F9FA",
        ink: "#1A1D24",
        muted: "#5A6374",
        espresso: "#2B2418",
        olive: "#6B5B2E",
        "olive-dark": "#574923",
        gold: "#C08A3E",
        "gold-soft": "#F0EBDD",
        line: "#E6E0D4"
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        plush: "0 24px 80px rgba(26, 29, 36, 0.08)",
        soft: "0 16px 48px rgba(26, 29, 36, 0.06)"
      }
    }
  },
  plugins: []
};
