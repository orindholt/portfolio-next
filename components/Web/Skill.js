const Skill = ({
	skill: { bg, iconColor, icon, name },
	includeName = false,
}) => {
	return (
		<li
			style={{ backgroundColor: bg }}
			className="rounded-md py-0.5 px-1 shadow-sm"
		>
			<div style={{ color: iconColor }} className="flex items-center gap-1">
				{icon}
				{includeName && name}
			</div>
		</li>
	);
};

export default Skill;
