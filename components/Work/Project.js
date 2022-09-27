import Image from "next/image";
import Link from "next/link";
import skills from "../../utils/skills";
import Skill from "./Skill";
import { motion as m } from "framer-motion";
import { useState } from "react";

const Project = ({ data, index }) => {
	const staggerDelay = 5;
	const projectVariants = {
		hidden: { opacity: 0, y: -30 },
		show: {
			opacity: 1,
			y: 0,
			delay: parseInt(`0.${index + 1 + staggerDelay}`),
		},
	};
	const { title, slug, repo, image, tags } = data;
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<m.li
			className="flex flex-col gap-2 relative"
			variants={projectVariants}
			initial="hidden"
			animate={isLoaded ? "show" : "hidden"}
			exit="exit"
		>
			<Link href={`/projects/${slug}`} passHref>
				<a className="relative group aspect-square overflow-hidden cursor-pointer rounded-lg">
					<Image
						src={image}
						alt={title}
						layout="fill"
						className="rounded-sm object-cover group-hover:brightness-50 transition-all"
						onLoadingComplete={() => setIsLoaded(true)}
					/>
					<h2 className="absolute top-0 bottom-0 left-0 right-0 m-auto text-white max-w-fit px-4 text-xl opacity-0 group-hover:opacity-100 transition-opacity grid place-content-center uppercase font-bold tracking-widest rounded-sm">
						{title}
					</h2>
				</a>
			</Link>
			{tags && tags.length && (
				<ul className="flex gap-2 overflow-auto absolute bottom-2 left-2 text-2xl">
					{skills
						.filter(a => tags.includes(a.name))
						.map((tag, i) => {
							return <Skill skill={tag} key={i} />;
						})}
				</ul>
			)}
			{repo && (
				<a
					href={repo}
					className="hover:scale-110 transition-transform ml-auto text-white text-3xl absolute bottom-2 right-2"
					target="_blank"
					rel="noreferrer"
				>
					{skills.find(a => a.name.toLowerCase() === "github").icon}
				</a>
			)}
		</m.li>
	);
};

export default Project;
