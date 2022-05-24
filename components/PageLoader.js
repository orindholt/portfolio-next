import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import Loader from "./Loader";

const timeoutLimit = 3000;

const PageLoader = () => {
	const [isLoading, setIsLoading] = useState(false);

	/* useEffect(() => {
		setTimeout(() => {
			if (isLoading) {
				setIsLoading(false);
				Router.push(Router.pathname);
				console.log(`Timeout limit of ${timeoutLimit.toString()}ms reached.`);
			}
		}, timeoutLimit);
	}, [isLoading]); */

	useEffect(() => {
		Router.events.on("routeChangeStart", () => setIsLoading(true));
		Router.events.on("routeChangeError", () => setIsLoading(false));
		Router.events.on("routeChangeComplete", () => setIsLoading(false));
	}, []);

	return <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>;
};

export default PageLoader;
