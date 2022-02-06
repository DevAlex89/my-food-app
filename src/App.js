import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import  {UseAuthContextProvider}  from "./contexts/AuthContext"
import Home from './components/Home'
import UserLogIn from './components/UserLogIn';
import BusinessLogin from './components/BusinessLogin';
import UserThank from './components/UserThank';
import  Navbar  from './components/Navbar';
import  BusinessRegister  from './components/BusinessRegister';
import Dashboard from './components/Dashboard';



function App() {
  
  return (
    <ChakraProvider theme={theme}>
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
        {/* possibly a footer */}
        </UseAuthContextProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
