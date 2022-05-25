import Head from "next/head";
import Image from "next/image";
import TechCard from "../components/TechCard";
import {
	IoLogoReact,
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoSass,
	IoLogoGithub,
} from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiAdobephotoshop } from "react-icons/si";

const expTech = [
	{
		name: "HTML5",
		nameColor: "white",
		bg: "#FF5733",
		icon: <IoLogoHtml5 />,
		iconColor: "white",
		gradientFrom: "#FF5733",
		levelPercent: 100,
	},
	{
		name: "CSS3",
		nameColor: "white",
		bg: "#2196f3",
		icon: <IoLogoCss3 />,
		iconColor: "white",
		gradientFrom: "#2196f3",
		levelPercent: 90,
	},
	{
		name: "Tailwind",
		nameColor: "white",
		bg: "#0bb6d4",
		icon: <SiTailwindcss />,
		iconColor: "white",
		gradientFrom: "#0bb6d4",
		gradientTo: "#1dc9b9",
		levelPercent: 100,
	},
	{
		name: "Sass",
		nameColor: "white",
		bg: "#cf649a",
		icon: <IoLogoSass />,
		iconColor: "white",
		gradientFrom: "#cf649a",
		levelPercent: 90,
	},
	{
		name: "Javascript",
		nameColor: "white",
		bg: "#ebc917",
		icon: <IoLogoJavascript />,
		iconColor: "white",
		gradientFrom: "#ebc917",
		levelPercent: 85,
	},
	{
		name: "React",
		nameColor: "white",
		bg: "#222222",
		icon: <IoLogoReact />,
		iconColor: "#03d9fe",
		gradientFrom: "#03d9fe",
		levelPercent: 80,
	},
	{
		name: "Next.js",
		nameColor: "black",
		bg: "#ffffff",
		icon: <SiNextdotjs />,
		iconColor: "black",
		gradientFrom: "#ffffff",
		levelPercent: 70,
		outlined: true,
	},
	{
		name: "Github",
		nameColor: "white",
		bg: "#000000",
		icon: <IoLogoGithub />,
		iconColor: "white",
		gradientFrom: "#000000",
		levelPercent: 80,
	},
	{
		name: "Photoshop",
		nameColor: "#41abe5",
		bg: "#001e36",
		icon: <SiAdobephotoshop />,
		iconColor: "#41abe5",
		gradientFrom: "#41abe5",
		levelPercent: 60,
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
						<p className="dark:text-silver text-blue-normal my-3">
							You might say that I'm a dev of many <br />
							<span className="underline dark:text-white text-black font-bold">
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
						placeholder="blur"
					/>
				</div>
				<p className="text-lg font-light mt-4 md:mt-0">What are my skills?</p>
				<section className="rounded-none">
					<h3 className="font-bold text-2xl mb-4">I have experience with:</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
