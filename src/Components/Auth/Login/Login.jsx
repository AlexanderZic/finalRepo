import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupRoute = 'http://127.0.0.1:4000/user/login';

  async function displayInputFields(e) {
    e.preventDefault();
    console.log('testing this function');
    console.log(email);
    console.log(password);

    try {
      let response = await fetch(signupRoute, {
        headers: new Headers({
          'content-type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify({
          mail: email,
          pass: password
        })
      });

      let results = await response.json();
      console.log(results);
      props.setToken(results.token);
      if (response.status === 200);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="square-container">
      <Form>
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
          <a href="#" onClick={props.switchToSignup}>Switch to Signup</a>
          </div>
      <div className="button-container"> 
        <Button onClick={displayInputFields}>Login</Button>
      </div>
    </div>
  );
}

export default Login;