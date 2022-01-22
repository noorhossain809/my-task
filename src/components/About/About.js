import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./About.css";
import img_girl from "../../images/business_girl.jpg";
import img_group from "../../images/business_group.jpg";

const About = () => {
  return (
      <div className="about_section">

      <Container className="about-container">
    <div className="mt-5">
      <div className="d-flex mt-5">
        <div className="col-md-8 mt-5">
          <div className="d-flex">
            <Card style={{ width: "15rem" }} className="me-auto awords">
              <Card.Body>
               <h4><strong>100</strong></h4>
                <p>Awords</p>
                
              </Card.Body>
            </Card>
            <img src={img_group} alt="" className="img-fluid group" />
          </div>
          <div className="d-flex">
            <img src={img_girl} alt="" className="img-fluid girl" />
            <Card style={{ width: "15rem" }} className="ms-auto accounts">
              <Card.Body>
               
                <h4><strong>3.5m</strong></h4>
                <p>Accounts</p>
                
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-md-4 ">
          <p className="about">
            <h3><strong>About us</strong></h3>
          </p>
          <h3>
            Not Fast Decisions But <br /> Good{" "}
            <span className="about">Decisions</span> Fast
          </h3>

          <div className="d-flex mt-4">
            <img src="https://img.icons8.com/nolan/60/goal.png" className=""/>
            <div className="">
              <h5 className="about m-3">
                <strong>Our Goals</strong>
              </h5>
              <p className="m-3">
                To be one of the best with customers all over the world.
              </p>
            </div>

            <br />
          </div>

          <div className="d-flex mt-4">
            <img src="https://img.icons8.com/external-filled-outline-geotatah/58/000000/external-eye-internet-addiction-and-digital-detox-filled-outline-filled-outline-geotatah.png" />
            <div className="">
              <h5 className="about m-3">
                <strong>Our Vision</strong>
              </h5>
              <p className="m-3">
                To be one of the best with customers all over the world.
              </p>
            </div>

            <br />
          </div>
          <div className="mt-5">
            <Button className="button_about">More About us</Button>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
};

export default About;
