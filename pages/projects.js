import {
	IoCamera,
	IoCodeSlash,
	IoPlanet,
	IoMusicalNotes,
} from "react-icons/io5";
import WorkCategory from "../components/WorkCategory";

const Projects = () => {
	return (
		<>
			<section>
				<h2 className="text-4xl font-bold">Collection of my work</h2>
				<p className="dark:text-silver text-blue-normal">
					Please pick a category to start!
				</p>
				<div className="flex flex-col gap-6 py-4">
					<WorkCategory icon={<IoPlanet />} category="Web" anchor="/work/web" />
					<WorkCategory
						icon={<IoCodeSlash />}
						category="Programming"
						anchor="/work/programming"
					/>
					<WorkCategory
						icon={<IoCamera />}
						category="Photography"
						anchor="/work/gallery"
					/>
					<WorkCategory
						icon={<IoMusicalNotes />}
						category="Music"
						anchor="https://soundcloud.com/oliver-rindholt"
						caption="Sends you to soundcloud"
					/>
				</div>
			</section>
		</>
	);
};

export default Projects;
