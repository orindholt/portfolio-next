import { useDeferredValue } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import useSearchResult from "../../hooks/useSearchResult";
import SearchResult from "./SearchResult";

const SearchResults = ({ searchValue }) => {
	const deferredValue = useDeferredValue(searchValue);
	const data = useSearchResult(deferredValue);

	console.log(data);
	return (
		searchValue &&
		data && (
			<div className="fixed top-[3.35rem] md:top-12 left-0 right-0 z-[60] md:z-30">
				<ul>
					{data.map((result, i) => {
						return <SearchResult key={i} result={result} />;
					})}
				</ul>
			</div>
		)
	);
};

export default SearchResults;
