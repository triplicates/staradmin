import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";

export const Header = styled.header`
  & {
    --color: #000;
  }
  background: var(--color);
  width: 100%;
  height: 62px;
  color: #fff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1170px;
  max-width: calc(100% - 20px);
  height: 100%;
  margin: 0 auto;
`;

export let Logo = styled.div`
  color: #fff;
  font-family: "Roboto";
  font-weight: 300;
  font-size: ${({ type }) => (type === "medium" ? "24px" : "18px")};
`;
export let Nav = styled.nav`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export let NavUl = styled.ul`
  display: flex;
`;

export let List = styled.li`
  margin-right: 20px;
`;

export let Link = styled(LinkS)`
  text-decoration: none;
  color: #fff;
`;
