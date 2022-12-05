import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <h1>Welcome to our zoon</h1>
            <p>Stay and enjoy with us</p>
          </Col>
          <Col sm={4}>
            <img
              className="d-block w-50"
              src="/image/Quran.png"
              alt="First imag"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
