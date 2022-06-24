import { useState, useEffect } from "react";
import { client } from "../utils/sanityClient";

const useSearchResult = searchValue => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			if (searchValue) {
				const posts = await client.fetch(`*[title match "${searchValue}*"]`);
				if (posts !== null) setData(posts);
			} else setData(null);
		};
		fetchData();
	}, [searchValue]);
	return data;
};

export default useSearchResult;
