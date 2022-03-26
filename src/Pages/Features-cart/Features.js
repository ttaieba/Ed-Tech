import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faIndustry, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './Features.css';
const Features = () => {
    return (
        <div>
            <Container className='main-bg'>
                <Row xs={12} md={3}>
                    <Col className='background-one' xs={12}  >
                        <Row className=''  >

                            <h1 className=''><FontAwesomeIcon icon={faBook} /></h1>

                            <h4>8,000+ Courses</h4>
                            <p>Explore a wide range of skills.</p>
                        </Row>
                    </Col>
                    <Col xs={12} >
                        <Row className='background-two'    >

                            <h1 className=''><FontAwesomeIcon icon={faIndustry} /></h1>

                            <h4>By Industry Experts</h4>
                            <p>Professional development from the best people.</p>
                        </Row>
                    </Col>
                    <Col xs={12} className='background-three'  >
                        <Row >

                            <h1 className=''><FontAwesomeIcon icon={faUserCheck} /></h1>

                            <h4>Unlimited Access</h4>
                            <p>Explore a wide range of skills.</p>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Features;