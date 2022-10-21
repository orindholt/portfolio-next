/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
});
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	env: {
		EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
		EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
		EMAIL_USER_ID: process.env.EMAIL_USER_ID,
		SUPABASE_KEY: process.env.SUPABASE_KEY,
	},
	images: {
		domains: [
			"cdn.sanity.io",
			"nfbblgowothfxotksqty.supabase.co",
			"94b7e60e831a4088ac11d6a9eb11a48f@o1140329.ingest.sentry.io",
		],
	},
	output: "standalone",
};

module.exports = withPWA(nextConfig);
