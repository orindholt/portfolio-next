import Project from "../../../components/Web/Project";
import supabase from "../../../utils/supabaseClient";
import PWAPrompt from "../../../components/PWAPrompt";
import { motion as m } from "framer-motion";

const listVariants = {
	hidden: {
		opacity: 0,
		transition: { staggerChildren: 0.1, delay: 0.4 },
	},
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
	exit: {
		opacity: 0,
		transition: { staggerChildren: 0.1, delay: 0.4 },
	},
};

const projectVariants = {
	hidden: { opacity: 0, y: -30 },
	show: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -30 },
};

const Web = ({ data }) => {
	return (
		<>
			<h1 className="text-6xl font-bold">Web</h1>
			{/* <m.hr initial={{opacity: 0}} /> */}
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
						return (
							<Project data={project} variants={projectVariants} key={i} />
						);
					})}
			</m.ul>
			<PWAPrompt />
		</>
	);
};

export async function getStaticProps() {
	const { data } = await supabase.from("web").select("*");
	return {
		props: { data },
	};
}

export default Web;
