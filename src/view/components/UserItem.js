import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class UserItem extends React.Component {
  static propTypes = {
    user: ImmutablePropTypes.map.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };
  shouldComponentUpdate(nextProps) {
    return !this.props.user.equals(nextProps.users);
  }
  render() {
    const { user, deleteUser } = this.props;
    return (
      <ListGroupItem>
        <div>
          <div>
            <strong>Name:</strong> <i>{user.get('name')}</i>
          </div>
          <div>
            <strong>Email:</strong> <i>{user.get('email')}</i>
          </div>
        </div>
        <div className="mt-2">
          <Button
            type="button"
            color="danger"
            size="sm"
            onClick={() => deleteUser(user.get('id'))}
          >
            Delete user
          </Button>
        </div>
      </ListGroupItem>
    );
  }
}

export default UserItem;
