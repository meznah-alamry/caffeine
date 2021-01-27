import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import OneProduct from './OneProduct';

export default function Products(props) {

    const [products , setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/product/products') 
        .then(res =>{     
            setProducts(res.data.msg)
            
        })
    }, [])


   const  allProducts = products.map(product =>{

     return <OneProduct
      product= {product}
       setSelectProduct={props.setSelectProduct}
       />
   }) 


  return (
    <>
      <div>
            
            <Container className="Products">
                

                {/* Products Cards */}
                <Row className="justify-content-md-center" style={{margin: '10px'}}>
                   
                    {allProducts}
                    
                </Row>

            </Container>

        </div>

    </>
  );
}
