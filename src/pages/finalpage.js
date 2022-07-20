import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Typography } from '@mui/material';





function FinalPage()  {
    let navigate = useNavigate();

    const navEnter = () => {
        navigate('/')}

    return (

      
      <Container >
        <Box mt={30} textAlign='center'>
        <Typography variant="h4">Thanks for playing! Your answers have been sent into a void.</Typography>
        </Box>
        <Box mt={2} textAlign='center' >
        <Button onClick={navEnter} variant='contained' >Take the quiz again!</Button></Box>
        
       
         </Container>
      
    )}


    



export default FinalPage