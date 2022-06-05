import { useState, Children, cloneElement } from "react";
import { IoCaretUp } from "react-icons/io5";
import { motion as m, AnimatePresence } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

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

const dropItemVariants = {
	hidden: { opacity: 0, x: -20 },
	show: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 20 },
};

const Dropdown = ({ children, subject }) => {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("md");

	return (
		<li
			className={`nav-item md:cursor-pointer flex flex-col items-center relative w-full md:w-auto font-bold select-none md:hover:text-orange-normal ${
				open ? "!text-orange-normal" : "text-inherit"
			}`}
			onClick={() => setOpen(!open)}
		>
			<div className="relative md:flex md:items-center md:gap-1 mb-2 md:mb-0">
				{subject}
				<m.button
					className="absolute md:static -right-8 md:-right-5 top-1"
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
						className={`md:absolute w-full md:w-auto static flex flex-col gap-1 md:gap-0 font-medium text-center md:text-left top-[38px] left-0 dark:border-white border-black dark:bg-black bg-white !bg-opacity-0 md:!bg-opacity-90 ${
							!isDesktop ? "border-r-4 pl-1" : "border-l-4"
						}`}
					>
						{children &&
							Children.map(children, child => (
								<m.div variants={dropItemVariants}>{cloneElement(child)}</m.div>
							))}
					</m.ul>
				)}
			</AnimatePresence>
		</li>
	);
};

export default Dropdown;
