import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import supabase from "../../utils/supabaseClient";
import PWAPrompt from "../../components/PWAPrompt";
import Project from "../../components/Work/Project";
import Section from "../../components/Section";
import ProjectSlider from "../../components/Work/ProjectSlider";
import FilterChoice from "../../components/Filters/FilterChoice";

export async function getStaticProps() {
	const { data } = await supabase.from("projects").select("*");
	return {
		props: { data },
	};
}

const Web = ({ data }) => {
	const [activeFilters, setActiveFilters] = useState([]);
	const sortedData = [...data].sort(
		(a, b) => new Date(a.created_at) - new Date(b.created_at)
	);
	const allProjectTags = Array.from(new Set(data.map(val => val.tags).flat()));

	useEffect(() => {
		if (activeFilters.length)
			console.log([...data].filter(a => activeFilters.includes(a.tags)));
	}, [activeFilters]);

	return (
		<>
			<Section className="py-10">
				<h2 className="text-5xl font-bold pb-2">Featured</h2>
				<div className="max-w-4xl mx-auto">
					<ProjectSlider data={[...sortedData].splice(0, 3)} />
				</div>
			</Section>
			<Section className="py-10">
				<h2 className="text-5xl font-bold pb-2">All Projects</h2>
				<FilterChoice
					choices={allProjectTags}
					activeChoices={activeFilters}
					setActiveChoices={setActiveFilters}
				/>
				<m.ul
					initial={{
						opacity: 0,
						transition: { delay: 0.4 },
					}}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
						transition: { delay: 0.4 },
					}}
					className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 mt-6"
				>
					{sortedData.map((project, i) => {
						console.log(activeFilters, project.tags);
						return !activeFilters.length ||
							activeFilters.includes(project.tag) ? (
							<Project data={project} key={i} index={i} />
						) : (
							<p className="my-auto pb-16 text-xl leading-7">
								<span className="bg-gradient-to-br from-orange-light via-orange-normal to-orange-dark text-clip text-3xl font-bold">
									Whoops!
								</span>
								<br />
								There doesn&apos;t seem to be any posts
							</p>
						);
					})}
				</m.ul>
			</Section>
			<PWAPrompt />
		</>
	);
};

export default Web;
