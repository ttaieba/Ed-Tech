import React from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import img1 from '../../img/courses/cr-1.jpg'
import img2 from '../../img/courses/cr-3.jpg'
import img from '../../img/courses/cr-4.jpg'
import img3 from '../../img/courses/cr-6.jpg'

const Blogs = () => {
    return (
        <div className="p-5">
            <Container>

                <Row xs={1} lg={4} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>UI/UX Design Pattern For Succesfull Software Applications</Card.Title>

                                <Card.Text >
                                    Price : $199 <span className="ps-4 text-primary">
                                        8,350 Enrolled</span>

                                </Card.Text>
                                <Button variant="outline-info">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Advance PHP Knowledge With Laravel To Make Smart Web</Card.Title>

                                <Card.Text>
                                    Price : $120 <span className="ps-4  text-primary">2,350 Enrolled</span>

                                </Card.Text>
                                <Button variant="outline-info">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>The Complete Accounting & Bank Financial Course 2021</Card.Title>

                                <Card.Text >
                                    Price : $160 <span className="ps-4 text-primary">3,250 Enrolled</span>

                                </Card.Text>
                                <Button variant="outline-info">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>ull Web Designing Course With 20 Web Template Designing</Card.Title>

                                <Card.Text >
                                    Price : $125 <span className="ps-4 text-primary">2,350 Enrolled</span>

                                </Card.Text>
                                <Button variant="outline-info">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default Blogs;