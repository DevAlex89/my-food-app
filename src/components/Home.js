import React from 'react';
import farm from '../assets/farm.jpg';
import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
  return (
    <Container bg='orange.50' maxW="full" overflow='hidden'>
      <Grid>
        <Box>
          <Grid placeItems="center">
            <Container maxW="container.sm" centerContent>
              <Image boxSize="350px" src={farm} alt="vegetables" />
              <Heading align="center" fontSize="6xl" color="green.600">
                Hello World
              </Heading>
              <Text align="center" fontSize="xl" mt="3" color="green.900">
                We dream of a planet with no food waste, and every day we’re
                working on making that a reality. Log on, and get saving
                perfectly good, surplus food from your local stores. It’s always
                a surprise, at a great price, and an instant good deed for the
                planet. Get started now!
              </Text>
            </Container>
          </Grid>
          <Box
            mt="12"
            mb="8"
            w="90vw"
            display="flex"
            justify="space-between"
            ml="auto"
            mr="auto"
            align="center"
          >
            <Container mt="12">
              <Heading fontSize="2xl" color="green.600">For the foodies</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus enim neque, aliquam laudantium blanditiis veritatis.
              </Text>
              <Button
                mt="4"
                bg="green.500"
                color="white"
                onClick={()=>{navigate('/UserLogIn')}}
              >
                Sign In
              </Button>
            </Container>
            <Container mt="12">
              <Heading fontSize="2xl" color="green.600">For the businesses</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                expedita tempora quo aliquam, ab hic.
              </Text>
              <Button mt="4" bg="green.500" color="white" onClick={()=>{navigate('/BusinessLogIn')}}>
                Sign In
              </Button>
            </Container>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}

export default Home;
