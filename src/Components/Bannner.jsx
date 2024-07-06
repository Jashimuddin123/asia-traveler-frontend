
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const BannerSlider = () => {
    return (
        <div className='max-w-6xl mx-auto mt-20'>
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
        <img className=' w-full h-[700px] mt-12  mx-auto rounded mb-6'
         src="https://i.ibb.co/XxR31z9/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg" alt=""  />
      </SwiperSlide>
      <SwiperSlide>
      <img className=' w-full mt-12   h-[700px] mx-auto rounded'
       src="https://i.ibb.co/yqQ56FH/joshua-earle-87-Jy-Mb9-Zf-U-unsplash.jpg" alt=""   />
      </SwiperSlide>
      <SwiperSlide>
      <img className=' w-full mt-12  h-[700px] mx-auto rounded'
       src="https://i.ibb.co/fkvDLtN/shifaaz-shamoon-qtb-V-8-P-Ksk-unsplash.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className=' w-full mt-12  h-[700px] mx-auto rounded'
       src="https://i.ibb.co/8N7W1tS/Whats-App-Image-2024-07-05-at-23-59-29-246a4e73.jpg" alt=""/>
      </SwiperSlide>
      ...
    </Swiper>
        </div>
    );
};

export default BannerSlider;