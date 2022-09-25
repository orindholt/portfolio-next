import Link from "next/link";
import { useRouter } from "next/router";
import { IoArrowUndo } from "react-icons/io5";

const Offline = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center my-auto pb-16">
			<p className="text-6xl font-bold mb-2">Whoops!</p>
			<p className="dark:text-gray-normal text-gray-dark">
				You cannot view this page without internet.
			</p>
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
	);
};

export default Offline;
