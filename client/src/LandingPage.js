import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Welcome to TrackStar</h1>
          <p>Track and improve your team's performance with ease.</p>
          <Button variant="primary" href="/register">Get Started</Button>
          <Button variant="secondary" href="/login" className="ml-2">Login</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
