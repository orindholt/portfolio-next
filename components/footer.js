import {motion} from "framer-motion";
import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoStackoverflow,
	IoLogoInstagram,
} from "react-icons/io5";

const buttonVariants = {
	hover: {scale: 1.1},
	tap: {scale: 0.9},
};

const Footer = () => {
	return (
		<footer className="bg-white text-black py-2">
			<ul className="flex gap-10 justify-center">
				<motion.li
					variants={buttonVariants}
					whileHover="hover"
					whileTap="tap"
					className="border-b-2 border-transparent text-2xl"
				>
					<a target="_blank" href="https://github.com/orindholt">
						<IoLogoGithub />
					</a>
				</motion.li>
				<motion.li
					variants={buttonVariants}
					whileHover="hover"
					whileTap="tap"
					className="border-b-2 border-transparent text-2xl"
				>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/oliver-rindholt-55707b217"
					>
						<IoLogoLinkedin />
					</a>
				</motion.li>
				<motion.li
					variants={buttonVariants}
					whileHover="hover"
					whileTap="tap"
					className="border-b-2 border-transparent text-2xl"
				>
					<a
						target="_blank"
						href="https://stackoverflow.com/users/16197220/orindholt"
					>
						<IoLogoStackoverflow />
					</a>
				</motion.li>
				<motion.li
					variants={buttonVariants}
					whileHover="hover"
					whileTap="tap"
					className="border-b-2 border-transparent text-2xl"
				>
					<a target="_blank" href="https://www.instagram.com/rindholtfoto">
						<IoLogoInstagram />
					</a>
				</motion.li>
			</ul>
		</footer>
	);
};

export default Footer;
