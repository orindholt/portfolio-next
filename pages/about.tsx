import { GetStaticProps } from "next";
import Image from "next/image";
import TechCard from "../components/TechCard";
import skills from "../utils/skills";
import ReadMore from "../components/ReadMore";
import supabase from "../utils/supabaseClient";
import Section from "../components/Section";

export const getStaticProps: GetStaticProps = async () => {
	const { data, error } = supabase.storage
		.from("project-assets")
		.getPublicUrl("me.jpg");
	return {
		props: { data, error },
	};
};

type DataType = {
	data: { publicURL?: string; error?: Error };
	error: Error | null;
};

const About = ({ data: { publicURL: imageURL }, error }: DataType) => {
	return (
		<>
			<Section className="py-5">
				<div className="flex items-center flex-col lg:flex-row md:px-24 py-4">
					<div className="w-full mb-4 flex flex-col items-center">
						<h1 className="text-4xl font-bold leading-7 dark:text-white text-black">
							Who am I?
						</h1>
						<p className="dark:text-silver text-blue-normal my-3 text-lg max-w-lg">
							You might say that I&apos;m a developer of many{" "}
							<span className="underline dark:text-white text-black font-bold">
								traits
							</span>
							. I do what the people need me to do! I pride myself on writing
							clean, appealing and reusable code, that even your grandma would
							understand.
						</p>
					</div>
					{!error && imageURL && (
						<div className="rounded-full overflow-hidden shadow-lg flex">
							<Image
								src={imageURL}
								width="400"
								height="400"
								quality={60}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0+gMAAXYBOMjqGikAAAAASUVORK5CYII="
								alt="Me"
							/>
						</div>
					)}
				</div>

				<article className="py-8">
					<h2 className="text-4xl font-bold leading-7 dark:text-white text-black mb-4">
						Where are my roots?
					</h2>
					<div className="dark:text-silver text-blue-normal max-w-5xl mx-auto">
						<ReadMore
							more={
								<p className="py-2">
									Before I began my journey into web development and coding, I
									studied photography in Copenhagen for two years, before I
									realized I wanted to go down a more pragmatic, but still
									creative route.
								</p>
							}
						>
							<p className="py-2">
								My roots are stem in Denmark. Originally from
								&quot;Næstved&quot;, a small city in south Zealand, and now
								operating in the capital. Since my brothers introduced me to
								video games as a child, I&apos;ve had a burning passion for
								computers. Now I want to help create them, and program them, so
								other people may have the same experience with computers I did.
							</p>
						</ReadMore>
					</div>
				</article>
				<article className="py-8">
					<h2 className="text-4xl font-bold leading-7 dark:text-white text-black mb-4">
						What can I offer?
					</h2>
					<div className="dark:text-silver text-blue-normal max-w-5xl mx-auto">
						<ReadMore
							more={
								<p className="py-2">
									Besides coding, I have a couple of years of experience in
									photography, and photo-editing (Photoshop, Camera Raw, Capture
									One), to name a few. And roughly a year of experience in
									video-editing, doing youtube videos back in the day.
								</p>
							}
						>
							<p className="py-2">
								I have a trade degree in web development, and have about two
								years of experience in web development and programming.{" "}
								<span className="font-bold">BUT</span> what I lack in actual
								years in the job market, I make up for with hands-on knowledge.
								I work well with other people, and have experience working on
								web applications alongside with graphic designers, managers,
								product owners, and other programmers.
							</p>
							<p className="py-2">
								Writing clean, resuable, and readable code, is what I do. Coding
								is my passion, so I take seriously, but not too seriously.
							</p>
						</ReadMore>
					</div>
				</article>
			</Section>
			<Section className="pb-8">
				<h2 className="text-2xl font-bold">What are some of my skills?</h2>
				<ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
					{skills.map((skill, i) => {
						return <TechCard key={i} index={i} tech={skill} />;
					})}
				</ul>
			</Section>
		</>
	);
};

export default About;
