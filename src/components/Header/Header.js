import React from 'react'
import { IndexLink, Link } from 'react-router'
import {Navbar} from 'react-bootstrap';

export const Header = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">开饭啦</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    </Navbar.Collapse>
  </Navbar>
);

export default Header
