import { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  

  const signupRoute = 'http://127.0.0.1:4000/user/signup';

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

      if (response.status === 200){
      navigate('/RoomDisplay');
    } else {
      // Signup failed, handle the error (e.g., display an error message)
      console.log('Signup failed');
    }
  } catch (error) {
    console.log(error);
  }
 }
  return (
    <div className="square-container">
      <Form onSubmit={displayInputFields}>
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
        <div className="switch-link">
          <Button color="link" onClick={props.switchToLogin} >Switch to Login</Button>
          </div>
         
        <div className="button-container">
        <Button  type="submit">Signup</Button>    
        </div>
        </Form>
     </div>
  );
}


export default Signup;