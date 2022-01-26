import { Container , Box , Heading , FormControl , FormLabel ,Input , Button , Text} from '@chakra-ui/react';
import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PlacesAutocomplete ,{geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import {geohashForLocation}  from 'geofire-common';
import {db} from './firebase-config';
import {collection , addDoc ,  GeoPoint} from 'firebase/firestore';









function BusinessLogIn() {
  let navigate = useNavigate();
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
      await addDoc(businessCollectionRef , {Adress:address , Name:newName , FoodBags: newBags ,Email: newMail, location: new GeoPoint(coordinates.lat, coordinates.lng), geohash: hash})
        
        setAddress('')
        setNewBags('')
        setNewMail('')
        setNewName('')
        navigate('/')
    }

 
    


  return <Box maxW='full' bg='#fcf8f2' height='100vh' overflow='hidden' centerContent>
    <Container maxW='container.lg' bg='#fcf8f2'  centerContent mt={14} py={10} border='2px' borderColor='#114d4d'>
    <Box>
      <Heading color="#114d4d" align='center' mt={4} mb={4}>Sign up your business and save food waste</Heading>
      <Text color='green.900' mb={8} align='center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates rerum nesciunt similique eveniet ipsam! Earum quaerat accusamus ab modi hic.</Text>
    </Box>


    {/* heres the autocomplete input for location */}
    <FormControl maxW='lg' mt={8} >
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
           {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>
              <Box>
                <FormLabel color='#114d4d' >Location</FormLabel>
                <Input focusBorderColor='#114d4d' {...getInputProps({placeholder:'Type your address'})}  />
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
         <FormLabel color="#114d4d">Business Name</FormLabel>
         <Input focusBorderColor='#114d4d' type='text' placeholder='Brand name' value={newName}  onChange={(e)=>{setNewName(e.target.value)}}/>
         <FormLabel color='#114d4d'> Email</FormLabel>
         <Input focusBorderColor='#114d4d' value={newMail} type='mail' placeholder='email' onChange={(e)=>{setNewMail(e.target.value)}}/>
         <FormLabel color="#114d4d">Available Food Bags</FormLabel>
         <Input focusBorderColor='#114d4d' value={newBags} type='number' placeholder='*requires number' onChange={(e)=>{setNewBags(e.target.value)}}/>
         <Button color="#114d4d" variant='ghost' borderColor='#114d4d' border='1px solid' _hover={{bg: '#114d4d', color:'white'}} mt={4} type='submit' w='100%' onClick={registerNewBusiness}>Register your goods</Button>
    </FormControl>
  </Container>
  </Box>
}

export default BusinessLogIn;
