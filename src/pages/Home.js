import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Excercises from '../components/Excercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Excercises/>
    </Box>
  )
}

export default Home