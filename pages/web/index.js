import supabase from "../../utils/supabaseClient";
import PWAPrompt from "../../components/PWAPrompt";
import ProjectList from "../../components/Work/ProjectList";

export async function getStaticProps() {
	const { data } = await supabase
		.from("projects")
		.select("*")
		.eq("is_web", true);
	return {
		props: { data },
	};
}

const Web = ({ data }) => {
	return (
		<>
			<h1 className="text-6xl font-bold">Web</h1>
			<ProjectList data={data} />
			<PWAPrompt />
		</>
	);
};

export default Web;
