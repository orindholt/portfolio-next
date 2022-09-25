import supabase from "../../utils/supabaseClient";
import skills from "../../utils/skills";
import Skill from "../../components/Work/Skill";
import Demo from "../../components/Work/Demo";
import Repo from "../../components/Work/Repo";
import ScreenshotSlider from "../../components/Work/ScreenshotSlider";

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
	return {
		props: { data, error },
	};
}

const Category = ({
	data: { description, repo, screenshots, title, website, tags },
	error,
}) => {
	const includedTags = skills.filter(a => tags.includes(a.name));

	return (
		<div className="flex gap-10 justify-center">
			<ScreenshotSlider screenshots={screenshots} title={title} />
			<div>
				<ul className="flex gap-2 text-2xl justify-center">
					{includedTags.map((skill, i) => {
						return <Skill skill={skill} includeName={true} key={i} />;
					})}
				</ul>
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
