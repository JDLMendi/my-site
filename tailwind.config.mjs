/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['media'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "520px",
				xl: "620px"
			},
			padding: '2rem',
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
		colors: {
			// Light mode colors
			'light-theme': '#d1d3cbff',
			'primary-light': '#86a6b9ff',
			'primary-hover-light': '#7691a1ff',

			// Dark mode colors
			'dark-theme': '#171614',  
			'primary-dark': '#86a6b9ff',  
			'primary-hover-dark': '#6E8898', 

			// Neutrals
			'n200': '#d7d9da',
			'n900': '#222222',
			'n700': '#171F26',
			'n500': '#555555',
			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
