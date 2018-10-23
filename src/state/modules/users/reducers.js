import types from './types';
import uuid from 'uuid/v1';
import { List, Map } from 'immutable';

const users = (state = List(), action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_USER:
      return state.push(Map({
        id: uuid(),
        name: payload.name,
        email: payload.email,
      }));
    case types.DELETE_USER:
      return state.filter(user => user.get('id') !== payload.id);
    default:
      return state;
  }
};

export default users;