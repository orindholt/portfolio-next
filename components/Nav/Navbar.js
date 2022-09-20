import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";
import ThemeSwitch from "../ThemeSwitch";
import MenuIcon from "../Icons/MenuIcon/MenuIcon";
import Dropdown from "../Dropdown";
import NavItem from "./NavItem";
import Searchbar from "../Search/Searchbar";
import useMediaQuery from "../../hooks/useMediaQuery";

const variants = {
	hidden: {
		x: "100%",
		opacity: 0,
		transition: {
			type: "tween",
		},
	},
	shown: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			type: "tween",
		},
	},
};

const navElements = [
	{
		to: "/",
		text: "Home",
	},
	{
		text: "Projects",
		to: "/projects",
		dropdown: [
			{
				to: "/web",
				text: "Web",
			},
			{
				to: "/gallery",
				text: "Photography",
			},
			{
				to: "/programming",
				text: "Programming",
			},
		],
	},
	{
		to: "/about",
		text: "About",
	},
	{
		to: "/blog",
		text: "Blog",
	},
	{
		to: "/contact",
		text: "Contact",
	},
];

const buttonVariants = {
	hover: { scale: 1.1 },
	tap: { scale: 0.9 },
};

const Navbar = () => {
	const [isOpened, setIsOpened] = useState(false);
	const isDesktop = useMediaQuery("md");

	return (
		<>
			<AnimatePresence>
				{(isOpened || isDesktop) && (
					<m.nav
						variants={variants}
						initial="hidden"
						animate="shown"
						exit="hidden"
						className="fixed right-0 top-0 z-50 md:h-12 dark:bg-black bg-white !bg-opacity-90 backdrop-blur-md md:backdrop-blur-sm h-full py-8 md:py-0 w-full sm:w-64 md:w-full md:!translate-x-0 md:!opacity-100"
					>
						<ul className="flex flex-col text-3xl md:text-lg items-center h-full md:flex-row gap-9 md:px-10 font-bold">
							{navElements.map((obj, i) => {
								if (obj?.dropdown) {
									return (
										<Dropdown subject={obj.text} key={i}>
											{obj.dropdown
												.sort((a, b) => a.text.length - b.text.length)
												.map((el, i) => {
													return (
														<NavItem
															to={`${obj.to}${el.to}`}
															text={el.text}
															key={i}
														/>
													);
												})}
										</Dropdown>
									);
								} else {
									return <NavItem to={obj.to} text={obj.text} key={i} />;
								}
							})}

							<Searchbar />
							<div className="flex gap-5 justify-center md:gap-9 mt-auto md:mt-0 text-2xl">
								<ThemeSwitch />
								<m.li
									variants={buttonVariants}
									whileHover="hover"
									whileTap="tap"
								>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://github.com/orindholt"
									>
										<IoLogoGithub />
									</a>
								</m.li>
							</div>
						</ul>
					</m.nav>
				)}
			</AnimatePresence>
			<MenuIcon state={isOpened} setState={setIsOpened} />
		</>
	);
};

export default Navbar;
