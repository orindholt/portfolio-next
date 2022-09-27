import { useState } from "react";
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
		<m.aside
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1 }}
			className="z-10 mr-auto"
		>
			<div className="relative flex justify-center sm:block sm:justify-start mt-4 sm:mt-0">
				<button
					type="button"
					className="text-4xl"
					onClick={() => setActive(!active)}
				>
					<div className="px-5 flex gap-2 items-center">
						<p className="text-2xl font-bold -mt-2">Filters</p>{" "}
						<FilterIcon state={active} size="40" />
					</div>
				</button>
				<AnimatePresence>
					{active && (
						<div className="absolute top-10 -ml-4">
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
								className="mx-auto mt-10 font-normal sm:hidden"
								click={() => setActive(false)}
							>
								Close <IoCloseSharp />
							</GenericButton>
						</div>
					)}
				</AnimatePresence>
			</div>
		</m.aside>
	);
};

export default FilterChoice;
