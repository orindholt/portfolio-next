import {motion as m} from "framer-motion";
import {IoLogoLinkedin} from "react-icons/io5";
import CareerBranch from "./Branch";

const positions = [{name: "", date: "", desc: ""}];

const CareerTree = () => {
	return (
		<>
			<div>
				{positions.map((i, position) => {
					return <CareerBranch key={i} position={position} />;
				})}
			</div>
			<a
				className="gap-1 items-center md:hover:text-orange text-xl inline-flex mr-auto"
				target="_blank"
				href="https://www.linkedin.com/in/oliver-rindholt-55707b217"
			>
				<span>
					<IoLogoLinkedin />
				</span>
				See more
			</a>
		</>
	);
};

export default CareerTree;
