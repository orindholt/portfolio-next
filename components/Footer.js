import Socials from "./Socials";

const Footer = () => {
	return (
		<footer className="mt-auto hidden md:block dark:bg-white bg-black w-full py-2 dark:text-black text-white text-center">
			<h2 className="font-semibold">Curious on the code?</h2>
			<p className="mb-1">
				Feel free to check out the{" "}
				<a
					className="text-orange hover:underline"
					target="_blank"
					href="https://github.com/orindholt/portfolio-next"
					rel="noreferrer"
				>
					source code
				</a>{" "}
				on my github
			</p>
			<div className="md:flex hidden md:justify-center">
				<Socials />
			</div>
		</footer>
	);
};

export default Footer;
