import React from "react";
import nise from '../images/nise.jpg';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nise = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={nise} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Nise</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Effective for relieving mild to moderate pain, such as headaches, toothaches, and muscle pain.</ListGroup.Item>
                                    <ListGroup.Item  >Reduces inflammation in conditions like arthritis or muscle injuries.</ListGroup.Item>
                                    <ListGroup.Item  >Used to relieve pain and discomfort associated with menstrual cramps.</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item > Nise is a  medication containing Nimesulide, which is a nonsteroidal anti-inflammatory drug (NSAID). It is used to relieve pain and reduce inflammation associated with conditions such as arthritis, menstrual cramps, and musculoskeletal pain. Nimesulide works by inhibiting the production of prostaglandins, which are chemicals in the body that cause pain and inflammation. It is typically available in tablet, suspension, and topical forms.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Nise;
