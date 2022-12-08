import React, { useState } from 'react'
import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar expand="sm">
      <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
      <NavbarToggle />
      <NavbarCollapse className="justify-content-end">
        <Button onClick={handleShow}>Cart 0 Items</Button>
      </NavbarCollapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>This is the Modal body</h1>
      </Modal.Body>
    </Modal>
    </>
    
  )
}

export default NavbarComponent