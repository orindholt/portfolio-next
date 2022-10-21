import { useState } from "react";
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
	let { data } = await supabase.from("gallery").select("*");
	return {
		props: { data },
	};
}

const Gallery = ({ data }) => {
	const [activeFilters, setActiveFilters] = useState([]);
	const uniqueTags = Array.from(new Set(data.map(a => a.tags).flat()));

	return (
		<Section>
			<h1 className="text-6xl font-bold">Gallery</h1>
			<h2 className="py-4 text-xl dark:text-silver text-blue-normal max-w-2xl mx-auto">
				Collection of my photography work, that I've collected throughout the
				years. Uncover my{" "}
				<span className="font-semibold">({uniqueTags.join(", ")})</span>{" "}
				collection.
			</h2>
			<m.ul
				variants={listVariants}
				inital="hidden"
				animate="show"
				exit="exit"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-10"
			>
				{data.map((shoot, i) => (
					<Shoot details={shoot} key={i} index={i} />
				))}
			</m.ul>
		</Section>
	);
};

export default Gallery;
