import { IoCaretForward } from "react-icons/io5";

const CareerBranch = ({
	position: {
		name,
		status,
		date: { from, to },
	},
}) => {
	return (
		<li className="text-left flex items-center gap-3 text-4xl">
			<IoCaretForward />
			<div>
				<div className="flex gap-2 items-center">
					<h3 className="text-2xl font-bold">{name}</h3>
					<span>-</span>
					<p className="text-sm font-light">
						{from.year} {from.month?.substring(0, 3)} - {to.year}{" "}
						{to.month?.substring(0, 3)}
					</p>
				</div>
				<p className="font-medium">{status}</p>
			</div>
		</li>
	);
};

export default CareerBranch;
