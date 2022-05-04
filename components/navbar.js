import {useState} from "react";
import Link from "next/link";
import {motion as m, AnimatePresence} from "framer-motion";
import {IoLogoGithub} from "react-icons/io5";
import ThemeSwitch from "./ThemeSwitch";
import MenuIcon from "./MenuIcon/MenuIcon";
import Dropdown from "./Dropdown";
import useMediaQuery from "../Utility/useMediaQuery";

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

const buttonVariants = {
	hover: {scale: 1.1},
	tap: {scale: 0.9},
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
						className="fixed right-0 top-0 z-50 md:h-12 dark:bg-black bg-white !bg-opacity-80 backdrop-blur-md md:backdrop-blur-sm h-full py-8 md:py-0 w-64 md:w-full md:!translate-x-0 md:!opacity-100"
					>
						<ul className="flex flex-col text-2xl md:text-lg items-center h-full md:flex-row gap-10 md:px-6">
							<li className="nav-item">
								<Link href="/">Home</Link>
							</li>
							<Dropdown
								liText="Work"
								list={["Web", "Programming", "Photography"]}
							/>
							<li className="nav-item">
								<Link href="/about">About</Link>
							</li>
							<li className="nav-item">
								<Link href="/blog">Blog</Link>
							</li>
							<li className="nav-item">
								<Link href="/contact">Contact</Link>
							</li>
							<div className="flex gap-4 md:ml-auto mt-auto md:mt-0 text-4xl md:text-2xl">
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
