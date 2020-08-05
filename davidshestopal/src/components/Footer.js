import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <center>
          <Col className="p-0 d-flex justify-content-end" md={3} style={{ marginTop: '-10px' }}>
            Copyright © 2020 -David Shestopal. All Rights Reserved
          </Col>
        </center>
      </Container>
    </footer>
  );
}

export default Footer;
