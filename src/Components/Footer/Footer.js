import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <Container>
          <Row>
            <Col md="4">
              <div>
                <div className="heading">
                  <p>POPULAR LOCATIONS</p>
                </div>
                <div className="list">
                  <ul>
                    <li>kolkata</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Pune</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div>
                <div className="heading">
                  <p>ABOUT US</p>
                </div>
                <div className="list">
                  <ul>
                    <li>About OLX Group</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>OLXPeople</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div>
                <div className="heading">
                  <p>OLX</p>
                </div>
                <div className="list">
                  <ul>
                    <li>Help</li>
                    <li>Sitemap</li>
                    <li>Legal & Privacy information</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Container>
          <Row style={{justifyContent:"space-between"}}>
            <div>
              <p> <b>Other Countries</b> Pakistan - South Africa - Indonesia</p>
            </div>
            <div>
              <p>Free Classifieds in India. © 2006-2021 OLX</p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
