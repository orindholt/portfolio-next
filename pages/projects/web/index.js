import Project from "../../../components/Web/Project";
import supabase from "../../../utils/supabaseClient";

const Web = ({ data }) => {
	return (
		<>
			<h1 className="text-6xl font-bold">Web</h1>
			<ul className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-6">
				{data &&
					data.map((project, i) => {
						return <Project data={project} key={i} />;
					})}
			</ul>
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
