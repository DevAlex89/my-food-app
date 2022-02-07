import { Alert, Button, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from './firebase-config';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";






const Dashboard = () => {
    let navigate = useNavigate()
    const { currentUser, logoutUser} = useAuthContext()
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
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
            setError("No such document!");
          }
    }

    const updateDocs = async () => {
        setError('')
        try{
        const docRef = doc(db, "shops", currentUser.uid);
        await updateDoc(docRef, {
            FoodBags: bagRef.current.value
        })
        const geoDocRef= doc(db, 'shopsLocation', currentUser.uid)
        await updateDoc(geoDocRef, {
            FoodBags: bagRef.current.value
        })
        }catch(err){
            setError('Something went wrong! Please try again')
            console.log(err.message)
        }
        setMessage('Changes saved successfully!')
   
    }

    const handleLogout = async () => {
        setError('')
        try{
            logoutUser()
            navigate('/')
        }catch{
            
            setError('Failed to log out')
        }
    }


    return(
        <Container centerContent>
            <Heading mb={8}  color="#114d4d">Dashboard</Heading>
            {error && <Alert status="error">{error}</Alert>}
            {message && <Alert status="success">{message}</Alert>}
            <Heading color="#114d4d" size='lg' mb={2}>Name </Heading> <Text mb={4} fontSize='xl' color="#114d4d">{data.Name}</Text>
            <Heading color="#114d4d" size='lg' mb={2}>Address </Heading><Text mb={4} fontSize='xl' color="#114d4d">{data.Adress}</Text>
            <Heading color="#114d4d" size='lg' mb={2}>Email</Heading> <Text mb={4} fontSize='xl' color="#114d4d">{data.Email}</Text>
            <Heading color="#114d4d" size='lg' mb={2}>Available bags of food</Heading> <Text mb={4} fontSize='xl' color="#114d4d">{data.FoodBags}</Text>
            <Input focusBorderColor="#114d4d" type='number' mb={4} w='50%' placeholder="New amount of food bags" ref={bagRef}/>
            <Flex>
                <Button 
                mr={4} 
                color="#114d4d"
                variant="ghost"
                borderColor="#114d4d"
                border="1px solid"
                _hover={{ bg: '#114d4d', color: 'white' }}
                onClick={updateDocs}>Save changes</Button>
                <Button 
                color="#114d4d"
                variant="ghost"
                borderColor="#114d4d"
                border="1px solid"
                _hover={{ bg: '#114d4d', color: 'white' }}
                onClick={handleLogout}>Log Out</Button>
            </Flex>
        </Container>
    )




}

export default Dashboard;