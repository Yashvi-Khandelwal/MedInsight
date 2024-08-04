import React from "react";
import metformin from '../images/metformin.jpg';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Metformin = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={metformin} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Metformin</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Helps control blood sugar levels in people with type 2 diabetes</ListGroup.Item>
                                    <ListGroup.Item  >Increases the body's sensitivity to insulin.</ListGroup.Item>
                                    <ListGroup.Item  >Can aid in weight loss or prevent weight gain in some individuals with type 2 diabetes.</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item >Metformin is an oral medication used to manage type 2 diabetes. It helps control blood sugar levels by improving the body’s response to insulin and reducing glucose production in the liver. Metformin is often used alongside diet and exercise to help achieve optimal blood glucose control. It is usually available in tablet and liquid forms and is known for its effectiveness and relatively low risk of causing low blood sugar (hypoglycemia).</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Metformin;
