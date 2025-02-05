// Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        modules={[Navigation, Pagination, Autoplay]}
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
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
