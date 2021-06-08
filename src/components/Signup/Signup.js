import React, { Component } from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import '../css/login.css'

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      surname: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {

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
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password(*)
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Confirm Password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />
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
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </div>
        </Form>
      </div>
    )
  };
}

export default Signup
