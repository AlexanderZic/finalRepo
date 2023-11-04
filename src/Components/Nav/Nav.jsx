import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Navbar = ({ token, clearToken }) => {
  const isAuthenticated = token !== '';

  function handleLogout() {
    clearToken();
    console.log('Logout successful');
  }

  return (
    <nav>
      <header className="navbar">
        <p className="text-element">Not Discord</p> {isAuthenticated ? (
        <Button onClick={handleLogout} style={{ margin: '3px 10px' }}>
          Log Out
        </Button>
      ) : null}
      </header>
     
    </nav>
  );
}

export default Navbar;