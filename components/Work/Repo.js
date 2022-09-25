import Skill from "./Skill";
import skills from "../../utils/skills";

const Repo = ({ repo }) => {
	return (
		repo && (
			<a
				href={repo}
				target="_blank"
				rel="noreferrer"
				className="hover:scale-105 transition-transform"
			>
				<Skill
					skill={skills.find(a => a.name.toLowerCase() === "github")}
					includeName={true}
					className="text-2xl"
				/>
			</a>
		)
	);
};

export default Repo;
