import Picture from "../../components/Gallery/Picture";
import supabase from "../../utils/supabaseClient";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import leadingZero from "../../utils/leadingZero";
import ReadMore from "../../components/ReadMore";
import ShootDate from "../../components/Gallery/ShootDate";

export async function getStaticPaths() {
	const { data } = await supabase.from("gallery").select("slug");
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
		.from("gallery")
		.select()
		.eq("slug", slug)
		.single();
	return {
		props: { data, error },
	};
}

const Category = ({
	data: { images, title, description, read_more: readMore, taken },
	error,
}) => {
	console.log(images);
	const router = useRouter();
	return !error && images ? (
		<>
			<button
				type="button"
				className=" mb-2 text-4xl hover:text-orange-normal"
				onClick={() => router.back()}
			>
				<IoArrowBack />
			</button>
			<h1 className="text-6xl font-black mb-2">{title}</h1>
			<ShootDate rawDate={taken} className="!text-xl" />
			<ReadMore more={readMore}>{description}</ReadMore>
			<p className="pt-1 pb-3 text-lg dark:text-silver text-blue-normal"></p>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{images.map((imageSrc, i) => {
					return (
						<Picture
							image={imageSrc}
							alt={`${title} ${leadingZero(i + 1)}`}
							key={i}
						/>
					);
				})}
			</ul>
		</>
	) : (
		<p>Error! {error}</p>
	);
};

export default Category;
