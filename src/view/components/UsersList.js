import React from 'react';
import { ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import UserItem from './UserItem';

const UsersList = ({ users, deleteUser }) => (
  <>
    <h3 className={`text-center pt-4 ${!!users.size ? '' : 'text-danger'}`}>
      {!!users.size ? 'Users list' : 'Here will be users list'}
    </h3>
    {!!users.size ? (
      <ListGroup className="pt-2 mb-4">
        {users.map(user => (
          <UserItem key={user.get('id')} user={user} deleteUser={deleteUser} />
        ))}
      </ListGroup>
    ) : null}
  </>
);

UsersList.propTypes = {
  users: ImmutablePropTypes.list.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
