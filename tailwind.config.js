/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "color-scheme": "light",
          "base-100": "oklch(98% 0.001 106.423)",
          "base-200": "oklch(97% 0.001 106.424)",
          "base-300": "oklch(92% 0.003 48.717)",
          "base-content": "oklch(21% 0.006 56.043)",
          "primary": "oklch(44% 0.017 285.786)",
          "primary-content": "oklch(98% 0 0)",
          "secondary": "oklch(55% 0.288 302.321)",
          "secondary-content": "oklch(97% 0.014 308.299)",
          "accent": "oklch(60% 0.118 184.704)",
          "accent-content": "oklch(98% 0.014 180.72)",
          "neutral": "oklch(44% 0.011 73.639)",
          "neutral-content": "oklch(98% 0.001 106.423)",
          "info": "oklch(54% 0.245 262.881)",
          "info-content": "oklch(97% 0.014 254.604)",
          "success": "oklch(59% 0.145 163.225)",
          "success-content": "oklch(97% 0.021 166.113)",
          "warning": "oklch(68% 0.162 75.834)",
          "warning-content": "oklch(98% 0.026 102.212)",
          "error": "oklch(59% 0.249 0.584)",
          "error-content": "oklch(97% 0.014 343.198)",
          // Додаткові кастомні змінні можна додати через CSS, якщо потрібно
        },
        mydarktheme: {
          "color-scheme": "dark",
          "base-100": "oklch(14% 0.005 285.823)",
          "base-200": "oklch(21% 0.006 285.885)",
          "base-300": "oklch(27% 0.006 286.033)",
          "base-content": "oklch(96% 0.001 286.375)",
          "primary": "oklch(81% 0.111 293.571)",
          "primary-content": "oklch(28% 0.141 291.089)",
          "secondary": "oklch(82% 0.12 346.018)",
          "secondary-content": "oklch(28% 0.109 3.907)",
          "accent": "oklch(87% 0 0)",
          "accent-content": "oklch(14% 0 0)",
          "neutral": "oklch(14% 0.005 285.823)",
          "neutral-content": "oklch(98% 0 0)",
          "info": "oklch(62% 0.214 259.815)",
          "info-content": "oklch(97% 0.014 254.604)",
          "success": "oklch(76% 0.233 130.85)",
          "success-content": "oklch(98% 0.031 120.757)",
          "warning": "oklch(76% 0.188 70.08)",
          "warning-content": "oklch(98% 0.022 95.277)",
          "error": "oklch(63% 0.237 25.331)",
          "error-content": "oklch(97% 0.013 17.38)",
        }
      }
    ]
  }
}