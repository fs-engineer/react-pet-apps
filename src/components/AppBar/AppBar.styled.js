import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MenuItem = styled(NavLink)`
  min-width: 40px;
  padding: 10px;
  border: 1px solid blue;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: blue;
  background-color: white;

  &.active {
    color: white;
    background-color: blue;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: white;
    background-color: blue;
  }

  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  padding: 30px;
`;
