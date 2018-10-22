import { createStore } from 'redux';
import rootReducer from './modules';

const configureStore = (preloadedState = null) => {
  if (preloadedState) {
    return createStore(
      rootReducer,
      {users: preloadedState},
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
