import React, { Component } from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import '../css/login.css'
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      surname: "",
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
          if (elm != err.elm) {
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

    handleSubmit(event) {

      event.preventDefault();

      const { email, password, password_confirmation, name, surname } = this.state;

/*-----------------------------------------------------------------------------------------------
EMAIL EXISTENCE CHECK TEST 1 (neden çalışmıyor)

      const checkEmail = (serverUsers) => {
        const user = serverUsers.find(user => user.email === this.state.email);
         return user;
       };
         
           const a = axios
             .get("http://localhost:5000/users")
             .then((response) => checkEmail(response.data));

           if (a) {
            return this.showValidationErr("email", "This e-mail is already taken!");
           }
-----------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------
EMAIL EXISTENCE CHECK TEST 2 (neden çalışmıyor)

      axios
       .get("http://localhost:5000/users${email}")
       .then(response => {
        if (response.data.includes(this.state.email)){
          return this.showValidationErr("email", "This e-mail is already taken!");
        } 
       });
-----------------------------------------------------------------------------------------------*/

      if (this.state.password !== this.state.password_confirmation) {
        return this.showValidationErr("password_confirmation", "Passwords do not match!");
      }


      axios
      .post(
        "http://localhost:5000/users", 
        {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            name: name,
            surname: surname
        }
      )
      .then(response => response);

    }

  render() {

    let emailErr = null,
    password_confirmationErr = null;
    

    for (let err of this.state.errors) {
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      if (err.elm == "password_confirmation") {
        password_confirmationErr = err.msg;
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
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password(*)
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Confirm Password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />
              <small>{password_confirmationErr ? password_confirmationErr: ""}</small>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Form.Control placeholder="First name" name="name" value={this.state.name} onChange={this.handleChange} required />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" name="surname" value={this.state.surname} onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <div className="buttonDiv">
            <Button type="submit">Sign Up</Button>
          </div>
        </Form>
      </div>
    )
  };
}

export default Signup
