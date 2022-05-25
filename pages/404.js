import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { IoArrowUndo } from "react-icons/io5";

const Custom404 = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Oliver - 404</title>
			</Head>
			<div className="mt-20 flex flex-col items-center">
				<h1 className="text-6xl font-bold mb-2">
					Whoops!{" "}
					<span className="font-extrabold bg-gradient-to-r from-orange-light to-orange-normal text-clip">
						404
					</span>
				</h1>
				<p className="dark:text-gray-normal text-gray-dark">
					Seems that you have stumbled onto a page that doesn't exist.
					<br />
					<span className="font-semibold">
						That means I messed up somewhere.
					</span>
				</p>
				{/* <p className="dark:text-gray-normal text-gray-dark my-2">
					You getting this error, means that I'm already fixing it.
					<br />
					This happens with the help from{" "}
					<span className="font-semibold">Sentry</span>
				</p> */}
				<div className="flex flex-col gap-2 mt-4">
					<button
						type="button"
						className="flex items-center gap-1 md:hover:scale-110 transition-all"
						onClick={() => router.back()}
					>
						Go Back
						<span className="text-lg">
							<IoArrowUndo />
						</span>
					</button>
					<p className="text-silver">Or</p>
					<Link href="/" passHref>
						<a className="bg-gradient-to-tr from-orange-light to-orange-normal text-white font-bold py-1 px-3 rounded-sm md:hover:scale-105 transition-transform">
							Home
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Custom404;
