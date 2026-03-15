/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        panel: "#121212",
        accent: "#FFFFFF",
        mint: "#D4D4D4",
        text: "#F5F5F5"
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.12), 0 24px 60px rgba(0,0,0,0.55)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.10), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.07), transparent 30%), linear-gradient(180deg, rgba(5,5,5,0.95), rgba(5,5,5,1))"
      }
    }
  },
  plugins: []
};
