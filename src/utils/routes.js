import MainPage from 'view/pages/MainPage';
import UsersPage from 'view/pages/UsersPage';
import NotFoundPage from 'view/pages/NotFoundPage';

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
    path: '/users',
  },
  {
    name: 'NotFoundPage',
    component: NotFoundPage,
    exact: false,
    path: '*',
  },
];

export default routes;