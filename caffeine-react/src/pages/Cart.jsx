import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Container, Button, Row  } from 'react-bootstrap'
import OneCardproduct from '../components/OneCardProduct'
//cart
let sum = 0 
export default function Cart(props) {
    
    const [alluserProducts, setAluserProducts] = useState([])
    const [changeuseEffect, setChangeuseEffect] = useState(false)

  
    const { name, email, products, _id } = props.auth.currentUser;

   
    useEffect(() => {
      axios.get(`http://localhost:5000/api/user/${_id}/cart`)
        .then(res => {
          
  
          setAluserProducts(res.data.user.products)
         
       
       })
  
    },  [changeuseEffect])
  
    const deleteProduct = (productId) => {
      let userId = _id
      axios.post(`http://localhost:5000/api/user/${userId}/cart/${productId}`)
        .then(res => {
         
         console.log('cart page',res)
        })
        setChangeuseEffect(!changeuseEffect)
    }
  
    const cartProducts= alluserProducts.map(product =>{
             sum += parseFloat(product.price); 
      return (

        <>
        <OneCardproduct deleteProduct={deleteProduct} product={product} delete={true} /> 
       
        <div> <hr></hr></div> </>
      )
    } )
    return (
      
<div className="Cart">

         <h1>Shopping Cart</h1>
         <div> <hr></hr></div>
          {cartProducts}

        

          <p className="total"> Total : {sum}</p>
</div>
        
)
      
    
  
  }
  