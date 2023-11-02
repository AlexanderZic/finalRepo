import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import {useEffect, useState} from 'react'
import Auth from './Components/Auth/Auth';

function App() {
const [token, setToken] = useState ('')

useEffect (initializeToken, [])

function initializeToken () {
  setToken (localStorage.token)
  console.log(localStorage.token)
}

function updateToken (newToken){
setToken (newToken)
localStorage.tokken = newToken}
    

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token}/>
        <Routes>
          <Route 
            path="/Auth"
            element={<Auth setToken={updateToken}/>}/>
        </Routes>
      </BrowserRouter>
      {token ? 'Token is Updated' : null}
      <Footer />
    </div>
  );
}

export default App;