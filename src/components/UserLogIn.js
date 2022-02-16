import {
  Button,
  Container,
  Input,
  InputGroup,
  Box,
  Text,
  Heading,
  InputLeftElement,
  Grid,
  GridItem,
  Alert,
} from '@chakra-ui/react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { firebaseConfig } from './firebase-config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as geofirestore from 'geofirestore';
import { signInWithGmail } from './firebase-config';


const UserLogIn = () => {
  let navigate = useNavigate();
  const [userPosition, setUserPosition] = useState({ lat: null, lng: null });
  const [shopList, setShopList] = useState([]);
  const [address, setAddress] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('')

  

  // initialize geofirestore
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geocollection = GeoFirestore.collection('shopsLocation');


  // reverse geocode
  const reverseGeocode = (lat,lng) => {
    let key='AIzaSyCbyL8vkXfIjhg-ADKvz1QFN7pcdk2pwIg'
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`)
    .then(response => response.json())
    .then(data =>{
      setAddress(data.results[0].formatted_address)
    })
  }

  // get user coordinators using navigator
  const trackUser = async () => {
    try{
    navigator.geolocation.getCurrentPosition(function (position) {
      setAddress(position.address)
      setUserPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
       reverseGeocode(position.coords.latitude, position.coords.longitude)
    });
   }catch(err){
     console.log(err.message)
     setMessage('Could not retrieve your coordinates. Please try typing your address')
   }

  };

  // autocomplete address for user
  const handleSelect = async value => {
    setMessage('')
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setUserPosition({ lat: latLng.lat, lng: latLng.lng });
  };

  // query for the shops based on the user location

  const getNearShops = async () => {
    setShopList([])
    setMessage('')
    try{
         const query =  geocollection.near({
          center: new firebase.firestore.GeoPoint(
            userPosition.lat,
            userPosition.lng
            ),
            radius: 5,
          });
          
         await query.get().then(value => {
            
            for (const doc of value.docs) {
              setShopList(oldArray => [...oldArray,doc.data()]);
            }
            setUserPosition({ lat: null, lng: null });
            if ( value.docs.length === 0) {
              setMessage('No shops found near your location')
            }
          
        });
    }catch{
      setMessage('No shops found near your location')
    }
  };

  // Sign in user
  const signInUser = async () => {
    try {
      const userData = await signInWithGmail();
      setUserEmail(userData.user.email);
      console.log(userData.user.email);

      navigate('/UserThank');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box bg="white" maxW="full" minH="72vh" centerContent>
      <Container maxW="container.lg" mt={12} centerContent>
        <Heading color="#114d4d" mb={4} align="center">
          Find fine food near you
        </Heading>
        <Container>
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
              <Box centerContent>
                <Container
                  display="flex"
                  align="center"
                  justifyContent="center"
                  maxW="container.lg"
                >
                  <InputGroup>
                    <InputLeftElement
                      _hover={{ bg: '#49ada1', color: '#fcf8f2' }}
                      bgColor="#114d4d"
                      cursor="pointer"
                      onClick={trackUser}
                      children={<HiOutlineLocationMarker color="#fcf8f2" />}
                    />
                    <Input
                      focusBorderColor="#114d4d"
                      {...getInputProps({
                        placeholder: 'Type your address...',
                      })}
                    />
                  </InputGroup>
                  <Button
                    onClick={getNearShops}
                    variant="ghost"
                    borderColor="#114d4d"
                    bgColor="#114d4d"
                    color="white"
                    border="1px solid"
                    _hover={{ bg: '#49ada1', color: '#fcf8f2' }}
                  >
                    {<BsSearch />}
                  </Button>
                </Container>
                <Box>
                  {loading ? <Box>Loading..</Box> : null}
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
        </Container>

        {shopList.length ? (
          <Container bg="white" maxW="fit-content" mt={12}>
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
              {shopList.map((element, i) => (
                <GridItem mt={4} border="1px solid" p={5} w="100%">
                  <Heading mb={3} size="xl" color="#114d4d" key={element.id}>
                    {element.Name}
                  </Heading>
                  <Text fontSize="xl" key={element.id}>
                    {element.Adress}
                  </Text>
                  <Text fontSize="xl" key={element.id}>
                    Type:
                    {element.FoodType}
                  </Text>
                  <Text fontSize="xl" color="#49ada1" mt={3} key={element.id}>
                    Available Bags of Goods :{element.FoodBags}
                  </Text>
                  <Button
                    mt="4"
                    color="#114d4d"
                    variant="ghost"
                    borderColor="#114d4d"
                    border="1px solid"
                    _hover={{ bg: '#114d4d', color: 'white' }}
                    onClick={signInUser}
                  >
                    Grab the goods!
                  </Button>
                </GridItem>
              ))}
            </Grid>
          </Container>
        ) : (
          <Text mt={5} color="#49ada1" align="center">
            Click the left navigator button to automatically enter your location
            via GPS, or type in your address and press the right search button
            to reveal the Fritternot partners nearest to you!
          </Text>
        )}
        {message && <Alert status='warning' align='center'>{message}</Alert>}
      </Container>
    </Box>
  );
};

export default UserLogIn;
