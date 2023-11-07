import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Auth from './Components/Auth/Auth';
import Signup from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';
import RoomDisplay from './Components/RoomDisplay/RoomDisplay';
import AddRoom from './Components/RoomDisplay/AddRoom';
import RoomList from './Components/RoomList/RoomList';
import AllRooms from './Components/RoomDisplay/AllRooms';

function App() {
  const [token, setToken] = useState('');

  // Initialize the isLoggedIn state as false (user is not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(initializeToken, []);

  function initializeToken() {
    const storedToken = localStorage.token;
    console.log('TOKEN:', storedToken);
  
    if (storedToken) {
      setToken(storedToken);
      // Set the isLoggedIn state to true when a token is loaded from local storage
      setIsLoggedIn(true);
    }
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

    

        {/* <Auth setToken={updateToken} /> */}
        <Routes>
         <Route path="/" element={ <Signup setToken={updateToken} />} />
          <Route path="/Signup" element={<Signup setToken={updateToken} />} />
           <Route path="/Login" element={<Login setToken={updateToken} />} />
           <Route path="/RoomDisplay" element={<RoomDisplay loggedIn={isLoggedIn} token={token} />} />
          </Routes>
develop
      </BrowserRouter>
     
      <Footer />
    </div>
  );
}



export default App;