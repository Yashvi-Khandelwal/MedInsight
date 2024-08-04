import React from "react";
import loratadine from '../images/loratadine.jpg'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loratadine = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={loratadine} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Loratadine</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Temporary remove symptoms of fever</ListGroup.Item>
                                    <ListGroup.Item  >Used to treat itching and redness caused by hives.</ListGroup.Item>
                            
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item >   Loratadine is an antihistamine used to relieve symptoms of allergies such as sneezing, runny or itchy nose, and itchy or watery eyes. It is commonly prescribed for seasonal allergies (hay fever) and chronic urticaria (hives). Loratadine works by blocking histamine, a substance in the body that causes allergic reactions. It is usually available in tablet, liquid, and dissolvable forms and is known for causing minimal drowsiness compared to other antihistamines.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Loratadine;
