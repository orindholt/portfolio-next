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
			className={`flex transition-all rounded-sm md:justify-start justify-center p-1 ${
				searchActive
					? "dark:bg-gray-dark bg-black text-white"
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
						animate={{ width: 140 }}
						exit={{ width: 0 }}
						transition={{ type: "tween" }}
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
