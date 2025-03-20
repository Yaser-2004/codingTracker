/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
            jakarta: ['var(--font-jakarta)', 'sans-serif'], // Add Jakarta sans
            poppins: ["var(--font-poppins)", "sans-serif"],
        },
      },
    },
    plugins: [],
  };