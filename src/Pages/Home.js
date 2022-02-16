import React from 'react';
import organic from '../assets/organic.jpg';
import globe1 from '../assets/globe1.png'
import bagandfood from '../assets/bagandfood.png'
import trashbin from '../assets/trashbin.png'
import ScrollButton from '../components/ScrollButton'

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
      <Box pos="fixed" bottom="0" right="0" display={['block','block','block','none']}>{<ScrollButton/>}</Box>
          <Flex align='center' justify='space-evenly' flexDir={['column','column','column','row']} w='full'>
              <Container    mt={16} w={['100%','100%','50%','50%']} centerContent>
                <Heading align="start" fontSize="6xl" color="#114d4d">
                  Fritternot
                </Heading>
                <Heading color='#49ada1' align='center' mb={14}>Why waste fine food?</Heading>
                <Text align="center" ml={[5,5,0,0]} fontSize={['md','md','xl',"xl"]} w={['80%','80%','70%','70%']} color="green.900" >
                Each day and every day, your favourite stores, eateries, and producers are forced to throw out fine food just because it didn’t sell in time. Fritternot lets you buy and collect surprise bags of this food at great prices. This means more gets eaten and less gets wasted, which is good for the planet and good for your pocket. What’s not to love?
                </Text>
              </Container>
              <Container  w='100%' centerContent>
                <Image  boxSize={['sm','sm','lg',"xl" ]}  objectFit='cover' src={organic} alt="organic food and people" loading="lazy"  />
              </Container>
          </Flex>

          
            <Flex  bg='#114d4d' minH='85vh' mt={20} align='center' justify='center'>
                <Flex mt={12}   maxW='80%'  direction={['column', 'column', 'row', 'row']} >
                  <Box mt={4} maxW={['full', 'full', '50%','50%']} >
                    <Heading color='white' fontSize={['3xl', '3xl','3xl','6xl']} mb={2}>FOOD IS BEING WASTED
                       AROUND THE WORLD
                    </Heading>
                    <Text fontSize={['lg','lg','xl','3xl']} color='#49ada1' align='start' mt={4}>FACTS BEYOND BELIEF</Text>
                    <Text fontSize={['lg','lg','xl','2xl']}color='white' mt={16}>Did you know that more than a third of all the world’s food gets thrown away? And the impact is huge – 10% of all greenhouse gas emissions are due to food loss and waste. Fritternot wants to be part of the solution, and you can be part of it with us.</Text>
                  </Box>
                  <Box>
                    <Center>
                     <Image src={globe1}  boxSize={['sm','sm','md','lg']} objectFit='contain'  alt='the globe' />
                     </Center>
                   </Box>
                </Flex>
            </Flex>


            <Container maxW='container.lg' mb={20}>
              <Grid mt={12} placeItems='center'>
                <Heading color='#114d4d' mt={8} fontSize='5xl'>JOIN THE FIGHT AGAINST FOOD WASTE</Heading>
                <Heading color='#49ada1' mt={8}>FOR THE GOOD OF THE PLANET!</Heading>
                <Text color='#114d4d' mt={12} fontSize='xl'>Want to make a difference? Just download the Fritternot app, log on, and start saving surplus food from your favourite stores, eateries, and producers today. What’s in the bag you’re buying? Well, it’s a surprise – you only know what you’re getting when you pick it up – but we guarantee the food will always be excellent quality and great value. Plus, it’s good for planet Earth. What a win-win-win situation!</Text>
              </Grid>
            </Container>


            <Flex align='center' justify='center' flexDir={['column','column','row','row']}>
              <Container ml={3} centerContent>
                <Image src={bagandfood} boxSize={['xs','sm','sm','sm']} objectFit='cover' alt='illustration of a bag with food' loading='lazy'/>
                </Container >
              <Container ml={3} >
                <Heading color='#114d4d' align={['center','center','start','start']} mt={8} fontSize='5xl'>FRITTERNOT ISN’T JUST AN APP
                   – IT’S A MOVEMENT
                </Heading>
                <Heading color='#49ada1' mt={8}>MAKING REAL CHANGE HAPPEN</Heading>
                <Text color='#114d4d' mt={12} fontSize='xl'>Here at Fritternot, we’re serious about fighting food waste. Beyond our app, we also have a dedicated team whose job it is to engage with schools, businesses, and public bodies to raise awareness and effect change. Let’s do this!</Text>
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
                <Heading color='#114d4d' mt={8} fontSize='5xl'>HAVE SURPLUS FOOD
                  YOU WANT SAVED?
                </Heading>
                <Heading color='#49ada1' mt={8}>JOIN FORCES WITH FRITTERNOT!</Heading>
                <Text color='#114d4d' mt={12} fontSize='xl'>We’re always looking for new partners in the fight against food waste. If you have a business with surplus food, it’s time to stop throwing it away. We can connect you with new customers and help you save costs. Resister with us today!</Text>
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
                <Image src={trashbin} boxSize='sm' objectFit='cover' alt='ilustration of man recycling' loading='lazy'/>
              </Container>
            </Flex>
    </Box>
  );
}

export default Home;
