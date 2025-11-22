/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      // Responsive typography
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.1' }],
      '6xl': ['3.75rem', { lineHeight: '1.1' }],
    },
    extend: {
      colors: {
        // Dark mode colors - luxury minimalist
        dark: {
          bg: "#0f0f0f",
          surface: "#1a1a1a",
          border: "#333333",
        },
        // Light mode colors - luxury minimalist
        light: {
          bg: "#ffffff",
          surface: "#fafafa",
          border: "#f0f0f0",
        },
        // Monochromatic palette
        neutral: {
          "950": "#0a0a0a",
          "900": "#1a1a1a",
          "800": "#2d2d2d",
          "700": "#404040",
          "600": "#525252",
          "500": "#737373",
          "400": "#a3a3a3",
          "300": "#d4d4d4",
          "200": "#e5e5e5",
          "100": "#f5f5f5",
          "50": "#fafafa",
        },
        // Luxury accent gold
        gold: {
          "50": "#faf8f3",
          "100": "#f5f1e8",
          "200": "#ebe3d1",
          "300": "#dcc9a0",
          "400": "#d4b896",
          "500": "#c9a572",
          "600": "#b8905f",
          "700": "#8d6e3f",
          "800": "#6b5236",
          "900": "#4a372a",
        },
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Times New Roman"', 'Times', 'serif'],
      },
      spacing: {
        "120": "120px",
        "140": "140px",
        "160": "160px",
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        'luxury': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'luxury-dark': '0 4px 16px rgba(0, 0, 0, 0.3)',
      },
      lineHeight: {
        'tight': '1.3',
        'snug': '1.4',
        'relaxed': '1.5',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
