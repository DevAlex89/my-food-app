import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/Home'
import UserLogIn from './components/UserLogIn';
import BusinessLogIn from './components/BusinessLogIn';
import UserThank from './components/UserThank';



function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/UserLogIn' element={<UserLogIn/>} />
          <Route path='/BusinessLogIn' element={<BusinessLogIn/>} />
          <Route path='/userThank' element={<UserThank/>} />
        </Routes>
      {/* possibly a footer */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
