import React from 'react';
import './Home.css';
import MultiSlider from '../../components/common/MultiSlider/MultiSlider';
import SingleSlider from '../../components/common/SingleSlider/SingleSlider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import MultiSliderOne from '../../components/common/MultiSliderOne';

const Home = () => {
  return (
    <Box sx={{ background: '#f5f5f5', pb: 2 }}>
      <Container>
        <Stack spacing={3}>
          <SingleSlider />
          <MultiSlider />
          <MultiSliderOne />
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
