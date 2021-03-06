import FooterLink from "./FooterLink";
import Socials from "./Socials";
import {
	IoHome,
	IoPlanet,
	IoInformationCircle,
	IoBook,
	IoCall,
} from "react-icons/io5";

const Footer = () => {
	return (
		<footer className="mt-auto flex fixed bottom-0 md:static bg-white dark:bg-black md:bg-black md:dark:bg-white w-full py-2 !bg-opacity-70 dark:!bg-opacity-90 md:!bg-opacity-100 backdrop-blur-sm dark:text-black text-white text-center md:flex-col md:gap-1">
			<p className="hidden md:block">
				<span className="font-bold">Curious on the code?</span> Feel free to
				check out the{" "}
				<a
					className="text-orange-normal md:hover:underline"
					target="_blank"
					href="https://github.com/orindholt/portfolio-next"
					rel="noreferrer"
				>
					source code
				</a>
			</p>
			<ul className="gap-3 md:justify-center flex md:hidden md:mx-0 mx-auto px-2 md:px-0">
				<FooterLink to="/">
					<IoHome />
				</FooterLink>
				<FooterLink to="/work">
					<IoPlanet />
				</FooterLink>
				<FooterLink to="/about">
					<IoInformationCircle />
				</FooterLink>
				<FooterLink to="/blog">
					<IoBook />
				</FooterLink>
				<FooterLink to="/contact">
					<IoCall />
				</FooterLink>
			</ul>
			<div className="md:flex hidden md:justify-center">
				<Socials />
			</div>
		</footer>
	);
};

export default Footer;
