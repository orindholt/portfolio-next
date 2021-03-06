import ReadMore from "../components/ReadMore";
import { formContext } from "../utils/Context";
import { useContext, useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import {
	IoLogoReact,
	IoCodeSlash,
	IoCamera,
	IoSend,
	IoAccessibility,
	IoBook,
	IoDice,
} from "react-icons/io5";
import Head from "next/head";
import Link from "next/link";
import CareerTree from "../components/CareerTree/Tree";
import MapLoaction from "../components/MapLocation";
import StartLink from "../components/StartLink";

const welcomeMessages = [
	"Welcome back",
	"What's up",
	"Hope you're doing well",
	"Thanks for visiting",
	"Greetings",
	"Good, you're back",
];

const pages = [
	{
		icon: <IoLogoReact />,
		name: "web",
	},
	{
		icon: <IoCodeSlash />,
		name: "programming",
	},
	{
		icon: <IoCamera />,
		name: "photography",
	},
	{
		icon: <IoAccessibility />,
		name: "about",
	},
	{
		icon: <IoBook />,
		name: "blog",
	},
	{
		icon: <IoSend />,
		name: "contact",
	},
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
	const [mapView, setMapView] = useState(false);
	const [randomPage, setRandomPage] = useState("");

	useEffect(() => {
		if (Object.keys(formData).length) {
			const { firstName } = formData;
			setFormSubmitted(true);
			setUsername(firstName);
		}
	}, [formData]);

	useEffect(() => {
		setRandomPage(pages[randomNum(0, pages.length)].name);
	}, []);

	return (
		<>
			<Head>
				<title>Oliver - Home</title>
			</Head>
			<div className="md:mt-12">
				<m.h1
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
					className="font-extralight"
				>
					<span className="md:text-4xl text-2xl">
						{formSubmitted
							? welcomeMessages[randomNum(0, welcomeMessages.length)] + " "
							: "Hey, "}
					</span>
					<br className="md:hidden" />
					<span className="font-semibold text-8xl">
						{formSubmitted ? capitalizeString(username) : "I'm Oliver"}.
					</span>
				</m.h1>
				<m.h2
					initial={{ opacity: 0, y: "50%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: "tween",
						ease: "easeInOut",
						duration: 1,
						delay: 0.75,
					}}
					className="md:text-3xl text-2xl bg-gradient-to-r from-orange-light via-orange-normal to-orange-dark text-clip"
				>
					{formSubmitted ? "Good to see you yet again!" : "Frontend Developer"}
				</m.h2>
				{mapView && <MapLoaction />}
				<div className="md:px-24">
					<ReadMore
						text={
							<>
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
							</>
						}
						more="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus
							erat, porttitor vitae leo sit amet, iaculis aliquet elit. Etiam
							sollicitudin egestas imperdiet. In sed blandit neque, ut dignissim
							massa."
					/>
				</div>
				{/* <CareerTree /> */}
				<section className="my-6 flex flex-col items-center">
					<p className="mb-4 font-bold text-xl border-b-2 border-white border-solid">
						This page is still heavily under construction!
						<br />
						This means some pages aren&apos;t available.
					</p>
					<h2 className="font-bold text-2xl">Get Started</h2>
					<p className="text-silver text-base">
						Where to{" "}
						{Boolean(Object.keys(formData).length) ? "this time" : "first"}?
					</p>
					<nav className="flex flex-col gap-2 items-center">
						<ul className="flex gap-3 mt-4 justify-center flex-wrap">
							{pages.map((page, i) => {
								return (
									<StartLink key={i} anchor={page.name} icon={page.icon} />
								);
							})}
						</ul>
						<Link href={`/${randomPage}`} passHref>
							<m.a
								className="font-medium flex items-center text-3xl gap-1"
								initial={{ rotate: 0 }}
								whileHover={{
									rotate: [0, -45, 45],
									transition: {
										repeat: Infinity,
										repeatType: "mirror",
										repeatDelay: 0,
										duration: 0.5,
									},
								}}
							>
								<IoDice />
							</m.a>
						</Link>
					</nav>
				</section>
			</div>
		</>
	);
}
