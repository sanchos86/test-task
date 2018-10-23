import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const NotFoundPage = () => (
  <Container>
    <Row>
      <Col>
        <h1 className="text-center pt-4" style={{ fontSize: 150 }}>
          404
        </h1>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;
