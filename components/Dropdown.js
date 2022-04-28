import {useState} from "react";
import {IoCaretUp} from "react-icons/io5";
import {motion as m, AnimatePresence} from "framer-motion";
import {useMediaQuery} from "react-responsive";
import tw from "../tailwind.config";
import Link from "next/link";

const dropMenuVariants = {
	hidden: {
		opacity: 0,
		height: "0px",
		transition: {staggerChildren: 0.1, delay: 0.4},
	},
	show: {
		opacity: 1,
		height: "fit-content",
		transition: {staggerChildren: 0.1},
	},
	exit: {
		opacity: 0,
		height: "0px",
		transition: {staggerChildren: 0.1, delay: 0.4},
	},
};

const dropItemVariants = {
	hidden: {opacity: 0, x: -20},
	show: {opacity: 1, x: 0},
	exit: {opacity: 0, x: 20},
};

const Dropdown = ({liText = "Undefined", list}) => {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery({
		query: `(min-width: ${tw.theme.extend.screens.md})`,
	});
	return (
		<li
			className={`nav-item md:cursor-pointer flex flex-col items-center relative w-full md:w-auto ${
				open ? "!text-orange" : "text-inherit"
			}`}
			onClick={() => setOpen(!open)}
		>
			<div className="relative md:flex md:items-center md:gap-1">
				{liText}
				<m.button
					className="absolute md:static -right-7 md:-right-5 top-1"
					animate={open ? {rotate: 180} : {rotate: 0}}
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
						className={`md:absolute w-full md:w-auto static flex flex-col font-normal text-center md:text-left top-8 left-0 border-white ${
							isDesktop && "border-r-4"
						}`}
					>
						{list.map((item, i) => {
							return (
								<m.li
									key={i}
									variants={dropItemVariants}
									className="md:hover:text-orange dark:text-white text-black"
								>
									<Link href={`/work/${item.toLowerCase()}`}>{item}</Link>
								</m.li>
							);
						})}
					</m.ul>
				)}
			</AnimatePresence>
		</li>
	);
};

export default Dropdown;
