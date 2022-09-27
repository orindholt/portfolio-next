import Socials from "./Socials";

const Footerbar = () => {
	return (
		<footer className="mt-auto hidden md:flex bg-black md:dark:bg-gray-dark text-white w-full py-2 backdrop-blur-sm  text-center flex-col gap-2">
			<p>
				<span className="font-bold">Curious on the code?</span> Feel free to
				check out the{" "}
				<a
					className="text-orange-normal hover:underline font-medium"
					target="_blank"
					href="https://github.com/orindholt/portfolio-next"
					rel="noreferrer"
				>
					source code
				</a>
			</p>
			<div className="md:flex hidden md:justify-center">
				<Socials />
			</div>
		</footer>
	);
};

export default Footerbar;
