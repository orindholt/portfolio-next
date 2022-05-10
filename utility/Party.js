import Confetti from "react-confetti";
import useWindowSize from "./useWindowSize";

const Party = () => {
	const window = useWindowSize();
	const confettiColors = [
		"#f94144",
		"#f3722c",
		"#f8961e",
		"#f9c74f",
		"#90be6d",
		"#43aa8b",
		"#577590",
	];

	return (
		<Confetti
			colors={confettiColors}
			width={`${window.width}px`}
			height={`${window.height}px`}
		/>
	);
};

export default Party;
