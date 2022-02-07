import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Alert,
  Flex,
  Spacer,
  Text,
  Link
} from '@chakra-ui/react';
import React, { useState , useRef } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate} from 'react-router-dom';

const BusinessLogin = () => {
  let navigate = useNavigate();
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {login, forgotPassword} = useAuthContext()
  
  


// the user login
  const handleSubmit = async(e) => {
    e.preventDefault()
      setError('')
      setLoading(true)
      if (emailRef && passwordRef)
      await login( emailRef.current.value, passwordRef.current.value)
      .then ((userCred)=>{
        navigate('/Dashboard')
      })
      setLoading(false)
  }

  // reset password
  const forgotPasswordHandler = async () => {
    try{
      if (emailRef.current.value)
      await forgotPassword(emailRef.current.value).then(() => {
        emailRef.current.value = "";
      });
    } catch (err){
      setError('Wrong Email')
    }
  };
  

  return (
    <Container>
      <Heading align='center' color='#114d4d' >Log In</Heading>
      {error && <Alert status="error">{error}</Alert>}
      <FormControl  >
        <FormLabel color='#114d4d'>Email</FormLabel>
        <Input
          focusBorderColor="#114d4d"
          type="email"
          ref={emailRef}
          required
        />
        <FormLabel color='#114d4d'>Password</FormLabel>
        <Input
          focusBorderColor="#114d4d"
          type="password"
          ref={passwordRef}
          required
        />
      </FormControl>
      <Button 
        disabled={loading}
        color="#114d4d"
        variant="ghost"
        borderColor="#114d4d"
        border="1px solid"
        _hover={{ bg: '#114d4d', color: 'white' }}
        mt={4}
        type="submit"
        w="100%"
        onClick={handleSubmit}
        >Log In</Button>
        <Flex mt={5}>
          <Box>
          Need an account? <Link ml={2} color='#49ada1' to="/BusinessRegister">Sign Up</Link>
          </Box>
          <Spacer />
          <Text cursor='pointer' _hover={{textDecor:'underline'}} color='#49ada1' onClick={forgotPasswordHandler}>Forgot your password?</Text>
        </Flex>
    </Container>
  );
};

export default BusinessLogin;
