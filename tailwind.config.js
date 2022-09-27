module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
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
			white: "#ffffff",
			black: "#1c1b1a",
			orange: {
				light: "#f48c06",
				normal: "#f85032",
				dark: "#e73827",
			},
			green: "#74c69d",
			red: "#e63946",
			inherit: "inherit",
		},
		extend: {
			screens: {
				md: "768px",
			},
			aspectRatio: {
				mobile: "9 / 16",
			},
			boxShadow: {
				l: "-10px 0px 10px 1px #252422",
			},
			fontFamily: {
				roboto: "'Roboto', sans-serif",
				"roboto-mono": "'Roboto Mono', monospace",
				mali: "'Mali', cursive",
			},
			animation: {
				magic: "magic 6s ease-out infinite",
				indicator: "indicator 6s ease-out infinite",
			},
			keyframes: {
				indicator: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(20px)" },
				},
				magic: {
					"0%, 100%": { color: "#C7305D" },
					"25%": { color: "#DF5446" },
					"50%": { color: "#642D87" },
					"75%": { color: "#A94CAA" },
				},
			},

			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
				4: "4 4 0%",
				5: "5 5 0%",
				6: "6 6 0%",
			},
		},
	},
	plugins: [],
};
