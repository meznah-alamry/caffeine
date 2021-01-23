import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Container, Button, Row  } from 'react-bootstrap'
import OneCardproduct from '../components/OneCardProduct'
//cart
export default function Cart(props) {

    const [alluserProducts, setAluserProducts] = useState([])
    const { name, email, products, _id } = props.auth.currentUser;
    console.log(products)
    useEffect(() => {
      axios.get('http://localhost:5000/api/product/products')
        .then(data => {
          // 
          let filterProducts = data.msg.filter(product => products.includes(product._id))
  
          setAluserProducts(filterProducts)
        })
  
    }, [alluserProducts])
  
    const deleteProduct = (productId) => {
      let userId = _id
      axios.delete(`http://localhost:5000/api/products/${productId}/${userId}`)
        .then(data => {
          props.setAuth(pre => ({ ...pre, currentUser: { ...pre.currentUser, products: data.msg.products } }))
          console.log(data)
  
        })
        setAluserProducts(products)
  
    }
  
    const cartProducts= alluserProducts.map(product => <OneCardproduct deleteProduct={deleteProduct} product={product} delete={true} />)
    return 
      <Container>
        <Row >
          {cartProducts}
        </Row>
  
      </Container>
    
  
  }
  