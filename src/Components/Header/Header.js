import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../Store/FirebaseContext';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from 'react-router';
import { Container, Row, Col, NavDropdown } from 'react-bootstrap';

function Header() {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  return (
    <div className="headerParentDiv">
      <Container>
        <Row>
          <div className="headerChildDiv">
            <div style={{paddingRight:"20px"}} className="brandName">
              <OlxLogo></OlxLogo>
            </div>
            <div   className="placeSearch">
              <Search></Search>
              <input type="text" />
              <Arrow></Arrow>
            </div>
            <div style={{paddingLeft:"20px"}}>
              <div  className="productSearch">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Find car,mobile phone and more..."
                  />
                </div>
                <div className="searchAction">
                  <Search color="#ffffff"></Search>
                </div>
              </div>
            </div>
            <div style={{paddingLeft:"20px"}} className="language">
              <span> ENGLISH </span>
              <Arrow></Arrow>
            </div>

            <div className="loginPage">

              {user ?
                <NavDropdown title="User" id="navbarScrollingDropdown">
                  <NavDropdown.Item>Hi <b>{user.displayName}</b> </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <span style={{ cursor: 'pointer' }} onClick={() => {
                      const auth = getAuth();
                      signOut(auth).then(() => {
                        history.push('/login')
                      }).catch((error) => {
                        // An error happened.
                      });
                    }}>Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>

                : <div style={{paddingLeft:"20px"}}>
                  <span style={{ cursor: "pointer" }} onClick={() => history.push('/login')}>Login</span>
                  <hr />
                  </div> }


              
            </div>

            <div style={{paddingLeft:"20px"}} className="sellMenu">
              <SellButton></SellButton>
              <div className="sellMenuContent">
                <SellButtonPlus></SellButtonPlus>
                <span onClick={() => user ? history.push('/create') : history.push('/login')}>SELL</span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
