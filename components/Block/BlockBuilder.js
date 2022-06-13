import Block from "./Block";

const BlockBuilder = ({ block }) => {
	return (
		<div className="inline">
			{block.map((block, i) => {
				return (
					<p key={i} className="inline">
						{block.children.map((child, i) => {
							return <Block child={child} key={i} />;
						})}
					</p>
				);
			})}
		</div>
	);
};

export default BlockBuilder;
