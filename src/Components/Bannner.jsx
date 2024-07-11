// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 lg:mt-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={200}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[450px] mt-12 mx-auto rounded mb-6"
              src="https://i.ibb.co/yqQ56FH/joshua-earle-87-Jy-Mb9-Zf-U-unsplash.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-4xl font-mono font-extralight text-white">
                Destination Dreaming: <br />
                <span className="text-red-600">Plan Your Perfect Getaway</span>
              </p>
              <button className="mt-4 bg-blue-900 px-8 py-4 rounded text-white transition duration-200  text-xl ease-in-out hover:bg-yellow-500">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[450px] mt-12 mx-auto rounded mb-6"
              src="https://i.ibb.co/2s14GkX/654.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-4xl font-mono font-extralight text-white">
                Destination Dreaming: <br />
                <span className="text-red-600">Plan Your Perfect Getaway</span>
              </p>
              <button className="mt-4 bg-blue-900 px-8 py-4 rounded text-white transition duration-200  text-xl ease-in-out hover:bg-yellow-500">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[450px] mt-12 mx-auto rounded mb-6"
              src="https://i.ibb.co/XxR31z9/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-4xl font-mono font-extralight text-white">
                Destination Dreaming: <br />
                <span className="text-red-600">Plan Your Perfect Getaway</span>
              </p>
              <button className="mt-4 bg-blue-900 px-8 py-4 rounded text-white transition duration-200  text-xl ease-in-out hover:bg-yellow-500">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[450px] mt-12 mx-auto rounded mb-6"
              src="https://i.ibb.co/QPH6mRw/465.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full p-6">
              <p className="text-4xl font-mono font-extralight text-white">
                Destination Dreaming: <br />
                <span className="text-red-600">Plan Your Perfect Getaway</span>
              </p>
              <button className="mt-4 bg-blue-900 px-8 py-4 rounded text-white transition duration-200  text-xl ease-in-out hover:bg-yellow-500">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default BannerSlider;
