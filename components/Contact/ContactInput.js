import ErrorMsg from "./ErrorMsg";

const ContactInput = ({
	register = {},
	autoComplete = "",
	type = "text",
	placeholder = "Default",
	error,
	className,
	required = true,
	defaultValue = "",
}) => {
	return (
		<div
			className={`relative ${required ? "required" : ""} ${
				className || ""
			}`.trim()}
		>
			<input
				{...register}
				autoComplete={autoComplete}
				type={type}
				placeholder={placeholder}
				aria-invalid={error ? true : false}
				defaultValue={defaultValue}
				className={`p-2 w-full rounded-sm transition-all border-l-8 border-red border-solid border border-opacity-0 bg-black dark:bg-gray-dark text-white placeholder:text-gray-normal focus:!bg-opacity-0 focus:text-black focus:dark:text-white focus:placeholder:text-gray-dark focus:scale-[1.02] 
      ${error ? "border-opacity-100" : ""}`}
			/>
			<ErrorMsg error={error} />
		</div>
	);
};

export default ContactInput;
