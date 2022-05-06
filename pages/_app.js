import { ThemeProvider } from "next-themes";
import FormContextProvider from "../Utility/Context";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<FormContextProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem="true"
				themes={["dark", "light"]}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</FormContextProvider>
	);
};

export default MyApp;
