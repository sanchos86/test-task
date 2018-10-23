import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import users from './users';

export default combineReducers({
  form,
  users,
});
