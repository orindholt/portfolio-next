import { useState } from "react";
import { IoAlert } from "react-icons/io5";
import { motion as m } from "framer-motion";
import { shadeColor } from "../utils/shadeColor";

const barLightenPercent = 20;

const TechCard = ({ tech }) => {
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
		shown: {
			width: `${levelPercent}%`,
			transition: { duration: 1, delay: 0.5, type: "tween" },
		},
	};
	const [active, setActive] = useState(false);

	return (
		<li
			className="md:grid md:grid-rows-2 flex rounded-sm overflow-hidden border-4 border-solid shadow-md"
			style={{ borderColor: outlined ? "black" : bg }}
			onClick={() => setActive(!active)}
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
		</li>
	);
};

export default TechCard;
