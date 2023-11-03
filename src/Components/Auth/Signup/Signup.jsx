import { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

function Signup(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  

  const signupRoute = 'http://127.0.0.1:4000/user/signup';

  return (
    <div className="square-container">
      <Form>
        <FormGroup>
          <Input
            id="exampleUserName"
            name="userName"
            placeholder="User Name"
            type="text"
            onChange={e => setUserName(e.target.value)}
          />
        </FormGroup>
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
          <a href="#" onClick={props.switchToLogin} >Switch to Login</a>
          </div>
         
        <div className="button-container">
        <Button onClick={displayInputFields}>Signup</Button>
        </div>
    </div>
  );

 async function displayInputFields(e) {
    e.preventDefault();
    console.log('testing this function');
    console.log(userName);
    console.log(email);
    console.log(password);

    try {
      let response = await fetch(signupRoute, {
        headers: new Headers({
          'content-type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify({
         userName: userName,
          email: email,
          password: password
        })
      });

      let results = await response.json();
      console.log(results);
      props.setToken(results.token);
      if (response.status === 200);
      navigate('/Login')
    } catch (error) {
      console.log(error);
    }
  }
}

function DisplayUser(props) {
  return (
    <div>
      <h2>Username: { props.username }</h2>
      <h2>Password: { props.password }</h2>
    </div>
  )
}

export default Signup;