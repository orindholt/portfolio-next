import Link from "next/link";
import { IoBook, IoPlanet, IoCamera, IoCodeSlash } from "react-icons/io5";

const SearchResult = ({ result }) => {
	const { title, _type: type, slug } = result;

	const typeIcons = {
		web: <IoPlanet />,
		gallery: <IoCamera />,
		blogpost: <IoBook />,
		programming: <IoCodeSlash />,
	};

	return (
		<Link href={`/projects/${type}/${slug.current}`} passHref>
			<a>
				<li className="md:px-10 px-2 py-2 bg-gray-dark border-b-4 border-x-[6px] md:border-x-0 border-black border-solid md:hover:border-white flex items-center">
					<h2>{title}</h2>
					<div className="ml-auto">
						{typeIcons[type.replace("-", "")] || null}
					</div>
				</li>
			</a>
		</Link>
	);
};

export default SearchResult;
