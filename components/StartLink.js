import Link from "next/link";

const StartLink = ({ anchor, icon }) => {
	return (
		<li className="border border-white hover:scale-105 hover:bg-white hover:text-black transition-all">
			<Link href={`/${anchor}`} passHref>
				<a className="flex items-center gap-1 font-semibold capitalize w-full h-full px-2 py-1">
					{icon}
					{anchor}
				</a>
			</Link>
		</li>
	);
};

export default StartLink;
