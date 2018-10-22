import types from './types';

const addUser = (user) => ({
  type: types.ADD_USER,
  payload: {
    user
  }
});

const deleteUser = (id) => ({
  type: types.DELETE_USER,
  payload: {
    id
  }
});

export default {
  addUser,
  deleteUser
};