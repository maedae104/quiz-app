import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Typography } from '@mui/material';





function Question2()  {
    let navigate = useNavigate();

  const navQuestion3 = () => {
    navigate('/question3')
  }
    return (

      
      <Container >
        <Box mt={20} textAlign='center'>
        <Typography variant="h4">What makes you believe in magic?</Typography>
        </Box>
        
        <Box mt={2} textAlign='center' >
        <Button onClick={navQuestion3} variant='contained' >Quiet Mornings</Button></Box>
        <Box mt={2} textAlign='center' >
        <Button onClick={navQuestion3} variant='contained' >Hearing someone you love laugh</Button></Box>
        <Box mt={2} textAlign='center'>
        <Button onClick={navQuestion3} variant='contained'>A magician</Button></Box>
        <Box mt={2} textAlign='center'>
        <Button onClick={navQuestion3} variant='contained'>No thanks</Button></Box>
       
         </Container>
      
    )}


    
      export default Question2