import { useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import Choice from "./Choice";
import FilterIcon from "../Icons/FilterIcon";
import GenericButton from "../GenericButton";

const FilterChoice = ({ choices, activeChoices, setActiveChoices }) => {
	const [active, setActive] = useState(false);
	const pushChoice = choice => {
		setActiveChoices(
			!activeChoices.includes(choice)
				? [...activeChoices, choice]
				: activeChoices.filter(a => a !== choice)
		);
	};

	const listVariant = {
		shown: { x: 0, opacity: 1 },
		hidden: { x: -20, opacity: 0 },
	};

	return (
		<aside className="static sm:fixed sm:top-1/4 z-10">
			<div className="relative flex justify-center sm:block sm:justify-start mt-4 sm:mt-0">
				<button
					type="button"
					className="text-4xl"
					onClick={() => setActive(!active)}
				>
					<div className="px-5">
						<FilterIcon state={active} size="40" />
					</div>
				</button>
				<AnimatePresence>
					{active && (
						<div className="dark:bg-black bg-white backdrop-blur-sm !bg-opacity-50 md:bg-transparent rounded-sm fixed sm:absolute sm:w-auto sm:h-full w-full h-full sm:top-auto sm:left-auto top-0 left-0 z-20 sm:p-0 px-16 pb-20 flex flex-col justify-center">
							<m.ul
								variants={listVariant}
								initial="hidden"
								animate="shown"
								exit="hidden"
								transition={{ type: "tween" }}
								className="flex flex-col justify-center gap-4 sm:gap-1"
							>
								{choices.map((choice, i) => {
									return (
										<Choice
											key={i}
											label={choice}
											setter={pushChoice}
											activeChoices={activeChoices}
										/>
									);
								})}
							</m.ul>
							<GenericButton
								classes="mx-auto mt-10 font-normal sm:hidden"
								click={() => setActive(false)}
							>
								Close <IoCloseSharp />
							</GenericButton>
						</div>
					)}
				</AnimatePresence>
			</div>
		</aside>
	);
};

export default FilterChoice;
