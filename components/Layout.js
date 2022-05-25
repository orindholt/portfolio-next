import Navbar from "./Nav/Navbar";
import Footerbar from "./Footer";
import { AnimatePresence, motion as m } from "framer-motion";
import Head from "next/head";
import PageLoader from "./PageLoader";

const variants = {
	hidden: { opacity: 0, x: -200 },
	enter: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 200 },
};

const Layout = ({ children, router }) => {
	return (
		<>
			<Head>
				<title>Oliver Rindholt</title>
			</Head>
			<div
				id="app-wrap"
				className="flex flex-col min-h-screen relative overflow-x-hidden"
			>
				<Navbar />
				<AnimatePresence exitBeforeEnter>
					<m.main
						key={router.route}
						variants={variants}
						initial="hidden"
						animate="enter"
						exit="exit"
						transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
						className="pb-12 pt-16 md:pt-20 px-[5%] text-center max-w-7xl mx-auto w-full relative"
					>
						{children}
					</m.main>
				</AnimatePresence>
				<Footerbar />
				<PageLoader />
			</div>
		</>
	);
};

export default Layout;
