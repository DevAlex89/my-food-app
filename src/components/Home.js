import React from 'react';
import organic from '../assets/organic.jpg';
import globe1 from '../assets/globe1.png'
import bagandfood from '../assets/bagandfood.png'
import trashbin from '../assets/trashbin.png'

import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  return (
    <Box bg="white" maxW="full"  mt={8}>
          <Flex align='center' justify='space-evenly' flexDir={['column','column','row','row']} w='full'>
              <Container    mt={16} w={['100%','100%','50%','50%']} centerContent>
                <Heading align="start" fontSize="6xl" color="#114d4d">
                  FritterNot
                </Heading>
                <Heading color='#49ada1' align='center' mb={14}>Why waste fine food?</Heading>
                <Text align="center" ml={[5,5,0,0]} fontSize={['md','md','xl',"xl"]} w={['80%','80%','70%','70%']} color="green.900" >
                  We dream of a planet with no food waste, and every day we’re
                  working on making that a reality. Log on, and get saving
                  perfectly good, surplus food from your local stores. It’s always
                  a surprise, at a great price, and an instant good deed for the
                  planet. Get started now!
                </Text>
              </Container>
              <Container  w='100%' centerContent>
                <Image  boxSize={['sm','sm','lg',"xl" ]}  objectFit='cover' src={organic} alt="organic food and people" loading="lazy"  />
              </Container>
          </Flex>

          
            <Flex  bg='#114d4d' minH='85vh' mt={20} align='center' justify='center'>
                <Flex mt={12}   maxW='80%'  direction={['column', 'column', 'column', 'row']} >
                  <Box mt={4} maxW={['full', 'full', '50%','50%']} >
                    <Heading color='white' fontSize={['3xl', '3xl','4xl','6xl']} mb={2}>FOOD WASTE, A WORLDWIDE ISSUE</Heading>
                    <Text fontSize={['lg','lg','xl','3xl']} color='#49ada1' align='start' mt={4}>AN UNKNOWN REALITY</Text>
                    <Text fontSize={['lg','lg','xl','2xl']}color='white' mt={16}>Each year, more than one third of food produced in the world goes to waste, and it is responsible for 10% of all greenhouse gas emissions. We are on a mission to change that - are you with us ?</Text>
                  </Box>
                  <Box>
                    <Center>
                     <Image src={globe1}  boxSize={['sm','sm','md','lg']} objectFit='contain'  />
                     </Center>
                   </Box>
                </Flex>
            </Flex>


            <Container maxW='container.lg' mb={20}>
              <Grid mt={12} placeItems='center'>
                <Heading color='#114d4d' mt={8} fontSize='5xl'>COME FIGHT FOOD WASTE WITH US</Heading>
                <Heading color='#49ada1' mt={8}>THE PLANET NEEDS YOU!</Heading>
                <Text color='#114d4d' mt={12} fontSize='xl'>We dream of a planet with no food waste, and every day we’re working on making that a reality. Our app is the most direct way for you to get involved - just download, log on, and get saving perfectly good, surplus food from your local stores. It’s always a surprise, at a great price, and an instant good deed for the planet. Get started now!</Text>
              </Grid>
            </Container>


            <Flex align='center' justify='center' flexDir={['column','column','row','row']}>
              <Container ml={3} centerContent>
                <Image src={bagandfood} boxSize={['xs','sm','sm','sm']} objectFit='cover'/>
                </Container >
              <Container ml={3} >
                <Heading color='#114d4d' align={['center','center','start','start']} mt={8} fontSize='5xl'>CREATING REAL CHANGE</Heading>
                <Heading color='#49ada1' mt={8}>WE'RE BUILDING SOMETHING BIG</Heading>
                <Text color='#114d4d' mt={12} fontSize='xl'>To make a real impact on the issue of food waste, we need to work with public affairs, education, and hand in hand with households and businesses. Discover our many actions here!</Text>
                <Button
                mt="4"
                color="#114d4d"
                variant="ghost"
                borderColor="#114d4d"
                border="1px solid"
                _hover={{ bg: '#114d4d', color: 'white' }}
                onClick={() => {
                  navigate('/UserLogIn');
                }}
              >
                Find stores near you
              </Button>
              </Container>
            </Flex>


            <Flex align='center' justify='center' mb={12} mt={12} flexDir={['column','column','row','row']}>
              <Container ml={[2,4,10,12]} >
                <Heading color='#114d4d' mt={8} fontSize='5xl'>WORK WITH YOUR VALUES</Heading>
                <Heading color='#49ada1' mt={8}>WE’RE LOOKING FOR NEW TALENT!</Heading>
                <Text color='#114d4d' mt={12} fontSize='xl'>Our team is always growing and we need passionate people, in all fields. Whether it’s sales, public affairs...or food waste education, check out our open positions here.</Text>
                <Button
                mt="4"
                color="#114d4d"
                variant="ghost"
                borderColor="#114d4d"
                border="1px solid"
                _hover={{ bg: '#114d4d', color: 'white' }}
                onClick={() => {
                  navigate('/BusinessRegister');
                }}
              >
                Register your business
              </Button>
              </Container>
              <Container centerContent>
                <Image src={trashbin} boxSize='sm' objectFit='cover' />
              </Container>
            </Flex>
    </Box>
  );
}

export default Home;
