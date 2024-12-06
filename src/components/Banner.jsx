import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="relative bg-winter-light-bg text-center py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[500px] rounded-xl shadow-neumorphism-light"
      >
        {/* Slide 1 */}
        <SwiperSlide
          className="flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://via.placeholder.com/1920x500/CCE7F7/333')",
          }}
        >
          <div className="text-gray-800 p-5 bg-white/70 rounded-xl shadow-neumorphism-light">
            <h1 className="text-4xl font-bold">Welcome to VisaVoyage</h1>
            <p className="mt-2 text-lg">
              Explore new destinations with ease and confidence.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          className="flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://via.placeholder.com/1920x500/ADD8E6/333')",
          }}
        >
          <div className="text-gray-800 p-5 bg-white/70 rounded-xl shadow-neumorphism-light">
            <h1 className="text-4xl font-bold">Seamless Visa Services</h1>
            <p className="mt-2 text-lg">
              Experience hassle-free visa applications tailored for your needs.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide
          className="flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://via.placeholder.com/1920x500/87CEFA/333')",
          }}
        >
          <div className="text-gray-800 p-5 bg-white/70 rounded-xl shadow-neumorphism-light">
            <h1 className="text-4xl font-bold">Your Global Travel Partner</h1>
            <p className="mt-2 text-lg">
              Travel the world with confidence and peace of mind.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
