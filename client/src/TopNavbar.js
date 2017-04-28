import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const TopNavbar = props => {
  return (
    <Navbar fixedTop collapseOnSelect id="petnav">
      <Navbar.Header>
        <Navbar.Brand>
          Pet Project
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <Navbar.Text>Shelters</Navbar.Text>
          <Navbar.Text>Adoption</Navbar.Text>
          <Navbar.Text>Foster</Navbar.Text>
          <Navbar.Text>Donate</Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
