import Image from "next/image";
import Link from "next/link";
import sanityImage from "../../utils/sanityImage";
import { motion as m } from "framer-motion";
import GenericButton from "../GenericButton";

const Project = ({ data }) => {
	const { header, summary, repo, title, slug } = data;
	console.log(data);
	return (
		<m.li className="relative group">
			<Image
				src={sanityImage(header).url()}
				width="400"
				height="250"
				quality={100}
				alt={title}
				className="rounded-sm"
			/>
			<div className="absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-100 opacity-0 grid place-content-center pt-4 bg-black bg-opacity-80 transition-all">
				<h2 className="text-3xl  font-medium">{summary}</h2>
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
		</m.li>
	);
};

export default Project;
