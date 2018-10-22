import React from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import routes from 'utils/routes';

class NavBar extends React.Component {
  state = {
    isOpen: false
  };
  toggleNavBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto">
              {
                routes.map(route => {
                  const { path, name } = route;
                  return (
                    <NavItem key={path}>
                      <NavLink exact={true} className="nav-link" to={path}>{name}</NavLink>
                    </NavItem>
                  );
                })
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
