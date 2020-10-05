import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  SideContainer,
  SideWrapper,
  Nav,
  NavUl,
  List,
  Link,
} from "./SideComponents.jsx";

const Side = ({ visible, toggle }) => {
  return (
    <SideContainer onClick={toggle} visible={visible}>
      <SideWrapper>
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
      </SideWrapper>
    </SideContainer>
  );
};

export default Side;
