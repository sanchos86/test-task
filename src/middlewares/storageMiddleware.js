import { userTypes } from 'state/modules/users';
import { storageActions } from 'utils/helpers';

const storageMiddleware = store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.ADD_USER:
      storageActions.addToStorage(payload.user);
      next(action);
      break;
    case userTypes.DELETE_USER:
      storageActions.deleteFromStorage(payload.id);
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default storageMiddleware;