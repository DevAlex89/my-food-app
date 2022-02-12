import React from 'react';
import { ChakraProvider,theme ,extendTheme, color } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import  {UseAuthContextProvider}  from "./contexts/AuthContext"
import Home from './components/Home'
import UserLogIn from './components/UserLogIn';
import BusinessLogin from './components/BusinessLogIn';
import UserThank from './components/UserThank';
import  Navbar  from './components/Navbar';
import  BusinessRegister  from './components/BusinessRegister';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
} 

const customTheme = extendTheme({ config })



function App() {
  
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <UseAuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/UserLogIn' element={<UserLogIn/>} />
            <Route path='/BusinessLogin' element={<BusinessLogin/>} />
            <Route path='/userThank' element={<UserThank/>} />
            <Route path='/BusinessRegister' element={<BusinessRegister/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
          </Routes>
          <Footer />
        </UseAuthContextProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
