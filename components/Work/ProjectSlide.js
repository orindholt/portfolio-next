import Image from "next/image";
import GenericButton from "../GenericButton";
import Demo from "./Demo";
import Repo from "./Repo";
import SkillList from "./SkillList";

const ProjectSlide = ({
	project: {
		title,
		description,
		image,
		slug,
		tags,
		repo,
		website,
		is_web: isWeb,
	},
}) => {
	return (
		<li className="flex px-4 pt-3 pb-4 cursor-default relative">
			<div className="flex flex-col gap-4 items-center">
				<h2 className="text-4xl font-bold font-roboto-mono">{title}</h2>
				<div className="relative aspect-square overflow-hidden rounded-lg w-60">
					<Image
						src={image}
						alt={title}
						layout="fill"
						className="rounded-sm object-cover"
					/>
				</div>
			</div>
			<div className="m-auto px-8 flex flex-col gap-5">
				<SkillList skills={tags} />
				<p className="text-lg pb-2">{description}</p>
				{/* <div className="flex justify-center gap-4">
					<Demo url={website} />
					<Repo repo={repo} />
				</div> */}
				<GenericButton
					anchor={`${isWeb ? "web" : "programming"}/${slug}`}
					className="text-lg max-w-fit ml-auto !absolute bottom-6 right-8"
				>
					Details
				</GenericButton>
			</div>
		</li>
	);
};

export default ProjectSlide;
