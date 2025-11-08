"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="w-full  mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className=" overflow-hidden"
      >
        <SwiperSlide>
          <img
            src="https://pos.nvncdn.com/4ef0bf-108661/bn/20250821_SjW1hH2c.jpg?v=1755739275"
            alt="Slide 1"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pos.nvncdn.com/4ef0bf-108661/bn/20250717_R7vnxc0q.jpg?v=1752739933"
            alt="Slide 2"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pos.nvncdn.com/4ef0bf-108661/bn/20251106_o3ljSV2A.jpg?v=1762399860"
            alt="Slide 3"
            className="w-full h-h-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
