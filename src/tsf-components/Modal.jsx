import React from "react";

// Modal component that displays a Bootstrap-styled popup
function Modal({ show, handleClose, title, modalMessage }) {
  return (
    // Conditionally add Bootstrap classes: "show" makes it visible, "d-block" ensures proper display
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }} // Adds a semi-transparent background
    >
         Modal dialog with centered content 
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* Modal Header with title and close button */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            {/* Close button to trigger handleClose function */}
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>

          {/* Modal Body to display the message */}
          <div className="modal-body">
            <p>{modalMessage}</p>
          </div>

          {/* Modal Footer with a Close button */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
