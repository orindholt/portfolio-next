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

const Socials = () => {
	return (
		<ul className="flex gap-4 text-xl">
			<motion.li variants={buttonVariants} whileHover="hover" whileTap="tap">
				<a target="_blank" rel="noreferrer" href="https://github.com/orindholt">
					<IoLogoGithub />
				</a>
			</motion.li>
			<motion.li variants={buttonVariants} whileHover="hover" whileTap="tap">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/oliver-rindholt-55707b217"
				>
					<IoLogoLinkedin />
				</a>
			</motion.li>
			<motion.li variants={buttonVariants} whileHover="hover" whileTap="tap">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://stackoverflow.com/users/16197220/orindholt"
				>
					<IoLogoStackoverflow />
				</a>
			</motion.li>
			<motion.li variants={buttonVariants} whileHover="hover" whileTap="tap">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.instagram.com/rindholtfoto"
				>
					<IoLogoInstagram />
				</a>
			</motion.li>
		</ul>
	);
};

export default Socials;
