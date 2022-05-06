import { motion as m } from "framer-motion";
import { IoSync } from "react-icons/io5";

const Loader = () => {
	return (
		<m.div
			initial={{ rotate: 0 }}
			animate={{ rotate: 360 }}
			transition={{ repeat: Infinity, duration: 1 }}
		>
			<IoSync />
		</m.div>
	);
};

export default Loader;
