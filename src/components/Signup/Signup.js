import React from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import Axios from 'axios'
import '../css/login.css'


const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [emailErr, setEmailErr] = React.useState("");
  const [passwordConfirmationErr, setPasswordConfirmationErr] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const existence = await Axios.get(`http://localhost:5000/users?email=${email}`);

    if(existence.data.length !== 0){
      setEmailErr("This e-mail is already taken!");
      return;
    }

    if (password !== passwordConfirmation){
      setPasswordConfirmationErr("Passwords do not match!");
      return;
    }

    if(!localStorage){
      alert("Sorry, your browser does not support local storage");
      return;
    }

    else{
      Axios
      .post(
        "http://localhost:5000/users", 
        {
          email: email,
          password: password,
          name: name,
          surname: surname
        }
      )
      .then(response => response);

      alert("Signup Successful");
      window.location.href= "/";
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
              <Form.Control type="email" name="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value); setEmailErr(""); setPasswordConfirmationErr("")}} required />
              <small>{emailErr ? emailErr: ""}</small>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value); setEmailErr(""); setPasswordConfirmationErr("")}} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password(*)
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Confirm Password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value); setEmailErr(""); setPasswordConfirmationErr("")}} required />
              <small>{passwordConfirmationErr ? passwordConfirmationErr: ""}</small>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Form.Control placeholder="First name" name="name" value={name} onChange={(e) => {setName(e.target.value); setEmailErr(""); setPasswordConfirmationErr("")}} required />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" name="surname" value={surname} onChange={(e) => {setSurname(e.target.value); setEmailErr(""); setPasswordConfirmationErr("")}} required />
            </Col>
          </Form.Group>
          <div className="buttonDiv">
            <Button type="submit">Sign Up</Button>
          </div>
        </Form>
      </div>
  )
}

export default Signup
