import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Container, Button, Row  } from 'react-bootstrap'
import OneProduct from './OneProduct'
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Products(props) {

    const [products , setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/product/products') //have to check the path in backend
        .then(res =>{     
            setProducts(res.data.msg)
        })
    }, [])


   const  allProducts = products.map(product =>{

     return <OneProduct product= {product} setSelectProduct={props.setSelectProduct} />
   }) 


  return (
    <>
      <div className="Products">
      <ShoppingCartIcon fontSize="inherit" style={{ fontSize: "50px", color: "blue"}} />
      <Link to='/new-product'>
         <Button className="btn-add-product" variant="secondary" size="sm">
          Add New Product
        </Button> </Link>
            <Container >
                <h1 className="mt-5" style={{ textAlign: "center" }}>All products</h1>

                {/* Products Cards */}
                <Row className="justify-content-md-center">
                   
                    {allProducts}
                    

                   
                </Row>

            </Container>

        </div>

    </>
  );
}
