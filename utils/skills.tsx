import { FC, ReactElement } from "react";
import {
	IoLogoReact,
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoSass,
	IoLogoGithub,
	IoLogoVue,
	IoLogoNodejs,
	IoLogoPython,
	IoLogoAngular,
	IoLogoWordpress,
} from "react-icons/io5";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiExpress,
	SiPhp,
	SiCsharp,
	SiLit,
	SiMongodb,
	SiAdobephotoshop,
	SiUnity,
	SiSupabase,
	SiGit,
} from "react-icons/si";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

type Skill = {
	name: string;
	shorthand?: string;
	nameColor: Color;
	bg: Color;
	icon: ReactElement;
	iconColor: Color;
	outlined?: boolean;
};

const skills: Skill[] = [
	{
		name: "HTML5",
		shorthand: "HTML",
		nameColor: "#ffffff",
		bg: "#FF5733",
		icon: <IoLogoHtml5 />,
		iconColor: "#ffffff",
	},
	{
		name: "CSS3",
		shorthand: "CSS",
		nameColor: "#ffffff",
		bg: "#2196f3",
		icon: <IoLogoCss3 />,
		iconColor: "#ffffff",
	},
	{
		name: "Tailwind",
		nameColor: "#ffffff",
		bg: "#0bb6d4",
		icon: <SiTailwindcss />,
		iconColor: "#ffffff",
	},
	{
		name: "Sass",
		nameColor: "#ffffff",
		bg: "#cf649a",
		icon: <IoLogoSass />,
		iconColor: "#ffffff",
	},
	{
		name: "Javascript",
		shorthand: "JS",
		nameColor: "#ffffff",
		bg: "#ebc917",
		icon: <IoLogoJavascript />,
		iconColor: "#ffffff",
	},
	{
		name: "React",
		nameColor: "#ffffff",
		bg: "#222222",
		icon: <IoLogoReact />,
		iconColor: "#03d9fe",
	},
	{
		name: "Next",
		nameColor: "#000000",
		bg: "#ffffff",
		icon: <SiNextdotjs />,
		iconColor: "#000000",
		outlined: true,
	},
	{
		name: "Typescript",
		shorthand: "TS",
		nameColor: "#ffffff",
		bg: "#3178c6",
		icon: <SiTypescript />,
		iconColor: "#ffffff",
	},
	{
		name: "Git",
		nameColor: "#f15131",
		bg: "#333333",
		icon: <SiGit />,
		iconColor: "#f15131",
	},
	{
		name: "Github",
		nameColor: "#ffffff",
		bg: "#000000",
		icon: <IoLogoGithub />,
		iconColor: "#ffffff",
	},
	{
		name: "Vue",
		nameColor: "#41b783",
		bg: "#34495e",
		icon: <IoLogoVue />,
		iconColor: "#41b783",
	},
	{
		name: "Express",
		shorthand: "Ex",
		nameColor: "#ffffff",
		bg: "#353535",
		icon: <SiExpress />,
		iconColor: "#ffffff",
	},
	{
		name: "Node",
		nameColor: "#333333",
		bg: "#689f63",
		icon: <IoLogoNodejs />,
		iconColor: "#333333",
	},
	{
		name: "PHP",
		nameColor: "#ffffff",
		bg: "#9867d3",
		icon: <SiPhp />,
		iconColor: "#ffffff",
	},
	{
		name: "Python",
		shorthand: "Py",
		nameColor: "#ffd241",
		bg: "#3674a5",
		icon: <IoLogoPython />,
		iconColor: "#ffd241",
	},
	{
		name: "Angular",
		nameColor: "#ffffff",
		bg: "#de0031",
		icon: <IoLogoAngular />,
		iconColor: "#ffffff",
	},
	{
		name: "C Sharp",
		shorthand: "C#",
		nameColor: "#ffffff",
		bg: "#380191",
		icon: <SiCsharp />,
		iconColor: "#ffffff",
	},
	{
		name: "Wordpress",
		shorthand: "WP",
		nameColor: "#ffffff",
		bg: "#00769c",
		icon: <IoLogoWordpress />,
		iconColor: "#ffffff",
	},
	{
		name: "LitElement",
		shorthand: "Lit",
		nameColor: "#2a2f9b",
		bg: "#00e8ff",
		icon: <SiLit />,
		iconColor: "#2a2f9b",
	},
	{
		name: "MongoDB",
		shorthand: "Mongo",
		nameColor: "#01ed66",
		bg: "#011e2c",
		icon: <SiMongodb />,
		iconColor: "#01ed66",
	},
	{
		name: "Photoshop",
		shorthand: "PS",
		nameColor: "#2fa8ff",
		bg: "#001e36",
		icon: <SiAdobephotoshop />,
		iconColor: "#2fa8ff",
	},
	{
		name: "Unity",
		nameColor: "#000000",
		bg: "#ffffff",
		icon: <SiUnity />,
		iconColor: "#000000",
		outlined: true,
	},
	{
		name: "Supabase",
		shorthand: "SB",
		nameColor: "#3ecf8e",
		bg: "#1f1f1f",
		icon: <SiSupabase />,
		iconColor: "#3ecf8e",
		outlined: false,
	},
];

export default skills;