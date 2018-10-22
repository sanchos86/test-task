import MainPage from 'view/pages/MainPage';
import UsersPage from 'view/pages/UsersPage';

const routes = [
  {
    name: 'Main',
    component: MainPage,
    exact: true,
    path: '/',
  },
  {
    name: 'Users',
    component: UsersPage,
    exact: false,
    path: '/users'
  },
];

export default routes;