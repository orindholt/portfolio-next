import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ to, text }) => {
	const router = useRouter();

	return (
		<li
			className={`md:hover:!text-orange-normal select-none dark:text-white text-black ${
				Boolean(router.pathname === to) && "!text-orange-normal"
			}`}
		>
			<Link href={to} passHref>
				<a className="w-full h-full block md:px-2 md:py-1">{text}</a>
			</Link>
		</li>
	);
};

export default NavItem;
