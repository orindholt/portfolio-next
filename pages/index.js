import { formContext } from "../utils/formContext";
import { useContext, useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Typewriter from "typewriter-effect";
import supabase from "../utils/supabaseClient";
import ProjectSlider from "../components/Work/ProjectSlider";
import GenericButton from "../components/GenericButton";
import Section from "../components/Section";
import ScrollIndicator from "../components/ScrollIndicator";

const welcomeMessages = [
	"Welcome back",
	"What's up",
	"Hope you're doing well",
	"Thanks for visiting",
	"Greetings",
	"Good to see you again",
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
	const {
		formData: { formData },
	} = useContext(formContext);

	return (
		<>
			<Section>
				<m.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, type: "tween" }}
					className="md:text-4xl text-2xl flex flex-col"
				>
					<div className="text-xl dark:text-silver text-gray-dark">
						{formData && (
							<Typewriter
								options={{
									strings: `${
										welcomeMessages[randomNum(0, welcomeMessages.length)]
									}, ${capitalizeString(formData.firstName)}.`,
									autoStart: true,
									cursorClassName: "hidden",
								}}
							/>
						)}
					</div>
					<h1 className="font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide leading-tight -mb-2 bg-gradient-to-r from-orange-normal to-orange-dark text-clip max-w-fit mx-auto">
						Hello!
					</h1>
					<h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl dark:text-white text-black mt-2 font-medium">
						I&apos;m Oliver
					</h2>
					<p className="lg:text-xl xl:text-2xl text-lg dark:text-silver text-gray-dark font-roboto-mono italic my-8">
						I&apos;m a Junior Frontend Developer, and
						<span className="font-bold">
							{" "}
							CSS <span className="animate-magic">magician</span>
						</span>
						,
						<br />
						based in the outskirts of Copenhagen.
					</p>
					<GenericButton
						className="max-w-fit lg:text-xl xl:text-2xl text-lg  mx-auto"
						anchor="/projects"
					>
						Explore
					</GenericButton>
				</m.div>
			</Section>
		</>
	);
};

export default Home;
