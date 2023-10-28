import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Signup(props) {
  const navigate = useNavigate();
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
      if (response.status === 200) navigate('/about');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleFirst">
            First
          </Label>
          <Input
            id="exampleFirst"
            name="first"
            placeholder="First"
            type="text"
            onChange={e => setFirst(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLast">
            First
          </Label>
          <Input
            id="exampleLast"
            name="last"
            placeholder="Last"
            type="text"
            onChange={e => setLast(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button onClick={displayInputFields}>Submit</Button>
      </Form>
    </div>
  );
}

export default Signup;