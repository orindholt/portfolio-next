import { IoChevronDown } from "react-icons/io5";
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";

const ScrollIndicator = ({ href = "#" }) => {
	return (
		<AnimatePresence>
			<m.aside
				className="absolute bottom-14 right-0 left-0 text-4xl"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<Link href={href} passHref>
					<a className="animate-indicator">
						<IoChevronDown className="mx-auto" />
					</a>
				</Link>
			</m.aside>
		</AnimatePresence>
	);
};

export default ScrollIndicator;
