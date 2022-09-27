import { useState, useEffect } from "react";
import supabase from "../utils/supabaseClient";

const useSearchResult = searchValue => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			if (searchValue) {
				let { data: posts, error } = await supabase
					.from("projects")
					.select("title")
					.textSearch("title", searchValue);
				console.log(posts, error);
				if (posts !== null) setData(posts);
			} else setData(null);
		};
		fetchData();
	}, [searchValue]);
	return data;
};

export default useSearchResult;
