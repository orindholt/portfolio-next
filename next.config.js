/** @type {import('next').NextConfig} */
const nextConfig = {
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
