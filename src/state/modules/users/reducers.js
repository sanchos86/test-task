import types from './types';
import { List } from 'immutable';

const users = (state = List(), action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_USER:
      return state.push(payload.user);
    case types.DELETE_USER:
      return state.filter(user => user.get('id') !== payload.id);
    default:
      return state;
  }
};

export default users;