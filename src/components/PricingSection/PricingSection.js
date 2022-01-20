import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './PricingSection.css'

const PricingSection = () => {
    return (
        <div className="price_section mt-5 mb-5">
            <div className="text-center mt-3 mb-3">
            <h5>Pricing Plan</h5>
            <h1>Grab Our Mega Deposit Package</h1>
            <p className="description">Check out our Vast range of plans For you.</p>
            </div>
            <Container>
            <div className="d-flex mt-5">
            
            <Card className="price_details">
              <Card.Body>
              
                <div className="border-bottom">
                <h1><strong>8.35%</strong></h1>
                <h6><strong>For a Month</strong></h6>
                </div>
                <h2>Basic</h2>
                <p className="">
                  Maximum Deposit $5,000,000 up to 5 Accounts Available 10 Hours support Free Bank Line
                </p>
                <Button className="button mt-3">Booking Now</Button>
              </Card.Body>
            </Card>
            <Card className="price_details">
              <Card.Body>
              
                <div className="border-bottom">
                <h1><strong>8.35%</strong></h1>
                <h6><strong>For a Month</strong></h6>
                </div>
                <h2>Premium</h2>
                <p className="">
                  Maximum Deposit $5,000,000 up to 5 Accounts Available 10 Hours support Free Bank Line
                </p>
                <Button className="button mt-3">Booking Now</Button>
              </Card.Body>
            </Card>
            <Card className="price_details">
              <Card.Body>
              
                <div className="border-bottom">
                <h1><strong>8.35%</strong></h1>
                <h6><strong>For a Month</strong></h6>
                </div>
                <h2>Advance</h2>
                <p className="">
                  Maximum Deposit $5,000,000 up to 5 Accounts Available 10 Hours support Free Bank Line
                </p>
                <Button className="button mt-3">Booking Now</Button>
              </Card.Body>
            </Card>
          </div>
            </Container>
        </div>
    );
};

export default PricingSection;