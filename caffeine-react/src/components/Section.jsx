import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Section() {
    const cardNum = [1,2,3,4,5]
    const cards =  cardNum.map(()=>{
        return ( 
             
             <Col>

            <Container className="card-container">
                <Card className="card-ov" style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/78/dc/34/78dc3480-e40e-7ee4-eeab-3c3c38c35d73/source/256x256bb.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>
           </Col>
           )
    })
             
        

  return (
    <div className="Section">
      <Container fluid className="container-section-ov">
        <Row>
          <Col sm={3} className="img-art">
              <img src="https://cdn.shopify.com/s/files/1/1003/7044/files/arabica_coffee_robusta_coffee_480x480.jpg?v=1602239532" alt=""/>
          </Col>
          <Col sm={9} className="text-art">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident doloremque nulla assumenda expedita quam excepturi aliquam quaerat earum. Magni sed dolorem modi corporis incidunt commodi illo soluta perferendis expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident doloremque nulla assumenda expedita quam excepturi aliquam quaerat earum. Magni sed dolorem modi corporis incidunt commodi illo soluta perferendis expedita.</p>
              </Col>
        </Row>
      </Container>



      
      <Container fluid className="container-section-ov">
        <Row>


         {cards}

          <Col>


           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
