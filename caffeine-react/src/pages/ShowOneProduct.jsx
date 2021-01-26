import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

export default function ShowOneProduct(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectProduct, setSelectProduct] = useState(props.selectProduct);

  const { title, img, description, price, state, qty } = selectProduct;
  const userId = props.auth.currentUser._id;
  console.log(product)
  useEffect(() => {
    if (!title) {
      axios.get("http://localhost:5000/api/product/products").then((res) => {
        let product = res.data.find((ele) => ele._id == id);
        setSelectProduct(product);
      });
    }
  }, []);

  const onChangeInput = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  const addProductToCart = () => {
    axios
      .put(`http://localhost:5000/api/user/${userId}/${selectProduct._id}`,product )
      .then((res) => {
        console.log(res.data.msg);
      });
  };

  const numbersOfQty = 30;

    const qtyNumberDropDown = [...Array(numbersOfQty)].map((e,i)=>{
      return (
      <option>{i+1}</option>
      )

    })

  return (
    <div>
      <Container className="mt-5 ShowOneProduct">
        <Row>
          <Col md="6">
            <img width="100%" src={img} alt="" srcset="" />
          </Col>
          <Col md="6">
            <h1>{title}</h1>
            <p> {description}</p>
            <h3>{price}</h3>
            {qty ? (
              <h5 style={{ color: "green" }}>In Stock</h5>
              ) : (
              <h5 style={{ color: "red" }}>Out of Stock</h5>
            )}
             {qty ? (
               <h6>{state}</h6>        
             ) : (<></>)
              }
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Quantity</b>
              </Form.Label>
              <Form.Control
                size="sm"
                as="select"
                name="qty"
                onChange={(e) => onChangeInput(e)}
                className="qty-drop-down"
              >
                <option></option>
                {qtyNumberDropDown}
              </Form.Control>
            </Form.Group>
            <Link to="/products">
              <Button
                onClick={() => addProductToCart()}
                variant="secondary"
                size="sm"
                className="outline-light"
              >
                Add to cart{" "}
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
