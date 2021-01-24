import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function OneCardProduct(props) {

    
    return ( <> 

    
        {props.product && 
       


                    <div className="OneCardProduct">
                   

                       
                        <div> <Link to={`products/${props.product._id}`}>  <img   src={props.product.img} alt=""   /> </Link> </div>
                       
                       
                        <div> <Link to={`products/${props.product._id}`}> <p className="ex1">{props.product.title}</p></Link> </div>
                        
                        <div className="price">  SAR {props.product.price}   </div>

                        <div>

                          {props.delete &&  <Link  onClick={()=> props.deleteProduct(props.product._id)} to="/cart">
                              Delete
                              </Link>}

                     </div>

                   
                    
                    </div>
                   }
        </>
    )
}
