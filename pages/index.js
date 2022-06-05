import Head from "next/head";
import ReadMore from "../components/ReadMore";
import { formContext } from "../utils/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import Typewriter from "typewriter-effect";

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
		<div className="my-auto pb-16 md:text-4xl text-2xl">
			<h1 className="font-semibold text-8xl" ref={typewriterRef}>
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
				<ReadMore
					className="pt-4"
					more="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus
							erat, porttitor vitae leo sit amet, iaculis aliquet elit. Etiam
							sollicitudin egestas imperdiet. In sed blandit neque, ut dignissim
							massa."
				>
					<div>
						I&apos;m a Junior Frontend Developer, based in{" "}
						<span className="font-semibold dark:text-white text-black">
							Copenhagen.
						</span>{" "}
						Currently studying web development at{" "}
						<span
							type="button"
							className="font-semibold dark:text-white text-black"
						>
							Roskilde Technical School.
						</span>
					</div>
				</ReadMore>
			</m.div>
		</div>
	);
}
