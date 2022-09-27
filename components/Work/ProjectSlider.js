import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import ProjectSlide from "./ProjectSlide";

const ProjectSlider = ({ data: projects }) => {
	return (
		<Swiper
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			modules={[Scrollbar, Autoplay]}
			scrollbar={{ draggable: true }}
			className="rounded-lg"
		>
			{projects.map((project, i) => {
				return (
					<SwiperSlide key={i} className="!h-auto md:!h-full">
						<ProjectSlide project={project} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ProjectSlider;
