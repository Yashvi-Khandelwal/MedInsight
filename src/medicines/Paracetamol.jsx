import React from "react";
import paracetamol from '../images/paracetamol.jpg';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paracetamol = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={paracetamol} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Paracetamol</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Effective for mild to moderate pain, such as headaches, muscle aches, and toothaches.</ListGroup.Item>
                                    <ListGroup.Item  >Helps lower fever associated with various illnesses.</ListGroup.Item>
                                    <ListGroup.Item  >Used for pain relief in osteoarthritis and other types of arthritis.</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item > Paracetamol, also known as acetaminophen, is a commonly used medication to relieve pain and reduce fever. It is effective for treating headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. Paracetamol works by inhibiting the production of prostaglandins, chemicals in the body that cause pain and inflammation. It is typically available in tablet, capsule, and liquid forms and is generally well-tolerated when taken as directed.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Paracetamol;
