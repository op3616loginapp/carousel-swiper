// import Swiper core and required modules
import React, { useState } from 'react';

import { Navigation, Controller, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Paper from './Paper';

export default () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        controller={{ control: controlledSwiper }}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={setControlledSwiper}
        onSlideChange={() => console.log('slide change')}
        onReachEnd={() => console.log('slide end')}
        onReachBeginning={() => console.log('slide start')}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <SwiperSlide>
            <Paper>{i + 1}</Paper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Controller]}
        slidesPerView={5}
        onSwiper={setControlledSwiper}
        controller={{ control: controlledSwiper }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <SwiperSlide>
            <Paper>{i + 1}</Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
