import './App.css';
import "react-toastify/dist/ReactToastify.css"
import React from 'react';

//import SalonProfile from './screens/SalonProfile.js';
import HomeScreen from './screens/HomeScreen';
import SalonProfile from './screens/SalonProfile';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import SalonMenu from './components/SalonMenu';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/not-found' element={<NotFound/>}/>
        <Route exact path='/' element={<SalonMenu/>}/>
        <Route path="*" element= {<Navigate to="/" replace />} />
      </Routes>

      </BrowserRouter>
    </div>
    //s<div className="App">hi</div>
  );
}

 
 export default App;
 