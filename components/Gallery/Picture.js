import { useState } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import sanityImage from "../../utils/sanityImage";
import Loader from "../Loader";
import LightBox from "./LightBox";
import PageLoader from "../PageLoader";

const imageVariant = {
	hidden: { opacity: 0, y: -20 },
	shown: { opacity: 1, y: 0 },
};

const Picture = ({ image }) => {
	const [complete, setComplete] = useState(false);

	return (
		<li>
			<m.div
				variants={imageVariant}
				initial="hidden"
				animate={complete && "shown"}
				className="relative overflow-hidden"
			>
				<LightBox>
					<Image
						src={sanityImage(image).url()}
						width={1920}
						height={2880}
						layout="responsive"
						objectFit="cover"
						alt={image.alt}
						className="rounded-sm shadow-md cursor-pointer"
						onLoadingComplete={() => setComplete(true)}
					/>
				</LightBox>
				{!complete && <PageLoader />}
			</m.div>
		</li>
	);
};

export default Picture;
