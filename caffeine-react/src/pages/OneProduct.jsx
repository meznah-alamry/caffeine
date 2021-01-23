import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OneProduct(props) {
  return (
    <>
      {props.product && (
        <Col md="4" sm="4" className="mt-3">
          <Card className="">
            <Card.Img
              variant="top"
              src={props.product.img}
              height="300px"
              style={{ margin: "auto", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{props.product.title}</Card.Title>
              <Card.Text>
                Description: {props.product.description}
                <br />
                state: {props.product.state}
                <br />
                <h5 className="mt-2 text-center"> {props.product.price} </h5>
              </Card.Text>
              <Row>
                <Col>
                  <Link to={`/products/${props.product._id}`}>
                   
                    <Button
                      onClick={() => props.setSelectProduct(props.product)}
                    >
                      more info
                    </Button>
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
