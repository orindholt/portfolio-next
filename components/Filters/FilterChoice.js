import Choice from "./Choice";

const FilterChoice = ({
	choices,
	caption,
	activeChoices,
	setActiveChoices,
}) => {
	const pushChoice = choice =>
		setActiveChoices(
			!activeChoices.includes(choice)
				? [...activeChoices, choice]
				: activeChoices.filter(a => a !== choice)
		);

	return (
		<div>
			<h3 className="font-bold text-xl">{caption}</h3>
			<ul>
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
			</ul>
		</div>
	);
};

export default FilterChoice;
