import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Auth from './Components/Auth/Auth';

function App() {
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