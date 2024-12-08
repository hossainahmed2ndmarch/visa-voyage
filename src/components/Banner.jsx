import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner-img.webp";
import banner2 from "../assets/banner-img2.webp";
import banner3 from "../assets/student-visabanner.jpg";

const Banner = () => {
  return (
    <div className="relative bg-winter-light-bg text-center py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[500px] sm:h-[400px] md:h-[500px] rounded-xl shadow-neumorphism-light"
      >
        {/* Slide 1 */}
        <SwiperSlide
          className="flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner1})`,
          }}
        >
          <div className="text-gray-800 p-5 bg-white/70 rounded-xl shadow-neumorphism-light max-w-[80%] sm:max-w-[90%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Welcome to{" "}
              <span className="text-blue-500">
                <Typewriter
                  words={[
                    "VisaVoyage",
                    "Your Travel Partner",
                    "Global Explorer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Explore new destinations with ease and confidence. Your dream
              travel experiences are just a click away.
            </p>
            <ul className="mt-3 space-y-2 text-sm sm:text-base md:text-lg">
              <li>🌍 Global Visa Support</li>
              <li>💼 Hassle-Free Documentation</li>
              <li>💳 Affordable Visa Processing Fees</li>
            </ul>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          className="flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        >
          <div className="text-gray-800 p-5 bg-white/70 rounded-xl shadow-neumorphism-light max-w-[80%] sm:max-w-[90%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <Typewriter
                words={[
                  "Seamless Visa Services",
                  "Personalized Guidance",
                  "Effortless Applications",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Navigate your visa process effortlessly with tailored solutions
              designed for every traveler.
            </p>
            <ul className="mt-3 space-y-2 text-sm sm:text-base md:text-lg">
              <li>📋 Step-by-Step Process</li>
              <li>⏳ Quick Turnaround Times</li>
              <li>🌟 Trusted by Thousands</li>
            </ul>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide
          className="flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner3})`,
          }}
        >
          <div className="text-gray-800 p-5 bg-white/70 rounded-xl shadow-neumorphism-light max-w-[80%] sm:max-w-[90%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <Typewriter
                words={[
                  "Your Global Travel Partner",
                  "Embark on New Adventures",
                  "World-Class Support",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Travel with peace of mind knowing we’re here to support your
              journey every step of the way.
            </p>
            <ul className="mt-3 space-y-2 text-sm sm:text-base md:text-lg">
              <li>✈️ Global Destinations</li>
              <li>🤝 Trusted Partnerships</li>
              <li>📞 24/7 Customer Support</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
