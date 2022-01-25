import { Container , Box , Heading , FormControl , FormLabel ,Input , Button , Text} from '@chakra-ui/react';
import React ,{useState} from 'react';
import PlacesAutocomplete ,{geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import {db} from './firebase-config';
import {collection } from 'firebase/firestore';
import geofire ,{geohashForLocation}  from 'geofire-common';



function BusinessLogIn() {
   const [address,setAddress] = useState('');
   const [coordinates, setCoordinates] = useState({lat:null , lng:null});
   const [hash,setHash] = useState('');
   const [newName,setNewName] = useState('');
   const [newBags , setNewBags] = useState(0)
   


    // the function to get coords from address
   const handleSelect = async value => {
     const results = await geocodeByAddress(value);
     const latLng = await getLatLng(results[0]);
     setAddress(value);
     setCoordinates(latLng);
     setHash(geohashForLocation([latLng.lat , latLng.lng]));
   };

  //  the function to add new business
    // const registerNewBusiness = async () => {
    //     await addDoc(businessCollectionRef , {Name:newName , FoodBags: newBags , Location: coordinates , Geohash: hash})
    // }

    


  return <Container maxW='container.xl'  centerContent mt={24}>
    <Box>
      <Heading align='center' mt={4} mb={4}>Sign up your business and save food waste</Heading>
      <Text mb={8}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates rerum nesciunt similique eveniet ipsam! Earum quaerat accusamus ab modi hic.</Text>
    </Box>


    {/* heres the autocomplete input for location */}
    <FormControl maxW='lg' mt={12}>
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
           {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>
              <Box>
                <FormLabel>Location</FormLabel>
                <Input {...getInputProps({placeholder:'Type your address'})}  />
                <Box>
                  {loading ? <Box>Loading..</Box> : null}
                  {suggestions.map((suggestion) => {
                  const style = {backgroundColor: suggestion.active ? 'green' : 'white', cursor:'pointer'}
                  return <Box {...getSuggestionItemProps(suggestion, {style})} >{suggestion.description}</Box>
                  })}
                </Box>
             </Box>
            }
         </PlacesAutocomplete>
         <FormLabel>Business Name</FormLabel>
         <Input type='text' placeholder='Brand name'  onChange={(e)=>{setNewName(e.target.value)}}/>
         <FormLabel>Available Food Bags</FormLabel>
         <Input type='number' placeholder='*requires number' onChange={(e)=>{setNewBags(e.target.value)}}/>
         <Button mt={4} type='submit' w='100%' >Register your goods</Button>
    </FormControl>
    <Box>
      <Text>{coordinates.lat}</Text>
      <Text>{coordinates.lng}</Text>
      <Text>{hash}</Text>
    </Box>
  </Container>;
}

export default BusinessLogIn;
