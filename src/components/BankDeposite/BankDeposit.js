import React from "react";
import { Button, Container } from "react-bootstrap";
import "./BankDeposit.css";
import girlImg from "../../images/joel-mott-LaK153ghdig-unsplash.jpg";
import {
  CircularProgressbar as CircularProgressing,
  CircularProgressbarWithChildren,
  buildStyles,
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'




const percentage = 99;
const percentage2 = 9.9;
const percentage3 = 0.0;
const BankDeposit = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="d-flex">
          <div className="balance_description">
            <div className="account_description">
              <h5>
                <strong>Account Balance</strong>
              </h5>
              <h3>Total Income & Account Statistics</h3>
            </div>
            <div className="d-flex w-75 gap-4 m-5">
              <CircularProgressing
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "turquoise",
                  trailColor: "gold",
                })}
              />
              
              <CircularProgressing
                value={percentage2}
                text={`${percentage2}%`}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "turquoise",
                  trailColor: "gold",
                })}
              />
              <CircularProgressing
                value={percentage3}
                text={`${percentage3}%`}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "turquoise",
                  trailColor: "gold",
                })}
              />
              
            </div>
            <div className="d-flex circle_description">
            <h6>Account Balance</h6>
            <h6>Withdrawals</h6>
            <h6>Maintainance</h6>
            </div>
          </div>
          <img src={girlImg} alt="" className="business_girl" />
          <div className="d-flex input_div">
          <FontAwesomeIcon icon={faExclamationTriangle} className="icon_tringle" />  <p className="account_text">Your Account may be Blocked as no activity has taken place for a long <br /> time Plese Login to prevent this from Happening.</p>
        </div>
              <h4 className="balance border-bottom"><strong>$4,500,093.00</strong></h4>
              <br />
              <strong className="credit">Credit Balance</strong>
              <h4 className="balanced border-bottom"><strong>$4,500,093.00</strong></h4>
              <strong className="ledger">Ledger Balance</strong>
              <div className="d-flex btn_gap">
                 <Button className="button1">Withdraw</Button>
                 <Button className="button2">Transfer</Button>
                 </div>
        </div>
        
      </Container>
    </div>
  );
};

export default BankDeposit;
