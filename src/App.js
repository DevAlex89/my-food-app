import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import UserLogIn from './components/UserLogIn';
import BusinessLogIn from './components/BusinessLogIn';



function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='/UserLogIn' element={<UserLogIn/>} />
          <Route path='/BusinessLogIn' element={<BusinessLogIn/>} />
        </Routes>
      {/* possibly a footer */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
