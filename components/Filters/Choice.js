import { IoRemove, IoAdd } from "react-icons/io5";
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
			className={`cursor-pointer transition-colors py-1 px-2 select-none rounded-sm flex items-center justify-between gap-1 dark:md:hover:bg-gray-dark md:hover:bg-gray-light text-4xl font-semibold sm:font-normal sm:text-base ${
				isActive && "dark:!bg-white dark:!text-black !bg-black !text-white"
			}`}
			onClick={() => setter(label)}
		>
			<p className="w-full text-center">{label}</p>
			{isActive ? <IoRemove /> : <IoAdd />}
		</li>
	);
};

export default Choice;
