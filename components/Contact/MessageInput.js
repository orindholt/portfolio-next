import ErrorMsg from "./ErrorMsg";

const MessageInput = ({
	register = {},
	error,
	maxLength = 400,
	watch,
	className = "",
	required = true,
	placeholder = "Message",
}) => {
	return (
		<div
			className={`relative ${required ? "required" : null} ${
				className || ""
			}`.trim()}
		>
			<textarea
				{...register}
				className={`form-item !resize-none w-full h-full  ${
					error ? "border-red" : ""
				}`}
				id="msg"
				maxLength={maxLength}
				placeholder={placeholder}
			></textarea>
			<label
				htmlFor="msg"
				className="absolute bottom-3 right-2 font-light text-sm text-gray-normal select-none font-roboto-mono"
			>
				{watch?.length || 0}/{maxLength}
			</label>
			{error && <ErrorMsg error={error} />}
		</div>
	);
};

export default MessageInput;
