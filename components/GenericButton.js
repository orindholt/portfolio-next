import Link from "next/link";
import { motion as m } from "framer-motion";

const buttonVariant = {
	shown: { opacity: 1 },
	hidden: { opacity: 0 },
};

const GenericButton = ({
	children,
	type = "button",
	className = "",
	click = () => {},
	anchor = "",
}) => {
	return anchor ? (
		<Link href={anchor} passHref>
			<m.a
				variants={buttonVariant}
				initial="hidden"
				animate="shown"
				exit="hidden"
				type={type}
				className={`generic-button ${className} ${
					children.length >= 2 ? "flex items-center" : undefined
				}`}
			>
				{children}
			</m.a>
		</Link>
	) : (
		<m.button
			variants={buttonVariant}
			initial="hidden"
			animate="shown"
			exit="hidden"
			type={type}
			className={`generic-button ${className} ${
				children.length >= 2 ? "flex items-center" : undefined
			}`}
			onClick={click}
		>
			{children}
		</m.button>
	);
};

export default GenericButton;
