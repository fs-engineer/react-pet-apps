import React from "react";
import { StyledBtn } from "./Button.styled";

const Button = ({ text, textColor = "#000", type, onClick, id }) => (
  <StyledBtn color={textColor} type={type} onClick={onClick} data-id={id}>
    {text}
  </StyledBtn>
);

export default Button;
