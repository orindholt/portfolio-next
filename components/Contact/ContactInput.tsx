import ErrorMsg from "./ErrorMsg";
import { HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";

type Props = {
	register: object;
	autoComplete?: string;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	error?: FieldError;
	className?: string;
	required?: boolean;
	defaultValue?: string;
};

const ContactInput = ({
	register = {},
	autoComplete = "none",
	type = "text",
	placeholder,
	error,
	className = "",
	required = true,
	defaultValue = "",
}: Props) => {
	return (
		<div
			className={`relative ${required ? "required" : ""} ${className}`.trim()}
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
