import Image from "next/image";
import supabase from "../../utils/supabaseClient";
import skills from "../../utils/skills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Skill from "../../components/Work/Skill";
import leadingZero from "../../utils/leadingZero";

export async function getStaticPaths() {
	const { data } = await supabase.from("coding").select("slug");
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
		.from("coding")
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
				<div className="cursor-grab active:cursor-grabbing max-w-xs lg:max-w-sm">
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
										alt={`${title} Screenshot ${leadingZero(i + 1)}`}
										layout="intrinsic"
										width="384px"
										height="682px"
										objectFit="cover"
										className="object-center"
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			)}
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
					{website && (
						<a
							href={website}
							target="_blank"
							rel="noreferrer"
							className="text-xl font-bold hover:dark:text-silver hover:text-gray-normal"
						>
							Try it now
						</a>
					)}
					{repo && (
						<a
							href={repo}
							target="_blank"
							rel="noreferrer"
							className="hover:scale-105 transition-transform"
						>
							<Skill
								skill={skills.find(a => a.name.toLowerCase() === "github")}
								includeName={true}
								className="text-2xl"
							/>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Category;
