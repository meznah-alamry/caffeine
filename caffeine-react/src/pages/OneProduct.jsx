import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//product
export default function OneProduct(props) {
  return (
    <>
      {props.product && (
        <Col md="4" sm="4" className="mt-3">
          <Card className="product">
            <Card.Img
              variant="top"
              src={props.product.img}
              height="300px"
              style={{ margin: "auto", objectFit: "cover" }}
            />
            <Card.Body className="body-one-product">
              <Card.Title>{props.product.title}</Card.Title>
              <Card.Text>
                {props.product.state}
                <br />
                <h5 className="mt-2 text-center"> {props.product.price} </h5>
              </Card.Text>
              <Row>
                <Col className="btn-more-info-space">
                  <Link to={`/products/${props.product._id}`}
                   >
                    {" "}
                    <Button
                    variant="secondary" size="sm"
                      onClick={() => props.setSelectProduct(props.product)}
                    >
                      {" "}
                      More Info
                    </Button>{" "}
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      )}

      
    </>
  );
}
