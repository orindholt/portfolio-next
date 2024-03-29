import supabase from "../../utils/supabaseClient";
import Shoot from "../../components/Gallery/Shoot";
import { motion as m } from "framer-motion";
import Section from "../../components/Section";

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

export async function getStaticProps() {
	let { data, error } = await supabase.from("gallery").select("*");
	return {
		props: { data },
	};
}

const Gallery = ({ data }) => {
	return (
		<Section>
			<h1 className="text-6xl font-bold">Gallery</h1>
			<p className="pb-10 pt-1.5 text-xl dark:text-silver text-blue-normal">
				Collection of my photography work.
			</p>
			<m.ul
				variants={listVariants}
				inital="hidden"
				animate="show"
				exit="exit"
				className="grid grid-cols-1 md:grid-cols-2 gap-12"
			>
				{data.map((shoot, i) => (
					<Shoot details={shoot} key={i} index={i} />
				))}
			</m.ul>
		</Section>
	);
};

export default Gallery;
