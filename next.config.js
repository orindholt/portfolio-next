/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "./docs",
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
};

module.exports = nextConfig;
