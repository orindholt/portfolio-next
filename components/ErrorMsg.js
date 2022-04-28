const ErrorMsg = ({message}) => {
	return (
		<p className="text-red absolute -top-8 w-full text-center">
			{`${message}`}
		</p>
	);
};

export default ErrorMsg;
