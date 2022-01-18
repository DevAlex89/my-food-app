import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Button,
  Container,
  Image,
  Center,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import logo from './assets/logo.png'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH='100vh' w='auto'>
        <Grid w='100vw'>
           <Flex justify='space-between' align='center' w='90vw'  ml='auto' mr='auto' minH='20vh'>
             <Image boxSize='80px' src={logo}/>
             <ColorModeSwitcher p='8'  border='1px'/>
           </Flex>
           <Box h='80vh'>
             <Container>
               <Heading align='center' fontSize='6xl'>Hello World</Heading>
               <Text align='center' fontSize='xl' mt='3'>We dream of a planet with no food waste, and every day we’re working on making that a reality. Log on, and get saving perfectly good, surplus food from your local stores. It’s always a surprise, at a great price, and an instant good deed for the planet. Get started now!</Text>
             </Container>
             <Box mt='12' w='90vw' display='flex' justify='space-between' ml='auto' mr='auto' bg='tomato' align='center'>
               <Container>
                 <Heading fontSize='2xl'>For the foodies</Heading>
                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim neque, aliquam laudantium blanditiis veritatis.</Text>
                 <Button>Sign In</Button>
               </Container>
               <Container>
                 <Heading fontSize='2xl'>For the businesses</Heading>
                 <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita tempora quo aliquam, ab hic.</Text>
                 <Button>Sign In</Button>
               </Container>
             </Box>
             
           </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
