import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const signupRoute = 'http://127.0.0.1:4000/user/signup';

  async function displayInputFields(e) {
    e.preventDefault();
    console.log('testing this function');
    console.log(first, last);
    console.log(email);
    console.log(password);

    try {
      let response = await fetch(signupRoute, {
        headers: new Headers({
          'content-type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify({
          first: first,
          last: last,
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
            id="exampleFirst"
            name="first"
            placeholder="First Name"
            type="text"
            onChange={e => setFirst(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="exampleLast"
            name="last"
            placeholder="Last Name"
            type="text"
            onChange={e => setLast(e.target.value)}
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
        <div className="button-container">
        <Button onClick={displayInputFields}>Signup</Button>
        </div>
    </div>
  );
}

export default Signup;