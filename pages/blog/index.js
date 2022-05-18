import Head from "next/head";
import Post from "../../components/Post";
import { useEffect } from "react";
import axios from "axios";

const Blog = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Oliver Rindholt - Blog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h2 className="text-4xl font-bold">Welcome to my blog</h2>
			<p className="text-blue-normal">Please pick a post to get started!</p>
			<div className="grid grid-cols-2">
				{posts &&
					posts.entriesData.map((i, { name, caption }) => {
						return <Post key={i} name={name} caption={caption} />;
					})}
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const res = await axios.get("http://localhost:3000/api/entry/entries");
	const posts = await res.data;

	return {
		props: {
			posts,
		},
		revalidate: 10,
	};
};

export default Blog;
