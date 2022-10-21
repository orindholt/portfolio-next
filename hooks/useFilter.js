import { useState } from "react";

const useFilter = ({ data }) => {
	const [activeFilters, setActiveFilters] = useState([]);

	const uniqueTags = Array.from(new Set(data.map(val => val.tags).flat()));
	const sortedData = [...data].sort(
		(a, b) => new Date(a.created_at) - new Date(b.created_at)
	);
	const filteredData = sortedData.map(project => {
		return (
			(!activeFilters.length ||
				activeFilters.every(a => project.tags.includes(a))) &&
			project
		);
	});

	return {
		sortedData,
		filteredData,
		uniqueTags,
		state: { get: activeFilters, set: setActiveFilters },
	};
};

export default useFilter;
