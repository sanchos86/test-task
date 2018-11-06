import types from './types';
import uuid from 'uuid/v1';

const addUser = (user) => ({
  type: types.ADD_USER,
  payload: {
    user: user.set('id', uuid()),
  },
});

const deleteUser = (id) => ({
  type: types.DELETE_USER,
  payload: {
    id,
  },
});

export default {
  addUser,
  deleteUser,
};