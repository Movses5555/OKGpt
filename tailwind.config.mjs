/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-main': '#02CCCE',
      },
      backgroundImage: {
        'gradient_1': 'linear-gradient(0, #02CCCE 100%, #03D49E 100%), linear-gradient(90deg, #02CCCE 0%, #03D49E 100%)',
        'gradient_2': 'linear-gradient(180deg, rgba(39, 37, 42, 0.50) 0%, rgba(24, 24, 26, 0.50) 100%)',
      },
      fontFamily: {
        robotoMono: ['var(--font-roboto-mono)', 'monospace'], // Tailwind font utility
      },
    },
  },
  plugins: [],
};
