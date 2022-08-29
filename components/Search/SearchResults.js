import { useDeferredValue } from "react";
import { motion as m } from "framer-motion";
import useSearchResult from "../../hooks/useSearchResult";
import SearchResult from "./SearchResult";

const SearchResults = ({ searchValue }) => {
	const deferredValue = useDeferredValue(searchValue);

	
	const data = useSearchResult(deferredValue);

	console.log(data);
	return (
		searchValue &&
		data && (
			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="fixed top-[3.35rem] md:top-12 left-0 right-0 z-[60] md:z-30"
			>
				<ul>
					{data.map((result, i) => {
						return <SearchResult key={i} result={result} />;
					})}
				</ul>
			</m.div>
		)
	);
};

export default SearchResults;
