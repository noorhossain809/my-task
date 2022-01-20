import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h4 className="service">
          <strong>Best Services</strong>
        </h4>
        <h2 className="mt-3">
          <strong>
            Entirely Providing The Best{" "}
            <span className="welcome">
              <strong>Services</strong>
            </span>
          </strong>
        </h2>
        <p className="description mt-3 mb-5">
          we offer a wide Range of Services To our Customers these helps to meet
          every Customer's Needs and Expectations.
        </p>
      </div>
      <Container>
        <div className="d-flex gap-5 ">
            
          <Card className="service_details">
            <Card.Body>
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-mobile-banking-ecommerce-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" className="mt-5"/>
              <Card.Title className="mt-3">Mobile Banking</Card.Title>

              <p className="description">
                Gain quick access to tour founds with the mobile banking
                Feature.
              </p>
            </Card.Body>
          </Card>
          <Card className="service_details">
            <Card.Body>
            <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-loan-economic-crisis-wanicon-lineal-wanicon.png" className="mt-5"/>
              <Card.Title className="mt-3">Home Loan</Card.Title>

              <p className="description">
                Get easy and fast Loans Right from the comfort of your home.
              </p>
            </Card.Body>
          </Card>
          <Card className="service_details">
            <Card.Body>
            <img src="https://img.icons8.com/ios-glyphs/60/000000/synchronize.png" className="mt-5"/>
              <Card.Title className="mt-3">Money Exchange</Card.Title>

              <p className="description">
                Gain quick access to tour founds with the mobile banking
                Feature.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex gap-5 mt-5">
        <Card className="service_details">
            <Card.Body>
            <img src="https://img.icons8.com/pastel-glyph/64/000000/bank-card-back-side.png" className="mt-5"/>
              <Card.Title className="mt-3">Your Master Card</Card.Title>

              <p className="description">
                Open an Account with Us and Get your Master Card
              </p>
            </Card.Body>
          </Card>
          <Card className="service_details">
            <Card.Body>
            <img src="https://img.icons8.com/dotty/80/000000/business-card-scanner.png" className="mt-5"/>
              <Card.Title className="mt-3">Online Business</Card.Title>

              <p className="description">
                We support a vast Range of online Support for Businesses
              </p>
            </Card.Body>
          </Card>
          <Card className="service_details">
            <Card.Body>
            <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-loan-due-diligence-icongeek26-linear-colour-icongeek26.png" className="mt-5"/>
              <Card.Title className="mt-3">Others Loan</Card.Title>

              <p className="description">
                Get Account to other types of Loans with interesting interest rates.
              </p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Services;
