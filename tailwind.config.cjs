/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				upDown : {
					"0%" : {transform: "translateY(0)" , opacity: "0"},
					"50%" : {transform: "translateY(60px)", opacity: "100" },
					"100%" : {transform: "translateY(0px)", opacity:"0"},
				}
			},
			animation : {
				upDown : "upDown 2s infinite"
			}
		},
	},
	plugins: [],
}
