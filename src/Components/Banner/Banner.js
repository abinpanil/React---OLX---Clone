import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
import { Container, Row } from 'react-bootstrap';
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <Container>
          <Row>
            <div className="menuBar">
              <div className="categoryMenu">
                <span>ALL CATEGORIES</span>
                <Arrow></Arrow>
              </div>
              {/* <div className="otherQuickOptions">
                <span>Cars</span>
                <span>Motorcy...</span>
                <span>Mobile Ph...</span>
              </div> */}
            </div>
          </Row>
        </Container>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}

export default Banner;
