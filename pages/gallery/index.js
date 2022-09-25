import supabase from "../../utils/supabaseClient";
import GalleryItem from "../../components/Gallery/GalleryItem";
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

const Gallery = ({ data }) => {
	return (
		<>
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
					<GalleryItem details={shoot} key={i} index={i} />
				))}
			</m.ul>
		</>
	);
};

export async function getStaticProps() {
	let { data, error } = await supabase.from("gallery").select("*");
	return {
		props: { data },
	};
}

export default Gallery;
