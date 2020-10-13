import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; {year} Safety Surfaces Store
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
