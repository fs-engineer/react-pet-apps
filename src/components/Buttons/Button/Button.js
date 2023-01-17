import React, { Component } from "react";
import { StyledBtn } from "./Button.styled";

class Button extends Component {
  render() {
    const { text, textColor = "#000", type, onClick, id } = this.props;

    return (
      <StyledBtn color={textColor} type={type} onClick={onClick} data-id={id}>
        {text}
      </StyledBtn>
    );
  }
}

export default Button;
