import Axios from "axios";
import React, { Component } from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import '../css/login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rememberMe: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password, rememberMe } = this.state;
    //check email in the db.json if email do not exist -> user do not exist
    //if email exist check if password correct if not -> incorrect password

    //axios.get("http://localhost:5000/users/${email}");

    console.log("Remember me: " + rememberMe);

    const existence = await Axios.get(`http://localhost:5000/users?email=${email}`);
    if(existence.data.length === 0){
      alert("User Doesnt Exist");
      return;
    }
    if(existence.data[0].password !== password){
      alert("Password is wrong");
      return;
    }
    else{
      (rememberMe === "on") ? localStorage.setItem("userID", existence.data[0].id) : sessionStorage.setItem("userID", existence.data[0].id);
      alert("Login Successful");
      window.location.href="/";
    }
  }

  render() {
    return (
      <div className="formDiv">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <div className="buttonDiv">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" name="rememberMe" label="Remember me" onChange={this.handleChange}/>
            </Form.Group>
            <Button type="submit">Log In</Button>
          </div>
        </Form>
      </div>
    )
  };
}

export default Login
