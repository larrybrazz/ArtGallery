import React from "react";
import { dataList } from "../../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import "./swiper.css";

const Carousel = () => {
  return (
    <div className="font-serif w-11/12 mx-auto">
      <div className="swiper-container" style={{ height: "400px" }}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          cssMode={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {dataList.map((data, index) => (
            <SwiperSlide key={index}>
              <img
                src={data.coverSrc}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
