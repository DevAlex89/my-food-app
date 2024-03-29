import {
  Container,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Alert,
  Link,
  Flex,
  Spinner
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth } from '../components/firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, firebaseConfig } from '../components/firebase-config';
import { collection, setDoc, doc } from 'firebase/firestore';
import * as geofirestore from 'geofirestore';




function BusinessRegister() {
  let navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [newName, setNewName] = useState('');
  const [newBags, setNewBags] = useState('');
  const [newMail, setNewMail] = useState('');
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const foodTypeRef = useRef()
  const [error, setError] = useState('')


  firebase.initializeApp(firebaseConfig);
  const businessCollectionRef = collection(db, 'shops');
  const firestore = firebase.firestore();
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geocollection = GeoFirestore.collection('shopsLocation');

  // the function to get coords and geohash from address
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  //  the function to add new business
   
  const register = async (e) => {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError('Passwords do not match')
    }
    try{
      setError('')
      const user = await createUserWithEmailAndPassword(auth, newMail, passwordRef.current.value)
      
      await setDoc(doc(businessCollectionRef, user.user.uid),({
        Adress: address,
        Name: newName,
        Email: newMail,
        FoodType: foodTypeRef.current.value,
        coordinates: new firebase.firestore.GeoPoint(coordinates.lat, coordinates.lng),
        FoodBags: newBags

      }))
      await geocollection.doc(user.user.uid).set({
        Adress: address,
        Name: newName,
        User: user.user.uid,
        FoodType: foodTypeRef.current.value,
        FoodBags: newBags,
        Email: newMail,
        coordinates: new firebase.firestore.GeoPoint(coordinates.lat, coordinates.lng)
    })

    } catch {
      setError('Failed to create an account')
    }
    navigate('/Dashboard')
    
  }
  

  return (
    <Box
      maxW="full"
      bg="white"
      overflow="hidden"
      centerContent
    >
      <Container
        maxW="container.lg"
        bg="white"
        centerContent
        mt={14}
        py={10}
        border="2px"
        borderColor="#114d4d"
      >
        <Box>
          <Heading color="#114d4d" align="center" mt={4} mb={4}>
              Sign up your business and help stop food waste
          </Heading>
          {error && <Alert status='error'>{error}</Alert>}
          <Text color="green.900" mb={8} align="center">
            We’re always looking for new partners in the fight against food waste. If you have a business with surplus food, it’s time to stop throwing it away. We can connect you with new customers and help you save costs. Register with us today!
          </Text>
        </Box>

        {/* heres the autocomplete input for location */}
        <FormControl maxW="lg" mt={8}>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <Box>
                <FormLabel color="#114d4d">Location</FormLabel>
                <Input
                  focusBorderColor="#114d4d"
                  {...getInputProps({ placeholder: 'Type your address' })}
                />
                <Box>
                  {loading ? <Spinner color='green.300' /> : null}
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? '#49ada1' : 'white',
                      cursor: 'pointer',
                    };
                    return (
                      <Box {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            )}
          </PlacesAutocomplete>
          <FormLabel color="#114d4d">Business Name</FormLabel>
          <Input
            focusBorderColor="#114d4d"
            type="text"
            placeholder="Business name"
            value={newName}
            onChange={e => {
              setNewName(e.target.value);
            }}
          />
          <FormLabel color="#114d4d"> Email</FormLabel>
          <Input
            focusBorderColor="#114d4d"
            value={newMail}
            type="mail"
            placeholder="Email"
            onChange={e => {
              setNewMail(e.target.value);
            }}
          />
          
          <FormLabel color="#114d4d"> Password</FormLabel>
          <Input
            focusBorderColor="#114d4d"
            type="password"
            placeholder="*Requires at least 6 characters"
            ref={passwordRef}
            required
          />

          <FormLabel color="#114d4d"> Confirm Password</FormLabel>
          <Input
            focusBorderColor="#114d4d"
            ref={confirmPasswordRef}
            type="password"
            required
            placeholder="Re-type password"
          />
          <FormLabel color="#114d4d"> Type of goods</FormLabel>
          <Input
            focusBorderColor="#114d4d"
            ref={foodTypeRef}
            type="text"
            required
            placeholder="e.g. baked goods, fresh produce, cooked meals, etc."
          />

          <FormLabel color="#114d4d">Available Food Bags</FormLabel>
          <Input
            focusBorderColor="#114d4d"
            value={newBags}
            type="number"
            placeholder="*Requires number"
            onChange={e => {
              setNewBags(e.target.value);
            }}
          />
          <Button
            color="#114d4d"
            variant="ghost"
            borderColor="#114d4d"
            border="1px solid"
            _hover={{ bg: '#114d4d', color: 'white' }}
            mt={4}
            type="submit"
            w="100%"
            onClick={register}
          >
            Register your goods
          </Button>
      <Flex mt={5}>
          <Box mr={3}> Already have an account? </Box> 
          <Link href="/BusinessLogin" color='#49ada1'>Log In</Link>
       </Flex>
        </FormControl>
      </Container>
    </Box>
  );
}

export default BusinessRegister;
