import React from "react";
import diazepam from '../images/diazepam.png'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Diazepam = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={diazepam} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Diazepam</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Relieves allergy symptoms like runny nose, sneezing, and itching.</ListGroup.Item>
                                    <ListGroup.Item  >Used for chronic urticaria (hives)</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item >  Diazepam is a medication belonging to the benzodiazepine class, which exerts calming effects on the brain and nerves (central nervous system). It is commonly known under the brand name Valium, among others. </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Diazepam;
