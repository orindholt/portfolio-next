import { IoAlert } from "react-icons/io5";
import { motion as m } from "framer-motion";

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

const TechCard = ({ tech, index }) => {
	const {
		bg = "blue",
		icon = <IoAlert />,
		iconColor = "white",
		name = "name",
		nameColor = "yellow",
		outlined = false,
	} = tech;

	return (
		<m.li
			variants={cardVariant}
			custom={index}
			initial="hidden"
			animate="visible"
			className="flex rounded-sm overflow-hidden shadow-md h-14 justify-center items-center gap-2 text-2xl border-4 border-solid"
			style={{
				backgroundColor: bg,
				color: iconColor,
				borderColor: outlined ? iconColor : bg,
			}}
		>
			{icon}
			<h4 className="font-medium" style={{ color: nameColor }}>
				{name}
			</h4>
		</m.li>
	);
};

export default TechCard;
