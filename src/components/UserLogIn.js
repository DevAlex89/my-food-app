import { Button, Container , Input, InputGroup, Box , Text , Heading, InputLeftElement} from '@chakra-ui/react';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {firebaseConfig} from './firebase-config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as geofirestore from 'geofirestore';

const UserLogIn = () => {
  const [userPosition , setUserPosition] = useState({ lat: null, lng: null });
  const [shopList , setShopList] = useState([])
  const [address, setAddress] = useState('');
  firebase.initializeApp(firebaseConfig);
  
  const firestore = firebase.firestore();
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geocollection = GeoFirestore.collection('shopsLocation');



// get user coordinators using navigator
  const trackUser = ()=> {
     navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords);
      setUserPosition({lat:position.coords.latitude , lng: position.coords.longitude})
      
    });
  }

  // autocomplete address for user
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setUserPosition({lat:latLng.lat , lng:latLng.lng});
  };



  // query for the shops based on the user location

  const getNearShops =  () =>{
    const query = geocollection.near({ center: new firebase.firestore.GeoPoint(userPosition.lat , userPosition.lng), radius: 1000 });
      query.get().then((value) => {
      // All GeoDocument returned by GeoQuery, like the GeoDocument added above
      //  console.log(value.docs)
       for( const doc of value.docs){
        //  console.log(doc.data())
          shopList.push(doc.data())
         }
       setUserPosition({ lat: null, lng: null })
    });   
  };


 
  return (
    <Box overflow='hidden' bg='#fcf8f2' maxW='full' minH='100vh' centerContent>
      <Container maxW='container.lg'  mt={12} centerContent>
        <Heading color="#114d4d" mb={4}>Find Goodies Near You</Heading>
          <Container >
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
                <Container display='flex' align='center' justifyContent='center' maxW='container.lg'>
                  <InputGroup>
                  <InputLeftElement _hover={{ bg: '#49ada1', color: '#fcf8f2' }} bgColor='#114d4d' cursor='pointer' onClick={trackUser} children={<HiOutlineLocationMarker color='#fcf8f2'  />}/>
                  <Input
                    focusBorderColor="#114d4d"
                    {...getInputProps({ placeholder: 'Type your address...' })}
                    />
                    </InputGroup>
                  <Button 
                  onClick={getNearShops} 
                  variant="ghost"
                  borderColor="#114d4d"
                  bgColor='#114d4d'
                  color="white"
                  border="1px solid"
                  _hover={{ bg: '#49ada1', color: '#fcf8f2' }}>{<BsSearch />}</Button>
                </Container>
                <Box >
                  {loading ? <Box>Loading..</Box> : null}
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? '#49ada1' : '#fcf8f2',
                      cursor: 'pointer',
                    };
                    return (
                      <Box  {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            )}
          </PlacesAutocomplete>
           </Container>
            
          { shopList.length ? (
           <Container bg='ThreeDShadow'>
         
              {shopList.map((element ,i)=>( 
                <Box mt={4}> 
                  <Text key={element.id}>{element.Name}</Text>
                  <Text key={element.id}>{element.Adress}</Text>
                  <Text key={element.id}>Available Bags of Goods :{element.FoodBags}</Text>
              </Box>
              ))}
        
           </Container>
           ) : (
             <Text mt={5} color='#49ada1'>Click the search button to see the shops near you</Text>

           ) }
        
      </Container>
    </Box>
  )
};

export default UserLogIn;
