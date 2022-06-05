const capitalize = str => {
	return (
		typeof str === "string" && str.charAt(0).toUpperCase() + str.substring(1)
	);
};

const pathTitle = path => {
	if (!path.substring(1)) path = "/home";
	const splitPath = path.split("/");
	let result = capitalize(splitPath[splitPath.length - 1]);
	if (result.includes("-", " "))
		result = result
			.split("-")
			.map(word => capitalize(word))
			.join(" ");
	return result;
};

export default pathTitle;
