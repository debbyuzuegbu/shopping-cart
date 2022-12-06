import React from 'react'
import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function Navbar() {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
      <NavbarToggle />
      <NavbarCollapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </NavbarCollapse>
    </Navbar>
  )
}

export default Navbar