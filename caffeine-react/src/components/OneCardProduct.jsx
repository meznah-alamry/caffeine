import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function OneCardProduct(props) {
    const product = props.product.oneProduct;
    console.log('aaa',product)
    console.log(product.id._id)
    return ( <> 

    
        {props.product && 
       


                    <div className="OneCardProduct">
                   

                       
                        <div> <Link to={`products/${product.id._id}`}>
                              <img   src={product.id.img} alt=""   /> 
                              </Link> </div>
                       
                       
                        <div> <Link to={`products/${product.id._id}`}>
                             <p className="ex1">{product.id.title}</p>
                             </Link> </div>
                        
                        <div className="price">  SAR {product.id.price}   </div>

                        <div>

                          {props.delete &&  <Link  onClick={()=> props.deleteProduct(product.id._id)} to="/cart">
                              Delete
                              </Link>}

                     </div>

                   
                    
                    </div>
                   }
        </>
    
    )
}
