import React from 'react'
import { Navbar, Nav, Container , Modal, Button } from "react-bootstrap";

export default function Footer() {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Horizon Team 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This site created by © Horizon Team  2021-1 </p>
          <h5>Members:</h5>
          <ul>
            <li>
              <h6>Asim Sami</h6>
              <a href="#">Linked In</a><br/>
              <a href="#">Github</a><br/>
            </li>

            <li>
              <h6>Name2</h6>
              <a href="#">Linked In</a><br/>
              <a href="#">Github</a><br/>
            </li>

            <li>
              <h6>Name3</h6>
              <a href="#">Linked In</a><br/>
              <a href="#">Github</a><br/>
            </li>

          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
    return (
        <div className="Footer">
        <Navbar className="navbar footer-bar" variant="dark">
        <Container >
        <Nav className="mr-auto nav-bar-elements">
          <Nav.Link href="#home" 
          onClick={() => setModalShow(true)}
          >Contact Us</Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
      
    )
}
