import Link from "next/link";
import { useRouter } from "next/router";

const FooterLink = ({ to, children }) => {
	const router = useRouter();
	return (
		<Link href={to} passHref>
			<a>
				<li
					className={`py-1 px-2 rounded-md text-xl font-semibold cursor-pointer bg-transparent dark:text-white text-black transition-colors ${
						router.pathname === to
							? "!bg-orange-normal !text-white !border-transparent"
							: ""
					}`}
				>
					{children}
				</li>
			</a>
		</Link>
	);
};

export default FooterLink;
