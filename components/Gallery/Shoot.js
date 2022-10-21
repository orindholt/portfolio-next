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
	const [isLoaded, setIsLoaded] = useState(false);

	const staggerDelay = 5;

	const projectVariants = {
		hidden: { opacity: 0, y: -30 },
		show: { opacity: 1, y: 0, delay: `0.${index + 1 + staggerDelay}` },
		exit: { opacity: 0, y: -30 },
	};

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
				<h3 className="text-4xl md:text-2xl lg:text-xl font-black pb-3 font-roboto-mono">
					{title}
				</h3>
				<Link href={`gallery/${slug}`} passHref>
					<a>
						<div className="aspect-[3/4] group relative cursor-pointer rounded-md overflow-hidden">
							<Image
								src={images[0]}
								quality={50}
								layout="fill"
								objectFit="cover"
								alt={`${title} Cover`}
								className="rounded-sm shadow-md object-top group-hover:brightness-50 transition-all"
								onLoadingComplete={() => setIsLoaded(true)}
							/>

							<div className="absolute p-1 top-0 bottom-0 grid place-content-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-white">
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
