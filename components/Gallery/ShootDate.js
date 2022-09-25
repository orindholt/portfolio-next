import dateToRealtime from "../../utils/dateToRealtime";

const ShootDate = ({ rawDate, className = "" }) => {
	return (
		<p className={`text-sm font-mali ${className}`}>
			{dateToRealtime(rawDate)}
		</p>
	);
};

export default ShootDate;
