const ErrorMsg = ({message}) => {
	return (
		<p className="text-red-500 absolute -top-8 w-full text-center">
			{`${message}`}
		</p>
	);
};

export default ErrorMsg;
