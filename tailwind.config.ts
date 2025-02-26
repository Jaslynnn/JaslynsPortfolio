import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
	fontFamily: {
		karla: ["Karla", ...fontFamily.sans]
	},
	colors: {
		DarkPurple : '#0f0529',
		LightPurple : '#924DBF',

	},
	



  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
