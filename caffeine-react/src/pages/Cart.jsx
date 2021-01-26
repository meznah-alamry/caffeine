import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Container, Button, Row  } from 'react-bootstrap'
import OneCardproduct from '../components/OneCardProduct'
//cart
let sum = 0 
export default function Cart(props) {
    
    const [alluserProducts, setAluserProducts] = useState([])
    const [Delete, setDelete] = useState([false])

  
    const { name, email, products, _id } = props.auth.currentUser;

   
    useEffect(() => {
      axios.get(`http://localhost:5000/api/user/${_id}/cart`)
        .then(res => {
          
  
          setAluserProducts(res.data.user.products)
         
       
       })
  
    }, [Delete] )
  
    const deleteProduct = (productId) => {
      let userId = _id
      axios.delete(`http://localhost:5000/api/user/${userId}/cart/${productId}`)
        .then(res => {
         
         console.log('cart page',res)
         setDelete(!(Delete))
        })

        setAluserProducts(alluserProducts)
       
    }
    const uniqueProducts = []

    alluserProducts.forEach(product=> {
      if(!uniqueProducts.includes(product)) uniqueProducts.push(product)
    })

    // const sum = (product) => {
    //   let sum = 0;
    //   alluserProducts.forEach(product=>{
    //     if(uniqueProducts.includes(product)) sum++
    //   })
    //   return sum
    // }


    const Total = (product) => {
      let total = 0;
      alluserProducts.forEach(product=>{
       total = total + parseInt(product.oneProduct.id.price);

      console.log("product inside function" + product.oneProduct.id.price)
      })
      return total
    }



    const cartProducts= alluserProducts.map(product =>{
           
      return (

        <>
        <OneCardproduct deleteProduct={deleteProduct} product={product} delete={true} /> 
        {/* <p className="total"> Qty :{sum()} </p> */}
        <div> <hr></hr></div> </>
      )
    } )
    return (
      
<div className="Cart">
         <h1>Shopping Cart</h1>
         <div> <hr></hr></div>
          {cartProducts}
        
          <p className="total"> Total :{Total()} </p>
</div>
        
)
      
    
  
  }
  