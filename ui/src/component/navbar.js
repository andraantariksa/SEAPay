import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = ({loggedIn}) => {
    const showRegister = loggedIn ? { display: "none"} : { display: ""};
    return (
        <header style={{ marginBottom: 50, }}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
            {' SEA Pay'}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={showRegister} className="ml-auto">
              <NavLink to="/signin" className="nav-link">Signin</NavLink>
              <NavLink to="/signup" className="nav-link">Signup</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
}

export default NavBar;