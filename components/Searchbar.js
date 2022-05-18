import { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { AnimatePresence, motion as m } from "framer-motion";

const Searchbar = () => {
	const [searchActive, setSearchActive] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const searchEl = useRef(null);

	useEffect(() => {
		searchActive && searchEl.current.focus();
	}, [searchActive]);

	return (
		<li
			className={`flex transition-all rounded-sm md:justify-start justify-center ${
				searchActive
					? "dark:bg-gray-dark bg-black text-white p-1 md:mr-2"
					: "bg-transparent"
			}`}
		>
			<button onClick={() => setSearchActive(!searchActive)}>
				<IoSearch />
			</button>
			<AnimatePresence>
				{searchActive && (
					<m.input
						initial={{ width: 0 }}
						animate={{ width: 140, paddingLeft: 4, paddingRight: 4 }}
						exit={{ width: 0, paddingLeft: 0, paddingRight: 0 }}
						className="bg-transparent font-normal text-base md:w-auto w-full"
						value={searchValue}
						ref={searchEl}
						onInput={e => setSearchValue(e.target.value)}
					/>
				)}
			</AnimatePresence>
		</li>
	);
};

export default Searchbar;
