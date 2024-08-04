import React from "react";
import amoxicillion from '../images/amoxicillin.jpg';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Amoxicillin = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={amoxicillion} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto'}} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline',fontWeight:"bold",fontSize:"26px" }}>Amoxicillin</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                {/* <Card.Header>Uses</Card.Header> */}
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Treats bacterial infections such as pneumonia, bronchitis, infections of the ears, nose, throat, skin, and urinary tract.</ListGroup.Item>
                                    <ListGroup.Item  >To treat stomach ulcers</ListGroup.Item>
                                    <ListGroup.Item  >Often prescribed for children, to treat ear infections and chest infections</ListGroup.Item>
                                </ListGroup>


                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                {/* <Card.Text className="text-left">
                                    Amoxicillin is used to treat a wide variety of bacterial infections. It works by stopping the growth of bacteria. This antibiotic treats only bacterial infections. It will not work for viral infections. It works by inhibiting the synthesis of bacterial cell walls.
                                </Card.Text> */}
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item > Amoxicillin is used to treat a wide variety of bacterial infections. It works by stopping the growth of bacteria. This antibiotic treats only bacterial infections. It will not work for viral infections. It works by inhibiting the synthesis of bacterial cell walls.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Amoxicillin;
