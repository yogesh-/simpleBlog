import React from "react";
const Modal = ({ msg, onClose }) => {
  return (
    <div className="fixed flex flex-col border-2 p-3 px-6 rounded justify-center items-center bg-accent">
      {msg}
      <button className="bg-background px-4 mt-2 rounded" onClick={onClose}>
        OK
      </button>
    </div>
  );
};

export default Modal;
