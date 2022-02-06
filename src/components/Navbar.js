import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import {Box, Button, Flex, Img, Spacer, Container} from '@chakra-ui/react';


 const Navbar = () => {
     let navigate = useNavigate();
    return(
        <Container maxW='100%' centerContent mt={4} overflow='hidden'>
            <Flex  w='80%' align='center' ml={10}>
                <Box ml={6} >
                    <Img src={logo} boxSize='60px' cursor='pointer' onClick={()=>{navigate('/')}}/>
                </Box>
                <Spacer />
                <Box>
                    <Button 
                    mr={3}
                    color="#114d4d"
                    variant="ghost"
                    borderColor="#114d4d"
                    border="1px solid"
                    _hover={{ bg: '#114d4d', color: 'white' }}
                    onClick={()=>{navigate('/UserLogIn')}}>Find stores near you</Button>
                    <Button 
                    mr={3}
                    color="#114d4d"
                    variant="ghost"
                    borderColor="#114d4d"
                    border="1px solid"
                    _hover={{ bg: '#114d4d', color: 'white' }}
                    onClick={()=>{navigate('/BusinessRegister')}}>Sign up your business</Button>
                    <Button 
                    mr={3}
                    color="#114d4d"
                    variant="ghost"
                    borderColor="#114d4d"
                    border="1px solid"
                    _hover={{ bg: '#114d4d', color: 'white' }}
                    onClick={()=>{navigate('/')}}>About</Button>
                    <Button 
                    mr={3}
                    color="#114d4d"
                    variant="ghost"
                    borderColor="#114d4d"
                    border="1px solid"
                    _hover={{ bg: '#114d4d', color: 'white' }}
                    onClick={()=>{navigate('/BusinessLogin')}}>Log In</Button>
                </Box>
            </Flex>
        </Container>
    )
}


export default Navbar;