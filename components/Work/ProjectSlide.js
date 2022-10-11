import Image from "next/image";
import GenericButton from "../GenericButton";
import SkillList from "./SkillList";

const ProjectSlide = ({
	project: { title, description, image, slug, tags },
}) => {
	return (
		<li className="flex flex-col md:flex-row px-4 pt-3 pb-4 cursor-default relative h-full">
			<div className="flex flex-col gap-4 items-center">
				<h2 className="text-4xl font-bold font-roboto-mono">{title}</h2>
				<div className="relative aspect-square overflow-hidden rounded-lg w-60 md:mb-0 mb-4">
					<Image
						src={image}
						alt={title}
						layout="fill"
						className="rounded-sm object-cover"
						priority={true}
					/>
				</div>
			</div>
			<div className="m-auto px-8 flex flex-col gap-5 h-full md:h-auto">
				<SkillList skills={tags} />
				<p className="text-lg pb-2">{description}</p>
				<GenericButton
					anchor={`/projects/${slug}`}
					className="text-lg max-w-fit ml-auto mr-auto mt-auto md:mt-0 md:mr-0 md:!absolute md:bottom-6 md:right-8"
				>
					Details
				</GenericButton>
			</div>
		</li>
	);
};

export default ProjectSlide;
