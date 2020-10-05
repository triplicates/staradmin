import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  Header,
  HeaderContainer,
  Logo,
  Nav,
  NavUl,
  List,
  Link,
} from "./HeaderElements.jsx";

import MobileMenu from "../MobileMenu/MobileMenu.jsx";

const Heade = ({ toggle }) => {
  return (
    <Header className="header">
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
    </Header>
  );
};

export default Heade;
