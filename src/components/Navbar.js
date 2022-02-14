import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  Box,
  Button,
  Flex,
  Img,
  Spacer,
  Container,
  IconButton,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  let navigate = useNavigate();
  const [dis, setDis] = useState('none');
  return (
    <Container maxW="100%" centerContent mt={4} overflow="hidden" bg={'white'}>
      <Flex w="80%" align="center" ml={10}>
        <Box ml={6}>
          <Img
            src={logo}
            boxSize="40px"
            cursor="pointer"
            onClick={() => {
              navigate('/');
            }}
          />
        </Box>
        <Spacer />
        <Box display={['none', 'none', 'flex', 'flex']}>
          <Button
            mr={3}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            _focus={{ bg: '#114d4d', color: 'white' }}

            onClick={() => {
              navigate('/UserLogIn');
            }}
          >
            Find stores near you
          </Button>
          <Button
            mr={3}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            _focus={{ bg: '#114d4d', color: 'white' }}

            onClick={() => {
              navigate('/BusinessRegister');
            }}
          >
            Sign up your business
          </Button>
          <Button
            mr={3}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            _focus={{ bg: '#114d4d', color: 'white' }}

            onClick={() => {
              navigate('/About');
            }}
          >
            About
          </Button>
          <Button
            mr={3}
            border='1px solid'
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick={() => {
              navigate('/BusinessLogin');
            }}
          >
            Log In
          </Button>
        </Box>
        <IconButton
          size="lg"
          display={['flex', 'flex', 'none', 'none']}
          _hover={{ bg: '#114d4d', color: 'white' }}
          aria-label="Open menu"
          icon={<GiHamburgerMenu />}
          onClick={() => setDis('flex')}
        />
      </Flex>

      {/* this is the responsive menu */}
      <Flex
        display={dis}
        bg="white"
        w="100vw"
        h="100vh"
        zIndex={20}
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={6}
            size="lg"
            bg="#114d4d"
            color="white"
            aria-label="Close menu"
            icon={<MdClose />}
            onClick={() => setDis('none')}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Button
            mt={4}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick={() => {
              navigate('/UserLogIn');
            }}
          >
            Find stores near you
          </Button>
          <Button
            mt={4}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick={() => {
              navigate('/BusinessRegister');
            }}
          >
            Sign up your business
          </Button>
          <Button
            mt={4}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick={() => {
              navigate('/About');
            }}
          >
            About
          </Button>
          <Button
            mt={4}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
            onClick={() => {
              navigate('/BusinessLogin');
            }}
          >
            Log In
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
