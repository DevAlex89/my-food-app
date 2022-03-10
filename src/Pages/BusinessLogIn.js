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
  Link,
} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const BusinessLogin = () => {
  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, forgotPassword, setLocal } = useAuthContext();
  const [message, setMessage] = useState('');

  // the user login
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (emailRef && passwordRef)
        await login(emailRef.current.value, passwordRef.current.value).then(
          userCred => {
            setLocal();

            navigate('/Dashboard');
          }
        );
      setLoading(false);
    } catch {
      setError('Wrong email or password');
      setLoading(false);
    }
  };

  // reset password
  const forgotPasswordHandler = async () => {
    try {
      if (emailRef.current.value)
        await forgotPassword(emailRef.current.value).then(() => {
          emailRef.current.value = '';
        });
      setMessage(
        'An email has been sent with instructions to reset your password'
      );
    } catch (err) {
      setError('Wrong Email');
    }
  };

  return (
    <Container minH="76vh">
      <Heading align="center" color="#114d4d" mt={5} mb={2}>
        Log In
      </Heading>
      {error && <Alert status="error">{error}</Alert>}
      {message && <Alert status="success">{message}</Alert>}
      <FormControl>
        <FormLabel color="#114d4d">Email</FormLabel>
        <Input
          focusBorderColor="#114d4d"
          type="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <FormLabel color="#114d4d">Password</FormLabel>
        <Input
          focusBorderColor="#114d4d"
          type="password"
          placeholder="Requires at least 6 characters"
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
      >
        Log In
      </Button>
      <Flex mt={5} flexDir={['column', 'column', 'row', 'row']}>
        <Box>
          Need an account?{' '}
          <Link ml={2} color="#49ada1" href="/BusinessRegister">
            Sign Up
          </Link>
        </Box>
        <Spacer />
        <Text
          cursor="pointer"
          _hover={{ textDecor: 'underline' }}
          color="#49ada1"
          onClick={forgotPasswordHandler}
        >
          Forgot your password?
        </Text>
      </Flex>
    </Container>
  );
};

export default BusinessLogin;
