import Skill from "./Skill";
import skills from "../../utils/skills";

const SkillList = ({ skills: tags }) => {
	const includedTags = skills.filter(a => tags.includes(a.name));
	return (
		<ul className="flex gap-2 text-2xl justify-center">
			{includedTags.map((skill, i) => {
				return <Skill skill={skill} includeName={true} key={i} />;
			})}
		</ul>
	);
};

export default SkillList;
