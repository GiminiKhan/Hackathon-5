<<<<<<< HEAD
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {

        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'bg-pattern': "url('/bg.png')",

      }

    },
  },
  plugins: [],
};
export default config;
=======
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {

        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'bg-pattern': "url('/bg.png')",

      }

    },
  },
  plugins: [],
};
export default config;
>>>>>>> 275f5c0002fab35f986307fb1d859f20bf7a35b5
