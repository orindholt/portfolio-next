import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ to, text }) => {
	const router = useRouter();
	return (
		<li
			className={`transition-colors md:hover:!text-orange-normal select-none dark:text-white ${
				router.pathname === to ? "!text-orange-normal" : "text-inherit"
			}`}
		>
			<Link href={to}>{text}</Link>
		</li>
	);
};

export default NavItem;
