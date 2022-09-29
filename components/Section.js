const Section = ({ children, className = "" }) => {
	return (
		<section className={`px-[5%] h-full my-auto ${className}`}>
			<div className="max-w-7xl mx-auto flex flex-col">{children}</div>
		</section>
	);
};

export default Section;
