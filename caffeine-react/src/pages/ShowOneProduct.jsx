import React from 'react'
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function ShowOneProduct(props) {

    const { id } = useParams()
    const [selectProduct, setSelectProduct] = useState(props.selectProduct)
    const { title, img, description, price, state } = selectProduct

    useEffect(() => {
        if (!title) {  
            axios.get('http://localhost:5000/api/user/products')
                .then(res => {
                    let product = res.data.find(ele => ele._id == id)
                    setSelectProduct(product)
                })

        }

    }, [])

    const addProductToCart = () => {

        console.log("productId = ", selectProduct._id)
        
    }

    return (
        <div>

            <Container className="mt-5" >
                <Row >
                    <Col md="6" >
                        <img width="100%" src={img} alt="" srcset="" />
                    </Col>
                    <Col md="6">
                        <h2>{title}</h2>
                        <h2> {description}</h2>
                        <h2>{price}</h2>
                        <h2>{state}</h2>
                        <Button onClick={() => addProductToCart()} className="outline-light" > Add to cart </Button>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}
