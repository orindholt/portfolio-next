import {ThemeProvider} from "next-themes";
import FormContextProvider from "../Utility/Context";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
	return (
		<FormContextProvider>
			<ThemeProvider attribute="class">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</FormContextProvider>
	);
}

export default MyApp;
