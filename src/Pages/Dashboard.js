import {
  Alert,
  Box,
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
import Popup from '../components/Popup';

const Dashboard = () => {
  let navigate = useNavigate();
  const { currentUser, logoutUser, deleteAccount } = useAuthContext();
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const bagRef = useRef();
  const [bagUpdate, setBagUpdate] = useState()
  
  
  //the database refs
  const docRef = doc(db, 'shops', currentUser.uid);
  const geoDocRef = doc(db, 'shopsLocation', currentUser.uid);


  const updateDocs = async () => {
    setError('');
    try {
      await updateDoc(docRef, {
        FoodBags: bagUpdate,
      });
      await updateDoc(geoDocRef, {
        FoodBags: bagUpdate,
      });
    } catch (err) {
      console.log(err.message);
      return setError('Something went wrong! Please try again');
    }
    setMessage('Changes saved successfully!');
  };

useEffect(() => {
  const abortController = new AbortController()
  void async function userData(){
    try{
        const docSnap = await getDoc(docRef)
        setData(docSnap.data())
        setBagUpdate(data.FoodBags)
      }catch(err){
        console.log(err.message)
      }
    
    }();
  
    return ()=> {
      abortController.abort();
    }
  
    
  }, []);

  

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
    <Container centerContent bg={'white'} minH="80vh" mt={5}>
      <Heading mb={8} color="#114d4d">
        Dashboard
      </Heading>
      {error && <Alert status="error">{error}</Alert>}
      {message && <Alert status="success">{message}</Alert>}
      <Container maxW={'container.xl'}  >
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
        {/* <Text mb={4} fontSize="xl" color="#114d4d">
          {data.FoodBags}
        </Text> */}
        <Input
          focusBorderColor="#114d4d"
          type="number"
          mb={4}
          w={['100%', '100%','50%',"50%"]}
          placeholder={data.FoodBags}
          value={bagUpdate}
          onChange={(e)=>setBagUpdate(e.target.value)}
          // ref={bagRef}
        />
      <Flex mb={[12, 12, 8, 8]} justify='center' align={['flex-start', 'flex-start', 'center', 'center']} flexDir={['column','column','row', 'row']} >
       <Container w={'full'}>
          <Flex flexDir={['column','column','row', 'row']} >
            <Button
               mt={2}
              color="#114d4d"
              variant="ghost"
              w={'full'}
              borderColor="#114d4d"
              border="1px solid"
              _hover={{ bg: '#114d4d', color: 'white' }}
              onClick={updateDocs}
              >
              Save changes
            </Button>
            <Container  w='full' mt={2} >
             <Popup text='Log out' header='Are you sure you want to log out?' action={()=>handleLogout()} />
            </Container>
          </Flex >
        </Container>
        <Container mt={2}>
          <Popup text='Delete Account' header='Are you sure you want to delete your account?' body='This action is irreversible' action={()=>handleDelete()} />
        </Container>
      </Flex>
      </Container>
    </Container>
  );
};

export default Dashboard;
