import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useEffect, useState } from "react";

export default function NavBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

 

  return (
    <div className="NavBar">
      <Navbar className="navbar" variant="dark">

        <Navbar.Brand 
        as={Link}
         to="/"
         onClick={
          ()=>{
              props.setProductPage(false)
              props.setArticlePage(false)
       }}
        >Caffeine</Navbar.Brand>

        <Nav className="mr-auto">

          <Nav.Link
           as={Link}
           to="/"
           onClick={
            ()=>{
                props.setProductPage(false)
                props.setArticlePage(false)
         }}
          >Home</Nav.Link>

          <Nav.Link
           as={Link}
           to="/products"
           onClick={
             ()=>{
                props.setProductPage(true)
                 props.setArticlePage(false)
          }}
           >Products</Nav.Link>

          <Nav.Link
           as={Link}
           to="/articles"
           onClick={
            ()=>{
               props.setProductPage(false)
                props.setArticlePage(true)
         }}
           >
             Articles</Nav.Link>
             <input type="text" name="search" placeholder="Search"  onChange={event =>{props.ToSetSearch(event.target.value)
          }}></input>

        </Nav>

        <Nav style={{ float: "right" }}>
          {!props.isLoggedIn ? <>
            <Nav.Link as={Link} to="/login">
              Login
          </Nav.Link>

            <Nav.Link as={Link} to="/signup">
              Signup
          </Nav.Link>
         
          </> : <>


        
          {props.articlePage?
          <>

          <Nav.Link
          as={Link}
          to="/new-article"
           >
          Add New Article
          </Nav.Link>
          
          </> 
          
          
          :<></> 
        
        }
          
          


         {props.productPage?
           <>
          <Nav.Link
           as={Link}
            to='/new-product'
            > Add New Product </Nav.Link>
            </>
           : <></>}


              <Nav.Link
               as={Link}
                to='/cart'
                onClick={
                  ()=>{
                      props.setProductPage(false)
                      props.setArticlePage(false)
               }}
               >  <ShoppingCartIcon style={{ marginTop: "6px", marginRight: "15px", fontSize: "25px", color: "#7d8179" }} /> </Nav.Link>

             

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
