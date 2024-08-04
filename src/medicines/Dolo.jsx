import React from "react";
import dolo from '../images/dolo.jpeg'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dolo = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={dolo} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Dolo</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Relieves mild to moderate pain such as headaches, toothaches, and backaches.</ListGroup.Item>
                                    <ListGroup.Item  >Reduces fever</ListGroup.Item>
                                    <ListGroup.Item  >To get relieve from menstrual cramps</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item >  Dolo is a medication, commonly used to relieve pain and reduce fever. It is effective for treating headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. Dolo is typically available in tablet form and is known for its rapid onset of action and minimal side effects when taken as directed.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Dolo;
