import types from './types';
import uuid from 'uuid/v1';

import { storageActions } from 'utils/helpers';

const addUser = (user) => {
  const userItem = user.set('id', uuid());
  storageActions.addToStorage(userItem);
  return {
    type: types.ADD_USER,
    payload: {
      user: userItem,
    },
  };
};

const deleteUser = (id) => {
  storageActions.deleteFromStorage(id);
  return {
    type: types.DELETE_USER,
    payload: {
      id,
    },
  };
};

export default {
  addUser,
  deleteUser,
};