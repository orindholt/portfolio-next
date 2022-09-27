import { IoAlert } from "react-icons/io5";
import { motion as m } from "framer-motion";
import Link from "next/link";

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

const TechCard = ({
	tech: {
		bg = "blue",
		icon = <IoAlert />,
		iconColor = "white",
		name = "name",
		nameColor = "yellow",
		outlined = false,
		shorthand,
	},
	index,
}) => {
	return (
		<m.li
			variants={cardVariant}
			custom={index}
			initial="hidden"
			animate="visible"
			className="rounded-sm overflow-hidden shadow-md h-14  text-2xl border-4 border-solid group relative"
			style={{
				backgroundColor: bg,
				color: iconColor,
				borderColor: outlined ? iconColor : bg,
			}}
		>
			<Link href={`/projects/${name.toLowerCase()}`} passHref>
				<a className="w-full h-full flex justify-center items-center">
					<div className="flex gap-2">
						{icon}
						<h4 className="font-medium -mt-1.5" style={{ color: nameColor }}>
							{name}
						</h4>
					</div>
					<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black bg-opacity-50 backdrop-blur-sm text-base font-roboto-mono">
						View {shorthand || name} projects
					</div>
				</a>
			</Link>
		</m.li>
	);
};

export default TechCard;
