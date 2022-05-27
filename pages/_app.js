import { ThemeProvider } from "next-themes";
import FormContextProvider from "../utils/Context";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps, router }) => {
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta
					name="description"
					content="Web Developer Portfolio of Oliver Rindholt."
				/>
				<meta name="author" content="Oliver Rindholt" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<FormContextProvider>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem="true"
					themes={["dark", "light"]}
				>
					<Layout router={router}>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</FormContextProvider>
		</>
	);
};

export default MyApp;
