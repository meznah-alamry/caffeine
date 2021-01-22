import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Footer() {
    return (
        <div className="Footer">
        <Navbar className="navbar footer-bar" variant="dark">
        <Container >
        <Nav className="mr-auto nav-bar-elements">
          <Nav.Link href="#home">Contact Us</Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
    )
}
