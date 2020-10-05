import React, { Component } from "react";
import styled from "styled-components";

export const Menu = styled.button`
  background: transparent;
  width: 36px;
  height: 36px;
  display: none;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  & svg {
    fill: #fff;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = ({ toggle }) => {
  return (
    <Menu onClick={toggle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97">
        <path d="M12.03 120.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 264.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z" />
      </svg>
    </Menu>
  );
};

export default MobileMenu;
