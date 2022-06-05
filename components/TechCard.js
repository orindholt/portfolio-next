import { useState } from "react";
import { IoAlert } from "react-icons/io5";
import { AnimatePresence, motion as m } from "framer-motion";
import { shadeColor } from "../utils/shadeColor";

const cardVariant = {
	visible: i => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: i * 0.1,
			duration: 0.4,
		},
	}),
	hidden: { y: -20, opacity: 0 },
};

const barLightenPercent = 20;

const TechCard = ({ tech, index }) => {
	const {
		bg = "blue",
		icon = <IoAlert />,
		iconColor = "white",
		name = "name",
		nameColor = "yellow",
		gradientFrom = "blue",
		gradientTo,
		levelPercent = 50,
		outlined = false,
	} = tech;
	const barVariant = {
		hidden: { width: "0%" },
		shown: i => ({
			width: `${levelPercent}%`,
			transition: {
				duration: 1,
				delay: 0.1 * i,
				type: "tween",
			},
		}),
	};

	return (
		<m.li
			variants={cardVariant}
			custom={index}
			initial="hidden"
			animate="visible"
			className="md:grid md:grid-rows-2 flex rounded-sm overflow-hidden border-4 border-solid shadow-md relative"
			style={{ borderColor: outlined ? "black" : bg }}
		>
			<div
				className={`max-w-[200px] md:max-w-none w-full h-10 text-xl flex gap-1 items-center justify-center md:pt-0.5`}
				style={{ backgroundColor: bg, color: iconColor }}
			>
				{icon}
				<h4 className="font-medium" style={{ color: nameColor }}>
					{name}
				</h4>
			</div>
			<div
				className="w-full border-solid border-2 md:border-4 flex p-1"
				style={{
					borderColor: bg,
					backgroundColor: outlined ? "black" : "transparent",
				}}
			>
				<m.div
					variants={barVariant}
					custom={index}
					inital="hidden"
					animate="shown"
					className="h-full"
					style={{
						background: `linear-gradient(to right, ${gradientFrom}, ${
							!gradientTo
								? shadeColor(gradientFrom, barLightenPercent)
								: gradientTo
						})`,
					}}
				></m.div>
			</div>
		</m.li>
	);
};

export default TechCard;
