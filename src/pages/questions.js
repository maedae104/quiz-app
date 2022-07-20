import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Typography } from '@mui/material';




function Question1()  {
  let navigate = useNavigate();

  const navQuestion2 = () => {
    navigate('/question2')
  }
    return (

      
      <Container >
        <Box mt={20} textAlign='center'>
        <Typography variant="h4">What super power would you have?</Typography>
        </Box>
        
        <Box mt={2} textAlign='center' >
        <Button onClick={navQuestion2} variant='contained' >Fly</Button></Box>
        <Box mt={2} textAlign='center' >
        <Button onClick={navQuestion2} variant='contained' >Teleport</Button></Box>
        <Box mt={2} textAlign='center'>
        <Button onClick={navQuestion2} variant='contained'>Mind Reading</Button></Box>
        <Box mt={2} onClick={navQuestion2}  textAlign='center'>
        <Button variant='contained'>Something else way more cool and obscure</Button></Box>

       
         </Container>
      
    )}


    
      export default Question1
 
