import React from 'react'
import {  Navbar, Nav } from 'react-bootstrap';

const Navegador = () => {
    return ( 
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">CoSalud</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="index.html">Inicio</Nav.Link>
        </Nav>
      </Navbar>
     );
}
 
export default Navegador;