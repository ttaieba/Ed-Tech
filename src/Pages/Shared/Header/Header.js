import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../img/logop.png';
import './Header.css';










const Header = () => {

    return (
        <div className=" background-styl">


            <div >



                <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container className="  " >
                        <Navbar.Brand href="#home"><img className="w-25" src={logo} alt="" /> </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">


                            <Nav.Link as={Link} className="text-success" to="/Home">Home</Nav.Link>

                            <Nav.Link as={Link} className="text-success" to="/Products">Courses</Nav.Link>

                            <Nav.Link as={Link}
                                className="text-success" to="/Blogs">Blogs</Nav.Link>

                            <Nav.Link as={Link} className="text-success" to="/About">About</Nav.Link>

                            <Nav.Link as={Link} className="text-success" to="/Donation">Donation</Nav.Link>


                            {/* -------------Need accesss------ */}


                        </Navbar.Collapse>

                    </Container>
                </Navbar>

            </div>
















        </div>
    );
};

export default Header;