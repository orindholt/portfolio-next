const CheckboxInput = ({
	register = {},
	label = "",
	className = "",
	required = true,
}) => {
	return (
		<div
			className={`flex items-center bg-black dark:bg-gray-dark text-white rounded-sm relative ${className} ${
				required ? "required" : ""
			}`}
		>
			<label
				htmlFor={register.name}
				className="whitespace-nowrap w-full h-full select-none flex items-center px-4"
			>
				{label}
			</label>
			<input
				{...register}
				type="checkbox"
				id={register.name}
				className="absolute right-4"
			/>
		</div>
	);
};

export default CheckboxInput;
