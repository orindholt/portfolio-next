import { motion as m } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import CareerBranch from "./Branch";

const date = new Date();
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const positions = [
	{
		name: "3 Wise Monkeys",
		status: "Junior Frontend Developer",
		date: {
			from: { year: "2022", month: "April" },
			to: { year: date.getFullYear(), month: months[date.getMonth()] },
		},
		desc: "",
	},
	{
		name: "3 Wise Monkeys",
		status: "Junior Frontend Developer",
		date: {
			from: { year: "2022", month: "April" },
			to: { year: date.getFullYear(), month: months[date.getMonth()] },
		},
		desc: "",
	},
];

const CareerTree = () => {
	return (
		<div className="my-6 flex flex-col">
			<h2 className="font-light text-3xl text-center my-4">Experience?</h2>
			<div className="flex">
				<ul className="flex flex-col gap-4 w-full">
					{positions.map((position, i) => {
						return <CareerBranch key={i} position={position} />;
					})}
				</ul>
			</div>
			<a
				className="gap-1 items-center md:hover:text-orange text-xl inline-flex mr-auto mt-4 font-medium"
				target="_blank"
				rel="noreferrer"
				href="https://www.linkedin.com/in/oliver-rindholt-55707b217"
			>
				<span>
					<IoLogoLinkedin />
				</span>
				LinkedIn
			</a>
		</div>
	);
};

export default CareerTree;
