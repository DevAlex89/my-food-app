import { Button, Container , Input } from '@chakra-ui/react';
import {
  geohashForLocation,
  geohashQueryBounds,
  distanceBetween
} from "geofire-common";
import React, { useState } from 'react';
import {db} from './firebase-config';
import { collection } from 'firebase/firestore';

const UserLogIn = () => {
  var center = [51.5074, 0.1278];
  const radiusInKm = 10;
  const [userPosition , setUserPosition] = useState([]);
  const businessCollectionRef = collection(db , 'Businesses')
  const [hash , setHash] = useState('')

  const trackUser = ()=> {
     navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords);
      setUserPosition(position)
      setHash( geohashForLocation([position.coords.latitude ,position.coords.longitude ]))
      console.log(hash)
    });
  }

  // var tasks = [];
  // var geohashesToQuery = geohashQueryBounds(center, radiusInKm * 1000);
  // var tasks = geohashesToQuery.map(function(geohashes) {
  //   return db
  //     .collection("Businesses")
  //     .orderBy("geohash")
  //     .startAt(geohashes[0])
  //     .endAt(geohashes[1])
  //     .get();
  // });
//   const promises = [];
//   for (const b of bounds) {
//   const q = db.collection('Businesses')
//     .orderBy('geohash')
//     .startAt(b[0])
//     .endAt(b[1]);

//   promises.push(q.get());
// }
  return (
      <Container>
        <h2>location</h2>
        <Input type="text" />
        <Button onClick={trackUser}>Go</Button>
      </Container>
  )
};

export default UserLogIn;
