import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import UserForm from 'view/components/UserForm';

class UsersPage extends React.Component {
  handleSubmit = (values) => {
    console.log(values.toObject());
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <UserForm onSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UsersPage;