import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import cover from '../../img/illustrat cover 2.png'
import AboutUs from '../AboutUs/AboutUs';
import Features from '../Features-cart/Features';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div className='bg-light'>
            <Container >
                <Row xs={2} className=' bg-light '  >
                    <Col className='text-start  py-5' xs={12} md={6}>
                        <h1 className=' py-5'>
                            Build skills with <br />
                            courses flexible online <br />
                            courses</h1>

                        <Button>Start Buying</Button>
                    </Col>
                    <Col className='bg-light p-4' xs={12} md={6}>

                        <img className='w-75' src={cover} alt="" />
                    </Col>
                </Row>
            </Container>
            <Features></Features>
            <AboutUs></AboutUs>
            <Feedback></Feedback>

        </div>
    );
};

export default Home;