import { Container, Heading, Text, Flex, Button, Box} from '@chakra-ui/react';
import React from 'react';
import {useNavigate} from 'react-router-dom'

const UserThank = () => {
    let navigate = useNavigate()
  return (
    <Container
      maxW="full"
      minH="100vh"
      centerContent
      bg="#fcf8f2"
      overflow="hidden"
    >
      <Heading mt={8} color="#114d4d">
        Thank you for using FritterNot!!
      </Heading>
      <Text mt={8} fontSize="xl">
        The shop has been notified and you may go pick up your bag of goodies!!!
      </Text>
      <Flex justifyContent='center' alignItems='center'mt={8}>
          <Box mr={5} >
              <Button 
               color="#114d4d"
               variant="ghost"
               borderColor="#114d4d"
               border="1px solid"
               _hover={{ bg: '#114d4d', color: 'white' }}
               onClick={()=>{navigate('/')}}>Home</Button>
          </Box>
          <Box ml={5}>
              <Button 
               color="#114d4d"
               variant="ghost"
               borderColor="#114d4d"
               border="1px solid"
               _hover={{ bg: '#114d4d', color: 'white' }}
               onClick={()=>{navigate('/')}}
               >About</Button>
          </Box>
        
       
      </Flex>
    </Container>
  );
};

export default UserThank;
