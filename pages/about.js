import Image from "next/image";

const About = () => {
	return (
		<div className="overflow-hidden rounded-md">
			<Image
				src="/assets/me.jpg"
				layout="responsive"
				width="2805"
				height="4986"
				quality="70"
				alt="me"
			/>
		</div>
	);
};

export default About;
