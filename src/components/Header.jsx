import React from 'react';
import { Navbar, NavbarBrand, NavbarHeader, NavDropdown, NavbarCollapse, Nav, NavItem, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



export default function Header(props) {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <h1 className='blog'>Блог</h1>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/'>
            <NavItem>
              Main
            </NavItem>
            </LinkContainer>
            <LinkContainer to='/news'>
            <NavItem>
              News
            </NavItem>
            </LinkContainer>
            <LinkContainer to='/users'>
              <NavItem>
                Users
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}