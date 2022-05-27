import Head from "next/head";
import Post from "../components/Post";
import { createClient } from "next-sanity";
import Searchbar from "../components/Searchbar";
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

	return (
		<>
			<Head>
				<title>Oliver - Blog</title>
			</Head>
			<h2 className="text-4xl font-bold">Welcome to my blog</h2>
			<p className="dark:text-silver text-blue-normal py-2">
				This is where I keep all of the newest updates about me.
				<br /> Here you can find all of my projects in detail, aswell as tips
				&#38; tricks!
			</p>
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
					{posts &&
						posts.map((post, i) => {
							return activeChoices.length ? (
								Boolean(post.tags.some(tag => tag.includes(activeChoices))) && (
									<Post key={i} content={post} />
								)
							) : (
								<Post key={i} content={post} />
							);
						})}
				</AnimatePresence>
			</ul>
		</>
	);
};

const client = createClient({
	projectId: "94ov5h9s",
	dataset: "production",
	apiVersion: "2022-05-23",
	useCdn: false,
});

export const getStaticProps = async () => {
	const posts = await client.fetch(`*[_type == "blog-post"]`);

	return {
		props: {
			posts,
		},
	};
};

export default Blog;
