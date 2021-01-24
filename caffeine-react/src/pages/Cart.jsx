import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Container, Button, Row  } from 'react-bootstrap'
import OneCardproduct from '../components/OneCardProduct'
//cart

export default function Cart(props) {

    const [alluserProducts, setAluserProducts] = useState([])
    const { name, email, products, _id } = props.auth.currentUser;
   // console.log(products)
   
    useEffect(() => {
      axios.get(`http://localhost:5000/api/user/${_id}/cart`)
        .then(res => {
          
  
          setAluserProducts(res.data.user.products)
         
       
       })
  
    },  [])
  
    const deleteProduct = (productId) => {
      let userId = _id
      axios.post(`http://localhost:5000/api/user/${userId}/cart/${productId}`)
        .then(res => {
         
         console.log(res)
        })
  
    }
  
    const cartProducts= alluserProducts.map(product =>{
             
      return (
        <OneCardproduct deleteProduct={deleteProduct} product={product} delete={true} />
      )
    } )
    return (<Container>
        <Row >
          {cartProducts}

        </Row>
  
      </Container>)
      
    
  
  }
  