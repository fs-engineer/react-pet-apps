import React from "react";
import { StyledBtn } from "./Button.styled";

const Button = ({
  text,
  textColor = "#000",
  type,
  onClick,
  id,
  padding,
  disabled,
}) => (
  <StyledBtn
    disabled={disabled}
    padding={padding}
    color={textColor}
    type={type}
    onClick={onClick}
    data-id={id}
  >
    {text}
  </StyledBtn>
);

export default Button;
