import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="" variant="dark" className='p-0 nav-bg'>
                <Container className='mx-sm-0'>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-center"
                        />{' '}
                        Daily Operational
                    </Navbar.Brand>
                    <p className='my-auto fs-4 text-white d-none d-lg-block'>Berlin Local Time: Monday, 17 Dec 2018 03:41 PM</p>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;