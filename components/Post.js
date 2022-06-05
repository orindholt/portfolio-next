import Link from "next/link";
import Image from "next/image";
import { motion as m } from "framer-motion";
import dateToRealtime from "../utils/dateToRealtime";

const postVariant = {
	hidden: { height: [125, 125, 0], opacity: [1, 0, 0] },
	shown: { height: [0, 125, 125], opacity: [0, 0, 1] },
};

const post = ({
	content = {
		title: "Title",
		created: "0001-01-01",
		slug: "/",
		caption: "This is a caption!",
	},
}) => {
	const {
		title,
		created,
		slug: { current: slug },
		caption,
	} = content;
	return (
		<m.li
			variants={postVariant}
			initial="hidden"
			animate="shown"
			exit="hidden"
			transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
			className="text-center max-w-xl h-fit dark:md:hover:bg-gray-dark md:hover:bg-gray-light transition-colors rounded-sm overflow-y-hidden w-full"
		>
			<Link href={`/blog/${slug}`} passHref>
				<a className="w-full h-full px-3 py-1 flex flex-col justify-center">
					<h4 className="dark:text-silver text-blue-dark text-base font-light leading-4">
						{dateToRealtime(created)}
					</h4>
					<h3 className="font-bold text-3xl md:text-4xl bg-gradient-to-br from-orange-light to-orange-normal text-clip">
						{title}
					</h3>
					<h4 className="dark:text-silver text-blue-dark font-semibold text-sm sm:text-base">
						{caption}
					</h4>
					{/* <Image src={`http://${_ref}`} width="1000" height="650" /> */}
				</a>
			</Link>
		</m.li>
	);
};

export default post;
