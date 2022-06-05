import { useState } from "react";

const LightBox = ({ children }) => {
	const [active, setActive] = useState(false);
	return (
		<div
			onClick={() => setActive(!active)}
			className={
				active &&
				`fixed top-0 left-0 right-0 bottom-0 z-50 dark:bg-black bg-white !bg-opacity-70 backdrop-blur-sm flex`
			}
		>
			<div
				className={
					active && `w-full sm:w-3/4 md:w-1/2 lg:w-1/3 m-auto px-2 sm:px-0`
				}
			>
				{children}
			</div>
		</div>
	);
};

export default LightBox;
