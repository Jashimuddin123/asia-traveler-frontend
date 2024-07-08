// Import Swiper React components
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Feddback = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto mt-20'>
                <h1 className='text-3xl font-bold mb-0'>Experience Traveler</h1>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img className='w-full h-[400px] mt-12 mx-auto rounded mb-6'
                            src="https://i.ibb.co/XxR31z9/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full mt-12 h-[400px] mx-auto rounded'
                            src="https://i.ibb.co/yqQ56FH/joshua-earle-87-Jy-Mb9-Zf-U-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full mt-12 h-[400px] mx-auto rounded'
                            src="https://i.ibb.co/fkvDLtN/shifaaz-shamoon-qtb-V-8-P-Ksk-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full mt-12 h-[400px] mx-auto rounded'
                            src="https://i.ibb.co/8N7W1tS/Whats-App-Image-2024-07-05-at-23-59-29-246a4e73.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full mt-12 h-[400px] mx-auto rounded'
                            src="https://i.ibb.co/8N7W1tS/Whats-App-Image-2024-07-05-at-23-59-29-246a4e73.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full mt-12 h-[400px] mx-auto rounded'
                            src="https://i.ibb.co/8N7W1tS/Whats-App-Image-2024-07-05-at-23-59-29-246a4e73.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full mt-12 h-[400px] mx-auto rounded'
                            src="https://i.ibb.co/8N7W1tS/Whats-App-Image-2024-07-05-at-23-59-29-246a4e73.jpg" alt="" />
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Feddback;
