import styled from "styled-components";
import { Link as Links } from "react-router-dom";
export let SideContainer = styled.div`
  background: #000;
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;

export let SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1170px;
  max-width: calc(100% - 40px);
  height: 100%;
  margin: 0 auto;
`;

export let Nav = styled.nav`
  display: flex;
  align-self: center;
`;

export let NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export let List = styled.li`
  margin-bottom: 20px;
`;

export let Link = styled(Links)`
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  transition: color 0.4s;
  text-decoration: none;
  &:hover {
    color: silver;
  }
`;
