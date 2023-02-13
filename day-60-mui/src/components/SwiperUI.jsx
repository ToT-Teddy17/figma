import { Swiper, SwiperSlide } from "swiper/react";
import images from "../data/images";

const SwiperUI = function () {
  const slides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image.url} alt="zurag" />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>day-60-Swiper JS with React</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
export { SwiperUI };
