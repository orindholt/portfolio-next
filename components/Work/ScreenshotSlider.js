import Image from "next/image";
import leadingZero from "../../utils/leadingZero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ScreenshotSlider = ({ screenshots, title }) => {
	return (
		screenshots && (
			<div className="cursor-grab active:cursor-grabbing max-w-xs lg:max-w-sm">
				<Swiper
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					modules={[Scrollbar, Autoplay]}
					scrollbar={{ draggable: true }}
				>
					{screenshots.map((screenshot, i) => {
						return (
							<SwiperSlide key={i}>
								<Image
									src={screenshot}
									alt={`${title} Screenshot ${leadingZero(i + 1)}`}
									layout="intrinsic"
									width="384px"
									height="682px"
									objectFit="cover"
									className="object-center"
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		)
	);
};

export default ScreenshotSlider;
