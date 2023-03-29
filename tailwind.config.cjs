/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				helvetica: ['Helvetica Neue'],
			},
		},
	},
	daisyui: {
		themes: {
			dark: {},
			light: {},
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
}
