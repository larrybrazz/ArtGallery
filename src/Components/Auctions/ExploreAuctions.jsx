import React, { useEffect, useState } from "react";
import "./styles.css";
import { useRef } from "react";
import { motion} from "framer-motion";
import { images } from "./images";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import "../HomePage/swiper.css";

const ExploreAuctions = () => {
  const navigate = useNavigate()

  const routeToLiveBid = (image) => {
    localStorage.setItem("livebid", JSON.stringify(image))
    navigate("/livebid")
  }
  console.log();

  return (
    <>
      <div className="font-serif w-11/12 mx-auto">
        <div className="swiper-container" style={{ height: "400px" }}>
          <Swiper
            // effect={"coverflow"}
            grabCursor={true}
            spaceBetween={20}
            cssMode={true}
            // centeredSlides={true}
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
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  onClick={() => routeToLiveBid(image)}
                  src={image.image}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ExploreAuctions;
