import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Typography } from '@mui/material';

function Enter(){
    
    
    let navigate = useNavigate();
      
    const navQuestion1 = () => {
          navigate('/question1')}


    return (
    
        <Container >
        <Box mt={20} textAlign='center'>
        <Typography variant="h4">Welcome to the Quiz App</Typography>
        </Box>
        <Box mt={2} textAlign='center' >
        <Button onClick={navQuestion1} variant='contained' >Let's get started!</Button></Box>
        </Container>

    )
}

export default Enter
