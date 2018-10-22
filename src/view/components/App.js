import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'utils/routes';

const App = () => (
  <>
    <main style={{flexGrow: 1}}>
      <Switch>
        {
          routes.map(route => {
            const { exact, component, path } = route;
            return (
              <Route
                key={path}
                exact={exact}
                component={component}
                path={path}
              />
            )
          })
        }
      </Switch>
    </main>
  </>
);

export default App;