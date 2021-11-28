import React, { useRef } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Paper from '../../Paper';
import { SliderArrow } from './style';

const SingleSlider = () => {
  //Custom Swiper config
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const customSwiperParams = {
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    grabCursor: false,
    draggable: false,
    preventClicksPropagation: true,
    preventClicks: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: 900,
        '&:hover .slider-arrow': {
          opacity: 1,
        },
      }}
    >
      <SliderArrow
        className="slider-arrow"
        ref={navigationPrevRef}
        sx={{
          left: 0,
          px: 1,
          py: 3,
        }}
      >
        <ArrowBackIosNewIcon fontSize="large" sx={{ color: 'white' }} />
      </SliderArrow>
      <SliderArrow
        className="slider-arrow"
        ref={navigationNextRef}
        sx={{
          right: 0,
          px: 1,
          py: 3,
        }}
      >
        <ArrowForwardIosIcon fontSize="large" sx={{ color: 'white' }} />
      </SliderArrow>
      <Swiper
        {...customSwiperParams}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide>
            <img
              src="https://cf.shopee.vn/file/4f6cb0892cab693ea31920d66e8e599d_xxhdpi"
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SingleSlider;
