import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from  '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', sm: '70px'},
      ml: { sm: '50px'}
    }} position='relative' p='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Jungle
      </Typography>
      <Typography fontWeight='700' 
      sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb='20px' mt='25px'
      > 
        Sweat , Grind , Laugh <br/> and Repeat.
      </Typography>
      <Typography fontSize='23px' lineHeight= '2.4em' mb={3}>
        Check out the most precision based excercises
      </Typography>
      <Button variant="contained" color='error' href='#excercises'
      sx={{ backgroundColor: '#ff2625', padding:'20px'}}>
        Explore Excercises
      </Button>
      <Typography fontWeight='600' color='#FF2625' sx={{ opacity: 0.1, display:{ lg: 'block', xs: 'none'}}
} fontSize='200px'> 
        Excercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner