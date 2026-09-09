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
  		// Every step bumped up ~1 notch for readability (mono fonts read small).
  		fontSize: {
  			xs: ['0.8125rem', { lineHeight: '1.15rem' }],
  			sm: ['0.9375rem', { lineHeight: '1.4rem' }],
  			base: ['1.0625rem', { lineHeight: '1.7rem' }],
  			lg: ['1.1875rem', { lineHeight: '1.8rem' }],
  			xl: ['1.375rem', { lineHeight: '1.9rem' }],
  			'2xl': ['1.625rem', { lineHeight: '2.1rem' }],
  			'3xl': ['2rem', { lineHeight: '2.4rem' }],
  			'4xl': ['2.5rem', { lineHeight: '2.8rem' }],
  			'5xl': ['3.25rem', { lineHeight: '1.1' }],
  			'6xl': ['4rem', { lineHeight: '1.05' }],
  			'7xl': ['4.75rem', { lineHeight: '1' }],
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
