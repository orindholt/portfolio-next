import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Loader from "./Loader";

const opacityVariant = {
	hidden: { opacity: 0 },
	shown: { opacity: 1 },
};

const MapLoaction = () => {
	const [loaded, setLoaded] = useState(false);

	return (
		<aside className="w-64 h-64 rounded-sm overflow-hidden absolute">
			<div className="w-full h-full relative">
				<m.iframe
					variants={opacityVariant}
					initial="hidden"
					animate={loaded ? "shown" : "hidden"}
					className="w-full h-full"
					src="https://maps.google.com/maps?q=Roskilde%20Tekniske%20Skole,%20EUD&t=&z=13&ie=UTF8&iwloc=&output=embed"
					scrolling="no"
					onLoad={() => setLoaded(true)}
				></m.iframe>
				<AnimatePresence>
					{!loaded && (
						<m.div
							variants={opacityVariant}
							animate="shown"
							initial="hidden"
							exit="hidden"
							className="absolute top-0 bottom-0 right-0 left-0 grid place-content-center"
						>
							<Loader />
						</m.div>
					)}
				</AnimatePresence>
			</div>
		</aside>
	);
};

export default MapLoaction;
