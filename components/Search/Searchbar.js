import { useState, useEffect, useRef } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { AnimatePresence, motion as m } from "framer-motion";
import SearchResults from "./SearchResults";
import useMediaQuery from "../../hooks/useMediaQuery";

const Searchbar = () => {
	const [searchActive, setSearchActive] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const isDesktop = useMediaQuery("md");
	const searchEl = useRef(null);

	useEffect(() => {
		searchActive && searchEl.current.focus();
	}, [searchActive]);

	return (
		<>
			<li
				className={`flex transition-all rounded-sm md:justify-start justify-center md:ml-auto text-2xl ${
					searchActive
						? "dark:bg-gray-dark bg-black text-white fixed top-0 left-0 right-0 md:static border-x-[6px] border-b-4 border-t-[6px] border-solid border-black md:border-0"
						: "bg-transparent"
				}`}
			>
				<button onClick={() => setSearchActive(!searchActive)}>
					{searchActive ? <IoClose /> : <IoSearch />}
				</button>
				<AnimatePresence>
					{searchActive && (
						<m.input
							initial={{ width: 0, opacity: 0 }}
							animate={
								isDesktop
									? { width: 140, opacity: 1 }
									: { width: "100%", opacity: 0 }
							}
							exit={{ width: 0, opacity: 0 }}
							transition={{ type: "tween" }}
							className={`bg-transparent font-normal text-lg md:text-base sm:w-auto w-full
							}`}
							value={searchValue}
							ref={searchEl}
							onInput={e => setSearchValue(e.target.value)}
						/>
					)}
				</AnimatePresence>
			</li>
			<AnimatePresence>
				{searchActive && <SearchResults searchValue={searchValue} />}
			</AnimatePresence>
		</>
	);
};

export default Searchbar;
