import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import OneProduct from './OneProduct';

export default function Products(props) {

    const [products , setProducts] = useState([])
   

    // const sreach = (event) =>{setSearchTerm(event.target.value)} 
    let term = props.search;
   console.log("search in product " + term);



    useEffect(() => {
        axios.get('http://localhost:5000/api/product/products') 
        .then(res =>{     
            setProducts(res.data.msg)
            
        })
    }, [])


   let  allProducts = products.map(product =>{
   

     return <OneProduct
      product= {product}
       setSelectProduct={props.setSelectProduct}
       />
   }) 
 

 if (term !== ""){

  const result = products.filter(product => product.title.toLowerCase().includes(term.toLowerCase()) );

   allProducts = result.map(product =>{
   

    return <OneProduct product= {product} setSelectProduct={props.setSelectProduct} />

 
 }) 

  }


  return (
    <>
      <div className="allProducts"> 

     
      <div>
            
            <Container className="Products">
                

                {/* Products Cards */}
                <Row className="justify-content-md-center" style={{margin: '10px'}}>
                   
                    {allProducts}
                    
                </Row>

            </Container>
            </div>
        </div>

    </>
  );
}
