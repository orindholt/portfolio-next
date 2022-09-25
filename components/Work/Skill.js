const Skill = ({
	skill: { bg, iconColor, icon, name },
	includeName = false,
	className = "",
}) => {
	return (
		<li
			style={{ backgroundColor: bg }}
			className={`rounded-md p-1 px-1.5 shadow-sm text-medium ${className}`}
		>
			<h3 className="flex items-center gap-1" style={{ color: iconColor }}>
				{icon}
				{includeName && <span className="-mt-1">{name}</span>}
			</h3>
		</li>
	);
};

export default Skill;
