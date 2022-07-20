import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Typography } from '@mui/material';





function Question3()  {
    let navigate = useNavigate();

    const navFinal = () => {
        navigate('/finalpage')}

    return (

      
      <Container >
        <Box mt={20} textAlign='center'>
        <Typography variant="h4">Best meal?</Typography>
        </Box>
        
        <Box mt={2} textAlign='center' >
        <Button onClick={navFinal} variant='contained' >Breakfast</Button></Box>
        <Box mt={2} textAlign='center' >
        <Button onClick={navFinal} variant='contained' >Lunch</Button></Box>
        <Box mt={2} textAlign='center'>
        <Button onClick={navFinal} variant='contained'>Dinner</Button></Box>
        <Box mt={2} textAlign='center'>
        <Button onClick={navFinal} variant='contained'>Dessert</Button></Box>
       
         </Container>
      
    )}


    
      export default Question3