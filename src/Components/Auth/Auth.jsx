import React, { useState } from 'react';
import Signup from './Signup/Signup';
import Login from './Login/Login';

function Auth(props) {
  const [isSignup, setIsSignup] = useState(true);

  const toggleView = () => {
    setIsSignup(!isSignup);
  };

  const switchToLogin = () => {
    setIsSignup(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={isSignup ? 'content hidden' : 'content'}>
        {isSignup ? (
          <Signup setToken={props.setToken} switchToLogin={switchToLogin} />
        ) : (
          <Login setToken={props.setToken} switchToSignup={toggleView} />
        )}
      </div>
      <div className={isSignup ? 'content' : 'content hidden'}>
        {isSignup ? (
          <Signup setToken={props.setToken} switchToLogin={switchToLogin} />
        ) : (
          <Login setToken={props.setToken} switchToSignup={toggleView} />
        )}
      </div>
    </div>
  );
}

export default Auth;