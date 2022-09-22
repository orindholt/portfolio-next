import Project from "../../../components/Web/Project";
import { client } from "../../../utils/sanityClient";

const Web = ({ data }) => {
	return (
		<>
			<h1 className="text-6xl font-bold">Web</h1>
			<div className="bg-gray-dark p-2">
				<ul className="grid grid-cols-2 md:grid-cols-3 gap-12">
					{data &&
						data.map((project, i) => {
							return <Project data={project} key={i} />;
						})}
				</ul>
			</div>
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
