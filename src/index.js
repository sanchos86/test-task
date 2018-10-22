import React from 'react';
import { render } from 'react-dom';

import Root from 'view/components/Root';
import configureStore from 'state/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

let users = localStorage.getItem('users');

if (users) {
  try {
    users = JSON.parse(users);
  } catch (e) {
    users = null;
    console.error('Users from local storage can`t be parsed');
  }
}

const store = configureStore(users);

render(
  <Root store={store} />,
  document.getElementById('root')
);
