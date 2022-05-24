import { IoAlert } from "react-icons/io5";
import Link from "next/link";

const TechCard = ({ tech }) => {
	const {
		bg = "bg-blue-500",
		icon = <IoAlert />,
		iconColor = "text-white",
		name = "name",
		nameColor = "text-white",
		anchor = "/",
	} = tech;
	return (
		<Link href={anchor}>
			<li
				className={`${bg} ${iconColor} w-full h-10 text-xl rounded-sm flex gap-1 items-center justify-center`}
			>
				{icon}
				<h4 className={`${nameColor}`}>{name}</h4>
			</li>
		</Link>
	);
};

export default TechCard;
