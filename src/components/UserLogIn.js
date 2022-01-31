import { Button, Container , Input, Box , Text} from '@chakra-ui/react';
import React, { useState } from 'react';
import {db ,firebaseConfig} from './firebase-config';
import { collection  } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as geofirestore from 'geofirestore';

const UserLogIn = () => {
  const [userPosition , setUserPosition] = useState({ lat: null, lng: null });
  const [shopList , setShopList] = useState([])
  firebase.initializeApp(firebaseConfig);
  const businessCollectionRef = collection(db, 'shops');
  const firestore = firebase.firestore();
  const GeoFirestore = geofirestore.initializeApp(firestore);
  const geocollection = GeoFirestore.collection('shopsLocation');


  const trackUser = ()=> {
     navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords);
      setUserPosition({lat:position.coords.latitude , lng: position.coords.longitude})
      
    });
  }



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
      <Container>
        <h2>location</h2>
        <Input type="text" />
        <Button mr={4} onClick={trackUser}>Go</Button>
        <Button onClick={getNearShops}>Search</Button>
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
             <Box>Click the search button to see the shops near you</Box>

           ) }
        
      </Container>
  )
};

export default UserLogIn;
