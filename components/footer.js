import Socials from "./Socials";
import Link from "next/link";
import {IoHome} from "react-icons/io5";

const Footer = () => {
	return (
		<footer className="mt-auto">
			<div className="md:flex hidden dark:bg-white bg-black w-full py-2 md:justify-center dark:text-black text-white">
				<Socials />
			</div>
			<div className="w-full flex justify-evenly fixed bottom-0 text-5xl py-2 md:hidden dark:bg-black bg-white bg-opacity-80 backdrop-blur-sm">
				<Link href="/">
					<div className="active:scale-90 transition-transform">
						<IoHome />
					</div>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
