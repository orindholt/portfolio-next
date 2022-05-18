module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				md: "768px",
			},
			boxShadow: {
				l: "-10px 0px 10px 1px #252422",
			},
			fontFamily: {
				inter: "'Inter'",
			},
			colors: {
				gray: {
					normal: "#B6B5B6",
					dark: "#403D39",
				},
				silver: "#b7b7c7",
				blue: {
					normal: "#575766",
					dark: "#35333D",
				},
				black: "#252422",
				orange: {
					light: "#f48c06",
					normal: "#f85032",
					dark: "#e73827",
				},
				green: "#74c69d",
				red: "#e63946",
			},
		},
	},
	plugins: [],
};
