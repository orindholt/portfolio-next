import Head from "next/head";
import ReadMore from "../components/ReadMore";
import { formContext } from "../utils/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import Typewriter from "typewriter-effect";
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

export default function Home() {
	const { formData } = useContext(formContext);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [username, setUsername] = useState("");
	const typewriterRef = useRef(null);

	useEffect(() => {
		if (Object.keys(formData).length) {
			const { firstName } = formData;
			setFormSubmitted(true);
			setUsername(firstName);
		}
	}, [formData]);

	return (
		<div className="my-auto md:text-4xl text-2xl justify-self-stretch flex flex-col gap-2">
			<h1
				className="font-semibold text-6xl md:text-7xl lg:text-8xl tracking-wide leading-tight -mb-2"
				ref={typewriterRef}
			>
				<Typewriter
					options={{
						strings: `${
							formSubmitted
								? welcomeMessages[randomNum(0, welcomeMessages.length)] + " "
								: "Hey, "
						} ${formSubmitted ? capitalizeString(username) : "I'm Oliver"}.`,
						autoStart: true,
						cursorClassName: "hidden",
					}}
				/>
			</h1>
			<m.h2
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: "tween",
					ease: "easeInOut",
					duration: 1,
					delay: 1.5,
				}}
				className="md:text-3xl text-2xl bg-gradient-to-r from-orange-light via-orange-normal to-orange-dark text-clip mt-2"
			>
				{formSubmitted ? "Good to see you yet again!" : "Frontend Developer"}
			</m.h2>
			<m.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 3, duration: 1.5 }}
				className="md:px-24"
			>
				<p className="text-lg">
					I&apos;m a Junior Frontend Developer and,{" "}
					<span className="font-semibold dark:text-white text-black">
						🪄 CSS <span className="animate-magic">magician</span>
					</span>{" "}
					based in the outskirts of Copenhagen.
				</p>
				<GenericButton
					anchor="/projects/web"
					className="max-w-fit text-base mx-auto mt-4"
				>
					My Work
				</GenericButton>
			</m.div>
		</div>
	);
}
