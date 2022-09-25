import Project from "../../components/Work/Project";
import supabase from "../../utils/supabaseClient";
import PWAPrompt from "../../components/PWAPrompt";
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

const Web = ({ data }) => {
	return (
		<>
			<h1 className="text-6xl font-bold">Programming</h1>
			<m.ul
				variants={listVariants}
				initial="hidden"
				animate="show"
				exit="exit"
				transition={{ staggerChildren: true }}
				className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-12 mt-6"
			>
				{data &&
					data.map((project, i) => {
						return <Project data={project} key={i} index={i} />;
					})}
			</m.ul>
			<PWAPrompt />
		</>
	);
};

export async function getStaticProps() {
	const { data } = await supabase
		.from("projects")
		.select("*")
		.eq("is_web", false);
	return {
		props: { data },
	};
}

export default Web;
