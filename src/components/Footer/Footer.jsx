import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import logo from "../../assets/vLogo.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <h3 className="mx-1">Copyright © {year} </h3>
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Suresh7447"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/suresh-raja-a23ba528a"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
