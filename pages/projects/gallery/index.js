import { client } from "../../../utils/sanityClient";
import Image from "next/image";
import BlockBuilder from "../../../components/Block/BlockBuilder";
import ReadMore from "../../../components/ReadMore";
import dateToRealtime from "../../../utils/dateToRealtime";
import Link from "next/link";
import sanityImage from "../../../utils/sanityImage";

const Gallery = ({ data }) => {
	return (
		<>
			<h1 className="text-6xl font-bold">Gallery</h1>
			<p className="pb-10 pt-1.5 text-xl dark:text-silver text-blue-normal">
				Welcome to my gallery of my best photographs, I've taken over the years.
			</p>
			<ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{data.map(({ slug, title, description, images, taken }, i) => {
					return (
						<div key={i} className="relative flex flex-col">
							<h2 className="text-4xl font-bold">{title}</h2>
							<p className="text-sm mb-2">{dateToRealtime(taken)}</p>
							<BlockBuilder block={description} />
							<Link href={`/projects/gallery/${slug.current}`} passHref>
								<a className="mx-auto mt-auto w-full lg:w-2/3">
									<Image
										src={sanityImage(images[0]).url()}
										width={1920}
										height={2880}
										layout="responsive"
										objectFit="cover"
										alt={images[0].alt}
										placeholder="blur"
										className="rounded-sm shadow-md"
										blurDataURL={sanityImage(images[0]).quality(10).url()}
									/>
								</a>
							</Link>
						</div>
					);
				})}
			</ul>
		</>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(`*[_type == "gallery"]`);
	return {
		props: { data },
	};
}

export default Gallery;
