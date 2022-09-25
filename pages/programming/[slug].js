import supabase from "../../utils/supabaseClient";
import ScreenshotSlider from "../../components/Work/ScreenshotSlider";
import Repo from "../../components/Work/Repo";
import Demo from "../../components/Work/Demo";
import SkillList from "../../components/Work/SkillList";

export async function getStaticPaths() {
	const { data } = await supabase.from("projects").select("slug");
	const paths = data.map(({ slug }) => {
		return { params: { slug } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const slug = context.params.slug;
	const { data, error } = await supabase
		.from("projects")
		.select()
		.eq("slug", slug)
		.single();
	console.log(data);
	return {
		props: { data, error },
	};
}

const Category = ({
	data: { description, repo, screenshots, title, website, tags },
	error,
}) => {
	return (
		<div className="flex gap-10 justify-center">
			<ScreenshotSlider screenshots={screenshots} title={title} />
			<div>
				<SkillList skills={tags} />
				<h1 className="text-6xl lg:text-8xl font-bold mb-5">{title}</h1>
				<p className="text-lg dark:text-silver text-gray-normal">
					{description}
				</p>
				<div className="flex justify-center gap-6 mt-4">
					<Demo url={website} />
					<Repo repo={repo} />
				</div>
			</div>
		</div>
	);
};

export default Category;
