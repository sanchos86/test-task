import { createStore, applyMiddleware } from 'redux';
import { Map, List } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import storageMiddleware from 'middlewares/storageMiddleware';
import rootReducer from './modules';

const configureStore = (preloadedState) => {
  if (preloadedState && List.isList(preloadedState)) {
    return createStore(
      rootReducer,
      Map({users: preloadedState}),
      composeWithDevTools(
        applyMiddleware(
          storageMiddleware
        )
      )
    );
  }
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        storageMiddleware
      )
    )
  );
};

export default configureStore;
