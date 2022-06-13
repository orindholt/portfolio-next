import Post from "../components/Post";
import { client } from "../utils/sanityClient";
import FilterChoice from "../components/Filters/FilterChoice";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const Blog = ({ posts }) => {
	const [activeChoices, setActiveChoices] = useState([]);
	const [allTags, setAllTags] = useState([]);

	useEffect(() => {
		if (posts) {
			let updatedTags = allTags.length ? allTags : [];
			posts.forEach(post => {
				if (post.tags) {
					post.tags.forEach(tag => {
						if (!allTags.includes(tag)) updatedTags.push(tag);
					});
					setAllTags(updatedTags);
				} else console.log(`No tags found on post: ${post.title}`);
			});
		}
	}, [posts]);

	console.log(posts);

	return (
		<>
			<h2 className="text-6xl font-bold">Blog</h2>
			<p className="dark:text-silver text-blue-normal py-2">
				This is where I keep all of the newest updates about me.
				<br /> Here you can find all of my projects in detail, aswell as tips
				and tricks!
			</p>
			{posts.length ? (
				<>
					<p className="dark:text-blue-normal text-silver">
						Please pick a post to get started!
					</p>
					<FilterChoice
						choices={allTags}
						activeChoices={activeChoices}
						setActiveChoices={setActiveChoices}
					/>
					<ul className="flex flex-col items-center sm:my-4 relative">
						<AnimatePresence>
							{posts.map((post, i) => {
								return activeChoices.length ? (
									Boolean(
										post.tags.some(tag => tag.includes(activeChoices))
									) && <Post key={i} content={post} />
								) : (
									<Post key={i} content={post} />
								);
							})}
						</AnimatePresence>
					</ul>
				</>
			) : (
				<p className="my-auto pb-16 text-xl leading-7">
					<span className="bg-gradient-to-br from-orange-light via-orange-normal to-orange-dark text-clip text-3xl font-bold">
						Whoops!
					</span>
					<br />
					There doesn't seem to be any posts yet
				</p>
			)}
		</>
	);
};

export const getStaticProps = async () => {
	const posts = await client.fetch(`*[_type == "blog"]`);

	return {
		props: {
			posts,
		},
	};
};

export default Blog;
