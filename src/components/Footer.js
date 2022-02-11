import { Container, Text, Flex } from "@chakra-ui/react";
import React from "react";
import {FaLinkedinIn, FaTwitter, FaEnvelope} from 'react-icons/fa'


const Footer = () => {
    return(
        <Container bg='#49ada1' maxW='full'centerContent p={5}>
            <Text color='white'>Developed with ❤️ and 🔥 by Alex</Text>
            <Flex mt={4} align='center' justify='space-evenly' width={['20%','20%','10%','10%']}>
                <FaLinkedinIn mr={4} color='white' cursor='pointer' />
                <FaTwitter mr={4} color='white' cursor='pointer' />
                <FaEnvelope mr={4} color='white' cursor='pointer'  />
             </Flex>

        </Container>
    )
}

export default Footer;