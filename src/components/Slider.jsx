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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Slider = ({
  slides,
  visibleItems = 4,
  showArrows = false,
  showDots = true,
  autoPlay = true,
  className = "",
  swiperParams = {},
  header,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`slider-container ${className} py-10 px-5 relative`}>
      {header}

      {showArrows && (
        <>
          <button
            ref={prevRef}
            className="hidden md:flex swiper-custom-prev absolute top-2/3 left-3 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-300 p-2 shadow-lg rounded-full"
          >
            <ChevronLeft size={23} />
          </button>
          <button
            ref={nextRef}
            className="hidden md:flex swiper-custom-next absolute top-2/3 right-3 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-300 p-2 shadow-lg rounded-full"
          >
            <ChevronRight size={23} />
          </button>
        </>
      )}

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
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={showDots && { clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: visibleItems },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper?.params?.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
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
