import {  Button, Container, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from './firebase-config';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";






const Dashboard = () => {
    let navigate = useNavigate()
    const { currentUser, logoutUser} = useAuthContext()
    const [data, setData] = useState({})
    const bagRef = useRef()


   

    useEffect(()=>{
        if (currentUser){
        userData()
        }else{
            navigate('/BusinessLogin')
        }    
    }, [])
    
    
    const userData = async () => {
        const docRef = doc(db, "shops", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setData( docSnap.data())
          } else {
            console.log("No such document!");
          }
    }

    const updateDocs = async () => {
        const docRef = doc(db, "shops", currentUser.uid);
        await updateDoc(docRef, {
            FoodBags: bagRef.current.value
        })
        const geoDocRef= doc(db, 'shopsLocation', currentUser.uid)
        await updateDoc(geoDocRef, {
            FoodBags: bagRef.current.value
        })
        alert('Changes saved successfully!')
   
    }

    const handleLogout = async () => {
        try{
            logoutUser()
            navigate('/')
        }catch(err){
            alert(err.message)
        }
    }


    return(
        <Container>
            <Heading>Dashboard</Heading>
            <Heading>Name : {data.Name}</Heading>
            <Heading>Address : {data.Adress}</Heading>
            <Heading>Email : {data.Email}</Heading>
            <Heading>Available bags of food : {data.FoodBags}</Heading>
            <Input type='number' placeholder="New amount of food bags" ref={bagRef}/>
            <Button onClick={updateDocs}>Save changes</Button>
            <Button onClick={handleLogout}>Log Out</Button>
        </Container>
    )




}

export default Dashboard;