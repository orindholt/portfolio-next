const Demo = ({ url }) => {
	return (
		url && (
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="text-2xl font-black hover:dark:text-silver hover:text-gray-normal"
			>
				Demo
			</a>
		)
	);
};

export default Demo;
