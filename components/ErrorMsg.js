const ErrorMsg = ({name, error}) => {
	const nameRegEx = /([A-Z])+/g;
	if (error === "required") error = "is required!";
	if (nameRegEx.test(name))
		name = name.replace(
			name.match(nameRegEx).toString(),
			` ${name.match(nameRegEx).toString().toLowerCase()}`
		);
	return (
		<p className="text-red-500 absolute -top-8 w-full text-center">
			{`${name} ${error}`}
		</p>
	);
};

export default ErrorMsg;
