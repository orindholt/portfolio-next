import {useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoStackoverflow,
	IoLogoInstagram,
	IoMoon,
	IoSunny,
} from "react-icons/io5";

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
const itemVariants = {
	hover: {scale: 1.3, borderColor: "#252422"},
	tap: {scale: 1.2},
};

const Navbar = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className="flex justify-end fixed right-0 top-0 z-10">
			<motion.nav
				variants={variants}
				initial="hidden"
				animate={isOpened ? "shown" : "hidden"}
				className="bg-white h-[100vh] py-[12.5%] w-64"
			>
				<ul className="text-black flex flex-col text-2xl gap-10 font-bold items-center h-full">
					<motion.li
						variants={itemVariants}
						whileHover="hover"
						whileTap="tap"
						className="border-b-2 border-transparent"
					>
						<Link href="/">Home</Link>
					</motion.li>
					<motion.li
						variants={itemVariants}
						whileHover="hover"
						whileTap="tap"
						className="border-b-2 border-transparent"
					>
						<Link href="/work">Work</Link>
					</motion.li>
					<motion.li
						variants={itemVariants}
						whileHover="hover"
						whileTap="tap"
						className="border-b-2 border-transparent"
					>
						<Link href="/about">About</Link>
					</motion.li>
					<motion.li
						variants={itemVariants}
						whileHover="hover"
						whileTap="tap"
						className="border-b-2 border-transparent"
					>
						<Link href="blog">Blog</Link>
					</motion.li>
					<motion.li
						variants={itemVariants}
						whileHover="hover"
						whileTap="tap"
						className="border-b-2 border-transparent"
					>
						<Link href="/contact">Contact</Link>
					</motion.li>
					<li className="w-full flex justify-center pt-4">
						<button
							class="bg-black rounded-full w-1/4 h-8 p-1 flex"
							onClick={() => setDarkMode(!darkMode)}
							style={{justifyContent: darkMode ? "flex-start" : "flex-end"}}
						>
							<motion.div className="h-full w-6 bg-white rounded-full" layout>
								{darkMode ? <IoMoon /> : <IoSunny />}
							</motion.div>
						</button>
					</li>
					<div className="flex gap-4 mt-auto">
						<motion.li
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
							className="border-b-2 border-transparent"
						>
							<a target="_blank" href="https://github.com/orindholt">
								<IoLogoGithub />
							</a>
						</motion.li>
						<motion.li
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
							className="border-b-2 border-transparent"
						>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/oliver-rindholt-55707b217"
							>
								<IoLogoLinkedin />
							</a>
						</motion.li>
						<motion.li
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
							className="border-b-2 border-transparent"
						>
							<a
								target="_blank"
								href="https://stackoverflow.com/users/16197220/orindholt"
							>
								<IoLogoStackoverflow />
							</a>
						</motion.li>
						<motion.li
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
							className="border-b-2 border-transparent"
						>
							<a target="_blank" href="https://www.instagram.com/rindholtfoto">
								<IoLogoInstagram />
							</a>
						</motion.li>
					</div>
				</ul>
			</motion.nav>
			<motion.button
				onClick={e => {
					setIsOpened(!isOpened);
					e.currentTarget.classList.toggle("opened");
					e.currentTarget.setAttribute(
						"aria-expanded",
						e.currentTarget.classList.contains("opened")
					);
				}}
				aria-label="Main Menu"
				variants={buttonVariants}
				whileTap="tap"
				whileHover="hover"
				className="menu top-6 right-6 absolute stroke-white transition-colors"
				style={{stroke: isOpened ? "#252422" : "white"}}
			>
				<svg width="50" height="50" viewBox="0 0 100 100">
					<path
						class="line line1"
						d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
					/>
					<path class="line line2" d="M 20,50 H 80" />
					<path
						class="line line3"
						d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
					/>
				</svg>
			</motion.button>
		</div>
	);
};

export default Navbar;
