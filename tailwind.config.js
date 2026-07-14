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
        canvas: "#F8F5EF",
        ivory: "#FBFAF7",
        ink: "#171A1F",
        muted: "#5A6374",
        espresso: "#171A1F",
        olive: "#3F4A2F",
        "olive-dark": "#323C25",
        "olive-soft": "#EEF2E8",
        teal: "#4E7C78",
        gold: "#243829",
        "gold-soft": "#E5EEE7",
        line: "#E8DFD0",
        success: "#2F7D4E",
        "success-soft": "#E7F4EC",
        error: "#B42318",
        "error-soft": "#FDE8E5"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        plush: "0 28px 80px rgba(23, 26, 31, 0.09)",
        soft: "0 18px 55px rgba(23, 26, 31, 0.06)",
        button: "0 14px 34px rgba(63, 74, 47, 0.22)"
      }
    }
  },
  plugins: []
};
