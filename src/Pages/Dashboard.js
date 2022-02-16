import {
  Alert,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../components/firebase-config';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate();
  const { currentUser, logoutUser, deleteAccount } = useAuthContext();
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const bagRef = useRef();


//the database refs
const docRef = doc(db, 'shops', currentUser.uid);
const geoDocRef = doc(db, 'shopsLocation', currentUser.uid);

useEffect(() => {
  const abortController = new AbortController()
  void async function userData(){
    try{
        const docSnap = await getDoc(docRef)
        setData(docSnap.data())
      }catch(err){
        console.log(err.message)
      }
    
    }();
  
    return ()=> {
      abortController.abort();
    }
  
    
  }, []);

  
  const updateDocs = async () => {
    setError('');
    try {
      await updateDoc(docRef, {
        FoodBags: bagRef.current.value,
      });
      await updateDoc(geoDocRef, {
        FoodBags: bagRef.current.value,
      });
    } catch (err) {
      setError('Something went wrong! Please try again');
      console.log(err.message);
    }
    setMessage('Changes saved successfully!');
  };

  const handleLogout = async () => {
    setError('');
    try {
      logoutUser();
      navigate('/');
    } catch {
      setError('Failed to log out');
    }
  };

  const handleDelete = async () => {
    setError('');
    try {
      await deleteDoc(docRef);
      await deleteDoc(geoDocRef);
      await deleteAccount();
      alert('Your account was successfully deleted');
      navigate('/');
    } catch {
      setError('Failed to delete account');
    }
  };

  return (
    <Container centerContent bg={'white'} minH="76vh" mt={5}>
      <Heading mb={8} color="#114d4d">
        Dashboard
      </Heading>
      {error && <Alert status="error">{error}</Alert>}
      {message && <Alert status="success">{message}</Alert>}
      <Heading color="#114d4d" size="lg" mb={2}>
        Name{' '}
      </Heading>{' '}
      <Text mb={4} fontSize="xl" color="#114d4d">
        {data.Name}
      </Text>
      <Heading color="#114d4d" size="lg" mb={2}>
        Address{' '}
      </Heading>
      <Text mb={4} fontSize="xl" color="#114d4d">
        {data.Adress}
      </Text>
      <Heading color="#114d4d" size="lg" mb={2}>
        Email
      </Heading>{' '}
      <Text mb={4} fontSize="xl" color="#114d4d">
        {data.Email}
      </Text>
      <Heading color="#114d4d" size="lg" mb={2}>
        Available bags of food
      </Heading>{' '}
      <Text mb={4} fontSize="xl" color="#114d4d">
        {data.FoodBags}
      </Text>
      <Input
        focusBorderColor="#114d4d"
        type="number"
        mb={4}
        w="50%"
        placeholder="New amount of food bags"
        ref={bagRef}
      />
      <Flex mb={[12, 12, 8, 8]}>
        <Button
          mr={4}
          color="#114d4d"
          variant="ghost"
          borderColor="#114d4d"
          border="1px solid"
          _hover={{ bg: '#114d4d', color: 'white' }}
          onClick={updateDocs}
        >
          Save changes
        </Button>
        <Button
          color="#114d4d"
          variant="ghost"
          borderColor="#114d4d"
          border="1px solid"
          _hover={{ bg: '#114d4d', color: 'white' }}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Flex>
      <Text
        cursor="pointer"
        _hover={{ textDecor: 'underline' }}
        color="#49ada1"
        fontSize={'lg'}
        onClick={handleDelete}
      >
        Delete account
      </Text>
    </Container>
  );
};

export default Dashboard;
