import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  background-color: #757575;
  padding: 15px;
`;

export const Nav = styled.nav`
  //display: flex;
  //justify-content: center;
  //background-color: #757575;
  //padding: 15px;
`;

export const MenuLink = styled(NavLink)`
  text-transform: capitalize;
  text-decoration: none;
  color: #5ac8fa;

  :not(:last-child) {
    margin-right: 15px;
  }
`;
