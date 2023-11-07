import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/user/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const results = await response.json();
      console.log(response.status);
      props.setToken(results.token);
      if (response.status === 200) {
        console.log("Login successful");
        console.log("Token:", results.token);
        props.setToken(results.token);
        navigate("/RoomDisplay"); // Navigate to rooms
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <div className="switch-link">
          <Button color="link" onClick={() => navigate("/signup")}>
            Switch to Signup
          </Button>
        </div>
        <div className="button-container">
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
