import Head from "next/head";
import Image from "next/image";
import TechCard from "../components/TechCard";
import { IoLogoReact } from "react-icons/io5";

const expTech = [
	{
		name: "React",
		nameColor: "text-white",
		bg: "bg-[#222222]",
		icon: <IoLogoReact />,
		iconColor: "text-[#03d9fe]",
		anchor: "/web",
	},
];

const About = () => {
	return (
		<>
			<Head>
				<title>Oliver - About</title>
			</Head>
			<section>
				<div className="flex items-center justify-evenly flex-col md:flex-row">
					<div>
						<h2 className="text-4xl font-bold leading-7">Who am I?</h2>
						<p className="font-light text-silver my-3">
							You might say that I'm a man of many <br />
							<span className="underline text-white font-bold">
								capabilities
							</span>
							. I do what the people need me to do!
						</p>
					</div>
					<Image
						className="rounded-full shadow-lg"
						src="/assets/me.jpg"
						width="320"
						height="320"
					/>
				</div>
				<p className="text-lg font-light">What do I do?</p>

				<section className="rounded-none">
					<h3 className="font-bold text-2xl mb-4">I have experience with:</h3>
					<div className="grid grid-cols-2 gap-2">
						{expTech.map((tech, i) => {
							return <TechCard key={i} tech={tech} />;
						})}
					</div>
				</section>
			</section>
		</>
	);
};

export default About;
