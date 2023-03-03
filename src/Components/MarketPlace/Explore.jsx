import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import"../HomePage/swiper.css" 
const Explore = () => {
    const exploreArray = [
        {
            image: "Images/Rectangle 299 (1).png",
   value:"3.20", title:" Sassy",         
        },
      { image: "Images/Rectangle 299 (1).png",
   value:"4.20", title:" Escape",  },
      { image: "Images/Rectangle 299 (1).png",
   value:"0.20", title:" Sassy",  },
      { image: "Images/Rectangle 299 (1).png",
   value:"8.20", title:" Sassy",  },
      { image: "Images/Rectangle 299 (1).png",
   value:"0.280", title:" Sassy", },
      { image: "Images/Rectangle 299 (1).png",
   value:"1.20", title:" Sassy",  },
      { image: "Images/Rectangle 299 (1).png",
   value:"7.20", title:" Sassy",  },
      { image: "Images/Rectangle 299 (1).png",
   value:"6.20", title:" Sassy",  },
    ];
  return (
    <div className="mt-10 ">
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        cssMode={true}
        // centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {exploreArray.map((explore , id) => (
          <SwiperSlide key={id} className="w-[300px] border border-black p-4 space-y-3">
            <p className="flex justify-between">
              <span> </span>
              <span className=" ">
                <i className="fa fa-heart"></i>
              </span>
            </p>
            <img className="" src={explore.image} alt="" />
            <p className="flex justify-between">
              <span>{explore.title}</span>
              <span className="space-x-2">
                <i className="fa fa-gem"></i>
                <span>{explore.value}</span>
              </span>
            </p>
          </SwiperSlide>
        ))}
        <div className='text-center mt-16'>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-lg text-center">
            Explore All
          </span>
        </div>
      </Swiper>
    </div>
  );
}

export default Explore