import React, { Component, useState, useEffect } from "react";
import "./Home.scss";

import { Main } from "../Styles/styles.jsx";

import Header from "../Header/Header.jsx";
import Side from "../Side/Side.jsx";
import Container from "../Container/Container.jsx";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  let toggle = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        return data.json();
      })
      .then((DataJson) => {
        setTodos(DataJson);
      });
  }, []);
  return (
    <Main>
      <Header toggle={toggle}></Header>
      <Side visible={visible} toggle={toggle} />
      <Container>
        <p>
          {JSON.stringify(todos)}
          <br />
        </p>
      </Container>
    </Main>
  );
};

export default Home;
