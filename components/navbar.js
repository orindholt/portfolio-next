import {useState} from "react";
import {motion as m} from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import MenuIcon from "./MenuIcon/MenuIcon";
import Link from "next/link";
import {IoLogoGithub} from "react-icons/io5";
import Dropdown from "./Dropdown";

const variants = {
	hidden: {
		x: "100%",
		opacity: 0,
		transition: {
			type: "tween",
			when: "afterChildren",
		},
	},
	shown: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			type: "tween",
			when: "beforeChildren",
		},
	},
};

const buttonVariants = {
	hover: {scale: 1.1},
	tap: {scale: 0.9},
};

const Navbar = () => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className="flex justify-end fixed h-full right-0 top-0 z-50 md:w-full md:py-0 md:h-12">
			<m.nav
				variants={variants}
				initial="hidden"
				animate={isOpened ? "shown" : "hidden"}
				className="dark:bg-black bg-white !bg-opacity-80 backdrop-blur-md md:backdrop-blur-sm h-full py-8 md:py-0 w-64 md:w-full md:!translate-x-0 md:!opacity-100"
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
						<m.li variants={buttonVariants} whileHover="hover" whileTap="tap">
							<a target="_blank" href="https://github.com/orindholt">
								<IoLogoGithub />
							</a>
						</m.li>
					</div>
				</ul>
			</m.nav>
			<MenuIcon state={isOpened} setState={setIsOpened} />
		</div>
	);
};

export default Navbar;
