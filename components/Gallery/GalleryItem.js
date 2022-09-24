import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { motion as m, useAnimationControls } from "framer-motion";
import dateToRealtime from "../../utils/dateToRealtime";

const GalleryItem = ({
	details: { title, taken, description, slug, images },
	variants,
}) => {
	const [randomImage, setRandomImage] = useState(null);
	const controls = useAnimationControls();

	useEffect(() => {
		if (randomImage === null)
			setRandomImage(Math.floor(Math.random() * images.length));
	}, [randomImage]);

	if (randomImage === null) return null;

	return (
		<m.div variants={variants}>
			<h2 className="text-4xl font-bold pb-2">{title}</h2>
			<Link href={`gallery/${slug}`}>
				<div className="aspect-[3/4] group relative cursor-pointer">
					<m.div initial={{ opacity: 0, y: -20 }} animate={controls}>
						<Image
							src={images[randomImage]}
							quality={70}
							layout="fill"
							objectFit="cover"
							alt={`${title} Cover`}
							className="rounded-sm shadow-md object-top group-hover:brightness-50 transition-all"
							onLoadingComplete={() => controls.start({ opacity: 1, y: 0 })}
						/>
					</m.div>
					<div className="absolute p-1 top-0 bottom-0 grid place-content-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
						<p className="text-sm">{dateToRealtime(taken)}</p>
						<p>{description}</p>
					</div>
				</div>
			</Link>
		</m.div>
	);
};

export default GalleryItem;
