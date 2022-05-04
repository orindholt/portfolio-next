import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="mt-auto hidden md:block">
			<div className="md:flex hidden dark:bg-white bg-black w-full py-2 md:justify-center dark:text-black text-white">
				<Socials />
			</div>
		</footer>
	);
};

export default Footer;
