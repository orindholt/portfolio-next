import { IoRemove, IoAdd } from "react-icons/io5";

const Choice = ({ setter, label, activeChoices }) => {
	const isActive = activeChoices.includes(label);

	return (
		<li
			className={`cursor-pointer transition-colors py-1 px-2 select-none rounded-sm flex items-center justify-between gap-1 dark:md:hover:bg-gray-dark md:hover:bg-gray-light sm:text-base text-2xl ${
				isActive ? "dark:!bg-white dark:!text-black !bg-black !text-white" : ""
			}`}
			onClick={() => setter(label)}
		>
			<p className="w-full text-center pb-1">{label}</p>
			{isActive ? <IoRemove /> : <IoAdd />}
		</li>
	);
};

export default Choice;
