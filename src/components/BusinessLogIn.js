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
  Text
} from '@chakra-ui/react';
import React, { useState , useRef } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

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
        console.log(userCred.user)
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
      <Heading align='center'>Log In</Heading>
      {error && <Alert status="error">{error}</Alert>}
      <FormControl  >
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          ref={emailRef}
          required
        />
        <FormLabel>Password</FormLabel>
        <Input
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
        <Flex>
          <Box>
          Need an account? <Link to="/BusinessRegister">Sign Up</Link>
          </Box>
          <Spacer />
          <Text cursor='pointer' onClick={forgotPasswordHandler}>Forgot your password?</Text>
        </Flex>
    </Container>
  );
};

export default BusinessLogin;
