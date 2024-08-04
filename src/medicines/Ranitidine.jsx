import React from "react";
import ranitidine from '../images/ranitidine.jpg'




import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ranitidine = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={ranitidine} alt="Amoxicillin" className="img-fluid rounded mt-4" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ textDecoration: 'underline', fontWeight: "bold", fontSize: "26px" }}>Ranitidine</Card.Title>
                            <div className="mb-4">
                                <h4 className="font-weight-bold" >Uses</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item  >Reduces stomach acid to help manage GERD symptoms.</ListGroup.Item>
                                    <ListGroup.Item  >Promotes healing of stomach and duodenal ulcers by decreasing acid production.</ListGroup.Item>
                                    <ListGroup.Item  > Manages excessive stomach acid production in this rare condition.</ListGroup.Item>
                                </ListGroup>

                            </div>
                            <div className="text-center">
                                <h4 className="font-weight-bold mb-3">Description</h4>
                                <ListGroup variant="list-group-flush" className="text-left">
                                    <ListGroup.Item > Ranitidine is a medication used to reduce stomach acid production. It is commonly prescribed for conditions such as gastroesophageal reflux disease (GERD), peptic ulcers, and Zollinger-Ellison syndrome. Ranitidine works by blocking histamine H2 receptors in the stomach, which decreases the amount of acid produced. It is typically available in tablet, liquid, and injectable forms. Note that ranitidine has been withdrawn from many markets due to concerns about contamination with a potential carcinogen.</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Ranitidine;
