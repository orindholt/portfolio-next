const GenericButton = ({ children, type = "button", className, click }) => {
	return (
		<button
			type={type}
			className={`px-2 py-1 font-semibold bg-gradient-to-br from-orange-light via-orange-normal to-orange-dark rounded-sm inline-block hover:scale-105 active:scale-95 transition-all ${className} ${
				children.length >= 2 && "flex items-center"
			}`}
			onClick={click}
		>
			{children}
		</button>
	);
};

export default GenericButton;
