import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import ApplePlayStore from '../svg/ApplePlayStore';
import GooglePlayStore from '../svg/GooglePlayStore';
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className="footer__component py-3">
      <Container>
        <div className="footer_main py-5">
          <Row>
            <Col md={3}>
               <div className="social-icons float-md-end p-2">
                 <img src={logo} alt="" className="p-2"/>
                 <p>264 Manon road F1 456 caron <br />Town</p>
                <p>Office No 3457</p>
                <p>info@salem.com</p>
                <p>1-800-356-6522</p>
                <a
                  href="https://facebook.com"
                  className="social_bg facebook-bg"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://iastagram.com"
                  className="social_bg instagram-bg"
                >
                  <AiOutlineInstagram />
                </a>
                <a href="https://youtube.com" className="social_bg youtube-bg">
                  <AiOutlineYoutube />
                </a>
              </div>

              
            </Col>
            <Col md={3}>
              <div className="footer-menu p-2">
                <h5 className="mb-3"> About us </h5>
                <p>Careers</p>
                <p>Blog</p>
                <p>Team</p>
                <p>contact us</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="p-2">
                <h5 className="mb-3"> Our Services </h5>
                <p>
                  Internet Banking
                 
                </p>
                <p> Mobile banking</p>
                <p>Alista Bank Security</p>
                <p>Rates And Charges</p>
              </div>
            </Col>
            <Col md={3}>
            <div className="download-icons p-2">
                <h5 className="mb-3 text-uppercase"> Download Our App</h5>
                <p>Tackle your Banking with our Mobile 
                  <br />
                app and Make Your Life Easy.</p>
                
              <div className="d-flex gap-2">
              <GooglePlayStore />
                
                <ApplePlayStore />
              </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <p className="text-center pt-3">
          &copy; 2022 salem.com Limited. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;