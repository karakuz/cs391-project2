import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';
import '../css/login.css'

const Login = () => {
  return (
    <div className="formDiv">
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        
        <div className="buttonDiv">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button>Log in</Button>
        </div>
      </Form>
    </div>
  )
}

export default Login
