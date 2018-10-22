import types from './types';
import uuid from 'uuid/v1';

const users = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_USER:
      return [
        ...state,
        {
          id: uuid(),
          name: payload.name,
          email: payload.email,
        },
      ];
    case types.DELETE_USER:
      return state.filter(user => user.id !== payload.id);
    default:
      return state;
  }
};

export default users;