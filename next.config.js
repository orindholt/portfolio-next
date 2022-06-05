/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	env: {
		EMAIL: process.env.EMAIL,
		PASSWORD: process.env.PASSWORD,
	},
	images: {
		domains: ["cdn.sanity.io"],
	},
};

module.exports = nextConfig;
