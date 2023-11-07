import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Auth from './Components/Auth/Auth';
import Signup from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';
import RoomDisplay from './Components/RoomDisplay/RoomDisplay';
import AddRoom from './Components/RoomDisplay/AddRoom';

function App() {
  const [token, setToken] = useState('');

  // Initialize the isLoggedIn state as false (user is not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(initializeToken, []);

  function initializeToken() {
    setToken(localStorage.token);
    console.log('TOKEN:', localStorage.token);

    // Set the isLoggedIn state based on the presence of the token
    setIsLoggedIn(!!localStorage.token);
  }

  function updateToken(newToken) {
    setToken(newToken);
    localStorage.token = newToken;

    // Set the isLoggedIn state to true when a token is updated (user is logged in)
    setIsLoggedIn(true);
  }

  function clearToken() {
    setToken(''); // Clear the token when logging out
    localStorage.removeItem('token'); // Remove the token from local storage

    // Set the isLoggedIn state to false when the user logs out
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} clearToken={clearToken} />
        <Auth setToken={updateToken} />
        <Routes>
          <Route path="/Signup" element={<Signup setToken={updateToken}/>} />
          <Route path="/Login" element={<Login setToken={updateToken} />} />
          <Route path="/RoomDisplay" element={<RoomDisplay loggedIn={isLoggedIn} token = {token} />} />
        </Routes>
      </BrowserRouter>
     
      <Footer />
    </div>
  );
}



export default App;