/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "./docs",
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	env: {
		email: process.env.EMAIL,
		password: process.env.PASSWORD,
	},
};

module.exports = nextConfig;
