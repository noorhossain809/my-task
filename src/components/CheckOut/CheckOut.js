import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './CheckOut.css'
import lock from '../../images/micah-williams-lmFJOx7hPc4-unsplash.jpg'

const CheckOut = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="check_description">
                        <div className="line">
                        <h4 className="id "><strong>Account ID</strong></h4>
                        </div>
                        <div className="line2">
                        <h4 className="Passcode"><strong>Passcode</strong></h4>
                        </div>
                            <Button className="button_checks">Check Balance</Button>
                    </div>
                    <img src={lock} alt="" className="lock"/>
                </div>
            </Container>
        </div>
    );
};

export default CheckOut;