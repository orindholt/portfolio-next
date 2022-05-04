import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import {motion as m} from "framer-motion";
import {IoMoon, IoSunny} from "react-icons/io5";

let themeStorage;
if (typeof window !== "undefined") {
	themeStorage = localStorage.theme;
}

const ThemeSwitch = () => {
	const {setTheme} = useTheme();
	const [darkMode, setDarkMode] = useState(themeStorage ? themeStorage : true);
	useEffect(() => {
		themeStorage = darkMode ? "true" : "false";
		setTheme(darkMode ? "dark" : "light");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [darkMode]);
	return (
		<m.button
			onClick={() => setDarkMode(!darkMode)}
			animate={darkMode ? {rotate: 360} : {rotate: 0}}
		>
			{darkMode ? <IoMoon /> : <IoSunny />}
		</m.button>
	);
};

export default ThemeSwitch;
