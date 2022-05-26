import { useEffect } from "react";

const FilterIcon = ({ state = false, size = "50" }) => {
	const transitionStyles = {
		transition: "500ms",
		transitionTimingFunction: "easeOut",
	};
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 36 36"
			fill="none"
		>
			<g id="Bars" fill="currentColor">
				<rect id="Bar 3" x="3" y="25" width="30" height="2" rx="1" />
				<rect id="Bar 2" x="2" y="16" width="30" height="2" rx="1" />
				<rect id="Bar 1" x="3" y="7" width="30" height="2" rx="1" />
			</g>
			<g id="Ellipses" fill="currentColor">
				<circle
					style={transitionStyles}
					id="Ellipse 1"
					cx={state ? "11" : "24"}
					cy="8"
					r="3"
				/>
				<circle
					style={transitionStyles}
					id="Ellipse 2"
					cx={state ? "24" : "11"}
					cy="17"
					r="3"
				/>
				<circle
					style={transitionStyles}
					id="Ellipse 3"
					cx={state ? "11" : "24"}
					cy="26"
					r="3"
				/>
			</g>
		</svg>
	);
};

export default FilterIcon;
