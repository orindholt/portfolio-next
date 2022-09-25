import { formContext } from "../utils/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import GenericButton from "../components/GenericButton";

const welcomeMessages = [
	"Welcome back",
	"What's up",
	"Hope you're doing well",
	"Thanks for visiting",
	"Greetings",
	"Good, you're back",
];

const capitalizeString = text => {
	if (typeof text === "string" && text.length >= 1) {
		return `${text.charAt(0).toUpperCase()}${text.substring(1)}`;
	} else return null;
};

const randomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const Home = () => {
	const { formData } = useContext(formContext);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [username, setUsername] = useState("");

	useEffect(() => {
		if (Object.keys(formData).length) {
			const { firstName } = formData;
			setFormSubmitted(true);
			setUsername(firstName);
		}
	}, [formData]);

	return (
		<div className="my-auto md:text-4xl text-2xl justify-self-stretch">
			<m.div
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, delay: 0.5, type: "tween" }}
			>
				<h1 className="font-bold text-6xl md:text-7xl lg:text-8xl tracking-wide leading-tight -mb-2 bg-gradient-to-r from-orange-light via-orange-normal to-orange-dark text-clip">
					Hello.
				</h1>
				<h2 className="md:text-5xl text-4xl dark:text-white text-black mt-2 font-medium">
					I'm Oliver
				</h2>
				<p className="text-lg dark:text-silver text-gray-dark font-roboto-mono italic my-8">
					I&apos;m a Junior Frontend Developer,
					<br />
					<span className="font-bold dark:text-white text-black">
						{" "}
						CSS <span className="animate-magic">magician </span>🪄
					</span>{" "}
					, based in the outskirts of Copenhagen.
				</p>
			</m.div>
			<m.div
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, delay: 1.5, type: "tween" }}
			>
				<h2 className="md:text-3xl text-2xl dark:text-white text-black font-medium">
					{formSubmitted ? "Good to see you yet again!" : "Frontend Developer"}
				</h2>
				<GenericButton
					anchor="/projects/web"
					className="max-w-fit text-2xl mx-auto mt-6"
					arrow
				>
					Projects
				</GenericButton>
			</m.div>
		</div>
	);
};

export default Home;
