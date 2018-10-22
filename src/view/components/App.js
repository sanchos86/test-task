import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import NavBar from './core/NavBar';
import routes from 'utils/routes';

const App = () => (
  <>
    <NavBar />
    <Container className="text-center">
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  </>
);

export default App;