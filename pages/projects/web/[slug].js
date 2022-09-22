import Image from "next/image";
import supabase from "../../../utils/supabaseClient";
import skills from "../../../utils/skills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Skill from "../../../components/Web/Skill";

export async function getStaticPaths() {
	const { data } = await supabase.from("web").select("slug");
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
		.from("web")
		.select()
		.eq("slug", slug)
		.single();
	console.log(data);
	return {
		props: { data, error },
	};
}

const Category = ({
	data: { description, image, repo, screenshots, title, website, tags },
	error,
}) => {
	const includedTags = skills.filter(a => tags.includes(a.name));

	return (
		<div className="flex gap-10 justify-center">
			{screenshots && (
				<div className="w-[376px]">
					<Swiper
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						modules={[Scrollbar, Autoplay]}
						scrollbar={{ draggable: true }}
					>
						{screenshots.map((screenshot, i) => {
							return (
								<SwiperSlide key={i}>
									<Image
										src={screenshot}
										layout="fixed"
										width="376px"
										height="936px"
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			)}
			<div>
				<h1 className="text-8xl font-bold">{title}</h1>
				<ul className="flex gap-2 text-2xl justify-center my-4">
					{includedTags.map((skill, i) => {
						return <Skill skill={skill} includeName={true} key={i} />;
					})}
				</ul>
				<p className="text-lg dark:text-silver text-gray-normal">
					{description}
				</p>
				<div className="flex justify-center gap-6 mt-4">
					{website && (
						<a
							href={website}
							target="_blank"
							className="text-xl font-bold hover:dark:text-silver hover:text-gray-normal"
						>
							Try it now
						</a>
					)}
					{repo && (
						<a
							href={repo}
							target="_blank"
							className="text-xl font-bold hover:dark:text-silver hover:text-gray-normal"
						>
							Source code
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Category;
