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
				inter: "'Inter', sans-serif",
			},
			animation: {
				gradient: "gradient 6s ease infinite",
			},
			keyframes: {
				gradient: {
					"0%, 100%": { "background-position": "0% 50%" },
					"50%": { "background-position": "100% 50%" },
				},
			},
			colors: {
				gray: {
					light: "#bfbfbf",
					normal: "#8c8c8c",
					dark: "#363330",
				},
				silver: "#b7b7c7",
				blue: {
					normal: "#575766",
					dark: "#35333D",
				},
				black: "#1c1b1a",
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
