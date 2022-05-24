import { useEffect, useState } from "react";

const Choice = ({ setter, label, activeChoices }) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (activeChoices.includes(label)) {
			setIsActive(true);
		} else setIsActive(false);
	}, [activeChoices]);

	return (
		<li
			className={`cursor-pointer transition-colors py-1 px-2 select-none rounded-sm ${
				Boolean(isActive) && "dark:bg-white dark:text-black bg-black text-white"
			}`}
			onClick={() => setter(label)}
		>
			{label}
		</li>
	);
};

export default Choice;
