import React, { Component, useState, useRef, useEffect } from "react";
import "./Home.scss";

import { Main } from "../Styles/styles.jsx";

import Header from "../Header/Header.jsx";
import Side from "../Side/Side.jsx";
import Container from "../Container/Container.jsx";

const Home = () => {
  const [visible, setVisible] = useState(false);
  let toggle = () => {
    setVisible(!visible);
  };

  return (
    <Main>
      <Header toggle={toggle}></Header>
      <Side visible={visible} toggle={toggle} />
      <Container></Container>
    </Main>
  );
};

export default Home;
