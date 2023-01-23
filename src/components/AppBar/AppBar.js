import React from "react";
import { Menu, MenuItem } from "../Menu/Menu.styled";

const menu = [
  { href: "finder", text: "Image Finder" },
  { href: "movies-collection", text: "Movies collection" },
  { href: "phonebook", text: "Phone Book" },
  { href: "videoplayer", text: "Video Player" },
];

export default function AppBar() {
  return (
    <Menu>
      {menu.map(({ href, text }) => (
        <MenuItem key={text} to={href}>
          {text}
        </MenuItem>
      ))}
    </Menu>
  );
}
