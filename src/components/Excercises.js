import React, {useEffect, useState} from 'react';
import  Pagination  from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

import { exerciseOptions, fetchData } from '../utils/FetchData';

const Excercises = ({ exercises , setExercises, bodyPart}) => {
const [currentPage, setCurrenPage] = useState(1);
const exercisesPerPage = 9;

const indexOfLastExercise = currentPage * exercisesPerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise); 



const paginate = (e, value) =>{
setCurrenPage(value)

window.scrollTo({ top: 1800, behaviour: 'smooth'});
}

useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);
  return (
    <Box id='exercises' sx={{ mt: {lg: '110px'}}}      
    mt='50px'
    p= '20px'
    >
    <Typography variant='h3' mb='45px'>
     Showing Result
    </Typography>
      <Stack direction='row' sx={{ gap: {lg: '105px', xs: '50px'}}}
       flexWrap='wrap' justifyContent='center'
      >
      {currentExercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
       ))}
      </Stack>
      <Stack  mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination  color="standard" shape="rounded" count={Math.ceil(exercises.length / exercisesPerPage)} defaultPage={1} page={currentPage}
          onChange={paginate}
          size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Excercises