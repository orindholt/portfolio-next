import Link from "next/link";

const post = ({name = "#", caption = "Lorem ipsum."}) => {
	return (
		<Link href={`/${name}`} passHref>
			<article className="text-center">
				<h3>{name}</h3>
				<p>{caption}</p>
			</article>
		</Link>
	);
};

export default post;
