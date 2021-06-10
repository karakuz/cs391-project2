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
      rememberMe: 0,
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({errors: [...prevState.errors, {elm,msg}]}));
  }

  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return {errors: newArr};
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    this.clearValidationErr([event.target.name]);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password, rememberMe } = this.state;

    console.log("Remember me: " + rememberMe);

    const existence = await Axios.get(`http://localhost:5000/users?email=${email}`);
    if(existence.data.length === 0){
      return this.showValidationErr("email", "User Does not Exist");
    }
    if(existence.data[0].password !== password){
      return this.showValidationErr("password", "Password is wrong");
    }
    else{
      (rememberMe === "on") ? localStorage.setItem("userID", existence.data[0].id) : sessionStorage.setItem("userID", existence.data[0].id);
      alert("Login Successful");
      window.location.href="/";
    }
  }

  render() {

    let emailErr = null,
    passwordErr = null;
    

    for (let err of this.state.errors) {
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
    }


    return (
      <div className="formDiv">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
              <small>{emailErr ? emailErr: ""}</small>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <small>{passwordErr ? passwordErr: ""}</small>
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
