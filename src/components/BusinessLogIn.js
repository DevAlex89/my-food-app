import { Container , Box , Heading , FormControl , FormLabel ,Input , Button , Text} from '@chakra-ui/react';
import React ,{useState} from 'react';
import PlacesAutocomplete ,{geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import {geohashForLocation}  from 'geofire-common';
import {db} from './firebase-config';
import {collection , addDoc } from 'firebase/firestore';



function BusinessLogIn() {
   const [address,setAddress] = useState('');
   const [coordinates, setCoordinates] = useState({lat:null , lng:null});
   const [hash,setHash] = useState('');
   const [newName,setNewName] = useState('');
   const [newBags , setNewBags] = useState('');
   const [newMail , setNewMail] = useState('')
   const businessCollectionRef = collection(db , 'Businesses')
   


    // the function to get coords and geohash from address 
   const handleSelect = async value => {
     const results = await geocodeByAddress(value);
     const latLng = await getLatLng(results[0]);
     setAddress(value);
     setCoordinates(latLng);
     setHash(geohashForLocation([latLng.lat , latLng.lng]));
   };

  //  the function to add new business
    const registerNewBusiness = async () => {
        await addDoc(businessCollectionRef , {Name:newName , FoodBags: newBags ,Email: newMail, Location: coordinates , Geohash: hash})
        setAddress('')
        setNewBags('')
        setNewMail('')
        setNewName('')
    }

    


  return <Box maxW='full' bg='green.500' height='100vh' overflow='hidden' >
    <Container maxW='container.lg' bg='orange.50'  centerContent mt={20} py={10}>
    <Box>
      <Heading color="green.600" align='center' mt={4} mb={4}>Sign up your business and save food waste</Heading>
      <Text mb={8} align='center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates rerum nesciunt similique eveniet ipsam! Earum quaerat accusamus ab modi hic.</Text>
    </Box>


    {/* heres the autocomplete input for location */}
    <FormControl maxW='lg' mt={8}>
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
           {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>
              <Box>
                <FormLabel color='green.600' >Location</FormLabel>
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
         <FormLabel color="green.600">Business Name</FormLabel>
         <Input type='text' placeholder='Brand name' value={newName}  onChange={(e)=>{setNewName(e.target.value)}}/>
         <FormLabel color='green.600'> Email</FormLabel>
         <Input value={newMail} type='mail' placeholder='email' onChange={(e)=>{setNewMail(e.target.value)}}/>
         <FormLabel color="green.600">Available Food Bags</FormLabel>
         <Input value={newBags} type='number' placeholder='*requires number' onChange={(e)=>{setNewBags(e.target.value)}}/>
         <Button color="green.600" mt={4} type='submit' w='100%' onClick={registerNewBusiness}>Register your goods</Button>
    </FormControl>
  </Container>
  </Box>
}

export default BusinessLogIn;
