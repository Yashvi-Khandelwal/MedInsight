import React from "react";
import simvastatin from '../images/simvastatin.jpg';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Simvastatin = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={simvastatin} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Simvastatin</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Reduces the risk of heart attacks in individuals with a history of heart disease or at high risk.</ListGroup.Item>
                                    <ListGroup.Item  >Lowers the risk of stroke by managing cholesterol levels.</ListGroup.Item>
                                    <ListGroup.Item  >Helps prevent cardiovascular events in patients with conditions such as coronary artery disease</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item >Simvastatin is a medication used to lower cholesterol levels in the blood. It belongs to a class of drugs known as statins, which work by inhibiting an enzyme involved in the production of cholesterol in the liver. Lowering cholesterol helps reduce the risk of heart disease, stroke, and other cardiovascular issues. Simvastatin is commonly prescribed alongside diet and exercise changes and is available in tablet form.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Simvastatin;
