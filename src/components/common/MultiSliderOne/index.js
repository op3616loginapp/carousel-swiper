import React, { useRef, useState } from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'swiper/css';
import 'swiper/css/navigation';
import { SliderArrow, SliderItem } from './style';
import ProductCard from '../ProductCard';

const MultiSliderOne = () => {
  //Custom Swiper config
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isReachBeginning, setReachBeginning] = useState(true);
  const [isReachEnd, setReachEnd] = useState(false);

  const customSwiperParams = {
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    slidesPerView: 5,
    autoplay: true,
    grabCursor: false,
    draggable: false,
    preventClicksPropagation: true,
    preventClicks: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
  };

  const handleSlideChange = event => {
    if (event.isEnd) {
      setReachEnd(true);
      return;
    }

    if (event.isBeginning) {
      setReachBeginning(true);
      return;
    }

    setReachBeginning(false);
    setReachEnd(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        background: 'white',
        height: '100%',
        width: '100%',
        '&:hover .slider-arrow': {
          transform: 'scale(2)',
        },
      }}
    >
      <SliderArrow
        className="slider-arrow"
        hidden={isReachBeginning}
        ref={navigationPrevRef}
        sx={{
          left: '-8px',
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
      </SliderArrow>
      <SliderArrow
        className="slider-arrow"
        hidden={isReachEnd}
        ref={navigationNextRef}
        sx={{
          right: '-8px',
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
      </SliderArrow>
      <Swiper
        {...customSwiperParams}
        modules={[Navigation]}
        onSlideChange={event => handleSlideChange(event)}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MultiSliderOne;
