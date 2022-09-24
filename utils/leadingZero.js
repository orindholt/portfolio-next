const leadingZero = num => {
	if (typeof num === "string") num = parseInt(num);
	if (num < 10) return `0${num}`;
	return num.toString();
};

export default leadingZero;
