import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoStackoverflow,
	IoLogoInstagram,
} from "react-icons/io5";

const buttonVariants = {
	hover: { scale: 1.1 },
	tap: { scale: 0.9 },
};

const Socials = () => {
	return (
		<ul className="flex gap-4 text-xl">
			<li className="md:hover:scale-110 transition-transform">
				<a target="_blank" rel="noreferrer" href="https://github.com/orindholt">
					<IoLogoGithub />
				</a>
			</li>
			<li className="md:hover:scale-110 transition-transform">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/oliver-rindholt-55707b217"
				>
					<IoLogoLinkedin />
				</a>
			</li>
			<li className="md:hover:scale-110 transition-transform">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://stackoverflow.com/users/16197220/orindholt"
				>
					<IoLogoStackoverflow />
				</a>
			</li>
			<li className="md:hover:scale-110 transition-transform">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.instagram.com/rindholtfoto"
				>
					<IoLogoInstagram />
				</a>
			</li>
		</ul>
	);
};

export default Socials;
