import ErrorMsg from "./ErrorMsg";
import { IoEye as Eye, IoEyeOff as EyeOff } from "react-icons/io5";
import { useState } from "react";

const PasswordInput = ({
	register = {},
	autoComplete = "",
	placeholder = "Default",
	error,
	className,
	required = true,
}) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			className={`relative ${required ? "required" : ""} ${
				className || ""
			}`.trim()}
		>
			<input
				{...register}
				autoComplete={autoComplete}
				type={visible ? "text" : "password"}
				placeholder={placeholder}
				aria-invalid={error ? true : false}
				className={`p-2 w-full rounded-sm transition-all border-l-8 border-red border-solid border border-opacity-0 bg-black dark:bg-gray-dark text-white placeholder:text-gray-normal focus:!bg-opacity-0 focus:text-black focus:dark:text-white focus:placeholder:text-gray-dark focus:scale-[1.02] 
      ${error ? "border-opacity-100" : ""}`}
			/>
			<ErrorMsg error={error} />
			<button
				type="button"
				className="text-2xl absolute top-0 bottom-0 right-4 flex items-center"
				onClick={() => setVisible(!visible)}
			>
				{visible ? <EyeOff /> : <Eye />}
			</button>
		</div>
	);
};

export default PasswordInput;
