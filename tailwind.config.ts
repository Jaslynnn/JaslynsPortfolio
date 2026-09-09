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
		sans: ["var(--font-neue-mexico-mono)", ...fontFamily.mono],
		mono: ["var(--font-neue-mexico-mono)", ...fontFamily.mono],
	},
	colors: {
		DarkPurple : '#0f0529',
		LightPurple : '#924DBF',
        Black : '#120e17',

	},
	



  	extend: {
  		// Every step bumped up ~2 notches for readability (mono fonts read small).
  		fontSize: {
  			xs: ['0.9375rem', { lineHeight: '1.35rem' }],
  			sm: ['1.0625rem', { lineHeight: '1.6rem' }],
  			base: ['1.1875rem', { lineHeight: '1.85rem' }],
  			lg: ['1.375rem', { lineHeight: '2rem' }],
  			xl: ['1.5rem', { lineHeight: '2.05rem' }],
  			'2xl': ['1.875rem', { lineHeight: '2.35rem' }],
  			'3xl': ['2.375rem', { lineHeight: '2.75rem' }],
  			'4xl': ['2.875rem', { lineHeight: '3.15rem' }],
  			'5xl': ['3.75rem', { lineHeight: '1.1' }],
  			'6xl': ['4.5rem', { lineHeight: '1.05' }],
  			'7xl': ['5.25rem', { lineHeight: '1' }],
  		},
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
