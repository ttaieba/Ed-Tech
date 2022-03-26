import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';



const Feedback = () => {
    return (
        <div className='pb-5'>
            <Container>
                <h1 className='text-primary'>Our Students Reviews</h1>
                <p>What other students turned professionals have to say about us <br /> after learning with us and reaching their goals.</p>
                <Row xs={1} lg={4} className="g-4">
                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title>Hennry branson</Card.Title>

                                <Card.Text >
                                    placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title>Jhon branson</Card.Title>

                                <Card.Text >
                                    placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title>Shara Gomes</Card.Title>

                                <Card.Text >
                                    placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body>
                                <Card.Title>Jesseca </Card.Title>

                                <Card.Text >
                                    placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Feedback;