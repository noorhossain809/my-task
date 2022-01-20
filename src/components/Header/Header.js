import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFax,
  faPhone,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header__component">
      <div className="top-header ">
        <Container className="d-flex border-bottom align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FontAwesomeIcon icon={faFax} /> <span>Business</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCircle} /> <span>Personal</span>
            </li>
          </ul>
          <div>
            <ul className="list-unstyled d-flex align-items-center gap-4">
              <li>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <a href="1-800-356-6522">1-800-356-6522</a>
              </li>
              <li>
                <a href="">Sign up</a>/<a href="">Login</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
