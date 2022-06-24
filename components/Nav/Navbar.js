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
							<NavItem to="/" text="Home" />
							<Dropdown subject="Projects">
								<NavItem to="/projects/web" text="Web" />
								<NavItem to="/projects/gallery" text="Photography" />
							</Dropdown>
							<NavItem to="/about" text="About" />
							<NavItem to="/blog" text="Blog" />
							<NavItem to="/contact" text="Contact" />
							<div className="flex gap-4 h-full md:h-auto md:items-center text-4xl md:text-2xl md:flex-row flex-col md:ml-auto">
								<Searchbar />
								<div className="flex gap-5 justify-center md:gap-4 mt-auto md:mt-0">
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
