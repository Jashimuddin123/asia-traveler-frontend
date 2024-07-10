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
                        <img className='w-96 h-[300px] mt-12 mx-auto rounded mb-6'
                            src="https://i.ibb.co/5GzpW2c/traveler1-png.jpg" alt="" />
                            <h2>Smita jerin</h2>
                            <p>Fassional Designer</p>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl'>
                        <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                            src="https://i.ibb.co/qFHKKD9/traveler2-png.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                            src="https://i.ibb.co/HrpjTZS/traveler3-png.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                            src="https://i.ibb.co/bRL7pKv/travel4-png.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                            src="https://i.ibb.co/8N7W1tS/Whats-App-Image-2024-07-05-at-23-59-29-246a4e73.jpg" alt="" />
                    </SwiperSlide>
                 
               
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Feddback;
