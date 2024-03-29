import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import PageLoader from "./PageLoader";

const RouteLoader = () => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		Router.events.on("routeChangeStart", () => setIsLoading(true));
		Router.events.on("routeChangeError", () => setIsLoading(false));
		Router.events.on("routeChangeComplete", () => setIsLoading(false));
	}, []);

	return <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>;
};

export default RouteLoader;
