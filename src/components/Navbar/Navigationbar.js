import React from 'react'
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import '../css/header.css'

const Navigationbar = () => {
  return (
    <header className="navHeader">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">CineMax</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Action</NavDropdown.Item>
              <NavDropdown.Item href="">Another action</NavDropdown.Item>
              <NavDropdown.Item href="">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Navigationbar
