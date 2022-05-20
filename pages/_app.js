import { ThemeProvider } from "next-themes";
import FormContextProvider from "../utils/Context";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps, router }) => {
	return (
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
	);
};

export default MyApp;
