import { useState } from "react";
import { IoCaretUp } from "react-icons/io5";
import { motion as m, AnimatePresence } from "framer-motion";
import useMediaQuery from "../Utility/useMediaQuery";

const dropMenuVariants = {
	hidden: {
		opacity: 0,
		height: "0px",
		transition: { staggerChildren: 0.1, delay: 0.4 },
	},
	show: {
		opacity: 1,
		height: "fit-content",
		transition: { staggerChildren: 0.1 },
	},
	exit: {
		opacity: 0,
		height: "0px",
		transition: { staggerChildren: 0.1, delay: 0.4 },
	},
};

const Dropdown = ({ subject, children }) => {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("md");

	return (
		<li
			className={`nav-item md:cursor-pointer flex flex-col items-center relative w-full md:w-auto font-bold hover:text-orange ${
				open ? "!text-orange" : "text-inherit"
			}`}
			onClick={() => setOpen(!open)}
		>
			<div className="relative md:flex md:items-center md:gap-1">
				{subject}
				<m.button
					className="absolute md:static -right-7 md:-right-5 top-1"
					animate={open ? { rotate: 180 } : { rotate: 0 }}
				>
					<IoCaretUp />
				</m.button>
			</div>
			<AnimatePresence>
				{open && (
					<m.ul
						variants={dropMenuVariants}
						initial="hidden"
						animate="show"
						exit="exit"
						className={`md:absolute w-full md:w-auto static flex flex-col font-medium text-center md:text-left top-8 left-0 dark:border-white border-black dark:bg-black bg-white !bg-opacity-0 md:!bg-opacity-95 ${
							!isDesktop ? "border-r-4 pl-1" : "border-l-4"
						}`}
					>
						{children}
					</m.ul>
				)}
			</AnimatePresence>
		</li>
	);
};

export default Dropdown;
