import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography } from '@mui/material';
import { excerciseOptions, fetchData } from '../utils/FetchData';



const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async() =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions);
   setBodyParts(['all', ...bodyPartsData]);     
    }

    fetchExercisesData();
  }, [])
  
  const handleSearch = async() => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);
    
     const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
     ||exercise.target.toLowerCase().includes(search)
     ||exercise.equipment.toLowerCase().includes(search)
     || exercise.bodyPart.toLowerCase().includes(search)
     );
     setSearch('');
     setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt='40px' justifyContent='center' p='20px'>
      <Typography fontWeight='700' sx={{ fontSize: {  lg: '44px', xs: '30px'}}} mb='45px' textAlign='center'>
        Awesome Excercises You <br/> Should Know
      </Typography>
      <Box position='relative' mb='70px'>
  <TextField
 sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '6px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
   height='76px'
   value={search}
   onChange={(e) =>   setSearch(e.target.value.toLowerCase())}
   placeholder='Search Excercises'
   type='text'
  />
  <Button className='search-btn'
  sx={{ bgcolor: '#ff2625', color: '#fff', textTransform: 'none', width:{ lg:'175px', xs: '100px'}, fontSize: {lg: '23px', xs: '16px'},
  height: '56px', position: 'absolute', right: '0'
}}
  onClick={handleSearch}
  >
 Search
  </Button>
      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }}>
<HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises