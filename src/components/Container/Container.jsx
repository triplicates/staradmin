import React, { Component, useState } from "react";

import { Container as Cont } from "./ContainerElements.jsx";
const Container = ({ children }) => {
  return <Cont>{children}</Cont>;
};

export default Container;
