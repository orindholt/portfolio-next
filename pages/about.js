import Head from "next/head";
import Image from "next/image";
import TechCard from "../components/TechCard";
import skills from "../utils/skills";
import ReadMore from "../components/ReadMore";

const About = () => {
	return (
		<>
			<Head>
				<title>Oliver - About</title>
			</Head>
			<section>
				<div className="flex items-center flex-col lg:flex-row md:px-24">
					<div className="w-full mb-4">
						<ReadMore
							text={
								<>
									<h2 className="text-4xl font-bold leading-7 dark:text-white text-black">
										Who am I?
									</h2>
									<p className="dark:text-silver text-blue-normal my-3">
										You might say that I&apos;m a dev of many <br />
										<span className="underline dark:text-white text-black font-bold">
											traits
										</span>
										. I do what the people need me to do!
									</p>
								</>
							}
							more={
								<>
									<p>
										You name it, I can do it, or atleast google it.
										<br />
										I&apos;m a quick learner, and really enjoy spending time
										coding.
									</p>
								</>
							}
						/>
					</div>
					<Image
						className="rounded-full shadow-lg"
						src="/assets/me.jpg"
						width="400"
						height="400"
						quality={60}
						placeholder="blur"
						blurDataURL="/assets/placeholder.jpg"
						alt="Me"
					/>
				</div>
				<p className="text-2xl md:text-lg font-bold md:font-extralight mt-4 md:mt-0 mb-2 md:mb-0">
					What are my skills?
				</p>
				<div className="flex flex-col gap-4 md:gap-6">
					{skills.map(({ title, data }, i) => {
						return (
							<section key={i}>
								<h3 className="font-semibold text-2xl mb-2 hidden md:block">
									{title}:
								</h3>
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
									{data.map((skill, i) => {
										return <TechCard key={i} tech={skill} />;
									})}
								</div>
							</section>
						);
					})}
					<p>and much more to come!</p>
				</div>
			</section>
		</>
	);
};

export default About;
