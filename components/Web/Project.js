import Image from "next/image";
import Link from "next/link";
import skills from "../../utils/skills";
import Skill from "./Skill";
import { motion as m } from "framer-motion";

const Project = ({ data, variants }) => {
	const { title, slug, repo, image, tags } = data;

	console.log(data);

	const includedTags = skills.filter(a => tags.includes(a.name));
	return (
		<m.li className="flex flex-col gap-2 relative" variants={variants}>
			<Link href={`web/${slug}`}>
				<div className="relative group aspect-square overflow-hidden cursor-pointer rounded-lg">
					<Image
						src={image}
						alt={title}
						layout="fill"
						className="rounded-sm object-cover group-hover:brightness-50 transition-all"
					/>
					<h2 className="absolute top-0 bottom-0 left-0 right-0 m-auto text-white max-w-fit px-4 text-xl opacity-0 group-hover:opacity-100 transition-opacity grid place-content-center uppercase font-bold tracking-widest rounded-sm">
						{title}
					</h2>
				</div>
			</Link>
			<div className="flex gap-2 items-center text-2xl absolute bottom-0 right-0 left-0 p-2">
				<ul className="flex gap-2 overflow-auto">
					{includedTags.map((tag, i) => {
						return <Skill skill={tag} key={i} />;
					})}
				</ul>
				<a
					href={repo}
					className="hover:scale-110 transition-transform ml-auto text-white text-3xl"
					target="_blank"
					rel="noreferrer"
				>
					{skills.find(a => a.name.toLowerCase() === "github").icon}
				</a>
			</div>
		</m.li>
	);
};

export default Project;
