import Link from "next/link";
import Image from "next/image";
import { motion as m } from "framer-motion";

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const dateToRealtime = date => {
	const year = date.substring(0, 4);
	const month = date.substring(5, 7);
	const day = date.substring(8, 10);
	return `${day}. ${monthNames[parseInt(month) - 1]} ${year}`;
};

const postVariant = {
	hidden: { height: [100, 100, 0], opacity: [1, 0, 0] },
	shown: { height: [0, 100, 100], opacity: [0, 0, 1] },
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
	console.log(caption);
	return (
		<m.li
			variants={postVariant}
			initial="hidden"
			animate="shown"
			exit="hidden"
			transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
			className="text-center max-w-lg"
		>
			<Link href={`/blog/${slug}`} passHref>
				<a>
					<h4 className="text-silver text-lg">{dateToRealtime(created)}</h4>
					<h3 className="font-bold text-4xl">{title}</h3>
					<h4 className="text-silver">{caption}</h4>
					{/* <Image src={`http://${_ref}`} width="1000" height="650" /> */}
				</a>
			</Link>
		</m.li>
	);
};

export default post;
