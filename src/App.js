import React from 'react';
import { ChakraProvider,theme ,extendTheme, color } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import  {UseAuthContextProvider}  from "./contexts/AuthContext"
import Home from './Pages/Home'
import UserLogIn from './Pages/UserLogIn';
import BusinessLogin from './Pages/BusinessLogIn';
import UserThank from './Pages/UserThank';
import  Navbar  from './components/Navbar';
import  BusinessRegister  from './Pages/BusinessRegister';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

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
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/UserLogIn' element={<UserLogIn/>} />
            <Route exact path='/BusinessLogin' element={<BusinessLogin/>} />
            <Route path='/userThank' element={<UserThank/>} />
            <Route path='/BusinessRegister' element={<BusinessRegister/>} />
            <Route element={<PrivateRoute/>}>
              <Route path='/Dashboard' element={<Dashboard/>} />
            </Route >
            <Route path='/About' element={<About/>} />
          </Routes>
          <Footer />
        </UseAuthContextProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
