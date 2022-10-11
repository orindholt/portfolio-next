import Navbar from "./Nav/Navbar";
import Footerbar from "./Footer";
import { AnimatePresence, motion as m } from "framer-motion";
import Head from "next/head";
import RouteLoader from "./RouteLoader";
import { useRouter } from "next/router";
import pathTitle from "../utils/pathTitle";

const variants = {
	hidden: { opacity: 0, x: -200 },
	enter: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 200 },
};

const Layout = ({ children, router }) => {
	const { asPath } = useRouter();

	let titleString = `Oliver ${
		pathTitle(asPath) ? `- ${pathTitle(asPath)}` : "Rindholt"
	}`;

	return (
		<>
			<div id="app-wrap" className="relative overflow-x-hidden">
				{router && (
					<Head>
						<title>{titleString}</title>
					</Head>
				)}
				<Navbar />
				<AnimatePresence mode="wait">
					<m.main
						key={router.route}
						variants={variants}
						initial="hidden"
						animate="enter"
						exit="exit"
						transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
						className="md:pt-12 py-6 text-center w-full relative flex flex-col min-h-screen"
					>
						{children}
					</m.main>
				</AnimatePresence>
				<Footerbar />
				<RouteLoader />
			</div>
		</>
	);
};

export default Layout;
