/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["'Pinyon Script'", "cursive"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(47, 39, 64, 0.18)",
        cta: "0 12px 32px -8px rgba(176, 138, 80, 0.55)",
        card: "0 18px 48px -20px rgba(47, 39, 64, 0.22)",
      },
      keyframes: {
        "drift-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(48px, -36px) scale(1.08)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-42px, 30px) scale(1.05)" },
        },
        "cta-pulse": {
          "0%": { boxShadow: "0 12px 32px -8px rgba(176, 138, 80, 0.55), 0 0 0 0 rgba(176, 138, 80, 0.45)" },
          "70%": { boxShadow: "0 12px 32px -8px rgba(176, 138, 80, 0.55), 0 0 0 14px rgba(176, 138, 80, 0)" },
          "100%": { boxShadow: "0 12px 32px -8px rgba(176, 138, 80, 0.55), 0 0 0 0 rgba(176, 138, 80, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "drift-a": "drift-a 18s ease-in-out infinite",
        "drift-b": "drift-b 18s ease-in-out infinite",
        "cta-pulse": "cta-pulse 6s ease-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        ivory: "#FAF5EF",
        cream: "#FFFDFA",
        "peach-mist": "#F7E9DC",
        "blush-mist": "#F5E3E0",
        "lilac-mist": "#EDE6F2",
        bronze: "#B08A50",
        "bronze-deep": "#8F6B38",
        "gold-light": "#D9B982",
        glacier: "#A9C6D8",
        "glacier-deep": "#5E8299",
        plum: "#2F2740",
        "plum-soft": "#5C5370",
        "plum-faint": "#8A8098",
        sage: "#9FBCA6",
        star: "#D9A441",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}