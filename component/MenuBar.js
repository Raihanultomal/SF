import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Vform from './Form';

export default function MenuBar() {
  // let signup = 0;

  const [count, setCount] = useState(false);
  const SignupFunction = () => {
    if (count === false) {
      setCount(true);
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Sign IN</Nav.Link>
            <Nav.Link href="#pricing" onClick={SignupFunction}>
              Signup
            </Nav.Link>
          </Nav>
          {count ? <Vform /> : ''}
        </Container>
      </Navbar>
    </div>
  );
}
