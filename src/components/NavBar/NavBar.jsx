import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CardWidget } from '../CardWidget/CardWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="NavBar">
      <Container>
        <Navbar.Brand className='branch'>Electronic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='pages'>
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/category/celular" className='nav-link'>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/category/tablet" className='nav-link'>
                Store
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/category/notebook" className='nav-link'>
                Products
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/category/notebook" className='nav-link'>
                About us
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <CardWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
