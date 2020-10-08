import React, { Component, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  Header as Head,
  HeaderContainer,
  Logo,
  Nav,
  NavUl,
  List,
  Link,
} from "./HeaderElements.jsx";

import MobileMenu from "../MobileMenu/MobileMenu.jsx";

const Header = ({ toggle }) => {
  let header = useRef();
  return (
    <Head ref={header} className="header">
      <HeaderContainer>
        <Logo type="medium">Logo</Logo>
        <Router>
          <Nav>
            <NavUl>
              <List>
                <Link to="/">Home</Link>
              </List>
              <List>
                <Link to="/contacts">Contacts</Link>
              </List>
              <List>
                <Link to="/about">About</Link>
              </List>
            </NavUl>
          </Nav>
        </Router>
        <MobileMenu toggle={toggle} />
      </HeaderContainer>
    </Head>
  );
};

export default Header;
