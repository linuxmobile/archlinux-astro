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
		themes: [
			{
				dark: {
					'primary': '#0F94D2',
					'secondary': '#42AADD',
					'accent': '#75BFE8',
					'neutral': '#032230',
					'base-100': '#DBEAFE',
					'info': '#75BFE8',
					'success': '#36D399',
					'warning': '#FBBD23',
					'error': '#F87272',
				},
				light: {
					'primary': '#75BFE8',
					'secondary': '#0C78AA',
					'accent': '#0F94D2',
					'neutral': '#DBEAFE',
					'base-100': '#032230',
					'info': '#3ABFF8',
					'success': '#36D399',
					'warning': '#FBBD23',
					'error': '#F87272',
				},
			},
		],
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
}
