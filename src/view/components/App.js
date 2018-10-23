import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './core/NavBar';
import routes from 'utils/routes';

const App = () => (
  <>
    <NavBar />
    <Switch>
      {routes.map(route => {
        const { exact, component, path } = route;
        return (
          <Route key={path} exact={exact} component={component} path={path} />
        );
      })}
    </Switch>
  </>
);

export default App;
