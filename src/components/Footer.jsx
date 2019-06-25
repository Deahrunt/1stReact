import React from 'react';

import { Navbar, NavbarBrand, NavbarHeader, NavDropdown, NavbarCollapse, Nav, NavItem, MenuItem } from "react-bootstrap";


export default function Footer(props) {
  return (
    <div>
      <Navbar className='footer' inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          <Nav pullRight>
            <NavItem>
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Волрачорлчлчс
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}