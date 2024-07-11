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
                <h1 className='text-3xl font-bold  mb-4'>Experience Traveler</h1>
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
                      <div className='shadow-xl px-4 border'>
                      <img className='w-96 h-[280px] mt-12 mx-auto rounded mb-6'
                            src="https://i.ibb.co/5GzpW2c/traveler1-png.jpg" alt="" />
                            <h2 className='text-xl font-semibold text-blue-700'>Smita jerin</h2>
                            <p className='text-gray-500 pb-2'>Fassional Designer</p>
                      </div>
                    </SwiperSlide>
               
                    <SwiperSlide >
                         <div className='shadow-xl px-4 border'>
                         <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                            src="https://i.ibb.co/Qp0dXVt/25003.jpg" alt="" />
                              <h2  className='text-xl font-semibold text-blue-700'>Mick Herry</h2>
                              <p className='text-gray-500 pb-2'>Social Analitist</p>
                         </div>
                    </SwiperSlide>
              
                    <SwiperSlide>
                    <div className='shadow-xl px-4 border'>
                        <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                               src="https://i.ibb.co/gJB0mJk/2148148615.jpg" alt="" />
                              <h2  className='text-xl font-semibold text-blue-700'>Rohit Jadwre</h2>
                              <p className='text-gray-500 pb-2'>Civil Resources</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-xl px-4 pb-2 border'>
                        <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                            src="https://i.ibb.co/bRL7pKv/travel4-png.jpg" alt="" />
                              <h2  className='text-xl font-semibold text-blue-700'>Justin Clive</h2>
                              <p className='text-gray-500 pb-2'> Social Traveler</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='shadow-xl px-4 border'>
                        <img className='w-96 mt-12 h-[300px] mx-auto rounded'
                            src=" https://i.ibb.co/qFHKKD9/traveler2-png.jpg" alt="" />
                              <h2  className='text-xl font-semibold text-blue-700'>Davit barnass</h2>
                              <p className='text-gray-500 pb-2'>National Traveler</p>
                        </div>
                    </SwiperSlide>
                 
               
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Feddback;
