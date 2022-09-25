import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import dateToRealtime from "../../utils/dateToRealtime";
import PageLoader from "../PageLoader";
import ShootDate from "./ShootDate";

const Shoot = ({
	details: { title, taken, description, slug, images },
	index,
}) => {
	const [randomImage, setRandomImage] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	const staggerDelay = 5;

	const projectVariants = {
		hidden: { opacity: 0, y: -30 },
		show: { opacity: 1, y: 0, delay: `0.${index + 1 + staggerDelay}` },
		exit: { opacity: 0, y: -30 },
	};

	useEffect(() => {
		if (randomImage === null)
			setRandomImage(Math.floor(Math.random() * images.length));
	}, [randomImage, images.length]);

	if (randomImage === null) return null;

	console.log(isLoaded);
	return (
		<>
			{!isLoaded && <PageLoader />}
			<m.div
				variants={projectVariants}
				initial="hidden"
				animate={isLoaded ? "show" : "hidden"}
				exit="exit"
			>
				<h2 className="text-4xl font-black pb-3">{title}</h2>
				<Link href={`gallery/${slug}`} passHref>
					<a>
						<div className="aspect-[3/4] group relative cursor-pointer">
							<Image
								src={images[randomImage]}
								quality={50}
								layout="fill"
								objectFit="cover"
								alt={`${title} Cover`}
								className="rounded-sm shadow-md object-top group-hover:brightness-50 transition-all"
								onLoadingComplete={() => setIsLoaded(true)}
							/>

							<div className="absolute p-1 top-0 bottom-0 grid place-content-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
								<ShootDate rawDate={taken} />
								<p className="px-4">{description}</p>
							</div>
						</div>
					</a>
				</Link>
			</m.div>
		</>
	);
};

export default Shoot;
