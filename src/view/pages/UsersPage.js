import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import { userActions } from 'state/modules/users';
import UserForm from 'view/components/UserForm';
import UsersList from 'view/components/UsersList';

class UsersPage extends React.Component {
  handleSubmit = values => {
    const { reset, addUser } = this.props;
    addUser(values);
    reset('UserForm');
  };
  render() {
    const { users, deleteUser } = this.props;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <UserForm onSubmit={this.handleSubmit} />
            <UsersList users={users} deleteUser={deleteUser} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ users: state.get('users') });

export default connect(
  mapStateToProps,
  { ...userActions, reset }
)(UsersPage);
