import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


const Navbar = ({token, clearToken}) =>
 {
  return (

    <nav>
    <header className="navbar">
     <p className= "text-element">Not Discord</p> 
    </header>
    <button onClick={clearToken} style={{ margin: '3px 10px' }} to="/">Log Out</button>
    </nav>
    
  );
}

export default Navbar;