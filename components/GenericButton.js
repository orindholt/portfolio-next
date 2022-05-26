import { motion as m } from "framer-motion";

const buttonVariant = {
	shown: { opacity: 1 },
	hidden: { opacity: 0 },
};

const GenericButton = ({ children, type = "button", classes, click }) => {
	return (
		<m.button
			variants={buttonVariant}
			initial="hidden"
			animate="shown"
			exit="hidden"
			type={type}
			className={`px-2 py-1 font-semibold bg-gradient-to-br from-orange-light via-orange-normal to-orange-dark text-white rounded-sm inline-block md:hover:scale-105 active:scale-95 transition-all ${classes} ${
				children.length >= 2 && "flex items-center"
			}`}
			onClick={click}
		>
			{children}
		</m.button>
	);
};

export default GenericButton;
