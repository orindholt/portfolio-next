import { useState } from "react";

const LightBox = ({ children, condition = true }) => {
	const [active, setActive] = useState(false);

	const toggleFunction = () => condition && setActive(!active);

	return (
		<div
			onClick={toggleFunction}
			className={
				active
					? `fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#000] !bg-opacity-70 backdrop-blur-sm flex`
					: undefined
			}
		>
			<div
				className={
					active
						? `w-full sm:w-3/4 md:w-1/2 lg:w-1/3 m-auto px-2 sm:px-0`
						: undefined
				}
			>
				{children}
			</div>
		</div>
	);
};

export default LightBox;
