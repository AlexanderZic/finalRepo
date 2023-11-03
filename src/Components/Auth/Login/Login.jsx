import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Login(setToken) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    
    const response = await fetch('http://localhost:4000/user/login', {
      headers: new Headers({
        'content-type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    });

       const results = await response.json();
      console.log(response.status);
      setToken(results.token);
      if (response.status === 200);
      navigate()//Set this to homepage?
  }

  return (
    <div className="square-container">
      <Form onSubmit={loginUser}>
        <FormGroup>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
      </Form>
      <div className="switch-link">
          <a href="#" onClick={setToken.switchToSignup}>Switch to Signup</a>
          </div>
      <div className="button-container"> 
        <Button type="submit">Login</Button>
      </div>
    </div>
  );
}

export default Login;