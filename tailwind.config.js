/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#0B0B0B",
        section: "#111111",
        card: "#161616",
        textPrimary: "#FFFFFF",
        textSecondary: "#B3B3B3",
        textMuted: "#6B6B6B",
        borderSoft: "#222222",
        accent: "#FFFFFF"
      },
      fontFamily: {
        body: ["'Plus Jakarta Sans'", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 40px rgba(0, 0, 0, 0.35)",
        nav: "0 8px 30px rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        xl2: "16px"
      }
    }
  },
  plugins: []
};
