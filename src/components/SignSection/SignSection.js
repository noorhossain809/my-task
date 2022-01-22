import React from 'react';
import { Button } from 'react-bootstrap';
import './SignSection.css'
import american from '../../images/AmericanBank.jfif'
import americaBank from '../../images/bankAmerica.png'
import dhbBank from '../../images/dhv.jfif'
import usBank from '../../images/US-Bank-Logo.png'
import efiBank from '../../images/unionBank.png'


const SignSection = () => {
    return (
        <div className="sign_container mt-5 mb-5">
            <div className="container_div">
            <div className="sign">
            <h3 className="news_section"><strong>signUp For News Letter</strong></h3>
            <div className="d-flex align-items-center justify-content-center gap-3 ">
                <button className="news_button">Enter Your Email</button>
                <button className="submit">submit</button>
            </div>
            </div>
            <div className="bank_card">
                     <div className="d-flex logo_card align-items-center">
                     <img src={american} alt="" className="img1"/>
                     <img src={americaBank} alt="" className="img2"/>
                     <img src={dhbBank} alt="img-fluid" className="img3 "/>
                     <img src={usBank} alt="" className="img4"/>
                     <img src={efiBank} alt="" className="img5"/>
                     </div>
            </div>
            </div>
            
        </div>
    );
};

export default SignSection;