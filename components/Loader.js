import { motion as m } from "framer-motion";

const Loader = () => {
	return (
		<m.aside
			className="pointer-events-none select-none text-orange-normal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{
					margin: "auto",
					background: "none",
					display: "block",
					shapeRendering: "auto",
				}}
				width="100px"
				height="100px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<path
					fill="none"
					stroke="currentColor"
					strokeWidth="8"
					strokeDasharray="195.00758544921877 61.581342773437484"
					strokeLinecap="round"
					d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
					style={{ transform: "scale(0.8)", transformOrigin: "50px 50px" }}
				>
					<animate
						attributeName="stroke-dashoffset"
						repeatCount="indefinite"
						dur="1.408450704225352s"
						keyTimes="0;1"
						values="0;256.58892822265625"
					/>
				</path>
			</svg>
		</m.aside>
	);
};

export default Loader;
