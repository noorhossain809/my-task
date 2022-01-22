import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbars.css'
import logo from '../../images/logo.png'

const Navbars = () => {
  return (
    <div className="">
      <Navbar >
        <Container>
          <img src={logo} alt="" className="img-fluid"/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto gap-4 align-items-center justify-content-center ">
              <Link to="/home" className="links" ><strong>Home</strong></Link>
              <Link to="/loans" className="links" ><strong>Loans</strong></Link>
              <Link to="/about" className="links" ><strong>About us</strong></Link>
              <Link to="/service" className="links" ><strong>Services</strong></Link>
              <Link to="/page" className="links" ><strong>Pages</strong></Link>
              <Link to="/blog" className="links" ><strong>Blog</strong></Link>
            </Nav>
            <Nav>
            <Button className="button">Apply now</Button>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
