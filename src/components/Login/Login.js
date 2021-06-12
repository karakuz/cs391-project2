import Axios from "axios";
import React from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import '../css/login.css';


const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [emailErr, setEmailErr] = React.useState("");
  const [passwordErr, setPasswordErr] = React.useState("");

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const existence = await Axios.get(`http://localhost:5000/users?email=${email}`);
    if(existence.data.length === 0){
      setEmailErr("User Does not Exists");
      return;
    }
    if(existence.data[0].password !== password){
      setPasswordErr("Password is not correct");
      return;
    }
    else{
      (rememberMe) ? localStorage.setItem("userID", existence.data[0].id) : sessionStorage.setItem("userID", existence.data[0].id);
      alert("Login Successful");
      window.location.href = "/";
    }
  }

  return (
    <div className="formDiv">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" name="email" placeholder="Email" value={email} onChange={ e => {setEmail(e.target.value); setEmailErr("")} } required />
              <small>{emailErr ? emailErr: ""}</small>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => {setPassword(e.target.value); setPasswordErr("")}} required />
              <small>{passwordErr ? passwordErr: ""}</small>
            </Col>
          </Form.Group>
          <div className="buttonDiv">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name="rememberMe" label="Remember me" onChange={e => setRememberMe(e.target.value)}/>
            </Form.Group>
            <Button type="submit">Log In</Button>
          </div>
        </Form>
      </div>
  )
}

export default Login