import { formContext } from "../utils/Context";
import { useContext, useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Typewriter from "typewriter-effect";
import supabase from "../utils/supabaseClient";
import ProjectSlider from "../components/Work/ProjectSlider";

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

export async function getStaticProps() {
	const { data, error } = await supabase
		.from("projects")
		.select()
		.eq("can_be_featured", true);
	return {
		props: { data, error },
	};
}

const featuredPostLimit = 3;

const Home = ({ data: projects, error }) => {
	const { formData } = useContext(formContext);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [username, setUsername] = useState("");
	const [newestProjects, setNewestProjects] = useState(null);

	const sortArray = arr =>
		arr
			.splice(0, featuredPostLimit)
			.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

	useEffect(() => {
		if (projects.length > 1) {
			console.log(projects);
			setNewestProjects(sortArray(projects));
		}
	}, [projects]);

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
				transition={{ duration: 1, type: "tween" }}
			>
				<p>
					{Boolean(Object.keys(formData).length) && (
						<Typewriter
							options={{
								strings: `${
									welcomeMessages[randomNum(0, welcomeMessages.length)]
								} ${capitalizeString(username)}}.`,
								autoStart: true,
								cursorClassName: "hidden",
							}}
						/>
					)}
				</p>
				<h1 className="font-bold text-6xl md:text-7xl lg:text-8xl tracking-wide leading-tight -mb-2 bg-gradient-to-r from-orange-light via-orange-normal to-orange-dark text-clip">
					Hello!
				</h1>
				<h2 className="md:text-5xl text-4xl dark:text-white text-black mt-2 font-medium">
					I&apos;m Oliver
				</h2>
				<h3 className="md:text-3xl text-2xl dark:text-white text-black font-medium mt-4">
					{formSubmitted ? "Good to see you yet again!" : "Frontend Developer"}
				</h3>
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
			{newestProjects && !error && (
				<m.section
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5, type: "tween" }}
					className="p-4"
				>
					<ProjectSlider data={newestProjects} />
				</m.section>
			)}
		</div>
	);
};

export default Home;
