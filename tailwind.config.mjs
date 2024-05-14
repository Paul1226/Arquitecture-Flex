/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'poppins': ['Poppins', 'sans-serif'],
				'playfair': ['Playfair Display Variable', 'serif'],
			},
			colors:{
				textColor:'#424241',
				bgColor:'#DEDAD5',
				bgBody:'#FAF8F5',
			}
		},
	},
	plugins: [],
}
