import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Slider = ({
  slides,
  visibleItems = 4,
  showArrows = true,
  showDots = true,
  autoPlay = true,
  className = "",
  swiperParams = {},
  header,
}) => {
  return (
    <div className={`slider-container ${className} py-10 px-5`}>
      {header}

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={30}
        slidesPerView={visibleItems}
        loop={true}
        autoplay={autoPlay && { delay: 3000, disableOnInteraction: false }}
        navigation={showArrows}
        pagination={showDots && { clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: visibleItems },
        }}
        {...swiperParams}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="mb-10">
            <div className="transition-transform duration-300 ease-in-out scale-100 hover:scale-105">
              {slide}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
