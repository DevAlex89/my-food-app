import React from 'react';
import organic from '../assets/organic.jpg';
import globe from '../assets/globe.png'
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
  VStack,
  Center,
  GridItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  return (
    <Container bg="white" maxW="full" overflow="hidden" mt={8}>
      <Grid>
        <Box>
          <Grid placeItems="center">
            <Container maxW="container.xl" display='flex' alignItems='center' justifyContent='space-between' mb={20}>
              <Container mr={8} w='50%' p='5' mt={16}>
                <Heading align="center" fontSize="6xl" color="#114d4d">
                  FritterNot
                </Heading>
                <Heading color='#49ada1' align='center' mb={14}>Why waste fine food?</Heading>
                <Text align="center" fontSize="xl"  color="green.900">
                  We dream of a planet with no food waste, and every day we’re
                  working on making that a reality. Log on, and get saving
                  perfectly good, surplus food from your local stores. It’s always
                  a surprise, at a great price, and an instant good deed for the
                  planet. Get started now!
                </Text>
              </Container>
              <Image  boxSize="500px" w='60%' objectFit='cover' src={organic} alt="organic food and people" loading="lazy"  />
            </Container>
          </Grid>
            <Container maxW='full' bg='#114d4d' minH='85vh' mt={20} centerContent>
              <Flex   w='60%'>
                <Grid mt={12} mr={8}>
                  <Heading color='white' fontSize='6xl' mb={2}>FOOD WASTE, A WORLDWIDE ISSUE</Heading>
                  <Text fontSize='3xl' color='#49ada1' align='start' mr={16} mt={4}>AN UNKNOWN REALITY</Text>
                  <Text fontSize='2xl'color='white' mt={16}>Each year, more than one third of food produced in the world goes to waste, and it is responsible for 10% of all greenhouse gas emissions. We are on a mission to change that - are you with us ?</Text>
                </Grid>
                <Center ml={16} w='100%'>
                  <Image src={globe}  boxSize='350px'  />
                </Center>
              </Flex>
            </Container>
            <Container maxW='container.lg' mb={20}>
              <Grid mt={12} placeItems='center'>
                <Heading color='#114d4d' mt={8} fontSize='5xl'>COME FIGHT FOOD WASTE WITH US</Heading>
                <Heading color='#49ada1' mt={8}>THE PLANET NEEDS YOU!</Heading>
                <Text color='#114d4d' mt={12} fontSize='xl'>We dream of a planet with no food waste, and every day we’re working on making that a reality. Our app is the most direct way for you to get involved - just download, log on, and get saving perfectly good, surplus food from your local stores. It’s always a surprise, at a great price, and an instant good deed for the planet. Get started now!</Text>
              </Grid>
            </Container>
            <Grid templateColumns='repeat(2, 1fr)' gap='2' mt={18} placeItems='center'>
              <GridItem>
                <Image src={bagandfood} boxSize='lg'/>
              </GridItem>
              <GridItem>
                <Heading color='#114d4d' mt={8} fontSize='5xl'>CREATING REAL CHANGE</Heading>
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
              </GridItem>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap='2' placeItems='center' mt={16} mb={12} >
              <GridItem ml={12}>
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
                  navigate('/BusinessLogIn');
                }}
              >
                Register your business
              </Button>
              </GridItem>
              <GridItem>
                <Image src={trashbin} boxSize='lg' />
              </GridItem>
            </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default Home;
