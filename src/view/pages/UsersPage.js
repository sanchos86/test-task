import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { userActions } from 'state/modules/users';
import UserForm from 'view/components/UserForm';
import UsersList from 'view/components/UsersList';

class UsersPage extends React.Component {
  static propTypes = {
    users: ImmutablePropTypes.list.isRequired,
    addUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };
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
          <Col sm={12} lg={8} xl={6}>
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
