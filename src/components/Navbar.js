import react from 'react';
import { Box, Container, Image, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <Container
      maxWidth="container.xl"
      d="flex"
      justifyContent="space-between"
      align="center"
      mt="3"
    >
      <Box>
        <Image boxSize="40px" src={logo} alt="logo" />
      </Box>
      <Box>
        {/* <Button  color="blue" size="sm" border="1px solid" mr='2' fontSize="xxl">
          {<FaFacebook />}
        </Button>
        <Button color="black" size="sm" border="1px solid" mr='2' fontSize="xxl">
          {<FaInstagram />}
        </Button>
        <Button color="blue.500" size="sm" border="1px solid" mr='2' fontSize="xxl">
          {<FaLinkedin />}
        </Button>
        <Button color="red" size="sm" border="1px solid" mr='2' fontSize="xxl">
          {<FaYoutube />}
        </Button> */}
        <ColorModeSwitcher />
      </Box>
    </Container>
  );
};

export default Navbar;
