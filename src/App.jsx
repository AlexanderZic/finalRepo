import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';import {useEffect, useState} from 'react'
import './App.css';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Auth from './Components/Auth/Auth';
import Login from './Components/Auth/Login/Login';

function App() {
const [token, setToken] = useState ('')

useEffect (initializeToken, [])

function initializeToken () {
  setToken (localStorage.token)
  console.log(localStorage.token)
}

function updateToken (newToken){
setToken (newToken)
localStorage.token = newToken}
    
function clearToken() {
setToken(''); // Clear the token when logging out
localStorage.removeItem('token'); // Remove the token from local storage
}

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} clearToken={clearToken} />
        <Auth setToken={updateToken}/>
        <Routes>
        <Route path="/Login" element={<Login setToken={updateToken} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;