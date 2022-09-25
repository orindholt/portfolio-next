import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import dateToRealtime from "../../utils/dateToRealtime";
import ImageLoader from "./ImageLoader";

const GalleryItem = ({
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
	}, [randomImage]);

	if (randomImage === null) return null;

	console.log(isLoaded);
	return (
		<>
			{!isLoaded && <ImageLoader />}
			<m.div
				variants={projectVariants}
				initial="hidden"
				animate={isLoaded ? "show" : "hidden"}
				exit="exit"
			>
				<h2 className="text-4xl font-bold pb-3">{title}</h2>
				<Link href={`gallery/${slug}`}>
					<div className="aspect-[3/4] group relative cursor-pointer">
						<Image
							src={images[randomImage]}
							quality={70}
							layout="fill"
							objectFit="cover"
							alt={`${title} Cover`}
							className="rounded-sm shadow-md object-top group-hover:brightness-50 transition-all"
							onLoadingComplete={() => setIsLoaded(true)}
						/>

						<div className="absolute p-1 top-0 bottom-0 grid place-content-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
							<p className="text-sm font-mali">{dateToRealtime(taken)}</p>
							<p className="px-4">{description}</p>
						</div>
					</div>
				</Link>
			</m.div>
		</>
	);
};

export default GalleryItem;
