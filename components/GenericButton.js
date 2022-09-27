import Link from "next/link";
import { CgArrowLongRight as Arrow } from "react-icons/cg";

const GenericButton = ({
	children,
	type = "button",
	className = "",
	click = () => {},
	anchor = "",
	arrow = false,
}) => {
	const CustomTag = ({ children, className = "" }) => {
		return anchor ? (
			<Link href={anchor} passHref>
				<a className={className}>{children}</a>
			</Link>
		) : (
			<button type={type} onClick={click} className={className}>
				<>{children}</>
			</button>
		);
	};

	return (
		<CustomTag
			className={`px-4 pt-1 pb-1.5 font-bold bg-gradient-to-br from-orange-light via-orange-normal to-orange-dark text-white rounded-sm inline-block md:hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer relative group ${className} `}
		>
			<p
				className={`leading-normal ${
					typeof children !== "string" && children.length > 1
						? "flex items-center"
						: ""
				}`}
			>
				{children}
			</p>
			{arrow && (
				<Arrow className="absolute top-0 bottom-0 -right-5 text-3xl group-hover:translate-x-4 duration-300 transition-transform my-auto text-inherit" />
			)}
		</CustomTag>
	);
};

export default GenericButton;
