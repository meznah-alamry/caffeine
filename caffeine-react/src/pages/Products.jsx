import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Container, Button, Row  } from 'react-bootstrap'
import OneProduct from './OneProduct'
import Footer from "../components/Footer";

export default function Products(props) {

    const [products , setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/product/products') 
        .then(res =>{     
            setProducts(res.data.msg)
        })
    }, [])


   const  allProducts = products.map(product =>{

     return <OneProduct product= {product} setSelectProduct={props.setSelectProduct} />
   }) 


  return (
    <>
      <div>
 
      
            <Container >
                <h1 className="mt-5" style={{ textAlign: "center" }}>All products</h1>

                {/* Products Cards */}
                <Row className="justify-content-md-center">
                   
                    {allProducts}
                    
                </Row>

            </Container>

            <Footer />
        </div>

    </>
  );
}
