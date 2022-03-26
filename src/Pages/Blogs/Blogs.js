import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img from '../../img/blog/blog8.jpg';
import img1 from '../../img/blog/blog2.jpg';
import img2 from '../../img/blog/blog10.jpg';
import img3 from '../../img/blog/blog6.jpg';
import img5 from '../../img/blog/blog9.jpg';
import img6 from '../../img/blog/blog3.jpg';
import img7 from '../../img/blog/blog1.jpg';

const Blogs = () => {
    return (
        <div>

            <Row md={1} >
                <Col md={3}>
                    <img className='w-100' src={img} alt="" />
                    <p>Posted on 18 Jun 2015</p>
                    <h3>NAM SODALES TINCIDUNT NUNC</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod molestiae explicabo sapiente nulla aliquid, minus ut pariatur nam magni dignissimos ab sed animi necessitatibus similique voluptatem? Eius neque laboriosam corrupti omnis saepe dolorum nam voluptatibus distinctio eos! Vel dignissimos qui fugiat explicabo totam repudiandae officiis non impedit voluptatibus! Delectus?</p>
                    <Button>Learn more</Button>
                </Col>
                <Col md={9}>
                    <Row md={3}>
                        <Col xs={12}>
                            <img className='w-75' src={img1} alt="" />
                            <p>Posted on 18 Jun 2015</p>
                            <h3>QUISQUE EGESTAS RHONCUS MAURIS</h3>
                        </Col>
                        <Col xs={12}>
                            <img className='w-75' src={img2} alt="" />
                            <p>Posted on 18 Jun 2015</p>
                            <h3>DONEC QUIS EX VEL TINCIDUNT</h3>
                        </Col>
                        <Col xs={12}>
                            <img className='w-75' src={img3} alt="" />
                            <p>Posted on 18 Jun 2015</p>
                            <h3>PRAESENT IACULIS TORTOR VIVERRA</h3>
                        </Col>
                    </Row>
                    <Row md={3}>
                        <Col xs={12}>
                            <img className='w-75' src={img5} alt="" />
                            <p>Posted on 18 Jun 2015</p>
                            <h3>INTEGER SED CONDIMENTUM LACUS</h3>
                        </Col>
                        <Col xs={12}>
                            <img className='w-75' src={img6} alt="" />
                            <p>Posted on 18 Jun 2015</p>
                            <h3>INTEGER AT DIAM GRAVIDA FRINGILLA NIBH</h3>
                        </Col>
                        <Col xs={12}>
                            <img className='w-75' src={img7} alt="" />
                            <p>Posted on 18 Jun 2015</p>
                            <h3>AENEAN ACCUMSAN LIGULA DIAM</h3>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </div>
    );
};

export default Blogs;