import feedback from "../../data/feedback.json";
import FeedbackCard from "../ui/FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const FeedbackSwiper = () => {
  return (
    <div className="w-full mt-auto">
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {feedback.map((item) => (
          <SwiperSlide key={item.id}>
            <FeedbackCard feedback={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSwiper;
