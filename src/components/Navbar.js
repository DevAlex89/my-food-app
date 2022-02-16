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
import { useAuthContext } from '../contexts/AuthContext';


const Navbar = () => {
  let navigate = useNavigate();
  const [dis, setDis] = useState('none');
  const { currentUser, logoutUser} = useAuthContext()
  const [error, setError] = useState('')


// logout function
  const handleLogout = async () => {
    setError('')
    try{
      setDis('none')
        logoutUser()
        navigate('/')
    }catch{
        
        setError('Failed to log out')
    }
}



  const closeMenuFind = () => {
    setDis('none');
    navigate('/UserLogIn')
  };
  const closeMenuSign = () => {
    setDis('none');
    navigate('/BusinessRegister')
  };
  const closeMenuAbout = () => {
    setDis('none');
    navigate('/About')
  };
  const closeMenuLogin = () => {
    setDis('none');
    navigate('/BusinessLogIn')
  };
  const closeMenuDashboard = () => {
    setDis('none');
    navigate('/Dashboard')
  };



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
          {/* conditional rendering of register business / Dashboard */}
          {!currentUser ? (
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
          ) : (
            <Button
            mr={3}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            _focus={{ bg: '#114d4d', color: 'white' }}
            onClick={() => {
              navigate('/Dashboard');
            }}
          >
            Dashboard
          </Button> 
          )
          }
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


          {/* conditional render of login / logout */}
          {!currentUser ? (
          <Button
            mr={3}
            border="1px solid"
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
          ) : (
            <Button 
                color="#114d4d"
                variant="ghost"
                borderColor="#114d4d"
                border="1px solid"
                _hover={{ bg: '#114d4d', color: 'white' }}
                onClick={handleLogout}>Log Out</Button>
          )}

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
            onClick={closeMenuFind }
          >
            Find stores near you
          </Button>
          {!currentUser ? (

          <Button
            mt={4}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick= {closeMenuSign}
          >
            Sign up your business
          </Button>
          ) : (
            <Button
            mt={4}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick= {closeMenuDashboard}
          >
            Dashboard
          </Button>
          )}
          <Button
            mt={4}
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick={closeMenuAbout}
          >
            About
          </Button>
           {!currentUser ? (
          <Button
            mt={4}
            border="1px solid"
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            _hover={{ bg: '#114d4d', color: 'white' }}
            onClick={closeMenuLogin}
          >
            Log In
          </Button>
          ) : (
            <Button 
                mt={4}
                color="#114d4d"
                variant="ghost"
                borderColor="#114d4d"
                border="1px solid"
                _hover={{ bg: '#114d4d', color: 'white' }}
                onClick={handleLogout}>Log Out</Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
