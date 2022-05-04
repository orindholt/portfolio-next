import Link from "next/link";

const Custom404 = () => {
	return (
		<div className="mt-20 flex flex-col items-center">
			<h1 className="text-4xl font-bold">Whoops!</h1>
			<p className="dark:text-gray text-darkGray">
				Seems that you have stumbled onto a{" "}
				<span className="font-semibold">404</span>
			</p>
			<p className="dark:text-gray text-darkGray">
				That means I messed up somewhere.
			</p>
			<Link href="/" passHref>
				<a className="bg-orange text-white font-bold py-1 px-3 rounded-sm mt-4 hover:scale-105 transition-transform">
					Home
				</a>
			</Link>
		</div>
	);
};

export default Custom404;
