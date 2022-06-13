import Project from "../../../components/Web/Project";
import { client } from "../../../utils/sanityClient";

const Web = ({ data }) => {
	return (
		<>
			<h1 className="text-6xl font-bold">Web</h1>
			<p className="pb-10 pt-1.5 text-xl dark:text-silver text-blue-normal"></p>
			<ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{data &&
					data.map((project, i) => {
						return <Project data={project} key={i} />;
					})}
			</ul>
		</>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(`*[_type == "web"]`);
	return {
		props: { data },
	};
}

export default Web;
