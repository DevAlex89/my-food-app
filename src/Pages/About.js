 import React from 'react'
 import { Container, Heading, Text, Flex,  Box, Image, Link} from '@chakra-ui/react';
import Foodtrashset from '../assets/Foodtrashset.jpg'


const About = () => {
   
  return (
    <Container
      maxW="full"
      minH="100vh"
      centerContent
      bg="white"
      overflow="hidden"
    >
         <Image src={Foodtrashset} boxSize='md' objectFit='cover'/>
        <Heading align="start" fontSize="6xl" color="#114d4d">
                  Fritternot
        </Heading>
        <Heading color='#49ada1' align='center' mb={14}>Why waste fine food?</Heading>
         <Text mt={8} align='start' w={['80%','80%','50%','50%']} fontSize="xl">
             Did you know that more than a third of all the world’s food gets thrown away? And it’s happening close to home. Each day and every day, your favourite stores, eateries, and producers are forced to throw out fine food just because it didn’t sell in time.
          </Text>
         <Text mt={8} align='start' w={['80%','80%','50%','50%']} fontSize="xl">
           Fritternot lets you buy and collect surprise bags of this food at great prices. This means more gets eaten and less gets wasted, which is good for the planet and good for your pocket.
          </Text>
         <Text mt={8} align='start' w={['80%','80%','50%','50%']} fontSize="xl">
           Here at Fritternot, we’re serious about fighting food waste. We want to be part of the solution – and you can be part of it too. Just download our app, log on, and start saving surplus food today!
          </Text>

         
      <Flex justifyContent='center' alignItems='center'mt={8} mb={8}>
          <Box mr={5} >
            <Link href='/' color="#114d4d"  > 
              <Text fontSize={'lg'} fontWeight='bold'>Home</Text>
            </Link>
          </Box>
          <Box ml={8}>
           <Link href='/BusinessRegister' color="#114d4d"  > 
              <Text fontSize={'lg'} fontWeight='bold'>Register your business</Text>
            </Link>
          </Box>
        
       
      </Flex>
    </Container>
  )
}

export default About