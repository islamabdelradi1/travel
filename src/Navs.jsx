import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

function Navs() {
    return (
        <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link href="/Home" className='text-3xl font-bold text-slate-700'>Travel</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Packages</Nav.Link>
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Pages</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link"  className=' btns border-none rounded-full font-bold text-[12px] items-center flex justify-center text-white w-28'>BOOK NOW</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Navs