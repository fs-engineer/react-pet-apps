import React from "react";
import { Outlet } from "react-router-dom";
import { Menu, MenuItem, MenuLink, MenuList } from "./MovieLayout.styled";

export default function MovieLayout() {
  return (
    <>
      <Menu>
        <MenuList>
          <MenuItem>
            <MenuLink to="/movies-collection">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="movies">Movies</MenuLink>
          </MenuItem>
        </MenuList>
      </Menu>

      <Outlet />
    </>
  );
}
