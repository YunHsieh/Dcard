import React, {Fragment}from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
    <Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/scenicSpot">ScenicSpots</Nav.Link>
                <Nav.Link href="/chooseCity">ScenicSpotsCity</Nav.Link>
            </Nav>
        </Navbar>
    </Fragment>
);

export default Header;