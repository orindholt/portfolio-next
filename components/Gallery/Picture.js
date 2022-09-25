import { useState } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import LightBox from "./LightBox";
import ImageLoader from "./ImageLoader";

const imageVariant = {
	hidden: { opacity: 0, y: -20 },
	shown: { opacity: 1, y: 0 },
};

const Picture = ({ image, alt }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<li className="relative">
			<m.div
				variants={imageVariant}
				initial="hidden"
				animate={isLoaded ? "shown" : "hidden"}
				className="relative overflow-hidden"
			>
				<LightBox condition={isLoaded}>
					<Image
						src={image}
						width={1920}
						height={2880}
						layout="responsive"
						objectFit="cover"
						alt={alt}
						className="rounded-sm shadow-md cursor-pointer"
						onLoadingComplete={() => setIsLoaded(true)}
					/>
				</LightBox>
			</m.div>
			{!isLoaded && <ImageLoader />}
		</li>
	);
};

export default Picture;
