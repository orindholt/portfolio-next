import Picture from "../../../components/Gallery/Picture";
import { client } from "../../../utils/sanityClient";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import ReadMore from "../../../components/ReadMore";
import BlockBuilder from "../../../components/Block/BlockBuilder";

export async function getStaticPaths() {
	const data = await client.fetch(`*[_type == "gallery"]`);
	const paths = data.map(({ slug }) => {
		return { params: { slug: slug.current } };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const slug = context.params.slug;

	const data = await client.fetch(
		`*[_type == "gallery" && slug.current match "${slug}"]`
	);
	return {
		props: { data },
	};
}

const Category = ({ data }) => {
	const router = useRouter();
	const { images, title, description, readmore } = data[0];
	return (
		<div>
			<div className="flex justify-between">
				<button
					type="button"
					className=" mb-2 text-4xl hover:text-orange-normal"
					onClick={() => router.back()}
				>
					<IoArrowBack />
				</button>
				<h1 className="text-4xl font-bold">{title}</h1>
			</div>
			<div className="pt-1 pb-3 text-lg dark:text-silver text-blue-normal">
				<BlockBuilder block={readmore} /> <BlockBuilder block={description} />
			</div>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{images.map((image, i) => {
					return <Picture image={image} key={i} />;
				})}
			</ul>
		</div>
	);
};

export default Category;
