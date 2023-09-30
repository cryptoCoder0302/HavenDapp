import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./modals.scss";

const Modals = (props) => {
  useEffect(() => {
   console.log(props); 
  })
  return (
    <Modal
      {...props}
      size={props.size || "sm"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=".modal-content"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>{props.footer}</Modal.Footer>
    </Modal>
  );
};

export default Modals;
