import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import './Navbars.css'

const Navbars = () => {
  return (
    <div className="bg-light">
      <Navbar >
        <Container>
          <img src="" alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto gap-4 align-items-center justify-content-center ">
              <a className="links" href=""><strong>Home</strong></a>
              <a className="links" href=""><strong>Loons</strong></a>
              <a className="links" href=""><strong>About us</strong></a>
              <a className="links" href=""><strong>Services</strong></a>
              <a className="links" href=""><strong>Pages</strong></a>
              <a className="links" href=""><strong>Blog</strong></a>
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
