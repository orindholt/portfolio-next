module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				l: "-10px 0px 10px 1px #252422",
			},
			fontFamily: {
				inter: "'Inter'",
			},
			colors: {
				gray: "#CCC5B9",
				darkGray: "#403D39",
				black: "#252422",
				orange: "#EB5E28",
			},
		},
	},
	plugins: [],
};