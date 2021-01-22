import React from 'react'
import { Navbar, Nav } from "react-bootstrap";


export default function NavBar() {
    return (
        <div className="NavBar">
        <Navbar className="navbar" variant="dark">
        <Navbar.Brand href="#home">Caffeine</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      </div>
    )
}
