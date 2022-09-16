import React from 'react';
import { Stack, Typography, Box} from '@mui/material';

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt={Logo} width='200px' height='50px'/>
        <Typography variant='h5' mt='20px' mb='20px'>
          Fitness webapp created for <span color='red'>beast</span> in you &copy; Bear Gym
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer