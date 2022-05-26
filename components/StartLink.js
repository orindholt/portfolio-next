import Link from "next/link";

const StartLink = ({ anchor, icon }) => {
	return (
		<li className="border-2 dark:border-white border-black md:hover:scale-110 active:scale-100 md:hover:dark:bg-black md:hover:bg-white md:hover:dark:text-white md:hover:text-black dark:bg-white bg-black dark:text-black text-white transition-all">
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
