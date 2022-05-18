import { formContext } from "../utility/Context";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import {
	IoRemove,
	IoAdd,
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
import GenericButton from "../components/GenericButton";
import MapLoaction from "../components/MapLocation";
import StartLink from "../components/StartLink";

const welcomeMessages = [
	"Welcome back",
	"What's up",
	"Good to see you",
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

const extendVariant = {
	hidden: { height: 0, opacity: 0 },
	shown: { height: "fit-content", opacity: 1, transition: { type: "tween" } },
};

export default function Home() {
	const { formData } = useContext(formContext);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [username, setUsername] = useState("");
	const [extendText, setExtendText] = useState(false);
	const [mapView, setMapView] = useState(false);

	useEffect(() => {
		if (Object.keys(formData).length) {
			const { firstName } = formData;
			setFormSubmitted(true);
			setUsername(firstName);
		}
	}, [formData]);

	return (
		<>
			<Head>
				<title>Oliver R. - Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<m.h1
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
					className="text-7xl font-extralight"
				>
					{formSubmitted
						? welcomeMessages[randomNum(0, welcomeMessages.length)] + " "
						: "Hey, "}
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
					className="text-3xl bg-gradient-to-r from-orange-light via-orange-normal to-orange-dark text-clip"
				>
					Frontend Developer
				</m.h2>
				{mapView && <MapLoaction />}
				<div className="dark:text-silver text-lg flex flex-col px-24">
					<p className="pt-4">
						<br />
						I'm a Junior Frontend Developer, based in{" "}
						<span className="font-semibold dark:text-white text-black">
							Copenhagen.
						</span>
						<br />
						Currently studying web development at{" "}
						<button
							type="button"
							className="font-semibold dark:text-white text-black"
							onClick={() => setMapView(!mapView)}
						>
							Roskilde Technical School.
						</button>
						<AnimatePresence>
							{extendText && (
								<m.span
									variants={extendVariant}
									animate="shown"
									initial="hidden"
									exit="hidden"
									className="overflow-hidden block"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
									risus erat, porttitor vitae leo sit amet, iaculis aliquet
									elit. Etiam sollicitudin egestas imperdiet. In sed blandit
									neque, ut dignissim massa.
								</m.span>
							)}
						</AnimatePresence>
					</p>
					<div className="text-white text-base flex justify-center">
						<GenericButton
							className="my-2"
							click={() => {
								setExtendText(!extendText);
							}}
						>
							{extendText ? <IoRemove /> : <IoAdd />}
							{extendText ? "View Less" : "View More"}
						</GenericButton>
					</div>
				</div>
				{/* <CareerTree /> */}
				<section className="my-6">
					<h2 className="font-bold text-2xl">Get Started</h2>
					<p className="text-silver text-base">
						Where to{" "}
						{Boolean(Object.keys(formData).length) ? "this time" : "first"}?
					</p>
					<nav className="flex flex-col gap-2 items-center">
						<ul className="flex gap-3 mt-4 justify-center">
							{pages.map((page, i) => {
								return (
									<StartLink key={i} anchor={page.name} icon={page.icon} />
								);
							})}
							<Link
								href={`/${pages[randomNum(0, pages.length)].name}`}
								passHref
							>
								<a className="font-semibold flex items-center text-xl">
									<IoDice />
								</a>
							</Link>
						</ul>
					</nav>
				</section>
			</div>
		</>
	);
}
