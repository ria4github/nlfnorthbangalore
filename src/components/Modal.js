import React from "react";
import "@reach/dialog/styles.css";
import { Dialog } from "@reach/dialog";

export const Modal = ({ showDialog, close, children, className, id, ref }) => {
  return (
    <Dialog
      aria-label="modal"
      className={className}
      id={id}
      isOpen={showDialog}
      onDismiss={close}
      ref={ref}
    >
      {children}
    </Dialog>
  );
};

//
//
//
//
export const ModalHeader = ({ children, onDismiss }) => {
  return (
    <div className="modal_header">
      {children}
      <button onClick={onDismiss}>Okay</button>
    </div>
  );
};
//
//
//
//

export const ModalBody = ({ children }) => {
  return <div className="modal_body">{children}</div>;
};
//
//
//
//

export const ModalFooter = ({ children }) => {
  return <div className="modal_footer">{children}</div>;
};
