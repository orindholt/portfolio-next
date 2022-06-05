import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import Loader from "./Loader";

const PageLoader = () => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		Router.events.on("routeChangeStart", () => setIsLoading(true));
		Router.events.on("routeChangeError", () => setIsLoading(false));
		Router.events.on("routeChangeComplete", () => setIsLoading(false));
	}, []);

	return (
		<AnimatePresence>
			{isLoading && (
				<div className="z-50 fixed top-0 bottom-0 right-0 left-0 grid place-content-center">
					<Loader />
				</div>
			)}
		</AnimatePresence>
	);
};

export default PageLoader;
