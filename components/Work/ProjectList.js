import Project from "../../components/Work/Project";
import { motion as m } from "framer-motion";

const listVariants = {
	hidden: {
		opacity: 0,
		transition: { delay: 0.4 },
	},
	show: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
		transition: { delay: 0.4 },
	},
};

const ProjectList = ({ data }) => {
	return (
		<m.ul
			variants={listVariants}
			initial="hidden"
			animate="show"
			exit="exit"
			transition={{ staggerChildren: true }}
			className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-12 mt-6"
		>
			{data.map((project, i) => {
				return <Project data={project} key={i} index={i} />;
			})}
		</m.ul>
	);
};

export default ProjectList;
