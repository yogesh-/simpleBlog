import React from "react";
const Modal = ({msg,onClose}) => {
  return (
    <div className="">
      {msg}
      <button onClick={onClose}>OK</button>
    </div>
  );
};

export default Modal;
