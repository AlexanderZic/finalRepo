import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';



import Signup from './Components/Auth/Signup/Signup';
import {useEffect, useState} from 'react'

import Auth from './Components/Auth/Auth';

function App() {
const [token, setToken] = useState ('')

useEffect (initializeToken, [])


function initializeToken () {
  setToken (localStorage.token)
  console.log(localStorage.tokken)
}

function updateToken (newToken){
setToken ('')
localStorage.tokken = newToken}

  function clearToken () {


    setToken ('');
    localStorage.removeItem.token;
    
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Auth />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;