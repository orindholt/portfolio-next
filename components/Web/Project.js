import Image from "next/image";
import Link from "next/link";
import sanityImage from "../../utils/sanityImage";
import { motion as m } from "framer-motion";
import GenericButton from "../GenericButton";

const Project = ({ data }) => {
	const { header, summary, repo, title, slug } = data;
	console.log(data);
	return (
		<m.li>
			<div className="relative group aspect-video">
				<Image
					src={sanityImage(header).url()}
					quality={100}
					alt={title}
					layout="fill"
					className="rounded-sm object-cover"
				/>
				<div className="absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-100 opacity-0 grid place-content-center pt-4 bg-black bg-opacity-80 transition-all">
					<GenericButton
						anchor={`/projects/web/${slug.current}`}
						className="px-2 py-1 rounded-md max-w-fit mx-auto font-bold my-3"
					>
						Read More
					</GenericButton>
					<a
						href={repo}
						target="_blank"
						className="dark:text-silver text-blue-normal hover:underline max-w-fit mx-auto"
					>
						Source Code
					</a>
				</div>
			</div>
			<h2 className="text-xl text-left font-medium">{summary}</h2>
		</m.li>
	);
};

export default Project;
