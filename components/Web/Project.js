import Image from "next/image";
import Link from "next/link";
import sanityImage from "../../utils/sanityImage";
import { motion as m } from "framer-motion";
import skills from "../../utils/skills";

const Project = ({ data }) => {
	const {
		header,
		summary,
		repo,
		title,
		slug: { current: slug },
		tags,
	} = data;
	console.log(data);
	const includedTags = skills.filter(a => tags.includes(a.name));
	return (
		<m.li className="flex flex-col gap-2">
			<Link href={slug}>
				<div className="relative group aspect-square overflow-hidden cursor-pointer">
					<Image
						src={sanityImage(header).url()}
						quality={100}
						alt={title}
						layout="fill"
						className="rounded-sm object-cover group-hover:brightness-50 transition-all"
					/>
					<h2 className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-white h-32 w-32 opacity-0 group-hover:opacity-100 transition-opacity grid place-content-center text-black uppercase font-bold">
						{title}
					</h2>
				</div>
			</Link>
			<ul className="flex gap-2 text-2xl overflow-auto">
				{includedTags.map((skill, i) => {
					return (
						<li
							key={i}
							style={{ backgroundColor: skill.bg }}
							className="rounded-sm py-0.5 px-1 shadow-sm"
						>
							<div
								style={{ color: skill.iconColor }}
								className="flex items-center gap-1"
							>
								{skill.icon} <p className="text-sm">{skill.name}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</m.li>
	);
};

export default Project;
