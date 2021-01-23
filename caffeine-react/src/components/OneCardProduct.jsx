import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function OneCardProduct(props) {

    
    return ( <> 

    
        {props.product && 
       


                    <div>
                        <div>  {props.product.img}</div>
                        <div>  {props.product.title}</div>
                        <div>  {props.product.price}</div>
                        
                        {props.delete && <Button 
                    onClick={()=> props.deleteProduct(props.product._id)}
                    className="btn-danger" >delete </Button> }</div>
                   }
        </>
    )
}
