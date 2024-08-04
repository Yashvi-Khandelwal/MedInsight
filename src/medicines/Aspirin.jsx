import React from "react";
import aspirin from '../images/aspirin.jpg';
import './Aspirin.css';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Aspirin = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={aspirin} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Aspirin</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >To reduce fever</ListGroup.Item>
                                    <ListGroup.Item  >To get relive from muscle pain, toothache and headaches.</ListGroup.Item>
                                    <ListGroup.Item  >To reduce swelling</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item >    Aspirin is a type of nonsteroidal anti-inflammatory drug (NSAID) that can treat mild to moderate pain, inflammation or arthritis. It also lowers your risk of heart attack, stroke or blood clot.It works by blocking a certain natural substance in your body to reduce pain and swelling.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Aspirin;
