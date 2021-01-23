import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <Navbar className="navbar" variant="dark">

        <Navbar.Brand as={Link} to="/">Caffeine</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
        </Nav>

        <Nav style={{ float: "right" }}>
          {!props.isLoggedIn ? <>
            <Nav.Link as={Link} to="/login">
              Login
          </Nav.Link>

            <Nav.Link as={Link} to="/signup">
              Signup
          </Nav.Link>

          </> : <> <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>

              <Nav.Link as={Link} to='/new-product'> Add New Product </Nav.Link>

              <Nav.Link as={Link} to='/cart'>  <ShoppingCartIcon style={{ marginTop: "6px", marginRight: "15px", fontSize: "25px", color: "#7d8179" }} /> </Nav.Link>

             

              <Button variant="dark"
                onClick={() => {
                  console.log("Logging Out!");
                  localStorage.removeItem("jwtToken");
                  props.loginCallback();
                }}
              >
                Logout
          </Button>
            </>}
        </Nav>


      </Navbar>
    </div>
  )
}
