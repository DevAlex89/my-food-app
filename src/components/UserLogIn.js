import { Button, Container , Input, position } from '@chakra-ui/react';
import React, { useState } from 'react';
import {db ,firebaseConfig} from './firebase-config';
import { collection  } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as geofirestore from 'geofirestore';

const UserLogIn = () => {
  const [userPosition , setUserPosition] = useState({ lat: null, lng: null });
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

  const getNearShops = async () =>{
    const query = geocollection.near({ center: new firebase.firestore.GeoPoint(userPosition.lat , userPosition.lng), radius: 1000 });
    await query.get().then((value) => {
      // All GeoDocument returned by GeoQuery, like the GeoDocument added above
      console.log(value.docs.Name);
    });
    
  }


 
  return (
      <Container>
        <h2>location</h2>
        <Input type="text" />
        <Button onClick={trackUser}>Go</Button>
        <Button onClick={getNearShops}>Search</Button>
        
      </Container>
  )
};

export default UserLogIn;
