import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from '../../img/professional.jpg'

const AboutUs = () => {
    return (
        <div>
            <Container className='py-5'>
                <Row xs={1} sm={1} md={2} className='bg-light py-4' >

                    <Col xs={12} sm={12} md={6} >
                        <img src={img} alt="" />
                    </Col>

                    <Col xs={12} sm={12} md={6} className='text-start py-5'>
                        <p>Learn Anything</p>
                        <h1>Take online courses Earn <br />
                            professional</h1>
                        <h4>Position yourself for success with a variety of collegeclasses including general education courses</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <Button variant="outline-warning">- Short Courses-</Button>



                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default AboutUs;