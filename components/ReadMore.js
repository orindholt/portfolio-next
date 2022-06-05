import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import GenericButton from "./GenericButton";
import { IoRemove, IoAdd } from "react-icons/io5";

const extendVariant = {
	hidden: { height: 0, opacity: 0 },
	shown: { height: "fit-content", opacity: 1, transition: { type: "tween" } },
};

const ReadMore = ({ children, more, className = "" }) => {
	const [extendText, setExtendText] = useState(false);
	return (
		<div
			className={`dark:text-silver text-base md:text-lg flex flex-col ${className}`}
		>
			<div>
				{children}
				<AnimatePresence>
					{extendText && (
						<m.span
							variants={extendVariant}
							animate="shown"
							initial="hidden"
							exit="hidden"
							className="overflow-hidden block"
						>
							{more}
						</m.span>
					)}
				</AnimatePresence>
			</div>
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
	);
};

export default ReadMore;
