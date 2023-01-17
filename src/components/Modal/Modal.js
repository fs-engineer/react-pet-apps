import React, { Component } from "react";
import { ESCAPE, KEYDOWN, OVERLAY } from "../../constants";
import { Overlay, Paper } from "./Modal.styled";

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
    const { name } = e.target.dataset;

    if (name !== OVERLAY) return;

    const { toggleModal } = this.props;
    toggleModal();
  };

  render() {
    const { children } = this.props;

    return (
      <Overlay data-name={OVERLAY} onClick={this.handleClickOverlay}>
        <Paper>{children && children}</Paper>
      </Overlay>
    );
  }
}
