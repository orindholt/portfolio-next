import { IoAddCircle } from "react-icons/io5";

import Link from "next/link";

const WorkCategory = ({
	icon = <IoAddCircle />,
	category = "Category",
	anchor = "/",
	caption = "",
}) => {
	let bgImagePath = `/assets/${category.toLowerCase()}.jpg`;
	return (
		<article
			className="group w-full h-36 bg-green shadow-lg rounded-md hover:scale-[1.025] transition-transform border-4 border-solid dark:border-white border-black bg-cover"
			style={{ backgroundImage: `url(${bgImagePath})` }}
		>
			<Link href={`${anchor}`} passHref>
				<a
					target={anchor.charAt(0) !== "/" && "_blank"}
					className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl font-bold"
				>
					<div className="dark:bg-black bg-white p-4 rounded-md shadow-md border-4 border-solid dark:border-white border-black md:group-hover:scale-110 md:transition-transform md:duration-300">
						<div className="flex items-center justify-center gap-4">
							{icon}
							<h3>{category}</h3>
						</div>
						{caption && (
							<p className="text-sm font-semibold bg-gradient-to-br from-orange-dark to-orange-light text-clip">
								{caption}
							</p>
						)}
					</div>
				</a>
			</Link>
		</article>
	);
};

export default WorkCategory;
