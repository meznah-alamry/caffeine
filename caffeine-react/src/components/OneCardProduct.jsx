import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function OneCardProduct(props) {
    console.log('aaa',props.product.oneProduct.id._id)
    const product = props.product.oneProduct;
    return ( <> 

    
        {props.product && 
       

                  
                    <div>
                        <div> {product.id.img}</div>
                        <div>  {product.id.title}</div>
                        <div>  {product.id.price}</div>
                        <div> Qty: {product.qty}</div>
                        {props.delete && 
                        <Button 
                    onClick={()=> props.deleteProduct(props.product.oneProduct.id._id)}
                    className="btn-danger" >delete </Button> }</div>
                   }
        </>
    )
}
