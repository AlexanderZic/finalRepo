import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Navbar({ token, clearToken }) {
  const navigate = useNavigate();

  function handleLogout() {
    clearToken();
    console.log('Logout successful');
    navigate('/login'); // Redirect to the /login page after logout
  }

  return (
    <nav>
      <header className="navbar">
        <p className="text-element">Not Discord</p>
        {token ? (
          <Button onClick={handleLogout} style={{ margin: '3px 10px' }}>
            Log Out
          </Button>
        ) : null}
      </header>
    </nav>
  );
}

export default Navbar;