import tw from "../tailwind.config";
import useWindowSize from "./useWindowSize";
import { useEffect, useState } from "react";

const useMediaQuery = size => {
	// size = tailwind config screens - md = 768px
	const [isDesktop, setIsDesktop] = useState(true);
	const window = useWindowSize();

	useEffect(() => {
		let windowWidth = parseInt(window.width);
		let mdBreakPoint = parseInt(
			tw.theme.extend.screens[size].replace("px", "")
		);
		setIsDesktop(windowWidth >= mdBreakPoint ? true : false);
	}, [window]);
	return isDesktop;
};

export default useMediaQuery;
