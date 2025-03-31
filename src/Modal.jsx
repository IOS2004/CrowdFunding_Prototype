import React from "react";
import "./App.css"; // We'll add modal styles here

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null; // Don't render anything if the modal isn't open
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      {" "}
      {/* Close on overlay click */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Prevent closing when clicking inside content */}
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close-button" onClick={onClose}>
            × {/* Simple 'X' close symbol */}
          </button>
        </div>
        <div className="modal-body">
          {children} {/* Content passed to the modal */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
