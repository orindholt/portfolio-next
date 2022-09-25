const FilterSelect = ({ filter, options }) => {
	return (
		<div className="text-lg font-bold flex">
			<p>{filter}:</p>
			<select
				className="bg-transparent font-light focus:outline-none"
				name={filter}
			>
				{options.map((op, i) => {
					return (
						<option key={i} className="capitalize" value={op}>
							{op}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default FilterSelect;
