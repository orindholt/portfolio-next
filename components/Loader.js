import { motion as m } from "framer-motion";
import { IoSync } from "react-icons/io5";

const Loader = () => {
	return (
		<m.aside
			className="z-50 fixed top-0 bottom-0 right-0 left-0"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<m.div
				className="text-4xl text-silver"
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1 }}
			>
				<IoSync />
			</m.div>
		</m.aside>
	);
};

export default Loader;
