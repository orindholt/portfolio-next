const Block = ({ child }) => {
	const { text, marks } = child;

	return marks.length ? (
		<span
			className={marks.map(mark => {
				return mark === "em" ? "italic" : mark === "strong" ? "font-bold" : "";
			})}
		>
			{text}
		</span>
	) : (
		text
	);
};

export default Block;
