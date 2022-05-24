import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { IoMoon, IoSunny } from "react-icons/io5";
import Loader from "./Loader";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Loader />;
	}

	return (
		<m.button
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			className="flex"
			animate={resolvedTheme === "dark" ? { rotate: 360 } : { rotate: 0 }}
		>
			{resolvedTheme !== "dark" ? <IoMoon /> : <IoSunny />}
		</m.button>
	);
};

export default ThemeSwitch;
