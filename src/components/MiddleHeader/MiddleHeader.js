import React from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import "./MiddleHeader.css";

const MiddleHeader = () => {
  return (
    <div className="background_image">
      <div className="header_section ">
        <p className="welcome">Welcome to Salem</p>
        <h2>
          Stay In Control
          <br />
          Your <span className="Finances">Finances</span>
        </h2>
        <div className="d-flex gap-5 ">
          <div className="col-md-6 ">
            <Button className="button gap-2">Create account</Button>
          </div>
          <div className="col-md-6">
            <Button className="button gap-2">Check Balance</Button>
          </div>
        </div>

        
      </div>
      <Container className="mb-5">
      <div className="d-flex gap-5">
        
          <Card className="money">
          <img src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-transfer-money-banking-becris-lineal-becris.png" className="w-25 icons_img"/>
            <Card.Body>
              <span>Money Transfer</span>
            </Card.Body>
          </Card>
          <Card className="money">
          <img src="https://img.icons8.com/dotty/80/000000/receipt.png" className="w-25 icons_img"/>
            <Card.Body>
              <Card.Text>Withdrawal</Card.Text>
            </Card.Body>
          </Card>
          <Card className="money">
          <img src="https://img.icons8.com/dotty/80/000000/bank-safe.png" className="w-25 icons_img"/>
            <Card.Body>
              <Card.Text>Bank Deposit</Card.Text>
            </Card.Body>
          </Card>
          <Card className="money">
          <img src="https://img.icons8.com/external-ddara-fill-ddara/64/000000/external-payment-real-estate-ddara-fill-ddara.png" className="w-25 icons_img"/>
            <Card.Body>
              <span>Online payment</span>
            </Card.Body>
          </Card>
          
        </div>
        </Container>
    </div>
  );
};

export default MiddleHeader;
