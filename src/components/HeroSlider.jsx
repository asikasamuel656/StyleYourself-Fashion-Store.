import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen">

      {/* IMAGE SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-full"
      >
        <SwiperSlide>
          <img src="/Lady(2).png" className="w-full h-screen object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/Lady(1).png" className="w-full h-screen object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/man.png" className="w-full h-screen object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* TEXT OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center z-10 px-10">

        <div className="max-w-lg font-bold font-serif">

          <span className="text-gray-800 text-5xl leading-tight block mb-4">
            Step Into Style – Discover the Trendiest Looks of the Season.
          </span>

          <div className="text-[15px] text-gray-600 mt-3">
            <span>
              Shop from a curated collection of fashion, tech, and lifestyle
              products — all at unbeatable prices with secure checkout,
              fast delivery and easy returns.
            </span>
          </div>

          <button className="bg-black rounded-full w-28 h-10 text-white mt-6 hover:shadow-2xl hover:scale-95 transition cursor-pointer">
            <span className="text-[12px]">
              Shop Now
            </span>
          </button>

          {/* CUSTOMER IMAGES */}
          <div className="absolute bottom-20 left-240 p-4 bg-amber-400 rounded-xl text-sm shadow-lg hover:shadow-8xl cursor-pointer hover:scale-99">

            <div className="flex items-center mb-2">
              <img
                src="/Lady(1).png"
                alt="customers"
                className="rounded-full h-10 w-10"
              />

              <img
                src="/man.png"
                alt="customers"
                className="rounded-full h-10 w-10 -ml-2"
              />

              <img
                src="/Lady(2).png"
                alt="customers"
                className="rounded-full h-10 w-10 -ml-2"
              />

              <span className="text-2xl font-extrabold font-mono ml-3">
                50+
              </span>
            </div>

            <span className="leading-tight text-gray-700">
              Join our growing community of <br />
              satisfied customers
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroSlider;