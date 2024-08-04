import React from "react";
import gabapentin from '../images/gabapentin.jpg'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gabapentin = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={gabapentin} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Gabapentin</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Treats nerve pain from conditions like shingles and diabetic neuropathy.</ListGroup.Item>
                                    <ListGroup.Item  >Used to manage seizures.</ListGroup.Item>
                                   
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item >   Gabapentin is a medication used to treat nerve pain and seizures. It is commonly prescribed for conditions such as neuropathic pain, which can result from diabetes, shingles (herpes zoster), and spinal cord injury. Gabapentin works by stabilizing electrical activity in the brain and affecting the way nerves send messages to the brain. It is usually available in capsule, tablet, and oral solution forms.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Gabapentin;
