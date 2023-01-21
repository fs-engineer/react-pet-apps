import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ESCAPE, KEYDOWN, OVERLAY } from "../../constants";
import { Overlay, Paper } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    function handleClose(e) {
      if (e.code !== ESCAPE) return;

      toggleModal();
    }

    window.addEventListener(KEYDOWN, handleClose);

    return () => {
      window.removeEventListener(KEYDOWN, handleClose);
    };
  }, [toggleModal]);

  function handleClickOverlay(e) {
    if (e.target !== e.currentTarget) return;

    toggleModal();
  }

  return createPortal(
    <Overlay data-name={OVERLAY} onClick={handleClickOverlay}>
      <Paper>{children && children}</Paper>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
