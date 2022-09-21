import GenericButton from "./GenericButton";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const popupVariants = {
	hidden: {
		opacity: 0,
		y: -20,
		transition: { duration: 1 },
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { delay: 1, duration: 1 },
	},
};

const PWAPrompt = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null);
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", e => {
			e.preventDefault();
			console.log(e);
			setDeferredPrompt(e);
		});
	}, []);

	const installHandler = async () => {
		deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		setDeferredPrompt(null);
		if (outcome === "accepted") {
			console.log("Accepted");
			setDismissed(true);
		} else if (outcome === "dismissed") {
			console.log("Dismissed");
			setDismissed(true);
		}
	};

	const dismiss = () => setDismissed(true);

	return (
		<AnimatePresence>
			{deferredPrompt && !dismissed && (
				<m.aside
					variants={popupVariants}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="py-2 px-4 rounded-lg dark:bg-black dark:text-white bg-white text-black !bg-opacity-70 backdrop-blur-md fixed bottom-4 right-4 text-base flex flex-col items-center z-40"
				>
					<Image
						src="/assets/icons/icon-128x128.png"
						alt="Website icon"
						width="64px"
						height="64px"
						layout="fixed"
					/>
					<h2 className="font-bold text-xl">Install Portfolio</h2>
					<p className="font-light text-sm leading-none text-center">
						This website is a PWA.
						<br />
						This means you can install it locally.
					</p>
					<div className="flex gap-2 mt-3">
						<GenericButton
							className="flex justify-center !bg-none border-2 border-orange-normal border-solid !rounded-lg dark:text-white text-black"
							click={dismiss}
						>
							Dismiss
						</GenericButton>
						<GenericButton
							className="flex justify-center !rounded-lg"
							click={installHandler}
						>
							Install
						</GenericButton>
					</div>
				</m.aside>
			)}
		</AnimatePresence>
	);
};

export default PWAPrompt;
