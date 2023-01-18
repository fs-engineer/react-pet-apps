import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ESCAPE, KEYDOWN, OVERLAY } from "../../constants";
import { Overlay, Paper } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener(KEYDOWN, this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener(KEYDOWN, this.handleClose);
  }

  handleClose = (e) => {
    if (e.code !== ESCAPE) return;

    const { toggleModal } = this.props;
    toggleModal();
  };

  handleClickOverlay = (e) => {
    if (e.target !== e.currentTarget) return;

    const { toggleModal } = this.props;
    toggleModal();
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Overlay data-name={OVERLAY} onClick={this.handleClickOverlay}>
        <Paper>{children && children}</Paper>
      </Overlay>,
      modalRoot
    );
  }
}
